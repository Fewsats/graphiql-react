"use strict";(self.webpackChunkgraphiql_react=self.webpackChunkgraphiql_react||[]).push([[348],{1348:(e,t,r)=>{r.r(t),r.d(t,{j:()=>c});var n=r(9599),a=Object.defineProperty,i=(e,t)=>a(e,"name",{value:t,configurable:!0});function o(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(o,"_mergeNamespaces");var s={exports:{}};!function(e){var t;(t=n.a.exports).defineMode("javascript",(function(e,r){var n,a,o=e.indentUnit,s=r.statementIndent,c=r.jsonld,u=r.json||c,l=!1!==r.trackScope,f=r.typescript,p=r.wordCharacters||/[\w$\xa1-\uffff]/,d=function(){function e(e){return{type:e,style:"keyword"}}i(e,"kw");var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),o=e("operator"),s={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:o,typeof:o,instanceof:o,true:s,false:s,null:s,undefined:s,NaN:s,Infinity:s,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),m=/[+\-*&%=<>!?|~^@]/,y=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function v(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function k(e,t,r){return n=e,a=r,t}function b(e,t){var r=e.next();if('"'==r||"'"==r)return t.tokenize=w(r),t.tokenize(e,t);if("."==r&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return k("number","number");if("."==r&&e.match(".."))return k("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return k(r);if("="==r&&e.eat(">"))return k("=>","operator");if("0"==r&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return k("number","number");if(/\d/.test(r))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),k("number","number");if("/"==r)return e.eat("*")?(t.tokenize=x,x(e,t)):e.eat("/")?(e.skipToEnd(),k("comment","comment")):it(e,t,1)?(v(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),k("regexp","string-2")):(e.eat("="),k("operator","operator",e.current()));if("`"==r)return t.tokenize=g,g(e,t);if("#"==r&&"!"==e.peek())return e.skipToEnd(),k("meta","meta");if("#"==r&&e.eatWhile(p))return k("variable","property");if("<"==r&&e.match("!--")||"-"==r&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),k("comment","comment");if(m.test(r))return">"==r&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=r&&"="!=r||e.eat("="):/[<>*+\-|&?]/.test(r)&&(e.eat(r),">"==r&&e.eat(r))),"?"==r&&e.eat(".")?k("."):k("operator","operator",e.current());if(p.test(r)){e.eatWhile(p);var n=e.current();if("."!=t.lastType){if(d.propertyIsEnumerable(n)){var a=d[n];return k(a.type,a.style,n)}if("async"==n&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return k("async","keyword",n)}return k("variable","variable",n)}}function w(e){return function(t,r){var n,a=!1;if(c&&"@"==t.peek()&&t.match(y))return r.tokenize=b,k("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||a);)a=!a&&"\\"==n;return a||(r.tokenize=b),k("string","string")}}function x(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=b;break}n="*"==r}return k("comment","comment")}function g(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=b;break}n=!n&&"\\"==r}return k("quasi","string-2",e.current())}i(v,"readRegexp"),i(k,"ret"),i(b,"tokenBase"),i(w,"tokenString"),i(x,"tokenComment"),i(g,"tokenQuasi");var h="([{}])";function j(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(f){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var s=e.string.charAt(o),c=h.indexOf(s);if(c>=0&&c<3){if(!a){++o;break}if(0==--a){"("==s&&(i=!0);break}}else if(c>=3&&c<6)++a;else if(p.test(s))i=!0;else if(/["'\/`]/.test(s))for(;;--o){if(0==o)return;if(e.string.charAt(o-1)==s&&"\\"!=e.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(t.fatArrowAt=o)}}i(j,"findFatArrow");var A={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function M(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function E(e,t){if(!l)return!1;for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}function T(e,t,r,n,a){var i=e.cc;for(V.state=e,V.stream=a,V.marked=null,V.cc=i,V.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():u?R:D)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return V.marked?V.marked:"variable"==r&&E(e,n)?"variable-2":t}}i(M,"JSLexical"),i(E,"inScope"),i(T,"parseJS");var V={state:null,column:null,marked:null,cc:null};function C(){for(var e=arguments.length-1;e>=0;e--)V.cc.push(arguments[e])}function I(){return C.apply(null,arguments),!0}function z(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function S(e){var t=V.state;if(V.marked="def",l){if(t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=O(e,t.context);if(null!=n)return void(t.context=n)}else if(!z(e,t.localVars))return void(t.localVars=new $(e,t.localVars));r.globalVars&&!z(e,t.globalVars)&&(t.globalVars=new $(e,t.globalVars))}}function O(e,t){if(t){if(t.block){var r=O(e,t.prev);return r?r==t.prev?t:new q(r,t.vars,!0):null}return z(e,t.vars)?t:new q(t.prev,new $(e,t.vars),!1)}return null}function _(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function q(e,t,r){this.prev=e,this.vars=t,this.block=r}function $(e,t){this.name=e,this.next=t}i(C,"pass"),i(I,"cont"),i(z,"inList"),i(S,"register"),i(O,"registerVarScoped"),i(_,"isModifier"),i(q,"Context"),i($,"Var");var N=new $("this",new $("arguments",null));function P(){V.state.context=new q(V.state.context,V.state.localVars,!1),V.state.localVars=N}function B(){V.state.context=new q(V.state.context,V.state.localVars,!0),V.state.localVars=null}function F(){V.state.localVars=V.state.context.vars,V.state.context=V.state.context.prev}function L(e,t){var r=i((function(){var r=V.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new M(n,V.stream.column(),e,null,r.lexical,t)}),"result");return r.lex=!0,r}function Q(){var e=V.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function W(e){function t(r){return r==e?I():";"==e||"}"==r||")"==r||"]"==r?C():I(t)}return i(t,"exp"),t}function D(e,t){return"var"==e?I(L("vardef",t),Ce,W(";"),Q):"keyword a"==e?I(L("form"),H,D,Q):"keyword b"==e?I(L("form"),D,Q):"keyword d"==e?V.stream.match(/^\s*$/,!1)?I():I(L("stat"),G,W(";"),Q):"debugger"==e?I(W(";")):"{"==e?I(L("}"),B,de,Q,F):";"==e?I():"if"==e?("else"==V.state.lexical.info&&V.state.cc[V.state.cc.length-1]==Q&&V.state.cc.pop()(),I(L("form"),H,D,Q,qe)):"function"==e?I(Be):"for"==e?I(L("form"),B,$e,D,F,Q):"class"==e||f&&"interface"==t?(V.marked="keyword",I(L("form","class"==e?e:t),De,Q)):"variable"==e?f&&"declare"==t?(V.marked="keyword",I(D)):f&&("module"==t||"enum"==t||"type"==t)&&V.stream.match(/^\s*\w/,!1)?(V.marked="keyword","enum"==t?I(rt):"type"==t?I(Le,W("operator"),be,W(";")):I(L("form"),Ie,W("{"),L("}"),de,Q,Q)):f&&"namespace"==t?(V.marked="keyword",I(L("form"),R,D,Q)):f&&"abstract"==t?(V.marked="keyword",I(D)):I(L("stat"),oe):"switch"==e?I(L("form"),H,W("{"),L("}","switch"),B,de,Q,Q,F):"case"==e?I(R,W(":")):"default"==e?I(W(":")):"catch"==e?I(L("form"),P,J,D,Q,F):"export"==e?I(L("stat"),He,Q):"import"==e?I(L("stat"),Ge,Q):"async"==e?I(D):"@"==t?I(R,D):C(L("stat"),R,W(";"),Q)}function J(e){if("("==e)return I(Qe,W(")"))}function R(e,t){return K(e,t,!1)}function U(e,t){return K(e,t,!0)}function H(e){return"("!=e?C():I(L(")"),G,W(")"),Q)}function K(e,t,r){if(V.state.fatArrowAt==V.stream.start){var n=r?re:te;if("("==e)return I(P,L(")"),fe(Qe,")"),Q,W("=>"),n,F);if("variable"==e)return C(P,Ie,W("=>"),n,F)}var a=r?Y:X;return A.hasOwnProperty(e)?I(a):"function"==e?I(Be,a):"class"==e||f&&"interface"==t?(V.marked="keyword",I(L("form"),We,Q)):"keyword c"==e||"async"==e?I(r?U:R):"("==e?I(L(")"),G,W(")"),Q,a):"operator"==e||"spread"==e?I(r?U:R):"["==e?I(L("]"),tt,Q,a):"{"==e?pe(ce,"}",null,a):"quasi"==e?C(Z,a):"new"==e?I(ne(r)):I()}function G(e){return e.match(/[;\}\)\],]/)?C():C(R)}function X(e,t){return","==e?I(G):Y(e,t,!1)}function Y(e,t,r){var n=0==r?X:Y,a=0==r?R:U;return"=>"==e?I(P,r?re:te,F):"operator"==e?/\+\+|--/.test(t)||f&&"!"==t?I(n):f&&"<"==t&&V.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?I(L(">"),fe(be,">"),Q,n):"?"==t?I(R,W(":"),a):I(a):"quasi"==e?C(Z,n):";"!=e?"("==e?pe(U,")","call",n):"."==e?I(se,n):"["==e?I(L("]"),G,W("]"),Q,n):f&&"as"==t?(V.marked="keyword",I(be,n)):"regexp"==e?(V.state.lastType=V.marked="operator",V.stream.backUp(V.stream.pos-V.stream.start-1),I(a)):void 0:void 0}function Z(e,t){return"quasi"!=e?C():"${"!=t.slice(t.length-2)?I(Z):I(G,ee)}function ee(e){if("}"==e)return V.marked="string-2",V.state.tokenize=g,I(Z)}function te(e){return j(V.stream,V.state),C("{"==e?D:R)}function re(e){return j(V.stream,V.state),C("{"==e?D:U)}function ne(e){return function(t){return"."==t?I(e?ie:ae):"variable"==t&&f?I(Ee,e?Y:X):C(e?U:R)}}function ae(e,t){if("target"==t)return V.marked="keyword",I(X)}function ie(e,t){if("target"==t)return V.marked="keyword",I(Y)}function oe(e){return":"==e?I(Q,D):C(X,W(";"),Q)}function se(e){if("variable"==e)return V.marked="property",I()}function ce(e,t){return"async"==e?(V.marked="property",I(ce)):"variable"==e||"keyword"==V.style?(V.marked="property","get"==t||"set"==t?I(ue):(f&&V.state.fatArrowAt==V.stream.start&&(r=V.stream.match(/^\s*:\s*/,!1))&&(V.state.fatArrowAt=V.stream.pos+r[0].length),I(le))):"number"==e||"string"==e?(V.marked=c?"property":V.style+" property",I(le)):"jsonld-keyword"==e?I(le):f&&_(t)?(V.marked="keyword",I(ce)):"["==e?I(R,me,W("]"),le):"spread"==e?I(U,le):"*"==t?(V.marked="keyword",I(ce)):":"==e?C(le):void 0;var r}function ue(e){return"variable"!=e?C(le):(V.marked="property",I(Be))}function le(e){return":"==e?I(U):"("==e?C(Be):void 0}function fe(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=V.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),I((function(r,n){return r==t||n==t?C():C(e)}),n)}return a==t||i==t?I():r&&r.indexOf(";")>-1?C(e):I(W(t))}return i(n,"proceed"),function(r,a){return r==t||a==t?I():C(e,n)}}function pe(e,t,r){for(var n=3;n<arguments.length;n++)V.cc.push(arguments[n]);return I(L(t,r),fe(e,t),Q)}function de(e){return"}"==e?I():C(D,de)}function me(e,t){if(f){if(":"==e)return I(be);if("?"==t)return I(me)}}function ye(e,t){if(f&&(":"==e||"in"==t))return I(be)}function ve(e){if(f&&":"==e)return V.stream.match(/^\s*\w+\s+is\b/,!1)?I(R,ke,be):I(be)}function ke(e,t){if("is"==t)return V.marked="keyword",I()}function be(e,t){return"keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(V.marked="keyword",I("typeof"==t?U:be)):"variable"==e||"void"==t?(V.marked="type",I(Me)):"|"==t||"&"==t?I(be):"string"==e||"number"==e||"atom"==e?I(Me):"["==e?I(L("]"),fe(be,"]",","),Q,Me):"{"==e?I(L("}"),xe,Q,Me):"("==e?I(fe(Ae,")"),we,Me):"<"==e?I(fe(be,">"),be):"quasi"==e?C(he,Me):void 0}function we(e){if("=>"==e)return I(be)}function xe(e){return e.match(/[\}\)\]]/)?I():","==e||";"==e?I(xe):C(ge,xe)}function ge(e,t){return"variable"==e||"keyword"==V.style?(V.marked="property",I(ge)):"?"==t||"number"==e||"string"==e?I(ge):":"==e?I(be):"["==e?I(W("variable"),ye,W("]"),ge):"("==e?C(Fe,ge):e.match(/[;\}\)\],]/)?void 0:I()}function he(e,t){return"quasi"!=e?C():"${"!=t.slice(t.length-2)?I(he):I(be,je)}function je(e){if("}"==e)return V.marked="string-2",V.state.tokenize=g,I(he)}function Ae(e,t){return"variable"==e&&V.stream.match(/^\s*[?:]/,!1)||"?"==t?I(Ae):":"==e?I(be):"spread"==e?I(Ae):C(be)}function Me(e,t){return"<"==t?I(L(">"),fe(be,">"),Q,Me):"|"==t||"."==e||"&"==t?I(be):"["==e?I(be,W("]"),Me):"extends"==t||"implements"==t?(V.marked="keyword",I(be)):"?"==t?I(be,W(":"),be):void 0}function Ee(e,t){if("<"==t)return I(L(">"),fe(be,">"),Q,Me)}function Te(){return C(be,Ve)}function Ve(e,t){if("="==t)return I(be)}function Ce(e,t){return"enum"==t?(V.marked="keyword",I(rt)):C(Ie,me,Oe,_e)}function Ie(e,t){return f&&_(t)?(V.marked="keyword",I(Ie)):"variable"==e?(S(t),I()):"spread"==e?I(Ie):"["==e?pe(Se,"]"):"{"==e?pe(ze,"}"):void 0}function ze(e,t){return"variable"!=e||V.stream.match(/^\s*:/,!1)?("variable"==e&&(V.marked="property"),"spread"==e?I(Ie):"}"==e?C():"["==e?I(R,W("]"),W(":"),ze):I(W(":"),Ie,Oe)):(S(t),I(Oe))}function Se(){return C(Ie,Oe)}function Oe(e,t){if("="==t)return I(U)}function _e(e){if(","==e)return I(Ce)}function qe(e,t){if("keyword b"==e&&"else"==t)return I(L("form","else"),D,Q)}function $e(e,t){return"await"==t?I($e):"("==e?I(L(")"),Ne,Q):void 0}function Ne(e){return"var"==e?I(Ce,Pe):"variable"==e?I(Pe):C(Pe)}function Pe(e,t){return")"==e?I():";"==e?I(Pe):"in"==t||"of"==t?(V.marked="keyword",I(R,Pe)):C(R,Pe)}function Be(e,t){return"*"==t?(V.marked="keyword",I(Be)):"variable"==e?(S(t),I(Be)):"("==e?I(P,L(")"),fe(Qe,")"),Q,ve,D,F):f&&"<"==t?I(L(">"),fe(Te,">"),Q,Be):void 0}function Fe(e,t){return"*"==t?(V.marked="keyword",I(Fe)):"variable"==e?(S(t),I(Fe)):"("==e?I(P,L(")"),fe(Qe,")"),Q,ve,F):f&&"<"==t?I(L(">"),fe(Te,">"),Q,Fe):void 0}function Le(e,t){return"keyword"==e||"variable"==e?(V.marked="type",I(Le)):"<"==t?I(L(">"),fe(Te,">"),Q):void 0}function Qe(e,t){return"@"==t&&I(R,Qe),"spread"==e?I(Qe):f&&_(t)?(V.marked="keyword",I(Qe)):f&&"this"==e?I(me,Oe):C(Ie,me,Oe)}function We(e,t){return"variable"==e?De(e,t):Je(e,t)}function De(e,t){if("variable"==e)return S(t),I(Je)}function Je(e,t){return"<"==t?I(L(">"),fe(Te,">"),Q,Je):"extends"==t||"implements"==t||f&&","==e?("implements"==t&&(V.marked="keyword"),I(f?be:R,Je)):"{"==e?I(L("}"),Re,Q):void 0}function Re(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||f&&_(t))&&V.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(V.marked="keyword",I(Re)):"variable"==e||"keyword"==V.style?(V.marked="property",I(Ue,Re)):"number"==e||"string"==e?I(Ue,Re):"["==e?I(R,me,W("]"),Ue,Re):"*"==t?(V.marked="keyword",I(Re)):f&&"("==e?C(Fe,Re):";"==e||","==e?I(Re):"}"==e?I():"@"==t?I(R,Re):void 0}function Ue(e,t){if("!"==t)return I(Ue);if("?"==t)return I(Ue);if(":"==e)return I(be,Oe);if("="==t)return I(U);var r=V.state.lexical.prev;return C(r&&"interface"==r.info?Fe:Be)}function He(e,t){return"*"==t?(V.marked="keyword",I(et,W(";"))):"default"==t?(V.marked="keyword",I(R,W(";"))):"{"==e?I(fe(Ke,"}"),et,W(";")):C(D)}function Ke(e,t){return"as"==t?(V.marked="keyword",I(W("variable"))):"variable"==e?C(U,Ke):void 0}function Ge(e){return"string"==e?I():"("==e?C(R):"."==e?C(X):C(Xe,Ye,et)}function Xe(e,t){return"{"==e?pe(Xe,"}"):("variable"==e&&S(t),"*"==t&&(V.marked="keyword"),I(Ze))}function Ye(e){if(","==e)return I(Xe,Ye)}function Ze(e,t){if("as"==t)return V.marked="keyword",I(Xe)}function et(e,t){if("from"==t)return V.marked="keyword",I(R)}function tt(e){return"]"==e?I():C(fe(U,"]"))}function rt(){return C(L("form"),Ie,W("{"),L("}"),fe(nt,"}"),Q,Q)}function nt(){return C(Ie,Oe)}function at(e,t){return"operator"==e.lastType||","==e.lastType||m.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}function it(e,t,r){return t.tokenize==b&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return i(P,"pushcontext"),i(B,"pushblockcontext"),P.lex=B.lex=!0,i(F,"popcontext"),F.lex=!0,i(L,"pushlex"),i(Q,"poplex"),Q.lex=!0,i(W,"expect"),i(D,"statement"),i(J,"maybeCatchBinding"),i(R,"expression"),i(U,"expressionNoComma"),i(H,"parenExpr"),i(K,"expressionInner"),i(G,"maybeexpression"),i(X,"maybeoperatorComma"),i(Y,"maybeoperatorNoComma"),i(Z,"quasi"),i(ee,"continueQuasi"),i(te,"arrowBody"),i(re,"arrowBodyNoComma"),i(ne,"maybeTarget"),i(ae,"target"),i(ie,"targetNoComma"),i(oe,"maybelabel"),i(se,"property"),i(ce,"objprop"),i(ue,"getterSetter"),i(le,"afterprop"),i(fe,"commasep"),i(pe,"contCommasep"),i(de,"block"),i(me,"maybetype"),i(ye,"maybetypeOrIn"),i(ve,"mayberettype"),i(ke,"isKW"),i(be,"typeexpr"),i(we,"maybeReturnType"),i(xe,"typeprops"),i(ge,"typeprop"),i(he,"quasiType"),i(je,"continueQuasiType"),i(Ae,"typearg"),i(Me,"afterType"),i(Ee,"maybeTypeArgs"),i(Te,"typeparam"),i(Ve,"maybeTypeDefault"),i(Ce,"vardef"),i(Ie,"pattern"),i(ze,"proppattern"),i(Se,"eltpattern"),i(Oe,"maybeAssign"),i(_e,"vardefCont"),i(qe,"maybeelse"),i($e,"forspec"),i(Ne,"forspec1"),i(Pe,"forspec2"),i(Be,"functiondef"),i(Fe,"functiondecl"),i(Le,"typename"),i(Qe,"funarg"),i(We,"classExpression"),i(De,"className"),i(Je,"classNameAfter"),i(Re,"classBody"),i(Ue,"classfield"),i(He,"afterExport"),i(Ke,"exportField"),i(Ge,"afterImport"),i(Xe,"importSpec"),i(Ye,"maybeMoreImports"),i(Ze,"maybeAs"),i(et,"maybeFrom"),i(tt,"arrayLiteral"),i(rt,"enumdef"),i(nt,"enummember"),i(at,"isContinuedStatement"),i(it,"expressionAllowed"),{startState:function(e){var t={tokenize:b,lastType:"sof",cc:[],lexical:new M((e||0)-o,0,"block",!1),localVars:r.localVars,context:r.localVars&&new q(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),j(e,t)),t.tokenize!=x&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",T(t,r,n,a,e))},indent:function(e,n){if(e.tokenize==x||e.tokenize==g)return t.Pass;if(e.tokenize!=b)return 0;var a,i=n&&n.charAt(0),c=e.lexical;if(!/^\s*else\b/.test(n))for(var u=e.cc.length-1;u>=0;--u){var l=e.cc[u];if(l==Q)c=c.prev;else if(l!=qe&&l!=F)break}for(;("stat"==c.type||"form"==c.type)&&("}"==i||(a=e.cc[e.cc.length-1])&&(a==X||a==Y)&&!/^[,\.=+\-*:?[\(]/.test(n));)c=c.prev;s&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,p=i==f;return"vardef"==f?c.indented+("operator"==e.lastType||","==e.lastType?c.info.length+1:0):"form"==f&&"{"==i?c.indented:"form"==f?c.indented+o:"stat"==f?c.indented+(at(e,n)?s||o:0):"switch"!=c.info||p||0==r.doubleIndentSwitch?c.align?c.column+(p?0:1):c.indented+(p?0:o):c.indented+(/^(?:case|default)\b/.test(n)?o:2*o)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:u?null:"/*",blockCommentEnd:u?null:"*/",blockCommentContinue:u?null:" * ",lineComment:u?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:u?"json":"javascript",jsonldMode:c,jsonMode:u,expressionAllowed:it,skipExpression:function(e){T(e,"atom","atom","true",new t.StringStream("",2,null))}}})),t.registerHelper("wordChars","javascript",/[\w$]/),t.defineMIME("text/javascript","javascript"),t.defineMIME("text/ecmascript","javascript"),t.defineMIME("application/javascript","javascript"),t.defineMIME("application/x-javascript","javascript"),t.defineMIME("application/ecmascript","javascript"),t.defineMIME("application/json",{name:"javascript",json:!0}),t.defineMIME("application/x-json",{name:"javascript",json:!0}),t.defineMIME("application/manifest+json",{name:"javascript",json:!0}),t.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),t.defineMIME("text/typescript",{name:"javascript",typescript:!0}),t.defineMIME("application/typescript",{name:"javascript",typescript:!0})}();var c=o({__proto__:null,default:s.exports},[s.exports])}}]);
//# sourceMappingURL=348.3afd94a2.chunk.js.map