"use strict";(self.webpackChunkgraphiql_react=self.webpackChunkgraphiql_react||[]).push([[878],{9814:(e,n,t)=>{t.d(n,{P:()=>i,R:()=>a});var o=Object.defineProperty,r=(e,n)=>o(e,"name",{value:n,configurable:!0});class a{constructor(e,n){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=n}setStart(e,n){this.start=new i(e,n)}setEnd(e,n){this.end=new i(e,n)}}r(a,"Range");class i{constructor(e,n){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=n}setLine(e){this.line=e}setCharacter(e){this.character=e}}r(i,"Position")},5878:(e,n,t)=>{t.r(n);var o=t(9599),r=t(739);function a(e){var n,t,o;const a=e.getSchema(),i=null!==(n=null!==(t=null!==(o=null===a||void 0===a?void 0:a.astNode)&&void 0!==o?o:null===a||void 0===a?void 0:a.getQueryType())&&void 0!==t?t:null===a||void 0===a?void 0:a.getMutationType())&&void 0!==n?n:null===a||void 0===a?void 0:a.getSubscriptionType();let c=0;return{SchemaDefinition(n){i?e.reportError(new r.eO("Cannot define a new schema within a schema extension.",{nodes:n})):(c>0&&e.reportError(new r.eO("Must provide only one schema definition.",{nodes:n})),++c)}}}function i(e){const n=e.getSchema(),t=Object.create(null),o=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(n){var a;const i=null!==(a=n.operationTypes)&&void 0!==a?a:[];for(const c of i){const n=c.operation,a=t[n];o[n]?e.reportError(new r.eO("Type for ".concat(n," already defined in the schema. It cannot be redefined."),{nodes:c})):a?e.reportError(new r.eO("There can be only one ".concat(n," type in schema."),{nodes:[a,c]})):t[n]=c}return!1}}function c(e){const n=Object.create(null),t=e.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(o){const a=o.name.value;if(null===t||void 0===t||!t.getType(a))return n[a]?e.reportError(new r.eO('There can be only one type named "'.concat(a,'".'),{nodes:[n[a],o.name]})):n[a]=o.name,!1;e.reportError(new r.eO('Type "'.concat(a,'" already exists in the schema. It cannot also be defined in this type definition.'),{nodes:o.name}))}}var s=t(3631);function u(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(n){var a;const i=n.name.value;o[i]||(o[i]=Object.create(null));const c=null!==(a=n.values)&&void 0!==a?a:[],u=o[i];for(const o of c){const n=o.name.value,a=t[i];(0,s.oF)(a)&&a.getValue(n)?e.reportError(new r.eO('Enum value "'.concat(i,".").concat(n,'" already exists in the schema. It cannot also be defined in this type extension.'),{nodes:o.name})):u[n]?e.reportError(new r.eO('Enum value "'.concat(i,".").concat(n,'" can only be defined once.'),{nodes:[u[n],o.name]})):u[n]=o.name}return!1}}function l(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(n){var a;const i=n.name.value;o[i]||(o[i]=Object.create(null));const c=null!==(a=n.fields)&&void 0!==a?a:[],s=o[i];for(const o of c){const n=o.name.value;f(t[i],n)?e.reportError(new r.eO('Field "'.concat(i,".").concat(n,'" already exists in the schema. It cannot also be defined in this type extension.'),{nodes:o.name})):s[n]?e.reportError(new r.eO('Field "'.concat(i,".").concat(n,'" can only be defined once.'),{nodes:[s[n],o.name]})):s[n]=o.name}return!1}}function f(e,n){return!!((0,s.YQ)(e)||(0,s.kD)(e)||(0,s.qK)(e))&&null!=e.getFields()[n]}function d(e){const n=Object.create(null),t=e.getSchema();return{DirectiveDefinition(o){const a=o.name.value;if(null===t||void 0===t||!t.getDirective(a))return n[a]?e.reportError(new r.eO('There can be only one directive named "@'.concat(a,'".'),{nodes:[n[a],o.name]})):n[a]=o.name,!1;e.reportError(new r.eO('Directive "@'.concat(a,'" already exists in the schema. It cannot be redefined.'),{nodes:o.name}))}}}var p=t(6815),E=t(5624),m=t(4705);function v(e){return e.kind===m.b.OPERATION_DEFINITION||e.kind===m.b.FRAGMENT_DEFINITION}function g(e){return e.kind===m.b.SCHEMA_DEFINITION||b(e)||e.kind===m.b.DIRECTIVE_DEFINITION}function b(e){return e.kind===m.b.SCALAR_TYPE_DEFINITION||e.kind===m.b.OBJECT_TYPE_DEFINITION||e.kind===m.b.INTERFACE_TYPE_DEFINITION||e.kind===m.b.UNION_TYPE_DEFINITION||e.kind===m.b.ENUM_TYPE_DEFINITION||e.kind===m.b.INPUT_OBJECT_TYPE_DEFINITION}function T(e){return e.kind===m.b.SCHEMA_EXTENSION||I(e)}function I(e){return e.kind===m.b.SCALAR_TYPE_EXTENSION||e.kind===m.b.OBJECT_TYPE_EXTENSION||e.kind===m.b.INTERFACE_TYPE_EXTENSION||e.kind===m.b.UNION_TYPE_EXTENSION||e.kind===m.b.ENUM_TYPE_EXTENSION||e.kind===m.b.INPUT_OBJECT_TYPE_EXTENSION}var O=t(2915);function N(e){const n=e.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);for(const r of e.getDocument().definitions)b(r)&&(o[r.name.value]=!0);const a=[...Object.keys(t),...Object.keys(o)];return{NamedType(n,i,c,s,u){const l=n.name.value;if(!t[l]&&!o[l]){var f;const t=null!==(f=u[2])&&void 0!==f?f:c,o=null!=t&&("kind"in(d=t)&&(g(d)||T(d)));if(o&&h.includes(l))return;const i=(0,E.x)(l,o?h.concat(a):a);e.reportError(new r.eO('Unknown type "'.concat(l,'".')+(0,p.a)(i),{nodes:n}))}var d}}}const h=[...t(3721).YC,...O.V4].map((e=>e.name));var y=t(9788),_=t(3444),D=t(4740),F=t(6542),S=t(9976);function w(e){const n=Object.create(null),t=e.getSchema(),o=t?t.getDirectives():S.rc;for(const r of o)n[r.name]=r.locations;const a=e.getDocument().definitions;for(const r of a)r.kind===m.b.DIRECTIVE_DEFINITION&&(n[r.name.value]=r.locations.map((e=>e.value)));return{Directive(t,o,a,i,c){const s=t.name.value,u=n[s];if(!u)return void e.reportError(new r.eO('Unknown directive "@'.concat(s,'".'),{nodes:t}));const l=function(e){const n=e[e.length-1];switch("kind"in n||(0,_.V)(!1),n.kind){case m.b.OPERATION_DEFINITION:return function(e){switch(e){case D.cE.QUERY:return F.H.QUERY;case D.cE.MUTATION:return F.H.MUTATION;case D.cE.SUBSCRIPTION:return F.H.SUBSCRIPTION}}(n.operation);case m.b.FIELD:return F.H.FIELD;case m.b.FRAGMENT_SPREAD:return F.H.FRAGMENT_SPREAD;case m.b.INLINE_FRAGMENT:return F.H.INLINE_FRAGMENT;case m.b.FRAGMENT_DEFINITION:return F.H.FRAGMENT_DEFINITION;case m.b.VARIABLE_DEFINITION:return F.H.VARIABLE_DEFINITION;case m.b.SCHEMA_DEFINITION:case m.b.SCHEMA_EXTENSION:return F.H.SCHEMA;case m.b.SCALAR_TYPE_DEFINITION:case m.b.SCALAR_TYPE_EXTENSION:return F.H.SCALAR;case m.b.OBJECT_TYPE_DEFINITION:case m.b.OBJECT_TYPE_EXTENSION:return F.H.OBJECT;case m.b.FIELD_DEFINITION:return F.H.FIELD_DEFINITION;case m.b.INTERFACE_TYPE_DEFINITION:case m.b.INTERFACE_TYPE_EXTENSION:return F.H.INTERFACE;case m.b.UNION_TYPE_DEFINITION:case m.b.UNION_TYPE_EXTENSION:return F.H.UNION;case m.b.ENUM_TYPE_DEFINITION:case m.b.ENUM_TYPE_EXTENSION:return F.H.ENUM;case m.b.ENUM_VALUE_DEFINITION:return F.H.ENUM_VALUE;case m.b.INPUT_OBJECT_TYPE_DEFINITION:case m.b.INPUT_OBJECT_TYPE_EXTENSION:return F.H.INPUT_OBJECT;case m.b.INPUT_VALUE_DEFINITION:{const n=e[e.length-3];return"kind"in n||(0,_.V)(!1),n.kind===m.b.INPUT_OBJECT_TYPE_DEFINITION?F.H.INPUT_FIELD_DEFINITION:F.H.ARGUMENT_DEFINITION}default:(0,_.V)(!1,"Unexpected kind: "+(0,y.N)(n.kind))}}(c);l&&!u.includes(l)&&e.reportError(new r.eO('Directive "@'.concat(s,'" may not be used on ').concat(l,"."),{nodes:t}))}}}function P(e){const n=Object.create(null),t=e.getSchema(),o=t?t.getDirectives():S.rc;for(const r of o)n[r.name]=!r.isRepeatable;const a=e.getDocument().definitions;for(const r of a)r.kind===m.b.DIRECTIVE_DEFINITION&&(n[r.name.value]=!r.repeatable);const i=Object.create(null),c=Object.create(null);return{enter(t){if(!("directives"in t)||!t.directives)return;let o;if(t.kind===m.b.SCHEMA_DEFINITION||t.kind===m.b.SCHEMA_EXTENSION)o=i;else if(b(t)||I(t)){const e=t.name.value;o=c[e],void 0===o&&(c[e]=o=Object.create(null))}else o=Object.create(null);for(const a of t.directives){const t=a.name.value;n[t]&&(o[t]?e.reportError(new r.eO('The directive "@'.concat(t,'" can only be used once at this location.'),{nodes:[o[t],a]})):o[t]=a)}}}}function A(e){const n=e.getSchema(),t=Object.create(null);for(const r of e.getDocument().definitions)b(r)&&(t[r.name.value]=r);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(o){const a=o.name.value,i=t[a],c=null===n||void 0===n?void 0:n.getType(a);let u;if(i?u=R[i.kind]:c&&(u=function(e){if((0,s.lg)(e))return m.b.SCALAR_TYPE_EXTENSION;if((0,s.YQ)(e))return m.b.OBJECT_TYPE_EXTENSION;if((0,s.kD)(e))return m.b.INTERFACE_TYPE_EXTENSION;if((0,s.CK)(e))return m.b.UNION_TYPE_EXTENSION;if((0,s.oF)(e))return m.b.ENUM_TYPE_EXTENSION;if((0,s.qK)(e))return m.b.INPUT_OBJECT_TYPE_EXTENSION;(0,_.V)(!1,"Unexpected type: "+(0,y.N)(e))}(c)),u){if(u!==o.kind){const n=function(e){switch(e){case m.b.SCALAR_TYPE_EXTENSION:return"scalar";case m.b.OBJECT_TYPE_EXTENSION:return"object";case m.b.INTERFACE_TYPE_EXTENSION:return"interface";case m.b.UNION_TYPE_EXTENSION:return"union";case m.b.ENUM_TYPE_EXTENSION:return"enum";case m.b.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:(0,_.V)(!1,"Unexpected kind: "+(0,y.N)(e))}}(o.kind);e.reportError(new r.eO("Cannot extend non-".concat(n,' type "').concat(a,'".'),{nodes:i?[i,o]:o}))}}else{const i=Object.keys({...t,...null===n||void 0===n?void 0:n.getTypeMap()}),c=(0,E.x)(a,i);e.reportError(new r.eO('Cannot extend type "'.concat(a,'" because it is not defined.')+(0,p.a)(c),{nodes:o.name}))}}}const R={[m.b.SCALAR_TYPE_DEFINITION]:m.b.SCALAR_TYPE_EXTENSION,[m.b.OBJECT_TYPE_DEFINITION]:m.b.OBJECT_TYPE_EXTENSION,[m.b.INTERFACE_TYPE_DEFINITION]:m.b.INTERFACE_TYPE_EXTENSION,[m.b.UNION_TYPE_DEFINITION]:m.b.UNION_TYPE_EXTENSION,[m.b.ENUM_TYPE_DEFINITION]:m.b.ENUM_TYPE_EXTENSION,[m.b.INPUT_OBJECT_TYPE_DEFINITION]:m.b.INPUT_OBJECT_TYPE_EXTENSION};function k(e,n){const t=new Map;for(const o of e){const e=n(o),r=t.get(e);void 0===r?t.set(e,[o]):r.push(o)}return t}function j(e){return{Field:n,Directive:n};function n(n){var t;const o=k(null!==(t=n.arguments)&&void 0!==t?t:[],(e=>e.name.value));for(const[a,i]of o)i.length>1&&e.reportError(new r.eO('There can be only one argument named "'.concat(a,'".'),{nodes:i.map((e=>e.name))}))}}function C(e){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const e=n.pop();e||(0,_.V)(!1),t=e}},ObjectField(n){const o=n.name.value;t[o]?e.reportError(new r.eO('There can be only one input field named "'.concat(o,'".'),{nodes:[t[o],n.name]})):t[o]=n.name}}}function V(e){return{Document(n){for(const t of n.definitions)if(!v(t)){const n=t.kind===m.b.SCHEMA_DEFINITION||t.kind===m.b.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';e.reportError(new r.eO("The ".concat(n," definition is not executable."),{nodes:t}))}return!1}}}var U=t(7407);var M=t(7233),Y=t(8912);function L(e){const n=Object.create(null),t=e.getSchema(),o=t?t.getDirectives():S.rc;for(const r of o)n[r.name]=r.args.map((e=>e.name));const a=e.getDocument().definitions;for(const r of a)if(r.kind===m.b.DIRECTIVE_DEFINITION){var i;const e=null!==(i=r.arguments)&&void 0!==i?i:[];n[r.name.value]=e.map((e=>e.name.value))}return{Directive(t){const o=t.name.value,a=n[o];if(t.arguments&&a)for(const n of t.arguments){const t=n.name.value;if(!a.includes(t)){const i=(0,E.x)(t,a);e.reportError(new r.eO('Unknown argument "'.concat(t,'" on directive "@').concat(o,'".')+(0,p.a)(i),{nodes:n}))}}return!1}}}function x(e){return{FragmentSpread(n){const t=n.name.value;e.getFragment(t)||e.reportError(new r.eO('Unknown fragment "'.concat(t,'".'),{nodes:n.name}))}}}function X(e){const n=[],t=[];return{OperationDefinition:e=>(n.push(e),!1),FragmentDefinition:e=>(t.push(e),!1),Document:{leave(){const o=Object.create(null);for(const t of n)for(const n of e.getRecursivelyReferencedFragments(t))o[n.name.value]=!0;for(const n of t){const t=n.name.value;!0!==o[t]&&e.reportError(new r.eO('Fragment "'.concat(t,'" is never used.'),{nodes:n}))}}}}}function H(e){switch(e.kind){case m.b.OBJECT:return{...e,fields:(n=e.fields,n.map((e=>({...e,value:H(e.value)}))).sort(((e,n)=>(0,U.p)(e.name.value,n.name.value))))};case m.b.LIST:return{...e,values:e.values.map(H)};case m.b.INT:case m.b.FLOAT:case m.b.STRING:case m.b.BOOLEAN:case m.b.NULL:case m.b.ENUM:case m.b.VARIABLE:return e}var n}function B(e){return Array.isArray(e)?e.map((e=>{let[n,t]=e;return'subfields "'.concat(n,'" conflict because ')+B(t)})).join(" and "):e}function G(e,n,t,o,r,a,i){const c=e.getFragment(i);if(!c)return;const[s,u]=W(e,t,c);if(a!==s){Q(e,n,t,o,r,a,s);for(const c of u)o.has(c,i,r)||(o.add(c,i,r),G(e,n,t,o,r,a,c))}}function J(e,n,t,o,r,a,i){if(a===i)return;if(o.has(a,i,r))return;o.add(a,i,r);const c=e.getFragment(a),s=e.getFragment(i);if(!c||!s)return;const[u,l]=W(e,t,c),[f,d]=W(e,t,s);Q(e,n,t,o,r,u,f);for(const p of d)J(e,n,t,o,r,a,p);for(const p of l)J(e,n,t,o,r,p,i)}function Q(e,n,t,o,r,a,i){for(const[c,s]of Object.entries(a)){const a=i[c];if(a)for(const i of s)for(const s of a){const a=q(e,t,o,r,c,i,s);a&&n.push(a)}}}function q(e,n,t,o,r,a,i){const[c,u,l]=a,[f,d,p]=i,E=o||c!==f&&(0,s.YQ)(c)&&(0,s.YQ)(f);if(!E){const e=u.name.value,n=d.name.value;if(e!==n)return[[r,'"'.concat(e,'" and "').concat(n,'" are different fields')],[u],[d]];if(!function(e,n){const t=e.arguments,o=n.arguments;if(void 0===t||0===t.length)return void 0===o||0===o.length;if(void 0===o||0===o.length)return!1;if(t.length!==o.length)return!1;const r=new Map(o.map((e=>{let{name:n,value:t}=e;return[n.value,t]})));return t.every((e=>{const n=e.value,t=r.get(e.name.value);return void 0!==t&&K(n)===K(t)}))}(u,d))return[[r,"they have differing arguments"],[u],[d]]}const m=null===l||void 0===l?void 0:l.type,v=null===p||void 0===p?void 0:p.type;if(m&&v&&z(m,v))return[[r,'they return conflicting types "'.concat((0,y.N)(m),'" and "').concat((0,y.N)(v),'"')],[u],[d]];const g=u.selectionSet,b=d.selectionSet;if(g&&b){const o=function(e,n,t,o,r,a,i,c){const s=[],[u,l]=$(e,n,r,a),[f,d]=$(e,n,i,c);Q(e,s,n,t,o,u,f);for(const p of d)G(e,s,n,t,o,u,p);for(const p of l)G(e,s,n,t,o,f,p);for(const p of l)for(const r of d)J(e,s,n,t,o,p,r);return s}(e,n,t,E,(0,s.MR)(m),g,(0,s.MR)(v),b);return function(e,n,t,o){if(e.length>0)return[[n,e.map((e=>{let[n]=e;return n}))],[t,...e.map((e=>{let[,n]=e;return n})).flat()],[o,...e.map((e=>{let[,,n]=e;return n})).flat()]]}(o,r,u,d)}}function K(e){return(0,M.y)(H(e))}function z(e,n){return(0,s.Fs)(e)?!(0,s.Fs)(n)||z(e.ofType,n.ofType):!!(0,s.Fs)(n)||((0,s.bd)(e)?!(0,s.bd)(n)||z(e.ofType,n.ofType):!!(0,s.bd)(n)||!(!(0,s.zf)(e)&&!(0,s.zf)(n))&&e!==n)}function $(e,n,t,o){const r=n.get(o);if(r)return r;const a=Object.create(null),i=Object.create(null);Z(e,t,o,a,i);const c=[a,Object.keys(i)];return n.set(o,c),c}function W(e,n,t){const o=n.get(t.selectionSet);if(o)return o;const r=(0,Y.v)(e.getSchema(),t.typeCondition);return $(e,n,r,t.selectionSet)}function Z(e,n,t,o,r){for(const a of t.selections)switch(a.kind){case m.b.FIELD:{const e=a.name.value;let t;((0,s.YQ)(n)||(0,s.kD)(n))&&(t=n.getFields()[e]);const r=a.alias?a.alias.value:e;o[r]||(o[r]=[]),o[r].push([n,a,t]);break}case m.b.FRAGMENT_SPREAD:r[a.name.value]=!0;break;case m.b.INLINE_FRAGMENT:{const t=a.typeCondition,i=t?(0,Y.v)(e.getSchema(),t):n;Z(e,i,a.selectionSet,o,r);break}}}class ee{constructor(){this._data=new Map}has(e,n,t){var o;const[r,a]=e<n?[e,n]:[n,e],i=null===(o=this._data.get(r))||void 0===o?void 0:o.get(a);return void 0!==i&&(!!t||t===i)}add(e,n,t){const[o,r]=e<n?[e,n]:[n,e],a=this._data.get(o);void 0===a?this._data.set(o,new Map([[r,t]])):a.set(r,t)}}var ne=t(6772);var te=t(3041);function oe(e){var n;const t=Object.create(null),o=e.getSchema(),a=null!==(n=null===o||void 0===o?void 0:o.getDirectives())&&void 0!==n?n:S.rc;for(const r of a)t[r.name]=(0,te.K)(r.args.filter(s.xP),(e=>e.name));const i=e.getDocument().definitions;for(const r of i)if(r.kind===m.b.DIRECTIVE_DEFINITION){var c;const e=null!==(c=r.arguments)&&void 0!==c?c:[];t[r.name.value]=(0,te.K)(e.filter(re),(e=>e.name.value))}return{Directive:{leave(n){const o=n.name.value,a=t[o];if(a){var i;const t=null!==(i=n.arguments)&&void 0!==i?i:[],c=new Set(t.map((e=>e.name.value)));for(const[i,u]of Object.entries(a))if(!c.has(i)){const t=(0,s.Xj)(u.type)?(0,y.N)(u.type):(0,M.y)(u.type);e.reportError(new r.eO('Directive "@'.concat(o,'" argument "').concat(i,'" of type "').concat(t,'" is required, but it was not provided.'),{nodes:n}))}}}}}}function re(e){return e.type.kind===m.b.NON_NULL_TYPE&&null==e.defaultValue}var ae=t(5089);function ie(e,n,t){var o;const a=null===(o=n.directives)||void 0===o?void 0:o.find((n=>n.name.value===e.name));if(a)return function(e,n,t){var o;const a={},i=null!==(o=n.arguments)&&void 0!==o?o:[],c=(0,te.K)(i,(e=>e.name.value));for(const u of e.args){const e=u.name,o=u.type,i=c[e];if(!i){if(void 0!==u.defaultValue)a[e]=u.defaultValue;else if((0,s.bd)(o))throw new r.eO('Argument "'.concat(e,'" of required type "').concat((0,y.N)(o),'" ')+"was not provided.",{nodes:n});continue}const l=i.value;let f=l.kind===m.b.NULL;if(l.kind===m.b.VARIABLE){const n=l.name.value;if(null==t||!ce(t,n)){if(void 0!==u.defaultValue)a[e]=u.defaultValue;else if((0,s.bd)(o))throw new r.eO('Argument "'.concat(e,'" of required type "').concat((0,y.N)(o),'" ')+'was provided the variable "$'.concat(n,'" which was not provided a runtime value.'),{nodes:l});continue}f=null==t[n]}if(f&&(0,s.bd)(o))throw new r.eO('Argument "'.concat(e,'" of non-null type "').concat((0,y.N)(o),'" ')+"must not be null.",{nodes:l});const d=(0,ae.i)(l,o,t);if(void 0===d)throw new r.eO('Argument "'.concat(e,'" has invalid value ').concat((0,M.y)(l),"."),{nodes:l});a[e]=d}return a}(e,a,t)}function ce(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function se(e,n,t,o,r,a,i){for(const s of r.selections)switch(s.kind){case m.b.FIELD:{if(!ue(t,s))continue;const e=(c=s).alias?c.alias.value:c.name.value,n=a.get(e);void 0!==n?n.push(s):a.set(e,[s]);break}case m.b.INLINE_FRAGMENT:if(!ue(t,s)||!le(e,s,o))continue;se(e,n,t,o,s.selectionSet,a,i);break;case m.b.FRAGMENT_SPREAD:{const r=s.name.value;if(i.has(r)||!ue(t,s))continue;i.add(r);const c=n[r];if(!c||!le(e,c,o))continue;se(e,n,t,o,c.selectionSet,a,i);break}}var c}function ue(e,n){const t=ie(S.MQ,n,e);if(!0===(null===t||void 0===t?void 0:t.if))return!1;const o=ie(S.HQ,n,e);return!1!==(null===o||void 0===o?void 0:o.if)}function le(e,n,t){const o=n.typeCondition;if(!o)return!0;const r=(0,Y.v)(e,o);return r===t||!!(0,s.Lc)(r)&&e.isSubType(r,t)}function fe(e,n){const t=e.getInputType();if(!t)return;const o=(0,s.MR)(t);if((0,s.zf)(o))try{if(void 0===o.parseLiteral(n,void 0)){const o=(0,y.N)(t);e.reportError(new r.eO('Expected value of type "'.concat(o,'", found ').concat((0,M.y)(n),"."),{nodes:n}))}}catch(a){const o=(0,y.N)(t);a instanceof r.eO?e.reportError(a):e.reportError(new r.eO('Expected value of type "'.concat(o,'", found ').concat((0,M.y)(n),"; ")+a.message,{nodes:n,originalError:a}))}else{const o=(0,y.N)(t);e.reportError(new r.eO('Expected value of type "'.concat(o,'", found ').concat((0,M.y)(n),"."),{nodes:n}))}}function de(e,n,t,o,r){if((0,s.bd)(o)&&!(0,s.bd)(n)){if(!(null!=t&&t.kind!==m.b.NULL)&&!(void 0!==r))return!1;const a=o.ofType;return(0,ne.sP)(e,n,a)}return(0,ne.sP)(e,n,o)}const pe=Object.freeze([function(e){function n(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(t.kind===m.b.FRAGMENT_SPREAD){const a=t.name.value;if(!0===o[a])return!1;const i=e.getFragment(a);if(!i)return!1;try{return o[a]=!0,n(i,o,r)}finally{o[a]=void 0}}if(t.kind===m.b.FIELD&&("fields"===t.name.value||"interfaces"===t.name.value||"possibleTypes"===t.name.value||"inputFields"===t.name.value)&&(r++,r>=3))return!0;if("selectionSet"in t&&t.selectionSet)for(const e of t.selectionSet.selections)if(n(e,o,r))return!0;return!1}return{Field(t){if(("__schema"===t.name.value||"__type"===t.name.value)&&n(t))return e.reportError(new r.eO("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}]),Ee=Object.freeze([V,function(e){const n=Object.create(null);return{OperationDefinition(t){const o=t.name;return o&&(n[o.value]?e.reportError(new r.eO('There can be only one operation named "'.concat(o.value,'".'),{nodes:[n[o.value],o]})):n[o.value]=o),!1},FragmentDefinition:()=>!1}},function(e){let n=0;return{Document(e){n=e.definitions.filter((e=>e.kind===m.b.OPERATION_DEFINITION)).length},OperationDefinition(t){!t.name&&n>1&&e.reportError(new r.eO("This anonymous operation must be the only defined operation.",{nodes:t}))}}},function(e){return{OperationDefinition(n){if("subscription"===n.operation){const t=e.getSchema(),o=t.getSubscriptionType();if(o){const a=n.name?n.name.value:null,i=Object.create(null),c=e.getDocument(),s=Object.create(null);for(const e of c.definitions)e.kind===m.b.FRAGMENT_DEFINITION&&(s[e.name.value]=e);const u=function(e,n,t,o,r){const a=new Map;return se(e,n,t,o,r,a,new Set),a}(t,s,i,o,n.selectionSet);if(u.size>1){const n=[...u.values()].slice(1).flat();e.reportError(new r.eO(null!=a?'Subscription "'.concat(a,'" must select only one top level field.'):"Anonymous Subscription must select only one top level field.",{nodes:n}))}for(const n of u.values()){n[0].name.value.startsWith("__")&&e.reportError(new r.eO(null!=a?'Subscription "'.concat(a,'" must not select an introspection top level field.'):"Anonymous Subscription must not select an introspection top level field.",{nodes:n}))}}}}}},N,function(e){return{InlineFragment(n){const t=n.typeCondition;if(t){const n=(0,Y.v)(e.getSchema(),t);if(n&&!(0,s.ML)(n)){const n=(0,M.y)(t);e.reportError(new r.eO('Fragment cannot condition on non composite type "'.concat(n,'".'),{nodes:t}))}}},FragmentDefinition(n){const t=(0,Y.v)(e.getSchema(),n.typeCondition);if(t&&!(0,s.ML)(t)){const t=(0,M.y)(n.typeCondition);e.reportError(new r.eO('Fragment "'.concat(n.name.value,'" cannot condition on non composite type "').concat(t,'".'),{nodes:n.typeCondition}))}}}},function(e){return{VariableDefinition(n){const t=(0,Y.v)(e.getSchema(),n.type);if(void 0!==t&&!(0,s.dX)(t)){const t=n.variable.name.value,o=(0,M.y)(n.type);e.reportError(new r.eO('Variable "$'.concat(t,'" cannot be non-input type "').concat(o,'".'),{nodes:n.type}))}}}},function(e){return{Field(n){const t=e.getType(),o=n.selectionSet;if(t)if((0,s.zf)((0,s.MR)(t))){if(o){const a=n.name.value,i=(0,y.N)(t);e.reportError(new r.eO('Field "'.concat(a,'" must not have a selection since type "').concat(i,'" has no subfields.'),{nodes:o}))}}else if(!o){const o=n.name.value,a=(0,y.N)(t);e.reportError(new r.eO('Field "'.concat(o,'" of type "').concat(a,'" must have a selection of subfields. Did you mean "').concat(o,' { ... }"?'),{nodes:n}))}}}},function(e){return{Field(n){const t=e.getParentType();if(t){if(!e.getFieldDef()){const o=e.getSchema(),a=n.name.value;let i=(0,p.a)("to use an inline fragment on",function(e,n,t){if(!(0,s.Lc)(n))return[];const o=new Set,r=Object.create(null);for(const i of e.getPossibleTypes(n))if(i.getFields()[t]){o.add(i),r[i.name]=1;for(const e of i.getInterfaces()){var a;e.getFields()[t]&&(o.add(e),r[e.name]=(null!==(a=r[e.name])&&void 0!==a?a:0)+1)}}return[...o].sort(((n,t)=>{const o=r[t.name]-r[n.name];return 0!==o?o:(0,s.kD)(n)&&e.isSubType(n,t)?-1:(0,s.kD)(t)&&e.isSubType(t,n)?1:(0,U.p)(n.name,t.name)})).map((e=>e.name))}(o,t,a));""===i&&(i=(0,p.a)(function(e,n){if((0,s.YQ)(e)||(0,s.kD)(e)){const t=Object.keys(e.getFields());return(0,E.x)(n,t)}return[]}(t,a))),e.reportError(new r.eO('Cannot query field "'.concat(a,'" on type "').concat(t.name,'".')+i,{nodes:n}))}}}}},function(e){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const o=t.name.value;return n[o]?e.reportError(new r.eO('There can be only one fragment named "'.concat(o,'".'),{nodes:[n[o],t.name]})):n[o]=t.name,!1}}},x,X,function(e){return{InlineFragment(n){const t=e.getType(),o=e.getParentType();if((0,s.ML)(t)&&(0,s.ML)(o)&&!(0,ne.uI)(e.getSchema(),t,o)){const a=(0,y.N)(o),i=(0,y.N)(t);e.reportError(new r.eO('Fragment cannot be spread here as objects of type "'.concat(a,'" can never be of type "').concat(i,'".'),{nodes:n}))}},FragmentSpread(n){const t=n.name.value,o=function(e,n){const t=e.getFragment(n);if(t){const n=(0,Y.v)(e.getSchema(),t.typeCondition);if((0,s.ML)(n))return n}}(e,t),a=e.getParentType();if(o&&a&&!(0,ne.uI)(e.getSchema(),o,a)){const i=(0,y.N)(a),c=(0,y.N)(o);e.reportError(new r.eO('Fragment "'.concat(t,'" cannot be spread here as objects of type "').concat(i,'" can never be of type "').concat(c,'".'),{nodes:n}))}}}},function(e){const n=Object.create(null),t=[],o=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition:e=>(a(e),!1)};function a(i){if(n[i.name.value])return;const c=i.name.value;n[c]=!0;const s=e.getFragmentSpreads(i.selectionSet);if(0!==s.length){o[c]=t.length;for(const n of s){const i=n.name.value,c=o[i];if(t.push(n),void 0===c){const n=e.getFragment(i);n&&a(n)}else{const n=t.slice(c),o=n.slice(0,-1).map((e=>'"'+e.name.value+'"')).join(", ");e.reportError(new r.eO('Cannot spread fragment "'.concat(i,'" within itself')+(""!==o?" via ".concat(o,"."):"."),{nodes:n}))}t.pop()}o[c]=void 0}}},function(e){return{OperationDefinition(n){var t;const o=k(null!==(t=n.variableDefinitions)&&void 0!==t?t:[],(e=>e.variable.name.value));for(const[a,i]of o)i.length>1&&e.reportError(new r.eO('There can be only one variable named "$'.concat(a,'".'),{nodes:i.map((e=>e.variable.name))}))}}},function(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=e.getRecursiveVariableUsages(t);for(const{node:a}of o){const o=a.name.value;!0!==n[o]&&e.reportError(new r.eO(t.name?'Variable "$'.concat(o,'" is not defined by operation "').concat(t.name.value,'".'):'Variable "$'.concat(o,'" is not defined.'),{nodes:[a,t]}))}}},VariableDefinition(e){n[e.variable.name.value]=!0}}},function(e){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const o=Object.create(null),a=e.getRecursiveVariableUsages(t);for(const{node:e}of a)o[e.name.value]=!0;for(const i of n){const n=i.variable.name.value;!0!==o[n]&&e.reportError(new r.eO(t.name?'Variable "$'.concat(n,'" is never used in operation "').concat(t.name.value,'".'):'Variable "$'.concat(n,'" is never used.'),{nodes:i}))}}},VariableDefinition(e){n.push(e)}}},w,P,function(e){return{...L(e),Argument(n){const t=e.getArgument(),o=e.getFieldDef(),a=e.getParentType();if(!t&&o&&a){const t=n.name.value,i=o.args.map((e=>e.name)),c=(0,E.x)(t,i);e.reportError(new r.eO('Unknown argument "'.concat(t,'" on field "').concat(a.name,".").concat(o.name,'".')+(0,p.a)(c),{nodes:n}))}}}},j,function(e){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(e){n[e.variable.name.value]=e},ListValue(n){const t=(0,s.yl)(e.getParentInputType());if(!(0,s.Fs)(t))return fe(e,n),!1},ObjectValue(t){const o=(0,s.MR)(e.getInputType());if(!(0,s.qK)(o))return fe(e,t),!1;const a=(0,te.K)(t.fields,(e=>e.name.value));for(const n of Object.values(o.getFields())){if(!a[n.name]&&(0,s.YX)(n)){const a=(0,y.N)(n.type);e.reportError(new r.eO('Field "'.concat(o.name,".").concat(n.name,'" of required type "').concat(a,'" was not provided.'),{nodes:t}))}}o.isOneOf&&function(e,n,t,o,a){var i;const c=Object.keys(o);if(1!==c.length)return void e.reportError(new r.eO('OneOf Input Object "'.concat(t.name,'" must specify exactly one key.'),{nodes:[n]}));const s=null===(i=o[c[0]])||void 0===i?void 0:i.value,u=!s||s.kind===m.b.NULL,l=(null===s||void 0===s?void 0:s.kind)===m.b.VARIABLE;if(u)return void e.reportError(new r.eO('Field "'.concat(t.name,".").concat(c[0],'" must be non-null.'),{nodes:[n]}));if(l){const o=s.name.value;a[o].type.kind!==m.b.NON_NULL_TYPE&&e.reportError(new r.eO('Variable "'.concat(o,'" must be non-nullable to be used for OneOf Input Object "').concat(t.name,'".'),{nodes:[n]}))}}(e,t,o,a,n)},ObjectField(n){const t=(0,s.MR)(e.getParentInputType());if(!e.getInputType()&&(0,s.qK)(t)){const o=(0,E.x)(n.name.value,Object.keys(t.getFields()));e.reportError(new r.eO('Field "'.concat(n.name.value,'" is not defined by type "').concat(t.name,'".')+(0,p.a)(o),{nodes:n}))}},NullValue(n){const t=e.getInputType();(0,s.bd)(t)&&e.reportError(new r.eO('Expected value of type "'.concat((0,y.N)(t),'", found ').concat((0,M.y)(n),"."),{nodes:n}))},EnumValue:n=>fe(e,n),IntValue:n=>fe(e,n),FloatValue:n=>fe(e,n),StringValue:n=>fe(e,n),BooleanValue:n=>fe(e,n)}},function(e){return{...oe(e),Field:{leave(n){var t;const o=e.getFieldDef();if(!o)return!1;const a=new Set(null===(t=n.arguments)||void 0===t?void 0:t.map((e=>e.name.value)));for(const i of o.args)if(!a.has(i.name)&&(0,s.xP)(i)){const t=(0,y.N)(i.type);e.reportError(new r.eO('Field "'.concat(o.name,'" argument "').concat(i.name,'" of type "').concat(t,'" is required, but it was not provided.'),{nodes:n}))}}}}},function(e){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=e.getRecursiveVariableUsages(t);for(const{node:a,type:i,defaultValue:c}of o){const t=a.name.value,o=n[t];if(o&&i){const n=e.getSchema(),s=(0,Y.v)(n,o.type);if(s&&!de(n,s,o.defaultValue,i,c)){const n=(0,y.N)(s),c=(0,y.N)(i);e.reportError(new r.eO('Variable "$'.concat(t,'" of type "').concat(n,'" used in position expecting type "').concat(c,'".'),{nodes:[o,a]}))}}}}},VariableDefinition(e){n[e.variable.name.value]=e}}},function(e){const n=new ee,t=new Map;return{SelectionSet(o){const a=function(e,n,t,o,r){const a=[],[i,c]=$(e,n,o,r);if(function(e,n,t,o,r){for(const[a,i]of Object.entries(r))if(i.length>1)for(let r=0;r<i.length;r++)for(let c=r+1;c<i.length;c++){const s=q(e,t,o,!1,a,i[r],i[c]);s&&n.push(s)}}(e,a,n,t,i),0!==c.length)for(let s=0;s<c.length;s++){G(e,a,n,t,!1,i,c[s]);for(let o=s+1;o<c.length;o++)J(e,a,n,t,!1,c[s],c[o])}return a}(e,t,n,e.getParentType(),o);for(const[[n,t],i,c]of a){const o=B(t);e.reportError(new r.eO('Fields "'.concat(n,'" conflict because ').concat(o,". Use different aliases on the fields to fetch both if this was intentional."),{nodes:i.concat(c)}))}}}},C,...pe]);Object.freeze([a,i,c,u,l,function(e){return{DirectiveDefinition(e){var n;const o=null!==(n=e.arguments)&&void 0!==n?n:[];return t("@".concat(e.name.value),o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(e){var n;const o=e.name.value,r=null!==(n=e.fields)&&void 0!==n?n:[];for(const i of r){var a;const e=i.name.value,n=null!==(a=i.arguments)&&void 0!==a?a:[];t("".concat(o,".").concat(e),n)}return!1}function t(n,t){const o=k(t,(e=>e.name.value));for(const[a,i]of o)i.length>1&&e.reportError(new r.eO('Argument "'.concat(n,"(").concat(a,':)" can only be defined once.'),{nodes:i.map((e=>e.name))}));return!1}},d,N,w,P,A,L,j,C,oe]);var me=t(3515),ve=t(9182),ge=t(1500),be=t(2072);class Te{constructor(e,n){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=n}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let n;if(this._fragments)n=this._fragments;else{n=Object.create(null);for(const e of this.getDocument().definitions)e.kind===m.b.FRAGMENT_DEFINITION&&(n[e.name.value]=e);this._fragments=n}return n[e]}getFragmentSpreads(e){let n=this._fragmentSpreads.get(e);if(!n){n=[];const t=[e];let o;for(;o=t.pop();)for(const e of o.selections)e.kind===m.b.FRAGMENT_SPREAD?n.push(e):e.selectionSet&&t.push(e.selectionSet);this._fragmentSpreads.set(e,n)}return n}getRecursivelyReferencedFragments(e){let n=this._recursivelyReferencedFragments.get(e);if(!n){n=[];const t=Object.create(null),o=[e.selectionSet];let r;for(;r=o.pop();)for(const e of this.getFragmentSpreads(r)){const r=e.name.value;if(!0!==t[r]){t[r]=!0;const e=this.getFragment(r);e&&(n.push(e),o.push(e.selectionSet))}}this._recursivelyReferencedFragments.set(e,n)}return n}}Symbol.toStringTag;class Ie extends Te{constructor(e,n,t,o){super(n,o),this._schema=e,this._typeInfo=t,this._variableUsages=new Map,this._recursiveVariableUsages=new Map}get[Symbol.toStringTag](){return"ValidationContext"}getSchema(){return this._schema}getVariableUsages(e){let n=this._variableUsages.get(e);if(!n){const t=[],o=new be.D(this._schema);(0,ve.YR)(e,(0,be.S)(o,{VariableDefinition:()=>!1,Variable(e){t.push({node:e,type:o.getInputType(),defaultValue:o.getDefaultValue()})}})),n=t,this._variableUsages.set(e,n)}return n}getRecursiveVariableUsages(e){let n=this._recursiveVariableUsages.get(e);if(!n){n=this.getVariableUsages(e);for(const t of this.getRecursivelyReferencedFragments(e))n=n.concat(this.getVariableUsages(t));this._recursiveVariableUsages.set(e,n)}return n}getType(){return this._typeInfo.getType()}getParentType(){return this._typeInfo.getParentType()}getInputType(){return this._typeInfo.getInputType()}getParentInputType(){return this._typeInfo.getParentInputType()}getFieldDef(){return this._typeInfo.getFieldDef()}getDirective(){return this._typeInfo.getDirective()}getArgument(){return this._typeInfo.getArgument()}getEnumValue(){return this._typeInfo.getEnumValue()}}function Oe(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ee,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new be.D(e);var i;const c=null!==(i=null===o||void 0===o?void 0:o.maxErrors)&&void 0!==i?i:100;n||(0,me.U)(!1,"Must provide document."),(0,ge.Y)(e);const s=Object.freeze({}),u=[],l=new Ie(e,n,a,(e=>{if(u.length>=c)throw u.push(new r.eO("Too many validation errors, error limit reached. Validation aborted.")),s;u.push(e)})),f=(0,ve.oP)(t.map((e=>e(l))));try{(0,ve.YR)(n,(0,be.S)(a,f))}catch(d){if(d!==s)throw d}return u}var Ne=t(9550);function he(e){return{Field(n){const t=e.getFieldDef(),o=null===t||void 0===t?void 0:t.deprecationReason;if(t&&null!=o){const a=e.getParentType();null!=a||(0,_.V)(!1),e.reportError(new r.eO("The field ".concat(a.name,".").concat(t.name," is deprecated. ").concat(o),{nodes:n}))}},Argument(n){const t=e.getArgument(),o=null===t||void 0===t?void 0:t.deprecationReason;if(t&&null!=o){const a=e.getDirective();if(null!=a)e.reportError(new r.eO('Directive "@'.concat(a.name,'" argument "').concat(t.name,'" is deprecated. ').concat(o),{nodes:n}));else{const a=e.getParentType(),i=e.getFieldDef();null!=a&&null!=i||(0,_.V)(!1),e.reportError(new r.eO('Field "'.concat(a.name,".").concat(i.name,'" argument "').concat(t.name,'" is deprecated. ').concat(o),{nodes:n}))}}},ObjectField(n){const t=(0,s.MR)(e.getParentInputType());if((0,s.qK)(t)){const o=t.getFields()[n.name.value],a=null===o||void 0===o?void 0:o.deprecationReason;null!=a&&e.reportError(new r.eO("The input field ".concat(t.name,".").concat(o.name," is deprecated. ").concat(a),{nodes:n}))}},EnumValue(n){const t=e.getEnumValue(),o=null===t||void 0===t?void 0:t.deprecationReason;if(t&&null!=o){const a=(0,s.MR)(e.getInputType());null!=a||(0,_.V)(!1),e.reportError(new r.eO('The enum value "'.concat(a.name,".").concat(t.name,'" is deprecated. ').concat(o),{nodes:n}))}}}}var ye=t(9),_e=t(9814),De=(t(5043),t(579),t(7950),Object.defineProperty),Fe=(e,n)=>De(e,"name",{value:n,configurable:!0});const Se=[a,i,c,u,l,d,N,w,P,A,j,C];function we(e,n,t,o,r){const a=Ee.filter((e=>e!==X&&e!==V&&(!o||e!==x)));t&&Array.prototype.push.apply(a,t),r&&Array.prototype.push.apply(a,Se);return Oe(e,n,a).filter((e=>{if(e.message.includes("Unknown directive")&&e.nodes){const n=e.nodes[0];if(n&&n.kind===m.b.DIRECTIVE){const e=n.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}Fe(we,"validateWithCustomRules");const Pe="Error",Ae="Warning",Re="Information",ke="Hint",je={[Pe]:1,[Ae]:2,[Re]:3,[ke]:4},Ce=Fe(((e,n)=>{if(!e)throw new Error(n)}),"invariant");function Ve(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;var i,c;let s=null,u="";a&&(u="string"===typeof a?a:a.reduce(((e,n)=>e+(0,M.y)(n)+"\n\n"),""));const l=u?"".concat(e,"\n\n").concat(u):e;try{s=(0,Ne.qg)(l)}catch(f){if(f instanceof r.eO){const e=Ye(null!==(c=null===(i=f.locations)||void 0===i?void 0:i[0])&&void 0!==c?c:{line:0,column:0},l);return[{severity:je.Error,message:f.message,source:"GraphQL: Syntax",range:e}]}throw f}return Ue(s,n,t,o)}function Ue(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!n)return[];const t=we(n,e,arguments.length>2?arguments[2]:void 0,arguments.length>3?arguments[3]:void 0).flatMap((e=>Me(e,je.Error,"Validation"))),o=Oe(n,e,[he]).flatMap((e=>Me(e,je.Warning,"Deprecation")));return t.concat(o)}function Me(e,n,t){if(!e.nodes)return[];const o=[];for(const[r,a]of e.nodes.entries()){const i="Variable"!==a.kind&&"name"in a&&void 0!==a.name?a.name:"variable"in a&&void 0!==a.variable?a.variable:a;if(i){Ce(e.locations,"GraphQL validation error requires locations.");const a=e.locations[r],c=Le(i),s=a.column+(c.end-c.start);o.push({source:"GraphQL: ".concat(t),message:e.message,severity:n,range:new _e.R(new _e.P(a.line-1,a.column-1),new _e.P(a.line-1,s))})}}return o}function Ye(e,n){const t=(0,ye.o)(),o=t.startState(),r=n.split("\n");Ce(r.length>=e.line,"Query text must have more lines than where the error happened");let a=null;for(let u=0;u<e.line;u++)for(a=new ye.C(r[u]);!a.eol();){if("invalidchar"===t.token(a,o))break}Ce(a,"Expected Parser stream to be available.");const i=e.line-1,c=a.getStartOfToken(),s=a.getCurrentPosition();return new _e.R(new _e.P(i,c),new _e.P(i,s))}function Le(e){const n=e.loc;return Ce(n,"Expected ASTNode to have a location."),n}Fe(Ve,"getDiagnostics"),Fe(Ue,"validateQuery"),Fe(Me,"annotations"),Fe(Ye,"getRange"),Fe(Le,"getLocation");const xe=["error","warning","information","hint"],Xe={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};o.C.registerHelper("lint","graphql",((e,n)=>{const{schema:t,validationRules:r,externalFragments:a}=n;return Ve(e,t,r,void 0,a).map((e=>({message:e.message,severity:e.severity?xe[e.severity-1]:xe[0],type:e.source?Xe[e.source]:void 0,from:o.C.Pos(e.range.start.line,e.range.start.character),to:o.C.Pos(e.range.end.line,e.range.end.character)})))}))}}]);
//# sourceMappingURL=878.0416e321.chunk.js.map