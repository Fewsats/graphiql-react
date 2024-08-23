"use strict";(self.webpackChunkgraphiql_react=self.webpackChunkgraphiql_react||[]).push([[206],{9814:(e,t,n)=>{n.d(t,{P:()=>o,R:()=>i});var r=Object.defineProperty,a=(e,t)=>r(e,"name",{value:t,configurable:!0});class i{constructor(e,t){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=t}setStart(e,t){this.start=new o(e,t)}setEnd(e,t){this.end=new o(e,t)}}a(i,"Range");class o{constructor(e,t){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=t}setLine(e){this.line=e}setCharacter(e){this.character=e}}a(o,"Position")},9206:(e,t,n)=>{n.r(t);var r=n(9599),a=n(4361),i=n(3580),o=n(8034),s=n(2520),l=n(8699),c=n(3555),h=n(1152),u=n(6238),d=n(2010),g=n(5012),v=n(8521),p=n(4698),f=n(8050),m=n(8887),y=n(5915),w=n(600),b=n(9071),P=n(4705),k=n(7233),C=n(1793),E=n(3585),L=n(9338),Q=n(8849),R=n(9814),x=(n(5043),n(579),n(7950),Object.defineProperty),S=(e,t)=>x(e,"name",{value:t,configurable:!0});const q=[a.l,i.u,o.i,s.g,l.X,c.Z,h.y,u.e,d.U,g.S,v.J,p.C];function G(e,t,n,r,a){const i=f.gv.filter((e=>e!==m.z&&e!==y.T&&(!r||e!==w.K)));n&&Array.prototype.push.apply(i,n),a&&Array.prototype.push.apply(i,q);return(0,b.tf)(e,t,i).filter((e=>{if(e.message.includes("Unknown directive")&&e.nodes){const t=e.nodes[0];if(t&&t.kind===P.b.DIRECTIVE){const e=t.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}S(G,"validateWithCustomRules");const T="Error",D="Warning",O="Information",V="Hint",A={[T]:1,[D]:2,[O]:3,[V]:4},I=S(((e,t)=>{if(!e)throw new Error(t)}),"invariant");function W(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;var i,o;let s=null,l="";a&&(l="string"===typeof a?a:a.reduce(((e,t)=>e+(0,k.y)(t)+"\n\n"),""));const c=l?`${e}\n\n${l}`:e;try{s=(0,C.qg)(c)}catch(h){if(h instanceof E.eO){const e=H(null!==(o=null===(i=h.locations)||void 0===i?void 0:i[0])&&void 0!==o?o:{line:0,column:0},c);return[{severity:A.Error,message:h.message,source:"GraphQL: Syntax",range:e}]}throw h}return $(s,t,n,r)}function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return[];const n=G(t,e,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0).flatMap((e=>j(e,A.Error,"Validation"))),r=(0,b.tf)(t,e,[L.k]).flatMap((e=>j(e,A.Warning,"Deprecation")));return n.concat(r)}function j(e,t,n){if(!e.nodes)return[];const r=[];for(const[a,i]of e.nodes.entries()){const o="Variable"!==i.kind&&"name"in i&&void 0!==i.name?i.name:"variable"in i&&void 0!==i.variable?i.variable:i;if(o){I(e.locations,"GraphQL validation error requires locations.");const i=e.locations[a],s=M(o),l=i.column+(s.end-s.start);r.push({source:`GraphQL: ${n}`,message:e.message,severity:t,range:new R.R(new R.P(i.line-1,i.column-1),new R.P(i.line-1,l))})}}return r}function H(e,t){const n=(0,Q.o)(),r=n.startState(),a=t.split("\n");I(a.length>=e.line,"Query text must have more lines than where the error happened");let i=null;for(let c=0;c<e.line;c++)for(i=new Q.C(a[c]);!i.eol();){if("invalidchar"===n.token(i,r))break}I(i,"Expected Parser stream to be available.");const o=e.line-1,s=i.getStartOfToken(),l=i.getCurrentPosition();return new R.R(new R.P(o,s),new R.P(o,l))}function M(e){const t=e.loc;return I(t,"Expected ASTNode to have a location."),t}S(W,"getDiagnostics"),S($,"validateQuery"),S(j,"annotations"),S(H,"getRange"),S(M,"getLocation");const U=["error","warning","information","hint"],_={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};r.C.registerHelper("lint","graphql",((e,t)=>{const{schema:n,validationRules:a,externalFragments:i}=t;return W(e,n,a,void 0,i).map((e=>({message:e.message,severity:e.severity?U[e.severity-1]:U[0],type:e.source?_[e.source]:void 0,from:r.C.Pos(e.range.start.line,e.range.start.character),to:r.C.Pos(e.range.end.line,e.range.end.character)})))}))}}]);
//# sourceMappingURL=206.5b96fc5c.chunk.js.map