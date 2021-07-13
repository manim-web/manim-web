(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.kA(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.kB(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.fU(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={fy:function fy(){},
iJ:function(a,b,c){if(b.h("E<0>").b(a))return new H.cd(a,b.h("@<0>").H(c).h("cd<1,2>"))
return new H.aS(a,b.h("@<0>").H(c).h("aS<1,2>"))},
i:function(a){return new H.bK("Field '"+a+"' has not been initialized.")},
hq:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fS:function(a,b,c){return a},
c5:function(a,b,c,d){P.ag(b,"start")
if(c!=null){P.ag(c,"end")
if(b>c)H.f(P.ao(b,0,c,"start",null))}return new H.ai(a,b,c,d.h("ai<0>"))},
ho:function(a,b,c){if(u.R.b(a)){P.ag(b,"count")
return new H.b0(a,b,c.h("b0<0>"))}P.ag(b,"count")
return new H.aw(a,b,c.h("aw<0>"))},
S:function(){return new P.b5("No element")},
iW:function(){return new P.b5("Too few elements")},
jf:function(a,b,c){H.cZ(a,0,J.R(a)-1,b,c)},
cZ:function(a,b,c,d,e){if(c-b<=32)H.je(a,b,c,d,e)
else H.jd(a,b,c,d,e)},
je:function(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.ap(a);t<=c;++t){r=s.j(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.j(a,q-1),r)
if(typeof p!=="number")return p.ac()
p=p>0}else p=!1
if(!p)break
o=q-1
s.l(a,q,s.j(a,o))
q=o}s.l(a,q,r)}},
jd:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k=C.f.a8(a4-a3+1,6),j=a3+k,i=a4-k,h=C.f.a8(a3+a4,2),g=h-k,f=h+k,e=J.ap(a2),d=e.j(a2,j),c=e.j(a2,g),b=e.j(a2,h),a=e.j(a2,f),a0=e.j(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.ac()
if(a1>0){t=a0
a0=a
a=t}e.l(a2,j,d)
e.l(a2,h,b)
e.l(a2,i,a0)
e.l(a2,g,e.j(a2,a3))
e.l(a2,f,e.j(a2,a4))
s=a3+1
r=a4-1
if(J.a6(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.j(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.l(a2,q,e.j(a2,s))
e.l(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.j(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.l(a2,q,e.j(a2,s))
m=s+1
e.l(a2,s,e.j(a2,r))
e.l(a2,r,p)
r=n
s=m
break}else{e.l(a2,q,e.j(a2,r))
e.l(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.j(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.l(a2,q,e.j(a2,s))
e.l(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.j(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.j(a2,r),c)<0){e.l(a2,q,e.j(a2,s))
m=s+1
e.l(a2,s,e.j(a2,r))
e.l(a2,r,p)
s=m}else{e.l(a2,q,e.j(a2,r))
e.l(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.l(a2,a3,e.j(a2,a1))
e.l(a2,a1,c)
a1=r+1
e.l(a2,a4,e.j(a2,a1))
e.l(a2,a1,a)
H.cZ(a2,a3,s-2,a5,a6)
H.cZ(a2,r+2,a4,a5,a6)
if(l)return
if(s<j&&r>i){for(;J.a6(a5.$2(e.j(a2,s),c),0);)++s
for(;J.a6(a5.$2(e.j(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.j(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.l(a2,q,e.j(a2,s))
e.l(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.j(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.j(a2,r),c)<0){e.l(a2,q,e.j(a2,s))
m=s+1
e.l(a2,s,e.j(a2,r))
e.l(a2,r,p)
s=m}else{e.l(a2,q,e.j(a2,r))
e.l(a2,r,p)}r=n
break}}H.cZ(a2,s,r,a5,a6)}else H.cZ(a2,s,r,a5,a6)},
aJ:function aJ(){},
bx:function bx(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b){this.a=a
this.$ti=b},
cd:function cd(a,b){this.a=a
this.$ti=b},
cb:function cb(){},
a1:function a1(a,b){this.a=a
this.$ti=b},
bK:function bK(a){this.a=a},
fl:function fl(){},
E:function E(){},
D:function D(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
V:function V(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d:function d(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(a,b,c){this.a=a
this.b=b
this.$ti=c},
ca:function ca(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
bD:function bD(a){this.$ti=a},
bE:function bE(a){this.$ti=a},
av:function av(a,b){this.a=a
this.$ti=b},
cp:function cp(){},
ib:function(a){var t,s=H.ia(a)
if(s!=null)return s
t="minified:"+a
return t},
t:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cB(a)
return t},
au:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
j7:function(a,b){var t,s,r,q,p,o=null,n=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(n==null)return o
if(3>=n.length)return H.o(n,3)
t=n[3]
if(b<2||b>36)throw H.h(P.ao(b,2,36,"radix",o))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=n[1]
for(q=r.length,p=0;p<q;++p)if((C.m.e3(r,p)|32)>s)return o}return parseInt(a,b)},
eh:function(a){return H.j6(a)},
j6:function(a){var t,s,r,q
if(a instanceof P.z)return H.Y(H.cw(a),null)
if(J.bj(a)===C.V||u.ak.b(a)){t=C.C(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.Y(H.cw(a),null)},
bk:function(a){throw H.h(H.k8(a))},
o:function(a,b){if(a==null)J.R(a)
throw H.h(H.fd(a,b))},
fd:function(a,b){var t,s="index"
if(!H.hN(b))return new P.aq(!0,b,s,null)
t=H.X(J.R(a))
if(b<0||b>=t)return P.fw(b,a,s,null,t)
return P.ei(b,s)},
k8:function(a){return new P.aq(!0,a,null,null)},
h:function(a){var t,s
if(a==null)a=new P.cU()
t=new Error()
t.dartException=a
s=H.kC
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
kC:function(){return J.cB(this.dartException)},
f:function(a){throw H.h(a)},
e:function(a){throw H.h(P.af(a))},
ax:function(a){var t,s,r,q,p,o
a=H.ku(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.a([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.ep(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
eq:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
hr:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
fz:function(a,b){var t=b==null,s=t?null:b.method
return new H.cR(a,s,t?null:b.receiver)},
aQ:function(a){if(a==null)return new H.ec(a)
if(a instanceof H.bF)return H.aP(a,u.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.aP(a,a.dartException)
return H.k7(a)},
aP:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
k7:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.eg(s,16)&8191)===10)switch(r){case 438:return H.aP(a,H.fz(H.t(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.t(t)+" (Error "+r+")"
return H.aP(a,new H.bU(q,f))}}if(a instanceof TypeError){p=$.ie()
o=$.ig()
n=$.ih()
m=$.ii()
l=$.il()
k=$.im()
j=$.ik()
$.ij()
i=$.ip()
h=$.io()
g=p.aa(t)
if(g!=null)return H.aP(a,H.fz(H.bd(t),g))
else{g=o.aa(t)
if(g!=null){g.method="call"
return H.aP(a,H.fz(H.bd(t),g))}else{g=n.aa(t)
if(g==null){g=m.aa(t)
if(g==null){g=l.aa(t)
if(g==null){g=k.aa(t)
if(g==null){g=j.aa(t)
if(g==null){g=m.aa(t)
if(g==null){g=i.aa(t)
if(g==null){g=h.aa(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.bd(t)
return H.aP(a,new H.bU(t,g==null?f:g.method))}}}return H.aP(a,new H.d6(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.c2()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.aP(a,new P.aq(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.c2()
return a},
aO:function(a){var t
if(a instanceof H.bF)return a.b
if(a==null)return new H.ci(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ci(a)},
kn:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.eG("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kn)
a.$identity=t
return t},
iP:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.d_().constructor.prototype):Object.create(new H.b_(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.ar
if(typeof s!=="number")return s.w()
$.ar=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.ha(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}u.K.a(d)
k.$S=H.iL(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ha(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
iL:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.i0,a)
if(typeof a=="string"){if(b)throw H.h("Cannot compute signature for static tearoff.")
t=c?H.iH:H.iG
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.h("Error in functionType of tearoff")},
iM:function(a,b,c,d){var t=H.h9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ha:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.iO(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.iM(s,!q,t,b)
if(s===0){q=$.ar
if(typeof q!=="number")return q.w()
$.ar=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.bv
return new Function(q+(p==null?$.bv=H.dO("self"):p)+";return "+o+"."+H.t(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.ar
if(typeof q!=="number")return q.w()
$.ar=q+1
n+=q
q="return function("+n+"){return this."
p=$.bv
return new Function(q+(p==null?$.bv=H.dO("self"):p)+"."+H.t(t)+"("+n+");}")()},
iN:function(a,b,c,d){var t=H.h9,s=H.iI
switch(b?-1:a){case 0:throw H.h(new H.cX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
iO:function(a,b){var t,s,r,q,p,o,n,m=$.bv
if(m==null)m=$.bv=H.dO("self")
t=$.h8
if(t==null)t=$.h8=H.dO("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.iN(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.t(s)+"(this."+t+");"
o=$.ar
if(typeof o!=="number")return o.w()
$.ar=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.t(s)+"(this."+t+", "+n+");"
o=$.ar
if(typeof o!=="number")return o.w()
$.ar=o+1
return new Function(p+o+"}")()},
fU:function(a,b,c,d,e,f,g){return H.iP(a,b,c,d,!!e,!!f,g)},
iG:function(a,b){return H.dn(v.typeUniverse,H.cw(a.a),b)},
iH:function(a,b){return H.dn(v.typeUniverse,H.cw(a.c),b)},
h9:function(a){return a.a},
iI:function(a){return a.c},
dO:function(a){var t,s,r,q=new H.b_("self","target","receiver","name"),p=J.e_(Object.getOwnPropertyNames(q),u.Q)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.h(P.h6("Field name "+a+" not found."))},
fa:function(a){if(a==null)H.k9("boolean expression must not be null")
return a},
k9:function(a){throw H.h(new H.d8(a))},
kA:function(a){throw H.h(new P.cJ(a))},
kh:function(a){return v.getIsolateTag(a)},
kB:function(a){return H.f(new H.bK(a))},
li:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kp:function(a){var t,s,r,q,p,o=H.bd($.i_.$1(a)),n=$.fe[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.fj[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.jH($.hT.$2(a,o))
if(r!=null){n=$.fe[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.fj[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.fk(t)
$.fe[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.fj[o]=t
return t}if(q==="-"){p=H.fk(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.i6(a,t)
if(q==="*")throw H.h(P.hs(o))
if(v.leafTags[o]===true){p=H.fk(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.i6(a,t)},
i6:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.fZ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
fk:function(a){return J.fZ(a,!1,null,!!a.$ikQ)},
kr:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.fk(t)
else return J.fZ(t,c,null,null)},
kj:function(){if(!0===$.fX)return
$.fX=!0
H.kk()},
kk:function(){var t,s,r,q,p,o,n,m
$.fe=Object.create(null)
$.fj=Object.create(null)
H.ki()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.i7.$1(p)
if(o!=null){n=H.kr(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ki:function(){var t,s,r,q,p,o,n=C.L()
n=H.bg(C.M,H.bg(C.N,H.bg(C.D,H.bg(C.D,H.bg(C.O,H.bg(C.P,H.bg(C.Q(C.C),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.i_=new H.fg(q)
$.hT=new H.fh(p)
$.i7=new H.fi(o)},
bg:function(a,b){return a(b)||b},
iZ:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.h(P.hc("Illegal RegExp pattern ("+String(o)+")",a))},
ku:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kx:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.ky(a,t,t+b.length,c)},
ky:function(a,b,c,d){var t=a.substring(0,b),s=a.substring(c)
return t+d+s},
cO:function cO(){},
aC:function aC(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bU:function bU(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a){this.a=a},
ec:function ec(a){this.a=a},
bF:function bF(a,b){this.a=a
this.b=b},
ci:function ci(a){this.a=a
this.b=null},
a7:function a7(){},
d2:function d2(){},
d_:function d_(){},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX:function cX(a){this.a=a},
d8:function d8(a){this.a=a},
bJ:function bJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e2:function e2(a,b){this.a=a
this.b=b
this.c=null},
bL:function bL(a,b){this.a=a
this.$ti=b},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dg:function dg(a){this.b=a},
d1:function d1(a,b){this.a=a
this.c=b},
eY:function eY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hm:function(a,b){var t=b.c
return t==null?b.c=H.fK(a,b.z,!0):t},
hl:function(a,b){var t=b.c
return t==null?b.c=H.cm(a,"a9",[b.z]):t},
hn:function(a){var t=a.y
if(t===6||t===7||t===8)return H.hn(a.z)
return t===11||t===12},
jc:function(a){return a.cy},
bi:function(a){return H.f0(v.typeUniverse,a,!1)},
kl:function(a,b){var t,s,r,q,p
if(a==null)return null
t=b.Q
s=a.cx
if(s==null)s=a.cx=new Map()
r=b.cy
q=s.get(r)
if(q!=null)return q
p=H.aA(v.typeUniverse,a.z,t,0)
s.set(r,p)
return p},
aA:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.aA(a,t,c,a0)
if(s===t)return b
return H.hF(a,s,!0)
case 7:t=b.z
s=H.aA(a,t,c,a0)
if(s===t)return b
return H.fK(a,s,!0)
case 8:t=b.z
s=H.aA(a,t,c,a0)
if(s===t)return b
return H.hE(a,s,!0)
case 9:r=b.Q
q=H.cv(a,r,c,a0)
if(q===r)return b
return H.cm(a,b.z,q)
case 10:p=b.z
o=H.aA(a,p,c,a0)
n=b.Q
m=H.cv(a,n,c,a0)
if(o===p&&m===n)return b
return H.fI(a,o,m)
case 11:l=b.z
k=H.aA(a,l,c,a0)
j=b.Q
i=H.k4(a,j,c,a0)
if(k===l&&i===j)return b
return H.hD(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.cv(a,h,c,a0)
p=b.z
o=H.aA(a,p,c,a0)
if(g===h&&o===p)return b
return H.fJ(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.h(P.dL("Attempted to substitute unexpected RTI kind "+d))}},
cv:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.aA(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
k5:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.aA(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
k4:function(a,b,c,d){var t,s=b.a,r=H.cv(a,s,c,d),q=b.b,p=H.cv(a,q,c,d),o=b.c,n=H.k5(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.de()
t.a=r
t.b=p
t.c=n
return t},
a:function(a,b){a[v.arrayRti]=b
return a},
hW:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.i0(t)
return a.$S()}return null},
i1:function(a,b){var t
if(H.hn(b))if(a instanceof H.a7){t=H.hW(a)
if(t!=null)return t}return H.cw(a)},
cw:function(a){var t
if(a instanceof P.z){t=a.$ti
return t!=null?t:H.fM(a)}if(Array.isArray(a))return H.j(a)
return H.fM(J.bj(a))},
j:function(a){var t=a[v.arrayRti],s=u.W
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
C:function(a){var t=a.$ti
return t!=null?t:H.fM(a)},
fM:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.jQ(a,t)},
jQ:function(a,b){var t=a instanceof H.a7?a.__proto__.__proto__.constructor:b,s=H.jF(v.typeUniverse,t.name)
b.$ccache=s
return s},
i0:function(a){var t,s,r
H.X(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.f0(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
ke:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.dl(a)
r=H.f0(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.dl(r):q},
jP:function(a){var t,s,r,q=this
if(q===u.K)return H.cs(q,a,H.jU)
if(!H.aB(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.cs(q,a,H.jX)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.hN
else if(s===u.V||s===u.H)r=H.jT
else if(s===u.N)r=H.jV
else r=s===u.cJ?H.hL:null
if(r!=null)return H.cs(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.ko)){q.r="$i"+t
return H.cs(q,a,H.jW)}}else if(t===7)return H.cs(q,a,H.jN)
return H.cs(q,a,H.jL)},
cs:function(a,b,c){a.b=c
return a.b(b)},
jO:function(a){var t,s=this,r=H.jK
if(!H.aB(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.jI
else if(s===u.K)r=H.jG
else{t=H.cx(s)
if(t)r=H.jM}s.a=r
return s.a(a)},
fP:function(a){var t,s=a.y
if(!H.aB(a))if(!(a===u._))if(!(a===u.aw))if(s!==7)t=s===8&&H.fP(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
jL:function(a){var t=this
if(a==null)return H.fP(t)
return H.I(v.typeUniverse,H.i1(a,t),null,t,null)},
jN:function(a){if(a==null)return!0
return this.z.b(a)},
jW:function(a){var t,s=this
if(a==null)return H.fP(s)
t=s.r
if(a instanceof P.z)return!!a[t]
return!!J.bj(a)[t]},
jK:function(a){var t,s=this
if(a==null){t=H.cx(s)
if(t)return a}else if(s.b(a))return a
H.hI(a,s)},
jM:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.hI(a,t)},
hI:function(a,b){throw H.h(H.hC(H.hv(a,H.i1(a,b),H.Y(b,null))))},
fT:function(a,b,c,d){var t=null
if(H.I(v.typeUniverse,a,t,b,t))return a
throw H.h(H.hC("The type argument '"+H.Y(a,t)+"' is not a subtype of the type variable bound '"+H.Y(b,t)+"' of type variable '"+c+"' in '"+d+"'."))},
hv:function(a,b,c){var t=P.cK(a),s=H.Y(b==null?H.cw(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
hC:function(a){return new H.cl("TypeError: "+a)},
W:function(a,b){return new H.cl("TypeError: "+H.hv(a,null,b))},
jU:function(a){return a!=null},
jG:function(a){if(a!=null)return a
throw H.h(H.W(a,"Object"))},
jX:function(a){return!0},
jI:function(a){return a},
hL:function(a){return!0===a||!1===a},
l8:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.h(H.W(a,"bool"))},
la:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.h(H.W(a,"bool"))},
l9:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.h(H.W(a,"bool?"))},
dp:function(a){if(typeof a=="number")return a
throw H.h(H.W(a,"double"))},
lc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"double"))},
lb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"double?"))},
hN:function(a){return typeof a=="number"&&Math.floor(a)===a},
X:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.h(H.W(a,"int"))},
le:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.h(H.W(a,"int"))},
ld:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.h(H.W(a,"int?"))},
jT:function(a){return typeof a=="number"},
f1:function(a){if(typeof a=="number")return a
throw H.h(H.W(a,"num"))},
lg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"num"))},
lf:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.h(H.W(a,"num?"))},
jV:function(a){return typeof a=="string"},
bd:function(a){if(typeof a=="string")return a
throw H.h(H.W(a,"String"))},
lh:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.h(H.W(a,"String"))},
jH:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.h(H.W(a,"String?"))},
k1:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.Y(a[r],b)
return t},
hK:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=H.a([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)C.a.D(a4,"T"+(r+q))
for(p=u.Q,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.o(a4,k)
n=C.m.w(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.Y(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.Y(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.Y(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.Y(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.Y(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
Y:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.Y(a.z,b)
return t}if(m===7){s=a.z
t=H.Y(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.Y(a.z,b)+">"
if(m===9){q=H.k6(a.z)
p=a.Q
return p.length!==0?q+("<"+H.k1(p,b)+">"):q}if(m===11)return H.hK(a,b,null)
if(m===12)return H.hK(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.o(b,o)
return b[o]}return"?"},
k6:function(a){var t,s=H.ia(a)
if(s!=null)return s
t="minified:"+a
return t},
hG:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
jF:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.f0(a,b,!1)
else if(typeof n=="number"){t=n
s=H.cn(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.cm(a,b,r)
o[b]=p
return p}else return n},
jD:function(a,b){return H.hH(a.tR,b)},
jC:function(a,b){return H.hH(a.eT,b)},
f0:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.hB(H.hz(a,null,b,c))
s.set(b,t)
return t},
dn:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.hB(H.hz(a,b,c,!0))
r.set(c,s)
return s},
jE:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.fI(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
aL:function(a,b){b.a=H.jO
b.b=H.jP
return b},
cn:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.ah(null,null)
t.y=b
t.cy=c
s=H.aL(a,t)
a.eC.set(c,s)
return s},
hF:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.jA(a,b,s,c)
a.eC.set(s,t)
return t},
jA:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.aB(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.ah(null,null)
r.y=6
r.z=b
r.cy=c
return H.aL(a,r)},
fK:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.jz(a,b,s,c)
a.eC.set(s,t)
return t},
jz:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.aB(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.cx(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.aw)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.cx(r.z))return r
else return H.hm(a,b)}}q=new H.ah(null,null)
q.y=7
q.z=b
q.cy=c
return H.aL(a,q)},
hE:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.jx(a,b,s,c)
a.eC.set(s,t)
return t},
jx:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.aB(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.cm(a,"a9",[b])
else if(b===u.P||b===u.T)return u.eH}r=new H.ah(null,null)
r.y=8
r.z=b
r.cy=c
return H.aL(a,r)},
jB:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.ah(null,null)
t.y=13
t.z=b
t.cy=r
s=H.aL(a,t)
a.eC.set(r,s)
return s},
dm:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
jw:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
cm:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.dm(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.ah(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.aL(a,s)
a.eC.set(q,r)
return r},
fI:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.dm(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.ah(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.aL(a,p)
a.eC.set(r,o)
return o},
hD:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.dm(n)
if(k>0){t=m>0?",":""
s=H.dm(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.jw(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.ah(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.aL(a,p)
a.eC.set(r,s)
return s},
fJ:function(a,b,c,d){var t,s=b.cy+("<"+H.dm(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.jy(a,b,c,s,d)
a.eC.set(s,t)
return t},
jy:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.aA(a,b,s,0)
n=H.cv(a,c,s,0)
return H.fJ(a,o,n,c!==n)}}m=new H.ah(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.aL(a,m)},
hz:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hB:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.jr(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.hA(a,s,i,h,!1)
else if(r===46)s=H.hA(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.aK(a.u,a.e,h.pop()))
break
case 94:h.push(H.jB(a.u,h.pop()))
break
case 35:h.push(H.cn(a.u,5,"#"))
break
case 64:h.push(H.cn(a.u,2,"@"))
break
case 126:h.push(H.cn(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.fH(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.cm(q,o,p))
else{n=H.aK(q,a.e,o)
switch(n.y){case 11:h.push(H.fJ(q,n,p,a.n))
break
default:h.push(H.fI(q,n,p))
break}}break
case 38:H.js(a,h)
break
case 42:q=a.u
h.push(H.hF(q,H.aK(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.fK(q,H.aK(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.hE(q,H.aK(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.de()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
H.fH(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.hD(q,H.aK(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.fH(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.ju(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.aK(a.u,a.e,j)},
jr:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
hA:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.hG(t,p.z)[q]
if(o==null)H.f('No "'+q+'" in "'+H.jc(p)+'"')
d.push(H.dn(t,p,o))}else d.push(q)
return n},
js:function(a,b){var t=b.pop()
if(0===t){b.push(H.cn(a.u,1,"0&"))
return}if(1===t){b.push(H.cn(a.u,4,"1&"))
return}throw H.h(P.dL("Unexpected extended operation "+H.t(t)))},
aK:function(a,b,c){if(typeof c=="string")return H.cm(a,c,a.sEA)
else if(typeof c=="number")return H.jt(a,b,c)
else return c},
fH:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.aK(a,b,c[t])},
ju:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.aK(a,b,c[t])},
jt:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.h(P.dL("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.h(P.dL("Bad index "+c+" for "+b.k(0)))},
I:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.aB(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.aB(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.I(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.I(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.I(a,b.z,c,d,e)
if(s===6)return H.I(a,b.z,c,d,e)
return s!==7}if(s===6)return H.I(a,b.z,c,d,e)
if(q===6){t=H.hm(a,d)
return H.I(a,b,c,t,e)}if(s===8){if(!H.I(a,b.z,c,d,e))return!1
return H.I(a,H.hl(a,b),c,d,e)}if(s===7){t=H.I(a,u.P,c,d,e)
return t&&H.I(a,b.z,c,d,e)}if(q===8){if(H.I(a,b,c,d.z,e))return!0
return H.I(a,b,c,H.hl(a,d),e)}if(q===7){t=H.I(a,b,c,u.P,e)
return t||H.I(a,b,c,d.z,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.Y)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.I(a,l,c,k,e)||!H.I(a,k,e,l,c))return!1}return H.hM(a,b.z,c,d.z,e)}if(q===11){if(b===u.Y)return!0
if(t)return!1
return H.hM(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.jS(a,b,c,d,e)}return!1},
hM:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.I(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.I(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.I(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.I(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.I(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
jS:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.I(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.hG(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.I(a,H.dn(a,b,m[q]),c,s[q],e))return!1
return!0},
cx:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.aB(a))if(s!==7)if(!(s===6&&H.cx(a.z)))t=s===8&&H.cx(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ko:function(a){var t
if(!H.aB(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
aB:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.Q},
hH:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ah:function ah(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
de:function de(){this.c=this.b=this.a=null},
dl:function dl(a){this.a=a},
dd:function dd(){},
cl:function cl(a){this.a=a},
ia:function(a){return v.mangledGlobalNames[a]}},J={
fZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fW:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.fX==null){H.kj()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.h(P.hs("Return interceptor for "+H.t(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.eU
if(p==null)p=$.eU=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.kp(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.G
if(t===Object.prototype)return C.G
if(typeof r=="function"){p=$.eU
if(p==null)p=$.eU=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.B,enumerable:false,writable:true,configurable:true})
return C.B}return C.B},
he:function(a,b){if(a<0||a>4294967295)throw H.h(P.ao(a,0,4294967295,"length",null))
return J.hg(new Array(a),b)},
hf:function(a,b){if(a<0)throw H.h(P.h6("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("u<0>"))},
hg:function(a,b){return J.e_(H.a(a,b.h("u<0>")),b)},
e_:function(a,b){a.fixed$length=Array
return a},
iY:function(a,b){var t=u.e8
return J.iu(t.a(a),t.a(b))},
bj:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b1.prototype
return J.bI.prototype}if(typeof a=="string")return J.at.prototype
if(a==null)return J.b2.prototype
if(typeof a=="boolean")return J.cP.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.z)return a
return J.fW(a)},
aM:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(!(a instanceof P.z))return J.al.prototype
return a},
kf:function(a){if(typeof a=="number")return J.aD.prototype
if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(!(a instanceof P.z))return J.al.prototype
return a},
ap:function(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(!(a instanceof P.z))return J.al.prototype
return a},
aN:function(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.z)return a
return J.fW(a)},
kg:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b1.prototype
return J.bI.prototype}if(a==null)return a
if(!(a instanceof P.z))return J.al.prototype
return a},
fV:function(a){if(typeof a=="number")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.al.prototype
return a},
hY:function(a){if(typeof a=="number")return J.aD.prototype
if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.al.prototype
return a},
hZ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.z)return a
return J.fW(a)},
h3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kf(a).w(a,b)},
a6:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bj(a).K(a,b)},
fq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.hY(a).n(a,b)},
iq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.fV(a).t(a,b)},
Q:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.ap(a).j(a,b)},
ir:function(a,b,c){return J.aM(a).l(a,b,c)},
is:function(a,b,c,d){return J.hZ(a).e0(a,b,c,d)},
it:function(a,b,c,d){return J.hZ(a).ed(a,b,c,d)},
iu:function(a,b){return J.hY(a).cH(a,b)},
h4:function(a,b){return J.aM(a).T(a,b)},
iv:function(a){return J.fV(a).cU(a)},
iw:function(a){return J.aM(a).gB(a)},
bl:function(a){return J.bj(a).gv(a)},
ix:function(a){return J.ap(a).ga9(a)},
am:function(a){return J.aM(a).gF(a)},
iy:function(a){return J.aM(a).gJ(a)},
R:function(a){return J.aN(a).gm(a)},
iz:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.kg(a).gca(a)},
iA:function(a,b,c){return J.aM(a).cZ(a,b,c)},
h5:function(a,b){return J.aM(a).a6(a,b)},
fr:function(a){return J.fV(a).a3(a)},
iB:function(a){return J.aM(a).a4(a)},
cB:function(a){return J.bj(a).k(a)},
aa:function aa(){},
cP:function cP(){},
b2:function b2(){},
aV:function aV(){},
cV:function cV(){},
al:function al(){},
aE:function aE(){},
u:function u(a){this.$ti=a},
e0:function e0(a){this.$ti=a},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aD:function aD(){},
b1:function b1(){},
bI:function bI(){},
at:function at(){}},P={
jm:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.ka()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bh(new P.eB(r),1)).observe(t,{childList:true})
return new P.eA(r,t,s)}else if(self.setImmediate!=null)return P.kb()
return P.kc()},
jn:function(a){self.scheduleImmediate(H.bh(new P.eC(u.M.a(a)),0))},
jo:function(a){self.setImmediate(H.bh(new P.eD(u.M.a(a)),0))},
jp:function(a){u.M.a(a)
P.jv(0,a)},
jv:function(a,b){var t=new P.eZ()
t.dV(a,b)
return t},
dv:function(a){return new P.d9(new P.L($.H,a.h("L<0>")),a.h("d9<0>"))},
dt:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
dq:function(a,b){P.jJ(a,b)},
ds:function(a,b){b.bB(0,a)},
dr:function(a,b){b.cI(H.aQ(a),H.aO(a))},
jJ:function(a,b){var t,s,r=new P.f2(b),q=new P.f3(b)
if(a instanceof P.L)a.cE(r,q,u.z)
else{t=u.z
if(u.m.b(a))a.bS(r,q,t)
else{s=new P.L($.H,u.c)
s.a=4
s.c=a
s.cE(r,q,t)}}},
dw:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.H.d1(new P.f7(t),u.q,u.S,u.z)},
jq:function(a){return new P.bb(a,1)},
hw:function(){return C.a7},
hx:function(a){return new P.bb(a,3)},
hO:function(a,b){return new P.ck(a,b.h("ck<0>"))},
dM:function(a,b){var t=H.fS(a,"error",u.K)
return new P.bt(t,b==null?P.iE(a):b)},
iE:function(a){var t
if(u.C.b(a)){t=a.gbm()
if(t!=null)return t}return C.R},
eK:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.aU()
b.a=a.a
b.c=a.c
P.ba(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.cB(r)}},
ba:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.t,s=u.F,r=u.m;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.f5(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.ba(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.f5(d,d,l.b,k.a,k.b)
return}g=$.H
if(g!==h)$.H=h
else g=d
b=b.c
if((b&15)===8)new P.eS(q,c,p).$0()
else if(j){if((b&1)!==0)new P.eR(q,k).$0()}else if((b&2)!==0)new P.eQ(c,q).$0()
if(g!=null)$.H=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.h("a9<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.aV(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.eK(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.aV(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
k_:function(a,b){var t
if(u.ag.b(a))return b.d1(a,u.z,u.K,u.k)
t=u.bI
if(t.b(a))return t.a(a)
throw H.h(P.iD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
jZ:function(){var t,s
for(t=$.be;t!=null;t=$.be){$.cu=null
s=t.b
$.be=s
if(s==null)$.ct=null
t.a.$0()}},
k3:function(){$.fN=!0
try{P.jZ()}finally{$.cu=null
$.fN=!1
if($.be!=null)$.h1().$1(P.hU())}},
hR:function(a){var t=new P.da(a),s=$.ct
if(s==null){$.be=$.ct=t
if(!$.fN)$.h1().$1(P.hU())}else $.ct=s.b=t},
k2:function(a){var t,s,r,q=$.be
if(q==null){P.hR(a)
$.cu=$.ct
return}t=new P.da(a)
s=$.cu
if(s==null){t.b=q
$.be=$.cu=t}else{r=s.b
t.b=r
$.cu=s.b=t
if(r==null)$.ct=t}},
kw:function(a){var t=null,s=$.H
if(C.h===s){P.bf(t,t,C.h,a)
return}P.bf(t,t,s,u.M.a(s.cG(a)))},
kV:function(a,b){H.fS(a,"stream",u.K)
return new P.dj(b.h("dj<0>"))},
f5:function(a,b,c,d,e){P.k2(new P.f6(d,e))},
hP:function(a,b,c,d,e){var t,s=$.H
if(s===c)return d.$0()
$.H=c
t=s
try{s=d.$0()
return s}finally{$.H=t}},
hQ:function(a,b,c,d,e,f,g){var t,s=$.H
if(s===c)return d.$1(e)
$.H=c
t=s
try{s=d.$1(e)
return s}finally{$.H=t}},
k0:function(a,b,c,d,e,f,g,h,i){var t,s=$.H
if(s===c)return d.$2(e,f)
$.H=c
t=s
try{s=d.$2(e,f)
return s}finally{$.H=t}},
bf:function(a,b,c,d){u.M.a(d)
if(C.h!==c)d=c.cG(d)
P.hR(d)},
eB:function eB(a){this.a=a},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a},
eD:function eD(a){this.a=a},
eZ:function eZ(){},
f_:function f_(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=!1
this.$ti=b},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
f7:function f7(a){this.a=a},
bb:function bb(a,b){this.a=a
this.b=b},
bc:function bc(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
ck:function ck(a,b){this.a=a
this.$ti=b},
bt:function bt(a,b){this.a=a
this.b=b},
db:function db(){},
cj:function cj(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
L:function L(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eH:function eH(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a){this.a=a},
eR:function eR(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
da:function da(a){this.a=a
this.b=null},
c3:function c3(){},
el:function el(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
c4:function c4(){},
dj:function dj(a){this.$ti=a},
co:function co(){},
f6:function f6(a,b){this.a=a
this.b=b},
di:function di(){},
eW:function eW(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function(a,b){return new H.bJ(a.h("@<0>").H(b).h("bJ<1,2>"))},
j0:function(a){return new P.az(a.h("az<0>"))},
j1:function(a){return new P.az(a.h("az<0>"))},
fG:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
fF:function(a,b,c){var t=new P.aZ(a,b,c.h("aZ<0>"))
t.c=a.e
return t},
iV:function(a,b,c){var t,s
if(P.fO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.a([],u.s)
C.a.D($.a5,a)
try{P.jY(a,t)}finally{if(0>=$.a5.length)return H.o($.a5,-1)
$.a5.pop()}s=P.hp(b,u.hf.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
fx:function(a,b,c){var t,s
if(P.fO(a))return b+"..."+c
t=new P.d0(b)
C.a.D($.a5,a)
try{s=t
s.a=P.hp(s.a,a,", ")}finally{if(0>=$.a5.length)return H.o($.a5,-1)
$.a5.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fO:function(a){var t,s
for(t=$.a5.length,s=0;s<t;++s)if(a===$.a5[s])return!0
return!1},
jY:function(a,b){var t,s,r,q,p,o,n,m=a.gF(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.p())return
t=H.t(m.gA())
C.a.D(b,t)
l+=t.length+2;++k}if(!m.p()){if(k<=5)return
if(0>=b.length)return H.o(b,-1)
s=b.pop()
if(0>=b.length)return H.o(b,-1)
r=b.pop()}else{q=m.gA();++k
if(!m.p()){if(k<=4){C.a.D(b,H.t(q))
return}s=H.t(q)
if(0>=b.length)return H.o(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gA();++k
for(;m.p();q=p,p=o){o=m.gA();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.o(b,-1)
l-=b.pop().length+2;--k}C.a.D(b,"...")
return}}r=H.t(q)
s=H.t(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.D(b,n)
C.a.D(b,r)
C.a.D(b,s)},
fB:function(a,b){var t,s,r=P.j0(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.e)(a),++s)r.D(0,b.a(a[s]))
return r},
hj:function(a){var t,s={}
if(P.fO(a))return"{...}"
t=new P.d0("")
try{C.a.D($.a5,a)
t.a+="{"
s.a=!0
a.cV(0,new P.e4(s,t))
t.a+="}"}finally{if(0>=$.a5.length)return H.o($.a5,-1)
$.a5.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
df:function df(a){this.a=a
this.c=this.b=null},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bH:function bH(){},
ab:function ab(){},
bO:function bO(){},
e4:function e4(a,b){this.a=a
this.b=b},
b3:function b3(){},
c0:function c0(){},
ch:function ch(){},
cq:function cq(){},
km:function(a,b){var t=H.j7(a,b)
if(t!=null)return t
throw H.h(P.hc(a,null))},
iT:function(a){if(a instanceof H.a7)return a.k(0)
return"Instance of '"+H.eh(a)+"'"},
hi:function(a,b,c,d){var t,s=c?J.hf(a,d):J.he(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
fC:function(a,b,c){var t,s,r=H.a([],c.h("u<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.e)(a),++s)C.a.D(r,c.a(a[s]))
return J.e_(r,c)},
m:function(a,b,c){var t
if(b)return P.hh(a,c)
t=J.e_(P.hh(a,c),c)
return t},
hh:function(a,b){var t,s
if(Array.isArray(a))return H.a(a.slice(0),b.h("u<0>"))
t=H.a([],b.h("u<0>"))
for(s=J.am(a);s.p();)C.a.D(t,s.gA())
return t},
ja:function(a){return new H.cQ(a,H.iZ(a,!1,!0,!1,!1,!1))},
hp:function(a,b,c){var t=J.am(b)
if(!t.p())return a
if(c.length===0){do a+=H.t(t.gA())
while(t.p())}else{a+=H.t(t.gA())
for(;t.p();)a=a+c+H.t(t.gA())}return a},
cK:function(a){if(typeof a=="number"||H.hL(a)||null==a)return J.cB(a)
if(typeof a=="string")return JSON.stringify(a)
return P.iT(a)},
dL:function(a){return new P.bs(a)},
h6:function(a){return new P.aq(!1,null,null,a)},
iD:function(a,b,c){return new P.aq(!0,a,b,c)},
ei:function(a,b){return new P.bX(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.bX(b,c,!0,a,d,"Invalid value")},
hk:function(a,b,c,d){if(a<b||a>c)throw H.h(P.ao(a,b,c,d,null))
return a},
cW:function(a,b,c){if(0>a||a>c)throw H.h(P.ao(a,0,c,"start",null))
if(a>b||b>c)throw H.h(P.ao(b,a,c,"end",null))
return b},
ag:function(a,b){if(a<0)throw H.h(P.ao(a,0,null,b,null))
return a},
fw:function(a,b,c,d,e){var t=H.X(e==null?J.R(b):e)
return new P.cN(t,!0,a,c,"Index out of range")},
a0:function(a){return new P.d7(a)},
hs:function(a){return new P.d5(a)},
aG:function(a){return new P.b5(a)},
af:function(a){return new P.cH(a)},
hc:function(a,b){return new P.dY(a,b)},
F:function F(){},
bs:function bs(a){this.a=a},
d4:function d4(){},
cU:function cU(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cN:function cN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
d7:function d7(a){this.a=a},
d5:function d5(a){this.a=a},
b5:function b5(a){this.a=a},
cH:function cH(a){this.a=a},
c2:function c2(){},
cJ:function cJ(a){this.a=a},
eG:function eG(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
q:function q(){},
G:function G(){},
K:function K(){},
z:function z(){},
dk:function dk(){},
d0:function d0(a){this.a=a},
i5:function(a,b,c){H.fT(c,u.H,"T","min")
return Math.min(c.a(a),c.a(b))},
i4:function(a,b,c){H.fT(c,u.H,"T","max")
return Math.max(c.a(a),c.a(b))},
dh:function dh(){this.b=this.a=0},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
eV:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hy:function(a,b,c,d){var t=W.eV(W.eV(W.eV(W.eV(0,a),b),c),d),s=t+((t&67108863)<<3)&536870911
s^=s>>>11
return s+((s&16383)<<15)&536870911},
eE:function(a,b,c,d,e){var t=W.hS(new W.eF(c),u.J),s=t!=null
if(s&&!0){u.A.a(t)
if(s)J.is(a,b,t,!1)}return new W.cf(a,b,t,!1,e.h("cf<0>"))},
hS:function(a,b){var t=$.H
if(t===C.h)return a
return t.eu(a,b)},
n:function n(){},
cD:function cD(){},
cE:function cE(){},
aR:function aR(){},
bw:function bw(){},
an:function an(){},
dW:function dW(){},
bB:function bB(){},
k:function k(){},
l:function l(){},
U:function U(){},
cM:function cM(){},
a4:function a4(){},
a_:function a_(){},
cY:function cY(){},
ak:function ak(){},
b9:function b9(){},
ez:function ez(a){this.a=a},
cc:function cc(){},
fv:function fv(a,b){this.a=a
this.$ti=b},
ce:function ce(){},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cf:function cf(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eF:function eF(a){this.a=a}},A={a3:function a3(a,b){this.a=a
this.$ti=b},dZ:function dZ(a){this.a=a},cg:function cg(a,b){this.a=a
this.b=null
this.$ti=b},
hd:function(a,b){return A.iX(a,b,b)},
iX:function(a,b,c){return P.hO(function(){var t=a,s=b
var r=0,q=1,p,o,n
return function $async$hd(d,e){if(d===1){p=e
r=q}while(true)switch(r){case 0:o=t.length,n=0
case 2:if(!(n<t.length)){r=4
break}r=5
return P.jq(t[n])
case 5:case 3:t.length===o||(0,H.e)(t),++n
r=2
break
case 4:return P.hw()
case 1:return P.hx(p)}}},c)},
cr:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hJ:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},R={dP:function dP(a,b){this.c=a
this.d=8
this.r=b},dQ:function dQ(){},dR:function dR(){}},K={bm:function bm(){},cC:function cC(){},dy:function dy(a){this.a=a},dz:function dz(a){this.a=a},dA:function dA(a){this.a=a},
kd:function(a,b){var t,s,r,q,p,o,n,m,l
if(b===0)return H.a([],u.O)
t=T.cy(b,1,0).a5(0)
s=H.a([],u.X)
for(r=t.length,q=0;q<t.length;t.length===r||(0,H.e)(t),++q)s.push(J.iv(t[q]))
r=H.a([],u.n)
for(p=t.length,q=0;q<t.length;t.length===p||(0,H.e)(t),++q){o=t[q]
if(typeof o!=="number")return o.ad()
r.push(C.d.ad(o,1))}C.a.sJ(r,1)
C.a.sJ(s,0)
p=H.a([],u.O)
for(s=new A.a3(H.a([s,r],u.dd),u.eB),s=s.gF(s);s.p();){n=s.b
if(n==null)n=H.f(P.aG("No element"))
r=J.fr(C.a.gB(n))
if(r<0||r>=2)return H.o(a,r)
r=a[r]
m=J.fr(C.a.gB(n))+1
if(m<0||m>=2)return H.o(a,m)
m=a[m]
l=C.a.gJ(n)
p.push(r.n(0,1-l).w(0,m.n(0,l)))}return p},
fL:function(a){var t,s,r,q,p,o,n,m,l,k,j
if(C.m.dG(a,"#")){P.hk(0,0,a.length,"startIndex")
a=H.kx(a,"#","",0)}t=a.length
if(!C.a.ao(H.a([3,4,6,8],u.X),t))throw H.h("Hex string #"+a+" not well formated")
if(t===3||t===4){t=u.s
s=H.a([],t)
for(r=a.split(""),q=r.length,p=0;p<q;++p){o=r[p]
C.a.I(s,H.a([o,o],t))}a=C.a.bK(s,"")}if(a.length===6)a+="ff"
n=new K.f4()
m=C.m.aG(a,0,2)
l=C.m.aG(a,2,4)
k=C.m.aG(a,4,6)
j=C.m.aG(a,6,8)
return new K.c(n.$1(m),n.$1(l),n.$1(k),n.$1(j))},
c:function c(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(){}},B={cF:function cF(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.r=c
_.x=!1
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.b=_.a=null}},M={
fD:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=b2.ag,a8=b2.b2,a9=P.m(b2.cR,!0,u.V),b0=b2.eG,b1=b2.bG
if(b1!=null){t=H.j(b1)
t=P.m(new H.d(b1,t.h("M(1)").a(new M.ed()),t.h("d<1,M>")),!0,u.f)
b1=t}else b1=a6
t=b2.bH
if(t!=null){s=H.j(t)
s=P.m(new H.d(t,s.h("M(1)").a(new M.ee()),s.h("d<1,M>")),!0,u.f)
t=s}else t=a6
s=b2.O
r=b2.P
N.aj(a6,0,C.b,a6,0)
q=b2.r1
p=b2.r2
o=N.aX(b2.rx)
n=b2.ry
n=n==null?a6:N.Z(n)
m=b2.x1
m=m==null?a6:N.Z(m)
l=b2.dy
if(l==null)l=a6
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.N()),k.h("d<1,c>"))
l=k}if(l==null)l=H.a([],u.O)
k=u.G
l=P.m(l,!0,k)
j=b2.fr
if(j==null)j=a6
else{i=H.j(j)
i=new H.d(j,i.h("c(1)").a(new V.O()),i.h("d<1,c>"))
j=i}j=P.m(j==null?H.a([],u.O):j,!0,k)
i=b2.fx
if(i==null)i=a6
else{h=H.j(i)
h=new H.d(i,h.h("c(1)").a(new V.P()),h.h("d<1,c>"))
i=h}k=P.m(i==null?H.a([],u.O):i,!0,k)
i=b2.x
h=b2.y
g=b2.z
f=b2.Q
e=f.a
d=f.b
f=f.c
c=b2.gE(b2).i()
b=b2.b
if(b==null)b=H.f(H.i("name"))
a=b2.c
if(a===$)a=H.f(H.i("target"))
a=a==null?a6:a.i()
a0=H.a([],u.r)
for(a1=b2.gu(),a2=a1.length,a3=0;a3<a1.length;a1.length===a2||(0,H.e)(a1),++a3)a0.push(a1[a3].i())
b2.gG()
a1=H.a([],u.l)
for(a2=b2.gq(b2),a4=a2.length,a3=0;a3<a2.length;a2.length===a4||(0,H.e)(a2),++a3){a5=a2[a3]
a1.push(new Y.b(a5.a,a5.b,a5.c))}return new M.b4(b2.ax,a7,b2.b1,!0,b2.cP,b2.cQ,a8,a9,!1,b2.eD,b2.cS,b2.eE,b2.eF,new Y.b(b0.a,b0.b,b0.c),b2.eH,b2.cT,b2.eI,b2.eJ,b2.eK,b2.eL,b1,t,b2.V,b2.X,s,r,q,new Y.b(p.a,p.b,p.c),o,n,m,i,h,g,new Y.b(e,d,f),b2.ch,b2.cx,b2.cy,b2.db,b2.dx,l,j,k,c,b,a,a0,!1,a1)},
iF:function(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a3.eA,a=M.fu(a3.cO),a0=M.fu(a3.eB),a1=M.fu(a3.eC),a2=a3.dy
if(a2==null)a2=c
else{t=H.j(a2)
t=new H.d(a2,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
a2=t}if(a2==null)a2=H.a([],u.O)
t=u.G
a2=P.m(a2,!0,t)
s=a3.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a3.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a3.x
q=a3.y
p=a3.z
o=a3.Q
n=o.a
m=o.b
o=o.c
l=a3.gE(a3).i()
k=a3.b
if(k==null)k=H.f(H.i("name"))
j=a3.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a3.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a3.gG()
h=H.a([],u.l)
for(g=a3.gq(a3),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}b=new M.bu(new Y.b(b.a,b.b,b.c),a,a0,a1,a3.ew,a3.ex,a3.ey,a3.ez,r,q,p,new Y.b(n,m,o),a3.ch,a3.cx,a3.cy,a3.db,a3.dx,a2,s,t,l,k,j,i,!1,h)
b.bD=M.fD(a3.gaM())
b.bE=M.fD(a3.gaN())
b.bF=V.ht(H.a([b.gaM(),b.gaN()],u.U))
return b},
ft:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new M.T(a,f,c,g,t,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
fu:function(a){return new M.T(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
b4:function b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var _=this
_.ax=a
_.ag=b
_.b1=c
_.fi=d
_.cP=e
_.cQ=f
_.b2=g
_.cR=h
_.fj=i
_.eD=j
_.cS=k
_.eE=l
_.eF=m
_.eG=n
_.eH=o
_.cT=p
_.eI=q
_.eJ=r
_.eK=s
_.eL=t
_.bG=a0
_.bH=a1
_.V=a2
_.X=a3
_.O=a4
_.P=a5
_.r1=a6
_.r2=a7
_.rx=a8
_.ry=a9
_.x1=b0
_.x=b1
_.y=b2
_.z=b3
_.Q=b4
_.ch=b5
_.cx=b6
_.cy=b7
_.db=b8
_.dx=b9
_.dy=c0
_.fr=c1
_.fx=c2
_.a=c3
_.b=c4
_.c=c5
_.d=c6
_.e=null
_.f=c7
_.r=c8},
ed:function ed(){},
ee:function ee(){},
cI:function cI(){},
dU:function dU(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5){var _=this
_.eA=a
_.cO=b
_.eB=c
_.eC=d
_.bF=_.bE=_.bD=null
_.ew=e
_.ex=f
_.ey=g
_.ez=h
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
_.fx=t
_.a=a0
_.b=a1
_.c=a2
_.d=a3
_.e=null
_.f=a4
_.r=a5},
dN:function dN(){},
T:function T(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.fy=t},
en:function(a,b,c,d){var t=null,s=new M.aH(a,c,b,C.b,t,t,t,t,t)
s.S(C.b,t,t)
s.saj(u.y.a(H.a([d],u.l)))
s.Z(C.b)
return s},
jh:function(a){var t,s,r,q,p,o,n,m=a.y,l=a.gE(a).i(),k=a.b
if(k==null)k=H.f(H.i("name"))
t=a.c
if(t===$)t=H.f(H.i("target"))
t=t==null?null:t.i()
s=H.a([],u.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].i())
a.gG()
r=H.a([],u.l)
for(q=a.gq(a),o=q.length,p=0;p<q.length;q.length===o||(0,H.e)(q),++p){n=q[p]
r.push(new Y.b(n.a,n.b,n.c))}return new M.aH(a.x,m,a.z,l,k,t,s,!1,r)},
aH:function aH(a,b,c,d,e,f,g,h,i){var _=this
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
j3:function(a){var t,s,r,q,p,o,n,m=a.gE(a).i(),l=a.b
if(l==null)l=H.f(H.i("name"))
t=a.c
if(t===$)t=H.f(H.i("target"))
t=t==null?null:t.i()
s=H.a([],u.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].i())
a.gG()
r=H.a([],u.l)
for(q=a.gq(a),o=q.length,p=0;p<q.length;q.length===o||(0,H.e)(q),++p){n=q[p]
r.push(new Y.b(n.a,n.b,n.c))}return new M.w(m,l,t,s,!1,r)},
iU:function(a){var t,s,r,q,p,o,n,m=a.gE(a).i(),l=a.b
if(l==null)l=H.f(H.i("name"))
t=a.c
if(t===$)t=H.f(H.i("target"))
t=t==null?null:t.i()
s=H.a([],u.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].i())
a.gG()
r=H.a([],u.l)
for(q=a.gq(a),o=q.length,p=0;p<q.length;q.length===o||(0,H.e)(q),++p){n=q[p]
r.push(new Y.b(n.a,n.b,n.c))}return new M.bG(m,l,t,s,!1,r)},
w:function w(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ea:function ea(a){this.a=a},
e9:function e9(a){this.a=a},
e8:function e8(a){this.a=a},
eb:function eb(a,b){this.a=a
this.b=b},
e6:function e6(){},
e7:function e7(a){this.a=a},
bG:function bG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
dX:function dX(){this.a=null}},Y={
j4:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=P.m(a0.x1,!0,u.V),a=a0.dy
if(a==null)a=c
else{t=H.j(a)
t=new H.d(a,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
a=t}if(a==null)a=H.a([],u.O)
t=u.G
a=P.m(a,!0,t)
s=a0.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a0.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a0.x
q=a0.y
p=a0.z
o=a0.Q
n=o.a
m=o.b
o=o.c
l=a0.gE(a0).i()
k=a0.b
if(k==null)k=H.f(H.i("name"))
j=a0.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a0.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a0.gG()
h=H.a([],u.l)
for(g=a0.gq(a0),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new Y.bV(a0.r1,a0.r2,a0.rx,a0.ry,b,a0.x2,r,q,p,new Y.b(n,m,o),a0.ch,a0.cx,a0.cy,a0.db,a0.dx,a,s,t,l,k,j,i,!1,h)},
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3){var _=this
_.r1=a
_.r2=b
_.rx=c
_.ry=d
_.x1=e
_.x2=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p
_.fr=q
_.fx=r
_.a=s
_.b=t
_.c=a0
_.d=a1
_.e=null
_.f=a2
_.r=a3},
ef:function ef(a){this.a=a},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a},
ey:function ey(){},
ew:function ew(){}},N={
aj:function(a,b,c,d,e){var t=u.O,s=a!=null?H.a([a],t):H.a([],t),r=H.a([c],t)
return new N.c8(r,d!=null?H.a([d],t):H.a([],t),e,s,b,0,C.c)},
aX:function(a){var t,s,r,q,p,o,n=a.a
if(n!=null){t=H.a([],u.O)
for(s=n.length,r=0;r<n.length;n.length===s||(0,H.e)(n),++r){q=n[r]
t.push(new K.c(q.a,q.b,q.c,q.d))}n=t}else n=null
t=a.b
if(t!=null){s=H.a([],u.O)
for(p=t.length,r=0;r<t.length;t.length===p||(0,H.e)(t),++r){q=t[r]
s.push(new K.c(q.a,q.b,q.c,q.d))}t=s}else t=null
s=a.d
if(s!=null){p=H.a([],u.O)
for(o=s.length,r=0;r<s.length;s.length===o||(0,H.e)(s),++r){q=s[r]
p.push(new K.c(q.a,q.b,q.c,q.d))}s=p}else s=null
return new N.c8(n,t,a.c,s,a.e,a.f,a.r)},
ji:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null
N.aj(a3,0,C.b,a3,0)
t=a4.r1
s=a4.r2
r=N.aX(a4.rx)
q=a4.ry
q=q==null?a3:N.Z(q)
p=a4.x1
p=p==null?a3:N.Z(p)
o=a4.dy
if(o==null)o=a3
else{n=H.j(o)
n=new H.d(o,n.h("c(1)").a(new V.N()),n.h("d<1,c>"))
o=n}if(o==null)o=H.a([],u.O)
n=u.G
o=P.m(o,!0,n)
m=a4.fr
if(m==null)m=a3
else{l=H.j(m)
l=new H.d(m,l.h("c(1)").a(new V.O()),l.h("d<1,c>"))
m=l}m=P.m(m==null?H.a([],u.O):m,!0,n)
l=a4.fx
if(l==null)l=a3
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.P()),k.h("d<1,c>"))
l=k}n=P.m(l==null?H.a([],u.O):l,!0,n)
l=a4.x
k=a4.y
j=a4.z
i=a4.Q
h=i.a
g=i.b
i=i.c
f=a4.gE(a4).i()
e=a4.b
if(e==null)e=H.f(H.i("name"))
d=a4.c
if(d===$)d=H.f(H.i("target"))
d=d==null?a3:d.i()
c=H.a([],u.r)
for(b=a4.gu(),a=b.length,a0=0;a0<b.length;b.length===a||(0,H.e)(b),++a0)c.push(b[a0].i())
a4.gG()
b=H.a([],u.l)
for(a=a4.gq(a4),a1=a.length,a0=0;a0<a.length;a.length===a1||(0,H.e)(a),++a0){a2=a[a0]
b.push(new Y.b(a2.a,a2.b,a2.c))}return new N.b6(t,new Y.b(s.a,s.b,s.c),r,q,p,l,k,j,new Y.b(h,g,i),a4.ch,a4.cx,a4.cy,a4.db,a4.dx,o,m,n,f,e,d,c,!1,b)},
iC:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null
N.aj(a3,0,C.b,a3,0)
t=a4.r1
s=a4.r2
r=N.aX(a4.rx)
q=a4.ry
q=q==null?a3:N.Z(q)
p=a4.x1
p=p==null?a3:N.Z(p)
o=a4.dy
if(o==null)o=a3
else{n=H.j(o)
n=new H.d(o,n.h("c(1)").a(new V.N()),n.h("d<1,c>"))
o=n}if(o==null)o=H.a([],u.O)
n=u.G
o=P.m(o,!0,n)
m=a4.fr
if(m==null)m=a3
else{l=H.j(m)
l=new H.d(m,l.h("c(1)").a(new V.O()),l.h("d<1,c>"))
m=l}m=P.m(m==null?H.a([],u.O):m,!0,n)
l=a4.fx
if(l==null)l=a3
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.P()),k.h("d<1,c>"))
l=k}n=P.m(l==null?H.a([],u.O):l,!0,n)
l=a4.x
k=a4.y
j=a4.z
i=a4.Q
h=i.a
g=i.b
i=i.c
f=a4.gE(a4).i()
e=a4.b
if(e==null)e=H.f(H.i("name"))
d=a4.c
if(d===$)d=H.f(H.i("target"))
d=d==null?a3:d.i()
c=H.a([],u.r)
for(b=a4.gu(),a=b.length,a0=0;a0<b.length;b.length===a||(0,H.e)(b),++a0)c.push(b[a0].i())
a4.gG()
b=H.a([],u.l)
for(a=a4.gq(a4),a1=a.length,a0=0;a0<a.length;a.length===a1||(0,H.e)(a),++a0){a2=a[a0]
b.push(new Y.b(a2.a,a2.b,a2.c))}return new N.bo(a4.V,a4.X,a4.O,a4.P,a4.aw,t,new Y.b(s.a,s.b,s.c),r,q,p,l,k,j,new Y.b(h,g,i),a4.ch,a4.cx,a4.cy,a4.db,a4.dx,o,m,n,f,e,d,c,!1,b)},
iK:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null
N.aj(a3,0,C.b,a3,0)
t=a4.r1
s=a4.r2
r=N.aX(a4.rx)
q=a4.ry
q=q==null?a3:N.Z(q)
p=a4.x1
p=p==null?a3:N.Z(p)
o=a4.dy
if(o==null)o=a3
else{n=H.j(o)
n=new H.d(o,n.h("c(1)").a(new V.N()),n.h("d<1,c>"))
o=n}if(o==null)o=H.a([],u.O)
n=u.G
o=P.m(o,!0,n)
m=a4.fr
if(m==null)m=a3
else{l=H.j(m)
l=new H.d(m,l.h("c(1)").a(new V.O()),l.h("d<1,c>"))
m=l}m=P.m(m==null?H.a([],u.O):m,!0,n)
l=a4.fx
if(l==null)l=a3
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.P()),k.h("d<1,c>"))
l=k}n=P.m(l==null?H.a([],u.O):l,!0,n)
l=a4.x
k=a4.y
j=a4.z
i=a4.Q
h=i.a
g=i.b
i=i.c
f=a4.gE(a4).i()
e=a4.b
if(e==null)e=H.f(H.i("name"))
d=a4.c
if(d===$)d=H.f(H.i("target"))
d=d==null?a3:d.i()
c=H.a([],u.r)
for(b=a4.gu(),a=b.length,a0=0;a0<b.length;b.length===a||(0,H.e)(b),++a0)c.push(b[a0].i())
a4.gG()
b=H.a([],u.l)
for(a=a4.gq(a4),a1=a.length,a0=0;a0<a.length;a.length===a1||(0,H.e)(a),++a0){a2=a[a0]
b.push(new Y.b(a2.a,a2.b,a2.c))}return new N.by(a4.V,a4.X,a4.O,a4.P,a4.aw,t,new Y.b(s.a,s.b,s.c),r,q,p,l,k,j,new Y.b(h,g,i),a4.ch,a4.cx,a4.cy,a4.db,a4.dx,o,m,n,f,e,d,c,!1,b)},
hb:function(a){var t=null,s=N.aj(t,0,C.b,t,0)
s=new N.bC(0,6.283185307179586,0.08,a,9,0.35,C.k,s,t,t,0,0,0,C.e,!0,0.01,!1,0.000001,4,t,t,t,C.b,t,t,t,t,t)
s.S(C.b,t,t)
s.a7(C.q,0,!0,C.b,!1,0.01,C.e,0,C.b,0,0.000001)
s.Z(C.b)
return s},
iS:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null
N.aj(a3,0,C.b,a3,0)
t=a4.r1
s=a4.r2
r=N.aX(a4.rx)
q=a4.ry
q=q==null?a3:N.Z(q)
p=a4.x1
p=p==null?a3:N.Z(p)
o=a4.dy
if(o==null)o=a3
else{n=H.j(o)
n=new H.d(o,n.h("c(1)").a(new V.N()),n.h("d<1,c>"))
o=n}if(o==null)o=H.a([],u.O)
n=u.G
o=P.m(o,!0,n)
m=a4.fr
if(m==null)m=a3
else{l=H.j(m)
l=new H.d(m,l.h("c(1)").a(new V.O()),l.h("d<1,c>"))
m=l}m=P.m(m==null?H.a([],u.O):m,!0,n)
l=a4.fx
if(l==null)l=a3
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.P()),k.h("d<1,c>"))
l=k}n=P.m(l==null?H.a([],u.O):l,!0,n)
l=a4.x
k=a4.y
j=a4.z
i=a4.Q
h=i.a
g=i.b
i=i.c
f=a4.gE(a4).i()
e=a4.b
if(e==null)e=H.f(H.i("name"))
d=a4.c
if(d===$)d=H.f(H.i("target"))
d=d==null?a3:d.i()
c=H.a([],u.r)
for(b=a4.gu(),a=b.length,a0=0;a0<b.length;b.length===a||(0,H.e)(b),++a0)c.push(b[a0].i())
a4.gG()
b=H.a([],u.l)
for(a=a4.gq(a4),a1=a.length,a0=0;a0<a.length;a.length===a1||(0,H.e)(a),++a0){a2=a[a0]
b.push(new Y.b(a2.a,a2.b,a2.c))}return new N.bC(a4.V,a4.X,a4.O,a4.P,a4.aw,t,new Y.b(s.a,s.b,s.c),r,q,p,l,k,j,new Y.b(h,g,i),a4.ch,a4.cx,a4.cy,a4.db,a4.dx,o,m,n,f,e,d,c,!1,b)},
e1:function(a,b,c,d,e,f,g,h,i,j,k,l,m){var t=null,s=N.aj(t,0,C.b,t,0),r=f==null?C.i:f,q=l==null?C.b:l
s=new N.M(c,h,k,e,0.35,C.k,s,t,t,m,b,j,i,!1,0.01,!1,0.000001,4,t,t,t,C.b,t,t,t,t,t)
s.S(C.b,t,t)
s.a7(a,b,!1,r,!1,0.01,i,j,q,m,0.000001)
s.Z(C.b)
return s},
j_:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a6.O,a5=a6.P
N.aj(a3,0,C.b,a3,0)
t=a6.r1
s=a6.r2
r=N.aX(a6.rx)
q=a6.ry
q=q==null?a3:N.Z(q)
p=a6.x1
p=p==null?a3:N.Z(p)
o=a6.dy
if(o==null)o=a3
else{n=H.j(o)
n=new H.d(o,n.h("c(1)").a(new V.N()),n.h("d<1,c>"))
o=n}if(o==null)o=H.a([],u.O)
n=u.G
o=P.m(o,!0,n)
m=a6.fr
if(m==null)m=a3
else{l=H.j(m)
l=new H.d(m,l.h("c(1)").a(new V.O()),l.h("d<1,c>"))
m=l}m=P.m(m==null?H.a([],u.O):m,!0,n)
l=a6.fx
if(l==null)l=a3
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.P()),k.h("d<1,c>"))
l=k}n=P.m(l==null?H.a([],u.O):l,!0,n)
l=a6.x
k=a6.y
j=a6.z
i=a6.Q
h=i.a
g=i.b
i=i.c
f=a6.gE(a6).i()
e=a6.b
if(e==null)e=H.f(H.i("name"))
d=a6.c
if(d===$)d=H.f(H.i("target"))
d=d==null?a3:d.i()
c=H.a([],u.r)
for(b=a6.gu(),a=b.length,a0=0;a0<b.length;b.length===a||(0,H.e)(b),++a0)c.push(b[a0].i())
a6.gG()
b=H.a([],u.l)
for(a=a6.gq(a6),a1=a.length,a0=0;a0<a.length;a.length===a1||(0,H.e)(a),++a0){a2=a[a0]
b.push(new Y.b(a2.a,a2.b,a2.c))}return new N.M(a6.V,a6.X,a4,a5,t,new Y.b(s.a,s.b,s.c),r,q,p,l,k,j,new Y.b(h,g,i),a6.ch,a6.cx,a6.cy,a6.db,a6.dx,o,m,n,f,e,d,c,!1,b)},
dV:function(a,b){var t,s,r=null,q=N.aj(r,0,C.b,r,0)
q=new N.bz(0.05,r,0.5,0,r,b,a,0.35,C.k,q,r,r,4,0,0,C.e,!1,0.01,!1,0.000001,4,r,r,r,C.b,r,r,r,r,r)
q.S(C.b,r,r)
q.a7(r,0,!1,C.i,!1,0.01,C.e,0,C.b,4,0.000001)
q.Z(C.b)
t=q.de()
s=new V.bA(4,0,0,C.e,!1,0.01,!1,0.000001,4,r,r,r,C.b,r,r,r,r,r)
s.S(C.b,r,r)
s.a7(r,0,!1,C.b,!1,0.01,C.e,0,C.b,4,0.000001)
s.dR(q,r,t,0.5)
q.saj(u.y.a(H.a([],u.l)))
q.a_(u.a.a(s.gu()))
return q},
iQ:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a6.O,a5=a6.P
N.aj(a3,0,C.b,a3,0)
t=a6.r1
s=a6.r2
r=N.aX(a6.rx)
q=a6.ry
q=q==null?a3:N.Z(q)
p=a6.x1
p=p==null?a3:N.Z(p)
o=a6.dy
if(o==null)o=a3
else{n=H.j(o)
n=new H.d(o,n.h("c(1)").a(new V.N()),n.h("d<1,c>"))
o=n}if(o==null)o=H.a([],u.O)
n=u.G
o=P.m(o,!0,n)
m=a6.fr
if(m==null)m=a3
else{l=H.j(m)
l=new H.d(m,l.h("c(1)").a(new V.O()),l.h("d<1,c>"))
m=l}m=P.m(m==null?H.a([],u.O):m,!0,n)
l=a6.fx
if(l==null)l=a3
else{k=H.j(l)
k=new H.d(l,k.h("c(1)").a(new V.P()),k.h("d<1,c>"))
l=k}n=P.m(l==null?H.a([],u.O):l,!0,n)
l=a6.x
k=a6.y
j=a6.z
i=a6.Q
h=i.a
g=i.b
i=i.c
f=a6.gE(a6).i()
e=a6.b
if(e==null)e=H.f(H.i("name"))
d=a6.c
if(d===$)d=H.f(H.i("target"))
d=d==null?a3:d.i()
c=H.a([],u.r)
for(b=a6.gu(),a=b.length,a0=0;a0<b.length;b.length===a||(0,H.e)(b),++a0)c.push(b[a0].i())
a6.gG()
b=H.a([],u.l)
for(a=a6.gq(a6),a1=a.length,a0=0;a0<a.length;a.length===a1||(0,H.e)(a),++a0){a2=a[a0]
b.push(new Y.b(a2.a,a2.b,a2.c))}return new N.bz(a6.ax,a6.ag,a6.b1,a6.V,a6.X,a4,a5,t,new Y.b(s.a,s.b,s.c),r,q,p,l,k,j,new Y.b(h,g,i),a6.ch,a6.cx,a6.cy,a6.db,a6.dx,o,m,n,f,e,d,c,!1,b)},
j5:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new N.bW(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
jb:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new N.bZ(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
eo:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(d==null)t=1.5707963267948966
else t=d
s=Z.i8(t,C.k).a5(0)
t=s.length
if(0>=t)return H.o(s,0)
r=s[0]
if(1>=t)return H.o(s,1)
q=s[1]
if(2>=t)return H.o(s,2)
p=s[2]
if(3>=t)return H.o(s,3)
o=s[3]
t=q*0
n=p*0
m=o+t-n
l=o*0
k=r*0
j=l+p-k
i=l+k-q
k=-r
h=k-t-n
n=-p
t=-q
k=Z.hX(3,new Y.b(m*o+h*k+j*n-i*t,j*o+h*t+i*k-m*n,i*o+h*n+m*t-j*k))
t=new N.b7(f,b,0,C.e,!1,0.01,!1,0.000001,4,g,g,g,C.b,g,g,g,g,g)
t.S(C.b,g,g)
t.a7(a,b,!1,c,!1,0.01,C.e,0,e,f,0.000001)
t.cf(k,a,b,!1,c,!1,C.e,0,e,f)
return t},
jj:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new N.b7(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
Z:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new N.br(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
j9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new N.bY(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
c8:function c8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d3:function d3(a){this.b=a},
b6:function b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2){var _=this
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
_.c=t
_.d=a0
_.e=null
_.f=a1
_.r=a2},
bo:function bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.V=a
_.X=b
_.O=c
_.P=d
_.aw=e
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
_.dy=t
_.fr=a0
_.fx=a1
_.a=a2
_.b=a3
_.c=a4
_.d=a5
_.e=null
_.f=a6
_.r=a7},
by:function by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.V=a
_.X=b
_.O=c
_.P=d
_.aw=e
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
_.dy=t
_.fr=a0
_.fx=a1
_.a=a2
_.b=a3
_.c=a4
_.d=a5
_.e=null
_.f=a6
_.r=a7},
bC:function bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.V=a
_.X=b
_.O=c
_.P=d
_.aw=e
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
_.dy=t
_.fr=a0
_.fx=a1
_.a=a2
_.b=a3
_.c=a4
_.d=a5
_.e=null
_.f=a6
_.r=a7},
M:function M(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5,a6){var _=this
_.V=a
_.X=b
_.O=c
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
_.fr=t
_.fx=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
bz:function bz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
_.ax=a
_.ag=b
_.b1=c
_.V=d
_.X=e
_.O=f
_.P=g
_.r1=h
_.r2=i
_.rx=j
_.ry=k
_.x1=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.ch=q
_.cx=r
_.cy=s
_.db=t
_.dx=a0
_.dy=a1
_.fr=a2
_.fx=a3
_.a=a4
_.b=a5
_.c=a6
_.d=a7
_.e=null
_.f=a8
_.r=a9},
bW:function bW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
b7:function b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
br:function br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bY:function bY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ej:function ej(){},
ek:function ek(a){this.a=a}},V={
jl:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new V.A(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
ht:function(a){var t=null,s=new V.aI(4,0,0,C.e,!1,0.01,!1,0.000001,4,t,t,t,C.b,t,t,t,t,t)
s.S(C.b,t,t)
s.a7(t,0,!1,t,!1,0.01,C.e,0,t,4,0.000001)
s.cg(a)
return s},
jk:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new V.aI(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
iR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.dy
if(b==null)b=c
else{t=H.j(b)
t=new H.d(b,t.h("c(1)").a(new V.N()),t.h("d<1,c>"))
b=t}if(b==null)b=H.a([],u.O)
t=u.G
b=P.m(b,!0,t)
s=a.fr
if(s==null)s=c
else{r=H.j(s)
r=new H.d(s,r.h("c(1)").a(new V.O()),r.h("d<1,c>"))
s=r}s=P.m(s==null?H.a([],u.O):s,!0,t)
r=a.fx
if(r==null)r=c
else{q=H.j(r)
q=new H.d(r,q.h("c(1)").a(new V.P()),q.h("d<1,c>"))
r=q}t=P.m(r==null?H.a([],u.O):r,!0,t)
r=a.x
q=a.y
p=a.z
o=a.Q
n=o.a
m=o.b
o=o.c
l=a.gE(a).i()
k=a.b
if(k==null)k=H.f(H.i("name"))
j=a.c
if(j===$)j=H.f(H.i("target"))
j=j==null?c:j.i()
i=H.a([],u.r)
for(h=a.gu(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].i())
a.gG()
h=H.a([],u.l)
for(g=a.gq(a),e=g.length,f=0;f<g.length;g.length===e||(0,H.e)(g),++f){d=g[f]
h.push(new Y.b(d.a,d.b,d.c))}return new V.bA(r,q,p,new Y.b(n,m,o),a.ch,a.cx,a.cy,a.db,a.dx,b,s,t,l,k,j,i,!1,h)},
A:function A(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
N:function N(){},
O:function O(){},
P:function P(){},
eu:function eu(){},
ev:function ev(){},
es:function es(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c,d,e,f,g){var _=this
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
bA:function bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bn:function bn(){},
i2:function(a,b,c,d){return d.a(J.h3(J.fq(a,1-c),J.fq(b,c)))},
fY:function(a,b,c){if(c>=1)return new S.x(b-1,1,u.d)
if(c<=0)return new S.x(a,0,u.d)
return new S.x(J.fr(V.i2(a,b,c,u.V)),C.d.ad((b-a)*c,1),u.d)},
fR:function(a){return new V.f9(a,a.length-1)},
h_:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b===1){t=H.a([],u.l)
for(s=a.a,r=J.aN(s),q=T.y(r.gm(s),0,1),p=q.length,o=a.$ti.Q[1],n=0;n<q.length;q.length===p||(0,H.e)(q),++n){if(r.gm(s)===0)H.f(H.S())
t.push(o.a(r.j(s,r.gm(s)-1)))}return t}t=u.l
s=H.a([],t)
for(r=a.a,q=J.aN(r),p=T.y(q.gm(r),0,1),o=p.length,m=a.$ti,l=m.h("ab.E"),m=m.h("ai<ab.E>"),n=0;n<p.length;p.length===o||(0,H.e)(p),++n){k=H.X(p[n])
j=new H.ai(a,k,null,m)
j.bo(a,k,null,l)
s.push(V.fR(j.a4(0)).$1(b))}i=(c-b)/(1-b)
t=H.a([],t)
for(r=T.y(q.gm(r),0,1),q=r.length,p=u.i,o=u.e3,n=0;n<r.length;r.length===q||(0,H.e)(r),++n){h=r[n]
if(typeof h!=="number")return h.w()
m=H.X(h+1)
P.cW(0,m,s.length)
l=new H.ai(s,0,m,o)
l.bo(s,0,m,p)
t.push(V.fR(l.a4(0)).$1(i))}return t},
f9:function f9(a,b){this.a=a
this.b=b},
f8:function f8(){}},Q={cG:function cG(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},dT:function dT(){},dS:function dS(){}},T={
y:function(a,b,c){var t,s=H.a([],u.X)
if(c>0)for(t=b;t<a;t+=c)C.a.D(s,t)
else for(t=b;t>a;t+=c)C.a.D(s,t)
return s},
ff:function(a,b){var t,s,r,q=J.ap(a)
if(q.ga9(a))return H.a([],b.h("u<x<r,0>>"))
t=H.a([],b.h("u<x<r,0>>"))
for(s=u.dq.H(b).h("x<1,2>"),r=0;r<q.gm(a);++r)C.a.D(t,new S.x(r,q.j(a,r),s))
return t},
kz:function(a,b){if(a.length===0)return b.a(0)
return C.a.a2(a,new T.fo(b))},
cy:function(a,b,c){var t,s,r,q,p,o,n,m=H.a([],u.b)
for(t=T.y(a,0,1),s=t.length,r=a-1,q=u.n,p=0;p<t.length;t.length===s||(0,H.e)(t),++p){o=t[p]
if(typeof o!=="number")return o.M()
n=o/r
m.push(H.a([c*(1-n)+b*n],q))}return Z.ae(null,m)},
fQ:function(a,b,c){var t,s,r,q,p=T.y(C.d.bA((a-b)/c),0,1),o=H.a([],u.b)
for(t=p.length,s=u.n,r=0;r<p.length;p.length===t||(0,H.e)(p),++r){q=p[r]
if(typeof q!=="number")return q.n()
o.push(H.a([q*c+b],s))}return Z.ae(null,o)},
cz:function(a,b,c){var t,s,r,q,p=a.length
if(p===0)return a
if(p>b)throw H.h("Trying to stretch an array to a length shorter than its own")
t=T.y(b,0,1)
s=H.j(t)
r=s.h("d<1,p>")
q=new H.d(t,s.h("p(1)").a(new T.fn(b,p)),r)
p=H.a([],c.h("u<0>"))
for(t=new H.V(q,q.gm(q),r.h("V<D.E>")),r=r.h("D.E");t.p();){s=C.d.a3(r.a(t.d))
if(s<0||s>=a.length)return H.o(a,s)
p.push(a[s])}return p},
ks:function(a,b,c,d){var t,s,r,q,p,o,n,m=Math.max(a.length,b.length),l=H.a([],c.h("u<0>"))
for(t=T.y(m,0,1),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r){q=t[r]
p=a.length
if(typeof q!=="number")return q.n()
o=C.d.aR(q*p,m)
if(o<0||o>=p)return H.o(a,o)
l.push(a[o])}t=H.a([],d.h("u<0>"))
for(s=T.y(m,0,1),p=s.length,r=0;r<s.length;s.length===p||(0,H.e)(s),++r){q=s[r]
o=b.length
if(typeof q!=="number")return q.n()
n=C.d.aR(q*o,m)
if(n<0||n>=o)return H.o(b,n)
t.push(b[n])}return new S.x(l,t,c.h("@<v<0>>").H(d.h("v<0>")).h("x<1,2>"))},
h0:function(a,b){var t=F.e3(a,new T.fp(b),b)
return P.m(t,!0,t.$ti.h("q.E"))},
ic:function(a,b){var t=P.m(a,!0,b)
if(0>=t.length)return H.o(t,-1)
t.pop()
return t},
kD:function(a,b){var t,s,r,q=H.a([],b.h("u<0>")),p=P.j1(b)
for(t=H.j(a).h("av<1>"),s=new H.av(a,t),s=new H.V(s,s.gm(s),t.h("V<D.E>")),t=t.h("D.E");s.p();){r=t.a(s.d)
if(!p.ao(0,r)){C.a.D(q,r)
p.D(0,r)}}t=b.h("av<0>")
return P.m(new H.av(q,t),!0,t.h("D.E"))},
fo:function fo(a){this.a=a},
fn:function fn(a,b){this.a=a
this.b=b},
fp:function fp(a){this.a=a}},S={aT:function aT(a,b){this.a=a
this.b=b},x:function x(a,b,c){this.a=a
this.b=b
this.$ti=c},b8:function b8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c7:function(a){var t=null,s=new S.c6(a,32,"KaTeX_Math",C.b,t,t,t,t,t)
s.S(C.b,t,t)
s.saj(u.y.a(H.a([C.c],u.l)))
s.Z(C.b)
return s},
jg:function(a){var t,s,r,q,p,o,n,m=a.y,l=a.gE(a).i(),k=a.b
if(k==null)k=H.f(H.i("name"))
t=a.c
if(t===$)t=H.f(H.i("target"))
t=t==null?null:t.i()
s=H.a([],u.r)
for(r=a.gu(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].i())
a.gG()
r=H.a([],u.l)
for(q=a.gq(a),o=q.length,p=0;p<q.length;q.length===o||(0,H.e)(q),++p){n=q[p]
r.push(new Y.b(n.a,n.b,n.c))}return new S.c6(a.x,m,a.z,l,k,t,s,!1,r)},
c6:function c6(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h
_.r=i}},X={a8:function a8(a){this.b=a},a2:function a2(){},
hV:function(a,b,c){var t,s
if(c){if(!$.du.cK(a)){t=u.S
$.du.l(0,a,P.fA(t,t))}if(!$.du.j(0,a).cK(b)){t=$.du.j(0,a)
t.toString
t.l(0,b,X.hV(a,b,!1))}t=$.du.j(0,a).j(0,b)
t.toString
return t}if(a<b)return 0
if(b===0)return 1
t=u.S
s=C.a.bI(T.y(b+1,1,1),1,new X.fb(),t)
return C.f.aR(C.a.bI(T.y(a-b,a,-1),1,new X.fc(),t),s)},
dx:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fb:function fb(){},
fc:function fc(){}},O={cT:function cT(){},bR:function bR(a){this.a=a},bS:function bS(a){this.a=a},bT:function bT(a){this.a=a},bQ:function bQ(a){this.a=a},bP:function bP(a){this.a=a}},Z={
ae:function(a,b){var t,s,r=new Z.ad(b)
if(a==null){t=r.gW(r).length
s=r.gW(r).length!==0?J.R(C.a.gB(r.gW(r))):0
a=new S.x(t,s,u.o)
t=a}else t=a
r.sdW(u.o.a(t))
return r},
bq:function(a,b){var t,s,r,q,p,o,n,m,l=b.b,k=H.a([],u.b)
for(t=T.y(b.a,0,1),s=t.length,r=u.n,q=0;q<t.length;t.length===s||(0,H.e)(t),++q){p=H.a([],r)
for(o=T.y(l,0,1),n=o.length,m=0;m<o.length;o.length===n||(0,H.e)(o),++m)p.push(a)
k.push(p)}return Z.ae(b,k)},
h7:function(a){var t,s,r,q,p,o=H.a([],u.b)
for(t=a.length,s=u.n,r=0;q=a.length,r<q;a.length===t||(0,H.e)(a),++r){p=a[r]
o.push(H.a([p.a,p.b,p.c],s))}return Z.ae(new S.x(q,3,u.o),o)},
fs:function(a){var t,s,r,q,p,o,n,m,l,k,j=H.a([],u.b)
for(t=T.y(a,0,1),s=t.length,r=u.n,q=0;q<t.length;t.length===s||(0,H.e)(t),++q){p=t[q]
o=H.a([],r)
for(n=T.y(a,0,1),m=n.length,l=J.bj(p),k=0;k<n.length;n.length===m||(0,H.e)(n),++k)if(l.K(p,n[k]))o.push(1)
else o.push(0)
j.push(o)}return Z.ae(new S.x(a,a,u.o),j)},
kv:function(a,b){var t=Z.i9(a),s=Z.kE(b)
return C.a.a2(H.a([s,t,s.dh()],u.w),new Z.fm())},
i9:function(a){var t=u.n
return Z.ae(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],t),H.a([Math.sin(a),Math.cos(a),0],t),H.a([0,0,1],t)],u.b))},
kE:function(a){var t,s,r,q,p,o
if(a.ah()===0)return Z.fs(3)
t=a.M(0,Math.sqrt(a.ah()))
s=Math.acos(t.c)
if(t.a!==0||t.b!==0){r=t.da(0)
q=r.M(0,Math.sqrt(r.ah()))
p=Math.acos(q.a)
if(q.b<0)p*=-1}else p=0
r=u.n
o=Z.ae(null,H.a([H.a([Math.cos(s),0,Math.sin(s)],r),H.a([0,1,0],r),H.a([-Math.sin(s),0,Math.cos(s)],r)],u.b))
return Z.i9(p).ay(o)},
i8:function(a,b){var t,s,r,q,p=a/2,o=b.M(0,Math.sqrt(b.ah())).n(0,Math.sin(p)),n=H.a([],u.b)
for(t=[o.a,o.b,o.c],s=t.length,r=u.n,q=0;q<s;++q)n.push(H.a([t[q]],r))
n.push(H.a([Math.cos(p)],r))
return Z.ae(null,n)},
hX:function(a,b){var t,s,r,q,p,o,n=6.283185307179586/a,m=u.bN,l=H.a([],m)
for(t=T.y(a,0,1),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r){q=t[r]
if(typeof q!=="number")return H.bk(q)
p=n*q
l.push(new S.aT(Math.cos(p),Math.sin(p)))}m=H.a([],m)
for(t=l.length,s=b.a,p=b.b,r=0;r<l.length;l.length===t||(0,H.e)(l),++r)m.push(l[r].n(0,new S.aT(s,p)))
l=H.a([],u.l)
for(t=m.length,r=0;r<m.length;m.length===t||(0,H.e)(m),++r){o=m[r]
l.push(new Y.b(o.a,o.b,0))}return l},
ad:function ad(a){this.a=a
this.b=null},
dG:function dG(a){this.a=a},
dJ:function dJ(a){this.a=a},
dI:function dI(a){this.a=a},
dH:function dH(a){this.a=a},
dF:function dF(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
dD:function dD(a){this.a=a},
dK:function dK(a){this.a=a},
dC:function dC(){},
dB:function dB(a){this.a=a},
fm:function fm(){},
kq:function(){var t=new Z.cS()
t.dT()
t.b9()},
cS:function cS(){var _=this
_.Q=_.z=_.y=null
_.a=0
_.x=_.r=_.f=_.d=null}},F={
e3:function(a,b,c){return F.j2(a,b,c,c)},
j2:function(a,b,c,d){return P.hO(function(){var t=a,s=b,r=c
var q=0,p=1,o,n,m,l
return function $async$e3(e,f){if(e===1){o=f
q=p}while(true)switch(q){case 0:n=J.aN(t),m=0
case 2:if(!(m<n.gm(t))){q=4
break}l=n.j(t,m)
q=H.fa(s.$2(m,l))?5:6
break
case 5:q=7
return l
case 7:case 6:case 3:++m
q=2
break
case 4:return P.hw()
case 1:return P.hx(o)}}},d)}}
var w=[C,H,J,P,W,A,R,K,B,M,Y,N,V,Q,T,S,X,O,Z,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fy.prototype={}
J.aa.prototype={
K:function(a,b){return a===b},
gv:function(a){return H.au(a)},
k:function(a){return"Instance of '"+H.eh(a)+"'"}}
J.cP.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$iJ:1}
J.b2.prototype={
K:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
$iK:1}
J.aV.prototype={
gv:function(a){return 0},
k:function(a){return String(a)}}
J.cV.prototype={}
J.al.prototype={}
J.aE.prototype={
k:function(a){var t=a[$.id()]
if(t==null)return this.dK(a)
return"JavaScript function for "+J.cB(t)},
$iaU:1}
J.u.prototype={
D:function(a,b){H.j(a).c.a(b)
if(!!a.fixed$length)H.f(P.a0("add"))
a.push(b)},
cX:function(a,b,c){var t,s
H.j(a).h("q<1>").a(c)
if(!!a.fixed$length)H.f(P.a0("insertAll"))
P.hk(b,0,a.length,"index")
if(!u.R.b(c))c=J.iB(c)
t=J.R(c)
a.length=a.length+t
s=b+t
this.c5(a,s,a.length,a,b)
this.ds(a,b,s,c)},
eY:function(a,b){var t
if(!!a.fixed$length)H.f(P.a0("remove"))
for(t=0;t<a.length;++t)if(J.a6(a[t],b)){a.splice(t,1)
return!0}return!1},
cC:function(a,b,c){var t,s,r,q,p
H.j(a).h("J(1)").a(b)
t=[]
s=a.length
for(r=0;r<s;++r){q=a[r]
if(!H.fa(b.$1(q)))t.push(q)
if(a.length!==s)throw H.h(P.af(a))}p=t.length
if(p===s)return
this.sm(a,p)
for(r=0;r<t.length;++r)a[r]=t[r]},
I:function(a,b){var t
H.j(a).h("q<1>").a(b)
if(!!a.fixed$length)H.f(P.a0("addAll"))
if(Array.isArray(b)){this.e_(a,b)
return}for(t=J.am(b);t.p();)a.push(t.gA())},
e_:function(a,b){var t,s
u.W.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.h(P.af(a))
for(s=0;s<t;++s)a.push(b[s])},
cZ:function(a,b,c){var t=H.j(a)
return new H.d(a,t.H(c).h("1(2)").a(b),t.h("@<1>").H(c).h("d<1,2>"))},
bK:function(a,b){var t,s=P.hi(a.length,"",!1,u.N)
for(t=0;t<a.length;++t)this.l(s,t,H.t(a[t]))
return s.join(b)},
eU:function(a){return this.bK(a,"")},
a6:function(a,b){return H.c5(a,b,null,H.j(a).c)},
a2:function(a,b){var t,s,r
H.j(a).h("1(1,1)").a(b)
t=a.length
if(t===0)throw H.h(H.S())
if(0>=t)return H.o(a,0)
s=a[0]
for(r=1;r<t;++r){s=b.$2(s,a[r])
if(t!==a.length)throw H.h(P.af(a))}return s},
bI:function(a,b,c,d){var t,s,r
d.a(b)
H.j(a).H(d).h("1(1,2)").a(c)
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.h(P.af(a))}return s},
T:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
gB:function(a){if(a.length>0)return a[0]
throw H.h(H.S())},
gJ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.h(H.S())},
c5:function(a,b,c,d,e){var t,s,r,q,p
H.j(a).h("q<1>").a(d)
if(!!a.immutable$list)H.f(P.a0("setRange"))
P.cW(b,c,a.length)
t=c-b
if(t===0)return
P.ag(e,"skipCount")
if(u.aH.b(d)){s=d
r=e}else{s=J.h5(d,e).aA(0,!1)
r=0}q=J.aN(s)
if(r+t>q.gm(s))throw H.h(H.iW())
if(r<b)for(p=t-1;p>=0;--p)a[b+p]=q.j(s,r+p)
else for(p=0;p<t;++p)a[b+p]=q.j(s,r+p)},
ds:function(a,b,c,d){return this.c5(a,b,c,d,0)},
cN:function(a,b){var t,s
H.j(a).h("J(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!H.fa(b.$1(a[s])))return!1
if(a.length!==t)throw H.h(P.af(a))}return!0},
dE:function(a,b){var t,s=H.j(a)
s.h("r(1,1)?").a(b)
if(!!a.immutable$list)H.f(P.a0("sort"))
t=b==null?J.jR():b
H.jf(a,t,s.c)},
dD:function(a){return this.dE(a,null)},
ao:function(a,b){var t
for(t=0;t<a.length;++t)if(J.a6(a[t],b))return!0
return!1},
ga9:function(a){return a.length===0},
k:function(a){return P.fx(a,"[","]")},
aA:function(a,b){var t=H.a(a.slice(0),H.j(a))
return t},
a4:function(a){return this.aA(a,!0)},
gF:function(a){return new J.bp(a,a.length,H.j(a).h("bp<1>"))},
gv:function(a){return H.au(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.f(P.a0("set length"))
if(b<0)throw H.h(P.ao(b,0,null,"newLength",null))
if(b>a.length)H.j(a).c.a(null)
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.fd(a,b))
return a[b]},
l:function(a,b,c){H.j(a).c.a(c)
if(!!a.immutable$list)H.f(P.a0("indexed set"))
if(b>=a.length||b<0)throw H.h(H.fd(a,b))
a[b]=c},
sJ:function(a,b){var t
H.j(a).c.a(b)
t=a.length
if(t===0)throw H.h(H.S())
this.l(a,t-1,b)},
$iE:1,
$iq:1,
$iv:1}
J.e0.prototype={}
J.bp.prototype={
gA:function(){return this.$ti.c.a(this.d)},
p:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.h(H.e(r))
t=s.c
if(t>=q){s.scu(null)
return!1}s.scu(r[t]);++s.c
return!0},
scu:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
J.aD.prototype={
cH:function(a,b){var t
H.f1(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gb5(b)
if(this.gb5(a)===t)return 0
if(this.gb5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb5:function(a){return a===0?1/a<0:a<0},
gca:function(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
a3:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.h(P.a0(""+a+".toInt()"))},
bA:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.h(P.a0(""+a+".ceil()"))},
cU:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.h(P.a0(""+a+".floor()"))},
bT:function(a,b){var t
if(b>20)throw H.h(P.ao(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gb5(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
w:function(a,b){H.f1(b)
return a+b},
n:function(a,b){return a*b},
ad:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cD(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.cD(a,b)},
cD:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.h(P.a0("Result of truncating division is "+H.t(t)+": "+H.t(a)+" ~/ "+b))},
eg:function(a,b){var t
if(a>0)t=this.ef(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ef:function(a,b){return b>31?0:a>>>b},
$ias:1,
$ip:1,
$iB:1}
J.b1.prototype={
gca:function(a){var t
if(a>0)t=1
else t=a<0?-1:a
return t},
$ir:1}
J.bI.prototype={}
J.at.prototype={
e3:function(a,b){if(b>=a.length)throw H.h(H.fd(a,b))
return a.charCodeAt(b)},
w:function(a,b){H.bd(b)
return a+b},
dG:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aG:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.ei(b,null))
if(b>c)throw H.h(P.ei(b,null))
if(c>a.length)throw H.h(P.ei(c,null))
return a.substring(b,c)},
cH:function(a,b){var t
H.bd(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm:function(a){return a.length},
$ias:1,
$ieg:1,
$iac:1}
H.aJ.prototype={
gF:function(a){var t=H.C(this)
return new H.bx(J.am(this.gak()),t.h("@<1>").H(t.Q[1]).h("bx<1,2>"))},
gm:function(a){return J.R(this.gak())},
ga9:function(a){return J.ix(this.gak())},
a6:function(a,b){var t=H.C(this)
return H.iJ(J.h5(this.gak(),b),t.c,t.Q[1])},
gB:function(a){return H.C(this).Q[1].a(J.iw(this.gak()))},
gJ:function(a){return H.C(this).Q[1].a(J.iy(this.gak()))},
k:function(a){return J.cB(this.gak())}}
H.bx.prototype={
p:function(){return this.a.p()},
gA:function(){return this.$ti.Q[1].a(this.a.gA())},
$iG:1}
H.aS.prototype={
gak:function(){return this.a}}
H.cd.prototype={$iE:1}
H.cb.prototype={
j:function(a,b){return this.$ti.Q[1].a(J.Q(this.a,b))},
l:function(a,b,c){var t=this.$ti
J.ir(this.a,b,t.c.a(t.Q[1].a(c)))},
$iE:1,
$iv:1}
H.a1.prototype={
gak:function(){return this.a}}
H.bK.prototype={
k:function(a){var t="LateInitializationError: "+this.a
return t}}
H.fl.prototype={
$0:function(){var t=new P.L($.H,u.ck)
t.co(null)
return t},
$S:15}
H.E.prototype={}
H.D.prototype={
gF:function(a){var t=this
return new H.V(t,t.gm(t),H.C(t).h("V<D.E>"))},
ga9:function(a){return this.gm(this)===0},
gB:function(a){if(this.gm(this)===0)throw H.h(H.S())
return this.T(0,0)},
gJ:function(a){var t=this
if(t.gm(t)===0)throw H.h(H.S())
return t.T(0,t.gm(t)-1)},
a2:function(a,b){var t,s,r,q=this
H.C(q).h("D.E(D.E,D.E)").a(b)
t=q.gm(q)
if(t===0)throw H.h(H.S())
s=q.T(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.T(0,r))
if(t!==q.gm(q))throw H.h(P.af(q))}return s},
a6:function(a,b){return H.c5(this,b,null,H.C(this).h("D.E"))}}
H.ai.prototype={
bo:function(a,b,c,d){var t,s=this.b
P.ag(s,"start")
t=this.c
if(t!=null){P.ag(t,"end")
if(s>t)throw H.h(P.ao(s,0,t,"start",null))}},
ge7:function(){var t=J.R(this.a),s=this.c
if(s==null||s>t)return t
return s},
geh:function(){var t=J.R(this.a),s=this.b
if(s>t)return t
return s},
gm:function(a){var t,s=J.R(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.t()
return t-r},
T:function(a,b){var t=this,s=t.geh()+b
if(b<0||s>=t.ge7())throw H.h(P.fw(b,t,"index",null,null))
return J.h4(t.a,s)},
a6:function(a,b){var t,s,r=this
P.ag(b,"count")
t=r.b+b
s=r.c
if(s!=null&&t>=s)return new H.bD(r.$ti.h("bD<1>"))
return H.c5(r.a,t,s,r.$ti.c)},
aA:function(a,b){var t,s,r,q=this,p=q.b,o=q.a,n=J.aN(o),m=n.gm(o),l=q.c
if(l!=null&&l<m)m=l
t=m-p
if(t<=0){o=q.$ti.c
return b?J.hf(0,o):J.he(0,o)}s=P.hi(t,n.T(o,p),b,q.$ti.c)
for(r=1;r<t;++r){C.a.l(s,r,n.T(o,p+r))
if(n.gm(o)<m)throw H.h(P.af(q))}return s},
a4:function(a){return this.aA(a,!0)}}
H.V.prototype={
gA:function(){return this.$ti.c.a(this.d)},
p:function(){var t,s=this,r=s.a,q=r.gm(r)
if(s.b!==q)throw H.h(P.af(r))
t=s.c
if(t>=q){s.scj(null)
return!1}s.scj(r.T(0,t));++s.c
return!0},
scj:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
H.d.prototype={
gm:function(a){return J.R(this.a)},
T:function(a,b){return this.b.$1(J.h4(this.a,b))}}
H.ay.prototype={
gF:function(a){return new H.ca(J.am(this.a),this.b,this.$ti.h("ca<1>"))}}
H.ca.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(H.fa(s.$1(t.gA())))return!0
return!1},
gA:function(){return this.a.gA()}}
H.aw.prototype={
a6:function(a,b){P.ag(b,"count")
return new H.aw(this.a,this.b+b,H.C(this).h("aw<1>"))},
gF:function(a){return new H.c1(J.am(this.a),this.b,H.C(this).h("c1<1>"))}}
H.b0.prototype={
gm:function(a){var t=J.R(this.a)-this.b
if(t>=0)return t
return 0},
a6:function(a,b){P.ag(b,"count")
return new H.b0(this.a,this.b+b,this.$ti)},
$iE:1}
H.c1.prototype={
p:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.p()
this.b=0
return t.p()},
gA:function(){return this.a.gA()}}
H.bD.prototype={
gF:function(a){return C.K},
ga9:function(a){return!0},
gm:function(a){return 0},
gB:function(a){throw H.h(H.S())},
gJ:function(a){throw H.h(H.S())},
a6:function(a,b){P.ag(b,"count")
return this}}
H.bE.prototype={
p:function(){return!1},
gA:function(){throw H.h(H.S())},
$iG:1}
H.av.prototype={
gm:function(a){return J.R(this.a)},
T:function(a,b){var t=this.a,s=J.aN(t)
return s.T(t,s.gm(t)-1-b)}}
H.cp.prototype={}
H.cO.prototype={
k:function(a){var t="<"+C.a.bK([H.ke(this.$ti.c)],", ")+">"
return this.a.k(0)+" with "+t}}
H.aC.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.kl(H.hW(this.a),this.$ti)}}
H.ep.prototype={
aa:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.bU.prototype={
k:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.cR.prototype={
k:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.d6.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ec.prototype={
k:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bF.prototype={}
H.ci.prototype={
k:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iaF:1}
H.a7.prototype={
k:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.ib(s==null?"unknown":s)+"'"},
$iaU:1,
gfh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.d2.prototype={}
H.d_.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.ib(t)+"'"}}
H.b_.prototype={
K:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.b_))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gv:function(a){var t,s=this.c
if(s==null)t=H.au(this.a)
else t=typeof s!=="object"?J.bl(s):H.au(s)
return(t^H.au(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.eh(u.K.a(t))+"'")}}
H.cX.prototype={
k:function(a){return"RuntimeError: "+this.a}}
H.d8.prototype={
k:function(a){return"Assertion failed: "+P.cK(this.a)}}
H.bJ.prototype={
gm:function(a){return this.a},
gcY:function(){return new H.bL(this,H.C(this).h("bL<1>"))},
cK:function(a){var t
if((a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.e5(t,a)}else return this.eR(a)},
eR:function(a){var t=this.d
if(t==null)return!1
return this.bJ(this.bv(t,C.f.gv(a)&0x3ffffff),a)>=0},
j:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.aS(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.aS(q,b)
r=s==null?o:s.b
return r}else return p.eS(b)},
eS:function(a){var t,s,r=this.d
if(r==null)return null
t=this.bv(r,J.bl(a)&0x3ffffff)
s=this.bJ(t,a)
if(s<0)return null
return t[s].b},
l:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.C(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.ck(t==null?n.b=n.bw():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.ck(s==null?n.c=n.bw():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bw()
q=J.bl(b)&0x3ffffff
p=n.bv(r,q)
if(p==null)n.by(r,q,[n.bq(b,c)])
else{o=n.bJ(p,b)
if(o>=0)p[o].b=c
else p.push(n.bq(b,c))}}},
cV:function(a,b){var t,s,r=this
H.C(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.h(P.af(r))
t=t.c}},
ck:function(a,b,c){var t,s=this,r=H.C(s)
r.c.a(b)
r.Q[1].a(c)
t=s.aS(a,b)
if(t==null)s.by(a,b,s.bq(b,c))
else t.b=c},
bq:function(a,b){var t=this,s=H.C(t),r=new H.e2(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
bJ:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a6(a[s].a,b))return s
return-1},
k:function(a){return P.hj(this)},
aS:function(a,b){return a[b]},
bv:function(a,b){return a[b]},
by:function(a,b,c){a[b]=c},
e6:function(a,b){delete a[b]},
e5:function(a,b){return this.aS(a,b)!=null},
bw:function(){var t="<non-identifier-key>",s=Object.create(null)
this.by(s,t,s)
this.e6(s,t)
return s}}
H.e2.prototype={}
H.bL.prototype={
gm:function(a){return this.a.a},
ga9:function(a){return this.a.a===0},
gF:function(a){var t=this.a,s=new H.bM(t,t.r,this.$ti.h("bM<1>"))
s.c=t.e
return s}}
H.bM.prototype={
gA:function(){return this.$ti.c.a(this.d)},
p:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.h(P.af(r))
t=s.c
if(t==null){s.scl(null)
return!1}else{s.scl(t.a)
s.c=t.c
return!0}},
scl:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
H.fg.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.fh.prototype={
$2:function(a,b){return this.a(a,b)},
$S:20}
H.fi.prototype={
$1:function(a){return this.a(H.bd(a))},
$S:23}
H.cQ.prototype={
k:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
eM:function(a){var t=this.b.exec(a)
if(t==null)return null
return new H.dg(t)},
$ieg:1}
H.dg.prototype={$ie5:1}
H.d1.prototype={$ie5:1}
H.eY.prototype={
p:function(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new H.d1(t,p)
r.c=s===r.c?s+1:s
return!0},
gA:function(){var t=this.d
t.toString
return t},
$iG:1}
H.ah.prototype={
h:function(a){return H.dn(v.typeUniverse,this,a)},
H:function(a){return H.jE(v.typeUniverse,this,a)}}
H.de.prototype={}
H.dl.prototype={
k:function(a){return H.Y(this.a,null)}}
H.dd.prototype={
k:function(a){return this.a}}
H.cl.prototype={}
P.eB.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:8}
P.eA.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:19}
P.eC.prototype={
$0:function(){this.a.$0()},
$S:9}
P.eD.prototype={
$0:function(){this.a.$0()},
$S:9}
P.eZ.prototype={
dV:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bh(new P.f_(this,b),0),a)
else throw H.h(P.a0("`setTimeout()` not found."))}}
P.f_.prototype={
$0:function(){this.b.$0()},
$S:0}
P.d9.prototype={
bB:function(a,b){var t,s=this,r=s.$ti
r.h("1/?").a(b)
if(b==null)b=r.c.a(b)
if(!s.b)s.a.co(b)
else{t=s.a
if(r.h("a9<1>").b(b))t.cq(b)
else t.bs(r.c.a(b))}},
cI:function(a,b){var t=this.a
if(this.b)t.at(a,b)
else t.e1(a,b)}}
P.f2.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:24}
P.f3.prototype={
$2:function(a,b){this.a.$2(1,new H.bF(a,u.k.a(b)))},
$S:26}
P.f7.prototype={
$2:function(a,b){this.a(H.X(a),b)},
$S:27}
P.bb.prototype={
k:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bc.prototype={
gA:function(){var t=this.c
if(t==null)return this.$ti.c.a(this.b)
return t.gA()},
p:function(){var t,s,r,q,p,o,n=this
for(t=n.$ti.h("G<1>");!0;){s=n.c
if(s!=null)if(s.p())return!0
else n.scA(null)
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bb){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.scn(null)
return!1}if(0>=p.length)return H.o(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=t.a(J.am(s))
if(o instanceof P.bc){s=n.d
if(s==null)s=n.d=[]
C.a.D(s,n.a)
n.a=o.a
continue}else{n.scA(o)
continue}}}}else{n.scn(r)
return!0}}return!1},
scn:function(a){this.b=this.$ti.h("1?").a(a)},
scA:function(a){this.c=this.$ti.h("G<1>?").a(a)},
$iG:1}
P.ck.prototype={
gF:function(a){return new P.bc(this.a(),this.$ti.h("bc<1>"))}}
P.bt.prototype={
k:function(a){return H.t(this.a)},
$iF:1,
gbm:function(){return this.b}}
P.db.prototype={
cI:function(a,b){var t
H.fS(a,"error",u.K)
t=this.a
if(t.a!==0)throw H.h(P.aG("Future already completed"))
t.at(a,b)}}
P.cj.prototype={
bB:function(a,b){var t,s=this.$ti
s.h("1/?").a(b)
t=this.a
if(t.a!==0)throw H.h(P.aG("Future already completed"))
t.cs(s.h("1/").a(b))}}
P.aY.prototype={
eX:function(a){if((this.c&15)!==6)return!0
return this.b.b.bR(u.al.a(this.d),a.a,u.cJ,u.K)},
eP:function(a){var t=this.e,s=u.z,r=u.K,q=a.a,p=this.$ti.h("2/"),o=this.b.b
if(u.ag.b(t))return p.a(o.f3(t,q,a.b,s,r,u.k))
else return p.a(o.bR(u.bI.a(t),q,s,r))}}
P.L.prototype={
bS:function(a,b,c){var t,s,r,q=this.$ti
q.H(c).h("1/(2)").a(a)
t=$.H
if(t!==C.h){c.h("@<0/>").H(q.c).h("1(2)").a(a)
if(b!=null)b=P.k_(b,t)}s=new P.L(t,c.h("L<0>"))
r=b==null?1:3
this.br(new P.aY(s,r,a,b,q.h("@<1>").H(c).h("aY<1,2>")))
return s},
d5:function(a,b){return this.bS(a,null,b)},
cE:function(a,b,c){var t,s=this.$ti
s.H(c).h("1/(2)").a(a)
t=new P.L($.H,c.h("L<0>"))
this.br(new P.aY(t,19,a,b,s.h("@<1>").H(c).h("aY<1,2>")))
return t},
br:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.br(a)
return}s.a=r
s.c=t.c}P.bf(null,null,s.b,u.M.a(new P.eH(s,a)))}},
cB:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.cB(a)
return}n.a=t
n.c=o.c}m.a=n.aV(a)
P.bf(null,null,n.b,u.M.a(new P.eP(m,n)))}},
aU:function(){var t=u.F.a(this.c)
this.c=null
return this.aV(t)},
aV:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
cp:function(a){var t,s,r,q=this
q.a=1
try{a.bS(new P.eL(q),new P.eM(q),u.P)}catch(r){t=H.aQ(r)
s=H.aO(r)
P.kw(new P.eN(q,t,s))}},
cs:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
if(r.h("a9<1>").b(a))if(r.b(a))P.eK(a,s)
else s.cp(a)
else{t=s.aU()
r.c.a(a)
s.a=4
s.c=a
P.ba(s,t)}},
bs:function(a){var t,s=this
s.$ti.c.a(a)
t=s.aU()
s.a=4
s.c=a
P.ba(s,t)},
at:function(a,b){var t,s,r=this
u.k.a(b)
t=r.aU()
s=P.dM(a,b)
r.a=8
r.c=s
P.ba(r,t)},
co:function(a){var t=this.$ti
t.h("1/").a(a)
if(t.h("a9<1>").b(a)){this.cq(a)
return}this.e2(t.c.a(a))},
e2:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.bf(null,null,t.b,u.M.a(new P.eJ(t,a)))},
cq:function(a){var t=this,s=t.$ti
s.h("a9<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.bf(null,null,t.b,u.M.a(new P.eO(t,a)))}else P.eK(a,t)
return}t.cp(a)},
e1:function(a,b){this.a=1
P.bf(null,null,this.b,u.M.a(new P.eI(this,a,b)))},
$ia9:1}
P.eH.prototype={
$0:function(){P.ba(this.a,this.b)},
$S:0}
P.eP.prototype={
$0:function(){P.ba(this.b,this.a.a)},
$S:0}
P.eL.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.bs(q.$ti.c.a(a))}catch(r){t=H.aQ(r)
s=H.aO(r)
q.at(t,s)}},
$S:8}
P.eM.prototype={
$2:function(a,b){this.a.at(u.K.a(a),u.k.a(b))},
$S:35}
P.eN.prototype={
$0:function(){this.a.at(this.b,this.c)},
$S:0}
P.eJ.prototype={
$0:function(){this.a.bs(this.b)},
$S:0}
P.eO.prototype={
$0:function(){P.eK(this.b,this.a)},
$S:0}
P.eI.prototype={
$0:function(){this.a.at(this.b,this.c)},
$S:0}
P.eS.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.d4(u.fO.a(r.d),u.z)}catch(q){t=H.aQ(q)
s=H.aO(q)
r=n.c&&u.t.a(n.b.a.c).a===t
p=n.a
if(r)p.c=u.t.a(n.b.a.c)
else p.c=P.dM(t,s)
p.b=!0
return}if(m instanceof P.L&&m.a>=4){if(m.a===8){r=n.a
r.c=u.t.a(m.c)
r.b=!0}return}if(u.m.b(m)){o=n.b.a
r=n.a
r.c=m.d5(new P.eT(o),u.z)
r.b=!1}},
$S:0}
P.eT.prototype={
$1:function(a){return this.a},
$S:36}
P.eR.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.bR(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.aQ(m)
s=H.aO(m)
r=this.a
r.c=P.dM(t,s)
r.b=!0}},
$S:0}
P.eQ.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=u.t.a(n.a.a.c)
q=n.b
if(q.a.eX(t)&&q.a.e!=null){q.c=q.a.eP(t)
q.b=!1}}catch(p){s=H.aQ(p)
r=H.aO(p)
q=u.t.a(n.a.a.c)
o=n.b
if(q.a===s)o.c=q
else o.c=P.dM(s,r)
o.b=!0}},
$S:0}
P.da.prototype={}
P.c3.prototype={
gm:function(a){var t,s,r=this,q={},p=new P.L($.H,u.fJ)
q.a=0
t=r.$ti
s=t.h("~(1)?").a(new P.el(q,r))
u.g5.a(new P.em(q,p))
W.eE(r.a,r.b,s,!1,t.c)
return p}}
P.el.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.em.prototype={
$0:function(){this.b.cs(this.a.a)},
$S:0}
P.c4.prototype={}
P.dj.prototype={}
P.co.prototype={$ihu:1}
P.f6.prototype={
$0:function(){var t=u.K.a(H.h(this.a))
t.stack=this.b.k(0)
throw t},
$S:0}
P.di.prototype={
f4:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.h===$.H){a.$0()
return}P.hP(q,q,this,a,u.q)}catch(r){t=H.aQ(r)
s=H.aO(r)
P.f5(q,q,this,u.K.a(t),u.k.a(s))}},
f5:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.h===$.H){a.$1(b)
return}P.hQ(q,q,this,a,b,u.q,c)}catch(r){t=H.aQ(r)
s=H.aO(r)
P.f5(q,q,this,u.K.a(t),u.k.a(s))}},
cG:function(a){return new P.eW(this,u.M.a(a))},
eu:function(a,b){return new P.eX(this,b.h("~(0)").a(a),b)},
d4:function(a,b){b.h("0()").a(a)
if($.H===C.h)return a.$0()
return P.hP(null,null,this,a,b)},
bR:function(a,b,c,d){c.h("@<0>").H(d).h("1(2)").a(a)
d.a(b)
if($.H===C.h)return a.$1(b)
return P.hQ(null,null,this,a,b,c,d)},
f3:function(a,b,c,d,e,f){d.h("@<0>").H(e).H(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===C.h)return a.$2(b,c)
return P.k0(null,null,this,a,b,c,d,e,f)},
d1:function(a,b,c,d){return b.h("@<0>").H(c).H(d).h("1(2,3)").a(a)}}
P.eW.prototype={
$0:function(){return this.a.f4(this.b)},
$S:0}
P.eX.prototype={
$1:function(a){var t=this.c
return this.a.f5(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.az.prototype={
eb:function(){return new P.az(H.C(this).h("az<1>"))},
gF:function(a){var t=this,s=new P.aZ(t,t.r,H.C(t).h("aZ<1>"))
s.c=t.e
return s},
gm:function(a){return this.a},
ga9:function(a){return this.a===0},
ao:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.g.a(t[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return u.g.a(s[b])!=null}else return this.e4(b)},
e4:function(a){var t=this.d
if(t==null)return!1
return this.cv(t[this.ct(a)],a)>=0},
gB:function(a){var t=this.e
if(t==null)throw H.h(P.aG("No elements"))
return H.C(this).c.a(t.a)},
gJ:function(a){var t=this.f
if(t==null)throw H.h(P.aG("No elements"))
return H.C(this).c.a(t.a)},
D:function(a,b){var t,s,r=this
H.C(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.cm(t==null?r.b=P.fG():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.cm(s==null?r.c=P.fG():s,b)}else return r.dZ(b)},
dZ:function(a){var t,s,r,q=this
H.C(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.fG()
s=q.ct(a)
r=t[s]
if(r==null)t[s]=[q.bx(a)]
else{if(q.cv(r,a)>=0)return!1
r.push(q.bx(a))}return!0},
cm:function(a,b){H.C(this).c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.bx(b)
return!0},
ea:function(){this.r=this.r+1&1073741823},
bx:function(a){var t,s=this,r=new P.df(H.C(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.ea()
return r},
ct:function(a){return J.bl(a)&1073741823},
cv:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a6(a[s].a,b))return s
return-1}}
P.df.prototype={}
P.aZ.prototype={
gA:function(){return this.$ti.c.a(this.d)},
p:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.h(P.af(r))
else if(s==null){t.scr(null)
return!1}else{t.scr(t.$ti.h("1?").a(s.a))
t.c=s.b
return!0}},
scr:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
P.bH.prototype={}
P.ab.prototype={
gF:function(a){var t=this
return new H.V(t,t.gm(t),t.$ti.h("V<ab.E>"))},
T:function(a,b){return this.$ti.Q[1].a(J.Q(this.a,b))},
ga9:function(a){return J.R(this.a)===0},
gB:function(a){var t=this.a,s=J.aN(t)
if(s.gm(t)===0)throw H.h(H.S())
return this.$ti.Q[1].a(s.j(t,0))},
gJ:function(a){var t=this.a,s=J.aN(t)
if(s.gm(t)===0)throw H.h(H.S())
return this.$ti.Q[1].a(s.j(t,s.gm(t)-1))},
cZ:function(a,b,c){var t=this.$ti
return new H.d(this,t.H(c).h("1(ab.E)").a(b),t.h("@<ab.E>").H(c).h("d<1,2>"))},
a6:function(a,b){return H.c5(this,b,null,this.$ti.h("ab.E"))},
k:function(a){return P.fx(this,"[","]")}}
P.bO.prototype={}
P.e4.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.t(a)
s.a=t+": "
s.a+=H.t(b)},
$S:40}
P.b3.prototype={
cV:function(a,b){var t,s,r=H.C(this)
r.h("~(1,2)").a(b)
for(t=this.gcY(),t=t.gF(t),r=r.Q[1];t.p();){s=t.gA()
b.$2(s,r.a(this.j(0,s)))}},
gm:function(a){var t=this.gcY()
return t.gm(t)},
k:function(a){return P.hj(this)},
$ibN:1}
P.c0.prototype={
ga9:function(a){return this.a===0},
k:function(a){return P.fx(this,"{","}")},
a6:function(a,b){return H.ho(this,b,H.C(this).c)},
gB:function(a){var t=P.fF(this,this.r,H.C(this).c)
if(!t.p())throw H.h(H.S())
return t.$ti.c.a(t.d)},
gJ:function(a){var t,s,r=P.fF(this,this.r,H.C(this).c)
if(!r.p())throw H.h(H.S())
t=r.$ti.c
do s=t.a(r.d)
while(r.p())
return s}}
P.ch.prototype={
eT:function(a,b){var t,s,r,q=this,p=q.eb()
for(t=P.fF(q,q.r,H.C(q).c),s=t.$ti.c;t.p();){r=s.a(t.d)
if(b.ao(0,r))p.D(0,r)}return p},
$iE:1,
$iq:1,
$ic_:1}
P.cq.prototype={}
P.F.prototype={
gbm:function(){return H.aO(this.$thrownJsError)}}
P.bs.prototype={
k:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.cK(t)
return"Assertion failed"}}
P.d4.prototype={}
P.cU.prototype={
k:function(a){return"Throw of null."}}
P.aq.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
k:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gbu()+p+n
if(!r.a)return m
t=r.gbt()
s=P.cK(r.b)
return m+t+": "+s}}
P.bX.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.t(r):""
else if(r==null)t=": Not greater than or equal to "+H.t(s)
else if(r>s)t=": Not in inclusive range "+H.t(s)+".."+H.t(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.t(s)
return t}}
P.cN.prototype={
gbu:function(){return"RangeError"},
gbt:function(){if(H.X(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gm:function(a){return this.f}}
P.d7.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.d5.prototype={
k:function(a){var t="UnimplementedError: "+this.a
return t}}
P.b5.prototype={
k:function(a){return"Bad state: "+this.a}}
P.cH.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cK(t)+"."}}
P.c2.prototype={
k:function(a){return"Stack Overflow"},
gbm:function(){return null},
$iF:1}
P.cJ.prototype={
k:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.eG.prototype={
k:function(a){return"Exception: "+this.a}}
P.dY.prototype={
k:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r=="string"){if(r.length>78)r=C.m.aG(r,0,75)+"..."
return s+"\n"+r}else return s}}
P.q.prototype={
aA:function(a,b){return P.m(this,b,H.C(this).h("q.E"))},
a4:function(a){return this.aA(a,!0)},
gm:function(a){var t,s=this.gF(this)
for(t=0;s.p();)++t
return t},
ga9:function(a){return!this.gF(this).p()},
a6:function(a,b){return H.ho(this,b,H.C(this).h("q.E"))},
gB:function(a){var t=this.gF(this)
if(!t.p())throw H.h(H.S())
return t.gA()},
gJ:function(a){var t,s=this.gF(this)
if(!s.p())throw H.h(H.S())
do t=s.gA()
while(s.p())
return t},
T:function(a,b){var t,s,r
P.ag(b,"index")
for(t=this.gF(this),s=0;t.p();){r=t.gA()
if(b===s)return r;++s}throw H.h(P.fw(b,this,"index",null,s))},
k:function(a){return P.iV(this,"(",")")}}
P.G.prototype={}
P.K.prototype={
gv:function(a){return P.z.prototype.gv.call(C.W,this)},
k:function(a){return"null"}}
P.z.prototype={constructor:P.z,$iz:1,
K:function(a,b){return this===b},
gv:function(a){return H.au(this)},
k:function(a){return"Instance of '"+H.eh(this)+"'"},
toString:function(){return this.k(this)}}
P.dk.prototype={
k:function(a){return""},
$iaF:1}
P.d0.prototype={
gm:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.n.prototype={}
W.cD.prototype={
k:function(a){var t=String(a)
t.toString
return t}}
W.cE.prototype={
k:function(a){var t=String(a)
t.toString
return t}}
W.aR.prototype={
seQ:function(a,b){a.height=b},
sfb:function(a,b){a.width=b},
$iaR:1}
W.bw.prototype={
sb3:function(a,b){a.fillStyle=b},
scc:function(a,b){a.strokeStyle=b},
$ibw:1}
W.an.prototype={
gm:function(a){return a.length}}
W.dW.prototype={
k:function(a){var t=String(a)
t.toString
return t}}
W.bB.prototype={
k:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.t(s)+", "
t=a.top
t.toString
t=s+H.t(t)+") "
s=a.width
s.toString
s=t+H.t(s)+" x "
t=a.height
t.toString
return s+H.t(t)},
K:function(a,b){var t,s
if(b==null)return!1
if(u.eU.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q=a.left
q.toString
q=C.d.gv(q)
t=a.top
t.toString
t=C.d.gv(t)
s=a.width
s.toString
s=C.d.gv(s)
r=a.height
r.toString
return W.hy(q,t,s,C.d.gv(r))},
$ifE:1}
W.k.prototype={
k:function(a){var t=a.localName
t.toString
return t},
$ik:1}
W.l.prototype={$il:1}
W.U.prototype={
e0:function(a,b,c,d){return a.addEventListener(b,H.bh(u.A.a(c),1),!1)},
ed:function(a,b,c,d){return a.removeEventListener(b,H.bh(u.A.a(c),1),!1)},
$iU:1}
W.cM.prototype={
gm:function(a){return a.length}}
W.a4.prototype={$ia4:1}
W.a_.prototype={
k:function(a){var t=a.nodeValue
return t==null?this.dJ(a):t}}
W.cY.prototype={
gm:function(a){return a.length}}
W.ak.prototype={}
W.b9.prototype={
gep:function(a){var t=new P.L($.H,u.dL),s=u.c4.a(new W.ez(new P.cj(t,u.g4)))
this.e8(a)
s=W.hS(s,u.H)
s.toString
this.ee(a,s)
return t},
ee:function(a,b){var t=a.requestAnimationFrame(H.bh(u.c4.a(b),1))
t.toString
return t},
e8:function(a){var t=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
t.toString
if(t)return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ez.prototype={
$1:function(a){this.a.bB(0,H.f1(a))},
$S:43}
W.cc.prototype={
k:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.t(s)+", "
t=a.top
t.toString
t=s+H.t(t)+") "
s=a.width
s.toString
s=t+H.t(s)+" x "
t=a.height
t.toString
return s+H.t(t)},
K:function(a,b){var t,s
if(b==null)return!1
if(u.eU.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q=a.left
q.toString
q=C.d.gv(q)
t=a.top
t.toString
t=C.d.gv(t)
s=a.width
s.toString
s=C.d.gv(s)
r=a.height
r.toString
return W.hy(q,t,s,C.d.gv(r))}}
W.fv.prototype={}
W.ce.prototype={}
W.dc.prototype={}
W.cf.prototype={
ev:function(){var t,s=this,r=s.b
if(r==null)return $.h2()
t=s.d
if(t!=null)J.it(r,s.c,u.A.a(t),!1)
s.b=null
s.sec(null)
return $.h2()},
sec:function(a){this.d=u.A.a(a)}}
W.eF.prototype={
$1:function(a){return this.a.$1(u.J.a(a))},
$S:14}
P.dh.prototype={
dU:function(a){var t,s,r,q,p,o,n,m=this,l=4294967296
do{t=a>>>0
a=C.f.a8(a-t,l)
s=a>>>0
a=C.f.a8(a-s,l)
r=(~t>>>0)+(t<<21>>>0)
q=r>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.f.a8(r-q,l)>>>0
r=((q^(q>>>24|s<<8))>>>0)*265
t=r>>>0
s=((s^s>>>24)>>>0)*265+C.f.a8(r-t,l)>>>0
r=((t^(t>>>14|s<<18))>>>0)*21
t=r>>>0
s=((s^s>>>14)>>>0)*21+C.f.a8(r-t,l)>>>0
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=r>>>0
p=C.f.a8(r-q,l)
r=m.a*1037
o=m.a=r>>>0
n=m.b*1037+C.f.a8(r-o,l)>>>0
m.b=n
o=(o^q)>>>0
m.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p>>>0)>>>0
m.b=p}while(a!==0)
if(p===0&&o===0)m.a=23063
m.aT()
m.aT()
m.aT()
m.aT()},
aT:function(){var t=this,s=t.a,r=4294901760*s,q=r>>>0,p=55905*s,o=p>>>0,n=o+q+t.b
s=n>>>0
t.a=s
t.b=C.f.a8(p-o+(r-q)+(n-s),4294967296)>>>0},
$ij8:1}
P.aW.prototype={
k:function(a){return"Point("+H.t(this.a)+", "+H.t(this.b)+")"},
K:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a&&this.b===b.b},
gv:function(a){var t=C.d.gv(this.a),s=C.d.gv(this.b),r=H.hq(H.hq(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.a3.prototype={
gF:function(a){var t=this.$ti,s=J.iA(this.a,new A.dZ(this),t.h("G<1>"))
return new A.cg(P.m(s,!1,s.$ti.h("D.E")),t.h("cg<1>"))}}
A.dZ.prototype={
$1:function(a){return J.am(this.a.$ti.h("q<1>").a(a))},
$S:function(){return this.a.$ti.h("G<1>(q<1>)")}}
A.cg.prototype={
p:function(){var t,s,r,q=this,p=q.a
if(p.length===0)return!1
for(t=0;s=p.length,t<s;++t)if(!p[t].p()){q.scz(null)
return!1}if(s>4294967295)H.f(P.ao(s,0,4294967295,"length",null))
r=J.hg(new Array(s),q.$ti.c)
for(t=0;t<s;++t){if(t>=p.length)return H.o(p,t)
r[t]=p[t].gA()}q.scz(r)
return!0},
gA:function(){var t=this.b
return t==null?H.f(P.aG("No element")):t},
scz:function(a){this.b=this.$ti.h("v<1>?").a(a)},
$iG:1}
R.dP.prototype={
bC:function(a){var t,s,r,q
u.a.a(a)
t=new R.dQ()
s=H.a([],u.r)
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.e)(a),++q)C.a.I(s,t.$1(a[q]))
return T.kD(s,u.j)},
d2:function(a){var t,s,r,q,p,o,n,m,l,k="renderer",j="ctx"
for(t=this.bC(u.a.a(a)),s=H.j(t).h("av<1>"),t=new H.av(t,s),t=new H.V(t,t.gm(t),s.h("V<D.E>")),r=this.r,s=s.h("D.E");t.p();){q=s.a(t.d)
if(q instanceof V.A){p=r.a;(p==null?H.f(H.i(k)):p).eZ(q)}else{p=r.a
if(q instanceof M.aH){if(p==null)p=H.f(H.i(k))
o=p.e
if(o==null)o=H.f(H.i(j))
o.font="normal "+H.t(q.y/70)+"px "+q.z
o=p.d
if(o==null)o=H.f(H.i("display"))
n=q.a
m=o.aI(n)
o=p.e;(o==null?H.f(H.i(j)):o).save()
o=p.e
if(o==null)o=H.f(H.i(j))
C.p.sb3(o,m.aB())
o=p.e;(o==null?H.f(H.i(j)):o).scale(1,-1)
o=p.e;(o==null?H.f(H.i(j)):o).textBaseline="middle"
o=p.e;(o==null?H.f(H.i(j)):o).textAlign="center"
o=q.bc(0,C.d.a3(C.c.ar(0)))
n=q.bc(1,C.d.a3(C.c.ar(1)))
q.bc(2,C.d.a3(C.c.ar(2)))
l=p.e
if(l==null)l=H.f(H.i(j))
l.fillText(q.x,o,-n)
q=p.e;(q==null?H.f(H.i(j)):q).restore()}else if(p==null)H.f(H.i(k))}}},
d6:function(a,b){u.y.a(b)
return!C.a.cN(b,new R.dR())?H.a([C.c],u.l):b}}
R.dQ.prototype={
$1:function(a){return a.aD()},
$S:16}
R.dR.prototype={
$1:function(a){u.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
K.bm.prototype={
gb7:function(){var t=this.a
return t==null?H.f(H.i("renderer")):t},
gL:function(){var t=this.b
return t==null?H.f(H.i("camera")):t},
aI:function(a){return a},
bb:function(a,b){var t,s,r=this
r.gL()
t=X.dx(a,0,1280,-r.gL().c/2,r.gL().c/2)
r.gL()
s=X.dx(b,720,0,-r.gL().d/2,r.gL().d/2)
r.gL()
return new Y.b(t,s,0).w(0,C.c)}}
K.cC.prototype={
be:function(a){var t,s,r,q
u.p.a(a)
t=this.d.getBoundingClientRect()
s=t.left
s.toString
r=t.right
r.toString
this.gL()
q=X.dx(a.a,s,r,0,1280)
r=t.top
r.toString
s=t.bottom
s.toString
this.gL()
return new Y.b(q,X.dx(a.b,r,s,0,720),0)},
es:function(){var t=this,s=t.d,r=u.do,q=r.h("~(1)?"),p=q.a(new K.dy(t))
u.g5.a(null)
r=r.c
C.a.I(t.r,H.a([W.eE(s,"mousemove",p,!1,r),W.eE(s,"mousedown",q.a(new K.dz(t)),!1,r),W.eE(s,"mouseup",q.a(new K.dA(t)),!1,r)],u.L))},
f8:function(){var t,s,r
for(t=this.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)t[r].ev()}}
K.dy.prototype={
$1:function(a){var t,s,r,q
u.E.a(a)
t=this.a
s=t.ch
t.cx=new Y.b(s.a,s.b,s.c)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.be(new P.aW(s,r,u.p))
r=t.bb(q.a,q.b)
t.ch=r
r.t(0,t.cx)
$.cA().b0(new O.bR(C.r))
if(t.x){s=t.ch
t.z=s
t.y.t(0,s)
$.cA().b0(new O.bQ(C.v))}},
$S:5}
K.dz.prototype={
$1:function(a){var t,s,r,q,p
u.E.a(a)
t=this.a
s=t.ch
t.cx=new Y.b(s.a,s.b,s.c)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.be(new P.aW(s,r,u.p))
t.ch=t.bb(q.a,q.b)
r=a.button
r.toString
s=new O.bP(r)
s.bn(r)
t.Q=s
$.cA().b0(new O.bS(C.t))
t.x=!0
s=t.ch
r=s.a
p=s.b
s=s.c
t.y=new Y.b(r,p,s)
t.z=new Y.b(r,p,s)},
$S:5}
K.dA.prototype={
$1:function(a){var t,s,r,q
u.E.a(a)
t=this.a
s=t.ch
t.cx=new Y.b(s.a,s.b,s.c)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.be(new P.aW(s,r,u.p))
t.ch=t.bb(q.a,q.b)
r=a.button
r.toString
s=new O.bP(r)
s.bn(r)
t.Q=s
$.cA().b0(new O.bT(C.u))
t.x=!1},
$S:5}
B.cF.prototype={}
M.b4.prototype={
i:function(){return M.fD(this)},
eo:function(){var t,s,r,q=this,p=u.aW,o=H.a([],p),n=q.cT?-1:1,m=q.b2
m.toString
t=q.cQ
t=T.fQ(q.ag+n*t/2,m,t).a5(0)
m=t.length
s=q.cP
r=0
for(;r<t.length;t.length===m||(0,H.e)(t),++r)o.push(q.c1(t[r],s))
q.sf6(o)
p=H.a([],p)
for(o=q.cR,m=o.length,s*=q.cS,r=0;r<o.length;o.length===m||(0,H.e)(o),++r)p.push(q.c1(o[r],s))
q.ser(p)
p=q.bG
p.toString
p=P.m(p,!0,u.j)
o=q.bH
o.toString
C.a.I(p,o)
q.a_(u.a.a(p))},
c1:function(a,b){var t,s=this,r=null,q=C.j.n(0,b),p=N.e1(r,0,0,!1,C.n.n(0,b),r,!1,r,C.e,0,q,r,4)
p.aL(0,s.R().t(0,s.U()).aH())
p.d_(s.bO(a))
p.Z(s.bX())
q=s.bd()
if(0>=q.length)return H.o(q,0)
p.bj(q[0])
q=C.a.gB(s.aE(!1))
t=s.x
p.c7(q,t)
return p},
bO:function(a){var t=this,s=X.dx(a,t.ax,t.ag,0,1)
return V.i2(t.U(),t.R(),s,u.i)},
sf6:function(a){this.bG=u.g2.a(a)},
ser:function(a){this.bH=u.g2.a(a)}}
M.ed.prototype={
$1:function(a){return u.f.a(a).i()},
$S:10}
M.ee.prototype={
$1:function(a){return u.f.a(a).i()},
$S:10}
M.cI.prototype={
dg:function(a,b,c){var t,s=null
u.B.a(a)
t=new Y.bV(0.01,c,b,1e-8,C.a_,new M.dU(this,a),4,0,0,C.e,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
t.S(C.b,s,s)
t.a7(s,0,!1,s,!1,0.01,C.e,0,s,4,0.000001)
t.bj(C.i)
return t}}
M.dU.prototype={
$1:function(a){H.dp(a)
return this.a.af(new Y.b(a,this.b.$1(a),0))},
$S:11}
M.bu.prototype={
gaM:function(){var t=this.bD
return t==null?H.f(H.i("xAxis")):t},
gaN:function(){var t=this.bE
return t==null?H.f(H.i("yAxis")):t},
cL:function(b8,b9,c0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.a.a2(H.a([c0,this.cO,C.I],u.f_),new M.dN()),b7=b6.a
if(b7==null)b7=C.F
t=b6.e
if(t==null)t=1
s=b6.f
r=b6.r
if(r==null)r=0.1
q=b6.x
if(q==null)q=1
p=b6.y
o=b6.z
if(o==null)o=H.a([0],u.n)
n=b6.Q
m=b6.ch
l=b6.cx
if(l==null)l=2
k=b6.cy
if(k==null)k=0
j=b6.db
if(j==null)j=0.75
i=b6.d
if(i==null)i=C.j
h=b6.dx
if(h==null)h=0.25
g=b6.b
g=g!==!1
f=b6.dy
if(f==null)f=0.25
e=b6.fr
if(e==null)e=0.25
d=b6.fx
c=b6.c
b=b6.fy
if(b==null)b=4
a=N.aj(b5,0,C.b,b5,0)
s=new M.b4(b8,b9,t,s!==!1,r,q,p,o,n===!0,m,l,k,j,i,h,g,d,c!==!1,f,e,b5,b5,0,b5,C.l,C.o,0.35,C.k,a,b5,b5,b,0,0,C.e,!1,0.01,!1,0.000001,4,b5,b5,b5,C.b,b5,b5,b5,b5,b5)
s.S(C.b,b5,b5)
s.a7(b5,0,!1,b7,!1,0.01,C.e,0,b7,b,0.000001)
s.Z(C.b)
e=Math.max(f,e)
s.r1=e
if(g)s.ag=s.ag+e/2
s.O=C.l.n(0,t).n(0,b8)
b7=C.l.n(0,t).n(0,s.ag)
s.P=b7
s.aK(s.O,b7)
s.N(s.bO(k).n(0,-1))
if(s.b2==null)s.b2=q*C.d.bA(b8/q)
if(g){a0=s.r1
a1=s.bX()
a2=N.aX(a)
b7=a2.a
b7=b7==null?b5:b7.length===0
if(b7!==!1)a2=a2.fc(a1.i())
b7=a2.b
b7=b7==null?b5:b7.length===0
if(b7!==!1)a2=a2.fd(a1.i())
a3=Z.i8(3.141592653589793,C.k).a5(0)
b7=a3.length
if(0>=b7)return H.o(a3,0)
a4=a3[0]
if(1>=b7)return H.o(a3,1)
a5=a3[1]
if(2>=b7)return H.o(a3,2)
a6=a3[2]
if(3>=b7)return H.o(a3,3)
a7=a3[3]
b7=a5*0
t=a6*0
a8=a7+b7-t
r=a7*0
q=a4*0
a9=r+a6-q
b0=r+q-a5
q=-a4
b1=q-b7-t
t=-a6
b7=-a5
q=Z.hX(3,new Y.b(a8*a7+b1*q+a9*t-b0*b7,a9*a7+b1*b7+b0*q-a8*t,b0*a7+b1*t+a8*b7-a9*q))
b2=new N.br(0,0,0,C.e,!1,0.01,!1,0.000001,4,b5,b5,b5,C.b,b5,b5,b5,b5,b5)
b2.S(C.b,b5,b5)
b2.a7(b5,0,!1,b5,!1,0.01,C.e,0,b5,0,0.000001)
b2.cf(q,b5,0,!1,b5,!1,C.e,0,b5,0)
b2.aL(0,3.141592653589793)
b2.dB(a0,!0)
b2.dq(a0,!0)
b2.eW(s)
b2.dA(a2)
b3=s.R()
b4=s.di()
b2.aL(0,-b4.t(0,b3).aH()-C.a.gB(b2.gq(b2)).t(0,b2.bP(0.5)).aH()-3.141592653589793)
b2.N(b3.t(0,C.a.gB(b2.gq(b2))))
s.f0(b2,C.a1)
s.x1=b2
s.a_(u.a.a(H.a([b2],u.r)))}s.eo()
return s},
af:function(a){var t,s,r,q,p,o="getStart",n=this.gaM().bO(0),m=new Y.b(n.a,n.b,n.c),l=H.a([a.a,a.b,a.c],u.n),k=this.bF
l=new A.a3(H.a([l,(k==null?H.f(H.i("axes")):k).gu()],u.eG),u.bo)
l=l.gF(l)
k=u.f4
for(;l.p();){t=l.b
if(t==null)t=H.f(P.aG("No element"))
if(1>=t.length)return H.o(t,1)
s=k.a(t[1])
r=s.ax
q=(H.dp(t[0])-r)/(s.ag-r)+0
r=s.ry
if(r!=null){r.aq(o)
r=r.r
r=C.a.gB(r==null?H.f(H.i("points")):r)}else r=s.ce()
p=s.x1
if(p!=null){p.aq(o)
p=p.r
p=C.a.gB(p==null?H.f(H.i("points")):p)}else p=s.cd()
m=m.w(0,r.n(0,1-q).w(0,p.n(0,q)).t(0,n))}return m},
i:function(){return M.iF(this)}}
M.dN.prototype={
$2:function(a,b){var t=u.dK
return t.a(a).bM(t.a(b))},
$S:21}
M.T.prototype={
bM:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
if(c==null)c=a.a
t=d.e
if(t==null)t=a.e
s=d.f
if(s==null)s=a.f
r=d.r
if(r==null)r=a.r
q=d.x
if(q==null)q=a.x
p=d.z
if(p==null)p=a.z
o=d.Q
if(o==null)o=a.Q
n=d.cx
if(n==null)n=a.cx
m=d.cy
if(m==null)m=a.cy
l=d.db
if(l==null)l=a.db
k=d.d
if(k==null)k=a.d
j=d.dx
if(j==null)j=a.dx
i=d.b
if(i==null)i=a.b
h=d.dy
if(h==null)h=a.dy
g=d.fr
if(g==null)g=a.fr
f=d.c
if(f==null)f=a.c
e=d.fy
if(e==null)e=a.fy
return M.ft(c,a.fx,f,o,s,i,k,a.y,j,n,m,l,a.ch,p,e,q,r,g,h,t)}}
Y.bV.prototype={
dj:function(a){var t=this.r1
if(t>0)return t
return Math.pow(10,(a===0?0:C.d.cU(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
aC:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.x1,c=H.j(d)
c=P.m(new H.ay(d,c.h("J(1)").a(new Y.ef(e)),c.h("ay<1>")),!0,u.V)
d=u.n
t=H.a([e.r2,e.rx],d)
for(s=c.length,r=e.ry,q=0;q<s;++q){p=c[q]
if(typeof p!=="number")return p.t()
C.a.I(t,H.a([p-r,p+r],d))}C.a.dD(t)
for(d=T.y(t.length/2|0,0,1),c=d.length,s=u.l,r=u.i,o=u.y,q=0;q<d.length;d.length===c||(0,H.e)(d),++q){n=d[q]
if(typeof n!=="number")return n.w()
m=C.a.j(t,n+0)
l=C.a.j(t,n+1)
k=T.fQ(l,m,e.dj(m)).a5(0)
if(!J.a6(C.a.gJ(k),l))C.a.D(k,l)
j=H.a([],s)
for(i=k.length,h=0;h<k.length;k.length===i||(0,H.e)(k),++h){g=H.dp(k[h])
j.push(e.x2.$1(g))}i=H.a([],s)
for(g=j.length,h=0;h<j.length;j.length===g||(0,H.e)(j),++h){f=j[h]
m=f.a
if(!(isNaN(m)||isNaN(f.b)||isNaN(f.c))&&isFinite(m)&&isFinite(f.b)&&isFinite(f.c))i.push(f)}if(i.length!==0){j=o.a(H.a([C.a.gB(i)],s))
g=e.r
C.a.I(g==null?H.f(H.i("points")):g,j)
e.em(T.h0(i,r))}}},
i:function(){return Y.j4(this)}}
Y.ef.prototype={
$1:function(a){var t
H.dp(a)
t=this.a
return a>=t.r2&&a<=t.rx},
$S:22}
N.c8.prototype={
d9:function(a,b){var t,s
if(a==null)t=null
else t=a
if(t==null)t=C.i
if(b==null)s=null
else s=b
if(s==null)s=C.i
return N.aj(C.i,this.e,t,s,this.c)},
fc:function(a){return this.d9(a,null)},
fd:function(a){return this.d9(null,a)}}
N.d3.prototype={
k:function(a){return this.b}}
N.b6.prototype={
i:function(){return N.ji(this)},
f0:function(a,b){var t=this
if(Math.sqrt(t.U().t(0,t.R()).ah())===0)return
if(b===C.a0)t.aK(a.bP(0.5),t.R())
else t.aK(t.U(),a.bP(0.5))},
an:function(a,b){this.c6(a,!1)
this.c4(C.i,!1)
this.dQ(a,!0)},
Z:function(a){return this.an(a,!0)},
di:function(){var t=this,s=t.gq(t),r=t.gq(t).length-2
if(r<0||r>=s.length)return H.o(s,r)
return s[r]},
R:function(){var t=this.x1
if(t!=null){t.aq("getStart")
t=C.a.gB(t.gq(t))}else t=this.cd()
return t},
U:function(){var t=this.ry
if(t!=null){t.aq("getStart")
t=C.a.gB(t.gq(t))}else t=this.ce()
return t}}
N.bo.prototype={
i:function(){return N.iC(this)},
aC:function(){var t=this
t.dr()
t.bi(0,t.O,C.c)
t.N(t.P)},
dr:function(){var t,s,r,q,p,o,n,m,l,k=this,j=u.l,i=H.a([],j)
for(t=k.V,s=k.X,r=k.aw,t=T.cy(r,s+t,t).a5(0),q=t.length,p=0;p<t.length;t.length===q||(0,H.e)(t),++p){o=t[p]
i.push(C.l.n(0,Math.cos(o)).w(0,C.n.n(0,Math.sin(o))))}t=H.a([],j)
for(q=i.length,p=0;p<i.length;i.length===q||(0,H.e)(i),++p){o=i[p]
t.push(new Y.b(-o.b,o.a,o.c))}q=H.a([],j)
for(n=T.y(i.length-1,0,1),m=n.length,r=s/(r-1)/3,p=0;p<n.length;n.length===m||(0,H.e)(n),++p){l=n[p]
q.push(C.a.j(i,l).w(0,C.a.j(t,l).n(0,r)))}j=H.a([],j)
for(s=T.y(i.length,1,1),n=s.length,p=0;p<s.length;s.length===n||(0,H.e)(s),++p){l=s[p]
j.push(C.a.j(i,l).t(0,C.a.j(t,l).n(0,r)))}t=u.i
k.c2(T.ic(i,t),q,j,T.h0(i,t))}}
N.by.prototype={
i:function(){return N.iK(this)}}
N.bC.prototype={
i:function(){return N.iS(this)}}
N.M.prototype={
i:function(){return N.j_(this)},
aC:function(){var t=this
t.bk(H.a([t.O,t.P],u.l))
t.ek()},
ek:function(){var t,s,r=this,q=r.V
if(q===0)return
t=Math.sqrt(r.U().t(0,r.R()).ah())
if(t<2*q)return
s=q/t
r.d0(r,s,1-s)},
aK:function(a,b){var t=this
if(t.U().K(0,t.R())){t.O=a
t.P=b
t.aC()}return t.dL(a,b)}}
N.bz.prototype={
de:function(){var t=this,s=t.ax/t.b1,r=Math.sqrt(t.U().t(0,t.R()).ah())/s
if(s==1/0||s==-1/0||r==1/0||r==-1/0)return 1
return C.d.bA(r)},
U:function(){if(this.gu().length!==0)return C.a.gB(this.gu()).U()
else return this.dP()},
R:function(){if(this.gu().length!==0)return C.a.gJ(this.gu()).R()
else return this.dO()},
i:function(){return N.iQ(this)}}
N.bW.prototype={
cf:function(a,b,c,d,e,f,g,h,i,j){var t=P.m(a,!0,u.i)
t.push(C.a.gB(a))
this.bk(t)},
i:function(){return N.j5(this)}}
N.bZ.prototype={
i:function(){return N.jb(this)}}
N.b7.prototype={
i:function(){return N.jj(this)}}
N.br.prototype={
i:function(){return N.Z(this)}}
N.bY.prototype={
i:function(){return N.j9(this)}}
M.aH.prototype={
i:function(){return M.jh(this)},
aP:function(a,b,c,d){this.y*=b},
bi:function(a,b,c){return this.aP(a,b,C.c,c)}}
M.w.prototype={
gE:function(a){var t=this.a
return t},
gu:function(){var t=this.d
return t==null?H.f(H.i("submobjects")):t},
gG:function(){var t=this.f
return t==null?H.f(H.i("updatingSuspended")):t},
gq:function(a){var t=this.r
return t==null?H.f(H.i("points")):t},
S:function(a,b,c){var t=this,s=t.c_()
t.b=s
t.sci(u.a.a(H.a([],u.r)))
t.f=!1
t.saj(u.y.a(H.a([],u.l)))
t.aC()
t.cW()},
k:function(a){return this.c_()},
c_:function(){var t=this.dN(0),s=P.ja("^Instance of '(.*?)'$").eM(t).b
if(1>=s.length)return H.o(s,1)
s=s[1]
s.toString
return s},
cW:function(){},
aC:function(){},
a_:function(a){var t,s,r,q,p,o=u.a
o.a(a)
if(C.a.ao(a,this))throw H.h("Mobject can't contain itself")
t=P.m(a,!0,u.j)
for(s=this.gu(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(!C.a.ao(a,p))t.push(p)}this.sci(o.a(t))},
aX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
u.cD.a(c)
if(b==null)b=this.Y(a)
for(t=this.bZ(),s=t.length,r=u.y,q=u.l,p=0;p<t.length;t.length===s||(0,H.e)(t),++p){o=t[p]
n=H.a([],q)
m=o.r
if(m==null)m=H.f(H.i("points"))
l=m.length
k=0
for(;k<m.length;m.length===l||(0,H.e)(m),++k)n.push(J.h3(c.$1(J.iq(m[k],b)),b))
o.saj(r.a(n))}},
eq:function(a){return this.aX(C.c,null,a)},
i:function(){return M.j3(this)},
d8:function(a,b){var t,s,r,q=this
q.gG()
t=q.e
if(t==null){t=H.a([],u.eM)
q.sdY(t)}s=0
for(;!1;++s)t[s].$2(q,a)
for(t=q.gu(),r=t.length,s=0;s<t.length;t.length===r||(0,H.e)(t),++s)t[s].d8(a,!0)},
f9:function(a){return this.d8(a,!0)},
N:function(a){return this.eq(new M.ea(a))},
aP:function(a,b,c,d){return this.aX(c,d,new M.e9(b))},
ai:function(a,b){return this.aP(a,b,C.c,null)},
bi:function(a,b,c){return this.aP(a,b,C.c,c)},
bQ:function(a,b,c,d){this.aX(C.c,c,new M.e8(Z.kv(b,d).gd7()))},
aL:function(a,b){return this.bQ(a,b,null,C.k)},
f2:function(a,b,c){return this.bQ(a,b,c,C.k)},
dH:function(a,b,c,d){return this.aX(c,d,new M.eb(b,a))},
bz:function(a,b){this.N(a.cb(0).n(0,new Y.b(7.111111111111111,4,0)).t(0,this.Y(a)).t(0,a.n(0,b)).n(0,a.cb(0).ej(0)))},
bN:function(a,b,c){this.N(a.t(0,this.Y(C.c.t(0,c))).w(0,c.n(0,b)).n(0,C.a2))},
am:function(a,b){return this.bN(a,0.5,b)},
b8:function(a,b,c,d,e){var t=this.eV(b)
if(t===0)return
this.dH(a/t,b,c,d)},
dB:function(a,b){this.b8(a,0,C.c,null,!0)},
dq:function(a,b){this.b8(a,1,C.c,null,!0)},
d_:function(a){this.N(a.t(0,this.Y(C.c)).n(0,new Y.b(1,1,1)))},
aK:function(a,b){var t,s=this,r=s.U(),q=s.R(),p=q.t(0,r)
if(r.K(0,q))throw H.h("Cannot position endpoints of a closed loop")
t=b.t(0,a)
s.bi(0,Math.sqrt(t.ah())/Math.sqrt(p.ah()),r)
s.f2(0,t.aH()-p.aH(),r)
s.N(a.t(0,r))},
an:function(a,b){var t,s,r
for(t=this.gu(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)t[r].an(a,!0)
this.a=a},
Z:function(a){return this.an(a,!0)},
aD:function(){var t,s,r,q,p=H.a([this],u.r)
for(t=this.gu(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)C.a.I(p,t[r].aD())
q=P.fB(p,u.j)
return P.m(q,!0,H.C(q).c)},
bZ:function(){var t=this.aD(),s=H.j(t),r=s.h("ay<1>")
return P.m(new H.ay(t,s.h("J(1)").a(new M.e6()),r),!0,r.h("q.E"))},
bW:function(){var t,s,r,q,p=H.a([],u.l)
for(t=this.bZ(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r){q=t[r].r
C.a.I(p,q==null?H.f(H.i("points")):q)}return p},
bf:function(){return this.bW()},
aO:function(a,b,c){var t,s,r
u.D.a(c)
if(c==null)c=this.bf()
t=H.a([],u.n)
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.e)(c),++r)t.push(c[r].ar(a))
if(b<0)return C.a.a2(t,C.x)
else if(b===0)return(C.a.a2(t,C.x)+C.a.a2(t,C.y))/2
else return C.a.a2(t,C.y)},
bc:function(a,b){return this.aO(a,b,null)},
Y:function(a){var t=this,s=t.bf()
if(s.length===0)return C.c
return new Y.b(t.aO(0,C.d.a3(a.a),s),t.aO(1,C.d.a3(a.b),s),t.aO(2,C.d.a3(a.c),s))},
eV:function(a){var t=this.bW(),s=H.j(t),r=new H.d(t,s.h("p(1)").a(new M.e7(a)),s.h("d<1,p>")),q=r.a2(0,C.x)
return r.a2(0,C.y)-q},
U:function(){this.aq("getStart")
return C.a.gB(this.gq(this))},
R:function(){this.aq("getEnd")
return C.a.gJ(this.gq(this))},
gm:function(a){return this.dF(0).length},
dF:function(a){var t=this,s=H.a([],u.r)
if(t.gq(t).length!==0)s.push(t)
C.a.I(s,t.gu())
return s},
aq:function(a){var t
if(this.gq(this).length!==0)return
t="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.h(t)},
sci:function(a){this.d=u.u.a(a)},
sdY:function(a){this.e=u.cI.a(a)},
saj:function(a){this.r=u.D.a(a)}}
M.ea.prototype={
$1:function(a){return a.w(0,this.a)},
$S:2}
M.e9.prototype={
$1:function(a){return a.n(0,this.a)},
$S:2}
M.e8.prototype={
$1:function(a){return a.ay(this.a)},
$S:2}
M.eb.prototype={
$1:function(a){var t=this.a
return a.fe(t,a.ar(t)*this.b)},
$S:2}
M.e6.prototype={
$1:function(a){u.j.a(a)
return a.gq(a).length>0},
$S:6}
M.e7.prototype={
$1:function(a){return u.i.a(a).ar(this.a)},
$S:25}
M.bG.prototype={
i:function(){return M.iU(this)}}
V.A.prototype={
a7:function(a,b,c,d,e,f,g,h,i,j,k){if(d!=null)this.saJ(H.a([d],u.O))
if(i!=null)this.sas(H.a([i],u.O))
if(a!=null)this.saY(H.a([a],u.O))},
i:function(){return V.jl(this)},
cW:function(){var t=this,s=t.dy
t.dm(s==null?H.a([t.gE(t)],u.O):s)
s=t.fr
if(s==null)s=H.a([t.gE(t)],u.O)
t.dw(s,t.x)
t.dl(t.fx,t.y)
s=t.z
t.dt(t.Q,s)},
aF:function(a,b,c){var t,s,r,q,p,o,n=this
u.x.a(b)
t=u.O
s=H.a([],t)
if(b!=null)C.a.I(s,b)
if(a!=null)s.push(a)
if(c)for(r=n.bh(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)r[p].dn(s,!1)
if(s.length!==0){if(n.dy==null)n.saJ(s)
r=n.dy
q=r.length
o=s.length
if(q<o)n.saJ(T.cz(r,o,u.G))
else if(o<q)n.saJ(T.cz(s,q,u.G))
t=H.a([],t)
for(r=T.y(n.dy.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)t.push(C.a.j(s,r[p]))
n.saJ(t)}},
c4:function(a,b){return this.aF(a,null,b)},
dn:function(a,b){return this.aF(null,a,b)},
bj:function(a){return this.aF(a,null,!0)},
dm:function(a){return this.aF(null,a,!0)},
ae:function(a,b,c,d,e){var t,s,r,q,p,o,n=this
u.x.a(c)
t=u.O
s=H.a([],t)
if(c!=null)C.a.I(s,c)
if(b!=null)s.push(b)
if(d)for(r=n.bh(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)r[p].dz(a,s,!1,e)
if(s.length!==0)if(a){if(n.fx==null)n.saY(s)
r=n.fx
q=r.length
o=s.length
if(q<o)n.saY(T.cz(r,o,u.G))
else if(o<q)n.saY(T.cz(s,q,u.G))
t=H.a([],t)
for(r=T.y(n.fr.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)t.push(C.a.j(s,r[p]))
n.sas(t)}else{if(n.fr==null)n.sas(s)
r=n.fr
q=r.length
o=s.length
if(q<o)n.sas(T.cz(r,o,u.G))
else if(o<q)n.sas(T.cz(s,q,u.G))
t=H.a([],t)
for(r=T.y(n.fr.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)t.push(C.a.j(s,r[p]))
n.sas(t)}if(e!=null)if(a)n.y=e
else n.x=e},
dv:function(a){return this.ae(!1,a,null,!0,null)},
aQ:function(a){return this.ae(!1,null,null,!0,a)},
c6:function(a,b){return this.ae(!1,a,null,b,null)},
dz:function(a,b,c,d){return this.ae(a,null,b,c,d)},
c7:function(a,b){return this.ae(!1,a,null,!0,b)},
c8:function(a,b){return this.ae(!1,null,a,b,null)},
dw:function(a,b){return this.ae(!1,null,a,!0,b)},
c3:function(a,b,c,d){return this.ae(!0,a,u.x.a(b),c,d)},
dl:function(a,b){return this.c3(null,a,!0,b)},
c9:function(a,b){var t=this,s=null,r=u.x,q=r.a(a.d),p=r.a(a.a)
r=r.a(a.b)
t.aF(s,p,b)
t.ae(!1,s,r,b,s)
t.c3(s,q,b,s)
t.bl(a.r,a.f,b)
return s},
dA:function(a){return this.c9(a,!0)},
bX:function(){var t=this.bd(),s=t.length
if(0>=s)return H.o(t,0)
return t[0]},
an:function(a,b){this.c4(a,!0)
this.c6(a,!0)
this.dM(a,!0)},
bL:function(a,b){var t,s,r,q="removeWhere",p=a.bd(),o=a.bg(),n=a.x,m=a.aE(!0),l=a.y,k=a.z,j=a.Q
this.c9(new V.c9(p,o,n,m,l,k,new Y.b(j.a,j.b,j.c)),!1)
if(b){t=this.gu()
s=a.gu()
if(t.length===0)return
else if(s.length===0)s=H.a([a],u.r)
p=H.j(t).h("J(1)").a(new V.eu())
if(!!t.fixed$length)H.f(P.a0(q))
C.a.cC(t,p,!0)
p=H.j(s).h("J(1)").a(new V.ev())
if(!!s.fixed$length)H.f(P.a0(q))
C.a.cC(s,p,!0)
for(p=u.j,p=T.ks(t,s,p,p),p=P.fC([p.a,p.b],!1,u.z),p=new A.a3(new H.a1(p,H.j(p).h("a1<1,v<A>>")),u.eX),p=p.gF(p);p.p();){r=p.b
if(r==null)r=H.f(P.aG("No element"))
o=r.length
if(0>=o)return H.o(r,0)
n=r[0]
if(1>=o)return H.o(r,1)
n.bL(r[1],!0)}}},
eW:function(a){return this.bL(a,!0)},
bd:function(){var t=this.dy
return t==null?H.a([C.i],u.O):t},
aE:function(a){var t=a?this.fx:this.fr
return t==null||t.length===0?H.a([C.i],u.O):t},
bg:function(){return this.aE(!1)},
du:function(a,b){this.Q=new Y.b(a.a,a.b,a.c)},
bl:function(a,b,c){var t,s,r,q,p=this
H.dp(b)
if(c){for(t=p.gu(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r){q=t[r]
if(q instanceof V.A)q.bl(a,b,!0)}c=!0}p.z=b
if(a!=null)p.du(a,!1)
if(b!==0){p.c8(p.bg(),c)
p.c8(p.bg(),c)}},
dt:function(a,b){return this.bl(a,b,!0)},
df:function(){var t,s,r,q,p,o,n,m=this.Q,l=m.a,k=m.b
m=m.c
t=this.Y(C.c)
s=H.a([],u.b)
for(r=[C.l,C.n,C.k],q=u.n,p=0;p<3;++p){o=this.Y(r[p]).t(0,t)
s.push(H.a([o.a,o.b,o.c],q))}n=new Y.b(l,k,m).ay(Z.ae(null,s).gd7())
return new S.x(t.t(0,n),t.w(0,n),u.hd)},
c2:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
t=h.dx
s=a.length
r=H.a([],u.l)
for(s=T.y(t*s,0,1),q=s.length,p=0;p<s.length;s.length===q||(0,H.e)(s),++p)r.push(C.c)
h.saj(g.a(r))
o=H.a([a,b,c,d],u.h)
for(g=T.y(t,0,1),s=g.length,r=u.S,p=0;p<g.length;g.length===s||(0,H.e)(g),++p){n=g[p]
m=C.a.j(o,n)
q=h.r
for(q=T.ff(T.y((q==null?H.f(H.i("points")):q).length,n,t),r),l=q.length,k=0;k<q.length;q.length===l||(0,H.e)(q),++k){j=q[k]
i=h.r
if(i==null)i=H.f(H.i("points"))
C.a.l(i,j.b,m[C.f.ad(j.a,m.length)])}}},
el:function(a){var t,s,r,q,p,o,n=this,m=n.dx,l=[]
for(t=T.cy(m,1,0).eN(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r){q=t[r]
p=n.r
l.push(C.a.gJ(p==null?H.f(H.i("points")):p).n(0,1-q).w(0,a.n(0,q)))}t=l.length
if(1>=t)return H.o(l,1)
s=u.i
p=s.a(l[1])
if(2>=t)return H.o(l,2)
o=s.a(l[2])
if(3>=t)return H.o(l,3)
l=s.a(l[3])
n.aq("addCubicBezierCurveTo")
t=u.l
s=u.y
if(C.f.ad(n.gq(n).length,m)===1){l=s.a(H.a([p,o,l],t))
C.a.I(n.gq(n),l)}else{l=s.a(H.a([C.a.gJ(n.gq(n)),p,o,l],t))
C.a.I(n.gq(n),l)}return null},
em:function(a){var t,s
u.y.a(a)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.e)(a),++s)this.el(a[s])},
bk:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u.y.a(a)
t=T.cy(this.dx,1,0).a5(0)
s=u.i
r=Z.h7(T.h0(a,s))
q=Z.h7(T.ic(a,s))
s=H.a([],u.w)
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.e)(t),++o){n=t[o]
s.push(q.n(0,1-n).w(0,r.n(0,n)))}p=H.a([],u.h)
for(m=s.length,l=u.l,o=0;o<s.length;s.length===m||(0,H.e)(s),++o){k=s[o]
j=H.a([],l)
i=k.a
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
e=J.ap(f)
j.push(new Y.b(e.j(f,0),e.j(f,1),e.j(f,2)))}p.push(j)}s=p.length
if(0>=s)return H.o(p,0)
m=p[0]
if(1>=s)return H.o(p,1)
l=p[1]
if(2>=s)return H.o(p,2)
j=p[2]
if(3>=s)return H.o(p,3)
this.c2(m,l,j,p[3])},
cJ:function(a,b){var t=this.db,s=b.a
if(Math.abs(a.a-s)>t+0.00001*Math.abs(s))return!1
s=b.b
if(Math.abs(a.b-s)>t+0.00001*Math.abs(s))return!1
return!0},
bV:function(a){var t,s,r,q,p,o,n,m={}
m.a=a
u.y.a(a)
m.a=a
t=F.e3(a,new V.es(m,C.f.ad(J.R(a),this.dx)),u.i)
m.a=P.m(t,!0,t.$ti.h("q.E"))
t=H.a([],u.dm)
for(s=T.y(J.R(m.a),0,4),r=s.length,q=u.bl,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=m.a
if(typeof o!=="number")return o.w()
t.push(new S.b8(J.Q(n,o+0),J.Q(m.a,o+1),J.Q(m.a,o+2),J.Q(m.a,o+3),q))}return t},
e9:function(a,b){var t,s,r,q,p,o,n,m,l
u.y.a(a)
u.fT.a(b)
t=this.dx
s=T.y(a.length,t,t)
r=H.j(s)
r=P.m(new H.ay(s,r.h("J(1)").a(b),r.h("ay<1>")),!0,u.S)
r.push(a.length)
s=H.a([0],u.X)
C.a.I(s,r)
q=H.a([],u.h)
for(s=new A.a3(H.a([s,r],u.gL),u.eN),s=s.gF(s),r=H.j(a),p=r.c,r=r.h("ai<1>");s.p();){o=s.b
if(o==null)o=H.f(P.aG("No element"))
if(1>=o.length)return H.o(o,1)
n=o[1]
m=o[0]
if(typeof n!=="number")return n.t()
if(typeof m!=="number")return H.bk(m)
if(n-m>=t){H.X(m)
H.X(n)
P.cW(m,n,a.length)
l=new H.ai(a,m,n,r)
l.bo(a,m,n,p)
q.push(l.a4(0))}}return q},
dk:function(a){u.y.a(a)
return this.e9(a,new V.et(this,a))},
bP:function(a){var t=this,s=t.dx,r=V.fY(0,C.f.aR(t.gq(t).length,s),a),q=r.a,p=t.gq(t),o=s*q
s*=q+1
P.cW(o,s,p.length)
return V.fR(H.c5(p,o,s,H.j(p).c).a4(0)).$1(r.b)},
cw:function(a){var t=F.e3(this.gq(this),new V.er(this,a),u.i)
return P.m(t,!0,t.$ti.h("q.E"))},
dd:function(){var t,s=this
if(s.gq(s).length===1)return s.gq(s)
t=u.eR
t=A.hd(P.m(new A.a3(H.a([s.cw(0),s.cw(s.dx-1)],u.h),t),!0,t.h("q.E")),u.i)
return P.m(t,!0,t.$ti.h("q.E"))},
bf:function(){var t,s,r,q=H.a([],u.l)
for(t=this.bh(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)C.a.I(q,t[r].dd())
return q},
d0:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(b<=0&&c>=1){f.saj(u.y.a(P.m(a.gq(a),!0,u.i)))
return}t=u.y
s=a.bV(t.a(P.m(a.gq(a),!0,u.i)))
r=s.length
q=V.fY(0,r,b)
p=V.fY(0,r,c)
o=q.a
n=q.b
m=p.a
l=p.b
f.saj(t.a(H.a([],u.l)))
if(r===0)return
k=s.length
if(o===m){if(o>>>0!==o||o>=k)return H.o(s,o)
k=s[o].a4(0)
k=t.a(V.h_(new H.a1(k,H.j(k).h("a1<1,b>")),n,l))
C.a.I(f.gq(f),k)}else{if(o>>>0!==o||o>=k)return H.o(s,o)
k=s[o].a4(0)
k=t.a(V.h_(new H.a1(k,H.j(k).h("a1<1,b>")),n,1))
C.a.I(f.gq(f),k)
for(k=o+1,P.cW(k,m,s.length),k=H.c5(s,k,m,H.j(s).c),j=k.$ti,k=new H.V(k,k.gm(k),j.h("V<D.E>")),j=j.h("D.E"),i=u.z;k.p();){h=j.a(k.d)
h=P.fC([h.a,h.b,h.c,h.d],!1,i)
h=t.a(new H.a1(h,H.j(h).h("a1<1,b>")))
g=f.r
C.a.I(g==null?H.f(H.i("points")):g,h)}if(m>>>0!==m||m>=s.length)return H.o(s,m)
k=s[m].a4(0)
k=t.a(V.h_(new H.a1(k,H.j(k).h("a1<1,b>")),0,l))
C.a.I(f.gq(f),k)}},
bh:function(){var t,s,r,q,p=H.a([],u.U)
for(t=this.aD(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r){q=t[r]
if(q instanceof V.A)p.push(q)}return p},
saJ:function(a){this.dy=u.x.a(a)},
sas:function(a){this.fr=u.x.a(a)},
saY:function(a){this.fx=u.x.a(a)}}
V.N.prototype={
$1:function(a){return u.G.a(a).i()},
$S:7}
V.O.prototype={
$1:function(a){return u.G.a(a).i()},
$S:7}
V.P.prototype={
$1:function(a){return u.G.a(a).i()},
$S:7}
V.eu.prototype={
$1:function(a){return!(u.j.a(a) instanceof V.A)},
$S:6}
V.ev.prototype={
$1:function(a){return!(u.j.a(a) instanceof V.A)},
$S:6}
V.es.prototype={
$2:function(a,b){u.i.a(b)
return a<J.R(this.a.a)-this.b},
$S:12}
V.et.prototype={
$1:function(a){var t,s,r
H.X(a)
t=this.b
s=a-1
r=t.length
if(s<0||s>=r)return H.o(t,s)
s=t[s]
if(a<0||a>=r)return H.o(t,a)
return!this.a.cJ(s,t[a])},
$S:28}
V.er.prototype={
$2:function(a,b){u.i.a(b)
return C.f.ad(a,this.a.dx)===this.b},
$S:12}
V.c9.prototype={}
V.aI.prototype={
cg:function(a){var t=a==null?H.a([],u.r):a
this.a_(u.a.a(t))},
i:function(){return V.jk(this)}}
V.bA.prototype={
dR:function(a,b,c,d){var t,s,r,q,p,o,n,m
if(c>0){t=1/c
s=t*d
r=T.cy(c+1,1,0).M(0,1).t(0,t).w(0,s).a5(0)
q=H.a([],u.r)
for(p=r.length,o=0;o<r.length;r.length===p||(0,H.e)(r),++o){n=r[o]
if(typeof n!=="number")return n.w()
m=a.i()
m.d0(a,n,n+s)
q.push(m)}this.a_(u.a.a(q))}this.bL(a,!1)},
i:function(){return V.iR(this)}}
V.bn.prototype={
ga1:function(a){var t=this.d
return t==null?H.f(H.i("display")):t},
dC:function(a){this.d=a}}
Q.cG.prototype={
ga0:function(){var t=this.e
return t==null?H.f(H.i("ctx")):t},
b6:function(){var t=0,s=P.dv(u.V),r,q=this,p,o,n
var $async$b6=P.dw(function(a,b){if(a===1)return P.dr(b,s)
while(true)switch(t){case 0:n=window
n.toString
t=3
return P.dq(C.a6.gep(n).d5(new Q.dT(),u.V),$async$b6)
case 3:p=b
n=q.f
if(n===0){q.f=p
n=p}o=p-n
q.f=n+o
r=o/1000
t=1
break
case 1:return P.ds(r,s)}})
return P.dt($async$b6,s)},
d3:function(a){var t,s,r=this,q=r.ga1(r).gL(),p=r.ga1(r).aI(a)
C.p.sb3(r.ga0(),p.aB())
t=q.c
s=q.d
r.ga0().fillRect(0-t/2,0-s/2,q.c,q.d)},
eZ:function(a){var t,s,r,q,p,o,n,m=this,l="ctx",k=u.y.a(P.m(a.gq(a),!0,u.i)),j=m.ga1(m).gL().d6(a,k)
if(j.length===0)return
t=a.dk(j)
for(k=t.length,s=u.O,r=0;r<t.length;t.length===k||(0,H.e)(t),++r){m.f_(a,t[r])
m.cF(a,!0)
q=a.dy
if(q==null)q=H.a([C.i],s)
if(q.length>1){p=m.e
if(p==null)p=H.f(H.i(l))
C.p.sb3(p,m.cM(a,q))}else{p=m.d
if(p==null)p=H.f(H.i("display"))
o=a.dy
if(o==null)o=H.a([C.i],s)
if(0>=o.length)return H.o(o,0)
n=p.aI(o[0])
o=m.e
p=o==null?H.f(H.i(l)):o
C.p.sb3(p,n.aB())}p=m.e;(p==null?H.f(H.i(l)):p).fill()
m.cF(a,!1)
p=m.e;(p==null?H.f(H.i(l)):p).closePath()}},
f_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
u.y.a(b)
j.ga0().beginPath()
t=a.bV(b)
s=J.aM(b)
r=s.gB(b)
j.ga0().moveTo(r.a,r.b)
q=a.cJ(s.gB(b),s.gJ(b))
for(s=t.length,p=0;p<t.length;t.length===s||(0,H.e)(t),++p){o=t[p]
n=o.b
m=o.c
l=o.d
k=j.e
if(k==null)k=H.f(H.i("ctx"))
k.bezierCurveTo(n.a,n.b,m.a,m.b,l.a,l.b)}if(q)j.ga0().closePath()},
cM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this
u.bF.a(b)
t=a.df()
s=u.y.a(H.a([t.a,t.b],u.l))
r=i.ga1(i).gL().d6(a,s)
s=i.ga0()
q=r.length
if(0>=q)return H.o(r,0)
p=r[0]
o=p.a
p=p.b
if(1>=q)return H.o(r,1)
q=r[1]
q=s.createLinearGradient(o,p,q.a,q.b)
q.toString
n=1/(b.length-1)
m=T.fQ(n+1,0,n).a5(0)
for(s=T.y(b.length,0,1),p=s.length,l=0;l<s.length;s.length===p||(0,H.e)(s),++l){k=s[l]
o=i.d
if(o==null)o=H.f(H.i("display"))
j=o.aI(C.a.j(b,k))
q.addColorStop(C.a.j(m,k),j.aB())}return q},
cF:function(a,b){var t,s,r,q,p=this,o=b?a.y:a.x
if(o===0)return
t=a.aE(b)
s=p.ga1(p).gL().c
p.ga0().lineWidth=o*0.01*(s/14.222222222222221)
r=C.a.cN(t,new Q.dS())
o=t.length
if(o===0||r)return
if(o>1)C.p.scc(p.ga0(),p.cM(a,t))
else{q=p.ga1(p).aI(C.a.gB(a.aE(b)))
C.p.scc(p.ga0(),q.aB())}p.ga0().stroke()}}
Q.dT.prototype={
$1:function(a){return H.f1(a)},
$S:45}
Q.dS.prototype={
$1:function(a){return u.G.a(a).d===0},
$S:30}
N.ej.prototype={
gaz:function(){var t=this.d
return t==null?H.f(H.i("mobjects")):t},
gL:function(){var t=this.f
return t==null?H.f(H.i("camera")):t},
ga1:function(a){var t=this.x
return t==null?H.f(H.i("display")):t},
dT:function(){var t,s,r,q=this,p=document,o=p.querySelector(".canvas-container")
o.toString
t=H.a([],u.L)
s=new O.bP(0)
s.bn(0)
p=p.createElement("canvas")
u.gA.a(p)
t=new B.cF(p,o,t,C.c,C.c,s,C.c,C.c)
t.a=new Q.cG($.cA())
o.appendChild(p).toString
q.x=t
q.r=q.ga1(q).gb7()
t=q.ga1(q)
p=t.b=new R.dP(14.222222222222221,t)
o=t.d
C.E.sfb(o,1280)
C.E.seQ(o,720)
s=t.gb7()
s.dI(t)
o=o.getContext("2d")
o.toString
s.e=o
p.d=p.c/1.7777777777777777
o=t.gb7()
s=p.c
r=p.d
o.ga0().setTransform(1280/s,0,0,-720/r,640-0/s,360-0/r)
t.gb7().d3(C.q)
q.f=p
new P.dh().dU(0)
q.sbp(u.a.a(H.a([],u.r)))},
b9:function(){var t=0,s=P.dv(u.z),r=1,q,p=[],o=this,n,m
var $async$b9=P.dw(function(a,b){if(a===1){q=b
t=r}while(true)switch(t){case 0:o.ga1(o).es()
r=3
t=6
return P.dq(o.aZ(),$async$b9)
case 6:r=1
t=5
break
case 3:r=2
m=q
H.aQ(m)
throw m
t=5
break
case 2:t=1
break
case 5:o.gL().d2(o.gaz())
o.ga1(o).f8()
return P.ds(null,s)
case 1:return P.dr(q,s)}})
return P.dt($async$b9,s)},
fa:function(a){var t,s,r
for(t=this.gaz(),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)t[r].f9(a)},
a_:function(a){var t,s=this,r=u.a
r.a(a)
t=P.m(a,!0,u.j)
C.a.I(t,s.gL().bC(a))
s.sbp(r.a(s.c0(s.gaz(),t)))
C.a.cX(s.gaz(),0,a)},
f1:function(a){var t,s=this,r=u.a
r.a(a)
t=P.m(a,!0,u.j)
C.a.I(t,s.gL().bC(a))
s.sbp(r.a(s.c0(s.gaz(),t)))},
c0:function(a,b){var t,s=u.a
s.a(a)
s.a(b)
t=H.a([],u.r)
new N.ek(t).$2(a,P.fB(b,H.j(b).c))
return t},
ba:function(){var t=0,s=P.dv(u.z),r=this,q,p,o,n
var $async$ba=P.dw(function(a,b){if(a===1)return P.dr(b,s)
while(true)switch(t){case 0:q=0
case 2:if(!(q<1)){t=3
break}p=r.r
t=4
return P.dq((p==null?H.f(H.i("renderer")):p).b6(),$async$ba)
case 4:o=b
q+=o
r.fa(o)
p=r.f
p=(p==null?H.f(H.i("camera")):p).r.a;(p==null?H.f(H.i("renderer")):p).d3(C.q)
p=r.f
if(p==null)p=H.f(H.i("camera"))
n=r.d
p.d2(n==null?H.f(H.i("mobjects")):n)
r.a+=o
t=2
break
case 3:return P.ds(null,s)}})
return P.dt($async$ba,s)},
b_:function(){var t=0,s=P.dv(u.z),r=this
var $async$b_=P.dw(function(a,b){if(a===1)return P.dr(b,s)
while(true)switch(t){case 0:case 2:if(!!0){t=3
break}t=4
return P.dq(r.ba(),$async$b_)
case 4:t=2
break
case 3:return P.ds(null,s)}})
return P.dt($async$b_,s)},
sbp:function(a){this.d=u.u.a(a)}}
N.ek.prototype={
$2:function(a,b){var t,s,r,q,p,o
u.a.a(a)
u.bA.a(b)
for(t=a.length,s=this.a,r=0;r<a.length;a.length===t||(0,H.e)(a),++r){q=a[r]
if(b.ao(0,q))continue
p=q.aD()
o=b.eT(0,P.fB(p,H.j(p).c))
if(o.a!==0){p=q.d
this.$2(p==null?H.f(H.i("submobjects")):p,o)}else C.a.D(s,q)}},
$S:31}
T.fo.prototype={
$2:function(a,b){var t=this.a
return t.a(t.a(a)+t.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.fn.prototype={
$1:function(a){return H.X(a)/this.a*this.b},
$S:32}
T.fp.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("J(r,0)")}}
V.f9.prototype={
$1:function(a){var t,s,r,q,p,o,n,m=H.a([],u.l)
for(t=T.ff(this.a,u.i),s=t.length,r=1-a,q=this.b,p=0;p<t.length;t.length===s||(0,H.e)(t),++p){o=t[p]
n=o.a
if(typeof n!=="number")return H.bk(n)
m.push(J.fq(o.b,Math.pow(r,q-n)*Math.pow(a,n)*X.hV(q,n,!0)))}return C.a.a2(m,new V.f8())},
$S:11}
V.f8.prototype={
$2:function(a,b){var t=u.i
return t.a(a).w(0,t.a(b))},
$S:33}
K.c.prototype={
w:function(a,b){var t=this
if(typeof b=="number")return new K.c(t.a+b,t.b+b,t.c+b,1)
else if(b instanceof K.c)return new K.c(t.a+b.a,t.b+b.b,t.c+b.c,1)
else throw H.h("Color only support addition by double or Color")},
n:function(a,b){return new K.c(this.a*b,this.b*b,this.c*b,1)},
i:function(){var t=this
return new K.c(t.a,t.b,t.c,t.d)},
aB:function(){var t=this
return"rgba("+C.d.a3(t.a*255)+", "+C.d.a3(t.b*255)+", "+C.d.a3(t.c*255)+", "+H.t(t.d)+")"},
k:function(a){return this.aB()}}
K.f4.prototype={
$1:function(a){return P.km(a,16)/255},
$S:34}
S.aT.prototype={
K:function(a,b){var t,s=this
if(b==null)return!1
if(!(b instanceof S.aT&&s.a===b.a&&s.b===b.b))t=typeof b=="number"&&s.a===b&&s.b===0
else t=!0
return t},
n:function(a,b){var t=this.a,s=b.a,r=this.b,q=b.b
return new S.aT(t*s-r*q,t*q+r*s)}}
X.a8.prototype={
k:function(a){return this.b}}
X.a2.prototype={}
M.dX.prototype={
gav:function(){var t=this.a
return t==null?H.f(H.i("eventListeners")):t},
dS:function(){var t,s,r=P.fA(u.en,u.gF)
for(t=u.aE,s=0;s<6;++s)r.l(0,C.Z[s],H.a([],t))
this.sdX(u.cH.a(r))},
au:function(a,b,c){var t,s,r
H.fT(c,u.e,"IEvent","_dispatchOnListnersList")
c.a(a)
t=P.m(c.h("v<cL<0>>").a(b),!0,c.h("cL<0>"))
s=!1
while(!0){if(!(!s&&t.length!==0))break
r=C.a.gJ(t)
C.a.eY(t,r)
s=r.fk(a)}},
b0:function(a){var t,s=this
switch(a.a){case C.r:u.gt.a(a)
t=s.gav().j(0,C.r)
t.toString
s.au(a,t,u.e)
break
case C.t:u.bt.a(a)
t=s.gav().j(0,C.t)
t.toString
s.au(a,t,u.e)
break
case C.u:u.dN.a(a)
t=s.gav().j(0,C.u)
t.toString
s.au(a,t,u.e)
break
case C.v:u.fV.a(a)
t=s.gav().j(0,C.v)
t.toString
s.au(a,t,u.e)
break
case C.z:u.fw.a(a)
t=s.gav().j(0,C.z)
t.toString
s.au(a,t,u.e)
break
case C.A:u.bf.a(a)
t=s.gav().j(0,C.A)
t.toString
s.au(a,t,u.e)
break}},
sdX:function(a){this.a=u.dC.a(a)}}
O.cT.prototype={}
O.bR.prototype={}
O.bS.prototype={}
O.bT.prototype={}
O.bQ.prototype={}
O.bP.prototype={
bn:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
X.fb.prototype={
$2:function(a,b){return H.X(a)*H.X(b)},
$S:13}
X.fc.prototype={
$2:function(a,b){return H.X(a)*H.X(b)},
$S:13}
Z.ad.prototype={
gW:function(a){return this.a},
gC:function(a){var t=this.b
return t==null?H.f(H.i("shape")):t},
w:function(a,b){return this.ap(0,new Z.dG(typeof b=="number"?Z.bq(b,this.gC(this)):u.I.a(b)))},
t:function(a,b){var t=Z.bq(b,this.gC(this))
return this.ap(0,new Z.dJ(t))},
n:function(a,b){return this.ap(0,new Z.dI(typeof b=="number"?Z.bq(b,this.gC(this)):u.I.a(b)))},
M:function(a,b){var t=Z.bq(b,this.gC(this))
return this.ap(0,new Z.dH(t))},
ap:function(a,b){var t,s,r,q=this
u.fA.a(b)
t=T.ff(q.gW(q),u.dg)
s=H.j(t)
r=s.h("d<1,v<p>>")
r=P.m(new H.d(t,s.h("v<p>(1)").a(new Z.dF(b)),r),!0,r.h("D.E"))
return Z.ae(q.gC(q),r)},
ab:function(a){var t,s
u.o.a(a)
t=a.a
s=this.gW(this)
if(t>>>0!==t||t>=s.length)return H.o(s,t)
return J.Q(s[t],a.b)},
ei:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.gC(g).a
if(typeof f!=="number")return f.t()
t=g.gC(g).b
if(typeof t!=="number")return t.t()
s=H.a([],u.b)
for(r=T.y(g.gC(g).a,0,1),q=r.length,p=g.a,o=u.n,n=0;n<r.length;r.length===q||(0,H.e)(r),++n){m=r[n]
if(!J.a6(m,a)){l=H.a([],o)
k=g.b
k=T.y((k==null?H.f(H.i("shape")):k).a,0,1)
j=k.length
i=0
for(;i<k.length;k.length===j||(0,H.e)(k),++i){h=k[i]
if(!J.a6(h,b))l.push(J.Q(C.a.j(p,m),h))}s.push(l)}}return Z.ae(new S.x(f-1,t-1,u.o),s)},
bY:function(){var t,s,r,q,p,o,n,m,l,k,j,i=this
if(J.a6(i.gC(i).a,2)){t=i.gW(i)
if(0>=t.length)return H.o(t,0)
s=J.Q(t[0],0)
t=i.gW(i)
if(0>=t.length)return H.o(t,0)
r=J.Q(t[0],1)
t=i.gW(i)
if(1>=t.length)return H.o(t,1)
q=J.Q(t[1],0)
t=i.gW(i)
if(1>=t.length)return H.o(t,1)
return s*J.Q(t[1],1)-r*q}t=i.gC(i).a
if(typeof t!=="number")return t.t()
p=i.gC(i).b
if(typeof p!=="number")return p.t()
o=new S.x(t-1,p-1,u.o)
p=H.a([],u.n)
for(t=T.y(i.gC(i).a,0,1),n=t.length,m=i.a,l=0;l<t.length;t.length===n||(0,H.e)(t),++l){k=t[l]
if(typeof k!=="number")return k.ad()
j=C.d.ad(k,2)===0?1:-1
if(0>=m.length)return H.o(m,0)
p.push(j*Z.bq(J.Q(m[0],k),o).n(0,i.ei(0,k)).bY())}return T.kz(p,u.V)},
dh:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
if(a9.bY()===0)throw H.h("This matrix is not inversible")
t=a9.gC(a9).a
s=a9.gC(a9).b
r=a9.i()
q=Z.fs(t)
for(p=T.y(s,0,1),o=p.length,n=t-1,m=s-1,l=q.a,k=r.a,j=u.o,i=0;i<p.length;p.length===o||(0,H.e)(p),++i){h=p[i]
for(g=h,f=-1,e=-1;g!==t;++g){j.a(new S.x(g,h,j))
if(g<0||g>=k.length)return H.o(k,g)
d=J.Q(k[g],h)
if(d>e){e=d
f=g}}c=k.length
if(f<0||f>=c)return H.o(k,f)
b=k[f]
if(h>>>0!==h||h>=c)return H.o(k,h)
k[f]=k[h]
C.a.l(k,h,b)
c=l.length
if(f>=c)return H.o(l,f)
a=l[f]
if(h!==(h|0)||h>=c)return H.o(l,h)
l[f]=l[h]
C.a.l(l,h,a)
c=J.ap(b)
a0=c.j(b,h)
for(a1=h;a1<s;++a1){a2=c.j(b,a1)
if(typeof a2!=="number")return a2.M()
c.l(b,a1,a2/a0)}for(a2=J.ap(a),a1=m;a1>=0;--a1){a3=a2.j(a,a1)
if(typeof a3!=="number")return a3.M()
a2.l(a,a1,a3/a0)}for(a1=h+1,f=n;f>=0;--f)if(f!==h){if(f>=k.length)return H.o(k,f)
a4=k[f]
if(f>=l.length)return H.o(l,f)
a5=l[f]
a3=J.ap(a4)
a0=a3.j(a4,h)
for(a6=a1;a6!==s;++a6){a7=a3.j(a4,a6)
a8=c.j(b,a6)
if(typeof a8!=="number")return a8.n()
if(typeof a7!=="number")return a7.t()
a3.l(a4,a6,a7-a8*a0)}for(a3=J.ap(a5),a6=m;a6>0;--a6){a7=a3.j(a5,a6)
a8=a2.j(a,a6)
if(typeof a8!=="number")return a8.n()
if(typeof a7!=="number")return a7.t()
a3.l(a5,a6,a7-a8*a0);--a6
a8=a3.j(a5,a6)
a7=a2.j(a,a6)
if(typeof a7!=="number")return a7.n()
if(typeof a8!=="number")return a8.t()
a3.l(a5,a6,a8-a7*a0)}if(a6===0){a7=a3.j(a5,0)
a8=a2.j(a,0)
if(typeof a8!=="number")return a8.n()
if(typeof a7!=="number")return a7.t()
a3.l(a5,0,a7-a8*a0)}}}return q},
a5:function(a){var t=this.gW(this),s=H.j(t),r=s.h("d<1,p>")
return P.m(new H.d(t,s.h("p(1)").a(new Z.dD(a)),r),!0,r.h("D.E"))},
gd7:function(){return this.ap(0,new Z.dK(this))},
ay:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.gC(a),a1=a.gC(a).b,a2=a4.gC(a4).b,a3=Z.bq(0,new S.x(a.gC(a).a,a4.gC(a4).b,u.o))
for(a0=T.y(a0.a,0,1),t=a0.length,s=a4.a,r=a.a,q=a3.a,p=0;p<a0.length;a0.length===t||(0,H.e)(a0),++p){o=a0[p]
for(n=T.y(a2,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.e)(n),++l){k=n[l]
for(j=T.y(a1,0,1),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h){g=j[h]
f=C.a.j(q,o)
e=J.ap(f)
d=e.j(f,k)
c=J.Q(C.a.j(r,o),g)
b=J.Q(C.a.j(s,g),k)
if(typeof c!=="number")return c.n()
if(typeof b!=="number")return H.bk(b)
if(typeof d!=="number")return d.w()
e.l(f,k,d+c*b)}}}return a3},
i:function(){return this.aW(new Z.dC())},
aW:function(a){return this.ap(0,new Z.dB(u.B.a(a)))},
eN:function(){var t,s,r,q,p=H.a([],u.n)
for(t=this.gW(this),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)for(q=J.am(t[r]);q.p();)p.push(q.gA())
return p},
k:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=H.t(e.gC(e).a)+"x"+H.t(e.gC(e).b),c=H.a([],u.X)
for(t=e.gW(e),s=t.length,r=0;r<t.length;t.length===s||(0,H.e)(t),++r)for(q=J.am(t[r]);q.p();)c.push(C.d.bT(q.gA(),6).length)
p=C.a.bI(c,6,C.J,u.S)
for(c=e.gW(e),t=c.length,s=p+4,q=u.s,o="",r=0;r<c.length;c.length===t||(0,H.e)(c),++r){n=c[r]
o+="      "
for(m=J.am(n);m.p();){l=m.gA()
k=l<0?"-":" "
l=Math.abs(l)
j=C.d.bT(l,6)
i=H.a([],q)
for(j=T.y(s-j.length,0,1),h=j.length,g=0;g<j.length;j.length===h||(0,H.e)(j),++g)i.push(" ")
f=C.a.eU(i)
o=o+k+C.d.bT(l,6)+f}o+="\n"}return d+" matrix\n"+o},
sdW:function(a){this.b=u.gv.a(a)}}
Z.dG.prototype={
$2:function(a,b){return a+this.a.ab(u.o.a(b))},
$S:1}
Z.dJ.prototype={
$2:function(a,b){return a-this.a.ab(u.o.a(b))},
$S:1}
Z.dI.prototype={
$2:function(a,b){return a*this.a.ab(u.o.a(b))},
$S:1}
Z.dH.prototype={
$2:function(a,b){return a/this.a.ab(u.o.a(b))},
$S:1}
Z.dF.prototype={
$1:function(a){var t,s,r
u.fz.a(a)
t=T.ff(a.b,u.V)
s=H.j(t)
r=s.h("d<1,p>")
return P.m(new H.d(t,s.h("p(1)").a(new Z.dE(this.a,a)),r),!0,r.h("D.E"))},
$S:37}
Z.dE.prototype={
$1:function(a){u.d.a(a)
return this.a.$2(a.b,new S.x(this.b.a,a.a,u.o))},
$S:38}
Z.dD.prototype={
$1:function(a){return J.Q(u.dg.a(a),this.a)},
$S:39}
Z.dK.prototype={
$2:function(a,b){var t=u.o
t.a(b)
return this.a.ab(new S.x(b.b,b.a,t))},
$S:1}
Z.dC.prototype={
$1:function(a){return a},
$S:3}
Z.dB.prototype={
$2:function(a,b){u.o.a(b)
return this.a.$1(a)},
$S:1}
Z.fm.prototype={
$2:function(a,b){var t=u.I
return t.a(a).ay(t.a(b))},
$S:41}
Y.b.prototype={
K:function(a,b){if(b==null)return!1
return b instanceof Y.b&&this.a===b.a&&this.b===b.b&&this.c===b.c},
w:function(a,b){var t=this
if(typeof b=="number")return new Y.b(t.a+b,t.b+b,t.c+b)
else if(b instanceof Y.b)return new Y.b(t.a+b.a,t.b+b.b,t.c+b.c)
else throw H.h("Vector3 only support addition by num or Vector3")},
t:function(a,b){var t=this
if(typeof b=="number")return new Y.b(t.a-b,t.b-b,t.c-b)
else if(b instanceof Y.b)return new Y.b(t.a-b.a,t.b-b.b,t.c-b.c)
else throw H.h("Vector3 only support subtraction by num or Vector3")},
n:function(a,b){var t=this
if(typeof b=="number")return new Y.b(t.a*b,t.b*b,t.c*b)
else if(b instanceof Y.b)return new Y.b(t.a*b.a,t.b*b.b,t.c*b.c)
else throw H.h("Vector3 only support multiplication by num or Vector3")},
M:function(a,b){return new Y.b(this.a/b,this.b/b,this.c/b)},
ah:function(){var t=this.a,s=this.b,r=this.c
return t*t+s*s+r*r},
ar:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.h("No component at index "+a+" on a vector3")}},
f7:function(){var t=u.n
t=Z.ae(null,H.a([H.a([this.a],t),H.a([this.b],t),H.a([this.c],t)],u.b))
return t},
bU:function(a,b,c){var t=a==null?this.a:a,s=b==null?this.b:b
return new Y.b(t,s,c==null?this.c:c)},
ff:function(a){return this.bU(a,null,null)},
fg:function(a){return this.bU(null,a,null)},
da:function(a){return this.bU(null,null,a)},
fe:function(a,b){if(a===0)return this.ff(b)
else if(a===1)return this.fg(b)
else if(a===2)return this.da(b)
else throw H.h("Cannot index a vector3 with index="+a)},
ay:function(a){var t=Z.fs(3).ap(0,new Y.ex(a)).ay(this.f7()),s=u.o
return new Y.b(t.ab(new S.x(0,0,s)),t.ab(new S.x(1,0,s)),t.ab(new S.x(2,0,s)))},
aW:function(a){u.B.a(a)
return new Y.b(a.$1(this.a),a.$1(this.b),a.$1(this.c))},
cb:function(a){return this.aW(new Y.ey())},
ej:function(a){return this.aW(new Y.ew())},
aH:function(){var t=this.a
if(t===0&&this.b===0)return 0
return Math.atan2(this.b,t)},
k:function(a){return"vec3("+H.t(this.a)+", "+H.t(this.b)+", "+H.t(this.c)+")"}}
Y.ex.prototype={
$2:function(a,b){var t,s,r
u.o.a(b)
t=b.a
s=this.a
r=s.gC(s).a
if(typeof t!=="number")return t.dc()
if(typeof r!=="number")return H.bk(r)
if(t<r){t=b.b
r=s.gC(s).b
if(typeof t!=="number")return t.dc()
if(typeof r!=="number")return H.bk(r)
r=t>=r
t=r}else t=!0
return t?a:s.ab(b)},
$S:1}
Y.ey.prototype={
$1:function(a){return J.iz(a)},
$S:3}
Y.ew.prototype={
$1:function(a){return Math.abs(a)},
$S:3}
S.x.prototype={
k:function(a){return"["+H.t(this.a)+", "+H.t(this.b)+"]"},
K:function(a,b){if(b==null)return!1
return b instanceof S.x&&J.a6(b.a,this.a)&&J.a6(b.b,this.b)},
gv:function(a){var t=J.bl(this.a),s=J.bl(this.b)
return A.hJ(A.cr(A.cr(0,C.f.gv(t)),C.f.gv(s)))}}
S.b8.prototype={
a4:function(a){var t=this
return P.fC([t.a,t.b,t.c,t.d],!1,u.z)},
k:function(a){var t=this
return"["+t.a.k(0)+", "+t.b.k(0)+", "+t.c.k(0)+", "+t.d.k(0)+"]"},
K:function(a,b){var t=this
if(b==null)return!1
return b instanceof S.b8&&b.a.K(0,t.a)&&b.b.K(0,t.b)&&b.c.K(0,t.c)&&b.d.K(0,t.d)},
gv:function(a){var t=this,s=H.au(t.a),r=H.au(t.b),q=H.au(t.c),p=H.au(t.d)
return A.hJ(A.cr(A.cr(A.cr(A.cr(0,C.f.gv(s)),C.f.gv(r)),C.f.gv(q)),C.f.gv(p)))}}
Z.cS.prototype={
gal:function(){var t=this.y
return t==null?H.f(H.i("axes")):t},
b4:function(a){return 0.1*(a+3-5)*(a-3-5)*(a-5)+5},
aZ:function(){var t=0,s=P.dv(u.z),r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$aZ=P.dw(function(b6,b7){if(b6===1)return P.dr(b7,s)
while(true)switch(t){case 0:b4=M.ft(null,null,null,null,null,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
b5=M.ft(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7)
b4=new M.bu(C.c,b4,C.w,b5,-1,9,-1,8,4,0,0,C.e,!1,0.01,!1,0.000001,4,null,null,null,C.b,null,null,null,null,null)
b4.S(C.b,null,null)
b4.a7(null,0,!1,null,!1,0.01,C.e,0,null,4,0.000001)
b4.cg(null)
b4.bD=b4.cL(-1,9,C.w.bM(C.w))
b4.bE=b4.cL(-1,8,b5.bM(C.H))
b4.gaN().bQ(0,-1.5707963267948966,C.c,C.k)
b4.bF=V.ht(H.a([b4.gaM(),b4.gaN()],u.U))
b5=u.r
q=u.a
b4.a_(q.a(H.a([b4.gaM(),b4.gaN()],b5)))
b4.N(C.c)
b4.ai(0,0.6)
b4.N(b4.Y(C.c).n(0,new Y.b(0,1,0)).n(0,-1))
b4.bz(C.o,0.5)
r.y=b4
b4=r.gal().dg(r.geO(),9,0.2)
b4.dv(K.fL("#68a8e1"))
r.z=b4
p=S.c7("x")
p.am(r.gal().af(C.l.n(0,9)),C.e.M(0,2))
p.y*=0.6
o=S.c7("y")
o.am(r.gal().af(C.n.n(0,8)),C.e.M(0,2))
o.y*=0.6
b4=r.z
if(b4==null)b4=H.f(H.i("graph"))
r.a_(q.a(H.a([p,o,b4,r.gal()],b5)))
n=r.b4(1.5)
m=r.b4(3.5)
l=r.gal().af(new Y.b(1.5,n,0))
k=r.gal().af(new Y.b(3.5,m,0))
b4=N.e1(null,0,0,!1,k,null,!1,null,C.e,0,l,null,4)
b4.ai(0,4)
b4.Z(C.S)
r.Q=b4
j=N.hb(l)
j.ai(0,0.6)
i=N.hb(k)
i.ai(0,0.6)
h=r.gal().af(C.c)
g=S.c7("f(a)")
g.y*=0.6
b4=h.a
f=l.b
g.am(new Y.b(b4,f,0),C.o)
e=S.c7("f(b)")
e.y*=0.6
d=k.b
e.am(new Y.b(b4,d,0),C.o)
c=N.eo(null,0,null,null,null,4)
c.ai(0,0.05)
c.aL(0,1.5707963267948966)
c.am(new Y.b(b4,f,0),C.o)
c.N(C.l.M(0,2.5))
b=N.eo(null,0,null,null,null,4)
b.ai(0,0.05)
b.aL(0,1.5707963267948966)
b.am(new Y.b(b4,d,0),C.o)
b.N(C.l.M(0,2.5))
a=N.dV(l,c.Y(C.c))
a.aQ(2)
a0=N.dV(k,b.Y(C.c))
a0.aQ(2)
a1=S.c7("a")
a1.y*=0.6
d=l.a
b4=h.b
a1.bN(new Y.b(d,b4,0),0.375,C.j)
a2=S.c7("b")
a2.y*=0.6
a3=k.a
a2.bN(new Y.b(a3,b4,0),0.375,C.j)
a4=N.eo(null,0,null,null,null,4)
a4.ai(0,0.05)
a4.am(new Y.b(d,b4,0),C.j)
a4.N(C.n.M(0,2.5))
a5=N.eo(null,0,null,null,null,4)
a5.ai(0,0.05)
a5.am(new Y.b(a3,b4,0),C.j)
a5.N(C.n.M(0,2.5))
a6=N.dV(l,a4.Y(C.c))
a6.aQ(2)
a7=N.dV(k,a5.Y(C.c))
a7.aQ(2)
a8=N.e1(null,0,0,!1,new Y.b(a3,f,0),null,!1,null,C.e,0,l,null,4)
a8.Z(K.fL("942357"))
a9=N.e1(null,0,0,!1,new Y.b(a3,f,0),null,!1,null,C.e,0,k,null,4)
a9.Z(K.fL("3f7d5c"))
f=r.Q
r.a_(q.a(H.a([j,i,a8,a9,g,e,c,b,a,a0,f==null?H.f(H.i("tangentLine")):f,a1,a2,a4,a5,a6,a7],b5)))
r.en()
b0=M.en("Manim","KaTeX_Main",32,C.c)
b0.y*=4
b0.N(C.l.n(0,2.5).w(0,C.j.M(0,5)))
b1=M.en("web","KaTeX_Main",32,C.c)
b1.y*=2
b1.N(C.l.n(0,6).w(0,C.j))
b2=M.en("Mathematical Animation Engine","KaTeX_Main",32,C.c)
b2.y*=2
b2.bz(C.j,1)
b3=M.en("for the web","KaTeX_Main",32,C.c)
b3.y*=1.5
b3.bz(C.j,0.1)
r.a_(q.a(H.a([b0,b1,b2,b3],b5)))
b4=r.gaz()
b5=new M.bG(C.b,null,null,null,null,null)
b5.S(C.b,null,null)
b5.a_(q.a(b4))
b5.N(C.n)
t=2
return P.dq(r.b_(),$async$aZ)
case 2:return P.ds(null,s)}})
return P.dt($async$aZ,s)},
en:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=T.cy(10,8,4).a5(0)
if(1>=a2.length)return H.o(a2,1)
t=a2[1]
s=a2[0]
if(typeof t!=="number")return t.t()
if(typeof s!=="number")return H.bk(s)
r=t-s
q=K.kd(H.a([C.T,C.U],u.O),10)
p=a0.gal().af(C.c)
for(t=T.y(10,0,1),s=t.length,o=u.i,n=u.r,m=u.a,l=p.b,k=u.l,j=0;j<t.length;t.length===s||(0,H.e)(t),++j){i=t[j]
h=C.a.j(a2,i)
g=C.a.j(q,i)
f=a0.y
if(f==null)f=H.f(H.i("axes"))
e=f.af(new Y.b(h,a0.b4(h),0))
f=a0.y
if(f==null)f=H.f(H.i("axes"))
d=f.af(new Y.b(h+r,0,0))
c=e.w(0,d).M(0,2)
f=H.a([C.a4,C.e,C.a3,C.a5],k)
b=new N.bY(4,0,0,C.e,!1,0.01,!1,0.000001,4,a1,a1,a1,C.b,a1,a1,a1,a1,a1)
b.S(C.b,a1,a1)
a=P.m(f,!0,o)
a.push(C.a.gB(f))
b.bk(a)
b.b8(d.a-e.a,0,C.c,a1,!0)
b.b8(e.b-l,1,C.c,a1,!0)
b.bj(new K.c(g.a,g.b,g.c,0.7))
b.c7(C.q,1)
b.d_(c)
a=m.a(H.a([b],n))
a0.f1(a)
f=a0.d
C.a.cX(f==null?H.f(H.i("mobjects")):f,0,a)}}}
S.c6.prototype={
i:function(){return S.jg(this)}};(function aliases(){var t=J.aa.prototype
t.dJ=t.k
t=J.aV.prototype
t.dK=t.k
t=P.z.prototype
t.dN=t.k
t=N.b6.prototype
t.dO=t.R
t.dP=t.U
t=M.w.prototype
t.dL=t.aK
t.dM=t.an
t.ce=t.U
t.cd=t.R
t=V.A.prototype
t.dQ=t.an
t=V.bn.prototype
t.dI=t.dC})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_1u
t(J,"jR","iY",42)
s(P,"ka","jn",4)
s(P,"kb","jo",4)
s(P,"kc","jp",4)
r(P,"hU","k3",0)
q(P,"kt",2,null,["$1$2","$2"],["i5",function(a,b){return P.i5(a,b,u.H)}],44,0)
q(P,"i3",2,null,["$1$2","$2"],["i4",function(a,b){return P.i4(a,b,u.H)}],29,0)
p(Z.cS.prototype,"geO","b4",3)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.z,null)
r(P.z,[H.fy,J.aa,J.bp,P.q,H.bx,P.F,H.a7,H.V,P.G,H.bE,H.ep,H.ec,H.bF,H.ci,P.b3,H.e2,H.bM,H.cQ,H.dg,H.d1,H.eY,H.ah,H.de,H.dl,P.eZ,P.d9,P.bb,P.bc,P.bt,P.db,P.aY,P.L,P.da,P.c3,P.c4,P.dj,P.co,P.cq,P.df,P.aZ,P.ab,P.c0,P.c2,P.eG,P.dY,P.K,P.dk,P.d0,W.fv,P.dh,P.aW,A.cg,R.dP,K.bm,M.w,M.T,V.c9,N.d3,V.bn,N.ej,K.c,S.aT,X.a8,X.a2,M.dX,O.bP,Z.ad,Y.b,S.x,S.b8])
r(J.aa,[J.cP,J.b2,J.aV,J.u,J.aD,J.at,W.U,W.bw,W.dW,W.bB,W.l])
r(J.aV,[J.cV,J.al,J.aE])
s(J.e0,J.u)
r(J.aD,[J.b1,J.bI])
r(P.q,[H.aJ,H.E,H.ay,H.aw,P.bH])
r(H.aJ,[H.aS,H.cp])
s(H.cd,H.aS)
s(H.cb,H.cp)
s(H.a1,H.cb)
r(P.F,[H.bK,P.d4,H.cR,H.d6,H.cX,P.bs,H.dd,P.cU,P.aq,P.d7,P.d5,P.b5,P.cH,P.cJ])
r(H.a7,[H.fl,H.cO,H.d2,H.fg,H.fh,H.fi,P.eB,P.eA,P.eC,P.eD,P.f_,P.f2,P.f3,P.f7,P.eH,P.eP,P.eL,P.eM,P.eN,P.eJ,P.eO,P.eI,P.eS,P.eT,P.eR,P.eQ,P.el,P.em,P.f6,P.eW,P.eX,P.e4,W.ez,W.eF,A.dZ,R.dQ,R.dR,K.dy,K.dz,K.dA,M.ed,M.ee,M.dU,M.dN,Y.ef,M.ea,M.e9,M.e8,M.eb,M.e6,M.e7,V.N,V.O,V.P,V.eu,V.ev,V.es,V.et,V.er,Q.dT,Q.dS,N.ek,T.fo,T.fn,T.fp,V.f9,V.f8,K.f4,X.fb,X.fc,Z.dG,Z.dJ,Z.dI,Z.dH,Z.dF,Z.dE,Z.dD,Z.dK,Z.dC,Z.dB,Z.fm,Y.ex,Y.ey,Y.ew])
r(H.E,[H.D,H.bD,H.bL])
r(H.D,[H.ai,H.d,H.av])
r(P.G,[H.ca,H.c1])
s(H.b0,H.aw)
s(H.aC,H.cO)
s(H.bU,P.d4)
r(H.d2,[H.d_,H.b_])
s(H.d8,P.bs)
s(P.bO,P.b3)
s(H.bJ,P.bO)
s(H.cl,H.dd)
r(P.bH,[P.ck,A.a3])
s(P.cj,P.db)
s(P.di,P.co)
s(P.ch,P.cq)
s(P.az,P.ch)
r(P.aq,[P.bX,P.cN])
r(W.U,[W.a_,W.b9])
r(W.a_,[W.k,W.an])
s(W.n,W.k)
r(W.n,[W.cD,W.cE,W.aR,W.cM,W.cY])
s(W.ak,W.l)
s(W.a4,W.ak)
s(W.cc,W.bB)
s(W.ce,P.c3)
s(W.dc,W.ce)
s(W.cf,P.c4)
s(K.cC,K.bm)
s(B.cF,K.cC)
r(M.w,[V.A,M.aH,M.bG])
r(V.A,[N.b6,V.aI,Y.bV,N.bW,V.bA])
r(N.b6,[N.M,N.bo])
r(N.M,[M.b4,N.bz])
s(M.cI,V.aI)
s(M.bu,M.cI)
s(N.c8,V.c9)
s(N.by,N.bo)
s(N.bC,N.by)
r(N.bW,[N.bZ,N.bY])
s(N.b7,N.bZ)
s(N.br,N.b7)
s(Q.cG,V.bn)
s(O.cT,X.a2)
r(O.cT,[O.bR,O.bS,O.bT,O.bQ])
s(Z.cS,N.ej)
s(S.c6,M.aH)
t(H.cp,P.ab)
t(P.cq,P.c0)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",p:"double",B:"num",ac:"String",J:"bool",K:"Null",v:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","p(p,x<r,r>)","b(b)","p(p)","~(~())","~(a4)","J(w)","c(c)","K(@)","K()","M(M)","b(p)","J(r,b)","r(r,r)","~(l)","a9<K>()","v<w>(w)","J(b)","@(@)","K(~())","@(@,ac)","T(T,T)","J(p)","@(ac)","~(@)","p(b)","K(@,aF)","~(r,@)","J(r)","0^(0^,0^)<B>","J(c)","~(v<w>,c_<w>)","p(r)","b(b,b)","p(ac)","K(z,aF)","L<@>(@)","v<p>(x<r,v<p>>)","p(x<r,p>)","p(v<p>)","~(z?,z?)","ad(ad,ad)","r(@,@)","~(B)","0^(0^,0^)<B>","p(B)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.jD(v.typeUniverse,JSON.parse('{"cV":"aV","al":"aV","aE":"aV","kG":"l","kN":"l","kF":"k","kO":"k","kW":"k","kH":"n","kT":"n","kP":"a_","kL":"a_","kU":"a4","kJ":"ak","kI":"an","kX":"an","cP":{"J":[]},"b2":{"K":[]},"u":{"v":["1"],"E":["1"],"q":["1"]},"e0":{"u":["1"],"v":["1"],"E":["1"],"q":["1"]},"bp":{"G":["1"]},"aD":{"p":[],"B":[],"as":["B"]},"b1":{"p":[],"r":[],"B":[],"as":["B"]},"bI":{"p":[],"B":[],"as":["B"]},"at":{"ac":[],"as":["ac"],"eg":[]},"E":{"q":["1"]},"aJ":{"q":["2"]},"bx":{"G":["2"]},"aS":{"aJ":["1","2"],"q":["2"],"q.E":"2"},"cd":{"aS":["1","2"],"aJ":["1","2"],"E":["2"],"q":["2"],"q.E":"2"},"cb":{"ab":["2"],"v":["2"],"aJ":["1","2"],"E":["2"],"q":["2"]},"a1":{"cb":["1","2"],"ab":["2"],"v":["2"],"aJ":["1","2"],"E":["2"],"q":["2"],"q.E":"2","ab.E":"2"},"bK":{"F":[]},"D":{"E":["1"],"q":["1"]},"ai":{"D":["1"],"E":["1"],"q":["1"],"D.E":"1","q.E":"1"},"V":{"G":["1"]},"d":{"D":["2"],"E":["2"],"q":["2"],"D.E":"2","q.E":"2"},"ay":{"q":["1"],"q.E":"1"},"ca":{"G":["1"]},"aw":{"q":["1"],"q.E":"1"},"b0":{"aw":["1"],"E":["1"],"q":["1"],"q.E":"1"},"c1":{"G":["1"]},"bD":{"E":["1"],"q":["1"],"q.E":"1"},"bE":{"G":["1"]},"av":{"D":["1"],"E":["1"],"q":["1"],"D.E":"1","q.E":"1"},"cO":{"a7":[],"aU":[]},"aC":{"a7":[],"aU":[]},"bU":{"F":[]},"cR":{"F":[]},"d6":{"F":[]},"ci":{"aF":[]},"a7":{"aU":[]},"d2":{"a7":[],"aU":[]},"d_":{"a7":[],"aU":[]},"b_":{"a7":[],"aU":[]},"cX":{"F":[]},"d8":{"F":[]},"bJ":{"b3":["1","2"],"bN":["1","2"]},"bL":{"E":["1"],"q":["1"],"q.E":"1"},"bM":{"G":["1"]},"cQ":{"eg":[]},"dg":{"e5":[]},"d1":{"e5":[]},"eY":{"G":["e5"]},"dd":{"F":[]},"cl":{"F":[]},"L":{"a9":["1"]},"bc":{"G":["1"]},"ck":{"q":["1"],"q.E":"1"},"bt":{"F":[]},"cj":{"db":["1"]},"co":{"hu":[]},"di":{"co":[],"hu":[]},"az":{"c0":["1"],"c_":["1"],"E":["1"],"q":["1"]},"aZ":{"G":["1"]},"bH":{"q":["1"]},"bO":{"b3":["1","2"],"bN":["1","2"]},"b3":{"bN":["1","2"]},"ch":{"c0":["1"],"c_":["1"],"E":["1"],"q":["1"]},"p":{"B":[],"as":["B"]},"r":{"B":[],"as":["B"]},"v":{"E":["1"],"q":["1"]},"B":{"as":["B"]},"c_":{"E":["1"],"q":["1"]},"ac":{"as":["ac"],"eg":[]},"bs":{"F":[]},"d4":{"F":[]},"cU":{"F":[]},"aq":{"F":[]},"bX":{"F":[]},"cN":{"F":[]},"d7":{"F":[]},"d5":{"F":[]},"b5":{"F":[]},"cH":{"F":[]},"c2":{"F":[]},"cJ":{"F":[]},"dk":{"aF":[]},"a4":{"l":[]},"ak":{"l":[]},"n":{"k":[],"U":[]},"cD":{"k":[],"U":[]},"cE":{"k":[],"U":[]},"aR":{"k":[],"U":[]},"an":{"U":[]},"bB":{"fE":["B"]},"k":{"U":[]},"cM":{"k":[],"U":[]},"a_":{"U":[]},"cY":{"k":[],"U":[]},"b9":{"U":[]},"cc":{"fE":["B"]},"ce":{"c3":["1"]},"dc":{"ce":["1"],"c3":["1"]},"cf":{"c4":["1"]},"dh":{"j8":[]},"a3":{"q":["v<1>"],"q.E":"v<1>"},"cg":{"G":["v<1>"]},"cC":{"bm":[]},"cF":{"bm":[]},"b4":{"M":[],"A":[],"w":[]},"cI":{"aI":[],"A":[],"w":[]},"bu":{"aI":[],"A":[],"w":[]},"bV":{"A":[],"w":[]},"b6":{"A":[],"w":[]},"M":{"A":[],"w":[]},"c8":{"c9":[]},"bo":{"A":[],"w":[]},"by":{"A":[],"w":[]},"bC":{"A":[],"w":[]},"bz":{"M":[],"A":[],"w":[]},"bW":{"A":[],"w":[]},"bZ":{"A":[],"w":[]},"b7":{"A":[],"w":[]},"br":{"A":[],"w":[]},"bY":{"A":[],"w":[]},"aH":{"w":[]},"bG":{"w":[]},"A":{"w":[]},"aI":{"A":[],"w":[]},"bA":{"A":[],"w":[]},"cG":{"bn":[]},"cT":{"a2":[]},"bR":{"a2":[]},"bS":{"a2":[]},"bT":{"a2":[]},"bQ":{"a2":[]},"c6":{"aH":[],"w":[]}}'))
H.jC(v.typeUniverse,JSON.parse('{"cp":2,"bH":1,"bO":2,"ch":1,"cq":1}'))
0
var u=(function rtii(){var t=H.bi
return{dq:t("@<r>"),I:t("ad"),t:t("bt"),dK:t("T"),gA:t("aR"),G:t("c"),e8:t("as<@>"),R:t("E<@>"),C:t("F"),J:t("l"),en:t("a8"),e:t("a2"),Z:t("aU"),m:t("a9<@>"),v:t("aC<p>"),bo:t("a3<z>"),eX:t("a3<A>"),eR:t("a3<b>"),eN:t("a3<r>"),eB:t("a3<B>"),hf:t("q<@>"),w:t("u<ad>"),f_:t("u<T>"),O:t("u<c>"),bN:t("u<aT>"),aE:t("u<cL<a2>>"),aW:t("u<M>"),eG:t("u<v<z>>"),h:t("u<v<b>>"),b:t("u<v<p>>"),gL:t("u<v<r>>"),dd:t("u<v<B>>"),r:t("u<w>"),L:t("u<c4<@>>"),s:t("u<ac>"),dm:t("u<b8<b,b,b,b>>"),U:t("u<A>"),l:t("u<b>"),n:t("u<p>"),W:t("u<@>"),X:t("u<r>"),eM:t("u<w(w,p)>"),T:t("b2"),Y:t("aE"),fw:t("kR"),bf:t("kS"),f:t("M"),bF:t("v<c>"),gF:t("v<cL<a2>>"),a:t("v<w>"),y:t("v<b>"),dg:t("v<p>"),aH:t("v<@>"),cH:t("bN<a8,v<cL<a2>>>"),j:t("w"),fV:t("bQ"),E:t("a4"),gt:t("bR"),bt:t("bS"),dN:t("bT"),P:t("K"),f4:t("b4"),K:t("z"),p:t("aW<B>"),eU:t("fE<B>"),bA:t("c_<w>"),k:t("aF"),N:t("ac"),e3:t("ai<b>"),hd:t("x<b,b>"),d:t("x<r,p>"),o:t("x<r,r>"),fz:t("x<r,v<p>>"),bl:t("b8<b,b,b,b>"),ak:t("al"),i:t("b"),cD:t("b(b)"),do:t("dc<a4>"),ck:t("L<K>"),c:t("L<@>"),fJ:t("L<r>"),dL:t("L<B>"),g4:t("cj<B>"),cJ:t("J"),al:t("J(z)"),fT:t("J(r)"),V:t("p"),fA:t("p(p,x<r,r>)"),B:t("p(p)"),z:t("@"),fO:t("@()"),bI:t("@(z)"),ag:t("@(z,aF)"),S:t("r"),aw:t("0&*"),_:t("z*"),eH:t("a9<K>?"),x:t("v<c>?"),g2:t("v<M>?"),u:t("v<w>?"),D:t("v<b>?"),cI:t("v<w(w,p)>?"),dC:t("bN<a8,v<cL<a2>>>?"),Q:t("z?"),gv:t("x<r,r>?"),F:t("aY<@,@>?"),g:t("df?"),A:t("@(l)?"),g5:t("~()?"),H:t("B"),q:t("~"),M:t("~()"),c4:t("~(B)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.E=W.aR.prototype
C.p=W.bw.prototype
C.V=J.aa.prototype
C.a=J.u.prototype
C.f=J.b1.prototype
C.W=J.b2.prototype
C.d=J.aD.prototype
C.m=J.at.prototype
C.X=J.aE.prototype
C.G=J.cV.prototype
C.B=J.al.prototype
C.a6=W.b9.prototype
C.o=new Y.b(-1,0,0)
C.H=new M.T(null,null,null,C.o,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.F=new K.c(0.73333,0.73333,0.73333,1)
C.j=new Y.b(0,-1,0)
C.Y=H.a(t([0]),u.n)
C.I=new M.T(C.F,!0,!1,C.j,1,!0,0.1,1,null,C.Y,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.w=new M.T(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.y=new H.aC(P.i3(),u.v)
C.J=new H.aC(P.i3(),H.bi("aC<r>"))
C.x=new H.aC(P.kt(),u.v)
C.K=new H.bE(H.bi("bE<0&>"))
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=function() {
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
C.Q=function(getTagFallback) {
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
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
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
C.P=function(hooks) {
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
C.O=function(hooks) {
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
C.D=function(hooks) { return hooks; }

C.h=new P.di()
C.R=new P.dk()
C.i=new K.c(0,0,0,0)
C.q=new K.c(0,0,0,1)
C.b=new K.c(1,1,1,1)
C.S=new K.c(0.98824,0.38431,0.33333,1)
C.T=new K.c(0.60392,0.44706,0.67451,1)
C.U=new K.c(1,0.52549,0.18431,1)
C.r=new X.a8("EventType.mouseMovedEvent")
C.t=new X.a8("EventType.mousePressedEvent")
C.u=new X.a8("EventType.mouseReleasedEvent")
C.v=new X.a8("EventType.mouseDraggedEvent")
C.z=new X.a8("EventType.keyPressedEvent")
C.A=new X.a8("EventType.keyReleasedEvent")
C.Z=H.a(t([C.r,C.t,C.u,C.v,C.z,C.A]),H.bi("u<a8>"))
C.a8=H.a(t([]),u.r)
C.a_=H.a(t([]),u.n)
C.a0=new N.d3("TipSide.Start")
C.a1=new N.d3("TipSide.End")
C.c=new Y.b(0,0,0)
C.k=new Y.b(0,0,1)
C.n=new Y.b(0,1,0)
C.l=new Y.b(1,0,0)
C.e=new Y.b(1,1,0)
C.a2=new Y.b(1,1,1)
C.a3=new Y.b(1,-1,0)
C.a4=new Y.b(-1,1,0)
C.a5=new Y.b(-1,-1,0)
C.a7=new P.bb(null,2)})();(function staticFields(){$.eU=null
$.ar=0
$.bv=null
$.h8=null
$.i_=null
$.hT=null
$.i7=null
$.fe=null
$.fj=null
$.fX=null
$.be=null
$.ct=null
$.cu=null
$.fN=!1
$.H=C.h
$.a5=H.a([],H.bi("u<z>"))
$.du=P.fA(u.S,H.bi("bN<r,r>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"kK","id",function(){return H.kh("_$dart_dartClosure")})
t($,"lj","h2",function(){return C.h.d4(new H.fl(),H.bi("a9<K>"))})
t($,"kY","ie",function(){return H.ax(H.eq({
toString:function(){return"$receiver$"}}))})
t($,"kZ","ig",function(){return H.ax(H.eq({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"l_","ih",function(){return H.ax(H.eq(null))})
t($,"l0","ii",function(){return H.ax(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"l3","il",function(){return H.ax(H.eq(void 0))})
t($,"l4","im",function(){return H.ax(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"l2","ik",function(){return H.ax(H.hr(null))})
t($,"l1","ij",function(){return H.ax(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"l6","ip",function(){return H.ax(H.hr(void 0))})
t($,"l5","io",function(){return H.ax(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"l7","h1",function(){return P.jm()})
s($,"kM","cA",function(){var r=new M.dX()
r.dS()
return r})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.aa,DOMError:J.aa,MediaError:J.aa,NavigatorUserMediaError:J.aa,OverconstrainedError:J.aa,PositionError:J.aa,SQLError:J.aa,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLBodyElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLDivElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTableElement:W.n,HTMLTableRowElement:W.n,HTMLTableSectionElement:W.n,HTMLTemplateElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.cD,HTMLAreaElement:W.cE,HTMLCanvasElement:W.aR,CanvasRenderingContext2D:W.bw,CDATASection:W.an,CharacterData:W.an,Comment:W.an,ProcessingInstruction:W.an,Text:W.an,DOMException:W.dW,DOMRectReadOnly:W.bB,SVGAElement:W.k,SVGAnimateElement:W.k,SVGAnimateMotionElement:W.k,SVGAnimateTransformElement:W.k,SVGAnimationElement:W.k,SVGCircleElement:W.k,SVGClipPathElement:W.k,SVGDefsElement:W.k,SVGDescElement:W.k,SVGDiscardElement:W.k,SVGEllipseElement:W.k,SVGFEBlendElement:W.k,SVGFEColorMatrixElement:W.k,SVGFEComponentTransferElement:W.k,SVGFECompositeElement:W.k,SVGFEConvolveMatrixElement:W.k,SVGFEDiffuseLightingElement:W.k,SVGFEDisplacementMapElement:W.k,SVGFEDistantLightElement:W.k,SVGFEFloodElement:W.k,SVGFEFuncAElement:W.k,SVGFEFuncBElement:W.k,SVGFEFuncGElement:W.k,SVGFEFuncRElement:W.k,SVGFEGaussianBlurElement:W.k,SVGFEImageElement:W.k,SVGFEMergeElement:W.k,SVGFEMergeNodeElement:W.k,SVGFEMorphologyElement:W.k,SVGFEOffsetElement:W.k,SVGFEPointLightElement:W.k,SVGFESpecularLightingElement:W.k,SVGFESpotLightElement:W.k,SVGFETileElement:W.k,SVGFETurbulenceElement:W.k,SVGFilterElement:W.k,SVGForeignObjectElement:W.k,SVGGElement:W.k,SVGGeometryElement:W.k,SVGGraphicsElement:W.k,SVGImageElement:W.k,SVGLineElement:W.k,SVGLinearGradientElement:W.k,SVGMarkerElement:W.k,SVGMaskElement:W.k,SVGMetadataElement:W.k,SVGPathElement:W.k,SVGPatternElement:W.k,SVGPolygonElement:W.k,SVGPolylineElement:W.k,SVGRadialGradientElement:W.k,SVGRectElement:W.k,SVGScriptElement:W.k,SVGSetElement:W.k,SVGStopElement:W.k,SVGStyleElement:W.k,SVGElement:W.k,SVGSVGElement:W.k,SVGSwitchElement:W.k,SVGSymbolElement:W.k,SVGTSpanElement:W.k,SVGTextContentElement:W.k,SVGTextElement:W.k,SVGTextPathElement:W.k,SVGTextPositioningElement:W.k,SVGTitleElement:W.k,SVGUseElement:W.k,SVGViewElement:W.k,SVGGradientElement:W.k,SVGComponentTransferFunctionElement:W.k,SVGFEDropShadowElement:W.k,SVGMPathElement:W.k,Element:W.k,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,EventTarget:W.U,HTMLFormElement:W.cM,MouseEvent:W.a4,DragEvent:W.a4,PointerEvent:W.a4,WheelEvent:W.a4,Document:W.a_,DocumentFragment:W.a_,HTMLDocument:W.a_,ShadowRoot:W.a_,XMLDocument:W.a_,Attr:W.a_,DocumentType:W.a_,Node:W.a_,HTMLSelectElement:W.cY,CompositionEvent:W.ak,FocusEvent:W.ak,KeyboardEvent:W.ak,TextEvent:W.ak,TouchEvent:W.ak,UIEvent:W.ak,Window:W.b9,DOMWindow:W.b9,ClientRect:W.cc,DOMRect:W.cc})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=Z.kq
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=logo.dart.js.map
