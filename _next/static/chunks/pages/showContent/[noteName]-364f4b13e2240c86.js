(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{61681:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showContent/[noteName]",function(){return n(21040)}])},91293:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(85893),a=n(63083),l=n.n(a),o=n(99372),s=n(38522),i=n(28907),c=n(68141);n(74595),n(49499);var d=n(93179),h=n(84283),m=n(39359),g=n(33977);n(82946);var u=n(67294);function f(e){let[t,n]=(0,u.useState)(!1),a=["h1","h2","h3","h4","h5","h6"],f=e=>{let t=[];a.forEach(e=>{let n=document.getElementsByTagName(e);for(let r=0;r<n.length;r++)t.push(n[r])});let n=t.filter(t=>t.dataset&&t.dataset.id==e&&t.parentElement&&t.parentElement.className==l().markdown);if(0==n.length)return;let r=document.getElementById("contaniner");null!=r&&(r.scrollTop=n[0].offsetTop-80)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.D,{components:{img:e=>(0,r.jsx)("img",{...e,style:{maxWidth:"100%"}}),code(e){let{node:t,inline:n,className:a,children:l,...o}=e,s=/language-(\w+)/.exec(a||"");return!n&&s?(0,r.jsx)(d.Z,{...o,style:h.m4,language:s[1],PreTag:"div",children:String(l).replace(/\n$/,"")}):(0,r.jsx)("code",{className:a,...o,children:l})}},remarkPlugins:[s.Z,m.Z],rehypePlugins:[i.Z,c.Z],className:[l().markdown,"markdown-body"].join(" "),transformImageUri:(t,n,r)=>t.startsWith("http://")||t.startsWith("https://")?t:"../../sources/"+e.parentPath+"/"+t,children:e.content}),(0,r.jsxs)("div",{className:"".concat(l().navContainer," ").concat(t?"":l().navContainerHide),children:[(0,r.jsx)("div",{className:l().toggleBtn,onClick:()=>{n(!t)},children:t?"目录 →":"← 目录"}),(0,r.jsx)(g.ZP,{ordered:!1,source:e.content,onNavItemClick:(e,t,n)=>{f(n)}})]})]})}},21040:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return N}});var r=n(85893),a=n(17136),l=n.n(a),o=n(1274),s=n(1869),i=n(80011),c=n(45453),d=n(19944),h=n(84477),m=n(62635),g=n(67294),u=n(25675),f=n.n(u),p=n(41664),_=n.n(p);n(9675);var x=n(91293);let{Header:j,Content:w,Sider:C}=o.Z,k=n(83346);var v=!0;function N(e){let{notes:t}=e,[n,a]=(0,g.useState)(!1),[u,p]=(0,g.useState)([]),[v,N]=(0,g.useState)("0"),[y,b]=(0,g.useState)(-1),[I,E]=(0,g.useState)("");(0,g.useEffect)(()=>{S()},[v]);let S=()=>{let e=v.split("-"),n=[];if(1==e.length)n=t[parseInt(e[0])].mds,E(t[parseInt(e[0])].parentPath);else{let r={};e.forEach((e,n)=>{r=0==n?t[parseInt(e)]:r.children[parseInt(e)]}),r.mds&&(n=r.mds),r.parentPath&&E(r.parentPath)}p(n.sort((e,t)=>{let n=/[a-zA-Z0-9]/;return n.test(e)||n.test(t)?e>t?1:e<t?-1:0:e.localeCompare(t)})),n.length>0?b(0):(b(-1),E(""))},Z=e=>{N(e)},[P,T]=(0,g.useState)(!1),B=()=>{let e=document.getElementById("contaniner");null!=e&&((e.scrollTop||0)>.3*e.clientHeight?T(!0):T(!1))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j,{className:l().header,children:[(0,r.jsxs)("div",{className:l().headerLeft,children:[g.createElement(n?d.Z:h.Z,{className:l().trigger,onClick:()=>a(!n)}),(0,r.jsx)(_(),{href:k.hostname.length>0?k.hostname:"/",className:l().link,children:(0,r.jsx)(f(),{className:l().iconImage,src:"../../favicon.ico",alt:"",width:22,height:22})}),(0,r.jsx)(_(),{href:"https://github.com/flyingDandelionYD",className:l().link,children:(0,r.jsx)(f(),{priority:!0,className:l().iconImage,src:"../../github.jpg",alt:"",width:32,height:22})})]}),(0,r.jsx)("div",{className:l().headerRight,children:e.notesItems?(0,r.jsx)(s.Z,{listHeight:500,dropdownStyle:{padding:"10px 16px"},dropdownMatchSelectWidth:!1,placement:"bottomRight",treeData:e.notesItems,placeholder:"请选择笔记",treeDefaultExpandAll:!0,value:v,onSelect:Z}):(0,r.jsx)(r.Fragment,{})})]}),(0,r.jsxs)(o.Z,{className:l().layoutContainer,children:[(0,r.jsx)(C,{className:l().sider,trigger:null,collapsible:!0,collapsed:n,width:220,collapsedWidth:0,breakpoint:"sm",onBreakpoint:e=>{a(e)},children:u.length>0?(0,r.jsx)(i.ZP,{itemLayout:"horizontal",dataSource:u,renderItem:(e,t)=>(0,r.jsx)(i.ZP.Item,{style:y==t?{color:"#b000cd",backgroundColor:"rgb(247 247 247)"}:{color:"black",backgroundColor:"#fff"},className:l().listItem,onClick:()=>{b(t)},children:e.title.replace(".md","")})}):(0,r.jsx)(r.Fragment,{})}),(0,r.jsx)(w,{className:l().contents,children:u[y]?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{id:"contaniner",onScrollCapture:B,style:{backgroundColor:"white",height:"100%",borderRadius:"6px",overflowY:"scroll",padding:"8px",scrollBehavior:"smooth"},children:["  ",u[y].frontmatter?(0,r.jsxs)("div",{style:{padding:"8px 0 0 0"},children:[u[y].frontmatter.title?(0,r.jsx)("div",{children:"标题:"+u[y].frontmatter.title}):null,u[y].frontmatter.description?(0,r.jsx)("div",{children:"描述:"+u[y].frontmatter.description}):null,u[y].frontmatter.createdDate?(0,r.jsx)("div",{children:"创建日期:"+u[y].frontmatter.createdDate}):null,u[y].frontmatter.tags?(0,r.jsx)("div",{children:"类别:"+u[y].frontmatter.tags}):null]}):null,(0,r.jsx)(x.default,{content:u[y].content,parentPath:I})]}),P?(0,r.jsx)(c.Z,{icon:(0,r.jsx)(m.Z,{}),onClick:()=>{let e=document.getElementById("contaniner");null!=e&&(e.scrollTop=0)}}):null]}):(0,r.jsx)(r.Fragment,{})})]})]})}let y=(e,t)=>{let n=[];return e&&e.length>0&&e.forEach((e,r)=>{if(e.title&&e.title.length){let a=t.length>0?t+"-"+r:r+"",l={value:a,title:e.title};if(e.children&&e.children.length>0){let o=y(e.children,a);o.length>0&&Object.assign(l,{children:o})}n.push(l)}}),n},b=async e=>{try{let t=await fetch(k.getsourceshost+"/onemdcontent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({mdpath:e})}),n=await t.json();return n.content}catch(r){return console.log("获取mdconent失败:"+e),console.log(r),""}},I=async(e,t)=>{if(e&&e.length>0){for(let n of e)if(n.title&&n.title.length){let r=t+"/"+n.title;if(Object.assign(n,{parentPath:r}),n.mds&&n.mds.length>0)for(let a of n.mds){let l=await b(r+"/"+a.title),{data:o,content:s}=matter(l);Object.assign(a,{frontmatter:o,content:s})}n.children&&n.children.length>0&&await I(n.children,r)}}return e}},63083:function(e){e.exports={markdown:"markdown_markdown__yfc8y",toggleBtn:"markdown_toggleBtn__THOt4",navContainer:"markdown_navContainer__DnxsX",navContainerHide:"markdown_navContainerHide__8LalC"}},17136:function(e){e.exports={header:"showContent_header__OgP6r",headerLeft:"showContent_headerLeft__AlL_G",headerRight:"showContent_headerRight__8Nirb",link:"showContent_link__co7er",iconImage:"showContent_iconImage__uHuFL",layoutContainer:"showContent_layoutContainer__Sgxcg",trigger:"showContent_trigger__pFXjD",sider:"showContent_sider___9IVX",listItem:"showContent_listItem__0ccke",contents:"showContent_contents__tcw8b"}},33596:function(){}},function(e){e.O(0,[265,146,116,831,526,664,643,774,888,179],function(){return e(e.s=61681)}),_N_E=e.O()}]);