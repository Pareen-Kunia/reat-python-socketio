(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(99),a(178)),i=a(180),u=a(181),s=a(78),m=a.n(s),d=a(79),h=a.n(d),p=Object(o.a)({root:{flexGrow:1}});function A(){var e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,{position:"static",color:"default"},r.a.createElement(u.a,null,r.a.createElement("img",{src:h.a,alt:"Spark"}),r.a.createElement("div",{className:e.root}),r.a.createElement("img",{src:m.a,alt:"Spark",width:"120"}))))}var E=a(27),f=a(16),g=a(31),b=a(28),O=a(17),v=a(32),S=a(190),k=a(4),C=a(192),y=a(188),j=a(187),w=a(193),G=a(80),x=a(184),I=a(186),U=a(182),Y=a(185),V=a(183),B=a(143),L=a(189),Q=a(44),R=a.n(Q),W=R()("http://localhost:5000"),P=Object(k.a)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(U.a),q=Object(k.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(V.a);function F(e,t,a,n,r){return{manufacturer:e,device:t,fat:a,carbs:n,protein:r}}var N=[F("Samsung","Samsung S10 Green",6,24,4),F("Apple","Apple Iphone X",9,37,4.3),F("Nokia","Nokia Mate 10",16,24,6)],X=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).notifyServer=function(){console.log("in"),W.emit("itemadded",{manufacturer:"Samsung",device:"Samsuncd ..g s10 plus",quantity:1})},a.handleSearch=function(e){return function(t){a.setState(Object(G.a)({},e,t.target.value))}},a.state={manufacturer:"",device:""},a.handleSearch=a.handleSearch.bind(Object(O.a)(a)),a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(B.a,{className:t.root},r.a.createElement(x.a,{className:t.table},r.a.createElement(Y.a,null,r.a.createElement(V.a,null,r.a.createElement(P,null,"Manufacturer"),r.a.createElement(P,null,"Accessory/Device"),r.a.createElement(P,{align:"right"},"Quantity"),r.a.createElement(P,{align:"center"},"Action"))),r.a.createElement(I.a,null,r.a.createElement(V.a,null,r.a.createElement(P,null,r.a.createElement(L.a,{placeholder:"Search...",onChange:this.handleSearch("manufacturer"),value:this.state.manufacturer})),r.a.createElement(P,null,r.a.createElement(L.a,{placeholder:"Search...",onChange:this.handleSearch("device"),value:this.state.device})),r.a.createElement(P,{align:"right"}),r.a.createElement(P,{align:"center"})),N.filter(function(t){return t.manufacturer.toUpperCase().indexOf(e.state.manufacturer.toUpperCase())>-1&&t.device.toUpperCase().indexOf(e.state.device.toUpperCase())>-1}).map(function(t){return r.a.createElement(q,{key:t.device},r.a.createElement(P,{component:"th",scope:"row"},t.manufacturer),r.a.createElement(P,null,t.device),r.a.createElement(P,{align:"right"},r.a.createElement(L.a,{defaultValue:1})),r.a.createElement(P,{align:"right"},r.a.createElement(S.a,{variant:"contained",onClick:e.notifyServer},"Add")))}))))}}]),t}(r.a.Component),Z=Object(k.a)(function(e){return{root:{width:"90%",marginTop:e.spacing(3),overflowX:"auto",marginLeft:e.spacing(3)},table:{minWidth:700}}})(X),J=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={open:!1},a.handleClickOpen=a.handleClickOpen.bind(Object(O.a)(a)),a.handleClose=a.handleClose.bind(Object(O.a)(a)),a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.open;return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,null,r.a.createElement(S.a,{variant:"outlined",color:"secondary",onClick:this.handleClickOpen},"Add to Queue"),r.a.createElement("div",{className:e.root})),r.a.createElement(C.a,{fullScreen:!0,open:t,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(w.a,{id:"form-dialog-title"},"Add to QUEUE"),r.a.createElement(j.a,null,r.a.createElement(Z,null)),r.a.createElement(y.a,null,r.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Cancel"))))}}]),t}(r.a.Component),D=Object(k.a)(function(e){return{root:{flexGrow:1,width:"60%",marginTop:10,marginLeft:10}}})(J),T=R()("http://localhost:5000"),M=Object(k.a)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(U.a),H=Object(k.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(V.a);var K=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={rows:[]},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"setSocketListeners",value:function(){var e=this;T.on("message",function(t){var a,n,r,l,c;console.log(t),e.audio=new Audio("http://resources.schoolscience.co.uk/CDA/CD/files/sound/decorativelamp.mp3"),e.audio.play(),e.setState({rows:[(a="Samsung",n="Samsung S10 Green",r=6,l=24,c=4,{name:a,calories:n,fat:r,carbs:l,protein:c})]})})}},{key:"componentDidMount",value:function(){this.setSocketListeners()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.rows;return r.a.createElement(B.a,{className:e.root},r.a.createElement(x.a,{className:e.table},r.a.createElement(Y.a,null,r.a.createElement(V.a,null,r.a.createElement(M,null,"Manufacturer"),r.a.createElement(M,null,"Accessory/Device"),r.a.createElement(M,{align:"right"},"Quantity"),r.a.createElement(M,{align:"right"},"Created By"),r.a.createElement(M,{align:"right"},"Aisle #"),r.a.createElement(M,{align:"right"},"Ordered at"),r.a.createElement(M,{align:"right"},"Acknowledged By"),r.a.createElement(M,{align:"right"},"Status"),r.a.createElement(M,{align:"center"},"\xa0"))),r.a.createElement(I.a,null,t.map(function(e){return r.a.createElement(H,{key:e.name},r.a.createElement(M,{component:"th",scope:"row"},e.name),r.a.createElement(M,null,e.calories),r.a.createElement(M,{align:"right"}),r.a.createElement(M,{align:"right"}),r.a.createElement(M,{align:"right"}),r.a.createElement(M,{align:"right"}),r.a.createElement(M,{align:"right"}),r.a.createElement(M,{align:"right"}),r.a.createElement(M,{align:"right"}))}))))}}]),t}(r.a.Component),z=Object(k.a)(function(e){return{root:{width:"95%",overflowX:"auto",marginLeft:e.spacing(3)},table:{minWidth:700}}})(K);var _=function(){return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(D,null),r.a.createElement(z,null))};c.a.render(r.a.createElement(_,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a.p+"static/media/Spark_New_Zealand_logo.4e0b1699.svg"},79:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA8CAYAAACEhkNqAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAGAUlEQVR42uxc25WjOBC97jP/o8mAiWCYCJaOoOkIlo1g2AiwI3BnYE8EbkeANwK8EZiJAGfg/aC0VGt4GPOQDXXP4dhGVlFCl6pSIWlxuVwgEPSNJ7kFAiGWQIglEGIJBEIsgRBLIMQSCPrFpyGFLxaLW6p5ABwABwAp/Vb0/dhWmOTp5muxFIAAwA7ABUAMYEPkAoA/qCwBkNF3X7pOiFWHCMCJiORfSUKfyHUSggmxTLhkgZZEFhNb5vb2FS7QIYLtKmQILGIxZAxSEWO55O6qyPA3gLeS83Uu8AjgGcBZYqx5EquJVCmArxVlDrk/tCGXEGv6rlA1kEoT65YyTdqddOn8iLUZIRbyAITSrfMhljfiCC6SYH4+xIpGdrk/pGunTyyXLNaYEHc4A2L9aaFdCpI8nTyxbHXwi3SvRVwul8EO5LmnS4sjblK3xXHi7SP3WPf/zHDfVbq5DXKq9PSurH+h/2hkJXqqLnoM2ef6GNpiORafGccYHb7TUYYz8oy/Ror8tRIvX7GyZcO1l6jOuzXVN+uujPIV6dNVj4e2WJFFi/Xh6WRpjzbXTajcb6ELx6bEYrWpr7GmsnUfekzBYtlG13zWu/HZFn8hn1fWFXvj05YedxO8e5aJ9e0OyL26k4dsNSVizRku8neXB4rfjnPS45P0/6D5Ox2bvc1ND7FYw4UAwZz1GNpipZZv7C9L143vhODW9HiaOLFsXf9wJ8Q6TJVYv2ZKrOc7IZc1PaZssc6Wr//zTqyWFT2GjrFsPrW2LcY7ivn3IelznIseTyM1zAb2PchQHazemdruIH8V89JRj1s9QJ963BWx9hYtRlf4PVi+dQ96vBCpUst63J3FOo9Mqm3FNQ8VneOUnAvpfJcYpW6F97bivKmLizwXtR1Ij2Ew8OwGjWtnOcSG+Q+oro92c7scs31GRyUldfQqIg/FPhKbCrdU1x7d3pNxPiqRsyupn5D+2nXpc6ovPcaY3TAWsRR+n7DWRKwE7afJ/NaBJbqg5qZ7pEOG6gUgLm6bYBfVuNuk5L+RQfje9BiDWGOuhPbRvKD0QLkXoJgp2QZHGKuhdftqtlRymIU70vdjRUcqKhvCtSsUM0dTFnifx/Zgj+QKua+/1mI55ArjKy1Vho9Teju3jyFg1wkwYTyaK2xDLueGOqWk6pFYGbmr8AG5ouPGyROriShJCblCNC+cKBtNqR70d2oIPwQJnJ5lRWjxMvrRiaVjrrqA3r2SVCYpYyZ314P+Ori+BR7abVSSVFneG6BluTYsls35WO/ItyxaVuSWdOD+uYVMfRMVC8a74hsNKtSVeSczselXPFQ8R6WJkBqpBLfEkrnGpy4PGYG4LJfdBxcf97bgsvq1yBYtVhkptNk+sZsUscA+QrGTX1PMFfQUY62Z6w6o03jqIK6xMonRFi0vY22LUaweiqk8ZhZY5918VjdgKYWApU0CQ1bG0ig85bNmMhyeXpmCK+wKjzo8MUaVIbcuPegfMwIkKDbZ5bmkuvxUzIJ+fU67xxOVuUxmQOUOin1WdZ2EEe7E/sPjQC5Ln1d0r0KSvzHyZJkm/0PksR4dlPtKKDe2Q7EY4YR8SdWGyspcud5kTlH5Mxu4/EtydhQO/CBCvLLraHf4Sh3/xtxVSuU8x7UEsGAu9BXFDopfqB3fGckPVPaV2vOlzzyWzHm/zkX7LDmq3/Ota949elTvO3WwY5R9JgKkRCqdlOWxVIR8yZZ2syuqu6dz/7BUAq/DZWnyrZkFeyH9HdLfIT363VdsjPT+ox4sh2WuZA5qUhA+c1WKxTxr5jpj5op8FsOFLL7aMLJsmItTesRLZRmLn1xDVkDnnZIE7469i/1/FP4QMdZEiBWVjOyiihfU3MJ5jFge+x0xy8VHh2HJSJG/SlLMcq5ZGU/LmLIUu4ZvPBwus5B+34ZGYqzr33XyoX1MLi6d4isdibHsIKIcXCq3ohqyEro5paGISIqN3p7l1jRYe3GFta7QnLqzpTTDZNEXH4RY9cTyUOyh+hP3sxBViCWYJyR4FwixBEIswczx3wBSVyRV9c7kHwAAAABJRU5ErkJggg=="},94:function(e,t,a){e.exports=a(142)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.5329827f.chunk.js.map