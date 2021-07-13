(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.kQ(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.kR(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ho"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ho"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ho(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={h3:function h3(){},
fZ:function(a,b,c){if(b.h("G<0>").b(a))return new H.cA(a,b.h("@<0>").C(c).h("cA<1,2>"))
return new H.b9(a,b.h("@<0>").C(c).h("b9<1,2>"))},
e:function(a){return new H.c8("Field '"+a+"' has not been initialized.")},
hY:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hn:function(a,b,c){return a},
bt:function(a,b,c,d){P.ap(b,"start")
if(c!=null){P.ap(c,"end")
if(b>c)H.c(P.aE(b,0,c,"start",null))}return new H.ar(a,b,c,d.h("ar<0>"))},
jp:function(a,b,c,d){if(t.R.b(a))return new H.c1(a,b,c.h("@<0>").C(d).h("c1<1,2>"))
return new H.bd(a,b,c.h("@<0>").C(d).h("bd<1,2>"))},
hW:function(a,b,c){if(t.R.b(a)){P.ap(b,"count")
return new H.bn(a,b,c.h("bn<0>"))}P.ap(b,"count")
return new H.aG(a,b,c.h("aG<0>"))},
a1:function(){return new P.bs("No element")},
jj:function(){return new P.bs("Too few elements")},
aY:function aY(){},
bW:function bW(a,b){this.a=a
this.$ti=b},
b9:function b9(a,b){this.a=a
this.$ti=b},
cA:function cA(a,b){this.a=a
this.$ti=b},
cy:function cy(){},
a_:function a_(a,b){this.a=a
this.$ti=b},
c8:function c8(a){this.a=a},
fR:function fR(){},
G:function G(){},
E:function E(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a2:function a2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a){this.$ti=a},
c3:function c3(a){this.$ti=a},
aF:function aF(a,b){this.a=a
this.$ti=b},
cM:function cM(){},
iK:function(a){var s,r=H.iJ(a)
if(r!=null)return r
s="minified:"+a
return s},
r:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cX(a)
return s},
aw:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
eI:function(a){return H.js(a)},
js:function(a){var s,r,q,p
if(a instanceof P.C)return H.a5(H.cU(a),null)
if(J.b2(a)===C.a1||t.ak.b(a)){s=C.J(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a5(H.cU(a),null)},
bk:function(a){throw H.f(H.kp(a))},
o:function(a,b){if(a==null)J.y(a)
throw H.f(H.hp(a,b))},
hp:function(a,b){var s,r="index"
if(!H.ik(b))return new P.ay(!0,b,r,null)
s=H.S(J.y(a))
if(b<0||b>=s)return P.h1(b,a,r,null,s)
return P.eJ(b,r)},
kp:function(a){return new P.ay(!0,a,null,null)},
f:function(a){var s,r
if(a==null)a=new P.dj()
s=new Error()
s.dartException=a
r=H.kS
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
kS:function(){return J.cX(this.dartException)},
c:function(a){throw H.f(a)},
d:function(a){throw H.f(P.ai(a))},
aH:function(a){var s,r,q,p,o,n
a=H.kM(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.eO(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eP:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hZ:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
h4:function(a,b){var s=b==null,r=s?null:b.method
return new H.dg(a,r,s?null:b.receiver)},
b5:function(a){if(a==null)return new H.eD(a)
if(a instanceof H.c4)return H.b4(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.b4(a,a.dartException)
return H.ko(a)},
b4:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ko:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.e.fH(r,16)&8191)===10)switch(q){case 438:return H.b4(a,H.h4(H.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.r(s)+" (Error "+q+")"
return H.b4(a,new H.cg(p,e))}}if(a instanceof TypeError){o=$.iO()
n=$.iP()
m=$.iQ()
l=$.iR()
k=$.iU()
j=$.iV()
i=$.iT()
$.iS()
h=$.iX()
g=$.iW()
f=o.ac(s)
if(f!=null)return H.b4(a,H.h4(H.cO(s),f))
else{f=n.ac(s)
if(f!=null){f.method="call"
return H.b4(a,H.h4(H.cO(s),f))}else{f=m.ac(s)
if(f==null){f=l.ac(s)
if(f==null){f=k.ac(s)
if(f==null){f=j.ac(s)
if(f==null){f=i.ac(s)
if(f==null){f=l.ac(s)
if(f==null){f=h.ac(s)
if(f==null){f=g.ac(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.cO(s)
return H.b4(a,new H.cg(s,f==null?e:f.method))}}}return H.b4(a,new H.dy(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cp()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b4(a,new P.ay(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cp()
return a},
b3:function(a){var s
if(a instanceof H.c4)return a.b
if(a==null)return new H.cF(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.cF(a)},
kE:function(a,b,c,d,e,f){t.b8.a(a)
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.f9("Unsupported number of arguments for wrapped closure"))},
bC:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kE)
a.$identity=s
return s},
je:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.dr().constructor.prototype):Object.create(new H.bm(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.az
if(typeof r!=="number")return r.B()
$.az=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.hG(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.ja(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.hG(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ja:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ix,a)
if(typeof a=="string"){if(b)throw H.f("Cannot compute signature for static tearoff.")
s=c?H.j7:H.j6
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.f("Error in functionType of tearoff")},
jb:function(a,b,c,d){var s=H.hF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hG:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.jd(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.jb(r,!p,s,b)
if(r===0){p=$.az
if(typeof p!=="number")return p.B()
$.az=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bU
return new Function(p+(o==null?$.bU=H.e9("self"):o)+";return "+n+"."+H.r(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.az
if(typeof p!=="number")return p.B()
$.az=p+1
m+=p
p="return function("+m+"){return this."
o=$.bU
return new Function(p+(o==null?$.bU=H.e9("self"):o)+"."+H.r(s)+"("+m+");}")()},
jc:function(a,b,c,d){var s=H.hF,r=H.j8
switch(b?-1:a){case 0:throw H.f(new H.dl("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
jd:function(a,b){var s,r,q,p,o,n,m,l=$.bU
if(l==null)l=$.bU=H.e9("self")
s=$.hE
if(s==null)s=$.hE=H.e9("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.jc(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.r(r)+"(this."+s+");"
n=$.az
if(typeof n!=="number")return n.B()
$.az=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.r(r)+"(this."+s+", "+m+");"
n=$.az
if(typeof n!=="number")return n.B()
$.az=n+1
return new Function(o+n+"}")()},
ho:function(a,b,c,d,e,f,g){return H.je(a,b,c,d,!!e,!!f,g)},
j6:function(a,b){return H.dO(v.typeUniverse,H.cU(a.a),b)},
j7:function(a,b){return H.dO(v.typeUniverse,H.cU(a.c),b)},
hF:function(a){return a.a},
j8:function(a){return a.c},
e9:function(a){var s,r,q,p=new H.bm("self","target","receiver","name"),o=J.em(Object.getOwnPropertyNames(p),t.Y)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.f(P.hD("Field name "+a+" not found."))},
cT:function(a){if(a==null)H.kq("boolean expression must not be null")
return a},
kq:function(a){throw H.f(new H.dA(a))},
kQ:function(a){throw H.f(new P.d6(a))},
kz:function(a){return v.getIsolateTag(a)},
kR:function(a){return H.c(new H.c8(a))},
lx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kG:function(a){var s,r,q,p,o,n=H.cO($.iw.$1(a)),m=$.fG[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fK[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.jZ($.ir.$2(a,n))
if(q!=null){m=$.fG[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fK[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.fQ(s)
$.fG[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fK[n]=s
return s}if(p==="-"){o=H.fQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.iD(a,s)
if(p==="*")throw H.f(P.i_(n))
if(v.leafTags[n]===true){o=H.fQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.iD(a,s)},
iD:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hu(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fQ:function(a){return J.hu(a,!1,null,!!a.$il4)},
kI:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.fQ(s)
else return J.hu(s,c,null,null)},
kB:function(){if(!0===$.hr)return
$.hr=!0
H.kC()},
kC:function(){var s,r,q,p,o,n,m,l
$.fG=Object.create(null)
$.fK=Object.create(null)
H.kA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.iF.$1(o)
if(n!=null){m=H.kI(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kA:function(){var s,r,q,p,o,n,m=C.U()
m=H.bB(C.V,H.bB(C.W,H.bB(C.K,H.bB(C.K,H.bB(C.X,H.bB(C.Y,H.bB(C.Z(C.J),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.iw=new H.fH(p)
$.ir=new H.fI(o)
$.iF=new H.fJ(n)},
bB:function(a,b){return a(b)||b},
jl:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.f(new P.ek("Illegal RegExp pattern ("+String(s)+")",a))},
kM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
db:function db(){},
aS:function aS(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cg:function cg(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.a=a},
eD:function eD(a){this.a=a},
c4:function c4(a,b){this.a=a
this.b=b},
cF:function cF(a){this.a=a
this.b=null},
ah:function ah(){},
dt:function dt(){},
dr:function dr(){},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a){this.a=a},
dA:function dA(a){this.a=a},
c7:function c7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eo:function eo(a,b){this.a=a
this.b=b
this.c=null},
c9:function c9(a,b){this.a=a
this.$ti=b},
ca:function ca(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
df:function df(a,b){this.a=a
this.b=b},
fp:function fp(a){this.b=a},
hT:function(a,b){var s=b.c
return s==null?b.c=H.hf(a,b.z,!0):s},
hS:function(a,b){var s=b.c
return s==null?b.c=H.cJ(a,"ak",[b.z]):s},
hU:function(a){var s=a.y
if(s===6||s===7||s===8)return H.hU(a.z)
return s===11||s===12},
jw:function(a){return a.cy},
bD:function(a){return H.fu(v.typeUniverse,a,!1)},
kD:function(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.aO(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
aO:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.ic(a,r,!0)
case 7:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.hf(a,r,!0)
case 8:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.ib(a,r,!0)
case 9:q=b.Q
p=H.cS(a,q,a0,a1)
if(p===q)return b
return H.cJ(a,b.z,p)
case 10:o=b.z
n=H.aO(a,o,a0,a1)
m=b.Q
l=H.cS(a,m,a0,a1)
if(n===o&&l===m)return b
return H.hd(a,n,l)
case 11:k=b.z
j=H.aO(a,k,a0,a1)
i=b.Q
h=H.kl(a,i,a0,a1)
if(j===k&&h===i)return b
return H.ia(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cS(a,g,a0,a1)
o=b.z
n=H.aO(a,o,a0,a1)
if(f===g&&n===o)return b
return H.he(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.f(P.e6("Attempted to substitute unexpected RTI kind "+c))}},
cS:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aO(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
km:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aO(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
kl:function(a,b,c,d){var s,r=b.a,q=H.cS(a,r,c,d),p=b.b,o=H.cS(a,p,c,d),n=b.c,m=H.km(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.dG()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
iu:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ix(s)
return a.$S()}return null},
iy:function(a,b){var s
if(H.hU(b))if(a instanceof H.ah){s=H.iu(a)
if(s!=null)return s}return H.cU(a)},
cU:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.hi(a)}if(Array.isArray(a))return H.z(a)
return H.hi(J.b2(a))},
z:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
D:function(a){var s=a.$ti
return s!=null?s:H.hi(a)},
hi:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.k7(a,s)},
k7:function(a,b){var s=a instanceof H.ah?a.__proto__.__proto__.constructor:b,r=H.jX(v.typeUniverse,s.name)
b.$ccache=r
return r},
ix:function(a){var s,r,q
H.S(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.fu(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
kv:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.dM(a)
q=H.fu(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.dM(q):p},
k6:function(a){var s,r,q,p=this
if(p===t.K)return H.cP(p,a,H.ka)
if(!H.aQ(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cP(p,a,H.kd)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.ik
else if(r===t.V||r===t.H)q=H.k9
else if(r===t.aw)q=H.kb
else q=r===t.cJ?H.ii:null
if(q!=null)return H.cP(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.kF)){p.r="$i"+s
return H.cP(p,a,H.kc)}}else if(s===7)return H.cP(p,a,H.k4)
return H.cP(p,a,H.k2)},
cP:function(a,b,c){a.b=c
return a.b(b)},
k5:function(a){var s,r=this,q=H.k1
if(!H.aQ(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.k_
else if(r===t.K)q=H.jY
else{s=H.cV(r)
if(s)q=H.k3}r.a=q
return r.a(a)},
hl:function(a){var s,r=a.y
if(!H.aQ(a))if(!(a===t._))if(!(a===t.cF))if(r!==7)s=r===8&&H.hl(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
k2:function(a){var s=this
if(a==null)return H.hl(s)
return H.K(v.typeUniverse,H.iy(a,s),null,s,null)},
k4:function(a){if(a==null)return!0
return this.z.b(a)},
kc:function(a){var s,r=this
if(a==null)return H.hl(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.b2(a)[s]},
k1:function(a){var s,r=this
if(a==null){s=H.cV(r)
if(s)return a}else if(r.b(a))return a
H.ig(a,r)},
k3:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ig(a,s)},
ig:function(a,b){throw H.f(H.i9(H.i2(a,H.iy(a,b),H.a5(b,null))))},
fD:function(a,b,c,d){var s=null
if(H.K(v.typeUniverse,a,s,b,s))return a
throw H.f(H.i9("The type argument '"+H.a5(a,s)+"' is not a subtype of the type variable bound '"+H.a5(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
i2:function(a,b,c){var s=P.d7(a),r=H.a5(b==null?H.cU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
i9:function(a){return new H.cI("TypeError: "+a)},
a4:function(a,b){return new H.cI("TypeError: "+H.i2(a,null,b))},
ka:function(a){return a!=null},
jY:function(a){if(a!=null)return a
throw H.f(H.a4(a,"Object"))},
kd:function(a){return!0},
k_:function(a){return a},
ii:function(a){return!0===a||!1===a},
ln:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.f(H.a4(a,"bool"))},
lp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.a4(a,"bool"))},
lo:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.a4(a,"bool?"))},
b0:function(a){if(typeof a=="number")return a
throw H.f(H.a4(a,"double"))},
lr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.a4(a,"double"))},
lq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.a4(a,"double?"))},
ik:function(a){return typeof a=="number"&&Math.floor(a)===a},
S:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.f(H.a4(a,"int"))},
lt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.a4(a,"int"))},
ls:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.a4(a,"int?"))},
k9:function(a){return typeof a=="number"},
hg:function(a){if(typeof a=="number")return a
throw H.f(H.a4(a,"num"))},
lv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.a4(a,"num"))},
lu:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.a4(a,"num?"))},
kb:function(a){return typeof a=="string"},
cO:function(a){if(typeof a=="string")return a
throw H.f(H.a4(a,"String"))},
lw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.a4(a,"String"))},
jZ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.a4(a,"String?"))},
ki:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a5(a[q],b)
return s},
ih:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.w(a5,"T"+(q+p))
for(o=t.Y,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.o(a5,j)
m=C.N.B(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a5(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a5(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a5(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a5(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a5(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a5:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a5(a.z,b)
return s}if(l===7){r=a.z
s=H.a5(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a5(a.z,b)+">"
if(l===9){p=H.kn(a.z)
o=a.Q
return o.length!==0?p+("<"+H.ki(o,b)+">"):p}if(l===11)return H.ih(a,b,null)
if(l===12)return H.ih(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.o(b,n)
return b[n]}return"?"},
kn:function(a){var s,r=H.iJ(a)
if(r!=null)return r
s="minified:"+a
return s},
id:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jX:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.fu(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cK(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cJ(a,b,q)
n[b]=o
return o}else return m},
jV:function(a,b){return H.ie(a.tR,b)},
jU:function(a,b){return H.ie(a.eT,b)},
fu:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.i8(H.i6(a,null,b,c))
r.set(b,s)
return s},
dO:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.i8(H.i6(a,b,c,!0))
q.set(c,r)
return r},
jW:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.hd(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b_:function(a,b){b.a=H.k5
b.b=H.k6
return b},
cK:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.b_(a,s)
a.eC.set(c,r)
return r},
ic:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.jS(a,b,r,c)
a.eC.set(r,s)
return s},
jS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aQ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.b_(a,q)},
hf:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.jR(a,b,r,c)
a.eC.set(r,s)
return s},
jR:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aQ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cV(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.cF)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cV(q.z))return q
else return H.hT(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.b_(a,p)},
ib:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.jP(a,b,r,c)
a.eC.set(r,s)
return s},
jP:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aQ(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cJ(a,"ak",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.b_(a,q)},
jT:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b_(a,s)
a.eC.set(q,r)
return r},
dN:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
jO:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cJ:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.dN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b_(a,r)
a.eC.set(p,q)
return q},
hd:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.dN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b_(a,o)
a.eC.set(q,n)
return n},
ia:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.dN(m)
if(j>0){s=l>0?",":""
r=H.dN(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.jO(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b_(a,o)
a.eC.set(q,r)
return r},
he:function(a,b,c,d){var s,r=b.cy+("<"+H.dN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.jQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
jQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aO(a,b,r,0)
m=H.cS(a,c,r,0)
return H.he(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b_(a,l)},
i6:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
i8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.jJ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.i7(a,r,h,g,!1)
else if(q===46)r=H.i7(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aZ(a.u,a.e,g.pop()))
break
case 94:g.push(H.jT(a.u,g.pop()))
break
case 35:g.push(H.cK(a.u,5,"#"))
break
case 64:g.push(H.cK(a.u,2,"@"))
break
case 126:g.push(H.cK(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.hc(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cJ(p,n,o))
else{m=H.aZ(p,a.e,n)
switch(m.y){case 11:g.push(H.he(p,m,o,a.n))
break
default:g.push(H.hd(p,m,o))
break}}break
case 38:H.jK(a,g)
break
case 42:p=a.u
g.push(H.ic(p,H.aZ(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.hf(p,H.aZ(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.ib(p,H.aZ(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.dG()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.hc(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.ia(p,H.aZ(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.hc(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.jM(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aZ(a.u,a.e,i)},
jJ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
i7:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.id(s,o.z)[p]
if(n==null)H.c('No "'+p+'" in "'+H.jw(o)+'"')
d.push(H.dO(s,o,n))}else d.push(p)
return m},
jK:function(a,b){var s=b.pop()
if(0===s){b.push(H.cK(a.u,1,"0&"))
return}if(1===s){b.push(H.cK(a.u,4,"1&"))
return}throw H.f(P.e6("Unexpected extended operation "+H.r(s)))},
aZ:function(a,b,c){if(typeof c=="string")return H.cJ(a,c,a.sEA)
else if(typeof c=="number")return H.jL(a,b,c)
else return c},
hc:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aZ(a,b,c[s])},
jM:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aZ(a,b,c[s])},
jL:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.f(P.e6("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.f(P.e6("Bad index "+c+" for "+b.k(0)))},
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aQ(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aQ(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.K(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.K(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.K(a,b.z,c,d,e)
if(r===6)return H.K(a,b.z,c,d,e)
return r!==7}if(r===6)return H.K(a,b.z,c,d,e)
if(p===6){s=H.hT(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.hS(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.hS(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
return s||H.K(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.ij(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return H.ij(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.k8(a,b,c,d,e)}return!1},
ij:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.K(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.K(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.K(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.K(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.K(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
k8:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.id(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.dO(a,b,l[p]),c,r[p],e))return!1
return!0},
cV:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aQ(a))if(r!==7)if(!(r===6&&H.cV(a.z)))s=r===8&&H.cV(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kF:function(a){var s
if(!H.aQ(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aQ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Y},
ie:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
dG:function dG(){this.c=this.b=this.a=null},
dM:function dM(a){this.a=a},
dF:function dF(){},
cI:function cI(a){this.a=a},
iJ:function(a){return v.mangledGlobalNames[a]}},J={
hu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hq:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hr==null){H.kB()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.f(P.i_("Return interceptor for "+H.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fn
if(o==null)o=$.fn=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.kG(a)
if(p!=null)return p
if(typeof a=="function")return C.a3
s=Object.getPrototypeOf(a)
if(s==null)return C.P
if(s===Object.prototype)return C.P
if(typeof q=="function"){o=$.fn
if(o==null)o=$.fn=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.G,enumerable:false,writable:true,configurable:true})
return C.G}return C.G},
hK:function(a,b){if(a<0||a>4294967295)throw H.f(P.aE(a,0,4294967295,"length",null))
return J.hM(new Array(a),b)},
hL:function(a,b){if(a<0)throw H.f(P.hD("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("t<0>"))},
hM:function(a,b){return J.em(H.a(a,b.h("t<0>")),b)},
em:function(a,b){a.fixed$length=Array
return a},
b2:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c6.prototype
return J.de.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.bp.prototype
if(typeof a=="boolean")return J.dd.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.C)return a
return J.hq(a)},
ab:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
kw:function(a){if(typeof a=="number")return J.aT.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
af:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
a6:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.C)return a
return J.hq(a)},
kx:function(a){if(typeof a=="number")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
ky:function(a){if(typeof a=="number")return J.aT.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
iv:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.C)return a
return J.hq(a)},
fX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kw(a).B(a,b)},
aR:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b2(a).I(a,b)},
cW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ky(a).q(a,b)},
M:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.af(a).n(a,b)},
hz:function(a,b,c){return J.ab(a).J(a,b,c)},
iY:function(a,b,c,d){return J.iv(a).fq(a,b,c,d)},
iZ:function(a,b,c,d){return J.iv(a).fE(a,b,c,d)},
j_:function(a,b){return J.ab(a).w(a,b)},
b6:function(a,b){return J.ab(a).F(a,b)},
hA:function(a,b){return J.ab(a).U(a,b)},
ag:function(a){return J.ab(a).gZ(a)},
bG:function(a){return J.b2(a).gt(a)},
b7:function(a){return J.af(a).gV(a)},
bH:function(a){return J.ab(a).gaO(a)},
u:function(a){return J.ab(a).gA(a)},
bI:function(a){return J.ab(a).ga_(a)},
y:function(a){return J.a6(a).gm(a)},
hB:function(a,b,c){return J.ab(a).bO(a,b,c)},
q:function(a,b,c){return J.ab(a).cw(a,b,c)},
hC:function(a,b){return J.ab(a).a9(a,b)},
j0:function(a){return J.kx(a).a3(a)},
dT:function(a){return J.ab(a).W(a)},
cX:function(a){return J.b2(a).k(a)},
al:function al(){},
dd:function dd(){},
bp:function bp(){},
bc:function bc(){},
dk:function dk(){},
ax:function ax(){},
aU:function aU(){},
t:function t(a){this.$ti=a},
en:function en(a){this.$ti=a},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aT:function aT(){},
c6:function c6(){},
de:function de(){},
aA:function aA(){}},P={
jE:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.kr()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bC(new P.f4(q),1)).observe(s,{childList:true})
return new P.f3(q,s,r)}else if(self.setImmediate!=null)return P.ks()
return P.kt()},
jF:function(a){self.scheduleImmediate(H.bC(new P.f5(t.M.a(a)),0))},
jG:function(a){self.setImmediate(H.bC(new P.f6(t.M.a(a)),0))},
jH:function(a){t.M.a(a)
P.jN(0,a)},
jN:function(a,b){var s=new P.fs()
s.fe(a,b)
return s},
aN:function(a){return new P.dB(new P.P($.J,a.h("P<0>")),a.h("dB<0>"))},
aM:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ad:function(a,b){P.k0(a,b)},
aL:function(a,b){b.ce(0,a)},
aK:function(a,b){b.dN(H.b5(a),H.b3(a))},
k0:function(a,b){var s,r,q=new P.fv(b),p=new P.fw(b)
if(a instanceof P.P)a.dA(q,p,t.z)
else{s=t.z
if(t.v.b(a))a.cJ(q,p,s)
else{r=new P.P($.J,t.c)
r.a=4
r.c=a
r.dA(q,p,s)}}},
aP:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.J.ek(new P.fz(s),t.aT,t.S,t.z)},
jI:function(a){return new P.bx(a,1)},
i3:function(){return C.ab},
i4:function(a){return new P.bx(a,3)},
il:function(a,b){return new P.cH(a,b.h("cH<0>"))},
e7:function(a,b){var s=H.hn(a,"error",t.K)
return new P.bR(s,b==null?P.j4(a):b)},
j4:function(a){var s
if(t.bU.b(a)){s=a.gbU()
if(s!=null)return s}return C.a_},
fd:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.be()
b.a=a.a
b.c=a.c
P.bw(b,q)}else{q=t.d.a(b.c)
b.a=2
b.c=a
a.dv(q)}},
bw:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.t,r=t.d,q=t.v;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.fx(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.bw(b.a,a)
p.a=m
l=m.a}k=b.a
j=k.c
p.b=o
p.c=j
i=!o
if(i){h=a.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=a.b.b
if(o){h=k.b===g
h=!(h||h)}else h=!1
if(h){s.a(j)
P.fx(c,c,k.b,j.a,j.b)
return}f=$.J
if(f!==g)$.J=g
else f=c
a=a.c
if((a&15)===8)new P.fl(p,b,o).$0()
else if(i){if((a&1)!==0)new P.fk(p,j).$0()}else if((a&2)!==0)new P.fj(b,p).$0()
if(f!=null)$.J=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("ak<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.bf(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.fd(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.bf(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
kg:function(a,b){var s
if(t.ag.b(a))return b.ek(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.f(P.j2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
kf:function(){var s,r
for(s=$.bz;s!=null;s=$.bz){$.cR=null
r=s.b
$.bz=r
if(r==null)$.cQ=null
s.a.$0()}},
kk:function(){$.hj=!0
try{P.kf()}finally{$.cR=null
$.hj=!1
if($.bz!=null)$.hx().$1(P.is())}},
ip:function(a){var s=new P.dC(a),r=$.cQ
if(r==null){$.bz=$.cQ=s
if(!$.hj)$.hx().$1(P.is())}else $.cQ=r.b=s},
kj:function(a){var s,r,q,p=$.bz
if(p==null){P.ip(a)
$.cR=$.cQ
return}s=new P.dC(a)
r=$.cR
if(r==null){s.b=p
$.bz=$.cR=s}else{q=r.b
s.b=q
$.cR=r.b=s
if(q==null)$.cQ=s}},
kO:function(a){var s=null,r=$.J
if(C.h===r){P.bA(s,s,C.h,a)
return}P.bA(s,s,r,t.M.a(r.dL(a)))},
l9:function(a,b){H.hn(a,"stream",t.K)
return new P.dK(b.h("dK<0>"))},
fx:function(a,b,c,d,e){P.kj(new P.fy(d,e))},
im:function(a,b,c,d,e){var s,r=$.J
if(r===c)return d.$0()
$.J=c
s=r
try{r=d.$0()
return r}finally{$.J=s}},
io:function(a,b,c,d,e,f,g){var s,r=$.J
if(r===c)return d.$1(e)
$.J=c
s=r
try{r=d.$1(e)
return r}finally{$.J=s}},
kh:function(a,b,c,d,e,f,g,h,i){var s,r=$.J
if(r===c)return d.$2(e,f)
$.J=c
s=r
try{r=d.$2(e,f)
return r}finally{$.J=s}},
bA:function(a,b,c,d){t.M.a(d)
if(C.h!==c)d=c.dL(d)
P.ip(d)},
f4:function f4(a){this.a=a},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=!1
this.$ti=b},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
fz:function fz(a){this.a=a},
bx:function bx(a,b){this.a=a
this.b=b},
by:function by(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
cH:function cH(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b){this.a=a
this.b=b},
dD:function dD(){},
cG:function cG(a,b){this.a=a
this.$ti=b},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
P:function P(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
fa:function fa(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b){this.a=a
this.b=b},
fh:function fh(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
fk:function fk(a,b){this.a=a
this.b=b},
fj:function fj(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a
this.b=null},
cq:function cq(){},
eL:function eL(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
cr:function cr(){},
dK:function dK(a){this.$ti=a},
cL:function cL(){},
fy:function fy(a,b){this.a=a
this.b=b},
dJ:function dJ(){},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function(a,b){return new H.c7(a.h("@<0>").C(b).h("c7<1,2>"))},
jm:function(a){return new P.aJ(a.h("aJ<0>"))},
jn:function(a){return new P.aJ(a.h("aJ<0>"))},
hb:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ha:function(a,b,c){var s=new P.bj(a,b,c.h("bj<0>"))
s.c=a.e
return s},
ji:function(a,b,c){var s,r
if(P.hk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.w($.ae,a)
try{P.ke(a,s)}finally{if(0>=$.ae.length)return H.o($.ae,-1)
$.ae.pop()}r=P.hX(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
h2:function(a,b,c){var s,r
if(P.hk(a))return b+"..."+c
s=new P.ds(b)
C.a.w($.ae,a)
try{r=s
r.a=P.hX(r.a,a,", ")}finally{if(0>=$.ae.length)return H.o($.ae,-1)
$.ae.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hk:function(a){var s,r
for(s=$.ae.length,r=0;r<s;++r)if(a===$.ae[r])return!0
return!1},
ke:function(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.j())return
s=H.r(l.gl())
C.a.w(b,s)
k+=s.length+2;++j}if(!l.j()){if(j<=5)return
if(0>=b.length)return H.o(b,-1)
r=b.pop()
if(0>=b.length)return H.o(b,-1)
q=b.pop()}else{p=l.gl();++j
if(!l.j()){if(j<=4){C.a.w(b,H.r(p))
return}r=H.r(p)
if(0>=b.length)return H.o(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gl();++j
for(;l.j();p=o,o=n){n=l.gl();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.o(b,-1)
k-=b.pop().length+2;--j}C.a.w(b,"...")
return}}q=H.r(p)
r=H.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.w(b,m)
C.a.w(b,q)
C.a.w(b,r)},
h6:function(a,b){var s,r,q=P.jm(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.d)(a),++r)q.w(0,b.a(a[r]))
return q},
hR:function(a){var s,r={}
if(P.hk(a))return"{...}"
s=new P.ds("")
try{C.a.w($.ae,a)
s.a+="{"
r.a=!0
a.e7(0,new P.er(r,s))
s.a+="}"}finally{if(0>=$.ae.length)return H.o($.ae,-1)
$.ae.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dH:function dH(a){this.a=a
this.c=this.b=null},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
c5:function c5(){},
a3:function a3(){},
cc:function cc(){},
er:function er(a,b){this.a=a
this.b=b},
bq:function bq(){},
cn:function cn(){},
cE:function cE(){},
cN:function cN(){},
jg:function(a){if(a instanceof H.ah)return a.k(0)
return"Instance of '"+H.eI(a)+"'"},
hQ:function(a,b,c,d){var s,r=c?J.hL(a,d):J.hK(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
eq:function(a,b,c){var s,r,q=H.a([],c.h("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.d)(a),++r)C.a.w(q,c.a(a[r]))
return J.em(q,c)},
j:function(a,b,c){var s
if(b)return P.hP(a,c)
s=J.em(P.hP(a,c),c)
return s},
hP:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("t<0>"))
s=H.a([],b.h("t<0>"))
for(r=J.u(a);r.j();)C.a.w(s,r.gl())
return s},
h9:function(a){return new H.df(a,H.jl(a,!1,!0,!1,!1,!1))},
hX:function(a,b,c){var s=J.u(b)
if(!s.j())return a
if(c.length===0){do a+=H.r(s.gl())
while(s.j())}else{a+=H.r(s.gl())
for(;s.j();)a=a+c+H.r(s.gl())}return a},
d7:function(a){if(typeof a=="number"||H.ii(a)||null==a)return J.cX(a)
if(typeof a=="string")return JSON.stringify(a)
return P.jg(a)},
e6:function(a){return new P.bQ(a)},
hD:function(a){return new P.ay(!1,null,null,a)},
j2:function(a,b,c){return new P.ay(!0,a,b,c)},
eJ:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
ju:function(a,b,c,d){if(a<b||a>c)throw H.f(P.aE(a,b,c,d,null))
return a},
ck:function(a,b,c){if(0>a||a>c)throw H.f(P.aE(a,0,c,"start",null))
if(a>b||b>c)throw H.f(P.aE(b,a,c,"end",null))
return b},
ap:function(a,b){if(a<0)throw H.f(P.aE(a,0,null,b,null))
return a},
h1:function(a,b,c,d,e){var s=H.S(e==null?J.y(b):e)
return new P.da(s,!0,a,c,"Index out of range")},
an:function(a){return new P.dz(a)},
i_:function(a){return new P.dx(a)},
am:function(a){return new P.bs(a)},
ai:function(a){return new P.d4(a)},
H:function H(){},
bQ:function bQ(a){this.a=a},
dw:function dw(){},
dj:function dj(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
da:function da(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dz:function dz(a){this.a=a},
dx:function dx(a){this.a=a},
bs:function bs(a){this.a=a},
d4:function d4(a){this.a=a},
cp:function cp(){},
d6:function d6(a){this.a=a},
f9:function f9(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
n:function n(){},
I:function I(){},
O:function O(){},
C:function C(){},
dL:function dL(){},
ds:function ds(a){this.a=a},
iC:function(a,b,c){H.fD(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
iB:function(a,b,c){H.fD(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
dI:function dI(){this.b=this.a=0},
be:function be(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
fo:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
i5:function(a,b,c,d){var s=W.fo(W.fo(W.fo(W.fo(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
f7:function(a,b,c,d,e){var s=W.iq(new W.f8(c),t.aD),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.iY(a,b,s,!1)}return new W.cC(a,b,s,!1,e.h("cC<0>"))},
iq:function(a,b){var s=$.J
if(s===C.h)return a
return s.fU(a,b)},
m:function m(){},
cZ:function cZ(){},
d0:function d0(){},
b8:function b8(){},
bV:function bV(){},
av:function av(){},
ef:function ef(){},
bY:function bY(){},
h:function h(){},
i:function i(){},
a0:function a0(){},
d9:function d9(){},
ac:function ac(){},
a9:function a9(){},
dn:function dn(){},
au:function au(){},
bv:function bv(){},
f2:function f2(a){this.a=a},
cz:function cz(){},
h_:function h_(a,b){this.a=a
this.$ti=b},
cB:function cB(){},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cC:function cC(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
f8:function f8(a){this.a=a}},A={R:function R(a,b){this.a=a
this.$ti=b},el:function el(a){this.a=a},cD:function cD(a,b){this.a=a
this.b=null
this.$ti=b},
hJ:function(a,b){return A.jk(a,b,b)},
jk:function(a,b,c){return P.il(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$hJ(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.jI(s[m])
case 5:case 3:s.length===n||(0,H.d)(s),++m
q=2
break
case 4:return P.i3()
case 1:return P.i4(o)}}},c)},
b1:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hh:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},X={Y:function Y(){},aj:function aj(a){this.b=a},a8:function a8(){},
it:function(a,b,c){var s,r
if(c){if(!$.dP.dO(a)){s=t.S
$.dP.J(0,a,P.h5(s,s))}if(!$.dP.n(0,a).dO(b)){s=$.dP.n(0,a)
s.toString
s.J(0,b,X.it(a,b,!1))}s=$.dP.n(0,a).n(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.bA(T.x(b+1,1,1),1,new X.fE(),s)
return C.e.ar(C.a.bA(T.x(a-b,a,-1),1,new X.fF(),s),r)},
dS:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fE:function fE(){},
fF:function fF(){}},G={
fY:function(a,b){var s=M.h0(C.a7)
s=new G.d_(a,0,M.iG(),b,s)
s.ap()
s.f6(a,null,b,M.iG(),0)
return s},
d_:function d_(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.r=e
_.x=null},
dv:function(a,b,c,d,e){var s=new G.cu(d,c,b,a)
s.ap()
s.fc(a,b,c,d,e)
return s},
cu:function cu(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},M={
hV:function(a){var s=new M.dp(1,M.bE(),0,a)
s.ap()
return s},
dq:function dq(){},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
h7:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b4.Y,b0=b4.by,b1=P.j(b4.e4,!0,t.V),b2=b4.h2,b3=b4.cp
if(b3!=null){s=H.z(b3)
s=P.j(new H.L(b3,s.h("N(1)").a(new M.eE()),s.h("L<1,N>")),!0,t.F)
b3=s}else b3=a8
s=b4.cq
if(s!=null){r=H.z(s)
r=P.j(new H.L(s,r.h("N(1)").a(new M.eF()),r.h("L<1,N>")),!0,t.F)
s=r}else s=a8
r=b4.M
q=b4.P
N.as(a8,0,C.b,a8,0)
p=b4.r1
o=b4.r2
n=N.bg(b4.rx)
m=b4.ry
m=m==null?a8:N.a7(m)
l=b4.x1
l=l==null?a8:N.a7(l)
k=b4.dy
k=k==null?a8:J.q(k,new V.T(),t.G)
if(k==null)k=H.a([],t.O)
j=t.G
k=P.j(k,!0,j)
i=b4.fr
i=i==null?a8:J.q(i,new V.U(),j)
i=P.j(i==null?H.a([],t.O):i,!0,j)
h=b4.fx
h=h==null?a8:J.q(h,new V.V(),j)
j=P.j(h==null?H.a([],t.O):h,!0,j)
h=b4.x
g=b4.y
f=b4.z
e=b4.Q
d=e.a
c=e.b
e=e.c
b=b4.cy
a=b4.gE(b4).i()
a0=b4.gG(b4)
a1=b4.c
if(a1===$)a1=H.c(H.e("target"))
a1=a1==null?a8:a1.i()
a2=H.a([],t.r)
for(a3=b4.gu(),a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,H.d)(a3),++a5)a2.push(a3[a5].i())
a3=b4.gH()
a4=H.a([],t.l)
for(a6=J.u(b4.gp(b4));a6.j();){a7=a6.gl()
a4.push(new Y.b(a7.a,a7.b,a7.c))}return new M.br(b4.av,a9,b4.e1,b4.bx,b4.e2,b4.e3,b0,b1,!1,b4.h_,b4.e5,b4.h0,b4.h1,new Y.b(b2.a,b2.b,b2.c),b4.h3,b4.e6,b4.h4,b4.h5,b4.h6,b4.h7,b3,s,b4.X,b4.a1,r,q,p,new Y.b(o.a,o.b,o.c),n,m,l,h,g,f,new Y.b(d,c,e),b4.ch,b4.cx,b,b4.db,b4.dx,k,i,j,a,a0,a1,a2,a3,a4)},
j5:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a5.bq,a1=M.bT(a5.br),a2=M.bT(a5.bs),a3=M.bT(a5.bt),a4=a5.dy
a4=a4==null?a:J.q(a4,new V.T(),t.G)
if(a4==null)a4=H.a([],t.O)
s=t.G
a4=P.j(a4,!0,s)
r=a5.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a5.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a5.x
p=a5.y
o=a5.z
n=a5.Q
m=n.a
l=n.b
n=n.c
k=a5.cy
j=a5.gE(a5).i()
i=a5.gG(a5)
h=a5.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a5.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a5.gH()
e=H.a([],t.l)
for(c=J.u(a5.gp(a5));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}a0=new M.bS(new Y.b(a0.a,a0.b,a0.c),a1,a2,a3,a5.cl,a5.cm,a5.cn,a5.co,q,p,o,new Y.b(m,l,n),a5.ch,a5.cx,k,a5.db,a5.dx,a4,r,s,j,i,h,g,f,e)
a0.d9(a5)
return a0},
eG:function(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=C.u.am(C.A),a8=C.j.am(C.j),a9=C.I.am(C.z),b0=t.L,b1=H.a([],b0)
for(s=b2.gdJ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)b1.push(s[q].i())
b0=H.a([],b0)
for(s=b2.gdW(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)b0.push(s[q].i())
s=b2.bp
s=s==null?a6:V.i0(s)
r=V.i0(b2.ck)
p=b2.bq
o=M.bT(b2.br)
n=M.bT(b2.bs)
m=M.bT(b2.bt)
l=b2.dy
l=l==null?a6:J.q(l,new V.T(),t.G)
if(l==null)l=H.a([],t.O)
k=t.G
l=P.j(l,!0,k)
j=b2.fr
j=j==null?a6:J.q(j,new V.U(),k)
j=P.j(j==null?H.a([],t.O):j,!0,k)
i=b2.fx
i=i==null?a6:J.q(i,new V.V(),k)
k=P.j(i==null?H.a([],t.O):i,!0,k)
i=b2.x
h=b2.y
g=b2.z
f=b2.Q
e=f.a
d=f.b
f=f.c
c=b2.cy
b=b2.gE(b2).i()
a=b2.gG(b2)
a0=b2.c
if(a0===$)a0=H.c(H.e("target"))
a0=a0==null?a6:a0.i()
a1=H.a([],t.r)
for(a2=b2.gu(),a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,H.d)(a2),++q)a1.push(a2[q].i())
a2=b2.gH()
a3=H.a([],t.l)
for(a4=J.u(b2.gp(b2));a4.j();){a5=a4.gl()
a3.push(new Y.b(a5.a,a5.b,a5.c))}a7=new M.ch(a7,a8,a9,r,s,b2.dX,b2.dY,b2.dZ,b1,b0,new Y.b(p.a,p.b,p.c),o,n,m,b2.cl,b2.cm,b2.cn,b2.co,i,h,g,new Y.b(e,d,f),b2.ch,b2.cx,c,b2.db,b2.dx,l,j,k,b,a,a0,a1,a2,a3)
a7.d9(b2)
return a7},
bT:function(a){return new M.W(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
br:function br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9){var _=this
_.av=a
_.Y=b
_.e1=c
_.bx=d
_.e2=e
_.e3=f
_.by=g
_.e4=h
_.hI=i
_.h_=j
_.e5=k
_.h0=l
_.h1=m
_.h2=n
_.h3=o
_.e6=p
_.h4=q
_.h5=r
_.h6=s
_.h7=a0
_.cp=a1
_.cq=a2
_.X=a3
_.a1=a4
_.M=a5
_.P=a6
_.r1=a7
_.r2=a8
_.rx=a9
_.ry=b0
_.x1=b1
_.x=b2
_.y=b3
_.z=b4
_.Q=b5
_.ch=b6
_.cx=b7
_.cy=b8
_.db=b9
_.dx=c0
_.dy=c1
_.fr=c2
_.fx=c3
_.a=c4
_.b=c5
_.c=c6
_.d=c7
_.e=null
_.f=c8
_.r=c9},
eE:function eE(){},
eF:function eF(){},
d5:function d5(){},
bS:function bS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.bq=a
_.br=b
_.bs=c
_.bt=d
_.bw=_.bv=_.bu=null
_.cl=e
_.cm=f
_.cn=g
_.co=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=m
_.cx=n
_.cy=o
_.db=p
_.dx=q
_.dy=r
_.fr=s
_.fx=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
e8:function e8(){},
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var _=this
_.fX=a
_.fY=b
_.fZ=c
_.ck=d
_.bp=e
_.dX=f
_.dY=g
_.dZ=h
_.e_=i
_.e0=j
_.bq=k
_.br=l
_.bs=m
_.bt=n
_.bw=_.bv=_.bu=null
_.cl=o
_.cm=p
_.cn=q
_.co=r
_.x=s
_.y=a0
_.z=a1
_.Q=a2
_.ch=a3
_.cx=a4
_.cy=a5
_.db=a6
_.dx=a7
_.dy=a8
_.fr=a9
_.fx=b0
_.a=b1
_.b=b2
_.c=b3
_.d=b4
_.e=null
_.f=b5
_.r=b6},
W:function W(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=a0},
jy:function(a){var s,r,q,p,o,n,m=a.y,l=a.gE(a).i(),k=a.gG(a),j=a.c
if(j===$)j=H.c(H.e("target"))
j=j==null?null:j.i()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].i())
r=a.gH()
q=H.a([],t.l)
for(o=J.u(a.gp(a));o.j();){n=o.gl()
q.push(new Y.b(n.a,n.b,n.c))}return new M.bf(a.x,m,a.z,l,k,j,s,r,q)},
bf:function bf(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h
_.r=i},
jq:function(a){var s,r,q,p,o,n,m=a.gE(a).i(),l=a.gG(a),k=a.c
if(k===$)k=H.c(H.e("target"))
k=k==null?null:k.i()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].i())
r=a.gH()
q=H.a([],t.l)
for(o=J.u(a.gp(a));o.j();){n=o.gl()
q.push(new Y.b(n.a,n.b,n.c))}return new M.p(m,l,k,s,r,q)},
h0:function(a){var s=null,r=new M.bo(C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.a0(t.a.a(a))
return r},
jh:function(a){var s,r,q,p,o,n,m=a.gE(a).i(),l=a.gG(a),k=a.c
if(k===$)k=H.c(H.e("target"))
k=k==null?null:k.i()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].i())
r=a.gH()
q=H.a([],t.l)
for(o=J.u(a.gp(a));o.j();){n=o.gl()
q.push(new Y.b(n.a,n.b,n.c))}return new M.bo(m,l,k,s,r,q)},
p:function p(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
eB:function eB(a){this.a=a},
eA:function eA(a){this.a=a},
ez:function ez(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ex:function ex(){},
ey:function ey(a){this.a=a},
bo:function bo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ej:function ej(){this.a=null},
iz:function(a,b,c){return a},
iI:function(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},E={d8:function d8(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},R={ea:function ea(a,b){this.c=a
this.d=8
this.r=b},eb:function eb(){},ec:function ec(){},
hI:function(a){var s=null,r=new R.c0(s,s,s,!1,a,C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.f9(a)
return r},
jf:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.dx
if(f==null)f=H.c(H.e("draggedListener"))
s=a.dy
if(s==null)s=H.c(H.e("pressedListener"))
r=a.fr
if(r==null)r=H.c(H.e("releasedListener"))
q=a.fx
p=N.c_(a.x)
o=a.gE(a).i()
n=a.gG(a)
m=a.c
if(m===$)m=H.c(H.e("target"))
m=m==null?null:m.i()
l=H.a([],t.r)
for(k=a.gu(),j=k.length,i=0;i<k.length;k.length===j||(0,H.d)(k),++i)l.push(k[i].i())
k=a.gH()
j=H.a([],t.l)
for(h=J.u(a.gp(a));h.j();){g=h.gl()
j.push(new Y.b(g.a,g.b,g.c))}return new R.c0(f,s,r,q,p,o,n,m,l,k,j)},
dc:function dc(){},
c0:function c0(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.dx=a
_.dy=b
_.fr=c
_.fx=d
_.x=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=null
_.f=j
_.r=k},
eg:function eg(a){this.a=a},
eh:function eh(a){this.a=a},
ei:function ei(a){this.a=a}},K={bJ:function bJ(){},cY:function cY(){},dU:function dU(a){this.a=a},dV:function dV(a){this.a=a},dW:function dW(a){this.a=a},v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},B={d2:function d2(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.r=c
_.x=!1
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.b=_.a=null},
kP:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=V.dR(Z.dY(a),Z.dY(b),c,t.A)
m=H.a([],t.l)
for(r=s.gR(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
n=J.af(o)
m.push(new Y.b(n.n(o,0),n.n(o,1),n.n(o,2)))}return m}},N={
as:function(a,b,c,d,e){var s=t.O,r=a!=null?H.a([a],s):H.a([],s),q=H.a([c],s)
return new N.ct(q,d!=null?H.a([d],s):H.a([],s),e,r,b,0,C.c)},
bg:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.u(o);o.j();){r=o.gl()
s.push(new K.v(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.u(s);s.j();){q=s.gl()
r.push(new K.v(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.u(r);r.j();){p=r.gl()
q.push(new K.v(p.a,p.b,p.c,p.d))}r=q}else r=null
return new N.ct(o,s,a.c,r,a.e,a.f,a.r)},
jz:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bg(a6.rx)
p=a6.ry
p=p==null?a5:N.a7(p)
o=a6.x1
o=o==null?a5:N.a7(o)
n=a6.dy
n=n==null?a5:J.q(n,new V.T(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.j(n,!0,m)
l=a6.fr
l=l==null?a5:J.q(l,new V.U(),m)
l=P.j(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.q(k,new V.V(),m)
m=P.j(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gE(a6).i()
c=a6.gG(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].i())
a0=a6.gH()
a1=H.a([],t.l)
for(a3=J.u(a6.gp(a6));a3.j();){a4=a3.gl()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.at(s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
j1:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bg(a6.rx)
p=a6.ry
p=p==null?a5:N.a7(p)
o=a6.x1
o=o==null?a5:N.a7(o)
n=a6.dy
n=n==null?a5:J.q(n,new V.T(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.j(n,!0,m)
l=a6.fr
l=l==null?a5:J.q(l,new V.U(),m)
l=P.j(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.q(k,new V.V(),m)
m=P.j(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gE(a6).i()
c=a6.gG(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].i())
a0=a6.gH()
a1=H.a([],t.l)
for(a3=J.u(a6.gp(a6));a3.j();){a4=a3.gl()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bL(a6.X,a6.a1,a6.M,a6.P,a6.aN,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
j9:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bg(a6.rx)
p=a6.ry
p=p==null?a5:N.a7(p)
o=a6.x1
o=o==null?a5:N.a7(o)
n=a6.dy
n=n==null?a5:J.q(n,new V.T(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.j(n,!0,m)
l=a6.fr
l=l==null?a5:J.q(l,new V.U(),m)
l=P.j(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.q(k,new V.V(),m)
m=P.j(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gE(a6).i()
c=a6.gG(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].i())
a0=a6.gH()
a1=H.a([],t.l)
for(a3=J.u(a6.gp(a6));a3.j();){a4=a3.gl()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bX(a6.X,a6.a1,a6.M,a6.P,a6.aN,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
hH:function(a){var s=null,r=N.as(s,0,C.b,s,0)
r=new N.bZ(0,6.283185307179586,0.08,a,9,0.35,C.k,r,s,s,0,0,0,C.f,!0,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.as(C.w,0,!0,C.b,!1,0.01,C.f,0,C.b,0,0.000001)
r.K(C.b)
return r},
c_:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bg(a6.rx)
p=a6.ry
p=p==null?a5:N.a7(p)
o=a6.x1
o=o==null?a5:N.a7(o)
n=a6.dy
n=n==null?a5:J.q(n,new V.T(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.j(n,!0,m)
l=a6.fr
l=l==null?a5:J.q(l,new V.U(),m)
l=P.j(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.q(k,new V.V(),m)
m=P.j(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gE(a6).i()
c=a6.gG(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].i())
a0=a6.gH()
a1=H.a([],t.l)
for(a3=J.u(a6.gp(a6));a3.j();){a4=a3.gl()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bZ(a6.X,a6.a1,a6.M,a6.P,a6.aN,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
hN:function(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=N.as(s,0,C.b,s,0),q=f==null?C.i:f,p=l==null?C.b:l
r=new N.N(c,h,k,e,0.35,C.k,r,s,s,m,b,j,i,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.as(a,b,!1,q,!1,0.01,i,j,p,m,0.000001)
r.K(C.b)
return r},
hO:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a8.M,a7=a8.P
N.as(a5,0,C.b,a5,0)
s=a8.r1
r=a8.r2
q=N.bg(a8.rx)
p=a8.ry
p=p==null?a5:N.a7(p)
o=a8.x1
o=o==null?a5:N.a7(o)
n=a8.dy
n=n==null?a5:J.q(n,new V.T(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.j(n,!0,m)
l=a8.fr
l=l==null?a5:J.q(l,new V.U(),m)
l=P.j(l==null?H.a([],t.O):l,!0,m)
k=a8.fx
k=k==null?a5:J.q(k,new V.V(),m)
m=P.j(k==null?H.a([],t.O):k,!0,m)
k=a8.x
j=a8.y
i=a8.z
h=a8.Q
g=h.a
f=h.b
h=h.c
e=a8.cy
d=a8.gE(a8).i()
c=a8.gG(a8)
b=a8.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a8.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].i())
a0=a8.gH()
a1=H.a([],t.l)
for(a3=J.u(a8.gp(a8));a3.j();){a4=a3.gl()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.N(a8.X,a8.a1,a6,a7,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a8.ch,a8.cx,e,a8.db,a8.dx,n,l,m,d,c,b,a,a0,a1)},
bO:function(a,b,c){var s=null,r=N.as(s,0,C.b,s,0)
r=new N.bN(0.25,5,!0,s,a,s,c,b,0.35,C.k,r,s,s,6,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.as(s,0,!1,C.i,!1,0.01,C.f,0,C.b,6,0.000001)
r.K(C.b)
r.bx=6
r.ca(C.F)
r.d4()
return r},
j3:function(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a9.gea(),a7=a9.M,a8=a9.P
N.as(a5,0,C.b,a5,0)
s=a9.r1
r=a9.r2
q=N.bg(a9.rx)
p=a9.ry
p=p==null?a5:N.a7(p)
o=a9.x1
o=o==null?a5:N.a7(o)
n=a9.dy
n=n==null?a5:J.q(n,new V.T(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.j(n,!0,m)
l=a9.fr
l=l==null?a5:J.q(l,new V.U(),m)
l=P.j(l==null?H.a([],t.O):l,!0,m)
k=a9.fx
k=k==null?a5:J.q(k,new V.V(),m)
m=P.j(k==null?H.a([],t.O):k,!0,m)
k=a9.x
j=a9.y
i=a9.z
h=a9.Q
g=h.a
f=h.b
h=h.c
e=a9.cy
d=a9.gE(a9).i()
c=a9.gG(a9)
b=a9.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a9.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].i())
a0=a9.gH()
a1=H.a([],t.l)
for(a3=J.u(a9.gp(a9));a3.j();){a4=a3.gl()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bN(a9.av,a9.Y,!0,a6,a9.X,a9.a1,a7,a8,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a9.ch,a9.cx,e,a9.db,a9.dx,n,l,m,d,c,b,a,a0,a1)},
jr:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new N.ci(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jv:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cl(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jA:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cv(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
a7:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new N.bP(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
ct:function ct(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
du:function du(a){this.b=a},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.r1=a
_.r2=b
_.rx=c
_.ry=d
_.x1=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.ch=j
_.cx=k
_.cy=l
_.db=m
_.dx=n
_.dy=o
_.fr=p
_.fx=q
_.a=r
_.b=s
_.c=a0
_.d=a1
_.e=null
_.f=a2
_.r=a3},
bL:function bL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.X=a
_.a1=b
_.M=c
_.P=d
_.aN=e
_.r1=f
_.r2=g
_.rx=h
_.ry=i
_.x1=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.fr=a1
_.fx=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=null
_.f=a7
_.r=a8},
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.X=a
_.a1=b
_.M=c
_.P=d
_.aN=e
_.r1=f
_.r2=g
_.rx=h
_.ry=i
_.x1=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.fr=a1
_.fx=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=null
_.f=a7
_.r=a8},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.X=a
_.a1=b
_.M=c
_.P=d
_.aN=e
_.r1=f
_.r2=g
_.rx=h
_.ry=i
_.x1=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.fr=a1
_.fx=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=null
_.f=a7
_.r=a8},
N:function N(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.X=a
_.a1=b
_.M=c
_.P=d
_.r1=e
_.r2=f
_.rx=g
_.ry=h
_.x1=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.ch=n
_.cx=o
_.cy=p
_.db=q
_.dx=r
_.dy=s
_.fr=a0
_.fx=a1
_.a=a2
_.b=a3
_.c=a4
_.d=a5
_.e=null
_.f=a6
_.r=a7},
bN:function bN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.av=a
_.Y=b
_.e1=c
_.bx=d
_.X=e
_.a1=f
_.M=g
_.P=h
_.r1=i
_.r2=j
_.rx=k
_.ry=l
_.x1=m
_.x=n
_.y=o
_.z=p
_.Q=q
_.ch=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.a=a6
_.b=a7
_.c=a8
_.d=a9
_.e=null
_.f=b0
_.r=b1},
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
cv:function cv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
bP:function bP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
dm:function dm(){},
eK:function eK(a){this.a=a}},V={
jC:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new V.B(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
i0:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.u(o);o.j();){r=o.gl()
s.push(new K.v(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.u(s);s.j();){q=s.gl()
r.push(new K.v(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.u(r);r.j();){p=r.gl()
q.push(new K.v(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.aX(o,s,a.c,r,a.e,a.f,a.r)},
eQ:function(a){var s=null,r=new V.aI(4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.as(s,0,!1,s,!1,0.01,C.f,0,s,4,0.000001)
r.da(a)
return r},
jB:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new V.aI(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jD:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.q(a0,new V.T(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.j(a0,!0,s)
r=a1.fr
r=r==null?a:J.q(r,new V.U(),s)
r=P.j(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.q(q,new V.V(),s)
s=P.j(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gE(a1).i()
i=a1.gG(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].i())
f=a1.gH()
e=H.a([],t.l)
for(c=J.u(a1.gp(a1));c.j();){b=c.gl()
e.push(new Y.b(b.a,b.b,b.c))}return new V.cw(a1.r1,a1.r2,q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
B:function B(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
T:function T(){},
U:function U(){},
V:function V(){},
f_:function f_(){},
f0:function f0(){},
eV:function eV(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a},
eS:function eS(){},
eT:function eT(){},
eZ:function eZ(){},
eY:function eY(){},
aX:function aX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aI:function aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
cw:function cw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.r1=a
_.r2=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.fr=m
_.fx=n
_.a=o
_.b=p
_.c=q
_.d=r
_.e=null
_.f=s
_.r=a0},
bK:function bK(){},
ht:function(a,b,c){var s,r,q=t.p,p=V.dR(Z.Z(null,J.q(a,new V.fL(),q).W(0)),Z.Z(null,J.q(b,new V.fM(),q).W(0)),c,t.A)
q=p.gR(p)
s=H.z(q)
r=s.h("L<1,v>")
return P.j(new H.L(q,s.h("v(1)").a(new V.fN()),r),!0,r.h("E.E"))},
dR:function(a,b,c,d){return d.a(J.fX(J.cW(a,1-c),J.cW(b,c)))},
fO:function(a,b,c,d){return d.a(J.fX(J.cW(a,1-c),J.cW(b,c)))},
hs:function(a,b,c){if(c>=1)return new S.A(b-1,1,t.w)
if(c<=0)return new S.A(a,0,t.w)
return new S.A(J.j0(V.dR(a,b,c,t.V)),C.d.af((b-a)*c,1),t.w)},
hm:function(a){return new V.fC(a,a.length-1)},
fS:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.a6(r),p=T.x(q.gm(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.d)(p),++m){if(q.gm(r)===0)H.c(H.a1())
s.push(n.a(q.n(r,q.gm(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.a6(q),o=T.x(p.gm(q),0,1),n=o.length,l=a.$ti,k=l.h("a3.E"),l=l.h("ar<a3.E>"),m=0;m<o.length;o.length===n||(0,H.d)(o),++m){j=H.S(o[m])
i=new H.ar(a,j,null,l)
i.c_(a,j,null,k)
r.push(V.hm(i.W(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=T.x(p.gm(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.d)(q),++m){g=q[m]
if(typeof g!=="number")return g.B()
l=H.S(g+1)
P.ck(0,l,r.length)
k=new H.ar(r,0,l,n)
k.c_(r,0,l,o)
s.push(V.hm(k.W(0)).$1(h))}return s},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fC:function fC(a,b){this.a=a
this.b=b},
fB:function fB(){}},Q={d3:function d3(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},ee:function ee(){},ed:function ed(){}},T={
x:function(a,b,c){var s,r=H.a([],t.X)
if(c>0)for(s=b;s<a;s+=c)C.a.w(r,s)
else for(s=b;s>a;s+=c)C.a.w(r,s)
return r},
dQ:function(a,b){var s,r,q,p=J.af(a)
if(p.gV(a))return H.a([],b.h("t<A<w,0>>"))
s=H.a([],b.h("t<A<w,0>>"))
for(r=t.dq.C(b).h("A<1,2>"),q=0;q<p.gm(a);++q)C.a.w(s,new S.A(q,p.n(a,q),r))
return s},
hv:function(a,b){if(a.length===0)return b.a(0)
return C.a.a8(a,new T.fV(b))},
fP:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=T.x(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
if(typeof n!=="number")return n.aA()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return Z.Z(null,l)},
fA:function(a,b,c){var s,r,q,p,o=T.x(C.d.dM((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.d)(o),++q){p=o[q]
if(typeof p!=="number")return p.q()
n.push(H.a([p*c+b],r))}return Z.Z(null,n)},
bl:function(a,b,c){var s,r,q,p,o,n=J.af(a)
if(n.gV(a))return a
s=n.gm(a)
if(s>b)throw H.f("Trying to stretch an array to a length shorter than its own")
r=T.x(b,0,1)
q=H.z(r)
p=q.h("L<1,k>")
o=new H.L(r,q.h("k(1)").a(new T.fU(b,s)),p)
q=H.a([],c.h("t<0>"))
for(r=new H.a2(o,o.gm(o),p.h("a2<E.E>")),p=p.h("E.E");r.j();)q.push(n.n(a,C.d.a3(p.a(r.d))))
return q},
kJ:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("t<0>"))
for(s=T.x(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.q()
n=C.d.ar(p*o,l)
if(n<0||n>=o)return H.o(a,n)
k.push(a[n])}s=H.a([],d.h("t<0>"))
for(r=T.x(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.d)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.q()
m=C.d.ar(p*n,l)
if(m<0||m>=n)return H.o(b,m)
s.push(b[m])}return new S.A(k,s,c.h("@<l<0>>").C(d.h("l<0>")).h("A<1,2>"))},
hw:function(a,b){var s=F.ep(a,new T.fW(b),b)
return P.j(s,!0,s.$ti.h("n.E"))},
iL:function(a,b){var s=P.j(a,!0,b)
if(0>=s.length)return H.o(s,-1)
s.pop()
return s},
iM:function(a,b){var s,r,q,p=H.a([],b.h("t<0>")),o=P.jn(b)
for(s=H.z(a).h("aF<1>"),r=new H.aF(a,s),r=new H.a2(r,r.gm(r),s.h("a2<E.E>")),s=s.h("E.E");r.j();){q=s.a(r.d)
if(!o.aa(0,q)){C.a.w(p,q)
o.w(0,q)}}s=b.h("aF<0>")
return P.j(new H.aF(p,s),!0,s.h("E.E"))},
fV:function fV(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
fW:function fW(a){this.a=a}},S={ba:function ba(a,b){this.a=a
this.b=b},A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},bu:function bu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eN:function(a){var s=null,r=new S.cs(a,32,"KaTeX_Math",C.b,s,s,s,s,s)
r.a4(C.b,s,s)
r.sT(t.y.a(H.a([C.c],t.l)))
r.K(C.b)
return r},
jx:function(a){var s,r,q,p,o,n,m=a.y,l=a.gE(a).i(),k=a.gG(a),j=a.c
if(j===$)j=H.c(H.e("target"))
j=j==null?null:j.i()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].i())
r=a.gH()
q=H.a([],t.l)
for(o=J.u(a.gp(a));o.j();){n=o.gl()
q.push(new Y.b(n.a,n.b,n.c))}return new S.cs(a.x,m,a.z,l,k,j,s,r,q)},
cs:function cs(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h
_.r=i}},O={X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},di:function di(){},cf:function cf(a,b){this.c=a
this.a=b},aC:function aC(a,b){this.c=a
this.a=b},aD:function aD(a,b){this.c=a
this.a=b},aB:function aB(a,b){this.c=a
this.a=b},ce:function ce(a){this.a=a}},Z={
Z:function(a,b){var s,r,q=new Z.ao(b)
if(a==null){s=q.gR(q).length
r=q.gR(q).length!==0?J.y(C.a.gZ(q.gR(q))):0
a=new S.A(s,r,t.o)
s=a}else s=a
q.sfg(t.o.a(s))
return q},
dX:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=T.x(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){o=H.a([],q)
for(n=T.x(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.d)(n),++l)o.push(a)
j.push(o)}return Z.Z(b,j)},
dY:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.ab(a),r=s.gA(a),q=t.n;r.j();){p=r.gl()
o.push(H.a([p.a,p.b,p.c],q))}return Z.Z(new S.A(s.gm(a),3,t.o),o)},
d1:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=T.x(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){o=s[p]
n=H.a([],q)
for(m=T.x(a,0,1),l=m.length,k=J.b2(o),j=0;j<m.length;m.length===l||(0,H.d)(m),++j)if(k.I(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return Z.Z(new S.A(a,a,t.o),i)},
kN:function(a,b){var s=Z.iH(a),r=Z.kT(b)
return C.a.a8(H.a([r,s,r.eD()],t.aM),new Z.fT())},
iH:function(a){var s=t.n
return Z.Z(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
kT:function(a){var s,r,q,p,o,n
if(a.a2()===0)return Z.d1(3)
s=a.aA(0,Math.sqrt(a.a2()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.ey(0)
p=q.aA(0,Math.sqrt(q.a2()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=Z.Z(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return Z.iH(o).ab(n)},
kL:function(a,b){var s,r,q,p,o=a/2,n=b.aA(0,Math.sqrt(b.a2())).q(0,Math.sin(o)),m=H.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(H.a([s[p]],q))
m.push(H.a([Math.cos(o)],q))
return Z.Z(null,m)},
ku:function(a,b){var s,r,q,p,o,n,m=6.283185307179586/a,l=t.bN,k=H.a([],l)
for(s=T.x(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
if(typeof p!=="number")return H.bk(p)
o=m*p
k.push(new S.ba(Math.cos(o),Math.sin(o)))}l=H.a([],l)
for(s=k.length,r=b.a,o=b.b,q=0;q<k.length;k.length===s||(0,H.d)(k),++q)l.push(k[q].q(0,new S.ba(r,o)))
k=H.a([],t.l)
for(s=l.length,q=0;q<l.length;l.length===s||(0,H.d)(l),++q){n=l[q]
k.push(new Y.b(n.a,n.b,0))}return k},
ao:function ao(a){this.a=a
this.b=null},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
e2:function e2(a){this.a=a},
e1:function e1(a,b){this.a=a
this.b=b},
e0:function e0(a){this.a=a},
e5:function e5(a){this.a=a},
e_:function e_(){},
dZ:function dZ(a){this.a=a},
fT:function fT(){},
kH:function(){var s=new Z.dh()
s.fb()
s.bG()},
dh:function dh(){var _=this
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=null
_.a=0
_.x=_.r=_.f=_.d=null},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
eu:function eu(a){this.a=a}},Y={b:function b(a,b,c){this.a=a
this.b=b
this.c=c},f1:function f1(a){this.a=a}},F={
ep:function(a,b,c){return F.jo(a,b,c,c)},
jo:function(a,b,c,d){return P.il(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$ep(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.a6(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.n(s,l)
p=H.cT(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.i3()
case 1:return P.i4(n)}}},d)}}
var w=[C,H,J,P,W,A,X,G,M,E,R,K,B,N,V,Q,T,S,O,Z,Y,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.h3.prototype={}
J.al.prototype={
I:function(a,b){return a===b},
gt:function(a){return H.aw(a)},
k:function(a){return"Instance of '"+H.eI(a)+"'"}}
J.dd.prototype={
k:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$iF:1}
J.bp.prototype={
I:function(a,b){return null==b},
k:function(a){return"null"},
gt:function(a){return 0},
$iO:1}
J.bc.prototype={
gt:function(a){return 0},
k:function(a){return String(a)}}
J.dk.prototype={}
J.ax.prototype={}
J.aU.prototype={
k:function(a){var s=a[$.iN()]
if(s==null)return this.f0(a)
return"JavaScript function for "+J.cX(s)},
$ibb:1}
J.t.prototype={
w:function(a,b){H.z(a).c.a(b)
if(!!a.fixed$length)H.c(P.an("add"))
a.push(b)},
hd:function(a,b,c){var s,r
H.z(a).h("n<1>").a(c)
if(!!a.fixed$length)H.c(P.an("insertAll"))
P.ju(b,0,a.length,"index")
if(!t.R.b(c))c=J.dT(c)
s=J.y(c)
a.length=a.length+s
r=b+s
this.d1(a,r,a.length,a,b)
this.eL(a,b,r,c)},
bE:function(a,b){var s
if(!!a.fixed$length)H.c(P.an("remove"))
for(s=0;s<a.length;++s)if(J.aR(a[s],b)){a.splice(s,1)
return!0}return!1},
dw:function(a,b,c){var s,r,q,p,o
H.z(a).h("F(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.cT(b.$1(p)))s.push(p)
if(a.length!==r)throw H.f(P.ai(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
F:function(a,b){var s
H.z(a).h("n<1>").a(b)
if(!!a.fixed$length)H.c(P.an("addAll"))
if(Array.isArray(b)){this.fp(a,b)
return}for(s=J.u(b);s.j();)a.push(s.gl())},
fp:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.f(P.ai(a))
for(r=0;r<s;++r)a.push(b[r])},
cw:function(a,b,c){var s=H.z(a)
return new H.L(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("L<1,2>"))},
ec:function(a,b){var s,r=P.hQ(a.length,"",!1,t.aw)
for(s=0;s<a.length;++s)this.J(r,s,H.r(a[s]))
return r.join(b)},
hi:function(a){return this.ec(a,"")},
a9:function(a,b){return H.bt(a,b,null,H.z(a).c)},
a8:function(a,b){var s,r,q
H.z(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.f(H.a1())
if(0>=s)return H.o(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.f(P.ai(a))}return r},
bA:function(a,b,c,d){var s,r,q
d.a(b)
H.z(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.f(P.ai(a))}return r},
U:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
bO:function(a,b,c){P.ck(b,c,a.length)
return H.bt(a,b,c,H.z(a).c)},
gZ:function(a){if(a.length>0)return a[0]
throw H.f(H.a1())},
ga_:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.f(H.a1())},
d1:function(a,b,c,d,e){var s,r,q,p,o
H.z(a).h("n<1>").a(d)
if(!!a.immutable$list)H.c(P.an("setRange"))
P.ck(b,c,a.length)
s=c-b
if(s===0)return
P.ap(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.hC(d,e).ax(0,!1)
q=0}p=J.a6(r)
if(q+s>p.gm(r))throw H.f(H.jj())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.n(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.n(r,q+o)},
eL:function(a,b,c,d){return this.d1(a,b,c,d,0)},
bo:function(a,b){var s,r
H.z(a).h("F(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.cT(b.$1(a[r])))return!1
if(a.length!==s)throw H.f(P.ai(a))}return!0},
aa:function(a,b){var s
for(s=0;s<a.length;++s)if(J.aR(a[s],b))return!0
return!1},
gV:function(a){return a.length===0},
gaO:function(a){return a.length!==0},
k:function(a){return P.h2(a,"[","]")},
ax:function(a,b){var s=H.a(a.slice(0),H.z(a))
return s},
W:function(a){return this.ax(a,!0)},
gA:function(a){return new J.bM(a,a.length,H.z(a).h("bM<1>"))},
gt:function(a){return H.aw(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.c(P.an("set length"))
if(b<0)throw H.f(P.aE(b,0,null,"newLength",null))
if(b>a.length)H.z(a).c.a(null)
a.length=b},
n:function(a,b){if(b>=a.length||b<0)throw H.f(H.hp(a,b))
return a[b]},
J:function(a,b,c){H.z(a).c.a(c)
if(!!a.immutable$list)H.c(P.an("indexed set"))
if(b>=a.length||b<0)throw H.f(H.hp(a,b))
a[b]=c},
$iG:1,
$in:1,
$il:1}
J.en.prototype={}
J.bM.prototype={
gl:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.f(H.d(q))
s=r.c
if(s>=p){r.sdn(null)
return!1}r.sdn(q[s]);++r.c
return!0},
sdn:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
J.aT.prototype={
a3:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.f(P.an(""+a+".toInt()"))},
dM:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.f(P.an(""+a+".ceil()"))},
cK:function(a,b){var s,r
if(b>20)throw H.f(P.aE(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0)r=1/a<0
else r=!1
if(r)return"-"+s
return s},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
B:function(a,b){H.hg(b)
return a+b},
q:function(a,b){return a*b},
af:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ar:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
at:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.f(P.an("Result of truncating division is "+H.r(s)+": "+H.r(a)+" ~/ "+b))},
fH:function(a,b){var s
if(a>0)s=this.fG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fG:function(a,b){return b>31?0:a>>>b},
$ik:1,
$iQ:1}
J.c6.prototype={$iw:1}
J.de.prototype={}
J.aA.prototype={
B:function(a,b){H.cO(b)
return a+b},
eV:function(a,b,c){if(b<0)throw H.f(P.eJ(b,null))
if(b>c)throw H.f(P.eJ(b,null))
if(c>a.length)throw H.f(P.eJ(c,null))
return a.substring(b,c)},
k:function(a){return a},
gt:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm:function(a){return a.length},
$ieH:1,
$iaa:1}
H.aY.prototype={
gA:function(a){var s=H.D(this)
return new H.bW(J.u(this.gaj()),s.h("@<1>").C(s.Q[1]).h("bW<1,2>"))},
gm:function(a){return J.y(this.gaj())},
gV:function(a){return J.b7(this.gaj())},
gaO:function(a){return J.bH(this.gaj())},
a9:function(a,b){var s=H.D(this)
return H.fZ(J.hC(this.gaj(),b),s.c,s.Q[1])},
gZ:function(a){return H.D(this).Q[1].a(J.ag(this.gaj()))},
ga_:function(a){return H.D(this).Q[1].a(J.bI(this.gaj()))},
k:function(a){return J.cX(this.gaj())}}
H.bW.prototype={
j:function(){return this.a.j()},
gl:function(){return this.$ti.Q[1].a(this.a.gl())},
$iI:1}
H.b9.prototype={
gaj:function(){return this.a}}
H.cA.prototype={$iG:1}
H.cy.prototype={
n:function(a,b){return this.$ti.Q[1].a(J.M(this.a,b))},
J:function(a,b,c){var s=this.$ti
J.hz(this.a,b,s.c.a(s.Q[1].a(c)))},
w:function(a,b){var s=this.$ti
J.j_(this.a,s.c.a(s.Q[1].a(b)))},
F:function(a,b){var s=this.$ti
J.b6(this.a,H.fZ(s.h("n<2>").a(b),s.Q[1],s.c))},
bO:function(a,b,c){var s=this.$ti
return H.fZ(J.hB(this.a,b,c),s.c,s.Q[1])},
$iG:1,
$il:1}
H.a_.prototype={
gaj:function(){return this.a}}
H.c8.prototype={
k:function(a){var s="LateInitializationError: "+this.a
return s}}
H.fR.prototype={
$0:function(){var s=new P.P($.J,t.ck)
s.dh(null)
return s},
$S:18}
H.G.prototype={}
H.E.prototype={
gA:function(a){var s=this
return new H.a2(s,s.gm(s),H.D(s).h("a2<E.E>"))},
gV:function(a){return this.gm(this)===0},
gZ:function(a){if(this.gm(this)===0)throw H.f(H.a1())
return this.U(0,0)},
ga_:function(a){var s=this
if(s.gm(s)===0)throw H.f(H.a1())
return s.U(0,s.gm(s)-1)},
a8:function(a,b){var s,r,q,p=this
H.D(p).h("E.E(E.E,E.E)").a(b)
s=p.gm(p)
if(s===0)throw H.f(H.a1())
r=p.U(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.U(0,q))
if(s!==p.gm(p))throw H.f(P.ai(p))}return r},
a9:function(a,b){return H.bt(this,b,null,H.D(this).h("E.E"))},
ax:function(a,b){return P.j(this,b,H.D(this).h("E.E"))},
W:function(a){return this.ax(a,!0)}}
H.ar.prototype={
c_:function(a,b,c,d){var s,r=this.b
P.ap(r,"start")
s=this.c
if(s!=null){P.ap(s,"end")
if(r>s)throw H.f(P.aE(r,0,s,"start",null))}},
gfz:function(){var s=J.y(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfI:function(){var s=J.y(this.a),r=this.b
if(r>s)return s
return r},
gm:function(a){var s,r=J.y(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.v()
return s-q},
U:function(a,b){var s=this,r=s.gfI()+b
if(b<0||r>=s.gfz())throw H.f(P.h1(b,s,"index",null,null))
return J.hA(s.a,r)},
a9:function(a,b){var s,r,q=this
P.ap(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.c2(q.$ti.h("c2<1>"))
return H.bt(q.a,s,r,q.$ti.c)},
ax:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a6(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.hL(0,n):J.hK(0,n)}r=P.hQ(s,m.U(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.J(r,q,m.U(n,o+q))
if(m.gm(n)<l)throw H.f(P.ai(p))}return r},
W:function(a){return this.ax(a,!0)}}
H.a2.prototype={
gl:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a,p=q.gm(q)
if(r.b!==p)throw H.f(P.ai(q))
s=r.c
if(s>=p){r.saT(null)
return!1}r.saT(q.U(0,s));++r.c
return!0},
saT:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
H.bd.prototype={
gA:function(a){var s=H.D(this)
return new H.cd(J.u(this.a),this.b,s.h("@<1>").C(s.Q[1]).h("cd<1,2>"))},
gm:function(a){return J.y(this.a)},
gV:function(a){return J.b7(this.a)},
gZ:function(a){return this.b.$1(J.ag(this.a))},
ga_:function(a){return this.b.$1(J.bI(this.a))}}
H.c1.prototype={$iG:1}
H.cd.prototype={
j:function(){var s=this,r=s.b
if(r.j()){s.saT(s.c.$1(r.gl()))
return!0}s.saT(null)
return!1},
gl:function(){return this.$ti.Q[1].a(this.a)},
saT:function(a){this.a=this.$ti.h("2?").a(a)}}
H.L.prototype={
gm:function(a){return J.y(this.a)},
U:function(a,b){return this.b.$1(J.hA(this.a,b))}}
H.bh.prototype={
gA:function(a){return new H.cx(J.u(this.a),this.b,this.$ti.h("cx<1>"))}}
H.cx.prototype={
j:function(){var s,r
for(s=this.a,r=this.b;s.j();)if(H.cT(r.$1(s.gl())))return!0
return!1},
gl:function(){return this.a.gl()}}
H.aG.prototype={
a9:function(a,b){P.ap(b,"count")
return new H.aG(this.a,this.b+b,H.D(this).h("aG<1>"))},
gA:function(a){return new H.co(J.u(this.a),this.b,H.D(this).h("co<1>"))}}
H.bn.prototype={
gm:function(a){var s=J.y(this.a)-this.b
if(s>=0)return s
return 0},
a9:function(a,b){P.ap(b,"count")
return new H.bn(this.a,this.b+b,this.$ti)},
$iG:1}
H.co.prototype={
j:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.j()
this.b=0
return s.j()},
gl:function(){return this.a.gl()}}
H.c2.prototype={
gA:function(a){return C.T},
gV:function(a){return!0},
gm:function(a){return 0},
gZ:function(a){throw H.f(H.a1())},
ga_:function(a){throw H.f(H.a1())},
a9:function(a,b){P.ap(b,"count")
return this}}
H.c3.prototype={
j:function(){return!1},
gl:function(){throw H.f(H.a1())},
$iI:1}
H.aF.prototype={
gm:function(a){return J.y(this.a)},
U:function(a,b){var s=this.a,r=J.a6(s)
return r.U(s,r.gm(s)-1-b)}}
H.cM.prototype={}
H.db.prototype={
k:function(a){var s="<"+C.a.ec([H.kv(this.$ti.c)],", ")+">"
return this.a.k(0)+" with "+s}}
H.aS.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.kD(H.iu(this.a),this.$ti)}}
H.eO.prototype={
ac:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.cg.prototype={
k:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dg.prototype={
k:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.dy.prototype={
k:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.eD.prototype={
k:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.c4.prototype={}
H.cF.prototype={
k:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaV:1}
H.ah.prototype={
k:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.iK(r==null?"unknown":r)+"'"},
$ibb:1,
ghH:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dt.prototype={}
H.dr.prototype={
k:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.iK(s)+"'"}}
H.bm.prototype={
I:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bm))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gt:function(a){var s,r=this.c
if(r==null)s=H.aw(this.a)
else s=typeof r!=="object"?J.bG(r):H.aw(r)
return(s^H.aw(this.b))>>>0},
k:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.r(this.d)+"' of "+("Instance of '"+H.eI(t.K.a(s))+"'")}}
H.dl.prototype={
k:function(a){return"RuntimeError: "+this.a}}
H.dA.prototype={
k:function(a){return"Assertion failed: "+P.d7(this.a)}}
H.c7.prototype={
gm:function(a){return this.a},
ged:function(){return new H.c9(this,H.D(this).h("c9<1>"))},
dO:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.fv(s,a)}else return this.he(a)},
he:function(a){var s=this.d
if(s==null)return!1
return this.ct(this.c5(s,C.e.gt(a)&0x3ffffff),a)>=0},
n:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bc(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bc(p,b)
q=r==null?n:r.b
return q}else return o.hf(b)},
hf:function(a){var s,r,q=this.d
if(q==null)return null
s=this.c5(q,J.bG(a)&0x3ffffff)
r=this.ct(s,a)
if(r<0)return null
return s[r].b},
J:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.D(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.dd(s==null?m.b=m.c6():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.dd(r==null?m.c=m.c6():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.c6()
p=J.bG(b)&0x3ffffff
o=m.c5(q,p)
if(o==null)m.c8(q,p,[m.c0(b,c)])
else{n=m.ct(o,b)
if(n>=0)o[n].b=c
else o.push(m.c0(b,c))}}},
e7:function(a,b){var s,r,q=this
H.D(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.f(P.ai(q))
s=s.c}},
dd:function(a,b,c){var s,r=this,q=H.D(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bc(a,b)
if(s==null)r.c8(a,b,r.c0(b,c))
else s.b=c},
c0:function(a,b){var s=this,r=H.D(s),q=new H.eo(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
ct:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aR(a[r].a,b))return r
return-1},
k:function(a){return P.hR(this)},
bc:function(a,b){return a[b]},
c5:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fw:function(a,b){delete a[b]},
fv:function(a,b){return this.bc(a,b)!=null},
c6:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c8(r,s,r)
this.fw(r,s)
return r}}
H.eo.prototype={}
H.c9.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gA:function(a){var s=this.a,r=new H.ca(s,s.r,this.$ti.h("ca<1>"))
r.c=s.e
return r}}
H.ca.prototype={
gl:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.f(P.ai(q))
s=r.c
if(s==null){r.sde(null)
return!1}else{r.sde(s.a)
r.c=s.c
return!0}},
sde:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
H.fH.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.fI.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.fJ.prototype={
$1:function(a){return this.a(H.cO(a))},
$S:26}
H.df.prototype={
k:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
cs:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.fp(s)},
$ieH:1}
H.fp.prototype={}
H.aq.prototype={
h:function(a){return H.dO(v.typeUniverse,this,a)},
C:function(a){return H.jW(v.typeUniverse,this,a)}}
H.dG.prototype={}
H.dM.prototype={
k:function(a){return H.a5(this.a,null)}}
H.dF.prototype={
k:function(a){return this.a}}
H.cI.prototype={}
P.f4.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
P.f3.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:51}
P.f5.prototype={
$0:function(){this.a.$0()},
$S:8}
P.f6.prototype={
$0:function(){this.a.$0()},
$S:8}
P.fs.prototype={
fe:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bC(new P.ft(this,b),0),a)
else throw H.f(P.an("`setTimeout()` not found."))}}
P.ft.prototype={
$0:function(){this.b.$0()},
$S:0}
P.dB.prototype={
ce:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.dh(b)
else{s=r.a
if(q.h("ak<1>").b(b))s.dj(b)
else s.c2(q.c.a(b))}},
dN:function(a,b){var s=this.a
if(this.b)s.aL(a,b)
else s.fs(a,b)}}
P.fv.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:44}
P.fw.prototype={
$2:function(a,b){this.a.$2(1,new H.c4(a,t.k.a(b)))},
$S:27}
P.fz.prototype={
$2:function(a,b){this.a(H.S(a),b)},
$S:40}
P.bx.prototype={
k:function(a){return"IterationMarker("+this.b+", "+H.r(this.a)+")"}}
P.by.prototype={
gl:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gl()},
j:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("I<1>");!0;){r=m.c
if(r!=null)if(r.j())return!0
else m.sdu(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.bx){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sdg(null)
return!1}if(0>=o.length)return H.o(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.u(r))
if(n instanceof P.by){r=m.d
if(r==null)r=m.d=[]
C.a.w(r,m.a)
m.a=n.a
continue}else{m.sdu(n)
continue}}}}else{m.sdg(q)
return!0}}return!1},
sdg:function(a){this.b=this.$ti.h("1?").a(a)},
sdu:function(a){this.c=this.$ti.h("I<1>?").a(a)},
$iI:1}
P.cH.prototype={
gA:function(a){return new P.by(this.a(),this.$ti.h("by<1>"))}}
P.bR.prototype={
k:function(a){return H.r(this.a)},
$iH:1,
gbU:function(){return this.b}}
P.dD.prototype={
dN:function(a,b){var s
H.hn(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.f(P.am("Future already completed"))
s.aL(a,b)}}
P.cG.prototype={
ce:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.f(P.am("Future already completed"))
s.dl(r.h("1/").a(b))}}
P.bi.prototype={
hl:function(a){if((this.c&15)!==6)return!0
return this.b.b.cG(t.al.a(this.d),a.a,t.cJ,t.K)},
h9:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.hu(s,p,a.b,r,q,t.k))
else return o.a(n.cG(t.bI.a(s),p,r,q))}}
P.P.prototype={
cJ:function(a,b,c){var s,r,q,p=this.$ti
p.C(c).h("1/(2)").a(a)
s=$.J
if(s!==C.h){c.h("@<0/>").C(p.c).h("1(2)").a(a)
if(b!=null)b=P.kg(b,s)}r=new P.P(s,c.h("P<0>"))
q=b==null?1:3
this.c1(new P.bi(r,q,a,b,p.h("@<1>").C(c).h("bi<1,2>")))
return r},
er:function(a,b){return this.cJ(a,null,b)},
dA:function(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new P.P($.J,c.h("P<0>"))
this.c1(new P.bi(s,19,a,b,r.h("@<1>").C(c).h("bi<1,2>")))
return s},
c1:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.d.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.c1(a)
return}r.a=q
r.c=s.c}P.bA(null,null,r.b,t.M.a(new P.fa(r,a)))}},
dv:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.d.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.dv(a)
return}m.a=s
m.c=n.c}l.a=m.bf(a)
P.bA(null,null,m.b,t.M.a(new P.fi(l,m)))}},
be:function(){var s=t.d.a(this.c)
this.c=null
return this.bf(s)},
bf:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
di:function(a){var s,r,q,p=this
p.a=1
try{a.cJ(new P.fe(p),new P.ff(p),t.P)}catch(q){s=H.b5(q)
r=H.b3(q)
P.kO(new P.fg(p,s,r))}},
dl:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("ak<1>").b(a))if(q.b(a))P.fd(a,r)
else r.di(a)
else{s=r.be()
q.c.a(a)
r.a=4
r.c=a
P.bw(r,s)}},
c2:function(a){var s,r=this
r.$ti.c.a(a)
s=r.be()
r.a=4
r.c=a
P.bw(r,s)},
aL:function(a,b){var s,r,q=this
t.k.a(b)
s=q.be()
r=P.e7(a,b)
q.a=8
q.c=r
P.bw(q,s)},
dh:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ak<1>").b(a)){this.dj(a)
return}this.ft(s.c.a(a))},
ft:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.bA(null,null,s.b,t.M.a(new P.fc(s,a)))},
dj:function(a){var s=this,r=s.$ti
r.h("ak<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.bA(null,null,s.b,t.M.a(new P.fh(s,a)))}else P.fd(a,s)
return}s.di(a)},
fs:function(a,b){this.a=1
P.bA(null,null,this.b,t.M.a(new P.fb(this,a,b)))},
$iak:1}
P.fa.prototype={
$0:function(){P.bw(this.a,this.b)},
$S:0}
P.fi.prototype={
$0:function(){P.bw(this.b,this.a.a)},
$S:0}
P.fe.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.c2(p.$ti.c.a(a))}catch(q){s=H.b5(q)
r=H.b3(q)
p.aL(s,r)}},
$S:14}
P.ff.prototype={
$2:function(a,b){this.a.aL(t.K.a(a),t.k.a(b))},
$S:36}
P.fg.prototype={
$0:function(){this.a.aL(this.b,this.c)},
$S:0}
P.fc.prototype={
$0:function(){this.a.c2(this.b)},
$S:0}
P.fh.prototype={
$0:function(){P.fd(this.b,this.a)},
$S:0}
P.fb.prototype={
$0:function(){this.a.aL(this.b,this.c)},
$S:0}
P.fl.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.em(t.fO.a(q.d),t.z)}catch(p){s=H.b5(p)
r=H.b3(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=P.e7(s,r)
o.b=!0
return}if(l instanceof P.P&&l.a>=4){if(l.a===8){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(t.v.b(l)){n=m.b.a
q=m.a
q.c=l.er(new P.fm(n),t.z)
q.b=!1}},
$S:0}
P.fm.prototype={
$1:function(a){return this.a},
$S:31}
P.fk.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cG(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.b5(l)
r=H.b3(l)
q=this.a
q.c=P.e7(s,r)
q.b=!0}},
$S:0}
P.fj.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.hl(s)&&p.a.e!=null){p.c=p.a.h9(s)
p.b=!1}}catch(o){r=H.b5(o)
q=H.b3(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.e7(r,q)
n.b=!0}},
$S:0}
P.dC.prototype={}
P.cq.prototype={
gm:function(a){var s,r,q=this,p={},o=new P.P($.J,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.eL(p,q))
t.g5.a(new P.eM(p,o))
W.f7(q.a,q.b,r,!1,s.c)
return o}}
P.eL.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.eM.prototype={
$0:function(){this.b.dl(this.a.a)},
$S:0}
P.cr.prototype={}
P.dK.prototype={}
P.cL.prototype={$ii1:1}
P.fy.prototype={
$0:function(){var s=t.K.a(H.f(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
P.dJ.prototype={
hv:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.h===$.J){a.$0()
return}P.im(p,p,this,a,t.aT)}catch(q){s=H.b5(q)
r=H.b3(q)
P.fx(p,p,this,t.K.a(s),t.k.a(r))}},
hw:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.h===$.J){a.$1(b)
return}P.io(p,p,this,a,b,t.aT,c)}catch(q){s=H.b5(q)
r=H.b3(q)
P.fx(p,p,this,t.K.a(s),t.k.a(r))}},
dL:function(a){return new P.fq(this,t.M.a(a))},
fU:function(a,b){return new P.fr(this,b.h("~(0)").a(a),b)},
em:function(a,b){b.h("0()").a(a)
if($.J===C.h)return a.$0()
return P.im(null,null,this,a,b)},
cG:function(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.J===C.h)return a.$1(b)
return P.io(null,null,this,a,b,c,d)},
hu:function(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.J===C.h)return a.$2(b,c)
return P.kh(null,null,this,a,b,c,d,e,f)},
ek:function(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
P.fq.prototype={
$0:function(){return this.a.hv(this.b)},
$S:0}
P.fr.prototype={
$1:function(a){var s=this.c
return this.a.hw(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.aJ.prototype={
fC:function(){return new P.aJ(H.D(this).h("aJ<1>"))},
gA:function(a){var s=this,r=new P.bj(s,s.r,H.D(s).h("bj<1>"))
r.c=s.e
return r},
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gaO:function(a){return this.a!==0},
aa:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.fu(b)},
fu:function(a){var s=this.d
if(s==null)return!1
return this.dq(s[this.dm(a)],a)>=0},
gZ:function(a){var s=this.e
if(s==null)throw H.f(P.am("No elements"))
return H.D(this).c.a(s.a)},
ga_:function(a){var s=this.f
if(s==null)throw H.f(P.am("No elements"))
return H.D(this).c.a(s.a)},
w:function(a,b){var s,r,q=this
H.D(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.df(s==null?q.b=P.hb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.df(r==null?q.c=P.hb():r,b)}else return q.fo(b)},
fo:function(a){var s,r,q,p=this
H.D(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.hb()
r=p.dm(a)
q=s[r]
if(q==null)s[r]=[p.c7(a)]
else{if(p.dq(q,a)>=0)return!1
q.push(p.c7(a))}return!0},
df:function(a,b){H.D(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.c7(b)
return!0},
fB:function(){this.r=this.r+1&1073741823},
c7:function(a){var s,r=this,q=new P.dH(H.D(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.fB()
return q},
dm:function(a){return J.bG(a)&1073741823},
dq:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aR(a[r].a,b))return r
return-1}}
P.dH.prototype={}
P.bj.prototype={
gl:function(){return this.$ti.c.a(this.d)},
j:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.f(P.ai(q))
else if(r==null){s.sdk(null)
return!1}else{s.sdk(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sdk:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
P.c5.prototype={}
P.a3.prototype={
gA:function(a){var s=this
return new H.a2(s,s.gm(s),s.$ti.h("a2<a3.E>"))},
U:function(a,b){return this.$ti.Q[1].a(J.M(this.a,b))},
gV:function(a){return J.y(this.a)===0},
gaO:function(a){return J.y(this.a)!==0},
gZ:function(a){var s=this.a,r=J.a6(s)
if(r.gm(s)===0)throw H.f(H.a1())
return this.$ti.Q[1].a(r.n(s,0))},
ga_:function(a){var s=this.a,r=J.a6(s)
if(r.gm(s)===0)throw H.f(H.a1())
return this.$ti.Q[1].a(r.n(s,r.gm(s)-1))},
bo:function(a,b){var s,r,q,p,o=this.$ti
o.h("F(a3.E)").a(b)
s=this.a
r=J.a6(s)
q=r.gm(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.cT(b.$1(o.a(r.n(s,p)))))return!1
if(q!==r.gm(s))throw H.f(P.ai(this))}return!0},
cw:function(a,b,c){var s=this.$ti
return new H.L(this,s.C(c).h("1(a3.E)").a(b),s.h("@<a3.E>").C(c).h("L<1,2>"))},
a9:function(a,b){return H.bt(this,b,null,this.$ti.h("a3.E"))},
F:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("n<a3.E>").a(b)
s=this.a
r=J.a6(s)
q=r.gm(s)
for(p=J.u(b),o=n.Q[1],n=n.c;p.j();){r.w(s,n.a(o.a(p.gl())));++q}},
bO:function(a,b,c){P.ck(b,c,J.y(this.a))
return H.bt(this,b,c,this.$ti.h("a3.E"))},
k:function(a){return P.h2(this,"[","]")}}
P.cc.prototype={}
P.er.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.r(a)
r.a=s+": "
r.a+=H.r(b)},
$S:30}
P.bq.prototype={
e7:function(a,b){var s,r,q=H.D(this)
q.h("~(1,2)").a(b)
for(s=this.ged(),s=s.gA(s),q=q.Q[1];s.j();){r=s.gl()
b.$2(r,q.a(this.n(0,r)))}},
gm:function(a){var s=this.ged()
return s.gm(s)},
k:function(a){return P.hR(this)},
$icb:1}
P.cn.prototype={
gV:function(a){return this.a===0},
gaO:function(a){return this.a!==0},
k:function(a){return P.h2(this,"{","}")},
a9:function(a,b){return H.hW(this,b,H.D(this).c)},
gZ:function(a){var s=P.ha(this,this.r,H.D(this).c)
if(!s.j())throw H.f(H.a1())
return s.$ti.c.a(s.d)},
ga_:function(a){var s,r,q=P.ha(this,this.r,H.D(this).c)
if(!q.j())throw H.f(H.a1())
s=q.$ti.c
do r=s.a(q.d)
while(q.j())
return r}}
P.cE.prototype={
hh:function(a,b){var s,r,q,p=this,o=p.fC()
for(s=P.ha(p,p.r,H.D(p).c),r=s.$ti.c;s.j();){q=r.a(s.d)
if(b.aa(0,q))o.w(0,q)}return o},
$iG:1,
$in:1,
$icm:1}
P.cN.prototype={}
P.H.prototype={
gbU:function(){return H.b3(this.$thrownJsError)}}
P.bQ.prototype={
k:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.d7(s)
return"Assertion failed"}}
P.dw.prototype={}
P.dj.prototype={
k:function(a){return"Throw of null."}}
P.ay.prototype={
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
k:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc4()+o+m
if(!q.a)return l
s=q.gc3()
r=P.d7(q.b)
return l+s+": "+r}}
P.cj.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.r(q):""
else if(q==null)s=": Not greater than or equal to "+H.r(r)
else if(q>r)s=": Not in inclusive range "+H.r(r)+".."+H.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.r(r)
return s}}
P.da.prototype={
gc4:function(){return"RangeError"},
gc3:function(){if(H.S(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm:function(a){return this.f}}
P.dz.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dx.prototype={
k:function(a){var s="UnimplementedError: "+this.a
return s}}
P.bs.prototype={
k:function(a){return"Bad state: "+this.a}}
P.d4.prototype={
k:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d7(s)+"."}}
P.cp.prototype={
k:function(a){return"Stack Overflow"},
gbU:function(){return null},
$iH:1}
P.d6.prototype={
k:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f9.prototype={
k:function(a){return"Exception: "+this.a}}
P.ek.prototype={
k:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.N.eV(q,0,75)+"..."
return r+"\n"+q}}
P.n.prototype={
cw:function(a,b,c){var s=H.D(this)
return H.jp(this,s.C(c).h("1(n.E)").a(b),s.h("n.E"),c)},
bo:function(a,b){var s
H.D(this).h("F(n.E)").a(b)
for(s=this.gA(this);s.j();)if(!H.cT(b.$1(s.gl())))return!1
return!0},
ax:function(a,b){return P.j(this,b,H.D(this).h("n.E"))},
W:function(a){return this.ax(a,!0)},
gm:function(a){var s,r=this.gA(this)
for(s=0;r.j();)++s
return s},
gV:function(a){return!this.gA(this).j()},
gaO:function(a){return!this.gV(this)},
a9:function(a,b){return H.hW(this,b,H.D(this).h("n.E"))},
gZ:function(a){var s=this.gA(this)
if(!s.j())throw H.f(H.a1())
return s.gl()},
ga_:function(a){var s,r=this.gA(this)
if(!r.j())throw H.f(H.a1())
do s=r.gl()
while(r.j())
return s},
U:function(a,b){var s,r,q
P.ap(b,"index")
for(s=this.gA(this),r=0;s.j();){q=s.gl()
if(b===r)return q;++r}throw H.f(P.h1(b,this,"index",null,r))},
k:function(a){return P.ji(this,"(",")")}}
P.I.prototype={}
P.O.prototype={
gt:function(a){return P.C.prototype.gt.call(C.a2,this)},
k:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
I:function(a,b){return this===b},
gt:function(a){return H.aw(this)},
k:function(a){return"Instance of '"+H.eI(this)+"'"},
toString:function(){return this.k(this)}}
P.dL.prototype={
k:function(a){return""},
$iaV:1}
P.ds.prototype={
gm:function(a){return this.a.length},
k:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.m.prototype={}
W.cZ.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.d0.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.b8.prototype={
sha:function(a,b){a.height=b},
shB:function(a,b){a.width=b},
$ib8:1}
W.bV.prototype={
sbz:function(a,b){a.fillStyle=b},
sd7:function(a,b){a.strokeStyle=b},
$ibV:1}
W.av.prototype={
gm:function(a){return a.length}}
W.ef.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.bY.prototype={
k:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
s=r+H.r(s)+") "
r=a.width
r.toString
r=s+H.r(r)+" x "
s=a.height
s.toString
return r+H.r(s)},
I:function(a,b){var s,r
if(b==null)return!1
if(t.eU.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gt:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gt(p)
s=a.top
s.toString
s=C.d.gt(s)
r=a.width
r.toString
r=C.d.gt(r)
q=a.height
q.toString
return W.i5(p,s,r,C.d.gt(q))},
$ih8:1}
W.h.prototype={
k:function(a){var s=a.localName
s.toString
return s},
$ih:1}
W.i.prototype={$ii:1}
W.a0.prototype={
fq:function(a,b,c,d){return a.addEventListener(b,H.bC(t.B.a(c),1),!1)},
fE:function(a,b,c,d){return a.removeEventListener(b,H.bC(t.B.a(c),1),!1)},
$ia0:1}
W.d9.prototype={
gm:function(a){return a.length}}
W.ac.prototype={$iac:1}
W.a9.prototype={
k:function(a){var s=a.nodeValue
return s==null?this.f_(a):s}}
W.dn.prototype={
gm:function(a){return a.length}}
W.au.prototype={}
W.bv.prototype={
gfR:function(a){var s=new P.P($.J,t.dL),r=t.c4.a(new W.f2(new P.cG(s,t.g4)))
this.fA(a)
r=W.iq(r,t.H)
r.toString
this.fF(a,r)
return s},
fF:function(a,b){var s=a.requestAnimationFrame(H.bC(t.c4.a(b),1))
s.toString
return s},
fA:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.f2.prototype={
$1:function(a){this.a.ce(0,H.hg(a))},
$S:29}
W.cz.prototype={
k:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
s=r+H.r(s)+") "
r=a.width
r.toString
r=s+H.r(r)+" x "
s=a.height
s.toString
return r+H.r(s)},
I:function(a,b){var s,r
if(b==null)return!1
if(t.eU.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gt:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gt(p)
s=a.top
s.toString
s=C.d.gt(s)
r=a.width
r.toString
r=C.d.gt(r)
q=a.height
q.toString
return W.i5(p,s,r,C.d.gt(q))}}
W.h_.prototype={}
W.cB.prototype={}
W.dE.prototype={}
W.cC.prototype={
fV:function(){var s,r=this,q=r.b
if(q==null)return $.hy()
s=r.d
if(s!=null)J.iZ(q,r.c,t.B.a(s),!1)
r.b=null
r.sfD(null)
return $.hy()},
sfD:function(a){this.d=t.B.a(a)}}
W.f8.prototype={
$1:function(a){return this.a.$1(t.aD.a(a))},
$S:19}
P.dI.prototype={
fd:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.e.at(a-s,k)
r=a>>>0
a=C.e.at(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.e.at(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.e.at(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.e.at(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.e.at(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.e.at(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bd()
l.bd()
l.bd()
l.bd()},
bd:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.e.at(o-n+(q-p)+(m-r),4294967296)>>>0},
$ijt:1}
P.be.prototype={
k:function(a){return"Point("+H.r(this.a)+", "+H.r(this.b)+")"},
I:function(a,b){if(b==null)return!1
return b instanceof P.be&&this.a===b.a&&this.b===b.b},
gt:function(a){var s=C.d.gt(this.a),r=C.d.gt(this.b),q=H.hY(H.hY(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.R.prototype={
gA:function(a){var s=this.$ti,r=J.q(this.a,new A.el(this),s.h("I<1>"))
return new A.cD(P.j(r,!1,r.$ti.h("E.E")),s.h("cD<1>"))}}
A.el.prototype={
$1:function(a){return J.u(this.a.$ti.h("n<1>").a(a))},
$S:function(){return this.a.$ti.h("I<1>(n<1>)")}}
A.cD.prototype={
j:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].j()){p.sdt(null)
return!1}if(r>4294967295)H.c(P.aE(r,0,4294967295,"length",null))
q=J.hM(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.o(o,s)
q[s]=o[s].gl()}p.sdt(q)
return!0},
gl:function(){var s=this.b
return s==null?H.c(P.am("No element")):s},
sdt:function(a){this.b=this.$ti.h("l<1>?").a(a)},
$iI:1}
X.Y.prototype={
gbV:function(){var s=this.x
return s==null?H.c(H.e("startingMobject")):s},
k:function(a){var s=this.r
return this.ap()+"("+s.gG(s)+", runTime: "+H.r(this.a)+"s)"},
ap:function(){var s=this.bY(0),r=P.h9("^Instance of '(.*?)'$").cs(s).b
if(1>=r.length)return H.o(r,1)
r=r[1]
r.toString
return r},
aW:function(){this.x=this.cg()
this.aZ(0)},
cr:function(){this.aZ(1)},
aX:function(a){},
cg:function(){return this.r.i()},
b5:function(){return H.a([this.r,this.gbV()],t.r)},
cO:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.b5(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)p.push(s[q].b8())
s=t.h
return P.j(new A.R(p,s),!0,s.h("n.E"))},
aJ:function(a){var s,r,q
for(s=this.ez(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].cM(a)},
ez:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.b5(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o.push(p)}return o},
aZ:function(a){a=Math.min(1,Math.max(a,0))
this.hg(this.b.$1(a))},
hg:function(a){var s,r,q,p,o,n=this.cO()
for(s=T.x(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){o=s[p]
this.cv(C.a.n(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.S(o)*q,0)))}},
cv:function(a,b){t.a.a(a)}}
G.d_.prototype={
gdF:function(){var s=this.z
return s==null?H.c(H.e("animationsTiming")):s},
geg:function(){var s=this.Q
return s==null?H.c(H.e("maxEndTime")):s},
f6:function(a,b,c,d,e){var s,r,q,p=H.a([],t.r)
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)p.push(s[q].r)
this.r.a0(t.a.a(T.iM(p,t.j)))
this.hc()},
b5:function(){return t.fh.a(this.r).gu()},
aW:function(){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].aW()},
cr:function(){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].cr()},
aX:function(a){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].aX(a)},
aJ:function(a){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].aJ(a)},
hc:function(){var s,r,q,p,o=this
o.sff(t.gp.a(o.eB()))
s=H.a([],t.n)
for(r=o.gdF(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].c)
o.Q=H.b0(C.a.bA(s,0,C.v,t.V))
if(o.a===0)o.a=o.geg()},
eB:function(){var s,r,q,p,o,n,m,l,k,j=H.a([],t.fZ)
for(s=this.y,r=s.length,q=t.cL,p=this.c,o=1-p,n=0,m=0;m<s.length;s.length===r||(0,H.d)(s),++m){l=s[m]
k=n+l.a
C.a.w(j,new S.aW(l,n,k,q))
n=n*o+k*p}return j},
aZ:function(a){var s,r,q,p,o,n,m,l=a*this.geg()
for(s=this.gdF(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.aZ(m)}},
sff:function(a){this.z=t.dh.a(a)}}
M.dq.prototype={
cv:function(a,b){var s,r
t.a.a(a)
s=J.af(a)
r=[0,b]
s.n(a,0).cB(s.n(a,1),r[0],r[1])}}
M.dp.prototype={}
E.d8.prototype={
dQ:function(){return this.r},
cg:function(){var s=this.eZ()
s.cj(1)
if(s instanceof V.B){s.ba(C.i)
s.d3(C.i,0)}return s}}
G.cu.prototype={
gcI:function(){var s=this.y
return s==null?H.c(H.e("targetMobject")):s},
gcH:function(){var s=this.z
return s==null?H.c(H.e("targetCopy")):s},
fc:function(a,b,c,d,e){if(e!=null)this.y=e
this.e9()},
e9:function(){if(this.cx!=null)return
this.shm(B.iE())},
aW:function(){var s=this
s.y=s.dQ()
s.z=s.gcI().i()
s.r.cb(s.gcH())
s.eX()},
dQ:function(){return this.gcI()},
aX:function(a){this.eY(a)},
b5:function(){var s=this
return H.a([s.r,s.gbV(),s.gcI(),s.gcH()],t.r)},
cO:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gbV(),this.gcH()],r=0;r<3;++r)q.push(s[r].b8())
s=t.h
return P.j(new A.R(q,s),!0,s.h("n.E"))},
cv:function(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.af(a)
r=s.n(a,0)
q=s.n(a,1)
s=s.n(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.b5.a(p)
n=p==null?B.iE():p
r.sT(t.y.a(n.$3(q.gp(q),s.gp(s),b)))
r.cu(q,s,b)},
shm:function(a){this.cx=t.b5.a(a)}}
R.ea.prototype={
ci:function(a){var s,r,q,p
t.a.a(a)
s=new R.eb()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.d)(a),++p)C.a.F(r,s.$1(a[p]))
return T.iM(r,t.j)},
cC:function(a){var s,r,q,p,o,n,m,l,k,j="renderer",i="ctx"
for(s=this.ci(t.a.a(a)),r=H.z(s).h("aF<1>"),s=new H.aF(s,r),s=new H.a2(s,s.gm(s),r.h("a2<E.E>")),q=this.r,r=r.h("E.E");s.j();){p=r.a(s.d)
if(p instanceof V.B){o=q.a;(o==null?H.c(H.e(j)):o).ho(p)}else{o=q.a
if(p instanceof M.bf){if(o==null)o=H.c(H.e(j))
n=o.e
if(n==null)n=H.c(H.e(i))
n.font="normal "+H.r(p.y/70)+"px "+p.z
n=o.d
if(n==null)n=H.c(H.e("display"))
m=p.a
l=n.aV(m)
n=o.e;(n==null?H.c(H.e(i)):n).save()
n=o.e
if(n==null)n=H.c(H.e(i))
C.n.sbz(n,l.aR())
n=o.e;(n==null?H.c(H.e(i)):n).scale(1,-1)
n=o.e;(n==null?H.c(H.e(i)):n).textBaseline="middle"
n=o.e;(n==null?H.c(H.e(i)):n).textAlign="center"
n=p.b6(0,C.d.a3(C.c.aB(0)))
m=p.b6(1,C.d.a3(C.c.aB(1)))
p.b6(2,C.d.a3(C.c.aB(2)))
k=o.e
if(k==null)k=H.c(H.e(i))
k.fillText(p.x,n,-m)
p=o.e;(p==null?H.c(H.e(i)):p).restore()}else if(o==null)H.c(H.e(j))}}},
es:function(a,b){t.y.a(b)
return!C.a.bo(b,new R.ec())?H.a([C.c],t.l):b}}
R.eb.prototype={
$1:function(a){return a.ad()},
$S:16}
R.ec.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
K.bJ.prototype={
gbF:function(){var s=this.a
return s==null?H.c(H.e("renderer")):s},
gL:function(){var s=this.b
return s==null?H.c(H.e("camera")):s},
aV:function(a){return a},
bL:function(a,b){var s,r,q=this
q.gL()
s=X.dS(a,0,1280,-q.gL().c/2,q.gL().c/2)
q.gL()
r=X.dS(b,720,0,-q.gL().d/2,q.gL().d/2)
q.gL()
return new Y.b(s,r,0).B(0,C.c)}}
K.cY.prototype={
bM:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gL()
p=X.dS(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gL()
return new Y.b(p,X.dS(a.b,q,r,0,720),0)},
cd:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new K.dU(s))
t.g5.a(null)
q=q.c
C.a.F(s.r,H.a([W.f7(r,"mousemove",o,!1,q),W.f7(r,"mousedown",p.a(new K.dV(s)),!1,q),W.f7(r,"mouseup",p.a(new K.dW(s)),!1,q)],t.db))},
hA:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].fV()}}
K.dU.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bM(new P.be(r,q,t.q))
q=s.bL(p.a,p.b)
s.ch=q
q.v(0,s.cx)
q=s.ch
$.bF().bn(new O.cf(q,C.x))
if(s.x){r=s.z=s.ch
s.y.v(0,r)
$.bF().bn(new O.aB(r,C.t))}},
$S:5}
K.dV.prototype={
$1:function(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bM(new P.be(r,q,t.q))
s.ch=s.bL(p.a,p.b)
q=a.button
q.toString
r=new O.ce(q)
r.bZ(q)
s.Q=r
r=s.ch
$.bF().bn(new O.aC(r,C.q))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new Y.b(q,o,r)
s.z=new Y.b(q,o,r)},
$S:5}
K.dW.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bM(new P.be(r,q,t.q))
s.ch=s.bL(p.a,p.b)
q=a.button
q.toString
r=new O.ce(q)
r.bZ(q)
s.Q=r
r=s.ch
$.bF().bn(new O.aD(r,C.r))
s.x=!1},
$S:5}
B.d2.prototype={}
M.br.prototype={
i:function(){return M.h7(this)},
fN:function(){var s,r,q,p=this,o=t.L,n=H.a([],o),m=p.e6?-1:1,l=p.by
l.toString
s=p.e3
s=T.fA(p.Y+m*s/2,l,s).ao(0)
l=s.length
r=p.e2
q=0
for(;q<s.length;s.length===l||(0,H.d)(s),++q)n.push(p.cX(s[q],r))
p.shx(n)
o=H.a([],o)
for(n=p.e4,l=n.length,r*=p.e5,q=0;q<n.length;n.length===l||(0,H.d)(n),++q)o.push(p.cX(n[q],r))
p.sfT(o)
o=p.cp
o.toString
o=P.j(o,!0,t.j)
n=p.cq
n.toString
C.a.F(o,n)
p.a0(t.a.a(o))},
cX:function(a,b){var s,r=this,q=null,p=C.y.q(0,b),o=N.hN(q,0,0,!1,C.m.q(0,b),q,!1,q,C.f,0,p,q,4)
o.cE(0,r.N().v(0,r.O()).aU())
o.b0(r.cz(a))
o.K(r.cQ())
o.ba(J.M(r.aC(),0))
p=J.ag(r.ae(!1))
s=r.x
o.d3(p,s)
return o},
cz:function(a){var s=this,r=X.dS(a,s.av,s.Y,0,1)
return V.dR(s.O(),s.N(),r,t.i)},
ei:function(a){var s,r=this,q=r.O(),p=r.N(),o=p.v(0,q),n=o.aA(0,Math.sqrt(o.a2()))
o=n.dV(a.v(0,q))
s=n.dV(p.v(0,q))
return V.dR(r.av,r.Y,o/s,t.V)},
shx:function(a){this.cp=t.f.a(a)},
sfT:function(a){this.cq=t.f.a(a)}}
M.eE.prototype={
$1:function(a){return t.F.a(a).i()},
$S:15}
M.eF.prototype={
$1:function(a){return t.F.a(a).i()},
$S:15}
M.d5.prototype={}
M.bS.prototype={
gay:function(){var s=this.bu
return s==null?H.c(H.e("xAxis")):s},
gaz:function(){var s=this.bv
return s==null?H.c(H.e("yAxis")):s},
f7:function(a,b,c,d,e,f,g,h){var s=this
s.bu=s.dP(e,d,s.bs.am(s.gdT()))
s.bv=s.dP(h,g,s.bt.am(s.gdU()))
s.gaz().cF(0,-1.5707963267948966,C.c,C.k)
s.bw=V.eQ(H.a([s.gay(),s.gaz()],t.U))
s.a0(t.a.a(H.a([s.gay(),s.gaz()],t.r)))
s.ah(s.bq)},
dP:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=C.a.a8(H.a([a6,this.br,this.gdS()],t.f_),new M.e8()),a3=a2.a
if(a3==null)a3=C.M
s=a2.e
if(s==null)s=1
r=a2.f
r=r!==!1
q=a2.r
if(q==null)q=0.1
p=a2.x
if(p==null)p=1
o=a2.y
n=a2.z
if(n==null)n=H.a([0],t.n)
m=a2.Q
l=a2.ch
k=a2.cx
if(k==null)k=2
j=a2.cy
if(j==null)j=0
i=a2.db
if(i==null)i=0.75
h=a2.d
if(h==null)h=C.y
g=a2.dx
if(g==null)g=0.25
f=a2.b
f=f!==!1
e=a2.dy
if(e==null)e=0.25
d=a2.fr
if(d==null)d=0.25
c=a2.fx
b=a2.c
a=a2.fy
if(a==null)a=4
a0=N.as(a1,0,C.b,a1,0)
q=new M.br(a4,a5,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,a1,a1,0,a1,C.l,C.H,0.35,C.k,a0,a1,a1,a,0,0,C.f,!1,0.01,!1,0.000001,4,a1,a1,a1,C.b,a1,a1,a1,a1,a1)
q.a4(C.b,a1,a1)
q.as(a1,0,!1,a3,!1,0.01,C.f,0,a3,a,0.000001)
q.K(C.b)
d=Math.max(e,d)
q.r1=d
if(f)q.Y=q.Y+d/2
q.M=C.l.q(0,s).q(0,a4)
a3=C.l.q(0,s).q(0,q.Y)
q.P=a3
q.b2(q.M,a3)
q.ah(q.cz(j).q(0,-1))
if(q.by==null)q.by=p*C.d.dM(a4/p)
if(f)q.fO(q.r1)
if(r)q.fN()
return q},
aH:function(a){var s,r,q,p,o,n="getStart",m=this.gay().cz(0),l=new Y.b(m.a,m.b,m.c),k=H.a([a.a,a.b,a.c],t.n),j=this.bw
k=new A.R(H.a([k,(j==null?H.c(H.e("axes")):j).gu()],t.D),t.m)
k=k.gA(k)
j=t.f4
for(;k.j();){s=k.b
if(s==null)s=H.c(P.am("No element"))
if(1>=s.length)return H.o(s,1)
r=j.a(s[1])
q=r.av
p=(H.b0(s[0])-q)/(r.Y-q)+0
q=r.ry
if(q!=null){q.an(n)
q=q.r
q=J.ag(q==null?H.c(H.e("points")):q)}else q=r.bX()
o=r.x1
if(o!=null){o.an(n)
o=o.r
o=J.ag(o==null?H.c(H.e("points")):o)}else o=r.bW()
l=l.B(0,q.q(0,1-p).B(0,o.q(0,p)).v(0,m))}return l},
eh:function(a){return new Y.b(this.gay().ei(a),this.gaz().ei(a),0)},
d9:function(a){var s=this
s.bu=M.h7(a.gay())
s.bv=M.h7(a.gaz())
s.bw=V.eQ(H.a([s.gay(),s.gaz()],t.U))},
i:function(){return M.j5(this)},
gdS:function(){return C.A},
gdT:function(){return C.j},
gdU:function(){return C.z}}
M.e8.prototype={
$2:function(a,b){var s=t.dK
return s.a(a).am(s.a(b))},
$S:20}
M.ch.prototype={
i:function(){return M.eG(this)},
gdJ:function(){var s=this.e_
return s==null?H.c(H.e("backgroundLines")):s},
gdW:function(){var s=this.e0
return s==null?H.c(H.e("fadedLines")):s},
hb:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.bp==null){s=h.ck
r=t.O
q=H.a([],r)
p=H.a([],r)
o=s.b
r=J.u(o==null?H.a([],r):o)
for(;r.j();){o=r.gl()
n=o.d
p.push(new K.v(o.a,o.b,o.c,n*0.5))}h.bp=new V.aX(q,p,s.c*0.5,s.d,s.e*0.5,0,C.c)}s=h.dZ
m=h.cT(h.gay(),h.gaz(),h.dX,s)
l=h.cT(h.gaz(),h.gay(),h.dY,s)
s=t.F
r=P.j(m[0],!0,s)
C.a.F(r,l[0])
s=P.j(m[1],!0,s)
C.a.F(s,l[1])
k=[r,s]
s=t.ds
h.sfm(s.a(k[0]))
h.sfn(s.a(k[1]))
j=V.eQ(h.gdJ())
j.bT(h.ck)
i=V.eQ(h.gdW())
s=h.bp
s.toString
i.bT(s)
h.fP(H.a([j,i],t.r))},
cT:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="getStart",d=a0.O(),c=N.hN(f,0,0,!1,a0.N(),f,!1,f,C.f,0,d,f,4),b=1+a3,a=1/b*a2
d=t.L
s=H.a([],d)
r=H.a([],d)
d=a1.av
q=[T.fA(a1.Y,0,a).ao(0),T.fA(d,0,-a).ao(0)]
for(p=t.V,o=0;o<2;++o)for(n=T.dQ(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,H.d)(n),++l){k=n[l]
j=N.hO(c)
i=(k.b-d)/(a1.Y-d)+0
h=a1.ry
if(h!=null){h.an(e)
h=h.r
h=J.ag(h==null?H.c(H.e("points")):h)}else h=a1.bX()
g=a1.x1
if(g!=null){g.an(e)
g=g.r
g=J.ag(g==null?H.c(H.e("points")):g)}else g=a1.bW()
j.ah(h.q(0,1-i).B(0,g.q(0,i)))
if(C.e.af(k.a,b)===0)C.a.w(s,j)
else C.a.w(r,j)}return H.a([s,r],t.gL)},
sfm:function(a){this.e_=t.f.a(a)},
sfn:function(a){this.e0=t.f.a(a)},
gdS:function(){return this.fX},
gdT:function(){return this.fY},
gdU:function(){return this.fZ}}
M.W.prototype={
am:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
if(b==null)b=a.a
s=c.e
if(s==null)s=a.e
r=c.f
if(r==null)r=a.f
q=c.r
if(q==null)q=a.r
p=c.x
if(p==null)p=a.x
o=c.z
if(o==null)o=a.z
n=c.Q
if(n==null)n=a.Q
m=c.cx
if(m==null)m=a.cx
l=c.cy
if(l==null)l=a.cy
k=c.db
if(k==null)k=a.db
j=c.d
if(j==null)j=a.d
i=c.dx
if(i==null)i=a.dx
h=c.b
if(h==null)h=a.b
g=c.dy
if(g==null)g=a.dy
f=c.fr
if(f==null)f=a.fr
e=c.c
if(e==null)e=a.c
d=c.fy
if(d==null)d=a.fy
return new M.W(b,h,e,j,s,r,q,p,a.y,o,n,a.ch,m,l,k,i,g,f,a.fx,d)}}
N.ct.prototype={
ex:function(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=C.i
if(b==null)r=null
else r=b
if(r==null)r=C.i
return N.as(C.i,this.e,s,r,this.c)},
hC:function(a){return this.ex(a,null)},
hD:function(a){return this.ex(null,a)}}
N.du.prototype={
k:function(a){return this.b}}
N.at.prototype={
i:function(){return N.jz(this)},
dC:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(a1==null)a1=b.cR()
s=b.cQ()
r=N.bg(b.rx)
q=r.a
q=q==null?a:J.b7(q)
if(q!==!1)r=r.hC(s.i())
q=r.b
q=q==null?a:J.b7(q)
if(q!==!1)r=r.hD(s.i())
p=Z.kL(3.141592653589793,C.k).ao(0)
q=p.length
if(0>=q)return H.o(p,0)
o=p[0]
if(1>=q)return H.o(p,1)
n=p[1]
if(2>=q)return H.o(p,2)
m=p[2]
if(3>=q)return H.o(p,3)
l=p[3]
q=n*0
k=m*0
j=l+q-k
i=l*0
h=o*0
g=i+m-h
f=i+h-n
h=-o
e=h-q-k
k=-m
q=-n
h=Z.ku(3,new Y.b(j*l+e*h+g*k-f*q,g*l+e*q+f*h-j*k,f*l+e*k+j*q-g*h))
d=new N.bP(0,0,0,C.f,!1,0.01,!1,0.000001,4,a,a,a,C.b,a,a,a,a,a)
d.a4(C.b,a,a)
d.as(a,0,!1,a,!1,0.01,C.f,0,a,0,0.000001)
d.fa(h,a,0,!1,a,!1,C.f,0,a,0)
d.cE(0,3.141592653589793)
d.el(a1,0,C.c,a,!0)
d.el(a1,1,C.c,a,!0)
d.ee(b)
d.bT(r)
q=a0===C.E
c=q?b.O():b.N()
d.cE(0,-(q?J.M(b.gp(b),1):J.M(b.gp(b),J.y(b.gp(b))-2)).v(0,c).aU()-J.ag(d.gp(d)).v(0,d.cA(0.5)).aU()-3.141592653589793)
d.ah(c.v(0,J.ag(d.gp(d))))
b.hq(d,a0)
if(q)b.ry=d
else b.x1=d
b.a0(t.a.a(H.a([d],t.r)))
return d},
ca:function(a){return this.dC(a,null)},
fO:function(a){return this.dC(C.F,a)},
hq:function(a,b){var s=this
if(Math.sqrt(s.O().v(0,s.N()).a2())===0)return
if(b===C.E)s.b2(a.cA(0.5),s.N())
else s.b2(s.O(),a.cA(0.5))},
aE:function(a,b){this.d2(a,!1)
this.cZ(C.i,!1)
this.f5(a,!0)},
K:function(a){return this.aE(a,!0)},
cR:function(){return this.r1},
N:function(){var s=this.x1
if(s!=null){s.an("getStart")
s=J.ag(s.gp(s))}else s=this.bW()
return s},
O:function(){var s=this.ry
if(s!=null){s.an("getStart")
s=J.ag(s.gp(s))}else s=this.bX()
return s},
hn:function(){var s,r,q,p=this,o=p.ry
if(o!=null){p.ca(C.E)
s=p.ry
s.toString
r=H.a([],t.l)
for(s=J.u(s.gp(s));s.j();){q=s.gl()
r.push(new Y.b(q.a,q.b,q.c))}o.sT(t.y.a(r))
p.bE(0,H.a([o],t.r))
p.ry=o}o=p.x1
if(o!=null){p.ca(C.F)
s=p.x1
s.toString
r=H.a([],t.l)
for(s=J.u(s.gp(s));s.j();){q=s.gl()
r.push(new Y.b(q.a,q.b,q.c))}o.sT(t.y.a(r))
p.bE(0,H.a([o],t.r))
p.x1=o}}}
N.bL.prototype={
i:function(){return N.j1(this)},
b4:function(){var s=this
s.eK()
s.b9(0,s.M,C.c)
s.ah(s.P)},
eK:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.X,r=j.a1,q=j.aN,s=T.fP(q,r+s,s).ao(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.d)(s),++o){n=s[o]
h.push(C.l.q(0,Math.cos(n)).B(0,C.m.q(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.d)(h),++o){n=h[o]
s.push(new Y.b(-n.b,n.a,n.c))}p=H.a([],i)
for(m=T.x(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.d)(m),++o){k=m[o]
p.push(C.a.n(h,k).B(0,C.a.n(s,k).q(0,q)))}i=H.a([],i)
for(r=T.x(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.d)(r),++o){k=r[o]
i.push(C.a.n(h,k).v(0,C.a.n(s,k).q(0,q)))}s=t.i
j.cY(T.iL(h,s),p,i,T.hw(h,s))}}
N.bX.prototype={
i:function(){return N.j9(this)}}
N.bZ.prototype={
i:function(){return N.c_(this)}}
N.N.prototype={
i:function(){return N.hO(this)},
b4:function(){var s=this
s.d0(H.a([s.M,s.P],t.l))
s.fK()},
fK:function(){var s,r,q=this,p=q.X
if(p===0)return
s=Math.sqrt(q.O().v(0,q.N()).a2())
if(s<2*p)return
r=p/s
q.cB(q,r,1-r)},
b2:function(a,b){var s=this
if(s.O().I(0,s.N())){s.M=a
s.P=b
s.b4()}return s.f2(a,b)}}
N.bN.prototype={
gea:function(){var s=this.bx
return s==null?H.c(H.e("initialStrokeWidth")):s},
aK:function(a,b,c,d){var s=this
if(Math.sqrt(s.O().v(0,s.N()).a2())===0)return
s.f3(0,b,c,d)
s.d4()
s.hn()},
b9:function(a,b,c){return this.aK(a,b,C.c,c)},
cR:function(){var s=this
return Math.min(s.r1,s.av*Math.sqrt(s.O().v(0,s.N()).a2()))},
d4:function(){var s=this
return s.eQ(!1,Math.min(s.gea(),s.Y*Math.sqrt(s.O().v(0,s.N()).a2())))},
i:function(){return N.j3(this)}}
N.ci.prototype={
fa:function(a,b,c,d,e,f,g,h,i,j){var s=P.j(a,!0,t.i)
s.push(C.a.gZ(a))
this.d0(s)},
i:function(){return N.jr(this)}}
N.cl.prototype={
i:function(){return N.jv(this)}}
N.cv.prototype={
i:function(){return N.jA(this)}}
N.bP.prototype={
i:function(){return N.a7(this)}}
M.bf.prototype={
i:function(){return M.jy(this)},
aK:function(a,b,c,d){this.y*=b},
b9:function(a,b,c){return this.aK(a,b,C.c,c)}}
R.dc.prototype={
f9:function(a){this.a0(t.a.a(H.a([this.x],t.r)))
this.cd()},
c9:function(a,b,c,d){var s,r
H.fD(d,t.e,"IEvent","addEventListener")
s=new O.X(d.h("F(0)").a(c),b,d.h("X<0>"))
r=$.bF()
t.gc.a(s)
r=r.gaI().n(0,b)
r.toString
C.a.w(r,s)
return s}}
R.c0.prototype={
cd:function(){var s=this
s.sfh(t.gl.a(s.c9(0,C.t,new R.eg(s),t.u)))
s.sfi(t.c3.a(s.c9(0,C.q,new R.eh(s),t.N)))
s.sfj(t.eL.a(s.c9(0,C.r,new R.ei(s),t.I)))},
i:function(){return R.jf(this)},
sfh:function(a){this.dx=t.g7.a(a)},
sfi:function(a){this.dy=t.em.a(a)},
sfj:function(a){this.fr=t.ga.a(a)}}
R.eg.prototype={
$1:function(a){var s
t.u.a(a)
s=this.a
if(s.fx){s.x.b0(a.c)
return!0}return!1},
$S:21}
R.eh.prototype={
$1:function(a){var s,r=this.a,q=r.x,p=t.N.a(a).c,o=p.a
if(o>=q.S(C.H).a-0.1)if(o<=q.S(C.l).a+0.1){o=p.b
o=o>=q.S(C.y).b-0.1&&o<=q.S(C.m).b+0.1
s=o}else s=!1
else s=!1
if(s){r.fx=!0
q.b0(p)
return!0}return!1},
$S:22}
R.ei.prototype={
$1:function(a){t.I.a(a)
return this.a.fx=!1},
$S:23}
M.p.prototype={
gE:function(a){var s=this.a
return s},
gG:function(a){var s=this.b
return s==null?H.c(H.e("name")):s},
gu:function(){var s=this.d
return s==null?H.c(H.e("submobjects")):s},
gew:function(){var s=this.e
if(s==null){s=H.a([],t.eM)
this.sfl(s)}return s},
gH:function(){var s=this.f
return s==null?H.c(H.e("updatingSuspended")):s},
gp:function(a){var s=this.r
return s==null?H.c(H.e("points")):s},
a4:function(a,b,c){var s=this,r=s.ap()
s.b=r
s.saF(t.a.a(H.a([],t.r)))
s.f=!1
s.sT(t.y.a(H.a([],t.l)))
s.b4()
s.e8()},
k:function(a){return this.ap()},
ap:function(){var s=this.bY(0),r=P.h9("^Instance of '(.*?)'$").cs(s).b
if(1>=r.length)return H.o(r,1)
r=r[1]
r.toString
return r},
e8:function(){},
b4:function(){},
a0:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.aa(a,this))throw H.f("Mobject can't contain itself")
s=P.j(a,!0,t.j)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
if(!C.a.aa(a,o))s.push(o)}this.saF(n.a(s))},
fP:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.aa(a,this))throw H.f("Mobject can't contain itself")
s=H.a([],t.r)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
if(!C.a.aa(a,o))s.push(o)}C.a.F(s,a)
this.saF(n.a(s))},
bE:function(a,b){var s,r,q,p,o,n=t.a
n.a(b)
s=H.a([],t.r)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
if(!C.a.aa(b,o))s.push(o)}this.saF(n.a(s))},
bh:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.S(a)
for(s=this.b8(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.u(l==null?H.c(H.e("points")):l)
for(;l.j();)m.push(J.fX(c.$1(l.gl().v(0,b)),b))
n.sT(q.a(m))}},
dH:function(a){return this.bh(C.c,null,a)},
i:function(){return M.jq(this)},
ev:function(a,b){var s,r,q,p=this
if(p.gH())return
for(s=p.gew(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].$2(p,a)
for(s=p.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].ev(a,!0)},
cM:function(a){return this.ev(a,!0)},
bg:function(a){t.he.a(a)
C.a.w(this.gew(),a)
this.cM(0)},
ah:function(a){return this.dH(new M.eB(a))},
aK:function(a,b,c,d){return this.bh(c,d,new M.eA(b))},
b9:function(a,b,c){return this.aK(a,b,C.c,c)},
cF:function(a,b,c,d){this.bh(C.c,c,new M.ez(Z.kN(b,d).geu()))},
cE:function(a,b){return this.cF(a,b,null,C.k)},
ht:function(a,b,c){return this.cF(a,b,c,C.k)},
eU:function(a,b,c,d){return this.bh(c,d,new M.eC(b,a))},
dG:function(a){var s={},r=Z.d1(3)
s.a=r
s.a=r.aP(0,new M.ev(a))
this.dH(new M.ew(s))},
bB:function(a,b,c){this.ah(a.S(C.c.B(0,c)).v(0,this.S(C.c.v(0,c))).B(0,c.q(0,b)).q(0,C.a9))
return null},
el:function(a,b,c,d,e){var s=this.hj(b)
if(s===0)return
this.eU(a/s,b,c,d)},
b0:function(a){this.ah(a.v(0,this.S(C.c)).q(0,new Y.b(1,1,1)))},
b2:function(a,b){var s,r=this,q=r.O(),p=r.N(),o=p.v(0,q)
if(q.I(0,p))throw H.f("Cannot position endpoints of a closed loop")
s=b.v(0,a)
r.b9(0,Math.sqrt(s.a2())/Math.sqrt(o.a2()),q)
r.ht(0,s.aU()-o.aU(),q)
r.ah(a.v(0,q))},
aE:function(a,b){var s,r,q
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].aE(a,!0)
this.a=a},
K:function(a){return this.aE(a,!0)},
aY:function(a,b){var s,r,q
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].aY(a,!0)},
cj:function(a){return this.aY(a,!0)},
ad:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)C.a.F(o,s[q].ad())
p=P.h6(o,t.j)
return P.j(p,!0,H.D(p).c)},
b8:function(){var s=this.ad(),r=H.z(s),q=r.h("bh<1>")
return P.j(new H.bh(s,r.h("F(1)").a(new M.ex()),q),!0,q.h("n.E"))},
cP:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.b8(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q].r
C.a.F(o,p==null?H.c(H.e("points")):p)}return o},
bN:function(){return this.cP()},
b7:function(a,b,c){var s,r,q
t.bG.a(c)
if(c==null)c=this.bN()
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.d)(c),++q)s.push(c[q].aB(a))
if(b<0)return C.a.a8(s,C.B)
else if(b===0)return(C.a.a8(s,C.B)+C.a.a8(s,C.v))/2
else return C.a.a8(s,C.v)},
b6:function(a,b){return this.b7(a,b,null)},
S:function(a){var s=this,r=s.bN()
if(r.length===0)return C.c
return new Y.b(s.b7(0,C.d.a3(a.a),r),s.b7(1,C.d.a3(a.b),r),s.b7(2,C.d.a3(a.c),r))},
hj:function(a){var s=this.cP(),r=H.z(s),q=new H.L(s,r.h("k(1)").a(new M.ey(a)),r.h("L<1,k>")),p=q.a8(0,C.B)
return q.a8(0,C.v)-p},
bK:function(a,b){return this.b6(a,C.d.a3(C.c.aB(a)))},
cV:function(){return new Y.b(this.bK(0,null),this.bK(1,null),this.bK(2,null))},
O:function(){this.an("getStart")
return J.ag(this.gp(this))},
N:function(){this.an("getEnd")
return J.bI(this.gp(this))},
gm:function(a){return this.bb(0).length},
bb:function(a){var s=this,r=H.a([],t.r)
if(J.bH(s.gp(s)))r.push(s)
C.a.F(r,s.gu())
return r},
cb:function(a){var s,r,q,p,o,n,m=this
if(J.b7(m.gp(m))&&J.bH(a.gp(a)))a.ej()
if(J.b7(a.gp(a))&&J.bH(m.gp(m)))m.ej()
s=m.bb(0).length
r=a.bb(0).length
m.dB(Math.max(0,r-s))
a.dB(Math.max(0,s-r))
m.dD(a)
for(q=new A.R(H.a([m.gu(),a.gu()],t.Z),t.h),q=q.gA(q);q.j();){p=q.b
if(p==null)p=H.c(P.am("No element"))
o=p.length
if(0>=o)return H.o(p,0)
n=p[0]
if(1>=o)return H.o(p,1)
n.cb(p[1])}},
cU:function(){throw H.f("getPointMobject not implemented for "+H.r(this.geE())+"()")},
dD:function(a){var s=this,r=J.y(s.gp(s)),q=J.y(a.gp(a))
if(r<q)s.dE(a)
else if(r>q)a.dE(s)},
dE:function(a){throw H.f("Not implemented")},
ej:function(){var s=this.i(),r=t.r,q=t.a
s.saF(q.a(H.a([],r)))
this.sT(t.y.a(H.a([],t.l)))
this.a0(q.a(H.a([s],r)))},
dB:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.bb(0).length
if(s===0){r=H.a([],t.r)
for(q=T.x(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.d)(q),++o)r.push(a1.cU())
a1.saF(t.a.a(r))}n=s+a2
r=t.X
q=H.a([],r)
for(p=T.x(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.d)(p),++o){l=p[o]
if(typeof l!=="number")return l.q()
q.push(C.d.ar(l*s,n))}p=H.a([],r)
for(m=T.x(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.d)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.b2(i),e=0;e<q.length;q.length===g||(0,H.d)(q),++e)if(f.I(i,q[e]))h.push(1)
else h.push(0)
p.push(T.hv(h,j))}d=H.a([],t.r)
for(r=new A.R(H.a([a1.gu(),p],t.D),t.m),r=r.gA(r),q=t.j;r.j();){c=r.b
if(c==null)c=H.c(P.am("No element"))
p=c.length
if(0>=p)return H.o(c,0)
b=q.a(c[0])
if(1>=p)return H.o(c,1)
a=H.S(c[1])
C.a.w(d,b)
for(p=T.x(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.d)(p),++o){a0=b.i()
a0.cj(1)
C.a.w(d,a0)}}a1.saF(t.a.a(d))},
cu:function(a,b,c){},
cB:function(a,b,c){},
cc:function(a){var s,r,q,p,o,n,m
this.cb(a)
for(s=new A.R(H.a([this.ad(),a.ad()],t.Z),t.h),s=s.gA(s),r=t.i,q=t.y;s.j();){p=s.b
if(p==null)p=H.c(P.am("No element"))
o=p.length
if(0>=o)return H.o(p,0)
n=p[0]
if(1>=o)return H.o(p,1)
m=p[1]
o=m.r
n.sT(q.a(P.j(o==null?H.c(H.e("points")):o,!0,r)))
n.cu(n,m,1)}},
an:function(a){var s
if(J.bH(this.gp(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.f(s)},
saF:function(a){this.d=t.hh.a(a)},
sfl:function(a){this.e=t.cI.a(a)},
sT:function(a){this.r=t.bG.a(a)}}
M.eB.prototype={
$1:function(a){return a.B(0,this.a)},
$S:2}
M.eA.prototype={
$1:function(a){return a.q(0,this.a)},
$S:2}
M.ez.prototype={
$1:function(a){return a.ab(this.a)},
$S:2}
M.eC.prototype={
$1:function(a){var s=this.a
return a.hE(s,a.aB(s)*this.b)},
$S:2}
M.ev.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gD(r).a
if(typeof s!=="number")return s.bI()
if(typeof q!=="number")return H.bk(q)
if(s<q){s=b.b
q=r.gD(r).b
if(typeof s!=="number")return s.bI()
if(typeof q!=="number")return H.bk(q)
q=s>=q
s=q}else s=!0
return s?a:r.aq(b)},
$S:1}
M.ew.prototype={
$1:function(a){return a.ab(this.a.a)},
$S:2}
M.ex.prototype={
$1:function(a){t.j.a(a)
return J.y(a.gp(a))>0},
$S:4}
M.ey.prototype={
$1:function(a){return t.i.a(a).aB(this.a)},
$S:28}
M.bo.prototype={
i:function(){return M.jh(this)}}
V.B.prototype={
as:function(a,b,c,d,e,f,g,h,i,j,k){if(d!=null)this.saw(H.a([d],t.O))
if(i!=null)this.sai(H.a([i],t.O))
if(a!=null)this.saG(H.a([a],t.O))},
i:function(){return V.jC(this)},
e8:function(){var s=this,r=s.dy
s.eJ(r==null?H.a([s.gE(s)],t.O):r)
r=s.fr
if(r==null)r=H.a([s.gE(s)],t.O)
s.eP(r,s.x)
s.eI(s.fx,s.y)
r=s.z
s.eM(s.Q,r)},
aS:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.F(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.bP(),p=q.length,o=0;o<q.length;q.length===p||(0,H.d)(q),++o)q[o].d_(r,!1)
if(r.length!==0){if(n.dy==null)n.saw(r)
q=n.dy
q.toString
q=J.y(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.saw(T.bl(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.y(q)){q=n.dy
q.toString
n.saw(T.bl(r,J.y(q),t.G))}}s=H.a([],s)
q=n.dy
q.toString
q=T.x(J.y(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.d)(q),++o)s.push(C.a.n(r,q[o]))
n.saw(s)}},
cZ:function(a,b){return this.aS(a,null,b)},
d_:function(a,b){return this.aS(null,a,b)},
eJ:function(a){return this.aS(null,a,!0)},
ba:function(a){return this.aS(a,null,!0)},
ag:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.F(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.bP(),p=q.length,o=0;o<q.length;q.length===p||(0,H.d)(q),++o)q[o].eR(a,r,!1,e)
if(r.length!==0)if(a){if(n.fx==null)n.saG(r)
q=n.fx
q.toString
q=J.y(q)
p=r.length
if(q<p){q=n.fx
q.toString
n.saG(T.bl(q,p,t.G))}else{q=n.fx
q.toString
if(p<J.y(q)){q=n.fx
q.toString
n.saG(T.bl(r,J.y(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.x(J.y(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.d)(q),++o)s.push(C.a.n(r,q[o]))
n.sai(s)}else{if(n.fr==null)n.sai(r)
q=n.fr
q.toString
q=J.y(q)
p=r.length
if(q<p){q=n.fr
q.toString
n.sai(T.bl(q,p,t.G))}else{q=n.fr
q.toString
if(p<J.y(q)){q=n.fr
q.toString
n.sai(T.bl(r,J.y(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.x(J.y(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.d)(q),++o)s.push(C.a.n(r,q[o]))
n.sai(s)}if(e!=null)if(a)n.y=e
else n.x=e},
d2:function(a,b){return this.ag(!1,a,null,b,null)},
eR:function(a,b,c,d){return this.ag(a,null,b,c,d)},
bS:function(a,b){return this.ag(!1,null,a,b,null)},
eP:function(a,b){return this.ag(!1,null,a,!0,b)},
eQ:function(a,b){return this.ag(!1,null,null,a,b)},
d3:function(a,b){return this.ag(!1,a,null,!0,b)},
eO:function(a){return this.ag(!1,null,null,!0,a)},
bQ:function(a,b,c,d){return this.ag(!0,a,t.x.a(b),c,d)},
eH:function(a,b){return this.bQ(null,a,b,null)},
eI:function(a,b){return this.bQ(null,a,!0,b)},
d5:function(a,b){var s=this,r=null,q=t.x,p=q.a(a.d),o=q.a(a.a)
q=q.a(a.b)
s.aS(r,o,b)
s.ag(!1,r,q,b,r)
s.bQ(r,p,b,r)
s.bR(a.r,a.f,b)
return r},
bT:function(a){return this.d5(a,!0)},
cQ:function(){var s=J.M(this.aC(),0)
return s},
aE:function(a,b){this.cZ(a,!0)
this.d2(a,!0)
this.f4(a,!0)},
ef:function(a,b){var s,r,q,p="removeWhere",o=a.aC(),n=a.aD(),m=a.x,l=a.ae(!0),k=a.y,j=a.z,i=a.Q
this.d5(new V.aX(o,n,m,l,k,j,new Y.b(i.a,i.b,i.c)),!1)
s=this.gu()
r=a.gu()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
o=H.z(s).h("F(1)").a(new V.f_())
if(!!s.fixed$length)H.c(P.an(p))
C.a.dw(s,o,!0)
o=H.z(r).h("F(1)").a(new V.f0())
if(!!r.fixed$length)H.c(P.an(p))
C.a.dw(r,o,!0)
for(o=t.j,o=T.kJ(s,r,o,o),o=P.eq([o.a,o.b],!1,t.z),o=new A.R(new H.a_(o,H.z(o).h("a_<1,l<B>>")),t.eX),o=o.gA(o);o.j();){q=o.b
if(q==null)q=H.c(P.am("No element"))
n=q.length
if(0>=n)return H.o(q,0)
m=q[0]
if(1>=n)return H.o(q,1)
m.ef(q[1],!0)}},
ee:function(a){return this.ef(a,!0)},
aY:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.u(p.aC());s.j();){r=s.gl()
q=r.d
m.push(new K.v(r.a,r.b,r.c,q*o))}p.d_(m,!0)
m=H.a([],n)
for(s=J.u(p.aD());s.j();){r=s.gl()
q=r.d
m.push(new K.v(r.a,r.b,r.c,q*o))}p.bS(m,!0)
n=H.a([],n)
for(m=J.u(p.ae(!0));m.j();){s=m.gl()
r=s.d
n.push(new K.v(s.a,s.b,s.c,r*o))}p.eH(n,!0)
p.f1(a,!0)},
cj:function(a){return this.aY(a,!0)},
aC:function(){var s=this.dy
return s==null?H.a([C.i],t.O):s},
ae:function(a){var s=a?this.fx:this.fr
return s==null||J.b7(s)?H.a([C.i],t.O):s},
aD:function(){return this.ae(!1)},
eN:function(a,b){this.Q=new Y.b(a.a,a.b,a.c)},
bR:function(a,b,c){var s,r,q,p,o=this
H.b0(b)
if(c){for(s=o.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
if(p instanceof V.B)p.bR(a,b,!0)}c=!0}o.z=b
if(a!=null)o.eN(a,!1)
if(b!==0){o.bS(o.aD(),c)
o.bS(o.aD(),c)}},
eM:function(a,b){return this.bR(a,b,!0)},
eC:function(){var s,r,q,p,o,n,m,l=this.Q,k=l.a,j=l.b
l=l.c
s=this.S(C.c)
r=H.a([],t.b)
for(q=[C.l,C.m,C.k],p=t.n,o=0;o<3;++o){n=this.S(q[o]).v(0,s)
r.push(H.a([n.a,n.b,n.c],p))}m=new Y.b(k,j,l).ab(Z.Z(null,r).geu())
return new S.A(s.v(0,m),s.B(0,m),t.hd)},
cY:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.dx
r=a.length
q=H.a([],t.l)
for(r=T.x(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.d)(r),++o)q.push(C.c)
g.sT(f.a(q))
n=H.a([a,b,c,d],t.Q)
for(f=T.x(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.d)(f),++o){m=f[o]
l=C.a.n(n,m)
p=g.r
for(p=T.dQ(T.x(J.y(p==null?H.c(H.e("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.d)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.c(H.e("points"))
J.hz(h,i.b,l[C.e.af(i.a,l.length)])}}},
fL:function(a){var s,r,q,p,o,n,m=this,l=m.dx,k=[]
for(s=T.fP(l,1,0).h8(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=m.r
k.push(J.bI(o==null?H.c(H.e("points")):o).q(0,1-p).B(0,a.q(0,p)))}s=k.length
if(1>=s)return H.o(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.o(k,2)
n=r.a(k[2])
if(3>=s)return H.o(k,3)
k=r.a(k[3])
m.an("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.e.af(J.y(m.gp(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.b6(m.gp(m),k)}else{k=r.a(H.a([J.bI(m.gp(m)),o,n,k],s))
J.b6(m.gp(m),k)}return null},
d0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=T.fP(this.dx,1,0).ao(0)
r=t.i
q=Z.dY(T.hw(a,r))
p=Z.dY(T.iL(a,r))
r=H.a([],t.aM)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.d)(s),++n){m=s[n]
r.push(p.q(0,1-m).B(0,q.q(0,m)))}o=H.a([],t.Q)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.d)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.d)(h),++f){e=h[f]
d=J.af(e)
i.push(new Y.b(d.n(e,0),d.n(e,1),d.n(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.o(o,0)
l=o[0]
if(1>=r)return H.o(o,1)
k=o[1]
if(2>=r)return H.o(o,2)
i=o[2]
if(3>=r)return H.o(o,3)
this.cY(l,k,i,o[3])},
cf:function(a,b){var s=this.db,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
fW:function(a,b){var s
if(!this.cf(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.db+0.00001*Math.abs(s))return!1
return!0},
bJ:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.ep(a,new V.eV(l,C.e.af(J.y(a),this.dx)),t.i)
l.a=P.j(s,!0,s.$ti.h("n.E"))
s=H.a([],t.dm)
for(r=T.x(J.y(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.d)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.B()
s.push(new S.bu(J.M(m,n+0),J.M(l.a,n+1),J.M(l.a,n+2),J.M(l.a,n+3),p))}return s},
ds:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.dx
r=T.x(a.length,s,s)
q=H.z(r)
q=P.j(new H.bh(r,q.h("F(1)").a(b),q.h("bh<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.X)
C.a.F(r,q)
p=H.a([],t.Q)
for(r=new A.R(H.a([r,q],t.eI),t.eN),r=r.gA(r),q=H.z(a),o=q.c,q=q.h("ar<1>");r.j();){n=r.b
if(n==null)n=H.c(P.am("No element"))
if(1>=n.length)return H.o(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.v()
if(typeof l!=="number")return H.bk(l)
if(m-l>=s){H.S(l)
H.S(m)
P.ck(l,m,a.length)
k=new H.ar(a,l,m,q)
k.c_(a,l,m,o)
p.push(k.W(0))}}return p},
cW:function(a){t.y.a(a)
return this.ds(a,new V.eX(this,a))},
eG:function(a){t.y.a(a)
return this.ds(a,new V.eW(this,a))},
cA:function(a){var s=this,r=s.dx,q=V.hs(0,C.e.ar(J.y(s.gp(s)),r),a),p=q.a
return V.hm(J.hB(s.gp(s),r*p,r*(p+1)).W(0)).$1(q.b)},
dr:function(a){var s=F.ep(this.gp(this),new V.eR(this,a),t.i)
return P.j(s,!0,s.$ti.h("n.E"))},
eA:function(){var s,r=this
if(J.y(r.gp(r))===1)return r.gp(r)
s=t.eR
s=A.hJ(P.j(new A.R(H.a([r.dr(0),r.dr(r.dx-1)],t.Q),s),!0,s.h("n.E")),t.i)
return P.j(s,!0,s.$ti.h("n.E"))},
bN:function(){var s,r,q,p=H.a([],t.l)
for(s=this.bP(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)C.a.F(p,s[q].eA())
return p},
dD:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.J.a(a2)
a0.fQ(a2)
if(J.y(a0.gp(a0))===J.y(a2.gp(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.b7(n==null?H.c(H.e(a1)):n)){n=q.a(H.a([o.S(C.c)],r))
m=o.r
J.b6(m==null?H.c(H.e(a1)):m,n)}n=o.r
if(C.e.af(J.y(n==null?H.c(H.e(a1)):n),o.dx)===1){n=o.r
o.fL(J.bI(n==null?H.c(H.e(a1)):n))}}s=t.i
l=a0.cW(P.j(a0.gp(a0),!0,s))
k=a2.cW(P.j(a2.gp(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.dx
f=new V.eU(g)
for(s=T.x(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.a6(c)
m=J.a6(d)
b=Math.max(0,C.e.ar(n.gm(c)-m.gm(d),g))
a=Math.max(0,C.e.ar(m.gm(d)-n.gm(c),g))
d=a0.eb(b,d)
c=a0.eb(a,c)
C.a.F(i,d)
C.a.F(h,c)}a0.sT(q.a(i))
a2.sT(q.a(h))},
eb:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=T.x(this.dx*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)C.a.F(s,a8)
return s}o=this.bJ(a8)
n=o.length
m=n+a7
s=t.X
r=H.a([],s)
for(q=T.x(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.d)(q),++p){k=q[p]
if(typeof k!=="number")return k.q()
r.push(C.d.ar(k*n,m))}q=H.a([],s)
for(l=T.x(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.d)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.b2(k),e=0;e<r.length;r.length===g||(0,H.d)(r),++e)h.push(f.I(k,r[e])?1:0)
q.push(T.hv(h,i))}d=H.a([],t.l)
for(s=new A.R(H.a([o,q],t.D),t.m),s=s.gA(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.j();){c=s.b
if(c==null)c=H.c(P.am(a6))
h=c.length
if(0>=h)return H.o(c,0)
b=i.a(c[0])
if(1>=h)return H.o(c,1)
a=T.fP(H.S(c[1])+1,1,0).ao(0)
for(h=new A.R(H.a([a,T.hw(a,r)],q),l),h=h.gA(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.j();){a2=h.b
if(a2==null)a2=H.c(P.am(a6))
a3=P.eq([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.o(a2,0)
a5=a2[0]
if(1>=a4)return H.o(a2,1)
C.a.F(d,V.fS(new H.a_(a3,H.z(a3).h("a_<1,b>")),a5,a2[1]))}}return d},
fQ:function(a){var s,r,q,p,o,n,m,l,k=new V.eS(),j=new V.eT()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.a6(o)
l=J.a6(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,T.bl(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,T.bl(o,l.gm(n),r))}},
cU:function(){var s=null,r=this.S(C.c),q=new V.cw(0.01,0.01,4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
q.a4(C.b,s,s)
q.as(s,0,!1,C.b,!1,0.01,C.f,0,C.b,4,0.000001)
q.sT(t.y.a(H.a([r],t.l)))
q.ee(this)
return q},
cu:function(a,b,c){var s,r=this,q=t.J
q.a(a)
q.a(b)
r.saw(V.ht(a.aC(),b.aC(),c))
r.sai(V.ht(a.aD(),b.aD(),c))
r.saG(V.ht(a.ae(!0),b.ae(!0),c))
q=t.V
r.sd8(V.fO(a.x,b.x,c,q))
r.sdK(V.fO(a.y,b.y,c,q))
r.seT(V.fO(a.Q,b.Q,c,t.i))
r.sd6(V.fO(a.z,b.z,c,q))
s=new V.eZ()
if(c===1){q=b.dy
r.saw(q!=null?s.$1(q):null)
q=b.fr
r.sai(q!=null?s.$1(q):null)
q=b.fx
r.saG(q!=null?s.$1(q):null)
r.sd8(b.x)
r.sdK(b.y)
q=b.Q
r.Q=new Y.b(q.a,q.b,q.c)
r.sd6(b.z)}},
cB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.J.a(a)
if(b<=0&&c>=1){e.sT(t.y.a(P.j(a.gp(a),!0,t.i)))
return}s=t.y
r=a.bJ(s.a(P.j(a.gp(a),!0,t.i)))
q=r.length
p=V.hs(0,q,b)
o=V.hs(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.sT(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.o(r,n)
j=J.dT(r[n])
j=s.a(V.fS(new H.a_(j,H.z(j).h("a_<1,b>")),m,k))
J.b6(e.gp(e),j)}else{if(n>>>0!==n||n>=j)return H.o(r,n)
j=J.dT(r[n])
j=s.a(V.fS(new H.a_(j,H.z(j).h("a_<1,b>")),m,1))
J.b6(e.gp(e),j)
for(j=n+1,P.ck(j,l,r.length),j=H.bt(r,j,l,H.z(r).c),i=j.$ti,j=new H.a2(j,j.gm(j),i.h("a2<E.E>")),i=i.h("E.E"),h=t.z;j.j();){g=i.a(j.d)
g=P.eq([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.a_(g,H.z(g).h("a_<1,b>")))
f=e.r
J.b6(f==null?H.c(H.e("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.o(r,l)
j=J.dT(r[l])
j=s.a(V.fS(new H.a_(j,H.z(j).h("a_<1,b>")),0,k))
J.b6(e.gp(e),j)}},
bP:function(){var s,r,q,p,o=H.a([],t.U)
for(s=this.ad(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
if(p instanceof V.B)o.push(p)}return o},
sd8:function(a){this.x=H.b0(a)},
sdK:function(a){this.y=H.b0(a)},
sd6:function(a){this.z=H.b0(a)},
seT:function(a){this.Q=t.i.a(a)},
saw:function(a){this.dy=t.x.a(a)},
sai:function(a){this.fr=t.x.a(a)},
saG:function(a){this.fx=t.x.a(a)}}
V.T.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.U.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.V.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.f_.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:4}
V.f0.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:4}
V.eV.prototype={
$2:function(a,b){t.i.a(b)
return a<J.y(this.a.a)-this.b},
$S:13}
V.eX.prototype={
$1:function(a){var s,r,q
H.S(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.o(s,r)
r=s[r]
if(a<0||a>=q)return H.o(s,a)
return!this.a.fW(r,s[a])},
$S:12}
V.eW.prototype={
$1:function(a){var s,r,q
H.S(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.o(s,r)
r=s[r]
if(a<0||a>=q)return H.o(s,a)
return!this.a.cf(r,s[a])},
$S:12}
V.eR.prototype={
$2:function(a,b){t.i.a(b)
return C.e.af(a,this.a.dx)===this.b},
$S:13}
V.eU.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=T.x(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(C.a.ga_(C.a.ga_(a)))
return s}if(b<0)return H.o(a,b)
return a[b]},
$S:32}
V.eS.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.aC()
case"strokeColors":return b.aD()
case"backgroundStrokeColors":return b.ae(!1)
default:throw H.f(u.c+a)}},
$S:33}
V.eT.prototype={
$3:function(a,b,c){t.W.a(c)
switch(a){case"fillColors":b.saw(c)
break
case"strokeColors":b.sai(c)
break
case"backgroundStrokeColors":b.saG(c)
break
default:throw H.f(u.c+a)}},
$S:34}
V.eZ.prototype={
$1:function(a){var s=t.G
return P.j(J.q(t.W.a(a),new V.eY(),s),!0,s)},
$S:35}
V.eY.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.aX.prototype={}
V.aI.prototype={
da:function(a){var s=a==null?H.a([],t.r):a
this.a0(t.a.a(s))},
i:function(){return V.jB(this)}}
V.cw.prototype={
i:function(){return V.jD(this)}}
V.bK.prototype={
ga6:function(a){var s=this.d
return s==null?H.c(H.e("display")):s},
eS:function(a){this.d=a}}
Q.d3.prototype={
ga5:function(){var s=this.e
return s==null?H.c(H.e("ctx")):s},
b1:function(){var s=0,r=P.aN(t.V),q,p=this,o,n,m
var $async$b1=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.ad(C.aa.gfR(m).er(new Q.ee(),t.V),$async$b1)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.aL(q,r)}})
return P.aM($async$b1,r)},
cD:function(a){var s,r,q=this,p=q.ga6(q).gL(),o=q.ga6(q).aV(a)
C.n.sbz(q.ga5(),o.aR())
s=p.c
r=p.d
q.ga5().fillRect(0-s/2,0-r/2,p.c,p.d)},
ho:function(a){var s,r,q,p,o,n,m,l=this,k="ctx",j=t.y.a(P.j(a.gp(a),!0,t.i)),i=l.ga6(l).gL().es(a,j)
if(i.length===0)return
s=a.eG(i)
for(j=s.length,r=t.O,q=0;q<s.length;s.length===j||(0,H.d)(s),++q){l.hp(a,s[q])
l.dI(a,!0)
p=a.dy
if(p==null)p=H.a([C.i],r)
if(J.y(p)>1){o=l.e
if(o==null)o=H.c(H.e(k))
C.n.sbz(o,l.dR(a,p))}else{o=l.d
if(o==null)o=H.c(H.e("display"))
n=a.dy
m=o.aV(J.M(n==null?H.a([C.i],r):n,0))
o=l.e
if(o==null)o=H.c(H.e(k))
C.n.sbz(o,m.aR())}o=l.e;(o==null?H.c(H.e(k)):o).fill()
l.dI(a,!1)
o=l.e;(o==null?H.c(H.e(k)):o).closePath()}},
hp:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.y.a(b)
i.ga5().beginPath()
s=a.bJ(b)
r=J.ab(b)
q=r.gZ(b)
i.ga5().moveTo(q.a,q.b)
p=a.cf(r.gZ(b),r.ga_(b))
for(r=s.length,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
m=n.b
l=n.c
k=n.d
j=i.e
if(j==null)j=H.c(H.e("ctx"))
j.bezierCurveTo(m.a,m.b,l.a,l.b,k.a,k.b)}if(p)i.ga5().closePath()},
dR:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.W.a(b)
s=a.eC()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.ga6(g).gL().es(a,r)
r=g.ga5()
p=q.length
if(0>=p)return H.o(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.o(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.a6(b)
m=1/(o.gm(b)-1)
l=T.fA(m+1,0,m).ao(0)
for(r=T.x(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.d)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.c(H.e("display"))
h=i.aV(o.n(b,j))
p.addColorStop(C.a.n(l,j),h.aR())}return p},
dI:function(a,b){var s,r,q,p,o=this,n=b?a.y:a.x
if(n===0)return
s=a.ae(b)
r=o.ga6(o).gL().c
o.ga5().lineWidth=n*0.01*(r/14.222222222222221)
r=J.ab(s)
q=r.bo(s,new Q.ed())
if(r.gV(s)||q)return
if(r.gm(s)>1)C.n.sd7(o.ga5(),o.dR(a,s))
else{p=o.ga6(o).aV(J.ag(a.ae(b)))
C.n.sd7(o.ga5(),p.aR())}o.ga5().stroke()}}
Q.ee.prototype={
$1:function(a){return H.hg(a)},
$S:55}
Q.ed.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:37}
N.dm.prototype={
gb_:function(){var s=this.d
return s==null?H.c(H.e("mobjects")):s},
gL:function(){var s=this.f
return s==null?H.c(H.e("camera")):s},
ga6:function(a){var s=this.x
return s==null?H.c(H.e("display")):s},
fb:function(){var s,r,q,p=this,o=document,n=o.querySelector(".canvas-container")
n.toString
s=H.a([],t.db)
r=new O.ce(0)
r.bZ(0)
o=o.createElement("canvas")
t.gA.a(o)
s=new B.d2(o,n,s,C.c,C.c,r,C.c,C.c)
s.a=new Q.d3($.bF())
n.appendChild(o).toString
p.x=s
p.r=p.ga6(p).gbF()
s=p.ga6(p)
o=s.b=new R.ea(14.222222222222221,s)
n=s.d
C.L.shB(n,1280)
C.L.sha(n,720)
r=s.gbF()
r.eW(s)
n=n.getContext("2d")
n.toString
r.e=n
o.d=o.c/1.7777777777777777
n=s.gbF()
r=o.c
q=o.d
n.ga5().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
s.gbF().cD(C.w)
p.f=o
new P.dI().fd(0)
p.sdc(t.a.a(H.a([],t.r)))},
bG:function(){var s=0,r=P.aN(t.z),q=1,p,o=[],n=this,m,l
var $async$bG=P.aP(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.ga6(n).cd()
q=3
s=6
return P.ad(n.au(),$async$bG)
case 6:q=1
s=5
break
case 3:q=2
l=p
H.b5(l)
throw l
s=5
break
case 2:s=1
break
case 5:n.gL().cC(n.gb_())
n.ga6(n).hA()
return P.aL(null,r)
case 1:return P.aK(p,r)}})
return P.aM($async$bG,r)},
aJ:function(a){var s,r,q
for(s=this.gb_(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].cM(a)},
a0:function(a){t.a.a(a)
this.hr(a)
C.a.hd(this.gb_(),0,a)},
hs:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.j(b,!0,t.j)
C.a.F(s,r.gL().ci(b))
r.sdc(q.a(r.eF(r.gb_(),s)))},
hr:function(a){return this.hs(!0,a)},
eF:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new N.eK(s).$2(a,P.h6(b,H.z(b).c))
return s},
bD:function(a){var s=0,r=P.aN(t.z),q=this,p,o,n,m
var $async$bD=P.aP(function(b,c){if(b===1)return P.aK(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.r
s=4
return P.ad((o==null?H.c(H.e("renderer")):o).b1(),$async$bD)
case 4:n=c
p+=n
o=a.a
a.aJ(n)
a.aZ(p/o)
q.aJ(n)
o=q.f
o=(o==null?H.c(H.e("camera")):o).r.a;(o==null?H.c(H.e("renderer")):o).cD(C.w)
o=q.f
if(o==null)o=H.c(H.e("camera"))
m=q.d
o.cC(m==null?H.c(H.e("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.aL(null,r)}})
return P.aM($async$bD,r)},
aQ:function(a,b){var s=0,r=P.aN(t.z),q=this,p,o
var $async$aQ=P.aP(function(c,d){if(c===1)return P.aK(d,r)
while(true)switch(s){case 0:o=q.gL().ci(q.gb_())
b.aW()
p=b.r
if(!C.a.aa(o,p)){q.a0(t.a.a(H.a([p],t.r)))
C.a.F(o,p.ad())}s=2
return P.ad(q.bD(b),$async$aQ)
case 2:b.cr()
b.aX(q)
q.aJ(0)
return P.aL(null,r)}})
return P.aM($async$aQ,r)},
bH:function(){var s=0,r=P.aN(t.z),q=this,p,o,n,m
var $async$bH=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.r
s=4
return P.ad((o==null?H.c(H.e("renderer")):o).b1(),$async$bH)
case 4:n=b
p+=n
q.aJ(n)
o=q.f
o=(o==null?H.c(H.e("camera")):o).r.a;(o==null?H.c(H.e("renderer")):o).cD(C.w)
o=q.f
if(o==null)o=H.c(H.e("camera"))
m=q.d
o.cC(m==null?H.c(H.e("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.aL(null,r)}})
return P.aM($async$bH,r)},
bk:function(){var s=0,r=P.aN(t.z),q=this
var $async$bk=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return P.ad(q.bH(),$async$bk)
case 4:s=2
break
case 3:return P.aL(null,r)}})
return P.aM($async$bk,r)},
sdc:function(a){this.d=t.hh.a(a)}}
N.eK.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.d)(a),++q){p=a[q]
if(b.aa(0,p))continue
o=p.ad()
n=b.hh(0,P.h6(o,H.z(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.c(H.e("submobjects")):o,n)}else C.a.w(r,p)}},
$S:38}
T.fV.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.fU.prototype={
$1:function(a){return H.S(a)/this.a*this.b},
$S:39}
T.fW.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("F(w,0)")}}
V.fL.prototype={
$1:function(a){return t.G.a(a).W(0)},
$S:10}
V.fM.prototype={
$1:function(a){return t.G.a(a).W(0)},
$S:10}
V.fN.prototype={
$1:function(a){var s
t.p.a(a)
s=J.af(a)
return new K.v(s.n(a,0),s.n(a,1),s.n(a,2),s.n(a,3))},
$S:41}
V.fC.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=T.dQ(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.bk(m)
l.push(J.cW(n.b,Math.pow(q,p-m)*Math.pow(a,m)*X.it(p,m,!0)))}return C.a.a8(l,new V.fB())},
$S:42}
V.fB.prototype={
$2:function(a,b){var s=t.i
return s.a(a).B(0,s.a(b))},
$S:43}
K.v.prototype={
i:function(){var s=this
return new K.v(s.a,s.b,s.c,s.d)},
W:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
aR:function(){var s=this
return"rgba("+C.d.a3(s.a*255)+", "+C.d.a3(s.b*255)+", "+C.d.a3(s.c*255)+", "+H.r(s.d)+")"},
k:function(a){return this.aR()}}
S.ba.prototype={
I:function(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof S.ba&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s},
q:function(a,b){var s=this.a,r=b.a,q=this.b,p=b.b
return new S.ba(s*r-q*p,s*p+q*r)}}
X.aj.prototype={
k:function(a){return this.b}}
X.a8.prototype={}
M.ej.prototype={
gaI:function(){var s=this.a
return s==null?H.c(H.e("eventListeners")):s},
f8:function(){var s,r,q=P.h5(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.J(0,C.a5[r],H.a([],s))
this.sfk(t.cH.a(q))},
aM:function(a,b,c){var s,r,q
H.fD(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.j(c.h("l<X<0>>").a(b),!0,c.h("X<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.ga_(s)
C.a.bE(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
bn:function(a){var s,r=this
switch(a.a){case C.x:t.gt.a(a)
s=r.gaI().n(0,C.x)
s.toString
r.aM(a,s,t.e)
break
case C.q:t.N.a(a)
s=r.gaI().n(0,C.q)
s.toString
r.aM(a,s,t.e)
break
case C.r:t.I.a(a)
s=r.gaI().n(0,C.r)
s.toString
r.aM(a,s,t.e)
break
case C.t:t.u.a(a)
s=r.gaI().n(0,C.t)
s.toString
r.aM(a,s,t.e)
break
case C.C:t.fw.a(a)
s=r.gaI().n(0,C.C)
s.toString
r.aM(a,s,t.e)
break
case C.D:t.bf.a(a)
s=r.gaI().n(0,C.D)
s.toString
r.aM(a,s,t.e)
break}},
sfk:function(a){this.a=t.dC.a(a)}}
O.X.prototype={}
O.di.prototype={}
O.cf.prototype={}
O.aC.prototype={}
O.aD.prototype={}
O.aB.prototype={}
O.ce.prototype={
bZ:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
X.fE.prototype={
$2:function(a,b){return H.S(a)*H.S(b)},
$S:9}
X.fF.prototype={
$2:function(a,b){return H.S(a)*H.S(b)},
$S:9}
Z.ao.prototype={
gR:function(a){return this.a},
gD:function(a){var s=this.b
return s==null?H.c(H.e("shape")):s},
B:function(a,b){return this.aP(0,new Z.e3(typeof b=="number"?Z.dX(b,this.gD(this)):t.A.a(b)))},
q:function(a,b){return this.aP(0,new Z.e4(typeof b=="number"?Z.dX(b,this.gD(this)):t.A.a(b)))},
aP:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=T.dQ(p.gR(p),t.p)
r=H.z(s)
q=r.h("L<1,l<k>>")
q=P.j(new H.L(s,r.h("l<k>(1)").a(new Z.e2(b)),q),!0,q.h("E.E"))
return Z.Z(p.gD(p),q)},
aq:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gR(this)
if(s>>>0!==s||s>=r.length)return H.o(r,s)
return J.M(r[s],a.b)},
fJ:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gD(f).a
if(typeof e!=="number")return e.v()
s=f.gD(f).b
if(typeof s!=="number")return s.v()
r=H.a([],t.b)
for(q=T.x(f.gD(f).a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,H.d)(q),++m){l=q[m]
if(!J.aR(l,a)){k=H.a([],n)
j=f.b
j=T.x((j==null?H.c(H.e("shape")):j).a,0,1)
i=j.length
h=0
for(;h<j.length;j.length===i||(0,H.d)(j),++h){g=j[h]
if(!J.aR(g,b))k.push(J.M(C.a.n(o,l),g))}r.push(k)}}return Z.Z(new S.A(e-1,s-1,t.o),r)},
cS:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.aR(h.gD(h).a,2)){s=h.gR(h)
if(0>=s.length)return H.o(s,0)
r=J.M(s[0],0)
s=h.gR(h)
if(0>=s.length)return H.o(s,0)
q=J.M(s[0],1)
s=h.gR(h)
if(1>=s.length)return H.o(s,1)
p=J.M(s[1],0)
s=h.gR(h)
if(1>=s.length)return H.o(s,1)
return r*J.M(s[1],1)-q*p}s=h.gD(h).a
if(typeof s!=="number")return s.v()
o=h.gD(h).b
if(typeof o!=="number")return o.v()
n=new S.A(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=T.x(h.gD(h).a,0,1),m=s.length,l=h.a,k=0;k<s.length;s.length===m||(0,H.d)(s),++k){j=s[k]
if(typeof j!=="number")return j.af()
i=C.d.af(j,2)===0?1:-1
if(0>=l.length)return H.o(l,0)
o.push(i*Z.dX(J.M(l[0],j),n).q(0,h.fJ(0,j)).cS())}return T.hv(o,t.V)},
eD:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b0.cS()===0)throw H.f("This matrix is not inversible")
s=b0.gD(b0).a
r=b0.gD(b0).b
q=b0.i()
p=Z.d1(s)
for(o=T.x(r,0,1),n=o.length,m=s-1,l=r-1,k=p.a,j=q.a,i=t.o,h=0;h<o.length;o.length===n||(0,H.d)(o),++h){g=o[h]
for(f=g,e=-1,d=-1;f!==s;++f){i.a(new S.A(f,g,i))
if(f<0||f>=j.length)return H.o(j,f)
c=J.M(j[f],g)
if(c>d){d=c
e=f}}b=j.length
if(e<0||e>=b)return H.o(j,e)
a=j[e]
if(g>>>0!==g||g>=b)return H.o(j,g)
j[e]=j[g]
C.a.J(j,g,a)
b=k.length
if(e>=b)return H.o(k,e)
a0=k[e]
if(g!==(g|0)||g>=b)return H.o(k,g)
k[e]=k[g]
C.a.J(k,g,a0)
b=J.af(a)
a1=b.n(a,g)
for(a2=g;a2<r;++a2){a3=b.n(a,a2)
if(typeof a3!=="number")return a3.aA()
b.J(a,a2,a3/a1)}for(a3=J.af(a0),a2=l;a2>=0;--a2){a4=a3.n(a0,a2)
if(typeof a4!=="number")return a4.aA()
a3.J(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(e>=j.length)return H.o(j,e)
a5=j[e]
if(e>=k.length)return H.o(k,e)
a6=k[e]
a4=J.af(a5)
a1=a4.n(a5,g)
for(a7=a2;a7!==r;++a7){a8=a4.n(a5,a7)
a9=b.n(a,a7)
if(typeof a9!=="number")return a9.q()
if(typeof a8!=="number")return a8.v()
a4.J(a5,a7,a8-a9*a1)}for(a4=J.af(a6),a7=l;a7>0;--a7){a8=a4.n(a6,a7)
a9=a3.n(a0,a7)
if(typeof a9!=="number")return a9.q()
if(typeof a8!=="number")return a8.v()
a4.J(a6,a7,a8-a9*a1);--a7
a9=a4.n(a6,a7)
a8=a3.n(a0,a7)
if(typeof a8!=="number")return a8.q()
if(typeof a9!=="number")return a9.v()
a4.J(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.n(a6,0)
a9=a3.n(a0,0)
if(typeof a9!=="number")return a9.q()
if(typeof a8!=="number")return a8.v()
a4.J(a6,0,a8-a9*a1)}}}return p},
ao:function(a){var s=this.gR(this),r=H.z(s),q=r.h("L<1,k>")
return P.j(new H.L(s,r.h("k(1)").a(new Z.e0(a)),q),!0,q.h("E.E"))},
geu:function(){return this.aP(0,new Z.e5(this))},
ab:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.gD(a0),a2=a0.gD(a0).b,a3=a5.gD(a5).b,a4=Z.dX(0,new S.A(a0.gD(a0).a,a5.gD(a5).b,t.o))
for(a1=T.x(a1.a,0,1),s=a1.length,r=a5.a,q=a0.a,p=a4.a,o=0;o<a1.length;a1.length===s||(0,H.d)(a1),++o){n=a1[o]
for(m=T.x(a3,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.d)(m),++k){j=m[k]
for(i=T.x(a2,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,H.d)(i),++g){f=i[g]
e=C.a.n(p,n)
d=J.af(e)
c=d.n(e,j)
b=J.M(C.a.n(q,n),f)
a=J.M(C.a.n(r,f),j)
if(typeof b!=="number")return b.q()
if(typeof a!=="number")return H.bk(a)
if(typeof c!=="number")return c.B()
d.J(e,j,c+b*a)}}}return a4},
i:function(){return this.fS(new Z.e_())},
fS:function(a){return this.aP(0,new Z.dZ(t.ao.a(a)))},
h8:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gR(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)for(p=J.u(s[q]);p.j();)o.push(p.gl())
return o},
k:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.r(d.gD(d).a)+"x"+H.r(d.gD(d).b),b=H.a([],t.X)
for(s=d.gR(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)for(p=J.u(s[q]);p.j();)b.push(C.d.cK(p.gl(),6).length)
o=C.a.bA(b,6,C.S,t.S)
for(b=d.gR(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.d)(b),++q){m=b[q]
n+="      "
for(l=J.u(m);l.j();){k=l.gl()
j=k<0?"-":" "
k=Math.abs(k)
i=C.d.cK(k,6)
h=H.a([],p)
for(i=T.x(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.d)(i),++f)h.push(" ")
e=C.a.hi(h)
n=n+j+C.d.cK(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sfg:function(a){this.b=t.gv.a(a)}}
Z.e3.prototype={
$2:function(a,b){return a+this.a.aq(t.o.a(b))},
$S:1}
Z.e4.prototype={
$2:function(a,b){return a*this.a.aq(t.o.a(b))},
$S:1}
Z.e2.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=T.dQ(a.b,t.V)
r=H.z(s)
q=r.h("L<1,k>")
return P.j(new H.L(s,r.h("k(1)").a(new Z.e1(this.a,a)),q),!0,q.h("E.E"))},
$S:45}
Z.e1.prototype={
$1:function(a){t.w.a(a)
return this.a.$2(a.b,new S.A(this.b.a,a.a,t.o))},
$S:46}
Z.e0.prototype={
$1:function(a){return J.M(t.p.a(a),this.a)},
$S:47}
Z.e5.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.aq(new S.A(b.b,b.a,s))},
$S:1}
Z.e_.prototype={
$1:function(a){return a},
$S:48}
Z.dZ.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
Z.fT.prototype={
$2:function(a,b){var s=t.A
return s.a(a).ab(s.a(b))},
$S:49}
Y.b.prototype={
I:function(a,b){if(b==null)return!1
return b instanceof Y.b&&this.a===b.a&&this.b===b.b&&this.c===b.c},
B:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a+b,s.b+b,s.c+b)
else if(b instanceof Y.b)return new Y.b(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.f("Vector3 only support addition by num or Vector3")},
v:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a-b,s.b-b,s.c-b)
else if(b instanceof Y.b)return new Y.b(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.f("Vector3 only support subtraction by num or Vector3")},
q:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a*b,s.b*b,s.c*b)
else if(b instanceof Y.b)return new Y.b(s.a*b.a,s.b*b.b,s.c*b.c)
else throw H.f("Vector3 only support multiplication by num or Vector3")},
aA:function(a,b){return new Y.b(this.a/b,this.b/b,this.c/b)},
a2:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
aB:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.f("No component at index "+a+" on a vector3")}},
hy:function(){var s=t.n
s=Z.Z(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
cN:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new Y.b(s,r,c==null?this.c:c)},
ey:function(a){return this.cN(null,null,a)},
hF:function(a){return this.cN(a,null,null)},
hG:function(a){return this.cN(null,a,null)},
hE:function(a,b){if(a===0)return this.hF(b)
else if(a===1)return this.hG(b)
else if(a===2)return this.ey(b)
else throw H.f("Cannot index a vector3 with index="+a)},
ab:function(a){var s=Z.d1(3).aP(0,new Y.f1(a)).ab(this.hy()),r=t.o
return new Y.b(s.aq(new S.A(0,0,r)),s.aq(new S.A(1,0,r)),s.aq(new S.A(2,0,r)))},
dV:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aU:function(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
k:function(a){return"vec3("+H.r(this.a)+", "+H.r(this.b)+", "+H.r(this.c)+")"}}
Y.f1.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gD(r).a
if(typeof s!=="number")return s.bI()
if(typeof q!=="number")return H.bk(q)
if(s<q){s=b.b
q=r.gD(r).b
if(typeof s!=="number")return s.bI()
if(typeof q!=="number")return H.bk(q)
q=s>=q
s=q}else s=!0
return s?a:r.aq(b)},
$S:1}
S.A.prototype={
k:function(a){return"["+H.r(this.a)+", "+H.r(this.b)+"]"},
I:function(a,b){if(b==null)return!1
return b instanceof S.A&&J.aR(b.a,this.a)&&J.aR(b.b,this.b)},
gt:function(a){var s=J.bG(this.a),r=J.bG(this.b)
return A.hh(A.b1(A.b1(0,C.e.gt(s)),C.e.gt(r)))}}
S.aW.prototype={
k:function(a){return"["+this.a.k(0)+", "+H.r(this.b)+", "+H.r(this.c)+"]"},
I:function(a,b){if(b==null)return!1
return b instanceof S.aW&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gt:function(a){var s=H.aw(this.a),r=C.d.gt(this.b),q=C.d.gt(this.c)
return A.hh(A.b1(A.b1(A.b1(0,C.e.gt(s)),C.e.gt(r)),C.e.gt(q)))}}
S.bu.prototype={
W:function(a){var s=this
return P.eq([s.a,s.b,s.c,s.d],!1,t.z)},
k:function(a){var s=this
return"["+s.a.k(0)+", "+s.b.k(0)+", "+s.c.k(0)+", "+s.d.k(0)+"]"},
I:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.bu&&b.a.I(0,s.a)&&b.b.I(0,s.b)&&b.c.I(0,s.c)&&b.d.I(0,s.d)},
gt:function(a){var s=this,r=H.aw(s.a),q=H.aw(s.b),p=H.aw(s.c),o=H.aw(s.d)
return A.hh(A.b1(A.b1(A.b1(A.b1(0,C.e.gt(r)),C.e.gt(q)),C.e.gt(p)),C.e.gt(o)))}}
Z.dh.prototype={
gcL:function(){var s=this.y
return s==null?H.c(H.e("transformationMatrix")):s},
gbC:function(){var s=this.z
return s==null?H.c(H.e("plane")):s},
ga7:function(){var s=this.ch
return s==null?H.c(H.e("originalPlane")):s},
gak:function(){var s=this.cx
return s==null?H.c(H.e("i")):s},
gal:function(){var s=this.cy
return s==null?H.c(H.e("j")):s},
gbi:function(){var s=this.dy
return s==null?H.c(H.e("arrowI")):s},
gbj:function(){var s=this.fr
return s==null?H.c(H.e("arrowJ")):s},
gen:function(){var s=this.fx
return s==null?H.c(H.e("texI")):s},
gep:function(){var s=this.fy
return s==null?H.c(H.e("texJ")):s},
geo:function(){var s=this.go
return s==null?H.c(H.e("texII")):s},
geq:function(){var s=this.id
return s==null?H.c(H.e("texJJ")):s},
au:function(){var s=0,r=P.aN(t.z),q=this,p,o
var $async$au=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:q.y=Z.d1(2)
s=2
return P.ad(q.bm(),$async$au)
case 2:s=3
return P.ad(q.bl(),$async$au)
case 3:p=t.n
o=t.b
s=4
return P.ad(q.b3(H.a([H.a([0,-1],p),H.a([1,0],p)],o)),$async$au)
case 4:s=5
return P.ad(q.b3(H.a([H.a([1,0.5],p),H.a([0,1],p)],o)),$async$au)
case 5:q.hk()
s=6
return P.ad(q.bk(),$async$au)
case 6:return P.aL(null,r)}})
return P.aM($async$au,r)},
bm:function(){var s=0,r=P.aN(t.z),q=this,p,o,n,m,l,k,j
var $async$bm=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:m=Math.max(7.111111111111111,4)
l=-m*1.5
k=m*1.5
j=new M.ch(C.u.am(C.A),C.j.am(C.j),C.I.am(C.z),C.a8,null,1,1,1,null,null,C.c,C.u,C.j,C.j,l,k,l,k,4,0,0,C.f,!1,0.01,!1,0.000001,4,null,null,null,C.b,null,null,null,null,null)
j.a4(C.b,null,null)
j.as(null,0,!1,null,!1,0.01,C.f,0,null,4,0.000001)
j.da(null)
j.f7(C.u,C.c,C.j,k,l,C.j,k,l)
j.cy=!1
j.hb()
j.eO(1)
q.ch=j
q.z=M.eG(q.ga7())
j=H.a([],t.C)
for(l=q.gbC().ad(),k=l.length,p=0;p<l.length;l.length===k||(0,H.d)(l),++p){o=l[p]
n=o.r
if(J.bH(n==null?H.c(H.e("points")):n))j.push(M.hV(o))}s=2
return P.ad(q.aQ(0,G.fY(j,0.01)),$async$bm)
case 2:return P.aL(null,r)}})
return P.aM($async$bm,r)},
bl:function(){var s=0,r=P.aN(t.z),q,p=this,o,n,m,l,k,j,i
var $async$bl=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)$async$outer:switch(s){case 0:i=N.hH(p.ga7().aH(C.l))
i.ba(C.o)
p.db=i
i=N.hH(p.ga7().aH(C.m))
i.ba(C.p)
p.dx=i
o=p.ga7().aH(C.c)
i=p.db
p.cx=N.c_(i==null?H.c(H.e("originalI")):i)
i=p.dx
p.cy=N.c_(i==null?H.c(H.e("originalJ")):i)
i=N.bO(0,p.gak().cV(),o)
i.K(C.o)
p.dy=i
i=N.bO(0,p.gal().cV(),o)
i.K(C.p)
p.fr=i
p.fM()
p.a0(H.a([p.gak(),p.gal(),p.gbi(),p.gbj(),p.gen(),p.gep()],t.r))
i=H.a([],t.C)
for(n=[p.gak(),p.gal(),p.gbi(),p.gbj()],m=0;m<4;++m)i.push(M.hV(n[m]))
for(n=[p.gen(),p.gep()],m=0;m<2;++m){l=new E.d8(1,M.bE(),0,n[m])
k=l.bY(0)
j=P.h9("^Instance of '(.*?)'$").cs(k).b
if(1>=j.length){q=H.o(j,1)
s=1
break $async$outer}j[1].toString
l.e9()
i.push(l)}s=3
return P.ad(p.aQ(0,G.fY(i,0.1)),$async$bl)
case 3:case 1:return P.aL(q,r)}})
return P.aM($async$bl,r)},
fM:function(){var s,r,q=this,p=S.eN("\ue131")
p.K(C.o)
q.go=p
p=S.eN("\ue237")
p.K(C.p)
q.id=p
p=S.eN("^")
p.K(C.o)
p.y*=0.8
p.bB(q.geo(),0.12,C.m)
q.k1=p
p=S.eN("^")
p.K(C.p)
p.y*=0.8
p.bB(q.geq(),0.12,C.m)
p.ah(C.l.q(0,0.05))
q.k2=p
p=q.geo()
s=q.k1
if(s==null)s=H.c(H.e("texIHat"))
r=t.r
s=M.h0(H.a([p,s],r))
s.bg(new Z.es(q))
q.fx=s
s=q.geq()
p=q.k2
p=M.h0(H.a([s,p==null?H.c(H.e("texJHat")):p],r))
p.bg(new Z.et(q))
q.fy=p},
b3:function(a){return this.hz(t.gj.a(a))},
hz:function(a){var s=0,r=P.aN(t.z),q=this,p,o,n,m,l,k,j,i,h
var $async$b3=P.aP(function(b,c){if(b===1)return P.aK(c,r)
while(true)switch(s){case 0:i=Z.Z(null,a)
h=M.eG(q.gbC())
h.dG(i)
q.y=i.ab(q.gcL())
p=q.ga7().aH(C.l).ab(q.gcL())
o=q.ga7().aH(C.m).ab(q.gcL())
n=N.c_(q.gak())
n.b0(p)
m=N.c_(q.gal())
m.b0(o)
l=q.ga7().aH(C.c)
k=N.bO(0,p,l)
k.K(C.o)
j=N.bO(0,o,l)
j.K(C.p)
s=2
return P.ad(q.aQ(0,G.fY(t.co.a(H.a([G.dv(q.gak(),0,M.bE(),1,n),G.dv(q.gal(),0,M.bE(),1,m),G.dv(q.gbi(),0,M.bE(),1,k),G.dv(q.gbj(),0,M.bE(),1,j),G.dv(q.gbC(),0,M.bE(),1,h)],t.C)),0)),$async$b3)
case 2:return P.aL(null,r)}})
return P.aM($async$b3,r)},
hk:function(){var s,r=this
r.a0(t.a.a(H.a([R.hI(r.gak()),R.hI(r.gal())],t.r)))
s=new Z.eu(r)
r.gak().bg(s)
r.gal().bg(s)}}
Z.es.prototype={
$2:function(a,b){t.j.a(a)
H.b0(b)
a.bB(this.a.gak(),0.1,C.R)
return a},
$S:6}
Z.et.prototype={
$2:function(a,b){t.j.a(a)
H.b0(b)
a.bB(this.a.gal(),0.1,C.R)
return a},
$S:6}
Z.eu.prototype={
$2:function(a,b){var s,r,q,p,o,n,m,l
t.j.a(a)
H.b0(b)
s=this.a
r=s.ga7().eh(s.gak().S(C.c))
q=s.ga7().eh(s.gal().S(C.c))
p=M.eG(s.ga7())
o=t.n
p.dG(Z.Z(null,H.a([H.a([r.a,q.a],o),H.a([r.b,q.b],o)],t.b)))
n=s.ga7().aH(C.c)
m=N.bO(0,r,n)
m.K(C.o)
l=N.bO(0,q,n)
l.K(C.p)
s.gbC().cc(p)
s.gbi().cc(m)
s.gbj().cc(l)
return a},
$S:6}
S.cs.prototype={
i:function(){return S.jx(this)}};(function aliases(){var s=J.al.prototype
s.f_=s.k
s=J.bc.prototype
s.f0=s.k
s=P.C.prototype
s.bY=s.k
s=X.Y.prototype
s.eX=s.aW
s.eY=s.aX
s.eZ=s.cg
s=M.p.prototype
s.f3=s.aK
s.f2=s.b2
s.f4=s.aE
s.f1=s.aY
s.bX=s.O
s.bW=s.N
s=V.B.prototype
s.f5=s.aE
s=V.bK.prototype
s.eW=s.eS})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u
s(P,"kr","jF",7)
s(P,"ks","jG",7)
s(P,"kt","jH",7)
r(P,"is","kk",0)
q(P,"kK",2,null,["$1$2","$2"],["iC",function(a,b){return P.iC(a,b,t.H)}],52,0)
q(P,"iA",2,null,["$1$2","$2"],["iB",function(a,b){return P.iB(a,b,t.H)}],53,0)
p(M.p.prototype,"geE","ap",24)
q(B,"iE",3,null,["$3"],["kP"],54,0)
q(M,"iG",1,null,["$3$inflection$pauseRatio","$1"],["iz",function(a){return M.iz(a,null,null)}],11,0)
q(M,"bE",1,null,["$3$inflection$pauseRatio","$1"],["iI",function(a){return M.iI(a,null,null)}],11,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.h3,J.al,J.bM,P.n,H.bW,P.H,H.ah,H.a2,P.I,H.c3,H.eO,H.eD,H.c4,H.cF,P.bq,H.eo,H.ca,H.df,H.fp,H.aq,H.dG,H.dM,P.fs,P.dB,P.bx,P.by,P.bR,P.dD,P.bi,P.P,P.dC,P.cq,P.cr,P.dK,P.cL,P.cN,P.dH,P.bj,P.a3,P.cn,P.cp,P.f9,P.ek,P.O,P.dL,P.ds,W.h_,P.dI,P.be,A.cD,X.Y,R.ea,K.bJ,M.p,M.W,V.aX,N.du,V.bK,N.dm,K.v,S.ba,X.aj,X.a8,M.ej,O.X,O.ce,Z.ao,Y.b,S.A,S.aW,S.bu])
q(J.al,[J.dd,J.bp,J.bc,J.t,J.aT,J.aA,W.a0,W.bV,W.ef,W.bY,W.i])
q(J.bc,[J.dk,J.ax,J.aU])
r(J.en,J.t)
q(J.aT,[J.c6,J.de])
q(P.n,[H.aY,H.G,H.bd,H.bh,H.aG,P.c5])
q(H.aY,[H.b9,H.cM])
r(H.cA,H.b9)
r(H.cy,H.cM)
r(H.a_,H.cy)
q(P.H,[H.c8,P.dw,H.dg,H.dy,H.dl,P.bQ,H.dF,P.dj,P.ay,P.dz,P.dx,P.bs,P.d4,P.d6])
q(H.ah,[H.fR,H.db,H.dt,H.fH,H.fI,H.fJ,P.f4,P.f3,P.f5,P.f6,P.ft,P.fv,P.fw,P.fz,P.fa,P.fi,P.fe,P.ff,P.fg,P.fc,P.fh,P.fb,P.fl,P.fm,P.fk,P.fj,P.eL,P.eM,P.fy,P.fq,P.fr,P.er,W.f2,W.f8,A.el,R.eb,R.ec,K.dU,K.dV,K.dW,M.eE,M.eF,M.e8,R.eg,R.eh,R.ei,M.eB,M.eA,M.ez,M.eC,M.ev,M.ew,M.ex,M.ey,V.T,V.U,V.V,V.f_,V.f0,V.eV,V.eX,V.eW,V.eR,V.eU,V.eS,V.eT,V.eZ,V.eY,Q.ee,Q.ed,N.eK,T.fV,T.fU,T.fW,V.fL,V.fM,V.fN,V.fC,V.fB,X.fE,X.fF,Z.e3,Z.e4,Z.e2,Z.e1,Z.e0,Z.e5,Z.e_,Z.dZ,Z.fT,Y.f1,Z.es,Z.et,Z.eu])
q(H.G,[H.E,H.c2,H.c9])
q(H.E,[H.ar,H.L,H.aF])
r(H.c1,H.bd)
q(P.I,[H.cd,H.cx,H.co])
r(H.bn,H.aG)
r(H.aS,H.db)
r(H.cg,P.dw)
q(H.dt,[H.dr,H.bm])
r(H.dA,P.bQ)
r(P.cc,P.bq)
r(H.c7,P.cc)
r(H.cI,H.dF)
q(P.c5,[P.cH,A.R])
r(P.cG,P.dD)
r(P.dJ,P.cL)
r(P.cE,P.cN)
r(P.aJ,P.cE)
q(P.ay,[P.cj,P.da])
q(W.a0,[W.a9,W.bv])
q(W.a9,[W.h,W.av])
r(W.m,W.h)
q(W.m,[W.cZ,W.d0,W.b8,W.d9,W.dn])
r(W.au,W.i)
r(W.ac,W.au)
r(W.cz,W.bY)
r(W.cB,P.cq)
r(W.dE,W.cB)
r(W.cC,P.cr)
q(X.Y,[G.d_,M.dq,G.cu])
r(M.dp,M.dq)
r(E.d8,G.cu)
r(K.cY,K.bJ)
r(B.d2,K.cY)
q(M.p,[V.B,M.bf,R.dc,M.bo])
q(V.B,[N.at,V.aI,N.ci,V.cw])
q(N.at,[N.N,N.bL])
q(N.N,[M.br,N.bN])
r(M.d5,V.aI)
r(M.bS,M.d5)
r(M.ch,M.bS)
r(N.ct,V.aX)
r(N.bX,N.bL)
r(N.bZ,N.bX)
r(N.cl,N.ci)
r(N.cv,N.cl)
r(N.bP,N.cv)
r(R.c0,R.dc)
r(Q.d3,V.bK)
r(O.di,X.a8)
q(O.di,[O.cf,O.aC,O.aD,O.aB])
r(Z.dh,N.dm)
r(S.cs,M.bf)
s(H.cM,P.a3)
s(P.cN,P.cn)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{w:"int",k:"double",Q:"num",aa:"String",F:"bool",O:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","k(k,A<w,w>)","b(b)","v(v)","F(p)","~(ac)","p(p,k)","~(~())","O()","w(w,w)","l<k>(v)","k(k{inflection:k?,pauseRatio:k?})","F(w)","F(w,b)","O(@)","N(N)","l<p>(p)","F(b)","ak<O>()","~(i)","W(W,W)","F(aB)","F(aC)","F(aD)","aa()","@(@,aa)","@(aa)","O(@,aV)","k(b)","~(Q)","~(C?,C?)","P<@>(@)","l<b>(l<l<b>>,@)","l<v>(aa,B)","~(aa,B,l<v>)","l<v>(l<v>)","O(C,aV)","F(v)","~(l<p>,cm<p>)","k(w)","~(w,@)","v(l<k>)","b(k)","b(b,b)","~(@)","l<k>(A<w,l<k>>)","k(A<w,k>)","k(l<k>)","k(k)","ao(ao,ao)","@(@)","O(~())","0^(0^,0^)<Q>","0^(0^,0^)<Q>","l<b>(l<b>,l<b>,k)","k(Q)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.jV(v.typeUniverse,JSON.parse('{"dk":"bc","ax":"bc","aU":"bc","kV":"i","l1":"i","kU":"h","l2":"h","la":"h","kW":"m","l7":"m","l3":"a9","l_":"a9","l8":"ac","kY":"au","kX":"av","lb":"av","dd":{"F":[]},"bp":{"O":[]},"t":{"l":["1"],"G":["1"],"n":["1"]},"en":{"t":["1"],"l":["1"],"G":["1"],"n":["1"]},"bM":{"I":["1"]},"aT":{"k":[],"Q":[]},"c6":{"k":[],"w":[],"Q":[]},"de":{"k":[],"Q":[]},"aA":{"aa":[],"eH":[]},"G":{"n":["1"]},"aY":{"n":["2"]},"bW":{"I":["2"]},"b9":{"aY":["1","2"],"n":["2"],"n.E":"2"},"cA":{"b9":["1","2"],"aY":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"cy":{"a3":["2"],"l":["2"],"aY":["1","2"],"G":["2"],"n":["2"]},"a_":{"cy":["1","2"],"a3":["2"],"l":["2"],"aY":["1","2"],"G":["2"],"n":["2"],"n.E":"2","a3.E":"2"},"c8":{"H":[]},"E":{"G":["1"],"n":["1"]},"ar":{"E":["1"],"G":["1"],"n":["1"],"E.E":"1","n.E":"1"},"a2":{"I":["1"]},"bd":{"n":["2"],"n.E":"2"},"c1":{"bd":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"cd":{"I":["2"]},"L":{"E":["2"],"G":["2"],"n":["2"],"E.E":"2","n.E":"2"},"bh":{"n":["1"],"n.E":"1"},"cx":{"I":["1"]},"aG":{"n":["1"],"n.E":"1"},"bn":{"aG":["1"],"G":["1"],"n":["1"],"n.E":"1"},"co":{"I":["1"]},"c2":{"G":["1"],"n":["1"],"n.E":"1"},"c3":{"I":["1"]},"aF":{"E":["1"],"G":["1"],"n":["1"],"E.E":"1","n.E":"1"},"db":{"ah":[],"bb":[]},"aS":{"ah":[],"bb":[]},"cg":{"H":[]},"dg":{"H":[]},"dy":{"H":[]},"cF":{"aV":[]},"ah":{"bb":[]},"dt":{"ah":[],"bb":[]},"dr":{"ah":[],"bb":[]},"bm":{"ah":[],"bb":[]},"dl":{"H":[]},"dA":{"H":[]},"c7":{"bq":["1","2"],"cb":["1","2"]},"c9":{"G":["1"],"n":["1"],"n.E":"1"},"ca":{"I":["1"]},"df":{"eH":[]},"dF":{"H":[]},"cI":{"H":[]},"P":{"ak":["1"]},"by":{"I":["1"]},"cH":{"n":["1"],"n.E":"1"},"bR":{"H":[]},"cG":{"dD":["1"]},"cL":{"i1":[]},"dJ":{"cL":[],"i1":[]},"aJ":{"cn":["1"],"cm":["1"],"G":["1"],"n":["1"]},"bj":{"I":["1"]},"c5":{"n":["1"]},"cc":{"bq":["1","2"],"cb":["1","2"]},"bq":{"cb":["1","2"]},"cE":{"cn":["1"],"cm":["1"],"G":["1"],"n":["1"]},"k":{"Q":[]},"w":{"Q":[]},"l":{"G":["1"],"n":["1"]},"cm":{"G":["1"],"n":["1"]},"aa":{"eH":[]},"bQ":{"H":[]},"dw":{"H":[]},"dj":{"H":[]},"ay":{"H":[]},"cj":{"H":[]},"da":{"H":[]},"dz":{"H":[]},"dx":{"H":[]},"bs":{"H":[]},"d4":{"H":[]},"cp":{"H":[]},"d6":{"H":[]},"dL":{"aV":[]},"ac":{"i":[]},"au":{"i":[]},"m":{"h":[],"a0":[]},"cZ":{"h":[],"a0":[]},"d0":{"h":[],"a0":[]},"b8":{"h":[],"a0":[]},"av":{"a0":[]},"bY":{"h8":["Q"]},"h":{"a0":[]},"d9":{"h":[],"a0":[]},"a9":{"a0":[]},"dn":{"h":[],"a0":[]},"bv":{"a0":[]},"cz":{"h8":["Q"]},"cB":{"cq":["1"]},"dE":{"cB":["1"],"cq":["1"]},"cC":{"cr":["1"]},"dI":{"jt":[]},"R":{"n":["l<1>"],"n.E":"l<1>"},"cD":{"I":["l<1>"]},"d_":{"Y":[]},"dq":{"Y":[]},"dp":{"Y":[]},"d8":{"Y":[]},"cu":{"Y":[]},"cY":{"bJ":[]},"d2":{"bJ":[]},"br":{"N":[],"at":[],"B":[],"p":[]},"d5":{"aI":[],"B":[],"p":[]},"bS":{"aI":[],"B":[],"p":[]},"ch":{"aI":[],"B":[],"p":[]},"at":{"B":[],"p":[]},"N":{"at":[],"B":[],"p":[]},"ct":{"aX":[]},"bL":{"at":[],"B":[],"p":[]},"bX":{"at":[],"B":[],"p":[]},"bZ":{"at":[],"B":[],"p":[]},"bN":{"N":[],"at":[],"B":[],"p":[]},"ci":{"B":[],"p":[]},"cl":{"B":[],"p":[]},"cv":{"B":[],"p":[]},"bP":{"B":[],"p":[]},"bf":{"p":[]},"dc":{"p":[]},"c0":{"p":[]},"bo":{"p":[]},"B":{"p":[]},"aI":{"B":[],"p":[]},"cw":{"B":[],"p":[]},"d3":{"bK":[]},"di":{"a8":[]},"aC":{"a8":[]},"aD":{"a8":[]},"aB":{"a8":[]},"cf":{"a8":[]},"dh":{"dm":[]},"cs":{"bf":[],"p":[]}}'))
H.jU(v.typeUniverse,JSON.parse('{"cM":2,"c5":1,"cc":2,"cE":1,"cN":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bD
return{dq:s("@<w>"),A:s("ao"),t:s("bR"),dK:s("W"),gA:s("b8"),G:s("v"),R:s("G<@>"),bU:s("H"),aD:s("i"),gc:s("X<a8>"),gl:s("X<aB>"),c3:s("X<aC>"),eL:s("X<aD>"),en:s("aj"),e:s("a8"),b8:s("bb"),v:s("ak<@>"),fh:s("bo"),bL:s("aS<k>"),h:s("R<p>"),m:s("R<C>"),eX:s("R<B>"),eR:s("R<b>"),ca:s("R<k>"),eN:s("R<w>"),hf:s("n<@>"),C:s("t<Y>"),aM:s("t<ao>"),f_:s("t<W>"),O:s("t<v>"),bN:s("t<ba>"),aE:s("t<X<a8>>"),L:s("t<N>"),gL:s("t<l<N>>"),Z:s("t<l<p>>"),D:s("t<l<C>>"),Q:s("t<l<b>>"),b:s("t<l<k>>"),eI:s("t<l<w>>"),r:s("t<p>"),db:s("t<cr<@>>"),s:s("t<aa>"),fZ:s("t<aW<Y,k,k>>"),dm:s("t<bu<b,b,b,b>>"),U:s("t<B>"),l:s("t<b>"),n:s("t<k>"),gn:s("t<@>"),X:s("t<w>"),eM:s("t<p(p,k)>"),T:s("bp"),cj:s("aU"),fw:s("l5"),bf:s("l6"),F:s("N"),co:s("l<Y>"),W:s("l<v>"),gF:s("l<X<a8>>"),ds:s("l<N>"),dF:s("l<l<b>>"),gj:s("l<l<k>>"),a:s("l<p>"),gp:s("l<aW<Y,k,k>>"),y:s("l<b>"),p:s("l<k>"),aH:s("l<@>"),cH:s("cb<aj,l<X<a8>>>"),j:s("p"),he:s("p(p,k)"),u:s("aB"),E:s("ac"),gt:s("cf"),N:s("aC"),I:s("aD"),P:s("O"),f4:s("br"),K:s("C"),q:s("be<Q>"),eU:s("h8<Q>"),bA:s("cm<p>"),k:s("aV"),aw:s("aa"),e3:s("ar<b>"),hd:s("A<b,b>"),w:s("A<w,k>"),o:s("A<w,w>"),fz:s("A<w,l<k>>"),cL:s("aW<Y,k,k>"),bl:s("bu<b,b,b,b>"),ak:s("ax"),J:s("B"),i:s("b"),cD:s("b(b)"),do:s("dE<ac>"),ck:s("P<O>"),c:s("P<@>"),fJ:s("P<w>"),dL:s("P<Q>"),g4:s("cG<Q>"),cJ:s("F"),al:s("F(C)"),fT:s("F(w)"),V:s("k"),fA:s("k(k,A<w,w>)"),ao:s("k(k)"),z:s("@"),fO:s("@()"),bI:s("@(C)"),ag:s("@(C,aV)"),S:s("w"),cF:s("0&*"),_:s("C*"),g7:s("X<aB>?"),em:s("X<aC>?"),ga:s("X<aD>?"),eH:s("ak<O>?"),x:s("l<v>?"),f:s("l<N>?"),hh:s("l<p>?"),dh:s("l<aW<Y,k,k>>?"),bG:s("l<b>?"),b5:s("l<b>(l<b>,l<b>,k)?"),cI:s("l<p(p,k)>?"),dC:s("cb<aj,l<X<a8>>>?"),Y:s("C?"),gv:s("A<w,w>?"),d:s("bi<@,@>?"),g:s("dH?"),B:s("@(i)?"),g5:s("~()?"),H:s("Q"),aT:s("~"),M:s("~()"),c4:s("~(Q)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.L=W.b8.prototype
C.n=W.bV.prototype
C.a1=J.al.prototype
C.a=J.t.prototype
C.e=J.c6.prototype
C.a2=J.bp.prototype
C.d=J.aT.prototype
C.N=J.aA.prototype
C.a3=J.aU.prototype
C.P=J.dk.prototype
C.G=J.ax.prototype
C.aa=W.bv.prototype
C.H=new Y.b(-1,0,0)
C.z=new M.W(null,null,null,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b=new K.v(1,1,1,1)
C.Q=new Y.b(1,-1,0)
C.u=new M.W(C.b,!1,null,C.Q,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
C.M=new K.v(0.73333,0.73333,0.73333,1)
C.y=new Y.b(0,-1,0)
C.a4=H.a(s([0]),t.n)
C.A=new M.W(C.M,!0,!1,C.y,1,!0,0.1,1,null,C.a4,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.j=new M.W(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.I=new M.W(null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.v=new H.aS(P.iA(),t.bL)
C.S=new H.aS(P.iA(),H.bD("aS<w>"))
C.B=new H.aS(P.kK(),t.bL)
C.T=new H.c3(H.bD("c3<0&>"))
C.J=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.Z=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.V=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.W=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.Y=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.X=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.K=function(hooks) { return hooks; }

C.h=new P.dJ()
C.a_=new P.dL()
C.i=new K.v(0,0,0,0)
C.w=new K.v(0,0,0,1)
C.o=new K.v(0.98824,0.38431,0.33333,1)
C.p=new K.v(0.51373,0.75686,0.40392,1)
C.x=new X.aj("EventType.mouseMovedEvent")
C.q=new X.aj("EventType.mousePressedEvent")
C.r=new X.aj("EventType.mouseReleasedEvent")
C.t=new X.aj("EventType.mouseDraggedEvent")
C.C=new X.aj("EventType.keyPressedEvent")
C.D=new X.aj("EventType.keyReleasedEvent")
C.a5=H.a(s([C.x,C.q,C.r,C.t,C.C,C.D]),H.bD("t<aj>"))
C.a7=H.a(s([]),t.r)
C.E=new N.du("TipSide.Start")
C.F=new N.du("TipSide.End")
C.O=H.a(s([]),t.O)
C.a0=new K.v(0.16078,0.67059,0.79216,1)
C.a6=H.a(s([C.a0]),t.O)
C.c=new Y.b(0,0,0)
C.a8=new V.aX(C.O,C.a6,1,C.O,0,0,C.c)
C.k=new Y.b(0,0,1)
C.m=new Y.b(0,1,0)
C.l=new Y.b(1,0,0)
C.f=new Y.b(1,1,0)
C.a9=new Y.b(1,1,1)
C.R=new Y.b(-1,1,0)
C.ab=new P.bx(null,2)})();(function staticFields(){$.fn=null
$.az=0
$.bU=null
$.hE=null
$.iw=null
$.ir=null
$.iF=null
$.fG=null
$.fK=null
$.hr=null
$.bz=null
$.cQ=null
$.cR=null
$.hj=!1
$.J=C.h
$.ae=H.a([],H.bD("t<C>"))
$.dP=P.h5(t.S,H.bD("cb<w,w>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"kZ","iN",function(){return H.kz("_$dart_dartClosure")})
s($,"ly","hy",function(){return C.h.em(new H.fR(),H.bD("ak<O>"))})
s($,"lc","iO",function(){return H.aH(H.eP({
toString:function(){return"$receiver$"}}))})
s($,"ld","iP",function(){return H.aH(H.eP({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"le","iQ",function(){return H.aH(H.eP(null))})
s($,"lf","iR",function(){return H.aH(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"li","iU",function(){return H.aH(H.eP(void 0))})
s($,"lj","iV",function(){return H.aH(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"lh","iT",function(){return H.aH(H.hZ(null))})
s($,"lg","iS",function(){return H.aH(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"ll","iX",function(){return H.aH(H.hZ(void 0))})
s($,"lk","iW",function(){return H.aH(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"lm","hx",function(){return P.jE()})
r($,"l0","bF",function(){var q=new M.ej()
q.f8()
return q})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.al,DOMError:J.al,MediaError:J.al,NavigatorUserMediaError:J.al,OverconstrainedError:J.al,PositionError:J.al,SQLError:J.al,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.cZ,HTMLAreaElement:W.d0,HTMLCanvasElement:W.b8,CanvasRenderingContext2D:W.bV,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,DOMException:W.ef,DOMRectReadOnly:W.bY,SVGAElement:W.h,SVGAnimateElement:W.h,SVGAnimateMotionElement:W.h,SVGAnimateTransformElement:W.h,SVGAnimationElement:W.h,SVGCircleElement:W.h,SVGClipPathElement:W.h,SVGDefsElement:W.h,SVGDescElement:W.h,SVGDiscardElement:W.h,SVGEllipseElement:W.h,SVGFEBlendElement:W.h,SVGFEColorMatrixElement:W.h,SVGFEComponentTransferElement:W.h,SVGFECompositeElement:W.h,SVGFEConvolveMatrixElement:W.h,SVGFEDiffuseLightingElement:W.h,SVGFEDisplacementMapElement:W.h,SVGFEDistantLightElement:W.h,SVGFEFloodElement:W.h,SVGFEFuncAElement:W.h,SVGFEFuncBElement:W.h,SVGFEFuncGElement:W.h,SVGFEFuncRElement:W.h,SVGFEGaussianBlurElement:W.h,SVGFEImageElement:W.h,SVGFEMergeElement:W.h,SVGFEMergeNodeElement:W.h,SVGFEMorphologyElement:W.h,SVGFEOffsetElement:W.h,SVGFEPointLightElement:W.h,SVGFESpecularLightingElement:W.h,SVGFESpotLightElement:W.h,SVGFETileElement:W.h,SVGFETurbulenceElement:W.h,SVGFilterElement:W.h,SVGForeignObjectElement:W.h,SVGGElement:W.h,SVGGeometryElement:W.h,SVGGraphicsElement:W.h,SVGImageElement:W.h,SVGLineElement:W.h,SVGLinearGradientElement:W.h,SVGMarkerElement:W.h,SVGMaskElement:W.h,SVGMetadataElement:W.h,SVGPathElement:W.h,SVGPatternElement:W.h,SVGPolygonElement:W.h,SVGPolylineElement:W.h,SVGRadialGradientElement:W.h,SVGRectElement:W.h,SVGScriptElement:W.h,SVGSetElement:W.h,SVGStopElement:W.h,SVGStyleElement:W.h,SVGElement:W.h,SVGSVGElement:W.h,SVGSwitchElement:W.h,SVGSymbolElement:W.h,SVGTSpanElement:W.h,SVGTextContentElement:W.h,SVGTextElement:W.h,SVGTextPathElement:W.h,SVGTextPositioningElement:W.h,SVGTitleElement:W.h,SVGUseElement:W.h,SVGViewElement:W.h,SVGGradientElement:W.h,SVGComponentTransferFunctionElement:W.h,SVGFEDropShadowElement:W.h,SVGMPathElement:W.h,Element:W.h,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,EventTarget:W.a0,HTMLFormElement:W.d9,MouseEvent:W.ac,DragEvent:W.ac,PointerEvent:W.ac,WheelEvent:W.ac,Document:W.a9,DocumentFragment:W.a9,HTMLDocument:W.a9,ShadowRoot:W.a9,XMLDocument:W.a9,Attr:W.a9,DocumentType:W.a9,Node:W.a9,HTMLSelectElement:W.dn,CompositionEvent:W.au,FocusEvent:W.au,KeyboardEvent:W.au,TextEvent:W.au,TouchEvent:W.au,UIEvent:W.au,Window:W.bv,DOMWindow:W.bv,ClientRect:W.cz,DOMRect:W.cz})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Z.kH
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=matrix_transformation.dart.js.map
