(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var r,c,a,o=n(0),u=n.n(o),i=n(10),s=n.n(i),b=n(6),j=n(14),l=n(2),f=n(29),d=n.n(f),m=n(7),O=n(3),h=n(4),p=Object(l.b)("fetchContactRequest"),g=Object(l.b)("fetchContactSuccess"),v=Object(l.b)("fetchContactError"),C=Object(l.b)("addContactsRequest"),x=Object(l.b)("addContactSuccsess"),y=Object(l.b)("addContactError"),_=Object(l.b)("deleteContactsRequest"),I=Object(l.b)("deleteContactSuccsess"),S=Object(l.b)("deleteContactError"),k=Object(l.b)("contacts/clearError"),w=Object(l.b)("FITER_CONTACTS"),F=Object(l.c)(!1,(r={},Object(O.a)(r,p,(function(){return!0})),Object(O.a)(r,g,(function(){return!1})),Object(O.a)(r,v,(function(){return!1})),Object(O.a)(r,C,(function(){return!0})),Object(O.a)(r,x,(function(){return!1})),Object(O.a)(r,y,(function(){return!1})),Object(O.a)(r,_,(function(){return!0})),Object(O.a)(r,I,(function(){return!1})),Object(O.a)(r,S,(function(){return!1})),r)),A=Object(l.c)(null,(c={},Object(O.a)(c,v,(function(t,e){return e.payload})),Object(O.a)(c,y,(function(t,e){return e.payload})),Object(O.a)(c,S,(function(t,e){return e.payload})),Object(O.a)(c,k,(function(){return null})),c)),T=Object(l.c)([],(a={},Object(O.a)(a,g,(function(t,e){return e.payload})),Object(O.a)(a,x,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(O.a)(a,I,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),E=Object(l.c)("",Object(O.a)({},w,(function(t,e){return e.payload}))),L=Object(h.b)({items:T,filter:E,loading:F,error:A}),N=[].concat(Object(j.a)(Object(l.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),[d.a]),z=Object(l.a)({reducer:{contacts:L},middleware:N,devTools:!1}),q=(n(40),n(12)),R=n(13),J=n(16),D=n(15),M=(n(41),n(20)),Z=n.n(M),B=n(30),P=n(8),V=n.n(P);V.a.defaults.baseURL="http://localhost:4040";var H=function(t,e){return function(n){var r={name:t,number:e};n(C()),V.a.post("/contacts",r).then((function(t){var e=t.data;return n(x(e))})).catch((function(t){return n(y(t))}))}},U=function(t){return function(e){e(_()),V.a.delete("/contacts/".concat(t)).then((function(){return e(I(t))})).catch((function(t){return e(S(t))}))}},W=function(){return function(){var t=Object(B.a)(Z.a.mark((function t(e){var n,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p()),t.prev=1,t.next=4,V.a.get("/contacts");case 4:n=t.sent,r=n.data,e(g(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(v(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},Y=n(65),$=n(9),G=n.n($),K=n(11),Q=function(t){return t.contacts.items},X=function(t){return t.contacts.filter},tt={getLoading:function(t){return t.contacts.loading},getError:function(t){return t.contacts.error},getItems:Q,getFilter:X,getVisibleContacts:Object(K.a)([Q,X],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},et=n(1),nt=function(t){Object(J.a)(n,t);var e=Object(D.a)(n);function n(){var t;Object(q.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){t.setState({name:e.currentTarget.value})},t.onInputTelChange=function(e){t.setState({number:e.currentTarget.value})},t.onFormSubmit=function(e){var n=t.state.name;t.props.contacts.some((function(t){return t.name===n}))?alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"):(e.preventDefault(),t.props.onSubmitProp(t.state.name,t.state.number),t.reset())},t}return Object(R.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=Object(Y.a)();return Object(et.jsxs)("form",{onSubmit:this.onFormSubmit,className:G.a.form,children:[Object(et.jsxs)("label",{htmlFor:t,className:G.a.form_item,children:["Name:",Object(et.jsx)("input",{type:"text",name:"name",value:this.state.name,id:t,onChange:this.onInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(et.jsxs)("label",{className:G.a.form_item,children:["Number:",Object(et.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.onInputTelChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(et.jsx)("button",{type:"submit",className:G.a.button,children:"Add contact"})]})}}]),n}(o.Component),rt=Object(b.b)((function(t){return{contacts:tt.getItems(t)}}),(function(t){return{onSubmitProp:function(e,n){return t(H(e,n))}}}))(nt),ct=Object(b.b)((function(t){return{value:tt.getFilter(t)}}),(function(t){return{onChange:function(e){return t(w(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)("p",{children:"Find contacts by name"}),Object(et.jsx)("input",{type:"text",name:"name",value:e,onChange:n})]})})),at=function(t){var e=t.name,n=t.id,r=t.number,c=t.deleteItem;return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)("li",{children:Object(et.jsxs)("p",{children:[e,": ",r]})},n),Object(et.jsx)("button",{type:"button",onClick:c,children:"Delete"})]})},ot=Object(b.b)((function(t){return{contacts:tt.getVisibleContacts(t)}}),(function(t){return{deleteItem:function(e){return t(U(e))}}}))((function(t){var e=t.contacts,n=t.deleteItem;return Object(et.jsx)("ul",{children:e.map((function(t){var e=t.name,r=t.id,c=t.number;return Object(et.jsx)(at,{name:e,id:r,number:c,deleteItem:function(){return n(r)}})}))})})),ut=function(t){Object(J.a)(n,t);var e=Object(D.a)(n);function n(){return Object(q.a)(this,n),e.apply(this,arguments)}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(et.jsxs)("div",{className:"App",children:[this.props.error&&Object(et.jsx)("h1",{children:"Oops something went wrong"}),Object(et.jsx)(rt,{}),this.props.isLoadingContacts&&Object(et.jsx)("h1",{children:"Loading..."}),Object(et.jsx)(ct,{}),Object(et.jsx)(ot,{})]})}}]),n}(o.Component),it=Object(b.b)((function(t){return{isLoadingContacts:tt.getLoading(t),error:tt.getError(t)}}),(function(t){return{fetchContacts:function(){return t(W())}}}))(ut);n(62);s.a.render(Object(et.jsx)(u.a.StrictMode,{children:Object(et.jsx)(b.a,{store:z,children:Object(et.jsx)(it,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__mjIHY",form_item:"Form_form_item__1xmW7",button:"Form_button__J42zr"}}},[[63,1,2]]]);
//# sourceMappingURL=main.827a3476.chunk.js.map