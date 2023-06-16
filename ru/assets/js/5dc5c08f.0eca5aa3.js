"use strict";(self.webpackChunkdev_notes=self.webpackChunkdev_notes||[]).push([[115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),a=n(7294),s=n(3905),o=n(6010);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function c(e){let{children:t,minHeight:n,url:r="http://localhost:3000"}=e;return a.createElement("div",{className:i.browserWindow,style:{minHeight:n}},a.createElement("div",{className:i.browserWindowHeader},a.createElement("div",{className:i.buttons},a.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,o.Z)(i.browserWindowAddressBar,"text--truncate")},r),a.createElement("div",{className:i.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:i.bar}),a.createElement("span",{className:i.bar}),a.createElement("span",{className:i.bar})))),a.createElement("div",{className:i.browserWindowBody},t))}const l={sidebar_position:2},m="\u0425\u0435\u043b\u0437\u0447\u0435\u043a\u0438",p={unversionedId:"techniques/health-checks",id:"techniques/health-checks",title:"\u0425\u0435\u043b\u0437\u0447\u0435\u043a\u0438",description:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u043e\u0442\u0432\u044f\u0437\u0430\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 (\u0411\u0414, RMQ, Kafka \u0438 \u0442. \u0434.)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/techniques/health-checks.mdx",sourceDirName:"techniques",slug:"/techniques/health-checks",permalink:"/dev-notes/ru/techniques/health-checks",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",permalink:"/dev-notes/ru/techniques/dependency-injection"},next:{title:"Tutorials",permalink:"/dev-notes/ru/tutorials"}},u={},d=[{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:2}],h={toc:d},b="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(b,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u0445\u0435\u043b\u0437\u0447\u0435\u043a\u0438"},"\u0425\u0435\u043b\u0437\u0447\u0435\u043a\u0438"),(0,s.kt)("p",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u043e\u0442\u0432\u044f\u0437\u0430\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 (\u0411\u0414, RMQ, Kafka \u0438 \u0442. \u0434.)"),(0,s.kt)("h2",{id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"),(0,s.kt)("p",null,"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0435\u0431\u0435 \u043e\u0433\u0440\u043e\u043c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u043a\u0443\u0447\u0435\u0439 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u043f\u0435\u0440\u0435\u0434 \u0442\u043e\u0431\u043e\u0439 \u0441\u0442\u043e\u0438\u0442 \u0437\u0430\u0434\u0430\u0447\u0430 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0439\u043f \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432. Pipe \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043e\u0431\u0449\u0435\u0433\u043e \u0441 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 Kafka. \u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0439\u043f, \u0442\u0435\u0431\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0432\u0441\u0435 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u0443\u0436\u0431\u044b. \u041d\u0435 \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u043e, \u0434\u0430?"),(0,s.kt)("p",null,"\u041a\u0430\u043a \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u0430\u0444\u043a\u0438 \u0438\u043b\u0438 \u043a\u0430\u043a\u0438\u0445-\u0442\u043e \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432? \u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0443 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f?"),(0,s.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,s.kt)("p",null,"\u041d\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0439 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c \u0441\u043b\u0443\u0436\u0431\u0430\u043c. \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0432\u043e\u0434\u043a\u0443 \u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432. \u0418\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0441\u043b\u0443\u0436\u0431\u044b, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043b\u0438 \u043e\u043d\u0430 \u0432 \u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u043c \u0438\u043b\u0438 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439, \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442.")),(0,s.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0439 HealthCheckModule \u0441 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u043c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="libs/core/health-checks/src/lib/health-checks.controller.ts"',title:'"libs/core/health-checks/src/lib/health-checks.controller.ts"'},"import { Controller, Get, Logger } from '@nestjs/common';\nimport { CustomInject } from 'nestjs-custom-injector';\nimport { HEALTH_CHECKS_PROVIDER } from './health-checks.config';\nimport { HealthCheckResult } from './interfaces/health-check-result.interface';\nimport { HealthIndicator } from './interfaces/health-indicator.interface';\n\n@Controller()\nexport class HealthChecksController {\n  private _logger = new Logger(HealthChecksController.name);\n  private _appStartedAt: number = Date.now();\n\n  @CustomInject<HealthIndicator>(HEALTH_CHECKS_PROVIDER, {\n    multi: true,\n  })\n  private healthIndicators!: HealthIndicator[];\n\n  @Get('/health')\n  async check(): Promise<HealthCheckResult> {\n    const timestamp = Date.now();\n    const uptime = Math.floor((timestamp - this._appStartedAt) / 1000);\n\n    const services = await Promise.all(\n      this.healthIndicators.map(\n        async (indicator) => await indicator.isHealthy()\n      )\n    );\n\n    const successfulServices = services.filter((s) => s.status === 'up').length;\n    const ratio = +(successfulServices / services.length).toFixed(2);\n\n    return {\n      ratio,\n      uptime,\n      timestamp,\n      services,\n    };\n  }\n}\n")),(0,s.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043b\u043e\u0432\u0438 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f ORM \u0438\u043b\u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u043a\u043b\u0438\u0435\u043d\u0442 Prisma."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="libs/core/prisma-client/src/lib/prisma-client.service.ts"',title:'"libs/core/prisma-client/src/lib/prisma-client.service.ts"'},"async onModuleInit(): Promise<void> {\n    try {\n        // connect to the database\n        await this.$connect()\n    } catch (err) {\n        // do not throw error here\n        this.logger.error(err, err.stack)\n    }\n}\n")),(0,s.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0439 Prisma Health Indicator"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="libs/core/prisma-client/src/lib/prisma-client-connection.health.ts"',title:'"libs/core/prisma-client/src/lib/prisma-client-connection.health.ts"'},"import { Injectable } from '@nestjs/common';\nimport { HealthIndicator, HealthIndicatorResult } from '@nx/core/health-checks';\nimport { PrismaClientService } from './prisma-client.service';\n\n@Injectable()\nexport class PrismaClientConnectionHealthIndicator implements HealthIndicator {\n  name = 'database';\n\n  constructor(private readonly prismaClientService: PrismaClientService) {}\n\n  async isHealthy(): Promise<HealthIndicatorResult> {\n    try {\n      await this.prismaClientService.$queryRaw<\n        { dt: string }[]\n      >`SELECT now() dt`;\n\n      // drop here everything you want\n      return {\n        name: this.name,\n        status: 'up',\n      };\n    } catch (error) {\n      return {\n        name: this.name,\n        status: 'down',\n        error: error.message,\n      };\n    }\n  }\n}\n")),(0,s.kt)("p",null,"\u0418 \u043a\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),(0,s.kt)(c,{url:"http://localhost:3000/api/health",minHeight:240,mdxType:"BrowserWindow"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ratio": 1,\n  "uptime": 5,\n  "timestamp": 1675597500626,\n  "services": [\n    {\n      "name": "database",\n      "status": "up",\n    },\n    {\n      "name": "my-service",\n      "status": "up",\n      "details": {\n        "entitiesCreated": 500\n      }\n    }\n  ]\n}\n'))),(0,s.kt)("p",null,"\u0421 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0411\u0414, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(5415).Z,width:"1008",height:"223"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u0427\u0435\u043a\u0430\u0439 \u043f\u043e\u043b\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/temarusanov/nx/tree/master/libs/core/health-checks/src/lib"},"\u0437\u0434\u0435\u0441\u044c"))))}f.isMDXComponent=!0},5415:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hc-log-1704d9b57c24bcef3b2bf0d2a38cd474.png"}}]);