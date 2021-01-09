(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(7),i=a.n(r),o=a(2),l=a(5),d=a.n(l),h=a(8),u=a(3),j=a(6),b=function(e){var t=e.backHandler,a=e.nextHandler,n=e.currentQuestion,c=e.totalQuestions;return Object(s.jsxs)("div",{className:"footer",children:[0!==n&&Object(s.jsx)("button",{type:"button",onClick:t,children:"Prev"}),n!==c&&Object(s.jsx)("button",{type:"button",onClick:a,children:"Next"}),n===c&&Object(s.jsx)("button",{type:"submit",children:"Submit"})]})},p=function(e){var t=e.closeHandler,a=e.errorMessage,n=e.successMessage,c=function(e){return e.split(".").map((function(e,t){return Object(s.jsx)("p",{children:e},t+Math.random())}))};return(a||n)&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"overlay"}),Object(s.jsxs)("div",{className:a?"error-box":"notification-box",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("img",{src:"/foundit-logo.png",width:"50px",height:"50px",alt:"Found It logo",style:{borderRadius:"50%"}}),Object(s.jsx)("p",{children:a?"error":"success"})]}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("p",{children:c(a||n)})}),Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("button",{ariaLabel:"Close",type:"button",onClick:t,children:"Close"})})]})]})},m=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("img",{src:"/foundit-logo.png",width:"50px",height:"50px",alt:"Found It logo",style:{borderRadius:"50%"}}),Object(s.jsx)("h1",{children:"Found It"})]})},O=function(e){return!1!==e.loading&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("span",{className:"loader"})})},x=function(){return Object(s.jsx)("div",{className:"g-recaptcha","data-sitekey":"6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg","data-size":"invisible"})},f=function(e){var t=e.changeHandler,a=e.label,n=e.description,c=e.inputMode,r=void 0===c?"text":c,i=e.type,o=void 0===i?"text":i,l=e.value,d=e.name,h=e.required,u=void 0===h||h;return Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{children:a}),Object(s.jsx)("span",{className:"description",children:n}),Object(s.jsx)("input",{name:d,value:l,type:o,inputMode:r,required:u,onChange:t})]})},g=function(e){var t=e.label,a=e.description,n=e.value,c=e.changeHandler,r=e.name;return Object(s.jsxs)("div",{className:"form-switch",children:[Object(s.jsx)("p",{children:t}),Object(s.jsx)("span",{className:"description",children:a}),Object(s.jsxs)("label",{className:"switch",children:[Object(s.jsx)("input",{name:r,checked:n,type:"checkbox",onChange:c}),Object(s.jsx)("span",{className:"slider"}),Object(s.jsx)("span",{className:"status",children:n?"Yes":"No"})]})]})},v=function(e){var t=e.current,a=e.formData,c=e.changeHandler,r=e.setTotal,i=[Object(s.jsx)(f,{name:"deviceName",changeHandler:c,value:a.deviceName,label:"What is the device name?",description:"The device name is the name which appears when you pair it. For example: Paul's AirPods"},"deviceName"),Object(s.jsx)(g,{value:a.hasCase,changeHandler:c,name:"hasCase",label:"Are they in a case?",description:"This does not mean the charging box which comes with the headphones."},"hasCase"),Object(s.jsx)(f,{label:"What colour is the case?",description:"Again, this is not referring to the charging box which comes with the headphones.",name:"caseColour",value:a.caseColour,changeHandler:c,required:!1},"caseColour"),Object(s.jsx)(f,{label:"What material is the case?",description:"A one word answer such as 'plastic', 'rubber' or 'wood' will do.",name:"caseMaterial",value:a.caseMaterial,changeHandler:c,required:!1},"caseMaterial"),Object(s.jsx)(g,{label:"Does the case have accessories?",description:"An accessory could be something like a light, clip or a sticker.",value:a.caseHasAccessories,changeHandler:c,name:"caseHasAccessories"},"caseHasAccessories"),Object(s.jsx)(f,{label:"What is it?",description:"Describe the accessory attached to the case. One word will do, for example: sticker, light, clip etc.",name:"caseAccessories",value:a.caseAccessories,changeHandler:c,required:!1},"caseAccessories"),Object(s.jsx)(f,{label:"What is your name?",description:"If you would prefer not to say just say 'prefer not to say'",name:"name",value:a.name,changeHandler:c},"name"),Object(s.jsx)(f,{label:"What is your email address?",description:"This will only be used to contact you if you correctly identify the AirPods. No information is stored within a database.",name:"email",type:"email",value:a.email,changeHandler:c},"email"),Object(s.jsx)(f,{label:"What is your phone number?",description:"Again, this will only be used to contact you in the case you correctly identify the headphones and is not stored in a database.",name:"phone",type:"number",inputMode:"tel",value:a.phone,changeHandler:c},"phone"),Object(s.jsxs)("div",{className:"confirmation-container",children:[Object(s.jsx)("h2",{children:"Your Answers"}),Object(s.jsx)("p",{className:"description",children:"Please confirm you submitted the correct information or go back and alter your input."}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Name: "}),a.name]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Phone: "}),a.phone]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Email: "}),a.email]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Device Name: "}),a.deviceName]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Description: "}),a.hasCase?"Has a ".concat(a.caseColour," case which is made of ").concat(a.caseMaterial).concat(a.caseHasAccessories?" and has a ".concat(a.caseAccessories):"."):"No case or accessories."]})]},"confirm")];return Object(n.useEffect)((function(){r(i.length-1)}),[]),Object(s.jsx)("div",{className:"content",children:i[t]})},y=function(e){var t=e.toggleVisibility,a=Object(n.useState)(0),c=Object(o.a)(a,2),r=c[0],i=c[1],l=Object(n.useState)(0),f=Object(o.a)(l,2),g=f[0],y=f[1],A=Object(n.useState)(!1),w=Object(o.a)(A,2),N=w[0],C=w[1],H=Object(n.useState)(""),k=Object(o.a)(H,2),M=k[0],T=k[1],I=Object(n.useState)(""),S=Object(o.a)(I,2),W=S[0],P=S[1],D=Object(n.useState)({deviceName:"",hasCase:!1,caseColour:"",caseMaterial:"",caseHasAccessories:!1,caseAccessories:"",name:"",email:"",phone:"",token:""}),F=Object(o.a)(D,2),E=F[0],V=F[1];return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?render=6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg",document.body.appendChild(e)}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p,{errorMessage:W,successMessage:M,closeHandler:function(){""!==W?P(""):(T(""),t(!1))}}),Object(s.jsx)(x,{}),Object(s.jsxs)("form",{className:"container",onSubmit:function(e){if(e.preventDefault(),r!==g)return i(r+1);C(!0),window.grecaptcha.ready((function(){return window.grecaptcha.execute("6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg",{action:"submit"}).then(function(){var e=Object(h.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.token=t,e.next=3,fetch("/api/submit/claim",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,console.log(s.status),e.abrupt("return",setTimeout((function(){return C(!1),200===s.status?T(s.message):P(s.message)}),3e3));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){setTimeout((function(){P("There has been a problem with the server. Please try again later."),C(!1)}),3e3)}))}))},children:[Object(s.jsx)(m,{}),Object(s.jsx)(O,{loading:N}),Object(s.jsx)("button",{className:"close-button",type:"button",onClick:function(){return t(!1)}}),Object(s.jsx)(v,{current:r,formData:E,changeHandler:function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;V(Object(j.a)(Object(j.a)({},E),{},Object(u.a)({},a,s)))},setTotal:y}),Object(s.jsx)(b,{backHandler:function(){return E.hasCase||4!==r&&6!==r?E.hasCase&&!E.caseHasAccessories&&6===r?i(r-2):void i(r-1):i(0)},nextHandler:function(){var e=Object.keys(E)[r];if(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(""===e)return P("This field cannot be empty"),!1;if(e.length<3)return P("This field must be at least three characters"),!1;if("email"===t){if(!a.test(e))return P("".concat(e," does not appear to be a valid email address")),!1}return!("phone"===t&&e.length<11)||(P("You did not enter a valid phone number. It should be at least 11 digits. You entered ".concat(e)),!1)}(E[e],e))return E.hasCase||1!==r?E.caseHasAccessories||4!==r?void i(r+1):i(r+2):i(r+5)},currentQuestion:r,totalQuestions:g})]})]})},A=function(e){var t=e.children;return Object(s.jsx)("div",{className:"container",children:t})},w=function(){return Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("p",{children:"On the morning of 7th January 2021 I was walking my dog near the London Academy in Edgware, London, and I found a pair of Apple Air Pod headphones."}),Object(s.jsx)("p",{children:"In an attempt to locate the original owner of said headphones I made this website."}),Object(s.jsx)("p",{children:"If you believe the mentioned headphones to be yours please fill in the form and I will contact you."}),Object(s.jsx)("p",{style:{fontWeight:"bolder",fontStyle:"italic"},children:"Please note that I will only contact you if you correctly identify the Apple AirPods which I found."})]})},N=function(e){var t=e.buttonCallback;return Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("button",{onClick:t,children:"Begin"})})},C=function(){return Object(s.jsx)("footer",{style:{maxWidth:500,width:"90%",textAlign:"center",color:"white",margin:"2rem auto",fontSize:"1.2rem"},children:"Your information is not stored on any database or shared with any third parties other than Google's reCaptcha bot prevention."})};var H=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.jsxs)("div",{className:"App",children:[a?Object(s.jsx)(y,{title:"Claim AirPods",toggleVisibility:c}):Object(s.jsxs)(A,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(w,{}),Object(s.jsx)(N,{buttonCallback:function(){return c(!0)}})]}),Object(s.jsx)(C,{})]})};a(15);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(H,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.87c45793.chunk.js.map