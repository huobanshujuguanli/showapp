webpackJsonp([9],{BG9E:function(e,t){},CbwA:function(e,t,i){var a=i("kM2E"),r=i("hg2J"),l=i("TcQ7"),o=i("LKZe"),n=i("fBQ2");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,i,a=l(e),s=o.f,c=r(a),u={},d=0;c.length>d;)void 0!==(i=s(a,t=c[d++]))&&n(u,t,i);return u}})},K9Gk:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("woOf"),r=i.n(a),l=(i("jJmG"),i("Zx67"),i("OvRC"),i("xT6B"));function o(e,t){for(var i=e.toString().length;i<t;)e="0"+e,i++;return e}var n=i("xV2B"),s=i("hgDm"),c=i("OGkF"),u=i("b7kB");var d={data:function(){var e=function(e,t,i){t?/^[0-9]\d{9}$/.test(t)||i(new Error("格式不正确（10位数的正整数，包括0）")):i(new Error("编号不能为空")),i()};return{list:null,listQuery:{total:50,pageNum:1,pageSize:5,deviceSuffix:null,customerNo:null,enterpriseId:null,status:null,runStatus:null,saleDatetime:null},enterpriseOption:[],customerOption:[],isOrNotArray:[{value:1,label:"是"},{value:0,label:"否"}],deviceTypeOption:[],textMap:{update:"编辑",create:"新增"},dialogStatus:"",dialogFormVisible:!1,deviceFormData:{id:"",enterpriseId:"",deviceType:"",status:0,runStatus:0,importDatetime:Object(l.a)(new Date,"yyyy-MM-dd hh:mm"),saleDatetime:"",startDeviceSuffix:"",endDeviceSuffix:""},rules:{enterpriseId:[{required:!0,trigger:"blur",validator:function(e,t,i){t?i():i(new Error("所属企业不能为空"))}}],deviceType:[{required:!0,trigger:"blur",validator:function(e,t,i){t||i(new Error("设备类型不能为空")),i()}}],importDatetime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],startDeviceSuffix:[{required:!0,trigger:"blur",validator:e}],endDeviceSuffix:[{required:!0,trigger:"blur",validator:e}]},dialogQRCodeFormVisible:!1,qRCodeFormData:{startSuffix:"",endSuffix:""},qRCodeRules:{startSuffix:[{required:!0,message:"开始编号不能为空",trigger:"blur"}],endSuffix:[{required:!0,message:"结束编号不能为空",trigger:"blur"}]},dialogEncryptionFormVisible:!1,encryptionFormData:{encryptionDeviceStr:""},listLoading:!1}},filters:{statusFilterLabel:function(e,t){return t.filter(function(t){return t.value==e})}},created:function(){this.getList(),this.initEnterpriseList(),this.initCustomerList(),this.initDeviceTypeList()},methods:{initEnterpriseList:function(){var e=this,t=[];Object(s.c)().then(function(i){i.data.data.forEach(function(e){t.push({value:e.id,label:e.enterpriseName})}),e.enterpriseOption=t})},initCustomerList:function(){var e=this,t=[];Object(c.b)(2).then(function(i){i.data.data.forEach(function(e){t.push({value:e.code+"",label:e.name})}),e.customerOption=t})},initDeviceTypeList:function(){var e=this,t=[];Object(u.a)().then(function(i){i.data.data.forEach(function(e){t.push({value:e.deviceType,label:e.deviceType})}),e.deviceTypeOption=t})},openTableMenu:function(e,t){this.$refs.menuContext.openTableMenu(e,t)},handleFilter:function(){this.listQuery.pageNum=1,this.getList()},getList:function(){var e=this;this.listLoading=!0,Object(n.c)(this.listQuery).then(function(t){var i=t.data.data;e.list=i.list,e.listQuery.total=i.total,e.listQuery.pageNum=i.pageNum,e.listQuery.pageSize=i.pageSize,e.listLoading=!1})},resetTemp:function(){this.deviceFormData={id:"",enterpriseId:"",deviceType:"",status:0,runStatus:0,importDatetime:Object(l.a)(new Date,"yyyy-MM-dd hh:mm"),startDeviceSuffix:"",endDeviceSuffix:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.deviceFormData.clearValidate()})},handleEncryptionDevice:function(e){var t=this;this.encryptionFormData=r()({},e),this.dialogEncryptionFormVisible=!0,this.$nextTick(function(){t.$refs.encryptionForm.clearValidate()})},handleGenerateQRCode:function(){var e=this;this.qRCodeFormData.startSuffix="",this.qRCodeFormData.endSuffix="",this.dialogQRCodeFormVisible=!0,this.$nextTick(function(){e.$refs.qRCodeForm.clearValidate()})},handleUpdate:function(e){var t=this;this.deviceFormData=r()({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.deviceFormData.clearValidate()})},encryptionDevice:function(){var e=this;if(this.encryptionFormData.encryptionDeviceStr){var t=[];this.encryptionFormData.encryptionDeviceStr.split("\n").filter(function(e){return e}).forEach(function(e){t.push({deviceSuffix:e.substring(0,e.indexOf("-")),deviceNo:e.substring(e.indexOf("-")+1,e.length)})}),Object(n.f)(t).then(function(t){e.dialogEncryptionFormVisible=!1,e.$message({message:t.data.msg,type:"success"}),e.getList()})}},generateQRCode:function(){var e=this;this.$refs.qRCodeForm.validate(function(t){if(!t)return!1;e.dialogQRCodeFormVisible=!1,window.open(Object({NODE_ENV:"production"}).BASE_API+"/device/generateqrcode?startSuffix="+e.qRCodeFormData.startSuffix+"&endSuffix="+e.qRCodeFormData.endSuffix,"_blank")})},calculateStartSuffixAndEndSuffix:function(){this.deviceFormData.startDeviceSuffix&&10==this.deviceFormData.startDeviceSuffix.length&&(this.deviceFormData.endDeviceSuffix=this.deviceFormData.startDeviceSuffix.substring(0,5)+o(Number(this.deviceFormData.startDeviceSuffix.substring(5,10))+50,5))},insertManyData:function(){var e=this;this.$refs.deviceFormData.validate(function(t){if(!t)return!1;var i=e.deviceFormData.startDeviceSuffix.substring(0,5),a=Number(e.deviceFormData.startDeviceSuffix.substring(5,10)),l=Number(e.deviceFormData.endDeviceSuffix.substring(5,10));delete e.deviceFormData.startDeviceSuffix,delete e.deviceFormData.endDeviceSuffix;for(var s=[];a<=l;){var c=r()({},e.deviceFormData);c.areaId=100101001,c.manufacturerId=1,c.devicePrefix=1,c.deviceSuffix=i+o(a,5),c.deviceNo=i+o(a,5),s.push(c),a++}Object(n.e)(s).then(function(t){e.dialogFormVisible=!1,e.$message({message:t.data.msg,type:"success"}),e.getList()})})},updateData:function(){var e=this;this.$refs.deviceFormData.validate(function(t){Object(n.b)(e.deviceFormData).then(function(t){e.dialogFormVisible=!1,e.$message({message:"成功",type:"success"}),e.getList()})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)(e.id).then(function(i){t.$message({message:"删除成功",type:"success"}),t.list.splice(t.list.indexOf(e),1)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-row",{staticClass:"app-query"},[i("el-row",[i("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"所属企业"},model:{value:e.listQuery.enterpriseId,callback:function(t){e.$set(e.listQuery,"enterpriseId",t)},expression:"listQuery.enterpriseId"}},e._l(e.enterpriseOption,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"所属客户"},model:{value:e.listQuery.customerNo,callback:function(t){e.$set(e.listQuery,"customerNo",t)},expression:"listQuery.customerNo"}},e._l(e.customerOption,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"是否销售"},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.isOrNotArray,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),i("el-row",[i("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"是否运行"},model:{value:e.listQuery.runStatus,callback:function(t){e.$set(e.listQuery,"runStatus",t)},expression:"listQuery.runStatus"}},e._l(e.isOrNotArray,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),i("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"设备编号"},model:{value:e.listQuery.deviceSuffix,callback:function(t){e.$set(e.listQuery,"deviceSuffix",t)},expression:"listQuery.deviceSuffix"}}),e._v(" "),i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date","value-format":"yyyy-MM-dd hh:mm:ss",placeholder:"销售时间"},model:{value:e.listQuery.saleDatetime,callback:function(t){e.$set(e.listQuery,"saleDatetime",t)},expression:"listQuery.saleDatetime"}}),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")]),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("新增")]),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleEncryptionDevice}},[e._v("加密")]),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.handleGenerateQRCode}},[e._v("生成二维码")])],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"120%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""},on:{"row-contextmenu":e.openTableMenu}},[i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"设备编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.deviceSuffix))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"所属客户"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.customerOption,function(a){return t.row.deviceSuffix.substring(0,5)==a.value?i("span",[e._v(e._s(a.label))]):e._e()})}}])}),e._v(" "),i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"设备类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.deviceType))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"是否销售"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("statusFilterLabel")(t.row.status,e.isOrNotArray)[0].label))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"是否运行"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("statusFilterLabel")(t.row.runStatus,e.isOrNotArray)[0].label)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"销售时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(null==t.row.saleDatetime?"无":t.row.saleDatetime))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"left","show-overflow-tooltip":!0,label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.importDatetime))])]}}])})],1),e._v(" "),i("menu-context",{ref:"menuContext"},[i("menu-context-item",{on:{click:e.handleUpdate}},[e._v("编辑")]),e._v(" "),i("menu-context-item",{on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"","current-page":e.listQuery.pageNum,"page-sizes":[5,10,15,20],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.listQuery.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),i("div",{staticClass:"el-dialog-device"},[i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"40%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"deviceFormData",staticStyle:{width:"90%","margin-left":"15px"},attrs:{rules:e.rules,model:e.deviceFormData,"label-position":"right","label-width":"80px"}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"所属企业",prop:"enterpriseId"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:e.deviceFormData.enterpriseId,callback:function(t){e.$set(e.deviceFormData,"enterpriseId",t)},expression:"deviceFormData.enterpriseId"}},e._l(e.enterpriseOption,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"设备类型",prop:"deviceType"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},model:{value:e.deviceFormData.deviceType,callback:function(t){e.$set(e.deviceFormData,"deviceType",t)},expression:"deviceFormData.deviceType"}},e._l(e.deviceTypeOption,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否销售"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},model:{value:e.deviceFormData.status,callback:function(t){e.$set(e.deviceFormData,"status",t)},expression:"deviceFormData.status"}},e._l(e.isOrNotArray,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否运行"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},model:{value:e.deviceFormData.runStatus,callback:function(t){e.$set(e.deviceFormData,"runStatus",t)},expression:"deviceFormData.runStatus"}},e._l(e.isOrNotArray,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"创建时间",prop:"importDatetime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd hh:mm","default-time":"00:00"},model:{value:e.deviceFormData.importDatetime,callback:function(t){e.$set(e.deviceFormData,"importDatetime",t)},expression:"deviceFormData.importDatetime"}})],1)],1),e._v(" "),e.deviceFormData.id?i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"售出时间"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd hh:mm","default-time":"00:00"},model:{value:e.deviceFormData.saleDatetime,callback:function(t){e.$set(e.deviceFormData,"saleDatetime",t)},expression:"deviceFormData.saleDatetime"}})],1)],1):e._e()],1),e._v(" "),""==e.deviceFormData.id?i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"开始编号",prop:"startDeviceSuffix"}},[i("el-input",{on:{change:e.calculateStartSuffixAndEndSuffix},model:{value:e.deviceFormData.startDeviceSuffix,callback:function(t){e.$set(e.deviceFormData,"startDeviceSuffix",t)},expression:"deviceFormData.startDeviceSuffix"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"结束编号",prop:"endDeviceSuffix"}},[i("el-input",{model:{value:e.deviceFormData.endDeviceSuffix,callback:function(t){e.$set(e.deviceFormData,"endDeviceSuffix",t)},expression:"deviceFormData.endDeviceSuffix"}})],1)],1)],1):e._e()],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),e.deviceFormData.id?i("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("确认")]):i("el-button",{attrs:{type:"primary"},on:{click:e.insertManyData}},[e._v("确认")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"生成二维码",visible:e.dialogQRCodeFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogQRCodeFormVisible=t}}},[i("el-form",{ref:"qRCodeForm",staticStyle:{width:"80%","margin-left":"30px"},attrs:{rules:e.qRCodeRules,model:e.qRCodeFormData,"label-position":"right","label-width":"80px"}},[i("el-form-item",{attrs:{label:"开始编号",prop:"startSuffix"}},[i("el-input",{model:{value:e.qRCodeFormData.startSuffix,callback:function(t){e.$set(e.qRCodeFormData,"startSuffix",t)},expression:"qRCodeFormData.startSuffix"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"结束编号",prop:"endSuffix"}},[i("el-input",{model:{value:e.qRCodeFormData.endSuffix,callback:function(t){e.$set(e.qRCodeFormData,"endSuffix",t)},expression:"qRCodeFormData.endSuffix"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogQRCodeFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.generateQRCode}},[e._v("生成")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"加密",visible:e.dialogEncryptionFormVisible,width:"25%"},on:{"update:visible":function(t){e.dialogEncryptionFormVisible=t}}},[i("el-form",{ref:"encryptionForm",staticStyle:{width:"90%"},attrs:{model:e.encryptionFormData,"label-position":"right","label-width":"50px"}},[i("el-form-item",{attrs:{label:"内容"}},[i("el-input",{attrs:{type:"textarea",rows:12},model:{value:e.encryptionFormData.encryptionDeviceStr,callback:function(t){e.$set(e.encryptionFormData,"encryptionDeviceStr",t)},expression:"encryptionFormData.encryptionDeviceStr"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogEncryptionFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.encryptionDevice}},[e._v("确认")])],1)],1)],1)],1)},staticRenderFns:[]};var v=i("VU/8")(d,f,!1,function(e){i("BG9E")},null,null);t.default=v.exports},Kh5d:function(e,t,i){var a=i("sB3e"),r=i("PzxK");i("uqUo")("getPrototypeOf",function(){return function(e){return r(a(e))}})},OGkF:function(e,t,i){"use strict";t.a=function(e){return Object(a.a)({url:"/tokendict/getcustomerlistbyenterpriseid",method:"get",params:{enterpriseId:e}})},t.b=function(e){return Object(a.a)({url:"/tokendict/getcustomerorenterpriselist",method:"get",params:{organizationType:e}})};var a=i("vLgD")},OvRC:function(e,t,i){e.exports={default:i("oM7Q"),__esModule:!0}},Zx67:function(e,t,i){e.exports={default:i("fS6E"),__esModule:!0}},b7kB:function(e,t,i){"use strict";t.a=function(){return Object(a.a)({url:"/devicetype/getdevicetypelist",method:"get"})};var a=i("vLgD")},fS6E:function(e,t,i){i("Kh5d"),e.exports=i("FeBl").Object.getPrototypeOf},hg2J:function(e,t,i){var a=i("n0T6"),r=i("1kS7"),l=i("77Pl"),o=i("7KvD").Reflect;e.exports=o&&o.ownKeys||function(e){var t=a.f(l(e)),i=r.f;return i?t.concat(i(e)):t}},jJmG:function(e,t,i){e.exports={default:i("kXEU"),__esModule:!0}},kXEU:function(e,t,i){i("CbwA"),e.exports=i("FeBl").Object.getOwnPropertyDescriptors},oM7Q:function(e,t,i){i("sF+V");var a=i("FeBl").Object;e.exports=function(e,t){return a.create(e,t)}},"sF+V":function(e,t,i){var a=i("kM2E");a(a.S,"Object",{create:i("Yobk")})},xV2B:function(e,t,i){"use strict";t.c=function(e){return Object(a.a)({url:"/device/devicelistbyconditionandpage",method:"get",params:e})},t.d=function(e){return Object(a.a)({url:"/device/getdevicelistbyenterpriseidandpage",method:"get",params:e})},t.e=function(e){return Object(a.a)({url:"/device/insertmanydevice",method:"post",data:e})},t.f=function(e){return Object(a.a)({url:"/device/updatemanydeviceno",method:"post",data:e})},t.b=function(e){return Object(a.a)({url:"/device/editdevice",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/device/deletedevicebyid",method:"post",params:{id:e}})};var a=i("vLgD")}});
//# sourceMappingURL=9.dcc7d0de7e0b6e6edc1d.js.map