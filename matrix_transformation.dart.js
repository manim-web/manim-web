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
a[c]=function(){a[c]=function(){H.kH(b)}
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
if(a[b]!==s)H.kI(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.hf(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={fW:function fW(){},
fS:function(a,b,c){if(b.h("G<0>").b(a))return new H.cw(a,b.h("@<0>").B(c).h("cw<1,2>"))
return new H.b8(a,b.h("@<0>").B(c).h("b8<1,2>"))},
f:function(a){return new H.c6("Field '"+a+"' has not been initialized.")},
hQ:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
he:function(a,b,c){return a},
br:function(a,b,c,d){P.ap(b,"start")
if(c!=null){P.ap(c,"end")
if(b>c)H.d(P.aE(b,0,c,"start",null))}return new H.ar(a,b,c,d.h("ar<0>"))},
ji:function(a,b,c,d){if(t.R.b(a))return new H.c_(a,b,c.h("@<0>").B(d).h("c_<1,2>"))
return new H.bc(a,b,c.h("@<0>").B(d).h("bc<1,2>"))},
hO:function(a,b,c){if(t.R.b(a)){P.ap(b,"count")
return new H.bl(a,b,c.h("bl<0>"))}P.ap(b,"count")
return new H.aG(a,b,c.h("aG<0>"))},
a0:function(){return new P.bq("No element")},
jc:function(){return new P.bq("Too few elements")},
aY:function aY(){},
bU:function bU(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b){this.a=a
this.$ti=b},
cu:function cu(){},
Z:function Z(a,b){this.a=a
this.$ti=b},
c6:function c6(a){this.a=a},
fK:function fK(){},
G:function G(){},
E:function E(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a1:function a1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.$ti=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(a){this.$ti=a},
c1:function c1(a){this.$ti=a},
aF:function aF(a,b){this.a=a
this.$ti=b},
cI:function cI(){},
iD:function(a){var s,r=H.iC(a)
if(r!=null)return r
s="minified:"+a
return s},
r:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cT(a)
return s},
aw:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
eC:function(a){return H.jl(a)},
jl:function(a){var s,r,q,p
if(a instanceof P.C)return H.a4(H.cQ(a),null)
if(J.b1(a)===C.a0||t.ak.b(a)){s=C.J(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a4(H.cQ(a),null)},
bi:function(a){throw H.e(H.kg(a))},
o:function(a,b){if(a==null)J.y(a)
throw H.e(H.hg(a,b))},
hg:function(a,b){var s,r="index"
if(!H.ib(b))return new P.ay(!0,b,r,null)
s=H.S(J.y(a))
if(b<0||b>=s)return P.fU(b,a,r,null,s)
return P.eD(b,r)},
kg:function(a){return new P.ay(!0,a,null,null)},
e:function(a){var s,r
if(a==null)a=new P.de()
s=new Error()
s.dartException=a
r=H.kJ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
kJ:function(){return J.cT(this.dartException)},
d:function(a){throw H.e(a)},
c:function(a){throw H.e(P.ai(a))},
aH:function(a){var s,r,q,p,o,n
a=H.kD(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.eH(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eI:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hR:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fX:function(a,b){var s=b==null,r=s?null:b.method
return new H.db(a,r,s?null:b.receiver)},
b4:function(a){if(a==null)return new H.ex(a)
if(a instanceof H.c2)return H.b3(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.b3(a,a.dartException)
return H.kf(a)},
b3:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kf:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.e.fv(r,16)&8191)===10)switch(q){case 438:return H.b3(a,H.fX(H.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.r(s)+" (Error "+q+")"
return H.b3(a,new H.ce(p,e))}}if(a instanceof TypeError){o=$.iH()
n=$.iI()
m=$.iJ()
l=$.iK()
k=$.iN()
j=$.iO()
i=$.iM()
$.iL()
h=$.iQ()
g=$.iP()
f=o.ab(s)
if(f!=null)return H.b3(a,H.fX(H.cK(s),f))
else{f=n.ab(s)
if(f!=null){f.method="call"
return H.b3(a,H.fX(H.cK(s),f))}else{f=m.ab(s)
if(f==null){f=l.ab(s)
if(f==null){f=k.ab(s)
if(f==null){f=j.ab(s)
if(f==null){f=i.ab(s)
if(f==null){f=l.ab(s)
if(f==null){f=h.ab(s)
if(f==null){f=g.ab(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.cK(s)
return H.b3(a,new H.ce(s,f==null?e:f.method))}}}return H.b3(a,new H.du(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cn()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b3(a,new P.ay(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cn()
return a},
b2:function(a){var s
if(a instanceof H.c2)return a.b
if(a==null)return new H.cB(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.cB(a)},
kv:function(a,b,c,d,e,f){t.b8.a(a)
switch(H.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.f2("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=s
return s},
j7:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.dl().constructor.prototype):Object.create(new H.bk(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.az
if(typeof r!=="number")return r.C()
$.az=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.hx(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.j3(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.hx(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
j3:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ip,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
s=c?H.j0:H.j_
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.e("Error in functionType of tearoff")},
j4:function(a,b,c,d){var s=H.hw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hx:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.j6(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.j4(r,!p,s,b)
if(r===0){p=$.az
if(typeof p!=="number")return p.C()
$.az=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bS
return new Function(p+(o==null?$.bS=H.e5("self"):o)+";return "+n+"."+H.r(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.az
if(typeof p!=="number")return p.C()
$.az=p+1
m+=p
p="return function("+m+"){return this."
o=$.bS
return new Function(p+(o==null?$.bS=H.e5("self"):o)+"."+H.r(s)+"("+m+");}")()},
j5:function(a,b,c,d){var s=H.hw,r=H.j1
switch(b?-1:a){case 0:throw H.e(new H.dg("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
j6:function(a,b){var s,r,q,p,o,n,m,l=$.bS
if(l==null)l=$.bS=H.e5("self")
s=$.hv
if(s==null)s=$.hv=H.e5("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.j5(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.r(r)+"(this."+s+");"
n=$.az
if(typeof n!=="number")return n.C()
$.az=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.r(r)+"(this."+s+", "+m+");"
n=$.az
if(typeof n!=="number")return n.C()
$.az=n+1
return new Function(o+n+"}")()},
hf:function(a,b,c,d,e,f,g){return H.j7(a,b,c,d,!!e,!!f,g)},
j_:function(a,b){return H.dK(v.typeUniverse,H.cQ(a.a),b)},
j0:function(a,b){return H.dK(v.typeUniverse,H.cQ(a.c),b)},
hw:function(a){return a.a},
j1:function(a){return a.c},
e5:function(a){var s,r,q,p=new H.bk("self","target","receiver","name"),o=J.ei(Object.getOwnPropertyNames(p),t.Y)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.e(P.hu("Field name "+a+" not found."))},
cP:function(a){if(a==null)H.kh("boolean expression must not be null")
return a},
kh:function(a){throw H.e(new H.dw(a))},
kH:function(a){throw H.e(new P.d2(a))},
kq:function(a){return v.getIsolateTag(a)},
kI:function(a){return H.d(new H.c6(a))},
lo:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kx:function(a){var s,r,q,p,o,n=H.cK($.io.$1(a)),m=$.fz[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.jQ($.ii.$2(a,n))
if(q!=null){m=$.fz[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.fJ(s)
$.fz[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fD[n]=s
return s}if(p==="-"){o=H.fJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.iv(a,s)
if(p==="*")throw H.e(P.hS(n))
if(v.leafTags[n]===true){o=H.fJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.iv(a,s)},
iv:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hl(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fJ:function(a){return J.hl(a,!1,null,!!a.$ikW)},
kz:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.fJ(s)
else return J.hl(s,c,null,null)},
ks:function(){if(!0===$.hi)return
$.hi=!0
H.kt()},
kt:function(){var s,r,q,p,o,n,m,l
$.fz=Object.create(null)
$.fD=Object.create(null)
H.kr()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ix.$1(o)
if(n!=null){m=H.kz(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kr:function(){var s,r,q,p,o,n,m=C.T()
m=H.bA(C.U,H.bA(C.V,H.bA(C.K,H.bA(C.K,H.bA(C.W,H.bA(C.X,H.bA(C.Y(C.J),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.io=new H.fA(p)
$.ii=new H.fB(o)
$.ix=new H.fC(n)},
bA:function(a,b){return a(b)||b},
je:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.e(new P.eg("Illegal RegExp pattern ("+String(s)+")",a))},
kD:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
d6:function d6(){},
aS:function aS(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ce:function ce(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a},
ex:function ex(a){this.a=a},
c2:function c2(a,b){this.a=a
this.b=b},
cB:function cB(a){this.a=a
this.b=null},
ah:function ah(){},
dn:function dn(){},
dl:function dl(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a){this.a=a},
dw:function dw(a){this.a=a},
c5:function c5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ek:function ek(a,b){this.a=a
this.b=b
this.c=null},
c7:function c7(a,b){this.a=a
this.$ti=b},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
da:function da(a,b){this.a=a
this.b=b},
fi:function fi(a){this.b=a},
hL:function(a,b){var s=b.c
return s==null?b.c=H.h6(a,b.z,!0):s},
hK:function(a,b){var s=b.c
return s==null?b.c=H.cF(a,"ak",[b.z]):s},
hM:function(a){var s=a.y
if(s===6||s===7||s===8)return H.hM(a.z)
return s===11||s===12},
jp:function(a){return a.cy},
bC:function(a){return H.fn(v.typeUniverse,a,!1)},
ku:function(a,b){var s,r,q,p,o
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
return H.i4(a,r,!0)
case 7:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.h6(a,r,!0)
case 8:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.i3(a,r,!0)
case 9:q=b.Q
p=H.cO(a,q,a0,a1)
if(p===q)return b
return H.cF(a,b.z,p)
case 10:o=b.z
n=H.aO(a,o,a0,a1)
m=b.Q
l=H.cO(a,m,a0,a1)
if(n===o&&l===m)return b
return H.h4(a,n,l)
case 11:k=b.z
j=H.aO(a,k,a0,a1)
i=b.Q
h=H.kc(a,i,a0,a1)
if(j===k&&h===i)return b
return H.i2(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cO(a,g,a0,a1)
o=b.z
n=H.aO(a,o,a0,a1)
if(f===g&&n===o)return b
return H.h5(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.e(P.e2("Attempted to substitute unexpected RTI kind "+c))}},
cO:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aO(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
kd:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aO(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
kc:function(a,b,c,d){var s,r=b.a,q=H.cO(a,r,c,d),p=b.b,o=H.cO(a,p,c,d),n=b.c,m=H.kd(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.dC()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
il:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ip(s)
return a.$S()}return null},
iq:function(a,b){var s
if(H.hM(b))if(a instanceof H.ah){s=H.il(a)
if(s!=null)return s}return H.cQ(a)},
cQ:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.h9(a)}if(Array.isArray(a))return H.z(a)
return H.h9(J.b1(a))},
z:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
D:function(a){var s=a.$ti
return s!=null?s:H.h9(a)},
h9:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.jZ(a,s)},
jZ:function(a,b){var s=a instanceof H.ah?a.__proto__.__proto__.constructor:b,r=H.jO(v.typeUniverse,s.name)
b.$ccache=r
return r},
ip:function(a){var s,r,q
H.S(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.fn(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
km:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.dI(a)
q=H.fn(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.dI(q):p},
jY:function(a){var s,r,q,p=this
if(p===t.K)return H.cL(p,a,H.k1)
if(!H.aQ(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cL(p,a,H.k4)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.ib
else if(r===t.V||r===t.H)q=H.k0
else if(r===t.aw)q=H.k2
else q=r===t.cJ?H.i9:null
if(q!=null)return H.cL(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.kw)){p.r="$i"+s
return H.cL(p,a,H.k3)}}else if(s===7)return H.cL(p,a,H.jW)
return H.cL(p,a,H.jU)},
cL:function(a,b,c){a.b=c
return a.b(b)},
jX:function(a){var s,r=this,q=H.jT
if(!H.aQ(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.jR
else if(r===t.K)q=H.jP
else{s=H.cR(r)
if(s)q=H.jV}r.a=q
return r.a(a)},
hc:function(a){var s,r=a.y
if(!H.aQ(a))if(!(a===t._))if(!(a===t.cF))if(r!==7)s=r===8&&H.hc(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jU:function(a){var s=this
if(a==null)return H.hc(s)
return H.K(v.typeUniverse,H.iq(a,s),null,s,null)},
jW:function(a){if(a==null)return!0
return this.z.b(a)},
k3:function(a){var s,r=this
if(a==null)return H.hc(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.b1(a)[s]},
jT:function(a){var s,r=this
if(a==null){s=H.cR(r)
if(s)return a}else if(r.b(a))return a
H.i7(a,r)},
jV:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.i7(a,s)},
i7:function(a,b){throw H.e(H.i1(H.hV(a,H.iq(a,b),H.a4(b,null))))},
fw:function(a,b,c,d){var s=null
if(H.K(v.typeUniverse,a,s,b,s))return a
throw H.e(H.i1("The type argument '"+H.a4(a,s)+"' is not a subtype of the type variable bound '"+H.a4(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
hV:function(a,b,c){var s=P.d3(a),r=H.a4(b==null?H.cQ(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
i1:function(a){return new H.cE("TypeError: "+a)},
a3:function(a,b){return new H.cE("TypeError: "+H.hV(a,null,b))},
k1:function(a){return a!=null},
jP:function(a){if(a!=null)return a
throw H.e(H.a3(a,"Object"))},
k4:function(a){return!0},
jR:function(a){return a},
i9:function(a){return!0===a||!1===a},
le:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.e(H.a3(a,"bool"))},
lg:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.a3(a,"bool"))},
lf:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.a3(a,"bool?"))},
bx:function(a){if(typeof a=="number")return a
throw H.e(H.a3(a,"double"))},
li:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a3(a,"double"))},
lh:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a3(a,"double?"))},
ib:function(a){return typeof a=="number"&&Math.floor(a)===a},
S:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.e(H.a3(a,"int"))},
lk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.a3(a,"int"))},
lj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.a3(a,"int?"))},
k0:function(a){return typeof a=="number"},
h7:function(a){if(typeof a=="number")return a
throw H.e(H.a3(a,"num"))},
lm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a3(a,"num"))},
ll:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.a3(a,"num?"))},
k2:function(a){return typeof a=="string"},
cK:function(a){if(typeof a=="string")return a
throw H.e(H.a3(a,"String"))},
ln:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.a3(a,"String"))},
jQ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.a3(a,"String?"))},
k9:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a4(a[q],b)
return s},
i8:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.w(a5,"T"+(q+p))
for(o=t.Y,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.o(a5,j)
m=C.N.C(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a4(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a4(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a4(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a4(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a4(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a4:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a4(a.z,b)
return s}if(l===7){r=a.z
s=H.a4(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a4(a.z,b)+">"
if(l===9){p=H.ke(a.z)
o=a.Q
return o.length!==0?p+("<"+H.k9(o,b)+">"):p}if(l===11)return H.i8(a,b,null)
if(l===12)return H.i8(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.o(b,n)
return b[n]}return"?"},
ke:function(a){var s,r=H.iC(a)
if(r!=null)return r
s="minified:"+a
return s},
i5:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jO:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.fn(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cG(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cF(a,b,q)
n[b]=o
return o}else return m},
jM:function(a,b){return H.i6(a.tR,b)},
jL:function(a,b){return H.i6(a.eT,b)},
fn:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.i0(H.hZ(a,null,b,c))
r.set(b,s)
return s},
dK:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.i0(H.hZ(a,b,c,!0))
q.set(c,r)
return r},
jN:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.h4(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b_:function(a,b){b.a=H.jX
b.b=H.jY
return b},
cG:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.b_(a,s)
a.eC.set(c,r)
return r},
i4:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.jJ(a,b,r,c)
a.eC.set(r,s)
return s},
jJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aQ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.b_(a,q)},
h6:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.jI(a,b,r,c)
a.eC.set(r,s)
return s},
jI:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aQ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cR(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.cF)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cR(q.z))return q
else return H.hL(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.b_(a,p)},
i3:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.jG(a,b,r,c)
a.eC.set(r,s)
return s},
jG:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aQ(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cF(a,"ak",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.b_(a,q)},
jK:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b_(a,s)
a.eC.set(q,r)
return r},
dJ:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
jF:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cF:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.dJ(c)+">"
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
h4:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.dJ(r)+">")
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
i2:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.dJ(m)
if(j>0){s=l>0?",":""
r=H.dJ(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.jF(i)
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
h5:function(a,b,c,d){var s,r=b.cy+("<"+H.dJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.jH(a,b,c,r,d)
a.eC.set(r,s)
return s},
jH:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aO(a,b,r,0)
m=H.cO(a,c,r,0)
return H.h5(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b_(a,l)},
hZ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
i0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.jA(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.i_(a,r,h,g,!1)
else if(q===46)r=H.i_(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aZ(a.u,a.e,g.pop()))
break
case 94:g.push(H.jK(a.u,g.pop()))
break
case 35:g.push(H.cG(a.u,5,"#"))
break
case 64:g.push(H.cG(a.u,2,"@"))
break
case 126:g.push(H.cG(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.h3(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cF(p,n,o))
else{m=H.aZ(p,a.e,n)
switch(m.y){case 11:g.push(H.h5(p,m,o,a.n))
break
default:g.push(H.h4(p,m,o))
break}}break
case 38:H.jB(a,g)
break
case 42:p=a.u
g.push(H.i4(p,H.aZ(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.h6(p,H.aZ(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.i3(p,H.aZ(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.dC()
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
H.h3(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.i2(p,H.aZ(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.h3(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.jD(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aZ(a.u,a.e,i)},
jA:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
i_:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.i5(s,o.z)[p]
if(n==null)H.d('No "'+p+'" in "'+H.jp(o)+'"')
d.push(H.dK(s,o,n))}else d.push(p)
return m},
jB:function(a,b){var s=b.pop()
if(0===s){b.push(H.cG(a.u,1,"0&"))
return}if(1===s){b.push(H.cG(a.u,4,"1&"))
return}throw H.e(P.e2("Unexpected extended operation "+H.r(s)))},
aZ:function(a,b,c){if(typeof c=="string")return H.cF(a,c,a.sEA)
else if(typeof c=="number")return H.jC(a,b,c)
else return c},
h3:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aZ(a,b,c[s])},
jD:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aZ(a,b,c[s])},
jC:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.e(P.e2("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.e(P.e2("Bad index "+c+" for "+b.k(0)))},
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
if(p===6){s=H.hL(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.hK(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.hK(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.ia(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return H.ia(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.k_(a,b,c,d,e)}return!1},
ia:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
k_:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.i5(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.dK(a,b,l[p]),c,r[p],e))return!1
return!0},
cR:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aQ(a))if(r!==7)if(!(r===6&&H.cR(a.z)))s=r===8&&H.cR(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kw:function(a){var s
if(!H.aQ(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aQ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Y},
i6:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
dC:function dC(){this.c=this.b=this.a=null},
dI:function dI(a){this.a=a},
dB:function dB(){},
cE:function cE(a){this.a=a},
iC:function(a){return v.mangledGlobalNames[a]}},J={
hl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hh:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hi==null){H.ks()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.e(P.hS("Return interceptor for "+H.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fg
if(o==null)o=$.fg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.kx(a)
if(p!=null)return p
if(typeof a=="function")return C.a2
s=Object.getPrototypeOf(a)
if(s==null)return C.P
if(s===Object.prototype)return C.P
if(typeof q=="function"){o=$.fg
if(o==null)o=$.fg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.G,enumerable:false,writable:true,configurable:true})
return C.G}return C.G},
hB:function(a,b){if(a<0||a>4294967295)throw H.e(P.aE(a,0,4294967295,"length",null))
return J.hD(new Array(a),b)},
hC:function(a,b){if(a<0)throw H.e(P.hu("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("t<0>"))},
hD:function(a,b){return J.ei(H.a(a,b.h("t<0>")),b)},
ei:function(a,b){a.fixed$length=Array
return a},
b1:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c4.prototype
return J.d9.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.bn.prototype
if(typeof a=="boolean")return J.d8.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.C)return a
return J.hh(a)},
ab:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
kn:function(a){if(typeof a=="number")return J.aT.prototype
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
a5:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.C)return a
return J.hh(a)},
ko:function(a){if(typeof a=="number")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
kp:function(a){if(typeof a=="number")return J.aT.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
im:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.C)return a
return J.hh(a)},
fQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kn(a).C(a,b)},
aR:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b1(a).F(a,b)},
cS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kp(a).t(a,b)},
M:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.af(a).n(a,b)},
hq:function(a,b,c){return J.ab(a).J(a,b,c)},
iR:function(a,b,c,d){return J.im(a).fg(a,b,c,d)},
iS:function(a,b,c,d){return J.im(a).fs(a,b,c,d)},
iT:function(a,b){return J.ab(a).w(a,b)},
b5:function(a,b){return J.ab(a).E(a,b)},
hr:function(a,b){return J.ab(a).R(a,b)},
ag:function(a){return J.ab(a).gX(a)},
bE:function(a){return J.b1(a).gq(a)},
b6:function(a){return J.af(a).gS(a)},
bF:function(a){return J.ab(a).gaM(a)},
w:function(a){return J.ab(a).gA(a)},
bG:function(a){return J.ab(a).gY(a)},
y:function(a){return J.a5(a).gl(a)},
hs:function(a,b,c){return J.ab(a).bI(a,b,c)},
q:function(a,b,c){return J.ab(a).cp(a,b,c)},
ht:function(a,b){return J.ab(a).a7(a,b)},
iU:function(a){return J.ko(a).ak(a)},
dP:function(a){return J.ab(a).T(a)},
cT:function(a){return J.b1(a).k(a)},
al:function al(){},
d8:function d8(){},
bn:function bn(){},
bb:function bb(){},
df:function df(){},
ax:function ax(){},
aU:function aU(){},
t:function t(a){this.$ti=a},
ej:function ej(a){this.$ti=a},
bK:function bK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aT:function aT(){},
c4:function c4(){},
d9:function d9(){},
aA:function aA(){}},P={
jv:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.ki()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bB(new P.eY(q),1)).observe(s,{childList:true})
return new P.eX(q,s,r)}else if(self.setImmediate!=null)return P.kj()
return P.kk()},
jw:function(a){self.scheduleImmediate(H.bB(new P.eZ(t.M.a(a)),0))},
jx:function(a){self.setImmediate(H.bB(new P.f_(t.M.a(a)),0))},
jy:function(a){t.M.a(a)
P.jE(0,a)},
jE:function(a,b){var s=new P.fl()
s.f4(a,b)
return s},
aN:function(a){return new P.dx(new P.P($.J,a.h("P<0>")),a.h("dx<0>"))},
aM:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ad:function(a,b){P.jS(a,b)},
aL:function(a,b){b.c9(0,a)},
aK:function(a,b){b.dH(H.b4(a),H.b2(a))},
jS:function(a,b){var s,r,q=new P.fo(b),p=new P.fp(b)
if(a instanceof P.P)a.dr(q,p,t.z)
else{s=t.z
if(t.v.b(a))a.cC(q,p,s)
else{r=new P.P($.J,t.c)
r.a=4
r.c=a
r.dr(q,p,s)}}},
aP:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.J.ee(new P.fs(s),t.aT,t.S,t.z)},
jz:function(a){return new P.bv(a,1)},
hW:function(){return C.a9},
hX:function(a){return new P.bv(a,3)},
ic:function(a,b){return new P.cD(a,b.h("cD<0>"))},
e3:function(a,b){var s=H.he(a,"error",t.K)
return new P.bP(s,b==null?P.iY(a):b)},
iY:function(a){var s
if(t.bU.b(a)){s=a.gbQ()
if(s!=null)return s}return C.Z},
f6:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.ba()
b.a=a.a
b.c=a.c
P.bu(b,q)}else{q=t.d.a(b.c)
b.a=2
b.c=a
a.dm(q)}},
bu:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.t,r=t.d,q=t.v;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.fq(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.bu(b.a,a)
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
P.fq(c,c,k.b,j.a,j.b)
return}f=$.J
if(f!==g)$.J=g
else f=c
a=a.c
if((a&15)===8)new P.fe(p,b,o).$0()
else if(i){if((a&1)!==0)new P.fd(p,j).$0()}else if((a&2)!==0)new P.fc(b,p).$0()
if(f!=null)$.J=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("ak<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.bb(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.f6(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.bb(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
k7:function(a,b){var s
if(t.ag.b(a))return b.ee(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.e(P.iW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
k6:function(){var s,r
for(s=$.by;s!=null;s=$.by){$.cN=null
r=s.b
$.by=r
if(r==null)$.cM=null
s.a.$0()}},
kb:function(){$.ha=!0
try{P.k6()}finally{$.cN=null
$.ha=!1
if($.by!=null)$.ho().$1(P.ij())}},
ig:function(a){var s=new P.dy(a),r=$.cM
if(r==null){$.by=$.cM=s
if(!$.ha)$.ho().$1(P.ij())}else $.cM=r.b=s},
ka:function(a){var s,r,q,p=$.by
if(p==null){P.ig(a)
$.cN=$.cM
return}s=new P.dy(a)
r=$.cN
if(r==null){s.b=p
$.by=$.cN=s}else{q=r.b
s.b=q
$.cN=r.b=s
if(q==null)$.cM=s}},
kF:function(a){var s=null,r=$.J
if(C.h===r){P.bz(s,s,C.h,a)
return}P.bz(s,s,r,t.M.a(r.dF(a)))},
l0:function(a,b){H.he(a,"stream",t.K)
return new P.dG(b.h("dG<0>"))},
fq:function(a,b,c,d,e){P.ka(new P.fr(d,e))},
id:function(a,b,c,d,e){var s,r=$.J
if(r===c)return d.$0()
$.J=c
s=r
try{r=d.$0()
return r}finally{$.J=s}},
ie:function(a,b,c,d,e,f,g){var s,r=$.J
if(r===c)return d.$1(e)
$.J=c
s=r
try{r=d.$1(e)
return r}finally{$.J=s}},
k8:function(a,b,c,d,e,f,g,h,i){var s,r=$.J
if(r===c)return d.$2(e,f)
$.J=c
s=r
try{r=d.$2(e,f)
return r}finally{$.J=s}},
bz:function(a,b,c,d){t.M.a(d)
if(C.h!==c)d=c.dF(d)
P.ig(d)},
eY:function eY(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
fl:function fl(){},
fm:function fm(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=!1
this.$ti=b},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
fs:function fs(a){this.a=a},
bv:function bv(a,b){this.a=a
this.b=b},
bw:function bw(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
cD:function cD(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b){this.a=a
this.b=b},
dz:function dz(){},
cC:function cC(a,b){this.a=a
this.$ti=b},
bg:function bg(a,b,c,d,e){var _=this
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
f3:function f3(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
dy:function dy(a){this.a=a
this.b=null},
co:function co(){},
eF:function eF(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
cp:function cp(){},
dG:function dG(a){this.$ti=a},
cH:function cH(){},
fr:function fr(a,b){this.a=a
this.b=b},
dF:function dF(){},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function(a,b){return new H.c5(a.h("@<0>").B(b).h("c5<1,2>"))},
jf:function(a){return new P.aJ(a.h("aJ<0>"))},
jg:function(a){return new P.aJ(a.h("aJ<0>"))},
h2:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h1:function(a,b,c){var s=new P.bh(a,b,c.h("bh<0>"))
s.c=a.e
return s},
jb:function(a,b,c){var s,r
if(P.hb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.w($.ae,a)
try{P.k5(a,s)}finally{if(0>=$.ae.length)return H.o($.ae,-1)
$.ae.pop()}r=P.hP(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fV:function(a,b,c){var s,r
if(P.hb(a))return b+"..."+c
s=new P.dm(b)
C.a.w($.ae,a)
try{r=s
r.a=P.hP(r.a,a,", ")}finally{if(0>=$.ae.length)return H.o($.ae,-1)
$.ae.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hb:function(a){var s,r
for(s=$.ae.length,r=0;r<s;++r)if(a===$.ae[r])return!0
return!1},
k5:function(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.j())return
s=H.r(l.gm())
C.a.w(b,s)
k+=s.length+2;++j}if(!l.j()){if(j<=5)return
if(0>=b.length)return H.o(b,-1)
r=b.pop()
if(0>=b.length)return H.o(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.j()){if(j<=4){C.a.w(b,H.r(p))
return}r=H.r(p)
if(0>=b.length)return H.o(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.j();p=o,o=n){n=l.gm();++j
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
fZ:function(a,b){var s,r,q=P.jf(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c)(a),++r)q.w(0,b.a(a[r]))
return q},
hI:function(a){var s,r={}
if(P.hb(a))return"{...}"
s=new P.dm("")
try{C.a.w($.ae,a)
s.a+="{"
r.a=!0
a.e2(0,new P.en(r,s))
s.a+="}"}finally{if(0>=$.ae.length)return H.o($.ae,-1)
$.ae.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dD:function dD(a){this.a=a
this.c=this.b=null},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
c3:function c3(){},
a2:function a2(){},
ca:function ca(){},
en:function en(a,b){this.a=a
this.b=b},
bo:function bo(){},
cl:function cl(){},
cA:function cA(){},
cJ:function cJ(){},
j9:function(a){if(a instanceof H.ah)return a.k(0)
return"Instance of '"+H.eC(a)+"'"},
hH:function(a,b,c,d){var s,r=c?J.hC(a,d):J.hB(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
em:function(a,b,c){var s,r,q=H.a([],c.h("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.c)(a),++r)C.a.w(q,c.a(a[r]))
return J.ei(q,c)},
j:function(a,b,c){var s
if(b)return P.hG(a,c)
s=J.ei(P.hG(a,c),c)
return s},
hG:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("t<0>"))
s=H.a([],b.h("t<0>"))
for(r=J.w(a);r.j();)C.a.w(s,r.gm())
return s},
hJ:function(a){return new H.da(a,H.je(a,!1,!0,!1,!1,!1))},
hP:function(a,b,c){var s=J.w(b)
if(!s.j())return a
if(c.length===0){do a+=H.r(s.gm())
while(s.j())}else{a+=H.r(s.gm())
for(;s.j();)a=a+c+H.r(s.gm())}return a},
d3:function(a){if(typeof a=="number"||H.i9(a)||null==a)return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
return P.j9(a)},
e2:function(a){return new P.bO(a)},
hu:function(a){return new P.ay(!1,null,null,a)},
iW:function(a,b,c){return new P.ay(!0,a,b,c)},
eD:function(a,b){return new P.ch(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.ch(b,c,!0,a,d,"Invalid value")},
jn:function(a,b,c,d){if(a<b||a>c)throw H.e(P.aE(a,b,c,d,null))
return a},
ci:function(a,b,c){if(0>a||a>c)throw H.e(P.aE(a,0,c,"start",null))
if(a>b||b>c)throw H.e(P.aE(b,a,c,"end",null))
return b},
ap:function(a,b){if(a<0)throw H.e(P.aE(a,0,null,b,null))
return a},
fU:function(a,b,c,d,e){var s=H.S(e==null?J.y(b):e)
return new P.d5(s,!0,a,c,"Index out of range")},
an:function(a){return new P.dv(a)},
hS:function(a){return new P.dt(a)},
am:function(a){return new P.bq(a)},
ai:function(a){return new P.d0(a)},
H:function H(){},
bO:function bO(a){this.a=a},
ds:function ds(){},
de:function de(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d,e,f){var _=this
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
dv:function dv(a){this.a=a},
dt:function dt(a){this.a=a},
bq:function bq(a){this.a=a},
d0:function d0(a){this.a=a},
cn:function cn(){},
d2:function d2(a){this.a=a},
f2:function f2(a){this.a=a},
eg:function eg(a,b){this.a=a
this.b=b},
n:function n(){},
I:function I(){},
O:function O(){},
C:function C(){},
dH:function dH(){},
dm:function dm(a){this.a=a},
iu:function(a,b,c){H.fw(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
it:function(a,b,c){H.fw(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
dE:function dE(){this.b=this.a=0},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
fh:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hY:function(a,b,c,d){var s=W.fh(W.fh(W.fh(W.fh(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
f0:function(a,b,c,d,e){var s=W.ih(new W.f1(c),t.aD),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.iR(a,b,s,!1)}return new W.cy(a,b,s,!1,e.h("cy<0>"))},
ih:function(a,b){var s=$.J
if(s===C.h)return a
return s.fJ(a,b)},
m:function m(){},
cV:function cV(){},
cX:function cX(){},
b7:function b7(){},
bT:function bT(){},
av:function av(){},
eb:function eb(){},
bW:function bW(){},
h:function h(){},
i:function i(){},
a_:function a_(){},
d4:function d4(){},
ac:function ac(){},
a9:function a9(){},
di:function di(){},
au:function au(){},
bt:function bt(){},
eW:function eW(a){this.a=a},
cv:function cv(){},
fT:function fT(a,b){this.a=a
this.$ti=b},
cx:function cx(){},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cy:function cy(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
f1:function f1(a){this.a=a}},A={R:function R(a,b){this.a=a
this.$ti=b},eh:function eh(a){this.a=a},cz:function cz(a,b){this.a=a
this.b=null
this.$ti=b},
hA:function(a,b){return A.jd(a,b,b)},
jd:function(a,b,c){return P.ic(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$hA(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.jz(s[m])
case 5:case 3:s.length===n||(0,H.c)(s),++m
q=2
break
case 4:return P.hW()
case 1:return P.hX(o)}}},c)},
b0:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h8:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},X={a6:function a6(){},aj:function aj(a){this.b=a},a8:function a8(){},
ik:function(a,b,c){var s,r
if(c){if(!$.dL.dI(a)){s=t.S
$.dL.J(0,a,P.fY(s,s))}if(!$.dL.n(0,a).dI(b)){s=$.dL.n(0,a)
s.toString
s.J(0,b,X.ik(a,b,!1))}s=$.dL.n(0,a).n(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.bv(T.x(b+1,1,1),1,new X.fx(),s)
return C.e.ao(C.a.bv(T.x(a-b,a,-1),1,new X.fy(),s),r)},
dO:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fx:function fx(){},
fy:function fy(){}},G={
fR:function(a,b){var s=null,r=new M.bm(C.b,s,s,s,s,s)
r.a8(C.b,s,s)
r.a_(t.a.a(C.a6))
r=new G.cW(a,0,M.iy(),b,r)
r.am()
r.eY(a,s,b,M.iy(),0)
return r},
cW:function cW(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.r=e
_.x=null},
dr:function(a,b){var s=new G.dq(1,M.iz(),0,a)
s.am()
s.y=b
s.h1()
return s},
dq:function dq(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},M={
hN:function(a){var s=new M.dj(1,M.iz(),0,a)
s.am()
return s},
dk:function dk(){},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
h_:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b4.W,b0=b4.bu,b1=P.j(b4.dZ,!0,t.V),b2=b4.fS,b3=b4.ci
if(b3!=null){s=H.z(b3)
s=P.j(new H.L(b3,s.h("N(1)").a(new M.ey()),s.h("L<1,N>")),!0,t.F)
b3=s}else b3=a8
s=b4.cj
if(s!=null){r=H.z(s)
r=P.j(new H.L(s,r.h("N(1)").a(new M.ez()),r.h("L<1,N>")),!0,t.F)
s=r}else s=a8
r=b4.L
q=b4.O
N.as(a8,0,C.b,a8,0)
p=b4.r1
o=b4.r2
n=N.be(b4.rx)
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
a=b4.gG(b4).i()
a0=b4.gH(b4)
a1=b4.c
if(a1===$)a1=H.d(H.f("target"))
a1=a1==null?a8:a1.i()
a2=H.a([],t.r)
for(a3=b4.gu(),a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,H.c)(a3),++a5)a2.push(a3[a5].i())
a3=b4.gI()
a4=H.a([],t.l)
for(a6=J.w(b4.gp(b4));a6.j();){a7=a6.gm()
a4.push(new Y.b(a7.a,a7.b,a7.c))}return new M.bp(b4.as,a9,b4.dW,b4.bt,b4.dX,b4.dY,b0,b1,!1,b4.fP,b4.e_,b4.fQ,b4.fR,new Y.b(b2.a,b2.b,b2.c),b4.fT,b4.e0,b4.fU,b4.fV,b4.fW,b4.fX,b3,s,b4.V,b4.a0,r,q,p,new Y.b(o.a,o.b,o.c),n,m,l,h,g,f,new Y.b(d,c,e),b4.ch,b4.cx,b,b4.db,b4.dx,k,i,j,a,a0,a1,a2,a3,a4)},
iZ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a5.bm,a1=M.bR(a5.bn),a2=M.bR(a5.bo),a3=M.bR(a5.bp),a4=a5.dy
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
j=a5.gG(a5).i()
i=a5.gH(a5)
h=a5.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a5.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a5.gI()
e=H.a([],t.l)
for(c=J.w(a5.gp(a5));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}a0=new M.bQ(new Y.b(a0.a,a0.b,a0.c),a1,a2,a3,a5.cd,a5.ce,a5.cf,a5.cg,q,p,o,new Y.b(m,l,n),a5.ch,a5.cx,k,a5.db,a5.dx,a4,r,s,j,i,h,g,f,e)
a0.d2(a5)
return a0},
eA:function(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=C.r.ai(C.A),a8=C.j.ai(C.j),a9=C.I.ai(C.z),b0=t.L,b1=H.a([],b0)
for(s=b2.gdD(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)b1.push(s[q].i())
b0=H.a([],b0)
for(s=b2.gdQ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)b0.push(s[q].i())
s=b2.bl
s=s==null?a6:V.hT(s)
r=V.hT(b2.cc)
p=b2.bm
o=M.bR(b2.bn)
n=M.bR(b2.bo)
m=M.bR(b2.bp)
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
b=b2.gG(b2).i()
a=b2.gH(b2)
a0=b2.c
if(a0===$)a0=H.d(H.f("target"))
a0=a0==null?a6:a0.i()
a1=H.a([],t.r)
for(a2=b2.gu(),a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,H.c)(a2),++q)a1.push(a2[q].i())
a2=b2.gI()
a3=H.a([],t.l)
for(a4=J.w(b2.gp(b2));a4.j();){a5=a4.gm()
a3.push(new Y.b(a5.a,a5.b,a5.c))}a7=new M.cf(a7,a8,a9,r,s,b2.dR,b2.dS,b2.dT,b1,b0,new Y.b(p.a,p.b,p.c),o,n,m,b2.cd,b2.ce,b2.cf,b2.cg,i,h,g,new Y.b(e,d,f),b2.ch,b2.cx,c,b2.db,b2.dx,l,j,k,b,a,a0,a1,a2,a3)
a7.d2(b2)
return a7},
bR:function(a){return new M.W(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
bp:function bp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9){var _=this
_.as=a
_.W=b
_.dW=c
_.bt=d
_.dX=e
_.dY=f
_.bu=g
_.dZ=h
_.hy=i
_.fP=j
_.e_=k
_.fQ=l
_.fR=m
_.fS=n
_.fT=o
_.e0=p
_.fU=q
_.fV=r
_.fW=s
_.fX=a0
_.ci=a1
_.cj=a2
_.V=a3
_.a0=a4
_.L=a5
_.O=a6
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
ey:function ey(){},
ez:function ez(){},
d1:function d1(){},
bQ:function bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.bm=a
_.bn=b
_.bo=c
_.bp=d
_.bs=_.br=_.bq=null
_.cd=e
_.ce=f
_.cf=g
_.cg=h
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
e4:function e4(){},
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var _=this
_.fM=a
_.fN=b
_.fO=c
_.cc=d
_.bl=e
_.dR=f
_.dS=g
_.dT=h
_.dU=i
_.dV=j
_.bm=k
_.bn=l
_.bo=m
_.bp=n
_.bs=_.br=_.bq=null
_.cd=o
_.ce=p
_.cf=q
_.cg=r
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
jj:function(a){var s,r,q,p,o,n,m=a.gG(a).i(),l=a.gH(a),k=a.c
if(k===$)k=H.d(H.f("target"))
k=k==null?null:k.i()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(r[p].i())
r=a.gI()
q=H.a([],t.l)
for(o=J.w(a.gp(a));o.j();){n=o.gm()
q.push(new Y.b(n.a,n.b,n.c))}return new M.p(m,l,k,s,r,q)},
ja:function(a){var s,r,q,p,o,n,m=a.gG(a).i(),l=a.gH(a),k=a.c
if(k===$)k=H.d(H.f("target"))
k=k==null?null:k.i()
s=H.a([],t.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(r[p].i())
r=a.gI()
q=H.a([],t.l)
for(o=J.w(a.gp(a));o.j();){n=o.gm()
q.push(new Y.b(n.a,n.b,n.c))}return new M.bm(m,l,k,s,r,q)},
p:function p(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ev:function ev(a){this.a=a},
eu:function eu(a){this.a=a},
et:function et(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
ep:function ep(a){this.a=a},
eq:function eq(a){this.a=a},
er:function er(){},
es:function es(a){this.a=a},
bm:function bm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ef:function ef(){this.a=null},
ir:function(a,b,c){return a},
iB:function(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},R={e6:function e6(a,b){this.c=a
this.d=8
this.r=b},e7:function e7(){},e8:function e8(){},
hz:function(a){var s=null,r=new R.bZ(s,s,s,!1,a,C.b,s,s,s,s,s)
r.a8(C.b,s,s)
r.f0(a)
return r},
j8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.dx
if(f==null)f=H.d(H.f("draggedListener"))
s=a.dy
if(s==null)s=H.d(H.f("pressedListener"))
r=a.fr
if(r==null)r=H.d(H.f("releasedListener"))
q=a.fx
p=N.bY(a.x)
o=a.gG(a).i()
n=a.gH(a)
m=a.c
if(m===$)m=H.d(H.f("target"))
m=m==null?null:m.i()
l=H.a([],t.r)
for(k=a.gu(),j=k.length,i=0;i<k.length;k.length===j||(0,H.c)(k),++i)l.push(k[i].i())
k=a.gI()
j=H.a([],t.l)
for(h=J.w(a.gp(a));h.j();){g=h.gm()
j.push(new Y.b(g.a,g.b,g.c))}return new R.bZ(f,s,r,q,p,o,n,m,l,k,j)},
d7:function d7(){},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ec:function ec(a){this.a=a},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a}},K={bH:function bH(){},cU:function cU(){},dQ:function dQ(a){this.a=a},dR:function dR(a){this.a=a},dS:function dS(a){this.a=a},u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},B={cZ:function cZ(a,b,c,d,e,f,g,h){var _=this
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
kG:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=V.dN(Z.dU(a),Z.dU(b),c,t.A)
m=H.a([],t.l)
for(r=s.gP(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
n=J.af(o)
m.push(new Y.b(n.n(o,0),n.n(o,1),n.n(o,2)))}return m}},N={
as:function(a,b,c,d,e){var s=t.O,r=a!=null?H.a([a],s):H.a([],s),q=H.a([c],s)
return new N.cq(q,d!=null?H.a([d],s):H.a([],s),e,r,b,0,C.d)},
be:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.w(o);o.j();){r=o.gm()
s.push(new K.u(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.w(s);s.j();){q=s.gm()
r.push(new K.u(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.w(r);r.j();){p=r.gm()
q.push(new K.u(p.a,p.b,p.c,p.d))}r=q}else r=null
return new N.cq(o,s,a.c,r,a.e,a.f,a.r)},
jq:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.be(a6.rx)
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
d=a6.gG(a6).i()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].i())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.w(a6.gp(a6));a3.j();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.at(s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
iV:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.be(a6.rx)
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
d=a6.gG(a6).i()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].i())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.w(a6.gp(a6));a3.j();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bJ(a6.V,a6.a0,a6.L,a6.O,a6.aL,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
j2:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.be(a6.rx)
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
d=a6.gG(a6).i()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].i())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.w(a6.gp(a6));a3.j();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bV(a6.V,a6.a0,a6.L,a6.O,a6.aL,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
hy:function(a){var s=null,r=N.as(s,0,C.b,s,0)
r=new N.bX(0,6.283185307179586,0.08,a,9,0.35,C.k,r,s,s,0,0,0,C.f,!0,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a8(C.b,s,s)
r.ap(C.u,0,!0,C.b,!1,0.01,C.f,0,C.b,0,0.000001)
r.a2(C.b)
return r},
bY:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.as(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.be(a6.rx)
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
d=a6.gG(a6).i()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a6.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].i())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.w(a6.gp(a6));a3.j();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bX(a6.V,a6.a0,a6.L,a6.O,a6.aL,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
hE:function(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=null,r=N.as(s,0,C.b,s,0),q=f==null?C.i:f,p=l==null?C.b:l
r=new N.N(c,h,k,e,0.35,C.k,r,s,s,m,b,j,i,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a8(C.b,s,s)
r.ap(a,b,!1,q,!1,0.01,i,j,p,m,0.000001)
r.a2(C.b)
return r},
hF:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a8.L,a7=a8.O
N.as(a5,0,C.b,a5,0)
s=a8.r1
r=a8.r2
q=N.be(a8.rx)
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
d=a8.gG(a8).i()
c=a8.gH(a8)
b=a8.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a8.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].i())
a0=a8.gI()
a1=H.a([],t.l)
for(a3=J.w(a8.gp(a8));a3.j();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.N(a8.V,a8.a0,a6,a7,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a8.ch,a8.cx,e,a8.db,a8.dx,n,l,m,d,c,b,a,a0,a1)},
bM:function(a,b,c){var s=null,r=N.as(s,0,C.b,s,0)
r=new N.bL(0.25,5,!0,s,a,s,c,b,0.35,C.k,r,s,s,6,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a8(C.b,s,s)
r.ap(s,0,!1,C.i,!1,0.01,C.f,0,C.b,6,0.000001)
r.a2(C.b)
r.bt=6
r.c5(C.F)
r.cX()
return r},
iX:function(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a9.ge4(),a7=a9.L,a8=a9.O
N.as(a5,0,C.b,a5,0)
s=a9.r1
r=a9.r2
q=N.be(a9.rx)
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
d=a9.gG(a9).i()
c=a9.gH(a9)
b=a9.c
if(b===$)b=H.d(H.f("target"))
b=b==null?a5:b.i()
a=H.a([],t.r)
for(a0=a9.gu(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.c)(a0),++a2)a.push(a0[a2].i())
a0=a9.gI()
a1=H.a([],t.l)
for(a3=J.w(a9.gp(a9));a3.j();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bL(a9.as,a9.W,!0,a6,a9.V,a9.a0,a7,a8,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a9.ch,a9.cx,e,a9.db,a9.dx,n,l,m,d,c,b,a,a0,a1)},
jk:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cg(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jo:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cj(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cr(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.bN(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
cq:function cq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dp:function dp(a){this.b=a},
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
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.V=a
_.a0=b
_.L=c
_.O=d
_.aL=e
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
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.V=a
_.a0=b
_.L=c
_.O=d
_.aL=e
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
_.V=a
_.a0=b
_.L=c
_.O=d
_.aL=e
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
_.V=a
_.a0=b
_.L=c
_.O=d
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
bL:function bL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.as=a
_.W=b
_.dW=c
_.bt=d
_.V=e
_.a0=f
_.L=g
_.O=h
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
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cr:function cr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bN:function bN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dh:function dh(){},
eE:function eE(a){this.a=a}},V={
jt:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.B(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
hT:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.w(o);o.j();){r=o.gm()
s.push(new K.u(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.w(s);s.j();){q=s.gm()
r.push(new K.u(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.w(r);r.j();){p=r.gm()
q.push(new K.u(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.aX(o,s,a.c,r,a.e,a.f,a.r)},
eJ:function(a){var s=null,r=new V.aI(4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.a8(C.b,s,s)
r.ap(s,0,!1,s,!1,0.01,C.f,0,s,4,0.000001)
r.d3(a)
return r},
js:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.aI(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
ju:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
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
j=a1.gG(a1).i()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.d(H.f("target"))
h=h==null?a:h.i()
g=H.a([],t.r)
for(f=a1.gu(),e=f.length,d=0;d<f.length;f.length===e||(0,H.c)(f),++d)g.push(f[d].i())
f=a1.gI()
e=H.a([],t.l)
for(c=J.w(a1.gp(a1));c.j();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.cs(a1.r1,a1.r2,q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
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
eT:function eT(){},
eU:function eU(){},
eO:function eO(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
eN:function eN(a){this.a=a},
eL:function eL(){},
eM:function eM(){},
eS:function eS(){},
eR:function eR(){},
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
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
bI:function bI(){},
hk:function(a,b,c){var s,r,q=t.p,p=V.dN(Z.Y(null,J.q(a,new V.fE(),q).T(0)),Z.Y(null,J.q(b,new V.fF(),q).T(0)),c,t.A)
q=p.gP(p)
s=H.z(q)
r=s.h("L<1,u>")
return P.j(new H.L(q,s.h("u(1)").a(new V.fG()),r),!0,r.h("E.E"))},
dN:function(a,b,c,d){return d.a(J.fQ(J.cS(a,1-c),J.cS(b,c)))},
fH:function(a,b,c,d){return d.a(J.fQ(J.cS(a,1-c),J.cS(b,c)))},
hj:function(a,b,c){if(c>=1)return new S.A(b-1,1,t.w)
if(c<=0)return new S.A(a,0,t.w)
return new S.A(J.iU(V.dN(a,b,c,t.V)),C.c.ae((b-a)*c,1),t.w)},
hd:function(a){return new V.fv(a,a.length-1)},
fL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.a5(r),p=T.x(q.gl(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.c)(p),++m){if(q.gl(r)===0)H.d(H.a0())
s.push(n.a(q.n(r,q.gl(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.a5(q),o=T.x(p.gl(q),0,1),n=o.length,l=a.$ti,k=l.h("a2.E"),l=l.h("ar<a2.E>"),m=0;m<o.length;o.length===n||(0,H.c)(o),++m){j=H.S(o[m])
i=new H.ar(a,j,null,l)
i.bV(a,j,null,k)
r.push(V.hd(i.T(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=T.x(p.gl(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.c)(q),++m){g=q[m]
if(typeof g!=="number")return g.C()
l=H.S(g+1)
P.ci(0,l,r.length)
k=new H.ar(r,0,l,n)
k.bV(r,0,l,o)
s.push(V.hd(k.T(0)).$1(h))}return s},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fv:function fv(a,b){this.a=a
this.b=b},
fu:function fu(){}},Q={d_:function d_(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},ea:function ea(){},e9:function e9(){}},T={
x:function(a,b,c){var s,r=H.a([],t.X)
if(c>0)for(s=b;s<a;s+=c)C.a.w(r,s)
else for(s=b;s>a;s+=c)C.a.w(r,s)
return r},
dM:function(a,b){var s,r,q,p=J.af(a)
if(p.gS(a))return H.a([],b.h("t<A<v,0>>"))
s=H.a([],b.h("t<A<v,0>>"))
for(r=t.dq.B(b).h("A<1,2>"),q=0;q<p.gl(a);++q)C.a.w(s,new S.A(q,p.n(a,q),r))
return s},
hm:function(a,b){if(a.length===0)return b.a(0)
return C.a.a6(a,new T.fO(b))},
fI:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=T.x(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
if(typeof n!=="number")return n.az()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return Z.Y(null,l)},
ft:function(a,b,c){var s,r,q,p,o=T.x(C.c.dG((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.c)(o),++q){p=o[q]
if(typeof p!=="number")return p.t()
n.push(H.a([p*c+b],r))}return Z.Y(null,n)},
bj:function(a,b,c){var s,r,q,p,o,n=J.af(a)
if(n.gS(a))return a
s=n.gl(a)
if(s>b)throw H.e("Trying to stretch an array to a length shorter than its own")
r=T.x(b,0,1)
q=H.z(r)
p=q.h("L<1,k>")
o=new H.L(r,q.h("k(1)").a(new T.fN(b,s)),p)
q=H.a([],c.h("t<0>"))
for(r=new H.a1(o,o.gl(o),p.h("a1<E.E>")),p=p.h("E.E");r.j();)q.push(n.n(a,C.c.ak(p.a(r.d))))
return q},
kA:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("t<0>"))
for(s=T.x(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.t()
n=C.c.ao(p*o,l)
if(n<0||n>=o)return H.o(a,n)
k.push(a[n])}s=H.a([],d.h("t<0>"))
for(r=T.x(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.c)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.t()
m=C.c.ao(p*n,l)
if(m<0||m>=n)return H.o(b,m)
s.push(b[m])}return new S.A(k,s,c.h("@<l<0>>").B(d.h("l<0>")).h("A<1,2>"))},
hn:function(a,b){var s=F.el(a,new T.fP(b),b)
return P.j(s,!0,s.$ti.h("n.E"))},
iE:function(a,b){var s=P.j(a,!0,b)
if(0>=s.length)return H.o(s,-1)
s.pop()
return s},
iF:function(a,b){var s,r,q,p=H.a([],b.h("t<0>")),o=P.jg(b)
for(s=H.z(a).h("aF<1>"),r=new H.aF(a,s),r=new H.a1(r,r.gl(r),s.h("a1<E.E>")),s=s.h("E.E");r.j();){q=s.a(r.d)
if(!o.a9(0,q)){C.a.w(p,q)
o.w(0,q)}}s=b.h("aF<0>")
return P.j(new H.aF(p,s),!0,s.h("E.E"))},
fO:function fO(a){this.a=a},
fN:function fN(a,b){this.a=a
this.b=b},
fP:function fP(a){this.a=a}},S={b9:function b9(a,b){this.a=a
this.b=b},A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},bs:function bs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},O={X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},dd:function dd(){},cd:function cd(a,b){this.c=a
this.a=b},aC:function aC(a,b){this.c=a
this.a=b},aD:function aD(a,b){this.c=a
this.a=b},aB:function aB(a,b){this.c=a
this.a=b},cc:function cc(a){this.a=a}},Z={
Y:function(a,b){var s,r,q=new Z.ao(b)
if(a==null){s=q.gP(q).length
r=q.gP(q).length!==0?J.y(C.a.gX(q.gP(q))):0
a=new S.A(s,r,t.o)
s=a}else s=a
q.sf6(t.o.a(s))
return q},
dT:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=T.x(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){o=H.a([],q)
for(n=T.x(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.c)(n),++l)o.push(a)
j.push(o)}return Z.Y(b,j)},
dU:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.ab(a),r=s.gA(a),q=t.n;r.j();){p=r.gm()
o.push(H.a([p.a,p.b,p.c],q))}return Z.Y(new S.A(s.gl(a),3,t.o),o)},
cY:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=T.x(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){o=s[p]
n=H.a([],q)
for(m=T.x(a,0,1),l=m.length,k=J.b1(o),j=0;j<m.length;m.length===l||(0,H.c)(m),++j)if(k.F(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return Z.Y(new S.A(a,a,t.o),i)},
kE:function(a,b){var s=Z.iA(a),r=Z.kK(b)
return C.a.a6(H.a([r,s,r.eu()],t.aM),new Z.fM())},
iA:function(a){var s=t.n
return Z.Y(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
kK:function(a){var s,r,q,p,o,n
if(a.a1()===0)return Z.cY(3)
s=a.az(0,Math.sqrt(a.a1()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.en(0)
p=q.az(0,Math.sqrt(q.a1()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=Z.Y(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return Z.iA(o).aa(n)},
kC:function(a,b){var s,r,q,p,o=a/2,n=b.az(0,Math.sqrt(b.a1())).t(0,Math.sin(o)),m=H.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(H.a([s[p]],q))
m.push(H.a([Math.cos(o)],q))
return Z.Y(null,m)},
kl:function(a,b){var s,r,q,p,o,n,m=6.283185307179586/a,l=t.bN,k=H.a([],l)
for(s=T.x(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
if(typeof p!=="number")return H.bi(p)
o=m*p
k.push(new S.b9(Math.cos(o),Math.sin(o)))}l=H.a([],l)
for(s=k.length,r=b.a,o=b.b,q=0;q<k.length;k.length===s||(0,H.c)(k),++q)l.push(k[q].t(0,new S.b9(r,o)))
k=H.a([],t.l)
for(s=l.length,q=0;q<l.length;l.length===s||(0,H.c)(l),++q){n=l[q]
k.push(new Y.b(n.a,n.b,0))}return k},
ao:function ao(a){this.a=a
this.b=null},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
dZ:function dZ(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
dX:function dX(a){this.a=a},
e1:function e1(a){this.a=a},
dW:function dW(){},
dV:function dV(a){this.a=a},
fM:function fM(){},
ky:function(){new Z.dc().f2()},
dc:function dc(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=null
_.a=0
_.x=_.r=_.f=_.d=null},
eo:function eo(a){this.a=a}},Y={b:function b(a,b,c){this.a=a
this.b=b
this.c=c},eV:function eV(a){this.a=a}},F={
el:function(a,b,c){return F.jh(a,b,c,c)},
jh:function(a,b,c,d){return P.ic(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$el(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.a5(s),l=0
case 2:if(!(l<m.gl(s))){p=4
break}k=m.n(s,l)
p=H.cP(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.hW()
case 1:return P.hX(n)}}},d)}}
var w=[C,H,J,P,W,A,X,G,M,R,K,B,N,V,Q,T,S,O,Z,Y,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fW.prototype={}
J.al.prototype={
F:function(a,b){return a===b},
gq:function(a){return H.aw(a)},
k:function(a){return"Instance of '"+H.eC(a)+"'"}}
J.d8.prototype={
k:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$iF:1}
J.bn.prototype={
F:function(a,b){return null==b},
k:function(a){return"null"},
gq:function(a){return 0},
$iO:1}
J.bb.prototype={
gq:function(a){return 0},
k:function(a){return String(a)}}
J.df.prototype={}
J.ax.prototype={}
J.aU.prototype={
k:function(a){var s=a[$.iG()]
if(s==null)return this.eS(a)
return"JavaScript function for "+J.cT(s)},
$iba:1}
J.t.prototype={
w:function(a,b){H.z(a).c.a(b)
if(!!a.fixed$length)H.d(P.an("add"))
a.push(b)},
h3:function(a,b,c){var s,r
H.z(a).h("n<1>").a(c)
if(!!a.fixed$length)H.d(P.an("insertAll"))
P.jn(b,0,a.length,"index")
if(!t.R.b(c))c=J.dP(c)
s=J.y(c)
a.length=a.length+s
r=b+s
this.cV(a,r,a.length,a,b)
this.eC(a,b,r,c)},
by:function(a,b){var s
if(!!a.fixed$length)H.d(P.an("remove"))
for(s=0;s<a.length;++s)if(J.aR(a[s],b)){a.splice(s,1)
return!0}return!1},
dn:function(a,b,c){var s,r,q,p,o
H.z(a).h("F(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.cP(b.$1(p)))s.push(p)
if(a.length!==r)throw H.e(P.ai(a))}o=s.length
if(o===r)return
this.sl(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
E:function(a,b){var s
H.z(a).h("n<1>").a(b)
if(!!a.fixed$length)H.d(P.an("addAll"))
if(Array.isArray(b)){this.ff(a,b)
return}for(s=J.w(b);s.j();)a.push(s.gm())},
ff:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.e(P.ai(a))
for(r=0;r<s;++r)a.push(b[r])},
cp:function(a,b,c){var s=H.z(a)
return new H.L(a,s.B(c).h("1(2)").a(b),s.h("@<1>").B(c).h("L<1,2>"))},
e6:function(a,b){var s,r=P.hH(a.length,"",!1,t.aw)
for(s=0;s<a.length;++s)this.J(r,s,H.r(a[s]))
return r.join(b)},
h8:function(a){return this.e6(a,"")},
a7:function(a,b){return H.br(a,b,null,H.z(a).c)},
a6:function(a,b){var s,r,q
H.z(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.e(H.a0())
if(0>=s)return H.o(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.e(P.ai(a))}return r},
bv:function(a,b,c,d){var s,r,q
d.a(b)
H.z(a).B(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.e(P.ai(a))}return r},
R:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
bI:function(a,b,c){P.ci(b,c,a.length)
return H.br(a,b,c,H.z(a).c)},
gX:function(a){if(a.length>0)return a[0]
throw H.e(H.a0())},
gY:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.e(H.a0())},
cV:function(a,b,c,d,e){var s,r,q,p,o
H.z(a).h("n<1>").a(d)
if(!!a.immutable$list)H.d(P.an("setRange"))
P.ci(b,c,a.length)
s=c-b
if(s===0)return
P.ap(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.ht(d,e).aw(0,!1)
q=0}p=J.a5(r)
if(q+s>p.gl(r))throw H.e(H.jc())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.n(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.n(r,q+o)},
eC:function(a,b,c,d){return this.cV(a,b,c,d,0)},
bk:function(a,b){var s,r
H.z(a).h("F(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.cP(b.$1(a[r])))return!1
if(a.length!==s)throw H.e(P.ai(a))}return!0},
a9:function(a,b){var s
for(s=0;s<a.length;++s)if(J.aR(a[s],b))return!0
return!1},
gS:function(a){return a.length===0},
gaM:function(a){return a.length!==0},
k:function(a){return P.fV(a,"[","]")},
aw:function(a,b){var s=H.a(a.slice(0),H.z(a))
return s},
T:function(a){return this.aw(a,!0)},
gA:function(a){return new J.bK(a,a.length,H.z(a).h("bK<1>"))},
gq:function(a){return H.aw(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.d(P.an("set length"))
if(b<0)throw H.e(P.aE(b,0,null,"newLength",null))
if(b>a.length)H.z(a).c.a(null)
a.length=b},
n:function(a,b){if(b>=a.length||b<0)throw H.e(H.hg(a,b))
return a[b]},
J:function(a,b,c){H.z(a).c.a(c)
if(!!a.immutable$list)H.d(P.an("indexed set"))
if(b>=a.length||b<0)throw H.e(H.hg(a,b))
a[b]=c},
$iG:1,
$in:1,
$il:1}
J.ej.prototype={}
J.bK.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.e(H.c(q))
s=r.c
if(s>=p){r.sdg(null)
return!1}r.sdg(q[s]);++r.c
return!0},
sdg:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
J.aT.prototype={
ak:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.e(P.an(""+a+".toInt()"))},
dG:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.e(P.an(""+a+".ceil()"))},
cD:function(a,b){var s,r
if(b>20)throw H.e(P.aE(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0)r=1/a<0
else r=!1
if(r)return"-"+s
return s},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
C:function(a,b){H.h7(b)
return a+b},
t:function(a,b){return a*b},
ae:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ao:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dq(a,b)},
aq:function(a,b){return(a|0)===a?a/b|0:this.dq(a,b)},
dq:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.e(P.an("Result of truncating division is "+H.r(s)+": "+H.r(a)+" ~/ "+b))},
fv:function(a,b){var s
if(a>0)s=this.fu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fu:function(a,b){return b>31?0:a>>>b},
$ik:1,
$iQ:1}
J.c4.prototype={$iv:1}
J.d9.prototype={}
J.aA.prototype={
C:function(a,b){H.cK(b)
return a+b},
eN:function(a,b,c){if(b<0)throw H.e(P.eD(b,null))
if(b>c)throw H.e(P.eD(b,null))
if(c>a.length)throw H.e(P.eD(c,null))
return a.substring(b,c)},
k:function(a){return a},
gq:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$ieB:1,
$iaa:1}
H.aY.prototype={
gA:function(a){var s=H.D(this)
return new H.bU(J.w(this.gah()),s.h("@<1>").B(s.Q[1]).h("bU<1,2>"))},
gl:function(a){return J.y(this.gah())},
gS:function(a){return J.b6(this.gah())},
gaM:function(a){return J.bF(this.gah())},
a7:function(a,b){var s=H.D(this)
return H.fS(J.ht(this.gah(),b),s.c,s.Q[1])},
gX:function(a){return H.D(this).Q[1].a(J.ag(this.gah()))},
gY:function(a){return H.D(this).Q[1].a(J.bG(this.gah()))},
k:function(a){return J.cT(this.gah())}}
H.bU.prototype={
j:function(){return this.a.j()},
gm:function(){return this.$ti.Q[1].a(this.a.gm())},
$iI:1}
H.b8.prototype={
gah:function(){return this.a}}
H.cw.prototype={$iG:1}
H.cu.prototype={
n:function(a,b){return this.$ti.Q[1].a(J.M(this.a,b))},
J:function(a,b,c){var s=this.$ti
J.hq(this.a,b,s.c.a(s.Q[1].a(c)))},
w:function(a,b){var s=this.$ti
J.iT(this.a,s.c.a(s.Q[1].a(b)))},
E:function(a,b){var s=this.$ti
J.b5(this.a,H.fS(s.h("n<2>").a(b),s.Q[1],s.c))},
bI:function(a,b,c){var s=this.$ti
return H.fS(J.hs(this.a,b,c),s.c,s.Q[1])},
$iG:1,
$il:1}
H.Z.prototype={
gah:function(){return this.a}}
H.c6.prototype={
k:function(a){var s="LateInitializationError: "+this.a
return s}}
H.fK.prototype={
$0:function(){var s=new P.P($.J,t.ck)
s.d9(null)
return s},
$S:18}
H.G.prototype={}
H.E.prototype={
gA:function(a){var s=this
return new H.a1(s,s.gl(s),H.D(s).h("a1<E.E>"))},
gS:function(a){return this.gl(this)===0},
gX:function(a){if(this.gl(this)===0)throw H.e(H.a0())
return this.R(0,0)},
gY:function(a){var s=this
if(s.gl(s)===0)throw H.e(H.a0())
return s.R(0,s.gl(s)-1)},
a6:function(a,b){var s,r,q,p=this
H.D(p).h("E.E(E.E,E.E)").a(b)
s=p.gl(p)
if(s===0)throw H.e(H.a0())
r=p.R(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.R(0,q))
if(s!==p.gl(p))throw H.e(P.ai(p))}return r},
a7:function(a,b){return H.br(this,b,null,H.D(this).h("E.E"))},
aw:function(a,b){return P.j(this,b,H.D(this).h("E.E"))},
T:function(a){return this.aw(a,!0)}}
H.ar.prototype={
bV:function(a,b,c,d){var s,r=this.b
P.ap(r,"start")
s=this.c
if(s!=null){P.ap(s,"end")
if(r>s)throw H.e(P.aE(r,0,s,"start",null))}},
gfm:function(){var s=J.y(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfw:function(){var s=J.y(this.a),r=this.b
if(r>s)return s
return r},
gl:function(a){var s,r=J.y(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.v()
return s-q},
R:function(a,b){var s=this,r=s.gfw()+b
if(b<0||r>=s.gfm())throw H.e(P.fU(b,s,"index",null,null))
return J.hr(s.a,r)},
a7:function(a,b){var s,r,q=this
P.ap(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.c0(q.$ti.h("c0<1>"))
return H.br(q.a,s,r,q.$ti.c)},
aw:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a5(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.hC(0,n):J.hB(0,n)}r=P.hH(s,m.R(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.J(r,q,m.R(n,o+q))
if(m.gl(n)<l)throw H.e(P.ai(p))}return r},
T:function(a){return this.aw(a,!0)}}
H.a1.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a,p=q.gl(q)
if(r.b!==p)throw H.e(P.ai(q))
s=r.c
if(s>=p){r.saQ(null)
return!1}r.saQ(q.R(0,s));++r.c
return!0},
saQ:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
H.bc.prototype={
gA:function(a){var s=H.D(this)
return new H.cb(J.w(this.a),this.b,s.h("@<1>").B(s.Q[1]).h("cb<1,2>"))},
gl:function(a){return J.y(this.a)},
gS:function(a){return J.b6(this.a)},
gX:function(a){return this.b.$1(J.ag(this.a))},
gY:function(a){return this.b.$1(J.bG(this.a))}}
H.c_.prototype={$iG:1}
H.cb.prototype={
j:function(){var s=this,r=s.b
if(r.j()){s.saQ(s.c.$1(r.gm()))
return!0}s.saQ(null)
return!1},
gm:function(){return this.$ti.Q[1].a(this.a)},
saQ:function(a){this.a=this.$ti.h("2?").a(a)}}
H.L.prototype={
gl:function(a){return J.y(this.a)},
R:function(a,b){return this.b.$1(J.hr(this.a,b))}}
H.bf.prototype={
gA:function(a){return new H.ct(J.w(this.a),this.b,this.$ti.h("ct<1>"))}}
H.ct.prototype={
j:function(){var s,r
for(s=this.a,r=this.b;s.j();)if(H.cP(r.$1(s.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.aG.prototype={
a7:function(a,b){P.ap(b,"count")
return new H.aG(this.a,this.b+b,H.D(this).h("aG<1>"))},
gA:function(a){return new H.cm(J.w(this.a),this.b,H.D(this).h("cm<1>"))}}
H.bl.prototype={
gl:function(a){var s=J.y(this.a)-this.b
if(s>=0)return s
return 0},
a7:function(a,b){P.ap(b,"count")
return new H.bl(this.a,this.b+b,this.$ti)},
$iG:1}
H.cm.prototype={
j:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.j()
this.b=0
return s.j()},
gm:function(){return this.a.gm()}}
H.c0.prototype={
gA:function(a){return C.S},
gS:function(a){return!0},
gl:function(a){return 0},
gX:function(a){throw H.e(H.a0())},
gY:function(a){throw H.e(H.a0())},
a7:function(a,b){P.ap(b,"count")
return this}}
H.c1.prototype={
j:function(){return!1},
gm:function(){throw H.e(H.a0())},
$iI:1}
H.aF.prototype={
gl:function(a){return J.y(this.a)},
R:function(a,b){var s=this.a,r=J.a5(s)
return r.R(s,r.gl(s)-1-b)}}
H.cI.prototype={}
H.d6.prototype={
k:function(a){var s="<"+C.a.e6([H.km(this.$ti.c)],", ")+">"
return this.a.k(0)+" with "+s}}
H.aS.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.ku(H.il(this.a),this.$ti)}}
H.eH.prototype={
ab:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ce.prototype={
k:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.db.prototype={
k:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.du.prototype={
k:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ex.prototype={
k:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.c2.prototype={}
H.cB.prototype={
k:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaV:1}
H.ah.prototype={
k:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.iD(r==null?"unknown":r)+"'"},
$iba:1,
ghx:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dn.prototype={}
H.dl.prototype={
k:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.iD(s)+"'"}}
H.bk.prototype={
F:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bk))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gq:function(a){var s,r=this.c
if(r==null)s=H.aw(this.a)
else s=typeof r!=="object"?J.bE(r):H.aw(r)
return(s^H.aw(this.b))>>>0},
k:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.r(this.d)+"' of "+("Instance of '"+H.eC(t.K.a(s))+"'")}}
H.dg.prototype={
k:function(a){return"RuntimeError: "+this.a}}
H.dw.prototype={
k:function(a){return"Assertion failed: "+P.d3(this.a)}}
H.c5.prototype={
gl:function(a){return this.a},
ge7:function(){return new H.c7(this,H.D(this).h("c7<1>"))},
dI:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.fk(s,a)}else return this.h4(a)},
h4:function(a){var s=this.d
if(s==null)return!1
return this.cm(this.c0(s,C.e.gq(a)&0x3ffffff),a)>=0},
n:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b8(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b8(p,b)
q=r==null?n:r.b
return q}else return o.h5(b)},
h5:function(a){var s,r,q=this.d
if(q==null)return null
s=this.c0(q,J.bE(a)&0x3ffffff)
r=this.cm(s,a)
if(r<0)return null
return s[r].b},
J:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.D(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.d5(s==null?m.b=m.c1():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.d5(r==null?m.c=m.c1():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.c1()
p=J.bE(b)&0x3ffffff
o=m.c0(q,p)
if(o==null)m.c3(q,p,[m.bW(b,c)])
else{n=m.cm(o,b)
if(n>=0)o[n].b=c
else o.push(m.bW(b,c))}}},
e2:function(a,b){var s,r,q=this
H.D(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.e(P.ai(q))
s=s.c}},
d5:function(a,b,c){var s,r=this,q=H.D(r)
q.c.a(b)
q.Q[1].a(c)
s=r.b8(a,b)
if(s==null)r.c3(a,b,r.bW(b,c))
else s.b=c},
bW:function(a,b){var s=this,r=H.D(s),q=new H.ek(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
cm:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aR(a[r].a,b))return r
return-1},
k:function(a){return P.hI(this)},
b8:function(a,b){return a[b]},
c0:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
fl:function(a,b){delete a[b]},
fk:function(a,b){return this.b8(a,b)!=null},
c1:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c3(r,s,r)
this.fl(r,s)
return r}}
H.ek.prototype={}
H.c7.prototype={
gl:function(a){return this.a.a},
gS:function(a){return this.a.a===0},
gA:function(a){var s=this.a,r=new H.c8(s,s.r,this.$ti.h("c8<1>"))
r.c=s.e
return r}}
H.c8.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.e(P.ai(q))
s=r.c
if(s==null){r.sd6(null)
return!1}else{r.sd6(s.a)
r.c=s.c
return!0}},
sd6:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
H.fA.prototype={
$1:function(a){return this.a(a)},
$S:44}
H.fB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.fC.prototype={
$1:function(a){return this.a(H.cK(a))},
$S:26}
H.da.prototype={
k:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
e1:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.fi(s)},
$ieB:1}
H.fi.prototype={}
H.aq.prototype={
h:function(a){return H.dK(v.typeUniverse,this,a)},
B:function(a){return H.jN(v.typeUniverse,this,a)}}
H.dC.prototype={}
H.dI.prototype={
k:function(a){return H.a4(this.a,null)}}
H.dB.prototype={
k:function(a){return this.a}}
H.cE.prototype={}
P.eY.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
P.eX.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:51}
P.eZ.prototype={
$0:function(){this.a.$0()},
$S:7}
P.f_.prototype={
$0:function(){this.a.$0()},
$S:7}
P.fl.prototype={
f4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bB(new P.fm(this,b),0),a)
else throw H.e(P.an("`setTimeout()` not found."))}}
P.fm.prototype={
$0:function(){this.b.$0()},
$S:0}
P.dx.prototype={
c9:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.d9(b)
else{s=r.a
if(q.h("ak<1>").b(b))s.dc(b)
else s.bY(q.c.a(b))}},
dH:function(a,b){var s=this.a
if(this.b)s.aJ(a,b)
else s.fh(a,b)}}
P.fo.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:40}
P.fp.prototype={
$2:function(a,b){this.a.$2(1,new H.c2(a,t.k.a(b)))},
$S:27}
P.fs.prototype={
$2:function(a,b){this.a(H.S(a),b)},
$S:36}
P.bv.prototype={
k:function(a){return"IterationMarker("+this.b+", "+H.r(this.a)+")"}}
P.bw.prototype={
gm:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gm()},
j:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("I<1>");!0;){r=m.c
if(r!=null)if(r.j())return!0
else m.sdl(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.bv){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sd8(null)
return!1}if(0>=o.length)return H.o(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.w(r))
if(n instanceof P.bw){r=m.d
if(r==null)r=m.d=[]
C.a.w(r,m.a)
m.a=n.a
continue}else{m.sdl(n)
continue}}}}else{m.sd8(q)
return!0}}return!1},
sd8:function(a){this.b=this.$ti.h("1?").a(a)},
sdl:function(a){this.c=this.$ti.h("I<1>?").a(a)},
$iI:1}
P.cD.prototype={
gA:function(a){return new P.bw(this.a(),this.$ti.h("bw<1>"))}}
P.bP.prototype={
k:function(a){return H.r(this.a)},
$iH:1,
gbQ:function(){return this.b}}
P.dz.prototype={
dH:function(a,b){var s
H.he(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.e(P.am("Future already completed"))
s.aJ(a,b)}}
P.cC.prototype={
c9:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.e(P.am("Future already completed"))
s.de(r.h("1/").a(b))}}
P.bg.prototype={
hb:function(a){if((this.c&15)!==6)return!0
return this.b.b.cz(t.al.a(this.d),a.a,t.cJ,t.K)},
fZ:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.hk(s,p,a.b,r,q,t.k))
else return o.a(n.cz(t.bI.a(s),p,r,q))}}
P.P.prototype={
cC:function(a,b,c){var s,r,q,p=this.$ti
p.B(c).h("1/(2)").a(a)
s=$.J
if(s!==C.h){c.h("@<0/>").B(p.c).h("1(2)").a(a)
if(b!=null)b=P.k7(b,s)}r=new P.P(s,c.h("P<0>"))
q=b==null?1:3
this.bX(new P.bg(r,q,a,b,p.h("@<1>").B(c).h("bg<1,2>")))
return r},
eh:function(a,b){return this.cC(a,null,b)},
dr:function(a,b,c){var s,r=this.$ti
r.B(c).h("1/(2)").a(a)
s=new P.P($.J,c.h("P<0>"))
this.bX(new P.bg(s,19,a,b,r.h("@<1>").B(c).h("bg<1,2>")))
return s},
bX:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.d.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.bX(a)
return}r.a=q
r.c=s.c}P.bz(null,null,r.b,t.M.a(new P.f3(r,a)))}},
dm:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.d.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.dm(a)
return}m.a=s
m.c=n.c}l.a=m.bb(a)
P.bz(null,null,m.b,t.M.a(new P.fb(l,m)))}},
ba:function(){var s=t.d.a(this.c)
this.c=null
return this.bb(s)},
bb:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
da:function(a){var s,r,q,p=this
p.a=1
try{a.cC(new P.f7(p),new P.f8(p),t.P)}catch(q){s=H.b4(q)
r=H.b2(q)
P.kF(new P.f9(p,s,r))}},
de:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("ak<1>").b(a))if(q.b(a))P.f6(a,r)
else r.da(a)
else{s=r.ba()
q.c.a(a)
r.a=4
r.c=a
P.bu(r,s)}},
bY:function(a){var s,r=this
r.$ti.c.a(a)
s=r.ba()
r.a=4
r.c=a
P.bu(r,s)},
aJ:function(a,b){var s,r,q=this
t.k.a(b)
s=q.ba()
r=P.e3(a,b)
q.a=8
q.c=r
P.bu(q,s)},
d9:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ak<1>").b(a)){this.dc(a)
return}this.fi(s.c.a(a))},
fi:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.bz(null,null,s.b,t.M.a(new P.f5(s,a)))},
dc:function(a){var s=this,r=s.$ti
r.h("ak<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.bz(null,null,s.b,t.M.a(new P.fa(s,a)))}else P.f6(a,s)
return}s.da(a)},
fh:function(a,b){this.a=1
P.bz(null,null,this.b,t.M.a(new P.f4(this,a,b)))},
$iak:1}
P.f3.prototype={
$0:function(){P.bu(this.a,this.b)},
$S:0}
P.fb.prototype={
$0:function(){P.bu(this.b,this.a.a)},
$S:0}
P.f7.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.bY(p.$ti.c.a(a))}catch(q){s=H.b4(q)
r=H.b2(q)
p.aJ(s,r)}},
$S:13}
P.f8.prototype={
$2:function(a,b){this.a.aJ(t.K.a(a),t.k.a(b))},
$S:31}
P.f9.prototype={
$0:function(){this.a.aJ(this.b,this.c)},
$S:0}
P.f5.prototype={
$0:function(){this.a.bY(this.b)},
$S:0}
P.fa.prototype={
$0:function(){P.f6(this.b,this.a)},
$S:0}
P.f4.prototype={
$0:function(){this.a.aJ(this.b,this.c)},
$S:0}
P.fe.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eg(t.fO.a(q.d),t.z)}catch(p){s=H.b4(p)
r=H.b2(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=P.e3(s,r)
o.b=!0
return}if(l instanceof P.P&&l.a>=4){if(l.a===8){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(t.v.b(l)){n=m.b.a
q=m.a
q.c=l.eh(new P.ff(n),t.z)
q.b=!1}},
$S:0}
P.ff.prototype={
$1:function(a){return this.a},
$S:30}
P.fd.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cz(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.b4(l)
r=H.b2(l)
q=this.a
q.c=P.e3(s,r)
q.b=!0}},
$S:0}
P.fc.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.hb(s)&&p.a.e!=null){p.c=p.a.fZ(s)
p.b=!1}}catch(o){r=H.b4(o)
q=H.b2(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.e3(r,q)
n.b=!0}},
$S:0}
P.dy.prototype={}
P.co.prototype={
gl:function(a){var s,r,q=this,p={},o=new P.P($.J,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.eF(p,q))
t.g5.a(new P.eG(p,o))
W.f0(q.a,q.b,r,!1,s.c)
return o}}
P.eF.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.eG.prototype={
$0:function(){this.b.de(this.a.a)},
$S:0}
P.cp.prototype={}
P.dG.prototype={}
P.cH.prototype={$ihU:1}
P.fr.prototype={
$0:function(){var s=t.K.a(H.e(this.a))
s.stack=this.b.k(0)
throw s},
$S:0}
P.dF.prototype={
hl:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.h===$.J){a.$0()
return}P.id(p,p,this,a,t.aT)}catch(q){s=H.b4(q)
r=H.b2(q)
P.fq(p,p,this,t.K.a(s),t.k.a(r))}},
hm:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.h===$.J){a.$1(b)
return}P.ie(p,p,this,a,b,t.aT,c)}catch(q){s=H.b4(q)
r=H.b2(q)
P.fq(p,p,this,t.K.a(s),t.k.a(r))}},
dF:function(a){return new P.fj(this,t.M.a(a))},
fJ:function(a,b){return new P.fk(this,b.h("~(0)").a(a),b)},
eg:function(a,b){b.h("0()").a(a)
if($.J===C.h)return a.$0()
return P.id(null,null,this,a,b)},
cz:function(a,b,c,d){c.h("@<0>").B(d).h("1(2)").a(a)
d.a(b)
if($.J===C.h)return a.$1(b)
return P.ie(null,null,this,a,b,c,d)},
hk:function(a,b,c,d,e,f){d.h("@<0>").B(e).B(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.J===C.h)return a.$2(b,c)
return P.k8(null,null,this,a,b,c,d,e,f)},
ee:function(a,b,c,d){return b.h("@<0>").B(c).B(d).h("1(2,3)").a(a)}}
P.fj.prototype={
$0:function(){return this.a.hl(this.b)},
$S:0}
P.fk.prototype={
$1:function(a){var s=this.c
return this.a.hm(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.aJ.prototype={
fp:function(){return new P.aJ(H.D(this).h("aJ<1>"))},
gA:function(a){var s=this,r=new P.bh(s,s.r,H.D(s).h("bh<1>"))
r.c=s.e
return r},
gl:function(a){return this.a},
gS:function(a){return this.a===0},
gaM:function(a){return this.a!==0},
a9:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.fj(b)},
fj:function(a){var s=this.d
if(s==null)return!1
return this.dh(s[this.df(a)],a)>=0},
gX:function(a){var s=this.e
if(s==null)throw H.e(P.am("No elements"))
return H.D(this).c.a(s.a)},
gY:function(a){var s=this.f
if(s==null)throw H.e(P.am("No elements"))
return H.D(this).c.a(s.a)},
w:function(a,b){var s,r,q=this
H.D(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d7(s==null?q.b=P.h2():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d7(r==null?q.c=P.h2():r,b)}else return q.fe(b)},
fe:function(a){var s,r,q,p=this
H.D(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.h2()
r=p.df(a)
q=s[r]
if(q==null)s[r]=[p.c2(a)]
else{if(p.dh(q,a)>=0)return!1
q.push(p.c2(a))}return!0},
d7:function(a,b){H.D(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.c2(b)
return!0},
fo:function(){this.r=this.r+1&1073741823},
c2:function(a){var s,r=this,q=new P.dD(H.D(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.fo()
return q},
df:function(a){return J.bE(a)&1073741823},
dh:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aR(a[r].a,b))return r
return-1}}
P.dD.prototype={}
P.bh.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.e(P.ai(q))
else if(r==null){s.sdd(null)
return!1}else{s.sdd(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sdd:function(a){this.d=this.$ti.h("1?").a(a)},
$iI:1}
P.c3.prototype={}
P.a2.prototype={
gA:function(a){var s=this
return new H.a1(s,s.gl(s),s.$ti.h("a1<a2.E>"))},
R:function(a,b){return this.$ti.Q[1].a(J.M(this.a,b))},
gS:function(a){return J.y(this.a)===0},
gaM:function(a){return J.y(this.a)!==0},
gX:function(a){var s=this.a,r=J.a5(s)
if(r.gl(s)===0)throw H.e(H.a0())
return this.$ti.Q[1].a(r.n(s,0))},
gY:function(a){var s=this.a,r=J.a5(s)
if(r.gl(s)===0)throw H.e(H.a0())
return this.$ti.Q[1].a(r.n(s,r.gl(s)-1))},
bk:function(a,b){var s,r,q,p,o=this.$ti
o.h("F(a2.E)").a(b)
s=this.a
r=J.a5(s)
q=r.gl(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.cP(b.$1(o.a(r.n(s,p)))))return!1
if(q!==r.gl(s))throw H.e(P.ai(this))}return!0},
cp:function(a,b,c){var s=this.$ti
return new H.L(this,s.B(c).h("1(a2.E)").a(b),s.h("@<a2.E>").B(c).h("L<1,2>"))},
a7:function(a,b){return H.br(this,b,null,this.$ti.h("a2.E"))},
E:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("n<a2.E>").a(b)
s=this.a
r=J.a5(s)
q=r.gl(s)
for(p=J.w(b),o=n.Q[1],n=n.c;p.j();){r.w(s,n.a(o.a(p.gm())));++q}},
bI:function(a,b,c){P.ci(b,c,J.y(this.a))
return H.br(this,b,c,this.$ti.h("a2.E"))},
k:function(a){return P.fV(this,"[","]")}}
P.ca.prototype={}
P.en.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.r(a)
r.a=s+": "
r.a+=H.r(b)},
$S:29}
P.bo.prototype={
e2:function(a,b){var s,r,q=H.D(this)
q.h("~(1,2)").a(b)
for(s=this.ge7(),s=s.gA(s),q=q.Q[1];s.j();){r=s.gm()
b.$2(r,q.a(this.n(0,r)))}},
gl:function(a){var s=this.ge7()
return s.gl(s)},
k:function(a){return P.hI(this)},
$ic9:1}
P.cl.prototype={
gS:function(a){return this.a===0},
gaM:function(a){return this.a!==0},
k:function(a){return P.fV(this,"{","}")},
a7:function(a,b){return H.hO(this,b,H.D(this).c)},
gX:function(a){var s=P.h1(this,this.r,H.D(this).c)
if(!s.j())throw H.e(H.a0())
return s.$ti.c.a(s.d)},
gY:function(a){var s,r,q=P.h1(this,this.r,H.D(this).c)
if(!q.j())throw H.e(H.a0())
s=q.$ti.c
do r=s.a(q.d)
while(q.j())
return r}}
P.cA.prototype={
h7:function(a,b){var s,r,q,p=this,o=p.fp()
for(s=P.h1(p,p.r,H.D(p).c),r=s.$ti.c;s.j();){q=r.a(s.d)
if(b.a9(0,q))o.w(0,q)}return o},
$iG:1,
$in:1,
$ick:1}
P.cJ.prototype={}
P.H.prototype={
gbQ:function(){return H.b2(this.$thrownJsError)}}
P.bO.prototype={
k:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.d3(s)
return"Assertion failed"}}
P.ds.prototype={}
P.de.prototype={
k:function(a){return"Throw of null."}}
P.ay.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
k:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc_()+o+m
if(!q.a)return l
s=q.gbZ()
r=P.d3(q.b)
return l+s+": "+r}}
P.ch.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.r(q):""
else if(q==null)s=": Not greater than or equal to "+H.r(r)
else if(q>r)s=": Not in inclusive range "+H.r(r)+".."+H.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.r(r)
return s}}
P.d5.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){if(H.S(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.dv.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dt.prototype={
k:function(a){var s="UnimplementedError: "+this.a
return s}}
P.bq.prototype={
k:function(a){return"Bad state: "+this.a}}
P.d0.prototype={
k:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d3(s)+"."}}
P.cn.prototype={
k:function(a){return"Stack Overflow"},
gbQ:function(){return null},
$iH:1}
P.d2.prototype={
k:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f2.prototype={
k:function(a){return"Exception: "+this.a}}
P.eg.prototype={
k:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.N.eN(q,0,75)+"..."
return r+"\n"+q}}
P.n.prototype={
cp:function(a,b,c){var s=H.D(this)
return H.ji(this,s.B(c).h("1(n.E)").a(b),s.h("n.E"),c)},
bk:function(a,b){var s
H.D(this).h("F(n.E)").a(b)
for(s=this.gA(this);s.j();)if(!H.cP(b.$1(s.gm())))return!1
return!0},
aw:function(a,b){return P.j(this,b,H.D(this).h("n.E"))},
T:function(a){return this.aw(a,!0)},
gl:function(a){var s,r=this.gA(this)
for(s=0;r.j();)++s
return s},
gS:function(a){return!this.gA(this).j()},
gaM:function(a){return!this.gS(this)},
a7:function(a,b){return H.hO(this,b,H.D(this).h("n.E"))},
gX:function(a){var s=this.gA(this)
if(!s.j())throw H.e(H.a0())
return s.gm()},
gY:function(a){var s,r=this.gA(this)
if(!r.j())throw H.e(H.a0())
do s=r.gm()
while(r.j())
return s},
R:function(a,b){var s,r,q
P.ap(b,"index")
for(s=this.gA(this),r=0;s.j();){q=s.gm()
if(b===r)return q;++r}throw H.e(P.fU(b,this,"index",null,r))},
k:function(a){return P.jb(this,"(",")")}}
P.I.prototype={}
P.O.prototype={
gq:function(a){return P.C.prototype.gq.call(C.a1,this)},
k:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
F:function(a,b){return this===b},
gq:function(a){return H.aw(this)},
k:function(a){return"Instance of '"+H.eC(this)+"'"},
toString:function(){return this.k(this)}}
P.dH.prototype={
k:function(a){return""},
$iaV:1}
P.dm.prototype={
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
W.b7.prototype={
sh_:function(a,b){a.height=b},
shr:function(a,b){a.width=b},
$ib7:1}
W.bT.prototype={
sck:function(a,b){a.fillStyle=b},
sd_:function(a,b){a.strokeStyle=b},
$ibT:1}
W.av.prototype={
gl:function(a){return a.length}}
W.eb.prototype={
k:function(a){var s=String(a)
s.toString
return s}}
W.bW.prototype={
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
F:function(a,b){var s,r
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
gq:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gq(p)
s=a.top
s.toString
s=C.c.gq(s)
r=a.width
r.toString
r=C.c.gq(r)
q=a.height
q.toString
return W.hY(p,s,r,C.c.gq(q))},
$ih0:1}
W.h.prototype={
k:function(a){var s=a.localName
s.toString
return s},
$ih:1}
W.i.prototype={$ii:1}
W.a_.prototype={
fg:function(a,b,c,d){return a.addEventListener(b,H.bB(t.B.a(c),1),!1)},
fs:function(a,b,c,d){return a.removeEventListener(b,H.bB(t.B.a(c),1),!1)},
$ia_:1}
W.d4.prototype={
gl:function(a){return a.length}}
W.ac.prototype={$iac:1}
W.a9.prototype={
k:function(a){var s=a.nodeValue
return s==null?this.eR(a):s}}
W.di.prototype={
gl:function(a){return a.length}}
W.au.prototype={}
W.bt.prototype={
gfG:function(a){var s=new P.P($.J,t.dL),r=t.c4.a(new W.eW(new P.cC(s,t.g4)))
this.fn(a)
r=W.ih(r,t.H)
r.toString
this.ft(a,r)
return s},
ft:function(a,b){var s=a.requestAnimationFrame(H.bB(t.c4.a(b),1))
s.toString
return s},
fn:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eW.prototype={
$1:function(a){this.a.c9(0,H.h7(a))},
$S:19}
W.cv.prototype={
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
F:function(a,b){var s,r
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
gq:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gq(p)
s=a.top
s.toString
s=C.c.gq(s)
r=a.width
r.toString
r=C.c.gq(r)
q=a.height
q.toString
return W.hY(p,s,r,C.c.gq(q))}}
W.fT.prototype={}
W.cx.prototype={}
W.dA.prototype={}
W.cy.prototype={
fK:function(){var s,r=this,q=r.b
if(q==null)return $.hp()
s=r.d
if(s!=null)J.iS(q,r.c,t.B.a(s),!1)
r.b=null
r.sfq(null)
return $.hp()},
sfq:function(a){this.d=t.B.a(a)}}
W.f1.prototype={
$1:function(a){return this.a.$1(t.aD.a(a))},
$S:15}
P.dE.prototype={
f3:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.e.aq(a-s,k)
r=a>>>0
a=C.e.aq(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.e.aq(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.e.aq(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.e.aq(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.e.aq(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.e.aq(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.b9()
l.b9()
l.b9()
l.b9()},
b9:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.e.aq(o-n+(q-p)+(m-r),4294967296)>>>0},
$ijm:1}
P.bd.prototype={
k:function(a){return"Point("+H.r(this.a)+", "+H.r(this.b)+")"},
F:function(a,b){if(b==null)return!1
return b instanceof P.bd&&this.a===b.a&&this.b===b.b},
gq:function(a){var s=C.c.gq(this.a),r=C.c.gq(this.b),q=H.hQ(H.hQ(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.R.prototype={
gA:function(a){var s=this.$ti,r=J.q(this.a,new A.eh(this),s.h("I<1>"))
return new A.cz(P.j(r,!1,r.$ti.h("E.E")),s.h("cz<1>"))}}
A.eh.prototype={
$1:function(a){return J.w(this.a.$ti.h("n<1>").a(a))},
$S:function(){return this.a.$ti.h("I<1>(n<1>)")}}
A.cz.prototype={
j:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].j()){p.sdk(null)
return!1}if(r>4294967295)H.d(P.aE(r,0,4294967295,"length",null))
q=J.hD(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.o(o,s)
q[s]=o[s].gm()}p.sdk(q)
return!0},
gm:function(){var s=this.b
return s==null?H.d(P.am("No element")):s},
sdk:function(a){this.b=this.$ti.h("l<1>?").a(a)},
$iI:1}
X.a6.prototype={
gbR:function(){var s=this.x
return s==null?H.d(H.f("startingMobject")):s},
k:function(a){var s=this.r
return this.am()+"("+s.gH(s)+", runTime: "+H.r(this.a)+"s)"},
am:function(){var s=this.d1(0),r=P.hJ("^Instance of '(.*?)'$").e1(s).b
if(1>=r.length)return H.o(r,1)
r=r[1]
r.toString
return r},
aS:function(){this.x=this.r.i()
this.aV(0)},
cl:function(){this.aV(1)},
aT:function(a){},
b2:function(){return H.a([this.r,this.gbR()],t.r)},
cH:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.b2(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)p.push(s[q].b5())
s=t.h
return P.j(new A.R(p,s),!0,s.h("n.E"))},
aH:function(a){var s,r,q
for(s=this.eo(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].cF(a)},
eo:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.b2(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o.push(p)}return o},
aV:function(a){a=Math.min(1,Math.max(a,0))
this.h6(this.b.$1(a))},
h6:function(a){var s,r,q,p,o,n=this.cH()
for(s=T.x(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){o=s[p]
this.co(C.a.n(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.S(o)*q,0)))}},
co:function(a,b){t.a.a(a)}}
G.cW.prototype={
gdz:function(){var s=this.z
return s==null?H.d(H.f("animationsTiming")):s},
gea:function(){var s=this.Q
return s==null?H.d(H.f("maxEndTime")):s},
eY:function(a,b,c,d,e){var s,r,q,p=H.a([],t.r)
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)p.push(s[q].r)
this.r.a_(t.a.a(T.iF(p,t.j)))
this.h2()},
b2:function(){return t.fh.a(this.r).gu()},
aS:function(){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aS()},
cl:function(){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].cl()},
aT:function(a){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aT(a)},
aH:function(a){var s,r,q
for(s=this.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aH(a)},
h2:function(){var s,r,q,p,o=this
o.sf5(t.gp.a(o.eq()))
s=H.a([],t.n)
for(r=o.gdz(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(r[p].c)
o.Q=H.bx(C.a.bv(s,0,C.t,t.V))
if(o.a===0)o.a=o.gea()},
eq:function(){var s,r,q,p,o,n,m,l,k,j=H.a([],t.fZ)
for(s=this.y,r=s.length,q=t.cL,p=this.c,o=1-p,n=0,m=0;m<s.length;s.length===r||(0,H.c)(s),++m){l=s[m]
k=n+l.a
C.a.w(j,new S.aW(l,n,k,q))
n=n*o+k*p}return j},
aV:function(a){var s,r,q,p,o,n,m,l=a*this.gea()
for(s=this.gdz(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.aV(m)}},
sf5:function(a){this.z=t.dh.a(a)}}
M.dk.prototype={
co:function(a,b){var s,r
t.a.a(a)
s=J.af(a)
r=[0,b]
s.n(a,0).cs(s.n(a,1),r[0],r[1])}}
M.dj.prototype={}
G.dq.prototype={
gcB:function(){var s=this.y
return s==null?H.d(H.f("targetMobject")):s},
gcA:function(){var s=this.z
return s==null?H.d(H.f("targetCopy")):s},
h1:function(){if(this.cx!=null)return
this.shc(B.iw())},
aS:function(){var s=this
s.y=s.gcB()
s.z=s.gcB().i()
s.r.c6(s.gcA())
s.eP()},
aT:function(a){this.eQ(a)},
b2:function(){var s=this
return H.a([s.r,s.gbR(),s.gcB(),s.gcA()],t.r)},
cH:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gbR(),this.gcA()],r=0;r<3;++r)q.push(s[r].b5())
s=t.h
return P.j(new A.R(q,s),!0,s.h("n.E"))},
co:function(a,b){var s,r,q,p,o,n
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
n=p==null?B.iw():p
r.sU(t.y.a(n.$3(q.gp(q),s.gp(s),b)))
r.cn(q,s,b)},
shc:function(a){this.cx=t.b5.a(a)}}
R.e6.prototype={
cb:function(a){var s,r,q,p
t.a.a(a)
s=new R.e7()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.c)(a),++p)C.a.E(r,s.$1(a[p]))
return T.iF(r,t.j)},
ct:function(a){var s,r,q,p,o,n="renderer"
for(s=this.cb(t.a.a(a)),r=H.z(s).h("aF<1>"),s=new H.aF(s,r),s=new H.a1(s,s.gl(s),r.h("a1<E.E>")),q=this.r,r=r.h("E.E");s.j();){p=r.a(s.d)
if(p instanceof V.B){o=q.a;(o==null?H.d(H.f(n)):o).he(p)}else{p=q.a
if(p==null)H.d(H.f(n))}}},
ei:function(a,b){t.y.a(b)
return!C.a.bk(b,new R.e8())?H.a([C.d],t.l):b}}
R.e7.prototype={
$1:function(a){return a.ac()},
$S:16}
R.e8.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
K.bH.prototype={
gbz:function(){var s=this.a
return s==null?H.d(H.f("renderer")):s},
gK:function(){var s=this.b
return s==null?H.d(H.f("camera")):s},
bc:function(a){return a},
bF:function(a,b){var s,r,q=this
q.gK()
s=X.dO(a,0,1280,-q.gK().c/2,q.gK().c/2)
q.gK()
r=X.dO(b,720,0,-q.gK().d/2,q.gK().d/2)
q.gK()
return new Y.b(s,r,0).C(0,C.d)}}
K.cU.prototype={
bG:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gK()
p=X.dO(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gK()
return new Y.b(p,X.dO(a.b,q,r,0,720),0)},
c8:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new K.dQ(s))
t.g5.a(null)
q=q.c
C.a.E(s.r,H.a([W.f0(r,"mousemove",o,!1,q),W.f0(r,"mousedown",p.a(new K.dR(s)),!1,q),W.f0(r,"mouseup",p.a(new K.dS(s)),!1,q)],t.db))},
hq:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].fK()}}
K.dQ.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bG(new P.bd(r,q,t.q))
q=s.bF(p.a,p.b)
s.ch=q
q.v(0,s.cx)
q=s.ch
$.bD().bj(new O.cd(q,C.x))
if(s.x){r=s.z=s.ch
s.y.v(0,r)
$.bD().bj(new O.aB(r,C.q))}},
$S:5}
K.dR.prototype={
$1:function(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bG(new P.bd(r,q,t.q))
s.ch=s.bF(p.a,p.b)
q=a.button
q.toString
r=new O.cc(q)
r.bU(q)
s.Q=r
r=s.ch
$.bD().bj(new O.aC(r,C.o))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new Y.b(q,o,r)
s.z=new Y.b(q,o,r)},
$S:5}
K.dS.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bG(new P.bd(r,q,t.q))
s.ch=s.bF(p.a,p.b)
q=a.button
q.toString
r=new O.cc(q)
r.bU(q)
s.Q=r
r=s.ch
$.bD().bj(new O.aD(r,C.p))
s.x=!1},
$S:5}
B.cZ.prototype={}
M.bp.prototype={
i:function(){return M.h_(this)},
fC:function(){var s,r,q,p=this,o=t.L,n=H.a([],o),m=p.e0?-1:1,l=p.bu
l.toString
s=p.dY
s=T.ft(p.W+m*s/2,l,s).al(0)
l=s.length
r=p.dX
q=0
for(;q<s.length;s.length===l||(0,H.c)(s),++q)n.push(p.cQ(s[q],r))
p.shn(n)
o=H.a([],o)
for(n=p.dZ,l=n.length,r*=p.e_,q=0;q<n.length;n.length===l||(0,H.c)(n),++q)o.push(p.cQ(n[q],r))
p.sfI(o)
o=p.ci
o.toString
o=P.j(o,!0,t.j)
n=p.cj
n.toString
C.a.E(o,n)
p.a_(t.a.a(o))},
cQ:function(a,b){var s,r=this,q=null,p=C.y.t(0,b),o=N.hE(q,0,0,!1,C.m.t(0,b),q,!1,q,C.f,0,p,q,4)
o.cv(0,r.M().v(0,r.N()).aR())
o.aX(r.cq(a))
o.a2(r.cJ())
o.bM(J.M(r.aA(),0))
p=J.ag(r.ad(!1))
s=r.x
o.eG(p,s)
return o},
cq:function(a){var s=this,r=X.dO(a,s.as,s.W,0,1)
return V.dN(s.N(),s.M(),r,t.i)},
ec:function(a){var s,r=this,q=r.N(),p=r.M(),o=p.v(0,q),n=o.az(0,Math.sqrt(o.a1()))
o=n.dO(a.v(0,q))
s=n.dO(p.v(0,q))
return V.dN(r.as,r.W,o/s,t.V)},
shn:function(a){this.ci=t.f.a(a)},
sfI:function(a){this.cj=t.f.a(a)}}
M.ey.prototype={
$1:function(a){return t.F.a(a).i()},
$S:14}
M.ez.prototype={
$1:function(a){return t.F.a(a).i()},
$S:14}
M.d1.prototype={}
M.bQ.prototype={
gax:function(){var s=this.bq
return s==null?H.d(H.f("xAxis")):s},
gay:function(){var s=this.br
return s==null?H.d(H.f("yAxis")):s},
eZ:function(a,b,c,d,e,f,g,h){var s=this
s.bq=s.dJ(e,d,s.bo.ai(s.gdM()))
s.br=s.dJ(h,g,s.bp.ai(s.gdN()))
s.gay().cw(0,-1.5707963267948966,C.d,C.k)
s.bs=V.eJ(H.a([s.gax(),s.gay()],t.U))
s.a_(t.a.a(H.a([s.gax(),s.gay()],t.r)))
s.aC(s.bm)},
dJ:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=C.a.a6(H.a([a6,this.bn,this.gdL()],t.f_),new M.e4()),a3=a2.a
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
q=new M.bp(a4,a5,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,a1,a1,0,a1,C.l,C.H,0.35,C.k,a0,a1,a1,a,0,0,C.f,!1,0.01,!1,0.000001,4,a1,a1,a1,C.b,a1,a1,a1,a1,a1)
q.a8(C.b,a1,a1)
q.ap(a1,0,!1,a3,!1,0.01,C.f,0,a3,a,0.000001)
q.a2(C.b)
d=Math.max(e,d)
q.r1=d
if(f)q.W=q.W+d/2
q.L=C.l.t(0,s).t(0,a4)
a3=C.l.t(0,s).t(0,q.W)
q.O=a3
q.aZ(q.L,a3)
q.aC(q.cq(j).t(0,-1))
if(q.bu==null)q.bu=p*C.c.dG(a4/p)
if(f)q.fD(q.r1)
if(r)q.fC()
return q},
aF:function(a){var s,r,q,p,o,n="getStart",m=this.gax().cq(0),l=new Y.b(m.a,m.b,m.c),k=H.a([a.a,a.b,a.c],t.n),j=this.bs
k=new A.R(H.a([k,(j==null?H.d(H.f("axes")):j).gu()],t.D),t.m)
k=k.gA(k)
j=t.f4
for(;k.j();){s=k.b
if(s==null)s=H.d(P.am("No element"))
if(1>=s.length)return H.o(s,1)
r=j.a(s[1])
q=r.as
p=(H.bx(s[0])-q)/(r.W-q)+0
q=r.ry
if(q!=null){q.aj(n)
q=q.r
q=J.ag(q==null?H.d(H.f("points")):q)}else q=r.bT()
o=r.x1
if(o!=null){o.aj(n)
o=o.r
o=J.ag(o==null?H.d(H.f("points")):o)}else o=r.bS()
l=l.C(0,q.t(0,1-p).C(0,o.t(0,p)).v(0,m))}return l},
eb:function(a){return new Y.b(this.gax().ec(a),this.gay().ec(a),0)},
d2:function(a){var s=this
s.bq=M.h_(a.gax())
s.br=M.h_(a.gay())
s.bs=V.eJ(H.a([s.gax(),s.gay()],t.U))},
i:function(){return M.iZ(this)},
gdL:function(){return C.A},
gdM:function(){return C.j},
gdN:function(){return C.z}}
M.e4.prototype={
$2:function(a,b){var s=t.dK
return s.a(a).ai(s.a(b))},
$S:20}
M.cf.prototype={
i:function(){return M.eA(this)},
gdD:function(){var s=this.dU
return s==null?H.d(H.f("backgroundLines")):s},
gdQ:function(){var s=this.dV
return s==null?H.d(H.f("fadedLines")):s},
h0:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.bl==null){s=h.cc
r=t.O
q=H.a([],r)
p=H.a([],r)
o=s.b
r=J.w(o==null?H.a([],r):o)
for(;r.j();){o=r.gm()
n=o.d
p.push(new K.u(o.a,o.b,o.c,n*0.5))}h.bl=new V.aX(q,p,s.c*0.5,s.d,s.e*0.5,0,C.d)}s=h.dT
m=h.cM(h.gax(),h.gay(),h.dR,s)
l=h.cM(h.gay(),h.gax(),h.dS,s)
s=t.F
r=P.j(m[0],!0,s)
C.a.E(r,l[0])
s=P.j(m[1],!0,s)
C.a.E(s,l[1])
k=[r,s]
s=t.ds
h.sfc(s.a(k[0]))
h.sfd(s.a(k[1]))
j=V.eJ(h.gdD())
j.bP(h.cc)
i=V.eJ(h.gdQ())
s=h.bl
s.toString
i.bP(s)
h.fE(H.a([j,i],t.r))},
cM:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="getStart",d=a0.N(),c=N.hE(f,0,0,!1,a0.M(),f,!1,f,C.f,0,d,f,4),b=1+a3,a=1/b*a2
d=t.L
s=H.a([],d)
r=H.a([],d)
d=a1.as
q=[T.ft(a1.W,0,a).al(0),T.ft(d,0,-a).al(0)]
for(p=t.V,o=0;o<2;++o)for(n=T.dM(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,H.c)(n),++l){k=n[l]
j=N.hF(c)
i=(k.b-d)/(a1.W-d)+0
h=a1.ry
if(h!=null){h.aj(e)
h=h.r
h=J.ag(h==null?H.d(H.f("points")):h)}else h=a1.bT()
g=a1.x1
if(g!=null){g.aj(e)
g=g.r
g=J.ag(g==null?H.d(H.f("points")):g)}else g=a1.bS()
j.aC(h.t(0,1-i).C(0,g.t(0,i)))
if(C.e.ae(k.a,b)===0)C.a.w(s,j)
else C.a.w(r,j)}return H.a([s,r],t.gL)},
sfc:function(a){this.dU=t.f.a(a)},
sfd:function(a){this.dV=t.f.a(a)},
gdL:function(){return this.fM},
gdM:function(){return this.fN},
gdN:function(){return this.fO}}
M.W.prototype={
ai:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
N.cq.prototype={
em:function(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=C.i
if(b==null)r=null
else r=b
if(r==null)r=C.i
return N.as(C.i,this.e,s,r,this.c)},
hs:function(a){return this.em(a,null)},
ht:function(a){return this.em(null,a)}}
N.dp.prototype={
k:function(a){return this.b}}
N.at.prototype={
i:function(){return N.jq(this)},
dt:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(a1==null)a1=b.cK()
s=b.cJ()
r=N.be(b.rx)
q=r.a
q=q==null?a:J.b6(q)
if(q!==!1)r=r.hs(s.i())
q=r.b
q=q==null?a:J.b6(q)
if(q!==!1)r=r.ht(s.i())
p=Z.kC(3.141592653589793,C.k).al(0)
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
h=Z.kl(3,new Y.b(j*l+e*h+g*k-f*q,g*l+e*q+f*h-j*k,f*l+e*k+j*q-g*h))
d=new N.bN(0,0,0,C.f,!1,0.01,!1,0.000001,4,a,a,a,C.b,a,a,a,a,a)
d.a8(C.b,a,a)
d.ap(a,0,!1,a,!1,0.01,C.f,0,a,0,0.000001)
d.f1(h,a,0,!1,a,!1,C.f,0,a,0)
d.cv(0,3.141592653589793)
d.ef(a1,0,C.d,a,!0)
d.ef(a1,1,C.d,a,!0)
d.e8(b)
d.bP(r)
q=a0===C.E
c=q?b.N():b.M()
d.cv(0,-(q?J.M(b.gp(b),1):J.M(b.gp(b),J.y(b.gp(b))-2)).v(0,c).aR()-J.ag(d.gp(d)).v(0,d.cr(0.5)).aR()-3.141592653589793)
d.aC(c.v(0,J.ag(d.gp(d))))
b.hg(d,a0)
if(q)b.ry=d
else b.x1=d
b.a_(t.a.a(H.a([d],t.r)))
return d},
c5:function(a){return this.dt(a,null)},
fD:function(a){return this.dt(C.F,a)},
hg:function(a,b){var s=this
if(Math.sqrt(s.N().v(0,s.M()).a1())===0)return
if(b===C.E)s.aZ(a.cr(0.5),s.M())
else s.aZ(s.N(),a.cr(0.5))},
aI:function(a,b){this.cW(a,!1)
this.cS(C.i,!1)
this.eX(a,!0)},
a2:function(a){return this.aI(a,!0)},
cK:function(){return this.r1},
M:function(){var s=this.x1
if(s!=null){s.aj("getStart")
s=J.ag(s.gp(s))}else s=this.bS()
return s},
N:function(){var s=this.ry
if(s!=null){s.aj("getStart")
s=J.ag(s.gp(s))}else s=this.bT()
return s},
hd:function(){var s,r,q,p=this,o=p.ry
if(o!=null){p.c5(C.E)
s=p.ry
s.toString
r=H.a([],t.l)
for(s=J.w(s.gp(s));s.j();){q=s.gm()
r.push(new Y.b(q.a,q.b,q.c))}o.sU(t.y.a(r))
p.by(0,H.a([o],t.r))
p.ry=o}o=p.x1
if(o!=null){p.c5(C.F)
s=p.x1
s.toString
r=H.a([],t.l)
for(s=J.w(s.gp(s));s.j();){q=s.gm()
r.push(new Y.b(q.a,q.b,q.c))}o.sU(t.y.a(r))
p.by(0,H.a([o],t.r))
p.x1=o}}}
N.bJ.prototype={
i:function(){return N.iV(this)},
b1:function(){var s=this
s.eB()
s.bK(0,s.L,C.d)
s.aC(s.O)},
eB:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.V,r=j.a0,q=j.aL,s=T.fI(q,r+s,s).al(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.c)(s),++o){n=s[o]
h.push(C.l.t(0,Math.cos(n)).C(0,C.m.t(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.c)(h),++o){n=h[o]
s.push(new Y.b(-n.b,n.a,n.c))}p=H.a([],i)
for(m=T.x(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.c)(m),++o){k=m[o]
p.push(C.a.n(h,k).C(0,C.a.n(s,k).t(0,q)))}i=H.a([],i)
for(r=T.x(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.c)(r),++o){k=r[o]
i.push(C.a.n(h,k).v(0,C.a.n(s,k).t(0,q)))}s=t.i
j.cR(T.iE(h,s),p,i,T.hn(h,s))}}
N.bV.prototype={
i:function(){return N.j2(this)}}
N.bX.prototype={
i:function(){return N.bY(this)}}
N.N.prototype={
i:function(){return N.hF(this)},
b1:function(){var s=this
s.cU(H.a([s.L,s.O],t.l))
s.fA()},
fA:function(){var s,r,q=this,p=q.V
if(p===0)return
s=Math.sqrt(q.N().v(0,q.M()).a1())
if(s<2*p)return
r=p/s
q.cs(q,r,1-r)},
aZ:function(a,b){var s=this
if(s.N().F(0,s.M())){s.L=a
s.O=b
s.b1()}return s.eU(a,b)}}
N.bL.prototype={
ge4:function(){var s=this.bt
return s==null?H.d(H.f("initialStrokeWidth")):s},
b6:function(a,b,c,d){var s=this
if(Math.sqrt(s.N().v(0,s.M()).a1())===0)return
s.eV(0,b,c,d)
s.cX()
s.hd()},
bK:function(a,b,c){return this.b6(a,b,C.d,c)},
cK:function(){var s=this
return Math.min(s.r1,s.as*Math.sqrt(s.N().v(0,s.M()).a1()))},
cX:function(){var s=this
return s.eI(!1,Math.min(s.ge4(),s.W*Math.sqrt(s.N().v(0,s.M()).a1())))},
i:function(){return N.iX(this)}}
N.cg.prototype={
f1:function(a,b,c,d,e,f,g,h,i,j){var s=P.j(a,!0,t.i)
s.push(C.a.gX(a))
this.cU(s)},
i:function(){return N.jk(this)}}
N.cj.prototype={
i:function(){return N.jo(this)}}
N.cr.prototype={
i:function(){return N.jr(this)}}
N.bN.prototype={
i:function(){return N.a7(this)}}
R.d7.prototype={
f0:function(a){this.a_(t.a.a(H.a([this.x],t.r)))
this.c8()},
c4:function(a,b,c,d){var s,r
H.fw(d,t.e,"IEvent","addEventListener")
s=new O.X(d.h("F(0)").a(c),b,d.h("X<0>"))
r=$.bD()
t.gc.a(s)
r=r.gaG().n(0,b)
r.toString
C.a.w(r,s)
return s}}
R.bZ.prototype={
c8:function(){var s=this
s.sf7(t.gl.a(s.c4(0,C.q,new R.ec(s),t.u)))
s.sf8(t.c3.a(s.c4(0,C.o,new R.ed(s),t.N)))
s.sf9(t.eL.a(s.c4(0,C.p,new R.ee(s),t.I)))},
i:function(){return R.j8(this)},
sf7:function(a){this.dx=t.g7.a(a)},
sf8:function(a){this.dy=t.em.a(a)},
sf9:function(a){this.fr=t.ga.a(a)}}
R.ec.prototype={
$1:function(a){var s
t.u.a(a)
s=this.a
if(s.fx){s.x.aX(a.c)
return!0}return!1},
$S:21}
R.ed.prototype={
$1:function(a){var s,r=this.a,q=r.x,p=t.N.a(a).c,o=p.a
if(o>=q.Z(C.H).a-0.1)if(o<=q.Z(C.l).a+0.1){o=p.b
o=o>=q.Z(C.y).b-0.1&&o<=q.Z(C.m).b+0.1
s=o}else s=!1
else s=!1
if(s){r.fx=!0
q.aX(p)
return!0}return!1},
$S:22}
R.ee.prototype={
$1:function(a){t.I.a(a)
return this.a.fx=!1},
$S:23}
M.p.prototype={
gG:function(a){var s=this.a
return s},
gH:function(a){var s=this.b
return s==null?H.d(H.f("name")):s},
gu:function(){var s=this.d
return s==null?H.d(H.f("submobjects")):s},
gel:function(){var s=this.e
if(s==null){s=H.a([],t.eM)
this.sfb(s)}return s},
gI:function(){var s=this.f
return s==null?H.d(H.f("updatingSuspended")):s},
gp:function(a){var s=this.r
return s==null?H.d(H.f("points")):s},
a8:function(a,b,c){var s=this,r=s.am()
s.b=r
s.saD(t.a.a(H.a([],t.r)))
s.f=!1
s.sU(t.y.a(H.a([],t.l)))
s.b1()
s.e3()},
k:function(a){return this.am()},
am:function(){var s=this.d1(0),r=P.hJ("^Instance of '(.*?)'$").e1(s).b
if(1>=r.length)return H.o(r,1)
r=r[1]
r.toString
return r},
e3:function(){},
b1:function(){},
a_:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.a9(a,this))throw H.e("Mobject can't contain itself")
s=P.j(a,!0,t.j)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
if(!C.a.a9(a,o))s.push(o)}this.saD(n.a(s))},
fE:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.a9(a,this))throw H.e("Mobject can't contain itself")
s=H.a([],t.r)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
if(!C.a.a9(a,o))s.push(o)}C.a.E(s,a)
this.saD(n.a(s))},
by:function(a,b){var s,r,q,p,o,n=t.a
n.a(b)
s=H.a([],t.r)
for(r=this.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p){o=r[p]
if(!C.a.a9(b,o))s.push(o)}this.saD(n.a(s))},
bd:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.Z(a)
for(s=this.b5(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.w(l==null?H.d(H.f("points")):l)
for(;l.j();)m.push(J.fQ(c.$1(l.gm().v(0,b)),b))
n.sU(q.a(m))}},
dB:function(a){return this.bd(C.d,null,a)},
i:function(){return M.jj(this)},
ek:function(a,b){var s,r,q,p=this
if(p.gI())return
for(s=p.gel(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].$2(p,a)
for(s=p.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].ek(a,!0)},
cF:function(a){return this.ek(a,!0)},
du:function(a){t.he.a(a)
C.a.w(this.gel(),a)
this.cF(0)},
aC:function(a){return this.dB(new M.ev(a))},
b6:function(a,b,c,d){return this.bd(c,d,new M.eu(b))},
bK:function(a,b,c){return this.b6(a,b,C.d,c)},
cw:function(a,b,c,d){this.bd(C.d,c,new M.et(Z.kE(b,d).gej()))},
cv:function(a,b){return this.cw(a,b,null,C.k)},
hj:function(a,b,c){return this.cw(a,b,c,C.k)},
eM:function(a,b,c,d){return this.bd(c,d,new M.ew(b,a))},
dA:function(a){var s={},r=Z.cY(3)
s.a=r
s.a=r.aN(0,new M.ep(a))
this.dB(new M.eq(s))},
ef:function(a,b,c,d,e){var s=this.h9(b)
if(s===0)return
this.eM(a/s,b,c,d)},
aX:function(a){this.aC(a.v(0,this.Z(C.d)).t(0,new Y.b(1,1,1)))},
aZ:function(a,b){var s,r=this,q=r.N(),p=r.M(),o=p.v(0,q)
if(q.F(0,p))throw H.e("Cannot position endpoints of a closed loop")
s=b.v(0,a)
r.bK(0,Math.sqrt(s.a1())/Math.sqrt(o.a1()),q)
r.hj(0,s.aR()-o.aR(),q)
r.aC(a.v(0,q))},
aI:function(a,b){var s,r,q
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aI(a,!0)
this.a=a},
aU:function(a,b){var s,r,q
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].aU(a,!0)},
dP:function(a){return this.aU(a,!0)},
ac:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)C.a.E(o,s[q].ac())
p=P.fZ(o,t.j)
return P.j(p,!0,H.D(p).c)},
b5:function(){var s=this.ac(),r=H.z(s),q=r.h("bf<1>")
return P.j(new H.bf(s,r.h("F(1)").a(new M.er()),q),!0,q.h("n.E"))},
cI:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.b5(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q].r
C.a.E(o,p==null?H.d(H.f("points")):p)}return o},
bH:function(){return this.cI()},
b4:function(a,b,c){var s,r,q
t.bG.a(c)
if(c==null)c=this.bH()
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.c)(c),++q)s.push(c[q].b3(a))
if(b<0)return C.a.a6(s,C.B)
else if(b===0)return(C.a.a6(s,C.B)+C.a.a6(s,C.t))/2
else return C.a.a6(s,C.t)},
er:function(a,b){return this.b4(a,b,null)},
Z:function(a){var s=this,r=s.bH()
if(r.length===0)return C.d
return new Y.b(s.b4(0,C.c.ak(a.a),r),s.b4(1,C.c.ak(a.b),r),s.b4(2,C.c.ak(a.c),r))},
h9:function(a){var s=this.cI(),r=H.z(s),q=new H.L(s,r.h("k(1)").a(new M.es(a)),r.h("L<1,k>")),p=q.a6(0,C.B)
return q.a6(0,C.t)-p},
bE:function(a,b){return this.er(a,C.c.ak(C.d.b3(a)))},
cO:function(){return new Y.b(this.bE(0,null),this.bE(1,null),this.bE(2,null))},
N:function(){this.aj("getStart")
return J.ag(this.gp(this))},
M:function(){this.aj("getEnd")
return J.bG(this.gp(this))},
gl:function(a){return this.b7(0).length},
b7:function(a){var s=this,r=H.a([],t.r)
if(J.bF(s.gp(s)))r.push(s)
C.a.E(r,s.gu())
return r},
c6:function(a){var s,r,q,p,o,n,m=this
if(J.b6(m.gp(m))&&J.bF(a.gp(a)))a.ed()
if(J.b6(a.gp(a))&&J.bF(m.gp(m)))m.ed()
s=m.b7(0).length
r=a.b7(0).length
m.ds(Math.max(0,r-s))
a.ds(Math.max(0,s-r))
m.dv(a)
for(q=new A.R(H.a([m.gu(),a.gu()],t.Z),t.h),q=q.gA(q);q.j();){p=q.b
if(p==null)p=H.d(P.am("No element"))
o=p.length
if(0>=o)return H.o(p,0)
n=p[0]
if(1>=o)return H.o(p,1)
n.c6(p[1])}},
cN:function(){throw H.e("getPointMobject not implemented for "+H.r(this.gev())+"()")},
dv:function(a){var s=this,r=J.y(s.gp(s)),q=J.y(a.gp(a))
if(r<q)s.dw(a)
else if(r>q)a.dw(s)},
dw:function(a){throw H.e("Not implemented")},
ed:function(){var s=this.i(),r=t.r,q=t.a
s.saD(q.a(H.a([],r)))
this.sU(t.y.a(H.a([],t.l)))
this.a_(q.a(H.a([s],r)))},
ds:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.b7(0).length
if(s===0){r=H.a([],t.r)
for(q=T.x(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.c)(q),++o)r.push(a1.cN())
a1.saD(t.a.a(r))}n=s+a2
r=t.X
q=H.a([],r)
for(p=T.x(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.c)(p),++o){l=p[o]
if(typeof l!=="number")return l.t()
q.push(C.c.ao(l*s,n))}p=H.a([],r)
for(m=T.x(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.c)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.b1(i),e=0;e<q.length;q.length===g||(0,H.c)(q),++e)if(f.F(i,q[e]))h.push(1)
else h.push(0)
p.push(T.hm(h,j))}d=H.a([],t.r)
for(r=new A.R(H.a([a1.gu(),p],t.D),t.m),r=r.gA(r),q=t.j;r.j();){c=r.b
if(c==null)c=H.d(P.am("No element"))
p=c.length
if(0>=p)return H.o(c,0)
b=q.a(c[0])
if(1>=p)return H.o(c,1)
a=H.S(c[1])
C.a.w(d,b)
for(p=T.x(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.c)(p),++o){a0=b.i()
a0.dP(1)
C.a.w(d,a0)}}a1.saD(t.a.a(d))},
cn:function(a,b,c){},
cs:function(a,b,c){},
c7:function(a){var s,r,q,p,o,n,m
this.c6(a)
for(s=new A.R(H.a([this.ac(),a.ac()],t.Z),t.h),s=s.gA(s),r=t.i,q=t.y;s.j();){p=s.b
if(p==null)p=H.d(P.am("No element"))
o=p.length
if(0>=o)return H.o(p,0)
n=p[0]
if(1>=o)return H.o(p,1)
m=p[1]
o=m.r
n.sU(q.a(P.j(o==null?H.d(H.f("points")):o,!0,r)))
n.cn(n,m,1)}},
aj:function(a){var s
if(J.bF(this.gp(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.e(s)},
saD:function(a){this.d=t.hh.a(a)},
sfb:function(a){this.e=t.cI.a(a)},
sU:function(a){this.r=t.bG.a(a)}}
M.ev.prototype={
$1:function(a){return a.C(0,this.a)},
$S:2}
M.eu.prototype={
$1:function(a){return a.t(0,this.a)},
$S:2}
M.et.prototype={
$1:function(a){return a.aa(this.a)},
$S:2}
M.ew.prototype={
$1:function(a){var s=this.a
return a.hu(s,a.b3(s)*this.b)},
$S:2}
M.ep.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gD(r).a
if(typeof s!=="number")return s.bC()
if(typeof q!=="number")return H.bi(q)
if(s<q){s=b.b
q=r.gD(r).b
if(typeof s!=="number")return s.bC()
if(typeof q!=="number")return H.bi(q)
q=s>=q
s=q}else s=!0
return s?a:r.an(b)},
$S:1}
M.eq.prototype={
$1:function(a){return a.aa(this.a.a)},
$S:2}
M.er.prototype={
$1:function(a){t.j.a(a)
return J.y(a.gp(a))>0},
$S:4}
M.es.prototype={
$1:function(a){return t.i.a(a).b3(this.a)},
$S:28}
M.bm.prototype={
i:function(){return M.ja(this)}}
V.B.prototype={
ap:function(a,b,c,d,e,f,g,h,i,j,k){if(d!=null)this.sat(H.a([d],t.O))
if(i!=null)this.sag(H.a([i],t.O))
if(a!=null)this.saE(H.a([a],t.O))},
i:function(){return V.jt(this)},
e3:function(){var s=this,r=s.dy
s.eA(r==null?H.a([s.gG(s)],t.O):r)
r=s.fr
if(r==null)r=H.a([s.gG(s)],t.O)
s.eH(r,s.x)
s.ez(s.fx,s.y)
r=s.z
s.eD(s.Q,r)},
aP:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.E(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.bJ(),p=q.length,o=0;o<q.length;q.length===p||(0,H.c)(q),++o)q[o].cT(r,!1)
if(r.length!==0){if(n.dy==null)n.sat(r)
q=n.dy
q.toString
q=J.y(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.sat(T.bj(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.y(q)){q=n.dy
q.toString
n.sat(T.bj(r,J.y(q),t.G))}}s=H.a([],s)
q=n.dy
q.toString
q=T.x(J.y(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.c)(q),++o)s.push(C.a.n(r,q[o]))
n.sat(s)}},
cS:function(a,b){return this.aP(a,null,b)},
cT:function(a,b){return this.aP(null,a,b)},
eA:function(a){return this.aP(null,a,!0)},
bM:function(a){return this.aP(a,null,!0)},
af:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.E(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.bJ(),p=q.length,o=0;o<q.length;q.length===p||(0,H.c)(q),++o)q[o].eJ(a,r,!1,e)
if(r.length!==0)if(a){if(n.fx==null)n.saE(r)
q=n.fx
q.toString
q=J.y(q)
p=r.length
if(q<p){q=n.fx
q.toString
n.saE(T.bj(q,p,t.G))}else{q=n.fx
q.toString
if(p<J.y(q)){q=n.fx
q.toString
n.saE(T.bj(r,J.y(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.x(J.y(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.c)(q),++o)s.push(C.a.n(r,q[o]))
n.sag(s)}else{if(n.fr==null)n.sag(r)
q=n.fr
q.toString
q=J.y(q)
p=r.length
if(q<p){q=n.fr
q.toString
n.sag(T.bj(q,p,t.G))}else{q=n.fr
q.toString
if(p<J.y(q)){q=n.fr
q.toString
n.sag(T.bj(r,J.y(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.x(J.y(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.c)(q),++o)s.push(C.a.n(r,q[o]))
n.sag(s)}if(e!=null)if(a)n.y=e
else n.x=e},
cW:function(a,b){return this.af(!1,a,null,b,null)},
eJ:function(a,b,c,d){return this.af(a,null,b,c,d)},
bO:function(a,b){return this.af(!1,null,a,b,null)},
eH:function(a,b){return this.af(!1,null,a,!0,b)},
eI:function(a,b){return this.af(!1,null,null,a,b)},
eF:function(a){return this.af(!1,null,null,!0,a)},
eG:function(a,b){return this.af(!1,a,null,!0,b)},
bL:function(a,b,c,d){return this.af(!0,a,t.x.a(b),c,d)},
ey:function(a,b){return this.bL(null,a,b,null)},
ez:function(a,b){return this.bL(null,a,!0,b)},
cY:function(a,b){var s=this,r=null,q=t.x,p=q.a(a.d),o=q.a(a.a)
q=q.a(a.b)
s.aP(r,o,b)
s.af(!1,r,q,b,r)
s.bL(r,p,b,r)
s.bN(a.r,a.f,b)
return r},
bP:function(a){return this.cY(a,!0)},
cJ:function(){var s=J.M(this.aA(),0)
return s},
aI:function(a,b){this.cS(a,!0)
this.cW(a,!0)
this.eW(a,!0)},
e9:function(a,b){var s,r,q,p="removeWhere",o=a.aA(),n=a.aB(),m=a.x,l=a.ad(!0),k=a.y,j=a.z,i=a.Q
this.cY(new V.aX(o,n,m,l,k,j,new Y.b(i.a,i.b,i.c)),!1)
s=this.gu()
r=a.gu()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
o=H.z(s).h("F(1)").a(new V.eT())
if(!!s.fixed$length)H.d(P.an(p))
C.a.dn(s,o,!0)
o=H.z(r).h("F(1)").a(new V.eU())
if(!!r.fixed$length)H.d(P.an(p))
C.a.dn(r,o,!0)
for(o=t.j,o=T.kA(s,r,o,o),o=P.em([o.a,o.b],!1,t.z),o=new A.R(new H.Z(o,H.z(o).h("Z<1,l<B>>")),t.eX),o=o.gA(o);o.j();){q=o.b
if(q==null)q=H.d(P.am("No element"))
n=q.length
if(0>=n)return H.o(q,0)
m=q[0]
if(1>=n)return H.o(q,1)
m.e9(q[1],!0)}},
e8:function(a){return this.e9(a,!0)},
aU:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.w(p.aA());s.j();){r=s.gm()
q=r.d
m.push(new K.u(r.a,r.b,r.c,q*o))}p.cT(m,!0)
m=H.a([],n)
for(s=J.w(p.aB());s.j();){r=s.gm()
q=r.d
m.push(new K.u(r.a,r.b,r.c,q*o))}p.bO(m,!0)
n=H.a([],n)
for(m=J.w(p.ad(!0));m.j();){s=m.gm()
r=s.d
n.push(new K.u(s.a,s.b,s.c,r*o))}p.ey(n,!0)
p.eT(a,!0)},
dP:function(a){return this.aU(a,!0)},
aA:function(){var s=this.dy
return s==null?H.a([C.i],t.O):s},
ad:function(a){var s=a?this.fx:this.fr
return s==null||J.b6(s)?H.a([C.i],t.O):s},
aB:function(){return this.ad(!1)},
eE:function(a,b){this.Q=new Y.b(a.a,a.b,a.c)},
bN:function(a,b,c){var s,r,q,p,o=this
H.bx(b)
if(c){for(s=o.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
if(p instanceof V.B)p.bN(a,b,!0)}c=!0}o.z=b
if(a!=null)o.eE(a,!1)
if(b!==0){o.bO(o.aB(),c)
o.bO(o.aB(),c)}},
eD:function(a,b){return this.bN(a,b,!0)},
es:function(){var s,r,q,p,o,n,m,l=this.Q,k=l.a,j=l.b
l=l.c
s=this.Z(C.d)
r=H.a([],t.b)
for(q=[C.l,C.m,C.k],p=t.n,o=0;o<3;++o){n=this.Z(q[o]).v(0,s)
r.push(H.a([n.a,n.b,n.c],p))}m=new Y.b(k,j,l).aa(Z.Y(null,r).gej())
return new S.A(s.v(0,m),s.C(0,m),t.hd)},
cR:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.dx
r=a.length
q=H.a([],t.l)
for(r=T.x(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.c)(r),++o)q.push(C.d)
g.sU(f.a(q))
n=H.a([a,b,c,d],t.Q)
for(f=T.x(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.c)(f),++o){m=f[o]
l=C.a.n(n,m)
p=g.r
for(p=T.dM(T.x(J.y(p==null?H.d(H.f("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.c)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.d(H.f("points"))
J.hq(h,i.b,l[C.e.ae(i.a,l.length)])}}},
fB:function(a){var s,r,q,p,o,n,m=this,l=m.dx,k=[]
for(s=T.fI(l,1,0).fY(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
o=m.r
k.push(J.bG(o==null?H.d(H.f("points")):o).t(0,1-p).C(0,a.t(0,p)))}s=k.length
if(1>=s)return H.o(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.o(k,2)
n=r.a(k[2])
if(3>=s)return H.o(k,3)
k=r.a(k[3])
m.aj("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.e.ae(J.y(m.gp(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.b5(m.gp(m),k)}else{k=r.a(H.a([J.bG(m.gp(m)),o,n,k],s))
J.b5(m.gp(m),k)}return null},
cU:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=T.fI(this.dx,1,0).al(0)
r=t.i
q=Z.dU(T.hn(a,r))
p=Z.dU(T.iE(a,r))
r=H.a([],t.aM)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.c)(s),++n){m=s[n]
r.push(p.t(0,1-m).C(0,q.t(0,m)))}o=H.a([],t.Q)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.c)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.c)(h),++f){e=h[f]
d=J.af(e)
i.push(new Y.b(d.n(e,0),d.n(e,1),d.n(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.o(o,0)
l=o[0]
if(1>=r)return H.o(o,1)
k=o[1]
if(2>=r)return H.o(o,2)
i=o[2]
if(3>=r)return H.o(o,3)
this.cR(l,k,i,o[3])},
ca:function(a,b){var s=this.db,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
fL:function(a,b){var s
if(!this.ca(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.db+0.00001*Math.abs(s))return!1
return!0},
bD:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.el(a,new V.eO(l,C.e.ae(J.y(a),this.dx)),t.i)
l.a=P.j(s,!0,s.$ti.h("n.E"))
s=H.a([],t.dm)
for(r=T.x(J.y(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.c)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.C()
s.push(new S.bs(J.M(m,n+0),J.M(l.a,n+1),J.M(l.a,n+2),J.M(l.a,n+3),p))}return s},
dj:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.dx
r=T.x(a.length,s,s)
q=H.z(r)
q=P.j(new H.bf(r,q.h("F(1)").a(b),q.h("bf<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.X)
C.a.E(r,q)
p=H.a([],t.Q)
for(r=new A.R(H.a([r,q],t.eI),t.eN),r=r.gA(r),q=H.z(a),o=q.c,q=q.h("ar<1>");r.j();){n=r.b
if(n==null)n=H.d(P.am("No element"))
if(1>=n.length)return H.o(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.v()
if(typeof l!=="number")return H.bi(l)
if(m-l>=s){H.S(l)
H.S(m)
P.ci(l,m,a.length)
k=new H.ar(a,l,m,q)
k.bV(a,l,m,o)
p.push(k.T(0))}}return p},
cP:function(a){t.y.a(a)
return this.dj(a,new V.eQ(this,a))},
ex:function(a){t.y.a(a)
return this.dj(a,new V.eP(this,a))},
cr:function(a){var s=this,r=s.dx,q=V.hj(0,C.e.ao(J.y(s.gp(s)),r),a),p=q.a
return V.hd(J.hs(s.gp(s),r*p,r*(p+1)).T(0)).$1(q.b)},
di:function(a){var s=F.el(this.gp(this),new V.eK(this,a),t.i)
return P.j(s,!0,s.$ti.h("n.E"))},
ep:function(){var s,r=this
if(J.y(r.gp(r))===1)return r.gp(r)
s=t.eR
s=A.hA(P.j(new A.R(H.a([r.di(0),r.di(r.dx-1)],t.Q),s),!0,s.h("n.E")),t.i)
return P.j(s,!0,s.$ti.h("n.E"))},
bH:function(){var s,r,q,p=H.a([],t.l)
for(s=this.bJ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)C.a.E(p,s[q].ep())
return p},
dv:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.J.a(a2)
a0.fF(a2)
if(J.y(a0.gp(a0))===J.y(a2.gp(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.b6(n==null?H.d(H.f(a1)):n)){n=q.a(H.a([o.Z(C.d)],r))
m=o.r
J.b5(m==null?H.d(H.f(a1)):m,n)}n=o.r
if(C.e.ae(J.y(n==null?H.d(H.f(a1)):n),o.dx)===1){n=o.r
o.fB(J.bG(n==null?H.d(H.f(a1)):n))}}s=t.i
l=a0.cP(P.j(a0.gp(a0),!0,s))
k=a2.cP(P.j(a2.gp(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.dx
f=new V.eN(g)
for(s=T.x(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.c)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.a5(c)
m=J.a5(d)
b=Math.max(0,C.e.ao(n.gl(c)-m.gl(d),g))
a=Math.max(0,C.e.ao(m.gl(d)-n.gl(c),g))
d=a0.e5(b,d)
c=a0.e5(a,c)
C.a.E(i,d)
C.a.E(h,c)}a0.sU(q.a(i))
a2.sU(q.a(h))},
e5:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=T.x(this.dx*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)C.a.E(s,a8)
return s}o=this.bD(a8)
n=o.length
m=n+a7
s=t.X
r=H.a([],s)
for(q=T.x(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.c)(q),++p){k=q[p]
if(typeof k!=="number")return k.t()
r.push(C.c.ao(k*n,m))}q=H.a([],s)
for(l=T.x(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.c)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.b1(k),e=0;e<r.length;r.length===g||(0,H.c)(r),++e)h.push(f.F(k,r[e])?1:0)
q.push(T.hm(h,i))}d=H.a([],t.l)
for(s=new A.R(H.a([o,q],t.D),t.m),s=s.gA(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.j();){c=s.b
if(c==null)c=H.d(P.am(a6))
h=c.length
if(0>=h)return H.o(c,0)
b=i.a(c[0])
if(1>=h)return H.o(c,1)
a=T.fI(H.S(c[1])+1,1,0).al(0)
for(h=new A.R(H.a([a,T.hn(a,r)],q),l),h=h.gA(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.j();){a2=h.b
if(a2==null)a2=H.d(P.am(a6))
a3=P.em([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.o(a2,0)
a5=a2[0]
if(1>=a4)return H.o(a2,1)
C.a.E(d,V.fL(new H.Z(a3,H.z(a3).h("Z<1,b>")),a5,a2[1]))}}return d},
fF:function(a){var s,r,q,p,o,n,m,l,k=new V.eL(),j=new V.eM()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.a5(o)
l=J.a5(n)
if(m.gl(o)>l.gl(n))j.$3(p,a,T.bj(n,m.gl(o),r))
else if(l.gl(n)>m.gl(o))j.$3(p,this,T.bj(o,l.gl(n),r))}},
cN:function(){var s=null,r=this.Z(C.d),q=new V.cs(0.01,0.01,4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
q.a8(C.b,s,s)
q.ap(s,0,!1,C.b,!1,0.01,C.f,0,C.b,4,0.000001)
q.sU(t.y.a(H.a([r],t.l)))
q.e8(this)
return q},
cn:function(a,b,c){var s,r=this,q=t.J
q.a(a)
q.a(b)
r.sat(V.hk(a.aA(),b.aA(),c))
r.sag(V.hk(a.aB(),b.aB(),c))
r.saE(V.hk(a.ad(!0),b.ad(!0),c))
q=t.V
r.sd0(V.fH(a.x,b.x,c,q))
r.sdE(V.fH(a.y,b.y,c,q))
r.seL(V.fH(a.Q,b.Q,c,t.i))
r.scZ(V.fH(a.z,b.z,c,q))
s=new V.eS()
if(c===1){q=b.dy
r.sat(q!=null?s.$1(q):null)
q=b.fr
r.sag(q!=null?s.$1(q):null)
q=b.fx
r.saE(q!=null?s.$1(q):null)
r.sd0(b.x)
r.sdE(b.y)
q=b.Q
r.Q=new Y.b(q.a,q.b,q.c)
r.scZ(b.z)}},
cs:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.J.a(a)
if(b<=0&&c>=1){e.sU(t.y.a(P.j(a.gp(a),!0,t.i)))
return}s=t.y
r=a.bD(s.a(P.j(a.gp(a),!0,t.i)))
q=r.length
p=V.hj(0,q,b)
o=V.hj(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.sU(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.o(r,n)
j=J.dP(r[n])
j=s.a(V.fL(new H.Z(j,H.z(j).h("Z<1,b>")),m,k))
J.b5(e.gp(e),j)}else{if(n>>>0!==n||n>=j)return H.o(r,n)
j=J.dP(r[n])
j=s.a(V.fL(new H.Z(j,H.z(j).h("Z<1,b>")),m,1))
J.b5(e.gp(e),j)
for(j=n+1,P.ci(j,l,r.length),j=H.br(r,j,l,H.z(r).c),i=j.$ti,j=new H.a1(j,j.gl(j),i.h("a1<E.E>")),i=i.h("E.E"),h=t.z;j.j();){g=i.a(j.d)
g=P.em([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.Z(g,H.z(g).h("Z<1,b>")))
f=e.r
J.b5(f==null?H.d(H.f("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.o(r,l)
j=J.dP(r[l])
j=s.a(V.fL(new H.Z(j,H.z(j).h("Z<1,b>")),0,k))
J.b5(e.gp(e),j)}},
bJ:function(){var s,r,q,p,o=H.a([],t.U)
for(s=this.ac(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q){p=s[q]
if(p instanceof V.B)o.push(p)}return o},
sd0:function(a){this.x=H.bx(a)},
sdE:function(a){this.y=H.bx(a)},
scZ:function(a){this.z=H.bx(a)},
seL:function(a){this.Q=t.i.a(a)},
sat:function(a){this.dy=t.x.a(a)},
sag:function(a){this.fr=t.x.a(a)},
saE:function(a){this.fx=t.x.a(a)}}
V.T.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.U.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.V.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.eT.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:4}
V.eU.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:4}
V.eO.prototype={
$2:function(a,b){t.i.a(b)
return a<J.y(this.a.a)-this.b},
$S:12}
V.eQ.prototype={
$1:function(a){var s,r,q
H.S(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.o(s,r)
r=s[r]
if(a<0||a>=q)return H.o(s,a)
return!this.a.fL(r,s[a])},
$S:11}
V.eP.prototype={
$1:function(a){var s,r,q
H.S(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.o(s,r)
r=s[r]
if(a<0||a>=q)return H.o(s,a)
return!this.a.ca(r,s[a])},
$S:11}
V.eK.prototype={
$2:function(a,b){t.i.a(b)
return C.e.ae(a,this.a.dx)===this.b},
$S:12}
V.eN.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=T.x(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.c)(r),++p)s.push(C.a.gY(C.a.gY(a)))
return s}if(b<0)return H.o(a,b)
return a[b]},
$S:32}
V.eL.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.aA()
case"strokeColors":return b.aB()
case"backgroundStrokeColors":return b.ad(!1)
default:throw H.e(u.c+a)}},
$S:33}
V.eM.prototype={
$3:function(a,b,c){t.W.a(c)
switch(a){case"fillColors":b.sat(c)
break
case"strokeColors":b.sag(c)
break
case"backgroundStrokeColors":b.saE(c)
break
default:throw H.e(u.c+a)}},
$S:34}
V.eS.prototype={
$1:function(a){var s=t.G
return P.j(J.q(t.W.a(a),new V.eR(),s),!0,s)},
$S:35}
V.eR.prototype={
$1:function(a){return t.G.a(a).i()},
$S:3}
V.aX.prototype={}
V.aI.prototype={
d3:function(a){var s=a==null?H.a([],t.r):a
this.a_(t.a.a(s))},
i:function(){return V.js(this)}}
V.cs.prototype={
i:function(){return V.ju(this)}}
V.bI.prototype={
ga4:function(a){var s=this.d
return s==null?H.d(H.f("display")):s},
eK:function(a){this.d=a}}
Q.d_.prototype={
ga3:function(){var s=this.e
return s==null?H.d(H.f("ctx")):s},
aY:function(){var s=0,r=P.aN(t.V),q,p=this,o,n,m
var $async$aY=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.ad(C.a8.gfG(m).eh(new Q.ea(),t.V),$async$aY)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.aL(q,r)}})
return P.aM($async$aY,r)},
cu:function(a){var s,r,q=this,p=q.ga4(q).gK(),o=q.ga4(q).bc(a)
C.n.sck(q.ga3(),o.b_())
s=p.c
r=p.d
q.ga3().fillRect(0-s/2,0-r/2,p.c,p.d)},
he:function(a){var s,r,q,p,o,n,m,l=this,k="ctx",j=t.y.a(P.j(a.gp(a),!0,t.i)),i=l.ga4(l).gK().ei(a,j)
if(i.length===0)return
s=a.ex(i)
for(j=s.length,r=t.O,q=0;q<s.length;s.length===j||(0,H.c)(s),++q){l.hf(a,s[q])
l.dC(a,!0)
p=a.dy
if(p==null)p=H.a([C.i],r)
if(J.y(p)>1){o=l.e
if(o==null)o=H.d(H.f(k))
C.n.sck(o,l.dK(a,p))}else{o=l.d
if(o==null)o=H.d(H.f("display"))
n=a.dy
m=o.bc(J.M(n==null?H.a([C.i],r):n,0))
o=l.e
if(o==null)o=H.d(H.f(k))
C.n.sck(o,m.b_())}o=l.e;(o==null?H.d(H.f(k)):o).fill()
l.dC(a,!1)
o=l.e;(o==null?H.d(H.f(k)):o).closePath()}},
hf:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.y.a(b)
i.ga3().beginPath()
s=a.bD(b)
r=J.ab(b)
q=r.gX(b)
i.ga3().moveTo(q.a,q.b)
p=a.ca(r.gX(b),r.gY(b))
for(r=s.length,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
m=n.b
l=n.c
k=n.d
j=i.e
if(j==null)j=H.d(H.f("ctx"))
j.bezierCurveTo(m.a,m.b,l.a,l.b,k.a,k.b)}if(p)i.ga3().closePath()},
dK:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.W.a(b)
s=a.es()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.ga4(g).gK().ei(a,r)
r=g.ga3()
p=q.length
if(0>=p)return H.o(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.o(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.a5(b)
m=1/(o.gl(b)-1)
l=T.ft(m+1,0,m).al(0)
for(r=T.x(o.gl(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.c)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.d(H.f("display"))
h=i.bc(o.n(b,j))
p.addColorStop(C.a.n(l,j),h.b_())}return p},
dC:function(a,b){var s,r,q,p,o=this,n=b?a.y:a.x
if(n===0)return
s=a.ad(b)
r=o.ga4(o).gK().c
o.ga3().lineWidth=n*0.01*(r/14.222222222222221)
r=J.ab(s)
q=r.bk(s,new Q.e9())
if(r.gS(s)||q)return
if(r.gl(s)>1)C.n.sd_(o.ga3(),o.dK(a,s))
else{p=o.ga4(o).bc(J.ag(a.ad(b)))
C.n.sd_(o.ga3(),p.b_())}o.ga3().stroke()}}
Q.ea.prototype={
$1:function(a){return H.h7(a)},
$S:55}
Q.e9.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:37}
N.dh.prototype={
gaW:function(){var s=this.d
return s==null?H.d(H.f("mobjects")):s},
gK:function(){var s=this.f
return s==null?H.d(H.f("camera")):s},
ga4:function(a){var s=this.x
return s==null?H.d(H.f("display")):s},
f2:function(){var s,r,q,p=this,o=document,n=o.querySelector(".canvas-container")
n.toString
s=H.a([],t.db)
r=new O.cc(0)
r.bU(0)
o=o.createElement("canvas")
t.gA.a(o)
s=new B.cZ(o,n,s,C.d,C.d,r,C.d,C.d)
s.a=new Q.d_($.bD())
n.appendChild(o).toString
p.x=s
p.r=p.ga4(p).gbz()
s=p.ga4(p)
o=s.b=new R.e6(14.222222222222221,s)
n=s.d
C.L.shr(n,1280)
C.L.sh_(n,720)
r=s.gbz()
r.eO(s)
n=n.getContext("2d")
n.toString
r.e=n
o.d=o.c/1.7777777777777777
n=s.gbz()
r=o.c
q=o.d
n.ga3().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
s.gbz().cu(C.u)
p.f=o
new P.dE().f3(0)
p.sd4(t.a.a(H.a([],t.r)))
p.bA()},
bA:function(){var s=0,r=P.aN(t.z),q=1,p,o=[],n=this,m,l
var $async$bA=P.aP(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.ga4(n).c8()
q=3
s=6
return P.ad(n.ar(),$async$bA)
case 6:q=1
s=5
break
case 3:q=2
l=p
H.b4(l)
throw l
s=5
break
case 2:s=1
break
case 5:n.gK().ct(n.gaW())
n.ga4(n).hq()
return P.aL(null,r)
case 1:return P.aK(p,r)}})
return P.aM($async$bA,r)},
aH:function(a){var s,r,q
for(s=this.gaW(),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)s[q].cF(a)},
a_:function(a){t.a.a(a)
this.hh(a)
C.a.h3(this.gaW(),0,a)},
hi:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.j(b,!0,t.j)
C.a.E(s,r.gK().cb(b))
r.sd4(q.a(r.ew(r.gaW(),s)))},
hh:function(a){return this.hi(!0,a)},
ew:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new N.eE(s).$2(a,P.fZ(b,H.z(b).c))
return s},
bx:function(a){var s=0,r=P.aN(t.z),q=this,p,o,n,m
var $async$bx=P.aP(function(b,c){if(b===1)return P.aK(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.r
s=4
return P.ad((o==null?H.d(H.f("renderer")):o).aY(),$async$bx)
case 4:n=c
p+=n
o=a.a
a.aH(n)
a.aV(p/o)
q.aH(n)
o=q.f
o=(o==null?H.d(H.f("camera")):o).r.a;(o==null?H.d(H.f("renderer")):o).cu(C.u)
o=q.f
if(o==null)o=H.d(H.f("camera"))
m=q.d
o.ct(m==null?H.d(H.f("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.aL(null,r)}})
return P.aM($async$bx,r)},
aO:function(a,b){var s=0,r=P.aN(t.z),q=this,p,o
var $async$aO=P.aP(function(c,d){if(c===1)return P.aK(d,r)
while(true)switch(s){case 0:o=q.gK().cb(q.gaW())
b.aS()
p=b.r
if(!C.a.a9(o,p)){q.a_(t.a.a(H.a([p],t.r)))
C.a.E(o,p.ac())}s=2
return P.ad(q.bx(b),$async$aO)
case 2:b.cl()
b.aT(q)
q.aH(0)
return P.aL(null,r)}})
return P.aM($async$aO,r)},
bB:function(){var s=0,r=P.aN(t.z),q=this,p,o,n,m
var $async$bB=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.r
s=4
return P.ad((o==null?H.d(H.f("renderer")):o).aY(),$async$bB)
case 4:n=b
p+=n
q.aH(n)
o=q.f
o=(o==null?H.d(H.f("camera")):o).r.a;(o==null?H.d(H.f("renderer")):o).cu(C.u)
o=q.f
if(o==null)o=H.d(H.f("camera"))
m=q.d
o.ct(m==null?H.d(H.f("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.aL(null,r)}})
return P.aM($async$bB,r)},
bg:function(){var s=0,r=P.aN(t.z),q=this
var $async$bg=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return P.ad(q.bB(),$async$bg)
case 4:s=2
break
case 3:return P.aL(null,r)}})
return P.aM($async$bg,r)},
sd4:function(a){this.d=t.hh.a(a)}}
N.eE.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.c)(a),++q){p=a[q]
if(b.a9(0,p))continue
o=p.ac()
n=b.h7(0,P.fZ(o,H.z(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.d(H.f("submobjects")):o,n)}else C.a.w(r,p)}},
$S:38}
T.fO.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.fN.prototype={
$1:function(a){return H.S(a)/this.a*this.b},
$S:39}
T.fP.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("F(v,0)")}}
V.fE.prototype={
$1:function(a){return t.G.a(a).T(0)},
$S:9}
V.fF.prototype={
$1:function(a){return t.G.a(a).T(0)},
$S:9}
V.fG.prototype={
$1:function(a){var s
t.p.a(a)
s=J.af(a)
return new K.u(s.n(a,0),s.n(a,1),s.n(a,2),s.n(a,3))},
$S:41}
V.fv.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=T.dM(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.c)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.bi(m)
l.push(J.cS(n.b,Math.pow(q,p-m)*Math.pow(a,m)*X.ik(p,m,!0)))}return C.a.a6(l,new V.fu())},
$S:42}
V.fu.prototype={
$2:function(a,b){var s=t.i
return s.a(a).C(0,s.a(b))},
$S:43}
K.u.prototype={
i:function(){var s=this
return new K.u(s.a,s.b,s.c,s.d)},
T:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
b_:function(){var s=this
return"rgba("+C.c.ak(s.a*255)+", "+C.c.ak(s.b*255)+", "+C.c.ak(s.c*255)+", "+H.r(s.d)+")"},
k:function(a){return this.b_()}}
S.b9.prototype={
F:function(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof S.b9&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s},
t:function(a,b){var s=this.a,r=b.a,q=this.b,p=b.b
return new S.b9(s*r-q*p,s*p+q*r)}}
X.aj.prototype={
k:function(a){return this.b}}
X.a8.prototype={}
M.ef.prototype={
gaG:function(){var s=this.a
return s==null?H.d(H.f("eventListeners")):s},
f_:function(){var s,r,q=P.fY(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.J(0,C.a4[r],H.a([],s))
this.sfa(t.cH.a(q))},
aK:function(a,b,c){var s,r,q
H.fw(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.j(c.h("l<X<0>>").a(b),!0,c.h("X<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gY(s)
C.a.by(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
bj:function(a){var s,r=this
switch(a.a){case C.x:t.gt.a(a)
s=r.gaG().n(0,C.x)
s.toString
r.aK(a,s,t.e)
break
case C.o:t.N.a(a)
s=r.gaG().n(0,C.o)
s.toString
r.aK(a,s,t.e)
break
case C.p:t.I.a(a)
s=r.gaG().n(0,C.p)
s.toString
r.aK(a,s,t.e)
break
case C.q:t.u.a(a)
s=r.gaG().n(0,C.q)
s.toString
r.aK(a,s,t.e)
break
case C.C:t.fw.a(a)
s=r.gaG().n(0,C.C)
s.toString
r.aK(a,s,t.e)
break
case C.D:t.bf.a(a)
s=r.gaG().n(0,C.D)
s.toString
r.aK(a,s,t.e)
break}},
sfa:function(a){this.a=t.dC.a(a)}}
O.X.prototype={}
O.dd.prototype={}
O.cd.prototype={}
O.aC.prototype={}
O.aD.prototype={}
O.aB.prototype={}
O.cc.prototype={
bU:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
X.fx.prototype={
$2:function(a,b){return H.S(a)*H.S(b)},
$S:8}
X.fy.prototype={
$2:function(a,b){return H.S(a)*H.S(b)},
$S:8}
Z.ao.prototype={
gP:function(a){return this.a},
gD:function(a){var s=this.b
return s==null?H.d(H.f("shape")):s},
C:function(a,b){return this.aN(0,new Z.e_(typeof b=="number"?Z.dT(b,this.gD(this)):t.A.a(b)))},
t:function(a,b){return this.aN(0,new Z.e0(typeof b=="number"?Z.dT(b,this.gD(this)):t.A.a(b)))},
aN:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=T.dM(p.gP(p),t.p)
r=H.z(s)
q=r.h("L<1,l<k>>")
q=P.j(new H.L(s,r.h("l<k>(1)").a(new Z.dZ(b)),q),!0,q.h("E.E"))
return Z.Y(p.gD(p),q)},
an:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gP(this)
if(s>>>0!==s||s>=r.length)return H.o(r,s)
return J.M(r[s],a.b)},
fz:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gD(f).a
if(typeof e!=="number")return e.v()
s=f.gD(f).b
if(typeof s!=="number")return s.v()
r=H.a([],t.b)
for(q=T.x(f.gD(f).a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,H.c)(q),++m){l=q[m]
if(!J.aR(l,a)){k=H.a([],n)
j=f.b
j=T.x((j==null?H.d(H.f("shape")):j).a,0,1)
i=j.length
h=0
for(;h<j.length;j.length===i||(0,H.c)(j),++h){g=j[h]
if(!J.aR(g,b))k.push(J.M(C.a.n(o,l),g))}r.push(k)}}return Z.Y(new S.A(e-1,s-1,t.o),r)},
cL:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.aR(h.gD(h).a,2)){s=h.gP(h)
if(0>=s.length)return H.o(s,0)
r=J.M(s[0],0)
s=h.gP(h)
if(0>=s.length)return H.o(s,0)
q=J.M(s[0],1)
s=h.gP(h)
if(1>=s.length)return H.o(s,1)
p=J.M(s[1],0)
s=h.gP(h)
if(1>=s.length)return H.o(s,1)
return r*J.M(s[1],1)-q*p}s=h.gD(h).a
if(typeof s!=="number")return s.v()
o=h.gD(h).b
if(typeof o!=="number")return o.v()
n=new S.A(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=T.x(h.gD(h).a,0,1),m=s.length,l=h.a,k=0;k<s.length;s.length===m||(0,H.c)(s),++k){j=s[k]
if(typeof j!=="number")return j.ae()
i=C.c.ae(j,2)===0?1:-1
if(0>=l.length)return H.o(l,0)
o.push(i*Z.dT(J.M(l[0],j),n).t(0,h.fz(0,j)).cL())}return T.hm(o,t.V)},
eu:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b0.cL()===0)throw H.e("This matrix is not inversible")
s=b0.gD(b0).a
r=b0.gD(b0).b
q=b0.i()
p=Z.cY(s)
for(o=T.x(r,0,1),n=o.length,m=s-1,l=r-1,k=p.a,j=q.a,i=t.o,h=0;h<o.length;o.length===n||(0,H.c)(o),++h){g=o[h]
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
if(typeof a3!=="number")return a3.az()
b.J(a,a2,a3/a1)}for(a3=J.af(a0),a2=l;a2>=0;--a2){a4=a3.n(a0,a2)
if(typeof a4!=="number")return a4.az()
a3.J(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(e>=j.length)return H.o(j,e)
a5=j[e]
if(e>=k.length)return H.o(k,e)
a6=k[e]
a4=J.af(a5)
a1=a4.n(a5,g)
for(a7=a2;a7!==r;++a7){a8=a4.n(a5,a7)
a9=b.n(a,a7)
if(typeof a9!=="number")return a9.t()
if(typeof a8!=="number")return a8.v()
a4.J(a5,a7,a8-a9*a1)}for(a4=J.af(a6),a7=l;a7>0;--a7){a8=a4.n(a6,a7)
a9=a3.n(a0,a7)
if(typeof a9!=="number")return a9.t()
if(typeof a8!=="number")return a8.v()
a4.J(a6,a7,a8-a9*a1);--a7
a9=a4.n(a6,a7)
a8=a3.n(a0,a7)
if(typeof a8!=="number")return a8.t()
if(typeof a9!=="number")return a9.v()
a4.J(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.n(a6,0)
a9=a3.n(a0,0)
if(typeof a9!=="number")return a9.t()
if(typeof a8!=="number")return a8.v()
a4.J(a6,0,a8-a9*a1)}}}return p},
al:function(a){var s=this.gP(this),r=H.z(s),q=r.h("L<1,k>")
return P.j(new H.L(s,r.h("k(1)").a(new Z.dX(a)),q),!0,q.h("E.E"))},
gej:function(){return this.aN(0,new Z.e1(this))},
aa:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.gD(a0),a2=a0.gD(a0).b,a3=a5.gD(a5).b,a4=Z.dT(0,new S.A(a0.gD(a0).a,a5.gD(a5).b,t.o))
for(a1=T.x(a1.a,0,1),s=a1.length,r=a5.a,q=a0.a,p=a4.a,o=0;o<a1.length;a1.length===s||(0,H.c)(a1),++o){n=a1[o]
for(m=T.x(a3,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.c)(m),++k){j=m[k]
for(i=T.x(a2,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,H.c)(i),++g){f=i[g]
e=C.a.n(p,n)
d=J.af(e)
c=d.n(e,j)
b=J.M(C.a.n(q,n),f)
a=J.M(C.a.n(r,f),j)
if(typeof b!=="number")return b.t()
if(typeof a!=="number")return H.bi(a)
if(typeof c!=="number")return c.C()
d.J(e,j,c+b*a)}}}return a4},
i:function(){return this.fH(new Z.dW())},
fH:function(a){return this.aN(0,new Z.dV(t.ao.a(a)))},
fY:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gP(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)for(p=J.w(s[q]);p.j();)o.push(p.gm())
return o},
k:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.r(d.gD(d).a)+"x"+H.r(d.gD(d).b),b=H.a([],t.X)
for(s=d.gP(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.c)(s),++q)for(p=J.w(s[q]);p.j();)b.push(C.c.cD(p.gm(),6).length)
o=C.a.bv(b,6,C.R,t.S)
for(b=d.gP(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.c)(b),++q){m=b[q]
n+="      "
for(l=J.w(m);l.j();){k=l.gm()
j=k<0?"-":" "
k=Math.abs(k)
i=C.c.cD(k,6)
h=H.a([],p)
for(i=T.x(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.c)(i),++f)h.push(" ")
e=C.a.h8(h)
n=n+j+C.c.cD(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sf6:function(a){this.b=t.gv.a(a)}}
Z.e_.prototype={
$2:function(a,b){return a+this.a.an(t.o.a(b))},
$S:1}
Z.e0.prototype={
$2:function(a,b){return a*this.a.an(t.o.a(b))},
$S:1}
Z.dZ.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=T.dM(a.b,t.V)
r=H.z(s)
q=r.h("L<1,k>")
return P.j(new H.L(s,r.h("k(1)").a(new Z.dY(this.a,a)),q),!0,q.h("E.E"))},
$S:45}
Z.dY.prototype={
$1:function(a){t.w.a(a)
return this.a.$2(a.b,new S.A(this.b.a,a.a,t.o))},
$S:46}
Z.dX.prototype={
$1:function(a){return J.M(t.p.a(a),this.a)},
$S:47}
Z.e1.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.an(new S.A(b.b,b.a,s))},
$S:1}
Z.dW.prototype={
$1:function(a){return a},
$S:48}
Z.dV.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
Z.fM.prototype={
$2:function(a,b){var s=t.A
return s.a(a).aa(s.a(b))},
$S:49}
Y.b.prototype={
F:function(a,b){if(b==null)return!1
return b instanceof Y.b&&this.a===b.a&&this.b===b.b&&this.c===b.c},
C:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a+b,s.b+b,s.c+b)
else if(b instanceof Y.b)return new Y.b(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.e("Vector3 only support addition by num or Vector3")},
v:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a-b,s.b-b,s.c-b)
else if(b instanceof Y.b)return new Y.b(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.e("Vector3 only support subtraction by num or Vector3")},
t:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a*b,s.b*b,s.c*b)
else if(b instanceof Y.b)return new Y.b(s.a*b.a,s.b*b.b,s.c*b.c)
else throw H.e("Vector3 only support multiplication by num or Vector3")},
az:function(a,b){return new Y.b(this.a/b,this.b/b,this.c/b)},
a1:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
b3:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.e("No component at index "+a+" on a vector3")}},
ho:function(){var s=t.n
s=Z.Y(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
cG:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new Y.b(s,r,c==null?this.c:c)},
en:function(a){return this.cG(null,null,a)},
hv:function(a){return this.cG(a,null,null)},
hw:function(a){return this.cG(null,a,null)},
hu:function(a,b){if(a===0)return this.hv(b)
else if(a===1)return this.hw(b)
else if(a===2)return this.en(b)
else throw H.e("Cannot index a vector3 with index="+a)},
aa:function(a){var s=Z.cY(3).aN(0,new Y.eV(a)).aa(this.ho()),r=t.o
return new Y.b(s.an(new S.A(0,0,r)),s.an(new S.A(1,0,r)),s.an(new S.A(2,0,r)))},
dO:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aR:function(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
k:function(a){return"vec3("+H.r(this.a)+", "+H.r(this.b)+", "+H.r(this.c)+")"}}
Y.eV.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gD(r).a
if(typeof s!=="number")return s.bC()
if(typeof q!=="number")return H.bi(q)
if(s<q){s=b.b
q=r.gD(r).b
if(typeof s!=="number")return s.bC()
if(typeof q!=="number")return H.bi(q)
q=s>=q
s=q}else s=!0
return s?a:r.an(b)},
$S:1}
S.A.prototype={
k:function(a){return"["+H.r(this.a)+", "+H.r(this.b)+"]"},
F:function(a,b){if(b==null)return!1
return b instanceof S.A&&J.aR(b.a,this.a)&&J.aR(b.b,this.b)},
gq:function(a){var s=J.bE(this.a),r=J.bE(this.b)
return A.h8(A.b0(A.b0(0,C.e.gq(s)),C.e.gq(r)))}}
S.aW.prototype={
k:function(a){return"["+this.a.k(0)+", "+H.r(this.b)+", "+H.r(this.c)+"]"},
F:function(a,b){if(b==null)return!1
return b instanceof S.aW&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gq:function(a){var s=H.aw(this.a),r=C.c.gq(this.b),q=C.c.gq(this.c)
return A.h8(A.b0(A.b0(A.b0(0,C.e.gq(s)),C.e.gq(r)),C.e.gq(q)))}}
S.bs.prototype={
T:function(a){var s=this
return P.em([s.a,s.b,s.c,s.d],!1,t.z)},
k:function(a){var s=this
return"["+s.a.k(0)+", "+s.b.k(0)+", "+s.c.k(0)+", "+s.d.k(0)+"]"},
F:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.bs&&b.a.F(0,s.a)&&b.b.F(0,s.b)&&b.c.F(0,s.c)&&b.d.F(0,s.d)},
gq:function(a){var s=this,r=H.aw(s.a),q=H.aw(s.b),p=H.aw(s.c),o=H.aw(s.d)
return A.h8(A.b0(A.b0(A.b0(A.b0(0,C.e.gq(r)),C.e.gq(q)),C.e.gq(p)),C.e.gq(o)))}}
Z.dc.prototype={
gcE:function(){var s=this.y
return s==null?H.d(H.f("transformationMatrix")):s},
gbw:function(){var s=this.z
return s==null?H.d(H.f("plane")):s},
ga5:function(){var s=this.ch
return s==null?H.d(H.f("originalPlane")):s},
gau:function(){var s=this.cx
return s==null?H.d(H.f("i")):s},
gav:function(){var s=this.cy
return s==null?H.d(H.f("j")):s},
gbe:function(){var s=this.dy
return s==null?H.d(H.f("arrowI")):s},
gbf:function(){var s=this.fr
return s==null?H.d(H.f("arrowJ")):s},
ar:function(){var s=0,r=P.aN(t.z),q=this,p,o
var $async$ar=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:q.y=Z.cY(2)
s=2
return P.ad(q.bi(),$async$ar)
case 2:s=3
return P.ad(q.bh(),$async$ar)
case 3:p=t.n
o=t.b
s=4
return P.ad(q.b0(H.a([H.a([0,-1],p),H.a([1,0],p)],o)),$async$ar)
case 4:s=5
return P.ad(q.b0(H.a([H.a([1,0.5],p),H.a([0,1],p)],o)),$async$ar)
case 5:q.ha()
s=6
return P.ad(q.bg(),$async$ar)
case 6:return P.aL(null,r)}})
return P.aM($async$ar,r)},
bi:function(){var s=0,r=P.aN(t.z),q=this,p,o,n,m,l,k,j
var $async$bi=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:m=Math.max(7.111111111111111,4)
l=-m*1.5
k=m*1.5
j=new M.cf(C.r.ai(C.A),C.j.ai(C.j),C.I.ai(C.z),C.a7,null,1,1,1,null,null,C.d,C.r,C.j,C.j,l,k,l,k,4,0,0,C.f,!1,0.01,!1,0.000001,4,null,null,null,C.b,null,null,null,null,null)
j.a8(C.b,null,null)
j.ap(null,0,!1,null,!1,0.01,C.f,0,null,4,0.000001)
j.d3(null)
j.eZ(C.r,C.d,C.j,k,l,C.j,k,l)
j.cy=!1
j.h0()
j.eF(1)
q.ch=j
q.z=M.eA(q.ga5())
j=H.a([],t.C)
for(l=q.gbw().ac(),k=l.length,p=0;p<l.length;l.length===k||(0,H.c)(l),++p){o=l[p]
n=o.r
if(J.bF(n==null?H.d(H.f("points")):n))j.push(M.hN(o))}s=2
return P.ad(q.aO(0,G.fR(j,0.01)),$async$bi)
case 2:return P.aL(null,r)}})
return P.aM($async$bi,r)},
bh:function(){var s=0,r=P.aN(t.z),q=this,p,o,n,m
var $async$bh=P.aP(function(a,b){if(a===1)return P.aK(b,r)
while(true)switch(s){case 0:m=N.hy(q.ga5().aF(C.l))
m.bM(C.v)
q.db=m
m=N.hy(q.ga5().aF(C.m))
m.bM(C.w)
q.dx=m
p=q.ga5().aF(C.d)
m=q.db
q.cx=N.bY(m==null?H.d(H.f("originalI")):m)
m=q.dx
q.cy=N.bY(m==null?H.d(H.f("originalJ")):m)
m=N.bM(0,q.gau().cO(),p)
m.a2(C.v)
q.dy=m
m=N.bM(0,q.gav().cO(),p)
m.a2(C.w)
q.fr=m
q.a_(H.a([q.gau(),q.gav(),q.gbe(),q.gbf()],t.r))
m=H.a([],t.C)
for(o=[q.gau(),q.gav(),q.gbe(),q.gbf()],n=0;n<4;++n)m.push(M.hN(o[n]))
s=2
return P.ad(q.aO(0,G.fR(m,0.1)),$async$bh)
case 2:return P.aL(null,r)}})
return P.aM($async$bh,r)},
b0:function(a){return this.hp(t.gj.a(a))},
hp:function(a){var s=0,r=P.aN(t.z),q=this,p,o,n,m,l,k,j,i,h
var $async$b0=P.aP(function(b,c){if(b===1)return P.aK(c,r)
while(true)switch(s){case 0:i=Z.Y(null,a)
h=M.eA(q.gbw())
h.dA(i)
q.y=i.aa(q.gcE())
p=q.ga5().aF(C.l).aa(q.gcE())
o=q.ga5().aF(C.m).aa(q.gcE())
n=N.bY(q.gau())
n.aX(p)
m=N.bY(q.gav())
m.aX(o)
l=q.ga5().aF(C.d)
k=N.bM(0,p,l)
k.a2(C.v)
j=N.bM(0,o,l)
j.a2(C.w)
s=2
return P.ad(q.aO(0,G.fR(t.co.a(H.a([G.dr(q.gau(),n),G.dr(q.gav(),m),G.dr(q.gbe(),k),G.dr(q.gbf(),j),G.dr(q.gbw(),h)],t.C)),0)),$async$b0)
case 2:return P.aL(null,r)}})
return P.aM($async$b0,r)},
ha:function(){var s,r=this
r.a_(t.a.a(H.a([R.hz(r.gau()),R.hz(r.gav())],t.r)))
s=new Z.eo(r)
r.gau().du(s)
r.gav().du(s)}}
Z.eo.prototype={
$2:function(a,b){var s,r,q,p,o,n,m,l
t.j.a(a)
H.bx(b)
s=this.a
r=s.ga5().eb(s.gau().Z(C.d))
q=s.ga5().eb(s.gav().Z(C.d))
p=M.eA(s.ga5())
o=t.n
p.dA(Z.Y(null,H.a([H.a([r.a,q.a],o),H.a([r.b,q.b],o)],t.b)))
n=s.ga5().aF(C.d)
m=N.bM(0,r,n)
m.a2(C.v)
l=N.bM(0,q,n)
l.a2(C.w)
s.gbw().c7(p)
s.gbe().c7(m)
s.gbf().c7(l)
return a},
$S:50};(function aliases(){var s=J.al.prototype
s.eR=s.k
s=J.bb.prototype
s.eS=s.k
s=P.C.prototype
s.d1=s.k
s=X.a6.prototype
s.eP=s.aS
s.eQ=s.aT
s=M.p.prototype
s.eV=s.b6
s.eU=s.aZ
s.eW=s.aI
s.eT=s.aU
s.bT=s.N
s.bS=s.M
s=V.B.prototype
s.eX=s.aI
s=V.bI.prototype
s.eO=s.eK})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u
s(P,"ki","jw",6)
s(P,"kj","jx",6)
s(P,"kk","jy",6)
r(P,"ij","kb",0)
q(P,"kB",2,null,["$1$2","$2"],["iu",function(a,b){return P.iu(a,b,t.H)}],52,0)
q(P,"is",2,null,["$1$2","$2"],["it",function(a,b){return P.it(a,b,t.H)}],53,0)
p(M.p.prototype,"gev","am",24)
q(B,"iw",3,null,["$3"],["kG"],54,0)
q(M,"iy",1,null,["$3$inflection$pauseRatio","$1"],["ir",function(a){return M.ir(a,null,null)}],10,0)
q(M,"iz",1,null,["$3$inflection$pauseRatio","$1"],["iB",function(a){return M.iB(a,null,null)}],10,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.fW,J.al,J.bK,P.n,H.bU,P.H,H.ah,H.a1,P.I,H.c1,H.eH,H.ex,H.c2,H.cB,P.bo,H.ek,H.c8,H.da,H.fi,H.aq,H.dC,H.dI,P.fl,P.dx,P.bv,P.bw,P.bP,P.dz,P.bg,P.P,P.dy,P.co,P.cp,P.dG,P.cH,P.cJ,P.dD,P.bh,P.a2,P.cl,P.cn,P.f2,P.eg,P.O,P.dH,P.dm,W.fT,P.dE,P.bd,A.cz,X.a6,R.e6,K.bH,M.p,M.W,V.aX,N.dp,V.bI,N.dh,K.u,S.b9,X.aj,X.a8,M.ef,O.X,O.cc,Z.ao,Y.b,S.A,S.aW,S.bs])
q(J.al,[J.d8,J.bn,J.bb,J.t,J.aT,J.aA,W.a_,W.bT,W.eb,W.bW,W.i])
q(J.bb,[J.df,J.ax,J.aU])
r(J.ej,J.t)
q(J.aT,[J.c4,J.d9])
q(P.n,[H.aY,H.G,H.bc,H.bf,H.aG,P.c3])
q(H.aY,[H.b8,H.cI])
r(H.cw,H.b8)
r(H.cu,H.cI)
r(H.Z,H.cu)
q(P.H,[H.c6,P.ds,H.db,H.du,H.dg,P.bO,H.dB,P.de,P.ay,P.dv,P.dt,P.bq,P.d0,P.d2])
q(H.ah,[H.fK,H.d6,H.dn,H.fA,H.fB,H.fC,P.eY,P.eX,P.eZ,P.f_,P.fm,P.fo,P.fp,P.fs,P.f3,P.fb,P.f7,P.f8,P.f9,P.f5,P.fa,P.f4,P.fe,P.ff,P.fd,P.fc,P.eF,P.eG,P.fr,P.fj,P.fk,P.en,W.eW,W.f1,A.eh,R.e7,R.e8,K.dQ,K.dR,K.dS,M.ey,M.ez,M.e4,R.ec,R.ed,R.ee,M.ev,M.eu,M.et,M.ew,M.ep,M.eq,M.er,M.es,V.T,V.U,V.V,V.eT,V.eU,V.eO,V.eQ,V.eP,V.eK,V.eN,V.eL,V.eM,V.eS,V.eR,Q.ea,Q.e9,N.eE,T.fO,T.fN,T.fP,V.fE,V.fF,V.fG,V.fv,V.fu,X.fx,X.fy,Z.e_,Z.e0,Z.dZ,Z.dY,Z.dX,Z.e1,Z.dW,Z.dV,Z.fM,Y.eV,Z.eo])
q(H.G,[H.E,H.c0,H.c7])
q(H.E,[H.ar,H.L,H.aF])
r(H.c_,H.bc)
q(P.I,[H.cb,H.ct,H.cm])
r(H.bl,H.aG)
r(H.aS,H.d6)
r(H.ce,P.ds)
q(H.dn,[H.dl,H.bk])
r(H.dw,P.bO)
r(P.ca,P.bo)
r(H.c5,P.ca)
r(H.cE,H.dB)
q(P.c3,[P.cD,A.R])
r(P.cC,P.dz)
r(P.dF,P.cH)
r(P.cA,P.cJ)
r(P.aJ,P.cA)
q(P.ay,[P.ch,P.d5])
q(W.a_,[W.a9,W.bt])
q(W.a9,[W.h,W.av])
r(W.m,W.h)
q(W.m,[W.cV,W.cX,W.b7,W.d4,W.di])
r(W.au,W.i)
r(W.ac,W.au)
r(W.cv,W.bW)
r(W.cx,P.co)
r(W.dA,W.cx)
r(W.cy,P.cp)
q(X.a6,[G.cW,M.dk,G.dq])
r(M.dj,M.dk)
r(K.cU,K.bH)
r(B.cZ,K.cU)
q(M.p,[V.B,R.d7,M.bm])
q(V.B,[N.at,V.aI,N.cg,V.cs])
q(N.at,[N.N,N.bJ])
q(N.N,[M.bp,N.bL])
r(M.d1,V.aI)
r(M.bQ,M.d1)
r(M.cf,M.bQ)
r(N.cq,V.aX)
r(N.bV,N.bJ)
r(N.bX,N.bV)
r(N.cj,N.cg)
r(N.cr,N.cj)
r(N.bN,N.cr)
r(R.bZ,R.d7)
r(Q.d_,V.bI)
r(O.dd,X.a8)
q(O.dd,[O.cd,O.aC,O.aD,O.aB])
r(Z.dc,N.dh)
s(H.cI,P.a2)
s(P.cJ,P.cl)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{v:"int",k:"double",Q:"num",aa:"String",F:"bool",O:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","k(k,A<v,v>)","b(b)","u(u)","F(p)","~(ac)","~(~())","O()","v(v,v)","l<k>(u)","k(k{inflection:k?,pauseRatio:k?})","F(v)","F(v,b)","O(@)","N(N)","~(i)","l<p>(p)","F(b)","ak<O>()","~(Q)","W(W,W)","F(aB)","F(aC)","F(aD)","aa()","@(@,aa)","@(aa)","O(@,aV)","k(b)","~(C?,C?)","P<@>(@)","O(C,aV)","l<b>(l<l<b>>,@)","l<u>(aa,B)","~(aa,B,l<u>)","l<u>(l<u>)","~(v,@)","F(u)","~(l<p>,ck<p>)","k(v)","~(@)","u(l<k>)","b(k)","b(b,b)","@(@)","l<k>(A<v,l<k>>)","k(A<v,k>)","k(l<k>)","k(k)","ao(ao,ao)","p(p,k)","O(~())","0^(0^,0^)<Q>","0^(0^,0^)<Q>","l<b>(l<b>,l<b>,k)","k(Q)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.jM(v.typeUniverse,JSON.parse('{"df":"bb","ax":"bb","aU":"bb","kM":"i","kT":"i","kL":"h","kU":"h","l1":"h","kN":"m","kZ":"m","kV":"a9","kR":"a9","l_":"ac","kP":"au","kO":"av","l2":"av","d8":{"F":[]},"bn":{"O":[]},"t":{"l":["1"],"G":["1"],"n":["1"]},"ej":{"t":["1"],"l":["1"],"G":["1"],"n":["1"]},"bK":{"I":["1"]},"aT":{"k":[],"Q":[]},"c4":{"k":[],"v":[],"Q":[]},"d9":{"k":[],"Q":[]},"aA":{"aa":[],"eB":[]},"G":{"n":["1"]},"aY":{"n":["2"]},"bU":{"I":["2"]},"b8":{"aY":["1","2"],"n":["2"],"n.E":"2"},"cw":{"b8":["1","2"],"aY":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"cu":{"a2":["2"],"l":["2"],"aY":["1","2"],"G":["2"],"n":["2"]},"Z":{"cu":["1","2"],"a2":["2"],"l":["2"],"aY":["1","2"],"G":["2"],"n":["2"],"n.E":"2","a2.E":"2"},"c6":{"H":[]},"E":{"G":["1"],"n":["1"]},"ar":{"E":["1"],"G":["1"],"n":["1"],"E.E":"1","n.E":"1"},"a1":{"I":["1"]},"bc":{"n":["2"],"n.E":"2"},"c_":{"bc":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"cb":{"I":["2"]},"L":{"E":["2"],"G":["2"],"n":["2"],"E.E":"2","n.E":"2"},"bf":{"n":["1"],"n.E":"1"},"ct":{"I":["1"]},"aG":{"n":["1"],"n.E":"1"},"bl":{"aG":["1"],"G":["1"],"n":["1"],"n.E":"1"},"cm":{"I":["1"]},"c0":{"G":["1"],"n":["1"],"n.E":"1"},"c1":{"I":["1"]},"aF":{"E":["1"],"G":["1"],"n":["1"],"E.E":"1","n.E":"1"},"d6":{"ah":[],"ba":[]},"aS":{"ah":[],"ba":[]},"ce":{"H":[]},"db":{"H":[]},"du":{"H":[]},"cB":{"aV":[]},"ah":{"ba":[]},"dn":{"ah":[],"ba":[]},"dl":{"ah":[],"ba":[]},"bk":{"ah":[],"ba":[]},"dg":{"H":[]},"dw":{"H":[]},"c5":{"bo":["1","2"],"c9":["1","2"]},"c7":{"G":["1"],"n":["1"],"n.E":"1"},"c8":{"I":["1"]},"da":{"eB":[]},"dB":{"H":[]},"cE":{"H":[]},"P":{"ak":["1"]},"bw":{"I":["1"]},"cD":{"n":["1"],"n.E":"1"},"bP":{"H":[]},"cC":{"dz":["1"]},"cH":{"hU":[]},"dF":{"cH":[],"hU":[]},"aJ":{"cl":["1"],"ck":["1"],"G":["1"],"n":["1"]},"bh":{"I":["1"]},"c3":{"n":["1"]},"ca":{"bo":["1","2"],"c9":["1","2"]},"bo":{"c9":["1","2"]},"cA":{"cl":["1"],"ck":["1"],"G":["1"],"n":["1"]},"k":{"Q":[]},"v":{"Q":[]},"l":{"G":["1"],"n":["1"]},"ck":{"G":["1"],"n":["1"]},"aa":{"eB":[]},"bO":{"H":[]},"ds":{"H":[]},"de":{"H":[]},"ay":{"H":[]},"ch":{"H":[]},"d5":{"H":[]},"dv":{"H":[]},"dt":{"H":[]},"bq":{"H":[]},"d0":{"H":[]},"cn":{"H":[]},"d2":{"H":[]},"dH":{"aV":[]},"ac":{"i":[]},"au":{"i":[]},"m":{"h":[],"a_":[]},"cV":{"h":[],"a_":[]},"cX":{"h":[],"a_":[]},"b7":{"h":[],"a_":[]},"av":{"a_":[]},"bW":{"h0":["Q"]},"h":{"a_":[]},"d4":{"h":[],"a_":[]},"a9":{"a_":[]},"di":{"h":[],"a_":[]},"bt":{"a_":[]},"cv":{"h0":["Q"]},"cx":{"co":["1"]},"dA":{"cx":["1"],"co":["1"]},"cy":{"cp":["1"]},"dE":{"jm":[]},"R":{"n":["l<1>"],"n.E":"l<1>"},"cz":{"I":["l<1>"]},"cW":{"a6":[]},"dk":{"a6":[]},"dj":{"a6":[]},"dq":{"a6":[]},"cU":{"bH":[]},"cZ":{"bH":[]},"bp":{"N":[],"at":[],"B":[],"p":[]},"d1":{"aI":[],"B":[],"p":[]},"bQ":{"aI":[],"B":[],"p":[]},"cf":{"aI":[],"B":[],"p":[]},"at":{"B":[],"p":[]},"N":{"at":[],"B":[],"p":[]},"cq":{"aX":[]},"bJ":{"at":[],"B":[],"p":[]},"bV":{"at":[],"B":[],"p":[]},"bX":{"at":[],"B":[],"p":[]},"bL":{"N":[],"at":[],"B":[],"p":[]},"cg":{"B":[],"p":[]},"cj":{"B":[],"p":[]},"cr":{"B":[],"p":[]},"bN":{"B":[],"p":[]},"d7":{"p":[]},"bZ":{"p":[]},"bm":{"p":[]},"B":{"p":[]},"aI":{"B":[],"p":[]},"cs":{"B":[],"p":[]},"d_":{"bI":[]},"dd":{"a8":[]},"aC":{"a8":[]},"aD":{"a8":[]},"aB":{"a8":[]},"cd":{"a8":[]},"dc":{"dh":[]}}'))
H.jL(v.typeUniverse,JSON.parse('{"cI":2,"c3":1,"ca":2,"cA":1,"cJ":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bC
return{dq:s("@<v>"),A:s("ao"),t:s("bP"),dK:s("W"),gA:s("b7"),G:s("u"),R:s("G<@>"),bU:s("H"),aD:s("i"),gc:s("X<a8>"),gl:s("X<aB>"),c3:s("X<aC>"),eL:s("X<aD>"),en:s("aj"),e:s("a8"),b8:s("ba"),v:s("ak<@>"),fh:s("bm"),bL:s("aS<k>"),h:s("R<p>"),m:s("R<C>"),eX:s("R<B>"),eR:s("R<b>"),ca:s("R<k>"),eN:s("R<v>"),hf:s("n<@>"),C:s("t<a6>"),aM:s("t<ao>"),f_:s("t<W>"),O:s("t<u>"),bN:s("t<b9>"),aE:s("t<X<a8>>"),L:s("t<N>"),gL:s("t<l<N>>"),Z:s("t<l<p>>"),D:s("t<l<C>>"),Q:s("t<l<b>>"),b:s("t<l<k>>"),eI:s("t<l<v>>"),r:s("t<p>"),db:s("t<cp<@>>"),s:s("t<aa>"),fZ:s("t<aW<a6,k,k>>"),dm:s("t<bs<b,b,b,b>>"),U:s("t<B>"),l:s("t<b>"),n:s("t<k>"),gn:s("t<@>"),X:s("t<v>"),eM:s("t<p(p,k)>"),T:s("bn"),cj:s("aU"),fw:s("kX"),bf:s("kY"),F:s("N"),co:s("l<a6>"),W:s("l<u>"),gF:s("l<X<a8>>"),ds:s("l<N>"),dF:s("l<l<b>>"),gj:s("l<l<k>>"),a:s("l<p>"),gp:s("l<aW<a6,k,k>>"),y:s("l<b>"),p:s("l<k>"),aH:s("l<@>"),cH:s("c9<aj,l<X<a8>>>"),j:s("p"),he:s("p(p,k)"),u:s("aB"),E:s("ac"),gt:s("cd"),N:s("aC"),I:s("aD"),P:s("O"),f4:s("bp"),K:s("C"),q:s("bd<Q>"),eU:s("h0<Q>"),bA:s("ck<p>"),k:s("aV"),aw:s("aa"),e3:s("ar<b>"),hd:s("A<b,b>"),w:s("A<v,k>"),o:s("A<v,v>"),fz:s("A<v,l<k>>"),cL:s("aW<a6,k,k>"),bl:s("bs<b,b,b,b>"),ak:s("ax"),J:s("B"),i:s("b"),cD:s("b(b)"),do:s("dA<ac>"),ck:s("P<O>"),c:s("P<@>"),fJ:s("P<v>"),dL:s("P<Q>"),g4:s("cC<Q>"),cJ:s("F"),al:s("F(C)"),fT:s("F(v)"),V:s("k"),fA:s("k(k,A<v,v>)"),ao:s("k(k)"),z:s("@"),fO:s("@()"),bI:s("@(C)"),ag:s("@(C,aV)"),S:s("v"),cF:s("0&*"),_:s("C*"),g7:s("X<aB>?"),em:s("X<aC>?"),ga:s("X<aD>?"),eH:s("ak<O>?"),x:s("l<u>?"),f:s("l<N>?"),hh:s("l<p>?"),dh:s("l<aW<a6,k,k>>?"),bG:s("l<b>?"),b5:s("l<b>(l<b>,l<b>,k)?"),cI:s("l<p(p,k)>?"),dC:s("c9<aj,l<X<a8>>>?"),Y:s("C?"),gv:s("A<v,v>?"),d:s("bg<@,@>?"),g:s("dD?"),B:s("@(i)?"),g5:s("~()?"),H:s("Q"),aT:s("~"),M:s("~()"),c4:s("~(Q)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.L=W.b7.prototype
C.n=W.bT.prototype
C.a0=J.al.prototype
C.a=J.t.prototype
C.e=J.c4.prototype
C.a1=J.bn.prototype
C.c=J.aT.prototype
C.N=J.aA.prototype
C.a2=J.aU.prototype
C.P=J.df.prototype
C.G=J.ax.prototype
C.a8=W.bt.prototype
C.H=new Y.b(-1,0,0)
C.z=new M.W(null,null,null,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b=new K.u(1,1,1,1)
C.Q=new Y.b(1,-1,0)
C.r=new M.W(C.b,!1,null,C.Q,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
C.M=new K.u(0.73333,0.73333,0.73333,1)
C.y=new Y.b(0,-1,0)
C.a3=H.a(s([0]),t.n)
C.A=new M.W(C.M,!0,!1,C.y,1,!0,0.1,1,null,C.a3,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.j=new M.W(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.I=new M.W(null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.t=new H.aS(P.is(),t.bL)
C.R=new H.aS(P.is(),H.bC("aS<v>"))
C.B=new H.aS(P.kB(),t.bL)
C.S=new H.c1(H.bC("c1<0&>"))
C.J=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.T=function() {
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
C.Y=function(getTagFallback) {
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
C.U=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.V=function(hooks) {
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
C.X=function(hooks) {
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
C.W=function(hooks) {
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

C.h=new P.dF()
C.Z=new P.dH()
C.i=new K.u(0,0,0,0)
C.u=new K.u(0,0,0,1)
C.v=new K.u(0.98824,0.38431,0.33333,1)
C.w=new K.u(0.51373,0.75686,0.40392,1)
C.x=new X.aj("EventType.mouseMovedEvent")
C.o=new X.aj("EventType.mousePressedEvent")
C.p=new X.aj("EventType.mouseReleasedEvent")
C.q=new X.aj("EventType.mouseDraggedEvent")
C.C=new X.aj("EventType.keyPressedEvent")
C.D=new X.aj("EventType.keyReleasedEvent")
C.a4=H.a(s([C.x,C.o,C.p,C.q,C.C,C.D]),H.bC("t<aj>"))
C.a6=H.a(s([]),t.r)
C.E=new N.dp("TipSide.Start")
C.F=new N.dp("TipSide.End")
C.O=H.a(s([]),t.O)
C.a_=new K.u(0.16078,0.67059,0.79216,1)
C.a5=H.a(s([C.a_]),t.O)
C.d=new Y.b(0,0,0)
C.a7=new V.aX(C.O,C.a5,1,C.O,0,0,C.d)
C.k=new Y.b(0,0,1)
C.m=new Y.b(0,1,0)
C.l=new Y.b(1,0,0)
C.f=new Y.b(1,1,0)
C.a9=new P.bv(null,2)})();(function staticFields(){$.fg=null
$.az=0
$.bS=null
$.hv=null
$.io=null
$.ii=null
$.ix=null
$.fz=null
$.fD=null
$.hi=null
$.by=null
$.cM=null
$.cN=null
$.ha=!1
$.J=C.h
$.ae=H.a([],H.bC("t<C>"))
$.dL=P.fY(t.S,H.bC("c9<v,v>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"kQ","iG",function(){return H.kq("_$dart_dartClosure")})
s($,"lp","hp",function(){return C.h.eg(new H.fK(),H.bC("ak<O>"))})
s($,"l3","iH",function(){return H.aH(H.eI({
toString:function(){return"$receiver$"}}))})
s($,"l4","iI",function(){return H.aH(H.eI({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"l5","iJ",function(){return H.aH(H.eI(null))})
s($,"l6","iK",function(){return H.aH(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"l9","iN",function(){return H.aH(H.eI(void 0))})
s($,"la","iO",function(){return H.aH(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"l8","iM",function(){return H.aH(H.hR(null))})
s($,"l7","iL",function(){return H.aH(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"lc","iQ",function(){return H.aH(H.hR(void 0))})
s($,"lb","iP",function(){return H.aH(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"ld","ho",function(){return P.jv()})
r($,"kS","bD",function(){var q=new M.ef()
q.f_()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.al,DOMError:J.al,MediaError:J.al,NavigatorUserMediaError:J.al,OverconstrainedError:J.al,PositionError:J.al,SQLError:J.al,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.cV,HTMLAreaElement:W.cX,HTMLCanvasElement:W.b7,CanvasRenderingContext2D:W.bT,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,DOMException:W.eb,DOMRectReadOnly:W.bW,SVGAElement:W.h,SVGAnimateElement:W.h,SVGAnimateMotionElement:W.h,SVGAnimateTransformElement:W.h,SVGAnimationElement:W.h,SVGCircleElement:W.h,SVGClipPathElement:W.h,SVGDefsElement:W.h,SVGDescElement:W.h,SVGDiscardElement:W.h,SVGEllipseElement:W.h,SVGFEBlendElement:W.h,SVGFEColorMatrixElement:W.h,SVGFEComponentTransferElement:W.h,SVGFECompositeElement:W.h,SVGFEConvolveMatrixElement:W.h,SVGFEDiffuseLightingElement:W.h,SVGFEDisplacementMapElement:W.h,SVGFEDistantLightElement:W.h,SVGFEFloodElement:W.h,SVGFEFuncAElement:W.h,SVGFEFuncBElement:W.h,SVGFEFuncGElement:W.h,SVGFEFuncRElement:W.h,SVGFEGaussianBlurElement:W.h,SVGFEImageElement:W.h,SVGFEMergeElement:W.h,SVGFEMergeNodeElement:W.h,SVGFEMorphologyElement:W.h,SVGFEOffsetElement:W.h,SVGFEPointLightElement:W.h,SVGFESpecularLightingElement:W.h,SVGFESpotLightElement:W.h,SVGFETileElement:W.h,SVGFETurbulenceElement:W.h,SVGFilterElement:W.h,SVGForeignObjectElement:W.h,SVGGElement:W.h,SVGGeometryElement:W.h,SVGGraphicsElement:W.h,SVGImageElement:W.h,SVGLineElement:W.h,SVGLinearGradientElement:W.h,SVGMarkerElement:W.h,SVGMaskElement:W.h,SVGMetadataElement:W.h,SVGPathElement:W.h,SVGPatternElement:W.h,SVGPolygonElement:W.h,SVGPolylineElement:W.h,SVGRadialGradientElement:W.h,SVGRectElement:W.h,SVGScriptElement:W.h,SVGSetElement:W.h,SVGStopElement:W.h,SVGStyleElement:W.h,SVGElement:W.h,SVGSVGElement:W.h,SVGSwitchElement:W.h,SVGSymbolElement:W.h,SVGTSpanElement:W.h,SVGTextContentElement:W.h,SVGTextElement:W.h,SVGTextPathElement:W.h,SVGTextPositioningElement:W.h,SVGTitleElement:W.h,SVGUseElement:W.h,SVGViewElement:W.h,SVGGradientElement:W.h,SVGComponentTransferFunctionElement:W.h,SVGFEDropShadowElement:W.h,SVGMPathElement:W.h,Element:W.h,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,EventTarget:W.a_,HTMLFormElement:W.d4,MouseEvent:W.ac,DragEvent:W.ac,PointerEvent:W.ac,WheelEvent:W.ac,Document:W.a9,DocumentFragment:W.a9,HTMLDocument:W.a9,ShadowRoot:W.a9,XMLDocument:W.a9,Attr:W.a9,DocumentType:W.a9,Node:W.a9,HTMLSelectElement:W.di,CompositionEvent:W.au,FocusEvent:W.au,KeyboardEvent:W.au,TextEvent:W.au,TouchEvent:W.au,UIEvent:W.au,Window:W.bt,DOMWindow:W.bt,ClientRect:W.cv,DOMRect:W.cv})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Z.ky
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=matrix_transformation.dart.js.map
