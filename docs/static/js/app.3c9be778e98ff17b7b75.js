webpackJsonp([1],{"+tGE":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=s("VU/8")({name:"App"},r,!1,null,null,null).exports,i=s("/ocq"),l=s("mvHQ"),o=s.n(l),c={scheduleDragstart:function(t,e,s,a){var r=o()(e);t.dataTransfer.setData("scheduleData",r),t.dataTransfer.setData("scheduleDay",s),t.dataTransfer.setData("schedule",a)},memberDragstart:function(t,e){var s=o()(e);t.dataTransfer.setData("userData",s);var a=t.currentTarget.cloneNode(!0);a.className="hangingMan ghost",a.style.position="fixed",a.style.top="-100%",a.style.right="-100%",document.body.appendChild(a),t.dataTransfer.setDragImage(a,0,0)},dragEffect:function(t){t.preventDefault();var e=t.currentTarget.classList;if(!e.contains("workSchedules"))return!1;e.toggle("focused")},scheduleMemberDragend:function(t,e){this.removeGhost();var s=t.map(function(t){return t.name}).indexOf(e.name);t.splice(s,1),this.vm.$forceUpdate()},removeGhost:function(){for(var t=document.getElementsByClassName("ghost");t.length>0;)t[0].parentNode.removeChild(t[0])},workSchedules:[],handleDroped:function(t,e,s){var a=this.vm,r=t.dataTransfer,n=t.currentTarget.classList;n.contains("focused")&&n.remove("focused");var i=r.getData("userData"),l=r.getData("scheduleData");if(!i&&!l)return!1;var o=Number(r.getData("scheduleDay"))===e,c=Number(r.getData("schedule")),u=void 0;u=i?JSON.parse(i):JSON.parse(l);var d=this.workSchedules,m=d[s];setTimeout(function(){if(m.member){if(m.member&&-1!==m.member.map(function(t){return t.name}).indexOf(u.name))return alert("人員重複"),!1}else m.member=[];i?d[s].member.push(u):(d[s].member=u.member,o&&c!==s&&(d[c].member=[])),a.$forceUpdate()},1)},vm:function(){alert("controller.js錯誤")}},u=s("PJh5"),d=s.n(u);var m=function(t,e){var s=0;if(t&&e){var a=d()(t);s=d()(e).diff(a,"days")}else s=0;return s+1};var f=function(t){if(t){var e=t.split("-")[0],s=Number(t.split("-")[1]);return Number(s)<10&&(s="0"+s),e+"-"+s+"-"+new Date(e,s,0).getDate()}},v=["日","一","二","三","四","五","六"],h=s("fwB9"),j=s.n(h),g=s("hWs5"),p=s.n(g);d.a.locale("zh-tw");var b={directives:{focus:{inserted:function(t){t.focus()}}},methods:{handleDragstart:function(t,e){return c.memberDragstart(t,e)},handleDragend:function(t){return c.removeGhost()},scheduleDragstart:function(t,e,s,a){return c.scheduleDragstart(t,e,s,a)},scheduleMemberDragend:function(t,e){return c.scheduleMemberDragend(t,e)},dragEffect:function(t){return c.dragEffect(t)},dropover:function(t){t.preventDefault()},handleDroped:function(t,e,s){return t.preventDefault(),c.workSchedules=this.currentForm.set_data[e].workSchedules,c.handleDroped(t,e,s)},getDate:function(t){var e=this.currentForm.start;return d()(e).add(t,"days").format("MM/DD")},settingCalendar:function(t){var e=f(t),s=m(t,e),a=this.currentForm.set_data,r=this.workSchedules;if(a.length<s)for(var n=a.length;n<s;n++){var i={};i.workSchedules=r,a.push(JSON.parse(o()(i)))}else for(var l=a.length;l>s;l--)a.pop()},handleAddMember:function(t){var e=t.target.value;t.target.value="";var s={name:e};this.members.push(s),this.statusAddMember=!1}},mounted:function(){this.currentForm.start=d()().add(1,"months").format("YYYY-MM-01"),this.settingCalendar(this.currentForm.start),this.active=this.allClass},computed:{startDay:function(){return d()(this.currentForm.start).isoWeekday()||0},nextMonths:function(){return function(t){t>=12&&(t=12);d()().format("YYYY");for(var e=void 0,s=[],a=1;a<=t;a++){var r=(e=d()().add(a,"months")).format("YYYY-MM-01"),n=e.format("M");e.format("YYYY"),s.push({value:r,label:e.format("YYYY")+"年 "+n+"月"})}return s}(6)}},data:function(){return c.vm=this,{weeks:v,currentForm:{start:"",end:"",set_data:[]},members:p.a,active:{},allClass:{name:"全部",info:"顯示所有班別"},workSchedules:j.a,statusAddMember:!1,statusAddWork:!1}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("div",{staticClass:"card"},[s("div",{staticClass:"row no-gutters mt-3"},[s("div",{staticClass:"col-md-3 col-lg-2"},[s("div",{staticClass:"px-2"},[s("ul",{staticClass:"list-group"},[t._m(0),t._v(" "),t._l(t.members,function(e,a){return s("li",{key:"memberToWork"+a,staticClass:"list-group-item list-group-item-action px-2",staticStyle:{cursor:"grab"},attrs:{title:e.name+" (可拖曳)",draggable:"true"},on:{dragstart:function(s){t.handleDragstart(s,e)},dragend:t.handleDragend}},[s("div",{staticClass:"d-flex align-items-center"},[s("i",{staticClass:"fa-fw fas fa-grip-vertical",staticStyle:{opacity:".3"}}),t._v(" "),s("span",{staticClass:"px-1"},[t._v(t._s(e.name))])])])}),t._v(" "),t.statusAddMember?s("li",{staticClass:"list-group-item list-group-item-action px-2"},[s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"w-100",attrs:{title:"按下enter新增人員",type:"text"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleAddMember(e):null}}})]):t._e(),t._v(" "),s("li",{staticClass:"list-group-item list-group-item-action px-0 py-0"},[t.statusAddMember?s("button",{staticClass:"clearBtn px-2 py-3 text-left w-100",attrs:{type:"button"},on:{click:function(e){t.statusAddMember=!t.statusAddMember}}},[s("i",{staticClass:"fa-fw fas fa-times"}),t._v("\n                取消新增\n              ")]):s("button",{staticClass:"text-success clearBtn px-2 py-3 text-left w-100",attrs:{type:"button"},on:{click:function(e){t.statusAddMember=!t.statusAddMember}}},[s("i",{staticClass:"fa-fw fas fa-user-plus"}),t._v("\n                新增人員\n              ")])])],2)])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"mb-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentForm.start,expression:"currentForm['start']"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.currentForm,"start",e.target.multiple?s:s[0])},function(e){t.settingCalendar(t.currentForm.start)}]}},t._l(t.nextMonths,function(t,e){return s("option",{key:"mon"+e,attrs:{label:t.label},domProps:{value:t.value}})}))]),t._v(" "),s("div",{staticClass:"scheduleGroup"},[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"scheduleGroup-item",class:{active:t.active.name===t.allClass.name},attrs:{type:"button"},on:{click:function(e){t.active=t.allClass}}},[t._v(t._s(t.allClass.name))]),t._v(" "),t._l(t.workSchedules,function(e,a){return s("button",{key:"workSchedules"+a,staticClass:"scheduleGroup-item",class:{active:t.active.name===e.name},attrs:{type:"button"},on:{click:function(s){t.active=e}}},[t._v(t._s(e.name))])})],2),t._v(" "),s("transition",{attrs:{name:"el-fade-in-linear"}},[s("p",{staticClass:"scheduleGroup-intro"},[t._v(t._s(t.active.info))])])],1),t._v(" "),s("div",{staticClass:"custCalendar"},[s("div",{staticClass:"d-flex flex-wrap"},[t._l(t.weeks,function(e,a){return s("div",{key:"week"+a,staticClass:"week"},[t._v(t._s(e))])}),t._v(" "),t.startDay?[t._l(t.startDay%7,function(t,e){return s("div",{key:"unUseDays"+e,staticClass:"bg-grey days daysBlock nullBlcok"})}),t._v(" "),t._l(t.currentForm.set_data,function(e,a){return s("div",{key:"day"+a,staticClass:"days daysBlock active"},[s("div",{staticClass:"dayDate text-center"},[t._v("\n                  "+t._s(t.getDate(a))+"\n                ")]),t._v(" "),t._l(e.workSchedules,function(e,r){return"全部"===t.active.name||e.name===t.active.name?s("section",{key:"workSchedules"+r,staticClass:"workSchedules",on:{dragenter:t.dragEffect,dragleave:t.dragEffect,dragover:t.dropover,drop:function(e){t.handleDroped(e,a,r)}}},[s("h5",{staticClass:"background",attrs:{title:e.name+" (可拖曳)",draggable:"true"},on:{dragstart:function(s){t.scheduleDragstart(s,e,a,r)},dragend:t.handleDragend}},[s("div",{staticClass:"worksName"},[s("i",{staticClass:"fa-fw fas fa-arrows-alt"}),t._v("\n                      "+t._s(e.name)+"\n                    ")]),t._v(" "),s("div",{staticClass:"memberBlock"},t._l(e.member,function(r,n){return s("div",{key:"member"+a+n,staticClass:"member",staticStyle:{cursor:"grab"},attrs:{title:r.name+" (可拖曳)",draggable:"true"},on:{dragstart:function(e){t.handleDragstart(e,r)},dragend:function(s){t.scheduleMemberDragend(e.member,r)}}},[s("span",{staticClass:"name"},[s("i",{staticClass:"fa-fw fas fa-grip-vertical"}),t._v("\n                          "+t._s(r.name)+"\n                        ")])])}))])]):t._e()})],2)}),t._v(" "),t._l(7-(t.startDay+t.currentForm.set_data.length)%7,function(t,e){return s("div",{key:"unUseDays2"+e,staticClass:"bg-grey days daysBlock nullBlcok"})})]:t._e()],2)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"list-group-item active"},[e("h4",{staticClass:"my-0"},[this._v("排班成員")])])}]};var k=s("VU/8")(b,y,!1,function(t){s("uayW"),s("NTxV"),s("+tGE")},"data-v-4fd9bfc5",null).exports;a.a.use(i.a);var C=new i.a({routes:[{path:"/",name:"HelloWorld",component:k}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:C,components:{App:n},template:"<App/>"})},NTxV:function(t,e){},fwB9:function(t,e){t.exports=[{name:"早班",info:"08:00 - 12:00, 13:00 - 17:00"},{name:"中班",info:"16:00 - 24:00"},{name:"晚班",info:"00:00 - 08:00"},{name:"大夜班",info:"21:00 - 05:00"}]},hWs5:function(t,e){t.exports=[{name:"張三"},{name:"李四"},{name:"王小明"},{name:"黃大天"},{name:"Cripy Wang"}]},uayW:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return s(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.3c9be778e98ff17b7b75.js.map