(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,a,t){e.exports=t(32)},18:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),o=t.n(r),l=(t(18),t(19),t(1)),i=t.n(l),s=(t(20),t(3)),m=t(4),u=function(e,a){switch(a.type){case"FETCH_HOME":return Object(m.a)({},e,{home:a.home,homeLoaded:!0});case"UPDATE_HOME":return Object(m.a)({},e,{message:a.message,color:a.color,completed:!0});default:return e}},d=t(5),f=t.n(d),p=t(6),h=t.n(p);t(25),t(29);h.a.initializeApp({apiKey:"AIzaSyCbcKVcReRW3hLHpWMIIASFgWdpPqmxA-w",authDomain:"priyabihaniportfolio.firebaseapp.com",databaseURL:"https://priyabihaniportfolio.firebaseio.com",projectId:"priyabihaniportfolio",storageBucket:"priyabihaniportfolio.appspot.com",messagingSenderId:"917634321272",appId:"1:917634321272:web:4298234ff70dc242f9568d",measurementId:"G-7GKS8W6QFE"}),h.a.firestore();var v=h.a,E=Object(n.createContext)(),b={error:null},g=function(e){var a=Object(n.useReducer)(u,b),t=Object(s.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){!function(e){var a;f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,f.a.awrap(v.firestore().collection("Home").get());case 3:t.sent.docs.map((function(e){return a.push(Object(m.a)({id:e.id},e.data())),null})),e({type:"FETCH_HOME",home:a});case 6:case"end":return t.stop()}}))}(o)}),[]),c.a.createElement(E.Provider,{value:{home:r,dispatch:o}},e.children)},w=function(){Object(n.useEffect)((function(){i()(window).on("scroll resize",(function(){})),i()(document).ready((function(){i()(window).resize((function(){window.innerWidth<600&&i()(".arrow").css("transform","rotateZ(90deg)")}))})),i()(document).ready((function(){window.innerWidth<600&&setTimeout((function(){i()(".arrow").css("transform","rotateZ(90deg)"),i()(".viewmywork").css("background-color"," rgb(0, 166, 216)")}),3e3)}))}));var e=Object(n.useContext)(E).home,a=e&&e.home,t=a&&a[0],r=t&&t.Content,o=t&&t.Highlight,l=o&&o.length,s=r&&r.length,m=r&&r.indexOf(o),u=m+l,d=r&&r.slice(m,u),f=r&&r.slice(0,m),p=r&&r.slice(u,s);return c.a.createElement("section",{id:"home",className:"flex overflow"},c.a.createElement("div",{className:"demo container"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{id:"large-header",className:"large-header"},c.a.createElement("canvas",{id:"canvas",className:"canvas-background"}),c.a.createElement("div",{className:"main-title"},f&&f,c.a.createElement("br",null),c.a.createElement("span",{className:"highlight"},d&&d),c.a.createElement("br",null)," ",p&&p,c.a.createElement("a",{onClick:function(){var e=i()(".large-header").height(),a=i()("section#about").height();i()("html, body").animate({scrollTop:e+a+5},600)},className:"button viewmywork"},t&&t.ButtonContent,c.a.createElement("i",{id:"arrow",className:"fas fa-arrow-right arrow"})))))))},N=function(){return Object(n.useEffect)((function(){i()(document).ready((function(){i()(window).on("scroll",(function(e){var a=window.scrollY,t=i()(".large-header").height(),n=i()("section#about").height(),c=i()("div#projects").height(),r=i()("div#contact").height();a>=t&&a<t+n&&(i()("nav li a#home").removeClass("active"),i()("nav li a#project").removeClass("active"),i()("nav li a#contact").removeClass("active"),i()("nav li a#about").addClass("active")),a>=t+n&&a<t+n+c&&(i()("nav li a#home").removeClass("active"),i()("nav li a#project").addClass("active"),i()("nav li a#contact").removeClass("active"),i()("nav li a#about").removeClass("active")),a>=t+n+c&&a<t+n+c+r&&(i()("nav li a#home").removeClass("active"),i()("nav li a#project").removeClass("active"),i()("nav li a#contact").addClass("active"),i()("nav li a#about").removeClass("active"))}))}))})),c.a.createElement("nav",{className:"animation-element overflow"},c.a.createElement("li",null,c.a.createElement("a",{id:"home",className:"page-link",onClick:function(){i()("html, body").animate({scrollTop:10},600)}},"Home")),c.a.createElement("li",null,c.a.createElement("a",{className:"page-link",id:"about",onClick:function(){var e=i()(".large-header").height();i()("html, body").animate({scrollTop:e+5},600)}},"About")),c.a.createElement("li",null,c.a.createElement("a",{id:"project",className:"page-link",onClick:function(){var e=i()(".large-header").height(),a=i()("section#about").height();i()("html, body").animate({scrollTop:e+a+5},600)}},"Projects")),c.a.createElement("li",null,c.a.createElement("a",{onClick:function(){var e=i()(".large-header").height(),a=i()("section#about").height(),t=i()("div#projects").height();i()("html, body").animate({scrollTop:e+a+t+5},600)},id:"contact",className:"page-link",href:"#contact"},"Contact")))},j=function(e,a){switch(a.type){case"FETCH_ABOUT":return Object(m.a)({},e,{about:a.about,homeLoaded:!0});case"UPDATE_ABOUT":return Object(m.a)({},e,{message:a.message,color:a.color,completed:!0});default:return e}},y=Object(n.createContext)(),O={error:null},C=function(e){var a=Object(n.useReducer)(j,O),t=Object(s.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){!function(e){var a;f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,f.a.awrap(v.firestore().collection("About").get());case 3:t.sent.docs.map((function(e){return console.log(e),a.push(Object(m.a)({id:e.id},e.data())),null})),e({type:"FETCH_ABOUT",about:a});case 6:case"end":return t.stop()}}))}(o)}),[]),c.a.createElement(y.Provider,{value:{about:r,dispatch:o}},e.children)},x=function(){Object(n.useEffect)((function(){var e=i()(".animation-element"),a=i()(window);a.on("scroll resize",(function(){var t=a.height(),n=a.scrollTop(),c=n+t;i.a.each(e,(function(){var e=i()(this),a=e.outerHeight(),t=e.offset().top;t+a>=n&&t<=c&&e.addClass("in-view")}))}))}));var e=Object(n.useContext)(y).about,a=e&&e.about,t=a&&a[0],r=t&&t.imageUrl,o=a&&a[0],l=o&&o.aboutText,s=a&&a[1],m=s&&s.skills;return console.log(m),c.a.createElement("section",{id:"about",className:""},c.a.createElement("header",{className:"header animation-element"},"About"),c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-item animation-element"},c.a.createElement("div",null,c.a.createElement("img",{alt:"MyPhoto",src:r&&r})),c.a.createElement("div",{className:"about-image-text-item"},l&&l)),c.a.createElement("div",{className:"about-item"},c.a.createElement("div",{className:"skills-bar animation-element"},m&&m.map((function(e){return c.a.createElement("div",{key:e.name,className:"bar-item"},c.a.createElement("div",{className:"barLabel"},e.name),c.a.createElement("div",{className:"bar animation-element"}),c.a.createElement("span",{className:"skill-val"},e.value,"%"))}))),c.a.createElement("div",{id:"box"}))))},k=function(e,a){switch(a.type){case"FETCH_PROJECT":return Object(m.a)({},e,{project:a.project,homeLoaded:!0});default:return e}},T=Object(n.createContext)(),A={error:null},S=function(e){var a=Object(n.useReducer)(k,A),t=Object(s.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){!function(e){var a;f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,f.a.awrap(v.firestore().collection("Projects").get());case 3:t.sent.docs.map((function(e){return a.push(Object(m.a)({id:e.id},e.data())),null})),console.log(a),e({type:"FETCH_PROJECT",project:a});case 7:case"end":return t.stop()}}))}(o)}),[]),c.a.createElement(T.Provider,{value:{project:r,dispatch:o}},e.children)},H=function(){var e,a=Object(n.useContext)(T).project,t=window.innerWidth;e=t<=500?2:4;var r=Object(n.useState)({start:0,end:e}),o=Object(s.a)(r,2),l=o[0],m=o[1],u=a&&a.project,d=u&&u.length,f=u&&u.slice(l.start,l.end);Object(n.useEffect)((function(){i()(".project-card-container").fadeIn()}),l),l.end>d&&(i()(".next-btn").css("opacity","0.5"),console.log("end")),0===l.start&&i()(".previous-btn").css("opacity","0.5");return c.a.createElement("div",{id:"projects",className:""},c.a.createElement("header",{className:"header animation-element"},"Projects"),c.a.createElement("div",{className:"project-card-container"},f&&f.map((function(e){return c.a.createElement("div",{key:e.imageUrl,className:"project-image-container"},c.a.createElement("img",{alt:"ProjectImage",className:"animation-element",src:e.imageUrl}),c.a.createElement("div",{className:"project-image-text"},c.a.createElement("span",null,e.Name),c.a.createElement("span",null,e.Speciality),c.a.createElement("span",null,c.a.createElement("a",{target:"__blank",href:e.projectUrl},"Learn More"))))}))),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"buttons"},c.a.createElement("img",{className:"previous-btn",onClick:function(){i()(".next-btn").css("opacity","1"),0===l.start||(m({start:l.start-e,end:l.end-e}),console.log(l))},style:{width:"30px"},src:"https://www.svgrepo.com/show/247763/left-arrow-previous.svg",alt:""}),c.a.createElement("img",{className:"next-btn",onClick:function(){i()(".previous-btn").css("opacity","1"),console.log(l.start),l.end>d||(m({start:l.end,end:l.end+e}),console.log(l))},style:{width:"30px"},src:"https://www.svgrepo.com/show/247777/right-arrow-next.svg",alt:""}))))},M=(t(31),function(e){var a=e.ContactMessage,t=Object(n.useState)(""),r=Object(s.a)(t,2),o=r[0],l=r[1],m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],f=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),v=h[0],E=h[1],b=new Date,g=["January","February","March","April","May","June","July","August","September","October","November","December"][b.getMonth()],w=String(b.getDate()).padStart(2,"0")+" "+g+","+b.getFullYear();return c.a.createElement("div",{className:"form animation-element"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(""),E(""),f("");i.a.ajax({url:"https://script.google.com/macros/s/AKfycbyXF9abdnAwyNmA38tDsHD-sGSZDXpRkNl7hfQrgcicfEtR1tR_/exec",method:"GET",dataType:"json",data:i()("form").serialize()}).then((function(){a("Message Sent successfully")})).catch((function(e){a("Your message could'nt be sent")}))},className:"message-form"},c.a.createElement("div",{className:"form-item-container"},c.a.createElement("input",{placeholder:"Name",className:"message-input",type:"text",name:"Name",onChange:function(e){E(e.target.value)},value:v,required:!0})),c.a.createElement("div",{className:"form-item-container"},c.a.createElement("input",{value:o,placeholder:"Enter email",className:"message-input",type:"email",name:"Email",onChange:function(e){l(e.target.value)},required:!0})),c.a.createElement("div",{className:"form-item-container"},c.a.createElement("textarea",{value:d,className:"message-input",placeholder:"Your Message",type:"text",name:"Message",onChange:function(e){f(e.target.value)},required:!0})),c.a.createElement("div",{style:{display:"none"},className:"hidden-fields"},c.a.createElement("label",null,"Issue Date"),c.a.createElement("input",{defaultValue:w,type:"text",name:"Date"})),c.a.createElement("div",{className:"text-center"},c.a.createElement("input",{className:"submit-button",type:"submit",id:"submit",value:"SUBMIT"}))))}),P=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:""},c.a.createElement("a",{rel:"noopener noreferrer",onClick:function(){i()("html, body").animate({scrollTop:100},600)}},c.a.createElement("i",{className:"footer-arrow fas fa-angle-double-up"}))),c.a.createElement("div",{className:"contact-icons"},c.a.createElement("a",{rel:"noopener noreferrer",id:"insta",target:"_blank",href:"http://instagram.com"},c.a.createElement("i",{className:"fab icon fa-instagram"})),c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://github.com"},c.a.createElement("i",{className:"fab icon fa-github"})),c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://gmail.com"},c.a.createElement("i",{className:"far icon fa-envelope"})),c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://twitter.com"},c.a.createElement("i",{className:"fab icon fa-twitter"}))),c.a.createElement("div",{className:"footnote"},c.a.createElement("span",{className:"foot-name"},"Priya Bihani"),c.a.createElement("span",{className:"rights"},"\xa92020")))},_=function(){var e=Object(n.useState)("Have a question? Ping me..."),a=Object(s.a)(e,2),t=a[0],r=a[1];return c.a.createElement("div",{className:"bottom-content"},c.a.createElement("div",{id:"contact",className:"contact"},c.a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 102",height:"35",width:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"svgcolor-light"},c.a.createElement("path",{d:"M0 0 L50 100 L100 0 Z",fill:"#f7f7ff",stroke:"white"})),c.a.createElement("div",{className:"contact-heading animation-element"},"CONTACT"),c.a.createElement("div",{className:"question animation-element"},t),c.a.createElement("div",{className:"form animation-element"},c.a.createElement(M,{ContactMessage:function(e){console.log(e),r(e)}}))),c.a.createElement(P,null))},D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null,c.a.createElement(C,null,c.a.createElement(S,null,c.a.createElement(w,null),c.a.createElement(N,null),c.a.createElement(x,null),c.a.createElement(H,null),c.a.createElement(_,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.cb6d0bd1.chunk.js.map