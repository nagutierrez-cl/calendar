(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(34),i=n(10),u=n(12),l=n.n(u),j=n(21),d=n(18),b=n.n(d),m="https://mern-calenndar.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},O="[ui] Open modal",v="[ui] Close modal",h="[event] Set active",x="[event] Event logout",g="[event] Add new",y="[event] Clear active event",w="[event] Event updated",k="[event] Event deleted",N="[event] Events Loaded",E="[auth] Finish checking login state",S="[auth] Login",C="[auth] Logout",D=n(5),P=n(17),T=n.n(P),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:T()(e.end).toDate(),start:T()(e.start).toDate()})}))},A=function(e){return{type:g,payload:e}},M=function(){return{type:y}},L=function(e){return{type:w,payload:e}},_=function(){return{type:k}},R=function(e){return{type:N,payload:e}},G=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=3;break}return t(H()),e.abrupt("return");case 3:if((n=new Date(localStorage.getItem("token-init-date"))).setHours(n.getHours()+2),!(new Date>n)){e.next=9;break}return t(H()),e.abrupt("return");case 9:return e.next=11,p("auth/renew");case 11:return a=e.sent,e.next=14,a.json();case 14:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:r.uid,name:r.name}))):t(H());case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){return{type:E}},F=function(e){return{type:S,payload:e}},V=function(){return function(e){localStorage.clear(),e({type:x}),e(J())}},J=function(){return{type:C}},U=n(15),B=n(24),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(U.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(D.a)(Object(D.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,s,o]},q=(n(85),n(2)),z=function(){var e=Object(o.b)(),t=X({lEmail:"",lPassword:""}),n=Object(U.a)(t,2),a=n[0],r=n[1],c=a.lEmail,s=a.lPassword,i=X({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),u=Object(U.a)(i,2),d=u[0],m=u[1],p=d.rName,O=d.rEmail,v=d.rPassword1,h=d.rPassword2;return Object(q.jsx)("div",{className:"container login-container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(q.jsx)("h3",{children:"Ingreso"}),Object(q.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:c.uid,name:c.name}))):b.a.fire("Error",c.errors[0],"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:c,onChange:r})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:r})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(q.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(q.jsx)("h3",{children:"Registro"}),Object(q.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=O,a=v,r=p,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:o.uid,name:o.name}))):b.a.fire("Error",o.errors[0].msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:m})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:O,onChange:m})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:m})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:m})}),Object(q.jsx)("div",{className:"form-group",children:Object(q.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},K=n(52),Q=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(q.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(q.jsx)("span",{className:"navbar-brand",children:e}),Object(q.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(V())},children:[Object(q.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(q.jsx)("span",{children:" Salir"})]})]})},W={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Y=function(e){var t=e.event,n=t.title,a=t.user;return Object(q.jsxs)("div",{children:[Object(q.jsxs)("span",{children:[n," "]}),Object(q.jsxs)("span",{children:["- ",a.name," "]})]})},Z=n(47),$=n.n(Z),ee=n(48),te=n.n(ee),ne=function(){return{type:O}},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var re=T()().minutes(0).seconds(0).add(1,"hours"),ce=re.clone().add(1,"hours"),oe={title:"",notes:"",start:re.toDate(),end:ce.toDate()},se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(re.toDate()),c=Object(U.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(ce.toDate()),d=Object(U.a)(u,2),m=d[0],f=d[1],O=Object(a.useState)(!0),h=Object(U.a)(O,2),x=h[0],g=h[1],y=Object(a.useState)(oe),w=Object(U.a)(y,2),k=w[0],N=w[1],E=k.title,S=k.notes,C=k.start,P=k.end;Object(a.useEffect)((function(){N(n||oe)}),[n,N]);var I=function(e){var t=e.target;N(Object(D.a)(Object(D.a)({},k),{},Object(B.a)({},t.name,t.value)))},_=function(){e({type:v}),e(M()),N(oe)};return Object(q.jsxs)($.a,{isOpen:t,onRequestClose:_,closeTimeoutMS:200,style:ae,contentLabel:"Example Modal",children:[Object(q.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=T()(C),c=T()(P);return r.isSameOrAfter(c)?b.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error"):E.trim().length<2?g(!1):(e(n?(a=k,function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(L(a)):b.a.fire("Error",r.errors[0].msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var r,c,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,p("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.eventdb.id,e.user={_id:c,name:o},n(A(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(Object(D.a)({},k))),g(!0),void _())},children:[Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Fecha y hora inicio"}),Object(q.jsx)(te.a,{onChange:function(e){i(e),N(Object(D.a)(Object(D.a)({},k),{},{start:e}))},value:n?C:s,className:"form-control",format:"y-MM-dd h:mm:ss a",amPmAriaLabel:"Select AM/PM"})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Fecha y hora fin"}),Object(q.jsx)(te.a,{onChange:function(e){f(e),N(Object(D.a)(Object(D.a)({},k),{},{end:e}))},value:n?P:m,className:"form-control",format:"y-MM-dd h:mm:ss a",amPmAriaLabel:"Select AM/PM",minDate:s})]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{children:"Titulo y notas"}),Object(q.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:E,onChange:I}),Object(q.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:S,onChange:I}),Object(q.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(q.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(q.jsx)("i",{className:"far fa-save"}),Object(q.jsx)("span",{children:" Guardar"})]})]})]})},ie=(n(115),n(116),function(){var e=Object(o.b)();return Object(q.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(M()),e(ne())},children:Object(q.jsx)("i",{className:"fas fa-plus"})})}),ue=function(){var e=Object(o.b)();return Object(q.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,p("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(_()):b.a.fire("Error",c.errors[0].msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(q.jsx)("i",{className:"fas fa-trash"}),Object(q.jsx)("span",{children:" Borrar evento "})]})};T.a.locale("es");var le=Object(K.b)(T.a),je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(U.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=I(a.eventos),t(R(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(q.jsxs)("div",{className:"calendar-screen",children:[Object(q.jsx)(Q,{}),Object(q.jsx)(K.a,{localizer:le,events:n,startAccessor:"start",endAccessor:"end",messages:W,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ne())},onSelectEvent:function(t){e({type:h,payload:t})},onView:function(e){d(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){r&&e(M())},selectable:!0,view:u,components:{event:Y}}),Object(q.jsx)(ie,{}),r&&Object(q.jsx)(ue,{}),Object(q.jsx)(se,{})]})},de=n(37),be=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,be);return Object(q.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(D.a)({},e)):Object(q.jsx)(i.a,{to:"/login"})}}))},fe=["isAuthenticated","component"],pe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,fe);return Object(q.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(q.jsx)(i.a,{to:"/"}):Object(q.jsx)(n,Object(D.a)({},e))}}))},Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(G()),setInterval((function(){console.log("checking"),e(G())}),714e4)}),[e]),n?Object(q.jsx)("h5",{children:"Espere..."}):Object(q.jsx)(s.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(i.d,{children:[Object(q.jsx)(pe,{exact:!0,path:"/login",component:z,isAuthenticated:!!r}),Object(q.jsx)(me,{exact:!0,path:"/",component:je,isAuthenticated:!!r}),Object(q.jsx)(i.a,{to:"/"})]})})})},ve=n(25),he=n(65),xe={checking:!0},ge=n(53),ye={events:[],activeEvent:null},we={modalOpen:!1},ke=Object(ve.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case g:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(ge.a)(e.events),[t.payload])});case y:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case k:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case N:return Object(D.a)(Object(D.a)({},e),{},{events:Object(ge.a)(t.payload)});case x:return Object(D.a)({},ye);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(D.a)(Object(D.a)({},e),{},{checking:!1},t.payload);case E:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.c,Ee=Object(ve.d)(ke,Ne(Object(ve.a)(he.a))),Se=function(){return Object(q.jsx)(o.a,{store:Ee,children:Object(q.jsx)(Oe,{})})};n(118);c.a.render(Object(q.jsx)(Se,{}),document.getElementById("root"))},85:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.d275ed03.chunk.js.map