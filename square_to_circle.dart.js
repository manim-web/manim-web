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
a[c]=function(){a[c]=function(){H.jT(b)}
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
if(a[b]!==s)H.jU(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.fE(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={fk:function fk(){},
fV:function(a,b,c){if(b.h("C<0>").b(a))return new H.bZ(a,b.h("@<0>").v(c).h("bZ<1,2>"))
return new H.aO(a,b.h("@<0>").v(c).h("aO<1,2>"))},
o:function(a){return new H.bx("Field '"+a+"' has not been initialized.")},
h9:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fC:function(a,b,c){return a},
cS:function(a,b,c,d){P.ae(b,"start")
if(c!=null){P.ae(c,"end")
if(b>c)H.k(P.as(b,0,c,"start",null))}return new H.ag(a,b,c,d.h("ag<0>"))},
iw:function(a,b,c,d){if(t.Q.b(a))return new H.bq(a,b,c.h("@<0>").v(d).h("bq<1,2>"))
return new H.aR(a,b,c.h("@<0>").v(d).h("aR<1,2>"))},
h7:function(a,b,c){if(t.Q.b(a)){P.ae(b,"count")
return new H.aY(a,b,c.h("aY<0>"))}P.ae(b,"count")
return new H.au(a,b,c.h("au<0>"))},
U:function(){return new P.b0("No element")},
iq:function(){return new P.b0("Too few elements")},
aF:function aF(){},
bn:function bn(a,b){this.a=a
this.$ti=b},
aO:function aO(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
bX:function bX(){},
S:function S(a,b){this.a=a
this.$ti=b},
bx:function bx(a){this.a=a},
f7:function f7(){},
C:function C(){},
B:function B(){},
ag:function ag(a,b,c,d){var _=this
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
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
au:function au(a,b,c){this.a=a
this.b=b
this.$ti=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
br:function br(a){this.$ti=a},
bs:function bs(a){this.$ti=a},
at:function at(a,b){this.a=a
this.$ti=b},
ca:function ca(){},
hU:function(a){var s,r=H.hT(a)
if(r!=null)return r
s="minified:"+a
return s},
p:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cp(a)
return s},
ar:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dZ:function(a){return H.iz(a)},
iz:function(a){var s,r,q,p
if(a instanceof P.z)return H.X(H.cj(a),null)
if(J.aI(a)===C.O||t.ak.b(a)){s=C.w(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.X(H.cj(a),null)},
dj:function(a){throw H.c(H.ju(a))},
m:function(a,b){if(a==null)J.v(a)
throw H.c(H.fF(a,b))},
fF:function(a,b){var s,r="index"
if(!H.hv(b))return new P.ao(!0,b,r,null)
s=H.P(J.v(a))
if(b<0||b>=s)return P.fi(b,a,r,null,s)
return P.e_(b,r)},
ju:function(a){return new P.ao(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.cI()
s=new Error()
s.dartException=a
r=H.jV
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
jV:function(){return J.cp(this.dartException)},
k:function(a){throw H.c(a)},
e:function(a){throw H.c(P.a8(a))},
av:function(a){var s,r,q,p,o,n
a=H.jP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.e4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
e5:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ha:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fl:function(a,b){var s=b==null,r=s?null:b.method
return new H.cG(a,r,s?null:b.receiver)},
aL:function(a){if(a==null)return new H.dX(a)
if(a instanceof H.bt)return H.aK(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.aK(a,a.dartException)
return H.js(a)},
aK:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
js:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.dQ(r,16)&8191)===10)switch(q){case 438:return H.aK(a,H.fl(H.p(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.p(s)+" (Error "+q+")"
return H.aK(a,new H.bI(p,e))}}if(a instanceof TypeError){o=$.hX()
n=$.hY()
m=$.hZ()
l=$.i_()
k=$.i2()
j=$.i3()
i=$.i1()
$.i0()
h=$.i5()
g=$.i4()
f=o.U(s)
if(f!=null)return H.aK(a,H.fl(H.cc(s),f))
else{f=n.U(s)
if(f!=null){f.method="call"
return H.aK(a,H.fl(H.cc(s),f))}else{f=m.U(s)
if(f==null){f=l.U(s)
if(f==null){f=k.U(s)
if(f==null){f=j.U(s)
if(f==null){f=i.U(s)
if(f==null){f=l.U(s)
if(f==null){f=h.U(s)
if(f==null){f=g.U(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.cc(s)
return H.aK(a,new H.bI(s,f==null?e:f.method))}}}return H.aK(a,new H.cW(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.bQ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.aK(a,new P.ao(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.bQ()
return a},
aJ:function(a){var s
if(a instanceof H.bt)return a.b
if(a==null)return new H.c3(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.c3(a)},
jI:function(a,b,c,d,e,f){t.Y.a(a)
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(new P.ep("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jI)
a.$identity=s
return s},
im:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.cQ().constructor.prototype):Object.create(new H.aX(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ap
if(typeof r!=="number")return r.A()
$.ap=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.fW(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.ii(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.fW(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ii:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.hI,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.ie:H.id
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
ij:function(a,b,c,d){var s=H.fU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fW:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.il(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ij(r,!p,s,b)
if(r===0){p=$.ap
if(typeof p!=="number")return p.A()
$.ap=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bl
return new Function(p+(o==null?$.bl=H.dB("self"):o)+";return "+n+"."+H.p(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ap
if(typeof p!=="number")return p.A()
$.ap=p+1
m+=p
p="return function("+m+"){return this."
o=$.bl
return new Function(p+(o==null?$.bl=H.dB("self"):o)+"."+H.p(s)+"("+m+");}")()},
ik:function(a,b,c,d){var s=H.fU,r=H.ig
switch(b?-1:a){case 0:throw H.c(new H.cK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
il:function(a,b){var s,r,q,p,o,n,m,l=$.bl
if(l==null)l=$.bl=H.dB("self")
s=$.fT
if(s==null)s=$.fT=H.dB("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.ik(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.p(r)+"(this."+s+");"
n=$.ap
if(typeof n!=="number")return n.A()
$.ap=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.p(r)+"(this."+s+", "+m+");"
n=$.ap
if(typeof n!=="number")return n.A()
$.ap=n+1
return new Function(o+n+"}")()},
fE:function(a,b,c,d,e,f,g){return H.im(a,b,c,d,!!e,!!f,g)},
id:function(a,b){return H.dc(v.typeUniverse,H.cj(a.a),b)},
ie:function(a,b){return H.dc(v.typeUniverse,H.cj(a.c),b)},
fU:function(a){return a.a},
ig:function(a){return a.c},
dB:function(a){var s,r,q,p=new H.aX("self","target","receiver","name"),o=J.dL(Object.getOwnPropertyNames(p),t.W)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.fS("Field name "+a+" not found."))},
ci:function(a){if(a==null)H.jv("boolean expression must not be null")
return a},
jv:function(a){throw H.c(new H.cZ(a))},
jT:function(a){throw H.c(new P.cw(a))},
jD:function(a){return v.getIsolateTag(a)},
jU:function(a){return H.k(new H.bx(a))},
kB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jK:function(a){var s,r,q,p,o,n=H.cc($.hH.$1(a)),m=$.eV[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.j2($.hB.$2(a,n))
if(q!=null){m=$.eV[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.f5(s)
$.eV[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.f_[n]=s
return s}if(p==="-"){o=H.f5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.hO(a,s)
if(p==="*")throw H.c(P.hb(n))
if(v.leafTags[n]===true){o=H.f5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.hO(a,s)},
hO:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fK(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
f5:function(a){return J.fK(a,!1,null,!!a.$ik8)},
jM:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.f5(s)
else return J.fK(s,c,null,null)},
jF:function(){if(!0===$.fH)return
$.fH=!0
H.jG()},
jG:function(){var s,r,q,p,o,n,m,l
$.eV=Object.create(null)
$.f_=Object.create(null)
H.jE()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hQ.$1(o)
if(n!=null){m=H.jM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jE:function(){var s,r,q,p,o,n,m=C.F()
m=H.ba(C.G,H.ba(C.H,H.ba(C.x,H.ba(C.x,H.ba(C.I,H.ba(C.J,H.ba(C.K(C.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hH=new H.eX(p)
$.hB=new H.eY(o)
$.hQ=new H.eZ(n)},
ba:function(a,b){return a(b)||b},
is:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.c(new P.dJ("Illegal RegExp pattern ("+String(s)+")",a))},
jP:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cC:function cC(){},
aB:function aB(a,b){this.a=a
this.$ti=b},
e4:function e4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bI:function bI(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a},
dX:function dX(a){this.a=a},
bt:function bt(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a
this.b=null},
a7:function a7(){},
cT:function cT(){},
cQ:function cQ(){},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a){this.a=a},
cZ:function cZ(a){this.a=a},
bw:function bw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dN:function dN(a,b){this.a=a
this.b=b
this.c=null},
by:function by(a,b){this.a=a
this.$ti=b},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eX:function eX(a){this.a=a},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
cF:function cF(a,b){this.a=a
this.b=b},
eF:function eF(a){this.b=a},
h5:function(a,b){var s=b.c
return s==null?b.c=H.fw(a,b.z,!0):s},
h4:function(a,b){var s=b.c
return s==null?b.c=H.c7(a,"aa",[b.z]):s},
h6:function(a){var s=a.y
if(s===6||s===7||s===8)return H.h6(a.z)
return s===11||s===12},
iD:function(a){return a.cy},
bc:function(a){return H.eK(v.typeUniverse,a,!1)},
jH:function(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.ax(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
ax:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.ax(a,s,a0,a1)
if(r===s)return b
return H.hn(a,r,!0)
case 7:s=b.z
r=H.ax(a,s,a0,a1)
if(r===s)return b
return H.fw(a,r,!0)
case 8:s=b.z
r=H.ax(a,s,a0,a1)
if(r===s)return b
return H.hm(a,r,!0)
case 9:q=b.Q
p=H.ch(a,q,a0,a1)
if(p===q)return b
return H.c7(a,b.z,p)
case 10:o=b.z
n=H.ax(a,o,a0,a1)
m=b.Q
l=H.ch(a,m,a0,a1)
if(n===o&&l===m)return b
return H.fu(a,n,l)
case 11:k=b.z
j=H.ax(a,k,a0,a1)
i=b.Q
h=H.jp(a,i,a0,a1)
if(j===k&&h===i)return b
return H.hl(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ch(a,g,a0,a1)
o=b.z
n=H.ax(a,o,a0,a1)
if(f===g&&n===o)return b
return H.fv(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.dz("Attempted to substitute unexpected RTI kind "+c))}},
ch:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.ax(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
jq:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.ax(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
jp:function(a,b,c,d){var s,r=b.a,q=H.ch(a,r,c,d),p=b.b,o=H.ch(a,p,c,d),n=b.c,m=H.jq(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.d4()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
hF:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.hI(s)
return a.$S()}return null},
hJ:function(a,b){var s
if(H.h6(b))if(a instanceof H.a7){s=H.hF(a)
if(s!=null)return s}return H.cj(a)},
cj:function(a){var s
if(a instanceof P.z){s=a.$ti
return s!=null?s:H.fy(a)}if(Array.isArray(a))return H.x(a)
return H.fy(J.aI(a))},
x:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A:function(a){var s=a.$ti
return s!=null?s:H.fy(a)},
fy:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.jb(a,s)},
jb:function(a,b){var s=a instanceof H.a7?a.__proto__.__proto__.constructor:b,r=H.j0(v.typeUniverse,s.name)
b.$ccache=r
return r},
hI:function(a){var s,r,q
H.P(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.eK(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
jz:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.da(a)
q=H.eK(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.da(q):p},
ja:function(a){var s,r,q,p=this
if(p===t.K)return H.ce(p,a,H.je)
if(!H.ay(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ce(p,a,H.jh)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hv
else if(r===t.V||r===t.H)q=H.jd
else if(r===t.N)q=H.jf
else q=r===t.cJ?H.ht:null
if(q!=null)return H.ce(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.jJ)){p.r="$i"+s
return H.ce(p,a,H.jg)}}else if(s===7)return H.ce(p,a,H.j8)
return H.ce(p,a,H.j6)},
ce:function(a,b,c){a.b=c
return a.b(b)},
j9:function(a){var s,r=this,q=H.j5
if(!H.ay(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.j3
else if(r===t.K)q=H.j1
else{s=H.ck(r)
if(s)q=H.j7}r.a=q
return r.a(a)},
fB:function(a){var s,r=a.y
if(!H.ay(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.fB(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
j6:function(a){var s=this
if(a==null)return H.fB(s)
return H.J(v.typeUniverse,H.hJ(a,s),null,s,null)},
j8:function(a){if(a==null)return!0
return this.z.b(a)},
jg:function(a){var s,r=this
if(a==null)return H.fB(r)
s=r.r
if(a instanceof P.z)return!!a[s]
return!!J.aI(a)[s]},
j5:function(a){var s,r=this
if(a==null){s=H.ck(r)
if(s)return a}else if(r.b(a))return a
H.hq(a,r)},
j7:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.hq(a,s)},
hq:function(a,b){throw H.c(H.hk(H.hd(a,H.hJ(a,b),H.X(b,null))))},
fD:function(a,b,c,d){var s=null
if(H.J(v.typeUniverse,a,s,b,s))return a
throw H.c(H.hk("The type argument '"+H.X(a,s)+"' is not a subtype of the type variable bound '"+H.X(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
hd:function(a,b,c){var s=P.cx(a),r=H.X(b==null?H.cj(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
hk:function(a){return new H.c6("TypeError: "+a)},
W:function(a,b){return new H.c6("TypeError: "+H.hd(a,null,b))},
je:function(a){return a!=null},
j1:function(a){if(a!=null)return a
throw H.c(H.W(a,"Object"))},
jh:function(a){return!0},
j3:function(a){return a},
ht:function(a){return!0===a||!1===a},
kr:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.W(a,"bool"))},
kt:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool"))},
ks:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool?"))},
eL:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"double"))},
kv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double"))},
ku:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double?"))},
hv:function(a){return typeof a=="number"&&Math.floor(a)===a},
P:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.W(a,"int"))},
kx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int"))},
kw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int?"))},
jd:function(a){return typeof a=="number"},
fx:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"num"))},
kz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num"))},
ky:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num?"))},
jf:function(a){return typeof a=="string"},
cc:function(a){if(typeof a=="string")return a
throw H.c(H.W(a,"String"))},
kA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String"))},
j2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String?"))},
jm:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.X(a[q],b)
return s},
hs:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.t(a5,"T"+(q+p))
for(o=t.W,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.m(a5,j)
m=C.A.A(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.X(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.X(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.X(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.X(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.X(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
X:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.X(a.z,b)
return s}if(l===7){r=a.z
s=H.X(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.X(a.z,b)+">"
if(l===9){p=H.jr(a.z)
o=a.Q
return o.length!==0?p+("<"+H.jm(o,b)+">"):p}if(l===11)return H.hs(a,b,null)
if(l===12)return H.hs(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.m(b,n)
return b[n]}return"?"},
jr:function(a){var s,r=H.hT(a)
if(r!=null)return r
s="minified:"+a
return s},
ho:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
j0:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.eK(a,b,!1)
else if(typeof m=="number"){s=m
r=H.c8(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.c7(a,b,q)
n[b]=o
return o}else return m},
iZ:function(a,b){return H.hp(a.tR,b)},
iY:function(a,b){return H.hp(a.eT,b)},
eK:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.hj(H.hh(a,null,b,c))
r.set(b,s)
return s},
dc:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.hj(H.hh(a,b,c,!0))
q.set(c,r)
return r},
j_:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.fu(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aH:function(a,b){b.a=H.j9
b.b=H.ja
return b},
c8:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.af(null,null)
s.y=b
s.cy=c
r=H.aH(a,s)
a.eC.set(c,r)
return r},
hn:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.iW(a,b,r,c)
a.eC.set(r,s)
return s},
iW:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ay(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.af(null,null)
q.y=6
q.z=b
q.cy=c
return H.aH(a,q)},
fw:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.iV(a,b,r,c)
a.eC.set(r,s)
return s},
iV:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ay(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ck(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ck(q.z))return q
else return H.h5(a,b)}}p=new H.af(null,null)
p.y=7
p.z=b
p.cy=c
return H.aH(a,p)},
hm:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.iT(a,b,r,c)
a.eC.set(r,s)
return s},
iT:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ay(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.c7(a,"aa",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.af(null,null)
q.y=8
q.z=b
q.cy=c
return H.aH(a,q)},
iX:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.af(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aH(a,s)
a.eC.set(q,r)
return r},
db:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
iS:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
c7:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.db(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.af(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aH(a,r)
a.eC.set(p,q)
return q},
fu:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.db(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aH(a,o)
a.eC.set(q,n)
return n},
hl:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.db(m)
if(j>0){s=l>0?",":""
r=H.db(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.iS(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aH(a,o)
a.eC.set(q,r)
return r},
fv:function(a,b,c,d){var s,r=b.cy+("<"+H.db(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.iU(a,b,c,r,d)
a.eC.set(r,s)
return s},
iU:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.ax(a,b,r,0)
m=H.ch(a,c,r,0)
return H.fv(a,n,m,c!==m)}}l=new H.af(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aH(a,l)},
hh:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hj:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.iN(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.hi(a,r,h,g,!1)
else if(q===46)r=H.hi(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aG(a.u,a.e,g.pop()))
break
case 94:g.push(H.iX(a.u,g.pop()))
break
case 35:g.push(H.c8(a.u,5,"#"))
break
case 64:g.push(H.c8(a.u,2,"@"))
break
case 126:g.push(H.c8(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.ft(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.c7(p,n,o))
else{m=H.aG(p,a.e,n)
switch(m.y){case 11:g.push(H.fv(p,m,o,a.n))
break
default:g.push(H.fu(p,m,o))
break}}break
case 38:H.iO(a,g)
break
case 42:p=a.u
g.push(H.hn(p,H.aG(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.fw(p,H.aG(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.hm(p,H.aG(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.d4()
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
H.ft(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.hl(p,H.aG(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.ft(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.iQ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aG(a.u,a.e,i)},
iN:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hi:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ho(s,o.z)[p]
if(n==null)H.k('No "'+p+'" in "'+H.iD(o)+'"')
d.push(H.dc(s,o,n))}else d.push(p)
return m},
iO:function(a,b){var s=b.pop()
if(0===s){b.push(H.c8(a.u,1,"0&"))
return}if(1===s){b.push(H.c8(a.u,4,"1&"))
return}throw H.c(P.dz("Unexpected extended operation "+H.p(s)))},
aG:function(a,b,c){if(typeof c=="string")return H.c7(a,c,a.sEA)
else if(typeof c=="number")return H.iP(a,b,c)
else return c},
ft:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aG(a,b,c[s])},
iQ:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aG(a,b,c[s])},
iP:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.dz("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.dz("Bad index "+c+" for "+b.i(0)))},
J:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ay(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ay(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.J(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.J(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.J(a,b.z,c,d,e)
if(r===6)return H.J(a,b.z,c,d,e)
return r!==7}if(r===6)return H.J(a,b.z,c,d,e)
if(p===6){s=H.h5(a,d)
return H.J(a,b,c,s,e)}if(r===8){if(!H.J(a,b.z,c,d,e))return!1
return H.J(a,H.h4(a,b),c,d,e)}if(r===7){s=H.J(a,t.P,c,d,e)
return s&&H.J(a,b.z,c,d,e)}if(p===8){if(H.J(a,b,c,d.z,e))return!0
return H.J(a,b,c,H.h4(a,d),e)}if(p===7){s=H.J(a,b,c,t.P,e)
return s||H.J(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
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
if(!H.J(a,k,c,j,e)||!H.J(a,j,e,k,c))return!1}return H.hu(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return H.hu(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.jc(a,b,c,d,e)}return!1},
hu:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.J(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.J(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.J(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.J(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.J(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
jc:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.J(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ho(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.J(a,H.dc(a,b,l[p]),c,r[p],e))return!1
return!0},
ck:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ay(a))if(r!==7)if(!(r===6&&H.ck(a.z)))s=r===8&&H.ck(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jJ:function(a){var s
if(!H.ay(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ay:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
hp:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
d4:function d4(){this.c=this.b=this.a=null},
da:function da(a){this.a=a},
d3:function d3(){},
c6:function c6(a){this.a=a},
hT:function(a){return v.mangledGlobalNames[a]}},J={
fK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fG:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fH==null){H.jF()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.hb("Return interceptor for "+H.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.eD
if(o==null)o=$.eD=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.jK(a)
if(p!=null)return p
if(typeof a=="function")return C.Q
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.eD
if(o==null)o=$.eD=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
fY:function(a,b){if(a<0||a>4294967295)throw H.c(P.as(a,0,4294967295,"length",null))
return J.h_(new Array(a),b)},
fZ:function(a,b){if(a<0)throw H.c(P.fS("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("r<0>"))},
h_:function(a,b){return J.dL(H.a(a,b.h("r<0>")),b)},
dL:function(a,b){a.fixed$length=Array
return a},
aI:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bv.prototype
return J.cE.prototype}if(typeof a=="string")return J.aq.prototype
if(a==null)return J.aZ.prototype
if(typeof a=="boolean")return J.cD.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.z)return a
return J.fG(a)},
a4:function(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.ak.prototype
return a},
jA:function(a){if(typeof a=="number")return J.aC.prototype
if(typeof a=="string")return J.aq.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.ak.prototype
return a},
a5:function(a){if(typeof a=="string")return J.aq.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.ak.prototype
return a},
Y:function(a){if(typeof a=="string")return J.aq.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.z)return a
return J.fG(a)},
jB:function(a){if(typeof a=="number")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.ak.prototype
return a},
jC:function(a){if(typeof a=="number")return J.aC.prototype
if(typeof a=="string")return J.aq.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.ak.prototype
return a},
hG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.z)return a
return J.fG(a)},
fe:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jA(a).A(a,b)},
az:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aI(a).E(a,b)},
cm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jC(a).w(a,b)},
R:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.a5(a).l(a,b)},
fP:function(a,b,c){return J.a4(a).F(a,b,c)},
i6:function(a,b,c,d){return J.hG(a).dC(a,b,c,d)},
i7:function(a,b,c,d){return J.hG(a).dN(a,b,c,d)},
i8:function(a,b){return J.a4(a).t(a,b)},
aM:function(a,b){return J.a4(a).D(a,b)},
fQ:function(a,b){return J.a4(a).J(a,b)},
ff:function(a){return J.a4(a).gL(a)},
bd:function(a){return J.aI(a).gq(a)},
be:function(a){return J.a5(a).gK(a)},
cn:function(a){return J.a4(a).gai(a)},
D:function(a){return J.a4(a).gu(a)},
co:function(a){return J.a4(a).gM(a)},
v:function(a){return J.Y(a).gj(a)},
E:function(a,b,c){return J.a4(a).bq(a,b,c)},
fR:function(a,b){return J.a4(a).S(a,b)},
i9:function(a){return J.jB(a).a4(a)},
dk:function(a){return J.a4(a).N(a)},
cp:function(a){return J.aI(a).i(a)},
ab:function ab(){},
cD:function cD(){},
aZ:function aZ(){},
aQ:function aQ(){},
cJ:function cJ(){},
ak:function ak(){},
aD:function aD(){},
r:function r(a){this.$ti=a},
dM:function dM(a){this.$ti=a},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aC:function aC(){},
bv:function bv(){},
cE:function cE(){},
aq:function aq(){}},P={
iI:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.jw()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bb(new P.ek(q),1)).observe(s,{childList:true})
return new P.ej(q,s,r)}else if(self.setImmediate!=null)return P.jx()
return P.jy()},
iJ:function(a){self.scheduleImmediate(H.bb(new P.el(t.M.a(a)),0))},
iK:function(a){self.setImmediate(H.bb(new P.em(t.M.a(a)),0))},
iL:function(a){t.M.a(a)
P.iR(0,a)},
iR:function(a,b){var s=new P.eI()
s.du(a,b)
return s},
dh:function(a){return new P.d_(new P.M($.I,a.h("M<0>")),a.h("d_<0>"))},
df:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
b7:function(a,b){P.j4(a,b)},
de:function(a,b){b.bh(0,a)},
dd:function(a,b){b.ci(H.aL(a),H.aJ(a))},
j4:function(a,b){var s,r,q=new P.eM(b),p=new P.eN(b)
if(a instanceof P.M)a.c9(q,p,t.z)
else{s=t.z
if(t.f.b(a))a.bv(q,p,s)
else{r=new P.M($.I,t.c)
r.a=4
r.c=a
r.c9(q,p,s)}}},
di:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.I.cz(new P.eQ(s),t.u,t.S,t.z)},
iM:function(a){return new P.b5(a,1)},
he:function(){return C.W},
hf:function(a){return new P.b5(a,3)},
hw:function(a,b){return new P.c5(a,b.h("c5<0>"))},
dA:function(a,b){var s=H.fC(a,"error",t.K)
return new P.bk(s,b==null?P.ic(a):b)},
ic:function(a){var s
if(t.C.b(a)){s=a.gb0()
if(s!=null)return s}return C.L},
et:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.aB()
b.a=a.a
b.c=a.c
P.b4(b,q)}else{q=t.F.a(b.c)
b.a=2
b.c=a
a.c6(q)}},
b4:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.t,r=t.F,q=t.f;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.eO(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.b4(b.a,a)
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
P.eO(c,c,k.b,j.a,j.b)
return}f=$.I
if(f!==g)$.I=g
else f=c
a=a.c
if((a&15)===8)new P.eB(p,b,o).$0()
else if(i){if((a&1)!==0)new P.eA(p,j).$0()}else if((a&2)!==0)new P.ez(b,p).$0()
if(f!=null)$.I=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("aa<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.aC(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.et(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.aC(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
jk:function(a,b){var s
if(t.ag.b(a))return b.cz(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.c(P.ib(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
jj:function(){var s,r
for(s=$.b8;s!=null;s=$.b8){$.cg=null
r=s.b
$.b8=r
if(r==null)$.cf=null
s.a.$0()}},
jo:function(){$.fz=!0
try{P.jj()}finally{$.cg=null
$.fz=!1
if($.b8!=null)$.fN().$1(P.hC())}},
hz:function(a){var s=new P.d0(a),r=$.cf
if(r==null){$.b8=$.cf=s
if(!$.fz)$.fN().$1(P.hC())}else $.cf=r.b=s},
jn:function(a){var s,r,q,p=$.b8
if(p==null){P.hz(a)
$.cg=$.cf
return}s=new P.d0(a)
r=$.cg
if(r==null){s.b=p
$.b8=$.cg=s}else{q=r.b
s.b=q
$.cg=r.b=s
if(q==null)$.cf=s}},
jR:function(a){var s=null,r=$.I
if(C.e===r){P.b9(s,s,C.e,a)
return}P.b9(s,s,r,t.M.a(r.cg(a)))},
kd:function(a,b){H.fC(a,"stream",t.K)
return new P.d8(b.h("d8<0>"))},
eO:function(a,b,c,d,e){P.jn(new P.eP(d,e))},
hx:function(a,b,c,d,e){var s,r=$.I
if(r===c)return d.$0()
$.I=c
s=r
try{r=d.$0()
return r}finally{$.I=s}},
hy:function(a,b,c,d,e,f,g){var s,r=$.I
if(r===c)return d.$1(e)
$.I=c
s=r
try{r=d.$1(e)
return r}finally{$.I=s}},
jl:function(a,b,c,d,e,f,g,h,i){var s,r=$.I
if(r===c)return d.$2(e,f)
$.I=c
s=r
try{r=d.$2(e,f)
return r}finally{$.I=s}},
b9:function(a,b,c,d){t.M.a(d)
if(C.e!==c)d=c.cg(d)
P.hz(d)},
ek:function ek(a){this.a=a},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
em:function em(a){this.a=a},
eI:function eI(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=!1
this.$ti=b},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
eQ:function eQ(a){this.a=a},
b5:function b5(a,b){this.a=a
this.b=b},
b6:function b6(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
c5:function c5(a,b){this.a=a
this.$ti=b},
bk:function bk(a,b){this.a=a
this.b=b},
d1:function d1(){},
c4:function c4(a,b){this.a=a
this.$ti=b},
aU:function aU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
M:function M(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eq:function eq(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
d0:function d0(a){this.a=a
this.b=null},
bR:function bR(){},
e2:function e2(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
bS:function bS(){},
d8:function d8(a){this.$ti=a},
c9:function c9(){},
eP:function eP(a,b){this.a=a
this.b=b},
d7:function d7(){},
eG:function eG(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function(a,b){return new H.bw(a.h("@<0>").v(b).h("bw<1,2>"))},
it:function(a){return new P.aw(a.h("aw<0>"))},
iu:function(a){return new P.aw(a.h("aw<0>"))},
fs:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fr:function(a,b,c){var s=new P.aV(a,b,c.h("aV<0>"))
s.c=a.e
return s},
ip:function(a,b,c){var s,r
if(P.fA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.t($.a3,a)
try{P.ji(a,s)}finally{if(0>=$.a3.length)return H.m($.a3,-1)
$.a3.pop()}r=P.h8(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fj:function(a,b,c){var s,r
if(P.fA(a))return b+"..."+c
s=new P.cR(b)
C.a.t($.a3,a)
try{r=s
r.a=P.h8(r.a,a,", ")}finally{if(0>=$.a3.length)return H.m($.a3,-1)
$.a3.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fA:function(a){var s,r
for(s=$.a3.length,r=0;r<s;++r)if(a===$.a3[r])return!0
return!1},
ji:function(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.k())return
s=H.p(l.gm())
C.a.t(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return H.m(b,-1)
r=b.pop()
if(0>=b.length)return H.m(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){C.a.t(b,H.p(p))
return}r=H.p(p)
if(0>=b.length)return H.m(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.m(b,-1)
k-=b.pop().length+2;--j}C.a.t(b,"...")
return}}q=H.p(p)
r=H.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.t(b,m)
C.a.t(b,q)
C.a.t(b,r)},
fn:function(a,b){var s,r,q=P.it(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.e)(a),++r)q.t(0,b.a(a[r]))
return q},
h2:function(a){var s,r={}
if(P.fA(a))return"{...}"
s=new P.cR("")
try{C.a.t($.a3,a)
s.a+="{"
r.a=!0
a.cn(0,new P.dQ(r,s))
s.a+="}"}finally{if(0>=$.a3.length)return H.m($.a3,-1)
$.a3.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d5:function d5(a){this.a=a
this.c=this.b=null},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bu:function bu(){},
Z:function Z(){},
bB:function bB(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
b_:function b_(){},
bN:function bN(){},
c2:function c2(){},
cb:function cb(){},
io:function(a){if(a instanceof H.a7)return a.i(0)
return"Instance of '"+H.dZ(a)+"'"},
h1:function(a,b,c,d){var s,r=c?J.fZ(a,d):J.fY(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dP:function(a,b,c){var s,r,q=H.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.e)(a),++r)C.a.t(q,c.a(a[r]))
return J.dL(q,c)},
n:function(a,b,c){var s
if(b)return P.h0(a,c)
s=J.dL(P.h0(a,c),c)
return s},
h0:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("r<0>"))
s=H.a([],b.h("r<0>"))
for(r=J.D(a);r.k();)C.a.t(s,r.gm())
return s},
h3:function(a){return new H.cF(a,H.is(a,!1,!0,!1,!1,!1))},
h8:function(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=H.p(s.gm())
while(s.k())}else{a+=H.p(s.gm())
for(;s.k();)a=a+c+H.p(s.gm())}return a},
cx:function(a){if(typeof a=="number"||H.ht(a)||null==a)return J.cp(a)
if(typeof a=="string")return JSON.stringify(a)
return P.io(a)},
dz:function(a){return new P.bj(a)},
fS:function(a){return new P.ao(!1,null,null,a)},
ib:function(a,b,c){return new P.ao(!0,a,b,c)},
e_:function(a,b){return new P.bK(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
iB:function(a,b,c,d){if(a<b||a>c)throw H.c(P.as(a,b,c,d,null))
return a},
e0:function(a,b,c){if(0>a||a>c)throw H.c(P.as(a,0,c,"start",null))
if(a>b||b>c)throw H.c(P.as(b,a,c,"end",null))
return b},
ae:function(a,b){if(a<0)throw H.c(P.as(a,0,null,b,null))
return a},
fi:function(a,b,c,d,e){var s=H.P(e==null?J.v(b):e)
return new P.cB(s,!0,a,c,"Index out of range")},
ac:function(a){return new P.cX(a)},
hb:function(a){return new P.cV(a)},
aj:function(a){return new P.b0(a)},
a8:function(a){return new P.cv(a)},
F:function F(){},
bj:function bj(a){this.a=a},
cU:function cU(){},
cI:function cI(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cB:function cB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cX:function cX(a){this.a=a},
cV:function cV(a){this.a=a},
b0:function b0(a){this.a=a},
cv:function cv(a){this.a=a},
bQ:function bQ(){},
cw:function cw(a){this.a=a},
ep:function ep(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
l:function l(){},
G:function G(){},
L:function L(){},
z:function z(){},
d9:function d9(){},
cR:function cR(a){this.a=a},
hN:function(a,b,c){H.fD(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
hM:function(a,b,c){H.fD(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
d6:function d6(){this.b=this.a=0},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
eE:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hg:function(a,b,c,d){var s=W.eE(W.eE(W.eE(W.eE(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
en:function(a,b,c,d,e){var s=W.hA(new W.eo(c),t.I),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.i6(a,b,s,!1)}return new W.c0(a,b,s,!1,e.h("c0<0>"))},
hA:function(a,b){var s=$.I
if(s===C.e)return a
return s.dZ(a,b)},
h:function h(){},
cr:function cr(){},
cs:function cs(){},
aN:function aN(){},
bm:function bm(){},
ai:function ai(){},
dH:function dH(){},
bp:function bp(){},
d:function d(){},
f:function f(){},
T:function T(){},
cA:function cA(){},
a2:function a2(){},
a_:function a_(){},
cM:function cM(){},
ah:function ah(){},
b3:function b3(){},
ei:function ei(a){this.a=a},
bY:function bY(){},
fh:function fh(a,b){this.a=a
this.$ti=b},
c_:function c_(){},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c0:function c0(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eo:function eo(a){this.a=a}},A={Q:function Q(a,b){this.a=a
this.$ti=b},dK:function dK(a){this.a=a},c1:function c1(a,b){this.a=a
this.b=null
this.$ti=b},
fX:function(a,b){return A.ir(a,b,b)},
ir:function(a,b,c){return P.hw(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$fX(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.iM(s[m])
case 5:case 3:s.length===n||(0,H.e)(s),++m
q=2
break
case 4:return P.he()
case 1:return P.hf(o)}}},c)},
cd:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hr:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},X={aA:function aA(){},a9:function a9(a){this.b=a},a1:function a1(){},
hE:function(a,b,c){var s,r
if(c){if(!$.dg.cj(a)){s=t.S
$.dg.F(0,a,P.fm(s,s))}if(!$.dg.l(0,a).cj(b)){s=$.dg.l(0,a)
s.toString
s.F(0,b,X.hE(a,b,!1))}s=$.dg.l(0,a).l(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.bm(T.t(b+1,1,1),1,new X.eT(),s)
return C.c.a9(C.a.bm(T.t(a-b,a,-1),1,new X.eU(),s),r)},
f6:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
eT:function eT(){},
eU:function eU(){}},M={cO:function cO(){},cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
ix:function(a){var s,r,q,p,o,n,m=a.gO(a).n(),l=a.gV(a),k=a.c
if(k===$)k=H.k(H.o("target"))
k=k==null?null:k.n()
s=H.a([],t.r)
for(r=a.gC(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].n())
r=a.gX()
q=H.a([],t.l)
for(o=J.D(a.gp(a));o.k();){n=o.gm()
q.push(new Y.b(n.a,n.b,n.c))}return new M.y(m,l,k,s,r,q)},
y:function y(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
dV:function dV(a){this.a=a},
dU:function dU(a){this.a=a},
dT:function dT(a){this.a=a},
dW:function dW(a,b){this.a=a
this.b=b},
dR:function dR(){},
dS:function dS(a){this.a=a},
dI:function dI(){this.a=null},
hS:function(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},E={cz:function cz(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},G={
iF:function(a,b,c,d,e){var s=new G.b1(d,c,b,a)
s.a_()
s.bP(a,b,c,d,e)
return s},
b1:function b1(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},R={dC:function dC(a,b){this.c=a
this.d=8
this.r=b},dD:function dD(){},dE:function dE(){}},K={bf:function bf(){},cq:function cq(){},dl:function dl(a){this.a=a},dm:function dm(a){this.a=a},dn:function dn(a){this.a=a},u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},B={ct:function ct(a,b,c,d,e,f,g,h){var _=this
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
jS:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=V.fI(Z.dq(a),Z.dq(b),c,t.A)
m=H.a([],t.l)
for(r=s.gI(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
n=J.a5(o)
m.push(new Y.b(n.l(o,0),n.l(o,1),n.l(o,2)))}return m}},N={
fq:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.D(o);o.k();){r=o.gm()
s.push(new K.u(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.D(s);s.k();){q=s.gm()
r.push(new K.u(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.D(r);r.k();){p=r.gm()
q.push(new K.u(p.a,p.b,p.c,p.d))}r=q}else r=null
return new N.bT(o,s,a.c,r,a.e,a.f,a.r)},
iE:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=t.O,a=a2.r2,a0=N.fq(a2.rx),a1=a2.dy
a1=a1==null?c:J.E(a1,new V.al(),t.G)
if(a1==null)a1=H.a([],b)
s=t.G
a1=P.n(a1,!0,s)
r=a2.fr
r=r==null?c:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],b):r,!0,s)
q=a2.fx
q=q==null?c:J.E(q,new V.an(),s)
b=P.n(q==null?H.a([],b):q,!0,s)
s=a2.x
q=a2.y
p=a2.z
o=a2.Q
n=o.a
m=o.b
o=o.c
l=a2.gO(a2).n()
k=a2.gV(a2)
j=a2.c
if(j===$)j=H.k(H.o("target"))
j=j==null?c:j.n()
i=H.a([],t.r)
for(h=a2.gC(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].n())
h=a2.gX()
g=H.a([],t.l)
for(e=J.D(a2.gp(a2));e.k();){d=e.gm()
g.push(new Y.b(d.a,d.b,d.c))}return new N.bU(a2.r1,new Y.b(a.a,a.b,a.c),a0,c,c,s,q,p,new Y.b(n,m,o),a2.ch,a2.cx,a2.cy,a2.db,a2.dx,a1,r,b,l,k,j,i,h,g)},
ia:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=t.O,a=a2.r2,a0=N.fq(a2.rx),a1=a2.dy
a1=a1==null?c:J.E(a1,new V.al(),t.G)
if(a1==null)a1=H.a([],b)
s=t.G
a1=P.n(a1,!0,s)
r=a2.fr
r=r==null?c:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],b):r,!0,s)
q=a2.fx
q=q==null?c:J.E(q,new V.an(),s)
b=P.n(q==null?H.a([],b):q,!0,s)
s=a2.x
q=a2.y
p=a2.z
o=a2.Q
n=o.a
m=o.b
o=o.c
l=a2.gO(a2).n()
k=a2.gV(a2)
j=a2.c
if(j===$)j=H.k(H.o("target"))
j=j==null?c:j.n()
i=H.a([],t.r)
for(h=a2.gC(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].n())
h=a2.gX()
g=H.a([],t.l)
for(e=J.D(a2.gp(a2));e.k();){d=e.gm()
g.push(new Y.b(d.a,d.b,d.c))}return new N.bh(a2.aH,a2.aI,a2.aJ,a2.aK,a2.aL,a2.r1,new Y.b(a.a,a.b,a.c),a0,c,c,s,q,p,new Y.b(n,m,o),a2.ch,a2.cx,a2.cy,a2.db,a2.dx,a1,r,b,l,k,j,i,h,g)},
ih:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=t.O,a=a2.r2,a0=N.fq(a2.rx),a1=a2.dy
a1=a1==null?c:J.E(a1,new V.al(),t.G)
if(a1==null)a1=H.a([],b)
s=t.G
a1=P.n(a1,!0,s)
r=a2.fr
r=r==null?c:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],b):r,!0,s)
q=a2.fx
q=q==null?c:J.E(q,new V.an(),s)
b=P.n(q==null?H.a([],b):q,!0,s)
s=a2.x
q=a2.y
p=a2.z
o=a2.Q
n=o.a
m=o.b
o=o.c
l=a2.gO(a2).n()
k=a2.gV(a2)
j=a2.c
if(j===$)j=H.k(H.o("target"))
j=j==null?c:j.n()
i=H.a([],t.r)
for(h=a2.gC(),g=h.length,f=0;f<h.length;h.length===g||(0,H.e)(h),++f)i.push(h[f].n())
h=a2.gX()
g=H.a([],t.l)
for(e=J.D(a2.gp(a2));e.k();){d=e.gm()
g.push(new Y.b(d.a,d.b,d.c))}return new N.bo(a2.aH,a2.aI,a2.aJ,a2.aK,a2.aL,a2.r1,new Y.b(a.a,a.b,a.c),a0,c,c,s,q,p,new Y.b(n,m,o),a2.ch,a2.cx,a2.cy,a2.db,a2.dx,a1,r,b,l,k,j,i,h,g)},
iy:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.dy
a=a==null?b:J.E(a,new V.al(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.n(a,!0,s)
r=a0.fr
r=r==null?b:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],t.O):r,!0,s)
q=a0.fx
q=q==null?b:J.E(q,new V.an(),s)
s=P.n(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.z
n=a0.Q
m=n.a
l=n.b
n=n.c
k=a0.gO(a0).n()
j=a0.gV(a0)
i=a0.c
if(i===$)i=H.k(H.o("target"))
i=i==null?b:i.n()
h=H.a([],t.r)
for(g=a0.gC(),f=g.length,e=0;e<g.length;g.length===f||(0,H.e)(g),++e)h.push(g[e].n())
g=a0.gX()
f=H.a([],t.l)
for(d=J.D(a0.gp(a0));d.k();){c=d.gm()
f.push(new Y.b(c.a,c.b,c.c))}return new N.bJ(q,p,o,new Y.b(m,l,n),a0.ch,a0.cx,a0.cy,a0.db,a0.dx,a,r,s,k,j,i,h,g,f)},
iC:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.dy
a=a==null?b:J.E(a,new V.al(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.n(a,!0,s)
r=a0.fr
r=r==null?b:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],t.O):r,!0,s)
q=a0.fx
q=q==null?b:J.E(q,new V.an(),s)
s=P.n(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.z
n=a0.Q
m=n.a
l=n.b
n=n.c
k=a0.gO(a0).n()
j=a0.gV(a0)
i=a0.c
if(i===$)i=H.k(H.o("target"))
i=i==null?b:i.n()
h=H.a([],t.r)
for(g=a0.gC(),f=g.length,e=0;e<g.length;g.length===f||(0,H.e)(g),++e)h.push(g[e].n())
g=a0.gX()
f=H.a([],t.l)
for(d=J.D(a0.gp(a0));d.k();){c=d.gm()
f.push(new Y.b(c.a,c.b,c.c))}return new N.bL(q,p,o,new Y.b(m,l,n),a0.ch,a0.cx,a0.cy,a0.db,a0.dx,a,r,s,k,j,i,h,g,f)},
fp:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.dy
a=a==null?b:J.E(a,new V.al(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.n(a,!0,s)
r=a0.fr
r=r==null?b:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],t.O):r,!0,s)
q=a0.fx
q=q==null?b:J.E(q,new V.an(),s)
s=P.n(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.z
n=a0.Q
m=n.a
l=n.b
n=n.c
k=a0.gO(a0).n()
j=a0.gV(a0)
i=a0.c
if(i===$)i=H.k(H.o("target"))
i=i==null?b:i.n()
h=H.a([],t.r)
for(g=a0.gC(),f=g.length,e=0;e<g.length;g.length===f||(0,H.e)(g),++e)h.push(g[e].n())
g=a0.gX()
f=H.a([],t.l)
for(d=J.D(a0.gp(a0));d.k();){c=d.gm()
f.push(new Y.b(c.a,c.b,c.c))}return new N.bP(q,p,o,new Y.b(m,l,n),a0.ch,a0.cx,a0.cy,a0.db,a0.dx,a,r,s,k,j,i,h,g,f)},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bU:function bU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aH=a
_.aI=b
_.aJ=c
_.aK=d
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
bo:function bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aH=a
_.aI=b
_.aJ=c
_.aK=d
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
bL:function bL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cL:function cL(){},
e1:function e1(a){this.a=a}},V={
iG:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.dy
a=a==null?b:J.E(a,new V.al(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.n(a,!0,s)
r=a0.fr
r=r==null?b:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],t.O):r,!0,s)
q=a0.fx
q=q==null?b:J.E(q,new V.an(),s)
s=P.n(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.z
n=a0.Q
m=n.a
l=n.b
n=n.c
k=a0.gO(a0).n()
j=a0.gV(a0)
i=a0.c
if(i===$)i=H.k(H.o("target"))
i=i==null?b:i.n()
h=H.a([],t.r)
for(g=a0.gC(),f=g.length,e=0;e<g.length;g.length===f||(0,H.e)(g),++e)h.push(g[e].n())
g=a0.gX()
f=H.a([],t.l)
for(d=J.D(a0.gp(a0));d.k();){c=d.gm()
f.push(new Y.b(c.a,c.b,c.c))}return new V.H(q,p,o,new Y.b(m,l,n),a0.ch,a0.cx,a0.cy,a0.db,a0.dx,a,r,s,k,j,i,h,g,f)},
iH:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.dy
a=a==null?b:J.E(a,new V.al(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.n(a,!0,s)
r=a0.fr
r=r==null?b:J.E(r,new V.am(),s)
r=P.n(r==null?H.a([],t.O):r,!0,s)
q=a0.fx
q=q==null?b:J.E(q,new V.an(),s)
s=P.n(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.z
n=a0.Q
m=n.a
l=n.b
n=n.c
k=a0.gO(a0).n()
j=a0.gV(a0)
i=a0.c
if(i===$)i=H.k(H.o("target"))
i=i==null?b:i.n()
h=H.a([],t.r)
for(g=a0.gC(),f=g.length,e=0;e<g.length;g.length===f||(0,H.e)(g),++e)h.push(g[e].n())
g=a0.gX()
f=H.a([],t.l)
for(d=J.D(a0.gp(a0));d.k();){c=d.gm()
f.push(new Y.b(c.a,c.b,c.c))}return new V.bV(a0.r1,a0.r2,q,p,o,new Y.b(m,l,n),a0.ch,a0.cx,a0.cy,a0.db,a0.dx,a,r,s,k,j,i,h,g,f)},
H:function H(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
al:function al(){},
am:function am(){},
an:function an(){},
ef:function ef(){},
eg:function eg(){},
ea:function ea(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
e9:function e9(a){this.a=a},
e7:function e7(){},
e8:function e8(){},
ee:function ee(){},
ed:function ed(){},
cY:function cY(){},
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
bg:function bg(){},
fJ:function(a,b,c){var s,r,q=t.p,p=V.fI(Z.a6(null,J.E(a,new V.f0(),q).N(0)),Z.a6(null,J.E(b,new V.f1(),q).N(0)),c,t.A)
q=p.gI(p)
s=H.x(q)
r=s.h("O<1,u>")
return P.n(new H.O(q,s.h("u(1)").a(new V.f2()),r),!0,r.h("B.E"))},
fI:function(a,b,c,d){return d.a(J.fe(J.cm(a,1-c),J.cm(b,c)))},
f3:function(a,b,c,d){return d.a(J.fe(J.cm(a,1-c),J.cm(b,c)))},
hK:function(a,b,c){if(c>=1)return new S.w(b-1,1,t.d)
if(c<=0)return new S.w(a,0,t.d)
return new S.w(J.i9(V.fI(a,b,c,t.V)),C.b.a1((b-a)*c,1),t.d)},
hD:function(a){return new V.eS(a,a.length-1)},
f8:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.Y(r),p=T.t(q.gj(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.e)(p),++m){if(q.gj(r)===0)H.k(H.U())
s.push(n.a(q.l(r,q.gj(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.Y(q),o=T.t(p.gj(q),0,1),n=o.length,l=a.$ti,k=l.h("Z.E"),l=l.h("ag<Z.E>"),m=0;m<o.length;o.length===n||(0,H.e)(o),++m){j=H.P(o[m])
i=new H.ag(a,j,null,l)
i.b4(a,j,null,k)
r.push(V.hD(i.N(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=T.t(p.gj(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.e)(q),++m){g=q[m]
if(typeof g!=="number")return g.A()
l=H.P(g+1)
P.e0(0,l,r.length)
k=new H.ag(r,0,l,n)
k.b4(r,0,l,o)
s.push(V.hD(k.N(0)).$1(h))}return s},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
eS:function eS(a,b){this.a=a
this.b=b},
eR:function eR(){},
jL:function(){var s=new V.cP()
s.ds()
s.aP()},
cP:function cP(){var _=this
_.a=0
_.x=_.r=_.f=_.d=null}},Q={cu:function cu(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},dG:function dG(){},dF:function dF(){}},T={
t:function(a,b,c){var s,r=H.a([],t.X)
if(c>0)for(s=b;s<a;s+=c)C.a.t(r,s)
else for(s=b;s>a;s+=c)C.a.t(r,s)
return r},
eW:function(a,b){var s,r,q,p=J.a5(a)
if(p.gK(a))return H.a([],b.h("r<w<q,0>>"))
s=H.a([],b.h("r<w<q,0>>"))
for(r=t.dq.v(b).h("w<1,2>"),q=0;q<p.gj(a);++q)C.a.t(s,new S.w(q,p.l(a,q),r))
return s},
fL:function(a,b){if(a.length===0)return b.a(0)
return C.a.W(a,new T.fc(b))},
f4:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=T.t(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.al()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return Z.a6(null,l)},
jt:function(a,b,c){var s,r,q,p,o=T.t(C.b.e0((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.e)(o),++q){p=o[q]
if(typeof p!=="number")return p.w()
n.push(H.a([p*c+b],r))}return Z.a6(null,n)},
aW:function(a,b,c){var s,r,q,p,o,n=J.a5(a)
if(n.gK(a))return a
s=n.gj(a)
if(s>b)throw H.c("Trying to stretch an array to a length shorter than its own")
r=T.t(b,0,1)
q=H.x(r)
p=q.h("O<1,j>")
o=new H.O(r,q.h("j(1)").a(new T.fb(b,s)),p)
q=H.a([],c.h("r<0>"))
for(r=new H.V(o,o.gj(o),p.h("V<B.E>")),p=p.h("B.E");r.k();)q.push(n.l(a,C.b.a4(p.a(r.d))))
return q},
jN:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("r<0>"))
for(s=T.t(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.w()
n=C.b.a9(p*o,l)
if(n<0||n>=o)return H.m(a,n)
k.push(a[n])}s=H.a([],d.h("r<0>"))
for(r=T.t(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.e)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.w()
m=C.b.a9(p*n,l)
if(m<0||m>=n)return H.m(b,m)
s.push(b[m])}return new S.w(k,s,c.h("@<i<0>>").v(d.h("i<0>")).h("w<1,2>"))},
fM:function(a,b){var s=F.dO(a,new T.fd(b),b)
return P.n(s,!0,s.$ti.h("l.E"))},
hV:function(a,b){var s=P.n(a,!0,b)
if(0>=s.length)return H.m(s,-1)
s.pop()
return s},
jW:function(a,b){var s,r,q,p=H.a([],b.h("r<0>")),o=P.iu(b)
for(s=H.x(a).h("at<1>"),r=new H.at(a,s),r=new H.V(r,r.gj(r),s.h("V<B.E>")),s=s.h("B.E");r.k();){q=s.a(r.d)
if(!o.aa(0,q)){C.a.t(p,q)
o.t(0,q)}}s=b.h("at<0>")
return P.n(new H.at(p,s),!0,s.h("B.E"))},
fc:function fc(a){this.a=a},
fb:function fb(a,b){this.a=a
this.b=b},
fd:function fd(a){this.a=a}},O={cH:function cH(){},bF:function bF(a){this.a=a},bG:function bG(a){this.a=a},bH:function bH(a){this.a=a},bE:function bE(a){this.a=a},bD:function bD(a){this.a=a}},Z={
a6:function(a,b){var s,r,q=new Z.ad(b)
if(a==null){s=q.gI(q).length
r=q.gI(q).length!==0?J.v(C.a.gL(q.gI(q))):0
a=new S.w(s,r,t.o)
s=a}else s=a
q.sdv(t.o.a(s))
return q},
dp:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=T.t(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=H.a([],q)
for(n=T.t(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.e)(n),++l)o.push(a)
j.push(o)}return Z.a6(b,j)},
dq:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.a4(a),r=s.gu(a),q=t.n;r.k();){p=r.gm()
o.push(H.a([p.a,p.b,p.c],q))}return Z.a6(new S.w(s.gj(a),3,t.o),o)},
fg:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=T.t(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=H.a([],q)
for(m=T.t(a,0,1),l=m.length,k=J.aI(o),j=0;j<m.length;m.length===l||(0,H.e)(m),++j)if(k.E(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return Z.a6(new S.w(a,a,t.o),i)},
jQ:function(a,b){var s=Z.hR(a),r=Z.jX(b)
return C.a.W(H.a([r,s,r.cR()],t.J),new Z.fa())},
hR:function(a){var s=t.n
return Z.a6(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
jX:function(a){var s,r,q,p,o,n
if(a.br()===0)return Z.fg(3)
s=a.al(0,Math.sqrt(a.br()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.cM(0)
p=q.al(0,Math.sqrt(q.br()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=Z.a6(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return Z.hR(o).aj(n)},
ad:function ad(a){this.a=a
this.b=null},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dv:function dv(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
dy:function dy(a){this.a=a},
ds:function ds(){},
dr:function dr(a){this.a=a},
fa:function fa(){}},Y={b:function b(a,b,c){this.a=a
this.b=b
this.c=c},eh:function eh(a){this.a=a}},S={w:function w(a,b,c){this.a=a
this.b=b
this.$ti=c},b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},F={
dO:function(a,b,c){return F.iv(a,b,c,c)},
iv:function(a,b,c,d){return P.hw(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$dO(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.Y(s),l=0
case 2:if(!(l<m.gj(s))){p=4
break}k=m.l(s,l)
p=H.ci(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.he()
case 1:return P.hf(n)}}},d)}}
var w=[C,H,J,P,W,A,X,M,E,G,R,K,B,N,V,Q,T,O,Z,Y,S,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fk.prototype={}
J.ab.prototype={
E:function(a,b){return a===b},
gq:function(a){return H.ar(a)},
i:function(a){return"Instance of '"+H.dZ(a)+"'"}}
J.cD.prototype={
i:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$iK:1}
J.aZ.prototype={
E:function(a,b){return null==b},
i:function(a){return"null"},
gq:function(a){return 0},
$iL:1}
J.aQ.prototype={
gq:function(a){return 0},
i:function(a){return String(a)}}
J.cJ.prototype={}
J.ak.prototype={}
J.aD.prototype={
i:function(a){var s=a[$.hW()]
if(s==null)return this.di(a)
return"JavaScript function for "+J.cp(s)},
$iaP:1}
J.r.prototype={
t:function(a,b){H.x(a).c.a(b)
if(!!a.fixed$length)H.k(P.ac("add"))
a.push(b)},
e6:function(a,b,c){var s,r
H.x(a).h("l<1>").a(c)
if(!!a.fixed$length)H.k(P.ac("insertAll"))
P.iB(b,0,a.length,"index")
if(!t.Q.b(c))c=J.dk(c)
s=J.v(c)
a.length=a.length+s
r=b+s
this.bJ(a,r,a.length,a,b)
this.d2(a,b,r,c)},
ef:function(a,b){var s
if(!!a.fixed$length)H.k(P.ac("remove"))
for(s=0;s<a.length;++s)if(J.az(a[s],b)){a.splice(s,1)
return!0}return!1},
c7:function(a,b,c){var s,r,q,p,o
H.x(a).h("K(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.ci(b.$1(p)))s.push(p)
if(a.length!==r)throw H.c(P.a8(a))}o=s.length
if(o===r)return
this.sj(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
D:function(a,b){var s
H.x(a).h("l<1>").a(b)
if(!!a.fixed$length)H.k(P.ac("addAll"))
if(Array.isArray(b)){this.dB(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gm())},
dB:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.c(P.a8(a))
for(r=0;r<s;++r)a.push(b[r])},
bq:function(a,b,c){var s=H.x(a)
return new H.O(a,s.v(c).h("1(2)").a(b),s.h("@<1>").v(c).h("O<1,2>"))},
cs:function(a,b){var s,r=P.h1(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.F(r,s,H.p(a[s]))
return r.join(b)},
ea:function(a){return this.cs(a,"")},
S:function(a,b){return H.cS(a,b,null,H.x(a).c)},
W:function(a,b){var s,r,q
H.x(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.c(H.U())
if(0>=s)return H.m(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.c(P.a8(a))}return r},
bm:function(a,b,c,d){var s,r,q
d.a(b)
H.x(a).v(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.c(P.a8(a))}return r},
J:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
gL:function(a){if(a.length>0)return a[0]
throw H.c(H.U())},
gM:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.U())},
bJ:function(a,b,c,d,e){var s,r,q,p,o
H.x(a).h("l<1>").a(d)
if(!!a.immutable$list)H.k(P.ac("setRange"))
P.e0(b,c,a.length)
s=c-b
if(s===0)return
P.ae(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.fR(d,e).a5(0,!1)
q=0}p=J.Y(r)
if(q+s>p.gj(r))throw H.c(H.iq())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.l(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.l(r,q+o)},
d2:function(a,b,c,d){return this.bJ(a,b,c,d,0)},
aG:function(a,b){var s,r
H.x(a).h("K(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.ci(b.$1(a[r])))return!1
if(a.length!==s)throw H.c(P.a8(a))}return!0},
aa:function(a,b){var s
for(s=0;s<a.length;++s)if(J.az(a[s],b))return!0
return!1},
gK:function(a){return a.length===0},
gai:function(a){return a.length!==0},
i:function(a){return P.fj(a,"[","]")},
a5:function(a,b){var s=H.a(a.slice(0),H.x(a))
return s},
N:function(a){return this.a5(a,!0)},
gu:function(a){return new J.bi(a,a.length,H.x(a).h("bi<1>"))},
gq:function(a){return H.ar(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.k(P.ac("set length"))
if(b<0)throw H.c(P.as(b,0,null,"newLength",null))
if(b>a.length)H.x(a).c.a(null)
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.c(H.fF(a,b))
return a[b]},
F:function(a,b,c){H.x(a).c.a(c)
if(!!a.immutable$list)H.k(P.ac("indexed set"))
if(b>=a.length||b<0)throw H.c(H.fF(a,b))
a[b]=c},
$iC:1,
$il:1,
$ii:1}
J.dM.prototype={}
J.bi.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.e(q))
s=r.c
if(s>=p){r.sc0(null)
return!1}r.sc0(q[s]);++r.c
return!0},
sc0:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
J.aC.prototype={
a4:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.ac(""+a+".toInt()"))},
e0:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.c(P.ac(""+a+".ceil()"))},
bw:function(a,b){var s,r
if(b>20)throw H.c(P.as(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0)r=1/a<0
else r=!1
if(r)return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
A:function(a,b){H.fx(b)
return a+b},
w:function(a,b){return a*b},
a1:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c8(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.c8(a,b)},
c8:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.ac("Result of truncating division is "+H.p(s)+": "+H.p(a)+" ~/ "+b))},
dQ:function(a,b){var s
if(a>0)s=this.dP(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dP:function(a,b){return b>31?0:a>>>b},
$ij:1,
$iN:1}
J.bv.prototype={$iq:1}
J.cE.prototype={}
J.aq.prototype={
A:function(a,b){H.cc(b)
return a+b},
dd:function(a,b,c){if(b<0)throw H.c(P.e_(b,null))
if(b>c)throw H.c(P.e_(b,null))
if(c>a.length)throw H.c(P.e_(c,null))
return a.substring(b,c)},
i:function(a){return a},
gq:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$idY:1,
$ia0:1}
H.aF.prototype={
gu:function(a){var s=H.A(this)
return new H.bn(J.D(this.gZ()),s.h("@<1>").v(s.Q[1]).h("bn<1,2>"))},
gj:function(a){return J.v(this.gZ())},
gK:function(a){return J.be(this.gZ())},
gai:function(a){return J.cn(this.gZ())},
S:function(a,b){var s=H.A(this)
return H.fV(J.fR(this.gZ(),b),s.c,s.Q[1])},
gL:function(a){return H.A(this).Q[1].a(J.ff(this.gZ()))},
gM:function(a){return H.A(this).Q[1].a(J.co(this.gZ()))},
i:function(a){return J.cp(this.gZ())}}
H.bn.prototype={
k:function(){return this.a.k()},
gm:function(){return this.$ti.Q[1].a(this.a.gm())},
$iG:1}
H.aO.prototype={
gZ:function(){return this.a}}
H.bZ.prototype={$iC:1}
H.bX.prototype={
l:function(a,b){return this.$ti.Q[1].a(J.R(this.a,b))},
F:function(a,b,c){var s=this.$ti
J.fP(this.a,b,s.c.a(s.Q[1].a(c)))},
t:function(a,b){var s=this.$ti
J.i8(this.a,s.c.a(s.Q[1].a(b)))},
D:function(a,b){var s=this.$ti
J.aM(this.a,H.fV(s.h("l<2>").a(b),s.Q[1],s.c))},
$iC:1,
$ii:1}
H.S.prototype={
gZ:function(){return this.a}}
H.bx.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.f7.prototype={
$0:function(){var s=new P.M($.I,t.ck)
s.bV(null)
return s},
$S:16}
H.C.prototype={}
H.B.prototype={
gu:function(a){var s=this
return new H.V(s,s.gj(s),H.A(s).h("V<B.E>"))},
gK:function(a){return this.gj(this)===0},
gL:function(a){if(this.gj(this)===0)throw H.c(H.U())
return this.J(0,0)},
gM:function(a){var s=this
if(s.gj(s)===0)throw H.c(H.U())
return s.J(0,s.gj(s)-1)},
W:function(a,b){var s,r,q,p=this
H.A(p).h("B.E(B.E,B.E)").a(b)
s=p.gj(p)
if(s===0)throw H.c(H.U())
r=p.J(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.J(0,q))
if(s!==p.gj(p))throw H.c(P.a8(p))}return r},
S:function(a,b){return H.cS(this,b,null,H.A(this).h("B.E"))},
a5:function(a,b){return P.n(this,b,H.A(this).h("B.E"))},
N:function(a){return this.a5(a,!0)}}
H.ag.prototype={
b4:function(a,b,c,d){var s,r=this.b
P.ae(r,"start")
s=this.c
if(s!=null){P.ae(s,"end")
if(r>s)throw H.c(P.as(r,0,s,"start",null))}},
gdI:function(){var s=J.v(this.a),r=this.c
if(r==null||r>s)return s
return r},
gdR:function(){var s=J.v(this.a),r=this.b
if(r>s)return s
return r},
gj:function(a){var s,r=J.v(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.H()
return s-q},
J:function(a,b){var s=this,r=s.gdR()+b
if(b<0||r>=s.gdI())throw H.c(P.fi(b,s,"index",null,null))
return J.fQ(s.a,r)},
S:function(a,b){var s,r,q=this
P.ae(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.br(q.$ti.h("br<1>"))
return H.cS(q.a,s,r,q.$ti.c)},
a5:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.Y(n),l=m.gj(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.fZ(0,n):J.fY(0,n)}r=P.h1(s,m.J(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.F(r,q,m.J(n,o+q))
if(m.gj(n)<l)throw H.c(P.a8(p))}return r},
N:function(a){return this.a5(a,!0)}}
H.V.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a,p=q.gj(q)
if(r.b!==p)throw H.c(P.a8(q))
s=r.c
if(s>=p){r.saq(null)
return!1}r.saq(q.J(0,s));++r.c
return!0},
saq:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
H.aR.prototype={
gu:function(a){var s=H.A(this)
return new H.bC(J.D(this.a),this.b,s.h("@<1>").v(s.Q[1]).h("bC<1,2>"))},
gj:function(a){return J.v(this.a)},
gK:function(a){return J.be(this.a)},
gL:function(a){return this.b.$1(J.ff(this.a))},
gM:function(a){return this.b.$1(J.co(this.a))}}
H.bq.prototype={$iC:1}
H.bC.prototype={
k:function(){var s=this,r=s.b
if(r.k()){s.saq(s.c.$1(r.gm()))
return!0}s.saq(null)
return!1},
gm:function(){return this.$ti.Q[1].a(this.a)},
saq:function(a){this.a=this.$ti.h("2?").a(a)}}
H.O.prototype={
gj:function(a){return J.v(this.a)},
J:function(a,b){return this.b.$1(J.fQ(this.a,b))}}
H.aT.prototype={
gu:function(a){return new H.bW(J.D(this.a),this.b,this.$ti.h("bW<1>"))}}
H.bW.prototype={
k:function(){var s,r
for(s=this.a,r=this.b;s.k();)if(H.ci(r.$1(s.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.au.prototype={
S:function(a,b){P.ae(b,"count")
return new H.au(this.a,this.b+b,H.A(this).h("au<1>"))},
gu:function(a){return new H.bO(J.D(this.a),this.b,H.A(this).h("bO<1>"))}}
H.aY.prototype={
gj:function(a){var s=J.v(this.a)-this.b
if(s>=0)return s
return 0},
S:function(a,b){P.ae(b,"count")
return new H.aY(this.a,this.b+b,this.$ti)},
$iC:1}
H.bO.prototype={
k:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gm:function(){return this.a.gm()}}
H.br.prototype={
gu:function(a){return C.E},
gK:function(a){return!0},
gj:function(a){return 0},
gL:function(a){throw H.c(H.U())},
gM:function(a){throw H.c(H.U())},
S:function(a,b){P.ae(b,"count")
return this}}
H.bs.prototype={
k:function(){return!1},
gm:function(){throw H.c(H.U())},
$iG:1}
H.at.prototype={
gj:function(a){return J.v(this.a)},
J:function(a,b){var s=this.a,r=J.Y(s)
return r.J(s,r.gj(s)-1-b)}}
H.ca.prototype={}
H.cC.prototype={
i:function(a){var s="<"+C.a.cs([H.jz(this.$ti.c)],", ")+">"
return this.a.i(0)+" with "+s}}
H.aB.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.jH(H.hF(this.a),this.$ti)}}
H.e4.prototype={
U:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.bI.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.cG.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.cW.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.dX.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bt.prototype={}
H.c3.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaE:1}
H.a7.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.hU(r==null?"unknown":r)+"'"},
$iaP:1,
gew:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cT.prototype={}
H.cQ.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.hU(s)+"'"}}
H.aX.prototype={
E:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.aX))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gq:function(a){var s,r=this.c
if(r==null)s=H.ar(this.a)
else s=typeof r!=="object"?J.bd(r):H.ar(r)
return(s^H.ar(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.p(this.d)+"' of "+("Instance of '"+H.dZ(t.K.a(s))+"'")}}
H.cK.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.cZ.prototype={
i:function(a){return"Assertion failed: "+P.cx(this.a)}}
H.bw.prototype={
gj:function(a){return this.a},
gct:function(){return new H.by(this,H.A(this).h("by<1>"))},
cj:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.dG(s,a)}else return this.e7(a)},
e7:function(a){var s=this.d
if(s==null)return!1
return this.bn(this.bb(s,C.c.gq(a)&0x3ffffff),a)>=0},
l:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.az(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.az(p,b)
q=r==null?n:r.b
return q}else return o.e8(b)},
e8:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bb(q,J.bd(a)&0x3ffffff)
r=this.bn(s,a)
if(r<0)return null
return s[r].b},
F:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.A(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.bR(s==null?m.b=m.bc():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bR(r==null?m.c=m.bc():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bc()
p=J.bd(b)&0x3ffffff
o=m.bb(q,p)
if(o==null)m.be(q,p,[m.b6(b,c)])
else{n=m.bn(o,b)
if(n>=0)o[n].b=c
else o.push(m.b6(b,c))}}},
cn:function(a,b){var s,r,q=this
H.A(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.c(P.a8(q))
s=s.c}},
bR:function(a,b,c){var s,r=this,q=H.A(r)
q.c.a(b)
q.Q[1].a(c)
s=r.az(a,b)
if(s==null)r.be(a,b,r.b6(b,c))
else s.b=c},
b6:function(a,b){var s=this,r=H.A(s),q=new H.dN(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
bn:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.az(a[r].a,b))return r
return-1},
i:function(a){return P.h2(this)},
az:function(a,b){return a[b]},
bb:function(a,b){return a[b]},
be:function(a,b,c){a[b]=c},
dH:function(a,b){delete a[b]},
dG:function(a,b){return this.az(a,b)!=null},
bc:function(){var s="<non-identifier-key>",r=Object.create(null)
this.be(r,s,r)
this.dH(r,s)
return r}}
H.dN.prototype={}
H.by.prototype={
gj:function(a){return this.a.a},
gK:function(a){return this.a.a===0},
gu:function(a){var s=this.a,r=new H.bz(s,s.r,this.$ti.h("bz<1>"))
r.c=s.e
return r}}
H.bz.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.a8(q))
s=r.c
if(s==null){r.sbS(null)
return!1}else{r.sbS(s.a)
r.c=s.c
return!0}},
sbS:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
H.eX.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.eY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:20}
H.eZ.prototype={
$1:function(a){return this.a(H.cc(a))},
$S:21}
H.cF.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
cm:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.eF(s)},
$idY:1}
H.eF.prototype={}
H.af.prototype={
h:function(a){return H.dc(v.typeUniverse,this,a)},
v:function(a){return H.j_(v.typeUniverse,this,a)}}
H.d4.prototype={}
H.da.prototype={
i:function(a){return H.X(this.a,null)}}
H.d3.prototype={
i:function(a){return this.a}}
H.c6.prototype={}
P.ek.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
P.ej.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:18}
P.el.prototype={
$0:function(){this.a.$0()},
$S:8}
P.em.prototype={
$0:function(){this.a.$0()},
$S:8}
P.eI.prototype={
du:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bb(new P.eJ(this,b),0),a)
else throw H.c(P.ac("`setTimeout()` not found."))}}
P.eJ.prototype={
$0:function(){this.b.$0()},
$S:0}
P.d_.prototype={
bh:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bV(b)
else{s=r.a
if(q.h("aa<1>").b(b))s.bX(b)
else s.b8(q.c.a(b))}},
ci:function(a,b){var s=this.a
if(this.b)s.ad(a,b)
else s.dD(a,b)}}
P.eM.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:24}
P.eN.prototype={
$2:function(a,b){this.a.$2(1,new H.bt(a,t.k.a(b)))},
$S:25}
P.eQ.prototype={
$2:function(a,b){this.a(H.P(a),b)},
$S:34}
P.b5.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.p(this.a)+")"}}
P.b6.prototype={
gm:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gm()},
k:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("G<1>");!0;){r=m.c
if(r!=null)if(r.k())return!0
else m.sc5(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.b5){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sbU(null)
return!1}if(0>=o.length)return H.m(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.D(r))
if(n instanceof P.b6){r=m.d
if(r==null)r=m.d=[]
C.a.t(r,m.a)
m.a=n.a
continue}else{m.sc5(n)
continue}}}}else{m.sbU(q)
return!0}}return!1},
sbU:function(a){this.b=this.$ti.h("1?").a(a)},
sc5:function(a){this.c=this.$ti.h("G<1>?").a(a)},
$iG:1}
P.c5.prototype={
gu:function(a){return new P.b6(this.a(),this.$ti.h("b6<1>"))}}
P.bk.prototype={
i:function(a){return H.p(this.a)},
$iF:1,
gb0:function(){return this.b}}
P.d1.prototype={
ci:function(a,b){var s
H.fC(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.c(P.aj("Future already completed"))
s.ad(a,b)}}
P.c4.prototype={
bh:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.c(P.aj("Future already completed"))
s.bZ(r.h("1/").a(b))}}
P.aU.prototype={
ed:function(a){if((this.c&15)!==6)return!0
return this.b.b.bs(t.al.a(this.d),a.a,t.cJ,t.K)},
e3:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.ek(s,p,a.b,r,q,t.k))
else return o.a(n.bs(t.bI.a(s),p,r,q))}}
P.M.prototype={
bv:function(a,b,c){var s,r,q,p=this.$ti
p.v(c).h("1/(2)").a(a)
s=$.I
if(s!==C.e){c.h("@<0/>").v(p.c).h("1(2)").a(a)
if(b!=null)b=P.jk(b,s)}r=new P.M(s,c.h("M<0>"))
q=b==null?1:3
this.b7(new P.aU(r,q,a,b,p.h("@<1>").v(c).h("aU<1,2>")))
return r},
cH:function(a,b){return this.bv(a,null,b)},
c9:function(a,b,c){var s,r=this.$ti
r.v(c).h("1/(2)").a(a)
s=new P.M($.I,c.h("M<0>"))
this.b7(new P.aU(s,19,a,b,r.h("@<1>").v(c).h("aU<1,2>")))
return s},
b7:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.F.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.b7(a)
return}r.a=q
r.c=s.c}P.b9(null,null,r.b,t.M.a(new P.eq(r,a)))}},
c6:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.c6(a)
return}m.a=s
m.c=n.c}l.a=m.aC(a)
P.b9(null,null,m.b,t.M.a(new P.ey(l,m)))}},
aB:function(){var s=t.F.a(this.c)
this.c=null
return this.aC(s)},
aC:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bW:function(a){var s,r,q,p=this
p.a=1
try{a.bv(new P.eu(p),new P.ev(p),t.P)}catch(q){s=H.aL(q)
r=H.aJ(q)
P.jR(new P.ew(p,s,r))}},
bZ:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("aa<1>").b(a))if(q.b(a))P.et(a,r)
else r.bW(a)
else{s=r.aB()
q.c.a(a)
r.a=4
r.c=a
P.b4(r,s)}},
b8:function(a){var s,r=this
r.$ti.c.a(a)
s=r.aB()
r.a=4
r.c=a
P.b4(r,s)},
ad:function(a,b){var s,r,q=this
t.k.a(b)
s=q.aB()
r=P.dA(a,b)
q.a=8
q.c=r
P.b4(q,s)},
bV:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aa<1>").b(a)){this.bX(a)
return}this.dE(s.c.a(a))},
dE:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.b9(null,null,s.b,t.M.a(new P.es(s,a)))},
bX:function(a){var s=this,r=s.$ti
r.h("aa<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.b9(null,null,s.b,t.M.a(new P.ex(s,a)))}else P.et(a,s)
return}s.bW(a)},
dD:function(a,b){this.a=1
P.b9(null,null,this.b,t.M.a(new P.er(this,a,b)))},
$iaa:1}
P.eq.prototype={
$0:function(){P.b4(this.a,this.b)},
$S:0}
P.ey.prototype={
$0:function(){P.b4(this.b,this.a.a)},
$S:0}
P.eu.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.b8(p.$ti.c.a(a))}catch(q){s=H.aL(q)
r=H.aJ(q)
p.ad(s,r)}},
$S:7}
P.ev.prototype={
$2:function(a,b){this.a.ad(t.K.a(a),t.k.a(b))},
$S:38}
P.ew.prototype={
$0:function(){this.a.ad(this.b,this.c)},
$S:0}
P.es.prototype={
$0:function(){this.a.b8(this.b)},
$S:0}
P.ex.prototype={
$0:function(){P.et(this.b,this.a)},
$S:0}
P.er.prototype={
$0:function(){this.a.ad(this.b,this.c)},
$S:0}
P.eB.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cG(t.fO.a(q.d),t.z)}catch(p){s=H.aL(p)
r=H.aJ(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=P.dA(s,r)
o.b=!0
return}if(l instanceof P.M&&l.a>=4){if(l.a===8){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(t.f.b(l)){n=m.b.a
q=m.a
q.c=l.cH(new P.eC(n),t.z)
q.b=!1}},
$S:0}
P.eC.prototype={
$1:function(a){return this.a},
$S:39}
P.eA.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bs(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.aL(l)
r=H.aJ(l)
q=this.a
q.c=P.dA(s,r)
q.b=!0}},
$S:0}
P.ez.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.ed(s)&&p.a.e!=null){p.c=p.a.e3(s)
p.b=!1}}catch(o){r=H.aL(o)
q=H.aJ(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.dA(r,q)
n.b=!0}},
$S:0}
P.d0.prototype={}
P.bR.prototype={
gj:function(a){var s,r,q=this,p={},o=new P.M($.I,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.e2(p,q))
t.g5.a(new P.e3(p,o))
W.en(q.a,q.b,r,!1,s.c)
return o}}
P.e2.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.e3.prototype={
$0:function(){this.b.bZ(this.a.a)},
$S:0}
P.bS.prototype={}
P.d8.prototype={}
P.c9.prototype={$ihc:1}
P.eP.prototype={
$0:function(){var s=t.K.a(H.c(this.a))
s.stack=this.b.i(0)
throw s},
$S:0}
P.d7.prototype={
el:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.e===$.I){a.$0()
return}P.hx(p,p,this,a,t.u)}catch(q){s=H.aL(q)
r=H.aJ(q)
P.eO(p,p,this,t.K.a(s),t.k.a(r))}},
em:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.e===$.I){a.$1(b)
return}P.hy(p,p,this,a,b,t.u,c)}catch(q){s=H.aL(q)
r=H.aJ(q)
P.eO(p,p,this,t.K.a(s),t.k.a(r))}},
cg:function(a){return new P.eG(this,t.M.a(a))},
dZ:function(a,b){return new P.eH(this,b.h("~(0)").a(a),b)},
cG:function(a,b){b.h("0()").a(a)
if($.I===C.e)return a.$0()
return P.hx(null,null,this,a,b)},
bs:function(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.I===C.e)return a.$1(b)
return P.hy(null,null,this,a,b,c,d)},
ek:function(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.I===C.e)return a.$2(b,c)
return P.jl(null,null,this,a,b,c,d,e,f)},
cz:function(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
P.eG.prototype={
$0:function(){return this.a.el(this.b)},
$S:0}
P.eH.prototype={
$1:function(a){var s=this.c
return this.a.em(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.aw.prototype={
dL:function(){return new P.aw(H.A(this).h("aw<1>"))},
gu:function(a){var s=this,r=new P.aV(s,s.r,H.A(s).h("aV<1>"))
r.c=s.e
return r},
gj:function(a){return this.a},
gK:function(a){return this.a===0},
gai:function(a){return this.a!==0},
aa:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.dF(b)},
dF:function(a){var s=this.d
if(s==null)return!1
return this.c1(s[this.c_(a)],a)>=0},
gL:function(a){var s=this.e
if(s==null)throw H.c(P.aj("No elements"))
return H.A(this).c.a(s.a)},
gM:function(a){var s=this.f
if(s==null)throw H.c(P.aj("No elements"))
return H.A(this).c.a(s.a)},
t:function(a,b){var s,r,q=this
H.A(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bT(s==null?q.b=P.fs():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bT(r==null?q.c=P.fs():r,b)}else return q.dA(b)},
dA:function(a){var s,r,q,p=this
H.A(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.fs()
r=p.c_(a)
q=s[r]
if(q==null)s[r]=[p.bd(a)]
else{if(p.c1(q,a)>=0)return!1
q.push(p.bd(a))}return!0},
bT:function(a,b){H.A(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.bd(b)
return!0},
dK:function(){this.r=this.r+1&1073741823},
bd:function(a){var s,r=this,q=new P.d5(H.A(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dK()
return q},
c_:function(a){return J.bd(a)&1073741823},
c1:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.az(a[r].a,b))return r
return-1}}
P.d5.prototype={}
P.aV.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.a8(q))
else if(r==null){s.sbY(null)
return!1}else{s.sbY(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sbY:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
P.bu.prototype={}
P.Z.prototype={
gu:function(a){var s=this
return new H.V(s,s.gj(s),s.$ti.h("V<Z.E>"))},
J:function(a,b){return this.$ti.Q[1].a(J.R(this.a,b))},
gK:function(a){return J.v(this.a)===0},
gai:function(a){return J.v(this.a)!==0},
gL:function(a){var s=this.a,r=J.Y(s)
if(r.gj(s)===0)throw H.c(H.U())
return this.$ti.Q[1].a(r.l(s,0))},
gM:function(a){var s=this.a,r=J.Y(s)
if(r.gj(s)===0)throw H.c(H.U())
return this.$ti.Q[1].a(r.l(s,r.gj(s)-1))},
aG:function(a,b){var s,r,q,p,o=this.$ti
o.h("K(Z.E)").a(b)
s=this.a
r=J.Y(s)
q=r.gj(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.ci(b.$1(o.a(r.l(s,p)))))return!1
if(q!==r.gj(s))throw H.c(P.a8(this))}return!0},
bq:function(a,b,c){var s=this.$ti
return new H.O(this,s.v(c).h("1(Z.E)").a(b),s.h("@<Z.E>").v(c).h("O<1,2>"))},
S:function(a,b){return H.cS(this,b,null,this.$ti.h("Z.E"))},
D:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("l<Z.E>").a(b)
s=this.a
r=J.Y(s)
q=r.gj(s)
for(p=J.D(b),o=n.Q[1],n=n.c;p.k();){r.t(s,n.a(o.a(p.gm())));++q}},
i:function(a){return P.fj(this,"[","]")}}
P.bB.prototype={}
P.dQ.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.p(a)
r.a=s+": "
r.a+=H.p(b)},
$S:45}
P.b_.prototype={
cn:function(a,b){var s,r,q=H.A(this)
q.h("~(1,2)").a(b)
for(s=this.gct(),s=s.gu(s),q=q.Q[1];s.k();){r=s.gm()
b.$2(r,q.a(this.l(0,r)))}},
gj:function(a){var s=this.gct()
return s.gj(s)},
i:function(a){return P.h2(this)},
$ibA:1}
P.bN.prototype={
gK:function(a){return this.a===0},
gai:function(a){return this.a!==0},
i:function(a){return P.fj(this,"{","}")},
S:function(a,b){return H.h7(this,b,H.A(this).c)},
gL:function(a){var s=P.fr(this,this.r,H.A(this).c)
if(!s.k())throw H.c(H.U())
return s.$ti.c.a(s.d)},
gM:function(a){var s,r,q=P.fr(this,this.r,H.A(this).c)
if(!q.k())throw H.c(H.U())
s=q.$ti.c
do r=s.a(q.d)
while(q.k())
return r}}
P.c2.prototype={
e9:function(a,b){var s,r,q,p=this,o=p.dL()
for(s=P.fr(p,p.r,H.A(p).c),r=s.$ti.c;s.k();){q=r.a(s.d)
if(b.aa(0,q))o.t(0,q)}return o},
$iC:1,
$il:1,
$ibM:1}
P.cb.prototype={}
P.F.prototype={
gb0:function(){return H.aJ(this.$thrownJsError)}}
P.bj.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.cx(s)
return"Assertion failed"}}
P.cU.prototype={}
P.cI.prototype={
i:function(a){return"Throw of null."}}
P.ao.prototype={
gba:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb9:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gba()+o+m
if(!q.a)return l
s=q.gb9()
r=P.cx(q.b)
return l+s+": "+r}}
P.bK.prototype={
gba:function(){return"RangeError"},
gb9:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.p(q):""
else if(q==null)s=": Not greater than or equal to "+H.p(r)
else if(q>r)s=": Not in inclusive range "+H.p(r)+".."+H.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.p(r)
return s}}
P.cB.prototype={
gba:function(){return"RangeError"},
gb9:function(){if(H.P(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.cX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cV.prototype={
i:function(a){var s="UnimplementedError: "+this.a
return s}}
P.b0.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cv.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cx(s)+"."}}
P.bQ.prototype={
i:function(a){return"Stack Overflow"},
gb0:function(){return null},
$iF:1}
P.cw.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.ep.prototype={
i:function(a){return"Exception: "+this.a}}
P.dJ.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.A.dd(q,0,75)+"..."
return r+"\n"+q}}
P.l.prototype={
bq:function(a,b,c){var s=H.A(this)
return H.iw(this,s.v(c).h("1(l.E)").a(b),s.h("l.E"),c)},
aG:function(a,b){var s
H.A(this).h("K(l.E)").a(b)
for(s=this.gu(this);s.k();)if(!H.ci(b.$1(s.gm())))return!1
return!0},
a5:function(a,b){return P.n(this,b,H.A(this).h("l.E"))},
N:function(a){return this.a5(a,!0)},
gj:function(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gK:function(a){return!this.gu(this).k()},
gai:function(a){return!this.gK(this)},
S:function(a,b){return H.h7(this,b,H.A(this).h("l.E"))},
gL:function(a){var s=this.gu(this)
if(!s.k())throw H.c(H.U())
return s.gm()},
gM:function(a){var s,r=this.gu(this)
if(!r.k())throw H.c(H.U())
do s=r.gm()
while(r.k())
return s},
J:function(a,b){var s,r,q
P.ae(b,"index")
for(s=this.gu(this),r=0;s.k();){q=s.gm()
if(b===r)return q;++r}throw H.c(P.fi(b,this,"index",null,r))},
i:function(a){return P.ip(this,"(",")")}}
P.G.prototype={}
P.L.prototype={
gq:function(a){return P.z.prototype.gq.call(C.P,this)},
i:function(a){return"null"}}
P.z.prototype={constructor:P.z,$iz:1,
E:function(a,b){return this===b},
gq:function(a){return H.ar(this)},
i:function(a){return"Instance of '"+H.dZ(this)+"'"},
toString:function(){return this.i(this)}}
P.d9.prototype={
i:function(a){return""},
$iaE:1}
P.cR.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.h.prototype={}
W.cr.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cs.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.aN.prototype={
se4:function(a,b){a.height=b},
seq:function(a,b){a.width=b},
$iaN:1}
W.bm.prototype={
sbl:function(a,b){a.fillStyle=b},
sbM:function(a,b){a.strokeStyle=b},
$ibm:1}
W.ai.prototype={
gj:function(a){return a.length}}
W.dH.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bp.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.p(r)+", "
s=a.top
s.toString
s=r+H.p(s)+") "
r=a.width
r.toString
r=s+H.p(r)+" x "
s=a.height
s.toString
return r+H.p(s)},
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
gq:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gq(p)
s=a.top
s.toString
s=C.b.gq(s)
r=a.width
r.toString
r=C.b.gq(r)
q=a.height
q.toString
return W.hg(p,s,r,C.b.gq(q))},
$ifo:1}
W.d.prototype={
i:function(a){var s=a.localName
s.toString
return s},
$id:1}
W.f.prototype={$if:1}
W.T.prototype={
dC:function(a,b,c,d){return a.addEventListener(b,H.bb(t.B.a(c),1),!1)},
dN:function(a,b,c,d){return a.removeEventListener(b,H.bb(t.B.a(c),1),!1)},
$iT:1}
W.cA.prototype={
gj:function(a){return a.length}}
W.a2.prototype={$ia2:1}
W.a_.prototype={
i:function(a){var s=a.nodeValue
return s==null?this.dh(a):s}}
W.cM.prototype={
gj:function(a){return a.length}}
W.ah.prototype={}
W.b3.prototype={
gdV:function(a){var s=new P.M($.I,t.dL),r=t.c4.a(new W.ei(new P.c4(s,t.g4)))
this.dJ(a)
r=W.hA(r,t.H)
r.toString
this.dO(a,r)
return s},
dO:function(a,b){var s=a.requestAnimationFrame(H.bb(t.c4.a(b),1))
s.toString
return s},
dJ:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ei.prototype={
$1:function(a){this.a.bh(0,H.fx(a))},
$S:14}
W.bY.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.p(r)+", "
s=a.top
s.toString
s=r+H.p(s)+") "
r=a.width
r.toString
r=s+H.p(r)+" x "
s=a.height
s.toString
return r+H.p(s)},
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
gq:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gq(p)
s=a.top
s.toString
s=C.b.gq(s)
r=a.width
r.toString
r=C.b.gq(r)
q=a.height
q.toString
return W.hg(p,s,r,C.b.gq(q))}}
W.fh.prototype={}
W.c_.prototype={}
W.d2.prototype={}
W.c0.prototype={
e_:function(){var s,r=this,q=r.b
if(q==null)return $.fO()
s=r.d
if(s!=null)J.i7(q,r.c,t.B.a(s),!1)
r.b=null
r.sdM(null)
return $.fO()},
sdM:function(a){this.d=t.B.a(a)}}
W.eo.prototype={
$1:function(a){return this.a.$1(t.I.a(a))},
$S:15}
P.d6.prototype={
dt:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.c.a2(a-s,k)
r=a>>>0
a=C.c.a2(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.c.a2(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.c.a2(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.c.a2(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.c.a2(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.c.a2(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aA()
l.aA()
l.aA()
l.aA()},
aA:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.c.a2(o-n+(q-p)+(m-r),4294967296)>>>0},
$iiA:1}
P.aS.prototype={
i:function(a){return"Point("+H.p(this.a)+", "+H.p(this.b)+")"},
E:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a&&this.b===b.b},
gq:function(a){var s=C.b.gq(this.a),r=C.b.gq(this.b),q=H.h9(H.h9(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.Q.prototype={
gu:function(a){var s=this.$ti,r=J.E(this.a,new A.dK(this),s.h("G<1>"))
return new A.c1(P.n(r,!1,r.$ti.h("B.E")),s.h("c1<1>"))}}
A.dK.prototype={
$1:function(a){return J.D(this.a.$ti.h("l<1>").a(a))},
$S:function(){return this.a.$ti.h("G<1>(l<1>)")}}
A.c1.prototype={
k:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].k()){p.sc4(null)
return!1}if(r>4294967295)H.k(P.as(r,0,4294967295,"length",null))
q=J.h_(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.m(o,s)
q[s]=o[s].gm()}p.sc4(q)
return!0},
gm:function(){var s=this.b
return s==null?H.k(P.aj("No element")):s},
sc4:function(a){this.b=this.$ti.h("i<1>?").a(a)},
$iG:1}
X.aA.prototype={
gb1:function(){var s=this.x
return s==null?H.k(H.o("startingMobject")):s},
i:function(a){var s=this.r
return this.a_()+"("+s.gV(s)+", runTime: "+this.a+"s)"},
a_:function(){var s=this.bO(0),r=P.h3("^Instance of '(.*?)'$").cm(s).b
if(1>=r.length)return H.m(r,1)
r=r[1]
r.toString
return r},
bg:function(){this.x=N.fp(this.r)
this.bo(0)},
ar:function(a){if(this.gcA())a.cE(!0,t.a.a(H.a([this.r],t.r)))},
aS:function(){return H.a([this.r,this.gb1()],t.r)},
bz:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.aS(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)p.push(s[q].ax())
s=t.R
return P.n(new A.Q(p,s),!0,s.h("l.E"))},
aQ:function(a){var s,r,q
for(s=this.cO(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].cK(a)},
cO:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.aS(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o.push(p)}return o},
bo:function(a){a=Math.min(1,Math.max(a,0))
this.cr(this.b.$1(a))},
cr:function(a){var s,r,q,p,o,n=this.bz()
for(s=T.t(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
this.bp(C.a.l(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.P(o)*q,0)))}},
bp:function(a,b){t.a.a(a)},
gcA:function(){return!1}}
M.cO.prototype={
bp:function(a,b){var s,r
t.a.a(a)
s=J.a5(a)
r=[0,b]
s.l(a,0).cv(s.l(a,1),r[0],r[1])}}
M.cN.prototype={}
E.cz.prototype={
ck:function(){var s=N.fp(this.r)
s.bk(1)
return s},
ar:function(a){this.dl(a)
this.bo(0)},
gcA:function(){return!0}}
G.b1.prototype={
gbu:function(){var s=this.y
return s==null?H.k(H.o("targetMobject")):s},
gbt:function(){var s=this.z
return s==null?H.k(H.o("targetCopy")):s},
bP:function(a,b,c,d,e){if(e!=null)this.y=e
this.e5()},
e5:function(){if(this.cx!=null)return
this.see(B.hP())},
bg:function(){var s=this
s.y=s.ck()
s.z=s.gbu().n()
s.r.cb(s.gbt())
s.df()},
ck:function(){return this.gbu()},
ar:function(a){this.dg(a)},
aS:function(){var s=this
return H.a([s.r,s.gb1(),s.gbu(),s.gbt()],t.r)},
bz:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gb1(),this.gbt()],r=0;r<3;++r)q.push(s[r].ax())
s=t.R
return P.n(new A.Q(q,s),!0,s.h("l.E"))},
bp:function(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.a5(a)
r=s.l(a,0)
q=s.l(a,1)
s=s.l(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.b5.a(p)
n=p==null?B.hP():p
r.sT(t.y.a(n.$3(q.gp(q),s.gp(s),b)))
r.cq(q,s,b)},
see:function(a){this.cx=t.b5.a(a)}}
R.dC.prototype={
bj:function(a){var s,r,q,p
t.a.a(a)
s=new R.dD()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.e)(a),++p)C.a.D(r,s.$1(a[p]))
return T.jW(r,t.j)},
cB:function(a){var s,r,q,p,o,n="renderer"
for(s=this.bj(t.a.a(a)),r=H.x(s).h("at<1>"),s=new H.at(s,r),s=new H.V(s,s.gj(s),r.h("V<B.E>")),q=this.r,r=r.h("B.E");s.k();){p=r.a(s.d)
if(p instanceof V.H){o=q.a;(o==null?H.k(H.o(n)):o).eg(p)}else{p=q.a
if(p==null)H.k(H.o(n))}}},
cI:function(a,b){t.y.a(b)
return!C.a.aG(b,new R.dE())?H.a([C.d],t.l):b}}
R.dD.prototype={
$1:function(a){return a.ab()},
$S:13}
R.dE.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
K.bf.prototype={
gaO:function(){var s=this.a
return s==null?H.k(H.o("renderer")):s},
gG:function(){var s=this.b
return s==null?H.k(H.o("camera")):s},
aD:function(a){return a},
aU:function(a,b){var s,r,q=this
q.gG()
s=X.f6(a,0,1280,-q.gG().c/2,q.gG().c/2)
q.gG()
r=X.f6(b,720,0,-q.gG().d/2,q.gG().d/2)
q.gG()
return new Y.b(s,r,0).A(0,C.d)}}
K.cq.prototype={
aW:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gG()
p=X.f6(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gG()
return new Y.b(p,X.f6(a.b,q,r,0,720),0)},
dY:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new K.dl(s))
t.g5.a(null)
q=q.c
C.a.D(s.r,H.a([W.en(r,"mousemove",o,!1,q),W.en(r,"mousedown",p.a(new K.dm(s)),!1,q),W.en(r,"mouseup",p.a(new K.dn(s)),!1,q)],t.db))},
ep:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].e_()}}
K.dl.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.aW(new P.aS(r,q,t.q))
q=s.aU(p.a,p.b)
s.ch=q
q.H(0,s.cx)
$.cl().aF(new O.bF(C.k))
if(s.x){r=s.ch
s.z=r
s.y.H(0,r)
$.cl().aF(new O.bE(C.n))}},
$S:5}
K.dm.prototype={
$1:function(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.aW(new P.aS(r,q,t.q))
s.ch=s.aU(p.a,p.b)
q=a.button
q.toString
r=new O.bD(q)
r.b3(q)
s.Q=r
$.cl().aF(new O.bG(C.l))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new Y.b(q,o,r)
s.z=new Y.b(q,o,r)},
$S:5}
K.dn.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.b(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.aW(new P.aS(r,q,t.q))
s.ch=s.aU(p.a,p.b)
q=a.button
q.toString
r=new O.bD(q)
r.b3(q)
s.Q=r
$.cl().aF(new O.bH(C.m))
s.x=!1},
$S:5}
B.ct.prototype={}
N.bT.prototype={}
N.bU.prototype={
n:function(){return N.iE(this)},
ac:function(a,b){this.bK(a,!1)
this.bH(C.i,!1)
this.dm(a,!0)},
cZ:function(a){return this.ac(a,!0)}}
N.bh.prototype={
n:function(){return N.ia(this)},
by:function(){var s=this
s.d1()
s.cV(0,s.aJ,C.d)
s.da(s.aK)},
d1:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.aH,r=j.aI,q=j.aL,s=T.f4(q,r+s,s).aw(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.e)(s),++o){n=s[o]
h.push(C.v.w(0,Math.cos(n)).A(0,C.C.w(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.e)(h),++o){n=h[o]
s.push(new Y.b(-n.b,n.a,n.c))}p=H.a([],i)
for(m=T.t(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.e)(m),++o){k=m[o]
p.push(C.a.l(h,k).A(0,C.a.l(s,k).w(0,q)))}i=H.a([],i)
for(r=T.t(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.e)(r),++o){k=r[o]
i.push(C.a.l(h,k).H(0,C.a.l(s,k).w(0,q)))}s=t.i
j.bF(T.hV(h,s),p,i,T.fM(h,s))}}
N.bo.prototype={
n:function(){return N.ih(this)}}
N.bJ.prototype={
dq:function(a,b,c,d,e,f,g,h,i,j){var s=P.n(a,!0,t.i)
s.push(C.a.gL(a))
this.d0(s)},
n:function(){return N.iy(this)}}
N.bL.prototype={
dr:function(a,b,c,d,e,f,g,h,i,j){this.cD(j,0,C.d,null,!0)
this.cD(d,1,C.d,null,!0)},
n:function(){return N.iC(this)}}
N.bP.prototype={
n:function(){return N.fp(this)}}
M.y.prototype={
gO:function(a){var s=this.a
return s},
gV:function(a){var s=this.b
return s==null?H.k(H.o("name")):s},
gC:function(){var s=this.d
return s==null?H.k(H.o("submobjects")):s},
gX:function(){var s=this.f
return s==null?H.k(H.o("updatingSuspended")):s},
gp:function(a){var s=this.r
return s==null?H.k(H.o("points")):s},
b2:function(a,b,c){var s=this,r=s.a_()
s.b=r
s.sap(t.a.a(H.a([],t.r)))
s.f=!1
s.sT(t.y.a(H.a([],t.l)))
s.by()
s.co()},
i:function(a){return this.a_()},
a_:function(){var s=this.bO(0),r=P.h3("^Instance of '(.*?)'$").cm(s).b
if(1>=r.length)return H.m(r,1)
r=r[1]
r.toString
return r},
co:function(){},
by:function(){},
bf:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.aa(a,this))throw H.c("Mobject can't contain itself")
s=P.n(a,!0,t.j)
for(r=this.gC(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
if(!C.a.aa(a,o))s.push(o)}this.sap(n.a(s))},
aE:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.am(a)
for(s=this.ax(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.D(l==null?H.k(H.o("points")):l)
for(;l.k();)m.push(J.fe(c.$1(l.gm().H(0,b)),b))
n.sT(q.a(m))}},
dX:function(a){return this.aE(C.d,null,a)},
n:function(){return M.ix(this)},
cL:function(a,b){var s,r,q,p=this
if(p.gX())return
s=p.e
if(s==null){s=H.a([],t.eM)
p.sdz(s)}r=0
for(;!1;++r)s[r].$2(p,a)
for(s=p.gC(),q=s.length,r=0;r<s.length;s.length===q||(0,H.e)(s),++r)s[r].cL(a,!0)},
cK:function(a){return this.cL(a,!0)},
da:function(a){return this.dX(new M.dV(a))},
cW:function(a,b,c,d){return this.aE(c,d,new M.dU(b))},
cV:function(a,b,c){return this.cW(a,b,C.d,c)},
cF:function(a,b,c,d,e){this.aE(c,d,new M.dT(Z.jQ(b,e).gcJ()))},
ej:function(a,b){return this.cF(a,b,C.d,null,C.u)},
dc:function(a,b,c,d){return this.aE(c,d,new M.dW(b,a))},
cD:function(a,b,c,d,e){var s=this.eb(b)
if(s===0)return
this.dc(a/s,b,c,d)},
ac:function(a,b){var s,r,q
for(s=this.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].ac(a,!0)
this.a=a},
as:function(a,b){var s,r,q
for(s=this.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].as(a,!0)},
bk:function(a){return this.as(a,!0)},
ab:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)C.a.D(o,s[q].ab())
p=P.fn(o,t.j)
return P.n(p,!0,H.A(p).c)},
ax:function(){var s=this.ab(),r=H.x(s),q=r.h("aT<1>")
return P.n(new H.aT(s,r.h("K(1)").a(new M.dR()),q),!0,q.h("l.E"))},
bA:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.ax(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q].r
C.a.D(o,p==null?H.k(H.o("points")):p)}return o},
bD:function(){return this.bA()},
aV:function(a,b,c){var s,r,q
t.D.a(c)
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.e)(c),++q)s.push(c[q].aT(a))
if(b<0)return C.a.W(s,C.o)
else if(b===0)return(C.a.W(s,C.o)+C.a.W(s,C.p))/2
else return C.a.W(s,C.p)},
am:function(a){var s=this,r=s.bD()
if(r.length===0)return C.d
return new Y.b(s.aV(0,C.b.a4(a.a),r),s.aV(1,C.b.a4(a.b),r),s.aV(2,C.b.a4(a.c),r))},
eb:function(a){var s=this.bA(),r=H.x(s),q=new H.O(s,r.h("j(1)").a(new M.dS(a)),r.h("O<1,j>")),p=q.W(0,C.o)
return q.W(0,C.p)-p},
gj:function(a){return this.ay(0).length},
ay:function(a){var s=this,r=H.a([],t.r)
if(J.cn(s.gp(s)))r.push(s)
C.a.D(r,s.gC())
return r},
cb:function(a){var s,r,q,p,o,n,m=this
if(J.be(m.gp(m))&&J.cn(a.gp(a)))a.cw()
if(J.be(a.gp(a))&&J.cn(m.gp(m)))m.cw()
s=m.ay(0).length
r=a.ay(0).length
m.ca(Math.max(0,r-s))
a.ca(Math.max(0,s-r))
m.cc(a)
for(q=new A.Q(H.a([m.gC(),a.gC()],t.Z),t.R),q=q.gu(q);q.k();){p=q.b
if(p==null)p=H.k(P.aj("No element"))
o=p.length
if(0>=o)return H.m(p,0)
n=p[0]
if(1>=o)return H.m(p,1)
n.cb(p[1])}},
bC:function(){throw H.c("getPointMobject not implemented for "+H.p(this.gcS())+"()")},
cc:function(a){var s=this,r=J.v(s.gp(s)),q=J.v(a.gp(a))
if(r<q)s.cd(a)
else if(r>q)a.cd(s)},
cd:function(a){throw H.c("Not implemented")},
cw:function(){var s=this.n(),r=t.r,q=t.a
s.sap(q.a(H.a([],r)))
this.sT(t.y.a(H.a([],t.l)))
this.bf(q.a(H.a([s],r)))},
ca:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.ay(0).length
if(s===0){r=H.a([],t.r)
for(q=T.t(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)r.push(a1.bC())
a1.sap(t.a.a(r))}n=s+a2
r=t.X
q=H.a([],r)
for(p=T.t(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.e)(p),++o){l=p[o]
if(typeof l!=="number")return l.w()
q.push(C.b.a9(l*s,n))}p=H.a([],r)
for(m=T.t(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.e)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.aI(i),e=0;e<q.length;q.length===g||(0,H.e)(q),++e)if(f.E(i,q[e]))h.push(1)
else h.push(0)
p.push(T.fL(h,j))}d=H.a([],t.r)
for(r=new A.Q(H.a([a1.gC(),p],t.L),t.w),r=r.gu(r),q=t.j;r.k();){c=r.b
if(c==null)c=H.k(P.aj("No element"))
p=c.length
if(0>=p)return H.m(c,0)
b=q.a(c[0])
if(1>=p)return H.m(c,1)
a=H.P(c[1])
C.a.t(d,b)
for(p=T.t(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.e)(p),++o){a0=b.n()
a0.bk(1)
C.a.t(d,a0)}}a1.sap(t.a.a(d))},
cq:function(a,b,c){},
cv:function(a,b,c){},
en:function(a){var s
if(J.cn(this.gp(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.c(s)},
sap:function(a){this.d=t.hh.a(a)},
sdz:function(a){this.e=t.cI.a(a)},
sT:function(a){this.r=t.D.a(a)}}
M.dV.prototype={
$1:function(a){return a.A(0,this.a)},
$S:2}
M.dU.prototype={
$1:function(a){return a.w(0,this.a)},
$S:2}
M.dT.prototype={
$1:function(a){return a.aj(this.a)},
$S:2}
M.dW.prototype={
$1:function(a){var s=this.a
return a.er(s,a.aT(s)*this.b)},
$S:2}
M.dR.prototype={
$1:function(a){t.j.a(a)
return J.v(a.gp(a))>0},
$S:6}
M.dS.prototype={
$1:function(a){return t.i.a(a).aT(this.a)},
$S:22}
V.H.prototype={
b5:function(a,b,c,d,e,f,g,h,i,j,k){if(d!=null)this.sa3(H.a([d],t.O))
if(i!=null)this.sY(H.a([i],t.O))},
n:function(){return V.iG(this)},
co:function(){var s=this,r=s.dy
s.d_(r==null?H.a([s.gO(s)],t.O):r)
r=s.fr
if(r==null)r=H.a([s.gO(s)],t.O)
s.d6(r,s.x)
s.cY(s.fx,s.y)
r=s.z
s.d3(s.Q,r)},
ao:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.D(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.aX(),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)q[o].bI(r,!1)
if(r.length!==0){if(n.dy==null)n.sa3(r)
q=n.dy
q.toString
q=J.v(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.sa3(T.aW(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.v(q)){q=n.dy
q.toString
n.sa3(T.aW(r,J.v(q),t.G))}}s=H.a([],s)
q=n.dy
q.toString
q=T.t(J.v(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.l(r,q[o]))
n.sa3(s)}},
bG:function(a){return this.ao(a,null,!0)},
bI:function(a,b){return this.ao(null,a,b)},
bH:function(a,b){return this.ao(a,null,b)},
d_:function(a){return this.ao(null,a,!0)},
a8:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.D(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.aX(),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)q[o].d7(a,r,!1,e)
if(r.length!==0)if(a){if(n.fx==null)n.saf(r)
q=n.fx
q.toString
q=J.v(q)
p=r.length
if(q<p){q=n.fx
q.toString
n.saf(T.aW(q,p,t.G))}else{q=n.fx
q.toString
if(p<J.v(q)){q=n.fx
q.toString
n.saf(T.aW(r,J.v(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.t(J.v(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.l(r,q[o]))
n.sY(s)}else{if(n.fr==null)n.sY(r)
q=n.fr
q.toString
q=J.v(q)
p=r.length
if(q<p){q=n.fr
q.toString
n.sY(T.aW(q,p,t.G))}else{q=n.fr
q.toString
if(p<J.v(q)){q=n.fr
q.toString
n.sY(T.aW(r,J.v(q),t.G))}}s=H.a([],s)
q=n.fr
q.toString
q=T.t(J.v(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.l(r,q[o]))
n.sY(s)}if(e!=null)if(a)n.y=e
else n.x=e},
d5:function(a){return this.a8(!1,a,null,!0,null)},
d7:function(a,b,c,d){return this.a8(a,null,b,c,d)},
bK:function(a,b){return this.a8(!1,a,null,b,null)},
b_:function(a,b){return this.a8(!1,null,a,b,null)},
d6:function(a,b){return this.a8(!1,null,a,!0,b)},
aY:function(a,b,c,d){return this.a8(!0,a,t.x.a(b),c,d)},
cX:function(a,b){return this.aY(null,a,b,null)},
cY:function(a,b){return this.aY(null,a,!0,b)},
ac:function(a,b){this.bH(a,!0)
this.bK(a,!0)
this.dk(a,!0)},
cu:function(a,b){var s,r,q,p,o=this,n=null,m="removeWhere",l=a.an(),k=a.a6(),j=a.a0(!0),i=a.z,h=a.Q,g=h.a,f=h.b
h=h.c
s=t.x
s.a(j)
s.a(l)
s.a(k)
o.ao(n,l,!1)
o.a8(!1,n,k,!1,n)
o.aY(n,j,!1,n)
o.aZ(new Y.b(g,f,h),i,!1)
r=o.gC()
q=a.gC()
if(r.length===0)return
else if(q.length===0)q=H.a([a],t.r)
l=H.x(r).h("K(1)").a(new V.ef())
if(!!r.fixed$length)H.k(P.ac(m))
C.a.c7(r,l,!0)
l=H.x(q).h("K(1)").a(new V.eg())
if(!!q.fixed$length)H.k(P.ac(m))
C.a.c7(q,l,!0)
for(l=t.j,l=T.jN(r,q,l,l),l=P.dP([l.a,l.b],!1,t.z),l=new A.Q(new H.S(l,H.x(l).h("S<1,i<H>>")),t.eX),l=l.gu(l);l.k();){p=l.b
if(p==null)p=H.k(P.aj("No element"))
k=p.length
if(0>=k)return H.m(p,0)
j=p[0]
if(1>=k)return H.m(p,1)
j.cu(p[1],!0)}},
ec:function(a){return this.cu(a,!0)},
as:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.D(p.an());s.k();){r=s.gm()
q=r.d
m.push(new K.u(r.a,r.b,r.c,q*o))}p.bI(m,!0)
m=H.a([],n)
for(s=J.D(p.a6());s.k();){r=s.gm()
q=r.d
m.push(new K.u(r.a,r.b,r.c,q*o))}p.b_(m,!0)
n=H.a([],n)
for(m=J.D(p.a0(!0));m.k();){s=m.gm()
r=s.d
n.push(new K.u(s.a,s.b,s.c,r*o))}p.cX(n,!0)
p.dj(a,!0)},
bk:function(a){return this.as(a,!0)},
an:function(){var s=this.dy
return s==null?H.a([C.i],t.O):s},
a0:function(a){var s=a?this.fx:this.fr
return s==null||J.be(s)?H.a([C.i],t.O):s},
a6:function(){return this.a0(!1)},
d4:function(a,b){this.Q=new Y.b(a.a,a.b,a.c)},
aZ:function(a,b,c){var s,r,q,p,o=this
H.eL(b)
if(c){for(s=o.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(p instanceof V.H)p.aZ(a,b,!0)}c=!0}o.z=b
if(a!=null)o.d4(a,!1)
if(b!==0){o.b_(o.a6(),c)
o.b_(o.a6(),c)}},
d3:function(a,b){return this.aZ(a,b,!0)},
cQ:function(){var s,r,q,p,o,n,m,l=this.Q,k=l.a,j=l.b
l=l.c
s=this.am(C.d)
r=H.a([],t.b)
for(q=[C.v,C.C,C.u],p=t.n,o=0;o<3;++o){n=this.am(q[o]).H(0,s)
r.push(H.a([n.a,n.b,n.c],p))}m=new Y.b(k,j,l).aj(Z.a6(null,r).gcJ())
return new S.w(s.H(0,m),s.A(0,m),t.hd)},
bF:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.dx
r=a.length
q=H.a([],t.l)
for(r=T.t(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.e)(r),++o)q.push(C.d)
g.sT(f.a(q))
n=H.a([a,b,c,d],t.h)
for(f=T.t(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.e)(f),++o){m=f[o]
l=C.a.l(n,m)
p=g.r
for(p=T.eW(T.t(J.v(p==null?H.k(H.o("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.e)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.k(H.o("points"))
J.fP(h,i.b,l[C.c.a1(i.a,l.length)])}}},
dT:function(a){var s,r,q,p,o,n,m=this,l=m.dx,k=[]
for(s=T.f4(l,1,0).e2(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=m.r
k.push(J.co(o==null?H.k(H.o("points")):o).w(0,1-p).A(0,a.w(0,p)))}s=k.length
if(1>=s)return H.m(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.m(k,2)
n=r.a(k[2])
if(3>=s)return H.m(k,3)
k=r.a(k[3])
m.en("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.c.a1(J.v(m.gp(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.aM(m.gp(m),k)}else{k=r.a(H.a([J.co(m.gp(m)),o,n,k],s))
J.aM(m.gp(m),k)}return null},
d0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=T.f4(this.dx,1,0).aw(0)
r=t.i
q=Z.dq(T.fM(a,r))
p=Z.dq(T.hV(a,r))
r=H.a([],t.J)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.e)(s),++n){m=s[n]
r.push(p.w(0,1-m).A(0,q.w(0,m)))}o=H.a([],t.h)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.e)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.e)(h),++f){e=h[f]
d=J.a5(e)
i.push(new Y.b(d.l(e,0),d.l(e,1),d.l(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.m(o,0)
l=o[0]
if(1>=r)return H.m(o,1)
k=o[1]
if(2>=r)return H.m(o,2)
i=o[2]
if(3>=r)return H.m(o,3)
this.bF(l,k,i,o[3])},
bi:function(a,b){var s=this.db,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
e1:function(a,b){var s
if(!this.bi(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.db+0.00001*Math.abs(s))return!1
return!0},
aR:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.dO(a,new V.ea(l,C.c.a1(J.v(a),this.dx)),t.i)
l.a=P.n(s,!0,s.$ti.h("l.E"))
s=H.a([],t.dm)
for(r=T.t(J.v(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.e)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.A()
s.push(new S.b2(J.R(m,n+0),J.R(l.a,n+1),J.R(l.a,n+2),J.R(l.a,n+3),p))}return s},
c3:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.dx
r=T.t(a.length,s,s)
q=H.x(r)
q=P.n(new H.aT(r,q.h("K(1)").a(b),q.h("aT<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.X)
C.a.D(r,q)
p=H.a([],t.h)
for(r=new A.Q(H.a([r,q],t.gL),t.eN),r=r.gu(r),q=H.x(a),o=q.c,q=q.h("ag<1>");r.k();){n=r.b
if(n==null)n=H.k(P.aj("No element"))
if(1>=n.length)return H.m(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.H()
if(typeof l!=="number")return H.dj(l)
if(m-l>=s){H.P(l)
H.P(m)
P.e0(l,m,a.length)
k=new H.ag(a,l,m,q)
k.b4(a,l,m,o)
p.push(k.N(0))}}return p},
bE:function(a){t.y.a(a)
return this.c3(a,new V.ec(this,a))},
cU:function(a){t.y.a(a)
return this.c3(a,new V.eb(this,a))},
c2:function(a){var s=F.dO(this.gp(this),new V.e6(this,a),t.i)
return P.n(s,!0,s.$ti.h("l.E"))},
cP:function(){var s,r=this
if(J.v(r.gp(r))===1)return r.gp(r)
s=t.eR
s=A.fX(P.n(new A.Q(H.a([r.c2(0),r.c2(r.dx-1)],t.h),s),!0,s.h("l.E")),t.i)
return P.n(s,!0,s.$ti.h("l.E"))},
bD:function(){var s,r,q,p=H.a([],t.l)
for(s=this.aX(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)C.a.D(p,s[q].cP())
return p},
cc:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.m.a(a2)
a0.dU(a2)
if(J.v(a0.gp(a0))===J.v(a2.gp(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.be(n==null?H.k(H.o(a1)):n)){n=q.a(H.a([o.am(C.d)],r))
m=o.r
J.aM(m==null?H.k(H.o(a1)):m,n)}n=o.r
if(C.c.a1(J.v(n==null?H.k(H.o(a1)):n),o.dx)===1){n=o.r
o.dT(J.co(n==null?H.k(H.o(a1)):n))}}s=t.i
l=a0.bE(P.n(a0.gp(a0),!0,s))
k=a2.bE(P.n(a2.gp(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.dx
f=new V.e9(g)
for(s=T.t(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.Y(c)
m=J.Y(d)
b=Math.max(0,C.c.a9(n.gj(c)-m.gj(d),g))
a=Math.max(0,C.c.a9(m.gj(d)-n.gj(c),g))
d=a0.cp(b,d)
c=a0.cp(a,c)
C.a.D(i,d)
C.a.D(h,c)}a0.sT(q.a(i))
a2.sT(q.a(h))},
cp:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=T.t(this.dx*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)C.a.D(s,a8)
return s}o=this.aR(a8)
n=o.length
m=n+a7
s=t.X
r=H.a([],s)
for(q=T.t(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.e)(q),++p){k=q[p]
if(typeof k!=="number")return k.w()
r.push(C.b.a9(k*n,m))}q=H.a([],s)
for(l=T.t(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.e)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.aI(k),e=0;e<r.length;r.length===g||(0,H.e)(r),++e)h.push(f.E(k,r[e])?1:0)
q.push(T.fL(h,i))}d=H.a([],t.l)
for(s=new A.Q(H.a([o,q],t.L),t.w),s=s.gu(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.k();){c=s.b
if(c==null)c=H.k(P.aj(a6))
h=c.length
if(0>=h)return H.m(c,0)
b=i.a(c[0])
if(1>=h)return H.m(c,1)
a=T.f4(H.P(c[1])+1,1,0).aw(0)
for(h=new A.Q(H.a([a,T.fM(a,r)],q),l),h=h.gu(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.k();){a2=h.b
if(a2==null)a2=H.k(P.aj(a6))
a3=P.dP([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.m(a2,0)
a5=a2[0]
if(1>=a4)return H.m(a2,1)
C.a.D(d,V.f8(new H.S(a3,H.x(a3).h("S<1,b>")),a5,a2[1]))}}return d},
dU:function(a){var s,r,q,p,o,n,m,l,k=new V.e7(),j=new V.e8()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.Y(o)
l=J.Y(n)
if(m.gj(o)>l.gj(n))j.$3(p,a,T.aW(n,m.gj(o),r))
else if(l.gj(n)>m.gj(o))j.$3(p,this,T.aW(o,l.gj(n),r))}},
bC:function(){var s=null,r=this.am(C.d),q=new V.bV(0.01,0.01,4,0,0,C.h,!1,0.01,!1,0.000001,4,s,s,s,C.f,s,s,s,s,s)
q.b2(C.f,s,s)
q.b5(s,0,!1,C.f,!1,0.01,C.h,0,C.f,4,0.000001)
q.sT(t.y.a(H.a([r],t.l)))
q.ec(this)
return q},
cq:function(a,b,c){var s,r=this,q=t.m
q.a(a)
q.a(b)
r.sa3(V.fJ(a.an(),b.an(),c))
r.sY(V.fJ(a.a6(),b.a6(),c))
r.saf(V.fJ(a.a0(!0),b.a0(!0),c))
q=t.V
r.sbN(V.f3(a.x,b.x,c,q))
r.scf(V.f3(a.y,b.y,c,q))
r.sd9(V.f3(a.Q,b.Q,c,t.i))
r.sbL(V.f3(a.z,b.z,c,q))
s=new V.ee()
if(c===1){q=b.dy
r.sa3(q!=null?s.$1(q):null)
q=b.fr
r.sY(q!=null?s.$1(q):null)
q=b.fx
r.saf(q!=null?s.$1(q):null)
r.sbN(b.x)
r.scf(b.y)
q=b.Q
r.Q=new Y.b(q.a,q.b,q.c)
r.sbL(b.z)}},
cv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.m.a(a)
if(b<=0&&c>=1){e.sT(t.y.a(P.n(a.gp(a),!0,t.i)))
return}s=t.y
r=a.aR(s.a(P.n(a.gp(a),!0,t.i)))
q=r.length
p=V.hK(0,q,b)
o=V.hK(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.sT(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.m(r,n)
j=J.dk(r[n])
j=s.a(V.f8(new H.S(j,H.x(j).h("S<1,b>")),m,k))
J.aM(e.gp(e),j)}else{if(n>>>0!==n||n>=j)return H.m(r,n)
j=J.dk(r[n])
j=s.a(V.f8(new H.S(j,H.x(j).h("S<1,b>")),m,1))
J.aM(e.gp(e),j)
for(j=n+1,P.e0(j,l,r.length),j=H.cS(r,j,l,H.x(r).c),i=j.$ti,j=new H.V(j,j.gj(j),i.h("V<B.E>")),i=i.h("B.E"),h=t.z;j.k();){g=i.a(j.d)
g=P.dP([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.S(g,H.x(g).h("S<1,b>")))
f=e.r
J.aM(f==null?H.k(H.o("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.m(r,l)
j=J.dk(r[l])
j=s.a(V.f8(new H.S(j,H.x(j).h("S<1,b>")),0,k))
J.aM(e.gp(e),j)}},
aX:function(){var s,r,q,p,o=H.a([],t.d_)
for(s=this.ab(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(p instanceof V.H)o.push(p)}return o},
sbN:function(a){this.x=H.eL(a)},
scf:function(a){this.y=H.eL(a)},
sbL:function(a){this.z=H.eL(a)},
sd9:function(a){this.Q=t.i.a(a)},
sa3:function(a){this.dy=t.x.a(a)},
sY:function(a){this.fr=t.x.a(a)},
saf:function(a){this.fx=t.x.a(a)}}
V.al.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.am.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.an.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.ef.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.H)},
$S:6}
V.eg.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.H)},
$S:6}
V.ea.prototype={
$2:function(a,b){t.i.a(b)
return a<J.v(this.a.a)-this.b},
$S:9}
V.ec.prototype={
$1:function(a){var s,r,q
H.P(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.m(s,r)
r=s[r]
if(a<0||a>=q)return H.m(s,a)
return!this.a.e1(r,s[a])},
$S:10}
V.eb.prototype={
$1:function(a){var s,r,q
H.P(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.m(s,r)
r=s[r]
if(a<0||a>=q)return H.m(s,a)
return!this.a.bi(r,s[a])},
$S:10}
V.e6.prototype={
$2:function(a,b){t.i.a(b)
return C.c.a1(a,this.a.dx)===this.b},
$S:9}
V.e9.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=T.t(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(C.a.gM(C.a.gM(a)))
return s}if(b<0)return H.m(a,b)
return a[b]},
$S:26}
V.e7.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.an()
case"strokeColors":return b.a6()
case"backgroundStrokeColors":return b.a0(!1)
default:throw H.c(u.c+a)}},
$S:27}
V.e8.prototype={
$3:function(a,b,c){t.U.a(c)
switch(a){case"fillColors":b.sa3(c)
break
case"strokeColors":b.sY(c)
break
case"backgroundStrokeColors":b.saf(c)
break
default:throw H.c(u.c+a)}},
$S:28}
V.ee.prototype={
$1:function(a){var s=t.G
return P.n(J.E(t.U.a(a),new V.ed(),s),!0,s)},
$S:29}
V.ed.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.cY.prototype={}
V.bV.prototype={
n:function(){return V.iH(this)}}
V.bg.prototype={
gR:function(a){var s=this.d
return s==null?H.k(H.o("display")):s},
d8:function(a){this.d=a}}
Q.cu.prototype={
gP:function(){var s=this.e
return s==null?H.k(H.o("ctx")):s},
aM:function(){var s=0,r=P.dh(t.V),q,p=this,o,n,m
var $async$aM=P.di(function(a,b){if(a===1)return P.dd(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.b7(C.V.gdV(m).cH(new Q.dG(),t.V),$async$aM)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.de(q,r)}})
return P.df($async$aM,r)},
cC:function(a){var s,r,q=this,p=q.gR(q).gG(),o=q.gR(q).aD(a)
C.j.sbl(q.gP(),o.av())
s=p.c
r=p.d
q.gP().fillRect(0-s/2,0-r/2,p.c,p.d)},
eg:function(a){var s,r,q,p,o,n,m,l=this,k="ctx",j=t.y.a(P.n(a.gp(a),!0,t.i)),i=l.gR(l).gG().cI(a,j)
if(i.length===0)return
s=a.cU(i)
for(j=s.length,r=t.O,q=0;q<s.length;s.length===j||(0,H.e)(s),++q){l.eh(a,s[q])
l.ce(a,!0)
p=a.dy
if(p==null)p=H.a([C.i],r)
if(J.v(p)>1){o=l.e
if(o==null)o=H.k(H.o(k))
C.j.sbl(o,l.cl(a,p))}else{o=l.d
if(o==null)o=H.k(H.o("display"))
n=a.dy
m=o.aD(J.R(n==null?H.a([C.i],r):n,0))
o=l.e
if(o==null)o=H.k(H.o(k))
C.j.sbl(o,m.av())}o=l.e;(o==null?H.k(H.o(k)):o).fill()
l.ce(a,!1)
o=l.e;(o==null?H.k(H.o(k)):o).closePath()}},
eh:function(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
t.y.a(b)
i.gP().beginPath()
s=a.aR(b)
r=J.a4(b)
q=r.gL(b)
i.gP().moveTo(q.a,q.b)
p=a.bi(r.gL(b),r.gM(b))
for(r=s.length,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
m=n.b
l=n.c
k=n.d
j=i.e
if(j==null)j=H.k(H.o("ctx"))
j.bezierCurveTo(m.a,m.b,l.a,l.b,k.a,k.b)}if(p)i.gP().closePath()},
cl:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.U.a(b)
s=a.cQ()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.gR(g).gG().cI(a,r)
r=g.gP()
p=q.length
if(0>=p)return H.m(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.m(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.Y(b)
m=1/(o.gj(b)-1)
l=T.jt(m+1,0,m).aw(0)
for(r=T.t(o.gj(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.e)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.k(H.o("display"))
h=i.aD(o.l(b,j))
p.addColorStop(C.a.l(l,j),h.av())}return p},
ce:function(a,b){var s,r,q,p,o=this,n=b?a.y:a.x
if(n===0)return
s=a.a0(b)
r=o.gR(o).gG().c
o.gP().lineWidth=n*0.01*(r/14.222222222222221)
r=J.a4(s)
q=r.aG(s,new Q.dF())
if(r.gK(s)||q)return
if(r.gj(s)>1)C.j.sbM(o.gP(),o.cl(a,s))
else{p=o.gR(o).aD(J.ff(a.a0(b)))
C.j.sbM(o.gP(),p.av())}o.gP().stroke()}}
Q.dG.prototype={
$1:function(a){return H.fx(a)},
$S:30}
Q.dF.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:31}
N.cL.prototype={
gau:function(){var s=this.d
return s==null?H.k(H.o("mobjects")):s},
gG:function(){var s=this.f
return s==null?H.k(H.o("camera")):s},
gR:function(a){var s=this.x
return s==null?H.k(H.o("display")):s},
ds:function(){var s,r,q,p=this,o=document,n=o.querySelector(".canvas-container")
n.toString
s=H.a([],t.db)
r=new O.bD(0)
r.b3(0)
o=o.createElement("canvas")
t.gA.a(o)
s=new B.ct(o,n,s,C.d,C.d,r,C.d,C.d)
s.a=new Q.cu($.cl())
n.appendChild(o).toString
p.x=s
p.r=p.gR(p).gaO()
s=p.gR(p)
o=s.b=new R.dC(14.222222222222221,s)
n=s.d
C.y.seq(n,1280)
C.y.se4(n,720)
r=s.gaO()
r.de(s)
n=n.getContext("2d")
n.toString
r.e=n
o.d=o.c/1.7777777777777777
n=s.gaO()
r=o.c
q=o.d
n.gP().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
s.gaO().cC(C.z)
p.f=o
new P.d6().dt(0)
p.sbQ(t.a.a(H.a([],t.r)))},
aP:function(){var s=0,r=P.dh(t.z),q=1,p,o=[],n=this,m,l
var $async$aP=P.di(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.gR(n).dY()
q=3
s=6
return P.b7(n.ag(),$async$aP)
case 6:q=1
s=5
break
case 3:q=2
l=p
H.aL(l)
throw l
s=5
break
case 2:s=1
break
case 5:n.gG().cB(n.gau())
n.gR(n).ep()
return P.de(null,r)
case 1:return P.dd(p,r)}})
return P.df($async$aP,r)},
aQ:function(a){var s,r,q
for(s=this.gau(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].cK(a)},
bf:function(a){t.a.a(a)
this.ei(a)
C.a.e6(this.gau(),0,a)},
cE:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.n(b,!0,t.j)
C.a.D(s,r.gG().bj(b))
r.sbQ(q.a(r.cT(r.gau(),s)))},
ei:function(a){return this.cE(!0,a)},
cT:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new N.e1(s).$2(a,P.fn(b,H.x(b).c))
return s},
aN:function(a){var s=0,r=P.dh(t.z),q=this,p,o,n,m,l,k
var $async$aN=P.di(function(b,c){if(b===1)return P.dd(c,r)
while(true)switch(s){case 0:p=a.a,o=0
case 2:if(!(o<p)){s=3
break}n=q.r
s=4
return P.b7((n==null?H.k(H.o("renderer")):n).aM(),$async$aN)
case 4:m=c
o+=m
a.aQ(m)
l=Math.min(1,Math.max(o/p,0))
a.cr(a.b.$1(l))
q.aQ(m)
n=q.f
n=(n==null?H.k(H.o("camera")):n).r.a;(n==null?H.k(H.o("renderer")):n).cC(C.z)
n=q.f
if(n==null)n=H.k(H.o("camera"))
k=q.d
n.cB(k==null?H.k(H.o("mobjects")):k)
q.a+=m
s=2
break
case 3:return P.de(null,r)}})
return P.df($async$aN,r)},
ak:function(a,b){var s=0,r=P.dh(t.z),q=this,p,o
var $async$ak=P.di(function(c,d){if(c===1)return P.dd(d,r)
while(true)switch(s){case 0:o=q.gG().bj(q.gau())
b.bg()
p=b.r
if(!C.a.aa(o,p)){q.bf(t.a.a(H.a([p],t.r)))
C.a.D(o,p.ab())}s=2
return P.b7(q.aN(b),$async$ak)
case 2:b.bo(1)
b.ar(q)
q.aQ(0)
return P.de(null,r)}})
return P.df($async$ak,r)},
sbQ:function(a){this.d=t.hh.a(a)}}
N.e1.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.e)(a),++q){p=a[q]
if(b.aa(0,p))continue
o=p.ab()
n=b.e9(0,P.fn(o,H.x(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.k(H.o("submobjects")):o,n)}else C.a.t(r,p)}},
$S:49}
T.fc.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.fb.prototype={
$1:function(a){return H.P(a)/this.a*this.b},
$S:33}
T.fd.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("K(q,0)")}}
V.f0.prototype={
$1:function(a){return t.G.a(a).N(0)},
$S:11}
V.f1.prototype={
$1:function(a){return t.G.a(a).N(0)},
$S:11}
V.f2.prototype={
$1:function(a){var s
t.p.a(a)
s=J.a5(a)
return new K.u(s.l(a,0),s.l(a,1),s.l(a,2),s.l(a,3))},
$S:35}
V.eS.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=T.eW(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.dj(m)
l.push(J.cm(n.b,Math.pow(q,p-m)*Math.pow(a,m)*X.hE(p,m,!0)))}return C.a.W(l,new V.eR())},
$S:36}
V.eR.prototype={
$2:function(a,b){var s=t.i
return s.a(a).A(0,s.a(b))},
$S:37}
K.u.prototype={
ev:function(a){return new K.u(this.a,this.b,this.c,a)},
n:function(){var s=this
return new K.u(s.a,s.b,s.c,s.d)},
N:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
av:function(){var s=this
return"rgba("+C.b.a4(s.a*255)+", "+C.b.a4(s.b*255)+", "+C.b.a4(s.c*255)+", "+H.p(s.d)+")"},
i:function(a){return this.av()}}
X.a9.prototype={
i:function(a){return this.b}}
X.a1.prototype={}
M.dI.prototype={
gah:function(){var s=this.a
return s==null?H.k(H.o("eventListeners")):s},
dn:function(){var s,r,q=P.fm(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.F(0,C.R[r],H.a([],s))
this.sdw(t.cH.a(q))},
ae:function(a,b,c){var s,r,q
H.fD(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.n(c.h("i<cy<0>>").a(b),!0,c.h("cy<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gM(s)
C.a.ef(s,q)
r=q.ex(a)}},
aF:function(a){var s,r=this
switch(a.a){case C.k:t.gt.a(a)
s=r.gah().l(0,C.k)
s.toString
r.ae(a,s,t.e)
break
case C.l:t.bt.a(a)
s=r.gah().l(0,C.l)
s.toString
r.ae(a,s,t.e)
break
case C.m:t.dN.a(a)
s=r.gah().l(0,C.m)
s.toString
r.ae(a,s,t.e)
break
case C.n:t.fV.a(a)
s=r.gah().l(0,C.n)
s.toString
r.ae(a,s,t.e)
break
case C.q:t.fw.a(a)
s=r.gah().l(0,C.q)
s.toString
r.ae(a,s,t.e)
break
case C.r:t.bf.a(a)
s=r.gah().l(0,C.r)
s.toString
r.ae(a,s,t.e)
break}},
sdw:function(a){this.a=t.dC.a(a)}}
O.cH.prototype={}
O.bF.prototype={}
O.bG.prototype={}
O.bH.prototype={}
O.bE.prototype={}
O.bD.prototype={
b3:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
X.eT.prototype={
$2:function(a,b){return H.P(a)*H.P(b)},
$S:12}
X.eU.prototype={
$2:function(a,b){return H.P(a)*H.P(b)},
$S:12}
Z.ad.prototype={
gI:function(a){return this.a},
gB:function(a){var s=this.b
return s==null?H.k(H.o("shape")):s},
A:function(a,b){return this.at(0,new Z.dw(typeof b=="number"?Z.dp(b,this.gB(this)):t.A.a(b)))},
w:function(a,b){return this.at(0,new Z.dx(typeof b=="number"?Z.dp(b,this.gB(this)):t.A.a(b)))},
at:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=T.eW(p.gI(p),t.p)
r=H.x(s)
q=r.h("O<1,i<j>>")
q=P.n(new H.O(s,r.h("i<j>(1)").a(new Z.dv(b)),q),!0,q.h("B.E"))
return Z.a6(p.gB(p),q)},
a7:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gI(this)
if(s>>>0!==s||s>=r.length)return H.m(r,s)
return J.R(r[s],a.b)},
dS:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gB(f).a
if(typeof e!=="number")return e.H()
s=f.gB(f).b
if(typeof s!=="number")return s.H()
r=H.a([],t.b)
for(q=T.t(f.gB(f).a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,H.e)(q),++m){l=q[m]
if(!J.az(l,a)){k=H.a([],n)
j=f.b
j=T.t((j==null?H.k(H.o("shape")):j).a,0,1)
i=j.length
h=0
for(;h<j.length;j.length===i||(0,H.e)(j),++h){g=j[h]
if(!J.az(g,b))k.push(J.R(C.a.l(o,l),g))}r.push(k)}}return Z.a6(new S.w(e-1,s-1,t.o),r)},
bB:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.az(h.gB(h).a,2)){s=h.gI(h)
if(0>=s.length)return H.m(s,0)
r=J.R(s[0],0)
s=h.gI(h)
if(0>=s.length)return H.m(s,0)
q=J.R(s[0],1)
s=h.gI(h)
if(1>=s.length)return H.m(s,1)
p=J.R(s[1],0)
s=h.gI(h)
if(1>=s.length)return H.m(s,1)
return r*J.R(s[1],1)-q*p}s=h.gB(h).a
if(typeof s!=="number")return s.H()
o=h.gB(h).b
if(typeof o!=="number")return o.H()
n=new S.w(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=T.t(h.gB(h).a,0,1),m=s.length,l=h.a,k=0;k<s.length;s.length===m||(0,H.e)(s),++k){j=s[k]
if(typeof j!=="number")return j.a1()
i=C.b.a1(j,2)===0?1:-1
if(0>=l.length)return H.m(l,0)
o.push(i*Z.dp(J.R(l[0],j),n).w(0,h.dS(0,j)).bB())}return T.fL(o,t.V)},
cR:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b0.bB()===0)throw H.c("This matrix is not inversible")
s=b0.gB(b0).a
r=b0.gB(b0).b
q=b0.n()
p=Z.fg(s)
for(o=T.t(r,0,1),n=o.length,m=s-1,l=r-1,k=p.a,j=q.a,i=t.o,h=0;h<o.length;o.length===n||(0,H.e)(o),++h){g=o[h]
for(f=g,e=-1,d=-1;f!==s;++f){i.a(new S.w(f,g,i))
if(f<0||f>=j.length)return H.m(j,f)
c=J.R(j[f],g)
if(c>d){d=c
e=f}}b=j.length
if(e<0||e>=b)return H.m(j,e)
a=j[e]
if(g>>>0!==g||g>=b)return H.m(j,g)
j[e]=j[g]
C.a.F(j,g,a)
b=k.length
if(e>=b)return H.m(k,e)
a0=k[e]
if(g!==(g|0)||g>=b)return H.m(k,g)
k[e]=k[g]
C.a.F(k,g,a0)
b=J.a5(a)
a1=b.l(a,g)
for(a2=g;a2<r;++a2){a3=b.l(a,a2)
if(typeof a3!=="number")return a3.al()
b.F(a,a2,a3/a1)}for(a3=J.a5(a0),a2=l;a2>=0;--a2){a4=a3.l(a0,a2)
if(typeof a4!=="number")return a4.al()
a3.F(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(e>=j.length)return H.m(j,e)
a5=j[e]
if(e>=k.length)return H.m(k,e)
a6=k[e]
a4=J.a5(a5)
a1=a4.l(a5,g)
for(a7=a2;a7!==r;++a7){a8=a4.l(a5,a7)
a9=b.l(a,a7)
if(typeof a9!=="number")return a9.w()
if(typeof a8!=="number")return a8.H()
a4.F(a5,a7,a8-a9*a1)}for(a4=J.a5(a6),a7=l;a7>0;--a7){a8=a4.l(a6,a7)
a9=a3.l(a0,a7)
if(typeof a9!=="number")return a9.w()
if(typeof a8!=="number")return a8.H()
a4.F(a6,a7,a8-a9*a1);--a7
a9=a4.l(a6,a7)
a8=a3.l(a0,a7)
if(typeof a8!=="number")return a8.w()
if(typeof a9!=="number")return a9.H()
a4.F(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.l(a6,0)
a9=a3.l(a0,0)
if(typeof a9!=="number")return a9.w()
if(typeof a8!=="number")return a8.H()
a4.F(a6,0,a8-a9*a1)}}}return p},
aw:function(a){var s=this.gI(this),r=H.x(s),q=r.h("O<1,j>")
return P.n(new H.O(s,r.h("j(1)").a(new Z.dt(a)),q),!0,q.h("B.E"))},
gcJ:function(){return this.at(0,new Z.dy(this))},
aj:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.gB(a0),a2=a0.gB(a0).b,a3=a5.gB(a5).b,a4=Z.dp(0,new S.w(a0.gB(a0).a,a5.gB(a5).b,t.o))
for(a1=T.t(a1.a,0,1),s=a1.length,r=a5.a,q=a0.a,p=a4.a,o=0;o<a1.length;a1.length===s||(0,H.e)(a1),++o){n=a1[o]
for(m=T.t(a3,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.e)(m),++k){j=m[k]
for(i=T.t(a2,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
e=C.a.l(p,n)
d=J.a5(e)
c=d.l(e,j)
b=J.R(C.a.l(q,n),f)
a=J.R(C.a.l(r,f),j)
if(typeof b!=="number")return b.w()
if(typeof a!=="number")return H.dj(a)
if(typeof c!=="number")return c.A()
d.F(e,j,c+b*a)}}}return a4},
n:function(){return this.dW(new Z.ds())},
dW:function(a){return this.at(0,new Z.dr(t.ao.a(a)))},
e2:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gI(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)for(p=J.D(s[q]);p.k();)o.push(p.gm())
return o},
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.p(d.gB(d).a)+"x"+H.p(d.gB(d).b),b=H.a([],t.X)
for(s=d.gI(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)for(p=J.D(s[q]);p.k();)b.push(C.b.bw(p.gm(),6).length)
o=C.a.bm(b,6,C.D,t.S)
for(b=d.gI(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.e)(b),++q){m=b[q]
n+="      "
for(l=J.D(m);l.k();){k=l.gm()
j=k<0?"-":" "
k=Math.abs(k)
i=C.b.bw(k,6)
h=H.a([],p)
for(i=T.t(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.e)(i),++f)h.push(" ")
e=C.a.ea(h)
n=n+j+C.b.bw(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sdv:function(a){this.b=t.gv.a(a)}}
Z.dw.prototype={
$2:function(a,b){return a+this.a.a7(t.o.a(b))},
$S:1}
Z.dx.prototype={
$2:function(a,b){return a*this.a.a7(t.o.a(b))},
$S:1}
Z.dv.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=T.eW(a.b,t.V)
r=H.x(s)
q=r.h("O<1,j>")
return P.n(new H.O(s,r.h("j(1)").a(new Z.du(this.a,a)),q),!0,q.h("B.E"))},
$S:40}
Z.du.prototype={
$1:function(a){t.d.a(a)
return this.a.$2(a.b,new S.w(this.b.a,a.a,t.o))},
$S:41}
Z.dt.prototype={
$1:function(a){return J.R(t.p.a(a),this.a)},
$S:42}
Z.dy.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.a7(new S.w(b.b,b.a,s))},
$S:1}
Z.ds.prototype={
$1:function(a){return a},
$S:43}
Z.dr.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
Z.fa.prototype={
$2:function(a,b){var s=t.A
return s.a(a).aj(s.a(b))},
$S:44}
Y.b.prototype={
E:function(a,b){if(b==null)return!1
return b instanceof Y.b&&this.a===b.a&&this.b===b.b&&this.c===b.c},
A:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a+b,s.b+b,s.c+b)
else if(b instanceof Y.b)return new Y.b(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.c("Vector3 only support addition by num or Vector3")},
H:function(a,b){var s=this
if(typeof b=="number")return new Y.b(s.a-b,s.b-b,s.c-b)
else if(b instanceof Y.b)return new Y.b(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.c("Vector3 only support subtraction by num or Vector3")},
w:function(a,b){return new Y.b(this.a*b,this.b*b,this.c*b)},
al:function(a,b){return new Y.b(this.a/b,this.b/b,this.c/b)},
br:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
aT:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.c("No component at index "+a+" on a vector3")}},
eo:function(){var s=t.n
s=Z.a6(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
bx:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new Y.b(s,r,c==null?this.c:c)},
cM:function(a){return this.bx(null,null,a)},
es:function(a){return this.bx(a,null,null)},
eu:function(a){return this.bx(null,a,null)},
er:function(a,b){if(a===0)return this.es(b)
else if(a===1)return this.eu(b)
else if(a===2)return this.cM(b)
else throw H.c("Cannot index a vector3 with index="+a)},
aj:function(a){var s=Z.fg(3).at(0,new Y.eh(a)).aj(this.eo()),r=t.o
return new Y.b(s.a7(new S.w(0,0,r)),s.a7(new S.w(1,0,r)),s.a7(new S.w(2,0,r)))},
i:function(a){return"vec3("+H.p(this.a)+", "+H.p(this.b)+", "+H.p(this.c)+")"}}
Y.eh.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gB(r).a
if(typeof s!=="number")return s.cN()
if(typeof q!=="number")return H.dj(q)
if(s<q){s=b.b
q=r.gB(r).b
if(typeof s!=="number")return s.cN()
if(typeof q!=="number")return H.dj(q)
q=s>=q
s=q}else s=!0
return s?a:r.a7(b)},
$S:1}
S.w.prototype={
i:function(a){return"["+H.p(this.a)+", "+H.p(this.b)+"]"},
E:function(a,b){if(b==null)return!1
return b instanceof S.w&&J.az(b.a,this.a)&&J.az(b.b,this.b)},
gq:function(a){var s=J.bd(this.a),r=J.bd(this.b)
return A.hr(A.cd(A.cd(0,C.c.gq(s)),C.c.gq(r)))}}
S.b2.prototype={
N:function(a){var s=this
return P.dP([s.a,s.b,s.c,s.d],!1,t.z)},
i:function(a){var s=this
return"["+s.a.i(0)+", "+s.b.i(0)+", "+s.c.i(0)+", "+s.d.i(0)+"]"},
E:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.b2&&b.a.E(0,s.a)&&b.b.E(0,s.b)&&b.c.E(0,s.c)&&b.d.E(0,s.d)},
gq:function(a){var s=this,r=H.ar(s.a),q=H.ar(s.b),p=H.ar(s.c),o=H.ar(s.d)
return A.hr(A.cd(A.cd(A.cd(A.cd(0,C.c.gq(r)),C.c.gq(q)),C.c.gq(p)),C.c.gq(o)))}}
V.cP.prototype={
ag:function(){var s=0,r=P.dh(t.z),q=this,p,o,n,m,l
var $async$ag=P.di(function(a,b){if(a===1)return P.dd(b,r)
while(true)switch(s){case 0:n=t.O
m=H.a([],n)
l=H.a([C.f],n)
n=H.a([],n)
p=new N.bo(0,6.283185307179586,1,C.d,9,0.35,C.u,new N.bT(l,n,0,m,0,0,C.d),null,null,4,0,0,C.h,!0,0.01,!1,0.000001,4,null,null,null,C.f,null,null,null,null,null)
p.b2(C.f,null,null)
p.b5(null,0,!0,C.i,!1,0.01,C.h,0,C.f,4,0.000001)
p.cZ(C.f)
n=H.a([C.T,C.h,C.S,C.U],t.l)
o=new N.bP(4,0,0,C.h,!1,0.01,!1,0.000001,4,null,null,null,C.f,null,null,null,null,null)
o.b2(C.f,null,null)
o.b5(null,0,!1,null,!1,0.01,C.h,0,null,4,0.000001)
o.dq(n,null,0,!1,null,!1,C.h,0,null,4)
o.dr(null,0,null,2,!1,C.h,0,null,4,2)
o.cF(0,3.141592653589793,C.d,null,C.v)
o.ej(0,-2.356194490192345)
o.bG(C.i)
p.bG(C.N.ev(0.5))
p.d5(C.M)
n=new M.cN(1,M.f9(),0,o)
n.a_()
s=2
return P.b7(q.ak(0,n),$async$ag)
case 2:s=3
return P.b7(q.ak(0,G.iF(o,0,M.f9(),1,p)),$async$ag)
case 3:n=new E.cz(1,M.f9(),0,o)
n.a_()
n.bP(o,0,M.f9(),1,null)
s=4
return P.b7(q.ak(0,n),$async$ag)
case 4:return P.de(null,r)}})
return P.df($async$ag,r)}};(function aliases(){var s=J.ab.prototype
s.dh=s.i
s=J.aQ.prototype
s.di=s.i
s=P.z.prototype
s.bO=s.i
s=X.aA.prototype
s.df=s.bg
s.dg=s.ar
s=G.b1.prototype
s.dl=s.ar
s=M.y.prototype
s.dk=s.ac
s.dj=s.as
s=V.H.prototype
s.dm=s.ac
s=V.bg.prototype
s.de=s.d8})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u
s(P,"jw","iJ",4)
s(P,"jx","iK",4)
s(P,"jy","iL",4)
r(P,"hC","jo",0)
q(P,"jO",2,null,["$1$2","$2"],["hN",function(a,b){return P.hN(a,b,t.H)}],46,0)
q(P,"hL",2,null,["$1$2","$2"],["hM",function(a,b){return P.hM(a,b,t.H)}],47,0)
p(M.y.prototype,"gcS","a_",19)
q(B,"hP",3,null,["$3"],["jS"],48,0)
q(M,"f9",1,null,["$3$inflection$pauseRatio","$1"],["hS",function(a){return M.hS(a,null,null)}],32,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.z,null)
q(P.z,[H.fk,J.ab,J.bi,P.l,H.bn,P.F,H.a7,H.V,P.G,H.bs,H.e4,H.dX,H.bt,H.c3,P.b_,H.dN,H.bz,H.cF,H.eF,H.af,H.d4,H.da,P.eI,P.d_,P.b5,P.b6,P.bk,P.d1,P.aU,P.M,P.d0,P.bR,P.bS,P.d8,P.c9,P.cb,P.d5,P.aV,P.Z,P.bN,P.bQ,P.ep,P.dJ,P.L,P.d9,P.cR,W.fh,P.d6,P.aS,A.c1,X.aA,R.dC,K.bf,V.cY,M.y,V.bg,N.cL,K.u,X.a9,X.a1,M.dI,O.bD,Z.ad,Y.b,S.w,S.b2])
q(J.ab,[J.cD,J.aZ,J.aQ,J.r,J.aC,J.aq,W.T,W.bm,W.dH,W.bp,W.f])
q(J.aQ,[J.cJ,J.ak,J.aD])
r(J.dM,J.r)
q(J.aC,[J.bv,J.cE])
q(P.l,[H.aF,H.C,H.aR,H.aT,H.au,P.bu])
q(H.aF,[H.aO,H.ca])
r(H.bZ,H.aO)
r(H.bX,H.ca)
r(H.S,H.bX)
q(P.F,[H.bx,P.cU,H.cG,H.cW,H.cK,P.bj,H.d3,P.cI,P.ao,P.cX,P.cV,P.b0,P.cv,P.cw])
q(H.a7,[H.f7,H.cC,H.cT,H.eX,H.eY,H.eZ,P.ek,P.ej,P.el,P.em,P.eJ,P.eM,P.eN,P.eQ,P.eq,P.ey,P.eu,P.ev,P.ew,P.es,P.ex,P.er,P.eB,P.eC,P.eA,P.ez,P.e2,P.e3,P.eP,P.eG,P.eH,P.dQ,W.ei,W.eo,A.dK,R.dD,R.dE,K.dl,K.dm,K.dn,M.dV,M.dU,M.dT,M.dW,M.dR,M.dS,V.al,V.am,V.an,V.ef,V.eg,V.ea,V.ec,V.eb,V.e6,V.e9,V.e7,V.e8,V.ee,V.ed,Q.dG,Q.dF,N.e1,T.fc,T.fb,T.fd,V.f0,V.f1,V.f2,V.eS,V.eR,X.eT,X.eU,Z.dw,Z.dx,Z.dv,Z.du,Z.dt,Z.dy,Z.ds,Z.dr,Z.fa,Y.eh])
q(H.C,[H.B,H.br,H.by])
q(H.B,[H.ag,H.O,H.at])
r(H.bq,H.aR)
q(P.G,[H.bC,H.bW,H.bO])
r(H.aY,H.au)
r(H.aB,H.cC)
r(H.bI,P.cU)
q(H.cT,[H.cQ,H.aX])
r(H.cZ,P.bj)
r(P.bB,P.b_)
r(H.bw,P.bB)
r(H.c6,H.d3)
q(P.bu,[P.c5,A.Q])
r(P.c4,P.d1)
r(P.d7,P.c9)
r(P.c2,P.cb)
r(P.aw,P.c2)
q(P.ao,[P.bK,P.cB])
q(W.T,[W.a_,W.b3])
q(W.a_,[W.d,W.ai])
r(W.h,W.d)
q(W.h,[W.cr,W.cs,W.aN,W.cA,W.cM])
r(W.ah,W.f)
r(W.a2,W.ah)
r(W.bY,W.bp)
r(W.c_,P.bR)
r(W.d2,W.c_)
r(W.c0,P.bS)
q(X.aA,[M.cO,G.b1])
r(M.cN,M.cO)
r(E.cz,G.b1)
r(K.cq,K.bf)
r(B.ct,K.cq)
r(N.bT,V.cY)
r(V.H,M.y)
q(V.H,[N.bU,N.bJ,V.bV])
r(N.bh,N.bU)
r(N.bo,N.bh)
r(N.bL,N.bJ)
r(N.bP,N.bL)
r(Q.cu,V.bg)
r(O.cH,X.a1)
q(O.cH,[O.bF,O.bG,O.bH,O.bE])
r(V.cP,N.cL)
s(H.ca,P.Z)
s(P.cb,P.bN)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",j:"double",N:"num",a0:"String",K:"bool",L:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","j(j,w<q,q>)","b(b)","u(u)","~(~())","~(a2)","K(y)","L(@)","L()","K(q,b)","K(q)","i<j>(u)","q(q,q)","i<y>(y)","~(N)","~(f)","aa<L>()","K(b)","L(~())","a0()","@(@,a0)","@(a0)","j(b)","@(@)","~(@)","L(@,aE)","i<b>(i<i<b>>,@)","i<u>(a0,H)","~(a0,H,i<u>)","i<u>(i<u>)","j(N)","K(u)","j(j{inflection:j?,pauseRatio:j?})","j(q)","~(q,@)","u(i<j>)","b(j)","b(b,b)","L(z,aE)","M<@>(@)","i<j>(w<q,i<j>>)","j(w<q,j>)","j(i<j>)","j(j)","ad(ad,ad)","~(z?,z?)","0^(0^,0^)<N>","0^(0^,0^)<N>","i<b>(i<b>,i<b>,j)","~(i<y>,bM<y>)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.iZ(v.typeUniverse,JSON.parse('{"cJ":"aQ","ak":"aQ","aD":"aQ","jZ":"f","k5":"f","jY":"d","k6":"d","ke":"d","k_":"h","kb":"h","k7":"a_","k3":"a_","kc":"a2","k1":"ah","k0":"ai","kf":"ai","cD":{"K":[]},"aZ":{"L":[]},"r":{"i":["1"],"C":["1"],"l":["1"]},"dM":{"r":["1"],"i":["1"],"C":["1"],"l":["1"]},"bi":{"G":["1"]},"aC":{"j":[],"N":[]},"bv":{"j":[],"q":[],"N":[]},"cE":{"j":[],"N":[]},"aq":{"a0":[],"dY":[]},"C":{"l":["1"]},"aF":{"l":["2"]},"bn":{"G":["2"]},"aO":{"aF":["1","2"],"l":["2"],"l.E":"2"},"bZ":{"aO":["1","2"],"aF":["1","2"],"C":["2"],"l":["2"],"l.E":"2"},"bX":{"Z":["2"],"i":["2"],"aF":["1","2"],"C":["2"],"l":["2"]},"S":{"bX":["1","2"],"Z":["2"],"i":["2"],"aF":["1","2"],"C":["2"],"l":["2"],"l.E":"2","Z.E":"2"},"bx":{"F":[]},"B":{"C":["1"],"l":["1"]},"ag":{"B":["1"],"C":["1"],"l":["1"],"B.E":"1","l.E":"1"},"V":{"G":["1"]},"aR":{"l":["2"],"l.E":"2"},"bq":{"aR":["1","2"],"C":["2"],"l":["2"],"l.E":"2"},"bC":{"G":["2"]},"O":{"B":["2"],"C":["2"],"l":["2"],"B.E":"2","l.E":"2"},"aT":{"l":["1"],"l.E":"1"},"bW":{"G":["1"]},"au":{"l":["1"],"l.E":"1"},"aY":{"au":["1"],"C":["1"],"l":["1"],"l.E":"1"},"bO":{"G":["1"]},"br":{"C":["1"],"l":["1"],"l.E":"1"},"bs":{"G":["1"]},"at":{"B":["1"],"C":["1"],"l":["1"],"B.E":"1","l.E":"1"},"cC":{"a7":[],"aP":[]},"aB":{"a7":[],"aP":[]},"bI":{"F":[]},"cG":{"F":[]},"cW":{"F":[]},"c3":{"aE":[]},"a7":{"aP":[]},"cT":{"a7":[],"aP":[]},"cQ":{"a7":[],"aP":[]},"aX":{"a7":[],"aP":[]},"cK":{"F":[]},"cZ":{"F":[]},"bw":{"b_":["1","2"],"bA":["1","2"]},"by":{"C":["1"],"l":["1"],"l.E":"1"},"bz":{"G":["1"]},"cF":{"dY":[]},"d3":{"F":[]},"c6":{"F":[]},"M":{"aa":["1"]},"b6":{"G":["1"]},"c5":{"l":["1"],"l.E":"1"},"bk":{"F":[]},"c4":{"d1":["1"]},"c9":{"hc":[]},"d7":{"c9":[],"hc":[]},"aw":{"bN":["1"],"bM":["1"],"C":["1"],"l":["1"]},"aV":{"G":["1"]},"bu":{"l":["1"]},"bB":{"b_":["1","2"],"bA":["1","2"]},"b_":{"bA":["1","2"]},"c2":{"bN":["1"],"bM":["1"],"C":["1"],"l":["1"]},"j":{"N":[]},"q":{"N":[]},"i":{"C":["1"],"l":["1"]},"bM":{"C":["1"],"l":["1"]},"a0":{"dY":[]},"bj":{"F":[]},"cU":{"F":[]},"cI":{"F":[]},"ao":{"F":[]},"bK":{"F":[]},"cB":{"F":[]},"cX":{"F":[]},"cV":{"F":[]},"b0":{"F":[]},"cv":{"F":[]},"bQ":{"F":[]},"cw":{"F":[]},"d9":{"aE":[]},"a2":{"f":[]},"ah":{"f":[]},"h":{"d":[],"T":[]},"cr":{"d":[],"T":[]},"cs":{"d":[],"T":[]},"aN":{"d":[],"T":[]},"ai":{"T":[]},"bp":{"fo":["N"]},"d":{"T":[]},"cA":{"d":[],"T":[]},"a_":{"T":[]},"cM":{"d":[],"T":[]},"b3":{"T":[]},"bY":{"fo":["N"]},"c_":{"bR":["1"]},"d2":{"c_":["1"],"bR":["1"]},"c0":{"bS":["1"]},"d6":{"iA":[]},"Q":{"l":["i<1>"],"l.E":"i<1>"},"c1":{"G":["i<1>"]},"cO":{"aA":[]},"cN":{"aA":[]},"cz":{"aA":[]},"b1":{"aA":[]},"cq":{"bf":[]},"ct":{"bf":[]},"bT":{"cY":[]},"bU":{"H":[],"y":[]},"bh":{"H":[],"y":[]},"bo":{"H":[],"y":[]},"bJ":{"H":[],"y":[]},"bL":{"H":[],"y":[]},"bP":{"H":[],"y":[]},"H":{"y":[]},"bV":{"H":[],"y":[]},"cu":{"bg":[]},"cH":{"a1":[]},"bF":{"a1":[]},"bG":{"a1":[]},"bH":{"a1":[]},"bE":{"a1":[]},"cP":{"cL":[]}}'))
H.iY(v.typeUniverse,JSON.parse('{"ca":2,"bu":1,"bB":2,"c2":1,"cb":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bc
return{dq:s("@<q>"),A:s("ad"),t:s("bk"),gA:s("aN"),G:s("u"),Q:s("C<@>"),C:s("F"),I:s("f"),en:s("a9"),e:s("a1"),Y:s("aP"),f:s("aa<@>"),v:s("aB<j>"),R:s("Q<y>"),w:s("Q<z>"),eX:s("Q<H>"),eR:s("Q<b>"),ca:s("Q<j>"),eN:s("Q<q>"),hf:s("l<@>"),J:s("r<ad>"),O:s("r<u>"),aE:s("r<cy<a1>>"),Z:s("r<i<y>>"),L:s("r<i<z>>"),h:s("r<i<b>>"),b:s("r<i<j>>"),gL:s("r<i<q>>"),r:s("r<y>"),db:s("r<bS<@>>"),s:s("r<a0>"),dm:s("r<b2<b,b,b,b>>"),d_:s("r<H>"),l:s("r<b>"),n:s("r<j>"),gn:s("r<@>"),X:s("r<q>"),eM:s("r<y(y,j)>"),T:s("aZ"),cj:s("aD"),fw:s("k9"),bf:s("ka"),U:s("i<u>"),gF:s("i<cy<a1>>"),dF:s("i<i<b>>"),a:s("i<y>"),y:s("i<b>"),p:s("i<j>"),aH:s("i<@>"),cH:s("bA<a9,i<cy<a1>>>"),j:s("y"),fV:s("bE"),E:s("a2"),gt:s("bF"),bt:s("bG"),dN:s("bH"),P:s("L"),K:s("z"),q:s("aS<N>"),eU:s("fo<N>"),bA:s("bM<y>"),k:s("aE"),N:s("a0"),e3:s("ag<b>"),hd:s("w<b,b>"),d:s("w<q,j>"),o:s("w<q,q>"),fz:s("w<q,i<j>>"),bl:s("b2<b,b,b,b>"),ak:s("ak"),m:s("H"),i:s("b"),cD:s("b(b)"),do:s("d2<a2>"),ck:s("M<L>"),c:s("M<@>"),fJ:s("M<q>"),dL:s("M<N>"),g4:s("c4<N>"),cJ:s("K"),al:s("K(z)"),fT:s("K(q)"),V:s("j"),fA:s("j(j,w<q,q>)"),ao:s("j(j)"),z:s("@"),fO:s("@()"),bI:s("@(z)"),ag:s("@(z,aE)"),S:s("q"),aw:s("0&*"),_:s("z*"),eH:s("aa<L>?"),x:s("i<u>?"),hh:s("i<y>?"),D:s("i<b>?"),b5:s("i<b>(i<b>,i<b>,j)?"),cI:s("i<y(y,j)>?"),dC:s("bA<a9,i<cy<a1>>>?"),W:s("z?"),gv:s("w<q,q>?"),F:s("aU<@,@>?"),g:s("d5?"),B:s("@(f)?"),g5:s("~()?"),H:s("N"),u:s("~"),M:s("~()"),c4:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.y=W.aN.prototype
C.j=W.bm.prototype
C.O=J.ab.prototype
C.a=J.r.prototype
C.c=J.bv.prototype
C.P=J.aZ.prototype
C.b=J.aC.prototype
C.A=J.aq.prototype
C.Q=J.aD.prototype
C.B=J.cJ.prototype
C.t=J.ak.prototype
C.V=W.b3.prototype
C.p=new H.aB(P.hL(),t.v)
C.D=new H.aB(P.hL(),H.bc("aB<q>"))
C.o=new H.aB(P.jO(),t.v)
C.E=new H.bs(H.bc("bs<0&>"))
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.e=new P.d7()
C.L=new P.d9()
C.i=new K.u(0,0,0,0)
C.z=new K.u(0,0,0,1)
C.f=new K.u(1,1,1,1)
C.M=new K.u(0.98824,0.38431,0.33333,1)
C.N=new K.u(0.81961,0.27843,0.74118,1)
C.k=new X.a9("EventType.mouseMovedEvent")
C.l=new X.a9("EventType.mousePressedEvent")
C.m=new X.a9("EventType.mouseReleasedEvent")
C.n=new X.a9("EventType.mouseDraggedEvent")
C.q=new X.a9("EventType.keyPressedEvent")
C.r=new X.a9("EventType.keyReleasedEvent")
C.R=H.a(s([C.k,C.l,C.m,C.n,C.q,C.r]),H.bc("r<a9>"))
C.X=H.a(s([]),t.r)
C.d=new Y.b(0,0,0)
C.u=new Y.b(0,0,1)
C.C=new Y.b(0,1,0)
C.v=new Y.b(1,0,0)
C.h=new Y.b(1,1,0)
C.S=new Y.b(1,-1,0)
C.T=new Y.b(-1,1,0)
C.U=new Y.b(-1,-1,0)
C.W=new P.b5(null,2)})();(function staticFields(){$.eD=null
$.ap=0
$.bl=null
$.fT=null
$.hH=null
$.hB=null
$.hQ=null
$.eV=null
$.f_=null
$.fH=null
$.b8=null
$.cf=null
$.cg=null
$.fz=!1
$.I=C.e
$.a3=H.a([],H.bc("r<z>"))
$.dg=P.fm(t.S,H.bc("bA<q,q>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"k2","hW",function(){return H.jD("_$dart_dartClosure")})
s($,"kC","fO",function(){return C.e.cG(new H.f7(),H.bc("aa<L>"))})
s($,"kg","hX",function(){return H.av(H.e5({
toString:function(){return"$receiver$"}}))})
s($,"kh","hY",function(){return H.av(H.e5({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ki","hZ",function(){return H.av(H.e5(null))})
s($,"kj","i_",function(){return H.av(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"km","i2",function(){return H.av(H.e5(void 0))})
s($,"kn","i3",function(){return H.av(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"kl","i1",function(){return H.av(H.ha(null))})
s($,"kk","i0",function(){return H.av(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"kp","i5",function(){return H.av(H.ha(void 0))})
s($,"ko","i4",function(){return H.av(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"kq","fN",function(){return P.iI()})
r($,"k4","cl",function(){var q=new M.dI()
q.dn()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.ab,DOMError:J.ab,MediaError:J.ab,NavigatorUserMediaError:J.ab,OverconstrainedError:J.ab,PositionError:J.ab,SQLError:J.ab,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,HTMLAnchorElement:W.cr,HTMLAreaElement:W.cs,HTMLCanvasElement:W.aN,CanvasRenderingContext2D:W.bm,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,DOMException:W.dH,DOMRectReadOnly:W.bp,SVGAElement:W.d,SVGAnimateElement:W.d,SVGAnimateMotionElement:W.d,SVGAnimateTransformElement:W.d,SVGAnimationElement:W.d,SVGCircleElement:W.d,SVGClipPathElement:W.d,SVGDefsElement:W.d,SVGDescElement:W.d,SVGDiscardElement:W.d,SVGEllipseElement:W.d,SVGFEBlendElement:W.d,SVGFEColorMatrixElement:W.d,SVGFEComponentTransferElement:W.d,SVGFECompositeElement:W.d,SVGFEConvolveMatrixElement:W.d,SVGFEDiffuseLightingElement:W.d,SVGFEDisplacementMapElement:W.d,SVGFEDistantLightElement:W.d,SVGFEFloodElement:W.d,SVGFEFuncAElement:W.d,SVGFEFuncBElement:W.d,SVGFEFuncGElement:W.d,SVGFEFuncRElement:W.d,SVGFEGaussianBlurElement:W.d,SVGFEImageElement:W.d,SVGFEMergeElement:W.d,SVGFEMergeNodeElement:W.d,SVGFEMorphologyElement:W.d,SVGFEOffsetElement:W.d,SVGFEPointLightElement:W.d,SVGFESpecularLightingElement:W.d,SVGFESpotLightElement:W.d,SVGFETileElement:W.d,SVGFETurbulenceElement:W.d,SVGFilterElement:W.d,SVGForeignObjectElement:W.d,SVGGElement:W.d,SVGGeometryElement:W.d,SVGGraphicsElement:W.d,SVGImageElement:W.d,SVGLineElement:W.d,SVGLinearGradientElement:W.d,SVGMarkerElement:W.d,SVGMaskElement:W.d,SVGMetadataElement:W.d,SVGPathElement:W.d,SVGPatternElement:W.d,SVGPolygonElement:W.d,SVGPolylineElement:W.d,SVGRadialGradientElement:W.d,SVGRectElement:W.d,SVGScriptElement:W.d,SVGSetElement:W.d,SVGStopElement:W.d,SVGStyleElement:W.d,SVGElement:W.d,SVGSVGElement:W.d,SVGSwitchElement:W.d,SVGSymbolElement:W.d,SVGTSpanElement:W.d,SVGTextContentElement:W.d,SVGTextElement:W.d,SVGTextPathElement:W.d,SVGTextPositioningElement:W.d,SVGTitleElement:W.d,SVGUseElement:W.d,SVGViewElement:W.d,SVGGradientElement:W.d,SVGComponentTransferFunctionElement:W.d,SVGFEDropShadowElement:W.d,SVGMPathElement:W.d,Element:W.d,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.T,HTMLFormElement:W.cA,MouseEvent:W.a2,DragEvent:W.a2,PointerEvent:W.a2,WheelEvent:W.a2,Document:W.a_,DocumentFragment:W.a_,HTMLDocument:W.a_,ShadowRoot:W.a_,XMLDocument:W.a_,Attr:W.a_,DocumentType:W.a_,Node:W.a_,HTMLSelectElement:W.cM,CompositionEvent:W.ah,FocusEvent:W.ah,KeyboardEvent:W.ah,TextEvent:W.ah,TouchEvent:W.ah,UIEvent:W.ah,Window:W.b3,DOMWindow:W.b3,ClientRect:W.bY,DOMRect:W.bY})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=V.jL
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=square_to_circle.dart.js.map
