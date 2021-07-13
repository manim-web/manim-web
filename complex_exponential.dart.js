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
a[c]=function(){a[c]=function(){H.kx(b)}
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
if(a[b]!==s)H.ky(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ha"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ha"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ha(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={fQ:function fQ(){},
fM:function(a,b,c){if(b.h("F<0>").b(a))return new H.cu(a,b.h("@<0>").C(c).h("cu<1,2>"))
return new H.bc(a,b.h("@<0>").C(c).h("bc<1,2>"))},
f:function(a){return new H.c_("Field '"+a+"' has not been initialized.")},
hI:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h9:function(a,b,c){return a},
bs:function(a,b,c,d){P.ao(b,"start")
if(c!=null){P.ao(c,"end")
if(b>c)H.d(P.aG(b,0,c,"start",null))}return new H.aq(a,b,c,d.h("aq<0>"))},
j8:function(a,b,c,d){if(t.X.b(a))return new H.bT(a,b,c.h("@<0>").C(d).h("bT<1,2>"))
return new H.bf(a,b,c.h("@<0>").C(d).h("bf<1,2>"))},
hG:function(a,b,c){if(t.X.b(a)){P.ao(b,"count")
return new H.bm(a,b,c.h("bm<0>"))}P.ao(b,"count")
return new H.aI(a,b,c.h("aI<0>"))},
W:function(){return new P.br("No element")},
j2:function(){return new P.br("Too few elements")},
b_:function b_(){},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b){this.a=a
this.$ti=b},
cu:function cu(a,b){this.a=a
this.$ti=b},
cs:function cs(){},
a0:function a0(a,b){this.a=a
this.$ti=b},
c_:function c_(a){this.a=a},
fD:function fD(){},
F:function F(){},
E:function E(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a3:function a3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a){this.$ti=a},
bV:function bV(a){this.$ti=a},
aH:function aH(a,b){this.a=a
this.$ti=b},
cG:function cG(){},
iw:function(a){var s,r=H.iv(a)
if(r!=null)return r
s="minified:"+a
return s},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cT(a)
return s},
az:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ev:function(a){return H.jc(a)},
jc:function(a){var s,r,q,p
if(a instanceof P.C)return H.a5(H.cP(a),null)
if(J.b4(a)===C.a3||t.ak.b(a)){s=C.F(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a5(H.cP(a),null)},
cO:function(a){throw H.e(H.k6(a))},
n:function(a,b){if(a==null)J.x(a)
throw H.e(H.hb(a,b))},
hb:function(a,b){var s,r="index"
if(!H.i4(b))return new P.aB(!0,b,r,null)
s=H.S(J.x(a))
if(b<0||b>=s)return P.fO(b,a,r,null,s)
return P.ew(b,r)},
k6:function(a){return new P.aB(!0,a,null,null)},
e:function(a){var s,r
if(a==null)a=new P.db()
s=new Error()
s.dartException=a
r=H.kz
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
kz:function(){return J.cT(this.dartException)},
d:function(a){throw H.e(a)},
c:function(a){throw H.e(P.aj(a))},
aJ:function(a){var s,r,q,p,o,n
a=H.kt(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.eB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eC:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hJ:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fR:function(a,b){var s=b==null,r=s?null:b.method
return new H.da(a,r,s?null:b.receiver)},
b7:function(a){if(a==null)return new H.er(a)
if(a instanceof H.bW)return H.b6(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.b6(a,a.dartException)
return H.k5(a)},
b6:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
k5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.d.fw(r,16)&8191)===10)switch(q){case 438:return H.b6(a,H.fR(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.b6(a,new H.c9(p,e))}}if(a instanceof TypeError){o=$.iA()
n=$.iB()
m=$.iC()
l=$.iD()
k=$.iG()
j=$.iH()
i=$.iF()
$.iE()
h=$.iJ()
g=$.iI()
f=o.a9(s)
if(f!=null)return H.b6(a,H.fR(H.cI(s),f))
else{f=n.a9(s)
if(f!=null){f.method="call"
return H.b6(a,H.fR(H.cI(s),f))}else{f=m.a9(s)
if(f==null){f=l.a9(s)
if(f==null){f=k.a9(s)
if(f==null){f=j.a9(s)
if(f==null){f=i.a9(s)
if(f==null){f=l.a9(s)
if(f==null){f=h.a9(s)
if(f==null){f=g.a9(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.cI(s)
return H.b6(a,new H.c9(s,f==null?e:f.method))}}}return H.b6(a,new H.dr(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.ci()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b6(a,new P.aB(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.ci()
return a},
b5:function(a){var s
if(a instanceof H.bW)return a.b
if(a==null)return new H.cz(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.cz(a)},
kl:function(a,b,c,d,e,f){t.b8.a(a)
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.eW("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kl)
a.$identity=s
return s},
iZ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.dj().constructor.prototype):Object.create(new H.bl(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aC
if(typeof r!=="number")return r.v()
$.aC=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.hs(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.iV(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.hs(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
iV:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ii,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
s=c?H.iT:H.iS
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.e("Error in functionType of tearoff")},
iW:function(a,b,c,d){var s=H.hr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hs:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.iY(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.iW(r,!p,s,b)
if(r===0){p=$.aC
if(typeof p!=="number")return p.v()
$.aC=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bO
return new Function(p+(o==null?$.bO=H.e4("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aC
if(typeof p!=="number")return p.v()
$.aC=p+1
m+=p
p="return function("+m+"){return this."
o=$.bO
return new Function(p+(o==null?$.bO=H.e4("self"):o)+"."+H.t(s)+"("+m+");}")()},
iX:function(a,b,c,d){var s=H.hr,r=H.iU
switch(b?-1:a){case 0:throw H.e(new H.de("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
iY:function(a,b){var s,r,q,p,o,n,m,l=$.bO
if(l==null)l=$.bO=H.e4("self")
s=$.hq
if(s==null)s=$.hq=H.e4("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.iX(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.aC
if(typeof n!=="number")return n.v()
$.aC=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.aC
if(typeof n!=="number")return n.v()
$.aC=n+1
return new Function(o+n+"}")()},
ha:function(a,b,c,d,e,f,g){return H.iZ(a,b,c,d,!!e,!!f,g)},
iS:function(a,b){return H.dI(v.typeUniverse,H.cP(a.a),b)},
iT:function(a,b){return H.dI(v.typeUniverse,H.cP(a.c),b)},
hr:function(a){return a.a},
iU:function(a){return a.c},
e4:function(a){var s,r,q,p=new H.bl("self","target","receiver","name"),o=J.ef(Object.getOwnPropertyNames(p),t.R)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.e(P.ho("Field name "+a+" not found."))},
cN:function(a){if(a==null)H.k7("boolean expression must not be null")
return a},
k7:function(a){throw H.e(new H.du(a))},
kx:function(a){throw H.e(new P.d1(a))},
kg:function(a){return v.getIsolateTag(a)},
ky:function(a){return H.d(new H.c_(a))},
lf:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kn:function(a){var s,r,q,p,o,n=H.cI($.ih.$1(a)),m=$.fs[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.jG($.ia.$2(a,n))
if(q!=null){m=$.fs[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.fC(s)
$.fs[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fw[n]=s
return s}if(p==="-"){o=H.fC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ip(a,s)
if(p==="*")throw H.e(P.hK(n))
if(v.leafTags[n]===true){o=H.fC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ip(a,s)},
ip:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hg(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fC:function(a){return J.hg(a,!1,null,!!a.$ikN)},
kp:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.fC(s)
else return J.hg(s,c,null,null)},
ki:function(){if(!0===$.hd)return
$.hd=!0
H.kj()},
kj:function(){var s,r,q,p,o,n,m,l
$.fs=Object.create(null)
$.fw=Object.create(null)
H.kh()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ir.$1(o)
if(n!=null){m=H.kp(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kh:function(){var s,r,q,p,o,n,m=C.S()
m=H.bA(C.T,H.bA(C.U,H.bA(C.G,H.bA(C.G,H.bA(C.V,H.bA(C.W,H.bA(C.X(C.F),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ih=new H.ft(p)
$.ia=new H.fu(o)
$.ir=new H.fv(n)},
bA:function(a,b){return a(b)||b},
j4:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.e(new P.ed("Illegal RegExp pattern ("+String(s)+")",a))},
kt:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
d6:function d6(){},
aP:function aP(a,b){this.a=a
this.$ti=b},
eB:function eB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c9:function c9(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a){this.a=a},
er:function er(a){this.a=a},
bW:function bW(a,b){this.a=a
this.b=b},
cz:function cz(a){this.a=a
this.b=null},
ai:function ai(){},
dl:function dl(){},
dj:function dj(){},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
de:function de(a){this.a=a},
du:function du(a){this.a=a},
bZ:function bZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eh:function eh(a,b){this.a=a
this.b=b
this.c=null},
c0:function c0(a,b){this.a=a
this.$ti=b},
c1:function c1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
fb:function fb(a){this.b=a},
hE:function(a,b){var s=b.c
return s==null?b.c=H.h1(a,b.z,!0):s},
hD:function(a,b){var s=b.c
return s==null?b.c=H.cD(a,"al",[b.z]):s},
hF:function(a){var s=a.y
if(s===6||s===7||s===8)return H.hF(a.z)
return s===11||s===12},
jg:function(a){return a.cy},
bC:function(a){return H.fg(v.typeUniverse,a,!1)},
kk:function(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.aM(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
aM:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aM(a,s,a0,a1)
if(r===s)return b
return H.hY(a,r,!0)
case 7:s=b.z
r=H.aM(a,s,a0,a1)
if(r===s)return b
return H.h1(a,r,!0)
case 8:s=b.z
r=H.aM(a,s,a0,a1)
if(r===s)return b
return H.hX(a,r,!0)
case 9:q=b.Q
p=H.cM(a,q,a0,a1)
if(p===q)return b
return H.cD(a,b.z,p)
case 10:o=b.z
n=H.aM(a,o,a0,a1)
m=b.Q
l=H.cM(a,m,a0,a1)
if(n===o&&l===m)return b
return H.h_(a,n,l)
case 11:k=b.z
j=H.aM(a,k,a0,a1)
i=b.Q
h=H.k2(a,i,a0,a1)
if(j===k&&h===i)return b
return H.hW(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cM(a,g,a0,a1)
o=b.z
n=H.aM(a,o,a0,a1)
if(f===g&&n===o)return b
return H.h0(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.e(P.e1("Attempted to substitute unexpected RTI kind "+c))}},
cM:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aM(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
k3:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aM(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
k2:function(a,b,c,d){var s,r=b.a,q=H.cM(a,r,c,d),p=b.b,o=H.cM(a,p,c,d),n=b.c,m=H.k3(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.dA()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
id:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ii(s)
return a.$S()}return null},
ij:function(a,b){var s
if(H.hF(b))if(a instanceof H.ai){s=H.id(a)
if(s!=null)return s}return H.cP(a)},
cP:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.h4(a)}if(Array.isArray(a))return H.z(a)
return H.h4(J.b4(a))},
z:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
D:function(a){var s=a.$ti
return s!=null?s:H.h4(a)},
h4:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.jP(a,s)},
jP:function(a,b){var s=a instanceof H.ai?a.__proto__.__proto__.constructor:b,r=H.jE(v.typeUniverse,s.name)
b.$ccache=r
return r},
ii:function(a){var s,r,q
H.S(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.fg(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
kd:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.dG(a)
q=H.fg(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.dG(q):p},
jO:function(a){var s,r,q,p=this
if(p===t.K)return H.cJ(p,a,H.jS)
if(!H.aN(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cJ(p,a,H.jV)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.i4
else if(r===t.V||r===t.H)q=H.jR
else if(r===t.aw)q=H.jT
else q=r===t.cJ?H.i2:null
if(q!=null)return H.cJ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.km)){p.r="$i"+s
return H.cJ(p,a,H.jU)}}else if(s===7)return H.cJ(p,a,H.jM)
return H.cJ(p,a,H.jK)},
cJ:function(a,b,c){a.b=c
return a.b(b)},
jN:function(a){var s,r=this,q=H.jJ
if(!H.aN(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.jH
else if(r===t.K)q=H.jF
else{s=H.cQ(r)
if(s)q=H.jL}r.a=q
return r.a(a)},
h7:function(a){var s,r=a.y
if(!H.aN(a))if(!(a===t._))if(!(a===t.cF))if(r!==7)s=r===8&&H.h7(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jK:function(a){var s=this
if(a==null)return H.h7(s)
return H.K(v.typeUniverse,H.ij(a,s),null,s,null)},
jM:function(a){if(a==null)return!0
return this.z.b(a)},
jU:function(a){var s,r=this
if(a==null)return H.h7(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.b4(a)[s]},
jJ:function(a){var s,r=this
if(a==null){s=H.cQ(r)
if(s)return a}else if(r.b(a))return a
H.i0(a,r)},
jL:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.i0(a,s)},
i0:function(a,b){throw H.e(H.hV(H.hO(a,H.ij(a,b),H.a5(b,null))))},
fp:function(a,b,c,d){var s=null
if(H.K(v.typeUniverse,a,s,b,s))return a
throw H.e(H.hV("The type argument '"+H.a5(a,s)+"' is not a subtype of the type variable bound '"+H.a5(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
hO:function(a,b,c){var s=P.d2(a),r=H.a5(b==null?H.cP(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
hV:function(a){return new H.cC("TypeError: "+a)},
a4:function(a,b){return new H.cC("TypeError: "+H.hO(a,null,b))},
jS:function(a){return a!=null},
jF:function(a){if(a!=null)return a
throw H.e(H.a4(a,"Object"))},
jV:function(a){return!0},
jH:function(a){return a},
i2:function(a){return!0===a||!1===a},
l5:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.e(H.a4(a,"bool"))},
l7:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.a4(a,"bool"))},
l6:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.a4(a,"bool?"))},
b2:function(a){if(typeof a=="number")return a
throw H.e(H.a4(a,"double"))},
l9:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a4(a,"double"))},
l8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a4(a,"double?"))},
i4:function(a){return typeof a=="number"&&Math.floor(a)===a},
S:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.e(H.a4(a,"int"))},
lb:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.a4(a,"int"))},
la:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.a4(a,"int?"))},
jR:function(a){return typeof a=="number"},
h2:function(a){if(typeof a=="number")return a
throw H.e(H.a4(a,"num"))},
ld:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a4(a,"num"))},
lc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a4(a,"num?"))},
jT:function(a){return typeof a=="string"},
cI:function(a){if(typeof a=="string")return a
throw H.e(H.a4(a,"String"))},
le:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.a4(a,"String"))},
jG:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.a4(a,"String?"))},
k_:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a5(a[q],b)
return s},
i1:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.A(a5,"T"+(q+p))
for(o=t.R,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.n(a5,j)
m=C.K.v(m,a5[j])
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
if(l===9){p=H.k4(a.z)
o=a.Q
return o.length!==0?p+("<"+H.k_(o,b)+">"):p}if(l===11)return H.i1(a,b,null)
if(l===12)return H.i1(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.n(b,n)
return b[n]}return"?"},
k4:function(a){var s,r=H.iv(a)
if(r!=null)return r
s="minified:"+a
return s},
hZ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jE:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.fg(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cE(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cD(a,b,q)
n[b]=o
return o}else return m},
jC:function(a,b){return H.i_(a.tR,b)},
jB:function(a,b){return H.i_(a.eT,b)},
fg:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.hU(H.hS(a,null,b,c))
r.set(b,s)
return s},
dI:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.hU(H.hS(a,b,c,!0))
q.set(c,r)
return r},
jD:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.h_(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b1:function(a,b){b.a=H.jN
b.b=H.jO
return b},
cE:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ap(null,null)
s.y=b
s.cy=c
r=H.b1(a,s)
a.eC.set(c,r)
return r},
hY:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.jz(a,b,r,c)
a.eC.set(r,s)
return s},
jz:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aN(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ap(null,null)
q.y=6
q.z=b
q.cy=c
return H.b1(a,q)},
h1:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.jy(a,b,r,c)
a.eC.set(r,s)
return s},
jy:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aN(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cQ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.cF)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cQ(q.z))return q
else return H.hE(a,b)}}p=new H.ap(null,null)
p.y=7
p.z=b
p.cy=c
return H.b1(a,p)},
hX:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.jw(a,b,r,c)
a.eC.set(r,s)
return s},
jw:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aN(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cD(a,"al",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.ap(null,null)
q.y=8
q.z=b
q.cy=c
return H.b1(a,q)},
jA:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ap(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b1(a,s)
a.eC.set(q,r)
return r},
dH:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
jv:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cD:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.dH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ap(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b1(a,r)
a.eC.set(p,q)
return q},
h_:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.dH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ap(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b1(a,o)
a.eC.set(q,n)
return n},
hW:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.dH(m)
if(j>0){s=l>0?",":""
r=H.dH(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.jv(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ap(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b1(a,o)
a.eC.set(q,r)
return r},
h0:function(a,b,c,d){var s,r=b.cy+("<"+H.dH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.jx(a,b,c,r,d)
a.eC.set(r,s)
return s},
jx:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aM(a,b,r,0)
m=H.cM(a,c,r,0)
return H.h0(a,n,m,c!==m)}}l=new H.ap(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b1(a,l)},
hS:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hU:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.jq(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.hT(a,r,h,g,!1)
else if(q===46)r=H.hT(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b0(a.u,a.e,g.pop()))
break
case 94:g.push(H.jA(a.u,g.pop()))
break
case 35:g.push(H.cE(a.u,5,"#"))
break
case 64:g.push(H.cE(a.u,2,"@"))
break
case 126:g.push(H.cE(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.fZ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cD(p,n,o))
else{m=H.b0(p,a.e,n)
switch(m.y){case 11:g.push(H.h0(p,m,o,a.n))
break
default:g.push(H.h_(p,m,o))
break}}break
case 38:H.jr(a,g)
break
case 42:p=a.u
g.push(H.hY(p,H.b0(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.h1(p,H.b0(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.hX(p,H.b0(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.dA()
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
H.fZ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.hW(p,H.b0(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.fZ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.jt(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b0(a.u,a.e,i)},
jq:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hT:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.hZ(s,o.z)[p]
if(n==null)H.d('No "'+p+'" in "'+H.jg(o)+'"')
d.push(H.dI(s,o,n))}else d.push(p)
return m},
jr:function(a,b){var s=b.pop()
if(0===s){b.push(H.cE(a.u,1,"0&"))
return}if(1===s){b.push(H.cE(a.u,4,"1&"))
return}throw H.e(P.e1("Unexpected extended operation "+H.t(s)))},
b0:function(a,b,c){if(typeof c=="string")return H.cD(a,c,a.sEA)
else if(typeof c=="number")return H.js(a,b,c)
else return c},
fZ:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b0(a,b,c[s])},
jt:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b0(a,b,c[s])},
js:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.e(P.e1("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.e(P.e1("Bad index "+c+" for "+b.k(0)))},
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aN(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aN(b))return!1
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
if(p===6){s=H.hE(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.hD(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.hD(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.i3(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return H.i3(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.jQ(a,b,c,d,e)}return!1},
i3:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
jQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.hZ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.dI(a,b,l[p]),c,r[p],e))return!1
return!0},
cQ:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aN(a))if(r!==7)if(!(r===6&&H.cQ(a.z)))s=r===8&&H.cQ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
km:function(a){var s
if(!H.aN(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aN:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.R},
i_:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ap:function ap(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
dA:function dA(){this.c=this.b=this.a=null},
dG:function dG(a){this.a=a},
dz:function dz(){},
cC:function cC(a){this.a=a},
iv:function(a){return v.mangledGlobalNames[a]}},J={
hg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hc:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hd==null){H.ki()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.e(P.hK("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.f9
if(o==null)o=$.f9=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.kn(a)
if(p!=null)return p
if(typeof a=="function")return C.a5
s=Object.getPrototypeOf(a)
if(s==null)return C.M
if(s===Object.prototype)return C.M
if(typeof q=="function"){o=$.f9
if(o==null)o=$.f9=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.B,enumerable:false,writable:true,configurable:true})
return C.B}return C.B},
hv:function(a,b){if(a<0||a>4294967295)throw H.e(P.aG(a,0,4294967295,"length",null))
return J.hx(new Array(a),b)},
hw:function(a,b){if(a<0)throw H.e(P.ho("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("r<0>"))},
hx:function(a,b){return J.ef(H.a(a,b.h("r<0>")),b)},
ef:function(a,b){a.fixed$length=Array
return a},
b4:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bY.prototype
return J.d8.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.bo.prototype
if(typeof a=="boolean")return J.d7.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.C)return a
return J.hc(a)},
ab:function(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.C))return J.aA.prototype
return a},
ke:function(a){if(typeof a=="number")return J.aQ.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.C))return J.aA.prototype
return a},
ah:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.C))return J.aA.prototype
return a},
a6:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.C)return a
return J.hc(a)},
ie:function(a){if(typeof a=="number")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aA.prototype
return a},
kf:function(a){if(typeof a=="number")return J.aQ.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aA.prototype
return a},
ig:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.C)return a
return J.hc(a)},
fJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ke(a).v(a,b)},
aO:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b4(a).E(a,b)},
cR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kf(a).q(a,b)},
P:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.ah(a).m(a,b)},
hk:function(a,b,c){return J.ab(a).H(a,b,c)},
iK:function(a,b,c,d){return J.ig(a).fh(a,b,c,d)},
iL:function(a,b,c,d){return J.ig(a).ft(a,b,c,d)},
iM:function(a,b){return J.ab(a).A(a,b)},
b9:function(a,b){return J.ab(a).D(a,b)},
hl:function(a,b){return J.ab(a).S(a,b)},
iN:function(a){return J.ie(a).h6(a)},
a7:function(a){return J.ab(a).gP(a)},
bD:function(a){return J.b4(a).gt(a)},
ba:function(a){return J.ah(a).gT(a)},
cS:function(a){return J.ab(a).gaL(a)},
y:function(a){return J.ab(a).gB(a)},
bE:function(a){return J.ab(a).gK(a)},
x:function(a){return J.a6(a).gl(a)},
hm:function(a,b,c){return J.ab(a).bJ(a,b,c)},
u:function(a,b,c){return J.ab(a).cr(a,b,c)},
hn:function(a,b){return J.ab(a).a5(a,b)},
fK:function(a){return J.ie(a).ar(a)},
dN:function(a){return J.ab(a).U(a)},
cT:function(a){return J.b4(a).k(a)},
am:function am(){},
d7:function d7(){},
bo:function bo(){},
be:function be(){},
dd:function dd(){},
aA:function aA(){},
aR:function aR(){},
r:function r(a){this.$ti=a},
eg:function eg(a){this.$ti=a},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aQ:function aQ(){},
bY:function bY(){},
d8:function d8(){},
aE:function aE(){}},P={
jl:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.k8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bB(new P.eR(q),1)).observe(s,{childList:true})
return new P.eQ(q,s,r)}else if(self.setImmediate!=null)return P.k9()
return P.ka()},
jm:function(a){self.scheduleImmediate(H.bB(new P.eS(t.M.a(a)),0))},
jn:function(a){self.setImmediate(H.bB(new P.eT(t.M.a(a)),0))},
jo:function(a){t.M.a(a)
P.ju(0,a)},
ju:function(a,b){var s=new P.fe()
s.f6(a,b)
return s},
av:function(a){return new P.dv(new P.R($.I,a.h("R<0>")),a.h("dv<0>"))},
au:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
T:function(a,b){P.jI(a,b)},
at:function(a,b){b.c6(0,a)},
as:function(a,b){b.dL(H.b7(a),H.b5(a))},
jI:function(a,b){var s,r,q=new P.fh(b),p=new P.fi(b)
if(a instanceof P.R)a.dw(q,p,t.z)
else{s=t.z
if(t.v.b(a))a.cF(q,p,s)
else{r=new P.R($.I,t.c)
r.a=4
r.c=a
r.dw(q,p,s)}}},
aw:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.I.ee(new P.fl(s),t.N,t.S,t.z)},
jp:function(a){return new P.bw(a,1)},
hP:function(){return C.ac},
hQ:function(a){return new P.bw(a,3)},
i5:function(a,b){return new P.cB(a,b.h("cB<0>"))},
e2:function(a,b){var s=H.h9(a,"error",t.K)
return new P.bL(s,b==null?P.iQ(a):b)},
iQ:function(a){var s
if(t.bU.b(a)){s=a.gb7()
if(s!=null)return s}return C.Z},
f_:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.bc()
b.a=a.a
b.c=a.c
P.bv(b,q)}else{q=t.d.a(b.c)
b.a=2
b.c=a
a.dt(q)}},
bv:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.u,r=t.d,q=t.v;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.fj(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.bv(b.a,a)
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
P.fj(c,c,k.b,j.a,j.b)
return}f=$.I
if(f!==g)$.I=g
else f=c
a=a.c
if((a&15)===8)new P.f7(p,b,o).$0()
else if(i){if((a&1)!==0)new P.f6(p,j).$0()}else if((a&2)!==0)new P.f5(b,p).$0()
if(f!=null)$.I=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("al<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.bd(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.f_(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.bd(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
jY:function(a,b){var s
if(t.ag.b(a))return b.ee(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.e(P.iO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
jX:function(){var s,r
for(s=$.by;s!=null;s=$.by){$.cL=null
r=s.b
$.by=r
if(r==null)$.cK=null
s.a.$0()}},
k1:function(){$.h5=!0
try{P.jX()}finally{$.cL=null
$.h5=!1
if($.by!=null)$.hi().$1(P.ib())}},
i8:function(a){var s=new P.dw(a),r=$.cK
if(r==null){$.by=$.cK=s
if(!$.h5)$.hi().$1(P.ib())}else $.cK=r.b=s},
k0:function(a){var s,r,q,p=$.by
if(p==null){P.i8(a)
$.cL=$.cK
return}s=new P.dw(a)
r=$.cL
if(r==null){s.b=p
$.by=$.cL=s}else{q=r.b
s.b=q
$.cL=r.b=s
if(q==null)$.cK=s}},
kv:function(a){var s=null,r=$.I
if(C.i===r){P.bz(s,s,C.i,a)
return}P.bz(s,s,r,t.M.a(r.dI(a)))},
kS:function(a,b){H.h9(a,"stream",t.K)
return new P.dE(b.h("dE<0>"))},
fj:function(a,b,c,d,e){P.k0(new P.fk(d,e))},
i6:function(a,b,c,d,e){var s,r=$.I
if(r===c)return d.$0()
$.I=c
s=r
try{r=d.$0()
return r}finally{$.I=s}},
i7:function(a,b,c,d,e,f,g){var s,r=$.I
if(r===c)return d.$1(e)
$.I=c
s=r
try{r=d.$1(e)
return r}finally{$.I=s}},
jZ:function(a,b,c,d,e,f,g,h,i){var s,r=$.I
if(r===c)return d.$2(e,f)
$.I=c
s=r
try{r=d.$2(e,f)
return r}finally{$.I=s}},
bz:function(a,b,c,d){t.M.a(d)
if(C.i!==c)d=c.dI(d)
P.i8(d)},
eR:function eR(a){this.a=a},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
eT:function eT(a){this.a=a},
fe:function fe(){},
ff:function ff(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=!1
this.$ti=b},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
fl:function fl(a){this.a=a},
bw:function bw(a,b){this.a=a
this.b=b},
bx:function bx(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
cB:function cB(a,b){this.a=a
this.$ti=b},
bL:function bL(a,b){this.a=a
this.b=b},
dx:function dx(){},
cA:function cA(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
R:function R(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eX:function eX(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
dw:function dw(a){this.a=a
this.b=null},
cj:function cj(){},
ez:function ez(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
ck:function ck(){},
dE:function dE(a){this.$ti=a},
cF:function cF(){},
fk:function fk(a,b){this.a=a
this.b=b},
dD:function dD(){},
fc:function fc(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function(a,b){return new H.bZ(a.h("@<0>").C(b).h("bZ<1,2>"))},
j5:function(a){return new P.aL(a.h("aL<0>"))},
j6:function(a){return new P.aL(a.h("aL<0>"))},
fY:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fX:function(a,b,c){var s=new P.bi(a,b,c.h("bi<0>"))
s.c=a.e
return s},
j1:function(a,b,c){var s,r
if(P.h6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.A($.ag,a)
try{P.jW(a,s)}finally{if(0>=$.ag.length)return H.n($.ag,-1)
$.ag.pop()}r=P.hH(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fP:function(a,b,c){var s,r
if(P.h6(a))return b+"..."+c
s=new P.dk(b)
C.a.A($.ag,a)
try{r=s
r.a=P.hH(r.a,a,", ")}finally{if(0>=$.ag.length)return H.n($.ag,-1)
$.ag.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
h6:function(a){var s,r
for(s=$.ag.length,r=0;r<s;++r)if(a===$.ag[r])return!0
return!1},
jW:function(a,b){var s,r,q,p,o,n,m,l=a.gB(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.i())return
s=H.t(l.gn())
C.a.A(b,s)
k+=s.length+2;++j}if(!l.i()){if(j<=5)return
if(0>=b.length)return H.n(b,-1)
r=b.pop()
if(0>=b.length)return H.n(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.i()){if(j<=4){C.a.A(b,H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.n(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.i();p=o,o=n){n=l.gn();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.n(b,-1)
k-=b.pop().length+2;--j}C.a.A(b,"...")
return}}q=H.t(p)
r=H.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.n(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.A(b,m)
C.a.A(b,q)
C.a.A(b,r)},
fT:function(a,b){var s,r,q=P.j5(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c)(a),++r)q.A(0,b.a(a[r]))
return q},
hC:function(a){var s,r={}
if(P.h6(a))return"{...}"
s=new P.dk("")
try{C.a.A($.ag,a)
s.a+="{"
r.a=!0
a.e5(0,new P.ek(r,s))
s.a+="}"}finally{if(0>=$.ag.length)return H.n($.ag,-1)
$.ag.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dB:function dB(a){this.a=a
this.c=this.b=null},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bX:function bX(){},
V:function V(){},
c3:function c3(){},
ek:function ek(a,b){this.a=a
this.b=b},
bp:function bp(){},
cg:function cg(){},
cy:function cy(){},
cH:function cH(){},
j_:function(a){if(a instanceof H.ai)return a.k(0)
return"Instance of '"+H.ev(a)+"'"},
hB:function(a,b,c,d){var s,r=c?J.hw(a,d):J.hv(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ej:function(a,b,c){var s,r,q=H.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c)(a),++r)C.a.A(q,c.a(a[r]))
return J.ef(q,c)},
l:function(a,b,c){var s
if(b)return P.hA(a,c)
s=J.ef(P.hA(a,c),c)
return s},
hA:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("r<0>"))
s=H.a([],b.h("r<0>"))
for(r=J.y(a);r.i();)C.a.A(s,r.gn())
return s},
fW:function(a){return new H.d9(a,H.j4(a,!1,!0,!1,!1,!1))},
hH:function(a,b,c){var s=J.y(b)
if(!s.i())return a
if(c.length===0){do a+=H.t(s.gn())
while(s.i())}else{a+=H.t(s.gn())
for(;s.i();)a=a+c+H.t(s.gn())}return a},
d2:function(a){if(typeof a=="number"||H.i2(a)||null==a)return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
return P.j_(a)},
e1:function(a){return new P.bK(a)},
ho:function(a){return new P.aB(!1,null,null,a)},
iO:function(a,b,c){return new P.aB(!0,a,b,c)},
ew:function(a,b){return new P.cc(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
je:function(a,b,c,d){if(a<b||a>c)throw H.e(P.aG(a,b,c,d,null))
return a},
cd:function(a,b,c){if(0>a||a>c)throw H.e(P.aG(a,0,c,"start",null))
if(a>b||b>c)throw H.e(P.aG(b,a,c,"end",null))
return b},
ao:function(a,b){if(a<0)throw H.e(P.aG(a,0,null,b,null))
return a},
fO:function(a,b,c,d,e){var s=H.S(e==null?J.x(b):e)
return new P.d5(s,!0,a,c,"Index out of range")},
af:function(a){return new P.ds(a)},
hK:function(a){return new P.dq(a)},
ae:function(a){return new P.br(a)},
aj:function(a){return new P.d_(a)},
G:function G(){},
bK:function bK(a){this.a=a},
dp:function dp(){},
db:function db(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d5:function d5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ds:function ds(a){this.a=a},
dq:function dq(a){this.a=a},
br:function br(a){this.a=a},
d_:function d_(a){this.a=a},
dc:function dc(){},
ci:function ci(){},
d1:function d1(a){this.a=a},
eW:function eW(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
o:function o(){},
H:function H(){},
Q:function Q(){},
C:function C(){},
dF:function dF(){},
dk:function dk(a){this.a=a},
io:function(a,b,c){H.fp(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
im:function(a,b,c){H.fp(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
dC:function dC(){this.b=this.a=0},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
fa:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hR:function(a,b,c,d){var s=W.fa(W.fa(W.fa(W.fa(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
eU:function(a,b,c,d,e){var s=W.i9(new W.eV(c),t.aD),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.iK(a,b,s,!1)}return new W.cw(a,b,s,!1,e.h("cw<0>"))},
i9:function(a,b){var s=$.I
if(s===C.i)return a
return s.fQ(a,b)},
m:function m(){},
cV:function cV(){},
cX:function cX(){},
bb:function bb(){},
bP:function bP(){},
ay:function ay(){},
eb:function eb(){},
bS:function bS(){},
h:function h(){},
j:function j(){},
a2:function a2(){},
d4:function d4(){},
ad:function ad(){},
a9:function a9(){},
dg:function dg(){},
ar:function ar(){},
bu:function bu(){},
eP:function eP(a){this.a=a},
ct:function ct(){},
fN:function fN(a,b){this.a=a
this.$ti=b},
cv:function cv(){},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cw:function cw(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eV:function eV(a){this.a=a}},A={N:function N(a,b){this.a=a
this.$ti=b},ee:function ee(a){this.a=a},cx:function cx(a,b){this.a=a
this.b=null
this.$ti=b},
hu:function(a,b){return A.j3(a,b,b)},
j3:function(a,b,c){return P.i5(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$hu(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.jp(s[m])
case 5:case 3:s.length===n||(0,H.c)(s),++m
q=2
break
case 4:return P.hP()
case 1:return P.hQ(o)}}},c)},
b3:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h3:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},X={a_:function a_(){},ak:function ak(a){this.b=a},a1:function a1(){},
ic:function(a,b,c){var s,r
if(c){if(!$.dJ.dM(a)){s=t.S
$.dJ.H(0,a,P.fS(s,s))}if(!$.dJ.m(0,a).dM(b)){s=$.dJ.m(0,a)
s.toString
s.H(0,b,X.ic(a,b,!1))}s=$.dJ.m(0,a).m(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.bu(T.w(b+1,1,1),1,new X.fq(),s)
return C.d.ak(C.a.bu(T.w(a-b,a,-1),1,new X.fr(),s),r)},
dM:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fq:function fq(){},
fr:function fr(){}},G={
dR:function(a,b){var s=null,r=new M.bn(C.c,s,s,s,s,s)
r.al(C.c,s,s)
r.Y(t.a.a(C.a9))
r=new G.cW(a,0,M.is(),b,r)
r.aj()
r.f_(a,s,b,M.is(),0)
return r},
cW:function cW(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.r=e
_.x=null},
dn:function(a,b,c,d,e){var s=new G.co(d,c,b,a)
s.aj()
s.d6(a,b,c,d,e)
return s},
co:function co(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},M={di:function di(){},dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
fU:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b4.O,b0=b4.bt,b1=P.l(b4.e2,!0,t.V),b2=b4.h_,b3=b4.ci
if(b3!=null){s=H.z(b3)
s=P.l(new H.L(b3,s.h("O(1)").a(new M.es()),s.h("L<1,O>")),!0,t.F)
b3=s}else b3=a8
s=b4.cj
if(s!=null){r=H.z(s)
r=P.l(new H.L(s,r.h("O(1)").a(new M.et()),r.h("L<1,O>")),!0,t.F)
s=r}else s=a8
r=b4.a1
q=b4.a7
N.aV(a8,0,C.c,a8,0)
p=b4.r1
o=b4.r2
n=N.cm(b4.rx)
m=b4.ry
m=m==null?a8:N.ax(m)
l=b4.x1
l=l==null?a8:N.ax(l)
k=b4.dy
k=k==null?a8:J.u(k,new V.X(),t.G)
if(k==null)k=H.a([],t.O)
j=t.G
k=P.l(k,!0,j)
i=b4.fr
i=i==null?a8:J.u(i,new V.Y(),j)
i=P.l(i==null?H.a([],t.O):i,!0,j)
h=b4.fx
h=h==null?a8:J.u(h,new V.Z(),j)
j=P.l(h==null?H.a([],t.O):h,!0,j)
h=b4.x
g=b4.y
f=b4.z
e=b4.Q
d=e.a
c=e.b
e=e.c
b=b4.cy
a=b4.gI(b4).j()
a0=b4.gL(b4)
a1=b4.c
if(a1===$)a1=H.d(H.f("target"))
a1=a1==null?a8:a1.j()
a2=H.a([],t.r)
for(a3=b4.gu(),a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,H.c)(a3),++a5)a2.push(a3[a5].j())
a3=b4.gM()
a4=H.a([],t.l)
for(a6=J.y(b4.gp(b4));a6.i();){a7=a6.gn()
a4.push(new Y.b(a7.a,a7.b,a7.c))}return new M.bq(b4.a8,a9,b4.cg,b4.aV,b4.e0,b4.e1,b0,b1,!1,b4.fX,b4.e3,b4.fY,b4.fZ,new Y.b(b2.a,b2.b,b2.c),b4.h0,b4.e4,b4.h1,b4.h2,b4.h3,b4.h4,b3,s,b4.ao,b4.aE,r,q,p,new Y.b(o.a,o.b,o.c),n,m,l,h,g,f,new Y.b(d,c,e),b4.ch,b4.cx,b,b4.db,b4.dx,k,i,j,a,a0,a1,a2,a3,a4)},
iR:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a5.bo,a1=M.bN(a5.bp),a2=M.bN(a5.bq),a3=M.bN(a5.br),a4=a5.dy
a4=a4==null?a:J.u(a4,new V.X(),t.G)
if(a4==null)a4=H.a([],t.O)
s=t.G
a4=P.l(a4,!0,s)
r=a5.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a5.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a5.x
p=a5.y
o=a5.z
n=a5.Q
m=n.a
l=n.b
n=n.c
k=a5.cy
j=a5.gI(a5).j()
i=a5.gL(a5)
h=a5.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a5.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a5.gM()
e=H.a([],t.l)
for(c=J.y(a5.gp(a5));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}a0=new M.bM(new Y.b(a0.a,a0.b,a0.c),a1,a2,a3,a5.cc,a5.cd,a5.ce,a5.cf,q,p,o,new Y.b(m,l,n),a5.ch,a5.cx,k,a5.db,a5.dx,a4,r,s,j,i,h,g,f,e)
a0.d5(a5)
return a0},
ja:function(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=C.D.af(C.u),a8=C.k.af(C.k),a9=C.E.af(C.t),b0=t.L,b1=H.a([],b0)
for(s=b2.gdG(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)b1.push(s[q].j())
b0=H.a([],b0)
for(s=b2.gdV(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)b0.push(s[q].j())
s=b2.bn
s=s==null?a6:V.hM(s)
r=V.hM(b2.cb)
p=b2.bo
o=M.bN(b2.bp)
n=M.bN(b2.bq)
m=M.bN(b2.br)
l=b2.dy
l=l==null?a6:J.u(l,new V.X(),t.G)
if(l==null)l=H.a([],t.O)
k=t.G
l=P.l(l,!0,k)
j=b2.fr
j=j==null?a6:J.u(j,new V.Y(),k)
j=P.l(j==null?H.a([],t.O):j,!0,k)
i=b2.fx
i=i==null?a6:J.u(i,new V.Z(),k)
k=P.l(i==null?H.a([],t.O):i,!0,k)
i=b2.x
h=b2.y
g=b2.z
f=b2.Q
e=f.a
d=f.b
f=f.c
c=b2.cy
b=b2.gI(b2).j()
a=b2.gL(b2)
a0=b2.c
if(a0===$)a0=H.d(H.f("target"))
a0=a0==null?a6:a0.j()
a1=H.a([],t.r)
for(a2=b2.gu(),a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,H.c)(a2),++q)a1.push(a2[q].j())
a2=b2.gM()
a3=H.a([],t.l)
for(a4=J.y(b2.gp(b2));a4.i();){a5=a4.gn()
a3.push(new Y.b(a5.a,a5.b,a5.c))}a7=new M.ca(a7,a8,a9,r,s,b2.dW,b2.dX,b2.dY,b1,b0,new Y.b(p.a,p.b,p.c),o,n,m,b2.cc,b2.cd,b2.ce,b2.cf,i,h,g,new Y.b(e,d,f),b2.ch,b2.cx,c,b2.db,b2.dx,l,j,k,b,a,a0,a1,a2,a3)
a7.d5(b2)
return a7},
hp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new M.U(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
bN:function(a){return new M.U(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
bq:function bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9){var _=this
_.a8=a
_.O=b
_.cg=c
_.aV=d
_.e0=e
_.e1=f
_.bt=g
_.e2=h
_.hH=i
_.fX=j
_.e3=k
_.fY=l
_.fZ=m
_.h_=n
_.h0=o
_.e4=p
_.h1=q
_.h2=r
_.h3=s
_.h4=a0
_.ci=a1
_.cj=a2
_.ao=a3
_.aE=a4
_.a1=a5
_.a7=a6
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
es:function es(){},
et:function et(){},
d0:function d0(){},
bM:function bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.bo=a
_.bp=b
_.bq=c
_.br=d
_.bs=_.aU=_.aT=null
_.cc=e
_.cd=f
_.ce=g
_.cf=h
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
e3:function e3(){},
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var _=this
_.fU=a
_.fV=b
_.fW=c
_.cb=d
_.bn=e
_.dW=f
_.dX=g
_.dY=h
_.dZ=i
_.e_=j
_.bo=k
_.bp=l
_.bq=m
_.br=n
_.bs=_.aU=_.aT=null
_.cc=o
_.cd=p
_.ce=q
_.cf=r
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
U:function U(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
j9:function(a){var s,r,q,p,o,n,m=a.gI(a).j(),l=a.gL(a),k=a.c
if(k===$)k=H.d(H.f("target"))
k=k==null?null:k.j()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(r[p].j())
r=a.gM()
q=H.a([],t.l)
for(o=J.y(a.gp(a));o.i();){n=o.gn()
q.push(new Y.b(n.a,n.b,n.c))}return new M.q(m,l,k,s,r,q)},
j0:function(a){var s,r,q,p,o,n,m=a.gI(a).j(),l=a.gL(a),k=a.c
if(k===$)k=H.d(H.f("target"))
k=k==null?null:k.j()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(r[p].j())
r=a.gM()
q=H.a([],t.l)
for(o=J.y(a.gp(a));o.i();){n=o.gn()
q.push(new Y.b(n.a,n.b,n.c))}return new M.bn(m,l,k,s,r,q)},
q:function q(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ep:function ep(a){this.a=a},
eo:function eo(a){this.a=a},
en:function en(a){this.a=a},
eq:function eq(a,b){this.a=a
this.b=b},
el:function el(){},
em:function em(a){this.a=a},
bn:function bn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ec:function ec(){this.a=null},
ik:function(a,b,c){return a},
iu:function(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},E={
ht:function(a){var s=new E.d3(1,M.bj(),0,a)
s.aj()
s.d6(a,0,M.bj(),1,null)
return s},
d3:function d3(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},R={e5:function e5(a,b){this.c=a
this.d=8
this.r=b},e6:function e6(){},e7:function e7(){}},K={bF:function bF(){},cU:function cU(){},dO:function dO(a){this.a=a},dP:function dP(a){this.a=a},dQ:function dQ(a){this.a=a},
kb:function(a,b){var s,r,q,p,o,n,m,l,k
if(b===0)return H.a([],t.O)
s=T.fB(b,2,0).ah(0)
r=H.a([],t.t)
for(q=s.length,p=0;p<s.length;s.length===q||(0,H.c)(s),++p)r.push(J.iN(s[p]))
q=H.a([],t.n)
for(o=s.length,p=0;p<s.length;s.length===o||(0,H.c)(s),++p){n=s[p]
if(typeof n!=="number")return n.W()
q.push(C.b.W(n,1))}C.a.sK(q,1)
C.a.sK(r,1)
o=H.a([],t.O)
for(r=new A.N(H.a([r,q],t.dd),t.eB),r=r.gB(r);r.i();){m=r.b
if(m==null)m=H.d(P.ae("No element"))
q=J.fK(C.a.gP(m))
if(q<0||q>=3)return H.n(a,q)
q=a[q]
l=J.fK(C.a.gP(m))+1
if(l<0||l>=3)return H.n(a,l)
l=a[l]
k=C.a.gK(m)
o.push(q.q(0,1-k).v(0,l.q(0,k)))}return o},
p:function p(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function(){var s=new K.bR()
s.f4()
s.bA()},
bR:function bR(){var _=this
_.Q=!1
_.cx=_.ch=0
_.fy=_.fr=_.dy=_.dx=_.db=_.cy=null
_.a=0
_.x=_.r=_.f=_.d=null},
ea:function ea(a){this.a=a}},B={cY:function cY(a,b,c,d,e,f,g,h){var _=this
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
kw:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=V.dL(Z.dT(a),Z.dT(b),c,t.A)
m=H.a([],t.l)
for(r=s.gR(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
n=J.ah(o)
m.push(new Y.b(n.m(o,0),n.m(o,1),n.m(o,2)))}return m}},N={
aV:function(a,b,c,d,e){var s=t.O,r=a!=null?H.a([a],s):H.a([],s),q=H.a([c],s)
return new N.cl(q,d!=null?H.a([d],s):H.a([],s),e,r,b,0,C.e)},
cm:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.y(o);o.i();){r=o.gn()
s.push(new K.p(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.y(s);s.i();){q=s.gn()
r.push(new K.p(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.y(r);r.i();){p=r.gn()
q.push(new K.p(p.a,p.b,p.c,p.d))}r=q}else r=null
return new N.cl(o,s,a.c,r,a.e,a.f,a.r)},
jh:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.aV(a5,0,C.c,a5,0)
s=a6.r1
r=a6.r2
q=N.cm(a6.rx)
p=a6.ry
p=p==null?a5:N.ax(p)
o=a6.x1
o=o==null?a5:N.ax(o)
n=a6.dy
n=n==null?a5:J.u(n,new V.X(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.l(n,!0,m)
l=a6.fr
l=l==null?a5:J.u(l,new V.Y(),m)
l=P.l(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.u(k,new V.Z(),m)
m=P.l(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gI(a6).j()
c=a6.gL(a6)
b=a6.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].j())
a0=a6.gM()
a1=H.a([],t.l)
for(a3=J.y(a6.gp(a6));a3.i();){a4=a3.gn()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.cn(s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
hy:function(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=N.aV(s,0,C.c,s,0),q=f==null?C.h:f,p=l==null?C.c:l
r=new N.O(c,h,k,e,0.35,C.j,r,s,s,m,b,j,i,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.al(C.c,s,s)
r.aA(a,b,!1,q,!1,0.01,i,j,p,m,0.000001)
r.ay(C.c)
return r},
hz:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a8.a1,a7=a8.a7
N.aV(a5,0,C.c,a5,0)
s=a8.r1
r=a8.r2
q=N.cm(a8.rx)
p=a8.ry
p=p==null?a5:N.ax(p)
o=a8.x1
o=o==null?a5:N.ax(o)
n=a8.dy
n=n==null?a5:J.u(n,new V.X(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.l(n,!0,m)
l=a8.fr
l=l==null?a5:J.u(l,new V.Y(),m)
l=P.l(l==null?H.a([],t.O):l,!0,m)
k=a8.fx
k=k==null?a5:J.u(k,new V.Z(),m)
m=P.l(k==null?H.a([],t.O):k,!0,m)
k=a8.x
j=a8.y
i=a8.z
h=a8.Q
g=h.a
f=h.b
h=h.c
e=a8.cy
d=a8.gI(a8).j()
c=a8.gL(a8)
b=a8.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a8.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].j())
a0=a8.gM()
a1=H.a([],t.l)
for(a3=J.y(a8.gp(a8));a3.i();){a4=a3.gn()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.O(a8.ao,a8.aE,a6,a7,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a8.ch,a8.cx,e,a8.db,a8.dx,n,l,m,d,c,b,a,a0,a1)},
iP:function(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a9.gcn(),a7=a9.a1,a8=a9.a7
N.aV(a5,0,C.c,a5,0)
s=a9.r1
r=a9.r2
q=N.cm(a9.rx)
p=a9.ry
p=p==null?a5:N.ax(p)
o=a9.x1
o=o==null?a5:N.ax(o)
n=a9.dy
n=n==null?a5:J.u(n,new V.X(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.l(n,!0,m)
l=a9.fr
l=l==null?a5:J.u(l,new V.Y(),m)
l=P.l(l==null?H.a([],t.O):l,!0,m)
k=a9.fx
k=k==null?a5:J.u(k,new V.Z(),m)
m=P.l(k==null?H.a([],t.O):k,!0,m)
k=a9.x
j=a9.y
i=a9.z
h=a9.Q
g=h.a
f=h.b
h=h.c
e=a9.cy
d=a9.gI(a9).j()
c=a9.gL(a9)
b=a9.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a9.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].j())
a0=a9.gM()
a1=H.a([],t.l)
for(a3=J.y(a9.gp(a9));a3.i();){a4=a3.gn()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bI(a9.a8,a9.O,!0,a6,a9.ao,a9.aE,a7,a8,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a9.ch,a9.cx,e,a9.db,a9.dx,n,l,m,d,c,b,a,a0,a1)},
aZ:function(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a9.gcn(),a7=a9.a1,a8=a9.a7
N.aV(a5,0,C.c,a5,0)
s=a9.r1
r=a9.r2
q=N.cm(a9.rx)
p=a9.ry
p=p==null?a5:N.ax(p)
o=a9.x1
o=o==null?a5:N.ax(o)
n=a9.dy
n=n==null?a5:J.u(n,new V.X(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.l(n,!0,m)
l=a9.fr
l=l==null?a5:J.u(l,new V.Y(),m)
l=P.l(l==null?H.a([],t.O):l,!0,m)
k=a9.fx
k=k==null?a5:J.u(k,new V.Z(),m)
m=P.l(k==null?H.a([],t.O):k,!0,m)
k=a9.x
j=a9.y
i=a9.z
h=a9.Q
g=h.a
f=h.b
h=h.c
e=a9.cy
d=a9.gI(a9).j()
c=a9.gL(a9)
b=a9.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a9.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].j())
a0=a9.gM()
a1=H.a([],t.l)
for(a3=J.y(a9.gp(a9));a3.i();){a4=a3.gn()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.aY(a9.a8,a9.O,!0,a6,a9.ao,a9.aE,a7,a8,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a9.ch,a9.cx,e,a9.db,a9.dx,n,l,m,d,c,b,a,a0,a1)},
jb:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cb(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jf:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new N.ce(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
ji:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cp(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
ax:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new N.bJ(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
cl:function cl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dm:function dm(a){this.b=a},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
O:function O(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.ao=a
_.aE=b
_.a1=c
_.a7=d
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
bI:function bI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.a8=a
_.O=b
_.cg=c
_.aV=d
_.ao=e
_.aE=f
_.a1=g
_.a7=h
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
aY:function aY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.a8=a
_.O=b
_.cg=c
_.aV=d
_.ao=e
_.aE=f
_.a1=g
_.a7=h
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
cb:function cb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cp:function cp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
df:function df(){},
ex:function ex(a){this.a=a},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c}},V={
jj:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new V.B(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
hM:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.y(o);o.i();){r=o.gn()
s.push(new K.p(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.y(s);s.i();){q=s.gn()
r.push(new K.p(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.y(r);r.i();){p=r.gn()
q.push(new K.p(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.aX(o,s,a.c,r,a.e,a.f,a.r)},
dt:function(a){var s=null,r=new V.aK(4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.al(C.c,s,s)
r.aA(s,0,!1,s,!1,0.01,C.f,0,s,4,0.000001)
r.d7(a)
return r},
hL:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new V.aK(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jk:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.u(a0,new V.X(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.l(a0,!0,s)
r=a1.fr
r=r==null?a:J.u(r,new V.Y(),s)
r=P.l(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.u(q,new V.Z(),s)
s=P.l(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gI(a1).j()
i=a1.gL(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].j())
f=a1.gM()
e=H.a([],t.l)
for(c=J.y(a1.gp(a1));c.i();){b=c.gn()
e.push(new Y.b(b.a,b.b,b.c))}return new V.cq(a1.r1,a1.r2,q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
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
X:function X(){},
Y:function Y(){},
Z:function Z(){},
eM:function eM(){},
eN:function eN(){},
eH:function eH(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
eG:function eG(a){this.a=a},
eE:function eE(){},
eF:function eF(){},
eL:function eL(){},
eK:function eK(){},
aX:function aX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aK:function aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
bG:function bG(){},
hf:function(a,b,c){var s,r,q=t.p,p=V.dL(Z.ac(null,J.u(a,new V.fx(),q).U(0)),Z.ac(null,J.u(b,new V.fy(),q).U(0)),c,t.A)
q=p.gR(p)
s=H.z(q)
r=s.h("L<1,p>")
return P.l(new H.L(q,s.h("p(1)").a(new V.fz()),r),!0,r.h("E.E"))},
dL:function(a,b,c,d){return d.a(J.fJ(J.cR(a,1-c),J.cR(b,c)))},
fA:function(a,b,c,d){return d.a(J.fJ(J.cR(a,1-c),J.cR(b,c)))},
he:function(a,b,c){if(c>=1)return new S.A(b-1,1,t.C)
if(c<=0)return new S.A(a,0,t.C)
return new S.A(J.fK(V.dL(a,b,c,t.V)),C.b.W((b-a)*c,1),t.C)},
h8:function(a){return new V.fo(a,a.length-1)},
fE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.a6(r),p=T.w(q.gl(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.c)(p),++m){if(q.gl(r)===0)H.d(H.W())
s.push(n.a(q.m(r,q.gl(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.a6(q),o=T.w(p.gl(q),0,1),n=o.length,l=a.$ti,k=l.h("V.E"),l=l.h("aq<V.E>"),m=0;m<o.length;o.length===n||(0,H.c)(o),++m){j=H.S(o[m])
i=new H.aq(a,j,null,l)
i.bU(a,j,null,k)
r.push(V.h8(i.U(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=T.w(p.gl(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.c)(q),++m){g=q[m]
if(typeof g!=="number")return g.v()
l=H.S(g+1)
P.cd(0,l,r.length)
k=new H.aq(r,0,l,n)
k.bU(r,0,l,o)
s.push(V.h8(k.U(0)).$1(h))}return s},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fo:function fo(a,b){this.a=a
this.b=b},
fn:function fn(){}},Q={cZ:function cZ(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},e9:function e9(){},e8:function e8(){}},T={
w:function(a,b,c){var s,r=H.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)C.a.A(r,s)
else for(s=b;s>a;s+=c)C.a.A(r,s)
return r},
dK:function(a,b){var s,r,q,p=J.ah(a)
if(p.gT(a))return H.a([],b.h("r<A<v,0>>"))
s=H.a([],b.h("r<A<v,0>>"))
for(r=t.dq.C(b).h("A<1,2>"),q=0;q<p.gl(a);++q)C.a.A(s,new S.A(q,p.m(a,q),r))
return s},
hh:function(a,b){if(a.length===0)return b.a(0)
return C.a.a3(a,new T.fH(b))},
fB:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=T.w(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
if(typeof n!=="number")return n.ag()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return Z.ac(null,l)},
fm:function(a,b,c){var s,r,q,p,o=T.w(C.b.dJ((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.c)(o),++q){p=o[q]
if(typeof p!=="number")return p.q()
n.push(H.a([p*c+b],r))}return Z.ac(null,n)},
bk:function(a,b,c){var s,r,q,p,o,n=J.ah(a)
if(n.gT(a))return a
s=n.gl(a)
if(s>b)throw H.e("Trying to stretch an array to a length shorter than its own")
r=T.w(b,0,1)
q=H.z(r)
p=q.h("L<1,k>")
o=new H.L(r,q.h("k(1)").a(new T.fG(b,s)),p)
q=H.a([],c.h("r<0>"))
for(r=new H.a3(o,o.gl(o),p.h("a3<E.E>")),p=p.h("E.E");r.i();)q.push(n.m(a,C.b.ar(p.a(r.d))))
return q},
kq:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("r<0>"))
for(s=T.w(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.q()
n=C.b.ak(p*o,l)
if(n<0||n>=o)return H.n(a,n)
k.push(a[n])}s=H.a([],d.h("r<0>"))
for(r=T.w(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.c)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.q()
m=C.b.ak(p*n,l)
if(m<0||m>=n)return H.n(b,m)
s.push(b[m])}return new S.A(k,s,c.h("@<i<0>>").C(d.h("i<0>")).h("A<1,2>"))},
ix:function(a,b){var s=F.ei(a,new T.fI(b),b)
return P.l(s,!0,s.$ti.h("o.E"))},
kA:function(a,b){var s=P.l(a,!0,b)
if(0>=s.length)return H.n(s,-1)
s.pop()
return s},
iy:function(a,b){var s,r,q,p=H.a([],b.h("r<0>")),o=P.j6(b)
for(s=H.z(a).h("aH<1>"),r=new H.aH(a,s),r=new H.a3(r,r.gl(r),s.h("a3<E.E>")),s=s.h("E.E");r.i();){q=s.a(r.d)
if(!o.Z(0,q)){C.a.A(p,q)
o.A(0,q)}}s=b.h("aH<0>")
return P.l(new H.aH(p,s),!0,s.h("E.E"))},
fH:function fH(a){this.a=a},
fG:function fG(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a}},S={aD:function aD(a,b){this.a=a
this.b=b},A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},bt:function bt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},O={a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},aS:function aS(){},aT:function aT(a,b){this.c=a
this.a=b},c7:function c7(a,b){this.c=a
this.a=b},c8:function c8(a,b){this.c=a
this.a=b},c6:function c6(a,b){this.c=a
this.a=b},c5:function c5(a){this.a=a}},Z={
ac:function(a,b){var s,r,q=new Z.an(b)
if(a==null){s=q.gR(q).length
r=q.gR(q).length!==0?J.x(C.a.gP(q.gR(q))):0
a=new S.A(s,r,t.o)
s=a}else s=a
q.sf8(t.o.a(s))
return q},
dS:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=T.w(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){o=H.a([],q)
for(n=T.w(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.c)(n),++l)o.push(a)
j.push(o)}return Z.ac(b,j)},
dT:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.ab(a),r=s.gB(a),q=t.n;r.i();){p=r.gn()
o.push(H.a([p.a,p.b,p.c],q))}return Z.ac(new S.A(s.gl(a),3,t.o),o)},
fL:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=T.w(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){o=s[p]
n=H.a([],q)
for(m=T.w(a,0,1),l=m.length,k=J.b4(o),j=0;j<m.length;m.length===l||(0,H.c)(m),++j)if(k.E(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return Z.ac(new S.A(a,a,t.o),i)},
ku:function(a,b){var s=Z.it(a),r=Z.kB(b)
return C.a.a3(H.a([r,s,r.ev()],t.aM),new Z.fF())},
it:function(a){var s=t.n
return Z.ac(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
kB:function(a){var s,r,q,p,o,n
if(a.X()===0)return Z.fL(3)
s=a.ag(0,Math.sqrt(a.X()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.eo(0)
p=q.ag(0,Math.sqrt(q.X()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=Z.ac(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return Z.it(o).aM(n)},
ks:function(a,b){var s,r,q,p,o=a/2,n=b.ag(0,Math.sqrt(b.X())).q(0,Math.sin(o)),m=H.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(H.a([s[p]],q))
m.push(H.a([Math.cos(o)],q))
return Z.ac(null,m)},
kc:function(a,b){var s,r,q,p,o,n,m=6.283185307179586/a,l=t.bN,k=H.a([],l)
for(s=T.w(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
if(typeof p!=="number")return H.cO(p)
o=m*p
k.push(new S.aD(Math.cos(o),Math.sin(o)))}l=H.a([],l)
for(s=k.length,r=b.a,o=b.b,q=0;q<k.length;k.length===s||(0,H.c)(k),++q)l.push(k[q].q(0,new S.aD(r,o)))
k=H.a([],t.l)
for(s=l.length,q=0;q<l.length;l.length===s||(0,H.c)(l),++q){n=l[q]
k.push(new Y.b(n.a,n.b,0))}return k},
an:function an(a){this.a=a
this.b=null},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
dY:function dY(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
dW:function dW(a){this.a=a},
e0:function e0(a){this.a=a},
dV:function dV(){},
dU:function dU(a){this.a=a},
fF:function fF(){}},Y={b:function b(a,b,c){this.a=a
this.b=b
this.c=c},eO:function eO(a){this.a=a}},F={
ei:function(a,b,c){return F.j7(a,b,c,c)},
j7:function(a,b,c,d){return P.i5(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$ei(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.a6(s),l=0
case 2:if(!(l<m.gl(s))){p=4
break}k=m.m(s,l)
p=H.cN(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.hP()
case 1:return P.hQ(n)}}},d)}}
var w=[C,H,J,P,W,A,X,G,M,E,R,K,B,N,V,Q,T,S,O,Z,Y,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fQ.prototype={}
J.am.prototype={
E:function(a,b){return a===b},
gt:function(a){return H.az(a)},
k:function(a){return"Instance of '"+H.ev(a)+"'"}}
J.d7.prototype={
k:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$iJ:1}
J.bo.prototype={
E:function(a,b){return null==b},
k:function(a){return"null"},
gt:function(a){return 0},
$iQ:1}
J.be.prototype={
gt:function(a){return 0},
k:function(a){return String(a)}}
J.dd.prototype={}
J.aA.prototype={}
J.aR.prototype={
k:function(a){var s=a[$.iz()]
if(s==null)return this.eV(a)
return"JavaScript function for "+J.cT(s)},
$ibd:1}
J.r.prototype={
A:function(a,b){H.z(a).c.a(b)
if(!!a.fixed$length)H.d(P.af("add"))
a.push(b)},
hc:function(a,b,c){var s,r
H.z(a).h("o<1>").a(c)
if(!!a.fixed$length)H.d(P.af("insertAll"))
P.je(b,0,a.length,"index")
if(!t.X.b(c))c=J.dN(c)
s=J.x(c)
a.length=a.length+s
r=b+s
this.cY(a,r,a.length,a,b)
this.eE(a,b,r,c)},
b0:function(a,b){var s
if(!!a.fixed$length)H.d(P.af("remove"))
for(s=0;s<a.length;++s)if(J.aO(a[s],b)){a.splice(s,1)
return!0}return!1},
du:function(a,b,c){var s,r,q,p,o
H.z(a).h("J(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.cN(b.$1(p)))s.push(p)
if(a.length!==r)throw H.e(P.aj(a))}o=s.length
if(o===r)return
this.sl(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
D:function(a,b){var s
H.z(a).h("o<1>").a(b)
if(!!a.fixed$length)H.d(P.af("addAll"))
if(Array.isArray(b)){this.fg(a,b)
return}for(s=J.y(b);s.i();)a.push(s.gn())},
fg:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.e(P.aj(a))
for(r=0;r<s;++r)a.push(b[r])},
cr:function(a,b,c){var s=H.z(a)
return new H.L(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("L<1,2>"))},
e8:function(a,b){var s,r=P.hB(a.length,"",!1,t.aw)
for(s=0;s<a.length;++s)this.H(r,s,H.t(a[s]))
return r.join(b)},
hh:function(a){return this.e8(a,"")},
a5:function(a,b){return H.bs(a,b,null,H.z(a).c)},
a3:function(a,b){var s,r,q
H.z(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.e(H.W())
if(0>=s)return H.n(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.e(P.aj(a))}return r},
bu:function(a,b,c,d){var s,r,q
d.a(b)
H.z(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.e(P.aj(a))}return r},
S:function(a,b){if(b<0||b>=a.length)return H.n(a,b)
return a[b]},
bJ:function(a,b,c){P.cd(b,c,a.length)
return H.bs(a,b,c,H.z(a).c)},
gP:function(a){if(a.length>0)return a[0]
throw H.e(H.W())},
gK:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.e(H.W())},
cY:function(a,b,c,d,e){var s,r,q,p,o
H.z(a).h("o<1>").a(d)
if(!!a.immutable$list)H.d(P.af("setRange"))
P.cd(b,c,a.length)
s=c-b
if(s===0)return
P.ao(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.hn(d,e).as(0,!1)
q=0}p=J.a6(r)
if(q+s>p.gl(r))throw H.e(H.j2())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.m(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.m(r,q+o)},
eE:function(a,b,c,d){return this.cY(a,b,c,d,0)},
bl:function(a,b){var s,r
H.z(a).h("J(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.cN(b.$1(a[r])))return!1
if(a.length!==s)throw H.e(P.aj(a))}return!0},
Z:function(a,b){var s
for(s=0;s<a.length;++s)if(J.aO(a[s],b))return!0
return!1},
gT:function(a){return a.length===0},
gaL:function(a){return a.length!==0},
k:function(a){return P.fP(a,"[","]")},
as:function(a,b){var s=H.a(a.slice(0),H.z(a))
return s},
U:function(a){return this.as(a,!0)},
gB:function(a){return new J.bH(a,a.length,H.z(a).h("bH<1>"))},
gt:function(a){return H.az(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.d(P.af("set length"))
if(b<0)throw H.e(P.aG(b,0,null,"newLength",null))
if(b>a.length)H.z(a).c.a(null)
a.length=b},
m:function(a,b){if(b>=a.length||b<0)throw H.e(H.hb(a,b))
return a[b]},
H:function(a,b,c){H.z(a).c.a(c)
if(!!a.immutable$list)H.d(P.af("indexed set"))
if(b>=a.length||b<0)throw H.e(H.hb(a,b))
a[b]=c},
v:function(a,b){var s=H.z(a)
s.h("i<1>").a(b)
s=P.l(a,!0,s.c)
this.D(s,b)
return s},
sK:function(a,b){var s
H.z(a).c.a(b)
s=a.length
if(s===0)throw H.e(H.W())
this.H(a,s-1,b)},
$iF:1,
$io:1,
$ii:1}
J.eg.prototype={}
J.bH.prototype={
gn:function(){return this.$ti.c.a(this.d)},
i:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.e(H.c(q))
s=r.c
if(s>=p){r.sdl(null)
return!1}r.sdl(q[s]);++r.c
return!0},
sdl:function(a){this.d=this.$ti.h("1?").a(a)},
$iH:1}
J.aQ.prototype={
ar:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.e(P.af(""+a+".toInt()"))},
dJ:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.e(P.af(""+a+".ceil()"))},
h6:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.e(P.af(""+a+".floor()"))},
cG:function(a,b){var s,r
if(b>20)throw H.e(P.aG(b,0,20,"fractionDigits",null))
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
v:function(a,b){H.h2(b)
return a+b},
q:function(a,b){return a*b},
W:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ak:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
an:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.e(P.af("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
fw:function(a,b){var s
if(a>0)s=this.fv(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fv:function(a,b){return b>31?0:a>>>b},
$ik:1,
$iM:1}
J.bY.prototype={$iv:1}
J.d8.prototype={}
J.aE.prototype={
v:function(a,b){H.cI(b)
return a+b},
eP:function(a,b,c){if(b<0)throw H.e(P.ew(b,null))
if(b>c)throw H.e(P.ew(b,null))
if(c>a.length)throw H.e(P.ew(c,null))
return a.substring(b,c)},
q:function(a,b){var s,r
H.S(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.Y)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
k:function(a){return a},
gt:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$ieu:1,
$iaa:1}
H.b_.prototype={
gB:function(a){var s=H.D(this)
return new H.bQ(J.y(this.gae()),s.h("@<1>").C(s.Q[1]).h("bQ<1,2>"))},
gl:function(a){return J.x(this.gae())},
gT:function(a){return J.ba(this.gae())},
gaL:function(a){return J.cS(this.gae())},
a5:function(a,b){var s=H.D(this)
return H.fM(J.hn(this.gae(),b),s.c,s.Q[1])},
gP:function(a){return H.D(this).Q[1].a(J.a7(this.gae()))},
gK:function(a){return H.D(this).Q[1].a(J.bE(this.gae()))},
k:function(a){return J.cT(this.gae())}}
H.bQ.prototype={
i:function(){return this.a.i()},
gn:function(){return this.$ti.Q[1].a(this.a.gn())},
$iH:1}
H.bc.prototype={
gae:function(){return this.a}}
H.cu.prototype={$iF:1}
H.cs.prototype={
m:function(a,b){return this.$ti.Q[1].a(J.P(this.a,b))},
H:function(a,b,c){var s=this.$ti
J.hk(this.a,b,s.c.a(s.Q[1].a(c)))},
A:function(a,b){var s=this.$ti
J.iM(this.a,s.c.a(s.Q[1].a(b)))},
D:function(a,b){var s=this.$ti
J.b9(this.a,H.fM(s.h("o<2>").a(b),s.Q[1],s.c))},
bJ:function(a,b,c){var s=this.$ti
return H.fM(J.hm(this.a,b,c),s.c,s.Q[1])},
$iF:1,
$ii:1}
H.a0.prototype={
gae:function(){return this.a}}
H.c_.prototype={
k:function(a){var s="LateInitializationError: "+this.a
return s}}
H.fD.prototype={
$0:function(){var s=new P.R($.I,t.ck)
s.df(null)
return s},
$S:17}
H.F.prototype={}
H.E.prototype={
gB:function(a){var s=this
return new H.a3(s,s.gl(s),H.D(s).h("a3<E.E>"))},
gT:function(a){return this.gl(this)===0},
gP:function(a){if(this.gl(this)===0)throw H.e(H.W())
return this.S(0,0)},
gK:function(a){var s=this
if(s.gl(s)===0)throw H.e(H.W())
return s.S(0,s.gl(s)-1)},
a3:function(a,b){var s,r,q,p=this
H.D(p).h("E.E(E.E,E.E)").a(b)
s=p.gl(p)
if(s===0)throw H.e(H.W())
r=p.S(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.S(0,q))
if(s!==p.gl(p))throw H.e(P.aj(p))}return r},
a5:function(a,b){return H.bs(this,b,null,H.D(this).h("E.E"))},
as:function(a,b){return P.l(this,b,H.D(this).h("E.E"))},
U:function(a){return this.as(a,!0)}}
H.aq.prototype={
bU:function(a,b,c,d){var s,r=this.b
P.ao(r,"start")
s=this.c
if(s!=null){P.ao(s,"end")
if(r>s)throw H.e(P.aG(r,0,s,"start",null))}},
gfn:function(){var s=J.x(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfz:function(){var s=J.x(this.a),r=this.b
if(r>s)return s
return r},
gl:function(a){var s,r=J.x(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.w()
return s-q},
S:function(a,b){var s=this,r=s.gfz()+b
if(b<0||r>=s.gfn())throw H.e(P.fO(b,s,"index",null,null))
return J.hl(s.a,r)},
a5:function(a,b){var s,r,q=this
P.ao(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.bU(q.$ti.h("bU<1>"))
return H.bs(q.a,s,r,q.$ti.c)},
as:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a6(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.hw(0,n):J.hv(0,n)}r=P.hB(s,m.S(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.H(r,q,m.S(n,o+q))
if(m.gl(n)<l)throw H.e(P.aj(p))}return r},
U:function(a){return this.as(a,!0)}}
H.a3.prototype={
gn:function(){return this.$ti.c.a(this.d)},
i:function(){var s,r=this,q=r.a,p=q.gl(q)
if(r.b!==p)throw H.e(P.aj(q))
s=r.c
if(s>=p){r.saP(null)
return!1}r.saP(q.S(0,s));++r.c
return!0},
saP:function(a){this.d=this.$ti.h("1?").a(a)},
$iH:1}
H.bf.prototype={
gB:function(a){var s=H.D(this)
return new H.c4(J.y(this.a),this.b,s.h("@<1>").C(s.Q[1]).h("c4<1,2>"))},
gl:function(a){return J.x(this.a)},
gT:function(a){return J.ba(this.a)},
gP:function(a){return this.b.$1(J.a7(this.a))},
gK:function(a){return this.b.$1(J.bE(this.a))}}
H.bT.prototype={$iF:1}
H.c4.prototype={
i:function(){var s=this,r=s.b
if(r.i()){s.saP(s.c.$1(r.gn()))
return!0}s.saP(null)
return!1},
gn:function(){return this.$ti.Q[1].a(this.a)},
saP:function(a){this.a=this.$ti.h("2?").a(a)}}
H.L.prototype={
gl:function(a){return J.x(this.a)},
S:function(a,b){return this.b.$1(J.hl(this.a,b))}}
H.bg.prototype={
gB:function(a){return new H.cr(J.y(this.a),this.b,this.$ti.h("cr<1>"))}}
H.cr.prototype={
i:function(){var s,r
for(s=this.a,r=this.b;s.i();)if(H.cN(r.$1(s.gn())))return!0
return!1},
gn:function(){return this.a.gn()}}
H.aI.prototype={
a5:function(a,b){P.ao(b,"count")
return new H.aI(this.a,this.b+b,H.D(this).h("aI<1>"))},
gB:function(a){return new H.ch(J.y(this.a),this.b,H.D(this).h("ch<1>"))}}
H.bm.prototype={
gl:function(a){var s=J.x(this.a)-this.b
if(s>=0)return s
return 0},
a5:function(a,b){P.ao(b,"count")
return new H.bm(this.a,this.b+b,this.$ti)},
$iF:1}
H.ch.prototype={
i:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.i()
this.b=0
return s.i()},
gn:function(){return this.a.gn()}}
H.bU.prototype={
gB:function(a){return C.R},
gT:function(a){return!0},
gl:function(a){return 0},
gP:function(a){throw H.e(H.W())},
gK:function(a){throw H.e(H.W())},
a5:function(a,b){P.ao(b,"count")
return this}}
H.bV.prototype={
i:function(){return!1},
gn:function(){throw H.e(H.W())},
$iH:1}
H.aH.prototype={
gl:function(a){return J.x(this.a)},
S:function(a,b){var s=this.a,r=J.a6(s)
return r.S(s,r.gl(s)-1-b)}}
H.cG.prototype={}
H.d6.prototype={
k:function(a){var s="<"+C.a.e8([H.kd(this.$ti.c)],", ")+">"
return this.a.k(0)+" with "+s}}
H.aP.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.kk(H.id(this.a),this.$ti)}}
H.eB.prototype={
a9:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.c9.prototype={
k:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.da.prototype={
k:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.dr.prototype={
k:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.er.prototype={
k:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bW.prototype={}
H.cz.prototype={
k:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaU:1}
H.ai.prototype={
k:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.iw(r==null?"unknown":r)+"'"},
$ibd:1,
ghG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dl.prototype={}
H.dj.prototype={
k:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.iw(s)+"'"}}
H.bl.prototype={
E:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bl))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gt:function(a){var s,r=this.c
if(r==null)s=H.az(this.a)
else s=typeof r!=="object"?J.bD(r):H.az(r)
return(s^H.az(this.b))>>>0},
k:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.ev(t.K.a(s))+"'")}}
H.de.prototype={
k:function(a){return"RuntimeError: "+this.a}}
H.du.prototype={
k:function(a){return"Assertion failed: "+P.d2(this.a)}}
H.bZ.prototype={
gl:function(a){return this.a},
ge9:function(){return new H.c0(this,H.D(this).h("c0<1>"))},
dM:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.fl(s,a)}else return this.hd(a)},
hd:function(a){var s=this.d
if(s==null)return!1
return this.co(this.c_(s,C.d.gt(a)&0x3ffffff),a)>=0},
m:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.ba(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.ba(p,b)
q=r==null?n:r.b
return q}else return o.he(b)},
he:function(a){var s,r,q=this.d
if(q==null)return null
s=this.c_(q,J.bD(a)&0x3ffffff)
r=this.co(s,a)
if(r<0)return null
return s[r].b},
H:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.D(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.da(s==null?m.b=m.c0():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.da(r==null?m.c=m.c0():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.c0()
p=J.bD(b)&0x3ffffff
o=m.c_(q,p)
if(o==null)m.c2(q,p,[m.bV(b,c)])
else{n=m.co(o,b)
if(n>=0)o[n].b=c
else o.push(m.bV(b,c))}}},
e5:function(a,b){var s,r,q=this
H.D(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.e(P.aj(q))
s=s.c}},
da:function(a,b,c){var s,r=this,q=H.D(r)
q.c.a(b)
q.Q[1].a(c)
s=r.ba(a,b)
if(s==null)r.c2(a,b,r.bV(b,c))
else s.b=c},
bV:function(a,b){var s=this,r=H.D(s),q=new H.eh(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
co:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aO(a[r].a,b))return r
return-1},
k:function(a){return P.hC(this)},
ba:function(a,b){return a[b]},
c_:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
fm:function(a,b){delete a[b]},
fl:function(a,b){return this.ba(a,b)!=null},
c0:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c2(r,s,r)
this.fm(r,s)
return r}}
H.eh.prototype={}
H.c0.prototype={
gl:function(a){return this.a.a},
gT:function(a){return this.a.a===0},
gB:function(a){var s=this.a,r=new H.c1(s,s.r,this.$ti.h("c1<1>"))
r.c=s.e
return r}}
H.c1.prototype={
gn:function(){return this.$ti.c.a(this.d)},
i:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.e(P.aj(q))
s=r.c
if(s==null){r.sdc(null)
return!1}else{r.sdc(s.a)
r.c=s.c
return!0}},
sdc:function(a){this.d=this.$ti.h("1?").a(a)},
$iH:1}
H.ft.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.fu.prototype={
$2:function(a,b){return this.a(a,b)},
$S:19}
H.fv.prototype={
$1:function(a){return this.a(H.cI(a))},
$S:22}
H.d9.prototype={
k:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
cm:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.fb(s)},
$ieu:1}
H.fb.prototype={}
H.ap.prototype={
h:function(a){return H.dI(v.typeUniverse,this,a)},
C:function(a){return H.jD(v.typeUniverse,this,a)}}
H.dA.prototype={}
H.dG.prototype={
k:function(a){return H.a5(this.a,null)}}
H.dz.prototype={
k:function(a){return this.a}}
H.cC.prototype={}
P.eR.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
P.eQ.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:18}
P.eS.prototype={
$0:function(){this.a.$0()},
$S:9}
P.eT.prototype={
$0:function(){this.a.$0()},
$S:9}
P.fe.prototype={
f6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bB(new P.ff(this,b),0),a)
else throw H.e(P.af("`setTimeout()` not found."))}}
P.ff.prototype={
$0:function(){this.b.$0()},
$S:0}
P.dv.prototype={
c6:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.df(b)
else{s=r.a
if(q.h("al<1>").b(b))s.dh(b)
else s.bX(q.c.a(b))}},
dL:function(a,b){var s=this.a
if(this.b)s.am(a,b)
else s.fi(a,b)}}
P.fh.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:23}
P.fi.prototype={
$2:function(a,b){this.a.$2(1,new H.bW(a,t.k.a(b)))},
$S:26}
P.fl.prototype={
$2:function(a,b){this.a(H.S(a),b)},
$S:27}
P.bw.prototype={
k:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bx.prototype={
gn:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gn()},
i:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("H<1>");!0;){r=m.c
if(r!=null)if(r.i())return!0
else m.sds(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.bw){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sde(null)
return!1}if(0>=o.length)return H.n(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.y(r))
if(n instanceof P.bx){r=m.d
if(r==null)r=m.d=[]
C.a.A(r,m.a)
m.a=n.a
continue}else{m.sds(n)
continue}}}}else{m.sde(q)
return!0}}return!1},
sde:function(a){this.b=this.$ti.h("1?").a(a)},
sds:function(a){this.c=this.$ti.h("H<1>?").a(a)},
$iH:1}
P.cB.prototype={
gB:function(a){return new P.bx(this.a(),this.$ti.h("bx<1>"))}}
P.bL.prototype={
k:function(a){return H.t(this.a)},
$iG:1,
gb7:function(){return this.b}}
P.dx.prototype={
dL:function(a,b){H.h9(a,"error",t.K)
if(this.a.a!==0)throw H.e(P.ae("Future already completed"))
this.am(a,b)}}
P.cA.prototype={
c6:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.e(P.ae("Future already completed"))
s.dj(r.h("1/").a(b))},
am:function(a,b){this.a.am(a,b)}}
P.bh.prototype={
hj:function(a){if((this.c&15)!==6)return!0
return this.b.b.cC(t.al.a(this.d),a.a,t.cJ,t.K)},
h7:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.hs(s,p,a.b,r,q,t.k))
else return o.a(n.cC(t.bI.a(s),p,r,q))}}
P.R.prototype={
cF:function(a,b,c){var s,r,q,p=this.$ti
p.C(c).h("1/(2)").a(a)
s=$.I
if(s!==C.i){c.h("@<0/>").C(p.c).h("1(2)").a(a)
if(b!=null)b=P.jY(b,s)}r=new P.R(s,c.h("R<0>"))
q=b==null?1:3
this.bW(new P.bh(r,q,a,b,p.h("@<1>").C(c).h("bh<1,2>")))
return r},
ej:function(a,b){return this.cF(a,null,b)},
dw:function(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new P.R($.I,c.h("R<0>"))
this.bW(new P.bh(s,19,a,b,r.h("@<1>").C(c).h("bh<1,2>")))
return s},
bW:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.d.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.bW(a)
return}r.a=q
r.c=s.c}P.bz(null,null,r.b,t.M.a(new P.eX(r,a)))}},
dt:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.d.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.dt(a)
return}m.a=s
m.c=n.c}l.a=m.bd(a)
P.bz(null,null,m.b,t.M.a(new P.f4(l,m)))}},
bc:function(){var s=t.d.a(this.c)
this.c=null
return this.bd(s)},
bd:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
dg:function(a){var s,r,q,p=this
p.a=1
try{a.cF(new P.f0(p),new P.f1(p),t.P)}catch(q){s=H.b7(q)
r=H.b5(q)
P.kv(new P.f2(p,s,r))}},
dj:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("al<1>").b(a))if(q.b(a))P.f_(a,r)
else r.dg(a)
else{s=r.bc()
q.c.a(a)
r.a=4
r.c=a
P.bv(r,s)}},
bX:function(a){var s,r=this
r.$ti.c.a(a)
s=r.bc()
r.a=4
r.c=a
P.bv(r,s)},
am:function(a,b){var s,r,q=this
t.k.a(b)
s=q.bc()
r=P.e2(a,b)
q.a=8
q.c=r
P.bv(q,s)},
df:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("al<1>").b(a)){this.dh(a)
return}this.fj(s.c.a(a))},
fj:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.bz(null,null,s.b,t.M.a(new P.eZ(s,a)))},
dh:function(a){var s=this,r=s.$ti
r.h("al<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.bz(null,null,s.b,t.M.a(new P.f3(s,a)))}else P.f_(a,s)
return}s.dg(a)},
fi:function(a,b){this.a=1
P.bz(null,null,this.b,t.M.a(new P.eY(this,a,b)))},
$ial:1}
P.eX.prototype={
$0:function(){P.bv(this.a,this.b)},
$S:0}
P.f4.prototype={
$0:function(){P.bv(this.b,this.a.a)},
$S:0}
P.f0.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.bX(p.$ti.c.a(a))}catch(q){s=H.b7(q)
r=H.b5(q)
p.am(s,r)}},
$S:8}
P.f1.prototype={
$2:function(a,b){this.a.am(t.K.a(a),t.k.a(b))},
$S:35}
P.f2.prototype={
$0:function(){this.a.am(this.b,this.c)},
$S:0}
P.eZ.prototype={
$0:function(){this.a.bX(this.b)},
$S:0}
P.f3.prototype={
$0:function(){P.f_(this.b,this.a)},
$S:0}
P.eY.prototype={
$0:function(){this.a.am(this.b,this.c)},
$S:0}
P.f7.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ei(t.fO.a(q.d),t.z)}catch(p){s=H.b7(p)
r=H.b5(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=P.e2(s,r)
o.b=!0
return}if(l instanceof P.R&&l.a>=4){if(l.a===8){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.v.b(l)){n=m.b.a
q=m.a
q.c=l.ej(new P.f8(n),t.z)
q.b=!1}},
$S:0}
P.f8.prototype={
$1:function(a){return this.a},
$S:36}
P.f6.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cC(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.b7(l)
r=H.b5(l)
q=this.a
q.c=P.e2(s,r)
q.b=!0}},
$S:0}
P.f5.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.hj(s)&&p.a.e!=null){p.c=p.a.h7(s)
p.b=!1}}catch(o){r=H.b7(o)
q=H.b5(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.e2(r,q)
n.b=!0}},
$S:0}
P.dw.prototype={}
P.cj.prototype={
gl:function(a){var s,r,q=this,p={},o=new P.R($.I,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.ez(p,q))
t.g5.a(new P.eA(p,o))
W.eU(q.a,q.b,r,!1,s.c)
return o}}
P.ez.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.eA.prototype={
$0:function(){this.b.dj(this.a.a)},
$S:0}
P.ck.prototype={}
P.dE.prototype={}
P.cF.prototype={$ihN:1}
P.fk.prototype={
$0:function(){var s=t.K.a(H.e(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
P.dD.prototype={
ht:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.i===$.I){a.$0()
return}P.i6(p,p,this,a,t.N)}catch(q){s=H.b7(q)
r=H.b5(q)
P.fj(p,p,this,t.K.a(s),t.k.a(r))}},
hu:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.i===$.I){a.$1(b)
return}P.i7(p,p,this,a,b,t.N,c)}catch(q){s=H.b7(q)
r=H.b5(q)
P.fj(p,p,this,t.K.a(s),t.k.a(r))}},
dI:function(a){return new P.fc(this,t.M.a(a))},
fQ:function(a,b){return new P.fd(this,b.h("~(0)").a(a),b)},
ei:function(a,b){b.h("0()").a(a)
if($.I===C.i)return a.$0()
return P.i6(null,null,this,a,b)},
cC:function(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.I===C.i)return a.$1(b)
return P.i7(null,null,this,a,b,c,d)},
hs:function(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.I===C.i)return a.$2(b,c)
return P.jZ(null,null,this,a,b,c,d,e,f)},
ee:function(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
P.fc.prototype={
$0:function(){return this.a.ht(this.b)},
$S:0}
P.fd.prototype={
$1:function(a){var s=this.c
return this.a.hu(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.aL.prototype={
fq:function(){return new P.aL(H.D(this).h("aL<1>"))},
gB:function(a){var s=this,r=new P.bi(s,s.r,H.D(s).h("bi<1>"))
r.c=s.e
return r},
gl:function(a){return this.a},
gT:function(a){return this.a===0},
gaL:function(a){return this.a!==0},
Z:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.fk(b)},
fk:function(a){var s=this.d
if(s==null)return!1
return this.dm(s[this.dk(a)],a)>=0},
gP:function(a){var s=this.e
if(s==null)throw H.e(P.ae("No elements"))
return H.D(this).c.a(s.a)},
gK:function(a){var s=this.f
if(s==null)throw H.e(P.ae("No elements"))
return H.D(this).c.a(s.a)},
A:function(a,b){var s,r,q=this
H.D(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dd(s==null?q.b=P.fY():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dd(r==null?q.c=P.fY():r,b)}else return q.ff(b)},
ff:function(a){var s,r,q,p=this
H.D(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.fY()
r=p.dk(a)
q=s[r]
if(q==null)s[r]=[p.c1(a)]
else{if(p.dm(q,a)>=0)return!1
q.push(p.c1(a))}return!0},
dd:function(a,b){H.D(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.c1(b)
return!0},
fp:function(){this.r=this.r+1&1073741823},
c1:function(a){var s,r=this,q=new P.dB(H.D(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.fp()
return q},
dk:function(a){return J.bD(a)&1073741823},
dm:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aO(a[r].a,b))return r
return-1}}
P.dB.prototype={}
P.bi.prototype={
gn:function(){return this.$ti.c.a(this.d)},
i:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.e(P.aj(q))
else if(r==null){s.sdi(null)
return!1}else{s.sdi(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sdi:function(a){this.d=this.$ti.h("1?").a(a)},
$iH:1}
P.bX.prototype={}
P.V.prototype={
gB:function(a){var s=this
return new H.a3(s,s.gl(s),s.$ti.h("a3<V.E>"))},
S:function(a,b){return this.$ti.Q[1].a(J.P(this.a,b))},
gT:function(a){return J.x(this.a)===0},
gaL:function(a){return J.x(this.a)!==0},
gP:function(a){var s=this.a,r=J.a6(s)
if(r.gl(s)===0)throw H.e(H.W())
return this.$ti.Q[1].a(r.m(s,0))},
gK:function(a){var s=this.a,r=J.a6(s)
if(r.gl(s)===0)throw H.e(H.W())
return this.$ti.Q[1].a(r.m(s,r.gl(s)-1))},
bl:function(a,b){var s,r,q,p,o=this.$ti
o.h("J(V.E)").a(b)
s=this.a
r=J.a6(s)
q=r.gl(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.cN(b.$1(o.a(r.m(s,p)))))return!1
if(q!==r.gl(s))throw H.e(P.aj(this))}return!0},
cr:function(a,b,c){var s=this.$ti
return new H.L(this,s.C(c).h("1(V.E)").a(b),s.h("@<V.E>").C(c).h("L<1,2>"))},
a5:function(a,b){return H.bs(this,b,null,this.$ti.h("V.E"))},
D:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("o<V.E>").a(b)
s=this.a
r=J.a6(s)
q=r.gl(s)
for(p=J.y(b),o=n.Q[1],n=n.c;p.i();){r.A(s,n.a(o.a(p.gn())));++q}},
v:function(a,b){var s=this.$ti
s.h("i<V.E>").a(b)
s=P.l(this,!0,s.h("V.E"))
C.a.D(s,b)
return s},
bJ:function(a,b,c){P.cd(b,c,J.x(this.a))
return H.bs(this,b,c,this.$ti.h("V.E"))},
k:function(a){return P.fP(this,"[","]")}}
P.c3.prototype={}
P.ek.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:40}
P.bp.prototype={
e5:function(a,b){var s,r,q=H.D(this)
q.h("~(1,2)").a(b)
for(s=this.ge9(),s=s.gB(s),q=q.Q[1];s.i();){r=s.gn()
b.$2(r,q.a(this.m(0,r)))}},
gl:function(a){var s=this.ge9()
return s.gl(s)},
k:function(a){return P.hC(this)},
$ic2:1}
P.cg.prototype={
gT:function(a){return this.a===0},
gaL:function(a){return this.a!==0},
k:function(a){return P.fP(this,"{","}")},
a5:function(a,b){return H.hG(this,b,H.D(this).c)},
gP:function(a){var s=P.fX(this,this.r,H.D(this).c)
if(!s.i())throw H.e(H.W())
return s.$ti.c.a(s.d)},
gK:function(a){var s,r,q=P.fX(this,this.r,H.D(this).c)
if(!q.i())throw H.e(H.W())
s=q.$ti.c
do r=s.a(q.d)
while(q.i())
return r}}
P.cy.prototype={
hg:function(a,b){var s,r,q,p=this,o=p.fq()
for(s=P.fX(p,p.r,H.D(p).c),r=s.$ti.c;s.i();){q=r.a(s.d)
if(b.Z(0,q))o.A(0,q)}return o},
$iF:1,
$io:1,
$icf:1}
P.cH.prototype={}
P.G.prototype={
gb7:function(){return H.b5(this.$thrownJsError)}}
P.bK.prototype={
k:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.d2(s)
return"Assertion failed"}}
P.dp.prototype={}
P.db.prototype={
k:function(a){return"Throw of null."}}
P.aB.prototype={
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
k:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbZ()+o+m
if(!q.a)return l
s=q.gbY()
r=P.d2(q.b)
return l+s+": "+r}}
P.cc.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.d5.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){if(H.S(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.ds.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dq.prototype={
k:function(a){var s="UnimplementedError: "+this.a
return s}}
P.br.prototype={
k:function(a){return"Bad state: "+this.a}}
P.d_.prototype={
k:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d2(s)+"."}}
P.dc.prototype={
k:function(a){return"Out of Memory"},
gb7:function(){return null},
$iG:1}
P.ci.prototype={
k:function(a){return"Stack Overflow"},
gb7:function(){return null},
$iG:1}
P.d1.prototype={
k:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eW.prototype={
k:function(a){return"Exception: "+this.a}}
P.ed.prototype={
k:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.K.eP(q,0,75)+"..."
return r+"\n"+q}}
P.o.prototype={
cr:function(a,b,c){var s=H.D(this)
return H.j8(this,s.C(c).h("1(o.E)").a(b),s.h("o.E"),c)},
bl:function(a,b){var s
H.D(this).h("J(o.E)").a(b)
for(s=this.gB(this);s.i();)if(!H.cN(b.$1(s.gn())))return!1
return!0},
as:function(a,b){return P.l(this,b,H.D(this).h("o.E"))},
U:function(a){return this.as(a,!0)},
gl:function(a){var s,r=this.gB(this)
for(s=0;r.i();)++s
return s},
gT:function(a){return!this.gB(this).i()},
gaL:function(a){return!this.gT(this)},
a5:function(a,b){return H.hG(this,b,H.D(this).h("o.E"))},
gP:function(a){var s=this.gB(this)
if(!s.i())throw H.e(H.W())
return s.gn()},
gK:function(a){var s,r=this.gB(this)
if(!r.i())throw H.e(H.W())
do s=r.gn()
while(r.i())
return s},
S:function(a,b){var s,r,q
P.ao(b,"index")
for(s=this.gB(this),r=0;s.i();){q=s.gn()
if(b===r)return q;++r}throw H.e(P.fO(b,this,"index",null,r))},
k:function(a){return P.j1(this,"(",")")}}
P.H.prototype={}
P.Q.prototype={
gt:function(a){return P.C.prototype.gt.call(C.a4,this)},
k:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
E:function(a,b){return this===b},
gt:function(a){return H.az(this)},
k:function(a){return"Instance of '"+H.ev(this)+"'"},
toString:function(){return this.k(this)}}
P.dF.prototype={
k:function(a){return""},
$iaU:1}
P.dk.prototype={
gl:function(a){return this.a.length},
k:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.m.prototype={}
W.cV.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.cX.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.bb.prototype={
sh8:function(a,b){a.height=b},
shz:function(a,b){a.width=b},
$ibb:1}
W.bP.prototype={
sck:function(a,b){a.fillStyle=b},
sd2:function(a,b){a.strokeStyle=b},
$ibP:1}
W.ay.prototype={
gl:function(a){return a.length}}
W.eb.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.bS.prototype={
k:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
s=r+H.t(s)+") "
r=a.width
r.toString
r=s+H.t(r)+" x "
s=a.height
s.toString
return r+H.t(s)},
E:function(a,b){var s,r
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
p=C.b.gt(p)
s=a.top
s.toString
s=C.b.gt(s)
r=a.width
r.toString
r=C.b.gt(r)
q=a.height
q.toString
return W.hR(p,s,r,C.b.gt(q))},
$ifV:1}
W.h.prototype={
k:function(a){var s=a.localName
s.toString
return s},
$ih:1}
W.j.prototype={$ij:1}
W.a2.prototype={
fh:function(a,b,c,d){return a.addEventListener(b,H.bB(t.B.a(c),1),!1)},
ft:function(a,b,c,d){return a.removeEventListener(b,H.bB(t.B.a(c),1),!1)},
$ia2:1}
W.d4.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.a9.prototype={
k:function(a){var s=a.nodeValue
return s==null?this.eU(a):s}}
W.dg.prototype={
gl:function(a){return a.length}}
W.ar.prototype={}
W.bu.prototype={
gfH:function(a){var s=new P.R($.I,t.dL),r=t.c4.a(new W.eP(new P.cA(s,t.g4)))
this.fo(a)
r=W.i9(r,t.H)
r.toString
this.fu(a,r)
return s},
fu:function(a,b){var s=a.requestAnimationFrame(H.bB(t.c4.a(b),1))
s.toString
return s},
fo:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eP.prototype={
$1:function(a){this.a.c6(0,H.h2(a))},
$S:41}
W.ct.prototype={
k:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
s=r+H.t(s)+") "
r=a.width
r.toString
r=s+H.t(r)+" x "
s=a.height
s.toString
return r+H.t(s)},
E:function(a,b){var s,r
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
p=C.b.gt(p)
s=a.top
s.toString
s=C.b.gt(s)
r=a.width
r.toString
r=C.b.gt(r)
q=a.height
q.toString
return W.hR(p,s,r,C.b.gt(q))}}
W.fN.prototype={}
W.cv.prototype={}
W.dy.prototype={}
W.cw.prototype={
fR:function(){var s,r=this,q=r.b
if(q==null)return $.hj()
s=r.d
if(s!=null)J.iL(q,r.c,t.B.a(s),!1)
r.b=null
r.sfs(null)
return $.hj()},
sfs:function(a){this.d=t.B.a(a)}}
W.eV.prototype={
$1:function(a){return this.a.$1(t.aD.a(a))},
$S:47}
P.dC.prototype={
f5:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.d.an(a-s,k)
r=a>>>0
a=C.d.an(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.d.an(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.d.an(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.d.an(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.d.an(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.d.an(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bb()
l.bb()
l.bb()
l.bb()},
bb:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.d.an(o-n+(q-p)+(m-r),4294967296)>>>0},
$ijd:1}
P.aF.prototype={
k:function(a){return"Point("+H.t(this.a)+", "+H.t(this.b)+")"},
E:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a&&this.b===b.b},
gt:function(a){var s=C.b.gt(this.a),r=C.b.gt(this.b),q=H.hI(H.hI(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911},
v:function(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new P.aF(s.a(C.b.v(this.a,b.ghK(b))),s.a(C.b.v(this.b,b.ghL(b))),r)},
q:function(a,b){var s=this.$ti,r=s.c
return new P.aF(r.a(this.a*b),r.a(this.b*b),s)}}
A.N.prototype={
gB:function(a){var s=this.$ti,r=J.u(this.a,new A.ee(this),s.h("H<1>"))
return new A.cx(P.l(r,!1,r.$ti.h("E.E")),s.h("cx<1>"))}}
A.ee.prototype={
$1:function(a){return J.y(this.a.$ti.h("o<1>").a(a))},
$S:function(){return this.a.$ti.h("H<1>(o<1>)")}}
A.cx.prototype={
i:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].i()){p.sdr(null)
return!1}if(r>4294967295)H.d(P.aG(r,0,4294967295,"length",null))
q=J.hx(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.n(o,s)
q[s]=o[s].gn()}p.sdr(q)
return!0},
gn:function(){var s=this.b
return s==null?H.d(P.ae("No element")):s},
sdr:function(a){this.b=this.$ti.h("i<1>?").a(a)},
$iH:1}
X.a_.prototype={
gbR:function(){var s=this.x
return s==null?H.d(H.f("startingMobject")):s},
k:function(a){var s=this.r
return this.aj()+"("+s.gL(s)+", runTime: "+H.t(this.a)+"s)"},
aj:function(){var s=this.bS(0),r=P.fW("^Instance of '(.*?)'$").cm(s).b
if(1>=r.length)return H.n(r,1)
r=r[1]
r.toString
return r},
aQ:function(){this.x=this.c8()
this.aW(0)},
cl:function(){this.aW(1)},
aR:function(a){},
c8:function(){return this.r.j()},
b3:function(){return H.a([this.r,this.gbR()],t.r)},
cJ:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.b3(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)p.push(s[q].aN())
s=t.h
return P.l(new A.N(p,s),!0,s.h("o.E"))},
aG:function(a){var s,r,q
for(s=this.eq(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].cH(a)},
eq:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.b3(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o.push(p)}return o},
aW:function(a){a=Math.min(1,Math.max(a,0))
this.hf(this.b.$1(a))},
hf:function(a){var s,r,q,p,o,n=this.cJ()
for(s=T.w(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){o=s[p]
this.cq(C.a.m(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.S(o)*q,0)))}},
cq:function(a,b){t.a.a(a)}}
G.cW.prototype={
gdD:function(){var s=this.z
return s==null?H.d(H.f("animationsTiming")):s},
gec:function(){var s=this.Q
return s==null?H.d(H.f("maxEndTime")):s},
f_:function(a,b,c,d,e){var s,r,q,p=H.a([],t.r)
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)p.push(s[q].r)
this.r.Y(t.a.a(T.iy(p,t.j)))
this.hb()},
b3:function(){return t.fh.a(this.r).gu()},
aQ:function(){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aQ()},
cl:function(){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].cl()},
aR:function(a){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aR(a)},
aG:function(a){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aG(a)},
hb:function(){var s,r,q,p,o=this
o.sf7(t.gp.a(o.es()))
s=H.a([],t.n)
for(r=o.gdD(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(r[p].c)
o.Q=H.b2(C.a.bu(s,0,C.p,t.V))
if(o.a===0)o.a=o.gec()},
es:function(){var s,r,q,p,o,n,m,l,k,j=H.a([],t.fZ)
for(s=this.y,r=s.length,q=t.cL,p=this.c,o=1-p,n=0,m=0;m<s.length;s.length===r||(0,H.c)(s),++m){l=s[m]
k=n+l.a
C.a.A(j,new S.aW(l,n,k,q))
n=n*o+k*p}return j},
aW:function(a){var s,r,q,p,o,n,m,l=a*this.gec()
for(s=this.gdD(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.aW(m)}},
sf7:function(a){this.z=t.di.a(a)}}
M.di.prototype={
cq:function(a,b){var s,r
t.a.a(a)
s=J.ah(a)
r=[0,b]
s.m(a,0).cv(s.m(a,1),r[0],r[1])}}
M.dh.prototype={}
E.d3.prototype={
dP:function(){return this.r},
c8:function(){var s=this.eT()
s.ca(1)
if(s instanceof V.B){s.cV(C.h)
s.cZ(C.h,0)}return s}}
G.co.prototype={
gcE:function(){var s=this.y
return s==null?H.d(H.f("targetMobject")):s},
gcD:function(){var s=this.z
return s==null?H.d(H.f("targetCopy")):s},
d6:function(a,b,c,d,e){if(e!=null)this.y=e
this.ha()},
ha:function(){if(this.cx!=null)return
this.shk(B.iq())},
aQ:function(){var s=this
s.y=s.dP()
s.z=s.gcE().j()
s.r.c5(s.gcD())
s.eR()},
dP:function(){return this.gcE()},
aR:function(a){this.eS(a)},
b3:function(){var s=this
return H.a([s.r,s.gbR(),s.gcE(),s.gcD()],t.r)},
cJ:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gbR(),this.gcD()],r=0;r<3;++r)q.push(s[r].aN())
s=t.h
return P.l(new A.N(q,s),!0,s.h("o.E"))},
cq:function(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.ah(a)
r=s.m(a,0)
q=s.m(a,1)
s=s.m(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.b5.a(p)
n=p==null?B.iq():p
r.sV(t.y.a(n.$3(q.gp(q),s.gp(s),b)))
r.cp(q,s,b)},
shk:function(a){this.cx=t.b5.a(a)}}
R.e5.prototype={
c9:function(a){var s,r,q,p
t.a.a(a)
s=new R.e6()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.c)(a),++p)C.a.D(r,s.$1(a[p]))
return T.iy(r,t.j)},
cw:function(a){var s,r,q,p,o,n="renderer"
for(s=this.c9(t.a.a(a)),r=H.z(s).h("aH<1>"),s=new H.aH(s,r),s=new H.a3(s,s.gl(s),r.h("a3<E.E>")),q=this.r,r=r.h("E.E");s.i();){p=r.a(s.d)
if(p instanceof V.B){o=q.a;(o==null?H.d(H.f(n)):o).hm(p)}else{p=q.a
if(p==null)H.d(H.f(n))}}},
ek:function(a,b){t.y.a(b)
return!C.a.bl(b,new R.e7())?H.a([C.e],t.l):b}}
R.e6.prototype={
$1:function(a){return a.ai()},
$S:49}
R.e7.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:16}
K.bF.prototype={
gbx:function(){var s=this.a
return s==null?H.d(H.f("renderer")):s},
gJ:function(){var s=this.b
return s==null?H.d(H.f("camera")):s},
bf:function(a){return a},
bG:function(a,b){var s,r,q=this
q.gJ()
s=X.dM(a,0,1280,-q.gJ().c/2,q.gJ().c/2)
q.gJ()
r=X.dM(b,720,0,-q.gJ().d/2,q.gJ().d/2)
q.gJ()
return new Y.b(s,r,0).v(0,C.e)}}
K.cU.prototype={
bI:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gJ()
p=X.dM(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gJ()
return new Y.b(p,X.dM(a.b,q,r,0,720),0)},
fP:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new K.dO(s))
t.g5.a(null)
q=q.c
C.a.D(s.r,H.a([W.eU(r,"mousemove",o,!1,q),W.eU(r,"mousedown",p.a(new K.dP(s)),!1,q),W.eU(r,"mouseup",p.a(new K.dQ(s)),!1,q)],t.db))},
hx:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].fR()}}
K.dO.prototype={
$1:function(a){var s,r,q,p
t.J.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bI(new P.aF(r,q,t.q))
q=s.bG(p.a,p.b)
s.ch=q
q.w(0,s.cx)
q=s.ch
$.b8().bk(new O.aT(q,C.m))
if(s.x){r=s.z=s.ch
s.y.w(0,r)
$.b8().bk(new O.c6(r,C.r))}},
$S:5}
K.dP.prototype={
$1:function(a){var s,r,q,p,o
t.J.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bI(new P.aF(r,q,t.q))
s.ch=s.bG(p.a,p.b)
q=a.button
q.toString
r=new O.c5(q)
r.bT(q)
s.Q=r
r=s.ch
$.b8().bk(new O.c7(r,C.n))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new Y.b(q,o,r)
s.z=new Y.b(q,o,r)},
$S:5}
K.dQ.prototype={
$1:function(a){var s,r,q,p
t.J.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bI(new P.aF(r,q,t.q))
s.ch=s.bG(p.a,p.b)
q=a.button
q.toString
r=new O.c5(q)
r.bT(q)
s.Q=r
r=s.ch
$.b8().bk(new O.c8(r,C.q))
s.x=!1},
$S:5}
B.cY.prototype={}
M.bq.prototype={
j:function(){return M.fU(this)},
fD:function(){var s,r,q,p=this,o=t.L,n=H.a([],o),m=p.e4?-1:1,l=p.bt
l.toString
s=p.e1
s=T.fm(p.O+m*s/2,l,s).ah(0)
l=s.length
r=p.e0
q=0
for(;q<s.length;s.length===l||(0,H.c)(s),++q)n.push(p.cS(s[q],r))
p.shv(n)
o=H.a([],o)
for(n=p.e2,l=n.length,r*=p.e3,q=0;q<n.length;n.length===l||(0,H.c)(n),++q)o.push(p.cS(n[q],r))
p.sfO(o)
o=p.ci
o.toString
o=P.l(o,!0,t.j)
n=p.cj
n.toString
C.a.D(o,n)
p.Y(t.a.a(o))},
cS:function(a,b){var s,r=this,q=null,p=C.C.q(0,b),o=N.hy(q,0,0,!1,C.N.q(0,b),q,!1,q,C.f,0,p,q,4)
o.cA(0,r.G().w(0,r.N()).aC())
p=r.cs(a)
o.ac(p.w(0,o.aH(C.e)).q(0,new Y.b(1,1,1)))
o.ay(r.cL())
o.cV(J.P(r.av(),0))
p=J.a7(r.aa(!1))
s=r.x
o.cZ(p,s)
return o},
cs:function(a){var s=this,r=X.dM(a,s.a8,s.O,0,1)
return V.dL(s.N(),s.G(),r,t.i)},
bv:function(a){var s,r=this,q=r.N(),p=r.G(),o=p.w(0,q),n=o.ag(0,Math.sqrt(o.X()))
o=n.dU(a.w(0,q))
s=n.dU(p.w(0,q))
return V.dL(r.a8,r.O,o/s,t.V)},
shv:function(a){this.ci=t.f.a(a)},
sfO:function(a){this.cj=t.f.a(a)}}
M.es.prototype={
$1:function(a){return t.F.a(a).j()},
$S:11}
M.et.prototype={
$1:function(a){return t.F.a(a).j()},
$S:11}
M.d0.prototype={}
M.bM.prototype={
gat:function(){var s=this.aT
return s==null?H.d(H.f("xAxis")):s},
gau:function(){var s=this.aU
return s==null?H.d(H.f("yAxis")):s},
f1:function(a,b,c,d,e,f,g,h){var s=this
s.aT=s.dO(e,d,s.bq.af(s.gdS()))
s.aU=s.dO(h,g,s.br.af(s.gdT()))
s.gau().b1(0,-1.5707963267948966,C.e,C.j)
s.bs=V.dt(H.a([s.gat(),s.gau()],t.U))
s.Y(t.a.a(H.a([s.gat(),s.gau()],t.r)))
s.ac(s.bo)},
dO:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=C.a.a3(H.a([a6,this.bp,this.gdR()],t.f_),new M.e3()),a3=a2.a
if(a3==null)a3=C.J
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
if(h==null)h=C.C
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
a0=N.aV(a1,0,C.c,a1,0)
q=new M.bq(a4,a5,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,a1,a1,0,a1,C.o,C.P,0.35,C.j,a0,a1,a1,a,0,0,C.f,!1,0.01,!1,0.000001,4,a1,a1,a1,C.c,a1,a1,a1,a1,a1)
q.al(C.c,a1,a1)
q.aA(a1,0,!1,a3,!1,0.01,C.f,0,a3,a,0.000001)
q.ay(C.c)
d=Math.max(e,d)
q.r1=d
if(f)q.O=q.O+d/2
q.a1=C.o.q(0,s).q(0,a4)
a3=C.o.q(0,s).q(0,q.O)
q.a7=a3
q.b_(q.a1,a3)
q.ac(q.cs(j).q(0,-1))
if(q.bt==null)q.bt=p*C.b.dJ(a4/p)
if(f)q.fE(q.r1)
if(r)q.fD()
return q},
dN:function(a){var s,r,q,p,o,n="getStart",m=this.gat().cs(0),l=new Y.b(m.a,m.b,m.c),k=H.a([a.a,a.b,a.c],t.n),j=this.bs
k=new A.N(H.a([k,(j==null?H.d(H.f("axes")):j).gu()],t.E),t.D)
k=k.gB(k)
j=t.f4
for(;k.i();){s=k.b
if(s==null)s=H.d(P.ae("No element"))
if(1>=s.length)return H.n(s,1)
r=j.a(s[1])
q=r.a8
p=(H.b2(s[0])-q)/(r.O-q)+0
q=r.ry
if(q!=null){q.a4(n)
q=q.r
q=J.a7(q==null?H.d(H.f("points")):q)}else q=r.b9()
o=r.x1
if(o!=null){o.a4(n)
o=o.r
o=J.a7(o==null?H.d(H.f("points")):o)}else o=r.b8()
l=l.v(0,q.q(0,1-p).v(0,o.q(0,p)).w(0,m))}return l},
d5:function(a){var s=this
s.aT=M.fU(a.gat())
s.aU=M.fU(a.gau())
s.bs=V.dt(H.a([s.gat(),s.gau()],t.U))},
j:function(){return M.iR(this)},
gdR:function(){return C.u},
gdS:function(){return C.k},
gdT:function(){return C.t}}
M.e3.prototype={
$2:function(a,b){var s=t.dK
return s.a(a).af(s.a(b))},
$S:20}
M.ca.prototype={
j:function(){return M.ja(this)},
gdG:function(){var s=this.dZ
return s==null?H.d(H.f("backgroundLines")):s},
gdV:function(){var s=this.e_
return s==null?H.d(H.f("fadedLines")):s},
h9:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.bn==null){s=h.cb
r=t.O
q=H.a([],r)
p=H.a([],r)
o=s.b
r=J.y(o==null?H.a([],r):o)
for(;r.i();){o=r.gn()
n=o.d
p.push(new K.p(o.a,o.b,o.c,n*0.5))}h.bn=new V.aX(q,p,s.c*0.5,s.d,s.e*0.5,0,C.e)}s=h.dY
m=h.cO(h.gat(),h.gau(),h.dW,s)
l=h.cO(h.gau(),h.gat(),h.dX,s)
s=t.F
r=P.l(m[0],!0,s)
C.a.D(r,l[0])
s=P.l(m[1],!0,s)
C.a.D(s,l[1])
k=[r,s]
s=t.ds
h.sfd(s.a(k[0]))
h.sfe(s.a(k[1]))
j=V.dt(h.gdG())
j.bQ(h.cb)
i=V.dt(h.gdV())
s=h.bn
s.toString
i.bQ(s)
h.fF(H.a([j,i],t.r))},
cO:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="getStart",d=a0.N(),c=N.hy(f,0,0,!1,a0.G(),f,!1,f,C.f,0,d,f,4),b=1+a3,a=1/b*a2
d=t.L
s=H.a([],d)
r=H.a([],d)
d=a1.a8
q=[T.fm(a1.O,0,a).ah(0),T.fm(d,0,-a).ah(0)]
for(p=t.V,o=0;o<2;++o)for(n=T.dK(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,H.c)(n),++l){k=n[l]
j=N.hz(c)
i=(k.b-d)/(a1.O-d)+0
h=a1.ry
if(h!=null){h.a4(e)
h=h.r
h=J.a7(h==null?H.d(H.f("points")):h)}else h=a1.b9()
g=a1.x1
if(g!=null){g.a4(e)
g=g.r
g=J.a7(g==null?H.d(H.f("points")):g)}else g=a1.b8()
j.ac(h.q(0,1-i).v(0,g.q(0,i)))
if(C.d.W(k.a,b)===0)C.a.A(s,j)
else C.a.A(r,j)}return H.a([s,r],t.gL)},
cT:function(a){var s=null,r=this.dN(C.e),q=this.dN(a),p=N.aV(s,0,C.c,s,0)
p=new N.aY(0.25,5,!0,s,0,s,r,q,0.35,C.j,p,s,s,6,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
p.al(C.c,s,s)
p.aA(s,0,!1,C.h,!1,0.01,C.f,0,C.c,6,0.000001)
p.ay(C.c)
p.f0(s,0,0,!1,q,s,!1,s,C.f,0,r,s,6)
return p},
sfd:function(a){this.dZ=t.f.a(a)},
sfe:function(a){this.e_=t.f.a(a)},
gdR:function(){return this.fU},
gdS:function(){return this.fV},
gdT:function(){return this.fW}}
M.U.prototype={
af:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
return M.hp(b,a.fx,e,n,r,h,j,a.y,i,m,l,k,a.ch,o,d,p,q,f,g,s)}}
N.cl.prototype={
en:function(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=C.h
if(b==null)r=null
else r=b
if(r==null)r=C.h
return N.aV(C.h,this.e,s,r,this.c)},
hA:function(a){return this.en(a,null)},
hB:function(a){return this.en(null,a)}}
N.dm.prototype={
k:function(a){return this.b}}
N.cn.prototype={
j:function(){return N.jh(this)},
dA:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(a1==null)a1=b.cM()
s=b.cL()
r=N.cm(b.rx)
q=r.a
q=q==null?a:J.ba(q)
if(q!==!1)r=r.hA(s.j())
q=r.b
q=q==null?a:J.ba(q)
if(q!==!1)r=r.hB(s.j())
p=Z.ks(3.141592653589793,C.j).ah(0)
q=p.length
if(0>=q)return H.n(p,0)
o=p[0]
if(1>=q)return H.n(p,1)
n=p[1]
if(2>=q)return H.n(p,2)
m=p[2]
if(3>=q)return H.n(p,3)
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
h=Z.kc(3,new Y.b(j*l+e*h+g*k-f*q,g*l+e*q+f*h-j*k,f*l+e*k+j*q-g*h))
d=new N.bJ(0,0,0,C.f,!1,0.01,!1,0.000001,4,a,a,a,C.c,a,a,a,a,a)
d.al(C.c,a,a)
d.aA(a,0,!1,a,!1,0.01,C.f,0,a,0,0.000001)
d.f3(h,a,0,!1,a,!1,C.f,0,a,0)
d.cA(0,3.141592653589793)
d.eg(a1,0,C.e,a,!0)
d.eg(a1,1,C.e,a,!0)
d.ea(b)
d.bQ(r)
q=a0===C.z
c=q?b.N():b.G()
d.cA(0,-(q?J.P(b.gp(b),1):J.P(b.gp(b),J.x(b.gp(b))-2)).w(0,c).aC()-J.a7(d.gp(d)).w(0,d.cu(0.5)).aC()-3.141592653589793)
d.ac(c.w(0,J.a7(d.gp(d))))
b.ho(d,a0)
if(q)b.ry=d
else b.x1=d
b.Y(t.a.a(H.a([d],t.r)))
return d},
c4:function(a){return this.dA(a,null)},
fE:function(a){return this.dA(C.A,a)},
ho:function(a,b){var s=this
if(Math.sqrt(s.N().w(0,s.G()).X())===0)return
if(b===C.z)s.b_(a.cu(0.5),s.G())
else s.b_(s.N(),a.cu(0.5))},
az:function(a,b){this.bO(a,!1)
this.bM(C.h,!1)
this.d4(a,!0)},
ay:function(a){return this.az(a,!0)},
cM:function(){return this.r1},
G:function(){var s=this.x1
if(s!=null){s.a4("getStart")
s=J.a7(s.gp(s))}else s=this.b8()
return s},
N:function(){var s=this.ry
if(s!=null){s.a4("getStart")
s=J.a7(s.gp(s))}else s=this.b9()
return s},
hl:function(){var s,r,q,p=this,o=p.ry
if(o!=null){p.c4(C.z)
s=p.ry
s.toString
r=H.a([],t.l)
for(s=J.y(s.gp(s));s.i();){q=s.gn()
r.push(new Y.b(q.a,q.b,q.c))}o.sV(t.y.a(r))
p.b0(0,H.a([o],t.r))
p.ry=o}o=p.x1
if(o!=null){p.c4(C.A)
s=p.x1
s.toString
r=H.a([],t.l)
for(s=J.y(s.gp(s));s.i();){q=s.gn()
r.push(new Y.b(q.a,q.b,q.c))}o.sV(t.y.a(r))
p.b0(0,H.a([o],t.r))
p.x1=o}}}
N.O.prototype={
j:function(){return N.hz(this)},
bE:function(){var s=this
s.cX(H.a([s.a1,s.a7],t.l))
s.fB()},
fB:function(){var s,r,q=this,p=q.ao
if(p===0)return
s=Math.sqrt(q.N().w(0,q.G()).X())
if(s<2*p)return
r=p/s
q.cv(q,r,1-r)},
b_:function(a,b){var s=this
if(s.N().E(0,s.G())){s.a1=a
s.a7=b
s.bE()}return s.eX(a,b)}}
N.bI.prototype={
gcn:function(){var s=this.aV
return s==null?H.d(H.f("initialStrokeWidth")):s},
f0:function(a,b,c,d,e,f,g,h,i,j,k,l,m){this.aV=m
this.c4(C.A)
this.d_()},
b4:function(a,b,c,d){var s=this
if(Math.sqrt(s.N().w(0,s.G()).X())===0)return
s.eY(0,b,c,d)
s.d_()
s.hl()},
cU:function(a,b,c){return this.b4(a,b,C.e,c)},
cM:function(){var s=this
return Math.min(s.r1,s.a8*Math.sqrt(s.N().w(0,s.G()).X()))},
d_:function(){var s=this
return s.eJ(!1,Math.min(s.gcn(),s.O*Math.sqrt(s.N().w(0,s.G()).X())))},
j:function(){return N.iP(this)}}
N.aY.prototype={
j:function(){return N.aZ(this)}}
N.cb.prototype={
f3:function(a,b,c,d,e,f,g,h,i,j){var s=P.l(a,!0,t.i)
s.push(C.a.gP(a))
this.cX(s)},
j:function(){return N.jb(this)}}
N.ce.prototype={
j:function(){return N.jf(this)}}
N.cp.prototype={
j:function(){return N.ji(this)}}
N.bJ.prototype={
j:function(){return N.ax(this)}}
M.q.prototype={
gI:function(a){var s=this.a
return s},
gL:function(a){var s=this.b
return s==null?H.d(H.f("name")):s},
gu:function(){var s=this.d
return s==null?H.d(H.f("submobjects")):s},
gbB:function(){var s=this.e
if(s==null){s=H.a([],t.eM)
this.sd8(s)}return s},
gM:function(){var s=this.f
return s==null?H.d(H.f("updatingSuspended")):s},
gp:function(a){var s=this.r
return s==null?H.d(H.f("points")):s},
al:function(a,b,c){var s=this,r=s.aj()
s.b=r
s.saB(t.a.a(H.a([],t.r)))
s.f=!1
s.sV(t.y.a(H.a([],t.l)))
s.bE()
s.e6()},
k:function(a){return this.aj()},
aj:function(){var s=this.bS(0),r=P.fW("^Instance of '(.*?)'$").cm(s).b
if(1>=r.length)return H.n(r,1)
r=r[1]
r.toString
return r},
e6:function(){},
bE:function(){},
Y:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.Z(a,this))throw H.e("Mobject can't contain itself")
s=P.l(a,!0,t.j)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
if(!C.a.Z(a,o))s.push(o)}this.saB(n.a(s))},
fF:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.Z(a,this))throw H.e("Mobject can't contain itself")
s=H.a([],t.r)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
if(!C.a.Z(a,o))s.push(o)}C.a.D(s,a)
this.saB(n.a(s))},
b0:function(a,b){var s,r,q,p,o,n=t.a
n.a(b)
s=H.a([],t.r)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
if(!C.a.Z(b,o))s.push(o)}this.saB(n.a(s))},
bg:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.aH(a)
for(s=this.aN(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.y(l==null?H.d(H.f("points")):l)
for(;l.i();)m.push(J.fJ(c.$1(l.gn().w(0,b)),b))
n.sV(q.a(m))}},
fJ:function(a){return this.bg(C.e,null,a)},
j:function(){return M.j9(this)},
em:function(a,b){var s,r,q,p=this
if(p.gM())return
for(s=p.gbB(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].$2(p,a)
for(s=p.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].em(a,!0)},
cH:function(a){return this.em(a,!0)},
be:function(a){t.he.a(a)
C.a.A(this.gbB(),a)
this.cH(0)},
ef:function(a){t.he.a(a)
for(;C.a.Z(this.gbB(),a);)C.a.b0(this.gbB(),a)},
dK:function(a){var s,r,q
this.sd8(t.cS.a(H.a([],t.eM)))
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].dK(!0)},
fS:function(){return this.dK(!0)},
ac:function(a){return this.fJ(new M.ep(a))},
b4:function(a,b,c,d){return this.bg(c,d,new M.eo(b))},
cU:function(a,b,c){return this.b4(a,b,C.e,c)},
b1:function(a,b,c,d){this.bg(C.e,c,new M.en(Z.ku(b,d).gel()))},
by:function(a,b,c){return this.b1(a,b,c,C.j)},
cA:function(a,b){return this.b1(a,b,null,C.j)},
eO:function(a,b,c,d){return this.bg(c,d,new M.eq(b,a))},
eg:function(a,b,c,d,e){var s=this.hi(b)
if(s===0)return
this.eO(a/s,b,c,d)},
b_:function(a,b){var s,r=this,q=r.N(),p=r.G(),o=p.w(0,q)
if(q.E(0,p))throw H.e("Cannot position endpoints of a closed loop")
s=b.w(0,a)
r.cU(0,Math.sqrt(s.X())/Math.sqrt(o.X()),q)
r.by(0,s.aC()-o.aC(),q)
r.ac(a.w(0,q))},
az:function(a,b){var s,r,q
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].az(a,!0)
this.a=a},
aS:function(a,b){var s,r,q
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aS(a,!0)},
ca:function(a){return this.aS(a,!0)},
ai:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)C.a.D(o,s[q].ai())
p=P.fT(o,t.j)
return P.l(p,!0,H.D(p).c)},
aN:function(){var s=this.ai(),r=H.z(s),q=r.h("bg<1>")
return P.l(new H.bg(s,r.h("J(1)").a(new M.el()),q),!0,q.h("o.E"))},
cK:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.aN(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q].r
C.a.D(o,p==null?H.d(H.f("points")):p)}return o},
cQ:function(){return this.cK()},
bH:function(a,b,c){var s,r,q
t.bG.a(c)
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.c)(c),++q)s.push(c[q].bF(a))
if(b<0)return C.a.a3(s,C.v)
else if(b===0)return(C.a.a3(s,C.v)+C.a.a3(s,C.p))/2
else return C.a.a3(s,C.p)},
aH:function(a){var s=this,r=s.cQ()
if(r.length===0)return C.e
return new Y.b(s.bH(0,C.b.ar(a.a),r),s.bH(1,C.b.ar(a.b),r),s.bH(2,C.b.ar(a.c),r))},
hi:function(a){var s=this.cK(),r=H.z(s),q=new H.L(s,r.h("k(1)").a(new M.em(a)),r.h("L<1,k>")),p=q.a3(0,C.v)
return q.a3(0,C.p)-p},
N:function(){this.a4("getStart")
return J.a7(this.gp(this))},
G:function(){this.a4("getEnd")
return J.bE(this.gp(this))},
gl:function(a){return this.b6(0).length},
b6:function(a){var s=this,r=H.a([],t.r)
if(J.cS(s.gp(s)))r.push(s)
C.a.D(r,s.gu())
return r},
c5:function(a){var s,r,q,p,o,n,m=this
if(J.ba(m.gp(m))&&J.cS(a.gp(a)))a.ed()
if(J.ba(a.gp(a))&&J.cS(m.gp(m)))m.ed()
s=m.b6(0).length
r=a.b6(0).length
m.dz(Math.max(0,r-s))
a.dz(Math.max(0,s-r))
m.dB(a)
for(q=new A.N(H.a([m.gu(),a.gu()],t.Z),t.h),q=q.gB(q);q.i();){p=q.b
if(p==null)p=H.d(P.ae("No element"))
o=p.length
if(0>=o)return H.n(p,0)
n=p[0]
if(1>=o)return H.n(p,1)
n.c5(p[1])}},
cP:function(){throw H.e("getPointMobject not implemented for "+H.t(this.gew())+"()")},
dB:function(a){var s=this,r=J.x(s.gp(s)),q=J.x(a.gp(a))
if(r<q)s.dC(a)
else if(r>q)a.dC(s)},
dC:function(a){throw H.e("Not implemented")},
ed:function(){var s=this.j(),r=t.r,q=t.a
s.saB(q.a(H.a([],r)))
this.sV(t.y.a(H.a([],t.l)))
this.Y(q.a(H.a([s],r)))},
dz:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.b6(0).length
if(s===0){r=H.a([],t.r)
for(q=T.w(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.c)(q),++o)r.push(a1.cP())
a1.saB(t.a.a(r))}n=s+a2
r=t.t
q=H.a([],r)
for(p=T.w(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.c)(p),++o){l=p[o]
if(typeof l!=="number")return l.q()
q.push(C.b.ak(l*s,n))}p=H.a([],r)
for(m=T.w(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.c)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.b4(i),e=0;e<q.length;q.length===g||(0,H.c)(q),++e)if(f.E(i,q[e]))h.push(1)
else h.push(0)
p.push(T.hh(h,j))}d=H.a([],t.r)
for(r=new A.N(H.a([a1.gu(),p],t.E),t.D),r=r.gB(r),q=t.j;r.i();){c=r.b
if(c==null)c=H.d(P.ae("No element"))
p=c.length
if(0>=p)return H.n(c,0)
b=q.a(c[0])
if(1>=p)return H.n(c,1)
a=H.S(c[1])
C.a.A(d,b)
for(p=T.w(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.c)(p),++o){a0=b.j()
a0.ca(1)
C.a.A(d,a0)}}a1.saB(t.a.a(d))},
cp:function(a,b,c){},
cv:function(a,b,c){},
fN:function(a){var s,r,q,p,o,n,m
this.c5(a)
for(s=new A.N(H.a([this.ai(),a.ai()],t.Z),t.h),s=s.gB(s),r=t.i,q=t.y;s.i();){p=s.b
if(p==null)p=H.d(P.ae("No element"))
o=p.length
if(0>=o)return H.n(p,0)
n=p[0]
if(1>=o)return H.n(p,1)
m=p[1]
o=m.r
n.sV(q.a(P.l(o==null?H.d(H.f("points")):o,!0,r)))
n.cp(n,m,1)}},
a4:function(a){var s
if(J.cS(this.gp(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.e(s)},
saB:function(a){this.d=t.hh.a(a)},
sd8:function(a){this.e=t.cI.a(a)},
sV:function(a){this.r=t.bG.a(a)}}
M.ep.prototype={
$1:function(a){return a.v(0,this.a)},
$S:2}
M.eo.prototype={
$1:function(a){return a.q(0,this.a)},
$S:2}
M.en.prototype={
$1:function(a){return a.aM(this.a)},
$S:2}
M.eq.prototype={
$1:function(a){var s=this.a
return a.hC(s,a.bF(s)*this.b)},
$S:2}
M.el.prototype={
$1:function(a){t.j.a(a)
return J.x(a.gp(a))>0},
$S:6}
M.em.prototype={
$1:function(a){return t.i.a(a).bF(this.a)},
$S:24}
M.bn.prototype={
j:function(){return M.j0(this)}}
V.B.prototype={
aA:function(a,b,c,d,e,f,g,h,i,j,k){if(d!=null)this.sap(H.a([d],t.O))
if(i!=null)this.sad(H.a([i],t.O))},
j:function(){return V.jj(this)},
e6:function(){var s=this,r=s.dy
s.eC(r==null?H.a([s.gI(s)],t.O):r)
r=s.fr
if(r==null)r=H.a([s.gI(s)],t.O)
s.eI(r,s.x)
s.eB(s.fx,s.y)
r=s.z
s.eF(s.Q,r)},
aO:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.D(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.bK(),p=q.length,o=0;o<q.length;q.length===p||(0,H.c)(q),++o)q[o].cW(r,!1)
if(r.length!==0){if(n.dy==null)n.sap(r)
q=n.dy
q.toString
q=J.x(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.sap(T.bk(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.x(q)){q=n.dy
q.toString
n.sap(T.bk(r,J.x(q),t.G))}}s=H.a([],s)
q=n.dy
q.toString
q=T.w(J.x(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.c)(q),++o)s.push(C.a.m(r,q[o]))
n.sap(s)}},
bM:function(a,b){return this.aO(a,null,b)},
cW:function(a,b){return this.aO(null,a,b)},
eC:function(a){return this.aO(null,a,!0)},
cV:function(a){return this.aO(a,null,!0)},
ab:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.D(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.bK(),p=q.length,o=0;o<q.length;q.length===p||(0,H.c)(q),++o)q[o].eK(a,r,!1,e)
if(r.length!==0)if(a){if(n.fx==null)n.saK(r)
q=n.fx
q.toString
q=J.x(q)
p=r.length
if(q<p){q=n.fx
q.toString
n.saK(T.bk(q,p,t.G))}else{q=n.fx
q.toString
if(p<J.x(q)){q=n.fx
q.toString
n.saK(T.bk(r,J.x(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.w(J.x(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.c)(q),++o)s.push(C.a.m(r,q[o]))
n.sad(s)}else{if(n.fr==null)n.sad(r)
q=n.fr
q.toString
q=J.x(q)
p=r.length
if(q<p){q=n.fr
q.toString
n.sad(T.bk(q,p,t.G))}else{q=n.fr
q.toString
if(p<J.x(q)){q=n.fr
q.toString
n.sad(T.bk(r,J.x(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.w(J.x(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.c)(q),++o)s.push(C.a.m(r,q[o]))
n.sad(s)}if(e!=null)if(a)n.y=e
else n.x=e},
bO:function(a,b){return this.ab(!1,a,null,b,null)},
eK:function(a,b,c,d){return this.ab(a,null,b,c,d)},
bP:function(a,b){return this.ab(!1,null,a,b,null)},
eI:function(a,b){return this.ab(!1,null,a,!0,b)},
cZ:function(a,b){return this.ab(!1,a,null,!0,b)},
eJ:function(a,b){return this.ab(!1,null,null,a,b)},
eH:function(a){return this.ab(!1,null,null,!0,a)},
bL:function(a,b,c,d){return this.ab(!0,a,t.x.a(b),c,d)},
eA:function(a,b){return this.bL(null,a,b,null)},
eB:function(a,b){return this.bL(null,a,!0,b)},
d0:function(a,b){var s=this,r=null,q=t.x,p=q.a(a.d),o=q.a(a.a)
q=q.a(a.b)
s.aO(r,o,b)
s.ab(!1,r,q,b,r)
s.bL(r,p,b,r)
s.bN(a.r,a.f,b)
return r},
bQ:function(a){return this.d0(a,!0)},
cL:function(){var s=J.P(this.av(),0)
return s},
az:function(a,b){this.bM(a,!0)
this.bO(a,!0)
this.eZ(a,!0)},
ay:function(a){return this.az(a,!0)},
eb:function(a,b){var s,r,q,p="removeWhere",o=a.av(),n=a.aw(),m=a.x,l=a.aa(!0),k=a.y,j=a.z,i=a.Q
this.d0(new V.aX(o,n,m,l,k,j,new Y.b(i.a,i.b,i.c)),!1)
s=this.gu()
r=a.gu()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
o=H.z(s).h("J(1)").a(new V.eM())
if(!!s.fixed$length)H.d(P.af(p))
C.a.du(s,o,!0)
o=H.z(r).h("J(1)").a(new V.eN())
if(!!r.fixed$length)H.d(P.af(p))
C.a.du(r,o,!0)
for(o=t.j,o=T.kq(s,r,o,o),o=P.ej([o.a,o.b],!1,t.z),o=new A.N(new H.a0(o,H.z(o).h("a0<1,i<B>>")),t.eX),o=o.gB(o);o.i();){q=o.b
if(q==null)q=H.d(P.ae("No element"))
n=q.length
if(0>=n)return H.n(q,0)
m=q[0]
if(1>=n)return H.n(q,1)
m.eb(q[1],!0)}},
ea:function(a){return this.eb(a,!0)},
aS:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.y(p.av());s.i();){r=s.gn()
q=r.d
m.push(new K.p(r.a,r.b,r.c,q*o))}p.cW(m,!0)
m=H.a([],n)
for(s=J.y(p.aw());s.i();){r=s.gn()
q=r.d
m.push(new K.p(r.a,r.b,r.c,q*o))}p.bP(m,!0)
n=H.a([],n)
for(m=J.y(p.aa(!0));m.i();){s=m.gn()
r=s.d
n.push(new K.p(s.a,s.b,s.c,r*o))}p.eA(n,!0)
p.eW(a,!0)},
ca:function(a){return this.aS(a,!0)},
av:function(){var s=this.dy
return s==null?H.a([C.h],t.O):s},
aa:function(a){var s=a?this.fx:this.fr
return s==null||J.ba(s)?H.a([C.h],t.O):s},
aw:function(){return this.aa(!1)},
eG:function(a,b){this.Q=new Y.b(a.a,a.b,a.c)},
bN:function(a,b,c){var s,r,q,p,o=this
H.b2(b)
if(c){for(s=o.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
if(p instanceof V.B)p.bN(a,b,!0)}c=!0}o.z=b
if(a!=null)o.eG(a,!1)
if(b!==0){o.bP(o.aw(),c)
o.bP(o.aw(),c)}},
eF:function(a,b){return this.bN(a,b,!0)},
eu:function(){var s,r,q,p,o,n,m,l=this.Q,k=l.a,j=l.b
l=l.c
s=this.aH(C.e)
r=H.a([],t.b)
for(q=[C.o,C.N,C.j],p=t.n,o=0;o<3;++o){n=this.aH(q[o]).w(0,s)
r.push(H.a([n.a,n.b,n.c],p))}m=new Y.b(k,j,l).aM(Z.ac(null,r).gel())
return new S.A(s.w(0,m),s.v(0,m),t.hd)},
ez:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.dx
r=a.length
q=H.a([],t.l)
for(r=T.w(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.c)(r),++o)q.push(C.e)
g.sV(f.a(q))
n=H.a([a,b,c,d],t.Q)
for(f=T.w(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.c)(f),++o){m=f[o]
l=C.a.m(n,m)
p=g.r
for(p=T.dK(T.w(J.x(p==null?H.d(H.f("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.c)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.d(H.f("points"))
J.hk(h,i.b,l[C.d.W(i.a,l.length)])}}},
fC:function(a){var s,r,q,p,o,n,m=this,l=m.dx,k=[]
for(s=T.fB(l,1,0).h5(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o=m.r
k.push(J.bE(o==null?H.d(H.f("points")):o).q(0,1-p).v(0,a.q(0,p)))}s=k.length
if(1>=s)return H.n(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.n(k,2)
n=r.a(k[2])
if(3>=s)return H.n(k,3)
k=r.a(k[3])
m.a4("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.d.W(J.x(m.gp(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.b9(m.gp(m),k)}else{k=r.a(H.a([J.bE(m.gp(m)),o,n,k],s))
J.b9(m.gp(m),k)}return null},
cX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=T.fB(this.dx,1,0).ah(0)
r=t.i
q=Z.dT(T.ix(a,r))
p=Z.dT(T.kA(a,r))
r=H.a([],t.aM)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.c)(s),++n){m=s[n]
r.push(p.q(0,1-m).v(0,q.q(0,m)))}o=H.a([],t.Q)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.c)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.c)(h),++f){e=h[f]
d=J.ah(e)
i.push(new Y.b(d.m(e,0),d.m(e,1),d.m(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.n(o,0)
l=o[0]
if(1>=r)return H.n(o,1)
k=o[1]
if(2>=r)return H.n(o,2)
i=o[2]
if(3>=r)return H.n(o,3)
this.ez(l,k,i,o[3])},
c7:function(a,b){var s=this.db,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
fT:function(a,b){var s
if(!this.c7(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.db+0.00001*Math.abs(s))return!1
return!0},
bD:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.ei(a,new V.eH(l,C.d.W(J.x(a),this.dx)),t.i)
l.a=P.l(s,!0,s.$ti.h("o.E"))
s=H.a([],t.dm)
for(r=T.w(J.x(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.c)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.v()
s.push(new S.bt(J.P(m,n+0),J.P(l.a,n+1),J.P(l.a,n+2),J.P(l.a,n+3),p))}return s},
dq:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.dx
r=T.w(a.length,s,s)
q=H.z(r)
q=P.l(new H.bg(r,q.h("J(1)").a(b),q.h("bg<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.t)
C.a.D(r,q)
p=H.a([],t.Q)
for(r=new A.N(H.a([r,q],t.eI),t.eN),r=r.gB(r),q=H.z(a),o=q.c,q=q.h("aq<1>");r.i();){n=r.b
if(n==null)n=H.d(P.ae("No element"))
if(1>=n.length)return H.n(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.w()
if(typeof l!=="number")return H.cO(l)
if(m-l>=s){H.S(l)
H.S(m)
P.cd(l,m,a.length)
k=new H.aq(a,l,m,q)
k.bU(a,l,m,o)
p.push(k.U(0))}}return p},
cR:function(a){t.y.a(a)
return this.dq(a,new V.eJ(this,a))},
ey:function(a){t.y.a(a)
return this.dq(a,new V.eI(this,a))},
cu:function(a){var s=this,r=s.dx,q=V.he(0,C.d.ak(J.x(s.gp(s)),r),a),p=q.a
return V.h8(J.hm(s.gp(s),r*p,r*(p+1)).U(0)).$1(q.b)},
dn:function(a){var s=F.ei(this.gp(this),new V.eD(this,a),t.i)
return P.l(s,!0,s.$ti.h("o.E"))},
er:function(){var s,r=this
if(J.x(r.gp(r))===1)return r.gp(r)
s=t.eR
s=A.hu(P.l(new A.N(H.a([r.dn(0),r.dn(r.dx-1)],t.Q),s),!0,s.h("o.E")),t.i)
return P.l(s,!0,s.$ti.h("o.E"))},
cQ:function(){var s,r,q,p=H.a([],t.l)
for(s=this.bK(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)C.a.D(p,s[q].er())
return p},
dB:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.m.a(a2)
a0.fG(a2)
if(J.x(a0.gp(a0))===J.x(a2.gp(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.ba(n==null?H.d(H.f(a1)):n)){n=q.a(H.a([o.aH(C.e)],r))
m=o.r
J.b9(m==null?H.d(H.f(a1)):m,n)}n=o.r
if(C.d.W(J.x(n==null?H.d(H.f(a1)):n),o.dx)===1){n=o.r
o.fC(J.bE(n==null?H.d(H.f(a1)):n))}}s=t.i
l=a0.cR(P.l(a0.gp(a0),!0,s))
k=a2.cR(P.l(a2.gp(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.dx
f=new V.eG(g)
for(s=T.w(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.a6(c)
m=J.a6(d)
b=Math.max(0,C.d.ak(n.gl(c)-m.gl(d),g))
a=Math.max(0,C.d.ak(m.gl(d)-n.gl(c),g))
d=a0.e7(b,d)
c=a0.e7(a,c)
C.a.D(i,d)
C.a.D(h,c)}a0.sV(q.a(i))
a2.sV(q.a(h))},
e7:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=T.w(this.dx*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)C.a.D(s,a8)
return s}o=this.bD(a8)
n=o.length
m=n+a7
s=t.t
r=H.a([],s)
for(q=T.w(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.c)(q),++p){k=q[p]
if(typeof k!=="number")return k.q()
r.push(C.b.ak(k*n,m))}q=H.a([],s)
for(l=T.w(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.c)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.b4(k),e=0;e<r.length;r.length===g||(0,H.c)(r),++e)h.push(f.E(k,r[e])?1:0)
q.push(T.hh(h,i))}d=H.a([],t.l)
for(s=new A.N(H.a([o,q],t.E),t.D),s=s.gB(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.i();){c=s.b
if(c==null)c=H.d(P.ae(a6))
h=c.length
if(0>=h)return H.n(c,0)
b=i.a(c[0])
if(1>=h)return H.n(c,1)
a=T.fB(H.S(c[1])+1,1,0).ah(0)
for(h=new A.N(H.a([a,T.ix(a,r)],q),l),h=h.gB(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.i();){a2=h.b
if(a2==null)a2=H.d(P.ae(a6))
a3=P.ej([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.n(a2,0)
a5=a2[0]
if(1>=a4)return H.n(a2,1)
C.a.D(d,V.fE(new H.a0(a3,H.z(a3).h("a0<1,b>")),a5,a2[1]))}}return d},
fG:function(a){var s,r,q,p,o,n,m,l,k=new V.eE(),j=new V.eF()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.a6(o)
l=J.a6(n)
if(m.gl(o)>l.gl(n))j.$3(p,a,T.bk(n,m.gl(o),r))
else if(l.gl(n)>m.gl(o))j.$3(p,this,T.bk(o,l.gl(n),r))}},
cP:function(){var s=null,r=this.aH(C.e),q=new V.cq(0.01,0.01,4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
q.al(C.c,s,s)
q.aA(s,0,!1,C.c,!1,0.01,C.f,0,C.c,4,0.000001)
q.sV(t.y.a(H.a([r],t.l)))
q.ea(this)
return q},
cp:function(a,b,c){var s,r=this,q=t.m
q.a(a)
q.a(b)
r.sap(V.hf(a.av(),b.av(),c))
r.sad(V.hf(a.aw(),b.aw(),c))
r.saK(V.hf(a.aa(!0),b.aa(!0),c))
q=t.V
r.sd3(V.fA(a.x,b.x,c,q))
r.sdH(V.fA(a.y,b.y,c,q))
r.seN(V.fA(a.Q,b.Q,c,t.i))
r.sd1(V.fA(a.z,b.z,c,q))
s=new V.eL()
if(c===1){q=b.dy
r.sap(q!=null?s.$1(q):null)
q=b.fr
r.sad(q!=null?s.$1(q):null)
q=b.fx
r.saK(q!=null?s.$1(q):null)
r.sd3(b.x)
r.sdH(b.y)
q=b.Q
r.Q=new Y.b(q.a,q.b,q.c)
r.sd1(b.z)}},
cv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.m.a(a)
if(b<=0&&c>=1){e.sV(t.y.a(P.l(a.gp(a),!0,t.i)))
return}s=t.y
r=a.bD(s.a(P.l(a.gp(a),!0,t.i)))
q=r.length
p=V.he(0,q,b)
o=V.he(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.sV(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.n(r,n)
j=J.dN(r[n])
j=s.a(V.fE(new H.a0(j,H.z(j).h("a0<1,b>")),m,k))
J.b9(e.gp(e),j)}else{if(n>>>0!==n||n>=j)return H.n(r,n)
j=J.dN(r[n])
j=s.a(V.fE(new H.a0(j,H.z(j).h("a0<1,b>")),m,1))
J.b9(e.gp(e),j)
for(j=n+1,P.cd(j,l,r.length),j=H.bs(r,j,l,H.z(r).c),i=j.$ti,j=new H.a3(j,j.gl(j),i.h("a3<E.E>")),i=i.h("E.E"),h=t.z;j.i();){g=i.a(j.d)
g=P.ej([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.a0(g,H.z(g).h("a0<1,b>")))
f=e.r
J.b9(f==null?H.d(H.f("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.n(r,l)
j=J.dN(r[l])
j=s.a(V.fE(new H.a0(j,H.z(j).h("a0<1,b>")),0,k))
J.b9(e.gp(e),j)}},
bK:function(){var s,r,q,p,o=H.a([],t.U)
for(s=this.ai(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
if(p instanceof V.B)o.push(p)}return o},
sd3:function(a){this.x=H.b2(a)},
sdH:function(a){this.y=H.b2(a)},
sd1:function(a){this.z=H.b2(a)},
seN:function(a){this.Q=t.i.a(a)},
sap:function(a){this.dy=t.x.a(a)},
sad:function(a){this.fr=t.x.a(a)},
saK:function(a){this.fx=t.x.a(a)}}
V.X.prototype={
$1:function(a){return t.G.a(a).j()},
$S:3}
V.Y.prototype={
$1:function(a){return t.G.a(a).j()},
$S:3}
V.Z.prototype={
$1:function(a){return t.G.a(a).j()},
$S:3}
V.eM.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:6}
V.eN.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:6}
V.eH.prototype={
$2:function(a,b){t.i.a(b)
return a<J.x(this.a.a)-this.b},
$S:10}
V.eJ.prototype={
$1:function(a){var s,r,q
H.S(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.n(s,r)
r=s[r]
if(a<0||a>=q)return H.n(s,a)
return!this.a.fT(r,s[a])},
$S:12}
V.eI.prototype={
$1:function(a){var s,r,q
H.S(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.n(s,r)
r=s[r]
if(a<0||a>=q)return H.n(s,a)
return!this.a.c7(r,s[a])},
$S:12}
V.eD.prototype={
$2:function(a,b){t.i.a(b)
return C.d.W(a,this.a.dx)===this.b},
$S:10}
V.eG.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=T.w(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(C.a.gK(C.a.gK(a)))
return s}if(b<0)return H.n(a,b)
return a[b]},
$S:28}
V.eE.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.av()
case"strokeColors":return b.aw()
case"backgroundStrokeColors":return b.aa(!1)
default:throw H.e(u.c+a)}},
$S:29}
V.eF.prototype={
$3:function(a,b,c){t.W.a(c)
switch(a){case"fillColors":b.sap(c)
break
case"strokeColors":b.sad(c)
break
case"backgroundStrokeColors":b.saK(c)
break
default:throw H.e(u.c+a)}},
$S:30}
V.eL.prototype={
$1:function(a){var s=t.G
return P.l(J.u(t.W.a(a),new V.eK(),s),!0,s)},
$S:31}
V.eK.prototype={
$1:function(a){return t.G.a(a).j()},
$S:3}
V.aX.prototype={}
V.aK.prototype={
d7:function(a){var s=a==null?H.a([],t.r):a
this.Y(t.a.a(s))},
j:function(){return V.hL(this)}}
V.cq.prototype={
j:function(){return V.jk(this)}}
V.bG.prototype={
ga0:function(a){var s=this.d
return s==null?H.d(H.f("display")):s},
eM:function(a){this.d=a}}
Q.cZ.prototype={
ga_:function(){var s=this.e
return s==null?H.d(H.f("ctx")):s},
aZ:function(){var s=0,r=P.av(t.V),q,p=this,o,n,m
var $async$aZ=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.T(C.ab.gfH(m).ej(new Q.e9(),t.V),$async$aZ)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.at(q,r)}})
return P.au($async$aZ,r)},
cz:function(a){var s,r,q=this,p=q.ga0(q).gJ(),o=q.ga0(q).bf(a)
C.l.sck(q.ga_(),o.b2())
s=p.c
r=p.d
q.ga_().fillRect(0-s/2,0-r/2,p.c,p.d)},
hm:function(a){var s,r,q,p,o,n,m,l=this,k="ctx",j=t.y.a(P.l(a.gp(a),!0,t.i)),i=l.ga0(l).gJ().ek(a,j)
if(i.length===0)return
s=a.ey(i)
for(j=s.length,r=t.O,q=0;q<s.length;s.length===j||(0,H.c)(s),++q){l.hn(a,s[q])
l.dE(a,!0)
p=a.dy
if(p==null)p=H.a([C.h],r)
if(J.x(p)>1){o=l.e
if(o==null)o=H.d(H.f(k))
C.l.sck(o,l.dQ(a,p))}else{o=l.d
if(o==null)o=H.d(H.f("display"))
n=a.dy
m=o.bf(J.P(n==null?H.a([C.h],r):n,0))
o=l.e
if(o==null)o=H.d(H.f(k))
C.l.sck(o,m.b2())}o=l.e;(o==null?H.d(H.f(k)):o).fill()
l.dE(a,!1)
o=l.e;(o==null?H.d(H.f(k)):o).closePath()}},
hn:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.y.a(b)
i.ga_().beginPath()
s=a.bD(b)
r=J.ab(b)
q=r.gP(b)
i.ga_().moveTo(q.a,q.b)
p=a.c7(r.gP(b),r.gK(b))
for(r=s.length,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
m=n.b
l=n.c
k=n.d
j=i.e
if(j==null)j=H.d(H.f("ctx"))
j.bezierCurveTo(m.a,m.b,l.a,l.b,k.a,k.b)}if(p)i.ga_().closePath()},
dQ:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.W.a(b)
s=a.eu()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.ga0(g).gJ().ek(a,r)
r=g.ga_()
p=q.length
if(0>=p)return H.n(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.n(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.a6(b)
m=1/(o.gl(b)-1)
l=T.fm(m+1,0,m).ah(0)
for(r=T.w(o.gl(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.c)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.d(H.f("display"))
h=i.bf(o.m(b,j))
p.addColorStop(C.a.m(l,j),h.b2())}return p},
dE:function(a,b){var s,r,q,p,o=this,n=b?a.y:a.x
if(n===0)return
s=a.aa(b)
r=o.ga0(o).gJ().c
o.ga_().lineWidth=n*0.01*(r/14.222222222222221)
r=J.ab(s)
q=r.bl(s,new Q.e8())
if(r.gT(s)||q)return
if(r.gl(s)>1)C.l.sd2(o.ga_(),o.dQ(a,s))
else{p=o.ga0(o).bf(J.a7(a.aa(b)))
C.l.sd2(o.ga_(),p.b2())}o.ga_().stroke()}}
Q.e9.prototype={
$1:function(a){return H.h2(a)},
$S:32}
Q.e8.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:33}
N.df.prototype={
gaY:function(){var s=this.d
return s==null?H.d(H.f("mobjects")):s},
gJ:function(){var s=this.f
return s==null?H.d(H.f("camera")):s},
ga0:function(a){var s=this.x
return s==null?H.d(H.f("display")):s},
f4:function(){var s,r,q,p=this,o=document,n=o.querySelector(".canvas-container")
n.toString
s=H.a([],t.db)
r=new O.c5(0)
r.bT(0)
o=o.createElement("canvas")
t.gA.a(o)
s=new B.cY(o,n,s,C.e,C.e,r,C.e,C.e)
s.a=new Q.cZ($.b8())
n.appendChild(o).toString
p.x=s
p.r=p.ga0(p).gbx()
s=p.ga0(p)
o=s.b=new R.e5(14.222222222222221,s)
n=s.d
C.H.shz(n,1280)
C.H.sh8(n,720)
r=s.gbx()
r.eQ(s)
n=n.getContext("2d")
n.toString
r.e=n
o.d=o.c/1.7777777777777777
n=s.gbx()
r=o.c
q=o.d
n.ga_().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
s.gbx().cz(C.w)
p.f=o
new P.dC().f5(0)
p.sd9(t.a.a(H.a([],t.r)))},
bA:function(){var s=0,r=P.av(t.z),q=1,p,o=[],n=this,m,l
var $async$bA=P.aw(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.ga0(n).fP()
n.eL()
q=3
s=6
return P.T(n.a6(),$async$bA)
case 6:q=1
s=5
break
case 3:q=2
l=p
H.b7(l)
throw l
s=5
break
case 2:s=1
break
case 5:n.gJ().cw(n.gaY())
n.ga0(n).hx()
return P.at(null,r)
case 1:return P.as(p,r)}})
return P.au($async$bA,r)},
aG:function(a){var s,r,q
for(s=this.gaY(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].cH(a)},
Y:function(a){t.a.a(a)
this.hp(a)
C.a.hc(this.gaY(),0,a)},
eh:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.l(b,!0,t.j)
C.a.D(s,r.gJ().c9(b))
r.sd9(q.a(r.ex(r.gaY(),s)))},
hp:function(a){return this.eh(!0,a)},
ex:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new N.ex(s).$2(a,P.fT(b,H.z(b).c))
return s},
bw:function(a){var s=0,r=P.av(t.z),q=this,p,o,n,m
var $async$bw=P.aw(function(b,c){if(b===1)return P.as(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.r
s=4
return P.T((o==null?H.d(H.f("renderer")):o).aZ(),$async$bw)
case 4:n=c
p+=n
o=a.a
a.aG(n)
a.aW(p/o)
q.aG(n)
o=q.f
o=(o==null?H.d(H.f("camera")):o).r.a;(o==null?H.d(H.f("renderer")):o).cz(C.w)
o=q.f
if(o==null)o=H.d(H.f("camera"))
m=q.d
o.cw(m==null?H.d(H.f("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.at(null,r)}})
return P.au($async$bw,r)},
a2:function(a,b){var s=0,r=P.av(t.z),q=this,p,o
var $async$a2=P.aw(function(c,d){if(c===1)return P.as(d,r)
while(true)switch(s){case 0:o=q.gJ().c9(q.gaY())
b.aQ()
p=b.r
if(!C.a.Z(o,p)){q.Y(t.a.a(H.a([p],t.r)))
C.a.D(o,p.ai())}s=2
return P.T(q.bw(b),$async$a2)
case 2:b.cl()
b.aR(q)
q.aG(0)
return P.at(null,r)}})
return P.au($async$a2,r)},
bC:function(a,b,c,d){H.fp(d,t.e,"IEvent","waitForEvent")
return this.hy(a,!0,!1,d,d)},
hy:function(a,b,c,d,e){var s=0,r=P.av(e),q,p=this,o,n,m,l,k
var $async$bC=P.aw(function(f,g){if(f===1)return P.as(g,r)
while(true)switch(s){case 0:k={}
k.a=!1
k.b=null
o=t.I.a(new O.a8(new N.ey(k,!1,d),a,d.h("a8<0>")))
$.b8().c3(o)
case 3:if(!!k.a){s=4
break}n=p.r
s=5
return P.T((n==null?H.d(H.f("renderer")):n).aZ(),$async$bC)
case 5:m=g
p.aG(m)
n=p.f
n=(n==null?H.d(H.f("camera")):n).r.a;(n==null?H.d(H.f("renderer")):n).cz(C.w)
n=p.f
if(n==null)n=H.d(H.f("camera"))
l=p.d
n.cw(l==null?H.d(H.f("mobjects")):l)
p.a+=m
s=3
break
case 4:$.b8().c3(o)
q=d.h("0/").a(k.b)
s=1
break
case 1:return P.at(q,r)}})
return P.au($async$bC,r)},
sd9:function(a){this.d=t.hh.a(a)}}
N.ex.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.c)(a),++q){p=a[q]
if(b.Z(0,p))continue
o=p.ai()
n=b.hg(0,P.fT(o,H.z(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.d(H.f("submobjects")):o,n)}else C.a.A(r,p)}},
$S:34}
N.ey.prototype={
$1:function(a){var s
this.c.a(a)
s=this.a
if(!s.a){s.b=a
s.a=!0}return this.b},
$S:function(){return this.c.h("J(0)")}}
T.fH.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.fG.prototype={
$1:function(a){return H.S(a)/this.a*this.b},
$S:53}
T.fI.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("J(v,0)")}}
V.fx.prototype={
$1:function(a){return t.G.a(a).U(0)},
$S:14}
V.fy.prototype={
$1:function(a){return t.G.a(a).U(0)},
$S:14}
V.fz.prototype={
$1:function(a){var s
t.p.a(a)
s=J.ah(a)
return new K.p(s.m(a,0),s.m(a,1),s.m(a,2),s.m(a,3))},
$S:37}
V.fo.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=T.dK(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.cO(m)
l.push(J.cR(n.b,Math.pow(q,p-m)*Math.pow(a,m)*X.ic(p,m,!0)))}return C.a.a3(l,new V.fn())},
$S:38}
V.fn.prototype={
$2:function(a,b){var s=t.i
return s.a(a).v(0,s.a(b))},
$S:39}
K.p.prototype={
hF:function(a){return new K.p(this.a,this.b,this.c,a)},
v:function(a,b){var s=this
if(typeof b=="number")return new K.p(s.a+b,s.b+b,s.c+b,1)
else if(b instanceof K.p)return new K.p(s.a+b.a,s.b+b.b,s.c+b.c,1)
else throw H.e("Color only support addition by double or Color")},
q:function(a,b){return new K.p(this.a*b,this.b*b,this.c*b,1)},
j:function(){var s=this
return new K.p(s.a,s.b,s.c,s.d)},
U:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
b2:function(){var s=this
return"rgba("+C.b.ar(s.a*255)+", "+C.b.ar(s.b*255)+", "+C.b.ar(s.c*255)+", "+H.t(s.d)+")"},
k:function(a){return this.b2()}}
S.aD.prototype={
E:function(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof S.aD&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s},
v:function(a,b){t.Y.a(b)
return new S.aD(C.b.v(this.a,b.ghJ()),C.b.v(this.b,b.ghI()))},
q:function(a,b){var s,r,q,p
t.Y.a(b)
s=this.a
r=b.a
q=this.b
p=b.b
return new S.aD(s*r-q*p,s*p+q*r)}}
X.ak.prototype={
k:function(a){return this.b}}
X.a1.prototype={}
M.ec.prototype={
gaD:function(){var s=this.a
return s==null?H.d(H.f("eventListeners")):s},
f2:function(){var s,r,q=P.fS(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.H(0,C.a7[r],H.a([],s))
this.sfc(t.cH.a(q))},
c3:function(a){var s
t.I.a(a)
s=this.gaD().m(0,a.b)
s.toString
C.a.A(s,a)},
aI:function(a,b,c){var s,r,q
H.fp(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.l(c.h("i<a8<0>>").a(b),!0,c.h("a8<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gK(s)
C.a.b0(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
bk:function(a){var s,r=this
switch(a.a){case C.m:t.gt.a(a)
s=r.gaD().m(0,C.m)
s.toString
r.aI(a,s,t.e)
break
case C.n:t.bt.a(a)
s=r.gaD().m(0,C.n)
s.toString
r.aI(a,s,t.e)
break
case C.q:t.dN.a(a)
s=r.gaD().m(0,C.q)
s.toString
r.aI(a,s,t.e)
break
case C.r:t.fV.a(a)
s=r.gaD().m(0,C.r)
s.toString
r.aI(a,s,t.e)
break
case C.x:t.fw.a(a)
s=r.gaD().m(0,C.x)
s.toString
r.aI(a,s,t.e)
break
case C.y:t.bf.a(a)
s=r.gaD().m(0,C.y)
s.toString
r.aI(a,s,t.e)
break}},
sfc:function(a){this.a=t.dC.a(a)}}
O.a8.prototype={}
O.aS.prototype={}
O.aT.prototype={}
O.c7.prototype={}
O.c8.prototype={}
O.c6.prototype={}
O.c5.prototype={
bT:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
X.fq.prototype={
$2:function(a,b){return H.S(a)*H.S(b)},
$S:15}
X.fr.prototype={
$2:function(a,b){return H.S(a)*H.S(b)},
$S:15}
Z.an.prototype={
gR:function(a){return this.a},
gF:function(a){var s=this.b
return s==null?H.d(H.f("shape")):s},
v:function(a,b){return this.aX(0,new Z.dZ(typeof b=="number"?Z.dS(b,this.gF(this)):t.A.a(b)))},
q:function(a,b){return this.aX(0,new Z.e_(typeof b=="number"?Z.dS(b,this.gF(this)):t.A.a(b)))},
aX:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=T.dK(p.gR(p),t.p)
r=H.z(s)
q=r.h("L<1,i<k>>")
q=P.l(new H.L(s,r.h("i<k>(1)").a(new Z.dY(b)),q),!0,q.h("E.E"))
return Z.ac(p.gF(p),q)},
ax:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gR(this)
if(s>>>0!==s||s>=r.length)return H.n(r,s)
return J.P(r[s],a.b)},
fA:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gF(f).a
if(typeof e!=="number")return e.w()
s=f.gF(f).b
if(typeof s!=="number")return s.w()
r=H.a([],t.b)
for(q=T.w(f.gF(f).a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,H.c)(q),++m){l=q[m]
if(!J.aO(l,a)){k=H.a([],n)
j=f.b
j=T.w((j==null?H.d(H.f("shape")):j).a,0,1)
i=j.length
h=0
for(;h<j.length;j.length===i||(0,H.c)(j),++h){g=j[h]
if(!J.aO(g,b))k.push(J.P(C.a.m(o,l),g))}r.push(k)}}return Z.ac(new S.A(e-1,s-1,t.o),r)},
cN:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.aO(h.gF(h).a,2)){s=h.gR(h)
if(0>=s.length)return H.n(s,0)
r=J.P(s[0],0)
s=h.gR(h)
if(0>=s.length)return H.n(s,0)
q=J.P(s[0],1)
s=h.gR(h)
if(1>=s.length)return H.n(s,1)
p=J.P(s[1],0)
s=h.gR(h)
if(1>=s.length)return H.n(s,1)
return r*J.P(s[1],1)-q*p}s=h.gF(h).a
if(typeof s!=="number")return s.w()
o=h.gF(h).b
if(typeof o!=="number")return o.w()
n=new S.A(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=T.w(h.gF(h).a,0,1),m=s.length,l=h.a,k=0;k<s.length;s.length===m||(0,H.c)(s),++k){j=s[k]
if(typeof j!=="number")return j.W()
i=C.b.W(j,2)===0?1:-1
if(0>=l.length)return H.n(l,0)
o.push(i*Z.dS(J.P(l[0],j),n).q(0,h.fA(0,j)).cN())}return T.hh(o,t.V)},
ev:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b0.cN()===0)throw H.e("This matrix is not inversible")
s=b0.gF(b0).a
r=b0.gF(b0).b
q=b0.j()
p=Z.fL(s)
for(o=T.w(r,0,1),n=o.length,m=s-1,l=r-1,k=p.a,j=q.a,i=t.o,h=0;h<o.length;o.length===n||(0,H.c)(o),++h){g=o[h]
for(f=g,e=-1,d=-1;f!==s;++f){i.a(new S.A(f,g,i))
if(f<0||f>=j.length)return H.n(j,f)
c=J.P(j[f],g)
if(c>d){d=c
e=f}}b=j.length
if(e<0||e>=b)return H.n(j,e)
a=j[e]
if(g>>>0!==g||g>=b)return H.n(j,g)
j[e]=j[g]
C.a.H(j,g,a)
b=k.length
if(e>=b)return H.n(k,e)
a0=k[e]
if(g!==(g|0)||g>=b)return H.n(k,g)
k[e]=k[g]
C.a.H(k,g,a0)
b=J.ah(a)
a1=b.m(a,g)
for(a2=g;a2<r;++a2){a3=b.m(a,a2)
if(typeof a3!=="number")return a3.ag()
b.H(a,a2,a3/a1)}for(a3=J.ah(a0),a2=l;a2>=0;--a2){a4=a3.m(a0,a2)
if(typeof a4!=="number")return a4.ag()
a3.H(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(e>=j.length)return H.n(j,e)
a5=j[e]
if(e>=k.length)return H.n(k,e)
a6=k[e]
a4=J.ah(a5)
a1=a4.m(a5,g)
for(a7=a2;a7!==r;++a7){a8=a4.m(a5,a7)
a9=b.m(a,a7)
if(typeof a9!=="number")return a9.q()
if(typeof a8!=="number")return a8.w()
a4.H(a5,a7,a8-a9*a1)}for(a4=J.ah(a6),a7=l;a7>0;--a7){a8=a4.m(a6,a7)
a9=a3.m(a0,a7)
if(typeof a9!=="number")return a9.q()
if(typeof a8!=="number")return a8.w()
a4.H(a6,a7,a8-a9*a1);--a7
a9=a4.m(a6,a7)
a8=a3.m(a0,a7)
if(typeof a8!=="number")return a8.q()
if(typeof a9!=="number")return a9.w()
a4.H(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.m(a6,0)
a9=a3.m(a0,0)
if(typeof a9!=="number")return a9.q()
if(typeof a8!=="number")return a8.w()
a4.H(a6,0,a8-a9*a1)}}}return p},
ah:function(a){var s=this.gR(this),r=H.z(s),q=r.h("L<1,k>")
return P.l(new H.L(s,r.h("k(1)").a(new Z.dW(a)),q),!0,q.h("E.E"))},
gel:function(){return this.aX(0,new Z.e0(this))},
aM:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.gF(a0),a2=a0.gF(a0).b,a3=a5.gF(a5).b,a4=Z.dS(0,new S.A(a0.gF(a0).a,a5.gF(a5).b,t.o))
for(a1=T.w(a1.a,0,1),s=a1.length,r=a5.a,q=a0.a,p=a4.a,o=0;o<a1.length;a1.length===s||(0,H.c)(a1),++o){n=a1[o]
for(m=T.w(a3,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.c)(m),++k){j=m[k]
for(i=T.w(a2,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,H.c)(i),++g){f=i[g]
e=C.a.m(p,n)
d=J.ah(e)
c=d.m(e,j)
b=J.P(C.a.m(q,n),f)
a=J.P(C.a.m(r,f),j)
if(typeof b!=="number")return b.q()
if(typeof a!=="number")return H.cO(a)
if(typeof c!=="number")return c.v()
d.H(e,j,c+b*a)}}}return a4},
j:function(){return this.fI(new Z.dV())},
fI:function(a){return this.aX(0,new Z.dU(t.ao.a(a)))},
h5:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gR(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)for(p=J.y(s[q]);p.i();)o.push(p.gn())
return o},
k:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.t(d.gF(d).a)+"x"+H.t(d.gF(d).b),b=H.a([],t.t)
for(s=d.gR(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)for(p=J.y(s[q]);p.i();)b.push(C.b.cG(p.gn(),6).length)
o=C.a.bu(b,6,C.Q,t.S)
for(b=d.gR(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.c)(b),++q){m=b[q]
n+="      "
for(l=J.y(m);l.i();){k=l.gn()
j=k<0?"-":" "
k=Math.abs(k)
i=C.b.cG(k,6)
h=H.a([],p)
for(i=T.w(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.c)(i),++f)h.push(" ")
e=C.a.hh(h)
n=n+j+C.b.cG(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sf8:function(a){this.b=t.gv.a(a)}}
Z.dZ.prototype={
$2:function(a,b){return a+this.a.ax(t.o.a(b))},
$S:1}
Z.e_.prototype={
$2:function(a,b){return a*this.a.ax(t.o.a(b))},
$S:1}
Z.dY.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=T.dK(a.b,t.V)
r=H.z(s)
q=r.h("L<1,k>")
return P.l(new H.L(s,r.h("k(1)").a(new Z.dX(this.a,a)),q),!0,q.h("E.E"))},
$S:42}
Z.dX.prototype={
$1:function(a){t.C.a(a)
return this.a.$2(a.b,new S.A(this.b.a,a.a,t.o))},
$S:43}
Z.dW.prototype={
$1:function(a){return J.P(t.p.a(a),this.a)},
$S:44}
Z.e0.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.ax(new S.A(b.b,b.a,s))},
$S:1}
Z.dV.prototype={
$1:function(a){return a},
$S:45}
Z.dU.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
Z.fF.prototype={
$2:function(a,b){var s=t.A
return s.a(a).aM(s.a(b))},
$S:46}
Y.b.prototype={
E:function(a,b){if(b==null)return!1
return b instanceof Y.b&&this.a===b.a&&this.b===b.b&&this.c===b.c},
v:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a+b,s.b+b,s.c+b)
else if(b instanceof Y.b)return new Y.b(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.e("Vector3 only support addition by num or Vector3")},
w:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a-b,s.b-b,s.c-b)
else if(b instanceof Y.b)return new Y.b(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.e("Vector3 only support subtraction by num or Vector3")},
q:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a*b,s.b*b,s.c*b)
else if(b instanceof Y.b)return new Y.b(s.a*b.a,s.b*b.b,s.c*b.c)
else throw H.e("Vector3 only support multiplication by num or Vector3")},
ag:function(a,b){return new Y.b(this.a/b,this.b/b,this.c/b)},
X:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
bF:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.e("No component at index "+a+" on a vector3")}},
hw:function(){var s=t.n
s=Z.ac(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
cI:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new Y.b(s,r,c==null?this.c:c)},
eo:function(a){return this.cI(null,null,a)},
hD:function(a){return this.cI(a,null,null)},
hE:function(a){return this.cI(null,a,null)},
hC:function(a,b){if(a===0)return this.hD(b)
else if(a===1)return this.hE(b)
else if(a===2)return this.eo(b)
else throw H.e("Cannot index a vector3 with index="+a)},
aM:function(a){var s=Z.fL(3).aX(0,new Y.eO(a)).aM(this.hw()),r=t.o
return new Y.b(s.ax(new S.A(0,0,r)),s.ax(new S.A(1,0,r)),s.ax(new S.A(2,0,r)))},
dU:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aC:function(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
k:function(a){return"vec3("+H.t(this.a)+", "+H.t(this.b)+", "+H.t(this.c)+")"}}
Y.eO.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gF(r).a
if(typeof s!=="number")return s.ep()
if(typeof q!=="number")return H.cO(q)
if(s<q){s=b.b
q=r.gF(r).b
if(typeof s!=="number")return s.ep()
if(typeof q!=="number")return H.cO(q)
q=s>=q
s=q}else s=!0
return s?a:r.ax(b)},
$S:1}
S.A.prototype={
k:function(a){return"["+H.t(this.a)+", "+H.t(this.b)+"]"},
E:function(a,b){if(b==null)return!1
return b instanceof S.A&&J.aO(b.a,this.a)&&J.aO(b.b,this.b)},
gt:function(a){var s=J.bD(this.a),r=J.bD(this.b)
return A.h3(A.b3(A.b3(0,C.d.gt(s)),C.d.gt(r)))}}
S.aW.prototype={
k:function(a){return"["+this.a.k(0)+", "+H.t(this.b)+", "+H.t(this.c)+"]"},
E:function(a,b){if(b==null)return!1
return b instanceof S.aW&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gt:function(a){var s=H.az(this.a),r=C.b.gt(this.b),q=C.b.gt(this.c)
return A.h3(A.b3(A.b3(A.b3(0,C.d.gt(s)),C.d.gt(r)),C.d.gt(q)))}}
S.bt.prototype={
U:function(a){var s=this
return P.ej([s.a,s.b,s.c,s.d],!1,t.z)},
k:function(a){var s=this
return"["+s.a.k(0)+", "+s.b.k(0)+", "+s.c.k(0)+", "+s.d.k(0)+"]"},
E:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.bt&&b.a.E(0,s.a)&&b.b.E(0,s.b)&&b.c.E(0,s.c)&&b.d.E(0,s.d)},
gt:function(a){var s=this,r=H.az(s.a),q=H.az(s.b),p=H.az(s.c),o=H.az(s.d)
return A.h3(A.b3(A.b3(A.b3(A.b3(0,C.d.gt(r)),C.d.gt(q)),C.d.gt(p)),C.d.gt(o)))}}
K.bR.prototype={
gct:function(){var s=this.cy
return s==null?H.d(H.f("plane")):s},
gbh:function(){var s=this.db
return s==null?H.d(H.f("arrows")):s},
gcB:function(){var s=this.dx
return s==null?H.d(H.f("rotatedArrows")):s},
gaF:function(){var s=this.dy
return s==null?H.d(H.f("rotatingArrow")):s},
gaq:function(){var s=this.fr
return s==null?H.d(H.f("rotatedRotatingArrow")):s},
eL:function(){var s,r=t.I
this.sfa(r.a(new O.a8(new K.ea(this),C.m,t.dh)))
s=this.fy
r=r.a(s==null?H.d(H.f("positionListener")):s)
$.b8().c3(r)},
a6:function(){var s=0,r=P.av(t.z),q=this,p,o,n,m,l,k,j,i
var $async$a6=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)switch(s){case 0:s=2
return P.T(q.bj(),$async$a6)
case 2:s=3
return P.T(q.bi(),$async$a6)
case 3:s=4
return P.T(q.b5(),$async$a6)
case 4:s=5
return P.T(q.bz(),$async$a6)
case 5:s=6
return P.T(q.bm(),$async$a6)
case 6:s=7
return P.T(q.aJ(),$async$a6)
case 7:p=q.ghq(),o=q.gdF(),n=t.bt
case 8:if(!!0){s=9
break}s=10
return P.T(q.bC(C.n,!0,!1,n),$async$a6)
case 10:m=b
l=q.cy
if(l==null)l=H.d(H.f("plane"))
k=m.c.q(0,new Y.b(1,-1,1))
j=l.aT
i=(j==null?H.d(H.f("xAxis")):j).bv(k)
l=l.aU
q.cx=new Y.b(i,(l==null?H.d(H.f("yAxis")):l).bv(k),0).aC()
l=!q.Q
q.Q=l
k=q.dy
if(l){(k==null?H.d(H.f("rotatingArrow")):k).ef(o)
l=q.dy;(l==null?H.d(H.f("rotatingArrow")):l).be(p)}else{(k==null?H.d(H.f("rotatingArrow")):k).be(o)
l=q.dy;(l==null?H.d(H.f("rotatingArrow")):l).ef(p)}s=8
break
case 9:return P.at(null,r)}})
return P.au($async$a6,r)},
bj:function(){var s=0,r=P.av(t.z),q,p=this,o,n,m,l,k,j,i
var $async$bj=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)$async$outer:switch(s){case 0:j=M.hp(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.5)
i=new M.ca(C.D.af(C.u),C.k.af(C.k),C.E.af(C.t),C.aa,null,1,1,1,null,null,C.e,j,C.k,C.k,-7.111111111111111,7.111111111111111,-4,4,4,0,0,C.f,!1,0.01,!1,0.000001,4,null,null,null,C.c,null,null,null,null,null)
i.al(C.c,null,null)
i.aA(null,0,!1,null,!1,0.01,C.f,0,null,4,0.000001)
i.d7(null)
i.f1(j,C.e,C.k,7.111111111111111,-7.111111111111111,C.k,4,-4)
i.cy=!0
i.h9()
i.eH(1)
p.cy=i
i=H.a([],t.w)
for(j=p.gct().aN(),o=j.length,n=0;n<j.length;j.length===o||(0,H.c)(j),++n){m=new M.dh(1,M.bj(),0,j[n])
l=m.bS(0)
k=P.fW("^Instance of '(.*?)'$").cm(l).b
if(1>=k.length){q=H.n(k,1)
s=1
break $async$outer}k[1].toString
i.push(m)}s=3
return P.T(p.a2(0,G.dR(i,0.02)),$async$bj)
case 3:case 1:return P.at(q,r)}})
return P.au($async$bj,r)},
eD:function(a){var s=this.gct(),r=a.c.q(0,new Y.b(1,-1,1))
this.cx=new Y.b(s.gat().bv(r),s.gau().bv(r),0).aC()},
bi:function(){var s=0,r=P.av(t.z),q,p=this,o,n,m,l,k,j,i,h
var $async$bi=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)$async$outer:switch(s){case 0:i=K.kb(H.a([C.I,C.a0,C.I],t.O),16)
h=H.a([],t.ei)
for(o=T.w(16,0,1),n=o.length,m=0;m<o.length;o.length===n||(0,H.c)(o),++m){l=o[m]
k=p.cy
if(k==null)k=H.d(H.f("plane"))
if(typeof l!=="number"){q=l.ag()
s=1
break $async$outer}j=l/16*6.283185307179586
j=k.cT(new Y.b(Math.cos(j),Math.sin(j),0))
k=C.a.m(i,l)
j.bO(k,!1)
j.bM(C.h,!1)
j.d4(k,!0)
h.push(j)}p.sf9(t.aP.a(h))
h=H.a([],t.w)
for(o=p.gbh(),n=o.length,m=0;m<o.length;o.length===n||(0,H.c)(o),++m)h.push(E.ht(o[m]))
s=3
return P.T(p.a2(0,G.dR(h,0.05)),$async$bi)
case 3:case 1:return P.at(q,r)}})
return P.au($async$bi,r)},
b5:function(){var s=0,r=P.av(t.z),q=this,p,o,n,m,l,k,j,i,h
var $async$b5=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)switch(s){case 0:i=t.ei
h=H.a([],i)
for(p=q.gbh(),o=p.length,n=0;n<p.length;p.length===o||(0,H.c)(p),++n){m=p[n]
l=N.aZ(m)
k=m.x1
if(k!=null){k.a4("getStart")
k=k.r
k=J.a7(k==null?H.d(H.f("points")):k)}else k=m.b8()
l.ac(k)
h.push(l)}q.sfb(t.aP.a(h))
i=H.a([],i)
for(h=q.gbh(),p=h.length,n=0;n<h.length;h.length===p||(0,H.c)(h),++n)i.push(N.aZ(h[n]))
h=H.a([],t.w)
for(p=T.w(16,0,1),o=p.length,n=0;n<p.length;p.length===o||(0,H.c)(p),++n){j=p[n]
l=C.a.m(i,j)
k=q.dx
h.push(G.dn(l,0,M.bj(),1,C.a.m(k==null?H.d(H.f("rotatedArrows")):k,j)))}s=2
return P.T(q.a2(0,G.dR(t.co.a(h),0)),$async$b5)
case 2:h=t.a
q.eh(!0,h.a(i))
q.Y(h.a(q.gcB()))
return P.at(null,r)}})
return P.au($async$b5,r)},
bz:function(){var s=0,r=P.av(t.z),q=this,p,o,n,m,l,k,j
var $async$bz=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)switch(s){case 0:j=H.a([],t.w)
for(p=q.gcB(),o=p.length,n=0;n<p.length;p.length===o||(0,H.c)(p),++n){m=p[n]
l=N.aZ(m)
k=m.ry
if(k!=null){k.a4("getStart")
k=k.r
k=J.a7(k==null?H.d(H.f("points")):k)}else k=m.b9()
l.by(0,1.5707963267948966,k)
j.push(G.dn(m,0,M.bj(),1,l))}s=2
return P.T(q.a2(0,G.dR(t.co.a(j),0)),$async$bz)
case 2:return P.at(null,r)}})
return P.au($async$bz,r)},
bm:function(){var s=0,r=P.av(t.z),q=this,p,o,n
var $async$bm=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)switch(s){case 0:n=P.l(q.gbh(),!0,t.m)
C.a.D(n,q.gcB())
p=V.dt(n)
o=V.hL(p)
o.ay(C.a_.hF(0.5))
s=2
return P.T(q.a2(0,G.dn(p,0,M.bj(),1,o)),$async$bm)
case 2:return P.at(null,r)}})
return P.au($async$bm,r)},
aJ:function(){var s=0,r=P.av(t.z),q=this,p,o
var $async$aJ=P.aw(function(a,b){if(a===1)return P.as(b,r)
while(true)switch(s){case 0:o=q.gct().cT(C.o)
o.ay(C.a2)
q.dy=o
N.aZ(q.gaF())
s=2
return P.T(q.a2(0,E.ht(q.gaF())),$async$aJ)
case 2:q.fr=N.aZ(q.gaF())
q.Y(t.a.a(H.a([q.gaq()],t.r)))
o=q.gaq()
p=N.aZ(q.gaq())
p.ac(q.gaq().G())
s=3
return P.T(q.a2(0,G.dn(o,0,M.bj(),1,p)),$async$aJ)
case 3:p=q.gaq()
o=N.aZ(q.gaq())
o.by(0,1.5707963267948966,q.gaq().N())
s=4
return P.T(q.a2(0,G.dn(p,0,M.bj(),1,o)),$async$aJ)
case 4:q.gaF().be(q.gdF())
q.gaq().be(q.gfK())
return P.at(null,r)}})
return P.au($async$aJ,r)},
fM:function(a,b){var s
t.j.a(a)
s=H.b2(b)*0.2*6.283185307179586
this.ch=C.b.W(this.ch+s,6.283185307179586)
a.b1(0,s,C.e,C.j)
return a},
fL:function(a,b){var s
t.j.a(a)
H.b2(b)
s=N.aZ(this.gaF())
s.fS()
s.ac(this.gaF().G())
s.by(0,1.5707963267948966,this.gaF().G())
a.fN(s)
return a},
hr:function(a,b){var s=this
t.j.a(a)
H.b2(b)
a.b1(0,-s.ch+s.cx,C.e,C.j)
s.ch=s.cx
return a},
sf9:function(a){this.db=t.gR.a(a)},
sfb:function(a){this.dx=t.gR.a(a)},
sfa:function(a){this.fy=t.ac.a(a)}}
K.ea.prototype={
$1:function(a){var s
t.gt.a(a)
s=this.a
if(s.Q)s.eD(a)
return!1},
$S:48};(function aliases(){var s=J.am.prototype
s.eU=s.k
s=J.be.prototype
s.eV=s.k
s=P.C.prototype
s.bS=s.k
s=X.a_.prototype
s.eR=s.aQ
s.eS=s.aR
s.eT=s.c8
s=M.q.prototype
s.eY=s.b4
s.eX=s.b_
s.eZ=s.az
s.eW=s.aS
s.b9=s.N
s.b8=s.G
s=V.B.prototype
s.d4=s.az
s=V.bG.prototype
s.eQ=s.eM})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_2u
s(P,"k8","jm",4)
s(P,"k9","jn",4)
s(P,"ka","jo",4)
r(P,"ib","k1",0)
q(P,"kr",2,null,["$1$2","$2"],["io",function(a,b){return P.io(a,b,t.H)}],50,0)
q(P,"il",2,null,["$1$2","$2"],["im",function(a,b){return P.im(a,b,t.H)}],51,0)
p(M.q.prototype,"gew","aj",21)
var n
o(n=K.bR.prototype,"gdF","fM",7)
o(n,"gfK","fL",7)
o(n,"ghq","hr",7)
q(B,"iq",3,null,["$3"],["kw"],52,0)
q(M,"is",1,null,["$3$inflection$pauseRatio","$1"],["ik",function(a){return M.ik(a,null,null)}],13,0)
q(M,"bj",1,null,["$3$inflection$pauseRatio","$1"],["iu",function(a){return M.iu(a,null,null)}],13,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.fQ,J.am,J.bH,P.o,H.bQ,P.G,H.ai,H.a3,P.H,H.bV,H.eB,H.er,H.bW,H.cz,P.bp,H.eh,H.c1,H.d9,H.fb,H.ap,H.dA,H.dG,P.fe,P.dv,P.bw,P.bx,P.bL,P.dx,P.bh,P.R,P.dw,P.cj,P.ck,P.dE,P.cF,P.cH,P.dB,P.bi,P.V,P.cg,P.dc,P.ci,P.eW,P.ed,P.Q,P.dF,P.dk,W.fN,P.dC,P.aF,A.cx,X.a_,R.e5,K.bF,M.q,M.U,V.aX,N.dm,V.bG,N.df,K.p,S.aD,X.ak,X.a1,M.ec,O.a8,O.c5,Z.an,Y.b,S.A,S.aW,S.bt])
q(J.am,[J.d7,J.bo,J.be,J.r,J.aQ,J.aE,W.a2,W.bP,W.eb,W.bS,W.j])
q(J.be,[J.dd,J.aA,J.aR])
r(J.eg,J.r)
q(J.aQ,[J.bY,J.d8])
q(P.o,[H.b_,H.F,H.bf,H.bg,H.aI,P.bX])
q(H.b_,[H.bc,H.cG])
r(H.cu,H.bc)
r(H.cs,H.cG)
r(H.a0,H.cs)
q(P.G,[H.c_,P.dp,H.da,H.dr,H.de,P.bK,H.dz,P.db,P.aB,P.ds,P.dq,P.br,P.d_,P.d1])
q(H.ai,[H.fD,H.d6,H.dl,H.ft,H.fu,H.fv,P.eR,P.eQ,P.eS,P.eT,P.ff,P.fh,P.fi,P.fl,P.eX,P.f4,P.f0,P.f1,P.f2,P.eZ,P.f3,P.eY,P.f7,P.f8,P.f6,P.f5,P.ez,P.eA,P.fk,P.fc,P.fd,P.ek,W.eP,W.eV,A.ee,R.e6,R.e7,K.dO,K.dP,K.dQ,M.es,M.et,M.e3,M.ep,M.eo,M.en,M.eq,M.el,M.em,V.X,V.Y,V.Z,V.eM,V.eN,V.eH,V.eJ,V.eI,V.eD,V.eG,V.eE,V.eF,V.eL,V.eK,Q.e9,Q.e8,N.ex,N.ey,T.fH,T.fG,T.fI,V.fx,V.fy,V.fz,V.fo,V.fn,X.fq,X.fr,Z.dZ,Z.e_,Z.dY,Z.dX,Z.dW,Z.e0,Z.dV,Z.dU,Z.fF,Y.eO,K.ea])
q(H.F,[H.E,H.bU,H.c0])
q(H.E,[H.aq,H.L,H.aH])
r(H.bT,H.bf)
q(P.H,[H.c4,H.cr,H.ch])
r(H.bm,H.aI)
r(H.aP,H.d6)
r(H.c9,P.dp)
q(H.dl,[H.dj,H.bl])
r(H.du,P.bK)
r(P.c3,P.bp)
r(H.bZ,P.c3)
r(H.cC,H.dz)
q(P.bX,[P.cB,A.N])
r(P.cA,P.dx)
r(P.dD,P.cF)
r(P.cy,P.cH)
r(P.aL,P.cy)
q(P.aB,[P.cc,P.d5])
q(W.a2,[W.a9,W.bu])
q(W.a9,[W.h,W.ay])
r(W.m,W.h)
q(W.m,[W.cV,W.cX,W.bb,W.d4,W.dg])
r(W.ar,W.j)
r(W.ad,W.ar)
r(W.ct,W.bS)
r(W.cv,P.cj)
r(W.dy,W.cv)
r(W.cw,P.ck)
q(X.a_,[G.cW,M.di,G.co])
r(M.dh,M.di)
r(E.d3,G.co)
r(K.cU,K.bF)
r(B.cY,K.cU)
q(M.q,[V.B,M.bn])
q(V.B,[N.cn,V.aK,N.cb,V.cq])
r(N.O,N.cn)
q(N.O,[M.bq,N.bI])
r(M.d0,V.aK)
r(M.bM,M.d0)
r(M.ca,M.bM)
r(N.cl,V.aX)
r(N.aY,N.bI)
r(N.ce,N.cb)
r(N.cp,N.ce)
r(N.bJ,N.cp)
r(Q.cZ,V.bG)
r(O.aS,X.a1)
q(O.aS,[O.aT,O.c7,O.c8,O.c6])
r(K.bR,N.df)
s(H.cG,P.V)
s(P.cH,P.cg)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{v:"int",k:"double",M:"num",aa:"String",J:"bool",Q:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","k(k,A<v,v>)","b(b)","p(p)","~(~())","~(ad)","J(q)","q(q,k)","Q(@)","Q()","J(v,b)","O(O)","J(v)","k(k{inflection:k?,pauseRatio:k?})","i<k>(p)","v(v,v)","J(b)","al<Q>()","Q(~())","@(@,aa)","U(U,U)","aa()","@(aa)","~(@)","k(b)","@(@)","Q(@,aU)","~(v,@)","i<b>(i<i<b>>,@)","i<p>(aa,B)","~(aa,B,i<p>)","i<p>(i<p>)","k(M)","J(p)","~(i<q>,cf<q>)","Q(C,aU)","R<@>(@)","p(i<k>)","b(k)","b(b,b)","~(C?,C?)","~(M)","i<k>(A<v,i<k>>)","k(A<v,k>)","k(i<k>)","k(k)","an(an,an)","~(j)","J(aT)","i<q>(q)","0^(0^,0^)<M>","0^(0^,0^)<M>","i<b>(i<b>,i<b>,k)","k(v)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.jC(v.typeUniverse,JSON.parse('{"dd":"be","aA":"be","aR":"be","kD":"j","kK":"j","kC":"h","kL":"h","kT":"h","kE":"m","kQ":"m","kM":"a9","kI":"a9","kR":"ad","kG":"ar","kF":"ay","kU":"ay","d7":{"J":[]},"bo":{"Q":[]},"r":{"i":["1"],"F":["1"],"o":["1"]},"eg":{"r":["1"],"i":["1"],"F":["1"],"o":["1"]},"bH":{"H":["1"]},"aQ":{"k":[],"M":[]},"bY":{"k":[],"v":[],"M":[]},"d8":{"k":[],"M":[]},"aE":{"aa":[],"eu":[]},"F":{"o":["1"]},"b_":{"o":["2"]},"bQ":{"H":["2"]},"bc":{"b_":["1","2"],"o":["2"],"o.E":"2"},"cu":{"bc":["1","2"],"b_":["1","2"],"F":["2"],"o":["2"],"o.E":"2"},"cs":{"V":["2"],"i":["2"],"b_":["1","2"],"F":["2"],"o":["2"]},"a0":{"cs":["1","2"],"V":["2"],"i":["2"],"b_":["1","2"],"F":["2"],"o":["2"],"o.E":"2","V.E":"2"},"c_":{"G":[]},"E":{"F":["1"],"o":["1"]},"aq":{"E":["1"],"F":["1"],"o":["1"],"E.E":"1","o.E":"1"},"a3":{"H":["1"]},"bf":{"o":["2"],"o.E":"2"},"bT":{"bf":["1","2"],"F":["2"],"o":["2"],"o.E":"2"},"c4":{"H":["2"]},"L":{"E":["2"],"F":["2"],"o":["2"],"E.E":"2","o.E":"2"},"bg":{"o":["1"],"o.E":"1"},"cr":{"H":["1"]},"aI":{"o":["1"],"o.E":"1"},"bm":{"aI":["1"],"F":["1"],"o":["1"],"o.E":"1"},"ch":{"H":["1"]},"bU":{"F":["1"],"o":["1"],"o.E":"1"},"bV":{"H":["1"]},"aH":{"E":["1"],"F":["1"],"o":["1"],"E.E":"1","o.E":"1"},"d6":{"ai":[],"bd":[]},"aP":{"ai":[],"bd":[]},"c9":{"G":[]},"da":{"G":[]},"dr":{"G":[]},"cz":{"aU":[]},"ai":{"bd":[]},"dl":{"ai":[],"bd":[]},"dj":{"ai":[],"bd":[]},"bl":{"ai":[],"bd":[]},"de":{"G":[]},"du":{"G":[]},"bZ":{"bp":["1","2"],"c2":["1","2"]},"c0":{"F":["1"],"o":["1"],"o.E":"1"},"c1":{"H":["1"]},"d9":{"eu":[]},"dz":{"G":[]},"cC":{"G":[]},"R":{"al":["1"]},"bx":{"H":["1"]},"cB":{"o":["1"],"o.E":"1"},"bL":{"G":[]},"cA":{"dx":["1"]},"cF":{"hN":[]},"dD":{"cF":[],"hN":[]},"aL":{"cg":["1"],"cf":["1"],"F":["1"],"o":["1"]},"bi":{"H":["1"]},"bX":{"o":["1"]},"c3":{"bp":["1","2"],"c2":["1","2"]},"bp":{"c2":["1","2"]},"cy":{"cg":["1"],"cf":["1"],"F":["1"],"o":["1"]},"k":{"M":[]},"v":{"M":[]},"i":{"F":["1"],"o":["1"]},"cf":{"F":["1"],"o":["1"]},"aa":{"eu":[]},"bK":{"G":[]},"dp":{"G":[]},"db":{"G":[]},"aB":{"G":[]},"cc":{"G":[]},"d5":{"G":[]},"ds":{"G":[]},"dq":{"G":[]},"br":{"G":[]},"d_":{"G":[]},"dc":{"G":[]},"ci":{"G":[]},"d1":{"G":[]},"dF":{"aU":[]},"ad":{"j":[]},"ar":{"j":[]},"m":{"h":[],"a2":[]},"cV":{"h":[],"a2":[]},"cX":{"h":[],"a2":[]},"bb":{"h":[],"a2":[]},"ay":{"a2":[]},"bS":{"fV":["M"]},"h":{"a2":[]},"d4":{"h":[],"a2":[]},"a9":{"a2":[]},"dg":{"h":[],"a2":[]},"bu":{"a2":[]},"ct":{"fV":["M"]},"cv":{"cj":["1"]},"dy":{"cv":["1"],"cj":["1"]},"cw":{"ck":["1"]},"dC":{"jd":[]},"N":{"o":["i<1>"],"o.E":"i<1>"},"cx":{"H":["i<1>"]},"cW":{"a_":[]},"di":{"a_":[]},"dh":{"a_":[]},"d3":{"a_":[]},"co":{"a_":[]},"cU":{"bF":[]},"cY":{"bF":[]},"bq":{"O":[],"B":[],"q":[]},"d0":{"aK":[],"B":[],"q":[]},"bM":{"aK":[],"B":[],"q":[]},"ca":{"aK":[],"B":[],"q":[]},"cn":{"B":[],"q":[]},"O":{"B":[],"q":[]},"bI":{"O":[],"B":[],"q":[]},"aY":{"O":[],"B":[],"q":[]},"cl":{"aX":[]},"cb":{"B":[],"q":[]},"ce":{"B":[],"q":[]},"cp":{"B":[],"q":[]},"bJ":{"B":[],"q":[]},"bn":{"q":[]},"B":{"q":[]},"aK":{"B":[],"q":[]},"cq":{"B":[],"q":[]},"cZ":{"bG":[]},"aS":{"a1":[]},"aT":{"aS":[],"a1":[]},"c7":{"aS":[],"a1":[]},"c8":{"aS":[],"a1":[]},"c6":{"aS":[],"a1":[]},"bR":{"df":[]}}'))
H.jB(v.typeUniverse,JSON.parse('{"cG":2,"bX":1,"c3":2,"cy":1,"cH":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bC
return{dq:s("@<v>"),A:s("an"),u:s("bL"),dK:s("U"),gA:s("bb"),G:s("p"),Y:s("aD"),X:s("F<@>"),bU:s("G"),aD:s("j"),I:s("a8<a1>"),dh:s("a8<aT>"),en:s("ak"),e:s("a1"),b8:s("bd"),v:s("al<@>"),fh:s("bn"),bL:s("aP<k>"),h:s("N<q>"),D:s("N<C>"),eX:s("N<B>"),eR:s("N<b>"),ca:s("N<k>"),eN:s("N<v>"),eB:s("N<M>"),hf:s("o<@>"),w:s("r<a_>"),aM:s("r<an>"),f_:s("r<U>"),O:s("r<p>"),bN:s("r<aD>"),aE:s("r<a8<a1>>"),L:s("r<O>"),gL:s("r<i<O>>"),Z:s("r<i<q>>"),E:s("r<i<C>>"),Q:s("r<i<b>>"),b:s("r<i<k>>"),eI:s("r<i<v>>"),dd:s("r<i<M>>"),r:s("r<q>"),db:s("r<ck<@>>"),s:s("r<aa>"),fZ:s("r<aW<a_,k,k>>"),dm:s("r<bt<b,b,b,b>>"),U:s("r<B>"),ei:s("r<aY>"),l:s("r<b>"),n:s("r<k>"),gn:s("r<@>"),t:s("r<v>"),eM:s("r<q(q,k)>"),T:s("bo"),cj:s("aR"),fw:s("kO"),bf:s("kP"),F:s("O"),co:s("i<a_>"),W:s("i<p>"),gF:s("i<a8<a1>>"),ds:s("i<O>"),dF:s("i<i<b>>"),a:s("i<q>"),gp:s("i<aW<a_,k,k>>"),aP:s("i<aY>"),y:s("i<b>"),p:s("i<k>"),aH:s("i<@>"),cS:s("i<q(q,k)>"),cH:s("c2<ak,i<a8<a1>>>"),j:s("q"),he:s("q(q,k)"),fV:s("c6"),J:s("ad"),gt:s("aT"),bt:s("c7"),dN:s("c8"),P:s("Q"),f4:s("bq"),K:s("C"),q:s("aF<M>"),eU:s("fV<M>"),bA:s("cf<q>"),k:s("aU"),aw:s("aa"),e3:s("aq<b>"),hd:s("A<b,b>"),C:s("A<v,k>"),o:s("A<v,v>"),fz:s("A<v,i<k>>"),cL:s("aW<a_,k,k>"),bl:s("bt<b,b,b,b>"),ak:s("aA"),m:s("B"),i:s("b"),cD:s("b(b)"),do:s("dy<ad>"),ck:s("R<Q>"),c:s("R<@>"),fJ:s("R<v>"),dL:s("R<M>"),g4:s("cA<M>"),cJ:s("J"),al:s("J(C)"),fT:s("J(v)"),V:s("k"),fA:s("k(k,A<v,v>)"),ao:s("k(k)"),z:s("@"),fO:s("@()"),bI:s("@(C)"),ag:s("@(C,aU)"),S:s("v"),cF:s("0&*"),_:s("C*"),ac:s("a8<a1>?"),eH:s("al<Q>?"),x:s("i<p>?"),f:s("i<O>?"),hh:s("i<q>?"),di:s("i<aW<a_,k,k>>?"),gR:s("i<aY>?"),bG:s("i<b>?"),b5:s("i<b>(i<b>,i<b>,k)?"),cI:s("i<q(q,k)>?"),dC:s("c2<ak,i<a8<a1>>>?"),R:s("C?"),gv:s("A<v,v>?"),d:s("bh<@,@>?"),g:s("dB?"),B:s("@(j)?"),g5:s("~()?"),H:s("M"),N:s("~"),M:s("~()"),c4:s("~(M)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.H=W.bb.prototype
C.l=W.bP.prototype
C.a3=J.am.prototype
C.a=J.r.prototype
C.d=J.bY.prototype
C.a4=J.bo.prototype
C.b=J.aQ.prototype
C.K=J.aE.prototype
C.a5=J.aR.prototype
C.M=J.dd.prototype
C.B=J.aA.prototype
C.ab=W.bu.prototype
C.P=new Y.b(-1,0,0)
C.t=new M.U(null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c=new K.p(1,1,1,1)
C.O=new Y.b(1,-1,0)
C.D=new M.U(C.c,!1,null,C.O,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
C.J=new K.p(0.73333,0.73333,0.73333,1)
C.C=new Y.b(0,-1,0)
C.a6=H.a(s([0]),t.n)
C.u=new M.U(C.J,!0,!1,C.C,1,!0,0.1,1,null,C.a6,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.k=new M.U(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.E=new M.U(null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.p=new H.aP(P.il(),t.bL)
C.Q=new H.aP(P.il(),H.bC("aP<v>"))
C.v=new H.aP(P.kr(),t.bL)
C.R=new H.bV(H.bC("bV<0&>"))
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.S=function() {
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
C.X=function(getTagFallback) {
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
C.T=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.U=function(hooks) {
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
C.W=function(hooks) {
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
C.V=function(hooks) {
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
C.G=function(hooks) { return hooks; }

C.Y=new P.dc()
C.i=new P.dD()
C.Z=new P.dF()
C.h=new K.p(0,0,0,0)
C.w=new K.p(0,0,0,1)
C.I=new K.p(0.98824,0.38431,0.33333,1)
C.a_=new K.p(0.53333,0.53333,0.53333,1)
C.a0=new K.p(0.3451,0.76863,0.86667,1)
C.a2=new K.p(1,0.52549,0.18431,1)
C.m=new X.ak("EventType.mouseMovedEvent")
C.n=new X.ak("EventType.mousePressedEvent")
C.q=new X.ak("EventType.mouseReleasedEvent")
C.r=new X.ak("EventType.mouseDraggedEvent")
C.x=new X.ak("EventType.keyPressedEvent")
C.y=new X.ak("EventType.keyReleasedEvent")
C.a7=H.a(s([C.m,C.n,C.q,C.r,C.x,C.y]),H.bC("r<ak>"))
C.a9=H.a(s([]),t.r)
C.z=new N.dm("TipSide.Start")
C.A=new N.dm("TipSide.End")
C.L=H.a(s([]),t.O)
C.a1=new K.p(0.16078,0.67059,0.79216,1)
C.a8=H.a(s([C.a1]),t.O)
C.e=new Y.b(0,0,0)
C.aa=new V.aX(C.L,C.a8,1,C.L,0,0,C.e)
C.j=new Y.b(0,0,1)
C.N=new Y.b(0,1,0)
C.o=new Y.b(1,0,0)
C.f=new Y.b(1,1,0)
C.ac=new P.bw(null,2)})();(function staticFields(){$.f9=null
$.aC=0
$.bO=null
$.hq=null
$.ih=null
$.ia=null
$.ir=null
$.fs=null
$.fw=null
$.hd=null
$.by=null
$.cK=null
$.cL=null
$.h5=!1
$.I=C.i
$.ag=H.a([],H.bC("r<C>"))
$.dJ=P.fS(t.S,H.bC("c2<v,v>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"kH","iz",function(){return H.kg("_$dart_dartClosure")})
s($,"lg","hj",function(){return C.i.ei(new H.fD(),H.bC("al<Q>"))})
s($,"kV","iA",function(){return H.aJ(H.eC({
toString:function(){return"$receiver$"}}))})
s($,"kW","iB",function(){return H.aJ(H.eC({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"kX","iC",function(){return H.aJ(H.eC(null))})
s($,"kY","iD",function(){return H.aJ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"l0","iG",function(){return H.aJ(H.eC(void 0))})
s($,"l1","iH",function(){return H.aJ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"l_","iF",function(){return H.aJ(H.hJ(null))})
s($,"kZ","iE",function(){return H.aJ(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"l3","iJ",function(){return H.aJ(H.hJ(void 0))})
s($,"l2","iI",function(){return H.aJ(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"l4","hi",function(){return P.jl()})
r($,"kJ","b8",function(){var q=new M.ec()
q.f2()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.am,DOMError:J.am,MediaError:J.am,NavigatorUserMediaError:J.am,OverconstrainedError:J.am,PositionError:J.am,SQLError:J.am,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.cV,HTMLAreaElement:W.cX,HTMLCanvasElement:W.bb,CanvasRenderingContext2D:W.bP,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,DOMException:W.eb,DOMRectReadOnly:W.bS,SVGAElement:W.h,SVGAnimateElement:W.h,SVGAnimateMotionElement:W.h,SVGAnimateTransformElement:W.h,SVGAnimationElement:W.h,SVGCircleElement:W.h,SVGClipPathElement:W.h,SVGDefsElement:W.h,SVGDescElement:W.h,SVGDiscardElement:W.h,SVGEllipseElement:W.h,SVGFEBlendElement:W.h,SVGFEColorMatrixElement:W.h,SVGFEComponentTransferElement:W.h,SVGFECompositeElement:W.h,SVGFEConvolveMatrixElement:W.h,SVGFEDiffuseLightingElement:W.h,SVGFEDisplacementMapElement:W.h,SVGFEDistantLightElement:W.h,SVGFEFloodElement:W.h,SVGFEFuncAElement:W.h,SVGFEFuncBElement:W.h,SVGFEFuncGElement:W.h,SVGFEFuncRElement:W.h,SVGFEGaussianBlurElement:W.h,SVGFEImageElement:W.h,SVGFEMergeElement:W.h,SVGFEMergeNodeElement:W.h,SVGFEMorphologyElement:W.h,SVGFEOffsetElement:W.h,SVGFEPointLightElement:W.h,SVGFESpecularLightingElement:W.h,SVGFESpotLightElement:W.h,SVGFETileElement:W.h,SVGFETurbulenceElement:W.h,SVGFilterElement:W.h,SVGForeignObjectElement:W.h,SVGGElement:W.h,SVGGeometryElement:W.h,SVGGraphicsElement:W.h,SVGImageElement:W.h,SVGLineElement:W.h,SVGLinearGradientElement:W.h,SVGMarkerElement:W.h,SVGMaskElement:W.h,SVGMetadataElement:W.h,SVGPathElement:W.h,SVGPatternElement:W.h,SVGPolygonElement:W.h,SVGPolylineElement:W.h,SVGRadialGradientElement:W.h,SVGRectElement:W.h,SVGScriptElement:W.h,SVGSetElement:W.h,SVGStopElement:W.h,SVGStyleElement:W.h,SVGElement:W.h,SVGSVGElement:W.h,SVGSwitchElement:W.h,SVGSymbolElement:W.h,SVGTSpanElement:W.h,SVGTextContentElement:W.h,SVGTextElement:W.h,SVGTextPathElement:W.h,SVGTextPositioningElement:W.h,SVGTitleElement:W.h,SVGUseElement:W.h,SVGViewElement:W.h,SVGGradientElement:W.h,SVGComponentTransferFunctionElement:W.h,SVGFEDropShadowElement:W.h,SVGMPathElement:W.h,Element:W.h,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,EventTarget:W.a2,HTMLFormElement:W.d4,MouseEvent:W.ad,DragEvent:W.ad,PointerEvent:W.ad,WheelEvent:W.ad,Document:W.a9,DocumentFragment:W.a9,HTMLDocument:W.a9,ShadowRoot:W.a9,XMLDocument:W.a9,Attr:W.a9,DocumentType:W.a9,Node:W.a9,HTMLSelectElement:W.dg,CompositionEvent:W.ar,FocusEvent:W.ar,KeyboardEvent:W.ar,TextEvent:W.ar,TouchEvent:W.ar,UIEvent:W.ar,Window:W.bu,DOMWindow:W.bu,ClientRect:W.ct,DOMRect:W.ct})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.ko
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=complex_exponential.dart.js.map
