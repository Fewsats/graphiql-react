"use strict";(self.webpackChunkgraphiql_react=self.webpackChunkgraphiql_react||[]).push([[483],{9483:(e,t,n)=>{n.r(t),n.d(t,{a:()=>h,s:()=>c});var r=n(9599),i=Object.defineProperty,o=(e,t)=>i(e,"name",{value:t,configurable:!0});function l(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}o(l,"_mergeNamespaces");var h={exports:{}};!function(e){var t,n,r=e.Pos;function i(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function l(e,t){for(var n=i(e),r=n,o=0;o<t.length;o++)-1==r.indexOf(t.charAt(o))&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}function h(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function c(e,t,n){t=l(t,"g");for(var i=n.line,o=n.ch,h=e.lastLine();i<=h;i++,o=0){t.lastIndex=o;var c=e.getLine(i),s=t.exec(c);if(s)return{from:r(i,s.index),to:r(i,s.index+s[0].length),match:s}}}function s(e,t,n){if(!h(t))return c(e,t,n);t=l(t,"gm");for(var i,o=1,s=n.line,a=e.lastLine();s<=a;){for(var f=0;f<o&&!(s>a);f++){var u=e.getLine(s++);i=null==i?u:i+"\n"+u}o*=2,t.lastIndex=n.ch;var g=t.exec(i);if(g){var p=i.slice(0,g.index).split("\n"),d=g[0].split("\n"),m=n.line+p.length-1,v=p[p.length-1].length;return{from:r(m,v),to:r(m+d.length-1,1==d.length?v+d[0].length:d[d.length-1].length),match:g}}}}function a(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i;var o=t.exec(e);if(!o)break;var l=o.index+o[0].length;if(l>e.length-n)break;(!r||l>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function f(e,t,n){t=l(t,"g");for(var i=n.line,o=n.ch,h=e.firstLine();i>=h;i--,o=-1){var c=e.getLine(i),s=a(c,t,o<0?0:c.length-o);if(s)return{from:r(i,s.index),to:r(i,s.index+s[0].length),match:s}}}function u(e,t,n){if(!h(t))return f(e,t,n);t=l(t,"gm");for(var i,o=1,c=e.getLine(n.line).length-n.ch,s=n.line,u=e.firstLine();s>=u;){for(var g=0;g<o&&s>=u;g++){var p=e.getLine(s--);i=null==i?p:p+"\n"+i}o*=2;var d=a(i,t,c);if(d){var m=i.slice(0,d.index).split("\n"),v=d[0].split("\n"),x=s+m.length,L=m[m.length-1].length;return{from:r(x,L),to:r(x+v.length-1,1==v.length?L+v[0].length:v[v.length-1].length),match:d}}}}function g(e,t,n,r){if(e.length==t.length)return n;for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i;var l=i+o>>1,h=r(e.slice(0,l)).length;if(h==n)return l;h>n?o=l:i=l+1}}function p(e,i,o,l){if(!i.length)return null;var h=l?t:n,c=h(i).split(/\r|\n\r?/);e:for(var s=o.line,a=o.ch,f=e.lastLine()+1-c.length;s<=f;s++,a=0){var u=e.getLine(s).slice(a),p=h(u);if(1==c.length){var d=p.indexOf(c[0]);if(-1==d)continue e;return o=g(u,p,d,h)+a,{from:r(s,g(u,p,d,h)+a),to:r(s,g(u,p,d+c[0].length,h)+a)}}var m=p.length-c[0].length;if(p.slice(m)==c[0]){for(var v=1;v<c.length-1;v++)if(h(e.getLine(s+v))!=c[v])continue e;var x=e.getLine(s+c.length-1),L=h(x),O=c[c.length-1];if(L.slice(0,O.length)==O)return{from:r(s,g(u,p,m,h)+a),to:r(s+c.length-1,g(x,L,O.length,h))}}}}function d(e,i,o,l){if(!i.length)return null;var h=l?t:n,c=h(i).split(/\r|\n\r?/);e:for(var s=o.line,a=o.ch,f=e.firstLine()-1+c.length;s>=f;s--,a=-1){var u=e.getLine(s);a>-1&&(u=u.slice(0,a));var p=h(u);if(1==c.length){var d=p.lastIndexOf(c[0]);if(-1==d)continue e;return{from:r(s,g(u,p,d,h)),to:r(s,g(u,p,d+c[0].length,h))}}var m=c[c.length-1];if(p.slice(0,m.length)==m){var v=1;for(o=s-c.length+1;v<c.length-1;v++)if(h(e.getLine(o+v))!=c[v])continue e;var x=e.getLine(s+1-c.length),L=h(x);if(L.slice(L.length-c[0].length)==c[0])return{from:r(s+1-c.length,g(x,L,x.length-c[0].length,h)),to:r(s,g(u,p,m.length,h))}}}}function m(e,t,n,i){var o;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof i?o=i.caseFold:(o=i,i=null),"string"==typeof t?(null==o&&(o=!1),this.matches=function(n,r){return(n?d:p)(e,t,r,o)}):(t=l(t,"gm"),i&&!1===i.multiline?this.matches=function(n,r){return(n?f:c)(e,t,r)}:this.matches=function(n,r){return(n?u:s)(e,t,r)})}o(i,"regexpFlags"),o(l,"ensureFlags"),o(h,"maybeMultiline"),o(c,"searchRegexpForward"),o(s,"searchRegexpForwardMultiline"),o(a,"lastMatchIn"),o(f,"searchRegexpBackward"),o(u,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=o((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=o((function(e){return e.normalize("NFD")}),"noFold")):(t=o((function(e){return e.toLowerCase()}),"doFold"),n=o((function(e){return e}),"noFold")),o(g,"adjustPos"),o(p,"searchStringForward"),o(d,"searchStringBackward"),o(m,"SearchCursor"),m.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var i=this.matches(t,n);if(this.afterEmptyMatch=i&&0==e.cmpPos(i.from,i.to),i)return this.pos=i,this.atOccurrence=!0,this.pos.match||!0;var o=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t);this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new m(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new m(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var c=l({__proto__:null,default:h.exports},[h.exports])}}]);
//# sourceMappingURL=483.411fc086.chunk.js.map