(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{87:function(e,t,a){e.exports={appConteiner:"App_appConteiner__xQEE8",text:"App_text__tz62f",texthome:"App_texthome__a5Fv2",buttonLoginForm:"App_buttonLoginForm__14swO",buttonCreateAccount:"App_buttonCreateAccount__3dJ0f",loginForm:"App_loginForm__1dV1F",createForm:"App_createForm__3qDiy",LoginFormLabel:"App_LoginFormLabel__2cbEJ",createFormLabel:"App_createFormLabel__1SBQv",LoginFormText:"App_LoginFormText__1j35C",createFormText:"App_createFormText__3AMs_",buttonLoginBlock:"App_buttonLoginBlock__2C71S",loginFormPhonebook:"App_loginFormPhonebook__2BFsX",createFormAccount:"App_createFormAccount__1QZzB",loginFormHeading:"App_loginFormHeading__3aI6e",createFormHeading:"App_createFormHeading__3FuS7",homeBlock:"App_homeBlock__Hn7SD"}},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(49);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,c=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(a.push(r.value),!t||a.length!==t);n=!0);}catch(i){c=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(c)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},89:function(e,t,a){e.exports={labelName:"ContactForm_labelName__oTzMK",inputName:"ContactForm_inputName__1tgpg",spanText:"ContactForm_spanText__1vZNj",buttonAddContact:"ContactForm_buttonAddContact__Lw1cb"}},90:function(e,t,a){e.exports={inputFilter:"Filter_inputFilter__2Qv4k"}},91:function(e,t,a){e.exports={listContactList:"ContactList_listContactList__NaMhp",listStyle:"ContactList_listStyle__12wIn",buttonContactList:"ContactList_buttonContactList__1FHii"}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(88),c=a(0),o=a(9),r=a(87),s=a.n(r),i=a(18),l=a(1);function u(){var e=Object(o.b)(),t=Object(c.useState)(""),a=Object(n.a)(t,2),r=a[0],u=a[1],b=Object(c.useState)(""),m=Object(n.a)(b,2),j=m[0],d=m[1],p=Object(c.useState)(""),h=Object(n.a)(p,2),x=h[0],O=h[1],f=Object(c.useCallback)((function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":return u(n);case"email":return d(n);case"password":return O(n);default:return null}}),[]),g=Object(c.useCallback)((function(t){t.preventDefault(),e(i.a.register({name:r,email:j,password:x})),_()}),[e,r,j,x]),_=function(){u(""),d(""),O("")};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:s.a.createFormAccount,children:Object(l.jsx)("h1",{className:s.a.createFormHeading,children:"Create your account"})}),Object(l.jsxs)("form",{className:s.a.createForm,onSubmit:g,autoComplete:"off",children:[Object(l.jsxs)("label",{className:s.a.createFormLabel,children:[Object(l.jsx)("span",{className:s.a.createFormText,children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:f})]}),Object(l.jsxs)("label",{className:s.a.createFormLabel,children:[Object(l.jsx)("span",{className:s.a.createFormText,children:"Email"}),Object(l.jsx)("input",{type:"text",name:"email",value:j,onChange:f})]}),Object(l.jsxs)("label",{className:s.a.createFormLabel,children:[Object(l.jsx)("span",{className:s.a.createFormText,children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password",value:x,onChange:f})]}),Object(l.jsx)("div",{className:s.a.buttonCreateBlock,children:Object(l.jsx)("button",{className:s.a.buttonCreateAccount,type:"submit",children:"Create account"})})]})]})}},93:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(88),c=a(0),o=a(9),r=a(18),s=a(87),i=a.n(s),l=a(1);function u(){var e=Object(o.b)(),t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],u=a[1],b=Object(c.useState)(""),m=Object(n.a)(b,2),j=m[0],d=m[1],p=Object(c.useCallback)((function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"email":return u(n);case"password":return d(n);default:return console.warn("Error")}}),[]),h=Object(c.useCallback)((function(t){t.preventDefault(),e(r.a.logIn({email:s,password:j})),x()}),[e,s,j]),x=function(){u(""),d("")};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:i.a.loginFormPhonebook,children:Object(l.jsx)("h1",{className:i.a.loginFormHeading,children:"Log in to Phonebook"})}),Object(l.jsxs)("form",{className:i.a.loginForm,onSubmit:h,autoComplete:"off",children:[Object(l.jsxs)("label",{className:i.a.LoginFormLabel,children:[Object(l.jsx)("span",{className:i.a.LoginFormText,children:"Email"}),Object(l.jsx)("input",{type:"email",name:"email",value:s,onChange:p})]}),Object(l.jsxs)("label",{className:i.a.LoginFormLabel,children:[Object(l.jsx)("span",{className:i.a.LoginFormText,children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password",value:j,onChange:p})]}),Object(l.jsx)("div",{className:i.a.buttonLoginBlock,children:Object(l.jsx)("button",{className:i.a.buttonLoginForm,type:"submit",children:"Log in"})})]})]})}},94:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(88),c=a(0),o=a(9),r=a(89),s=a.n(r),i=a(17),l=a.n(i),u=a(22),b=function(e){var t=e.name,a=e.number;return function(e){var n={name:t,number:a};e(u.a.addContactRequest()),l.a.post("/contacts",n).then((function(t){var a=t.data;return e(u.a.addContactSuccess(a))})).catch((function(t){return e(u.a.addContactError(t.message))}))}},m=function(e){return function(t){t(u.a.deleteContactRequest()),l.a.delete("/contacts/".concat(e)).then((function(){return t(u.a.deleteContactSuccess(e))})).catch((function(e){return t(u.a.deleteContactError(e.message))}))}},j=a(1);function d(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),l=Object(n.a)(i,2),u=l[0],m=l[1],d=Object(o.b)(),p=Object(c.useCallback)((function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":return r(n);case"number":return m(n);default:return null}}),[]),h=Object(c.useCallback)((function(e){e.preventDefault(),d(b({name:a,number:u})),x()}),[d,a,u]),x=function(){r(""),m("")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:s.a.formConteiner,onSubmit:h,children:[Object(j.jsxs)("label",{className:s.a.labelName,htmlFor:"",children:[Object(j.jsx)("span",{className:s.a.spanText,children:"Name"}),Object(j.jsx)("input",{className:s.a.inputName,onChange:p,value:a,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:s.a.labelName,htmlFor:"",children:[Object(j.jsx)("span",{className:s.a.spanText,children:"Number"}),Object(j.jsx)("input",{className:s.a.inputName,onChange:p,value:u,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:s.a.buttonAddContact,type:"submit",children:"Add contact"})]})})}var p=a(90),h=a.n(p),x=a(29),O=function(e){return e.contacts.filter},f=function(e){return e.contacts.items},g={getFilter:O,getAllContacts:f,getVisibleContacts:Object(x.a)([f,O],(function(e,t){var a=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(a)}))}))};function _(){var e=Object(o.c)(g.getFilter),t=Object(o.b)(),a=Object(c.useCallback)((function(e){t(u.a.changeFilter(e.currentTarget.value))}),[t]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Find contacts by name"}),Object(j.jsx)("input",{className:h.a.inputFilter,type:"text",value:e,onChange:a})]})})}var F=a(91),C=a.n(F);function v(){var e=Object(o.c)(g.getVisibleContacts),t=Object(o.b)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:C.a.listContactList,children:e.map((function(e){return Object(j.jsxs)("li",{className:C.a.listStyle,children:[e.name+" : "+e.number,Object(j.jsx)("button",{className:C.a.buttonContactList,onClick:function(){t(m(e.id))},children:"Delete"})]},e.id)}))})})}var N=a(87),w=a.n(N);function y(){return Object(j.jsxs)("div",{className:w.a.appConteiner,children:[Object(j.jsx)("h1",{className:w.a.text,children:"Phonebook"}),Object(j.jsx)(d,{}),Object(j.jsx)("h2",{className:w.a.text,children:"Contacts"}),Object(j.jsx)(_,{}),Object(j.jsx)(v,{})]})}},95:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));a(0);var n=a(87),c=a.n(n),o=a.p+"static/media/Phonebook.007518a8.jpg",r=a(1);function s(){return Object(r.jsx)("div",{children:Object(r.jsxs)("section",{className:c.a.homeBlock,children:[Object(r.jsx)("h1",{className:c.a.texthome,children:"Phonebook"}),Object(r.jsx)("img",{className:c.a.img,src:o,alt:"Phonebook",width:"150"}),Object(r.jsx)("p",{className:c.a.texthome,children:"The long awaited app is available! Phonebook allows you to completely replace standard phone and contact manager. Phonebook makes access to call history, contacts, groups and favorites is incredibly simple and pleasant. The controls are designed so that all actions can be do it with one hand - you don't have to reach the top of the screen, it will become more convenient to use the phone. The phonebook supports T9 and is easy customizable! Phonebook works faster and better than all existing ones analogs, and also offers a completely new way of managing contacts - viewing and editing a contact occurs in one place, without opening new windows."})]})})}}}]);
//# sourceMappingURL=home-page.39ce3c7a.chunk.js.map