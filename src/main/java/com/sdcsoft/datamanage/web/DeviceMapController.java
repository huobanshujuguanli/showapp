package com.sdcsoft.datamanage.web;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sdcsoft.datamanage.mapper.CustomerMapper;
import com.sdcsoft.datamanage.mapper.DeviceMapMapper;
import com.sdcsoft.datamanage.model.Customer;
import com.sdcsoft.datamanage.model.DeviceMap;
import com.sdcsoft.datamanage.utils.Result;
import com.sdcsoft.datamanage.utils.ResultGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/deviceMap")
public class DeviceMapController {
    
    @Autowired
    private DeviceMapMapper deviceMapMapper;

    /**
     * 查询展示设备列表-分页
     * @param deviceMap
     * @param pageNum
     * @param pageSize
     * @return
     */
    @GetMapping(value = "/devicemaplistbyconditionandpage")
    public Result getDeviceMapListByConditionAndPage(DeviceMap deviceMap, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return ResultGenerator.genSuccessResult( new PageInfo(deviceMapMapper.getDeviceMapListByCondition(deviceMap)));
    }


    /**
     * 编辑展示设备
     * @param deviceMap
     * @return
     */
    @PostMapping("/editdevicemap")
    public Result editDeviceMap(@RequestBody DeviceMap deviceMap){
        if(deviceMap.getId()!=null){
            deviceMapMapper.updateDeviceMap(deviceMap);
        }else{
            deviceMapMapper.insertDeviceMap(deviceMap);
        }
        return ResultGenerator.genSuccessResult();
    }

    /**
     * 删除展示设备
     * @param id
     * @return
     */
    @PostMapping(value = "/deletedevicemapbyid")
    public Result deleteDeviceMapById(@RequestParam int id){
        deviceMapMapper.deleteDeviceMapById(id);
        return ResultGenerator.genSuccessResult();
    }
}
