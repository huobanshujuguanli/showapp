webpackJsonp([6],{STSY:function(e,t,r){"use strict";t.e=function(e){return Object(o.a)({url:"/role/rolelistbyconditionandpage",method:"get",params:e})},t.d=function(e){return Object(o.a)({url:"/role/rolelistbycondition",method:"get",params:e})},t.f=function(e){return Object(o.a)({url:"/role/rolelistbyemployeeid",method:"get",params:{employeeId:e}})},t.b=function(e){return Object(o.a)({url:"/role/editrole",method:"post",data:e})},t.c=function(e){return Object(o.a)({url:"/role/editroleresource",method:"post",data:e})},t.a=function(e){return Object(o.a)({url:"/role/deleterolebyid",method:"post",params:{id:e}})};var o=r("vLgD")},scgI:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("woOf"),a=r.n(o),i=r("STSY"),l=r("xJrl"),s={data:function(){return{list:null,listQuery:{total:50,pageNum:1,pageSize:5,roleName:null},textMap:{update:"编辑",create:"新增"},dialogStatus:"",dialogFormVisible:!1,roleFormData:{roleId:"",roleName:"",roleDesc:""},rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},dialogResourceFormVisible:!1,resourceFormData:{idArray:[],userId:"",roleId:"",resourceList:[],defaultProps:{children:"children",label:"label"}},listLoading:!0}},created:function(){this.getList()},methods:{openTableMenu:function(e,t){this.$refs.menuContext.openTableMenu(e,t)},handleFilter:function(){this.listQuery.pageNum=1,this.getList()},getList:function(){var e=this;this.listLoading=!0,Object(i.e)(this.listQuery).then(function(t){var r=t.data.data;e.list=r.list,e.listQuery.total=r.total,e.listQuery.pageNum=r.pageNum,e.listQuery.pageSize=r.pageSize,e.listLoading=!1})},resetTemp:function(){this.roleFormData={roleId:"",roleName:"",roleDesc:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.roleForm.clearValidate()})},handleUpdate:function(e){var t=this;this.roleFormData=a()({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.roleForm.clearValidate()})},editData:function(){var e=this;this.$refs.roleForm.validate(function(t){if(!t)return!1;Object(i.b)(e.roleFormData).then(function(t){e.dialogFormVisible=!1,e.$message({message:"成功",type:"success"}),e.getList()})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)(e.roleId).then(function(r){t.$message({message:"删除成功",type:"success"}),t.list.splice(t.list.indexOf(e),1)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},handleEditResource:function(e){var t=this;this.resourceFormData.idArray=[],Object(l.d)().then(function(r){var o=r.data.data,a=t.filterFirstLevelResource(o,0);return a.forEach(function(e){e.children=t.getChildResourceList(e.id,o)}),t.resourceFormData.resourceList=a,Object(l.c)(e.roleId)}).then(function(r){var o=[];r.data.data.forEach(function(e){o.push(e.id)}),t.resourceFormData.roleId=e.roleId,t.resourceFormData.idArray=o,t.dialogResourceFormVisible=!0,t.$nextTick(function(){t.$refs.resourceForm.clearValidate()})})},editResource:function(){var e=this,t=[],r=[];this.$refs.tree.getCheckedNodes().forEach(function(e){-1==t.indexOf(e.parentId)&&t.push(e.parentId),r.push(e.id)});var o=[];t.concat(r).forEach(function(e){-1==o.indexOf(e)&&0!=e&&o.push(e)});var a=[];o.forEach(function(t){a.push({roleId:e.resourceFormData.roleId,resourceId:t})}),Object(i.c)({roleId:this.resourceFormData.roleId,roleResourceList:a}).then(function(t){e.dialogResourceFormVisible=!1,e.$message({message:"分配成功",type:"success"}),e.getList()})},filterFirstLevelResource:function(e,t){var r=e.filter(function(e){return e.parentId==t});return this.reGenerateResourceTreeData(r)},getChildResourceList:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=[];return r.forEach(function(t){e==t.parentId&&o.push(t)}),(o=this.reGenerateResourceTreeData(o)).forEach(function(e){e.children=t.getChildResourceList(e.id,r)}),o},reGenerateResourceTreeData:function(e){var t=[];return e.forEach(function(e){t.push({id:e.id,parentId:e.parentId,label:e.name})}),t}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container role-container"},[r("el-row",{staticClass:"app-query"},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"角色名称"},model:{value:e.listQuery.roleName,callback:function(t){e.$set(e.listQuery,"roleName",t)},expression:"listQuery.roleName"}}),e._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")]),e._v(" "),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("新增")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"120%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""},on:{"row-contextmenu":e.openTableMenu}},[r("el-table-column",{attrs:{"show-overflow-tooltip":!0,align:"left",label:"角色名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.roleName))])]}}])}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":!0,align:"left",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.roleDesc))])]}}])})],1),e._v(" "),r("menu-context",{ref:"menuContext"},[r("menu-context-item",{on:{click:e.handleUpdate}},[e._v("编辑")]),e._v(" "),r("menu-context-item",{on:{click:e.handleEditResource}},[e._v("分配权限")]),e._v(" "),r("menu-context-item",{on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),r("div",{staticClass:"pagination-container"},[r("el-pagination",{attrs:{background:"","current-page":e.listQuery.pageNum,"page-sizes":[5,10,15,20],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.listQuery.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),r("div",{staticClass:"el-dialog-role"},[r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"roleForm",staticStyle:{width:"70%","margin-left":"50px"},attrs:{rules:e.rules,model:e.roleFormData,"label-position":"right","label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.roleFormData.roleName,callback:function(t){e.$set(e.roleFormData,"roleName",t)},expression:"roleFormData.roleName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{model:{value:e.roleFormData.roleDesc,callback:function(t){e.$set(e.roleFormData,"roleDesc",t)},expression:"roleFormData.roleDesc"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.editData}},[e._v("确认")])],1)],1)],1),e._v(" "),r("div",{staticClass:"el-dialog-resource"},[r("el-dialog",{attrs:{title:"分配权限",visible:e.dialogResourceFormVisible,width:"15%"},on:{"update:visible":function(t){e.dialogResourceFormVisible=t}}},[r("el-form",{ref:"resourceForm",staticStyle:{width:"70%","margin-left":"30px"},attrs:{rules:e.rules,model:e.resourceFormData,"label-position":"right","label-width":"80px"}},[r("el-tree",{ref:"tree",attrs:{data:e.resourceFormData.resourceList,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.resourceFormData.defaultProps,"default-checked-keys":e.resourceFormData.idArray}})],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogResourceFormVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.editResource}},[e._v("确认")])],1)],1)],1)],1)},staticRenderFns:[]},c=r("VU/8")(s,n,!1,null,null,null);t.default=c.exports},xJrl:function(e,t,r){"use strict";t.d=function(e){return Object(o.a)({url:"/resource/resourcelistbycondition",method:"get",params:e})},t.c=function(e){return Object(o.a)({url:"/resource/resourceidlistbyroleid",method:"get",params:{roleId:e}})},t.b=function(e){return Object(o.a)({url:"/resource/editresource",method:"post",data:e})},t.a=function(e){return Object(o.a)({url:"/resource/deleteresourcebyid",method:"post",params:{id:e}})};var o=r("vLgD")}});
//# sourceMappingURL=6.6baea919c72666458f60.js.map