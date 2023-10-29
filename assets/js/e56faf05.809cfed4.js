"use strict";(self.webpackChunk_tinybudgie_docs=self.webpackChunk_tinybudgie_docs||[]).push([[417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={id:"git-tag-flow",sidebar_position:2},r="Git Tag Flow CI/CD",s={unversionedId:"workspace/techniques/git-tag-flow",id:"workspace/techniques/git-tag-flow",title:"Git Tag Flow CI/CD",description:"Page describes what is Git Tag Flow and how to use it.",source:"@site/docs/workspace/techniques/git-tag-flow.mdx",sourceDirName:"workspace/techniques",slug:"/workspace/techniques/git-tag-flow",permalink:"/docs/workspace/techniques/git-tag-flow",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"git-tag-flow",sidebar_position:2},sidebar:"docs",previous:{title:"Module",permalink:"/docs/workspace/techniques/module"},next:{title:"Packages",permalink:"/docs/packages"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"CI/CD",id:"cicd",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-tag-flow-cicd"},"Git Tag Flow CI/CD"),(0,o.kt)("p",null,"Page describes what is Git Tag Flow and how to use it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Read detailed description about GTF ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vasdee/git-tag-flow"},"here"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Various cases in development create situations when it is necessary to quickly upload a fix to the prod branch,\nbypassing the development branch, and then rebase, or use complex options to restore the git branch."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Git flow is heavy and even considered legacy by some. Heavy in that it requires maintenance of long lived branches and requires strict conventions when performing releases via release branches."),(0,o.kt)("p",{parentName:"blockquote"},'Trunk based develops suggests that your architecture should change in order to facilitate being able to deploy potentially "broken" functionality into production.'),(0,o.kt)("p",{parentName:"blockquote"},"GTF takes the simplicity of trunk and applies some of the wisdom from gitflow, enabling GitOps via tags and enabling traceability of actions back to atomic commits. The principle is simple: you should always be able to trace back exactly what you deployed to production, within your git repository. This is not only common sense, but makes replicating production issues locally a less painful process."),(0,o.kt)("p",{parentName:"blockquote"},"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vasdee/git-tag-flow"},"vasdee/GTF"))),(0,o.kt)("p",null,"The idea is that we no longer tie the branch to the stand.\nInstead, we create a tag on a specific commit and have the right to\ndeploy the version to any stand. We have one development branch and release\na version that is picked up by CI/CD, lints, builds, tests and creates a docker container,\nwhich can then be sent to the stand we need, be it dev, stable or prod."),(0,o.kt)("h2",{id:"cicd"},"CI/CD"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/temarusanov/workspace/tree/main/devops/gitlab"},"Gitlab CI/CD code"))),(0,o.kt)("p",null,"When developing an application, when developers commit their code to any branch, it creates a On-Push-Event pipeline.\nThis is where the application is tested: lint, build and test.\nAfter this, we have the opportunity to manualy release a new version of the application."),(0,o.kt)("p",null,"Release job creates CHANGELOG and pushes new tags. On these tags triggers new On-Tag-Event Pipeline which build\ndocker container and pushes it to Container Registry (ex. Gitlab). After that you can run a manual job to deploy your application. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits")," to properly release your version and make CHANGELOG useful")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AD",src:n(829).Z,width:"2157",height:"1059"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This page requires you to understand how CI/CD works.\nAlso, I left a link above to the code in which you can see in more detail how it works.\nLet's collect all the advantages of using GTF:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One main development branch"),(0,o.kt)("li",{parentName:"ul"},"Ability to deploy at any time"),(0,o.kt)("li",{parentName:"ul"},"Ability to roll back to an older version by deploying a previous release"),(0,o.kt)("li",{parentName:"ul"},"Ability to deploy a hotfix for any release version"),(0,o.kt)("li",{parentName:"ul"},"Ability to support an infinite number of project stands")))}d.isMDXComponent=!0},829:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gtf-cicd-9852369ea10e88c2448f5b63a468cb58.png"}}]);