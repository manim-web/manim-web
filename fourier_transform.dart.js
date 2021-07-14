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
a[c]=function(){a[c]=function(){H.lq(b)}
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
if(a[b]!==s)H.lr(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.hK(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={hq:function hq(){},
hm:function(a,b,c){if(b.h("G<0>").b(a))return new H.cL(a,b.h("@<0>").E(c).h("cL<1,2>"))
return new H.bh(a,b.h("@<0>").E(c).h("bh<1,2>"))},
e:function(a){return new H.cf("Field '"+a+"' has not been initialized.")},
ij:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hJ:function(a,b,c){return a},
bB:function(a,b,c,d){P.au(b,"start")
if(c!=null){P.au(c,"end")
if(b>c)H.c(P.aP(b,0,c,"start",null))}return new H.ak(a,b,c,d.h("ak<0>"))},
jQ:function(a,b,c,d){if(t.X.b(a))return new H.c7(a,b,c.h("@<0>").E(d).h("c7<1,2>"))
return new H.bk(a,b,c.h("@<0>").E(d).h("bk<1,2>"))},
ih:function(a,b,c){if(t.X.b(a)){P.au(b,"count")
return new H.bs(a,b,c.h("bs<0>"))}P.au(b,"count")
return new H.aR(a,b,c.h("aR<0>"))},
a1:function(){return new P.bA("No element")},
jJ:function(){return new P.bA("Too few elements")},
k1:function(a,b,c){H.dA(a,0,J.z(a)-1,b,c)},
dA:function(a,b,c,d,e){if(c-b<=32)H.k0(a,b,c,d,e)
else H.k_(a,b,c,d,e)},
k0:function(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.Z(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.ao()
o=o>0}else o=!1
if(!o)break
n=p-1
r.q(a,p,r.i(a,n))
p=n}r.q(a,p,q)}},
k_:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=C.e.af(a5-a4+1,6),i=a4+j,h=a5-j,g=C.e.af(a4+a5,2),f=g-j,e=g+j,d=J.Z(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=a0
a0=s}d.q(a3,i,c)
d.q(a3,g,a)
d.q(a3,h,a1)
d.q(a3,f,d.i(a3,a4))
d.q(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
if(J.ah(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.i(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.q(a3,p,d.i(a3,r))
d.q(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.i(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.q(a3,p,d.i(a3,r))
l=r+1
d.q(a3,r,d.i(a3,q))
d.q(a3,q,o)
q=m
r=l
break}else{d.q(a3,p,d.i(a3,q))
d.q(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.q(a3,p,d.i(a3,r))
d.q(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.i(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.q(a3,p,d.i(a3,r))
l=r+1
d.q(a3,r,d.i(a3,q))
d.q(a3,q,o)
r=l}else{d.q(a3,p,d.i(a3,q))
d.q(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.q(a3,a4,d.i(a3,a2))
d.q(a3,a2,b)
a2=q+1
d.q(a3,a5,d.i(a3,a2))
d.q(a3,a2,a0)
H.dA(a3,a4,r-2,a6,a7)
H.dA(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.ah(a6.$2(d.i(a3,r),b),0);)++r
for(;J.ah(a6.$2(d.i(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.q(a3,p,d.i(a3,r))
d.q(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.i(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.q(a3,p,d.i(a3,r))
l=r+1
d.q(a3,r,d.i(a3,q))
d.q(a3,q,o)
r=l}else{d.q(a3,p,d.i(a3,q))
d.q(a3,q,o)}q=m
break}}H.dA(a3,r,q,a6,a7)}else H.dA(a3,r,q,a6,a7)},
b6:function b6(){},
c2:function c2(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b){this.a=a
this.$ti=b},
cL:function cL(a,b){this.a=a
this.$ti=b},
cJ:function cJ(){},
a5:function a5(a,b){this.a=a
this.$ti=b},
cf:function cf(a){this.a=a},
he:function he(){},
G:function G(){},
D:function D(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a7:function a7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ck:function ck(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(a){this.$ti=a},
c9:function c9(a){this.$ti=a},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
cX:function cX(){},
j6:function(a){var s,r=H.j5(a)
if(r!=null)return r
s="minified:"+a
return s},
v:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d7(a)
return s},
aF:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
eZ:function(a){return H.jU(a)},
jU:function(a){var s,r,q,p
if(a instanceof P.C)return H.ab(H.d2(a),null)
if(J.aX(a)===C.a1||t.ak.b(a)){s=C.I(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ab(H.d2(a),null)},
aY:function(a){throw H.f(H.kY(a))},
k:function(a,b){if(a==null)J.z(a)
throw H.f(H.hL(a,b))},
hL:function(a,b){var s,r="index"
if(!H.iG(b))return new P.aI(!0,b,r,null)
s=H.V(J.z(a))
if(b<0||b>=s)return P.ho(b,a,r,null,s)
return P.f_(b,r)},
kY:function(a){return new P.aI(!0,a,null,null)},
f:function(a){var s,r
if(a==null)a=new P.dt()
s=new Error()
s.dartException=a
r=H.ls
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ls:function(){return J.d7(this.dartException)},
c:function(a){throw H.f(a)},
d:function(a){throw H.f(P.ao(a))},
aS:function(a){var s,r,q,p,o,n
a=H.lm(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.f3(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
f4:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ik:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
hr:function(a,b){var s=b==null,r=s?null:b.method
return new H.dq(a,r,s?null:b.receiver)},
bc:function(a){if(a==null)return new H.eU(a)
if(a instanceof H.ca)return H.bb(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.bb(a,a.dartException)
return H.kX(a)},
bb:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.e.h5(r,16)&8191)===10)switch(q){case 438:return H.bb(a,H.hr(H.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.v(s)+" (Error "+q+")"
return H.bb(a,new H.cn(p,e))}}if(a instanceof TypeError){o=$.ja()
n=$.jb()
m=$.jc()
l=$.jd()
k=$.jg()
j=$.jh()
i=$.jf()
$.je()
h=$.jj()
g=$.ji()
f=o.ak(s)
if(f!=null)return H.bb(a,H.hr(H.bI(s),f))
else{f=n.ak(s)
if(f!=null){f.method="call"
return H.bb(a,H.hr(H.bI(s),f))}else{f=m.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=k.ak(s)
if(f==null){f=j.ak(s)
if(f==null){f=i.ak(s)
if(f==null){f=l.ak(s)
if(f==null){f=h.ak(s)
if(f==null){f=g.ak(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.bI(s)
return H.bb(a,new H.cn(s,f==null?e:f.method))}}}return H.bb(a,new H.dH(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cy()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bb(a,new P.aI(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cy()
return a},
ba:function(a){var s
if(a instanceof H.ca)return a.b
if(a==null)return new H.cQ(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.cQ(a)},
le:function(a,b,c,d,e,f){t.b8.a(a)
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.fs("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.le)
a.$identity=s
return s},
jD:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.dB().constructor.prototype):Object.create(new H.bq(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aJ
if(typeof r!=="number")return r.A()
$.aJ=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.i_(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.jz(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.i_(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
jz:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.iU,a)
if(typeof a=="string"){if(b)throw H.f("Cannot compute signature for static tearoff.")
s=c?H.jv:H.ju
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.f("Error in functionType of tearoff")},
jA:function(a,b,c,d){var s=H.hZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
i_:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.jC(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.jA(r,!p,s,b)
if(r===0){p=$.aJ
if(typeof p!=="number")return p.A()
$.aJ=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c0
return new Function(p+(o==null?$.c0=H.em("self"):o)+";return "+n+"."+H.v(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aJ
if(typeof p!=="number")return p.A()
$.aJ=p+1
m+=p
p="return function("+m+"){return this."
o=$.c0
return new Function(p+(o==null?$.c0=H.em("self"):o)+"."+H.v(s)+"("+m+");}")()},
jB:function(a,b,c,d){var s=H.hZ,r=H.jw
switch(b?-1:a){case 0:throw H.f(new H.dv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
jC:function(a,b){var s,r,q,p,o,n,m,l=$.c0
if(l==null)l=$.c0=H.em("self")
s=$.hY
if(s==null)s=$.hY=H.em("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.jB(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.v(r)+"(this."+s+");"
n=$.aJ
if(typeof n!=="number")return n.A()
$.aJ=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.v(r)+"(this."+s+", "+m+");"
n=$.aJ
if(typeof n!=="number")return n.A()
$.aJ=n+1
return new Function(o+n+"}")()},
hK:function(a,b,c,d,e,f,g){return H.jD(a,b,c,d,!!e,!!f,g)},
ju:function(a,b){return H.dX(v.typeUniverse,H.d2(a.a),b)},
jv:function(a,b){return H.dX(v.typeUniverse,H.d2(a.c),b)},
hZ:function(a){return a.a},
jw:function(a){return a.c},
em:function(a){var s,r,q,p=new H.bq("self","target","receiver","name"),o=J.eJ(Object.getOwnPropertyNames(p),t.Y)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.f(P.hV("Field name "+a+" not found."))},
bM:function(a){if(a==null)H.kZ("boolean expression must not be null")
return a},
kZ:function(a){throw H.f(new H.dJ(a))},
lq:function(a){throw H.f(new P.dg(a))},
l8:function(a){return v.getIsolateTag(a)},
lr:function(a){return H.c(new H.cf(a))},
m6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lg:function(a){var s,r,q,p,o,n=H.bI($.iT.$1(a)),m=$.h0[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.h8[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.kw($.iM.$2(a,n))
if(q!=null){m=$.h0[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.h8[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.hd(s)
$.h0[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.h8[n]=s
return s}if(p==="-"){o=H.hd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.j_(a,s)
if(p==="*")throw H.f(P.il(n))
if(v.leafTags[n]===true){o=H.hd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.j_(a,s)},
j_:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hQ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
hd:function(a){return J.hQ(a,!1,null,!!a.$ilF)},
li:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.hd(s)
else return J.hQ(s,c,null,null)},
lb:function(){if(!0===$.hN)return
$.hN=!0
H.lc()},
lc:function(){var s,r,q,p,o,n,m,l
$.h0=Object.create(null)
$.h8=Object.create(null)
H.la()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.j1.$1(o)
if(n!=null){m=H.li(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
la:function(){var s,r,q,p,o,n,m=C.T()
m=H.bL(C.U,H.bL(C.V,H.bL(C.J,H.bL(C.J,H.bL(C.W,H.bL(C.X,H.bL(C.Y(C.I),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.iT=new H.h5(p)
$.iM=new H.h6(o)
$.j1=new H.h7(n)},
bL:function(a,b){return a(b)||b},
jM:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.f(new P.ey("Illegal RegExp pattern ("+String(s)+")",a))},
lm:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dl:function dl(){},
b_:function b_(a,b){this.a=a
this.$ti=b},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cn:function cn(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a){this.a=a},
eU:function eU(a){this.a=a},
ca:function ca(a,b){this.a=a
this.b=b},
cQ:function cQ(a){this.a=a
this.b=null},
an:function an(){},
dD:function dD(){},
dB:function dB(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a){this.a=a},
dJ:function dJ(a){this.a=a},
ce:function ce(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eL:function eL(a,b){this.a=a
this.b=b
this.c=null},
cg:function cg(a,b){this.a=a
this.$ti=b},
ch:function ch(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
dp:function dp(a,b){this.a=a
this.b=b},
fI:function fI(a){this.b=a},
ie:function(a,b){var s=b.c
return s==null?b.c=H.hC(a,b.z,!0):s},
id:function(a,b){var s=b.c
return s==null?b.c=H.cU(a,"aq",[b.z]):s},
ig:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ig(a.z)
return s===11||s===12},
jZ:function(a){return a.cy},
bP:function(a){return H.fN(v.typeUniverse,a,!1)},
ld:function(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.aW(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
aW:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aW(a,s,a0,a1)
if(r===s)return b
return H.iz(a,r,!0)
case 7:s=b.z
r=H.aW(a,s,a0,a1)
if(r===s)return b
return H.hC(a,r,!0)
case 8:s=b.z
r=H.aW(a,s,a0,a1)
if(r===s)return b
return H.iy(a,r,!0)
case 9:q=b.Q
p=H.d1(a,q,a0,a1)
if(p===q)return b
return H.cU(a,b.z,p)
case 10:o=b.z
n=H.aW(a,o,a0,a1)
m=b.Q
l=H.d1(a,m,a0,a1)
if(n===o&&l===m)return b
return H.hA(a,n,l)
case 11:k=b.z
j=H.aW(a,k,a0,a1)
i=b.Q
h=H.kU(a,i,a0,a1)
if(j===k&&h===i)return b
return H.ix(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d1(a,g,a0,a1)
o=b.z
n=H.aW(a,o,a0,a1)
if(f===g&&n===o)return b
return H.hB(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.f(P.ej("Attempted to substitute unexpected RTI kind "+c))}},
d1:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aW(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
kV:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aW(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
kU:function(a,b,c,d){var s,r=b.a,q=H.d1(a,r,c,d),p=b.b,o=H.d1(a,p,c,d),n=b.c,m=H.kV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.dP()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
iP:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.iU(s)
return a.$S()}return null},
iV:function(a,b){var s
if(H.ig(b))if(a instanceof H.an){s=H.iP(a)
if(s!=null)return s}return H.d2(a)},
d2:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.hE(a)}if(Array.isArray(a))return H.A(a)
return H.hE(J.aX(a))},
A:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
E:function(a){var s=a.$ti
return s!=null?s:H.hE(a)},
hE:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.kF(a,s)},
kF:function(a,b){var s=a instanceof H.an?a.__proto__.__proto__.constructor:b,r=H.ku(v.typeUniverse,s.name)
b.$ccache=r
return r},
iU:function(a){var s,r,q
H.V(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.fN(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
l3:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.dV(a)
q=H.fN(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.dV(q):p},
kE:function(a){var s,r,q,p=this
if(p===t.K)return H.cZ(p,a,H.kJ)
if(!H.aZ(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cZ(p,a,H.kM)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.iG
else if(r===t.V||r===t.p)q=H.kI
else if(r===t.aw)q=H.kK
else q=r===t.cJ?H.iE:null
if(q!=null)return H.cZ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.lf)){p.r="$i"+s
return H.cZ(p,a,H.kL)}}else if(s===7)return H.cZ(p,a,H.kC)
return H.cZ(p,a,H.kA)},
cZ:function(a,b,c){a.b=c
return a.b(b)},
kD:function(a){var s,r=this,q=H.kz
if(!H.aZ(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.kx
else if(r===t.K)q=H.kv
else{s=H.d4(r)
if(s)q=H.kB}r.a=q
return r.a(a)},
hH:function(a){var s,r=a.y
if(!H.aZ(a))if(!(a===t._))if(!(a===t.cF))if(r!==7)s=r===8&&H.hH(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kA:function(a){var s=this
if(a==null)return H.hH(s)
return H.M(v.typeUniverse,H.iV(a,s),null,s,null)},
kC:function(a){if(a==null)return!0
return this.z.b(a)},
kL:function(a){var s,r=this
if(a==null)return H.hH(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.aX(a)[s]},
kz:function(a){var s,r=this
if(a==null){s=H.d4(r)
if(s)return a}else if(r.b(a))return a
H.iC(a,r)},
kB:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.iC(a,s)},
iC:function(a,b){throw H.f(H.iw(H.ip(a,H.iV(a,b),H.ab(b,null))))},
fX:function(a,b,c,d){var s=null
if(H.M(v.typeUniverse,a,s,b,s))return a
throw H.f(H.iw("The type argument '"+H.ab(a,s)+"' is not a subtype of the type variable bound '"+H.ab(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
ip:function(a,b,c){var s=P.dh(a),r=H.ab(b==null?H.d2(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
iw:function(a){return new H.cT("TypeError: "+a)},
aa:function(a,b){return new H.cT("TypeError: "+H.ip(a,null,b))},
kJ:function(a){return a!=null},
kv:function(a){if(a!=null)return a
throw H.f(H.aa(a,"Object"))},
kM:function(a){return!0},
kx:function(a){return a},
iE:function(a){return!0===a||!1===a},
lY:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.f(H.aa(a,"bool"))},
m_:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.aa(a,"bool"))},
lZ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.aa(a,"bool?"))},
a4:function(a){if(typeof a=="number")return a
throw H.f(H.aa(a,"double"))},
m0:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.aa(a,"double"))},
fO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.aa(a,"double?"))},
iG:function(a){return typeof a=="number"&&Math.floor(a)===a},
V:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.f(H.aa(a,"int"))},
m2:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.aa(a,"int"))},
m1:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.aa(a,"int?"))},
kI:function(a){return typeof a=="number"},
fP:function(a){if(typeof a=="number")return a
throw H.f(H.aa(a,"num"))},
m4:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.aa(a,"num"))},
m3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.aa(a,"num?"))},
kK:function(a){return typeof a=="string"},
bI:function(a){if(typeof a=="string")return a
throw H.f(H.aa(a,"String"))},
m5:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.aa(a,"String"))},
kw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.aa(a,"String?"))},
kR:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ab(a[q],b)
return s},
iD:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.B(a5,"T"+(q+p))
for(o=t.Y,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.k(a5,j)
m=C.M.A(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ab(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ab(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ab(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ab(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ab(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ab:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ab(a.z,b)
return s}if(l===7){r=a.z
s=H.ab(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ab(a.z,b)+">"
if(l===9){p=H.kW(a.z)
o=a.Q
return o.length!==0?p+("<"+H.kR(o,b)+">"):p}if(l===11)return H.iD(a,b,null)
if(l===12)return H.iD(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.k(b,n)
return b[n]}return"?"},
kW:function(a){var s,r=H.j5(a)
if(r!=null)return r
s="minified:"+a
return s},
iA:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ku:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.fN(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cV(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cU(a,b,q)
n[b]=o
return o}else return m},
ks:function(a,b){return H.iB(a.tR,b)},
kr:function(a,b){return H.iB(a.eT,b)},
fN:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.iv(H.it(a,null,b,c))
r.set(b,s)
return s},
dX:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.iv(H.it(a,b,c,!0))
q.set(c,r)
return r},
kt:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.hA(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b8:function(a,b){b.a=H.kD
b.b=H.kE
return b},
cV:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.av(null,null)
s.y=b
s.cy=c
r=H.b8(a,s)
a.eC.set(c,r)
return r},
iz:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.kp(a,b,r,c)
a.eC.set(r,s)
return s},
kp:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.av(null,null)
q.y=6
q.z=b
q.cy=c
return H.b8(a,q)},
hC:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.ko(a,b,r,c)
a.eC.set(r,s)
return s},
ko:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aZ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.d4(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.cF)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.d4(q.z))return q
else return H.ie(a,b)}}p=new H.av(null,null)
p.y=7
p.z=b
p.cy=c
return H.b8(a,p)},
iy:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.km(a,b,r,c)
a.eC.set(r,s)
return s},
km:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cU(a,"aq",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.av(null,null)
q.y=8
q.z=b
q.cy=c
return H.b8(a,q)},
kq:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.av(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b8(a,s)
a.eC.set(q,r)
return r},
dW:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
kl:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cU:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.dW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.av(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b8(a,r)
a.eC.set(p,q)
return q},
hA:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.dW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b8(a,o)
a.eC.set(q,n)
return n},
ix:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.dW(m)
if(j>0){s=l>0?",":""
r=H.dW(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.kl(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b8(a,o)
a.eC.set(q,r)
return r},
hB:function(a,b,c,d){var s,r=b.cy+("<"+H.dW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.kn(a,b,c,r,d)
a.eC.set(r,s)
return s},
kn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aW(a,b,r,0)
m=H.d1(a,c,r,0)
return H.hB(a,n,m,c!==m)}}l=new H.av(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b8(a,l)},
it:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
iv:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.kg(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.iu(a,r,h,g,!1)
else if(q===46)r=H.iu(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b7(a.u,a.e,g.pop()))
break
case 94:g.push(H.kq(a.u,g.pop()))
break
case 35:g.push(H.cV(a.u,5,"#"))
break
case 64:g.push(H.cV(a.u,2,"@"))
break
case 126:g.push(H.cV(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.hz(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cU(p,n,o))
else{m=H.b7(p,a.e,n)
switch(m.y){case 11:g.push(H.hB(p,m,o,a.n))
break
default:g.push(H.hA(p,m,o))
break}}break
case 38:H.kh(a,g)
break
case 42:p=a.u
g.push(H.iz(p,H.b7(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.hC(p,H.b7(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.iy(p,H.b7(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.dP()
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
H.hz(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.ix(p,H.b7(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.hz(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.kj(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b7(a.u,a.e,i)},
kg:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
iu:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.iA(s,o.z)[p]
if(n==null)H.c('No "'+p+'" in "'+H.jZ(o)+'"')
d.push(H.dX(s,o,n))}else d.push(p)
return m},
kh:function(a,b){var s=b.pop()
if(0===s){b.push(H.cV(a.u,1,"0&"))
return}if(1===s){b.push(H.cV(a.u,4,"1&"))
return}throw H.f(P.ej("Unexpected extended operation "+H.v(s)))},
b7:function(a,b,c){if(typeof c=="string")return H.cU(a,c,a.sEA)
else if(typeof c=="number")return H.ki(a,b,c)
else return c},
hz:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b7(a,b,c[s])},
kj:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b7(a,b,c[s])},
ki:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.f(P.ej("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.f(P.ej("Bad index "+c+" for "+b.l(0)))},
M:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aZ(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aZ(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.M(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.M(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.M(a,b.z,c,d,e)
if(r===6)return H.M(a,b.z,c,d,e)
return r!==7}if(r===6)return H.M(a,b.z,c,d,e)
if(p===6){s=H.ie(a,d)
return H.M(a,b,c,s,e)}if(r===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.id(a,b),c,d,e)}if(r===7){s=H.M(a,t.P,c,d,e)
return s&&H.M(a,b.z,c,d,e)}if(p===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.id(a,d),e)}if(p===7){s=H.M(a,b,c,t.P,e)
return s||H.M(a,b,c,d.z,e)}if(q)return!1
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
if(!H.M(a,k,c,j,e)||!H.M(a,j,e,k,c))return!1}return H.iF(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return H.iF(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.kH(a,b,c,d,e)}return!1},
iF:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.M(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.M(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
kH:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.M(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.iA(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.M(a,H.dX(a,b,l[p]),c,r[p],e))return!1
return!0},
d4:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aZ(a))if(r!==7)if(!(r===6&&H.d4(a.z)))s=r===8&&H.d4(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
lf:function(a){var s
if(!H.aZ(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aZ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Y},
iB:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
dP:function dP(){this.c=this.b=this.a=null},
dV:function dV(a){this.a=a},
dO:function dO(){},
cT:function cT(a){this.a=a},
j5:function(a){return v.mangledGlobalNames[a]}},J={
hQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hM:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hN==null){H.lb()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.f(P.il("Return interceptor for "+H.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fG
if(o==null)o=$.fG=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.lg(a)
if(p!=null)return p
if(typeof a=="function")return C.a3
s=Object.getPrototypeOf(a)
if(s==null)return C.O
if(s===Object.prototype)return C.O
if(typeof q=="function"){o=$.fG
if(o==null)o=$.fG=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.F,enumerable:false,writable:true,configurable:true})
return C.F}return C.F},
i4:function(a,b){if(a<0||a>4294967295)throw H.f(P.aP(a,0,4294967295,"length",null))
return J.i6(new Array(a),b)},
i5:function(a,b){if(a<0)throw H.f(P.hV("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("w<0>"))},
i6:function(a,b){return J.eJ(H.a(a,b.h("w<0>")),b)},
eJ:function(a,b){a.fixed$length=Array
return a},
jL:function(a,b){var s=t.e8
return J.jo(s.a(a),s.a(b))},
aX:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bv.prototype
return J.cd.prototype}if(typeof a=="string")return J.aL.prototype
if(a==null)return J.bw.prototype
if(typeof a=="boolean")return J.dn.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.C)return a
return J.hM(a)},
ag:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
l6:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
Z:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(!(a instanceof P.C))return J.ax.prototype
return a},
ac:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.C)return a
return J.hM(a)},
l7:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bv.prototype
return J.cd.prototype}if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
iQ:function(a){if(typeof a=="number")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
iR:function(a){if(typeof a=="number")return J.b0.prototype
if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.ax.prototype
return a},
iS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.C)return a
return J.hM(a)},
d5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l6(a).A(a,b)},
ah:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aX(a).J(a,b)},
aD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.iR(a).t(a,b)},
jk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.iQ(a).u(a,b)},
N:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).i(a,b)},
e2:function(a,b,c){return J.ag(a).q(a,b,c)},
jl:function(a,b,c,d){return J.iS(a).fS(a,b,c,d)},
jm:function(a,b,c,d){return J.iS(a).h2(a,b,c,d)},
jn:function(a,b){return J.ag(a).B(a,b)},
aH:function(a,b){return J.ag(a).G(a,b)},
jo:function(a,b){return J.iR(a).e9(a,b)},
hT:function(a,b){return J.ag(a).V(a,b)},
ai:function(a){return J.ag(a).gN(a)},
bS:function(a){return J.aX(a).gv(a)},
bd:function(a){return J.Z(a).gX(a)},
d6:function(a){return J.ag(a).gaR(a)},
x:function(a){return J.ag(a).gC(a)},
be:function(a){return J.ag(a).gM(a)},
z:function(a){return J.ac(a).gn(a)},
jp:function(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.l7(a).gdr(a)},
hU:function(a,b,c){return J.ag(a).c0(a,b,c)},
p:function(a,b,c){return J.ag(a).cL(a,b,c)},
e3:function(a,b){return J.ag(a).ae(a,b)},
jq:function(a){return J.iQ(a).a4(a)},
e4:function(a){return J.ag(a).R(a)},
d7:function(a){return J.aX(a).l(a)},
ar:function ar(){},
dn:function dn(){},
bw:function bw(){},
bj:function bj(){},
du:function du(){},
ax:function ax(){},
b1:function b1(){},
w:function w(a){this.$ti=a},
eK:function eK(a){this.$ti=a},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b0:function b0(){},
bv:function bv(){},
cd:function cd(){},
aL:function aL(){}},P={
kb:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.l_()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bN(new P.fn(q),1)).observe(s,{childList:true})
return new P.fm(q,s,r)}else if(self.setImmediate!=null)return P.l0()
return P.l1()},
kc:function(a){self.scheduleImmediate(H.bN(new P.fo(t.M.a(a)),0))},
kd:function(a){self.setImmediate(H.bN(new P.fp(t.M.a(a)),0))},
ke:function(a){t.M.a(a)
P.kk(0,a)},
kk:function(a,b){var s=new P.fL()
s.fG(a,b)
return s},
aB:function(a){return new P.dK(new P.U($.K,a.h("U<0>")),a.h("dK<0>"))},
aA:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
W:function(a,b){P.ky(a,b)},
az:function(a,b){b.cs(0,a)},
ay:function(a,b){b.ea(H.bc(a),H.ba(a))},
ky:function(a,b){var s,r,q=new P.fQ(b),p=new P.fR(b)
if(a instanceof P.U)a.dW(q,p,t.z)
else{s=t.z
if(t.v.b(a))a.cX(q,p,s)
else{r=new P.U($.K,t.c)
r.a=4
r.c=a
r.dW(q,p,s)}}},
aC:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.K.eI(new P.fU(s),t.aT,t.S,t.z)},
kf:function(a){return new P.bG(a,1)},
iq:function(){return C.af},
ir:function(a){return new P.bG(a,3)},
iH:function(a,b){return new P.cS(a,b.h("cS<0>"))},
ek:function(a,b){var s=H.hJ(a,"error",t.K)
return new P.bZ(s,b==null?P.jt(a):b)},
jt:function(a){var s
if(t.bU.b(a)){s=a.gc8()
if(s!=null)return s}return C.Z},
fw:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.bq()
b.a=a.a
b.c=a.c
P.bF(b,q)}else{q=t.d.a(b.c)
b.a=2
b.c=a
a.dT(q)}},
bF:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.u,r=t.d,q=t.v;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.fS(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.bF(b.a,a)
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
P.fS(c,c,k.b,j.a,j.b)
return}f=$.K
if(f!==g)$.K=g
else f=c
a=a.c
if((a&15)===8)new P.fE(p,b,o).$0()
else if(i){if((a&1)!==0)new P.fD(p,j).$0()}else if((a&2)!==0)new P.fC(b,p).$0()
if(f!=null)$.K=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("aq<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.br(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.fw(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.br(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
kP:function(a,b){var s
if(t.ag.b(a))return b.eI(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.f(P.js(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
kO:function(){var s,r
for(s=$.bJ;s!=null;s=$.bJ){$.d0=null
r=s.b
$.bJ=r
if(r==null)$.d_=null
s.a.$0()}},
kT:function(){$.hF=!0
try{P.kO()}finally{$.d0=null
$.hF=!1
if($.bJ!=null)$.hR().$1(P.iN())}},
iK:function(a){var s=new P.dL(a),r=$.d_
if(r==null){$.bJ=$.d_=s
if(!$.hF)$.hR().$1(P.iN())}else $.d_=r.b=s},
kS:function(a){var s,r,q,p=$.bJ
if(p==null){P.iK(a)
$.d0=$.d_
return}s=new P.dL(a)
r=$.d0
if(r==null){s.b=p
$.bJ=$.d0=s}else{q=r.b
s.b=q
$.d0=r.b=s
if(q==null)$.d_=s}},
lo:function(a){var s=null,r=$.K
if(C.i===r){P.bK(s,s,C.i,a)
return}P.bK(s,s,r,t.M.a(r.e6(a)))},
lK:function(a,b){H.hJ(a,"stream",t.K)
return new P.dT(b.h("dT<0>"))},
fS:function(a,b,c,d,e){P.kS(new P.fT(d,e))},
iI:function(a,b,c,d,e){var s,r=$.K
if(r===c)return d.$0()
$.K=c
s=r
try{r=d.$0()
return r}finally{$.K=s}},
iJ:function(a,b,c,d,e,f,g){var s,r=$.K
if(r===c)return d.$1(e)
$.K=c
s=r
try{r=d.$1(e)
return r}finally{$.K=s}},
kQ:function(a,b,c,d,e,f,g,h,i){var s,r=$.K
if(r===c)return d.$2(e,f)
$.K=c
s=r
try{r=d.$2(e,f)
return r}finally{$.K=s}},
bK:function(a,b,c,d){t.M.a(d)
if(C.i!==c)d=c.e6(d)
P.iK(d)},
fn:function fn(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
fL:function fL(){},
fM:function fM(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=!1
this.$ti=b},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
fU:function fU(a){this.a=a},
bG:function bG(a,b){this.a=a
this.b=b},
bH:function bH(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
cS:function cS(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
dM:function dM(){},
cR:function cR(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
U:function U(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ft:function ft(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
dL:function dL(a){this.a=a
this.b=null},
cz:function cz(){},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
cA:function cA(){},
dT:function dT(a){this.$ti=a},
cW:function cW(){},
fT:function fT(a,b){this.a=a
this.b=b},
dS:function dS(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function(a,b){return new H.ce(a.h("@<0>").E(b).h("ce<1,2>"))},
jN:function(a){return new P.aV(a.h("aV<0>"))},
jO:function(a){return new P.aV(a.h("aV<0>"))},
hy:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hx:function(a,b,c){var s=new P.bn(a,b,c.h("bn<0>"))
s.c=a.e
return s},
jI:function(a,b,c){var s,r
if(P.hG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.B($.al,a)
try{P.kN(a,s)}finally{if(0>=$.al.length)return H.k($.al,-1)
$.al.pop()}r=P.ii(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
hp:function(a,b,c){var s,r
if(P.hG(a))return b+"..."+c
s=new P.dC(b)
C.a.B($.al,a)
try{r=s
r.a=P.ii(r.a,a,", ")}finally{if(0>=$.al.length)return H.k($.al,-1)
$.al.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hG:function(a){var s,r
for(s=$.al.length,r=0;r<s;++r)if(a===$.al[r])return!0
return!1},
kN:function(a,b){var s,r,q,p,o,n,m,l=a.gC(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.k())return
s=H.v(l.gm())
C.a.B(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return H.k(b,-1)
r=b.pop()
if(0>=b.length)return H.k(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){C.a.B(b,H.v(p))
return}r=H.v(p)
if(0>=b.length)return H.k(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.k(b,-1)
k-=b.pop().length+2;--j}C.a.B(b,"...")
return}}q=H.v(p)
r=H.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.B(b,m)
C.a.B(b,q)
C.a.B(b,r)},
ht:function(a,b){var s,r,q=P.jN(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.d)(a),++r)q.B(0,b.a(a[r]))
return q},
ib:function(a){var s,r={}
if(P.hG(a))return"{...}"
s=new P.dC("")
try{C.a.B($.al,a)
s.a+="{"
r.a=!0
a.ew(0,new P.eM(r,s))
s.a+="}"}finally{if(0>=$.al.length)return H.k($.al,-1)
$.al.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dQ:function dQ(a){this.a=a
this.c=this.b=null},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cc:function cc(){},
a8:function a8(){},
cj:function cj(){},
eM:function eM(a,b){this.a=a
this.b=b},
by:function by(){},
cw:function cw(){},
cP:function cP(){},
cY:function cY(){},
jG:function(a){if(a instanceof H.an)return a.l(0)
return"Instance of '"+H.eZ(a)+"'"},
ia:function(a,b,c,d){var s,r=c?J.i5(a,d):J.i4(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dr:function(a,b,c){var s,r=H.a([],c.h("w<0>"))
for(s=J.x(a);s.k();)C.a.B(r,c.a(s.gm()))
if(b)return r
return J.eJ(r,c)},
h:function(a,b,c){var s
if(b)return P.i9(a,c)
s=J.eJ(P.i9(a,c),c)
return s},
i9:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("w<0>"))
s=H.a([],b.h("w<0>"))
for(r=J.x(a);r.k();)C.a.B(s,r.gm())
return s},
ic:function(a){return new H.dp(a,H.jM(a,!1,!0,!1,!1,!1))},
ii:function(a,b,c){var s=J.x(b)
if(!s.k())return a
if(c.length===0){do a+=H.v(s.gm())
while(s.k())}else{a+=H.v(s.gm())
for(;s.k();)a=a+c+H.v(s.gm())}return a},
dh:function(a){if(typeof a=="number"||H.iE(a)||null==a)return J.d7(a)
if(typeof a=="string")return JSON.stringify(a)
return P.jG(a)},
ej:function(a){return new P.bY(a)},
hV:function(a){return new P.aI(!1,null,null,a)},
js:function(a,b,c){return new P.aI(!0,a,b,c)},
f_:function(a,b){return new P.cr(null,null,!0,a,b,"Value not in range")},
aP:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
jW:function(a,b,c,d){if(a<b||a>c)throw H.f(P.aP(a,b,c,d,null))
return a},
cs:function(a,b,c){if(0>a||a>c)throw H.f(P.aP(a,0,c,"start",null))
if(a>b||b>c)throw H.f(P.aP(b,a,c,"end",null))
return b},
au:function(a,b){if(a<0)throw H.f(P.aP(a,0,null,b,null))
return a},
ho:function(a,b,c,d,e){var s=H.V(e==null?J.z(b):e)
return new P.dk(s,!0,a,c,"Index out of range")},
af:function(a){return new P.dI(a)},
il:function(a){return new P.dG(a)},
a9:function(a){return new P.bA(a)},
ao:function(a){return new P.de(a)},
I:function I(){},
bY:function bY(a){this.a=a},
dF:function dF(){},
dt:function dt(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dk:function dk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dI:function dI(a){this.a=a},
dG:function dG(a){this.a=a},
bA:function bA(a){this.a=a},
de:function de(a){this.a=a},
cy:function cy(){},
dg:function dg(a){this.a=a},
fs:function fs(a){this.a=a},
ey:function ey(a,b){this.a=a
this.b=b},
o:function o(){},
J:function J(){},
Q:function Q(){},
C:function C(){},
dU:function dU(){},
dC:function dC(a){this.a=a},
iZ:function(a,b,c){H.fX(c,t.p,"T","min")
return Math.min(c.a(a),c.a(b))},
iY:function(a,b,c){H.fX(c,t.p,"T","max")
return Math.max(c.a(a),c.a(b))},
dR:function dR(){this.b=this.a=0},
bl:function bl(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
fH:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
is:function(a,b,c,d){var s=W.fH(W.fH(W.fH(W.fH(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
fq:function(a,b,c,d,e){var s=W.iL(new W.fr(c),t.aD),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.jl(a,b,s,!1)}return new W.cN(a,b,s,!1,e.h("cN<0>"))},
iL:function(a,b){var s=$.K
if(s===C.i)return a
return s.hh(a,b)},
n:function n(){},
d9:function d9(){},
db:function db(){},
bg:function bg(){},
c1:function c1(){},
aE:function aE(){},
et:function et(){},
c4:function c4(){},
l:function l(){},
m:function m(){},
a6:function a6(){},
dj:function dj(){},
aj:function aj(){},
ae:function ae(){},
dx:function dx(){},
aw:function aw(){},
bE:function bE(){},
fl:function fl(a){this.a=a},
cK:function cK(){},
hn:function hn(a,b){this.a=a
this.$ti=b},
cM:function cM(){},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cN:function cN(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fr:function fr(a){this.a=a}},A={O:function O(a,b){this.a=a
this.$ti=b},eI:function eI(a){this.a=a},cO:function cO(a,b){this.a=a
this.b=null
this.$ti=b},
i3:function(a,b){return A.jK(a,b,b)},
jK:function(a,b,c){return P.iH(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$i3(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.kf(s[m])
case 5:case 3:s.length===n||(0,H.d)(s),++m
q=2
break
case 4:return P.iq()
case 1:return P.ir(o)}}},c)},
b9:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hD:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},X={a2:function a2(){},ap:function ap(a){this.b=a},ad:function ad(){},
iO:function(a,b,c){var s,r
if(c){if(!$.dY.eb(a)){s=t.S
$.dY.q(0,a,P.hs(s,s))}if(!$.dY.i(0,a).eb(b)){s=$.dY.i(0,a)
s.toString
s.q(0,b,X.iO(a,b,!1))}s=$.dY.i(0,a).i(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.bJ(T.r(b+1,1,1),1,new X.fY(),s)
return C.e.av(C.a.bJ(T.r(a-b,a,-1),1,new X.fZ(),s),r)},
e0:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fY:function fY(){},
fZ:function fZ(){}},G={da:function da(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.r=e
_.x=null},
k5:function(a,b,c,d,e){var s=new G.cE(d,c,b,a)
s.ad()
s.dB(a,b,c,d,e)
return s},
cE:function cE(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},M={dz:function dz(){},dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
hu:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b4.aj,b0=b4.bH,b1=P.h(b4.er,!0,t.V),b2=b4.hx,b3=b4.cD
if(b3!=null){s=H.A(b3)
s=P.h(new H.L(b3,s.h("X(1)").a(new M.eV()),s.h("L<1,X>")),!0,t.F)
b3=s}else b3=a8
s=b4.cE
if(s!=null){r=H.A(s)
r=P.h(new H.L(s,r.h("X(1)").a(new M.eW()),r.h("L<1,X>")),!0,t.F)
s=r}else s=a8
r=b4.W
q=b4.a_
N.aG(a8,0,C.b,a8,0)
p=b4.r1
o=b4.r2
n=N.bC(b4.rx)
m=b4.ry
m=m==null?a8:N.am(m)
l=b4.x1
l=l==null?a8:N.am(l)
k=b4.dy
k=k==null?a8:J.p(k,new V.R(),t.G)
if(k==null)k=H.a([],t.O)
j=t.G
k=P.h(k,!0,j)
i=b4.fr
i=i==null?a8:J.p(i,new V.S(),j)
i=P.h(i==null?H.a([],t.O):i,!0,j)
h=b4.fx
h=h==null?a8:J.p(h,new V.T(),j)
j=P.h(h==null?H.a([],t.O):h,!0,j)
h=b4.x
g=b4.y
f=b4.z
e=b4.Q
d=e.a
c=e.b
e=e.c
b=b4.cy
a=b4.gF(b4).j()
a0=b4.gH(b4)
a1=b4.c
if(a1===$)a1=H.c(H.e("target"))
a1=a1==null?a8:a1.j()
a2=H.a([],t.r)
for(a3=b4.gw(),a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,H.d)(a3),++a5)a2.push(a3[a5].j())
a3=b4.gI()
a4=H.a([],t.l)
for(a6=J.x(b4.gp(b4));a6.k();){a7=a6.gm()
a4.push(new Y.b(a7.a,a7.b,a7.c))}return new M.bz(b4.b9,a9,b4.hs,b4.ht,b4.ep,b4.eq,b0,b1,!1,b4.hu,b4.es,b4.hv,b4.hw,new Y.b(b2.a,b2.b,b2.c),b4.hy,b4.eu,b4.hz,b4.hA,b4.hB,b4.hC,b3,s,b4.aa,b4.ai,r,q,p,new Y.b(o.a,o.b,o.c),n,m,l,h,g,f,new Y.b(d,c,e),b4.ch,b4.cx,b,b4.db,b4.dx,k,i,j,a,a0,a1,a2,a3,a4)},
hW:function(a,b,c,d,e,f,g,h){var s=null,r=new M.bf(b,a,c,f,e,d,h,g,4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.P(C.b,s,s)
r.Z(s,0,!1,s,!1,0.01,C.f,0,s,4,0.000001)
r.cd(s)
r.dw(a,b,c,d,e,f,g,h)
return r},
hX:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a5.bA,a1=M.c_(a5.bB),a2=M.c_(a5.bC),a3=M.c_(a5.bD),a4=a5.dy
a4=a4==null?a:J.p(a4,new V.R(),t.G)
if(a4==null)a4=H.a([],t.O)
s=t.G
a4=P.h(a4,!0,s)
r=a5.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a5.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a5.x
p=a5.y
o=a5.z
n=a5.Q
m=n.a
l=n.b
n=n.c
k=a5.cy
j=a5.gF(a5).j()
i=a5.gH(a5)
h=a5.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a5.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a5.gI()
e=H.a([],t.l)
for(c=J.x(a5.gp(a5));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}a0=new M.bf(new Y.b(a0.a,a0.b,a0.c),a1,a2,a3,a5.by,a5.bz,a5.cB,a5.cC,q,p,o,new Y.b(m,l,n),a5.ch,a5.cx,k,a5.db,a5.dx,a4,r,s,j,i,h,g,f,e)
a0.dz(a5)
return a0},
jS:function(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=C.t.as(C.A),a8=C.j.as(C.j),a9=C.H.as(C.z),b0=t.L,b1=H.a([],b0)
for(s=b2.ge3(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)b1.push(s[q].j())
b0=H.a([],b0)
for(s=b2.gej(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)b0.push(s[q].j())
s=b2.bx
s=s==null?a6:V.im(s)
r=V.im(b2.cA)
p=b2.bA
o=M.c_(b2.bB)
n=M.c_(b2.bC)
m=M.c_(b2.bD)
l=b2.dy
l=l==null?a6:J.p(l,new V.R(),t.G)
if(l==null)l=H.a([],t.O)
k=t.G
l=P.h(l,!0,k)
j=b2.fr
j=j==null?a6:J.p(j,new V.S(),k)
j=P.h(j==null?H.a([],t.O):j,!0,k)
i=b2.fx
i=i==null?a6:J.p(i,new V.T(),k)
k=P.h(i==null?H.a([],t.O):i,!0,k)
i=b2.x
h=b2.y
g=b2.z
f=b2.Q
e=f.a
d=f.b
f=f.c
c=b2.cy
b=b2.gF(b2).j()
a=b2.gH(b2)
a0=b2.c
if(a0===$)a0=H.c(H.e("target"))
a0=a0==null?a6:a0.j()
a1=H.a([],t.r)
for(a2=b2.gw(),a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,H.d)(a2),++q)a1.push(a2[q].j())
a2=b2.gI()
a3=H.a([],t.l)
for(a4=J.x(b2.gp(b2));a4.k();){a5=a4.gm()
a3.push(new Y.b(a5.a,a5.b,a5.c))}a7=new M.co(a7,a8,a9,r,s,b2.ek,b2.el,b2.em,b1,b0,new Y.b(p.a,p.b,p.c),o,n,m,b2.by,b2.bz,b2.cB,b2.cC,i,h,g,new Y.b(e,d,f),b2.ch,b2.cx,c,b2.db,b2.dx,l,j,k,b,a,a0,a1,a2,a3)
a7.dz(b2)
return a7},
bp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new M.a_(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
c_:function(a){return new M.a_(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
bz:function bz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9){var _=this
_.b9=a
_.aj=b
_.hs=c
_.ht=d
_.ep=e
_.eq=f
_.bH=g
_.er=h
_.i9=i
_.hu=j
_.es=k
_.hv=l
_.hw=m
_.hx=n
_.hy=o
_.eu=p
_.hz=q
_.hA=r
_.hB=s
_.hC=a0
_.cD=a1
_.cE=a2
_.aa=a3
_.ai=a4
_.W=a5
_.a_=a6
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
eV:function eV(){},
eW:function eW(){},
df:function df(){},
es:function es(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.bA=a
_.bB=b
_.bC=c
_.bD=d
_.bG=_.bF=_.bE=null
_.by=e
_.bz=f
_.cB=g
_.cC=h
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
el:function el(){},
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var _=this
_.hn=a
_.ho=b
_.hp=c
_.cA=d
_.bx=e
_.ek=f
_.el=g
_.em=h
_.en=i
_.eo=j
_.bA=k
_.bB=l
_.bC=m
_.bD=n
_.bG=_.bF=_.bE=null
_.by=o
_.bz=p
_.cB=q
_.cC=r
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
a_:function a_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
k3:function(a){var s,r,q,p,o,n,m=a.x,l=a.y,k=a.gF(a).j(),j=a.gH(a),i=a.c
if(i===$)i=H.c(H.e("target"))
i=i==null?null:i.j()
s=H.a([],t.r)
for(r=a.gw(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].j())
r=a.gI()
q=H.a([],t.l)
for(o=J.x(a.gp(a));o.k();){n=o.gm()
q.push(new Y.b(n.a,n.b,n.c))}return new M.b3(m,l,a.z,k,j,i,s,r,q)},
b3:function b3(a,b,c,d,e,f,g,h,i){var _=this
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
jR:function(a){var s,r,q,p,o,n,m=a.gF(a).j(),l=a.gH(a),k=a.c
if(k===$)k=H.c(H.e("target"))
k=k==null?null:k.j()
s=H.a([],t.r)
for(r=a.gw(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].j())
r=a.gI()
q=H.a([],t.l)
for(o=J.x(a.gp(a));o.k();){n=o.gm()
q.push(new Y.b(n.a,n.b,n.c))}return new M.q(m,l,k,s,r,q)},
jH:function(a){var s,r,q,p,o,n,m=a.gF(a).j(),l=a.gH(a),k=a.c
if(k===$)k=H.c(H.e("target"))
k=k==null?null:k.j()
s=H.a([],t.r)
for(r=a.gw(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].j())
r=a.gI()
q=H.a([],t.l)
for(o=J.x(a.gp(a));o.k();){n=o.gm()
q.push(new Y.b(n.a,n.b,n.c))}return new M.bu(m,l,k,s,r,q)},
q:function q(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
eS:function eS(a){this.a=a},
eR:function eR(a){this.a=a},
eQ:function eQ(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
eO:function eO(){},
eN:function eN(){},
eP:function eP(a){this.a=a},
bu:function bu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
ex:function ex(){this.a=null},
iW:function(a,b,c){H.a4(a)
H.fO(b)
H.fO(c)
return a},
j4:function(a,b,c){var s
H.a4(a)
H.fO(b)
H.fO(c)
if(b==null)b=10
s=1/(1+Math.exp(-(-b/2)))
return Math.min(1,Math.max((1/(1+Math.exp(-(b*(a-0.5))))-s)/(1-2*s),0))}},E={
bt:function(a){var s=new E.di(1,M.e1(),0,a)
s.ad()
s.dB(a,0,M.e1(),1,null)
return s},
di:function di(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
cG:function cG(a,b,c,d,e,f){var _=this
_.y=a
_.a=b
_.b=c
_.c=d
_.r=e
_.x=null
_.$ti=f}},R={en:function en(a,b){this.c=a
this.d=8
this.r=b},eo:function eo(){},ep:function ep(){},
jF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.dx
if(f==null)f=H.c(H.e("draggedListener"))
s=a.dy
if(s==null)s=H.c(H.e("pressedListener"))
r=a.fr
if(r==null)r=H.c(H.e("releasedListener"))
q=a.fx
p=N.i2(a.x)
o=a.gF(a).j()
n=a.gH(a)
m=a.c
if(m===$)m=H.c(H.e("target"))
m=m==null?null:m.j()
l=H.a([],t.r)
for(k=a.gw(),j=k.length,i=0;i<k.length;k.length===j||(0,H.d)(k),++i)l.push(k[i].j())
k=a.gI()
j=H.a([],t.l)
for(h=J.x(a.gp(a));h.k();){g=h.gm()
j.push(new Y.b(g.a,g.b,g.c))}return new R.c6(f,s,r,q,p,o,n,m,l,k,j)},
dm:function dm(){},
c6:function c6(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
eu:function eu(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a}},K={bT:function bT(){},d8:function d8(){},e5:function e5(a){this.a=a},e6:function e6(a){this.a=a},e7:function e7(a){this.a=a},y:function y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},B={dc:function dc(a,b,c,d,e,f,g,h){var _=this
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
lp:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=V.d3(Z.e8(a),Z.e8(b),c,t.A)
m=H.a([],t.l)
for(r=s.gL(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
n=J.Z(o)
m.push(new Y.b(n.i(o,0),n.i(o,1),n.i(o,2)))}return m}},Y={
hv:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=P.h(a2.x1,!0,t.V),a1=a2.dy
a1=a1==null?a:J.p(a1,new V.R(),t.G)
if(a1==null)a1=H.a([],t.O)
s=t.G
a1=P.h(a1,!0,s)
r=a2.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a2.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a2.x
p=a2.y
o=a2.z
n=a2.Q
m=n.a
l=n.b
n=n.c
k=a2.cy
j=a2.gF(a2).j()
i=a2.gH(a2)
h=a2.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a2.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a2.gI()
e=H.a([],t.l)
for(c=J.x(a2.gp(a2));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new Y.cp(a2.r1,a2.r2,a2.rx,a2.ry,a0,a2.x2,q,p,o,new Y.b(m,l,n),a2.ch,a2.cx,k,a2.db,a2.dx,a1,r,s,j,i,h,g,f,e)},
cp:function cp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
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
_.b=a0
_.c=a1
_.d=a2
_.e=null
_.f=a3
_.r=a4},
eX:function eX(a){this.a=a},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a){this.a=a},
fk:function fk(){},
fi:function fi(){}},N={
aG:function(a,b,c,d,e){var s=t.O,r=a!=null?H.a([a],s):H.a([],s),q=H.a([c],s)
return new N.cC(q,d!=null?H.a([d],s):H.a([],s),e,r,b,0,C.c)},
bC:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.x(o);o.k();){r=o.gm()
s.push(new K.y(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.x(s);s.k();){q=s.gm()
r.push(new K.y(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.x(r);r.k();){p=r.gm()
q.push(new K.y(p.a,p.b,p.c,p.d))}r=q}else r=null
return new N.cC(o,s,a.c,r,a.e,a.f,a.r)},
k4:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.aG(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bC(a6.rx)
p=a6.ry
p=p==null?a5:N.am(p)
o=a6.x1
o=o==null?a5:N.am(o)
n=a6.dy
n=n==null?a5:J.p(n,new V.R(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.h(n,!0,m)
l=a6.fr
l=l==null?a5:J.p(l,new V.S(),m)
l=P.h(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.p(k,new V.T(),m)
m=P.h(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gF(a6).j()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a6.gw(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].j())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.x(a6.gp(a6));a3.k();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.cD(s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
jr:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.aG(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bC(a6.rx)
p=a6.ry
p=p==null?a5:N.am(p)
o=a6.x1
o=o==null?a5:N.am(o)
n=a6.dy
n=n==null?a5:J.p(n,new V.R(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.h(n,!0,m)
l=a6.fr
l=l==null?a5:J.p(l,new V.S(),m)
l=P.h(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.p(k,new V.T(),m)
m=P.h(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gF(a6).j()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a6.gw(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].j())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.x(a6.gp(a6));a3.k();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.bV(a6.aa,a6.ai,a6.W,a6.a_,a6.aP,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
jx:function(a,b,c,d,e,f,g){var s=null,r=N.aG(s,0,C.b,s,0),q=d==null?C.h:d,p=f==null?C.b:f
r=new N.br(0,6.283185307179586,e,a,9,0.35,C.k,r,s,s,g,c,0,C.f,!0,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.P(C.b,s,s)
r.Z(b,c,!0,q,!1,0.01,C.f,0,p,g,0.000001)
r.Y(C.b)
return r},
jy:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.aG(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bC(a6.rx)
p=a6.ry
p=p==null?a5:N.am(p)
o=a6.x1
o=o==null?a5:N.am(o)
n=a6.dy
n=n==null?a5:J.p(n,new V.R(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.h(n,!0,m)
l=a6.fr
l=l==null?a5:J.p(l,new V.S(),m)
l=P.h(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.p(k,new V.T(),m)
m=P.h(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gF(a6).j()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a6.gw(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].j())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.x(a6.gp(a6));a3.k();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.br(a6.aa,a6.ai,a6.W,a6.a_,a6.aP,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
i1:function(a){var s=null,r=N.aG(s,0,C.b,s,0)
r=new N.c5(0,6.283185307179586,0.08,a,9,0.35,C.k,r,s,s,0,0,0,C.f,!0,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.P(C.b,s,s)
r.Z(C.v,0,!0,C.b,!1,0.01,C.f,0,C.b,0,0.000001)
r.Y(C.b)
return r},
i2:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
N.aG(a5,0,C.b,a5,0)
s=a6.r1
r=a6.r2
q=N.bC(a6.rx)
p=a6.ry
p=p==null?a5:N.am(p)
o=a6.x1
o=o==null?a5:N.am(o)
n=a6.dy
n=n==null?a5:J.p(n,new V.R(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.h(n,!0,m)
l=a6.fr
l=l==null?a5:J.p(l,new V.S(),m)
l=P.h(l==null?H.a([],t.O):l,!0,m)
k=a6.fx
k=k==null?a5:J.p(k,new V.T(),m)
m=P.h(k==null?H.a([],t.O):k,!0,m)
k=a6.x
j=a6.y
i=a6.z
h=a6.Q
g=h.a
f=h.b
h=h.c
e=a6.cy
d=a6.gF(a6).j()
c=a6.gH(a6)
b=a6.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a6.gw(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].j())
a0=a6.gI()
a1=H.a([],t.l)
for(a3=J.x(a6.gp(a6));a3.k();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.c5(a6.aa,a6.ai,a6.W,a6.a_,a6.aP,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a6.ch,a6.cx,e,a6.db,a6.dx,n,l,m,d,c,b,a,a0,a1)},
i7:function(a,b,c,d,e,f,g,h,i,j,k){var s=null,r=N.aG(s,0,C.b,s,0),q=e==null?C.h:e,p=j==null?C.b:j
r=new N.X(0,s,i,d,0.35,C.k,r,s,s,k,b,h,g,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.P(C.b,s,s)
r.Z(a,b,!1,q,!1,0.01,g,h,p,k,0.000001)
r.Y(C.b)
return r},
i8:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=a8.W,a7=a8.a_
N.aG(a5,0,C.b,a5,0)
s=a8.r1
r=a8.r2
q=N.bC(a8.rx)
p=a8.ry
p=p==null?a5:N.am(p)
o=a8.x1
o=o==null?a5:N.am(o)
n=a8.dy
n=n==null?a5:J.p(n,new V.R(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.h(n,!0,m)
l=a8.fr
l=l==null?a5:J.p(l,new V.S(),m)
l=P.h(l==null?H.a([],t.O):l,!0,m)
k=a8.fx
k=k==null?a5:J.p(k,new V.T(),m)
m=P.h(k==null?H.a([],t.O):k,!0,m)
k=a8.x
j=a8.y
i=a8.z
h=a8.Q
g=h.a
f=h.b
h=h.c
e=a8.cy
d=a8.gF(a8).j()
c=a8.gH(a8)
b=a8.c
if(b===$)b=H.c(H.e("target"))
b=b==null?a5:b.j()
a=H.a([],t.r)
for(a0=a8.gw(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,H.d)(a0),++a2)a.push(a0[a2].j())
a0=a8.gI()
a1=H.a([],t.l)
for(a3=J.x(a8.gp(a8));a3.k();){a4=a3.gm()
a1.push(new Y.b(a4.a,a4.b,a4.c))}return new N.X(a8.aa,a8.ai,a6,a7,s,new Y.b(r.a,r.b,r.c),q,p,o,k,j,i,new Y.b(g,f,h),a8.ch,a8.cx,e,a8.db,a8.dx,n,l,m,d,c,b,a,a0,a1)},
jT:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cq(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jY:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cu(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
k6:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.cF(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
am:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.bX(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jX:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new N.ct(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
cC:function cC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dE:function dE(a){this.b=a},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aa=a
_.ai=b
_.W=c
_.a_=d
_.aP=e
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
br:function br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aa=a
_.ai=b
_.W=c
_.a_=d
_.aP=e
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
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aa=a
_.ai=b
_.W=c
_.a_=d
_.aP=e
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
X:function X(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.aa=a
_.ai=b
_.W=c
_.a_=d
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
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cF:function cF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ct:function ct(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dw:function dw(){},
f0:function f0(a){this.a=a}},T={
k2:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=M.hX(a2.hr),a1=a2.dy
a1=a1==null?a:J.p(a1,new V.R(),t.G)
if(a1==null)a1=H.a([],t.O)
s=t.G
a1=P.h(a1,!0,s)
r=a2.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a2.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a2.x
p=a2.y
o=a2.z
n=a2.Q
m=n.a
l=n.b
n=n.c
k=a2.cy
j=a2.gF(a2).j()
i=a2.gH(a2)
h=a2.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a2.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a2.gI()
e=H.a([],t.l)
for(c=J.x(a2.gp(a2));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new T.cB(a2.hq,a0,q,p,o,new Y.b(m,l,n),a2.ch,a2.cx,k,a2.db,a2.dx,a1,r,s,j,i,h,g,f,e)},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.hq=a
_.hr=b
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
r:function(a,b,c){var s,r=H.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)C.a.B(r,s)
else for(s=b;s>a;s+=c)C.a.B(r,s)
return r},
bO:function(a,b){var s,r,q,p=J.Z(a)
if(p.gX(a))return H.a([],b.h("w<u<t,0>>"))
s=H.a([],b.h("w<u<t,0>>"))
for(r=t.dq.E(b).h("u<1,2>"),q=0;q<p.gn(a);++q)C.a.B(s,new S.u(q,p.i(a,q),r))
return s},
hi:function(a,b){if(a.length===0)return b.a(0)
return C.a.a1(a,new T.hj(b))},
e_:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=T.r(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
if(typeof n!=="number")return n.a5()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return Z.Y(null,l)},
dZ:function(a,b,c){var s,r,q,p,o=T.r(C.d.e7((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.d)(o),++q){p=o[q]
if(typeof p!=="number")return p.t()
n.push(H.a([p*c+b],r))}return Z.Y(null,n)},
bo:function(a,b,c){var s,r,q,p,o,n=J.Z(a)
if(n.gX(a))return a
s=n.gn(a)
if(s>b)throw H.f("Trying to stretch an array to a length shorter than its own")
r=T.r(b,0,1)
q=H.A(r)
p=q.h("L<1,i>")
o=new H.L(r,q.h("i(1)").a(new T.hh(b,s)),p)
q=H.a([],c.h("w<0>"))
for(r=new H.a7(o,o.gn(o),p.h("a7<D.E>")),p=p.h("D.E");r.k();)q.push(n.i(a,C.d.a4(p.a(r.d))))
return q},
lj:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("w<0>"))
for(s=T.r(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.t()
n=C.d.av(p*o,l)
if(n<0||n>=o)return H.k(a,n)
k.push(a[n])}s=H.a([],d.h("w<0>"))
for(r=T.r(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.d)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.t()
m=C.d.av(p*n,l)
if(m<0||m>=n)return H.k(b,m)
s.push(b[m])}return new S.u(k,s,c.h("@<j<0>>").E(d.h("j<0>")).h("u<1,2>"))},
bQ:function(a,b){var s=F.bx(a,new T.hk(b),b)
return P.h(s,!0,s.$ti.h("o.E"))},
j7:function(a,b){var s=P.h(a,!0,b)
if(0>=s.length)return H.k(s,-1)
s.pop()
return s},
j8:function(a,b){var s,r,q,p=H.a([],b.h("w<0>")),o=P.jO(b)
for(s=H.A(a).h("aQ<1>"),r=new H.aQ(a,s),r=new H.a7(r,r.gn(r),s.h("a7<D.E>")),s=s.h("D.E");r.k();){q=s.a(r.d)
if(!o.ah(0,q)){C.a.B(p,q)
o.B(0,q)}}s=b.h("aQ<0>")
return P.h(new H.aQ(p,s),!0,s.h("D.E"))},
hj:function hj(a){this.a=a},
hh:function hh(a,b){this.a=a
this.b=b},
hk:function hk(a){this.a=a}},V={
k8:function(a,b,c,d,e,f,g,h,i,j,k){var s=null,r=new V.B(j,b,h,g,c,f,!1,k,4,s,s,s,C.b,s,s,s,s,s)
r.P(C.b,s,s)
r.Z(a,b,c,d,!1,f,g,h,i,j,k)
return r},
k9:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.B(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
im:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.x(o);o.k();){r=o.gm()
s.push(new K.y(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.x(s);s.k();){q=s.gm()
r.push(new K.y(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.x(r);r.k();){p=r.gm()
q.push(new K.y(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.b5(o,s,a.c,r,a.e,a.f,a.r)},
f5:function(a){var s=null,r=new V.aT(4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
r.P(C.b,s,s)
r.Z(s,0,!1,s,!1,0.01,C.f,0,s,4,0.000001)
r.cd(a)
return r},
k7:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.aT(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
ka:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.cH(a1.r1,a1.r2,q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
jE:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.dy
a0=a0==null?a:J.p(a0,new V.R(),t.G)
if(a0==null)a0=H.a([],t.O)
s=t.G
a0=P.h(a0,!0,s)
r=a1.fr
r=r==null?a:J.p(r,new V.S(),s)
r=P.h(r==null?H.a([],t.O):r,!0,s)
q=a1.fx
q=q==null?a:J.p(q,new V.T(),s)
s=P.h(q==null?H.a([],t.O):q,!0,s)
q=a1.x
p=a1.y
o=a1.z
n=a1.Q
m=n.a
l=n.b
n=n.c
k=a1.cy
j=a1.gF(a1).j()
i=a1.gH(a1)
h=a1.c
if(h===$)h=H.c(H.e("target"))
h=h==null?a:h.j()
g=H.a([],t.r)
for(f=a1.gw(),e=f.length,d=0;d<f.length;f.length===e||(0,H.d)(f),++d)g.push(f[d].j())
f=a1.gI()
e=H.a([],t.l)
for(c=J.x(a1.gp(a1));c.k();){b=c.gm()
e.push(new Y.b(b.a,b.b,b.c))}return new V.c3(q,p,o,new Y.b(m,l,n),a1.ch,a1.cx,k,a1.db,a1.dx,a0,r,s,j,i,h,g,f,e)},
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
R:function R(){},
S:function S(){},
T:function T(){},
fg:function fg(){},
fh:function fh(){},
fa:function fa(a){this.a=a},
fb:function fb(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
f9:function f9(a){this.a=a},
f7:function f7(){},
f8:function f8(){},
ff:function ff(){},
fe:function fe(){},
b5:function b5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aT:function aT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bU:function bU(){},
hP:function(a,b,c){var s,r,q=t.H,p=V.d3(Z.Y(null,J.p(a,new V.h9(),q).R(0)),Z.Y(null,J.p(b,new V.ha(),q).R(0)),c,t.A)
q=p.gL(p)
s=H.A(q)
r=s.h("L<1,y>")
return P.h(new H.L(q,s.h("y(1)").a(new V.hb()),r),!0,r.h("D.E"))},
d3:function(a,b,c,d){return d.a(J.d5(J.aD(a,1-c),J.aD(b,c)))},
hc:function(a,b,c,d){return d.a(J.d5(J.aD(a,1-c),J.aD(b,c)))},
hO:function(a,b,c){if(c>=1)return new S.u(b-1,1,t.w)
if(c<=0)return new S.u(a,0,t.w)
return new S.u(J.jq(V.d3(a,b,c,t.V)),C.d.K((b-a)*c,1),t.w)},
hI:function(a){return new V.fW(a,a.length-1)},
hf:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.ac(r),p=T.r(q.gn(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.d)(p),++m){if(q.gn(r)===0)H.c(H.a1())
s.push(n.a(q.i(r,q.gn(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.ac(q),o=T.r(p.gn(q),0,1),n=o.length,l=a.$ti,k=l.h("a8.E"),l=l.h("ak<a8.E>"),m=0;m<o.length;o.length===n||(0,H.d)(o),++m){j=H.V(o[m])
i=new H.ak(a,j,null,l)
i.bn(a,j,null,k)
r.push(V.hI(i.R(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=T.r(p.gn(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.d)(q),++m){g=q[m]
if(typeof g!=="number")return g.A()
l=H.V(g+1)
P.cs(0,l,r.length)
k=new H.ak(r,0,l,n)
k.bn(r,0,l,o)
s.push(V.hI(k.R(0)).$1(h))}return s},
l9:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a5.length-1
if(a4<1){s=t.l
return new S.u(H.a([C.c],s),H.a([C.c],s),t.el)}s=2*a4
r=t.o
q=Z.at(0,new S.u(4,s,r))
p=new V.h4(a4,q)
p.$4$start$step(-1,0,1,2)
p.$4$start$step(1,0,2,2)
p.$4$start$step(2,1,0,2)
p.$4$start$step(1,1,1,2)
p.$5$end$start$step(-2,2,s-2,1,2)
p.$5$end$start$step(1,3,s-3,0,2)
q.aE(new S.u(2,-2,r),-1)
q.aE(new S.u(1,-1,r),2)
o=Z.at(0,new S.u(s,3,r))
n=t.i
m=T.bQ(a5,n)
for(l=T.bO(T.r(s,1,2),t.S),k=l.length,j=0;j<l.length;l.length===k||(0,H.d)(l),++j){i=l[j]
for(h=T.r(3,0,1),g=h.length,f=i.b,e=i.a,d=0;d<h.length;h.length===g||(0,H.d)(h),++d){c=h[d]
o.aE(new S.u(f,c,r),2*C.a.i(m,e).ac(c))}}for(l=T.r(3,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.d)(l),++j){c=l[j]
o.aE(new S.u(0,c,r),C.a.gN(a5).ac(c))}for(l=T.r(3,0,1),k=l.length,h=s-1,j=0;j<l.length;l.length===k||(0,H.d)(l),++j){c=l[j]
o.aE(new S.u(h,c,r),C.a.gM(a5).ac(c))}l=J.jk(C.a.gN(a5),C.a.gM(a5)).al()
b=Z.at(0,new S.u(s,3,r))
if(l<=1e-12){a=V.l4(new S.u(2,1,r),q)
for(s=t.t,s=new A.O(H.a([H.a([0,1,-2,-1],s),H.a([2,-1,1,-2],s)],t.gL),t.eN),s=s.gC(s);s.k();){a0=s.b
if(a0==null)a0=H.c(P.a9("No element"))
l=a.b
k=(l==null?H.c(H.e("shape")):l).a
if(typeof k!=="number")return H.aY(k)
c=C.e.K(-1,k)
k=a0.length
if(0>=k)return H.k(a0,0)
h=a0[0]
l=l.b
if(typeof h!=="number")return h.K()
if(typeof l!=="number")return H.aY(l)
a1=C.d.K(h,l)
if(1>=k)return H.k(a0,1)
a.aE(new S.u(c,a1,r),a0[1])}s=t.n
r=H.a([],s)
for(l=T.r(a.gD(a).b,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.d)(l),++j){a0=l[j]
h=J.aX(a0)
if(!h.J(a0,0)){g=a.b
g=(g==null?H.c(H.e("shape")):g).b
if(typeof g!=="number")return g.u()
g=h.J(a0,g-1)
h=g}else h=!0
if(h)r.push(1)
else r.push(0)}r=H.a([r],t.b)
C.a.G(r,T.bQ(a.gL(a),t.H))
a.sdC(t.gj.a(r))
r=o.gL(o)
if(0>=a5.length)return H.k(a5,0)
l=J.aD(a5[0],2)
C.a.sN(r,H.a([l.a,l.b,l.c],s))
C.a.sM(o.gL(o),H.a([0,0,0],s))
for(s=T.r(3,0,1),r=s.length,j=0;j<s.length;s.length===r||(0,H.d)(s),++j)b.dc(s[j],a.bX().ay(o).cG())}else for(s=T.r(3,0,1),r=s.length,j=0;j<s.length;s.length===r||(0,H.d)(s),++j)b.dc(s[j],q.bX().ay(o).cG())
s=H.a([],t.l)
for(r=b.d8(),l=r.length,j=0;j<r.length;r.length===l||(0,H.d)(r),++j){a2=r[j]
k=a2.length
if(0>=k)return H.k(a2,0)
h=a2[0]
if(1>=k)return H.k(a2,1)
g=a2[1]
if(2>=k)return H.k(a2,2)
s.push(new Y.b(h,g,a2[2]))}r=F.bx(s,new V.h2(),n)
a3=P.h(r,!0,r.$ti.h("o.E"))
n=F.bx(s,new V.h3(),n)
return new S.u(a3,P.h(n,!0,n.$ti.h("o.E")),t.el)},
l4:function(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=a8.b,a6=t.o,a7=Z.at(0,new S.u(3,3,a6))
for(s=T.r(a8.a+a5+1,0,1),r=s.length,q=t.gj,p=t.n,o=t.b,n=0;n<s.length;s.length===r||(0,H.d)(s),++n){m=s[n]
l=a7.d8()
if(typeof m!=="number")return m.u()
k=H.V(Math.max(0,m-a5))
j=H.A(l)
i=j.h("ak<1>")
h=new H.ak(l,k,null,i)
h.bn(l,k,null,j.c)
j=i.h("L<D.E,j<i>>")
g=Z.Y(null,P.h(new H.L(h,i.h("j<i>(D.E)").a(new V.h_(a5,m)),j),!0,j.h("D.E")))
H.V(m)
j=a9.a
if(m<0||m>=j.length)return H.k(j,m)
l=j[m]
j=Math.max(0,a5-m)
f=V.l5(g,J.e3(l,j).R(0))
l=H.a([],o)
i=a7.b
i=T.r((i==null?H.c(H.e("shape")):i).a,0,1)
h=i.length
e=0
for(;e<i.length;i.length===h||(0,H.d)(i),++e){d=i[e]
c=H.a([],p)
b=a7.b
b=T.r((b==null?H.c(H.e("shape")):b).b,0,1)
a=b.length
a0=0
for(;a0<b.length;b.length===a||(0,H.d)(b),++a0){a1=b[a0]
if(typeof d!=="number")return d.bS()
if(d>=k){if(typeof a1!=="number")return a1.bS()
if(a1>=j){a2=d-k
a3=a1-j
a6.a(new S.u(a2,a3,a6))
a4=f.a
if(a2>>>0!==a2||a2>=a4.length)return H.k(a4,a2)
c.push(J.N(a4[a2],a3))}else{a6.a(new S.u(d,a1,a6))
a2=a7.a
if(d>>>0!==d||d>=a2.length)return H.k(a2,d)
c.push(J.N(a2[d],a1))}}else{a6.a(new S.u(d,a1,a6))
a2=a7.a
if(d>>>0!==d||d>=a2.length)return H.k(a2,d)
c.push(J.N(a2[d],a1))}}l.push(c)}a7.sdC(q.a(l))}return a7},
l5:function(a,b){return a.ax(0,new V.h1(b))},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
fW:function fW(a,b){this.a=a
this.b=b},
fV:function fV(){},
h4:function h4(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(){},
h_:function h_(a,b){this.a=a
this.b=b},
h1:function h1(a){this.a=a}},Q={dd:function dd(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},er:function er(){},eq:function eq(){},
lh:function(){var s=new Q.cb()
s.fE()
s.bO()},
cb:function cb(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=_.fy=0
_.x=_.r=_.f=_.d=null},
ez:function ez(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
eD:function eD(a){this.a=a},
eE:function eE(){},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},S={
i0:function(a){return new S.P(Math.cos(a),Math.sin(a))},
P:function P(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bD:function bD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},O={a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},ds:function ds(){},cm:function cm(a,b){this.c=a
this.a=b},aN:function aN(a,b){this.c=a
this.a=b},aO:function aO(a,b){this.c=a
this.a=b},aM:function aM(a,b){this.c=a
this.a=b},cl:function cl(a){this.a=a}},Z={
Y:function(a,b){var s,r,q=new Z.as(b)
if(a==null){s=q.gL(q).length
r=q.gL(q).length!==0?J.z(C.a.gN(q.gL(q))):0
a=new S.u(s,r,t.o)
s=a}else s=a
q.sfI(t.o.a(s))
return q},
at:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=T.r(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){o=H.a([],q)
for(n=T.r(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.d)(n),++l)o.push(a)
j.push(o)}return Z.Y(b,j)},
e8:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.ag(a),r=s.gC(a),q=t.n;r.k();){p=r.gm()
o.push(H.a([p.a,p.b,p.c],q))}return Z.Y(new S.u(s.gn(a),3,t.o),o)},
hl:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=T.r(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){o=s[p]
n=H.a([],q)
for(m=T.r(a,0,1),l=m.length,k=J.aX(o),j=0;j<m.length;m.length===l||(0,H.d)(m),++j)if(k.J(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return Z.Y(new S.u(a,a,t.o),i)},
ln:function(a,b){var s=Z.j3(a),r=Z.lt(b)
return C.a.a1(H.a([r,s,r.bX()],t.aM),new Z.hg())},
j3:function(a){var s=t.n
return Z.Y(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
lt:function(a){var s,r,q,p,o,n
if(a.al()===0)return Z.hl(3)
s=a.a5(0,Math.sqrt(a.al()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.eS(0)
p=q.a5(0,Math.sqrt(q.al()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=Z.Y(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return Z.j3(o).ay(n)},
ll:function(a,b){var s,r,q,p,o=a/2,n=b.a5(0,Math.sqrt(b.al())).t(0,Math.sin(o)),m=H.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(H.a([s[p]],q))
m.push(H.a([Math.cos(o)],q))
return Z.Y(null,m)},
l2:function(a,b){var s,r,q,p,o,n,m=6.283185307179586/a,l=t.bN,k=H.a([],l)
for(s=T.r(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
if(typeof p!=="number")return H.aY(p)
o=m*p
k.push(new S.P(Math.cos(o),Math.sin(o)))}l=H.a([],l)
for(s=k.length,r=b.a,o=b.b,q=0;q<k.length;k.length===s||(0,H.d)(k),++q)l.push(k[q].t(0,new S.P(r,o)))
k=H.a([],t.l)
for(s=l.length,q=0;q<l.length;l.length===s||(0,H.d)(l),++q){n=l[q]
k.push(new Y.b(n.a,n.b,0))}return k},
as:function as(a){this.a=a
this.b=null},
ee:function ee(a){this.a=a},
eh:function eh(a){this.a=a},
eg:function eg(a){this.a=a},
ef:function ef(a){this.a=a},
ed:function ed(a){this.a=a},
ec:function ec(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
ei:function ei(a){this.a=a},
ea:function ea(){},
e9:function e9(a){this.a=a},
hg:function hg(){}},F={
bx:function(a,b,c){return F.jP(a,b,c,c)},
jP:function(a,b,c,d){return P.iH(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$bx(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.ac(s),l=0
case 2:if(!(l<m.gn(s))){p=4
break}k=m.i(s,l)
p=H.bM(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.iq()
case 1:return P.ir(n)}}},d)}}
var w=[C,H,J,P,W,A,X,G,M,E,R,K,B,Y,N,T,V,Q,S,O,Z,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hq.prototype={}
J.ar.prototype={
J:function(a,b){return a===b},
gv:function(a){return H.aF(a)},
l:function(a){return"Instance of '"+H.eZ(a)+"'"}}
J.dn.prototype={
l:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$iF:1}
J.bw.prototype={
J:function(a,b){return null==b},
l:function(a){return"null"},
gv:function(a){return 0},
$iQ:1}
J.bj.prototype={
gv:function(a){return 0},
l:function(a){return String(a)}}
J.du.prototype={}
J.ax.prototype={}
J.b1.prototype={
l:function(a){var s=a[$.j9()]
if(s==null)return this.fp(a)
return"JavaScript function for "+J.d7(s)},
$ibi:1}
J.w.prototype={
B:function(a,b){H.A(a).c.a(b)
if(!!a.fixed$length)H.c(P.af("add"))
a.push(b)},
hK:function(a,b,c){var s,r
H.A(a).h("o<1>").a(c)
if(!!a.fixed$length)H.c(P.af("insertAll"))
P.jW(b,0,a.length,"index")
if(!t.X.b(c))c=J.e4(c)
s=J.z(c)
a.length=a.length+s
r=b+s
this.dh(a,r,a.length,a,b)
this.f9(a,b,r,c)},
eJ:function(a,b){var s
if(!!a.fixed$length)H.c(P.af("remove"))
for(s=0;s<a.length;++s)if(J.ah(a[s],b)){a.splice(s,1)
return!0}return!1},
dU:function(a,b,c){var s,r,q,p,o
H.A(a).h("F(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.bM(b.$1(p)))s.push(p)
if(a.length!==r)throw H.f(P.ao(a))}o=s.length
if(o===r)return
this.sn(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
G:function(a,b){var s
H.A(a).h("o<1>").a(b)
if(!!a.fixed$length)H.c(P.af("addAll"))
if(Array.isArray(b)){this.fR(a,b)
return}for(s=J.x(b);s.k();)a.push(s.gm())},
fR:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.f(P.ao(a))
for(r=0;r<s;++r)a.push(b[r])},
cL:function(a,b,c){var s=H.A(a)
return new H.L(a,s.E(c).h("1(2)").a(b),s.h("@<1>").E(c).h("L<1,2>"))},
eB:function(a,b){var s,r=P.ia(a.length,"",!1,t.aw)
for(s=0;s<a.length;++s)this.q(r,s,H.v(a[s]))
return r.join(b)},
hO:function(a){return this.eB(a,"")},
ae:function(a,b){return H.bB(a,b,null,H.A(a).c)},
a1:function(a,b){var s,r,q
H.A(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.f(H.a1())
if(0>=s)return H.k(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.f(P.ao(a))}return r},
bJ:function(a,b,c,d){var s,r,q
d.a(b)
H.A(a).E(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.f(P.ao(a))}return r},
V:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
c0:function(a,b,c){P.cs(b,c,a.length)
return H.bB(a,b,c,H.A(a).c)},
gN:function(a){if(a.length>0)return a[0]
throw H.f(H.a1())},
gM:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.f(H.a1())},
dh:function(a,b,c,d,e){var s,r,q,p,o
H.A(a).h("o<1>").a(d)
if(!!a.immutable$list)H.c(P.af("setRange"))
P.cs(b,c,a.length)
s=c-b
if(s===0)return
P.au(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.e3(d,e).az(0,!1)
q=0}p=J.ac(r)
if(q+s>p.gn(r))throw H.f(H.jJ())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.i(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.i(r,q+o)},
f9:function(a,b,c,d){return this.dh(a,b,c,d,0)},
bw:function(a,b){var s,r
H.A(a).h("F(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.bM(b.$1(a[r])))return!1
if(a.length!==s)throw H.f(P.ao(a))}return!0},
fh:function(a,b){var s,r=H.A(a)
r.h("t(1,1)?").a(b)
if(!!a.immutable$list)H.c(P.af("sort"))
s=b==null?J.kG():b
H.k1(a,s,r.c)},
fg:function(a){return this.fh(a,null)},
ah:function(a,b){var s
for(s=0;s<a.length;++s)if(J.ah(a[s],b))return!0
return!1},
gX:function(a){return a.length===0},
gaR:function(a){return a.length!==0},
l:function(a){return P.hp(a,"[","]")},
az:function(a,b){var s=H.a(a.slice(0),H.A(a))
return s},
R:function(a){return this.az(a,!0)},
gC:function(a){return new J.bW(a,a.length,H.A(a).h("bW<1>"))},
gv:function(a){return H.aF(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.c(P.af("set length"))
if(b<0)throw H.f(P.aP(b,0,null,"newLength",null))
if(b>a.length)H.A(a).c.a(null)
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.hL(a,b))
return a[b]},
q:function(a,b,c){H.A(a).c.a(c)
if(!!a.immutable$list)H.c(P.af("indexed set"))
if(b>=a.length||b<0)throw H.f(H.hL(a,b))
a[b]=c},
sN:function(a,b){H.A(a).c.a(b)
if(a.length===0)throw H.f(H.a1())
this.q(a,0,b)},
sM:function(a,b){var s
H.A(a).c.a(b)
s=a.length
if(s===0)throw H.f(H.a1())
this.q(a,s-1,b)},
$iG:1,
$io:1,
$ij:1}
J.eK.prototype={}
J.bW.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.f(H.d(q))
s=r.c
if(s>=p){r.sdO(null)
return!1}r.sdO(q[s]);++r.c
return!0},
sdO:function(a){this.d=this.$ti.h("1?").a(a)},
$iJ:1}
J.b0.prototype={
e9:function(a,b){var s
H.fP(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbK(b)
if(this.gbK(a)===s)return 0
if(this.gbK(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbK:function(a){return a===0?1/a<0:a<0},
gdr:function(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
a4:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.f(P.af(""+a+".toInt()"))},
e7:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.f(P.af(""+a+".ceil()"))},
hD:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.f(P.af(""+a+".floor()"))},
bP:function(a,b){var s
if(b>20)throw H.f(P.aP(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbK(a))return"-"+s
return s},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
A:function(a,b){H.fP(b)
return a+b},
t:function(a,b){return a*b},
K:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
av:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dV(a,b)},
af:function(a,b){return(a|0)===a?a/b|0:this.dV(a,b)},
dV:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.f(P.af("Result of truncating division is "+H.v(s)+": "+H.v(a)+" ~/ "+b))},
h5:function(a,b){var s
if(a>0)s=this.h4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h4:function(a,b){return b>31?0:a>>>b},
$iaK:1,
$ii:1,
$iH:1}
J.bv.prototype={
gdr:function(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$it:1}
J.cd.prototype={}
J.aL.prototype={
A:function(a,b){H.bI(b)
return a+b},
fj:function(a,b,c){if(b<0)throw H.f(P.f_(b,null))
if(b>c)throw H.f(P.f_(b,null))
if(c>a.length)throw H.f(P.f_(c,null))
return a.substring(b,c)},
e9:function(a,b){var s
H.bI(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l:function(a){return a},
gv:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gn:function(a){return a.length},
$iaK:1,
$ieY:1,
$ia3:1}
H.b6.prototype={
gC:function(a){var s=H.E(this)
return new H.c2(J.x(this.gar()),s.h("@<1>").E(s.Q[1]).h("c2<1,2>"))},
gn:function(a){return J.z(this.gar())},
gX:function(a){return J.bd(this.gar())},
gaR:function(a){return J.d6(this.gar())},
ae:function(a,b){var s=H.E(this)
return H.hm(J.e3(this.gar(),b),s.c,s.Q[1])},
gN:function(a){return H.E(this).Q[1].a(J.ai(this.gar()))},
gM:function(a){return H.E(this).Q[1].a(J.be(this.gar()))},
l:function(a){return J.d7(this.gar())}}
H.c2.prototype={
k:function(){return this.a.k()},
gm:function(){return this.$ti.Q[1].a(this.a.gm())},
$iJ:1}
H.bh.prototype={
gar:function(){return this.a}}
H.cL.prototype={$iG:1}
H.cJ.prototype={
i:function(a,b){return this.$ti.Q[1].a(J.N(this.a,b))},
q:function(a,b,c){var s=this.$ti
J.e2(this.a,b,s.c.a(s.Q[1].a(c)))},
B:function(a,b){var s=this.$ti
J.jn(this.a,s.c.a(s.Q[1].a(b)))},
G:function(a,b){var s=this.$ti
J.aH(this.a,H.hm(s.h("o<2>").a(b),s.Q[1],s.c))},
c0:function(a,b,c){var s=this.$ti
return H.hm(J.hU(this.a,b,c),s.c,s.Q[1])},
$iG:1,
$ij:1}
H.a5.prototype={
gar:function(){return this.a}}
H.cf.prototype={
l:function(a){var s="LateInitializationError: "+this.a
return s}}
H.he.prototype={
$0:function(){var s=new P.U($.K,t.ck)
s.dI(null)
return s},
$S:21}
H.G.prototype={}
H.D.prototype={
gC:function(a){var s=this
return new H.a7(s,s.gn(s),H.E(s).h("a7<D.E>"))},
gX:function(a){return this.gn(this)===0},
gN:function(a){if(this.gn(this)===0)throw H.f(H.a1())
return this.V(0,0)},
gM:function(a){var s=this
if(s.gn(s)===0)throw H.f(H.a1())
return s.V(0,s.gn(s)-1)},
a1:function(a,b){var s,r,q,p=this
H.E(p).h("D.E(D.E,D.E)").a(b)
s=p.gn(p)
if(s===0)throw H.f(H.a1())
r=p.V(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.V(0,q))
if(s!==p.gn(p))throw H.f(P.ao(p))}return r},
ae:function(a,b){return H.bB(this,b,null,H.E(this).h("D.E"))},
az:function(a,b){return P.h(this,b,H.E(this).h("D.E"))},
R:function(a){return this.az(a,!0)}}
H.ak.prototype={
bn:function(a,b,c,d){var s,r=this.b
P.au(r,"start")
s=this.c
if(s!=null){P.au(s,"end")
if(r>s)throw H.f(P.aP(r,0,s,"start",null))}},
gfY:function(){var s=J.z(this.a),r=this.c
if(r==null||r>s)return s
return r},
gh6:function(){var s=J.z(this.a),r=this.b
if(r>s)return s
return r},
gn:function(a){var s,r=J.z(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.u()
return s-q},
V:function(a,b){var s=this,r=s.gh6()+b
if(b<0||r>=s.gfY())throw H.f(P.ho(b,s,"index",null,null))
return J.hT(s.a,r)},
ae:function(a,b){var s,r,q=this
P.au(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.c8(q.$ti.h("c8<1>"))
return H.bB(q.a,s,r,q.$ti.c)},
az:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ac(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.i5(0,n):J.i4(0,n)}r=P.ia(s,m.V(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.q(r,q,m.V(n,o+q))
if(m.gn(n)<l)throw H.f(P.ao(p))}return r},
R:function(a){return this.az(a,!0)}}
H.a7.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a,p=q.gn(q)
if(r.b!==p)throw H.f(P.ao(q))
s=r.c
if(s>=p){r.saZ(null)
return!1}r.saZ(q.V(0,s));++r.c
return!0},
saZ:function(a){this.d=this.$ti.h("1?").a(a)},
$iJ:1}
H.bk.prototype={
gC:function(a){var s=H.E(this)
return new H.ck(J.x(this.a),this.b,s.h("@<1>").E(s.Q[1]).h("ck<1,2>"))},
gn:function(a){return J.z(this.a)},
gX:function(a){return J.bd(this.a)},
gN:function(a){return this.b.$1(J.ai(this.a))},
gM:function(a){return this.b.$1(J.be(this.a))}}
H.c7.prototype={$iG:1}
H.ck.prototype={
k:function(){var s=this,r=s.b
if(r.k()){s.saZ(s.c.$1(r.gm()))
return!0}s.saZ(null)
return!1},
gm:function(){return this.$ti.Q[1].a(this.a)},
saZ:function(a){this.a=this.$ti.h("2?").a(a)}}
H.L.prototype={
gn:function(a){return J.z(this.a)},
V:function(a,b){return this.b.$1(J.hT(this.a,b))}}
H.aU.prototype={
gC:function(a){return new H.cI(J.x(this.a),this.b,this.$ti.h("cI<1>"))}}
H.cI.prototype={
k:function(){var s,r
for(s=this.a,r=this.b;s.k();)if(H.bM(r.$1(s.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.aR.prototype={
ae:function(a,b){P.au(b,"count")
return new H.aR(this.a,this.b+b,H.E(this).h("aR<1>"))},
gC:function(a){return new H.cx(J.x(this.a),this.b,H.E(this).h("cx<1>"))}}
H.bs.prototype={
gn:function(a){var s=J.z(this.a)-this.b
if(s>=0)return s
return 0},
ae:function(a,b){P.au(b,"count")
return new H.bs(this.a,this.b+b,this.$ti)},
$iG:1}
H.cx.prototype={
k:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gm:function(){return this.a.gm()}}
H.c8.prototype={
gC:function(a){return C.S},
gX:function(a){return!0},
gn:function(a){return 0},
gN:function(a){throw H.f(H.a1())},
gM:function(a){throw H.f(H.a1())},
ae:function(a,b){P.au(b,"count")
return this}}
H.c9.prototype={
k:function(){return!1},
gm:function(){throw H.f(H.a1())},
$iJ:1}
H.aQ.prototype={
gn:function(a){return J.z(this.a)},
V:function(a,b){var s=this.a,r=J.ac(s)
return r.V(s,r.gn(s)-1-b)}}
H.cX.prototype={}
H.dl.prototype={
l:function(a){var s="<"+C.a.eB([H.l3(this.$ti.c)],", ")+">"
return this.a.l(0)+" with "+s}}
H.b_.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.ld(H.iP(this.a),this.$ti)}}
H.f3.prototype={
ak:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cn.prototype={
l:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dq.prototype={
l:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.dH.prototype={
l:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.eU.prototype={
l:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ca.prototype={}
H.cQ.prototype={
l:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib2:1}
H.an.prototype={
l:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.j6(r==null?"unknown":r)+"'"},
$ibi:1,
gi8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dD.prototype={}
H.dB.prototype={
l:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.j6(s)+"'"}}
H.bq.prototype={
J:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bq))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gv:function(a){var s,r=this.c
if(r==null)s=H.aF(this.a)
else s=typeof r!=="object"?J.bS(r):H.aF(r)
return(s^H.aF(this.b))>>>0},
l:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.v(this.d)+"' of "+("Instance of '"+H.eZ(t.K.a(s))+"'")}}
H.dv.prototype={
l:function(a){return"RuntimeError: "+this.a}}
H.dJ.prototype={
l:function(a){return"Assertion failed: "+P.dh(this.a)}}
H.ce.prototype={
gn:function(a){return this.a},
geC:function(){return new H.cg(this,H.E(this).h("cg<1>"))},
eb:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.fW(s,a)}else return this.hL(a)},
hL:function(a){var s=this.d
if(s==null)return!1
return this.cH(this.cl(s,C.e.gv(a)&0x3ffffff),a)>=0},
i:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bo(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bo(p,b)
q=r==null?n:r.b
return q}else return o.hM(b)},
hM:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cl(q,J.bS(a)&0x3ffffff)
r=this.cH(s,a)
if(r<0)return null
return s[r].b},
q:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.E(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.dE(s==null?m.b=m.cm():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.dE(r==null?m.c=m.cm():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.cm()
p=J.bS(b)&0x3ffffff
o=m.cl(q,p)
if(o==null)m.co(q,p,[m.ce(b,c)])
else{n=m.cH(o,b)
if(n>=0)o[n].b=c
else o.push(m.ce(b,c))}}},
ew:function(a,b){var s,r,q=this
H.E(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.f(P.ao(q))
s=s.c}},
dE:function(a,b,c){var s,r=this,q=H.E(r)
q.c.a(b)
q.Q[1].a(c)
s=r.bo(a,b)
if(s==null)r.co(a,b,r.ce(b,c))
else s.b=c},
ce:function(a,b){var s=this,r=H.E(s),q=new H.eL(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
cH:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ah(a[r].a,b))return r
return-1},
l:function(a){return P.ib(this)},
bo:function(a,b){return a[b]},
cl:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
fX:function(a,b){delete a[b]},
fW:function(a,b){return this.bo(a,b)!=null},
cm:function(){var s="<non-identifier-key>",r=Object.create(null)
this.co(r,s,r)
this.fX(r,s)
return r}}
H.eL.prototype={}
H.cg.prototype={
gn:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gC:function(a){var s=this.a,r=new H.ch(s,s.r,this.$ti.h("ch<1>"))
r.c=s.e
return r}}
H.ch.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.f(P.ao(q))
s=r.c
if(s==null){r.sdF(null)
return!1}else{r.sdF(s.a)
r.c=s.c
return!0}},
sdF:function(a){this.d=this.$ti.h("1?").a(a)},
$iJ:1}
H.h5.prototype={
$1:function(a){return this.a(a)},
$S:29}
H.h6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:58}
H.h7.prototype={
$1:function(a){return this.a(H.bI(a))},
$S:20}
H.dp.prototype={
l:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
ev:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.fI(s)},
$ieY:1}
H.fI.prototype={}
H.av.prototype={
h:function(a){return H.dX(v.typeUniverse,this,a)},
E:function(a){return H.kt(v.typeUniverse,this,a)}}
H.dP.prototype={}
H.dV.prototype={
l:function(a){return H.ab(this.a,null)}}
H.dO.prototype={
l:function(a){return this.a}}
H.cT.prototype={}
P.fn.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
P.fm.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:53}
P.fo.prototype={
$0:function(){this.a.$0()},
$S:11}
P.fp.prototype={
$0:function(){this.a.$0()},
$S:11}
P.fL.prototype={
fG:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.fM(this,b),0),a)
else throw H.f(P.af("`setTimeout()` not found."))}}
P.fM.prototype={
$0:function(){this.b.$0()},
$S:0}
P.dK.prototype={
cs:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.dI(b)
else{s=r.a
if(q.h("aq<1>").b(b))s.dK(b)
else s.cg(q.c.a(b))}},
ea:function(a,b){var s=this.a
if(this.b)s.aN(a,b)
else s.fT(a,b)}}
P.fQ.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:27}
P.fR.prototype={
$2:function(a,b){this.a.$2(1,new H.ca(a,t.k.a(b)))},
$S:28}
P.fU.prototype={
$2:function(a,b){this.a(H.V(a),b)},
$S:31}
P.bG.prototype={
l:function(a){return"IterationMarker("+this.b+", "+H.v(this.a)+")"}}
P.bH.prototype={
gm:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gm()},
k:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("J<1>");!0;){r=m.c
if(r!=null)if(r.k())return!0
else m.sdS(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.bG){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sdH(null)
return!1}if(0>=o.length)return H.k(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.x(r))
if(n instanceof P.bH){r=m.d
if(r==null)r=m.d=[]
C.a.B(r,m.a)
m.a=n.a
continue}else{m.sdS(n)
continue}}}}else{m.sdH(q)
return!0}}return!1},
sdH:function(a){this.b=this.$ti.h("1?").a(a)},
sdS:function(a){this.c=this.$ti.h("J<1>?").a(a)},
$iJ:1}
P.cS.prototype={
gC:function(a){return new P.bH(this.a(),this.$ti.h("bH<1>"))}}
P.bZ.prototype={
l:function(a){return H.v(this.a)},
$iI:1,
gc8:function(){return this.b}}
P.dM.prototype={
ea:function(a,b){var s
H.hJ(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.f(P.a9("Future already completed"))
s.aN(a,b)}}
P.cR.prototype={
cs:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.f(P.a9("Future already completed"))
s.dM(r.h("1/").a(b))}}
P.bm.prototype={
hP:function(a){if((this.c&15)!==6)return!0
return this.b.b.cU(t.al.a(this.d),a.a,t.cJ,t.K)},
hF:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.hX(s,p,a.b,r,q,t.k))
else return o.a(n.cU(t.bI.a(s),p,r,q))}}
P.U.prototype={
cX:function(a,b,c){var s,r,q,p=this.$ti
p.E(c).h("1/(2)").a(a)
s=$.K
if(s!==C.i){c.h("@<0/>").E(p.c).h("1(2)").a(a)
if(b!=null)b=P.kP(b,s)}r=new P.U(s,c.h("U<0>"))
q=b==null?1:3
this.cf(new P.bm(r,q,a,b,p.h("@<1>").E(c).h("bm<1,2>")))
return r},
eN:function(a,b){return this.cX(a,null,b)},
dW:function(a,b,c){var s,r=this.$ti
r.E(c).h("1/(2)").a(a)
s=new P.U($.K,c.h("U<0>"))
this.cf(new P.bm(s,19,a,b,r.h("@<1>").E(c).h("bm<1,2>")))
return s},
cf:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.d.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.cf(a)
return}r.a=q
r.c=s.c}P.bK(null,null,r.b,t.M.a(new P.ft(r,a)))}},
dT:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.d.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.dT(a)
return}m.a=s
m.c=n.c}l.a=m.br(a)
P.bK(null,null,m.b,t.M.a(new P.fB(l,m)))}},
bq:function(){var s=t.d.a(this.c)
this.c=null
return this.br(s)},
br:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
dJ:function(a){var s,r,q,p=this
p.a=1
try{a.cX(new P.fx(p),new P.fy(p),t.P)}catch(q){s=H.bc(q)
r=H.ba(q)
P.lo(new P.fz(p,s,r))}},
dM:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("aq<1>").b(a))if(q.b(a))P.fw(a,r)
else r.dJ(a)
else{s=r.bq()
q.c.a(a)
r.a=4
r.c=a
P.bF(r,s)}},
cg:function(a){var s,r=this
r.$ti.c.a(a)
s=r.bq()
r.a=4
r.c=a
P.bF(r,s)},
aN:function(a,b){var s,r,q=this
t.k.a(b)
s=q.bq()
r=P.ek(a,b)
q.a=8
q.c=r
P.bF(q,s)},
dI:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aq<1>").b(a)){this.dK(a)
return}this.fU(s.c.a(a))},
fU:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.bK(null,null,s.b,t.M.a(new P.fv(s,a)))},
dK:function(a){var s=this,r=s.$ti
r.h("aq<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.bK(null,null,s.b,t.M.a(new P.fA(s,a)))}else P.fw(a,s)
return}s.dJ(a)},
fT:function(a,b){this.a=1
P.bK(null,null,this.b,t.M.a(new P.fu(this,a,b)))},
$iaq:1}
P.ft.prototype={
$0:function(){P.bF(this.a,this.b)},
$S:0}
P.fB.prototype={
$0:function(){P.bF(this.b,this.a.a)},
$S:0}
P.fx.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.cg(p.$ti.c.a(a))}catch(q){s=H.bc(q)
r=H.ba(q)
p.aN(s,r)}},
$S:10}
P.fy.prototype={
$2:function(a,b){this.a.aN(t.K.a(a),t.k.a(b))},
$S:32}
P.fz.prototype={
$0:function(){this.a.aN(this.b,this.c)},
$S:0}
P.fv.prototype={
$0:function(){this.a.cg(this.b)},
$S:0}
P.fA.prototype={
$0:function(){P.fw(this.b,this.a)},
$S:0}
P.fu.prototype={
$0:function(){this.a.aN(this.b,this.c)},
$S:0}
P.fE.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eM(t.fO.a(q.d),t.z)}catch(p){s=H.bc(p)
r=H.ba(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=P.ek(s,r)
o.b=!0
return}if(l instanceof P.U&&l.a>=4){if(l.a===8){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.v.b(l)){n=m.b.a
q=m.a
q.c=l.eN(new P.fF(n),t.z)
q.b=!1}},
$S:0}
P.fF.prototype={
$1:function(a){return this.a},
$S:33}
P.fD.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cU(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.bc(l)
r=H.ba(l)
q=this.a
q.c=P.ek(s,r)
q.b=!0}},
$S:0}
P.fC.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.hP(s)&&p.a.e!=null){p.c=p.a.hF(s)
p.b=!1}}catch(o){r=H.bc(o)
q=H.ba(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.ek(r,q)
n.b=!0}},
$S:0}
P.dL.prototype={}
P.cz.prototype={
gn:function(a){var s,r,q=this,p={},o=new P.U($.K,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.f1(p,q))
t.g5.a(new P.f2(p,o))
W.fq(q.a,q.b,r,!1,s.c)
return o}}
P.f1.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.f2.prototype={
$0:function(){this.b.dM(this.a.a)},
$S:0}
P.cA.prototype={}
P.dT.prototype={}
P.cW.prototype={$iio:1}
P.fT.prototype={
$0:function(){var s=t.K.a(H.f(this.a))
s.stack=this.b.l(0)
throw s},
$S:0}
P.dS.prototype={
hY:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.i===$.K){a.$0()
return}P.iI(p,p,this,a,t.aT)}catch(q){s=H.bc(q)
r=H.ba(q)
P.fS(p,p,this,t.K.a(s),t.k.a(r))}},
hZ:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.i===$.K){a.$1(b)
return}P.iJ(p,p,this,a,b,t.aT,c)}catch(q){s=H.bc(q)
r=H.ba(q)
P.fS(p,p,this,t.K.a(s),t.k.a(r))}},
e6:function(a){return new P.fJ(this,t.M.a(a))},
hh:function(a,b){return new P.fK(this,b.h("~(0)").a(a),b)},
eM:function(a,b){b.h("0()").a(a)
if($.K===C.i)return a.$0()
return P.iI(null,null,this,a,b)},
cU:function(a,b,c,d){c.h("@<0>").E(d).h("1(2)").a(a)
d.a(b)
if($.K===C.i)return a.$1(b)
return P.iJ(null,null,this,a,b,c,d)},
hX:function(a,b,c,d,e,f){d.h("@<0>").E(e).E(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.K===C.i)return a.$2(b,c)
return P.kQ(null,null,this,a,b,c,d,e,f)},
eI:function(a,b,c,d){return b.h("@<0>").E(c).E(d).h("1(2,3)").a(a)}}
P.fJ.prototype={
$0:function(){return this.a.hY(this.b)},
$S:0}
P.fK.prototype={
$1:function(a){var s=this.c
return this.a.hZ(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.aV.prototype={
h0:function(){return new P.aV(H.E(this).h("aV<1>"))},
gC:function(a){var s=this,r=new P.bn(s,s.r,H.E(s).h("bn<1>"))
r.c=s.e
return r},
gn:function(a){return this.a},
gX:function(a){return this.a===0},
gaR:function(a){return this.a!==0},
ah:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.fV(b)},
fV:function(a){var s=this.d
if(s==null)return!1
return this.dP(s[this.dN(a)],a)>=0},
gN:function(a){var s=this.e
if(s==null)throw H.f(P.a9("No elements"))
return H.E(this).c.a(s.a)},
gM:function(a){var s=this.f
if(s==null)throw H.f(P.a9("No elements"))
return H.E(this).c.a(s.a)},
B:function(a,b){var s,r,q=this
H.E(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dG(s==null?q.b=P.hy():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dG(r==null?q.c=P.hy():r,b)}else return q.fQ(b)},
fQ:function(a){var s,r,q,p=this
H.E(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.hy()
r=p.dN(a)
q=s[r]
if(q==null)s[r]=[p.cn(a)]
else{if(p.dP(q,a)>=0)return!1
q.push(p.cn(a))}return!0},
dG:function(a,b){H.E(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.cn(b)
return!0},
h_:function(){this.r=this.r+1&1073741823},
cn:function(a){var s,r=this,q=new P.dQ(H.E(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.h_()
return q},
dN:function(a){return J.bS(a)&1073741823},
dP:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ah(a[r].a,b))return r
return-1}}
P.dQ.prototype={}
P.bn.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.f(P.ao(q))
else if(r==null){s.sdL(null)
return!1}else{s.sdL(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sdL:function(a){this.d=this.$ti.h("1?").a(a)},
$iJ:1}
P.cc.prototype={}
P.a8.prototype={
gC:function(a){var s=this
return new H.a7(s,s.gn(s),s.$ti.h("a7<a8.E>"))},
V:function(a,b){return this.$ti.Q[1].a(J.N(this.a,b))},
gX:function(a){return J.z(this.a)===0},
gaR:function(a){return J.z(this.a)!==0},
gN:function(a){var s=this.a,r=J.ac(s)
if(r.gn(s)===0)throw H.f(H.a1())
return this.$ti.Q[1].a(r.i(s,0))},
gM:function(a){var s=this.a,r=J.ac(s)
if(r.gn(s)===0)throw H.f(H.a1())
return this.$ti.Q[1].a(r.i(s,r.gn(s)-1))},
bw:function(a,b){var s,r,q,p,o=this.$ti
o.h("F(a8.E)").a(b)
s=this.a
r=J.ac(s)
q=r.gn(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.bM(b.$1(o.a(r.i(s,p)))))return!1
if(q!==r.gn(s))throw H.f(P.ao(this))}return!0},
cL:function(a,b,c){var s=this.$ti
return new H.L(this,s.E(c).h("1(a8.E)").a(b),s.h("@<a8.E>").E(c).h("L<1,2>"))},
ae:function(a,b){return H.bB(this,b,null,this.$ti.h("a8.E"))},
G:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("o<a8.E>").a(b)
s=this.a
r=J.ac(s)
q=r.gn(s)
for(p=J.x(b),o=n.Q[1],n=n.c;p.k();){r.B(s,n.a(o.a(p.gm())));++q}},
c0:function(a,b,c){P.cs(b,c,J.z(this.a))
return H.bB(this,b,c,this.$ti.h("a8.E"))},
l:function(a){return P.hp(this,"[","]")}}
P.cj.prototype={}
P.eM.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.v(a)
r.a=s+": "
r.a+=H.v(b)},
$S:41}
P.by.prototype={
ew:function(a,b){var s,r,q=H.E(this)
q.h("~(1,2)").a(b)
for(s=this.geC(),s=s.gC(s),q=q.Q[1];s.k();){r=s.gm()
b.$2(r,q.a(this.i(0,r)))}},
gn:function(a){var s=this.geC()
return s.gn(s)},
l:function(a){return P.ib(this)},
$ici:1}
P.cw.prototype={
gX:function(a){return this.a===0},
gaR:function(a){return this.a!==0},
l:function(a){return P.hp(this,"{","}")},
ae:function(a,b){return H.ih(this,b,H.E(this).c)},
gN:function(a){var s=P.hx(this,this.r,H.E(this).c)
if(!s.k())throw H.f(H.a1())
return s.$ti.c.a(s.d)},
gM:function(a){var s,r,q=P.hx(this,this.r,H.E(this).c)
if(!q.k())throw H.f(H.a1())
s=q.$ti.c
do r=s.a(q.d)
while(q.k())
return r}}
P.cP.prototype={
hN:function(a,b){var s,r,q,p=this,o=p.h0()
for(s=P.hx(p,p.r,H.E(p).c),r=s.$ti.c;s.k();){q=r.a(s.d)
if(b.ah(0,q))o.B(0,q)}return o},
$iG:1,
$io:1,
$icv:1}
P.cY.prototype={}
P.I.prototype={
gc8:function(){return H.ba(this.$thrownJsError)}}
P.bY.prototype={
l:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.dh(s)
return"Assertion failed"}}
P.dF.prototype={}
P.dt.prototype={
l:function(a){return"Throw of null."}}
P.aI.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
l:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gcj()+o+m
if(!q.a)return l
s=q.gci()
r=P.dh(q.b)
return l+s+": "+r}}
P.cr.prototype={
gcj:function(){return"RangeError"},
gci:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.v(q):""
else if(q==null)s=": Not greater than or equal to "+H.v(r)
else if(q>r)s=": Not in inclusive range "+H.v(r)+".."+H.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.v(r)
return s}}
P.dk.prototype={
gcj:function(){return"RangeError"},
gci:function(){if(H.V(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn:function(a){return this.f}}
P.dI.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.dG.prototype={
l:function(a){var s="UnimplementedError: "+this.a
return s}}
P.bA.prototype={
l:function(a){return"Bad state: "+this.a}}
P.de.prototype={
l:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dh(s)+"."}}
P.cy.prototype={
l:function(a){return"Stack Overflow"},
gc8:function(){return null},
$iI:1}
P.dg.prototype={
l:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fs.prototype={
l:function(a){return"Exception: "+this.a}}
P.ey.prototype={
l:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.M.fj(q,0,75)+"..."
return r+"\n"+q}}
P.o.prototype={
cL:function(a,b,c){var s=H.E(this)
return H.jQ(this,s.E(c).h("1(o.E)").a(b),s.h("o.E"),c)},
bw:function(a,b){var s
H.E(this).h("F(o.E)").a(b)
for(s=this.gC(this);s.k();)if(!H.bM(b.$1(s.gm())))return!1
return!0},
az:function(a,b){return P.h(this,b,H.E(this).h("o.E"))},
R:function(a){return this.az(a,!0)},
gn:function(a){var s,r=this.gC(this)
for(s=0;r.k();)++s
return s},
gX:function(a){return!this.gC(this).k()},
gaR:function(a){return!this.gX(this)},
ae:function(a,b){return H.ih(this,b,H.E(this).h("o.E"))},
gN:function(a){var s=this.gC(this)
if(!s.k())throw H.f(H.a1())
return s.gm()},
gM:function(a){var s,r=this.gC(this)
if(!r.k())throw H.f(H.a1())
do s=r.gm()
while(r.k())
return s},
V:function(a,b){var s,r,q
P.au(b,"index")
for(s=this.gC(this),r=0;s.k();){q=s.gm()
if(b===r)return q;++r}throw H.f(P.ho(b,this,"index",null,r))},
l:function(a){return P.jI(this,"(",")")}}
P.J.prototype={}
P.Q.prototype={
gv:function(a){return P.C.prototype.gv.call(C.a2,this)},
l:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
J:function(a,b){return this===b},
gv:function(a){return H.aF(this)},
l:function(a){return"Instance of '"+H.eZ(this)+"'"},
toString:function(){return this.l(this)}}
P.dU.prototype={
l:function(a){return""},
$ib2:1}
P.dC.prototype={
gn:function(a){return this.a.length},
l:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.n.prototype={}
W.d9.prototype={
l:function(a){var s=String(a)
s.toString
return s}}
W.db.prototype={
l:function(a){var s=String(a)
s.toString
return s}}
W.bg.prototype={
shG:function(a,b){a.height=b},
si2:function(a,b){a.width=b},
$ibg:1}
W.c1.prototype={
sbI:function(a,b){a.fillStyle=b},
sdt:function(a,b){a.strokeStyle=b},
$ic1:1}
W.aE.prototype={
gn:function(a){return a.length}}
W.et.prototype={
l:function(a){var s=String(a)
s.toString
return s}}
W.c4.prototype={
l:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
s=r+H.v(s)+") "
r=a.width
r.toString
r=s+H.v(r)+" x "
s=a.height
s.toString
return r+H.v(s)},
J:function(a,b){var s,r
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
gv:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gv(p)
s=a.top
s.toString
s=C.d.gv(s)
r=a.width
r.toString
r=C.d.gv(r)
q=a.height
q.toString
return W.is(p,s,r,C.d.gv(q))},
$ihw:1}
W.l.prototype={
l:function(a){var s=a.localName
s.toString
return s},
$il:1}
W.m.prototype={$im:1}
W.a6.prototype={
fS:function(a,b,c,d){return a.addEventListener(b,H.bN(t.B.a(c),1),!1)},
h2:function(a,b,c,d){return a.removeEventListener(b,H.bN(t.B.a(c),1),!1)},
$ia6:1}
W.dj.prototype={
gn:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.ae.prototype={
l:function(a){var s=a.nodeValue
return s==null?this.fo(a):s}}
W.dx.prototype={
gn:function(a){return a.length}}
W.aw.prototype={}
W.bE.prototype={
ghe:function(a){var s=new P.U($.K,t.dL),r=t.c4.a(new W.fl(new P.cR(s,t.g4)))
this.fZ(a)
r=W.iL(r,t.p)
r.toString
this.h3(a,r)
return s},
h3:function(a,b){var s=a.requestAnimationFrame(H.bN(t.c4.a(b),1))
s.toString
return s},
fZ:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fl.prototype={
$1:function(a){this.a.cs(0,H.fP(a))},
$S:42}
W.cK.prototype={
l:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
s=r+H.v(s)+") "
r=a.width
r.toString
r=s+H.v(r)+" x "
s=a.height
s.toString
return r+H.v(s)},
J:function(a,b){var s,r
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
gv:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gv(p)
s=a.top
s.toString
s=C.d.gv(s)
r=a.width
r.toString
r=C.d.gv(r)
q=a.height
q.toString
return W.is(p,s,r,C.d.gv(q))}}
W.hn.prototype={}
W.cM.prototype={}
W.dN.prototype={}
W.cN.prototype={
hi:function(){var s,r=this,q=r.b
if(q==null)return $.hS()
s=r.d
if(s!=null)J.jm(q,r.c,t.B.a(s),!1)
r.b=null
r.sh1(null)
return $.hS()},
sh1:function(a){this.d=t.B.a(a)}}
W.fr.prototype={
$1:function(a){return this.a.$1(t.aD.a(a))},
$S:46}
P.dR.prototype={
fF:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.e.af(a-s,k)
r=a>>>0
a=C.e.af(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.e.af(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.e.af(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.e.af(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.e.af(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.e.af(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bp()
l.bp()
l.bp()
l.bp()},
bp:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.e.af(o-n+(q-p)+(m-r),4294967296)>>>0},
$ijV:1}
P.bl.prototype={
l:function(a){return"Point("+H.v(this.a)+", "+H.v(this.b)+")"},
J:function(a,b){if(b==null)return!1
return b instanceof P.bl&&this.a===b.a&&this.b===b.b},
gv:function(a){var s=C.d.gv(this.a),r=C.d.gv(this.b),q=H.ij(H.ij(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.O.prototype={
gC:function(a){var s=this.$ti,r=J.p(this.a,new A.eI(this),s.h("J<1>"))
return new A.cO(P.h(r,!1,r.$ti.h("D.E")),s.h("cO<1>"))}}
A.eI.prototype={
$1:function(a){return J.x(this.a.$ti.h("o<1>").a(a))},
$S:function(){return this.a.$ti.h("J<1>(o<1>)")}}
A.cO.prototype={
k:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].k()){p.sdR(null)
return!1}if(r>4294967295)H.c(P.aP(r,0,4294967295,"length",null))
q=J.i6(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.k(o,s)
q[s]=o[s].gm()}p.sdR(q)
return!0},
gm:function(){var s=this.b
return s==null?H.c(P.a9("No element")):s},
sdR:function(a){this.b=this.$ti.h("j<1>?").a(a)},
$iJ:1}
X.a2.prototype={
gc9:function(){var s=this.x
return s==null?H.c(H.e("startingMobject")):s},
l:function(a){var s=this.r
return this.ad()+"("+s.gH(s)+", runTime: "+H.v(this.a)+"s)"},
ad:function(){var s=this.dv(0),r=P.ic("^Instance of '(.*?)'$").ev(s).b
if(1>=r.length)return H.k(r,1)
r=r[1]
r.toString
return r},
b6:function(){this.x=this.cv()
this.bb(0)},
cF:function(){this.bb(1)},
b7:function(a){},
cv:function(){return this.r.j()},
bi:function(){return H.a([this.r,this.gc9()],t.r)},
d_:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.bi(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)p.push(s[q].bl())
s=t.Q
return P.h(new A.O(p,s),!0,s.h("o.E"))},
aK:function(a){var s,r,q
for(s=this.eT(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].cY(a)},
eT:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.bi(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o.push(p)}return o},
bb:function(a){a=Math.min(1,Math.max(a,0))
this.eA(this.b.$1(a))},
eA:function(a){var s,r,q,p,o,n=this.d_()
for(s=T.r(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){o=s[p]
this.cJ(C.a.i(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.V(o)*q,0)))}},
cJ:function(a,b){t.a.a(a)}}
G.da.prototype={
ge1:function(){var s=this.z
return s==null?H.c(H.e("animationsTiming")):s},
geE:function(){var s=this.Q
return s==null?H.c(H.e("maxEndTime")):s},
fz:function(a,b,c,d,e){var s,r,q=H.a([],t.r)
for(s=this.y,r=0;r<2;++r)q.push(s[r].r)
this.r.S(t.a.a(T.j8(q,t.j)))
this.hJ()},
bi:function(){return t.fh.a(this.r).gw()},
b6:function(){var s,r
for(s=this.y,r=0;r<2;++r)s[r].b6()},
cF:function(){var s,r
for(s=this.y,r=0;r<2;++r)s[r].cF()},
b7:function(a){var s,r
for(s=this.y,r=0;r<2;++r)s[r].b7(a)},
aK:function(a){var s,r
for(s=this.y,r=0;r<2;++r)s[r].aK(a)},
hJ:function(){var s,r,q,p,o=this
o.sfH(t.gp.a(o.eV()))
s=H.a([],t.n)
for(r=o.ge1(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(r[p].c)
o.Q=H.a4(C.a.bJ(s,0,C.u,t.V))
if(o.a===0)o.a=o.geE()},
eV:function(){var s,r,q,p,o,n,m,l,k=H.a([],t.fZ)
for(s=this.y,r=t.cL,q=this.c,p=1-q,o=0,n=0;n<2;++n){m=s[n]
l=o+m.a
C.a.B(k,new S.b4(m,o,l,r))
o=o*p+l*q}return k},
bb:function(a){var s,r,q,p,o,n,m,l=a*this.geE()
for(s=this.ge1(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.bb(m)}},
sfH:function(a){this.z=t.dh.a(a)}}
M.dz.prototype={
cJ:function(a,b){var s,r
t.a.a(a)
s=J.Z(a)
r=[0,b]
s.i(a,0).be(s.i(a,1),r[0],r[1])}}
M.dy.prototype={}
E.di.prototype={
ed:function(){return this.r},
cv:function(){var s=this.fn()
s.cz(1)
if(s instanceof V.B){s.aW(C.h)
s.dl(C.h,0)}return s}}
G.cE.prototype={
gcW:function(){var s=this.y
return s==null?H.c(H.e("targetMobject")):s},
gcV:function(){var s=this.z
return s==null?H.c(H.e("targetCopy")):s},
dB:function(a,b,c,d,e){if(e!=null)this.y=e
this.hI()},
hI:function(){if(this.cx!=null)return
this.shQ(B.j0())},
b6:function(){var s=this
s.y=s.ed()
s.z=s.gcW().j()
s.r.cq(s.gcV())
s.fl()},
ed:function(){return this.gcW()},
b7:function(a){this.fm(a)},
bi:function(){var s=this
return H.a([s.r,s.gc9(),s.gcW(),s.gcV()],t.r)},
d_:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gc9(),this.gcV()],r=0;r<3;++r)q.push(s[r].bl())
s=t.Q
return P.h(new A.O(q,s),!0,s.h("o.E"))},
cJ:function(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.Z(a)
r=s.i(a,0)
q=s.i(a,1)
s=s.i(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.b5.a(p)
n=p==null?B.j0():p
r.sU(t.y.a(n.$3(q.gp(q),s.gp(s),b)))
r.cI(q,s,b)},
shQ:function(a){this.cx=t.b5.a(a)}}
E.cG.prototype={
eA:function(a){var s=this.$ti.c.a(this.r)
this.y.$2(s,a)}}
R.en.prototype={
cw:function(a){var s,r,q,p
t.a.a(a)
s=new R.eo()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.d)(a),++p)C.a.G(r,s.$1(a[p]))
return T.j8(r,t.j)},
cQ:function(a){var s,r,q,p,o,n,m,l,k,j="renderer",i="ctx"
for(s=this.cw(t.a.a(a)),r=H.A(s).h("aQ<1>"),s=new H.aQ(s,r),s=new H.a7(s,s.gn(s),r.h("a7<D.E>")),q=this.r,r=r.h("D.E");s.k();){p=r.a(s.d)
if(p instanceof V.B){o=q.a;(o==null?H.c(H.e(j)):o).hS(p)}else{o=q.a
if(p instanceof M.b3){if(o==null)o=H.c(H.e(j))
n=o.e
if(n==null)n=H.c(H.e(i))
n.font="normal "+H.v(p.y/70)+"px "+p.z
n=o.d
if(n==null)n=H.c(H.e("display"))
m=p.a
l=n.b4(m)
n=o.e;(n==null?H.c(H.e(i)):n).save()
n=o.e
if(n==null)n=H.c(H.e(i))
C.m.sbI(n,l.aS())
n=o.e;(n==null?H.c(H.e(i)):n).scale(1,-1)
n=o.e;(n==null?H.c(H.e(i)):n).textBaseline="middle"
n=o.e;(n==null?H.c(H.e(i)):n).textAlign="center"
n=p.bj(0,C.d.a4(C.c.ac(0)))
m=p.bj(1,C.d.a4(C.c.ac(1)))
p.bj(2,C.d.a4(C.c.ac(2)))
k=o.e
if(k==null)k=H.c(H.e(i))
k.fillText(p.x,n,-m)
p=o.e;(p==null?H.c(H.e(i)):p).restore()}else if(o==null)H.c(H.e(j))}}},
eO:function(a,b){t.y.a(b)
return!C.a.bw(b,new R.ep())?H.a([C.c],t.l):b}}
R.eo.prototype={
$1:function(a){return a.at()},
$S:47}
R.ep.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:51}
K.bT.prototype={
gbN:function(){var s=this.a
return s==null?H.c(H.e("renderer")):s},
gO:function(){var s=this.b
return s==null?H.c(H.e("camera")):s},
b4:function(a){return a},
bW:function(a,b){var s,r,q=this
q.gO()
s=X.e0(a,0,1280,-q.gO().c/2,q.gO().c/2)
q.gO()
r=X.e0(b,720,0,-q.gO().d/2,q.gO().d/2)
q.gO()
return new Y.b(s,r,0).A(0,C.c)}}
K.d8.prototype={
bY:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gO()
p=X.e0(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gO()
return new Y.b(p,X.e0(a.b,q,r,0,720),0)},
cr:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new K.e5(s))
t.g5.a(null)
q=q.c
C.a.G(s.r,H.a([W.fq(r,"mousemove",o,!1,q),W.fq(r,"mousedown",p.a(new K.e6(s)),!1,q),W.fq(r,"mouseup",p.a(new K.e7(s)),!1,q)],t.db))},
i1:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].hi()}}
K.e5.prototype={
$1:function(a){var s,r,q,p
t.I.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bY(new P.bl(r,q,t.q))
q=s.bW(p.a,p.b)
s.ch=q
q.u(0,s.cx)
q=s.ch
$.bR().bv(new O.cm(q,C.x))
if(s.x){r=s.z=s.ch
s.y.u(0,r)
$.bR().bv(new O.aM(r,C.p))}},
$S:8}
K.e6.prototype={
$1:function(a){var s,r,q,p,o
t.I.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bY(new P.bl(r,q,t.q))
s.ch=s.bW(p.a,p.b)
q=a.button
q.toString
r=new O.cl(q)
r.cc(q)
s.Q=r
r=s.ch
$.bR().bv(new O.aN(r,C.n))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new Y.b(q,o,r)
s.z=new Y.b(q,o,r)},
$S:8}
K.e7.prototype={
$1:function(a){var s,r,q,p
t.I.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.bY(new P.bl(r,q,t.q))
s.ch=s.bW(p.a,p.b)
q=a.button
q.toString
r=new O.cl(q)
r.cc(q)
s.Q=r
r=s.ch
$.bR().bv(new O.aO(r,C.o))
s.x=!1},
$S:8}
B.dc.prototype={}
M.bz.prototype={
j:function(){return M.hu(this)},
hb:function(){var s,r,q,p=this,o=t.L,n=H.a([],o),m=p.eu?-1:1,l=p.bH
l.toString
s=p.eq
s=T.dZ(p.aj+m*s/2,l,s).ab(0)
l=s.length
r=p.ep
q=0
for(;q<s.length;s.length===l||(0,H.d)(s),++q)n.push(p.d7(s[q],r))
p.si_(n)
o=H.a([],o)
for(n=p.er,l=n.length,r*=p.es,q=0;q<n.length;n.length===l||(0,H.d)(n),++q)o.push(p.d7(n[q],r))
p.shg(o)
o=p.cD
o.toString
o=P.h(o,!0,t.j)
n=p.cE
n.toString
C.a.G(o,n)
p.S(t.a.a(o))},
d7:function(a,b){var s,r=this,q=C.r.t(0,b),p=N.i7(null,0,!1,C.q.t(0,b),null,!1,C.f,0,q,null,4)
p.cS(0,r.a2().u(0,r.a6()).b3())
p.aJ(r.cN(a))
p.Y(r.d1())
p.aW(J.N(r.aC(),0))
q=J.ai(r.am(!1))
s=r.x
p.dl(q,s)
return p},
cN:function(a){var s=this,r=X.e0(a,s.b9,s.aj,0,1)
return V.d3(s.a6(),s.a2(),r,t.i)},
eG:function(a){var s,r=this,q=r.a6(),p=r.a2(),o=p.u(0,q),n=o.a5(0,Math.sqrt(o.al()))
o=n.ei(a.u(0,q))
s=n.ei(p.u(0,q))
return V.d3(r.b9,r.aj,o/s,t.V)},
si_:function(a){this.cD=t.f.a(a)},
shg:function(a){this.cE=t.f.a(a)}}
M.eV.prototype={
$1:function(a){return t.F.a(a).j()},
$S:12}
M.eW.prototype={
$1:function(a){return t.F.a(a).j()},
$S:12}
M.df.prototype={
d4:function(a,b){var s,r=null
t.C.a(a)
s=new Y.cp(b,this.by,this.bz,1e-8,C.a9,new M.es(this,a),4,0,0,C.f,!1,0.01,!1,0.000001,4,r,r,r,C.b,r,r,r,r,r)
s.P(C.b,r,r)
s.Z(r,0,!1,r,!1,0.01,C.f,0,r,4,0.000001)
s.aW(C.h)
return s}}
M.es.prototype={
$1:function(a){H.a4(a)
return this.a.cu(new Y.b(a,this.b.$1(a),0))},
$S:13}
M.bf.prototype={
gaA:function(){var s=this.bE
return s==null?H.c(H.e("xAxis")):s},
gaB:function(){var s=this.bF
return s==null?H.c(H.e("yAxis")):s},
dw:function(a,b,c,d,e,f,g,h){var s=this
s.bE=s.ec(e,d,s.bC.as(s.geg()))
s.bF=s.ec(h,g,s.bD.as(s.geh()))
s.gaB().cT(0,-1.5707963267948966,C.c,C.k)
s.bG=V.f5(H.a([s.gaA(),s.gaB()],t.U))
s.S(t.a.a(H.a([s.gaA(),s.gaB()],t.r)))
s.a7(s.bA)},
ec:function(b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=C.a.a1(H.a([c1,this.bB,this.gef()],t.f_),new M.el()),b8=b7.a
if(b8==null)b8=C.w
s=b7.e
if(s==null)s=1
r=b7.f
r=r!==!1
q=b7.r
if(q==null)q=0.1
p=b7.x
if(p==null)p=1
o=b7.y
n=b7.z
if(n==null)n=H.a([0],t.n)
m=b7.Q
l=b7.ch
k=b7.cx
if(k==null)k=2
j=b7.cy
if(j==null)j=0
i=b7.db
if(i==null)i=0.75
h=b7.d
if(h==null)h=C.r
g=b7.dx
if(g==null)g=0.25
f=b7.b
f=f!==!1
e=b7.dy
if(e==null)e=0.25
d=b7.fr
if(d==null)d=0.25
c=b7.fx
b=b7.c
a=b7.fy
if(a==null)a=4
a0=N.aG(b6,0,C.b,b6,0)
q=new M.bz(b9,c0,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,b6,b6,0,b6,C.l,C.y,0.35,C.k,a0,b6,b6,a,0,0,C.f,!1,0.01,!1,0.000001,4,b6,b6,b6,C.b,b6,b6,b6,b6,b6)
q.P(C.b,b6,b6)
q.Z(b6,0,!1,b8,!1,0.01,C.f,0,b8,a,0.000001)
q.Y(C.b)
d=Math.max(e,d)
q.r1=d
if(f)q.aj=q.aj+d/2
q.W=C.l.t(0,s).t(0,b9)
b8=C.l.t(0,s).t(0,q.aj)
q.a_=b8
q.bg(q.W,b8)
q.a7(q.cN(j).t(0,-1))
if(q.bH==null)q.bH=p*C.d.e7(b9/p)
if(f){a1=q.r1
a2=q.d1()
a3=N.bC(a0)
b8=a3.a
b8=b8==null?b6:J.bd(b8)
if(b8!==!1)a3=a3.i3(a2.j())
b8=a3.b
b8=b8==null?b6:J.bd(b8)
if(b8!==!1)a3=a3.i4(a2.j())
a4=Z.ll(3.141592653589793,C.k).ab(0)
b8=a4.length
if(0>=b8)return H.k(a4,0)
a5=a4[0]
if(1>=b8)return H.k(a4,1)
a6=a4[1]
if(2>=b8)return H.k(a4,2)
a7=a4[2]
if(3>=b8)return H.k(a4,3)
a8=a4[3]
b8=a6*0
s=a7*0
a9=a8+b8-s
p=a8*0
o=a5*0
b0=p+a7-o
b1=p+o-a6
o=-a5
b2=o-b8-s
s=-a7
b8=-a6
o=Z.l2(3,new Y.b(a9*a8+b2*o+b0*s-b1*b8,b0*a8+b2*b8+b1*o-a9*s,b1*a8+b2*s+a9*b8-b0*o))
b3=new N.bX(0,0,0,C.f,!1,0.01,!1,0.000001,4,b6,b6,b6,C.b,b6,b6,b6,b6,b6)
b3.P(C.b,b6,b6)
b3.Z(b6,0,!1,b6,!1,0.01,C.f,0,b6,0,0.000001)
b3.dA(o,b6,0,!1,b6,!1,C.f,0,b6,0)
b3.cS(0,3.141592653589793)
b3.dn(a1,!0)
b3.df(a1,!0)
b3.eD(q)
b3.c7(a3)
b4=q.a2()
b5=J.N(q.gp(q),J.z(q.gp(q))-2)
b3.cS(0,-b5.u(0,b4).b3()-J.ai(b3.gp(b3)).u(0,b3.cO(0.5)).b3()-3.141592653589793)
b3.a7(b4.u(0,J.ai(b3.gp(b3))))
q.hU(b3,C.ab)
q.x1=b3
q.S(t.a.a(H.a([b3],t.r)))}if(r)q.hb()
return q},
cu:function(a){var s,r,q,p,o,n="getStart",m=this.gaA().cN(0),l=new Y.b(m.a,m.b,m.c),k=H.a([a.a,a.b,a.c],t.n),j=this.bG
k=new A.O(H.a([k,(j==null?H.c(H.e("axes")):j).gw()],t.D),t.m)
k=k.gC(k)
j=t.f4
for(;k.k();){s=k.b
if(s==null)s=H.c(P.a9("No element"))
if(1>=s.length)return H.k(s,1)
r=j.a(s[1])
q=r.b9
p=(H.a4(s[0])-q)/(r.aj-q)+0
q=r.ry
if(q!=null){q.a3(n)
q=q.r
q=J.ai(q==null?H.c(H.e("points")):q)}else q=r.cb()
o=r.x1
if(o!=null){o.a3(n)
o=o.r
o=J.ai(o==null?H.c(H.e("points")):o)}else o=r.ca()
l=l.A(0,q.t(0,1-p).A(0,o.t(0,p)).u(0,m))}return l},
cP:function(a){return new Y.b(this.gaA().eG(a),this.gaB().eG(a),0)},
dz:function(a){var s=this
s.bE=M.hu(a.gaA())
s.bF=M.hu(a.gaB())
s.bG=V.f5(H.a([s.gaA(),s.gaB()],t.U))},
j:function(){return M.hX(this)},
gef:function(){return C.A},
geg:function(){return C.j},
geh:function(){return C.z}}
M.el.prototype={
$2:function(a,b){var s=t.dK
return s.a(a).as(s.a(b))},
$S:19}
M.co.prototype={
j:function(){return M.jS(this)},
ge3:function(){var s=this.en
return s==null?H.c(H.e("backgroundLines")):s},
gej:function(){var s=this.eo
return s==null?H.c(H.e("fadedLines")):s},
hH:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.bx==null){s=h.cA
r=t.O
q=H.a([],r)
p=H.a([],r)
o=s.b
r=J.x(o==null?H.a([],r):o)
for(;r.k();){o=r.gm()
n=o.d
p.push(new K.y(o.a,o.b,o.c,n*0.5))}h.bx=new V.b5(q,p,s.c*0.5,s.d,s.e*0.5,0,C.c)}s=h.em
m=h.d5(h.gaA(),h.gaB(),h.ek,s)
l=h.d5(h.gaB(),h.gaA(),h.el,s)
s=t.F
r=P.h(m[0],!0,s)
C.a.G(r,l[0])
s=P.h(m[1],!0,s)
C.a.G(s,l[1])
k=[r,s]
s=t.ds
h.sfO(s.a(k[0]))
h.sfP(s.a(k[1]))
j=V.f5(h.ge3())
j.c7(h.cA)
i=V.f5(h.gej())
s=h.bx
s.toString
i.c7(s)
h.hc(H.a([j,i],t.r))},
d5:function(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="getStart",e=a.a6(),d=N.i7(null,0,!1,a.a2(),null,!1,C.f,0,e,null,4),c=1+a2,b=1/c*a1
e=t.L
s=H.a([],e)
r=H.a([],e)
e=a0.b9
q=[T.dZ(a0.aj,0,b).ab(0),T.dZ(e,0,-b).ab(0)]
for(p=t.V,o=0;o<2;++o)for(n=T.bO(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,H.d)(n),++l){k=n[l]
j=N.i8(d)
i=(k.b-e)/(a0.aj-e)+0
h=a0.ry
if(h!=null){h.a3(f)
h=h.r
h=J.ai(h==null?H.c(H.e("points")):h)}else h=a0.cb()
g=a0.x1
if(g!=null){g.a3(f)
g=g.r
g=J.ai(g==null?H.c(H.e("points")):g)}else g=a0.ca()
j.a7(h.t(0,1-i).A(0,g.t(0,i)))
if(C.e.K(k.a,c)===0)C.a.B(s,j)
else C.a.B(r,j)}return H.a([s,r],t.eI)},
sfO:function(a){this.en=t.f.a(a)},
sfP:function(a){this.eo=t.f.a(a)},
gef:function(){return this.hn},
geg:function(){return this.ho},
geh:function(){return this.hp}}
M.a_.prototype={
as:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
if(a==null)a=a0.a
s=b.e
if(s==null)s=a0.e
r=b.f
if(r==null)r=a0.f
q=b.r
if(q==null)q=a0.r
p=b.x
if(p==null)p=a0.x
o=b.z
if(o==null)o=a0.z
n=b.Q
if(n==null)n=a0.Q
m=b.ch
if(m==null)m=a0.ch
l=b.cx
if(l==null)l=a0.cx
k=b.cy
if(k==null)k=a0.cy
j=b.db
if(j==null)j=a0.db
i=b.d
if(i==null)i=a0.d
h=b.dx
if(h==null)h=a0.dx
g=b.b
if(g==null)g=a0.b
f=b.dy
if(f==null)f=a0.dy
e=b.fr
if(e==null)e=a0.fr
d=b.c
if(d==null)d=a0.c
c=b.fy
if(c==null)c=a0.fy
return M.bp(a,a0.fx,d,n,r,g,i,a0.y,h,l,k,j,m,o,c,p,q,e,f,s)}}
Y.cp.prototype={
f3:function(a){var s=this.r1
if(s>0)return s
return Math.pow(10,(a===0?0:C.d.hD(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
aT:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.x1,b=H.A(c)
b=P.h(new H.aU(c,b.h("F(1)").a(new Y.eX(d)),b.h("aU<1>")),!0,t.V)
c=t.n
s=H.a([d.r2,d.rx],c)
for(r=b.length,q=d.ry,p=0;p<r;++p){o=b[p]
if(typeof o!=="number")return o.u()
C.a.G(s,H.a([o-q,o+q],c))}C.a.fg(s)
for(c=T.r(s.length/2|0,0,1),b=c.length,r=t.l,q=t.i,n=t.y,p=0;p<c.length;c.length===b||(0,H.d)(c),++p){m=c[p]
if(typeof m!=="number")return m.A()
l=C.a.i(s,m+0)
k=C.a.i(s,m+1)
j=T.dZ(k,l,d.f3(l)).ab(0)
if(!J.ah(C.a.gM(j),k))C.a.B(j,k)
i=H.a([],r)
for(h=j.length,g=0;g<j.length;j.length===h||(0,H.d)(j),++g){f=H.a4(j[g])
i.push(d.x2.$1(f))}h=H.a([],r)
for(f=i.length,g=0;g<i.length;i.length===f||(0,H.d)(i),++g){e=i[g]
l=e.a
if(!(isNaN(l)||isNaN(e.b)||isNaN(e.c))&&isFinite(l)&&isFinite(e.b)&&isFinite(e.c))h.push(e)}if(h.length!==0){i=n.a(H.a([C.a.gN(h)],r))
f=d.r
J.aH(f==null?H.c(H.e("points")):f,i)
d.ha(T.bQ(h,q))}}},
j:function(){return Y.hv(this)}}
Y.eX.prototype={
$1:function(a){var s
H.a4(a)
s=this.a
return a>=s.r2&&a<=s.rx},
$S:22}
N.cC.prototype={
eR:function(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=C.h
if(b==null)r=null
else r=b
if(r==null)r=C.h
return N.aG(C.h,this.e,s,r,this.c)},
i3:function(a){return this.eR(a,null)},
i4:function(a){return this.eR(null,a)}}
N.dE.prototype={
l:function(a){return this.b}}
N.cD.prototype={
j:function(){return N.k4(this)},
hU:function(a,b){var s=this
if(Math.sqrt(s.a6().u(0,s.a2()).al())===0)return
if(b===C.aa)s.bg(a.cO(0.5),s.a2())
else s.bg(s.a6(),a.cO(0.5))},
au:function(a,b){this.dk(a,!1)
this.dd(C.h,!1)
this.fw(a,!0)},
Y:function(a){return this.au(a,!0)},
a2:function(){var s=this.x1
if(s!=null){s.a3("getStart")
s=J.ai(s.gp(s))}else s=this.ca()
return s},
a6:function(){var s=this.ry
if(s!=null){s.a3("getStart")
s=J.ai(s.gp(s))}else s=this.cb()
return s}}
N.bV.prototype={
j:function(){return N.jr(this)},
aT:function(){var s=this
s.f8()
s.c2(0,s.W,C.c)
s.a7(s.a_)},
f8:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.aa,r=j.ai,q=j.aP,s=T.e_(q,r+s,s).ab(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.d)(s),++o){n=s[o]
h.push(C.l.t(0,Math.cos(n)).A(0,C.q.t(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.d)(h),++o){n=h[o]
s.push(new Y.b(-n.b,n.a,n.c))}p=H.a([],i)
for(m=T.r(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.d)(m),++o){k=m[o]
p.push(C.a.i(h,k).A(0,C.a.i(s,k).t(0,q)))}i=H.a([],i)
for(r=T.r(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.d)(r),++o){k=r[o]
i.push(C.a.i(h,k).u(0,C.a.i(s,k).t(0,q)))}s=t.i
j.c3(T.j7(h,s),p,i,T.bQ(h,s))}}
N.br.prototype={
j:function(){return N.jy(this)}}
N.c5.prototype={
j:function(){return N.i2(this)}}
N.X.prototype={
j:function(){return N.i8(this)},
aT:function(){var s=this
s.dg(H.a([s.W,s.a_],t.l))
s.h9()},
h9:function(){var s,r,q=this,p=q.aa
if(p===0)return
s=Math.sqrt(q.a6().u(0,q.a2()).al())
if(s<2*p)return
r=p/s
q.be(q,r,1-r)},
bg:function(a,b){var s=this
if(s.a6().J(0,s.a2())){s.W=a
s.a_=b
s.aT()}return s.ft(a,b)}}
N.cq.prototype={
dA:function(a,b,c,d,e,f,g,h,i,j){var s=P.h(a,!0,t.i)
s.push(C.a.gN(a))
this.dg(s)},
j:function(){return N.jT(this)}}
N.cu.prototype={
j:function(){return N.jY(this)}}
N.cF.prototype={
j:function(){return N.k6(this)}}
N.bX.prototype={
j:function(){return N.am(this)}}
N.ct.prototype={
fD:function(a,b,c,d,e,f,g,h,i,j){this.dn(j,!0)
this.df(d,!0)},
j:function(){return N.jX(this)}}
T.cB.prototype={
j:function(){return T.k2(this)}}
M.b3.prototype={
j:function(){return M.k3(this)},
aV:function(a,b,c,d){this.y*=b
this.fu(0,b,c,d)},
c2:function(a,b,c){return this.aV(a,b,C.c,c)}}
R.dm.prototype={
fC:function(a){this.S(t.a.a(H.a([this.x],t.r)))
this.cr()},
cp:function(a,b,c,d){var s,r
H.fX(d,t.e,"IEvent","addEventListener")
s=new O.a0(d.h("F(0)").a(c),b,d.h("a0<0>"))
r=$.bR()
t.gc.a(s)
r=r.gaH().i(0,b)
r.toString
C.a.B(r,s)
return s}}
R.c6.prototype={
cr:function(){var s=this
s.sfJ(t.gl.a(s.cp(0,C.p,new R.eu(s),t.E)))
s.sfK(t.c3.a(s.cp(0,C.n,new R.ev(s),t.N)))
s.sfL(t.eL.a(s.cp(0,C.o,new R.ew(s),t.J)))},
j:function(){return R.jF(this)},
sfJ:function(a){this.dx=t.g7.a(a)},
sfK:function(a){this.dy=t.em.a(a)},
sfL:function(a){this.fr=t.ga.a(a)}}
R.eu.prototype={
$1:function(a){var s
t.E.a(a)
s=this.a
if(s.fx){s.x.aJ(a.c)
return!0}return!1},
$S:23}
R.ev.prototype={
$1:function(a){var s,r=this.a,q=r.x,p=t.N.a(a).c,o=p.a
if(o>=q.T(C.y).a-0.1)if(o<=q.T(C.l).a+0.1){o=p.b
o=o>=q.T(C.r).b-0.1&&o<=q.T(C.q).b+0.1
s=o}else s=!1
else s=!1
if(s){r.fx=!0
q.aJ(p)
return!0}return!1},
$S:24}
R.ew.prototype={
$1:function(a){t.J.a(a)
return this.a.fx=!1},
$S:25}
M.q.prototype={
gF:function(a){var s=this.a
return s},
gH:function(a){var s=this.b
return s==null?H.c(H.e("name")):s},
gw:function(){var s=this.d
return s==null?H.c(H.e("submobjects")):s},
gbQ:function(){var s=this.e
if(s==null){s=H.a([],t.eM)
this.sfN(s)}return s},
gI:function(){var s=this.f
return s==null?H.c(H.e("updatingSuspended")):s},
gp:function(a){var s=this.r
return s==null?H.c(H.e("points")):s},
P:function(a,b,c){var s=this,r=s.ad()
s.b=r
s.saM(t.a.a(H.a([],t.r)))
s.f=!1
s.sU(t.y.a(H.a([],t.l)))
s.aT()
s.ey()},
l:function(a){return this.ad()},
ad:function(){var s=this.dv(0),r=P.ic("^Instance of '(.*?)'$").ev(s).b
if(1>=r.length)return H.k(r,1)
r=r[1]
r.toString
return r},
ey:function(){},
aT:function(){},
S:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.ah(a,this))throw H.f("Mobject can't contain itself")
s=P.h(a,!0,t.j)
for(r=this.gw(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
if(!C.a.ah(a,o))s.push(o)}this.saM(n.a(s))},
hc:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.ah(a,this))throw H.f("Mobject can't contain itself")
s=H.a([],t.r)
for(r=this.gw(),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p){o=r[p]
if(!C.a.ah(a,o))s.push(o)}C.a.G(s,a)
this.saM(n.a(s))},
b5:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.T(a)
for(s=this.bl(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.x(l==null?H.c(H.e("points")):l)
for(;l.k();)m.push(J.d5(c.$1(l.gm().u(0,b)),b))
n.sU(q.a(m))}},
hf:function(a){return this.b5(C.c,null,a)},
j:function(){return M.jR(this)},
eQ:function(a,b){var s,r,q,p=this
if(p.gI())return
for(s=p.gbQ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].$2(p,a)
for(s=p.gw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].eQ(a,!0)},
cY:function(a){return this.eQ(a,!0)},
b1:function(a){t.he.a(a)
C.a.B(this.gbQ(),a)
this.cY(0)},
hR:function(a){t.he.a(a)
for(;C.a.ah(this.gbQ(),a);)C.a.eJ(this.gbQ(),a)},
a7:function(a){return this.hf(new M.eS(a))},
aV:function(a,b,c,d){return this.b5(c,d,new M.eR(b))},
c2:function(a,b,c){return this.aV(a,b,C.c,c)},
d9:function(a,b){return this.aV(a,b,C.c,null)},
cT:function(a,b,c,d){this.b5(C.c,c,new M.eQ(Z.ln(b,d).geP()))},
cS:function(a,b){return this.cT(a,b,null,C.k)},
hW:function(a,b,c){return this.cT(a,b,c,C.k)},
fi:function(a,b,c,d){return this.b5(c,d,new M.eT(b,a))},
dZ:function(a,b){this.a7(a.ds(0).t(0,new Y.b(7.111111111111111,4,0)).u(0,this.T(a)).u(0,a.t(0,b)).t(0,a.ds(0).h8(0)))},
eF:function(a,b){this.a7(a.T(C.c.A(0,b)).u(0,this.T(C.c.u(0,b))).A(0,b.t(0,0.5)).t(0,C.ad))
return null},
eK:function(a,b,c,d,e){var s=this.cK(b)
if(s===0)return
this.fi(a/s,b,c,d)},
dn:function(a,b){this.eK(a,0,C.c,null,!0)},
df:function(a,b){this.eK(a,1,C.c,null,!0)},
aJ:function(a){this.a7(a.u(0,this.T(C.c)).t(0,new Y.b(1,1,1)))},
bg:function(a,b){var s,r=this,q=r.a6(),p=r.a2(),o=p.u(0,q)
if(q.J(0,p))throw H.f("Cannot position endpoints of a closed loop")
s=b.u(0,a)
r.c2(0,Math.sqrt(s.al())/Math.sqrt(o.al()),q)
r.hW(0,s.b3()-o.b3(),q)
r.a7(a.u(0,q))},
au:function(a,b){var s,r,q
for(s=this.gw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].au(a,!0)
this.a=a},
Y:function(a){return this.au(a,!0)},
b8:function(a,b){var s,r,q
for(s=this.gw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].b8(a,!0)},
cz:function(a){return this.b8(a,!0)},
at:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)C.a.G(o,s[q].at())
p=P.ht(o,t.j)
return P.h(p,!0,H.E(p).c)},
bl:function(){var s=this.at(),r=H.A(s),q=r.h("aU<1>")
return P.h(new H.aU(s,r.h("F(1)").a(new M.eO()),q),!0,q.h("o.E"))},
bU:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.bl(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q].r
C.a.G(o,p==null?H.c(H.e("points")):p)}return o},
bZ:function(){return this.bU()},
bk:function(a,b,c){var s,r,q
t.bG.a(c)
if(c==null)c=this.bZ()
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.d)(c),++q)s.push(c[q].ac(a))
if(b<0)return C.a.a1(s,C.B)
else if(b===0)return(C.a.a1(s,C.B)+C.a.a1(s,C.u))/2
else return C.a.a1(s,C.u)},
bj:function(a,b){return this.bk(a,b,null)},
T:function(a){var s=this,r=s.bZ()
if(r.length===0)return C.c
return new Y.b(s.bk(0,C.d.a4(a.a),r),s.bk(1,C.d.a4(a.b),r),s.bk(2,C.d.a4(a.c),r))},
eW:function(){return C.a.a1(this.bU(),new M.eN()).a5(0,J.z(this.gp(this)))},
cK:function(a){var s=this.bU(),r=H.A(s),q=new H.L(s,r.h("i(1)").a(new M.eP(a)),r.h("L<1,i>")),p=q.a1(0,C.B)
return q.a1(0,C.u)-p},
bV:function(a,b){return this.bj(a,C.d.a4(C.c.ac(a)))},
f1:function(){return new Y.b(this.bV(0,null),this.bV(1,null),this.bV(2,null))},
a6:function(){this.a3("getStart")
return J.ai(this.gp(this))},
a2:function(){this.a3("getEnd")
return J.be(this.gp(this))},
gn:function(a){return this.bm(0).length},
bm:function(a){var s=this,r=H.a([],t.r)
if(J.d6(s.gp(s)))r.push(s)
C.a.G(r,s.gw())
return r},
cq:function(a){var s,r,q,p,o,n,m=this
if(J.bd(m.gp(m))&&J.d6(a.gp(a)))a.eH()
if(J.bd(a.gp(a))&&J.d6(m.gp(m)))m.eH()
s=m.bm(0).length
r=a.bm(0).length
m.dY(Math.max(0,r-s))
a.dY(Math.max(0,s-r))
m.e_(a)
for(q=new A.O(H.a([m.gw(),a.gw()],t.Z),t.Q),q=q.gC(q);q.k();){p=q.b
if(p==null)p=H.c(P.a9("No element"))
o=p.length
if(0>=o)return H.k(p,0)
n=p[0]
if(1>=o)return H.k(p,1)
n.cq(p[1])}},
d6:function(){throw H.f("getPointMobject not implemented for "+H.v(this.gf0())+"()")},
e_:function(a){var s=this,r=J.z(s.gp(s)),q=J.z(a.gp(a))
if(r<q)s.e0(a)
else if(r>q)a.e0(s)},
e0:function(a){throw H.f("Not implemented")},
eH:function(){var s=this.j(),r=t.r,q=t.a
s.saM(q.a(H.a([],r)))
this.sU(t.y.a(H.a([],t.l)))
this.S(q.a(H.a([s],r)))},
dY:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.bm(0).length
if(s===0){r=H.a([],t.r)
for(q=T.r(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.d)(q),++o)r.push(a1.d6())
a1.saM(t.a.a(r))}n=s+a2
r=t.t
q=H.a([],r)
for(p=T.r(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.d)(p),++o){l=p[o]
if(typeof l!=="number")return l.t()
q.push(C.d.av(l*s,n))}p=H.a([],r)
for(m=T.r(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.d)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.aX(i),e=0;e<q.length;q.length===g||(0,H.d)(q),++e)if(f.J(i,q[e]))h.push(1)
else h.push(0)
p.push(T.hi(h,j))}d=H.a([],t.r)
for(r=new A.O(H.a([a1.gw(),p],t.D),t.m),r=r.gC(r),q=t.j;r.k();){c=r.b
if(c==null)c=H.c(P.a9("No element"))
p=c.length
if(0>=p)return H.k(c,0)
b=q.a(c[0])
if(1>=p)return H.k(c,1)
a=H.V(c[1])
C.a.B(d,b)
for(p=T.r(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.d)(p),++o){a0=b.j()
a0.cz(1)
C.a.B(d,a0)}}a1.saM(t.a.a(d))},
cI:function(a,b,c){},
be:function(a,b,c){},
e5:function(a){var s,r,q,p,o,n,m
this.cq(a)
for(s=new A.O(H.a([this.at(),a.at()],t.Z),t.Q),s=s.gC(s),r=t.i,q=t.y;s.k();){p=s.b
if(p==null)p=H.c(P.a9("No element"))
o=p.length
if(0>=o)return H.k(p,0)
n=p[0]
if(1>=o)return H.k(p,1)
m=p[1]
o=m.r
n.sU(q.a(P.h(o==null?H.c(H.e("points")):o,!0,r)))
n.cI(n,m,1)}},
a3:function(a){var s
if(J.d6(this.gp(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.f(s)},
saM:function(a){this.d=t.hh.a(a)},
sfN:function(a){this.e=t.cI.a(a)},
sU:function(a){this.r=t.bG.a(a)}}
M.eS.prototype={
$1:function(a){return a.A(0,this.a)},
$S:2}
M.eR.prototype={
$1:function(a){return a.t(0,this.a)},
$S:2}
M.eQ.prototype={
$1:function(a){return a.ay(this.a)},
$S:2}
M.eT.prototype={
$1:function(a){var s=this.a
return a.i5(s,a.ac(s)*this.b)},
$S:2}
M.eO.prototype={
$1:function(a){t.j.a(a)
return J.z(a.gp(a))>0},
$S:9}
M.eN.prototype={
$2:function(a,b){var s=t.i
return s.a(a).A(0,s.a(b))},
$S:14}
M.eP.prototype={
$1:function(a){return t.i.a(a).ac(this.a)},
$S:30}
M.bu.prototype={
j:function(){return M.jH(this)}}
V.B.prototype={
Z:function(a,b,c,d,e,f,g,h,i,j,k){if(d!=null)this.saw(H.a([d],t.O))
if(i!=null)this.saq(H.a([i],t.O))
if(a!=null)this.saF(H.a([a],t.O))},
j:function(){return V.k9(this)},
ey:function(){var s=this,r=s.dy
s.f7(r==null?H.a([s.gF(s)],t.O):r)
r=s.fr
if(r==null)r=H.a([s.gF(s)],t.O)
s.fc(r,s.x)
s.f6(s.fx,s.y)
r=s.z
s.fa(s.Q,r)},
aX:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.G(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.aU(),p=q.length,o=0;o<q.length;q.length===p||(0,H.d)(q),++o)q[o].de(r,!1)
if(r.length!==0){if(n.dy==null)n.saw(r)
q=n.dy
q.toString
q=J.z(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.saw(T.bo(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.z(q)){q=n.dy
q.toString
n.saw(T.bo(r,J.z(q),t.G))}}s=H.a([],s)
q=n.dy
q.toString
q=T.r(J.z(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.d)(q),++o)s.push(C.a.i(r,q[o]))
n.saw(s)}},
dd:function(a,b){return this.aX(a,null,b)},
de:function(a,b){return this.aX(null,a,b)},
aW:function(a){return this.aX(a,null,!0)},
f7:function(a){return this.aX(null,a,!0)},
ap:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.G(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.aU(),p=q.length,o=0;o<q.length;q.length===p||(0,H.d)(q),++o)q[o].fd(a,r,!1,e)
if(r.length!==0)if(a){if(n.fx==null)n.saF(r)
q=n.fx
q.toString
q=J.z(q)
p=r.length
if(q<p){q=n.fx
q.toString
n.saF(T.bo(q,p,t.G))}else{q=n.fx
q.toString
if(p<J.z(q)){q=n.fx
q.toString
n.saF(T.bo(r,J.z(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.r(J.z(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.d)(q),++o)s.push(C.a.i(r,q[o]))
n.saq(s)}else{if(n.fr==null)n.saq(r)
q=n.fr
q.toString
q=J.z(q)
p=r.length
if(q<p){q=n.fr
q.toString
n.saq(T.bo(q,p,t.G))}else{q=n.fr
q.toString
if(p<J.z(q)){q=n.fr
q.toString
n.saq(T.bo(r,J.z(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.r(J.z(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.d)(q),++o)s.push(C.a.i(r,q[o]))
n.saq(s)}if(e!=null)if(a)n.y=e
else n.x=e},
di:function(a){return this.ap(!1,a,null,!0,null)},
dk:function(a,b){return this.ap(!1,a,null,b,null)},
fd:function(a,b,c,d){return this.ap(a,null,b,c,d)},
c6:function(a,b){return this.ap(!1,null,a,b,null)},
dl:function(a,b){return this.ap(!1,a,null,!0,b)},
fc:function(a,b){return this.ap(!1,null,a,!0,b)},
dj:function(a){return this.ap(!1,null,null,!0,a)},
c4:function(a,b,c,d){return this.ap(!0,a,t.x.a(b),c,d)},
f5:function(a,b){return this.c4(null,a,b,null)},
f6:function(a,b){return this.c4(null,a,!0,b)},
dm:function(a,b){var s=this,r=null,q=t.x,p=q.a(a.d),o=q.a(a.a)
q=q.a(a.b)
s.aX(r,o,b)
s.ap(!1,r,q,b,r)
s.c4(r,p,b,r)
s.c5(a.r,a.f,b)
return r},
c7:function(a){return this.dm(a,!0)},
d1:function(){var s=J.N(this.aC(),0)
return s},
au:function(a,b){this.dd(a,!0)
this.dk(a,!0)
this.fv(a,!0)},
Y:function(a){return this.au(a,!0)},
cM:function(a,b){var s,r,q,p="removeWhere",o=a.aC(),n=a.aD(),m=a.x,l=a.am(!0),k=a.y,j=a.z,i=a.Q
this.dm(new V.b5(o,n,m,l,k,j,new Y.b(i.a,i.b,i.c)),!1)
if(b){s=this.gw()
r=a.gw()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
o=H.A(s).h("F(1)").a(new V.fg())
if(!!s.fixed$length)H.c(P.af(p))
C.a.dU(s,o,!0)
o=H.A(r).h("F(1)").a(new V.fh())
if(!!r.fixed$length)H.c(P.af(p))
C.a.dU(r,o,!0)
for(o=t.j,o=T.lj(s,r,o,o),o=P.dr([o.a,o.b],!1,t.z),o=new A.O(new H.a5(o,H.A(o).h("a5<1,j<B>>")),t.eX),o=o.gC(o);o.k();){q=o.b
if(q==null)q=H.c(P.a9("No element"))
n=q.length
if(0>=n)return H.k(q,0)
m=q[0]
if(1>=n)return H.k(q,1)
m.cM(q[1],!0)}}},
eD:function(a){return this.cM(a,!0)},
b8:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.x(p.aC());s.k();){r=s.gm()
q=r.d
m.push(new K.y(r.a,r.b,r.c,q*o))}p.de(m,!0)
m=H.a([],n)
for(s=J.x(p.aD());s.k();){r=s.gm()
q=r.d
m.push(new K.y(r.a,r.b,r.c,q*o))}p.c6(m,!0)
n=H.a([],n)
for(m=J.x(p.am(!0));m.k();){s=m.gm()
r=s.d
n.push(new K.y(s.a,s.b,s.c,r*o))}p.f5(n,!0)
p.fs(a,!0)},
cz:function(a){return this.b8(a,!0)},
aC:function(){var s=this.dy
return s==null?H.a([C.h],t.O):s},
am:function(a){var s=a?this.fx:this.fr
return s==null||J.bd(s)?H.a([C.h],t.O):s},
aD:function(){return this.am(!1)},
fb:function(a,b){this.Q=new Y.b(a.a,a.b,a.c)},
c5:function(a,b,c){var s,r,q,p,o=this
H.a4(b)
if(c){for(s=o.gw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
if(p instanceof V.B)p.c5(a,b,!0)}c=!0}o.z=b
if(a!=null)o.fb(a,!1)
if(b!==0){o.c6(o.aD(),c)
o.c6(o.aD(),c)}},
fa:function(a,b){return this.c5(a,b,!0)},
f_:function(){var s,r,q,p,o,n,m,l=this.Q,k=l.a,j=l.b
l=l.c
s=this.T(C.c)
r=H.a([],t.b)
for(q=[C.l,C.q,C.k],p=t.n,o=0;o<3;++o){n=this.T(q[o]).u(0,s)
r.push(H.a([n.a,n.b,n.c],p))}m=new Y.b(k,j,l).ay(Z.Y(null,r).geP())
return new S.u(s.u(0,m),s.A(0,m),t.hd)},
c3:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.dx
r=a.length
q=H.a([],t.l)
for(r=T.r(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.d)(r),++o)q.push(C.c)
g.sU(f.a(q))
n=H.a([a,b,c,d],t.h)
for(f=T.r(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.d)(f),++o){m=f[o]
l=C.a.i(n,m)
p=g.r
for(p=T.bO(T.r(J.z(p==null?H.c(H.e("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.d)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.c(H.e("points"))
J.e2(h,i.b,l[C.e.K(i.a,l.length)])}}},
dX:function(a){var s,r,q,p,o,n,m=this,l=m.dx,k=[]
for(s=T.e_(l,1,0).cG(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=m.r
k.push(J.be(o==null?H.c(H.e("points")):o).t(0,1-p).A(0,a.t(0,p)))}s=k.length
if(1>=s)return H.k(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.k(k,2)
n=r.a(k[2])
if(3>=s)return H.k(k,3)
k=r.a(k[3])
m.a3("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.e.K(J.z(m.gp(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.aH(m.gp(m),k)}else{k=r.a(H.a([J.be(m.gp(m)),o,n,k],s))
J.aH(m.gp(m),k)}return null},
ha:function(a){var s,r
t.y.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.d)(a),++r)this.dX(a[r])},
dg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=T.e_(this.dx,1,0).ab(0)
r=t.i
q=Z.e8(T.bQ(a,r))
p=Z.e8(T.j7(a,r))
r=H.a([],t.aM)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.d)(s),++n){m=s[n]
r.push(p.t(0,1-m).A(0,q.t(0,m)))}o=H.a([],t.h)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.d)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.d)(h),++f){e=h[f]
d=J.Z(e)
i.push(new Y.b(d.i(e,0),d.i(e,1),d.i(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.k(o,0)
l=o[0]
if(1>=r)return H.k(o,1)
k=o[1]
if(2>=r)return H.k(o,2)
i=o[2]
if(3>=r)return H.k(o,3)
this.c3(l,k,i,o[3])},
hj:function(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="No element",a9=this.dx
for(s=this.aU(),r=s.length,q=t.y,p=t.i,o=t.l,n=t.h,m=t.eR,l=b0==="smooth",k=0;k<s.length;s.length===r||(0,H.d)(s),++k){j=s[k]
i=j.r
h=j.c1(P.h(i==null?H.c(H.e("points")):i,!0,p))
j.sU(q.a(H.a([],o)))
for(i=h.length,g=0;g<h.length;h.length===i||(0,H.d)(h),++g){f=h[g]
e=P.h(F.bx(f,new V.fa(a9),p),!0,p)
e.push(C.a.gM(f))
if(l){d=V.l9(e)
c=d.a
b=d.b}else{a=P.h(e,!0,p)
if(0>=a.length)return H.k(a,-1)
a.pop()
a0=T.bQ(e,p)
e=H.a([],o)
for(a1=new A.O(H.a([a,a0],n),m),a1=a1.gC(a1);a1.k();){a2=a1.b
if(a2==null)a2=H.c(P.a9(a8))
a3=a2.length
if(0>=a3)return H.k(a2,0)
a4=a2[0]
if(1>=a3)return H.k(a2,1)
a3=a2[1]
e.push(p.a(J.d5(J.aD(a4,0.6666666666666667),J.aD(a3,0.3333333333333333))))}a1=H.a([],o)
for(a=new A.O(H.a([a,a0],n),m),a=a.gC(a);a.k();){a2=a.b
if(a2==null)a2=H.c(P.a9(a8))
a3=a2.length
if(0>=a3)return H.k(a2,0)
a4=a2[0]
if(1>=a3)return H.k(a2,1)
a3=a2[1]
a1.push(p.a(J.d5(J.aD(a4,0.33333333333333337),J.aD(a3,0.6666666666666666))))}b=a1
c=e}e=H.a([],o)
for(a=T.bO(f,p),a1=a.length,a3=J.Z(b),a5=0;a5<a.length;a.length===a1||(0,H.d)(a),++a5){a6=a[a5]
a4=a6.a
if(typeof a4!=="number")return a4.K()
a7=C.e.K(a4,a9)
if(a7===1){if(a4<0||a4>=c.length)return H.k(c,a4)
e.push(c[a4])}else if(a7===2)e.push(a3.i(b,a4))
else e.push(a6.b)}q.a(e)
a=this.r
J.aH(a==null?H.c(H.e("points")):a,e)}}},
da:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(s=this.aU(),r=s.length,q=t.l,p=t.n,o=t.b,n=this.dx,m=0;m<s.length;s.length===r||(0,H.d)(s),++m){l=s[m]
k=l.r
if(J.z(k==null?H.c(H.e("points")):k)<n)continue
j=l.eU()
k=H.a([],o)
if(0>=j.length)return H.k(j,0)
i=j[0]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.d)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}e=Z.Y(a4,k)
k=H.a([],o)
if(1>=j.length)return H.k(j,1)
i=j[1]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.d)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}d=Z.Y(a4,k)
k=H.a([],o)
if(2>=j.length)return H.k(j,2)
i=j[2]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.d)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}c=Z.Y(a4,k)
k=H.a([],o)
if(3>=j.length)return H.k(j,3)
i=j[3]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.d)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}b=Z.Y(a4,k)
a=d.u(0,e)
a0=c.u(0,b)
k=H.a([],q)
i=a.b
i=e.A(0,Z.at(a5,i==null?H.c(H.e("shape")):i).t(0,a)).a
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.d)(i),++g){a1=i[g]
a2=J.Z(a1)
k.push(new Y.b(a2.i(a1,0),a2.i(a1,1),a2.i(a1,2)))}i=H.a([],q)
h=a0.b
h=b.A(0,Z.at(a5,h==null?H.c(H.e("shape")):h).t(0,a0)).a
a2=h.length
g=0
for(;g<h.length;h.length===a2||(0,H.d)(h),++g){a1=h[g]
a3=J.Z(a1)
i.push(new Y.b(a3.i(a1,0),a3.i(a1,1),a3.i(a1,2)))}h=j.length
if(0>=h)return H.k(j,0)
a2=j[0]
if(3>=h)return H.k(j,3)
l.c3(a2,k,i,j[3])}},
ct:function(a,b){var s=this.db,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
hk:function(a,b){var s
if(!this.ct(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.db+0.00001*Math.abs(s))return!1
return!0},
bT:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.bx(a,new V.fb(l,C.e.K(J.z(a),this.dx)),t.i)
l.a=P.h(s,!0,s.$ti.h("o.E"))
s=H.a([],t.dm)
for(r=T.r(J.z(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.d)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.A()
s.push(new S.bD(J.N(m,n+0),J.N(l.a,n+1),J.N(l.a,n+2),J.N(l.a,n+3),p))}return s},
dQ:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.dx
r=T.r(a.length,s,s)
q=H.A(r)
q=P.h(new H.aU(r,q.h("F(1)").a(b),q.h("aU<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.t)
C.a.G(r,q)
p=H.a([],t.h)
for(r=new A.O(H.a([r,q],t.gL),t.eN),r=r.gC(r),q=H.A(a),o=q.c,q=q.h("ak<1>");r.k();){n=r.b
if(n==null)n=H.c(P.a9("No element"))
if(1>=n.length)return H.k(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.u()
if(typeof l!=="number")return H.aY(l)
if(m-l>=s){H.V(l)
H.V(m)
P.cs(l,m,a.length)
k=new H.ak(a,l,m,q)
k.bn(a,l,m,o)
p.push(k.R(0))}}return p},
c1:function(a){t.y.a(a)
return this.dQ(a,new V.fd(this,a))},
f4:function(a){t.y.a(a)
return this.dQ(a,new V.fc(this,a))},
cO:function(a){var s=this,r=s.dx,q=V.hO(0,C.e.av(J.z(s.gp(s)),r),a),p=q.a
return V.hI(J.hU(s.gp(s),r*p,r*(p+1)).R(0)).$1(q.b)},
eU:function(){var s,r,q,p=H.a([],t.h)
for(s=T.r(this.dx,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)p.push(this.ck(s[q]))
return p},
ck:function(a){var s=F.bx(this.gp(this),new V.f6(this,a),t.i)
return P.h(s,!0,s.$ti.h("o.E"))},
d0:function(){var s,r=this
if(J.z(r.gp(r))===1)return r.gp(r)
s=t.eR
s=A.i3(P.h(new A.O(H.a([r.ck(0),r.ck(r.dx-1)],t.h),s),!0,s.h("o.E")),t.i)
return P.h(s,!0,s.$ti.h("o.E"))},
bZ:function(){var s,r,q,p=H.a([],t.l)
for(s=this.aU(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)C.a.G(p,s[q].d0())
return p},
e_:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.R.a(a2)
a0.hd(a2)
if(J.z(a0.gp(a0))===J.z(a2.gp(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.bd(n==null?H.c(H.e(a1)):n)){n=q.a(H.a([o.T(C.c)],r))
m=o.r
J.aH(m==null?H.c(H.e(a1)):m,n)}n=o.r
if(C.e.K(J.z(n==null?H.c(H.e(a1)):n),o.dx)===1){n=o.r
o.dX(J.be(n==null?H.c(H.e(a1)):n))}}s=t.i
l=a0.c1(P.h(a0.gp(a0),!0,s))
k=a2.c1(P.h(a2.gp(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.dx
f=new V.f9(g)
for(s=T.r(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.d)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.ac(c)
m=J.ac(d)
b=Math.max(0,C.e.av(n.gn(c)-m.gn(d),g))
a=Math.max(0,C.e.av(m.gn(d)-n.gn(c),g))
d=a0.ez(b,d)
c=a0.ez(a,c)
C.a.G(i,d)
C.a.G(h,c)}a0.sU(q.a(i))
a2.sU(q.a(h))},
ez:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=T.r(this.dx*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)C.a.G(s,a8)
return s}o=this.bT(a8)
n=o.length
m=n+a7
s=t.t
r=H.a([],s)
for(q=T.r(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.d)(q),++p){k=q[p]
if(typeof k!=="number")return k.t()
r.push(C.d.av(k*n,m))}q=H.a([],s)
for(l=T.r(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.d)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.aX(k),e=0;e<r.length;r.length===g||(0,H.d)(r),++e)h.push(f.J(k,r[e])?1:0)
q.push(T.hi(h,i))}d=H.a([],t.l)
for(s=new A.O(H.a([o,q],t.D),t.m),s=s.gC(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.k();){c=s.b
if(c==null)c=H.c(P.a9(a6))
h=c.length
if(0>=h)return H.k(c,0)
b=i.a(c[0])
if(1>=h)return H.k(c,1)
a=T.e_(H.V(c[1])+1,1,0).ab(0)
for(h=new A.O(H.a([a,T.bQ(a,r)],q),l),h=h.gC(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.k();){a2=h.b
if(a2==null)a2=H.c(P.a9(a6))
a3=P.dr([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.k(a2,0)
a5=a2[0]
if(1>=a4)return H.k(a2,1)
C.a.G(d,V.hf(new H.a5(a3,H.A(a3).h("a5<1,b>")),a5,a2[1]))}}return d},
hd:function(a){var s,r,q,p,o,n,m,l,k=new V.f7(),j=new V.f8()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.ac(o)
l=J.ac(n)
if(m.gn(o)>l.gn(n))j.$3(p,a,T.bo(n,m.gn(o),r))
else if(l.gn(n)>m.gn(o))j.$3(p,this,T.bo(o,l.gn(n),r))}},
d6:function(){var s=null,r=this.T(C.c),q=new V.cH(0.01,0.01,4,0,0,C.f,!1,0.01,!1,0.000001,4,s,s,s,C.b,s,s,s,s,s)
q.P(C.b,s,s)
q.Z(s,0,!1,C.b,!1,0.01,C.f,0,C.b,4,0.000001)
q.sU(t.y.a(H.a([r],t.l)))
q.eD(this)
return q},
cI:function(a,b,c){var s,r=this,q=t.R
q.a(a)
q.a(b)
r.saw(V.hP(a.aC(),b.aC(),c))
r.saq(V.hP(a.aD(),b.aD(),c))
r.saF(V.hP(a.am(!0),b.am(!0),c))
q=t.V
r.sdu(V.hc(a.x,b.x,c,q))
r.se4(V.hc(a.y,b.y,c,q))
r.sff(V.hc(a.Q,b.Q,c,t.i))
r.sdq(V.hc(a.z,b.z,c,q))
s=new V.ff()
if(c===1){q=b.dy
r.saw(q!=null?s.$1(q):null)
q=b.fr
r.saq(q!=null?s.$1(q):null)
q=b.fx
r.saF(q!=null?s.$1(q):null)
r.sdu(b.x)
r.se4(b.y)
q=b.Q
r.Q=new Y.b(q.a,q.b,q.c)
r.sdq(b.z)}},
be:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.R.a(a)
if(b<=0&&c>=1){e.sU(t.y.a(P.h(a.gp(a),!0,t.i)))
return}s=t.y
r=a.bT(s.a(P.h(a.gp(a),!0,t.i)))
q=r.length
p=V.hO(0,q,b)
o=V.hO(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.sU(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.k(r,n)
j=J.e4(r[n])
j=s.a(V.hf(new H.a5(j,H.A(j).h("a5<1,b>")),m,k))
J.aH(e.gp(e),j)}else{if(n>>>0!==n||n>=j)return H.k(r,n)
j=J.e4(r[n])
j=s.a(V.hf(new H.a5(j,H.A(j).h("a5<1,b>")),m,1))
J.aH(e.gp(e),j)
for(j=n+1,P.cs(j,l,r.length),j=H.bB(r,j,l,H.A(r).c),i=j.$ti,j=new H.a7(j,j.gn(j),i.h("a7<D.E>")),i=i.h("D.E"),h=t.z;j.k();){g=i.a(j.d)
g=P.dr([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.a5(g,H.A(g).h("a5<1,b>")))
f=e.r
J.aH(f==null?H.c(H.e("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.k(r,l)
j=J.e4(r[l])
j=s.a(V.hf(new H.a5(j,H.A(j).h("a5<1,b>")),0,k))
J.aH(e.gp(e),j)}},
aU:function(){var s,r,q,p,o=H.a([],t.U)
for(s=this.at(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
if(p instanceof V.B)o.push(p)}return o},
sdu:function(a){this.x=H.a4(a)},
se4:function(a){this.y=H.a4(a)},
sdq:function(a){this.z=H.a4(a)},
sff:function(a){this.Q=t.i.a(a)},
saw:function(a){this.dy=t.x.a(a)},
saq:function(a){this.fr=t.x.a(a)},
saF:function(a){this.fx=t.x.a(a)}}
V.R.prototype={
$1:function(a){return t.G.a(a).j()},
$S:6}
V.S.prototype={
$1:function(a){return t.G.a(a).j()},
$S:6}
V.T.prototype={
$1:function(a){return t.G.a(a).j()},
$S:6}
V.fg.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:9}
V.fh.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.B)},
$S:9}
V.fa.prototype={
$2:function(a,b){t.i.a(b)
return C.e.K(a,this.a)===0},
$S:3}
V.fb.prototype={
$2:function(a,b){t.i.a(b)
return a<J.z(this.a.a)-this.b},
$S:3}
V.fd.prototype={
$1:function(a){var s,r,q
H.V(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.k(s,r)
r=s[r]
if(a<0||a>=q)return H.k(s,a)
return!this.a.hk(r,s[a])},
$S:15}
V.fc.prototype={
$1:function(a){var s,r,q
H.V(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.k(s,r)
r=s[r]
if(a<0||a>=q)return H.k(s,a)
return!this.a.ct(r,s[a])},
$S:15}
V.f6.prototype={
$2:function(a,b){t.i.a(b)
return C.e.K(a,this.a.dx)===this.b},
$S:3}
V.f9.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=T.r(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.d)(r),++p)s.push(C.a.gM(C.a.gM(a)))
return s}if(b<0)return H.k(a,b)
return a[b]},
$S:34}
V.f7.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.aC()
case"strokeColors":return b.aD()
case"backgroundStrokeColors":return b.am(!1)
default:throw H.f(u.c+a)}},
$S:35}
V.f8.prototype={
$3:function(a,b,c){t.W.a(c)
switch(a){case"fillColors":b.saw(c)
break
case"strokeColors":b.saq(c)
break
case"backgroundStrokeColors":b.saF(c)
break
default:throw H.f(u.c+a)}},
$S:36}
V.ff.prototype={
$1:function(a){var s=t.G
return P.h(J.p(t.W.a(a),new V.fe(),s),!0,s)},
$S:37}
V.fe.prototype={
$1:function(a){return t.G.a(a).j()},
$S:6}
V.b5.prototype={}
V.aT.prototype={
cd:function(a){var s=a==null?H.a([],t.r):a
this.S(t.a.a(s))},
j:function(){return V.k7(this)}}
V.cH.prototype={
j:function(){return V.ka(this)}}
V.c3.prototype={
fA:function(a,b,c,d){var s,r,q,p,o,n,m,l
if(c>0){s=1/c
r=s*d
q=T.e_(c+1,1,0).a5(0,1).u(0,s).A(0,r).ab(0)
p=H.a([],t.r)
for(o=q.length,n=0;n<q.length;q.length===o||(0,H.d)(q),++n){m=q[n]
if(typeof m!=="number")return m.A()
l=a.j()
l.be(a,m,m+r)
p.push(l)}this.S(t.a.a(p))}this.cM(a,!1)},
j:function(){return V.jE(this)}}
V.bU.prototype={
ga9:function(a){var s=this.d
return s==null?H.c(H.e("display")):s},
fe:function(a){this.d=a}}
Q.dd.prototype={
ga8:function(){var s=this.e
return s==null?H.c(H.e("ctx")):s},
bd:function(){var s=0,r=P.aB(t.V),q,p=this,o,n,m
var $async$bd=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.W(C.ae.ghe(m).eN(new Q.er(),t.V),$async$bd)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.az(q,r)}})
return P.aA($async$bd,r)},
cR:function(a){var s,r,q=this,p=q.ga9(q).gO(),o=q.ga9(q).b4(a)
C.m.sbI(q.ga8(),o.aS())
s=p.c
r=p.d
q.ga8().fillRect(0-s/2,0-r/2,p.c,p.d)},
hS:function(a){var s,r,q,p,o,n,m,l=this,k="ctx",j=t.y.a(P.h(a.gp(a),!0,t.i)),i=l.ga9(l).gO().eO(a,j)
if(i.length===0)return
s=a.f4(i)
for(j=s.length,r=t.O,q=0;q<s.length;s.length===j||(0,H.d)(s),++q){l.hT(a,s[q])
l.e2(a,!0)
p=a.dy
if(p==null)p=H.a([C.h],r)
if(J.z(p)>1){o=l.e
if(o==null)o=H.c(H.e(k))
C.m.sbI(o,l.ee(a,p))}else{o=l.d
if(o==null)o=H.c(H.e("display"))
n=a.dy
m=o.b4(J.N(n==null?H.a([C.h],r):n,0))
o=l.e
if(o==null)o=H.c(H.e(k))
C.m.sbI(o,m.aS())}o=l.e;(o==null?H.c(H.e(k)):o).fill()
l.e2(a,!1)
o=l.e;(o==null?H.c(H.e(k)):o).closePath()}},
hT:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.y.a(b)
i.ga8().beginPath()
s=a.bT(b)
r=J.ag(b)
q=r.gN(b)
i.ga8().moveTo(q.a,q.b)
p=a.ct(r.gN(b),r.gM(b))
for(r=s.length,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
m=n.b
l=n.c
k=n.d
j=i.e
if(j==null)j=H.c(H.e("ctx"))
j.bezierCurveTo(m.a,m.b,l.a,l.b,k.a,k.b)}if(p)i.ga8().closePath()},
ee:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.W.a(b)
s=a.f_()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.ga9(g).gO().eO(a,r)
r=g.ga8()
p=q.length
if(0>=p)return H.k(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.k(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.ac(b)
m=1/(o.gn(b)-1)
l=T.dZ(m+1,0,m).ab(0)
for(r=T.r(o.gn(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.d)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.c(H.e("display"))
h=i.b4(o.i(b,j))
p.addColorStop(C.a.i(l,j),h.aS())}return p},
e2:function(a,b){var s,r,q,p,o=this,n=b?a.y:a.x
if(n===0)return
s=a.am(b)
r=o.ga9(o).gO().c
o.ga8().lineWidth=n*0.01*(r/14.222222222222221)
r=J.ag(s)
q=r.bw(s,new Q.eq())
if(r.gX(s)||q)return
if(r.gn(s)>1)C.m.sdt(o.ga8(),o.ee(a,s))
else{p=o.ga9(o).b4(J.ai(a.am(b)))
C.m.sdt(o.ga8(),p.aS())}o.ga8().stroke()}}
Q.er.prototype={
$1:function(a){return H.fP(a)},
$S:38}
Q.eq.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:39}
N.dw.prototype={
gbc:function(){var s=this.d
return s==null?H.c(H.e("mobjects")):s},
gO:function(){var s=this.f
return s==null?H.c(H.e("camera")):s},
ga9:function(a){var s=this.x
return s==null?H.c(H.e("display")):s},
fE:function(){var s,r,q,p=this,o=document,n=o.querySelector(".canvas-container")
n.toString
s=H.a([],t.db)
r=new O.cl(0)
r.cc(0)
o=o.createElement("canvas")
t.gA.a(o)
s=new B.dc(o,n,s,C.c,C.c,r,C.c,C.c)
s.a=new Q.dd($.bR())
n.appendChild(o).toString
p.x=s
p.r=p.ga9(p).gbN()
s=p.ga9(p)
o=s.b=new R.en(14.222222222222221,s)
n=s.d
C.K.si2(n,1280)
C.K.shG(n,720)
r=s.gbN()
r.fk(s)
n=n.getContext("2d")
n.toString
r.e=n
o.d=o.c/1.7777777777777777
n=s.gbN()
r=o.c
q=o.d
n.ga8().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
s.gbN().cR(C.v)
p.f=o
new P.dR().fF(0)
p.sdD(t.a.a(H.a([],t.r)))},
bO:function(){var s=0,r=P.aB(t.z),q=1,p,o=[],n=this,m,l
var $async$bO=P.aC(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.ga9(n).cr()
q=3
s=6
return P.W(n.ag(),$async$bO)
case 6:q=1
s=5
break
case 3:q=2
l=p
H.bc(l)
throw l
s=5
break
case 2:s=1
break
case 5:n.gO().cQ(n.gbc())
n.ga9(n).i1()
return P.az(null,r)
case 1:return P.ay(p,r)}})
return P.aA($async$bO,r)},
aK:function(a){var s,r,q
for(s=this.gbc(),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)s[q].cY(a)},
S:function(a){t.a.a(a)
this.hV(a)
C.a.hK(this.gbc(),0,a)},
eL:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.h(b,!0,t.j)
C.a.G(s,r.gO().cw(b))
r.sdD(q.a(r.f2(r.gbc(),s)))},
hV:function(a){return this.eL(!0,a)},
f2:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new N.f0(s).$2(a,P.ht(b,H.A(b).c))
return s},
bM:function(a){var s=0,r=P.aB(t.z),q=this,p,o,n,m
var $async$bM=P.aC(function(b,c){if(b===1)return P.ay(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.r
s=4
return P.W((o==null?H.c(H.e("renderer")):o).bd(),$async$bM)
case 4:n=c
p+=n
o=a.a
a.aK(n)
a.bb(p/o)
q.aK(n)
o=q.f
o=(o==null?H.c(H.e("camera")):o).r.a;(o==null?H.c(H.e("renderer")):o).cR(C.v)
o=q.f
if(o==null)o=H.c(H.e("camera"))
m=q.d
o.cQ(m==null?H.c(H.e("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.az(null,r)}})
return P.aA($async$bM,r)},
a0:function(a,b){var s=0,r=P.aB(t.z),q=this,p,o
var $async$a0=P.aC(function(c,d){if(c===1)return P.ay(d,r)
while(true)switch(s){case 0:o=q.gO().cw(q.gbc())
b.b6()
p=b.r
if(!C.a.ah(o,p)){q.S(t.a.a(H.a([p],t.r)))
C.a.G(o,p.at())}s=2
return P.W(q.bM(b),$async$a0)
case 2:b.cF()
b.b7(q)
q.aK(0)
return P.az(null,r)}})
return P.aA($async$a0,r)},
bR:function(){var s=0,r=P.aB(t.z),q=this,p,o,n,m
var $async$bR=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.r
s=4
return P.W((o==null?H.c(H.e("renderer")):o).bd(),$async$bR)
case 4:n=b
p+=n
q.aK(n)
o=q.f
o=(o==null?H.c(H.e("camera")):o).r.a;(o==null?H.c(H.e("renderer")):o).cR(C.v)
o=q.f
if(o==null)o=H.c(H.e("camera"))
m=q.d
o.cQ(m==null?H.c(H.e("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.az(null,r)}})
return P.aA($async$bR,r)},
bu:function(){var s=0,r=P.aB(t.z),q=this
var $async$bu=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return P.W(q.bR(),$async$bu)
case 4:s=2
break
case 3:return P.az(null,r)}})
return P.aA($async$bu,r)},
sdD:function(a){this.d=t.hh.a(a)}}
N.f0.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.d)(a),++q){p=a[q]
if(b.ah(0,p))continue
o=p.at()
n=b.hN(0,P.ht(o,H.A(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.c(H.e("submobjects")):o,n)}else C.a.B(r,p)}},
$S:40}
T.hj.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.hh.prototype={
$1:function(a){return H.V(a)/this.a*this.b},
$S:62}
T.hk.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("F(t,0)")}}
V.h9.prototype={
$1:function(a){return t.G.a(a).R(0)},
$S:17}
V.ha.prototype={
$1:function(a){return t.G.a(a).R(0)},
$S:17}
V.hb.prototype={
$1:function(a){var s
t.H.a(a)
s=J.Z(a)
return new K.y(s.i(a,0),s.i(a,1),s.i(a,2),s.i(a,3))},
$S:43}
V.fW.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=T.bO(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.d)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.aY(m)
l.push(J.aD(n.b,Math.pow(q,p-m)*Math.pow(a,m)*X.iO(p,m,!0)))}return C.a.a1(l,new V.fV())},
$S:13}
V.fV.prototype={
$2:function(a,b){var s=t.i
return s.a(a).A(0,s.a(b))},
$S:14}
V.h4.prototype={
$5$end$start$step:function(a,b,c,d,e){var s,r,q,p,o
for(s=T.r(c==null?2*this.a:c,d,e),r=s.length,q=this.b,p=t.o,o=0;o<s.length;s.length===r||(0,H.d)(s),++o)q.aE(new S.u(b,s[o],p),a)},
$2:function(a,b){return this.$5$end$start$step(a,b,null,0,1)},
$4$start$step:function(a,b,c,d){return this.$5$end$start$step(a,b,null,c,d)},
$S:44}
V.h2.prototype={
$2:function(a,b){t.i.a(b)
return C.e.K(a,2)===0},
$S:3}
V.h3.prototype={
$2:function(a,b){t.i.a(b)
return C.e.K(a,2)===1},
$S:3}
V.h_.prototype={
$1:function(a){return J.e3(t.H.a(a),Math.max(this.a-this.b,0)).R(0)},
$S:45}
V.h1.prototype={
$2:function(a,b){var s
t.o.a(b)
s=b.a
return J.ah(s,b.b)?C.a.i(this.a,s):a},
$S:1}
K.y.prototype={
j:function(){var s=this
return new K.y(s.a,s.b,s.c,s.d)},
R:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
aS:function(){var s=this
return"rgba("+C.d.a4(s.a*255)+", "+C.d.a4(s.b*255)+", "+C.d.a4(s.c*255)+", "+H.v(s.d)+")"},
l:function(a){return this.aS()}}
S.P.prototype={
J:function(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof S.P&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s},
A:function(a,b){t.cm.a(b)
return new S.P(this.a+b.a,this.b+b.b)},
t:function(a,b){var s=this.a,r=b.a,q=this.b,p=b.b
return new S.P(s*r-q*p,s*p+q*r)}}
X.ap.prototype={
l:function(a){return this.b}}
X.ad.prototype={}
M.ex.prototype={
gaH:function(){var s=this.a
return s==null?H.c(H.e("eventListeners")):s},
fB:function(){var s,r,q=P.hs(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.q(0,C.a6[r],H.a([],s))
this.sfM(t.cH.a(q))},
aO:function(a,b,c){var s,r,q
H.fX(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.h(c.h("j<a0<0>>").a(b),!0,c.h("a0<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gM(s)
C.a.eJ(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
bv:function(a){var s,r=this
switch(a.a){case C.x:t.gt.a(a)
s=r.gaH().i(0,C.x)
s.toString
r.aO(a,s,t.e)
break
case C.n:t.N.a(a)
s=r.gaH().i(0,C.n)
s.toString
r.aO(a,s,t.e)
break
case C.o:t.J.a(a)
s=r.gaH().i(0,C.o)
s.toString
r.aO(a,s,t.e)
break
case C.p:t.E.a(a)
s=r.gaH().i(0,C.p)
s.toString
r.aO(a,s,t.e)
break
case C.D:t.fw.a(a)
s=r.gaH().i(0,C.D)
s.toString
r.aO(a,s,t.e)
break
case C.E:t.bf.a(a)
s=r.gaH().i(0,C.E)
s.toString
r.aO(a,s,t.e)
break}},
sfM:function(a){this.a=t.dC.a(a)}}
O.a0.prototype={}
O.ds.prototype={}
O.cm.prototype={}
O.aN.prototype={}
O.aO.prototype={}
O.aM.prototype={}
O.cl.prototype={
cc:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
X.fY.prototype={
$2:function(a,b){return H.V(a)*H.V(b)},
$S:18}
X.fZ.prototype={
$2:function(a,b){return H.V(a)*H.V(b)},
$S:18}
Z.as.prototype={
gL:function(a){var s=this.a
return s},
gD:function(a){var s=this.b
return s==null?H.c(H.e("shape")):s},
A:function(a,b){return this.ax(0,new Z.ee(typeof b=="number"?Z.at(b,this.gD(this)):t.A.a(b)))},
u:function(a,b){return this.ax(0,new Z.eh(typeof b=="number"?Z.at(b,this.gD(this)):t.A.a(b)))},
t:function(a,b){return this.ax(0,new Z.eg(typeof b=="number"?Z.at(b,this.gD(this)):t.A.a(b)))},
a5:function(a,b){var s=Z.at(b,this.gD(this))
return this.ax(0,new Z.ef(s))},
ax:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=T.bO(p.gL(p),t.H)
r=H.A(s)
q=r.h("L<1,j<i>>")
q=P.h(new H.L(s,r.h("j<i>(1)").a(new Z.ed(b)),q),!0,q.h("D.E"))
return Z.Y(p.gD(p),q)},
an:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gL(this)
if(s>>>0!==s||s>=r.length)return H.k(r,s)
return J.N(r[s],a.b)},
aE:function(a,b){var s,r,q,p,o=this
t.o.a(a)
s=a.a
r=o.gD(o).a
if(typeof s!=="number")return s.K()
if(typeof r!=="number")return H.aY(r)
q=C.e.K(s,r)
r=a.b
s=o.gD(o).b
if(typeof r!=="number")return r.K()
if(typeof s!=="number")return H.aY(s)
p=C.d.K(r,s)
s=o.gL(o)
if(q<0||q>=s.length)return H.k(s,q)
J.e2(s[q],p,b)},
h7:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gD(f).a
if(typeof e!=="number")return e.u()
s=f.gD(f).b
if(typeof s!=="number")return s.u()
r=H.a([],t.b)
for(q=T.r(f.gD(f).a,0,1),p=q.length,o=t.n,n=0;n<q.length;q.length===p||(0,H.d)(q),++n){m=q[n]
if(!J.ah(m,a)){l=H.a([],o)
k=f.b
k=T.r((k==null?H.c(H.e("shape")):k).a,0,1)
j=k.length
i=0
for(;i<k.length;k.length===j||(0,H.d)(k),++i){h=k[i]
if(!J.ah(h,b)){g=f.a
l.push(J.N(C.a.i(g,m),h))}}r.push(l)}}return Z.Y(new S.u(e-1,s-1,t.o),r)},
d2:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.ah(h.gD(h).a,2)){s=h.gL(h)
if(0>=s.length)return H.k(s,0)
r=J.N(s[0],0)
s=h.gL(h)
if(0>=s.length)return H.k(s,0)
q=J.N(s[0],1)
s=h.gL(h)
if(1>=s.length)return H.k(s,1)
p=J.N(s[1],0)
s=h.gL(h)
if(1>=s.length)return H.k(s,1)
return r*J.N(s[1],1)-q*p}s=h.gD(h).a
if(typeof s!=="number")return s.u()
o=h.gD(h).b
if(typeof o!=="number")return o.u()
n=new S.u(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=T.r(h.gD(h).a,0,1),m=s.length,l=0;l<s.length;s.length===m||(0,H.d)(s),++l){k=s[l]
if(typeof k!=="number")return k.K()
j=C.d.K(k,2)===0?1:-1
i=h.a
if(0>=i.length)return H.k(i,0)
o.push(j*Z.at(J.N(i[0],k),n).t(0,h.h7(0,k)).d2())}return T.hi(o,t.V)},
bX:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.d2()===0)throw H.f("This matrix is not inversible")
s=a8.gD(a8).a
r=a8.gD(a8).b
q=a8.j()
p=Z.hl(s)
for(o=T.r(r,0,1),n=o.length,m=s-1,l=r-1,k=t.o,j=0;j<o.length;o.length===n||(0,H.d)(o),++j){i=o[j]
for(h=i,g=-1,f=-1;h!==s;++h){k.a(new S.u(h,i,k))
e=q.a
if(h<0||h>=e.length)return H.k(e,h)
d=J.N(e[h],i)
if(d>f){f=d
g=h}}e=q.a
c=e.length
if(g<0||g>=c)return H.k(e,g)
b=e[g]
if(i>>>0!==i||i>=c)return H.k(e,i)
e[g]=e[i]
C.a.q(e,i,b)
e=p.a
c=e.length
if(g>=c)return H.k(e,g)
a=e[g]
if(i!==(i|0)||i>=c)return H.k(e,i)
e[g]=e[i]
C.a.q(e,i,a)
e=J.Z(b)
a0=e.i(b,i)
for(a1=i;a1<r;++a1){c=e.i(b,a1)
if(typeof c!=="number")return c.a5()
e.q(b,a1,c/a0)}for(c=J.Z(a),a1=l;a1>=0;--a1){a2=c.i(a,a1)
if(typeof a2!=="number")return a2.a5()
c.q(a,a1,a2/a0)}for(a1=i+1,g=m;g>=0;--g)if(g!==i){a2=q.a
if(g>=a2.length)return H.k(a2,g)
a3=a2[g]
a2=p.a
if(g>=a2.length)return H.k(a2,g)
a4=a2[g]
a2=J.Z(a3)
a0=a2.i(a3,i)
for(a5=a1;a5!==r;++a5){a6=a2.i(a3,a5)
a7=e.i(b,a5)
if(typeof a7!=="number")return a7.t()
if(typeof a6!=="number")return a6.u()
a2.q(a3,a5,a6-a7*a0)}for(a2=J.Z(a4),a5=l;a5>0;--a5){a6=a2.i(a4,a5)
a7=c.i(a,a5)
if(typeof a7!=="number")return a7.t()
if(typeof a6!=="number")return a6.u()
a2.q(a4,a5,a6-a7*a0);--a5
a7=a2.i(a4,a5)
a6=c.i(a,a5)
if(typeof a6!=="number")return a6.t()
if(typeof a7!=="number")return a7.u()
a2.q(a4,a5,a7-a6*a0)}if(a5===0){a6=a2.i(a4,0)
a7=c.i(a,0)
if(typeof a7!=="number")return a7.t()
if(typeof a6!=="number")return a6.u()
a2.q(a4,0,a6-a7*a0)}}}return p},
ab:function(a){var s=this.gL(this),r=H.A(s),q=r.h("L<1,i>")
return P.h(new H.L(s,r.h("i(1)").a(new Z.eb(a)),q),!0,q.h("D.E"))},
dc:function(a,b){var s,r,q,p,o
t.H.a(b)
for(s=T.r(this.gD(this).a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q){p=s[q]
o=this.a
J.e2(C.a.i(o,p),a,C.a.i(b,p))}},
geP:function(){return this.ax(0,new Z.ei(this))},
d8:function(){var s,r,q,p,o=H.a([],t.b)
for(s=this.gL(this),r=s.length,q=t.V,p=0;p<s.length;s.length===r||(0,H.d)(s),++p)o.push(P.dr(s[p],!0,q))
return o},
ay:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.gD(c),a=c.gD(c).b,a0=a2.gD(a2).b,a1=Z.at(0,new S.u(c.gD(c).a,a2.gD(a2).b,t.o))
for(b=T.r(b.a,0,1),s=b.length,r=0;r<b.length;b.length===s||(0,H.d)(b),++r){q=b[r]
for(p=T.r(a0,0,1),o=p.length,n=0;n<p.length;p.length===o||(0,H.d)(p),++n){m=p[n]
for(l=T.r(a,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.d)(l),++j){i=l[j]
h=a1.a
h=C.a.i(h,q)
g=J.Z(h)
f=g.i(h,m)
e=c.a
e=J.N(C.a.i(e,q),i)
d=a2.a
d=J.N(C.a.i(d,i),m)
if(typeof e!=="number")return e.t()
if(typeof d!=="number")return H.aY(d)
if(typeof f!=="number")return f.A()
g.q(h,m,f+e*d)}}}return a1},
j:function(){return this.bt(new Z.ea())},
bt:function(a){return this.ax(0,new Z.e9(t.C.a(a)))},
cG:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gL(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)for(p=J.x(s[q]);p.k();)o.push(p.gm())
return o},
l:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.v(d.gD(d).a)+"x"+H.v(d.gD(d).b),b=H.a([],t.t)
for(s=d.gL(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.d)(s),++q)for(p=J.x(s[q]);p.k();)b.push(C.d.bP(p.gm(),6).length)
o=C.a.bJ(b,6,C.R,t.S)
for(b=d.gL(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.d)(b),++q){m=b[q]
n+="      "
for(l=J.x(m);l.k();){k=l.gm()
j=k<0?"-":" "
k=Math.abs(k)
i=C.d.bP(k,6)
h=H.a([],p)
for(i=T.r(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.d)(i),++f)h.push(" ")
e=C.a.hO(h)
n=n+j+C.d.bP(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sdC:function(a){this.a=t.gd.a(a)},
sfI:function(a){this.b=t.gv.a(a)}}
Z.ee.prototype={
$2:function(a,b){return a+this.a.an(t.o.a(b))},
$S:1}
Z.eh.prototype={
$2:function(a,b){return a-this.a.an(t.o.a(b))},
$S:1}
Z.eg.prototype={
$2:function(a,b){return a*this.a.an(t.o.a(b))},
$S:1}
Z.ef.prototype={
$2:function(a,b){return a/this.a.an(t.o.a(b))},
$S:1}
Z.ed.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=T.bO(a.b,t.V)
r=H.A(s)
q=r.h("L<1,i>")
return P.h(new H.L(s,r.h("i(1)").a(new Z.ec(this.a,a)),q),!0,q.h("D.E"))},
$S:48}
Z.ec.prototype={
$1:function(a){t.w.a(a)
return this.a.$2(a.b,new S.u(this.b.a,a.a,t.o))},
$S:49}
Z.eb.prototype={
$1:function(a){return J.N(t.H.a(a),this.a)},
$S:50}
Z.ei.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.an(new S.u(b.b,b.a,s))},
$S:1}
Z.ea.prototype={
$1:function(a){return a},
$S:4}
Z.e9.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
Z.hg.prototype={
$2:function(a,b){var s=t.A
return s.a(a).ay(s.a(b))},
$S:52}
Y.b.prototype={
J:function(a,b){if(b==null)return!1
return b instanceof Y.b&&this.a===b.a&&this.b===b.b&&this.c===b.c},
A:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a+b,s.b+b,s.c+b)
else if(b instanceof Y.b)return new Y.b(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.f("Vector3 only support addition by num or Vector3")},
u:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a-b,s.b-b,s.c-b)
else if(b instanceof Y.b)return new Y.b(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.f("Vector3 only support subtraction by num or Vector3")},
t:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a*b,s.b*b,s.c*b)
else if(b instanceof Y.b)return new Y.b(s.a*b.a,s.b*b.b,s.c*b.c)
else throw H.f("Vector3 only support multiplication by num or Vector3")},
a5:function(a,b){return new Y.b(this.a/b,this.b/b,this.c/b)},
al:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
ac:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.f("No component at index "+a+" on a vector3")}},
i0:function(){var s=t.n
s=Z.Y(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
cZ:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new Y.b(s,r,c==null?this.c:c)},
i6:function(a){return this.cZ(a,null,null)},
i7:function(a){return this.cZ(null,a,null)},
eS:function(a){return this.cZ(null,null,a)},
i5:function(a,b){if(a===0)return this.i6(b)
else if(a===1)return this.i7(b)
else if(a===2)return this.eS(b)
else throw H.f("Cannot index a vector3 with index="+a)},
ay:function(a){var s=Z.hl(3).ax(0,new Y.fj(a)).ay(this.i0()),r=t.o
return new Y.b(s.an(new S.u(0,0,r)),s.an(new S.u(1,0,r)),s.an(new S.u(2,0,r)))},
ei:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bt:function(a){t.C.a(a)
return new Y.b(a.$1(this.a),a.$1(this.b),a.$1(this.c))},
ds:function(a){return this.bt(new Y.fk())},
h8:function(a){return this.bt(new Y.fi())},
b3:function(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l:function(a){return"vec3("+H.v(this.a)+", "+H.v(this.b)+", "+H.v(this.c)+")"}}
Y.fj.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gD(r).a
if(typeof s!=="number")return s.bS()
if(typeof q!=="number")return H.aY(q)
if(s<q){s=b.b
q=r.gD(r).b
if(typeof s!=="number")return s.bS()
if(typeof q!=="number")return H.aY(q)
q=s>=q
s=q}else s=!0
return s?a:r.an(b)},
$S:1}
Y.fk.prototype={
$1:function(a){return J.jp(a)},
$S:4}
Y.fi.prototype={
$1:function(a){return Math.abs(a)},
$S:4}
S.u.prototype={
l:function(a){return"["+H.v(this.a)+", "+H.v(this.b)+"]"},
J:function(a,b){if(b==null)return!1
return b instanceof S.u&&J.ah(b.a,this.a)&&J.ah(b.b,this.b)},
gv:function(a){var s=J.bS(this.a),r=J.bS(this.b)
return A.hD(A.b9(A.b9(0,C.e.gv(s)),C.e.gv(r)))}}
S.b4.prototype={
l:function(a){return"["+this.a.l(0)+", "+H.v(this.b)+", "+H.v(this.c)+"]"},
J:function(a,b){if(b==null)return!1
return b instanceof S.b4&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gv:function(a){var s=H.aF(this.a),r=C.d.gv(this.b),q=C.d.gv(this.c)
return A.hD(A.b9(A.b9(A.b9(0,C.e.gv(s)),C.e.gv(r)),C.e.gv(q)))}}
S.bD.prototype={
R:function(a){var s=this
return P.dr([s.a,s.b,s.c,s.d],!1,t.z)},
l:function(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
J:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.bD&&b.a.J(0,s.a)&&b.b.J(0,s.b)&&b.c.J(0,s.c)&&b.d.J(0,s.d)},
gv:function(a){var s=this,r=H.aF(s.a),q=H.aF(s.b),p=H.aF(s.c),o=H.aF(s.d)
return A.hD(A.b9(A.b9(A.b9(A.b9(0,C.e.gv(r)),C.e.gv(q)),C.e.gv(p)),C.e.gv(o)))}}
Q.cb.prototype={
gbh:function(){var s=this.y
return s==null?H.c(H.e("timeAxes")):s},
gaQ:function(){var s=this.z
return s==null?H.c(H.e("frequencyAxes")):s},
gaG:function(){var s=this.Q
return s==null?H.c(H.e("circlePlane")):s},
ge8:function(){var s=this.cy
return s==null?H.c(H.e("centerOfMass")):s},
gaI:function(){var s=this.db
return s==null?H.c(H.e("fourierDot")):s},
gba:function(){var s=this.dx
return s==null?H.c(H.e("fourierGraph")):s},
gaL:function(){var s=this.dy
return s==null?H.c(H.e("wave")):s},
gbf:function(){var s=this.fr
return s==null?H.c(H.e("polarized")):s},
gbL:function(){var s=this.fx
return s==null?H.c(H.e("partialFourierGraph")):s},
ag:function(){var s=0,r=P.aB(t.z),q=this,p,o,n,m,l,k
var $async$ag=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:s=2
return P.W(q.b2(),$async$ag)
case 2:q.fy=5
s=3
return P.W(q.b0(),$async$ag)
case 3:p=M.hW(M.bp(C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),C.c,M.bp(null,null,null,null,null,null,null,null,null,null,null,null,T.r(6,1,1),null,null,null,null,null,null,1),5,0,M.bp(null,null,null,null,null,null,C.y,null,null,null,null,null,null,null,null,0.5,null,null,null,1.4),1,-1)
p.Y(C.C)
q.z=p
q.gaQ().eF(q.gaG(),C.l)
p=q.gaQ()
o=p.cK(1)
n=p.cK(0)
m=H.a([C.P,C.f,C.G,C.Q],t.l)
l=new T.cB(0.25,p,4,0,0,C.f,!1,0.01,!1,0.000001,4,null,null,null,C.b,null,null,null,null,null)
l.P(C.b,null,null)
l.Z(C.h,0,!1,C.h,!1,0.01,C.f,0,C.b,4,0.000001)
l.dA(m,C.h,0,!1,C.h,!1,C.f,0,C.b,4)
l.fD(C.h,0,C.h,o+0.5,!1,C.f,0,C.b,4,n+0.5)
l.aJ(p.T(C.c))
l.di(C.C)
q.cx=l
q.gaQ()
p=E.bt(q.gaQ())
o=q.cx
p=t.co.a(H.a([p,E.bt(o==null?H.c(H.e("frequencyBox")):o)],t.bt))
o=new M.bu(C.b,null,null,null,null,null)
o.P(C.b,null,null)
n=t.a
o.S(n.a(C.a8))
o=new G.da(p,0,M.j2(),0,o)
o.ad()
o.fz(p,null,0,M.j2(),0)
s=4
return P.W(q.a0(0,o),$async$ag)
case 4:q.dx=q.eY(q.gaL())
s=5
return P.W(q.b_(),$async$ag)
case 5:s=6
return P.W(q.bs(),$async$ag)
case 6:s=7
return P.W(q.aY(),$async$ag)
case 7:q.gaI().hR(q.gex())
o=q.gaI()
k=new R.c6(null,null,null,!1,o,C.b,null,null,null,null,null)
k.P(C.b,null,null)
k.fC(o)
k.b1(q.ghl())
q.S(n.a(H.a([k],t.r)))
s=8
return P.W(q.bu(),$async$ag)
case 8:return P.az(null,r)}})
return P.aA($async$ag,r)},
b_:function(){var s=0,r=P.aB(t.z),q=this,p,o
var $async$b_=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:o=V.k8(null,0,!1,null,!1,0.01,C.f,0,null,4,0.000001)
o.aW(C.h)
p=q.gba()
p.a3("getEnd")
o.sU(t.y.a(H.a([J.be(p.gp(p))],t.l)))
q.fx=o
o=N.i1(C.c)
o.Y(C.L)
q.cy=o
o=q.gba()
o.a3("getEnd")
o=N.i1(J.be(o.gp(o)))
o.Y(C.L)
q.db=o
q.ge8().b1(new Q.ez(q))
s=2
return P.W(q.a0(0,E.bt(q.ge8())),$async$b_)
case 2:s=3
return P.W(q.a0(0,E.bt(q.gaI())),$async$b_)
case 3:q.gaI().b1(q.gex())
return P.az(null,r)}})
return P.aA($async$b_,r)},
hE:function(a,b){var s
t.j.a(a)
H.a4(b)
s=this.gbL()
s.a3("getStart")
a.aJ(J.ai(s.gp(s)))
return a},
bs:function(){var s=0,r=P.aB(t.z),q=this,p
var $async$bs=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:p=new M.b3("",32,"KaTeX_Main",C.b,null,null,null,null,null)
p.P(C.b,null,null)
p.sU(t.y.a(H.a([C.c],t.l)))
p.Y(C.b)
p.eF(q.gaG(),C.q)
p.a7(C.r.a5(0,2))
p.Y(C.w)
s=2
return P.W(q.a0(0,E.bt(p)),$async$bs)
case 2:p.b1(new Q.eA(q,p))
return P.az(null,r)}})
return P.aA($async$bs,r)},
aY:function(){var s=0,r=P.aB(t.z),q=this,p,o
var $async$aY=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:o=t.r
q.S(H.a([q.gaI(),q.gbL()],o))
q.gbL().b1(new Q.eH(q))
s=2
return P.W(q.a0(0,q.d3(q.gaL(),q.gbf(),5,2,12)),$async$aY)
case 2:s=3
return P.W(q.a0(0,q.d3(q.gaL(),q.gbf(),2,0,10)),$async$aY)
case 3:p=t.a
q.eL(!0,p.a(H.a([q.gbL()],o)))
q.S(p.a(H.a([q.gba()],o)))
return P.az(null,r)}})
return P.aA($async$aY,r)},
b2:function(){var s=0,r=P.aB(t.z),q=this,p,o
var $async$b2=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:p=t.n
o=M.bp(null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([0,1,2,3,4],p),null,0.25,null,null,null,2)
p=M.bp(null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([],p),null,null,null,null,null,0.5)
p=M.hW(M.bp(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),C.c,o,4.4,0,p,2.5,-1)
p.Y(C.w)
p.dZ(C.P,0.5)
q.y=p
q.gbh()
q.dy=q.eX()
s=2
return P.W(q.a0(0,E.bt(q.gbh())),$async$b2)
case 2:p=new M.dy(1,M.e1(),0,q.gaL())
p.ad()
s=3
return P.W(q.a0(0,p),$async$b2)
case 3:return P.az(null,r)}})
return P.aA($async$b2,r)},
b0:function(){var s=0,r=P.aB(t.z),q=this,p,o,n
var $async$b0=P.aC(function(a,b){if(a===1)return P.ay(b,r)
while(true)switch(s){case 0:n=new M.co(C.t.as(C.A),C.j.as(C.j),C.H.as(C.z),C.ac,null,1,1,1,null,null,C.c,C.t,C.j,C.j,-2.1,2.1,-2.1,2.1,4,0,0,C.f,!1,0.01,!1,0.000001,4,null,null,null,C.b,null,null,null,null,null)
n.P(C.b,null,null)
n.Z(null,0,!1,null,!1,0.01,C.f,0,null,4,0.000001)
n.cd(null)
n.dw(C.t,C.c,C.j,2.1,-2.1,C.j,2.1,-2.1)
n.cy=!0
n.hH()
n.dj(1)
n.d9(0,0.8)
n.dZ(C.Q,0.5)
q.Q=n
n=N.jx(C.c,null,0,null,1,null,4)
p=new V.c3(4,0,0,C.f,!1,0.01,!1,0.000001,4,null,null,null,C.b,null,null,null,null,null)
p.P(C.b,null,null)
p.Z(null,0,!1,C.b,!1,0.01,C.f,0,C.b,4,0.000001)
p.fA(n,null,50,0.5)
p.dj(2)
p.d9(0,0.8)
p.a7(q.gaG().cu(C.c))
q.ch=p
p=q.gaG()
n=q.ch
p.S(H.a([n==null?H.c(H.e("dashedCircle")):n],t.r))
q.gaG()
o=q.c_(q.gaL(),q.fy)
q.fr=Y.hv(q.gaL())
s=2
return P.W(q.a0(0,E.bt(q.gaG())),$async$b0)
case 2:s=3
return P.W(q.a0(0,G.k5(q.gbf(),0,M.e1(),1,o)),$async$b0)
case 3:return P.az(null,r)}})
return P.aA($async$b0,r)},
hm:function(a,b){var s,r,q=this
t.j.a(a)
H.a4(b)
s=Math.min(5,Math.max(q.gaQ().cP(q.gaI().f1()).a,0))
r=q.gba().x2.$1(s)
q.gaI().aJ(r)
q.fy=s
q.gbf().e5(q.c_(q.gaL(),s))
return a},
eY:function(a){return this.gaQ().d4(new Q.eC(this,a),0.05)},
eZ:function(a,b){var s,r=b.d0(),q=new Q.eD(this),p=H.a([],t.bN)
for(s=J.x(r);s.k();)p.push(q.$2(s.gm(),a))
s=p.length
return J.aD(C.a.a1(p,new Q.eE()),new S.P(1/s,0))},
eX:function(){var s=t.C.a(new Q.eB(1,0.9,C.a5))
s=this.gbh().d4(s,0.05)
s.di(C.a_)
s.aW(C.h)
return s},
c_:function(a,b){var s=Y.hv(a),r=t.cD.a(new Q.eG(this,b)),q=s.cx
s.da(q)
s.fq(C.c,C.c,r)
s.da(1/q)
if(H.bM(s.cy))s.hj("smooth")
return s},
d3:function(a,b,c,d,e){var s=new E.cG(new Q.eF(this,c,d,a),e,M.e1(),0,b,t.b_)
s.ad()
return s}}
Q.ez.prototype={
$2:function(a,b){t.j.a(a)
H.a4(b)
a.aJ(this.a.gbf().eW())
return a},
$S:5}
Q.eA.prototype={
$2:function(a,b){var s
t.j.a(a)
H.a4(b)
s=this.b
s.x=C.d.bP(this.a.fy,2)+" cycles / second"
return s},
$S:54}
Q.eH.prototype={
$2:function(a,b){var s
t.j.a(a)
H.a4(b)
s=this.a
a.be(s.gba(),s.fy/5,1)
return a},
$S:5}
Q.eC.prototype={
$1:function(a){return this.a.eZ(a,this.b).a},
$S:4}
Q.eD.prototype={
$2:function(a,b){var s=this.a.gbh().cP(a)
return S.i0(-6.283185307179586*b*s.a).t(0,new S.P(s.b,0))},
$S:55}
Q.eE.prototype={
$2:function(a,b){var s=t.cm
return s.a(a).A(0,s.a(b))},
$S:56}
Q.eB.prototype={
$1:function(a){var s,r,q,p=H.a([],t.cA)
for(s=this.c,r=6.283185307179586*a,q=0;q<1;++q)p.push(Math.cos(r*s[q]))
return this.a+this.b*T.hi(p,t.p)},
$S:4}
Q.eG.prototype={
$1:function(a){var s=this.a,r=s.gbh().cP(a),q=S.i0(-6.283185307179586*this.b*r.a).t(0,new S.P(r.b,0))
return s.gaG().cu(new Y.b(q.a,q.b,0))},
$S:2}
Q.eF.prototype={
$2:function(a,b){var s=this,r=s.a,q=H.a4(V.d3(s.b,s.c,b,t.z))
r.fy=q
a.e5(r.c_(s.d,q))
return a},
$S:5};(function aliases(){var s=J.ar.prototype
s.fo=s.l
s=J.bj.prototype
s.fp=s.l
s=P.C.prototype
s.dv=s.l
s=X.a2.prototype
s.fl=s.b6
s.fm=s.b7
s.fn=s.cv
s=M.q.prototype
s.fq=s.b5
s.fu=s.aV
s.ft=s.bg
s.fv=s.au
s.fs=s.b8
s.cb=s.a6
s.ca=s.a2
s=V.B.prototype
s.fw=s.au
s=V.bU.prototype
s.fk=s.fe})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_2u
s(J,"kG","jL",57)
r(P,"l_","kc",7)
r(P,"l0","kd",7)
r(P,"l1","ke",7)
q(P,"iN","kT",0)
p(P,"lk",2,null,["$1$2","$2"],["iZ",function(a,b){return P.iZ(a,b,t.p)}],59,0)
p(P,"iX",2,null,["$1$2","$2"],["iY",function(a,b){return P.iY(a,b,t.p)}],60,0)
o(M.q.prototype,"gf0","ad",26)
var m
n(m=Q.cb.prototype,"gex","hE",5)
n(m,"ghl","hm",5)
p(B,"j0",3,null,["$3"],["lp"],61,0)
p(M,"j2",1,null,["$3$inflection$pauseRatio","$1"],["iW",function(a){return M.iW(a,null,null)}],16,0)
p(M,"e1",1,null,["$3$inflection$pauseRatio","$1"],["j4",function(a){return M.j4(a,null,null)}],16,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.hq,J.ar,J.bW,P.o,H.c2,P.I,H.an,H.a7,P.J,H.c9,H.f3,H.eU,H.ca,H.cQ,P.by,H.eL,H.ch,H.dp,H.fI,H.av,H.dP,H.dV,P.fL,P.dK,P.bG,P.bH,P.bZ,P.dM,P.bm,P.U,P.dL,P.cz,P.cA,P.dT,P.cW,P.cY,P.dQ,P.bn,P.a8,P.cw,P.cy,P.fs,P.ey,P.Q,P.dU,P.dC,W.hn,P.dR,P.bl,A.cO,X.a2,R.en,K.bT,M.q,M.a_,V.b5,N.dE,V.bU,N.dw,K.y,S.P,X.ap,X.ad,M.ex,O.a0,O.cl,Z.as,Y.b,S.u,S.b4,S.bD])
q(J.ar,[J.dn,J.bw,J.bj,J.w,J.b0,J.aL,W.a6,W.c1,W.et,W.c4,W.m])
q(J.bj,[J.du,J.ax,J.b1])
r(J.eK,J.w)
q(J.b0,[J.bv,J.cd])
q(P.o,[H.b6,H.G,H.bk,H.aU,H.aR,P.cc])
q(H.b6,[H.bh,H.cX])
r(H.cL,H.bh)
r(H.cJ,H.cX)
r(H.a5,H.cJ)
q(P.I,[H.cf,P.dF,H.dq,H.dH,H.dv,P.bY,H.dO,P.dt,P.aI,P.dI,P.dG,P.bA,P.de,P.dg])
q(H.an,[H.he,H.dl,H.dD,H.h5,H.h6,H.h7,P.fn,P.fm,P.fo,P.fp,P.fM,P.fQ,P.fR,P.fU,P.ft,P.fB,P.fx,P.fy,P.fz,P.fv,P.fA,P.fu,P.fE,P.fF,P.fD,P.fC,P.f1,P.f2,P.fT,P.fJ,P.fK,P.eM,W.fl,W.fr,A.eI,R.eo,R.ep,K.e5,K.e6,K.e7,M.eV,M.eW,M.es,M.el,Y.eX,R.eu,R.ev,R.ew,M.eS,M.eR,M.eQ,M.eT,M.eO,M.eN,M.eP,V.R,V.S,V.T,V.fg,V.fh,V.fa,V.fb,V.fd,V.fc,V.f6,V.f9,V.f7,V.f8,V.ff,V.fe,Q.er,Q.eq,N.f0,T.hj,T.hh,T.hk,V.h9,V.ha,V.hb,V.fW,V.fV,V.h4,V.h2,V.h3,V.h_,V.h1,X.fY,X.fZ,Z.ee,Z.eh,Z.eg,Z.ef,Z.ed,Z.ec,Z.eb,Z.ei,Z.ea,Z.e9,Z.hg,Y.fj,Y.fk,Y.fi,Q.ez,Q.eA,Q.eH,Q.eC,Q.eD,Q.eE,Q.eB,Q.eG,Q.eF])
q(H.G,[H.D,H.c8,H.cg])
q(H.D,[H.ak,H.L,H.aQ])
r(H.c7,H.bk)
q(P.J,[H.ck,H.cI,H.cx])
r(H.bs,H.aR)
r(H.b_,H.dl)
r(H.cn,P.dF)
q(H.dD,[H.dB,H.bq])
r(H.dJ,P.bY)
r(P.cj,P.by)
r(H.ce,P.cj)
r(H.cT,H.dO)
q(P.cc,[P.cS,A.O])
r(P.cR,P.dM)
r(P.dS,P.cW)
r(P.cP,P.cY)
r(P.aV,P.cP)
q(P.aI,[P.cr,P.dk])
q(W.a6,[W.ae,W.bE])
q(W.ae,[W.l,W.aE])
r(W.n,W.l)
q(W.n,[W.d9,W.db,W.bg,W.dj,W.dx])
r(W.aw,W.m)
r(W.aj,W.aw)
r(W.cK,W.c4)
r(W.cM,P.cz)
r(W.dN,W.cM)
r(W.cN,P.cA)
q(X.a2,[G.da,M.dz,G.cE,E.cG])
r(M.dy,M.dz)
r(E.di,G.cE)
r(K.d8,K.bT)
r(B.dc,K.d8)
q(M.q,[V.B,M.b3,R.dm,M.bu])
q(V.B,[N.cD,V.aT,Y.cp,N.cq,V.cH,V.c3])
q(N.cD,[N.X,N.bV])
r(M.bz,N.X)
r(M.df,V.aT)
r(M.bf,M.df)
r(M.co,M.bf)
r(N.cC,V.b5)
r(N.br,N.bV)
r(N.c5,N.br)
q(N.cq,[N.cu,N.ct])
r(N.cF,N.cu)
r(N.bX,N.cF)
r(T.cB,N.ct)
r(R.c6,R.dm)
r(Q.dd,V.bU)
r(O.ds,X.ad)
q(O.ds,[O.cm,O.aN,O.aO,O.aM])
r(Q.cb,N.dw)
s(H.cX,P.a8)
s(P.cY,P.cw)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{t:"int",i:"double",H:"num",a3:"String",F:"bool",Q:"Null",j:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","i(i,u<t,t>)","b(b)","F(t,b)","i(i)","q(q,i)","y(y)","~(~())","~(aj)","F(q)","Q(@)","Q()","X(X)","b(i)","b(b,b)","F(t)","i(i{inflection:i?,pauseRatio:i?})","j<i>(y)","t(t,t)","a_(a_,a_)","@(a3)","aq<Q>()","F(i)","F(aM)","F(aN)","F(aO)","a3()","~(@)","Q(@,b2)","@(@)","i(b)","~(t,@)","Q(C,b2)","U<@>(@)","j<b>(j<j<b>>,@)","j<y>(a3,B)","~(a3,B,j<y>)","j<y>(j<y>)","i(H)","F(y)","~(j<q>,cv<q>)","~(C?,C?)","~(H)","y(j<i>)","~(i,t{end:t?,start:t,step:t})","j<i>(j<i>)","~(m)","j<q>(q)","j<i>(u<t,j<i>>)","i(u<t,i>)","i(j<i>)","F(b)","as(as,as)","Q(~())","b3(q,i)","P(b,i)","P(P,P)","t(@,@)","@(@,a3)","0^(0^,0^)<H>","0^(0^,0^)<H>","j<b>(j<b>,j<b>,i)","i(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.ks(v.typeUniverse,JSON.parse('{"du":"bj","ax":"bj","b1":"bj","lv":"m","lC":"m","lu":"l","lD":"l","lL":"l","lw":"n","lI":"n","lE":"ae","lA":"ae","lJ":"aj","ly":"aw","lx":"aE","lM":"aE","dn":{"F":[]},"bw":{"Q":[]},"w":{"j":["1"],"G":["1"],"o":["1"]},"eK":{"w":["1"],"j":["1"],"G":["1"],"o":["1"]},"bW":{"J":["1"]},"b0":{"i":[],"H":[],"aK":["H"]},"bv":{"i":[],"t":[],"H":[],"aK":["H"]},"cd":{"i":[],"H":[],"aK":["H"]},"aL":{"a3":[],"aK":["a3"],"eY":[]},"G":{"o":["1"]},"b6":{"o":["2"]},"c2":{"J":["2"]},"bh":{"b6":["1","2"],"o":["2"],"o.E":"2"},"cL":{"bh":["1","2"],"b6":["1","2"],"G":["2"],"o":["2"],"o.E":"2"},"cJ":{"a8":["2"],"j":["2"],"b6":["1","2"],"G":["2"],"o":["2"]},"a5":{"cJ":["1","2"],"a8":["2"],"j":["2"],"b6":["1","2"],"G":["2"],"o":["2"],"o.E":"2","a8.E":"2"},"cf":{"I":[]},"D":{"G":["1"],"o":["1"]},"ak":{"D":["1"],"G":["1"],"o":["1"],"D.E":"1","o.E":"1"},"a7":{"J":["1"]},"bk":{"o":["2"],"o.E":"2"},"c7":{"bk":["1","2"],"G":["2"],"o":["2"],"o.E":"2"},"ck":{"J":["2"]},"L":{"D":["2"],"G":["2"],"o":["2"],"D.E":"2","o.E":"2"},"aU":{"o":["1"],"o.E":"1"},"cI":{"J":["1"]},"aR":{"o":["1"],"o.E":"1"},"bs":{"aR":["1"],"G":["1"],"o":["1"],"o.E":"1"},"cx":{"J":["1"]},"c8":{"G":["1"],"o":["1"],"o.E":"1"},"c9":{"J":["1"]},"aQ":{"D":["1"],"G":["1"],"o":["1"],"D.E":"1","o.E":"1"},"dl":{"an":[],"bi":[]},"b_":{"an":[],"bi":[]},"cn":{"I":[]},"dq":{"I":[]},"dH":{"I":[]},"cQ":{"b2":[]},"an":{"bi":[]},"dD":{"an":[],"bi":[]},"dB":{"an":[],"bi":[]},"bq":{"an":[],"bi":[]},"dv":{"I":[]},"dJ":{"I":[]},"ce":{"by":["1","2"],"ci":["1","2"]},"cg":{"G":["1"],"o":["1"],"o.E":"1"},"ch":{"J":["1"]},"dp":{"eY":[]},"dO":{"I":[]},"cT":{"I":[]},"U":{"aq":["1"]},"bH":{"J":["1"]},"cS":{"o":["1"],"o.E":"1"},"bZ":{"I":[]},"cR":{"dM":["1"]},"cW":{"io":[]},"dS":{"cW":[],"io":[]},"aV":{"cw":["1"],"cv":["1"],"G":["1"],"o":["1"]},"bn":{"J":["1"]},"cc":{"o":["1"]},"cj":{"by":["1","2"],"ci":["1","2"]},"by":{"ci":["1","2"]},"cP":{"cw":["1"],"cv":["1"],"G":["1"],"o":["1"]},"i":{"H":[],"aK":["H"]},"t":{"H":[],"aK":["H"]},"j":{"G":["1"],"o":["1"]},"H":{"aK":["H"]},"cv":{"G":["1"],"o":["1"]},"a3":{"aK":["a3"],"eY":[]},"bY":{"I":[]},"dF":{"I":[]},"dt":{"I":[]},"aI":{"I":[]},"cr":{"I":[]},"dk":{"I":[]},"dI":{"I":[]},"dG":{"I":[]},"bA":{"I":[]},"de":{"I":[]},"cy":{"I":[]},"dg":{"I":[]},"dU":{"b2":[]},"aj":{"m":[]},"aw":{"m":[]},"n":{"l":[],"a6":[]},"d9":{"l":[],"a6":[]},"db":{"l":[],"a6":[]},"bg":{"l":[],"a6":[]},"aE":{"a6":[]},"c4":{"hw":["H"]},"l":{"a6":[]},"dj":{"l":[],"a6":[]},"ae":{"a6":[]},"dx":{"l":[],"a6":[]},"bE":{"a6":[]},"cK":{"hw":["H"]},"cM":{"cz":["1"]},"dN":{"cM":["1"],"cz":["1"]},"cN":{"cA":["1"]},"dR":{"jV":[]},"O":{"o":["j<1>"],"o.E":"j<1>"},"cO":{"J":["j<1>"]},"da":{"a2":[]},"dz":{"a2":[]},"dy":{"a2":[]},"di":{"a2":[]},"cE":{"a2":[]},"cG":{"a2":[]},"d8":{"bT":[]},"dc":{"bT":[]},"bz":{"X":[],"B":[],"q":[]},"df":{"aT":[],"B":[],"q":[]},"bf":{"aT":[],"B":[],"q":[]},"co":{"bf":[],"aT":[],"B":[],"q":[]},"cp":{"B":[],"q":[]},"cD":{"B":[],"q":[]},"X":{"B":[],"q":[]},"cC":{"b5":[]},"bV":{"B":[],"q":[]},"br":{"B":[],"q":[]},"c5":{"B":[],"q":[]},"cq":{"B":[],"q":[]},"cu":{"B":[],"q":[]},"cF":{"B":[],"q":[]},"bX":{"B":[],"q":[]},"ct":{"B":[],"q":[]},"cB":{"B":[],"q":[]},"b3":{"q":[]},"dm":{"q":[]},"c6":{"q":[]},"bu":{"q":[]},"B":{"q":[]},"aT":{"B":[],"q":[]},"cH":{"B":[],"q":[]},"c3":{"B":[],"q":[]},"dd":{"bU":[]},"ds":{"ad":[]},"aN":{"ad":[]},"aO":{"ad":[]},"aM":{"ad":[]},"cm":{"ad":[]},"cb":{"dw":[]}}'))
H.kr(v.typeUniverse,JSON.parse('{"cX":2,"cc":1,"cj":2,"cP":1,"cY":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bP
return{dq:s("@<t>"),A:s("as"),u:s("bZ"),dK:s("a_"),gA:s("bg"),G:s("y"),e8:s("aK<@>"),cm:s("P"),X:s("G<@>"),bU:s("I"),aD:s("m"),gc:s("a0<ad>"),gl:s("a0<aM>"),c3:s("a0<aN>"),eL:s("a0<aO>"),en:s("ap"),e:s("ad"),b8:s("bi"),v:s("aq<@>"),fh:s("bu"),bL:s("b_<i>"),Q:s("O<q>"),m:s("O<C>"),eX:s("O<B>"),eR:s("O<b>"),ca:s("O<i>"),eN:s("O<t>"),hf:s("o<@>"),bt:s("w<a2>"),aM:s("w<as>"),f_:s("w<a_>"),O:s("w<y>"),bN:s("w<P>"),aE:s("w<a0<ad>>"),L:s("w<X>"),eI:s("w<j<X>>"),Z:s("w<j<q>>"),D:s("w<j<C>>"),h:s("w<j<b>>"),b:s("w<j<i>>"),gL:s("w<j<t>>"),r:s("w<q>"),db:s("w<cA<@>>"),s:s("w<a3>"),fZ:s("w<b4<a2,i,i>>"),dm:s("w<bD<b,b,b,b>>"),U:s("w<B>"),l:s("w<b>"),n:s("w<i>"),gn:s("w<@>"),t:s("w<t>"),cA:s("w<H>"),eM:s("w<q(q,i)>"),T:s("bw"),cj:s("b1"),fw:s("lG"),bf:s("lH"),F:s("X"),co:s("j<a2>"),W:s("j<y>"),gF:s("j<a0<ad>>"),ds:s("j<X>"),dF:s("j<j<b>>"),gj:s("j<j<i>>"),a:s("j<q>"),gp:s("j<b4<a2,i,i>>"),y:s("j<b>"),H:s("j<i>"),aH:s("j<@>"),cH:s("ci<ap,j<a0<ad>>>"),j:s("q"),he:s("q(q,i)"),E:s("aM"),I:s("aj"),gt:s("cm"),N:s("aN"),J:s("aO"),P:s("Q"),f4:s("bz"),K:s("C"),q:s("bl<H>"),eU:s("hw<H>"),bA:s("cv<q>"),k:s("b2"),aw:s("a3"),e3:s("ak<b>"),hd:s("u<b,b>"),w:s("u<t,i>"),o:s("u<t,t>"),el:s("u<j<b>,j<b>>"),fz:s("u<t,j<i>>"),cL:s("b4<a2,i,i>"),bl:s("bD<b,b,b,b>"),ak:s("ax"),b_:s("cG<q>"),R:s("B"),i:s("b"),cD:s("b(b)"),do:s("dN<aj>"),ck:s("U<Q>"),c:s("U<@>"),fJ:s("U<t>"),dL:s("U<H>"),g4:s("cR<H>"),cJ:s("F"),al:s("F(C)"),fT:s("F(t)"),V:s("i"),fA:s("i(i,u<t,t>)"),C:s("i(i)"),z:s("@"),fO:s("@()"),bI:s("@(C)"),ag:s("@(C,b2)"),S:s("t"),cF:s("0&*"),_:s("C*"),g7:s("a0<aM>?"),em:s("a0<aN>?"),ga:s("a0<aO>?"),eH:s("aq<Q>?"),x:s("j<y>?"),f:s("j<X>?"),gd:s("j<j<i>>?"),hh:s("j<q>?"),dh:s("j<b4<a2,i,i>>?"),bG:s("j<b>?"),b5:s("j<b>(j<b>,j<b>,i)?"),cI:s("j<q(q,i)>?"),dC:s("ci<ap,j<a0<ad>>>?"),Y:s("C?"),gv:s("u<t,t>?"),d:s("bm<@,@>?"),g:s("dQ?"),B:s("@(m)?"),g5:s("~()?"),p:s("H"),aT:s("~"),M:s("~()"),c4:s("~(H)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.K=W.bg.prototype
C.m=W.c1.prototype
C.a1=J.ar.prototype
C.a=J.w.prototype
C.e=J.bv.prototype
C.a2=J.bw.prototype
C.d=J.b0.prototype
C.M=J.aL.prototype
C.a3=J.b1.prototype
C.O=J.du.prototype
C.F=J.ax.prototype
C.ae=W.bE.prototype
C.y=new Y.b(-1,0,0)
C.z=new M.a_(null,null,null,C.y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b=new K.y(1,1,1,1)
C.G=new Y.b(1,-1,0)
C.t=new M.a_(C.b,!1,null,C.G,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
C.w=new K.y(0.73333,0.73333,0.73333,1)
C.r=new Y.b(0,-1,0)
C.a4=H.a(s([0]),t.n)
C.A=new M.a_(C.w,!0,!1,C.r,1,!0,0.1,1,null,C.a4,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.j=new M.a_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.H=new M.a_(null,null,null,C.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.u=new H.b_(P.iX(),t.bL)
C.R=new H.b_(P.iX(),H.bP("b_<t>"))
C.B=new H.b_(P.lk(),t.bL)
C.S=new H.c9(H.bP("c9<0&>"))
C.I=function getTagFallback(o) {
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
C.J=function(hooks) { return hooks; }

C.i=new P.dS()
C.Z=new P.dU()
C.h=new K.y(0,0,0,0)
C.v=new K.y(0,0,0,1)
C.a_=new K.y(1,1,0,1)
C.L=new K.y(0.98824,0.38431,0.33333,1)
C.C=new K.y(0.36078,0.81569,0.70196,1)
C.x=new X.ap("EventType.mouseMovedEvent")
C.n=new X.ap("EventType.mousePressedEvent")
C.o=new X.ap("EventType.mouseReleasedEvent")
C.p=new X.ap("EventType.mouseDraggedEvent")
C.D=new X.ap("EventType.keyPressedEvent")
C.E=new X.ap("EventType.keyReleasedEvent")
C.a5=H.a(s([2]),t.n)
C.a6=H.a(s([C.x,C.n,C.o,C.p,C.D,C.E]),H.bP("w<ap>"))
C.a8=H.a(s([]),t.r)
C.a9=H.a(s([]),t.n)
C.aa=new N.dE("TipSide.Start")
C.ab=new N.dE("TipSide.End")
C.N=H.a(s([]),t.O)
C.a0=new K.y(0.16078,0.67059,0.79216,1)
C.a7=H.a(s([C.a0]),t.O)
C.c=new Y.b(0,0,0)
C.ac=new V.b5(C.N,C.a7,1,C.N,0,0,C.c)
C.k=new Y.b(0,0,1)
C.q=new Y.b(0,1,0)
C.l=new Y.b(1,0,0)
C.f=new Y.b(1,1,0)
C.ad=new Y.b(1,1,1)
C.P=new Y.b(-1,1,0)
C.Q=new Y.b(-1,-1,0)
C.af=new P.bG(null,2)})();(function staticFields(){$.fG=null
$.aJ=0
$.c0=null
$.hY=null
$.iT=null
$.iM=null
$.j1=null
$.h0=null
$.h8=null
$.hN=null
$.bJ=null
$.d_=null
$.d0=null
$.hF=!1
$.K=C.i
$.al=H.a([],H.bP("w<C>"))
$.dY=P.hs(t.S,H.bP("ci<t,t>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"lz","j9",function(){return H.l8("_$dart_dartClosure")})
s($,"m7","hS",function(){return C.i.eM(new H.he(),H.bP("aq<Q>"))})
s($,"lN","ja",function(){return H.aS(H.f4({
toString:function(){return"$receiver$"}}))})
s($,"lO","jb",function(){return H.aS(H.f4({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"lP","jc",function(){return H.aS(H.f4(null))})
s($,"lQ","jd",function(){return H.aS(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"lT","jg",function(){return H.aS(H.f4(void 0))})
s($,"lU","jh",function(){return H.aS(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"lS","jf",function(){return H.aS(H.ik(null))})
s($,"lR","je",function(){return H.aS(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"lW","jj",function(){return H.aS(H.ik(void 0))})
s($,"lV","ji",function(){return H.aS(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"lX","hR",function(){return P.kb()})
r($,"lB","bR",function(){var q=new M.ex()
q.fB()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.ar,DOMError:J.ar,MediaError:J.ar,NavigatorUserMediaError:J.ar,OverconstrainedError:J.ar,PositionError:J.ar,SQLError:J.ar,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLBodyElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLDivElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTableElement:W.n,HTMLTableRowElement:W.n,HTMLTableSectionElement:W.n,HTMLTemplateElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.d9,HTMLAreaElement:W.db,HTMLCanvasElement:W.bg,CanvasRenderingContext2D:W.c1,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,DOMException:W.et,DOMRectReadOnly:W.c4,SVGAElement:W.l,SVGAnimateElement:W.l,SVGAnimateMotionElement:W.l,SVGAnimateTransformElement:W.l,SVGAnimationElement:W.l,SVGCircleElement:W.l,SVGClipPathElement:W.l,SVGDefsElement:W.l,SVGDescElement:W.l,SVGDiscardElement:W.l,SVGEllipseElement:W.l,SVGFEBlendElement:W.l,SVGFEColorMatrixElement:W.l,SVGFEComponentTransferElement:W.l,SVGFECompositeElement:W.l,SVGFEConvolveMatrixElement:W.l,SVGFEDiffuseLightingElement:W.l,SVGFEDisplacementMapElement:W.l,SVGFEDistantLightElement:W.l,SVGFEFloodElement:W.l,SVGFEFuncAElement:W.l,SVGFEFuncBElement:W.l,SVGFEFuncGElement:W.l,SVGFEFuncRElement:W.l,SVGFEGaussianBlurElement:W.l,SVGFEImageElement:W.l,SVGFEMergeElement:W.l,SVGFEMergeNodeElement:W.l,SVGFEMorphologyElement:W.l,SVGFEOffsetElement:W.l,SVGFEPointLightElement:W.l,SVGFESpecularLightingElement:W.l,SVGFESpotLightElement:W.l,SVGFETileElement:W.l,SVGFETurbulenceElement:W.l,SVGFilterElement:W.l,SVGForeignObjectElement:W.l,SVGGElement:W.l,SVGGeometryElement:W.l,SVGGraphicsElement:W.l,SVGImageElement:W.l,SVGLineElement:W.l,SVGLinearGradientElement:W.l,SVGMarkerElement:W.l,SVGMaskElement:W.l,SVGMetadataElement:W.l,SVGPathElement:W.l,SVGPatternElement:W.l,SVGPolygonElement:W.l,SVGPolylineElement:W.l,SVGRadialGradientElement:W.l,SVGRectElement:W.l,SVGScriptElement:W.l,SVGSetElement:W.l,SVGStopElement:W.l,SVGStyleElement:W.l,SVGElement:W.l,SVGSVGElement:W.l,SVGSwitchElement:W.l,SVGSymbolElement:W.l,SVGTSpanElement:W.l,SVGTextContentElement:W.l,SVGTextElement:W.l,SVGTextPathElement:W.l,SVGTextPositioningElement:W.l,SVGTitleElement:W.l,SVGUseElement:W.l,SVGViewElement:W.l,SVGGradientElement:W.l,SVGComponentTransferFunctionElement:W.l,SVGFEDropShadowElement:W.l,SVGMPathElement:W.l,Element:W.l,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,EventTarget:W.a6,HTMLFormElement:W.dj,MouseEvent:W.aj,DragEvent:W.aj,PointerEvent:W.aj,WheelEvent:W.aj,Document:W.ae,DocumentFragment:W.ae,HTMLDocument:W.ae,ShadowRoot:W.ae,XMLDocument:W.ae,Attr:W.ae,DocumentType:W.ae,Node:W.ae,HTMLSelectElement:W.dx,CompositionEvent:W.aw,FocusEvent:W.aw,KeyboardEvent:W.aw,TextEvent:W.aw,TouchEvent:W.aw,UIEvent:W.aw,Window:W.bE,DOMWindow:W.bE,ClientRect:W.cK,DOMRect:W.cK})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Q.lh
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=fourier_transform.dart.js.map
