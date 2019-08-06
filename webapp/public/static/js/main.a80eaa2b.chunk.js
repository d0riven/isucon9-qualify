(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(261)},172:function(e,t,a){},173:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=(a(172),a(41)),s=(a(173),a(37)),u=a(289),l=a(9),m=a(18),p=a(16),d=a(12),h=a(14),g=a(15),f=a(282),b=a(283),E=a(285),v=a(286),y=a(287),O=a(288),j=a(284),_=a(19),C=a.n(_),N=a(97),w=function(e){var t=e.id,a=e.error;return r.a.createElement(N.a,{key:a,id:t,error:!0},a)},I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={accountName:"",password:""},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeAccountName=a._onChangeAccountName.bind(Object(h.a)(a)),a._onChangePassword=a._onChangePassword.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.accountName,n=t.password;this.props.onSubmit(a,n)}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.accountName,a=e.password,n=this.props.classes;return r.a.createElement("div",{className:n.paper},r.a.createElement(b.a,{className:n.avatar},r.a.createElement(j.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8"),r.a.createElement("form",{className:n.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"accountName",label:"\u30e6\u30fc\u30b6\u540d",name:"accountName",autoFocus:!0,value:t,onChange:this._onChangeAccountName}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",autoComplete:"current-password",value:a,onChange:this._onChangePassword}),this.props.error&&r.a.createElement(w,{id:"signInButton",error:this.props.error}),r.a.createElement(y.a,{id:"signInButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:this._onSubmit,className:n.submit},"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:Ft.register.path},"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089")))))}}]),t}(r.a.Component),k=C()(function(e){return Object(f.a)({paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(I),S=a(22),T=a(38),x=a.n(T),P=a(56),U={apiUrl:"http://localhost:8000",paymentUrl:"http://localhost:5555"},B=a(84),A=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).res=void 0,n.res=a,n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"getResponse",value:function(){return this.res}}]),t}(Object(B.a)(Error)),F=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),t}(A),R=new(function(){function e(){Object(l.a)(this,e),this.baseUrl=U.apiUrl,this.defaultHeaders={}}return Object(m.a)(e,[{key:"get",value:function(){var e=Object(P.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl).concat(t),{method:"GET",headers:this.defaultHeaders});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(P.a)(x.a.mark(function e(t){var a,n,r=arguments;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:{},n={method:"POST",mode:"same-origin",headers:Object.assign({},this.defaultHeaders,{"Content-Type":"application/json"}),credentials:"same-origin"},e.next=4,this.getCsrfToken();case 4:return a.csrf_token=e.sent,a&&(n.body=JSON.stringify(a)),e.next=8,fetch("".concat(this.baseUrl).concat(t),n);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCsrfToken",value:function(){var e=Object(P.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/settings",{method:"GET",headers:this.defaultHeaders});case 2:if((t=e.sent).ok){e.next=5;break}throw new F("CSRF token\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f",t);case 5:return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a.csrf_token);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}()),L=a(24),D="LOGIN_SUCCESS",H="LOGIN_FAIL";function G(e,t){return function(a){R.post("/login",{account_name:e,password:t}).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;a((t={userId:e.id,accountName:e.account_name,address:e.address},{type:D,payload:t})),a(Object(L.d)(Ft.top.path))}).catch(function(e){var t;a((t={error:e.message},{type:H,payload:t}))})}}var W=Object(S.c)(function(e){return{error:e.formError.error}},function(e){return{onSubmit:function(t,a){e(G(t,a))}}})(k),q=Object(u.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),M=function(){var e=q();return r.a.createElement("div",{className:e.paper},r.a.createElement(W,null))},z=a(35),V=a.n(z),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={accountName:"",address:"",password:""},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeAccountName=a._onChangeAccountName.bind(Object(h.a)(a)),a._onChangeAddress=a._onChangeAddress.bind(Object(h.a)(a)),a._onChangePassword=a._onChangePassword.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault(),this.props.register({account_name:this.state.accountName,address:this.state.address,password:this.state.password})}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.accountName,n=t.address,i=t.password;return r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u65b0\u898f\u767b\u9332"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u30e6\u30fc\u30b6\u540d",name:"name",value:a,onChange:this._onChangeAccountName,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"address",label:"\u4f4f\u6240",name:"address",value:n,onChange:this._onChangeAddress}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",value:i,onChange:this._onChangePassword}),this.props.error&&r.a.createElement(w,{id:"signUpButton",error:this.props.error}),r.a.createElement(y.a,{id:"signUpButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u65b0\u898f\u767b\u9332"),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:Ft.login.path},"\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089")))))}}]),t}(r.a.Component),Y=C()(function(e){return Object(f.a)({paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(J),K="REGISTER_SUCCESS",Q="REGISTER_FAIL";function X(e){return function(t){R.post("/register",e).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var a;t((a={userId:e.id,accountName:e.account_name,address:e.address},{type:K,payload:a})),t(Object(L.d)(Ft.top.path))}).catch(function(e){var a;t((a={error:e.message},{type:Q,payload:a}))})}}var Z=Object(S.c)(function(e){return{error:e.formError.error}},function(e){return{register:function(t){e(X(t))}}})(Y),$=V()(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),ee=function(){var e=$();return r.a.createElement("div",{className:e.paper},r.a.createElement(Z,null))},te=a(147),ae=a.n(te),ne=a(148),re=a.n(ne),ie=a(290),ce=a(63),oe=a.n(ce),se=a(146),ue=a.n(se),le=a(85),me=a.n(le),pe=a(149),de=a.n(pe),he=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={imagePreviewUrl:""},a._handleImageChange=a._handleImageChange.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_handleImageChange",value:function(e){var t=this;if(e.preventDefault(),null!==e.target.files){var a=new FileReader,n=e.target.files[0];a.onloadend=function(){if("string"!==typeof a.result)throw new Error;t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}}},{key:"render",value:function(){var e=this.props.classes,t=this.state.imagePreviewUrl,a=null;return console.log(t),a=t?r.a.createElement("img",{alt:"\u30d7\u30ec\u30d3\u30e5\u30fc",src:t}):r.a.createElement(ae.a,null,r.a.createElement(re.a,{className:e.avatar},r.a.createElement(ie.a,null)),r.a.createElement(oe.a,null,"\u5546\u54c1\u753b\u50cf")),r.a.createElement(me.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(me.a,{item:!0,xs:8},a),r.a.createElement(me.a,{item:!0,xs:4},r.a.createElement("input",{accept:"image/*",className:e.upload,id:"outlined-button-file",type:"file",onChange:this._handleImageChange}),r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(de.a,{variant:"outlined",component:"span",className:e.button},"Upload"))))}}]),t}(r.a.Component),ge=C()(function(e){return ue()({upload:{display:"none"},avatar:{margin:e.spacing(1)},button:{margin:e.spacing(1)}})})(he),fe=a(81),be=a.n(fe),Ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:"",price:0},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeName=a._onChangeName.bind(Object(h.a)(a)),a._onChangeDescription=a._onChangeDescription.bind(Object(h.a)(a)),a._onChangePrice=a._onChangePrice.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.description,r=t.price;this.props.sellItem(a,n,r)}},{key:"_onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"_onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"_onChangePrice",value:function(e){var t=e.target.value;be.a.isNumeric(t,{no_symbols:!0})?this.setState({price:Number(t)}):e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.name,n=t.description,i=t.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u51fa\u54c1\u30da\u30fc\u30b8"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(ge,null),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u5546\u54c1\u540d",name:"name",value:a,onChange:this._onChangeName,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"description",label:"\u5546\u54c1\u8aac\u660e",name:"description",value:n,onChange:this._onChangeDescription,multiline:!0,rows:5}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"price",label:"\u5024\u6bb5",name:"price",value:i,onChange:this._onChangePrice}),this.props.error&&r.a.createElement(w,{id:"sellButton",error:this.props.error}),r.a.createElement(y.a,{id:"sellButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u51fa\u54c1\u3059\u308b")))}}]),t}(r.a.Component),ve=C()(function(e){return Object(f.a)({form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(Ee),ye="SELLING_ITEM_SUCCESS",Oe="SELLING_ITEM_FAIL";function je(e,t,a){return function(n){var r={name:e,description:t,price:a};R.post("/sell",r).then(function(e){if(!e.ok)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;n((t=e.id,{type:ye,payload:{itemId:t}})),n(Object(L.d)(Ft.top.path))}).catch(function(e){var t;n((t={error:e.message},{type:Oe,payload:t}))})}}var _e=Object(S.c)(function(e){return{error:e.formError.error}},function(e){return{sellItem:function(t,a,n){e(je(t,a,n))}}})(ve),Ce=a(155),Ne=a(292),we=a(293),Ie=a(291),ke=Object(u.a)(function(e){return{progress:{margin:e.spacing(2)}}}),Se=function(){var e=ke();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie.a,{className:e.progress}))},Te=Object(Ce.a)({palette:{background:{default:"white"}}}),xe=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(Ne.a,{theme:Te},r.a.createElement(we.a,{maxWidth:"lg"},this.props.isLoading?r.a.createElement(Se,null):this.props.children))}}]),t}(r.a.Component),Pe="NOT_FOUND_ERROR",Ue="INTERNAL_SERVER_ERROR";var Be=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),t}(Object(B.a)(Error));var Ae=function(){return{type:"FETCH_ITEM_PAGE_START"}},Fe=function(e){return{type:"FETCH_ITEM_PAGE_SUCCESS",payload:{item:e}}},Re=function(){return{type:"FETCH_ITEM_PAGE_FAIL"}},Le=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case Pe:return{errorType:"NOT_FOUND",errorCode:404};case Ue:case"FETCH_ITEM_PAGE_FAIL":return{errorType:"INTERNAL_SERVER_ERROR",errorCode:500};default:return{errorType:"NO_ERROR"}}},De=a(57),He=function(){return r.a.createElement("div",null,"404 Not Found")},Ge=function(){return r.a.createElement("div",null,"Internal Server Error")},We=function(e){return function(){return r.a.createElement(xe,{isLoading:!0},r.a.createElement(e,null))}},qe=function(){return Object(De.b)(Object(De.d)(function(e){return{errorType:e.errorType}}),Object(De.a)(function(e){return"NOT_FOUND"===e.errorType},Object(De.c)(He)),Object(De.a)(function(e){return"INTERNAL_SERVER_ERROR"===e.errorType},Object(De.c)(Ge)))},Me=Object(u.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),ze=qe()(function(){var e=Me();return r.a.createElement("div",{className:e.paper},r.a.createElement(_e,null))}),Ve=We(function(){return r.a.createElement("div",null,"Item Edit Page")}),Je=a(151),Ye=a.n(Je),Ke=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e)))._onClick=a._onClick.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onClick",value:function(e){e.preventDefault(),this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.buttonName,r=e.classes;return n.createElement(n.Fragment,null,n.createElement(y.a,{className:r.button,disabled:t,onClick:this._onClick},a),t&&n.createElement(Ie.a,{size:24,className:r.buttonProgress}))}}]),t}(n.Component),Qe=C()(function(e){return Object(f.a)({button:{margin:e.spacing(3,0,1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})(Ke),Xe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={cardNumber:""},a._onChangeCardNumber=a._onChangeCardNumber.bind(Object(h.a)(a)),a._onClickBuyButton=a._onClickBuyButton.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onChangeCardNumber",value:function(e){var t=e.target.value;t.length>8||(be.a.isHexadecimal(t)||""===t)&&this.setState({cardNumber:t.toUpperCase()})}},{key:"_onClickBuyButton",value:function(e){var t=this.props.item.id,a=this.state.cardNumber;this.props.onBuyAction(t,a)}},{key:"render",value:function(){var e=this.props,t=e.item,a=e.errors,n=e.classes,i=e.loadingBuy,c=a.cardError,o=a.buyError;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:n.itemImage,alt:t.name,src:t.thumbnailUrl}),r.a.createElement(oe.a,{variant:"h4"},t.name),r.a.createElement(oe.a,{variant:"h5"},"\xa5".concat(t.price)),r.a.createElement("form",{className:n.form,noValidate:!0},r.a.createElement(Ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"cardNumber",label:"\u30ab\u30fc\u30c9\u756a\u53f7",name:"cardNumber",helperText:"16\u9032\u6570\u5927\u6587\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",error:!!c,value:this.state.cardNumber,onChange:this._onChangeCardNumber,autoFocus:!0}),c&&r.a.createElement(w,{id:"cardNumber",error:c}),r.a.createElement(Qe,{onClick:this._onClickBuyButton,buttonName:"\u8cfc\u5165",loading:i}),o&&r.a.createElement(w,{id:"buyButton",error:o})))}}]),t}(r.a.Component),Ze=C()(function(e){return Object(f.a)({itemImage:{width:"100%",maxWidth:"500px",height:"auto",textAlign:"center"},form:{width:"100%",marginTop:e.spacing(3,0,1)}})})(Xe),$e=new(function(){function e(){Object(l.a)(this,e),this.baseUrl=U.paymentUrl,this.defaultHeaders={}}return Object(m.a)(e,[{key:"get",value:function(){var e=Object(P.a)(x.a.mark(function e(t){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl).concat(t),{method:"GET",headers:this.defaultHeaders});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(P.a)(x.a.mark(function e(t,a){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",mode:"cors",headers:Object.assign({},this.defaultHeaders,{"Content-Type":"application/json"}),credentials:"same-origin"},a&&(n.body=JSON.stringify(a)),e.next=4,fetch("".concat(this.baseUrl).concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),et=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),t}(A),tt="BUY_START",at="BUY_SUCCESS",nt="BUY_FAIL",rt="USING_CARD_FAIL";function it(e,t){return function(a){Promise.resolve(function(){a({type:tt})}).then(function(){return $e.post("/card",{card_number:t,shop_id:"11"})}).then(function(e){if(!e.ok)throw new et("request to /card of payment service was failed",e);return e.json()}).then(function(t){return R.post("/buy",{item_id:e,token:t.token})}).then(function(e){if(!e.ok)throw new F("request to /buy of app was failed",e);return e.json()}).then(function(e){a({type:at}),a(Object(L.d)(Ft.buyComplete.path))}).catch(function(e){if(e instanceof A)return e.getResponse().json();var t;a((t=e.message,{type:nt,payload:{error:void 0,buyFormError:{buyError:t}}}))}).then(function(e){var t;e&&a((t=e.error,{type:rt,payload:{error:void 0,buyFormError:{cardError:t}}}))})}}var ct,ot=Object(S.c)(function(e){return{item:e.viewingItem.item,errors:e.formError.buyFormError,loadingBuy:e.buyPage.loadingBuy}},function(e){return{onBuyAction:function(t,a){e(it(t,a))}}})(Ze),st=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot,null))},ut=We(function(){return r.a.createElement("div",null,"Transaction Page")}),lt=a(297),mt=a(294),pt=a(295),dt=V()(function(e){return{itemImage:{height:"100%"}}}),ht=function(e){var t=e.itemId,a=e.imageUrl,n=e.title,i=e.price,c=dt();return r.a.createElement(mt.a,null,r.a.createElement(o.a,{to:Ft.item.getPath(t)},r.a.createElement("img",{className:c.itemImage,src:a,alt:n})),r.a.createElement(pt.a,{title:n,subtitle:"\xa5".concat(i)}))},gt=a(296),ft=V()(function(e){return{grid:{width:"300px",height:"300px"}}}),bt=function(e){var t=e.items,a=ft(),n=[],i=!0,c=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value;n.push(r.a.createElement(gt.a,{className:a.grid,key:l.id},r.a.createElement(ht,{itemId:l.id,imageUrl:l.thumbnailUrl,title:l.name,price:l.price})))}}catch(m){c=!0,o=m}finally{try{i||null==u.return||u.return()}finally{if(c)throw o}}return r.a.createElement(lt.a,{cols:3},n)},Et=a(299),vt=a(152),yt=a.n(vt),Ot=a(298),jt=V()(function(e){return{fab:{margin:e.spacing(1),position:"fixed",top:"auto",bottom:"30px",right:"30px",width:"100px",height:"100px"}}}),_t=Object(S.c)(function(e){return{}},function(e){return{onClick:function(t){t.preventDefault(),e(Object(L.d)(Ft.sell.path))}}})(function(e){var t=e.onClick,a=jt();return r.a.createElement(yt.a,{className:a.fab,color:"secondary",onClick:t},r.a.createElement(Ot.a,{fontSize:"large"}))}),Ct={id:1235,accountName:"Kirin",address:"Tokyo",numSellItems:0},Nt=[{id:1,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:2,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:3,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:4,status:"on_sale",sellerId:1111,seller:{id:1111,accountName:"sota1235",address:"",numSellItems:1},buyerId:2222,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"}],wt=V()(function(e){return{avatar:{margin:e.spacing(3),width:"100px",height:"100px"},itemList:{marginTop:e.spacing(4)}}}),It=We(function(){var e=wt(),t=Ct,a=Nt;return r.a.createElement("div",null,r.a.createElement("p",null,"User Page"),r.a.createElement(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(O.a,{item:!0},r.a.createElement(b.a,{className:e.avatar},t.accountName.charAt(0))),r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"h3"},t.accountName))),r.a.createElement(Et.a,{variant:"middle"}),r.a.createElement("div",{className:e.itemList},r.a.createElement(bt,{items:a})),r.a.createElement(_t,null))}),kt=We(function(){return r.a.createElement("div",null,"User setting Page")}),St=We(function(){return r.a.createElement("div",null,"Item buying Page")}),Tt=V()(function(e){return{root:{display:"flex",flexWrap:"wrap",marginTop:e.spacing(1),justifyContent:"space-around",overflow:"hidden"}}}),xt=qe()(function(){var e=Tt(),t=Nt;return r.a.createElement("div",{className:e.root},r.a.createElement(bt,{items:t}),r.a.createElement(_t,null))}),Pt=a(300),Ut=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).props.load(a.props.match.params.item_id),a._onClickBuyButton=a._onClickBuyButton.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_onClickBuyButton",value:function(e){e.preventDefault(),this.props.onClickBuy(this.props.item.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.item,n=e.isLoading;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(Se,null):r.a.createElement(r.a.Fragment,null,"Item Page",r.a.createElement(E.a,{className:t.title,variant:"h3"},a.name),r.a.createElement(O.a,{container:!0,spacing:2},r.a.createElement(O.a,{item:!0},r.a.createElement("img",{className:t.itemImage,alt:a.name,src:a.thumbnailUrl})),r.a.createElement(O.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(O.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement("div",{className:t.descSection},r.a.createElement(E.a,{variant:"h4"},"\u5546\u54c1\u8aac\u660e"),r.a.createElement(Et.a,{className:t.divider,variant:"middle"}),r.a.createElement(E.a,{variant:"body1"},a.description)),r.a.createElement("div",{className:t.descSection},r.a.createElement(E.a,{variant:"h4"},"\u51fa\u54c1\u8005"),r.a.createElement(Et.a,{className:t.divider,variant:"middle"}),r.a.createElement(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(O.a,{item:!0},r.a.createElement(o.a,{className:t.link,to:Ft.user.getPath(a.sellerId)},r.a.createElement(b.a,{className:t.avatar},a.seller.accountName.charAt(0)))),r.a.createElement(O.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"body1"},a.seller.accountName)))))))),r.a.createElement(Pt.a,{color:"primary",position:"fixed",className:t.appBar},r.a.createElement(O.a,{container:!0,spacing:2,direction:"row",alignItems:"center"},r.a.createElement(O.a,{item:!0},r.a.createElement(E.a,{variant:"h5"},"\xa5",a.price)),r.a.createElement(O.a,{item:!0},r.a.createElement(y.a,{variant:"contained",className:t.buyButton,onClick:this._onClickBuyButton},"\u8cfc\u5165"))))))}}]),t}(r.a.Component),Bt=qe()(C()(function(e){return Object(f.a)({title:{margin:e.spacing(3)},itemImage:{width:"100%",maxWidth:"500px",height:"auto"},avatar:{width:"50px",height:"50px"},divider:{margin:e.spacing(1)},descSection:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},link:{textDecoration:"none"},appBar:{top:"auto",bottom:0},buyButton:{margin:e.spacing(1)}})})(Ut)),At=Object(S.c)(function(e){return{item:e.viewingItem.item,errorType:e.error.errorType,isLoading:e.page.isLoading}},function(e){return{load:function(t){e(function(e){return function(t){Promise.resolve(function(){t(Ae())}).then(function(){return R.get("/items/".concat(e,".json"))}).then(function(e){if(!e.ok){if(404===e.status)throw new Be("Item not found");throw new F("Request for getting item data was failed",e)}return e.json()}).then(function(e){t(Fe({id:e.id,status:e.status,sellerId:e.seller_id,seller:{id:e.seller.id,accountName:e.seller.account_name,numSellItems:e.seller.num_sell_items},buyerId:e.buyer_id,buyer:e.buyer,name:e.name,price:e.price,thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png",description:e.description}))}).catch(function(e){t(Re())})}}(t))},onClickBuy:function(t){e(Object(L.d)(Ft.buy.getPath(t)))}}})(Bt),Ft={top:{path:"/",getPath:function(){return"/"}},login:{path:"/login",getPath:function(){return"/login"}},register:{path:"/register",getPath:function(){return"register"}},sell:{path:"/sell",getPath:function(){return"/sell"}},item:{path:"/items/:item_id",getPath:function(e){return"/items/".concat(e)}},itemEdit:{path:"/items/:item_id/edit",getPath:function(e){return"/items/".concat(e,"/edit")}},buy:{path:"/items/:item_id/buy",getPath:function(e){return"/items/".concat(e,"/buy")}},buyComplete:{path:"/buy/complete",getPath:function(){return"/buy/complete"}},transaction:{path:"/transactions/:transaction_id",getPath:function(e){return"/transactions/".concat(e)}},user:{path:"/users/:user_id",getPath:function(e){return"/users/".concat(e)}},userSetting:{path:"/users/setting",getPath:function(){return"/users/setting"}}},Rt=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:Ft.top.path,component:xt}),r.a.createElement(s.a,{exact:!0,path:Ft.login.path,component:M}),r.a.createElement(s.a,{exact:!0,path:Ft.register.path,component:ee}),r.a.createElement(s.a,{exact:!0,path:Ft.sell.path,component:ze}),r.a.createElement(s.a,{exact:!0,path:Ft.item.path,component:At}),r.a.createElement(s.a,{exact:!0,path:Ft.itemEdit.path,component:Ve}),r.a.createElement(s.a,{exact:!0,path:Ft.buy.path,component:st}),r.a.createElement(s.a,{exact:!0,path:Ft.buyComplete.path,component:St}),r.a.createElement(s.a,{exact:!0,path:Ft.transaction.path,component:ut}),r.a.createElement(s.a,{exact:!0,path:Ft.user.path,component:It}),r.a.createElement(s.a,{exact:!0,path:Ft.userSetting.path,component:kt}))},Lt=[{path:"/",pageName:"Top page"},{path:"/login",pageName:"Sign in page"},{path:"/register",pageName:"Sign up page"},{path:"/items/:item_id",pageName:"Item page"},{path:"/items/:item_id/edit",pageName:"Item edit page"},{path:"/items/:item_id/buy",pageName:"Item buy page"},{path:"/buy/complete",pageName:"Buying complete page"},{path:"/sell",pageName:"Sell page"},{path:"/transactions/:transaction_id",pageName:"Transaction page"},{path:"/users/:user_id",pageName:"User page"},{path:"/users/:user_id/setting",pageName:"User setting page"}],Dt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("ul",null,function(){for(var e=[],t=0,a=Lt;t<a.length;t++){var n=a[t];e.push(r.a.createElement("li",{key:n.pageName},r.a.createElement(o.a,{to:n.path},n.pageName)))}return e}())),r.a.createElement("hr",null),r.a.createElement(Rt,null))},Ht=a(28),Gt=a(39),Wt=a(156),qt=a(48),Mt=a(140),zt=a(153),Vt=a(154),Jt=[function(e){var t=e.getState;return function(e){return function(a){console.group(a.type),console.info("dispatching",a);var n=e(a);return console.log("next state",t()),console.groupEnd(),n}}}],Yt=a(26),Kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:case K:return Object(Yt.a)({},e,t.payload);default:return e}},Qt={error:void 0,buyFormError:{}},Xt=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H:case Q:case Oe:return Object(Yt.a)({},e.payload);default:return Qt}},Zt={},$t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEM_PAGE_SUCCESS":return Object(Yt.a)({},e,{item:t.payload.item});default:return e}},ea={isLoading:!0},ta=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ea;switch((arguments.length>1?arguments[1]:void 0).type){case"FETCH_ITEM_PAGE_START":return Object(Yt.a)({},e,{isLoading:!0});case"FETCH_ITEM_PAGE_SUCCESS":case"FETCH_ITEM_PAGE_FAIL":return Object(Yt.a)({},e,{isLoading:!1});default:return Object(Yt.a)({},e)}},aa={loadingBuy:!1},na=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:aa;switch((arguments.length>1?arguments[1]:void 0).type){case tt:return Object(Yt.a)({},e,{loadingBuy:!0});case at:case nt:case rt:return Object(Yt.a)({},e,{loadingBuy:!1});default:return Object(Yt.a)({},e)}},ra=Object(Ht.a)(),ia=function(e,t){return Object(qt.createStore)(e,Object(Vt.composeWithDevTools)(qt.applyMiddleware.apply(void 0,[zt.a,Object(Mt.a)(t)].concat(Object(Wt.a)(Jt)))))}((ct=ra,Object(qt.combineReducers)({router:Object(Gt.b)(ct),authStatus:Kt,formError:Xt,viewingItem:$t,error:Le,page:ta,buyPage:na})),ra);c.a.render(r.a.createElement(S.a,{store:ia},r.a.createElement(Gt.a,{history:ra},r.a.createElement(Dt,null))),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.a80eaa2b.chunk.js.map