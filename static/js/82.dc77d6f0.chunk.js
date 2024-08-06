"use strict";(self.webpackChunkgraphiql_react=self.webpackChunkgraphiql_react||[]).push([[82,382],{9814:(t,e,i)=>{i.d(e,{P:()=>r,R:()=>o});var n=Object.defineProperty,s=(t,e)=>n(t,"name",{value:e,configurable:!0});class o{constructor(t,e){this.containsPosition=t=>this.start.line===t.line?this.start.character<=t.character:this.end.line===t.line?this.end.character>=t.character:this.start.line<=t.line&&this.end.line>=t.line,this.start=t,this.end=e}setStart(t,e){this.start=new r(t,e)}setEnd(t,e){this.end=new r(t,e)}}s(o,"Range");class r{constructor(t,e){this.lessThanOrEqualTo=t=>this.line<t.line||this.line===t.line&&this.character<=t.character,this.line=t,this.character=e}setLine(t){this.line=t}setCharacter(t){this.character=t}}s(r,"Position")},7082:(t,e,i)=>{i.r(e);var n=i(9599),s=(i(1382),i(9)),o=i(9814);i(5043),i(579),i(7950);n.C.registerHelper("hint","graphql",((t,e)=>{const{schema:i,externalFragments:r}=e;if(!i)return;const c=t.getCursor(),l=t.getTokenAt(c),a=null!==l.type&&/"|\w/.test(l.string[0])?l.start:l.end,h=new o.P(c.line,a),u={list:(0,s.g)(i,t.getValue(),h,l,r).map((t=>({text:t.label,type:t.type,description:t.documentation,isDeprecated:t.isDeprecated,deprecationReason:t.deprecationReason}))),from:{line:c.line,ch:a},to:{line:c.line,ch:l.end}};return(null===u||void 0===u?void 0:u.list)&&u.list.length>0&&(u.from=n.C.Pos(u.from.line,u.from.ch),u.to=n.C.Pos(u.to.line,u.to.ch),n.C.signal(t,"hasCompletion",t,u,l)),u}))},1382:(t,e,i)=>{i.r(e),i.d(e,{s:()=>l});var n=i(9599),s=Object.defineProperty,o=(t,e)=>s(t,"name",{value:e,configurable:!0});function r(t,e){return e.forEach((function(e){e&&"string"!==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(i){if("default"!==i&&!(i in t)){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}}))})),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}o(r,"_mergeNamespaces");var c={exports:{}};!function(t){var e="CodeMirror-hint",i="CodeMirror-hint-active";function n(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var i=this;t.on("cursorActivity",this.activityFunc=function(){i.cursorActivity()})}}t.showHint=function(t,e,i){if(!e)return t.showHint(i);i&&i.async&&(e.async=!0);var n={hint:e};if(i)for(var s in i)n[s]=i[s];return t.showHint(n)},t.defineExtension("showHint",(function(e){e=c(this,this.getCursor("start"),e);var i=this.listSelections();if(!(i.length>1)){if(this.somethingSelected()){if(!e.hint.supportsSelection)return;for(var s=0;s<i.length;s++)if(i[s].head.line!=i[s].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var o=this.state.completionActive=new n(this,e);o.options.hint&&(t.signal(this,"startCompletion",this),o.update(!0))}})),t.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()})),o(n,"Completion");var s=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},r=window.cancelAnimationFrame||clearTimeout;function c(t,e,i){var n=t.options.hintOptions,s={};for(var o in g)s[o]=g[o];if(n)for(var o in n)void 0!==n[o]&&(s[o]=n[o]);if(i)for(var o in i)void 0!==i[o]&&(s[o]=i[o]);return s.hint.resolve&&(s.hint=s.hint.resolve(t,e)),s}function l(t){return"string"==typeof t?t:t.text}function a(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close};/Mac/.test(navigator.platform)&&(i["Ctrl-P"]=function(){e.moveFocus(-1)},i["Ctrl-N"]=function(){e.moveFocus(1)});var n=t.options.customKeys,s=n?{}:i;function r(t,n){var r;r="string"!=typeof n?o((function(t){return n(t,e)}),"bound"):i.hasOwnProperty(n)?i[n]:n,s[t]=r}if(o(r,"addBinding"),n)for(var c in n)n.hasOwnProperty(c)&&r(c,n[c]);var l=t.options.extraKeys;if(l)for(var c in l)l.hasOwnProperty(c)&&r(c,l[c]);return s}function h(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function u(n,s){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=n,this.data=s,this.picked=!1;var o=this,r=n.cm,c=r.getInputField().ownerDocument,u=c.defaultView||c.parentWindow,d=this.hints=c.createElement("ul");d.setAttribute("role","listbox"),d.setAttribute("aria-expanded","true"),d.id=this.id;var p=n.cm.options.theme;d.className="CodeMirror-hints "+p,this.selectedHint=s.selectedHint||0;for(var f=s.list,g=0;g<f.length;++g){var m=d.appendChild(c.createElement("li")),v=f[g],y=e+(g!=this.selectedHint?"":" "+i);null!=v.className&&(y=v.className+" "+y),m.className=y,g==this.selectedHint&&m.setAttribute("aria-selected","true"),m.id=this.id+"-"+g,m.setAttribute("role","option"),v.render?v.render(m,s,v):m.appendChild(c.createTextNode(v.displayText||l(v))),m.hintId=g}var b=n.options.container||c.body,w=r.cursorCoords(n.options.alignWithWord?s.from:null),C=w.left,H=w.bottom,A=!0,k=0,x=0;if(b!==c.body){var O=-1!==["absolute","relative","fixed"].indexOf(u.getComputedStyle(b).position)?b:b.offsetParent,S=O.getBoundingClientRect(),T=c.body.getBoundingClientRect();k=S.left-T.left-O.scrollLeft,x=S.top-T.top-O.scrollTop}d.style.left=C-k+"px",d.style.top=H-x+"px";var P=u.innerWidth||Math.max(c.body.offsetWidth,c.documentElement.offsetWidth),F=u.innerHeight||Math.max(c.body.offsetHeight,c.documentElement.offsetHeight);b.appendChild(d),r.getInputField().setAttribute("aria-autocomplete","list"),r.getInputField().setAttribute("aria-owns",this.id),r.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var M,N=n.options.moveOnOverlap?d.getBoundingClientRect():new DOMRect,E=!!n.options.paddingForScrollbar&&d.scrollHeight>d.clientHeight+1;if(setTimeout((function(){M=r.getScrollInfo()})),N.bottom-F>0){var I=N.bottom-N.top;if(w.top-(w.bottom-N.top)-I>0)d.style.top=(H=w.top-I-x)+"px",A=!1;else if(I>F){d.style.height=F-5+"px",d.style.top=(H=w.bottom-N.top-x)+"px";var R=r.getCursor();s.from.ch!=R.ch&&(w=r.cursorCoords(R),d.style.left=(C=w.left-k)+"px",N=d.getBoundingClientRect())}}var W,B=N.right-P;if(E&&(B+=r.display.nativeBarWidth),B>0&&(N.right-N.left>P&&(d.style.width=P-5+"px",B-=N.right-N.left-P),d.style.left=(C=w.left-B-k)+"px"),E)for(var K=d.firstChild;K;K=K.nextSibling)K.style.paddingRight=r.display.nativeBarWidth+"px";r.addKeyMap(this.keyMap=a(n,{moveFocus:function(t,e){o.changeActive(o.selectedHint+t,e)},setFocus:function(t){o.changeActive(t)},menuSize:function(){return o.screenAmount()},length:f.length,close:function(){n.close()},pick:function(){o.pick()},data:s})),n.options.closeOnUnfocus&&(r.on("blur",this.onBlur=function(){W=setTimeout((function(){n.close()}),100)}),r.on("focus",this.onFocus=function(){clearTimeout(W)})),r.on("scroll",this.onScroll=function(){var t=r.getScrollInfo(),e=r.getWrapperElement().getBoundingClientRect();M||(M=r.getScrollInfo());var i=H+M.top-t.top,s=i-(u.pageYOffset||(c.documentElement||c.body).scrollTop);if(A||(s+=d.offsetHeight),s<=e.top||s>=e.bottom)return n.close();d.style.top=i+"px",d.style.left=C+M.left-t.left+"px"}),t.on(d,"dblclick",(function(t){var e=h(d,t.target||t.srcElement);e&&null!=e.hintId&&(o.changeActive(e.hintId),o.pick())})),t.on(d,"click",(function(t){var e=h(d,t.target||t.srcElement);e&&null!=e.hintId&&(o.changeActive(e.hintId),n.options.completeOnSingleClick&&o.pick())})),t.on(d,"mousedown",(function(){setTimeout((function(){r.focus()}),20)}));var L=this.getSelectedHintRange();return 0===L.from&&0===L.to||this.scrollToActive(),t.signal(s,"select",f[this.selectedHint],d.childNodes[this.selectedHint]),!0}function d(t,e){if(!t.somethingSelected())return e;for(var i=[],n=0;n<e.length;n++)e[n].supportsSelection&&i.push(e[n]);return i}function p(t,e,i,n){if(t.async)t(e,n,i);else{var s=t(e,i);s&&s.then?s.then(n):n(s)}}function f(e,i){var n,s=e.getHelpers(i,"hint");if(s.length){var r=o((function(t,e,i){var n=d(t,s);function r(s){if(s==n.length)return e(null);p(n[s],t,i,(function(t){t&&t.list.length>0?e(t):r(s+1)}))}o(r,"run"),r(0)}),"resolved");return r.async=!0,r.supportsSelection=!0,r}return(n=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:n})}:t.hint.anyword?function(e,i){return t.hint.anyword(e,i)}:function(){}}n.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,i){var n=e.list[i],s=this;this.cm.operation((function(){n.hint?n.hint(s.cm,e,n):s.cm.replaceRange(l(n),n.from||e.from,n.to||e.to,"complete"),t.signal(e,"pick",n),s.cm.scrollIntoView()})),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(r(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),i=this.cm.getLine(e.line);if(e.line!=this.startPos.line||i.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(i.charAt(e.ch-1)))this.close();else{var n=this;this.debounce=s((function(){n.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,i=++this.tick;p(this.options.hint,this.cm,this.options,(function(n){e.tick==i&&e.finishUpdate(n,t)}))}},finishUpdate:function(e,i){this.data&&t.signal(this.data,"update");var n=this.widget&&this.widget.picked||i&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=e,e&&e.list.length&&(n&&1==e.list.length?this.pick(e,0):(this.widget=new u(this,e),t.signal(e,"shown")))}},o(c,"parseOptions"),o(l,"getText"),o(a,"buildKeyMap"),o(h,"getHintElement"),o(u,"Widget"),u.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length?e=n?this.data.list.length-1:0:e<0&&(e=n?0:this.data.list.length-1),this.selectedHint!=e){var s=this.hints.childNodes[this.selectedHint];s&&(s.className=s.className.replace(" "+i,""),s.removeAttribute("aria-selected")),(s=this.hints.childNodes[this.selectedHint=e]).className+=" "+i,s.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",s.id),this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],s)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],i=this.hints.childNodes[t.to],n=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-n.offsetTop:i.offsetTop+i.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=i.offsetTop+i.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}},o(d,"applicableHelpers"),o(p,"fetchHints"),o(f,"resolveAutoHints"),t.registerHelper("hint","auto",{resolve:f}),t.registerHelper("hint","fromList",(function(e,i){var n,s=e.getCursor(),o=e.getTokenAt(s),r=t.Pos(s.line,o.start),c=s;o.start<s.ch&&/\w/.test(o.string.charAt(s.ch-o.start-1))?n=o.string.substr(0,s.ch-o.start):(n="",r=s);for(var l=[],a=0;a<i.words.length;a++){var h=i.words[a];h.slice(0,n.length)==n&&l.push(h)}if(l.length)return{list:l,from:r,to:c}})),t.commands.autocomplete=t.showHint;var g={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};t.defineOption("hintOptions",null)}(n.a.exports);var l=r({__proto__:null,default:c.exports},[c.exports])}}]);
//# sourceMappingURL=82.dc77d6f0.chunk.js.map