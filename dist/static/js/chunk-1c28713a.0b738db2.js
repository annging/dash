(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c28713a"],{"219c":function(e,t,a){},"3c20":function(e,t,a){},"456d":function(e,t,a){var l=a("4bf8"),r=a("0d58");a("5eda")("keys",(function(){return function(e){return r(l(e))}}))},"4da7":function(e,t,a){"use strict";var l=a("219c"),r=a.n(l);r.a},"5eda":function(e,t,a){var l=a("5ca1"),r=a("8378"),s=a("79e5");e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),l(l.S+l.F*s((function(){a(1)})),"Object",o)}},"627e":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-content"},[a("div",{staticClass:"left-container"},[a("el-menu",{staticStyle:{"margin-bottom":"20px"},attrs:{"default-active":"1",mode:"horizontal",router:""}},[a("el-menu-item",{attrs:{index:"1",route:{path:"/activity/fangan/create/"}}},[e._v("添加方案")])],1),e._v(" "),a("el-row",[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.schemeForm,"label-width":"100px",size:"small"}},[a("el-form-item",{attrs:{label:"方案标题"}},[a("el-input",{model:{value:e.schemeForm.title,callback:function(t){e.$set(e.schemeForm,"title",t)},expression:"schemeForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"封面图"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{multiple:!1,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleSuccess,"on-preview":e.handlePicturePreview,"on-remove":e.handleRemove}},[e.schemeForm.imgUrl?a("img",{staticClass:"avatar",attrs:{src:e.schemeForm.imgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,"modal-append-to-body":!1,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.schemeForm.imgUrl,alt:""}})])],1),e._v(" "),a("el-form-item",{attrs:{label:"标签"}},[a("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择方案标签"},model:{value:e.schemeForm.label,callback:function(t){e.$set(e.schemeForm,"label",t)},expression:"schemeForm.label"}},e._l(e.labelOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"方案介绍"}},[a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.schemeForm.explain,callback:function(t){e.$set(e.schemeForm,"explain",t)},expression:"schemeForm.explain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"功能亮点"}},[a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.schemeForm.lightSpot,callback:function(t){e.$set(e.schemeForm,"lightSpot",t)},expression:"schemeForm.lightSpot"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营销玩法"}},[a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.schemeForm.gameplay,callback:function(t){e.$set(e.schemeForm,"gameplay",t)},expression:"schemeForm.gameplay"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动类型"}},[a("el-select",{attrs:{placeholder:"请选择活动类型"},model:{value:e.schemeForm.type,callback:function(t){e.$set(e.schemeForm,"type",t)},expression:"schemeForm.type"}},e._l(e.activityTypes,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动行业"}},[a("el-select",{attrs:{placeholder:"请选择行业"},model:{value:e.schemeForm.industry,callback:function(t){e.$set(e.schemeForm,"industry",t)},expression:"schemeForm.industry"}},e._l(e.industrys,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"会员门槛"}},[a("el-select",{attrs:{placeholder:"请选择会员等级"},model:{value:e.schemeForm.vipLevel,callback:function(t){e.$set(e.schemeForm,"vipLevel",t)},expression:"schemeForm.vipLevel"}},e._l(e.vipLevels,(function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"虚拟浏览量"}},[a("el-input",{model:{value:e.schemeForm.browse,callback:function(t){e.$set(e.schemeForm,"browse",t)},expression:"schemeForm.browse"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"虚拟参与量"}},[a("el-input",{model:{value:e.schemeForm.receive,callback:function(t){e.$set(e.schemeForm,"receive",t)},expression:"schemeForm.receive"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否推荐"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":"0"},model:{value:e.schemeForm.isRecommend,callback:function(t){e.$set(e.schemeForm,"isRecommend",t)},expression:"schemeForm.isRecommend"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即添加")]),e._v(" "),a("el-button",[e._v("取消")])],1)],1)],1)],1)])},r=[],s=a("ca41"),o={title:"",imgUrl:"",type:"",industry:"",explain:"",lightSpot:"",gameplay:"",browse:0,receive:0,vipLevel:"",isRecommend:0,label:"",id:""},i={name:"CreateScheme",data:function(){return{schemeForm:Object.assign({},o),activityTypes:[{key:1,label:"报名"},{key:2,label:"抽奖"},{key:3,label:"海报"},{key:4,label:"砍价"},{key:5,label:"秒杀"},{key:6,label:"拼团"},{key:7,label:"投票"},{key:8,label:"预约"},{key:9,label:"助力"},{key:10,label:"代金券"},{key:11,label:"折扣券"},{key:12,label:"兑换券"},{key:13,label:"体验券"}],industrys:[{key:1,label:"教育"},{key:2,label:"体育"},{key:3,label:"珠宝"}],vipLevels:[{key:1,label:"普通会员"}],rules:{title:[{required:!0,message:"请输入方案标题",trigger:"blur"},{min:3,max:50,message:"长度在 3 到 50 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],type:[{required:!0,message:"请选择一个活动类型",trigger:"change"}],industry:[{required:!0,message:"请选择一个行业",trigger:"change"}],desc:[{required:!0,message:"请填写方案介绍",trigger:"blur"}],cover:[{required:!0,message:"请上传封面图",trigger:"change"}]},dialogImageUrl:"",dialogVisible:!1,labelOptions:[{value:"老带新",label:"老带新"},{value:"裂变",label:"裂变"}]}},methods:{onSubmit:function(){var e=this;console.log("submit!"),Object(s["a"])(this.schemeForm).then((function(t){1*t.code==200?(e.$message({message:"创建方案成功",type:"success"}),setTimeout((function(){e.$router.push({path:"/activity/fangan/index"})}),1500)):e.$message({message:t.msg,type:"error"})}))},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handleRemove:function(e,t){console.log(e,t)},handleSuccess:function(e,t){this.schemeForm.imgUrl=URL.createObjectURL(t.raw)},handlePicturePreview:function(){this.dialogVisible=!0}}},n=i,c=(a("be62"),a("4da7"),a("2877")),m=Object(c["a"])(n,l,r,!1,null,"7d5066c1",null);t["default"]=m.exports},be62:function(e,t,a){"use strict";var l=a("3c20"),r=a.n(l);r.a},ca41:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return n})),a.d(t,"f",(function(){return c}));a("ac6a"),a("456d");var l=a("b775");function r(e){return Object(l["a"])({url:"/api/activity/list",method:"get",params:e})}function s(e,t){return Object(l["a"])({url:"http://hesu8a.natappfree.cc/system/activity/getActivityScheme?size="+e.size+"&current="+e.current,method:"post",data:t,headers:{"Content-Type":"application/json"},transformRequest:[function(e,t){for(var a in e)""===e[a]&&delete e[a];return e=JSON.stringify(e),e}]})}function o(e){return Object(l["a"])({url:"http://hesu8a.natappfree.cc/system/activity/addActivityScheme",method:"post",data:e,transformRequest:[function(e){console.log(e);var t=Object.keys(e).length,a=0,l="";for(var r in e)l+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]),a<t-1&&(l+="&",a++);return l}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function i(e){return Object(l["a"])({url:"http://hesu8a.natappfree.cc/system/activity/getActivitySchemeInfo",method:"get",params:{schemeId:e}})}function n(e){return Object(l["a"])({url:"http://hesu8a.natappfree.cc/system/activity/deleteScheme",method:"get",params:{schemeId:e}})}function c(e){return Object(l["a"])({url:"http://hesu8a.natappfree.cc/system/activity/updateActivityScheme",method:"post",data:e,transformRequest:[function(e){console.log(e);var t=Object.keys(e).length,a=0,l="";for(var r in e)l+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]),a<t-1&&(l+="&",a++);return l}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})}}}]);