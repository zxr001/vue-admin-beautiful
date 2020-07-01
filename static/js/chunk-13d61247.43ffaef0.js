/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-1 21:23:31
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d61247"],{a9b0:function(e,t,l){"use strict";var o=l("b172"),i=l.n(o);i.a},b172:function(e,t,l){},b8b0:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"editor-container"},[l("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"标题",prop:"title"}},[l("el-input",{attrs:{maxlength:"20"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),l("el-form-item",{attrs:{label:"所属模块",prop:"module"}},[l("el-select",{model:{value:e.form.module,callback:function(t){e.$set(e.form,"module",t)},expression:"form.module"}},[l("el-option",{attrs:{label:"新闻动态",value:"1"}}),l("el-option",{attrs:{label:"实时热点",value:"2"}})],1)],1),l("el-form-item",{staticClass:"vab-quill-content",attrs:{label:"内容",prop:"content"}},[l("vab-quill",{attrs:{"min-height":400},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.handleSee}},[e._v("预览效果 ")]),l("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1)],1),l("el-dialog",{attrs:{title:"预览效果",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[l("div",{staticStyle:{"min-height":"60vh"}},[l("h1",{staticClass:"news-title"},[e._v(e._s(e.form.title))]),l("div",{staticClass:"news-content",domProps:{innerHTML:e._s(e.form.content)}})])])],1)},i=[],r=(l("121a"),l("7e41"),l("96be"),l("f926")),a={name:"Editor",components:{vabQuill:r["default"]},data:function(){return{borderColor:"#dcdfe6",dialogTableVisible:!1,form:{title:"",module:"",content:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],module:[{required:!0,message:"请选择模块",trigger:"change"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},methods:{handleSee:function(){var e=this;this.$refs["form"].validate((function(t){if(e.$refs.form.validateField("content",(function(e){})),!t)return!1;e.dialogTableVisible=!0}))},handleSave:function(){var e=this;this.$refs["form"].validate((function(t){if(e.$refs.form.validateField("content",(function(t){e.borderColor="#dcdfe6",t&&(e.borderColor="#F56C6C")})),!t)return!1;e.$baseMessage("submit!","success")}))}}},n=a,s=(l("a9b0"),l("9ca4")),c=Object(s["a"])(n,o,i,!1,null,"0bc2a038",null);t["default"]=c.exports},f926:function(e,t,l){"use strict";l.r(t);var o=l("1e72"),i=l.n(o);t["default"]=i.a}}]);