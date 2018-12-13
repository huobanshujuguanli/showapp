package com.sdcsoft.datamanage.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.sdcsoft.datamanage.client.TemplateClient;
import feign.Feign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class ScheduledTasks {

    @Autowired
    DeviceEhcacheUtil deviceEhcacheUtil;
    private static String deviceUrl;
    @Value("${com.sdcsoft.datamanage.onlineurl}")
    public void setDeviceUrl(String deviceUrl) {
        this.deviceUrl = deviceUrl;
    }
    //3000000
    @Scheduled(fixedRate =1000)
    public void reportCurrentTime() {
        TemplateClient client = Feign.builder().target(TemplateClient.class, String.format("%s%s",deviceUrl,"/device/online"));
        List onlineList= JSONArray.parseArray(client.get());
        for(int i=0;i<onlineList.size();i++){
            deviceEhcacheUtil.putData((String)onlineList.get(i),null);
        }
    }
}


