(this["webpackJsonpvoting-app"]=this["webpackJsonpvoting-app"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":1,"name":"FC Barcelona","logo":"fcb.png","votes":0},{"id":2,"name":"Juventus F.C.","logo":"juventus.png","votes":0},{"id":3,"name":"Manchester United F.C.","logo":"mu.png","votes":0}]')},33:function(e,t,n){},54:function(e){e.exports=JSON.parse("{}")},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(26),c=n.n(o),s=(n(33),n(4)),i=n.n(s),l=n(10),u=n(2),d=n(12),j=n(13),h=n(15),b=n(14),p=n(6),g=n.n(p),v=n(0),O=Object(a.createContext)(),f=g.a.create({baseURL:"http://localhost/php-login-registration-api/"}),m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={showLogin:!0,isAuth:!1,theUser:null},e.toggleNav=function(){var t=!e.state.showLogin;e.setState(Object(u.a)(Object(u.a)({},e.state),{},{showLogin:t}))},e.logoutUser=function(){localStorage.removeItem("loginToken"),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{isAuth:!1}))},e.registerUser=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("register.php",{name:t.name,email:t.email,password:t.password});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.loginUser=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("login.php",{email:t.email,password:t.password});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.isLoggedIn=Object(l.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=localStorage.getItem("loginToken"))){t.next=8;break}return f.defaults.headers.common.Authorization="bearer "+n,t.next=5,f.get("user-info.php");case 5:a=t.sent,(r=a.data).success&&r.user&&e.setState(Object(u.a)(Object(u.a)({},e.state),{},{isAuth:!0,theUser:r.user}));case 8:case"end":return t.stop()}}),t)}))),e.isLoggedIn(),e}return Object(j.a)(n,[{key:"render",value:function(){var e={rootState:this.state,toggleNav:this.toggleNav,isLoggedIn:this.isLoggedIn,registerUser:this.registerUser,loginUser:this.loginUser,logoutUser:this.logoutUser};return Object(v.jsx)(O.Provider,{value:e,children:this.props.children})}}]),n}(a.Component),x=Object(a.createContext)(),S=g.a.create({baseURL:"http://localhost/php-voting-api/"}),C=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={cand_data:null},e.readCand=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.a.get("https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories").then((function(t){e.setState({cand_data:t.data.items})})).catch((function(t){console.error("error: ",t),e.setState({error:"".concat(t),loading:!1})})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(n,[{key:"addVote",value:function(e){return function(){return S.post("add-one-vote.php",{id:e}).then((function(e){return console.log(e),"lolol"})).catch((function(e){console.log(e)}))}}},{key:"componentDidMount",value:function(){this.readCand()}},{key:"render",value:function(){var e={voteState:this.state,addVote:this.addVote,readCand:this.readCand};return Object(v.jsx)(x.Provider,{value:e,children:this.props.children})}}]),n}(a.Component),I=Object(a.createContext)(),w=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={loading:!0,error:"",data:null},e.loadData=function(){return e.setState({loading:!0}),g.a.get("http://localhost/php-voting-api/read-candidate.php/").then((function(t){console.log("SALUTATIONS",t.data),e.setState({data:t.data,loading:!1,error:!1})})).catch((function(t){console.error("error: ",t),e.setState({error:"".concat(t),loading:!1})}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error;e.data;if(t)return Object(v.jsx)("p",{children:"Loading ..."});if(n)return Object(v.jsxs)("p",{children:["There was an error loading the repos."," ",Object(v.jsx)("button",{onClick:this.loadData,children:"Try again"})]});var a={obama:this.state};return Object(v.jsx)(I.Provider,{value:a,children:this.props.children})}}]),n}(a.Component),k=Object(a.createContext)(),y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={loading:!0,error:"",voterData:null,voted:!1},e.loadData=function(){return e.setState({loading:!0}),g.a.get("http://localhost/php-voting-api/read-voter.php/").then((function(t){console.log("SALUTATIONS",t.data),e.setState({voterData:t.data,loading:!1,error:!1})})).catch((function(t){console.error("error: ",t),e.setState({error:"".concat(t),loading:!1})}))},e.setVotedState=function(t){e.setState({voted:t})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error;e.voterData;if(t)return Object(v.jsx)("p",{children:"Loading ..."});if(n)return Object(v.jsxs)("p",{children:["There was an error loading the repos."," ",Object(v.jsx)("button",{onClick:this.loadData,children:"Try again"})]});var a={joemamba:this.state,setVotedState:this.setVotedState};return Object(v.jsx)(k.Provider,{value:a,children:this.props.children})}}]),n}(a.Component),N=n(11),U=n(27),D=(n(54),n(58)),L=n(59),M=n(60),T=n(61),A=n(62);g.a.create({baseURL:"http://localhost/php-voting-api/"});var E=function(e){var t=e.team,n=e.voteid,a=e.set,r=(e.get,e.votecount),o=e.remove,c=e.unvoteid,s=e.add,i=e.subtract,l=(e.setCand,e.name),u=e.check,d=e.addActvButn,j=e.getData;return Object(v.jsxs)(T.a,{style:{width:"18rem"},children:[Object(v.jsx)(T.a.Img,{variant:"top",src:"/assets/images/".concat(t.picture)}),Object(v.jsxs)(T.a.Body,{children:[Object(v.jsx)(T.a.Title,{children:l}),Object(v.jsx)(A.a,{id:n,variant:"success",disabled:u(n),onClick:function(){return a(c),s(t.id),d(n),void j()},children:"Vote"}),Object(v.jsx)(A.a,{id:c,variant:"success",disabled:u(c),onClick:function(){return i(t.id),d(c),a(t.id),j(),void o()},children:"Unvote"})]}),Object(v.jsxs)(T.a.Footer,{children:["Vote count: ",r]})]})},R=n(16);var V=function(){var e=Object(a.useContext)(O),t=e.toggleNav,n=e.loginUser,r=e.isLoggedIn,o={userInfo:{email:"",password:""},errorMsg:"",successMsg:""},c=Object(a.useState)(o),s=Object(N.a)(c,2),d=s[0],j=s[1],h=function(e){j(Object(u.a)(Object(u.a)({},d),{},{userInfo:Object(u.a)(Object(u.a)({},d.userInfo),{},Object(R.a)({},e.target.name,e.target.value))}))},b=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n(d.userInfo);case 3:if(!(a=e.sent).success||!a.token){e.next=11;break}return j(Object(u.a)({},o)),localStorage.setItem("loginToken",a.token),e.next=9,r();case 9:e.next=12;break;case 11:j(Object(u.a)(Object(u.a)({},d),{},{successMsg:"",errorMsg:a.message}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p="",g="";return d.errorMsg&&(g=Object(v.jsx)("div",{className:"error-msg",children:d.errorMsg})),d.successMsg&&(p=Object(v.jsx)("div",{className:"success-msg",children:d.successMsg})),Object(v.jsxs)("div",{className:"_loginRegister",children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsxs)("form",{onSubmit:b,noValidate:!0,children:[Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{name:"email",type:"email",required:!0,placeholder:"Enter your email",value:d.userInfo.email,onChange:h})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",{name:"password",type:"password",required:!0,placeholder:"Enter your password",value:d.userInfo.password,onChange:h})]}),g,p,Object(v.jsx)("div",{className:"form-control",children:Object(v.jsx)("button",{type:"submit",children:"Login"})})]}),Object(v.jsx)("div",{className:"_navBtn",children:Object(v.jsx)("button",{onClick:t,children:"Register"})})]})};var F=function(){var e=Object(a.useContext)(O),t=e.toggleNav,n=e.registerUser,r={userInfo:{name:"",email:"",password:""},errorMsg:"",successMsg:""},o=Object(a.useState)(r),c=Object(N.a)(o,2),s=c[0],d=c[1],j=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n(s.userInfo);case 3:(a=e.sent).success?d(Object(u.a)(Object(u.a)({},r),{},{successMsg:a.message})):d(Object(u.a)(Object(u.a)({},s),{},{successMsg:"",errorMsg:a.message}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){d(Object(u.a)(Object(u.a)({},s),{},{userInfo:Object(u.a)(Object(u.a)({},s.userInfo),{},Object(R.a)({},e.target.name,e.target.value))}))},b="",p="";return s.errorMsg&&(p=Object(v.jsx)("div",{className:"error-msg",children:s.errorMsg})),s.successMsg&&(b=Object(v.jsx)("div",{className:"success-msg",children:s.successMsg})),Object(v.jsxs)("div",{className:"_loginRegister",children:[Object(v.jsx)("h1",{children:"Sign Up"}),Object(v.jsxs)("form",{onSubmit:j,noValidate:!0,children:[Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Full Name"}),Object(v.jsx)("input",{name:"name",required:!0,type:"text",value:s.userInfo.name,onChange:h,placeholder:"Enter your name"})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{name:"email",required:!0,type:"email",value:s.userInfo.email,onChange:h,placeholder:"Enter your email"})]}),Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",{name:"password",required:!0,type:"password",value:s.userInfo.password,onChange:h,placeholder:"Enter your password"})]}),p,b,Object(v.jsx)("div",{className:"form-control",children:Object(v.jsx)("button",{type:"submit",children:"Sign Up"})})]}),Object(v.jsx)("div",{className:"_navBtn",children:Object(v.jsx)("button",{onClick:t,children:"Login"})})]})},_=g.a.create({baseURL:"http://localhost/php-voting-api/"});var B=function(){var e=Object(a.useContext)(O),t=e.rootState,n=(e.logoutUser,Object(a.useContext)(I).obama),r=Object(a.useContext)(k),o=r.joemamba,c=(r.castVote,r.uncastVote,n.loading,n.error,n.data),s=(o.voterData,o.voted,Object(a.useContext)(x)),i=s.voteState,l=(s.addVote,s.readCand,t.isAuth),u=t.theUser,d=t.showLogin,j=(i.cand_data,Object(a.useState)([])),h=Object(N.a)(j,2),b=(h[0],h[1]),p=Object(a.useState)("Default"),f=Object(N.a)(p,2),m=f[0],S=f[1],C=Object(a.useState)("Default"),w=Object(N.a)(C,2),y=w[0],T=w[1],A=Object(a.useState)(!1),R=Object(N.a)(A,2),B=(R[0],R[1],Object(a.useState)([])),P=Object(N.a)(B,2),J=P[0],q=P[1],Y=Object(a.useState)(null),H=Object(N.a)(Y,2),z=(H[0],H[1]);function G(e){return function(){return g.a.all([_.post("remove-one-vote.php",{id:e}),_.post("delete-voter.php",{email:u.email}).then((function(e){z(!0)}))])}}return Object(a.useEffect)((function(){b(U),q(c)}),[]),l?Object(v.jsxs)(a.Fragment,{children:[Object(v.jsxs)("div",{className:"userInfo",children:[Object(v.jsx)("div",{className:"_img",children:Object(v.jsx)("span",{role:"img","aria-label":"User Image",children:"\ud83d\udc66"})}),Object(v.jsx)("h1",{children:u.name}),Object(v.jsx)("div",{className:"_email",children:Object(v.jsx)("span",{children:u.email})}),Object(v.jsxs)("button",{onClick:function(e){return t=J[1].votecount,T(t);var t},children:[y,"Logout"]})]}),Object(v.jsxs)(D.a,{className:"app",children:[Object(v.jsxs)("div",{children:[" Yogaba ",Object(v.jsx)("span",{children:c.map((function(e){return e.picture}))})]}),Object(v.jsx)(L.a,{children:J.map((function(e,t){return Object(v.jsxs)(M.a,{md:4,children:[Object(v.jsx)(E,{team:e,add:(n=e.id,function(){return g.a.all([_.post("add-one-vote.php",{id:n}).then((function(e){z(!0)})).catch((function(e){console.log("ADD VOTE ERROR",e)})),_.post("insert-voter.php",{email:u.email,voted_for:n}).then((function(e){console.log(e)})).catch((function(e){console.log("INSERT ERROR",e)}))]).then((function(e){return e})).catch((function(e){console.log("CASTVOTE ERROR",e)}))}),subtract:G(e.id),setCand:function(e){q(c)},votes:e.votecount,name:e.name,voteid:"v-"+e.id,unvoteid:"u-"+e.id,check:function(e){return function(e){var t=localStorage.getItem("activeId");console.log();var n=e.split("-");return console.log("DISABLE"),"Joe"===m?"u"===n[0]&&(console.log("bababaabaa"),!0):"Default"===m?(e===t&&(S(t),console.log("Hey actbtn has a thing it's ",t)),"u"===n[0]&&(console.log("bababaabaa"),!0)):m!==e&&(console.log("Uh oh",m),!0)}(e)},addActvButn:function(e){return function(e){var t=e.split("-"),n="";console.log("ADD"),m===e?S("Joe"):("v"===t[0]?n="u-"+t[1]:"u"===t[0]&&(n="v-"+t[1]),S(n))}(e)},getData:function(){return g.a.get("http://localhost/php-voting-api/read-candidate.php/").then((function(e){console.log("YOYOGETCANDDATAYO",e.data),q(e.data)}))},set:function(e){return function(e){console.log("FUCK YOU SET"),localStorage.setItem("activeId",e);var t=localStorage.getItem("activeId");console.log("Hello, ",t)}(e)},get:function(e){return function(){localStorage.getItem("activeId")}},remove:function(e){return function(){localStorage.removeItem("activeId")}},votecount:J[t].votecount}),Object(v.jsx)("div",{children:J[t].votecount})]});var n}))})]})]}):d?Object(v.jsx)(V,{}):Object(v.jsx)(F,{})};n(55),n(56);var P=function(){return Object(v.jsx)(m,{children:Object(v.jsx)(C,{children:Object(v.jsx)(w,{children:Object(v.jsx)(y,{children:Object(v.jsx)(B,{})})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),J()}},[[57,1,2]]]);
//# sourceMappingURL=main.f79c67fe.chunk.js.map