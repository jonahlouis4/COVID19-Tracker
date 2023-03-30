(this["webpackJsonpcreate-react-app-antd"]=this["webpackJsonpcreate-react-app-antd"]||[]).push([[0],{173:function(e,t,a){e.exports=a(355)},178:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var r,n,o=a(0),s=a.n(o),l=a(30),c=a.n(l),u=a(46),i=(a(178),a(60)),C=a.n(i),m=a(89),y=a(97),d=a(69),v=a.n(d),h=a(76),E=a.n(h),T=a(163),f=v.a.Option,R=function(e){var t=e.COUNTRIES,a=Object(o.useState)("Sort by most cases"),r=Object(y.a)(a,2),n=r[0],l=r[1];return Object(o.useEffect)((function(){var e=function(e){"Sort by most cases"===e&&t.sort((function(e,t){return parseInt(t.Cases)-parseInt(e.Cases)}));"Sort by most deaths"===e&&t.sort((function(e,t){return parseInt(t.TotalDeaths)-parseInt(e.TotalDeaths)}));"Sort by most recoveries"===e&&t.sort((function(e,t){return parseInt(t.TotalRecovered)-parseInt(e.TotalRecovered)}));var a=[{Country:t[0].Country,Cases:t[0].Cases},{Country:t[1].Country,Cases:t[1].Cases},{Country:t[2].Country,Cases:t[2].Cases},{Country:t[3].Country,Cases:t[3].Cases},{Country:t[4].Country,Cases:t[4].Cases},{Country:t[5].Country,Cases:t[5].Cases},{Country:t[6].Country,Cases:t[6].Cases},{Country:t[7].Country,Cases:t[7].Cases},{Country:t[8].Country,Cases:t[8].Cases},{Country:t[9].Country,Cases:t[9].Cases},{Country:t[10].Country,Cases:t[10].Cases},{Country:t[11].Country,Cases:t[11].Cases},{Country:t[12].Country,Cases:t[12].Cases},{Country:t[13].Country,Cases:t[13].Cases},{Country:t[14].Country,Cases:t[14].Cases}],r=[{Country:t[0].Country,Deaths:t[0].TotalDeaths},{Country:t[1].Country,Deaths:t[1].TotalDeaths},{Country:t[2].Country,Deaths:t[2].TotalDeaths},{Country:t[3].Country,Deaths:t[3].TotalDeaths},{Country:t[4].Country,Deaths:t[4].TotalDeaths},{Country:t[5].Country,Deaths:t[5].TotalDeaths},{Country:t[6].Country,Deaths:t[6].TotalDeaths},{Country:t[7].Country,Deaths:t[7].TotalDeaths},{Country:t[8].Country,Deaths:t[8].TotalDeaths},{Country:t[9].Country,Deaths:t[9].TotalDeaths},{Country:t[10].Country,Deaths:t[10].TotalDeaths},{Country:t[11].Country,Deaths:t[11].TotalDeaths},{Country:t[12].Country,Deaths:t[12].TotalDeaths},{Country:t[13].Country,Deaths:t[13].TotalDeaths},{Country:t[14].Country,Deaths:t[14].TotalDeaths}],n=[{Country:t[0].Country,Recoveries:t[0].TotalRecovered},{Country:t[1].Country,Recoveries:t[1].TotalRecovered},{Country:t[2].Country,Recoveries:t[2].TotalRecovered},{Country:t[3].Country,Recoveries:t[3].TotalRecovered},{Country:t[4].Country,Recoveries:t[4].TotalRecovered},{Country:t[5].Country,Recoveries:t[5].TotalRecovered},{Country:t[6].Country,Recoveries:t[6].TotalRecovered},{Country:t[7].Country,Recoveries:t[7].TotalRecovered},{Country:t[8].Country,Recoveries:t[8].TotalRecovered},{Country:t[9].Country,Recoveries:t[9].TotalRecovered},{Country:t[10].Country,Recoveries:t[10].TotalRecovered},{Country:t[11].Country,Recoveries:t[11].TotalRecovered},{Country:t[12].Country,Recoveries:t[12].TotalRecovered},{Country:t[13].Country,Recoveries:t[13].TotalRecovered},{Country:t[14].Country,Recoveries:t[14].TotalRecovered}];if("Sort by most cases"===e)return a;if("Sort by most deaths"===e)return r;if("Sort by most recoveries"===e)return n}(n);Object(T.autoChart)(document.getElementById("column_graph"),e,{toolbar:!1,development:!1})}),[n]),s.a.createElement("div",{className:"sorted-chart-container"},s.a.createElement(v.a,{value:n,onChange:function(e){l(e)},style:{width:225}},s.a.createElement(f,{value:"Sort by most cases"},"Sort by most cases (top 15)"),s.a.createElement(f,{value:"Sort by most deaths"},"Sort by most deaths (top 15)"),s.a.createElement(f,{value:"Sort by most recoveries"},"Sort by most recoveries (top 15)")),s.a.createElement(E.a,{span:24},s.a.createElement("div",{id:"column_graph"})))},D=a(166),p=a.n(D),b=a(165),N=a.n(b),w=function(e){var t=e.title,a=e.value;return s.a.createElement(E.a,{xs:24,sm:12,md:8,lg:8,xl:8},s.a.createElement(N.a,{hoverable:!0},s.a.createElement(p.a,{title:t,value:a})))},O=a(96),g=a.n(O),S=a(57),I=a.n(S),j=a(63),k=a.n(j),_=Object(u.gql)(r||(r=Object(m.a)(["\n    query GetGlobal {\n        summary {\n            Global {\n                NewConfirmed\n                TotalConfirmed\n                NewDeaths\n                TotalDeaths\n                NewRecovered\n                TotalRecovered                                                                                                                 \n            }\n        }\n    }\n"]))),U=s.a.createElement(k.a,{style:{fontSize:24},spin:!0}),P=C.a.Text,x=function(e){var t=e.titles,a=Object(u.useQuery)(_),r=a.loading,n=a.error,o=a.data;if(r)return s.a.createElement(I.a,{justify:"center"},s.a.createElement(g.a,{indicator:U}));if(n)return s.a.createElement(P,{type:"danger"},"Failed to fetch API.");var l=o.summary.Global,c=l.NewConfirmed,i=l.TotalConfirmed,C=l.NewDeaths,m=l.TotalDeaths,y=l.NewRecovered,d=l.TotalRecovered;return s.a.createElement("div",{className:"card-container"},s.a.createElement(I.a,{gutter:[16,16]},s.a.createElement(w,{title:t[0],value:c}),s.a.createElement(w,{title:t[1],value:i}),s.a.createElement(w,{title:t[2],value:C}),s.a.createElement(w,{title:t[3],value:m}),s.a.createElement(w,{title:t[4],value:y}),s.a.createElement(w,{title:t[5],value:d})))},V=function(e){for(var t,a,r,n,o,l,c=e.COUNTRIES,u=e.COUNTRY_SELECT,i=e.titles,C=0;C<c.length;C++)if(c[C].Country===u){t=c[C].NewCases,a=c[C].Cases,r=c[C].RecentDeaths,n=c[C].TotalDeaths,o=c[C].NewRecovered,l=c[C].TotalRecovered;break}return s.a.createElement("div",{className:"card-container"},s.a.createElement(I.a,{gutter:[16,16]},s.a.createElement(w,{title:i[0],value:t}),s.a.createElement(w,{title:i[1],value:a}),s.a.createElement(w,{title:i[2],value:r}),s.a.createElement(w,{title:i[3],value:n}),s.a.createElement(w,{title:i[4],value:o}),s.a.createElement(w,{title:i[5],value:l})))},A=v.a.Option,W=function(e){var t=e.COUNTRIES,a=Object(o.useState)("Worldwide"),r=Object(y.a)(a,2),n=r[0],l=r[1],c=[],u=["New Cases Confirmed","Total Cases Confirmed","Recent Deaths","Total Deaths","Recent Recoveries","Total Recoveries"];c.push(s.a.createElement(A,{key:0,value:"Worldwide"},"Worldwide"));for(var i=1;i<t.length;i++)c.push(s.a.createElement(A,{key:i,value:t[i].Country},t[i].Country));function C(){return"Worldwide"===n?s.a.createElement(x,{titles:u}):s.a.createElement(V,{COUNTRIES:t,COUNTRY_SELECT:n,titles:u})}return s.a.createElement("div",{className:"select-container"},s.a.createElement(v.a,{style:{width:225},showSearch:!0,value:n,optionFilterProp:"children",onChange:function(e){l(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},c),s.a.createElement(C,null))},q=a(85),F=a.n(q),G=Object(u.gql)(n||(n=Object(m.a)(["\n    query GetCountries {\n        summary {\n            Countries {\n                ID\n                Country\n                NewConfirmed\n                TotalConfirmed\n                NewDeaths\n                TotalDeaths\n                NewRecovered\n                TotalRecovered\n                Date         \n            }\n        }\n    }\n"]))),L=s.a.createElement(k.a,{style:{fontSize:24},spin:!0}),Y=C.a.Text,z=function(e){var t,a=e.rtnValue,r=e.TOP_COUNTRY_RTN,n=Object(u.useQuery)(G),o=n.loading,l=n.error,c=n.data,i=[];if(o)return s.a.createElement(I.a,{justify:"center"},s.a.createElement(g.a,{indicator:L}));if(l)return s.a.createElement(s.a.Fragment,null,s.a.createElement(Y,{type:"danger"},"Failed to fetch API."),"; ",void F.a.error("API may be down. Please refresh the web page in 2-3 minutes.")," ");function C(e){return e.rtnValue===r?s.a.createElement(R,{COUNTRIES:i}):s.a.createElement(W,{COUNTRIES:t})}return c.summary.Countries.map((function(e){return function(e,t,a,r,n,o,s,l,c){i.push({ID:e,Country:t,NewCases:a,Cases:r,RecentDeaths:n,TotalDeaths:o,NewRecovered:s,TotalRecovered:l,Date:c})}(e.ID,e.Country,e.NewConfirmed,e.TotalConfirmed,e.NewDeaths,e.TotalDeaths,e.NewRecovered,e.TotalRecovered,e.Date)})),t=i.slice(),s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{rtnValue:a}))},B=a(171),J=a.n(B),M=a(172),Q=a.n(M),$=C.a.Title,H=C.a.Text,K=new u.ApolloClient({uri:"/graphql",cache:new u.InMemoryCache});var X=function(){return s.a.createElement(u.ApolloProvider,{client:K},s.a.createElement("div",{className:"header-container text-center"},s.a.createElement($,{level:1},"COVID-19 Tracker"),s.a.createElement("p",null,"A real-time COVID-19 tracker using the\xa0",s.a.createElement("a",{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc#e831c268-9da1-4d86-8b5a-8d7f61910af8",target:"_blank",rel:"noopener noreferrer"},"COVID19 API"))),s.a.createElement("div",{className:"summary-container"},s.a.createElement("div",{className:"container"},s.a.createElement($,{level:1,className:"header-section"},"Summary Data"),s.a.createElement(z,{rtnValue:1,TOP_COUNTRY_RTN:0}))),s.a.createElement("div",{className:"topCountries-container"},s.a.createElement("div",{className:"container"},s.a.createElement($,{level:1,className:"header-section"},"Charted Data"),s.a.createElement(z,{rtnValue:0,TOP_COUNTRY_RTN:0}))),s.a.createElement("div",{className:"footer-container"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{href:"https://github.com/jonahlouis4/COVID19-Tracker",target:"_blank",rel:"noopener noreferrer"},s.a.createElement(J.a,{style:{color:"#bfbfbf"}})),s.a.createElement(H,{style:{color:"#bfbfbf",float:"right"},className:"text-right"},"\xa92021 Made with ",s.a.createElement(Q.a,{style:{color:"red"}})," by\xa0",s.a.createElement("a",{href:"https://www.jonahlouis.ca/",target:"_blank",rel:"noopener noreferrer"},"Jonah Louis")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(351);c.a.render(s.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.2274b95b.chunk.js.map