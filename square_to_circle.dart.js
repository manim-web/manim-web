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
a[c]=function(){a[c]=function(){H.jV(b)}
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
if(a[b]!==s)H.jW(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.fD(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={fj:function fj(){},
fU:function(a,b,c){if(b.h("C<0>").b(a))return new H.bZ(a,b.h("@<0>").v(c).h("bZ<1,2>"))
return new H.aO(a,b.h("@<0>").v(c).h("aO<1,2>"))},
q:function(a){return new H.bx("Field '"+a+"' has not been initialized.")},
h8:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fB:function(a,b,c){return a},
cT:function(a,b,c,d){P.ae(b,"start")
if(c!=null){P.ae(c,"end")
if(b>c)H.l(P.as(b,0,c,"start",null))}return new H.ag(a,b,c,d.h("ag<0>"))},
ix:function(a,b,c,d){if(t.Q.b(a))return new H.bq(a,b,c.h("@<0>").v(d).h("bq<1,2>"))
return new H.aR(a,b,c.h("@<0>").v(d).h("aR<1,2>"))},
h6:function(a,b,c){if(t.Q.b(a)){P.ae(b,"count")
return new H.aY(a,b,c.h("aY<0>"))}P.ae(b,"count")
return new H.au(a,b,c.h("au<0>"))},
U:function(){return new P.b0("No element")},
ir:function(){return new P.b0("Too few elements")},
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
f6:function f6(){},
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
hV:function(a){var s,r=H.hU(a)
if(r!=null)return r
s="minified:"+a
return s},
n:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cp(a)
return s},
ar:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
e_:function(a){return H.iB(a)},
iB:function(a){var s,r,q,p
if(a instanceof P.z)return H.X(H.cj(a),null)
if(J.aI(a)===C.N||t.ak.b(a)){s=C.w(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.X(H.cj(a),null)},
dk:function(a){throw H.b(H.jw(a))},
m:function(a,b){if(a==null)J.v(a)
throw H.b(H.fE(a,b))},
fE:function(a,b){var s,r="index"
if(!H.hv(b))return new P.ao(!0,b,r,null)
s=H.P(J.v(a))
if(b<0||b>=s)return P.fh(b,a,r,null,s)
return P.e0(b,r)},
jw:function(a){return new P.ao(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.cI()
s=new Error()
s.dartException=a
r=H.jX
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
jX:function(){return J.cp(this.dartException)},
l:function(a){throw H.b(a)},
e:function(a){throw H.b(P.a8(a))},
av:function(a){var s,r,q,p,o,n
a=H.jR(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.e5(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
e6:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
h9:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fk:function(a,b){var s=b==null,r=s?null:b.method
return new H.cG(a,r,s?null:b.receiver)},
aL:function(a){if(a==null)return new H.dY(a)
if(a instanceof H.bt)return H.aK(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.aK(a,a.dartException)
return H.ju(a)},
aK:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ju:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.dM(r,16)&8191)===10)switch(q){case 438:return H.aK(a,H.fk(H.n(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.n(s)+" (Error "+q+")"
return H.aK(a,new H.bI(p,e))}}if(a instanceof TypeError){o=$.hY()
n=$.hZ()
m=$.i_()
l=$.i0()
k=$.i3()
j=$.i4()
i=$.i2()
$.i1()
h=$.i6()
g=$.i5()
f=o.U(s)
if(f!=null)return H.aK(a,H.fk(H.cc(s),f))
else{f=n.U(s)
if(f!=null){f.method="call"
return H.aK(a,H.fk(H.cc(s),f))}else{f=m.U(s)
if(f==null){f=l.U(s)
if(f==null){f=k.U(s)
if(f==null){f=j.U(s)
if(f==null){f=i.U(s)
if(f==null){f=l.U(s)
if(f==null){f=h.U(s)
if(f==null){f=g.U(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.cc(s)
return H.aK(a,new H.bI(s,f==null?e:f.method))}}}return H.aK(a,new H.cX(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.bQ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.aK(a,new P.ao(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.bQ()
return a},
aJ:function(a){var s
if(a instanceof H.bt)return a.b
if(a==null)return new H.c3(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.c3(a)},
jK:function(a,b,c,d,e,f){t.Y.a(a)
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(new P.eq("Unsupported number of arguments for wrapped closure"))},
bb:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jK)
a.$identity=s
return s},
io:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.cR().constructor.prototype):Object.create(new H.aX(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ap
if(typeof r!=="number")return r.A()
$.ap=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.fV(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.ij(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.fV(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ij:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.hI,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.ig:H.ie
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
ik:function(a,b,c,d){var s=H.fT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fV:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.im(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ik(r,!p,s,b)
if(r===0){p=$.ap
if(typeof p!=="number")return p.A()
$.ap=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bl
return new Function(p+(o==null?$.bl=H.dC("self"):o)+";return "+n+"."+H.n(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ap
if(typeof p!=="number")return p.A()
$.ap=p+1
m+=p
p="return function("+m+"){return this."
o=$.bl
return new Function(p+(o==null?$.bl=H.dC("self"):o)+"."+H.n(s)+"("+m+");}")()},
il:function(a,b,c,d){var s=H.fT,r=H.ih
switch(b?-1:a){case 0:throw H.b(new H.cL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
im:function(a,b){var s,r,q,p,o,n,m,l=$.bl
if(l==null)l=$.bl=H.dC("self")
s=$.fS
if(s==null)s=$.fS=H.dC("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.il(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.n(r)+"(this."+s+");"
n=$.ap
if(typeof n!=="number")return n.A()
$.ap=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.n(r)+"(this."+s+", "+m+");"
n=$.ap
if(typeof n!=="number")return n.A()
$.ap=n+1
return new Function(o+n+"}")()},
fD:function(a,b,c,d,e,f,g){return H.io(a,b,c,d,!!e,!!f,g)},
ie:function(a,b){return H.dd(v.typeUniverse,H.cj(a.a),b)},
ig:function(a,b){return H.dd(v.typeUniverse,H.cj(a.c),b)},
fT:function(a){return a.a},
ih:function(a){return a.c},
dC:function(a){var s,r,q,p=new H.aX("self","target","receiver","name"),o=J.dM(Object.getOwnPropertyNames(p),t.W)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.fR("Field name "+a+" not found."))},
ci:function(a){if(a==null)H.jx("boolean expression must not be null")
return a},
jx:function(a){throw H.b(new H.d_(a))},
jV:function(a){throw H.b(new P.cw(a))},
jF:function(a){return v.getIsolateTag(a)},
jW:function(a){return H.l(new H.bx(a))},
kD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jM:function(a){var s,r,q,p,o,n=H.cc($.hH.$1(a)),m=$.eV[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.j4($.hB.$2(a,n))
if(q!=null){m=$.eV[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.f4(s)
$.eV[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.f_[n]=s
return s}if(p==="-"){o=H.f4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.hP(a,s)
if(p==="*")throw H.b(P.ha(n))
if(v.leafTags[n]===true){o=H.f4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.hP(a,s)},
hP:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fJ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
f4:function(a){return J.fJ(a,!1,null,!!a.$ika)},
jO:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.f4(s)
else return J.fJ(s,c,null,null)},
jH:function(){if(!0===$.fG)return
$.fG=!0
H.jI()},
jI:function(){var s,r,q,p,o,n,m,l
$.eV=Object.create(null)
$.f_=Object.create(null)
H.jG()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hR.$1(o)
if(n!=null){m=H.jO(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jG:function(){var s,r,q,p,o,n,m=C.E()
m=H.ba(C.F,H.ba(C.G,H.ba(C.x,H.ba(C.x,H.ba(C.H,H.ba(C.I,H.ba(C.J(C.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hH=new H.eX(p)
$.hB=new H.eY(o)
$.hR=new H.eZ(n)},
ba:function(a,b){return a(b)||b},
it:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.b(new P.dK("Illegal RegExp pattern ("+String(s)+")",a))},
jR:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cC:function cC(){},
aB:function aB(a,b){this.a=a
this.$ti=b},
e5:function e5(a,b,c,d,e,f){var _=this
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
cX:function cX(a){this.a=a},
dY:function dY(a){this.a=a},
bt:function bt(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a
this.b=null},
a7:function a7(){},
cU:function cU(){},
cR:function cR(){},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a){this.a=a},
d_:function d_(a){this.a=a},
bw:function bw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dO:function dO(a,b){this.a=a
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
eG:function eG(a){this.b=a},
h4:function(a,b){var s=b.c
return s==null?b.c=H.fv(a,b.z,!0):s},
h3:function(a,b){var s=b.c
return s==null?b.c=H.c7(a,"aa",[b.z]):s},
h5:function(a){var s=a.y
if(s===6||s===7||s===8)return H.h5(a.z)
return s===11||s===12},
iF:function(a){return a.cy},
bc:function(a){return H.eL(v.typeUniverse,a,!1)},
jJ:function(a,b){var s,r,q,p,o
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
return H.hm(a,r,!0)
case 7:s=b.z
r=H.ax(a,s,a0,a1)
if(r===s)return b
return H.fv(a,r,!0)
case 8:s=b.z
r=H.ax(a,s,a0,a1)
if(r===s)return b
return H.hl(a,r,!0)
case 9:q=b.Q
p=H.ch(a,q,a0,a1)
if(p===q)return b
return H.c7(a,b.z,p)
case 10:o=b.z
n=H.ax(a,o,a0,a1)
m=b.Q
l=H.ch(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ft(a,n,l)
case 11:k=b.z
j=H.ax(a,k,a0,a1)
i=b.Q
h=H.jr(a,i,a0,a1)
if(j===k&&h===i)return b
return H.hk(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ch(a,g,a0,a1)
o=b.z
n=H.ax(a,o,a0,a1)
if(f===g&&n===o)return b
return H.fu(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.dA("Attempted to substitute unexpected RTI kind "+c))}},
ch:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.ax(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
js:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.ax(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
jr:function(a,b,c,d){var s,r=b.a,q=H.ch(a,r,c,d),p=b.b,o=H.ch(a,p,c,d),n=b.c,m=H.js(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.d5()
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
if(H.h5(b))if(a instanceof H.a7){s=H.hF(a)
if(s!=null)return s}return H.cj(a)},
cj:function(a){var s
if(a instanceof P.z){s=a.$ti
return s!=null?s:H.fx(a)}if(Array.isArray(a))return H.x(a)
return H.fx(J.aI(a))},
x:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A:function(a){var s=a.$ti
return s!=null?s:H.fx(a)},
fx:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.jd(a,s)},
jd:function(a,b){var s=a instanceof H.a7?a.__proto__.__proto__.constructor:b,r=H.j2(v.typeUniverse,s.name)
b.$ccache=r
return r},
hI:function(a){var s,r,q
H.P(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.eL(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
jB:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.db(a)
q=H.eL(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.db(q):p},
jc:function(a){var s,r,q,p=this
if(p===t.K)return H.ce(p,a,H.jg)
if(!H.ay(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ce(p,a,H.jj)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hv
else if(r===t.V||r===t.H)q=H.jf
else if(r===t.N)q=H.jh
else q=r===t.cJ?H.ht:null
if(q!=null)return H.ce(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.jL)){p.r="$i"+s
return H.ce(p,a,H.ji)}}else if(s===7)return H.ce(p,a,H.ja)
return H.ce(p,a,H.j8)},
ce:function(a,b,c){a.b=c
return a.b(b)},
jb:function(a){var s,r=this,q=H.j7
if(!H.ay(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.j5
else if(r===t.K)q=H.j3
else{s=H.ck(r)
if(s)q=H.j9}r.a=q
return r.a(a)},
fA:function(a){var s,r=a.y
if(!H.ay(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.fA(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
j8:function(a){var s=this
if(a==null)return H.fA(s)
return H.J(v.typeUniverse,H.hJ(a,s),null,s,null)},
ja:function(a){if(a==null)return!0
return this.z.b(a)},
ji:function(a){var s,r=this
if(a==null)return H.fA(r)
s=r.r
if(a instanceof P.z)return!!a[s]
return!!J.aI(a)[s]},
j7:function(a){var s,r=this
if(a==null){s=H.ck(r)
if(s)return a}else if(r.b(a))return a
H.hq(a,r)},
j9:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.hq(a,s)},
hq:function(a,b){throw H.b(H.hj(H.hc(a,H.hJ(a,b),H.X(b,null))))},
fC:function(a,b,c,d){var s=null
if(H.J(v.typeUniverse,a,s,b,s))return a
throw H.b(H.hj("The type argument '"+H.X(a,s)+"' is not a subtype of the type variable bound '"+H.X(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
hc:function(a,b,c){var s=P.cx(a),r=H.X(b==null?H.cj(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
hj:function(a){return new H.c6("TypeError: "+a)},
W:function(a,b){return new H.c6("TypeError: "+H.hc(a,null,b))},
jg:function(a){return a!=null},
j3:function(a){if(a!=null)return a
throw H.b(H.W(a,"Object"))},
jj:function(a){return!0},
j5:function(a){return a},
ht:function(a){return!0===a||!1===a},
kt:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.W(a,"bool"))},
kv:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.W(a,"bool"))},
ku:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.W(a,"bool?"))},
hp:function(a){if(typeof a=="number")return a
throw H.b(H.W(a,"double"))},
kx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.W(a,"double"))},
kw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.W(a,"double?"))},
hv:function(a){return typeof a=="number"&&Math.floor(a)===a},
P:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.W(a,"int"))},
kz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.W(a,"int"))},
ky:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.W(a,"int?"))},
jf:function(a){return typeof a=="number"},
fw:function(a){if(typeof a=="number")return a
throw H.b(H.W(a,"num"))},
kB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.W(a,"num"))},
kA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.W(a,"num?"))},
jh:function(a){return typeof a=="string"},
cc:function(a){if(typeof a=="string")return a
throw H.b(H.W(a,"String"))},
kC:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.W(a,"String"))},
j4:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.W(a,"String?"))},
jo:function(a,b){var s,r,q
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
m=C.z.A(m,a5[j])
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
if(l===9){p=H.jt(a.z)
o=a.Q
return o.length!==0?p+("<"+H.jo(o,b)+">"):p}if(l===11)return H.hs(a,b,null)
if(l===12)return H.hs(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.m(b,n)
return b[n]}return"?"},
jt:function(a){var s,r=H.hU(a)
if(r!=null)return r
s="minified:"+a
return s},
hn:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
j2:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.eL(a,b,!1)
else if(typeof m=="number"){s=m
r=H.c8(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.c7(a,b,q)
n[b]=o
return o}else return m},
j0:function(a,b){return H.ho(a.tR,b)},
j_:function(a,b){return H.ho(a.eT,b)},
eL:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.hi(H.hg(a,null,b,c))
r.set(b,s)
return s},
dd:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.hi(H.hg(a,b,c,!0))
q.set(c,r)
return r},
j1:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ft(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aH:function(a,b){b.a=H.jb
b.b=H.jc
return b},
c8:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.af(null,null)
s.y=b
s.cy=c
r=H.aH(a,s)
a.eC.set(c,r)
return r},
hm:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.iY(a,b,r,c)
a.eC.set(r,s)
return s},
iY:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ay(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.af(null,null)
q.y=6
q.z=b
q.cy=c
return H.aH(a,q)},
fv:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.iX(a,b,r,c)
a.eC.set(r,s)
return s},
iX:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ay(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ck(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ck(q.z))return q
else return H.h4(a,b)}}p=new H.af(null,null)
p.y=7
p.z=b
p.cy=c
return H.aH(a,p)},
hl:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.iV(a,b,r,c)
a.eC.set(r,s)
return s},
iV:function(a,b,c,d){var s,r,q
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
iZ:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.af(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aH(a,s)
a.eC.set(q,r)
return r},
dc:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
iU:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
c7:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.dc(c)+">"
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
ft:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.dc(r)+">")
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
hk:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.dc(m)
if(j>0){s=l>0?",":""
r=H.dc(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.iU(i)
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
fu:function(a,b,c,d){var s,r=b.cy+("<"+H.dc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.iW(a,b,c,r,d)
a.eC.set(r,s)
return s},
iW:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.ax(a,b,r,0)
m=H.ch(a,c,r,0)
return H.fu(a,n,m,c!==m)}}l=new H.af(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aH(a,l)},
hg:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hi:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.iP(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.hh(a,r,h,g,!1)
else if(q===46)r=H.hh(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aG(a.u,a.e,g.pop()))
break
case 94:g.push(H.iZ(a.u,g.pop()))
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
H.fs(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.c7(p,n,o))
else{m=H.aG(p,a.e,n)
switch(m.y){case 11:g.push(H.fu(p,m,o,a.n))
break
default:g.push(H.ft(p,m,o))
break}}break
case 38:H.iQ(a,g)
break
case 42:p=a.u
g.push(H.hm(p,H.aG(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.fv(p,H.aG(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.hl(p,H.aG(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.d5()
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
H.fs(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.hk(p,H.aG(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.fs(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.iS(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aG(a.u,a.e,i)},
iP:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hh:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.hn(s,o.z)[p]
if(n==null)H.l('No "'+p+'" in "'+H.iF(o)+'"')
d.push(H.dd(s,o,n))}else d.push(p)
return m},
iQ:function(a,b){var s=b.pop()
if(0===s){b.push(H.c8(a.u,1,"0&"))
return}if(1===s){b.push(H.c8(a.u,4,"1&"))
return}throw H.b(P.dA("Unexpected extended operation "+H.n(s)))},
aG:function(a,b,c){if(typeof c=="string")return H.c7(a,c,a.sEA)
else if(typeof c=="number")return H.iR(a,b,c)
else return c},
fs:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aG(a,b,c[s])},
iS:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aG(a,b,c[s])},
iR:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.dA("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.dA("Bad index "+c+" for "+b.i(0)))},
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
if(p===6){s=H.h4(a,d)
return H.J(a,b,c,s,e)}if(r===8){if(!H.J(a,b.z,c,d,e))return!1
return H.J(a,H.h3(a,b),c,d,e)}if(r===7){s=H.J(a,t.P,c,d,e)
return s&&H.J(a,b.z,c,d,e)}if(p===8){if(H.J(a,b,c,d.z,e))return!0
return H.J(a,b,c,H.h3(a,d),e)}if(p===7){s=H.J(a,b,c,t.P,e)
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
return H.je(a,b,c,d,e)}return!1},
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
je:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.J(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.hn(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.J(a,H.dd(a,b,l[p]),c,r[p],e))return!1
return!0},
ck:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ay(a))if(r!==7)if(!(r===6&&H.ck(a.z)))s=r===8&&H.ck(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jL:function(a){var s
if(!H.ay(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ay:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
ho:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
d5:function d5(){this.c=this.b=this.a=null},
db:function db(a){this.a=a},
d4:function d4(){},
c6:function c6(a){this.a=a},
hU:function(a){return v.mangledGlobalNames[a]}},J={
fJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fF:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fG==null){H.jH()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.ha("Return interceptor for "+H.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.eE
if(o==null)o=$.eE=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.jM(a)
if(p!=null)return p
if(typeof a=="function")return C.P
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){o=$.eE
if(o==null)o=$.eE=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
fX:function(a,b){if(a<0||a>4294967295)throw H.b(P.as(a,0,4294967295,"length",null))
return J.fZ(new Array(a),b)},
fY:function(a,b){if(a<0)throw H.b(P.fR("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("r<0>"))},
fZ:function(a,b){return J.dM(H.a(a,b.h("r<0>")),b)},
dM:function(a,b){a.fixed$length=Array
return a},
aI:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bv.prototype
return J.cE.prototype}if(typeof a=="string")return J.aq.prototype
if(a==null)return J.aZ.prototype
if(typeof a=="boolean")return J.cD.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.z)return a
return J.fF(a)},
a4:function(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.ak.prototype
return a},
jC:function(a){if(typeof a=="number")return J.aC.prototype
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
return J.fF(a)},
jD:function(a){if(typeof a=="number")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.ak.prototype
return a},
jE:function(a){if(typeof a=="number")return J.aC.prototype
if(typeof a=="string")return J.aq.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.ak.prototype
return a},
hG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.z)return a
return J.fF(a)},
fd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jC(a).A(a,b)},
az:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aI(a).F(a,b)},
cm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jE(a).w(a,b)},
R:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.a5(a).l(a,b)},
fO:function(a,b,c){return J.a4(a).G(a,b,c)},
i7:function(a,b,c,d){return J.hG(a).dw(a,b,c,d)},
i8:function(a,b,c,d){return J.hG(a).dJ(a,b,c,d)},
i9:function(a,b){return J.a4(a).t(a,b)},
aM:function(a,b){return J.a4(a).D(a,b)},
fP:function(a,b){return J.a4(a).J(a,b)},
fe:function(a){return J.a4(a).gL(a)},
bd:function(a){return J.aI(a).gq(a)},
be:function(a){return J.a5(a).gK(a)},
cn:function(a){return J.a4(a).gai(a)},
D:function(a){return J.a4(a).gu(a)},
co:function(a){return J.a4(a).gM(a)},
v:function(a){return J.Y(a).gj(a)},
E:function(a,b,c){return J.a4(a).bo(a,b,c)},
fQ:function(a,b){return J.a4(a).S(a,b)},
ia:function(a){return J.jD(a).a3(a)},
dl:function(a){return J.a4(a).N(a)},
cp:function(a){return J.aI(a).i(a)},
ab:function ab(){},
cD:function cD(){},
aZ:function aZ(){},
aQ:function aQ(){},
cK:function cK(){},
ak:function ak(){},
aD:function aD(){},
r:function r(a){this.$ti=a},
dN:function dN(a){this.$ti=a},
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
iK:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.jy()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bb(new P.el(q),1)).observe(s,{childList:true})
return new P.ek(q,s,r)}else if(self.setImmediate!=null)return P.jz()
return P.jA()},
iL:function(a){self.scheduleImmediate(H.bb(new P.em(t.M.a(a)),0))},
iM:function(a){self.setImmediate(H.bb(new P.en(t.M.a(a)),0))},
iN:function(a){t.M.a(a)
P.iT(0,a)},
iT:function(a,b){var s=new P.eJ()
s.dq(a,b)
return s},
di:function(a){return new P.d0(new P.M($.H,a.h("M<0>")),a.h("d0<0>"))},
dg:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
b7:function(a,b){P.j6(a,b)},
df:function(a,b){b.bf(0,a)},
de:function(a,b){b.cd(H.aL(a),H.aJ(a))},
j6:function(a,b){var s,r,q=new P.eM(b),p=new P.eN(b)
if(a instanceof P.M)a.c6(q,p,t.z)
else{s=t.z
if(t.f.b(a))a.bu(q,p,s)
else{r=new P.M($.H,t.c)
r.a=4
r.c=a
r.c6(q,p,s)}}},
dj:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.H.ct(new P.eQ(s),t.u,t.S,t.z)},
iO:function(a){return new P.b5(a,1)},
hd:function(){return C.W},
he:function(a){return new P.b5(a,3)},
hw:function(a,b){return new P.c5(a,b.h("c5<0>"))},
dB:function(a,b){var s=H.fB(a,"error",t.K)
return new P.bk(s,b==null?P.id(a):b)},
id:function(a){var s
if(t.C.b(a)){s=a.gb_()
if(s!=null)return s}return C.K},
eu:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.aC()
b.a=a.a
b.c=a.c
P.b4(b,q)}else{q=t.F.a(b.c)
b.a=2
b.c=a
a.c3(q)}},
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
return}f=$.H
if(f!==g)$.H=g
else f=c
a=a.c
if((a&15)===8)new P.eC(p,b,o).$0()
else if(i){if((a&1)!==0)new P.eB(p,j).$0()}else if((a&2)!==0)new P.eA(b,p).$0()
if(f!=null)$.H=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("aa<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.aD(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.eu(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.aD(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
jm:function(a,b){var s
if(t.ag.b(a))return b.ct(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.b(P.ic(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
jl:function(){var s,r
for(s=$.b8;s!=null;s=$.b8){$.cg=null
r=s.b
$.b8=r
if(r==null)$.cf=null
s.a.$0()}},
jq:function(){$.fy=!0
try{P.jl()}finally{$.cg=null
$.fy=!1
if($.b8!=null)$.fM().$1(P.hC())}},
hz:function(a){var s=new P.d1(a),r=$.cf
if(r==null){$.b8=$.cf=s
if(!$.fy)$.fM().$1(P.hC())}else $.cf=r.b=s},
jp:function(a){var s,r,q,p=$.b8
if(p==null){P.hz(a)
$.cg=$.cf
return}s=new P.d1(a)
r=$.cg
if(r==null){s.b=p
$.b8=$.cg=s}else{q=r.b
s.b=q
$.cg=r.b=s
if(q==null)$.cf=s}},
jT:function(a){var s=null,r=$.H
if(C.e===r){P.b9(s,s,C.e,a)
return}P.b9(s,s,r,t.M.a(r.cc(a)))},
kf:function(a,b){H.fB(a,"stream",t.K)
return new P.d9(b.h("d9<0>"))},
eO:function(a,b,c,d,e){P.jp(new P.eP(d,e))},
hx:function(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
hy:function(a,b,c,d,e,f,g){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
jn:function(a,b,c,d,e,f,g,h,i){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
b9:function(a,b,c,d){t.M.a(d)
if(C.e!==c)d=c.cc(d)
P.hz(d)},
el:function el(a){this.a=a},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a},
en:function en(a){this.a=a},
eJ:function eJ(){},
eK:function eK(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
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
d2:function d2(){},
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
er:function er(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
d1:function d1(a){this.a=a
this.b=null},
bR:function bR(){},
e3:function e3(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
bS:function bS(){},
d9:function d9(a){this.$ti=a},
c9:function c9(){},
eP:function eP(a,b){this.a=a
this.b=b},
d8:function d8(){},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function(a,b){return new H.bw(a.h("@<0>").v(b).h("bw<1,2>"))},
iu:function(a){return new P.aw(a.h("aw<0>"))},
iv:function(a){return new P.aw(a.h("aw<0>"))},
fr:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fq:function(a,b,c){var s=new P.aV(a,b,c.h("aV<0>"))
s.c=a.e
return s},
iq:function(a,b,c){var s,r
if(P.fz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.t($.a3,a)
try{P.jk(a,s)}finally{if(0>=$.a3.length)return H.m($.a3,-1)
$.a3.pop()}r=P.h7(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fi:function(a,b,c){var s,r
if(P.fz(a))return b+"..."+c
s=new P.cS(b)
C.a.t($.a3,a)
try{r=s
r.a=P.h7(r.a,a,", ")}finally{if(0>=$.a3.length)return H.m($.a3,-1)
$.a3.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fz:function(a){var s,r
for(s=$.a3.length,r=0;r<s;++r)if(a===$.a3[r])return!0
return!1},
jk:function(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.k())return
s=H.n(l.gm())
C.a.t(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return H.m(b,-1)
r=b.pop()
if(0>=b.length)return H.m(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){C.a.t(b,H.n(p))
return}r=H.n(p)
if(0>=b.length)return H.m(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.m(b,-1)
k-=b.pop().length+2;--j}C.a.t(b,"...")
return}}q=H.n(p)
r=H.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.t(b,m)
C.a.t(b,q)
C.a.t(b,r)},
fm:function(a,b){var s,r,q=P.iu(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.e)(a),++r)q.t(0,b.a(a[r]))
return q},
h1:function(a){var s,r={}
if(P.fz(a))return"{...}"
s=new P.cS("")
try{C.a.t($.a3,a)
s.a+="{"
r.a=!0
a.cj(0,new P.dR(r,s))
s.a+="}"}finally{if(0>=$.a3.length)return H.m($.a3,-1)
$.a3.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d6:function d6(a){this.a=a
this.c=this.b=null},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bu:function bu(){},
Z:function Z(){},
bB:function bB(){},
dR:function dR(a,b){this.a=a
this.b=b},
b_:function b_(){},
bN:function bN(){},
c2:function c2(){},
cb:function cb(){},
ip:function(a){if(a instanceof H.a7)return a.i(0)
return"Instance of '"+H.e_(a)+"'"},
h0:function(a,b,c,d){var s,r=c?J.fY(a,d):J.fX(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dQ:function(a,b,c){var s,r,q=H.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.e)(a),++r)C.a.t(q,c.a(a[r]))
return J.dM(q,c)},
o:function(a,b,c){var s
if(b)return P.h_(a,c)
s=J.dM(P.h_(a,c),c)
return s},
h_:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("r<0>"))
s=H.a([],b.h("r<0>"))
for(r=J.D(a);r.k();)C.a.t(s,r.gm())
return s},
h2:function(a){return new H.cF(a,H.it(a,!1,!0,!1,!1,!1))},
h7:function(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=H.n(s.gm())
while(s.k())}else{a+=H.n(s.gm())
for(;s.k();)a=a+c+H.n(s.gm())}return a},
cx:function(a){if(typeof a=="number"||H.ht(a)||null==a)return J.cp(a)
if(typeof a=="string")return JSON.stringify(a)
return P.ip(a)},
dA:function(a){return new P.bj(a)},
fR:function(a){return new P.ao(!1,null,null,a)},
ic:function(a,b,c){return new P.ao(!0,a,b,c)},
e0:function(a,b){return new P.bK(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.bK(b,c,!0,a,d,"Invalid value")},
iD:function(a,b,c,d){if(a<b||a>c)throw H.b(P.as(a,b,c,d,null))
return a},
e1:function(a,b,c){if(0>a||a>c)throw H.b(P.as(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.as(b,a,c,"end",null))
return b},
ae:function(a,b){if(a<0)throw H.b(P.as(a,0,null,b,null))
return a},
fh:function(a,b,c,d,e){var s=H.P(e==null?J.v(b):e)
return new P.cB(s,!0,a,c,"Index out of range")},
ac:function(a){return new P.cY(a)},
ha:function(a){return new P.cW(a)},
aj:function(a){return new P.b0(a)},
a8:function(a){return new P.cv(a)},
F:function F(){},
bj:function bj(a){this.a=a},
cV:function cV(){},
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
cY:function cY(a){this.a=a},
cW:function cW(a){this.a=a},
b0:function b0(a){this.a=a},
cv:function cv(a){this.a=a},
bQ:function bQ(){},
cw:function cw(a){this.a=a},
eq:function eq(a){this.a=a},
dK:function dK(a,b){this.a=a
this.b=b},
k:function k(){},
G:function G(){},
L:function L(){},
z:function z(){},
da:function da(){},
cS:function cS(a){this.a=a},
hO:function(a,b,c){H.fC(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
hN:function(a,b,c){H.fC(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
d7:function d7(){this.b=this.a=0},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
iz:function(a){var s=new Path2D(a)
s.toString
return s},
eF:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hf:function(a,b,c,d){var s=W.eF(W.eF(W.eF(W.eF(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
eo:function(a,b,c,d,e){var s=W.hA(new W.ep(c),t.I),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.i7(a,b,s,!1)}return new W.c0(a,b,s,!1,e.h("c0<0>"))},
hA:function(a,b){var s=$.H
if(s===C.e)return a
return s.dW(a,b)},
h:function h(){},
cr:function cr(){},
cs:function cs(){},
aN:function aN(){},
bm:function bm(){},
ai:function ai(){},
dI:function dI(){},
bp:function bp(){},
d:function d(){},
f:function f(){},
T:function T(){},
cA:function cA(){},
a2:function a2(){},
a_:function a_(){},
cJ:function cJ(){},
cN:function cN(){},
ah:function ah(){},
b3:function b3(){},
ej:function ej(a){this.a=a},
bY:function bY(){},
fg:function fg(a,b){this.a=a
this.$ti=b},
c_:function c_(){},
d3:function d3(a,b,c,d){var _=this
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
ep:function ep(a){this.a=a}},A={Q:function Q(a,b){this.a=a
this.$ti=b},dL:function dL(a){this.a=a},c1:function c1(a,b){this.a=a
this.b=null
this.$ti=b},
fW:function(a,b){return A.is(a,b,b)},
is:function(a,b,c){return P.hw(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$fW(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.iO(s[m])
case 5:case 3:s.length===n||(0,H.e)(s),++m
q=2
break
case 4:return P.hd()
case 1:return P.he(o)}}},c)},
cd:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hr:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},L={aA:function aA(){}},Z={cP:function cP(){},cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
a6:function(a,b){var s,r,q=new Z.ad(b)
if(a==null){s=q.gI(q).length
r=q.gI(q).length!==0?J.v(C.a.gL(q.gI(q))):0
a=new S.w(s,r,t.o)
s=a}else s=a
q.sdr(t.o.a(s))
return q},
dq:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=T.t(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=H.a([],q)
for(n=T.t(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.e)(n),++l)o.push(a)
j.push(o)}return Z.a6(b,j)},
dr:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.a4(a),r=s.gu(a),q=t.n;r.k();){p=r.gm()
o.push(H.a([p.a,p.b,p.c],q))}return Z.a6(new S.w(s.gj(a),3,t.o),o)},
ff:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=T.t(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
n=H.a([],q)
for(m=T.t(a,0,1),l=m.length,k=J.aI(o),j=0;j<m.length;m.length===l||(0,H.e)(m),++j)if(k.F(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return Z.a6(new S.w(a,a,t.o),i)},
jS:function(a,b){var s=Z.hS(a),r=Z.jZ(b)
return C.a.W(H.a([r,s,r.cM()],t.J),new Z.f9())},
hS:function(a){var s=t.n
return Z.a6(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
jZ:function(a){var s,r,q,p,o,n
if(a.bp()===0)return Z.ff(3)
s=a.al(0,Math.sqrt(a.bp()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.cH(0)
p=q.al(0,Math.sqrt(q.bp()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=Z.a6(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return Z.hS(o).aj(n)},
ad:function ad(a){this.a=a
this.b=null},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
dw:function dw(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a){this.a=a},
dz:function dz(a){this.a=a},
dt:function dt(){},
ds:function ds(a){this.a=a},
f9:function f9(){}},X={cz:function cz(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},a9:function a9(a){this.b=a},a1:function a1(){},
hE:function(a,b,c){var s,r
if(c){if(!$.dh.ce(a)){s=t.S
$.dh.G(0,a,P.fl(s,s))}if(!$.dh.l(0,a).ce(b)){s=$.dh.l(0,a)
s.toString
s.G(0,b,X.hE(a,b,!1))}s=$.dh.l(0,a).l(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.bk(T.t(b+1,1,1),1,new X.eT(),s)
return C.c.a8(C.a.bk(T.t(a-b,a,-1),1,new X.eU(),s),r)},
f5:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
eT:function eT(){},
eU:function eU(){}},G={
iH:function(a,b,c,d,e){var s=new G.b1(d,c,b,a)
s.Z()
s.bM(a,b,c,d,e)
return s},
b1:function b1(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null}},T={dD:function dD(a,b){this.c=a
this.d=8
this.r=b},dE:function dE(){},dF:function dF(){},
t:function(a,b,c){var s,r=H.a([],t.X)
if(c>0)for(s=b;s<a;s+=c)C.a.t(r,s)
else for(s=b;s>a;s+=c)C.a.t(r,s)
return r},
eW:function(a,b){var s,r,q,p=J.a5(a)
if(p.gK(a))return H.a([],b.h("r<w<p,0>>"))
s=H.a([],b.h("r<w<p,0>>"))
for(r=t.dq.v(b).h("w<1,2>"),q=0;q<p.gj(a);++q)C.a.t(s,new S.w(q,p.l(a,q),r))
return s},
fK:function(a,b){if(a.length===0)return b.a(0)
return C.a.W(a,new T.fb(b))},
f3:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=T.t(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.al()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return Z.a6(null,l)},
jv:function(a,b,c){var s,r,q,p,o=T.t(C.b.dY((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.e)(o),++q){p=o[q]
if(typeof p!=="number")return p.w()
n.push(H.a([p*c+b],r))}return Z.a6(null,n)},
aW:function(a,b,c){var s,r,q,p,o,n=J.a5(a)
if(n.gK(a))return a
s=n.gj(a)
if(s>b)throw H.b("Trying to stretch an array to a length shorter than its own")
r=T.t(b,0,1)
q=H.x(r)
p=q.h("O<1,j>")
o=new H.O(r,q.h("j(1)").a(new T.fa(b,s)),p)
q=H.a([],c.h("r<0>"))
for(r=new H.V(o,o.gj(o),p.h("V<B.E>")),p=p.h("B.E");r.k();)q.push(n.l(a,C.b.a3(p.a(r.d))))
return q},
jP:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("r<0>"))
for(s=T.t(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.w()
n=C.b.a8(p*o,l)
if(n<0||n>=o)return H.m(a,n)
k.push(a[n])}s=H.a([],d.h("r<0>"))
for(r=T.t(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.e)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.w()
m=C.b.a8(p*n,l)
if(m<0||m>=n)return H.m(b,m)
s.push(b[m])}return new S.w(k,s,c.h("@<i<0>>").v(d.h("i<0>")).h("w<1,2>"))},
fL:function(a,b){var s=F.dP(a,new T.fc(b),b)
return P.o(s,!0,s.$ti.h("k.E"))},
hW:function(a,b){var s=P.o(a,!0,b)
if(0>=s.length)return H.m(s,-1)
s.pop()
return s},
jY:function(a,b){var s,r,q,p=H.a([],b.h("r<0>")),o=P.iv(b)
for(s=H.x(a).h("at<1>"),r=new H.at(a,s),r=new H.V(r,r.gj(r),s.h("V<B.E>")),s=s.h("B.E");r.k();){q=s.a(r.d)
if(!o.a9(0,q)){C.a.t(p,q)
o.t(0,q)}}s=b.h("at<0>")
return P.o(new H.at(p,s),!0,s.h("B.E"))},
fb:function fb(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a}},K={bf:function bf(){},u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},R={cq:function cq(){},dm:function dm(a){this.a=a},dn:function dn(a){this.a=a},dp:function dp(a){this.a=a}},B={ct:function ct(a,b,c,d,e,f,g,h){var _=this
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
jU:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=V.fH(Z.dr(a),Z.dr(b),c,t.A)
m=H.a([],t.l)
for(r=s.gI(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
n=J.a5(o)
m.push(new Y.c(n.l(o,0),n.l(o,1),n.l(o,2)))}return m}},N={
fp:function(a){var s,r,q,p,o=a.a
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
return new N.bT(o,s,a.c,r,a.e)},
iG:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.O,d=a.k4,c=N.fp(a.r1),b=a.db
b=b==null?f:J.E(b,new V.al(),t.G)
if(b==null)b=H.a([],e)
s=t.G
b=P.o(b,!0,s)
r=a.dx
r=r==null?f:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],e):r,!0,s)
q=a.dy
q=q==null?f:J.E(q,new V.an(),s)
e=P.o(q==null?H.a([],e):q,!0,s)
s=a.x
q=a.y
p=a.gaG()
o=a.gP(a).n()
n=a.gV(a)
m=a.c
if(m===$)m=H.l(H.q("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gC(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].n())
k=a.gX()
j=H.a([],t.l)
for(h=J.D(a.gp(a));h.k();){g=h.gm()
j.push(new Y.c(g.a,g.b,g.c))}return new N.bU(a.k3,new Y.c(d.a,d.b,d.c),c,f,f,s,q,p,a.Q,!1,a.cx,a.cy,b,r,e,o,n,m,l,k,j)},
ib:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.O,d=a.k4,c=N.fp(a.r1),b=a.db
b=b==null?f:J.E(b,new V.al(),t.G)
if(b==null)b=H.a([],e)
s=t.G
b=P.o(b,!0,s)
r=a.dx
r=r==null?f:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],e):r,!0,s)
q=a.dy
q=q==null?f:J.E(q,new V.an(),s)
e=P.o(q==null?H.a([],e):q,!0,s)
s=a.x
q=a.y
p=a.gaG()
o=a.gP(a).n()
n=a.gV(a)
m=a.c
if(m===$)m=H.l(H.q("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gC(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].n())
k=a.gX()
j=H.a([],t.l)
for(h=J.D(a.gp(a));h.k();){g=h.gm()
j.push(new Y.c(g.a,g.b,g.c))}return new N.bh(a.aJ,a.aK,a.aL,a.aM,a.aN,a.k3,new Y.c(d.a,d.b,d.c),c,f,f,s,q,p,a.Q,!1,a.cx,a.cy,b,r,e,o,n,m,l,k,j)},
ii:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=t.O,e=a.k4,d=N.fp(a.r1),c=a.db
c=c==null?g:J.E(c,new V.al(),t.G)
if(c==null)c=H.a([],f)
s=t.G
c=P.o(c,!0,s)
r=a.dx
r=r==null?g:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],f):r,!0,s)
q=a.dy
q=q==null?g:J.E(q,new V.an(),s)
f=P.o(q==null?H.a([],f):q,!0,s)
s=a.x
q=a.y
p=a.gP(a).n()
o=a.gV(a)
n=a.c
if(n===$)n=H.l(H.q("target"))
n=n==null?g:n.n()
m=H.a([],t.r)
for(l=a.gC(),k=l.length,j=0;j<l.length;l.length===k||(0,H.e)(l),++j)m.push(l[j].n())
l=a.gX()
k=H.a([],t.l)
for(i=J.D(a.gp(a));i.k();){h=i.gm()
k.push(new Y.c(h.a,h.b,h.c))}return new N.bo(a.aJ,a.aK,a.aL,a.aM,a.aN,a.k3,new Y.c(e.a,e.b,e.c),d,g,g,s,q,!0,a.Q,!1,a.cx,a.cy,c,r,f,p,o,n,m,l,k)},
iA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.db
e=e==null?f:J.E(e,new V.al(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.o(e,!0,s)
r=a.dx
r=r==null?f:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?f:J.E(q,new V.an(),s)
s=P.o(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gP(a).n()
n=a.gV(a)
m=a.c
if(m===$)m=H.l(H.q("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gC(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].n())
k=a.gX()
j=H.a([],t.l)
for(h=J.D(a.gp(a));h.k();){g=h.gm()
j.push(new Y.c(g.a,g.b,g.c))}return new N.bJ(q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,m,l,k,j)},
iE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.db
e=e==null?f:J.E(e,new V.al(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.o(e,!0,s)
r=a.dx
r=r==null?f:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?f:J.E(q,new V.an(),s)
s=P.o(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gP(a).n()
n=a.gV(a)
m=a.c
if(m===$)m=H.l(H.q("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gC(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].n())
k=a.gX()
j=H.a([],t.l)
for(h=J.D(a.gp(a));h.k();){g=h.gm()
j.push(new Y.c(g.a,g.b,g.c))}return new N.bL(q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,m,l,k,j)},
fo:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.db
e=e==null?f:J.E(e,new V.al(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.o(e,!0,s)
r=a.dx
r=r==null?f:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?f:J.E(q,new V.an(),s)
s=P.o(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gP(a).n()
n=a.gV(a)
m=a.c
if(m===$)m=H.l(H.q("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gC(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].n())
k=a.gX()
j=H.a([],t.l)
for(h=J.D(a.gp(a));h.k();){g=h.gm()
j.push(new Y.c(g.a,g.b,g.c))}return new N.bP(q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,m,l,k,j)},
bT:function bT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bU:function bU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
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
_.a=p
_.b=q
_.c=r
_.d=s
_.e=null
_.f=a0
_.r=a1},
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aJ=a
_.aK=b
_.aL=c
_.aM=d
_.aN=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
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
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
bo:function bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aJ=a
_.aK=b
_.aL=c
_.aM=d
_.aN=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
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
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
bL:function bL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
bP:function bP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
cM:function cM(){},
e2:function e2(a){this.a=a}},M={
iy:function(a){var s,r,q,p,o,n,m=a.gP(a).n(),l=a.gV(a),k=a.c
if(k===$)k=H.l(H.q("target"))
k=k==null?null:k.n()
s=H.a([],t.r)
for(r=a.gC(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(r[p].n())
r=a.gX()
q=H.a([],t.l)
for(o=J.D(a.gp(a));o.k();){n=o.gm()
q.push(new Y.c(n.a,n.b,n.c))}return new M.y(m,l,k,s,r,q)},
y:function y(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
dW:function dW(a){this.a=a},
dV:function dV(a){this.a=a},
dU:function dU(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
dS:function dS(){},
dT:function dT(a){this.a=a},
dJ:function dJ(){this.a=null},
hT:function(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},V={
iI:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.E(d,new V.al(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.o(d,!0,s)
r=a.dx
r=r==null?e:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.E(q,new V.an(),s)
s=P.o(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gaG()
n=a.gP(a).n()
m=a.gV(a)
l=a.c
if(l===$)l=H.l(H.q("target"))
l=l==null?e:l.n()
k=H.a([],t.r)
for(j=a.gC(),i=j.length,h=0;h<j.length;j.length===i||(0,H.e)(j),++h)k.push(j[h].n())
j=a.gX()
i=H.a([],t.l)
for(g=J.D(a.gp(a));g.k();){f=g.gm()
i.push(new Y.c(f.a,f.b,f.c))}return new V.I(q,p,o,a.Q,!1,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
iJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.db
e=e==null?f:J.E(e,new V.al(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.o(e,!0,s)
r=a.dx
r=r==null?f:J.E(r,new V.am(),s)
r=P.o(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?f:J.E(q,new V.an(),s)
s=P.o(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gP(a).n()
n=a.gV(a)
m=a.c
if(m===$)m=H.l(H.q("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gC(),j=k.length,i=0;i<k.length;k.length===j||(0,H.e)(k),++i)l.push(k[i].n())
k=a.gX()
j=H.a([],t.l)
for(h=J.D(a.gp(a));h.k();){g=h.gm()
j.push(new Y.c(g.a,g.b,g.c))}return new V.bV(a.k3,a.k4,q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,m,l,k,j)},
I:function I(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
al:function al(){},
am:function am(){},
an:function an(){},
eg:function eg(){},
eh:function eh(){},
eb:function eb(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
ea:function ea(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
ef:function ef(){},
ee:function ee(){},
cZ:function cZ(){},
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
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
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
bg:function bg(){},
fI:function(a,b,c){var s,r,q=t.p,p=V.fH(Z.a6(null,J.E(a,new V.f0(),q).N(0)),Z.a6(null,J.E(b,new V.f1(),q).N(0)),c,t.A)
q=p.gI(p)
s=H.x(q)
r=s.h("O<1,u>")
return P.o(new H.O(q,s.h("u(1)").a(new V.f2()),r),!0,r.h("B.E"))},
fH:function(a,b,c,d){return d.a(J.fd(J.cm(a,1-c),J.cm(b,c)))},
hL:function(a,b,c,d){return d.a(J.fd(J.cm(a,1-c),J.cm(b,c)))},
hK:function(a,b,c){if(c>=1)return new S.w(b-1,1,t.d)
if(c<=0)return new S.w(a,0,t.d)
return new S.w(J.ia(V.fH(a,b,c,t.V)),C.b.a0((b-a)*c,1),t.d)},
hD:function(a){return new V.eS(a,a.length-1)},
f7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.Y(r),p=T.t(q.gj(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.e)(p),++m){if(q.gj(r)===0)H.l(H.U())
s.push(n.a(q.l(r,q.gj(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.Y(q),o=T.t(p.gj(q),0,1),n=o.length,l=a.$ti,k=l.h("Z.E"),l=l.h("ag<Z.E>"),m=0;m<o.length;o.length===n||(0,H.e)(o),++m){j=H.P(o[m])
i=new H.ag(a,j,null,l)
i.b3(a,j,null,k)
r.push(V.hD(i.N(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=T.t(p.gj(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.e)(q),++m){g=q[m]
if(typeof g!=="number")return g.A()
l=H.P(g+1)
P.e1(0,l,r.length)
k=new H.ag(r,0,l,n)
k.b3(r,0,l,o)
s.push(V.hD(k.N(0)).$1(h))}return s},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
eS:function eS(a,b){this.a=a
this.b=b},
eR:function eR(){},
jN:function(){var s=new V.cQ()
s.dm()
s.aQ()},
cQ:function cQ(){var _=this
_.a=0
_.x=_.r=_.f=_.d=null}},Q={cu:function cu(a){var _=this
_.e=null
_.f=0
_.b=a
_.d=null},dH:function dH(){},dG:function dG(){}},O={cH:function cH(){},bF:function bF(a){this.a=a},bG:function bG(a){this.a=a},bH:function bH(a){this.a=a},bE:function bE(a){this.a=a},bD:function bD(a){this.a=a}},Y={c:function c(a,b,c){this.a=a
this.b=b
this.c=c},ei:function ei(a){this.a=a}},S={w:function w(a,b,c){this.a=a
this.b=b
this.$ti=c},b2:function b2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},F={
dP:function(a,b,c){return F.iw(a,b,c,c)},
iw:function(a,b,c,d){return P.hw(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$dP(e,f){if(e===1){n=f
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
case 4:return P.hd()
case 1:return P.he(n)}}},d)}}
var w=[C,H,J,P,W,A,L,Z,X,G,T,K,R,B,N,M,V,Q,O,Y,S,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fj.prototype={}
J.ab.prototype={
F:function(a,b){return a===b},
gq:function(a){return H.ar(a)},
i:function(a){return"Instance of '"+H.e_(a)+"'"}}
J.cD.prototype={
i:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$iK:1}
J.aZ.prototype={
F:function(a,b){return null==b},
i:function(a){return"null"},
gq:function(a){return 0},
$iL:1}
J.aQ.prototype={
gq:function(a){return 0},
i:function(a){return String(a)}}
J.cK.prototype={}
J.ak.prototype={}
J.aD.prototype={
i:function(a){var s=a[$.hX()]
if(s==null)return this.de(a)
return"JavaScript function for "+J.cp(s)},
$iaP:1}
J.r.prototype={
t:function(a,b){H.x(a).c.a(b)
if(!!a.fixed$length)H.l(P.ac("add"))
a.push(b)},
e3:function(a,b,c){var s,r
H.x(a).h("k<1>").a(c)
if(!!a.fixed$length)H.l(P.ac("insertAll"))
P.iD(b,0,a.length,"index")
if(!t.Q.b(c))c=J.dl(c)
s=J.v(c)
a.length=a.length+s
r=b+s
this.bI(a,r,a.length,a,b)
this.cZ(a,b,r,c)},
ec:function(a,b){var s
if(!!a.fixed$length)H.l(P.ac("remove"))
for(s=0;s<a.length;++s)if(J.az(a[s],b)){a.splice(s,1)
return!0}return!1},
c4:function(a,b,c){var s,r,q,p,o
H.x(a).h("K(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.ci(b.$1(p)))s.push(p)
if(a.length!==r)throw H.b(P.a8(a))}o=s.length
if(o===r)return
this.sj(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
D:function(a,b){var s
H.x(a).h("k<1>").a(b)
if(!!a.fixed$length)H.l(P.ac("addAll"))
if(Array.isArray(b)){this.dv(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gm())},
dv:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.b(P.a8(a))
for(r=0;r<s;++r)a.push(b[r])},
bo:function(a,b,c){var s=H.x(a)
return new H.O(a,s.v(c).h("1(2)").a(b),s.h("@<1>").v(c).h("O<1,2>"))},
co:function(a,b){var s,r=P.h0(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.G(r,s,H.n(a[s]))
return r.join(b)},
e7:function(a){return this.co(a,"")},
S:function(a,b){return H.cT(a,b,null,H.x(a).c)},
W:function(a,b){var s,r,q
H.x(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.b(H.U())
if(0>=s)return H.m(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.b(P.a8(a))}return r},
bk:function(a,b,c,d){var s,r,q
d.a(b)
H.x(a).v(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.b(P.a8(a))}return r},
J:function(a,b){if(b<0||b>=a.length)return H.m(a,b)
return a[b]},
gL:function(a){if(a.length>0)return a[0]
throw H.b(H.U())},
gM:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.U())},
bI:function(a,b,c,d,e){var s,r,q,p,o
H.x(a).h("k<1>").a(d)
if(!!a.immutable$list)H.l(P.ac("setRange"))
P.e1(b,c,a.length)
s=c-b
if(s===0)return
P.ae(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.fQ(d,e).a4(0,!1)
q=0}p=J.Y(r)
if(q+s>p.gj(r))throw H.b(H.ir())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.l(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.l(r,q+o)},
cZ:function(a,b,c,d){return this.bI(a,b,c,d,0)},
aI:function(a,b){var s,r
H.x(a).h("K(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.ci(b.$1(a[r])))return!1
if(a.length!==s)throw H.b(P.a8(a))}return!0},
a9:function(a,b){var s
for(s=0;s<a.length;++s)if(J.az(a[s],b))return!0
return!1},
gK:function(a){return a.length===0},
gai:function(a){return a.length!==0},
i:function(a){return P.fi(a,"[","]")},
a4:function(a,b){var s=H.a(a.slice(0),H.x(a))
return s},
N:function(a){return this.a4(a,!0)},
gu:function(a){return new J.bi(a,a.length,H.x(a).h("bi<1>"))},
gq:function(a){return H.ar(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.l(P.ac("set length"))
if(b<0)throw H.b(P.as(b,0,null,"newLength",null))
if(b>a.length)H.x(a).c.a(null)
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.b(H.fE(a,b))
return a[b]},
G:function(a,b,c){H.x(a).c.a(c)
if(!!a.immutable$list)H.l(P.ac("indexed set"))
if(b>=a.length||b<0)throw H.b(H.fE(a,b))
a[b]=c},
$iC:1,
$ik:1,
$ii:1}
J.dN.prototype={}
J.bi.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.e(q))
s=r.c
if(s>=p){r.sbY(null)
return!1}r.sbY(q[s]);++r.c
return!0},
sbY:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
J.aC.prototype={
a3:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.ac(""+a+".toInt()"))},
dY:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.b(P.ac(""+a+".ceil()"))},
bv:function(a,b){var s,r
if(b>20)throw H.b(P.as(b,0,20,"fractionDigits",null))
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
A:function(a,b){H.fw(b)
return a+b},
w:function(a,b){return a*b},
a0:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c5(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.ac("Result of truncating division is "+H.n(s)+": "+H.n(a)+" ~/ "+b))},
dM:function(a,b){var s
if(a>0)s=this.dL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dL:function(a,b){return b>31?0:a>>>b},
$ij:1,
$iN:1}
J.bv.prototype={$ip:1}
J.cE.prototype={}
J.aq.prototype={
A:function(a,b){H.cc(b)
return a+b},
d8:function(a,b,c){if(b<0)throw H.b(P.e0(b,null))
if(b>c)throw H.b(P.e0(b,null))
if(c>a.length)throw H.b(P.e0(c,null))
return a.substring(b,c)},
i:function(a){return a},
gq:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$idZ:1,
$ia0:1}
H.aF.prototype={
gu:function(a){var s=H.A(this)
return new H.bn(J.D(this.gY()),s.h("@<1>").v(s.Q[1]).h("bn<1,2>"))},
gj:function(a){return J.v(this.gY())},
gK:function(a){return J.be(this.gY())},
gai:function(a){return J.cn(this.gY())},
S:function(a,b){var s=H.A(this)
return H.fU(J.fQ(this.gY(),b),s.c,s.Q[1])},
gL:function(a){return H.A(this).Q[1].a(J.fe(this.gY()))},
gM:function(a){return H.A(this).Q[1].a(J.co(this.gY()))},
i:function(a){return J.cp(this.gY())}}
H.bn.prototype={
k:function(){return this.a.k()},
gm:function(){return this.$ti.Q[1].a(this.a.gm())},
$iG:1}
H.aO.prototype={
gY:function(){return this.a}}
H.bZ.prototype={$iC:1}
H.bX.prototype={
l:function(a,b){return this.$ti.Q[1].a(J.R(this.a,b))},
G:function(a,b,c){var s=this.$ti
J.fO(this.a,b,s.c.a(s.Q[1].a(c)))},
t:function(a,b){var s=this.$ti
J.i9(this.a,s.c.a(s.Q[1].a(b)))},
D:function(a,b){var s=this.$ti
J.aM(this.a,H.fU(s.h("k<2>").a(b),s.Q[1],s.c))},
$iC:1,
$ii:1}
H.S.prototype={
gY:function(){return this.a}}
H.bx.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.f6.prototype={
$0:function(){var s=new P.M($.H,t.ck)
s.bS(null)
return s},
$S:16}
H.C.prototype={}
H.B.prototype={
gu:function(a){var s=this
return new H.V(s,s.gj(s),H.A(s).h("V<B.E>"))},
gK:function(a){return this.gj(this)===0},
gL:function(a){if(this.gj(this)===0)throw H.b(H.U())
return this.J(0,0)},
gM:function(a){var s=this
if(s.gj(s)===0)throw H.b(H.U())
return s.J(0,s.gj(s)-1)},
W:function(a,b){var s,r,q,p=this
H.A(p).h("B.E(B.E,B.E)").a(b)
s=p.gj(p)
if(s===0)throw H.b(H.U())
r=p.J(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.J(0,q))
if(s!==p.gj(p))throw H.b(P.a8(p))}return r},
S:function(a,b){return H.cT(this,b,null,H.A(this).h("B.E"))},
a4:function(a,b){return P.o(this,b,H.A(this).h("B.E"))},
N:function(a){return this.a4(a,!0)}}
H.ag.prototype={
b3:function(a,b,c,d){var s,r=this.b
P.ae(r,"start")
s=this.c
if(s!=null){P.ae(s,"end")
if(r>s)throw H.b(P.as(r,0,s,"start",null))}},
gdE:function(){var s=J.v(this.a),r=this.c
if(r==null||r>s)return s
return r},
gdN:function(){var s=J.v(this.a),r=this.b
if(r>s)return s
return r},
gj:function(a){var s,r=J.v(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.H()
return s-q},
J:function(a,b){var s=this,r=s.gdN()+b
if(b<0||r>=s.gdE())throw H.b(P.fh(b,s,"index",null,null))
return J.fP(s.a,r)},
S:function(a,b){var s,r,q=this
P.ae(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.br(q.$ti.h("br<1>"))
return H.cT(q.a,s,r,q.$ti.c)},
a4:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.Y(n),l=m.gj(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.fY(0,n):J.fX(0,n)}r=P.h0(s,m.J(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.G(r,q,m.J(n,o+q))
if(m.gj(n)<l)throw H.b(P.a8(p))}return r},
N:function(a){return this.a4(a,!0)}}
H.V.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a,p=q.gj(q)
if(r.b!==p)throw H.b(P.a8(q))
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
gL:function(a){return this.b.$1(J.fe(this.a))},
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
J:function(a,b){return this.b.$1(J.fP(this.a,b))}}
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
gu:function(a){return C.D},
gK:function(a){return!0},
gj:function(a){return 0},
gL:function(a){throw H.b(H.U())},
gM:function(a){throw H.b(H.U())},
S:function(a,b){P.ae(b,"count")
return this}}
H.bs.prototype={
k:function(){return!1},
gm:function(){throw H.b(H.U())},
$iG:1}
H.at.prototype={
gj:function(a){return J.v(this.a)},
J:function(a,b){var s=this.a,r=J.Y(s)
return r.J(s,r.gj(s)-1-b)}}
H.ca.prototype={}
H.cC.prototype={
i:function(a){var s="<"+C.a.co([H.jB(this.$ti.c)],", ")+">"
return this.a.i(0)+" with "+s}}
H.aB.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.jJ(H.hF(this.a),this.$ti)}}
H.e5.prototype={
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
H.cX.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.dY.prototype={
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
return"Closure '"+H.hV(r==null?"unknown":r)+"'"},
$iaP:1,
ger:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cU.prototype={}
H.cR.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.hV(s)+"'"}}
H.aX.prototype={
F:function(a,b){var s=this
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
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.e_(t.K.a(s))+"'")}}
H.cL.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.d_.prototype={
i:function(a){return"Assertion failed: "+P.cx(this.a)}}
H.bw.prototype={
gj:function(a){return this.a},
gcp:function(){return new H.by(this,H.A(this).h("by<1>"))},
ce:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.dC(s,a)}else return this.e4(a)},
e4:function(a){var s=this.d
if(s==null)return!1
return this.bl(this.b9(s,C.c.gq(a)&0x3ffffff),a)>=0},
l:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aA(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aA(p,b)
q=r==null?n:r.b
return q}else return o.e5(b)},
e5:function(a){var s,r,q=this.d
if(q==null)return null
s=this.b9(q,J.bd(a)&0x3ffffff)
r=this.bl(s,a)
if(r<0)return null
return s[r].b},
G:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.A(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.bO(s==null?m.b=m.ba():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bO(r==null?m.c=m.ba():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ba()
p=J.bd(b)&0x3ffffff
o=m.b9(q,p)
if(o==null)m.bc(q,p,[m.b4(b,c)])
else{n=m.bl(o,b)
if(n>=0)o[n].b=c
else o.push(m.b4(b,c))}}},
cj:function(a,b){var s,r,q=this
H.A(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.b(P.a8(q))
s=s.c}},
bO:function(a,b,c){var s,r=this,q=H.A(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aA(a,b)
if(s==null)r.bc(a,b,r.b4(b,c))
else s.b=c},
b4:function(a,b){var s=this,r=H.A(s),q=new H.dO(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
bl:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.az(a[r].a,b))return r
return-1},
i:function(a){return P.h1(this)},
aA:function(a,b){return a[b]},
b9:function(a,b){return a[b]},
bc:function(a,b,c){a[b]=c},
dD:function(a,b){delete a[b]},
dC:function(a,b){return this.aA(a,b)!=null},
ba:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bc(r,s,r)
this.dD(r,s)
return r}}
H.dO.prototype={}
H.by.prototype={
gj:function(a){return this.a.a},
gK:function(a){return this.a.a===0},
gu:function(a){var s=this.a,r=new H.bz(s,s.r,this.$ti.h("bz<1>"))
r.c=s.e
return r}}
H.bz.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.a8(q))
s=r.c
if(s==null){r.sbP(null)
return!1}else{r.sbP(s.a)
r.c=s.c
return!0}},
sbP:function(a){this.d=this.$ti.h("1?").a(a)},
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
ci:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.eG(s)},
$idZ:1}
H.eG.prototype={}
H.af.prototype={
h:function(a){return H.dd(v.typeUniverse,this,a)},
v:function(a){return H.j1(v.typeUniverse,this,a)}}
H.d5.prototype={}
H.db.prototype={
i:function(a){return H.X(this.a,null)}}
H.d4.prototype={
i:function(a){return this.a}}
H.c6.prototype={}
P.el.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
P.ek.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:18}
P.em.prototype={
$0:function(){this.a.$0()},
$S:8}
P.en.prototype={
$0:function(){this.a.$0()},
$S:8}
P.eJ.prototype={
dq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bb(new P.eK(this,b),0),a)
else throw H.b(P.ac("`setTimeout()` not found."))}}
P.eK.prototype={
$0:function(){this.b.$0()},
$S:0}
P.d0.prototype={
bf:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bS(b)
else{s=r.a
if(q.h("aa<1>").b(b))s.bU(b)
else s.b6(q.c.a(b))}},
cd:function(a,b){var s=this.a
if(this.b)s.ad(a,b)
else s.dz(a,b)}}
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
i:function(a){return"IterationMarker("+this.b+", "+H.n(this.a)+")"}}
P.b6.prototype={
gm:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gm()},
k:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("G<1>");!0;){r=m.c
if(r!=null)if(r.k())return!0
else m.sc2(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.b5){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sbR(null)
return!1}if(0>=o.length)return H.m(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.D(r))
if(n instanceof P.b6){r=m.d
if(r==null)r=m.d=[]
C.a.t(r,m.a)
m.a=n.a
continue}else{m.sc2(n)
continue}}}}else{m.sbR(q)
return!0}}return!1},
sbR:function(a){this.b=this.$ti.h("1?").a(a)},
sc2:function(a){this.c=this.$ti.h("G<1>?").a(a)},
$iG:1}
P.c5.prototype={
gu:function(a){return new P.b6(this.a(),this.$ti.h("b6<1>"))}}
P.bk.prototype={
i:function(a){return H.n(this.a)},
$iF:1,
gb_:function(){return this.b}}
P.d2.prototype={
cd:function(a,b){var s
H.fB(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.b(P.aj("Future already completed"))
s.ad(a,b)}}
P.c4.prototype={
bf:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.b(P.aj("Future already completed"))
s.bW(r.h("1/").a(b))}}
P.aU.prototype={
ea:function(a){if((this.c&15)!==6)return!0
return this.b.b.br(t.al.a(this.d),a.a,t.cJ,t.K)},
e0:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.eg(s,p,a.b,r,q,t.k))
else return o.a(n.br(t.bI.a(s),p,r,q))}}
P.M.prototype={
bu:function(a,b,c){var s,r,q,p=this.$ti
p.v(c).h("1/(2)").a(a)
s=$.H
if(s!==C.e){c.h("@<0/>").v(p.c).h("1(2)").a(a)
if(b!=null)b=P.jm(b,s)}r=new P.M(s,c.h("M<0>"))
q=b==null?1:3
this.b5(new P.aU(r,q,a,b,p.h("@<1>").v(c).h("aU<1,2>")))
return r},
cC:function(a,b){return this.bu(a,null,b)},
c6:function(a,b,c){var s,r=this.$ti
r.v(c).h("1/(2)").a(a)
s=new P.M($.H,c.h("M<0>"))
this.b5(new P.aU(s,19,a,b,r.h("@<1>").v(c).h("aU<1,2>")))
return s},
b5:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.F.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.b5(a)
return}r.a=q
r.c=s.c}P.b9(null,null,r.b,t.M.a(new P.er(r,a)))}},
c3:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.c3(a)
return}m.a=s
m.c=n.c}l.a=m.aD(a)
P.b9(null,null,m.b,t.M.a(new P.ez(l,m)))}},
aC:function(){var s=t.F.a(this.c)
this.c=null
return this.aD(s)},
aD:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bT:function(a){var s,r,q,p=this
p.a=1
try{a.bu(new P.ev(p),new P.ew(p),t.P)}catch(q){s=H.aL(q)
r=H.aJ(q)
P.jT(new P.ex(p,s,r))}},
bW:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("aa<1>").b(a))if(q.b(a))P.eu(a,r)
else r.bT(a)
else{s=r.aC()
q.c.a(a)
r.a=4
r.c=a
P.b4(r,s)}},
b6:function(a){var s,r=this
r.$ti.c.a(a)
s=r.aC()
r.a=4
r.c=a
P.b4(r,s)},
ad:function(a,b){var s,r,q=this
t.k.a(b)
s=q.aC()
r=P.dB(a,b)
q.a=8
q.c=r
P.b4(q,s)},
bS:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aa<1>").b(a)){this.bU(a)
return}this.dA(s.c.a(a))},
dA:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.b9(null,null,s.b,t.M.a(new P.et(s,a)))},
bU:function(a){var s=this,r=s.$ti
r.h("aa<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.b9(null,null,s.b,t.M.a(new P.ey(s,a)))}else P.eu(a,s)
return}s.bT(a)},
dz:function(a,b){this.a=1
P.b9(null,null,this.b,t.M.a(new P.es(this,a,b)))},
$iaa:1}
P.er.prototype={
$0:function(){P.b4(this.a,this.b)},
$S:0}
P.ez.prototype={
$0:function(){P.b4(this.b,this.a.a)},
$S:0}
P.ev.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.b6(p.$ti.c.a(a))}catch(q){s=H.aL(q)
r=H.aJ(q)
p.ad(s,r)}},
$S:7}
P.ew.prototype={
$2:function(a,b){this.a.ad(t.K.a(a),t.k.a(b))},
$S:38}
P.ex.prototype={
$0:function(){this.a.ad(this.b,this.c)},
$S:0}
P.et.prototype={
$0:function(){this.a.b6(this.b)},
$S:0}
P.ey.prototype={
$0:function(){P.eu(this.b,this.a)},
$S:0}
P.es.prototype={
$0:function(){this.a.ad(this.b,this.c)},
$S:0}
P.eC.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cB(t.fO.a(q.d),t.z)}catch(p){s=H.aL(p)
r=H.aJ(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=P.dB(s,r)
o.b=!0
return}if(l instanceof P.M&&l.a>=4){if(l.a===8){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(t.f.b(l)){n=m.b.a
q=m.a
q.c=l.cC(new P.eD(n),t.z)
q.b=!1}},
$S:0}
P.eD.prototype={
$1:function(a){return this.a},
$S:39}
P.eB.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.br(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.aL(l)
r=H.aJ(l)
q=this.a
q.c=P.dB(s,r)
q.b=!0}},
$S:0}
P.eA.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.ea(s)&&p.a.e!=null){p.c=p.a.e0(s)
p.b=!1}}catch(o){r=H.aL(o)
q=H.aJ(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.dB(r,q)
n.b=!0}},
$S:0}
P.d1.prototype={}
P.bR.prototype={
gj:function(a){var s,r,q=this,p={},o=new P.M($.H,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.e3(p,q))
t.g5.a(new P.e4(p,o))
W.eo(q.a,q.b,r,!1,s.c)
return o}}
P.e3.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.e4.prototype={
$0:function(){this.b.bW(this.a.a)},
$S:0}
P.bS.prototype={}
P.d9.prototype={}
P.c9.prototype={$ihb:1}
P.eP.prototype={
$0:function(){var s=t.K.a(H.b(this.a))
s.stack=this.b.i(0)
throw s},
$S:0}
P.d8.prototype={
eh:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.e===$.H){a.$0()
return}P.hx(p,p,this,a,t.u)}catch(q){s=H.aL(q)
r=H.aJ(q)
P.eO(p,p,this,t.K.a(s),t.k.a(r))}},
ei:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.e===$.H){a.$1(b)
return}P.hy(p,p,this,a,b,t.u,c)}catch(q){s=H.aL(q)
r=H.aJ(q)
P.eO(p,p,this,t.K.a(s),t.k.a(r))}},
cc:function(a){return new P.eH(this,t.M.a(a))},
dW:function(a,b){return new P.eI(this,b.h("~(0)").a(a),b)},
cB:function(a,b){b.h("0()").a(a)
if($.H===C.e)return a.$0()
return P.hx(null,null,this,a,b)},
br:function(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.H===C.e)return a.$1(b)
return P.hy(null,null,this,a,b,c,d)},
eg:function(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===C.e)return a.$2(b,c)
return P.jn(null,null,this,a,b,c,d,e,f)},
ct:function(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
P.eH.prototype={
$0:function(){return this.a.eh(this.b)},
$S:0}
P.eI.prototype={
$1:function(a){var s=this.c
return this.a.ei(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.aw.prototype={
dH:function(){return new P.aw(H.A(this).h("aw<1>"))},
gu:function(a){var s=this,r=new P.aV(s,s.r,H.A(s).h("aV<1>"))
r.c=s.e
return r},
gj:function(a){return this.a},
gK:function(a){return this.a===0},
gai:function(a){return this.a!==0},
a9:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.dB(b)},
dB:function(a){var s=this.d
if(s==null)return!1
return this.bZ(s[this.bX(a)],a)>=0},
gL:function(a){var s=this.e
if(s==null)throw H.b(P.aj("No elements"))
return H.A(this).c.a(s.a)},
gM:function(a){var s=this.f
if(s==null)throw H.b(P.aj("No elements"))
return H.A(this).c.a(s.a)},
t:function(a,b){var s,r,q=this
H.A(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bQ(s==null?q.b=P.fr():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bQ(r==null?q.c=P.fr():r,b)}else return q.du(b)},
du:function(a){var s,r,q,p=this
H.A(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.fr()
r=p.bX(a)
q=s[r]
if(q==null)s[r]=[p.bb(a)]
else{if(p.bZ(q,a)>=0)return!1
q.push(p.bb(a))}return!0},
bQ:function(a,b){H.A(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.bb(b)
return!0},
dG:function(){this.r=this.r+1&1073741823},
bb:function(a){var s,r=this,q=new P.d6(H.A(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dG()
return q},
bX:function(a){return J.bd(a)&1073741823},
bZ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.az(a[r].a,b))return r
return-1}}
P.d6.prototype={}
P.aV.prototype={
gm:function(){return this.$ti.c.a(this.d)},
k:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.a8(q))
else if(r==null){s.sbV(null)
return!1}else{s.sbV(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sbV:function(a){this.d=this.$ti.h("1?").a(a)},
$iG:1}
P.bu.prototype={}
P.Z.prototype={
gu:function(a){var s=this
return new H.V(s,s.gj(s),s.$ti.h("V<Z.E>"))},
J:function(a,b){return this.$ti.Q[1].a(J.R(this.a,b))},
gK:function(a){return J.v(this.a)===0},
gai:function(a){return J.v(this.a)!==0},
gL:function(a){var s=this.a,r=J.Y(s)
if(r.gj(s)===0)throw H.b(H.U())
return this.$ti.Q[1].a(r.l(s,0))},
gM:function(a){var s=this.a,r=J.Y(s)
if(r.gj(s)===0)throw H.b(H.U())
return this.$ti.Q[1].a(r.l(s,r.gj(s)-1))},
aI:function(a,b){var s,r,q,p,o=this.$ti
o.h("K(Z.E)").a(b)
s=this.a
r=J.Y(s)
q=r.gj(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.ci(b.$1(o.a(r.l(s,p)))))return!1
if(q!==r.gj(s))throw H.b(P.a8(this))}return!0},
bo:function(a,b,c){var s=this.$ti
return new H.O(this,s.v(c).h("1(Z.E)").a(b),s.h("@<Z.E>").v(c).h("O<1,2>"))},
S:function(a,b){return H.cT(this,b,null,this.$ti.h("Z.E"))},
D:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("k<Z.E>").a(b)
s=this.a
r=J.Y(s)
q=r.gj(s)
for(p=J.D(b),o=n.Q[1],n=n.c;p.k();){r.t(s,n.a(o.a(p.gm())));++q}},
i:function(a){return P.fi(this,"[","]")}}
P.bB.prototype={}
P.dR.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.n(a)
r.a=s+": "
r.a+=H.n(b)},
$S:45}
P.b_.prototype={
cj:function(a,b){var s,r,q=H.A(this)
q.h("~(1,2)").a(b)
for(s=this.gcp(),s=s.gu(s),q=q.Q[1];s.k();){r=s.gm()
b.$2(r,q.a(this.l(0,r)))}},
gj:function(a){var s=this.gcp()
return s.gj(s)},
i:function(a){return P.h1(this)},
$ibA:1}
P.bN.prototype={
gK:function(a){return this.a===0},
gai:function(a){return this.a!==0},
i:function(a){return P.fi(this,"{","}")},
S:function(a,b){return H.h6(this,b,H.A(this).c)},
gL:function(a){var s=P.fq(this,this.r,H.A(this).c)
if(!s.k())throw H.b(H.U())
return s.$ti.c.a(s.d)},
gM:function(a){var s,r,q=P.fq(this,this.r,H.A(this).c)
if(!q.k())throw H.b(H.U())
s=q.$ti.c
do r=s.a(q.d)
while(q.k())
return r}}
P.c2.prototype={
e6:function(a,b){var s,r,q,p=this,o=p.dH()
for(s=P.fq(p,p.r,H.A(p).c),r=s.$ti.c;s.k();){q=r.a(s.d)
if(b.a9(0,q))o.t(0,q)}return o},
$iC:1,
$ik:1,
$ibM:1}
P.cb.prototype={}
P.F.prototype={
gb_:function(){return H.aJ(this.$thrownJsError)}}
P.bj.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.cx(s)
return"Assertion failed"}}
P.cV.prototype={}
P.cI.prototype={
i:function(a){return"Throw of null."}}
P.ao.prototype={
gb8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb7:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gb8()+o+m
if(!q.a)return l
s=q.gb7()
r=P.cx(q.b)
return l+s+": "+r}}
P.bK.prototype={
gb8:function(){return"RangeError"},
gb7:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.n(q):""
else if(q==null)s=": Not greater than or equal to "+H.n(r)
else if(q>r)s=": Not in inclusive range "+H.n(r)+".."+H.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.n(r)
return s}}
P.cB.prototype={
gb8:function(){return"RangeError"},
gb7:function(){if(H.P(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.cY.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cW.prototype={
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
gb_:function(){return null},
$iF:1}
P.cw.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eq.prototype={
i:function(a){return"Exception: "+this.a}}
P.dK.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.z.d8(q,0,75)+"..."
return r+"\n"+q}}
P.k.prototype={
bo:function(a,b,c){var s=H.A(this)
return H.ix(this,s.v(c).h("1(k.E)").a(b),s.h("k.E"),c)},
aI:function(a,b){var s
H.A(this).h("K(k.E)").a(b)
for(s=this.gu(this);s.k();)if(!H.ci(b.$1(s.gm())))return!1
return!0},
a4:function(a,b){return P.o(this,b,H.A(this).h("k.E"))},
N:function(a){return this.a4(a,!0)},
gj:function(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gK:function(a){return!this.gu(this).k()},
gai:function(a){return!this.gK(this)},
S:function(a,b){return H.h6(this,b,H.A(this).h("k.E"))},
gL:function(a){var s=this.gu(this)
if(!s.k())throw H.b(H.U())
return s.gm()},
gM:function(a){var s,r=this.gu(this)
if(!r.k())throw H.b(H.U())
do s=r.gm()
while(r.k())
return s},
J:function(a,b){var s,r,q
P.ae(b,"index")
for(s=this.gu(this),r=0;s.k();){q=s.gm()
if(b===r)return q;++r}throw H.b(P.fh(b,this,"index",null,r))},
i:function(a){return P.iq(this,"(",")")}}
P.G.prototype={}
P.L.prototype={
gq:function(a){return P.z.prototype.gq.call(C.O,this)},
i:function(a){return"null"}}
P.z.prototype={constructor:P.z,$iz:1,
F:function(a,b){return this===b},
gq:function(a){return H.ar(this)},
i:function(a){return"Instance of '"+H.e_(this)+"'"},
toString:function(){return this.i(this)}}
P.da.prototype={
i:function(a){return""},
$iaE:1}
P.cS.prototype={
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
se1:function(a,b){a.height=b},
sem:function(a,b){a.width=b},
$iaN:1}
W.bm.prototype={
sbj:function(a,b){a.fillStyle=b},
sbK:function(a,b){a.strokeStyle=b},
d6:function(a,b){return a.stroke(b)},
$ibm:1}
W.ai.prototype={
gj:function(a){return a.length}}
W.dI.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bp.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.n(r)+", "
s=a.top
s.toString
s=r+H.n(s)+") "
r=a.width
r.toString
r=s+H.n(r)+" x "
s=a.height
s.toString
return r+H.n(s)},
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
p=C.b.gq(p)
s=a.top
s.toString
s=C.b.gq(s)
r=a.width
r.toString
r=C.b.gq(r)
q=a.height
q.toString
return W.hf(p,s,r,C.b.gq(q))},
$ifn:1}
W.d.prototype={
i:function(a){var s=a.localName
s.toString
return s},
$id:1}
W.f.prototype={$if:1}
W.T.prototype={
dw:function(a,b,c,d){return a.addEventListener(b,H.bb(t.B.a(c),1),!1)},
dJ:function(a,b,c,d){return a.removeEventListener(b,H.bb(t.B.a(c),1),!1)},
$iT:1}
W.cA.prototype={
gj:function(a){return a.length}}
W.a2.prototype={$ia2:1}
W.a_.prototype={
i:function(a){var s=a.nodeValue
return s==null?this.dd(a):s}}
W.cJ.prototype={$icJ:1}
W.cN.prototype={
gj:function(a){return a.length}}
W.ah.prototype={}
W.b3.prototype={
gdR:function(a){var s=new P.M($.H,t.dL),r=t.c4.a(new W.ej(new P.c4(s,t.g4)))
this.dF(a)
r=W.hA(r,t.H)
r.toString
this.dK(a,r)
return s},
dK:function(a,b){var s=a.requestAnimationFrame(H.bb(t.c4.a(b),1))
s.toString
return s},
dF:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ej.prototype={
$1:function(a){this.a.bf(0,H.fw(a))},
$S:14}
W.bY.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.n(r)+", "
s=a.top
s.toString
s=r+H.n(s)+") "
r=a.width
r.toString
r=s+H.n(r)+" x "
s=a.height
s.toString
return r+H.n(s)},
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
p=C.b.gq(p)
s=a.top
s.toString
s=C.b.gq(s)
r=a.width
r.toString
r=C.b.gq(r)
q=a.height
q.toString
return W.hf(p,s,r,C.b.gq(q))}}
W.fg.prototype={}
W.c_.prototype={}
W.d3.prototype={}
W.c0.prototype={
dX:function(){var s,r=this,q=r.b
if(q==null)return $.fN()
s=r.d
if(s!=null)J.i8(q,r.c,t.B.a(s),!1)
r.b=null
r.sdI(null)
return $.fN()},
sdI:function(a){this.d=t.B.a(a)}}
W.ep.prototype={
$1:function(a){return this.a.$1(t.I.a(a))},
$S:15}
P.d7.prototype={
dn:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.aB()
l.aB()
l.aB()
l.aB()},
aB:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.c.a2(o-n+(q-p)+(m-r),4294967296)>>>0},
$iiC:1}
P.aS.prototype={
i:function(a){return"Point("+H.n(this.a)+", "+H.n(this.b)+")"},
F:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a&&this.b===b.b},
gq:function(a){var s=C.b.gq(this.a),r=C.b.gq(this.b),q=H.h8(H.h8(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.Q.prototype={
gu:function(a){var s=this.$ti,r=J.E(this.a,new A.dL(this),s.h("G<1>"))
return new A.c1(P.o(r,!1,r.$ti.h("B.E")),s.h("c1<1>"))}}
A.dL.prototype={
$1:function(a){return J.D(this.a.$ti.h("k<1>").a(a))},
$S:function(){return this.a.$ti.h("G<1>(k<1>)")}}
A.c1.prototype={
k:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].k()){p.sc1(null)
return!1}if(r>4294967295)H.l(P.as(r,0,4294967295,"length",null))
q=J.fZ(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.m(o,s)
q[s]=o[s].gm()}p.sc1(q)
return!0},
gm:function(){var s=this.b
return s==null?H.l(P.aj("No element")):s},
sc1:function(a){this.b=this.$ti.h("i<1>?").a(a)},
$iG:1}
L.aA.prototype={
gb0:function(){var s=this.x
return s==null?H.l(H.q("startingMobject")):s},
i:function(a){var s=this.r
return this.Z()+"("+s.gV(s)+", runTime: "+this.a+"s)"},
Z:function(){var s=this.bL(0),r=P.h2("^Instance of '(.*?)'$").ci(s).b
if(1>=r.length)return H.m(r,1)
r=r[1]
r.toString
return r},
be:function(){this.x=N.fo(this.r)
this.bm(0)},
ar:function(a){if(this.gcu())a.cz(!0,t.a.a(H.a([this.r],t.r)))},
aT:function(){return H.a([this.r,this.gb0()],t.r)},
by:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.aT(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)p.push(s[q].ay())
s=t.R
return P.o(new A.Q(p,s),!0,s.h("k.E"))},
aR:function(a){var s,r,q
for(s=this.cJ(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].cF(a)},
cJ:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.aT(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o.push(p)}return o},
bm:function(a){a=Math.min(1,Math.max(a,0))
this.cn(this.b.$1(a))},
cn:function(a){var s,r,q,p,o,n=this.by()
for(s=T.t(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){o=s[p]
this.bn(C.a.l(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.P(o)*q,0)))}},
bn:function(a,b){t.a.a(a)},
gcu:function(){return!1}}
Z.cP.prototype={
bn:function(a,b){var s,r
t.a.a(a)
s=J.a5(a)
r=[0,b]
s.l(a,0).cr(s.l(a,1),r[0],r[1])}}
Z.cO.prototype={}
X.cz.prototype={
cf:function(){var s=N.fo(this.r)
s.bi(1)
return s},
ar:function(a){this.dh(a)
this.bm(0)},
gcu:function(){return!0}}
G.b1.prototype={
gbt:function(){var s=this.y
return s==null?H.l(H.q("targetMobject")):s},
gbs:function(){var s=this.z
return s==null?H.l(H.q("targetCopy")):s},
bM:function(a,b,c,d,e){if(e!=null)this.y=e
this.e2()},
e2:function(){if(this.cx!=null)return
this.seb(B.hQ())},
be:function(){var s=this
s.y=s.cf()
s.z=s.gbt().n()
s.r.c8(s.gbs())
s.da()},
cf:function(){return this.gbt()},
ar:function(a){this.dc(a)},
aT:function(){var s=this
return H.a([s.r,s.gb0(),s.gbt(),s.gbs()],t.r)},
by:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gb0(),this.gbs()],r=0;r<3;++r)q.push(s[r].ay())
s=t.R
return P.o(new A.Q(q,s),!0,s.h("k.E"))},
bn:function(a,b){var s,r,q,p,o,n
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
n=p==null?B.hQ():p
r.sT(t.y.a(n.$3(q.gp(q),s.gp(s),b)))
r.cm(q,s,b)},
seb:function(a){this.cx=t.b5.a(a)}}
T.dD.prototype={
bh:function(a){var s,r,q,p
t.a.a(a)
s=new T.dE()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.e)(a),++p)C.a.D(r,s.$1(a[p]))
return T.jY(r,t.j)},
cv:function(a){var s,r,q,p,o,n="renderer"
for(s=this.bh(t.a.a(a)),r=H.x(s).h("at<1>"),s=new H.at(s,r),s=new H.V(s,s.gj(s),r.h("V<B.E>")),q=this.r,r=r.h("B.E");s.k();){p=r.a(s.d)
o=q.a
if(p instanceof V.I)(o==null?H.l(H.q(n)):o).ed(p)
else if(o==null)H.l(H.q(n))}},
cD:function(a,b){t.y.a(b)
return!C.a.aI(b,new T.dF())?H.a([C.d],t.l):b}}
T.dE.prototype={
$1:function(a){return a.ab()},
$S:13}
T.dF.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
K.bf.prototype={
gav:function(){var s=this.a
return s==null?H.l(H.q("renderer")):s},
gE:function(){var s=this.b
return s==null?H.l(H.q("camera")):s},
aE:function(a){return a},
aV:function(a,b){var s,r,q=this
q.gE()
s=X.f5(a,0,1280,-q.gE().c/2,q.gE().c/2)
q.gE()
r=X.f5(b,720,0,-q.gE().d/2,q.gE().d/2)
q.gE()
return new Y.c(s,r,0).A(0,C.d)}}
R.cq.prototype={
aX:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gE()
p=X.f5(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gE()
return new Y.c(p,X.f5(a.b,q,r,0,720),0)},
dV:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new R.dm(s))
t.g5.a(null)
q=q.c
C.a.D(s.r,H.a([W.eo(r,"mousemove",o,!1,q),W.eo(r,"mousedown",p.a(new R.dn(s)),!1,q),W.eo(r,"mouseup",p.a(new R.dp(s)),!1,q)],t.db))},
el:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].dX()}}
R.dm.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.c(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.aX(new P.aS(r,q,t.q))
q=s.aV(p.a,p.b)
s.ch=q
q.H(0,s.cx)
$.cl().aH(new O.bF(C.j))
if(s.x){r=s.ch
s.z=r
s.y.H(0,r)
$.cl().aH(new O.bE(C.m))}},
$S:5}
R.dn.prototype={
$1:function(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.c(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.aX(new P.aS(r,q,t.q))
s.ch=s.aV(p.a,p.b)
q=a.button
q.toString
r=new O.bD(q)
r.b2(q)
s.Q=r
$.cl().aH(new O.bG(C.k))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new Y.c(q,o,r)
s.z=new Y.c(q,o,r)},
$S:5}
R.dp.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new Y.c(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.aX(new P.aS(r,q,t.q))
s.ch=s.aV(p.a,p.b)
q=a.button
q.toString
r=new O.bD(q)
r.b2(q)
s.Q=r
$.cl().aH(new O.bH(C.l))
s.x=!1},
$S:5}
B.ct.prototype={}
N.bT.prototype={}
N.bU.prototype={
n:function(){return N.iG(this)},
ac:function(a,b){this.bJ(a,!1)
this.bG(C.i,!1)
this.di(a,!0)},
cV:function(a){return this.ac(a,!0)}}
N.bh.prototype={
n:function(){return N.ib(this)},
bx:function(){var s=this
s.cY()
s.cR(s.aL,C.d)
s.d4(s.aM)},
cY:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.aJ,r=j.aK,q=j.aN,s=T.f3(q,r+s,s).ax(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.e)(s),++o){n=s[o]
h.push(C.n.w(0,Math.cos(n)).A(0,C.B.w(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.e)(h),++o){n=h[o]
s.push(new Y.c(-n.b,n.a,n.c))}p=H.a([],i)
for(m=T.t(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.e)(m),++o){k=m[o]
p.push(C.a.l(h,k).A(0,C.a.l(s,k).w(0,q)))}i=H.a([],i)
for(r=T.t(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.e)(r),++o){k=r[o]
i.push(C.a.l(h,k).H(0,C.a.l(s,k).w(0,q)))}s=t.i
j.bE(T.hW(h,s),p,i,T.fL(h,s))}}
N.bo.prototype={
n:function(){return N.ii(this)},
gaG:function(){return!0}}
N.bJ.prototype={
dk:function(a,b){var s=P.o(a,!0,t.i)
s.push(C.a.gL(a))
this.cX(s)},
n:function(){return N.iA(this)}}
N.bL.prototype={
dl:function(a,b,c){this.cw(c,0,C.d,null,!0)
this.cw(b,1,C.d,null,!0)},
n:function(){return N.iE(this)}}
N.bP.prototype={
n:function(){return N.fo(this)}}
M.y.prototype={
gP:function(a){var s=this.a
return s},
gV:function(a){var s=this.b
return s==null?H.l(H.q("name")):s},
gC:function(){var s=this.d
return s==null?H.l(H.q("submobjects")):s},
gX:function(){var s=this.f
return s==null?H.l(H.q("updatingSuspended")):s},
gp:function(a){var s=this.r
return s==null?H.l(H.q("points")):s},
b1:function(a,b,c){var s=this,r=s.Z()
s.b=r
s.sap(t.a.a(H.a([],t.r)))
s.f=!1
s.sT(t.y.a(H.a([],t.l)))
s.ck()
s.bx()},
i:function(a){return this.Z()},
Z:function(){var s=this.bL(0),r=P.h2("^Instance of '(.*?)'$").ci(s).b
if(1>=r.length)return H.m(r,1)
r=r[1]
r.toString
return r},
ck:function(){},
bx:function(){},
bd:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.a9(a,this))throw H.b("Mobject can't contain itself")
s=P.o(a,!0,t.j)
for(r=this.gC(),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p){o=r[p]
if(!C.a.a9(a,o))s.push(o)}this.sap(n.a(s))},
aF:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.am(a)
for(s=this.ay(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.e)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.D(l==null?H.l(H.q("points")):l)
for(;l.k();)m.push(J.fd(c.$1(l.gm().H(0,b)),b))
n.sT(q.a(m))}},
dT:function(a){return this.aF(C.d,null,a)},
n:function(){return M.iy(this)},
cG:function(a,b){var s,r,q,p=this
if(p.gX())return
s=p.e
if(s==null){s=H.a([],t.eM)
p.sdt(s)}r=0
for(;!1;++r)s[r].$2(p,a)
for(s=p.gC(),q=s.length,r=0;r<s.length;s.length===q||(0,H.e)(s),++r)s[r].cG(a,!0)},
cF:function(a){return this.cG(a,!0)},
d4:function(a){return this.dT(new M.dW(a))},
cS:function(a,b,c){return this.aF(b,c,new M.dV(a))},
cR:function(a,b){return this.cS(a,C.d,b)},
cA:function(a,b,c,d,e){this.aF(c,d,new M.dU(Z.jS(b,e).gcE()))},
ef:function(a,b){return this.cA(a,b,C.d,null,C.v)},
d5:function(a,b,c,d){return this.aF(c,d,new M.dX(b,a))},
cw:function(a,b,c,d,e){var s=this.e8(b)
if(s===0)return
this.d5(a/s,b,c,d)},
ac:function(a,b){var s,r,q
for(s=this.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].ac(a,!0)
this.a=a},
as:function(a,b){var s,r,q
for(s=this.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].as(a,!0)},
bi:function(a){return this.as(a,!0)},
ab:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)C.a.D(o,s[q].ab())
p=P.fm(o,t.j)
return P.o(p,!0,H.A(p).c)},
ay:function(){var s=this.ab(),r=H.x(s),q=r.h("aT<1>")
return P.o(new H.aT(s,r.h("K(1)").a(new M.dS()),q),!0,q.h("k.E"))},
bz:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.ay(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q].r
C.a.D(o,p==null?H.l(H.q("points")):p)}return o},
bC:function(){return this.bz()},
aW:function(a,b,c){var s,r,q
t.D.a(c)
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.e)(c),++q)s.push(c[q].aU(a))
if(b<0)return C.a.W(s,C.o)
else if(b===0)return(C.a.W(s,C.o)+C.a.W(s,C.p))/2
else return C.a.W(s,C.p)},
am:function(a){var s=this,r=s.bC()
if(r.length===0)return C.d
return new Y.c(s.aW(0,C.b.a3(a.a),r),s.aW(1,C.b.a3(a.b),r),s.aW(2,C.b.a3(a.c),r))},
e8:function(a){var s,r,q,p=this.bz()
if(p.length===0)return 1
s=H.x(p)
r=new H.O(p,s.h("j(1)").a(new M.dT(a)),s.h("O<1,j>"))
q=r.W(0,C.o)
return r.W(0,C.p)-q},
gj:function(a){return this.az(0).length},
az:function(a){var s=this,r=H.a([],t.r)
if(J.cn(s.gp(s)))r.push(s)
C.a.D(r,s.gC())
return r},
c8:function(a){var s,r,q,p,o,n,m=this
if(J.be(m.gp(m))&&J.cn(a.gp(a)))a.cs()
if(J.be(a.gp(a))&&J.cn(m.gp(m)))m.cs()
s=m.az(0).length
r=a.az(0).length
m.c7(Math.max(0,r-s))
a.c7(Math.max(0,s-r))
m.c9(a)
for(q=new A.Q(H.a([m.gC(),a.gC()],t.Z),t.R),q=q.gu(q);q.k();){p=q.b
if(p==null)p=H.l(P.aj("No element"))
o=p.length
if(0>=o)return H.m(p,0)
n=p[0]
if(1>=o)return H.m(p,1)
n.c8(p[1])}},
bB:function(){throw H.b("getPointMobject not implemented for "+H.n(this.gcN())+"()")},
c9:function(a){var s=this,r=J.v(s.gp(s)),q=J.v(a.gp(a))
if(r<q)s.ca(a)
else if(r>q)a.ca(s)},
ca:function(a){throw H.b("Not implemented")},
cs:function(){var s=this.n(),r=t.r,q=t.a
s.sap(q.a(H.a([],r)))
this.sT(t.y.a(H.a([],t.l)))
this.bd(q.a(H.a([s],r)))},
c7:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.az(0).length
if(s===0){r=H.a([],t.r)
for(q=T.t(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)r.push(a1.bB())
a1.sap(t.a.a(r))}n=s+a2
r=t.X
q=H.a([],r)
for(p=T.t(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.e)(p),++o){l=p[o]
if(typeof l!=="number")return l.w()
q.push(C.b.a8(l*s,n))}p=H.a([],r)
for(m=T.t(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.e)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.aI(i),e=0;e<q.length;q.length===g||(0,H.e)(q),++e)if(f.F(i,q[e]))h.push(1)
else h.push(0)
p.push(T.fK(h,j))}d=H.a([],t.r)
for(r=new A.Q(H.a([a1.gC(),p],t.L),t.w),r=r.gu(r),q=t.j;r.k();){c=r.b
if(c==null)c=H.l(P.aj("No element"))
p=c.length
if(0>=p)return H.m(c,0)
b=q.a(c[0])
if(1>=p)return H.m(c,1)
a=H.P(c[1])
C.a.t(d,b)
for(p=T.t(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.e)(p),++o){a0=b.n()
a0.bi(1)
C.a.t(d,a0)}}a1.sap(t.a.a(d))},
cm:function(a,b,c){},
cr:function(a,b,c){},
ej:function(a){var s
if(J.cn(this.gp(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.b(s)},
sap:function(a){this.d=t.hh.a(a)},
sdt:function(a){this.e=t.cI.a(a)},
sT:function(a){this.r=t.D.a(a)}}
M.dW.prototype={
$1:function(a){return a.A(0,this.a)},
$S:2}
M.dV.prototype={
$1:function(a){return a.w(0,this.a)},
$S:2}
M.dU.prototype={
$1:function(a){return a.aj(this.a)},
$S:2}
M.dX.prototype={
$1:function(a){var s=this.a
return a.en(s,a.aU(s)*this.b)},
$S:2}
M.dS.prototype={
$1:function(a){t.j.a(a)
return J.v(a.gp(a))>0},
$S:6}
M.dT.prototype={
$1:function(a){return t.i.a(a).aU(this.a)},
$S:22}
V.I.prototype={
n:function(){return V.iI(this)},
ck:function(){var s=this,r=s.db
s.cW(r==null?H.a([s.gP(s)],t.O):r)
r=s.dx
if(r==null)r=H.a([s.gP(s)],t.O)
s.d1(r,s.x)
s.cU(s.dy,s.y)},
ao:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.D(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.aY(),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)q[o].bH(r,!1)
if(r.length!==0){if(n.db==null)n.saa(r)
q=n.db
q.toString
q=J.v(q)
p=r.length
if(q<p){q=n.db
q.toString
n.saa(T.aW(q,p,t.G))}else{q=n.db
q.toString
if(p<J.v(q)){q=n.db
q.toString
n.saa(T.aW(r,J.v(q),t.G))}}s=H.a([],s)
q=n.db
q.toString
q=T.t(J.v(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.l(r,q[o]))
n.saa(s)}},
bF:function(a){return this.ao(a,null,!0)},
bH:function(a,b){return this.ao(null,a,b)},
bG:function(a,b){return this.ao(a,null,b)},
cW:function(a){return this.ao(null,a,!0)},
a7:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.D(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.aY(),p=q.length,o=0;o<q.length;q.length===p||(0,H.e)(q),++o)q[o].d2(a,r,!1,e)
if(r.length!==0)if(a){if(n.dy==null)n.saf(r)
q=n.dy
q.toString
q=J.v(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.saf(T.aW(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.v(q)){q=n.dy
q.toString
n.saf(T.aW(r,J.v(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=T.t(J.v(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.l(r,q[o]))
n.sa1(s)}else{if(n.dx==null)n.sa1(r)
q=n.dx
q.toString
q=J.v(q)
p=r.length
if(q<p){q=n.dx
q.toString
n.sa1(T.aW(q,p,t.G))}else{q=n.dx
q.toString
if(p<J.v(q)){q=n.dx
q.toString
n.sa1(T.aW(r,J.v(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=T.t(J.v(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.e)(q),++o)s.push(C.a.l(r,q[o]))
n.sa1(s)}if(e!=null)if(a)n.y=e
else n.x=e},
d_:function(a){return this.a7(!1,a,null,!0,null)},
d2:function(a,b,c,d){return this.a7(a,null,b,c,d)},
bJ:function(a,b){return this.a7(!1,a,null,b,null)},
d0:function(a,b){return this.a7(!1,null,a,b,null)},
d1:function(a,b){return this.a7(!1,null,a,!0,b)},
aZ:function(a,b,c,d){return this.a7(!0,a,t.x.a(b),c,d)},
cT:function(a,b){return this.aZ(null,a,b,null)},
cU:function(a,b){return this.aZ(null,a,!0,b)},
ac:function(a,b){this.bG(a,!0)
this.bJ(a,!0)
this.dg(a,!0)},
cq:function(a,b){var s,r,q,p=this,o="removeWhere",n=a.a5(),m=a.an(),l=a.x,k=a.a_(!0),j=a.y,i=t.x
i.a(k)
i.a(n)
i.a(m)
p.ao(null,n,!1)
p.a7(!1,null,m,!1,l)
p.aZ(null,k,!1,j)
s=p.gC()
r=a.gC()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
n=H.x(s).h("K(1)").a(new V.eg())
if(!!s.fixed$length)H.l(P.ac(o))
C.a.c4(s,n,!0)
n=H.x(r).h("K(1)").a(new V.eh())
if(!!r.fixed$length)H.l(P.ac(o))
C.a.c4(r,n,!0)
for(n=t.j,n=T.jP(s,r,n,n),n=P.dQ([n.a,n.b],!1,t.z),n=new A.Q(new H.S(n,H.x(n).h("S<1,i<I>>")),t.eX),n=n.gu(n);n.k();){q=n.b
if(q==null)q=H.l(P.aj("No element"))
m=q.length
if(0>=m)return H.m(q,0)
l=q[0]
if(1>=m)return H.m(q,1)
l.cq(q[1],!0)}},
e9:function(a){return this.cq(a,!0)},
as:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.D(p.a5());s.k();){r=s.gm()
q=r.d
m.push(new K.u(r.a,r.b,r.c,q*o))}p.bH(m,!0)
m=H.a([],n)
for(s=J.D(p.an());s.k();){r=s.gm()
q=r.d
m.push(new K.u(r.a,r.b,r.c,q*o))}p.d0(m,!0)
n=H.a([],n)
for(m=J.D(p.a_(!0));m.k();){s=m.gm()
r=s.d
n.push(new K.u(s.a,s.b,s.c,r*o))}p.cT(n,!0)
p.df(a,!0)},
bi:function(a){return this.as(a,!0)},
a5:function(){var s=this.db
return s==null?H.a([C.i],t.O):s},
a_:function(a){var s=a?this.dy:this.dx
return s==null||J.be(s)?H.a([C.i],t.O):s},
an:function(){return this.a_(!1)},
cL:function(){var s,r,q,p,o,n=this.am(C.d),m=H.a([],t.b)
for(s=[C.n,C.B,C.v],r=t.n,q=0;q<3;++q){p=this.am(s[q]).H(0,n)
m.push(H.a([p.a,p.b,p.c],r))}o=C.n.aj(Z.a6(null,m).gcE())
return new S.w(n.H(0,o),n.A(0,o),t.hd)},
bE:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.cy
r=a.length
q=H.a([],t.l)
for(r=T.t(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.e)(r),++o)q.push(C.d)
g.sT(f.a(q))
n=H.a([a,b,c,d],t.h)
for(f=T.t(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.e)(f),++o){m=f[o]
l=C.a.l(n,m)
p=g.r
for(p=T.eW(T.t(J.v(p==null?H.l(H.q("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.e)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.l(H.q("points"))
J.fO(h,i.b,l[C.c.a0(i.a,l.length)])}}},
dP:function(a){var s,r,q,p,o,n,m=this,l=m.cy,k=[]
for(s=T.f3(l,1,0).e_(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
o=m.r
k.push(J.co(o==null?H.l(H.q("points")):o).w(0,1-p).A(0,a.w(0,p)))}s=k.length
if(1>=s)return H.m(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.m(k,2)
n=r.a(k[2])
if(3>=s)return H.m(k,3)
k=r.a(k[3])
m.ej("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.c.a0(J.v(m.gp(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.aM(m.gp(m),k)}else{k=r.a(H.a([J.co(m.gp(m)),o,n,k],s))
J.aM(m.gp(m),k)}return null},
cX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=T.f3(this.cy,1,0).ax(0)
r=t.i
q=Z.dr(T.fL(a,r))
p=Z.dr(T.hW(a,r))
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
i.push(new Y.c(d.l(e,0),d.l(e,1),d.l(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.m(o,0)
l=o[0]
if(1>=r)return H.m(o,1)
k=o[1]
if(2>=r)return H.m(o,2)
i=o[2]
if(3>=r)return H.m(o,3)
this.bE(l,k,i,o[3])},
bg:function(a,b){var s=this.cx,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
dZ:function(a,b){var s
if(!this.bg(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.cx+0.00001*Math.abs(s))return!1
return!0},
aS:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.dP(a,new V.eb(l,C.c.a0(J.v(a),this.cy)),t.i)
l.a=P.o(s,!0,s.$ti.h("k.E"))
s=H.a([],t.dm)
for(r=T.t(J.v(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.e)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.A()
s.push(new S.b2(J.R(m,n+0),J.R(l.a,n+1),J.R(l.a,n+2),J.R(l.a,n+3),p))}return s},
c0:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.cy
r=T.t(a.length,s,s)
q=H.x(r)
q=P.o(new H.aT(r,q.h("K(1)").a(b),q.h("aT<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.X)
C.a.D(r,q)
p=H.a([],t.h)
for(r=new A.Q(H.a([r,q],t.gL),t.eN),r=r.gu(r),q=H.x(a),o=q.c,q=q.h("ag<1>");r.k();){n=r.b
if(n==null)n=H.l(P.aj("No element"))
if(1>=n.length)return H.m(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.H()
if(typeof l!=="number")return H.dk(l)
if(m-l>=s){H.P(l)
H.P(m)
P.e1(l,m,a.length)
k=new H.ag(a,l,m,q)
k.b3(a,l,m,o)
p.push(k.N(0))}}return p},
bD:function(a){t.y.a(a)
return this.c0(a,new V.ed(this,a))},
cP:function(a){t.y.a(a)
return this.c0(a,new V.ec(this,a))},
c_:function(a){var s=F.dP(this.gp(this),new V.e7(this,a),t.i)
return P.o(s,!0,s.$ti.h("k.E"))},
cK:function(){var s,r=this
if(J.v(r.gp(r))===1)return r.gp(r)
s=t.eR
s=A.fW(P.o(new A.Q(H.a([r.c_(0),r.c_(r.cy-1)],t.h),s),!0,s.h("k.E")),t.i)
return P.o(s,!0,s.$ti.h("k.E"))},
bC:function(){var s,r,q,p=H.a([],t.l)
for(s=this.aY(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)C.a.D(p,s[q].cK())
return p},
c9:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.m.a(a2)
a0.dQ(a2)
if(J.v(a0.gp(a0))===J.v(a2.gp(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.be(n==null?H.l(H.q(a1)):n)){n=q.a(H.a([o.am(C.d)],r))
m=o.r
J.aM(m==null?H.l(H.q(a1)):m,n)}n=o.r
if(C.c.a0(J.v(n==null?H.l(H.q(a1)):n),o.cy)===1){n=o.r
o.dP(J.co(n==null?H.l(H.q(a1)):n))}}s=t.i
l=a0.bD(P.o(a0.gp(a0),!0,s))
k=a2.bD(P.o(a2.gp(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.cy
f=new V.ea(g)
for(s=T.t(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.e)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.Y(c)
m=J.Y(d)
b=Math.max(0,C.c.a8(n.gj(c)-m.gj(d),g))
a=Math.max(0,C.c.a8(m.gj(d)-n.gj(c),g))
d=a0.cl(b,d)
c=a0.cl(a,c)
C.a.D(i,d)
C.a.D(h,c)}a0.sT(q.a(i))
a2.sT(q.a(h))},
cl:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=T.t(this.cy*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)C.a.D(s,a8)
return s}o=this.aS(a8)
n=o.length
m=n+a7
s=t.X
r=H.a([],s)
for(q=T.t(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.e)(q),++p){k=q[p]
if(typeof k!=="number")return k.w()
r.push(C.b.a8(k*n,m))}q=H.a([],s)
for(l=T.t(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.e)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.aI(k),e=0;e<r.length;r.length===g||(0,H.e)(r),++e)h.push(f.F(k,r[e])?1:0)
q.push(T.fK(h,i))}d=H.a([],t.l)
for(s=new A.Q(H.a([o,q],t.L),t.w),s=s.gu(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.k();){c=s.b
if(c==null)c=H.l(P.aj(a6))
h=c.length
if(0>=h)return H.m(c,0)
b=i.a(c[0])
if(1>=h)return H.m(c,1)
a=T.f3(H.P(c[1])+1,1,0).ax(0)
for(h=new A.Q(H.a([a,T.fL(a,r)],q),l),h=h.gu(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.k();){a2=h.b
if(a2==null)a2=H.l(P.aj(a6))
a3=P.dQ([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.m(a2,0)
a5=a2[0]
if(1>=a4)return H.m(a2,1)
C.a.D(d,V.f7(new H.S(a3,H.x(a3).h("S<1,c>")),a5,a2[1]))}}return d},
dQ:function(a){var s,r,q,p,o,n,m,l,k=new V.e8(),j=new V.e9()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.Y(o)
l=J.Y(n)
if(m.gj(o)>l.gj(n))j.$3(p,a,T.aW(n,m.gj(o),r))
else if(l.gj(n)>m.gj(o))j.$3(p,this,T.aW(o,l.gj(n),r))}},
bB:function(){var s=null,r=this.am(C.d),q=new V.bV(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.f,s,s,s,s,s)
q.b1(C.f,s,s)
q.sT(t.y.a(H.a([r],t.l)))
q.e9(this)
return q},
cm:function(a,b,c){var s,r=this,q=t.m
q.a(a)
q.a(b)
r.saa(V.fI(a.a5(),b.a5(),c))
r.sa1(V.fI(a.an(),b.an(),c))
r.saf(V.fI(a.a_(!0),b.a_(!0),c))
q=t.V
r.sd7(V.hL(a.x,b.x,c,q))
r.sdU(V.hL(a.y,b.y,c,q))
s=new V.ef()
if(c===1){q=b.db
r.saa(q!=null?s.$1(q):null)
q=b.dx
r.sa1(q!=null?s.$1(q):null)
q=b.dy
r.saf(q!=null?s.$1(q):null)
r.x=b.x
r.y=b.y}},
cr:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.m.a(a)
if(b<=0&&c>=1){e.sT(t.y.a(P.o(a.gp(a),!0,t.i)))
return}s=t.y
r=a.aS(s.a(P.o(a.gp(a),!0,t.i)))
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
j=J.dl(r[n])
j=s.a(V.f7(new H.S(j,H.x(j).h("S<1,c>")),m,k))
J.aM(e.gp(e),j)}else{if(n>>>0!==n||n>=j)return H.m(r,n)
j=J.dl(r[n])
j=s.a(V.f7(new H.S(j,H.x(j).h("S<1,c>")),m,1))
J.aM(e.gp(e),j)
for(j=n+1,P.e1(j,l,r.length),j=H.cT(r,j,l,H.x(r).c),i=j.$ti,j=new H.V(j,j.gj(j),i.h("V<B.E>")),i=i.h("B.E"),h=t.z;j.k();){g=i.a(j.d)
g=P.dQ([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.S(g,H.x(g).h("S<1,c>")))
f=e.r
J.aM(f==null?H.l(H.q("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.m(r,l)
j=J.dl(r[l])
j=s.a(V.f7(new H.S(j,H.x(j).h("S<1,c>")),0,k))
J.aM(e.gp(e),j)}},
aY:function(){var s,r,q,p,o=H.a([],t.d_)
for(s=this.ab(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q){p=s[q]
if(p instanceof V.I)o.push(p)}return o},
sd7:function(a){this.x=H.hp(a)},
sdU:function(a){this.y=H.hp(a)},
saa:function(a){this.db=t.x.a(a)},
sa1:function(a){this.dx=t.x.a(a)},
saf:function(a){this.dy=t.x.a(a)},
gaG:function(){return this.z}}
V.al.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.am.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.an.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.eg.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.I)},
$S:6}
V.eh.prototype={
$1:function(a){return!(t.j.a(a) instanceof V.I)},
$S:6}
V.eb.prototype={
$2:function(a,b){t.i.a(b)
return a<J.v(this.a.a)-this.b},
$S:9}
V.ed.prototype={
$1:function(a){var s,r,q
H.P(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.m(s,r)
r=s[r]
if(a<0||a>=q)return H.m(s,a)
return!this.a.dZ(r,s[a])},
$S:10}
V.ec.prototype={
$1:function(a){var s,r,q
H.P(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.m(s,r)
r=s[r]
if(a<0||a>=q)return H.m(s,a)
return!this.a.bg(r,s[a])},
$S:10}
V.e7.prototype={
$2:function(a,b){t.i.a(b)
return C.c.a0(a,this.a.cy)===this.b},
$S:9}
V.ea.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=T.t(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.e)(r),++p)s.push(C.a.gM(C.a.gM(a)))
return s}if(b<0)return H.m(a,b)
return a[b]},
$S:26}
V.e8.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.a5()
case"strokeColors":return b.an()
case"backgroundStrokeColors":return b.a_(!1)
default:throw H.b(u.c+a)}},
$S:27}
V.e9.prototype={
$3:function(a,b,c){t.U.a(c)
switch(a){case"fillColors":b.saa(c)
break
case"strokeColors":b.sa1(c)
break
case"backgroundStrokeColors":b.saf(c)
break
default:throw H.b(u.c+a)}},
$S:28}
V.ef.prototype={
$1:function(a){var s=t.G
return P.o(J.E(t.U.a(a),new V.ee(),s),!0,s)},
$S:29}
V.ee.prototype={
$1:function(a){return t.G.a(a).n()},
$S:3}
V.cZ.prototype={}
V.bV.prototype={
n:function(){return V.iJ(this)}}
V.bg.prototype={
gO:function(a){var s=this.d
return s==null?H.l(H.q("display")):s},
d3:function(a){this.d=a}}
Q.cu.prototype={
gR:function(){var s=this.e
return s==null?H.l(H.q("ctx")):s},
aO:function(){var s=0,r=P.di(t.V),q,p=this,o,n,m
var $async$aO=P.dj(function(a,b){if(a===1)return P.de(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.b7(C.V.gdR(m).cC(new Q.dH(),t.V),$async$aO)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.df(q,r)}})
return P.dg($async$aO,r)},
bq:function(a){var s,r,q=this,p=q.gO(q).gE(),o=q.gO(q).aE(a)
C.h.sbj(q.gR(),o.aw())
s=p.c
r=p.d
q.gR().fillRect(0-s/2,0-r/2,p.c,p.d)},
ed:function(a){var s,r,q,p,o,n,m=this,l=t.y.a(P.o(a.gp(a),!0,t.i)),k=m.gO(m).gE().cD(a,l)
if(k.length===0)return
s=a.cP(k)
for(l=s.length,r="",q=0;q<s.length;s.length===l||(0,H.e)(s),++q)r+=m.cQ(a,s[q])
p=W.iz(r)
m.cb(p,a,!0)
o=a.a5()
if(J.v(o)>1)C.h.sbj(m.gR(),m.cg(a,o))
else{n=m.gO(m).aE(J.R(a.a5(),0))
C.h.sbj(m.gR(),n.aw())}m.gR().fill(p)
m.cb(p,a,!1)},
cQ:function(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.aS(b)
r=J.a4(b)
q=r.gL(b)
p="M "+H.n(q.a)+" "+H.n(q.b)
o=a.bg(r.gL(b),r.gM(b))
for(r=s.length,n=0;n<s.length;s.length===r||(0,H.e)(s),++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+H.n(l.a)+" "+H.n(l.b)+" "+H.n(k.a)+" "+H.n(k.b)+" "+H.n(j.a)+" "+H.n(j.b)}return o?p+" Z":p},
cg:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.U.a(b)
s=a.cL()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.gO(g).gE().cD(a,r)
r=g.gR()
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
l=T.jv(m+1,0,m).ax(0)
for(r=T.t(o.gj(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.e)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.l(H.q("display"))
h=i.aE(o.l(b,j))
p.addColorStop(C.a.l(l,j),h.aw())}return p},
cb:function(a,b,c){var s,r,q,p,o=this,n=c?b.y:b.x
if(n===0)return
s=b.a_(c)
r=o.gO(o).gE().c
o.gR().lineWidth=n*0.01*(r/14.222222222222221)
r=J.a4(s)
q=r.aI(s,new Q.dG())
if(r.gK(s)||q)return
if(r.gj(s)>1)C.h.sbK(o.gR(),o.cg(b,s))
else{p=o.gO(o).aE(J.fe(b.a_(c)))
C.h.sbK(o.gR(),p.aw())}C.h.d6(o.gR(),a)}}
Q.dH.prototype={
$1:function(a){return H.fw(a)},
$S:30}
Q.dG.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:31}
N.cM.prototype={
gau:function(){var s=this.d
return s==null?H.l(H.q("mobjects")):s},
gE:function(){var s=this.f
return s==null?H.l(H.q("camera")):s},
gO:function(a){var s=this.x
return s==null?H.l(H.q("display")):s},
dm:function(){var s,r,q,p=this,o=document,n=o.querySelector(".canvas-container")
n.toString
s=H.a([],t.db)
r=new O.bD(0)
r.b2(0)
o=o.createElement("canvas")
t.gA.a(o)
s=new B.ct(o,n,s,C.d,C.d,r,C.d,C.d)
s.a=new Q.cu($.cl())
n.appendChild(o).toString
p.x=s
p.r=p.gO(p).gav()
s=p.gO(p)
o=s.b=new T.dD(14.222222222222221,s)
n=s.d
C.y.sem(n,1280)
C.y.se1(n,720)
r=s.gav()
r.d9(s)
n=n.getContext("2d")
n.toString
r.e=n
o.d=o.c/1.7777777777777777
n=s.gav()
r=o.c
q=o.d
n.gR().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
s.gav().bq(C.q)
p.f=o
new P.d7().dn(0)
p.sbN(t.a.a(H.a([],t.r)))},
aQ:function(){var s=0,r=P.di(t.z),q=1,p,o=[],n=this,m,l
var $async$aQ=P.dj(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.gO(n).dV()
q=3
s=6
return P.b7(n.ag(),$async$aQ)
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
case 5:n.gE().r.gav().bq(C.q)
n.gE().cv(n.gau())
n.gO(n).el()
return P.df(null,r)
case 1:return P.de(p,r)}})
return P.dg($async$aQ,r)},
aR:function(a){var s,r,q
for(s=this.gau(),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)s[q].cF(a)},
bd:function(a){t.a.a(a)
this.ee(a)
C.a.e3(this.gau(),0,a)},
cz:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.o(b,!0,t.j)
C.a.D(s,r.gE().bh(b))
r.sbN(q.a(r.cO(r.gau(),s)))},
ee:function(a){return this.cz(!0,a)},
cO:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new N.e2(s).$2(a,P.fm(b,H.x(b).c))
return s},
aP:function(a){var s=0,r=P.di(t.z),q=this,p,o,n,m,l,k
var $async$aP=P.dj(function(b,c){if(b===1)return P.de(c,r)
while(true)switch(s){case 0:p=a.a,o=0
case 2:if(!(o<p)){s=3
break}n=q.r
s=4
return P.b7((n==null?H.l(H.q("renderer")):n).aO(),$async$aP)
case 4:m=c
o+=m
a.aR(m)
l=Math.min(1,Math.max(o/p,0))
a.cn(a.b.$1(l))
q.aR(m)
n=q.f
n=(n==null?H.l(H.q("camera")):n).r.a;(n==null?H.l(H.q("renderer")):n).bq(C.q)
n=q.f
if(n==null)n=H.l(H.q("camera"))
k=q.d
n.cv(k==null?H.l(H.q("mobjects")):k)
q.a+=m
s=2
break
case 3:return P.df(null,r)}})
return P.dg($async$aP,r)},
ak:function(a,b){var s=0,r=P.di(t.z),q=this,p,o
var $async$ak=P.dj(function(c,d){if(c===1)return P.de(d,r)
while(true)switch(s){case 0:o=q.gE().bh(q.gau())
b.be()
p=b.r
if(!C.a.a9(o,p)){q.bd(t.a.a(H.a([p],t.r)))
C.a.D(o,p.ab())}s=2
return P.b7(q.aP(b),$async$ak)
case 2:b.bm(1)
b.ar(q)
q.aR(0)
return P.df(null,r)}})
return P.dg($async$ak,r)},
sbN:function(a){this.d=t.hh.a(a)}}
N.e2.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.e)(a),++q){p=a[q]
if(b.a9(0,p))continue
o=p.ab()
n=b.e6(0,P.fm(o,H.x(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.l(H.q("submobjects")):o,n)}else C.a.t(r,p)}},
$S:49}
T.fb.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
T.fa.prototype={
$1:function(a){return H.P(a)/this.a*this.b},
$S:33}
T.fc.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("K(p,0)")}}
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
if(typeof m!=="number")return H.dk(m)
l.push(J.cm(n.b,Math.pow(q,p-m)*Math.pow(a,m)*X.hE(p,m,!0)))}return C.a.W(l,new V.eR())},
$S:36}
V.eR.prototype={
$2:function(a,b){var s=t.i
return s.a(a).A(0,s.a(b))},
$S:37}
K.u.prototype={
eq:function(a){return new K.u(this.a,this.b,this.c,a)},
n:function(){var s=this
return new K.u(s.a,s.b,s.c,s.d)},
N:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
aw:function(){var s=this
return"rgba("+C.b.a3(s.a*255)+", "+C.b.a3(s.b*255)+", "+C.b.a3(s.c*255)+", "+H.n(s.d)+")"},
i:function(a){return this.aw()}}
X.a9.prototype={
i:function(a){return this.b}}
X.a1.prototype={}
M.dJ.prototype={
gah:function(){var s=this.a
return s==null?H.l(H.q("eventListeners")):s},
dj:function(){var s,r,q=P.fl(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.G(0,C.Q[r],H.a([],s))
this.sds(t.cH.a(q))},
ae:function(a,b,c){var s,r,q
H.fC(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.o(c.h("i<cy<0>>").a(b),!0,c.h("cy<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gM(s)
C.a.ec(s,q)
r=q.es(a)}},
aH:function(a){var s,r=this
switch(a.a){case C.j:t.gt.a(a)
s=r.gah().l(0,C.j)
s.toString
r.ae(a,s,t.e)
break
case C.k:t.bt.a(a)
s=r.gah().l(0,C.k)
s.toString
r.ae(a,s,t.e)
break
case C.l:t.dN.a(a)
s=r.gah().l(0,C.l)
s.toString
r.ae(a,s,t.e)
break
case C.m:t.fV.a(a)
s=r.gah().l(0,C.m)
s.toString
r.ae(a,s,t.e)
break
case C.r:t.fw.a(a)
s=r.gah().l(0,C.r)
s.toString
r.ae(a,s,t.e)
break
case C.t:t.bf.a(a)
s=r.gah().l(0,C.t)
s.toString
r.ae(a,s,t.e)
break}},
sds:function(a){this.a=t.dC.a(a)}}
O.cH.prototype={}
O.bF.prototype={}
O.bG.prototype={}
O.bH.prototype={}
O.bE.prototype={}
O.bD.prototype={
b2:function(a){switch(this.a){case 0:break
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
return s==null?H.l(H.q("shape")):s},
A:function(a,b){return this.at(0,new Z.dx(typeof b=="number"?Z.dq(b,this.gB(this)):t.A.a(b)))},
w:function(a,b){return this.at(0,new Z.dy(typeof b=="number"?Z.dq(b,this.gB(this)):t.A.a(b)))},
at:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=T.eW(p.gI(p),t.p)
r=H.x(s)
q=r.h("O<1,i<j>>")
q=P.o(new H.O(s,r.h("i<j>(1)").a(new Z.dw(b)),q),!0,q.h("B.E"))
return Z.a6(p.gB(p),q)},
a6:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gI(this)
if(s>>>0!==s||s>=r.length)return H.m(r,s)
return J.R(r[s],a.b)},
dO:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gB(f).a
if(typeof e!=="number")return e.H()
s=f.gB(f).b
if(typeof s!=="number")return s.H()
r=H.a([],t.b)
for(q=T.t(f.gB(f).a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,H.e)(q),++m){l=q[m]
if(!J.az(l,a)){k=H.a([],n)
j=f.b
j=T.t((j==null?H.l(H.q("shape")):j).a,0,1)
i=j.length
h=0
for(;h<j.length;j.length===i||(0,H.e)(j),++h){g=j[h]
if(!J.az(g,b))k.push(J.R(C.a.l(o,l),g))}r.push(k)}}return Z.a6(new S.w(e-1,s-1,t.o),r)},
bA:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this
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
if(typeof j!=="number")return j.a0()
i=C.b.a0(j,2)===0?1:-1
if(0>=l.length)return H.m(l,0)
o.push(i*Z.dq(J.R(l[0],j),n).w(0,h.dO(0,j)).bA())}return T.fK(o,t.V)},
cM:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b0.bA()===0)throw H.b("This matrix is not inversible")
s=b0.gB(b0).a
r=b0.gB(b0).b
q=b0.n()
p=Z.ff(s)
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
C.a.G(j,g,a)
b=k.length
if(e>=b)return H.m(k,e)
a0=k[e]
if(g!==(g|0)||g>=b)return H.m(k,g)
k[e]=k[g]
C.a.G(k,g,a0)
b=J.a5(a)
a1=b.l(a,g)
for(a2=g;a2<r;++a2){a3=b.l(a,a2)
if(typeof a3!=="number")return a3.al()
b.G(a,a2,a3/a1)}for(a3=J.a5(a0),a2=l;a2>=0;--a2){a4=a3.l(a0,a2)
if(typeof a4!=="number")return a4.al()
a3.G(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(e>=j.length)return H.m(j,e)
a5=j[e]
if(e>=k.length)return H.m(k,e)
a6=k[e]
a4=J.a5(a5)
a1=a4.l(a5,g)
for(a7=a2;a7!==r;++a7){a8=a4.l(a5,a7)
a9=b.l(a,a7)
if(typeof a9!=="number")return a9.w()
if(typeof a8!=="number")return a8.H()
a4.G(a5,a7,a8-a9*a1)}for(a4=J.a5(a6),a7=l;a7>0;--a7){a8=a4.l(a6,a7)
a9=a3.l(a0,a7)
if(typeof a9!=="number")return a9.w()
if(typeof a8!=="number")return a8.H()
a4.G(a6,a7,a8-a9*a1);--a7
a9=a4.l(a6,a7)
a8=a3.l(a0,a7)
if(typeof a8!=="number")return a8.w()
if(typeof a9!=="number")return a9.H()
a4.G(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.l(a6,0)
a9=a3.l(a0,0)
if(typeof a9!=="number")return a9.w()
if(typeof a8!=="number")return a8.H()
a4.G(a6,0,a8-a9*a1)}}}return p},
ax:function(a){var s=this.gI(this),r=H.x(s),q=r.h("O<1,j>")
return P.o(new H.O(s,r.h("j(1)").a(new Z.du(a)),q),!0,q.h("B.E"))},
gcE:function(){return this.at(0,new Z.dz(this))},
aj:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.gB(a0),a2=a0.gB(a0).b,a3=a5.gB(a5).b,a4=Z.dq(0,new S.w(a0.gB(a0).a,a5.gB(a5).b,t.o))
for(a1=T.t(a1.a,0,1),s=a1.length,r=a5.a,q=a0.a,p=a4.a,o=0;o<a1.length;a1.length===s||(0,H.e)(a1),++o){n=a1[o]
for(m=T.t(a3,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.e)(m),++k){j=m[k]
for(i=T.t(a2,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,H.e)(i),++g){f=i[g]
e=C.a.l(p,n)
d=J.a5(e)
c=d.l(e,j)
b=J.R(C.a.l(q,n),f)
a=J.R(C.a.l(r,f),j)
if(typeof b!=="number")return b.w()
if(typeof a!=="number")return H.dk(a)
if(typeof c!=="number")return c.A()
d.G(e,j,c+b*a)}}}return a4},
n:function(){return this.dS(new Z.dt())},
dS:function(a){return this.at(0,new Z.ds(t.ao.a(a)))},
e_:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gI(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)for(p=J.D(s[q]);p.k();)o.push(p.gm())
return o},
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.n(d.gB(d).a)+"x"+H.n(d.gB(d).b),b=H.a([],t.X)
for(s=d.gI(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.e)(s),++q)for(p=J.D(s[q]);p.k();)b.push(C.b.bv(p.gm(),6).length)
o=C.a.bk(b,6,C.C,t.S)
for(b=d.gI(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.e)(b),++q){m=b[q]
n+="      "
for(l=J.D(m);l.k();){k=l.gm()
j=k<0?"-":" "
k=Math.abs(k)
i=C.b.bv(k,6)
h=H.a([],p)
for(i=T.t(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.e)(i),++f)h.push(" ")
e=C.a.e7(h)
n=n+j+C.b.bv(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sdr:function(a){this.b=t.gv.a(a)}}
Z.dx.prototype={
$2:function(a,b){return a+this.a.a6(t.o.a(b))},
$S:1}
Z.dy.prototype={
$2:function(a,b){return a*this.a.a6(t.o.a(b))},
$S:1}
Z.dw.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=T.eW(a.b,t.V)
r=H.x(s)
q=r.h("O<1,j>")
return P.o(new H.O(s,r.h("j(1)").a(new Z.dv(this.a,a)),q),!0,q.h("B.E"))},
$S:40}
Z.dv.prototype={
$1:function(a){t.d.a(a)
return this.a.$2(a.b,new S.w(this.b.a,a.a,t.o))},
$S:41}
Z.du.prototype={
$1:function(a){return J.R(t.p.a(a),this.a)},
$S:42}
Z.dz.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.a6(new S.w(b.b,b.a,s))},
$S:1}
Z.dt.prototype={
$1:function(a){return a},
$S:43}
Z.ds.prototype={
$2:function(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
Z.f9.prototype={
$2:function(a,b){var s=t.A
return s.a(a).aj(s.a(b))},
$S:44}
Y.c.prototype={
F:function(a,b){if(b==null)return!1
return b instanceof Y.c&&this.a===b.a&&this.b===b.b&&this.c===b.c},
A:function(a,b){var s=this
if(typeof b=="number")return new Y.c(s.a+b,s.b+b,s.c+b)
else if(b instanceof Y.c)return new Y.c(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.b("Vector3 only support addition by num or Vector3")},
H:function(a,b){var s=this
if(typeof b=="number")return new Y.c(s.a-b,s.b-b,s.c-b)
else if(b instanceof Y.c)return new Y.c(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.b("Vector3 only support subtraction by num or Vector3")},
w:function(a,b){return new Y.c(this.a*b,this.b*b,this.c*b)},
al:function(a,b){return new Y.c(this.a/b,this.b/b,this.c/b)},
bp:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
aU:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.b("No component at index "+a+" on a vector3")}},
ek:function(){var s=t.n
s=Z.a6(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
bw:function(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new Y.c(s,r,c==null?this.c:c)},
cH:function(a){return this.bw(null,null,a)},
eo:function(a){return this.bw(a,null,null)},
ep:function(a){return this.bw(null,a,null)},
en:function(a,b){if(a===0)return this.eo(b)
else if(a===1)return this.ep(b)
else if(a===2)return this.cH(b)
else throw H.b("Cannot index a vector3 with index="+a)},
aj:function(a){var s=Z.ff(3).at(0,new Y.ei(a)).aj(this.ek()),r=t.o
return new Y.c(s.a6(new S.w(0,0,r)),s.a6(new S.w(1,0,r)),s.a6(new S.w(2,0,r)))},
i:function(a){return"vec3("+H.n(this.a)+", "+H.n(this.b)+", "+H.n(this.c)+")"}}
Y.ei.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gB(r).a
if(typeof s!=="number")return s.cI()
if(typeof q!=="number")return H.dk(q)
if(s<q){s=b.b
q=r.gB(r).b
if(typeof s!=="number")return s.cI()
if(typeof q!=="number")return H.dk(q)
q=s>=q
s=q}else s=!0
return s?a:r.a6(b)},
$S:1}
S.w.prototype={
i:function(a){return"["+H.n(this.a)+", "+H.n(this.b)+"]"},
F:function(a,b){if(b==null)return!1
return b instanceof S.w&&J.az(b.a,this.a)&&J.az(b.b,this.b)},
gq:function(a){var s=J.bd(this.a),r=J.bd(this.b)
return A.hr(A.cd(A.cd(0,C.c.gq(s)),C.c.gq(r)))}}
S.b2.prototype={
N:function(a){var s=this
return P.dQ([s.a,s.b,s.c,s.d],!1,t.z)},
i:function(a){var s=this
return"["+s.a.i(0)+", "+s.b.i(0)+", "+s.c.i(0)+", "+s.d.i(0)+"]"},
F:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.b2&&b.a.F(0,s.a)&&b.b.F(0,s.b)&&b.c.F(0,s.c)&&b.d.F(0,s.d)},
gq:function(a){var s=this,r=H.ar(s.a),q=H.ar(s.b),p=H.ar(s.c),o=H.ar(s.d)
return A.hr(A.cd(A.cd(A.cd(A.cd(0,C.c.gq(r)),C.c.gq(q)),C.c.gq(p)),C.c.gq(o)))}}
V.cQ.prototype={
ag:function(){var s=0,r=P.di(t.z),q=this,p,o,n,m,l
var $async$ag=P.dj(function(a,b){if(a===1)return P.de(b,r)
while(true)switch(s){case 0:n=t.O
m=H.a([],n)
l=H.a([C.f],n)
n=H.a([],n)
p=new N.bo(0,6.283185307179586,1,C.d,9,0.35,C.v,new N.bT(l,n,0,m,0),null,null,4,0,!1,0.01,!1,0.000001,4,null,null,null,C.f,null,null,null,null,null)
p.b1(C.f,null,null)
p.cV(C.f)
n=H.a([C.T,C.R,C.S,C.U],t.l)
o=new N.bP(4,0,!1,0.01,!1,0.000001,4,null,null,null,C.f,null,null,null,null,null)
o.b1(C.f,null,null)
o.dk(n,C.f)
o.dl(C.f,2,2)
o.cA(0,3.141592653589793,C.d,null,C.n)
o.ef(0,-2.356194490192345)
o.bF(C.i)
p.bF(C.M.eq(0.5))
p.d_(C.L)
n=new Z.cO(1,M.f8(),0,o)
n.Z()
s=2
return P.b7(q.ak(0,n),$async$ag)
case 2:s=3
return P.b7(q.ak(0,G.iH(o,0,M.f8(),1,p)),$async$ag)
case 3:n=new X.cz(1,M.f8(),0,o)
n.Z()
n.bM(o,0,M.f8(),1,null)
s=4
return P.b7(q.ak(0,n),$async$ag)
case 4:return P.df(null,r)}})
return P.dg($async$ag,r)}};(function aliases(){var s=J.ab.prototype
s.dd=s.i
s=J.aQ.prototype
s.de=s.i
s=P.z.prototype
s.bL=s.i
s=L.aA.prototype
s.da=s.be
s.dc=s.ar
s=G.b1.prototype
s.dh=s.ar
s=M.y.prototype
s.dg=s.ac
s.df=s.as
s=V.I.prototype
s.di=s.ac
s=V.bg.prototype
s.d9=s.d3})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u
s(P,"jy","iL",4)
s(P,"jz","iM",4)
s(P,"jA","iN",4)
r(P,"hC","jq",0)
q(P,"jQ",2,null,["$1$2","$2"],["hO",function(a,b){return P.hO(a,b,t.H)}],46,0)
q(P,"hM",2,null,["$1$2","$2"],["hN",function(a,b){return P.hN(a,b,t.H)}],47,0)
p(M.y.prototype,"gcN","Z",19)
q(B,"hQ",3,null,["$3"],["jU"],48,0)
q(M,"f8",1,null,["$3$inflection$pauseRatio","$1"],["hT",function(a){return M.hT(a,null,null)}],32,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.z,null)
q(P.z,[H.fj,J.ab,J.bi,P.k,H.bn,P.F,H.a7,H.V,P.G,H.bs,H.e5,H.dY,H.bt,H.c3,P.b_,H.dO,H.bz,H.cF,H.eG,H.af,H.d5,H.db,P.eJ,P.d0,P.b5,P.b6,P.bk,P.d2,P.aU,P.M,P.d1,P.bR,P.bS,P.d9,P.c9,P.cb,P.d6,P.aV,P.Z,P.bN,P.bQ,P.eq,P.dK,P.L,P.da,P.cS,W.fg,P.d7,P.aS,A.c1,L.aA,T.dD,K.bf,V.cZ,M.y,V.bg,N.cM,K.u,X.a9,X.a1,M.dJ,O.bD,Z.ad,Y.c,S.w,S.b2])
q(J.ab,[J.cD,J.aZ,J.aQ,J.r,J.aC,J.aq,W.T,W.bm,W.dI,W.bp,W.f,W.cJ])
q(J.aQ,[J.cK,J.ak,J.aD])
r(J.dN,J.r)
q(J.aC,[J.bv,J.cE])
q(P.k,[H.aF,H.C,H.aR,H.aT,H.au,P.bu])
q(H.aF,[H.aO,H.ca])
r(H.bZ,H.aO)
r(H.bX,H.ca)
r(H.S,H.bX)
q(P.F,[H.bx,P.cV,H.cG,H.cX,H.cL,P.bj,H.d4,P.cI,P.ao,P.cY,P.cW,P.b0,P.cv,P.cw])
q(H.a7,[H.f6,H.cC,H.cU,H.eX,H.eY,H.eZ,P.el,P.ek,P.em,P.en,P.eK,P.eM,P.eN,P.eQ,P.er,P.ez,P.ev,P.ew,P.ex,P.et,P.ey,P.es,P.eC,P.eD,P.eB,P.eA,P.e3,P.e4,P.eP,P.eH,P.eI,P.dR,W.ej,W.ep,A.dL,T.dE,T.dF,R.dm,R.dn,R.dp,M.dW,M.dV,M.dU,M.dX,M.dS,M.dT,V.al,V.am,V.an,V.eg,V.eh,V.eb,V.ed,V.ec,V.e7,V.ea,V.e8,V.e9,V.ef,V.ee,Q.dH,Q.dG,N.e2,T.fb,T.fa,T.fc,V.f0,V.f1,V.f2,V.eS,V.eR,X.eT,X.eU,Z.dx,Z.dy,Z.dw,Z.dv,Z.du,Z.dz,Z.dt,Z.ds,Z.f9,Y.ei])
q(H.C,[H.B,H.br,H.by])
q(H.B,[H.ag,H.O,H.at])
r(H.bq,H.aR)
q(P.G,[H.bC,H.bW,H.bO])
r(H.aY,H.au)
r(H.aB,H.cC)
r(H.bI,P.cV)
q(H.cU,[H.cR,H.aX])
r(H.d_,P.bj)
r(P.bB,P.b_)
r(H.bw,P.bB)
r(H.c6,H.d4)
q(P.bu,[P.c5,A.Q])
r(P.c4,P.d2)
r(P.d8,P.c9)
r(P.c2,P.cb)
r(P.aw,P.c2)
q(P.ao,[P.bK,P.cB])
q(W.T,[W.a_,W.b3])
q(W.a_,[W.d,W.ai])
r(W.h,W.d)
q(W.h,[W.cr,W.cs,W.aN,W.cA,W.cN])
r(W.ah,W.f)
r(W.a2,W.ah)
r(W.bY,W.bp)
r(W.c_,P.bR)
r(W.d3,W.c_)
r(W.c0,P.bS)
q(L.aA,[Z.cP,G.b1])
r(Z.cO,Z.cP)
r(X.cz,G.b1)
r(R.cq,K.bf)
r(B.ct,R.cq)
r(N.bT,V.cZ)
r(V.I,M.y)
q(V.I,[N.bU,N.bJ,V.bV])
r(N.bh,N.bU)
r(N.bo,N.bh)
r(N.bL,N.bJ)
r(N.bP,N.bL)
r(Q.cu,V.bg)
r(O.cH,X.a1)
q(O.cH,[O.bF,O.bG,O.bH,O.bE])
r(V.cQ,N.cM)
s(H.ca,P.Z)
s(P.cb,P.bN)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",j:"double",N:"num",a0:"String",K:"bool",L:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","j(j,w<p,p>)","c(c)","u(u)","~(~())","~(a2)","K(y)","L(@)","L()","K(p,c)","K(p)","i<j>(u)","p(p,p)","i<y>(y)","~(N)","~(f)","aa<L>()","K(c)","L(~())","a0()","@(@,a0)","@(a0)","j(c)","@(@)","~(@)","L(@,aE)","i<c>(i<i<c>>,@)","i<u>(a0,I)","~(a0,I,i<u>)","i<u>(i<u>)","j(N)","K(u)","j(j{inflection:j?,pauseRatio:j?})","j(p)","~(p,@)","u(i<j>)","c(j)","c(c,c)","L(z,aE)","M<@>(@)","i<j>(w<p,i<j>>)","j(w<p,j>)","j(i<j>)","j(j)","ad(ad,ad)","~(z?,z?)","0^(0^,0^)<N>","0^(0^,0^)<N>","i<c>(i<c>,i<c>,j)","~(i<y>,bM<y>)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.j0(v.typeUniverse,JSON.parse('{"cK":"aQ","ak":"aQ","aD":"aQ","k0":"f","k7":"f","k_":"d","k8":"d","kg":"d","k1":"h","kd":"h","k9":"a_","k5":"a_","ke":"a2","k3":"ah","k2":"ai","kh":"ai","cD":{"K":[]},"aZ":{"L":[]},"r":{"i":["1"],"C":["1"],"k":["1"]},"dN":{"r":["1"],"i":["1"],"C":["1"],"k":["1"]},"bi":{"G":["1"]},"aC":{"j":[],"N":[]},"bv":{"j":[],"p":[],"N":[]},"cE":{"j":[],"N":[]},"aq":{"a0":[],"dZ":[]},"C":{"k":["1"]},"aF":{"k":["2"]},"bn":{"G":["2"]},"aO":{"aF":["1","2"],"k":["2"],"k.E":"2"},"bZ":{"aO":["1","2"],"aF":["1","2"],"C":["2"],"k":["2"],"k.E":"2"},"bX":{"Z":["2"],"i":["2"],"aF":["1","2"],"C":["2"],"k":["2"]},"S":{"bX":["1","2"],"Z":["2"],"i":["2"],"aF":["1","2"],"C":["2"],"k":["2"],"k.E":"2","Z.E":"2"},"bx":{"F":[]},"B":{"C":["1"],"k":["1"]},"ag":{"B":["1"],"C":["1"],"k":["1"],"B.E":"1","k.E":"1"},"V":{"G":["1"]},"aR":{"k":["2"],"k.E":"2"},"bq":{"aR":["1","2"],"C":["2"],"k":["2"],"k.E":"2"},"bC":{"G":["2"]},"O":{"B":["2"],"C":["2"],"k":["2"],"B.E":"2","k.E":"2"},"aT":{"k":["1"],"k.E":"1"},"bW":{"G":["1"]},"au":{"k":["1"],"k.E":"1"},"aY":{"au":["1"],"C":["1"],"k":["1"],"k.E":"1"},"bO":{"G":["1"]},"br":{"C":["1"],"k":["1"],"k.E":"1"},"bs":{"G":["1"]},"at":{"B":["1"],"C":["1"],"k":["1"],"B.E":"1","k.E":"1"},"cC":{"a7":[],"aP":[]},"aB":{"a7":[],"aP":[]},"bI":{"F":[]},"cG":{"F":[]},"cX":{"F":[]},"c3":{"aE":[]},"a7":{"aP":[]},"cU":{"a7":[],"aP":[]},"cR":{"a7":[],"aP":[]},"aX":{"a7":[],"aP":[]},"cL":{"F":[]},"d_":{"F":[]},"bw":{"b_":["1","2"],"bA":["1","2"]},"by":{"C":["1"],"k":["1"],"k.E":"1"},"bz":{"G":["1"]},"cF":{"dZ":[]},"d4":{"F":[]},"c6":{"F":[]},"M":{"aa":["1"]},"b6":{"G":["1"]},"c5":{"k":["1"],"k.E":"1"},"bk":{"F":[]},"c4":{"d2":["1"]},"c9":{"hb":[]},"d8":{"c9":[],"hb":[]},"aw":{"bN":["1"],"bM":["1"],"C":["1"],"k":["1"]},"aV":{"G":["1"]},"bu":{"k":["1"]},"bB":{"b_":["1","2"],"bA":["1","2"]},"b_":{"bA":["1","2"]},"c2":{"bN":["1"],"bM":["1"],"C":["1"],"k":["1"]},"j":{"N":[]},"p":{"N":[]},"i":{"C":["1"],"k":["1"]},"bM":{"C":["1"],"k":["1"]},"a0":{"dZ":[]},"bj":{"F":[]},"cV":{"F":[]},"cI":{"F":[]},"ao":{"F":[]},"bK":{"F":[]},"cB":{"F":[]},"cY":{"F":[]},"cW":{"F":[]},"b0":{"F":[]},"cv":{"F":[]},"bQ":{"F":[]},"cw":{"F":[]},"da":{"aE":[]},"a2":{"f":[]},"ah":{"f":[]},"h":{"d":[],"T":[]},"cr":{"d":[],"T":[]},"cs":{"d":[],"T":[]},"aN":{"d":[],"T":[]},"ai":{"T":[]},"bp":{"fn":["N"]},"d":{"T":[]},"cA":{"d":[],"T":[]},"a_":{"T":[]},"cN":{"d":[],"T":[]},"b3":{"T":[]},"bY":{"fn":["N"]},"c_":{"bR":["1"]},"d3":{"c_":["1"],"bR":["1"]},"c0":{"bS":["1"]},"d7":{"iC":[]},"Q":{"k":["i<1>"],"k.E":"i<1>"},"c1":{"G":["i<1>"]},"cP":{"aA":[]},"cO":{"aA":[]},"cz":{"aA":[]},"b1":{"aA":[]},"cq":{"bf":[]},"ct":{"bf":[]},"bT":{"cZ":[]},"bU":{"I":[],"y":[]},"bh":{"I":[],"y":[]},"bo":{"I":[],"y":[]},"bJ":{"I":[],"y":[]},"bL":{"I":[],"y":[]},"bP":{"I":[],"y":[]},"I":{"y":[]},"bV":{"I":[],"y":[]},"cu":{"bg":[]},"cH":{"a1":[]},"bF":{"a1":[]},"bG":{"a1":[]},"bH":{"a1":[]},"bE":{"a1":[]},"cQ":{"cM":[]}}'))
H.j_(v.typeUniverse,JSON.parse('{"ca":2,"bu":1,"bB":2,"c2":1,"cb":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bc
return{dq:s("@<p>"),A:s("ad"),t:s("bk"),gA:s("aN"),G:s("u"),Q:s("C<@>"),C:s("F"),I:s("f"),en:s("a9"),e:s("a1"),Y:s("aP"),f:s("aa<@>"),v:s("aB<j>"),R:s("Q<y>"),w:s("Q<z>"),eX:s("Q<I>"),eR:s("Q<c>"),ca:s("Q<j>"),eN:s("Q<p>"),hf:s("k<@>"),J:s("r<ad>"),O:s("r<u>"),aE:s("r<cy<a1>>"),Z:s("r<i<y>>"),L:s("r<i<z>>"),h:s("r<i<c>>"),b:s("r<i<j>>"),gL:s("r<i<p>>"),r:s("r<y>"),db:s("r<bS<@>>"),s:s("r<a0>"),dm:s("r<b2<c,c,c,c>>"),d_:s("r<I>"),l:s("r<c>"),n:s("r<j>"),gn:s("r<@>"),X:s("r<p>"),eM:s("r<y(y,j)>"),T:s("aZ"),cj:s("aD"),fw:s("kb"),bf:s("kc"),U:s("i<u>"),gF:s("i<cy<a1>>"),dF:s("i<i<c>>"),a:s("i<y>"),y:s("i<c>"),p:s("i<j>"),aH:s("i<@>"),cH:s("bA<a9,i<cy<a1>>>"),j:s("y"),fV:s("bE"),E:s("a2"),gt:s("bF"),bt:s("bG"),dN:s("bH"),P:s("L"),K:s("z"),q:s("aS<N>"),eU:s("fn<N>"),bA:s("bM<y>"),k:s("aE"),N:s("a0"),e3:s("ag<c>"),hd:s("w<c,c>"),d:s("w<p,j>"),o:s("w<p,p>"),fz:s("w<p,i<j>>"),bl:s("b2<c,c,c,c>"),ak:s("ak"),m:s("I"),i:s("c"),cD:s("c(c)"),do:s("d3<a2>"),ck:s("M<L>"),c:s("M<@>"),fJ:s("M<p>"),dL:s("M<N>"),g4:s("c4<N>"),cJ:s("K"),al:s("K(z)"),fT:s("K(p)"),V:s("j"),fA:s("j(j,w<p,p>)"),ao:s("j(j)"),z:s("@"),fO:s("@()"),bI:s("@(z)"),ag:s("@(z,aE)"),S:s("p"),aw:s("0&*"),_:s("z*"),eH:s("aa<L>?"),x:s("i<u>?"),hh:s("i<y>?"),D:s("i<c>?"),b5:s("i<c>(i<c>,i<c>,j)?"),cI:s("i<y(y,j)>?"),dC:s("bA<a9,i<cy<a1>>>?"),W:s("z?"),gv:s("w<p,p>?"),F:s("aU<@,@>?"),g:s("d6?"),B:s("@(f)?"),g5:s("~()?"),H:s("N"),u:s("~"),M:s("~()"),c4:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.y=W.aN.prototype
C.h=W.bm.prototype
C.N=J.ab.prototype
C.a=J.r.prototype
C.c=J.bv.prototype
C.O=J.aZ.prototype
C.b=J.aC.prototype
C.z=J.aq.prototype
C.P=J.aD.prototype
C.A=J.cK.prototype
C.u=J.ak.prototype
C.V=W.b3.prototype
C.p=new H.aB(P.hM(),t.v)
C.C=new H.aB(P.hM(),H.bc("aB<p>"))
C.o=new H.aB(P.jQ(),t.v)
C.D=new H.bs(H.bc("bs<0&>"))
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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

C.e=new P.d8()
C.K=new P.da()
C.i=new K.u(0,0,0,0)
C.q=new K.u(0,0,0,1)
C.f=new K.u(1,1,1,1)
C.L=new K.u(0.98824,0.38431,0.33333,1)
C.M=new K.u(0.81961,0.27843,0.74118,1)
C.j=new X.a9("EventType.mouseMovedEvent")
C.k=new X.a9("EventType.mousePressedEvent")
C.l=new X.a9("EventType.mouseReleasedEvent")
C.m=new X.a9("EventType.mouseDraggedEvent")
C.r=new X.a9("EventType.keyPressedEvent")
C.t=new X.a9("EventType.keyReleasedEvent")
C.Q=H.a(s([C.j,C.k,C.l,C.m,C.r,C.t]),H.bc("r<a9>"))
C.X=H.a(s([]),t.r)
C.d=new Y.c(0,0,0)
C.v=new Y.c(0,0,1)
C.B=new Y.c(0,1,0)
C.n=new Y.c(1,0,0)
C.R=new Y.c(1,1,0)
C.S=new Y.c(1,-1,0)
C.T=new Y.c(-1,1,0)
C.U=new Y.c(-1,-1,0)
C.W=new P.b5(null,2)})();(function staticFields(){$.eE=null
$.ap=0
$.bl=null
$.fS=null
$.hH=null
$.hB=null
$.hR=null
$.eV=null
$.f_=null
$.fG=null
$.b8=null
$.cf=null
$.cg=null
$.fy=!1
$.H=C.e
$.a3=H.a([],H.bc("r<z>"))
$.dh=P.fl(t.S,H.bc("bA<p,p>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"k4","hX",function(){return H.jF("_$dart_dartClosure")})
s($,"kE","fN",function(){return C.e.cB(new H.f6(),H.bc("aa<L>"))})
s($,"ki","hY",function(){return H.av(H.e6({
toString:function(){return"$receiver$"}}))})
s($,"kj","hZ",function(){return H.av(H.e6({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"kk","i_",function(){return H.av(H.e6(null))})
s($,"kl","i0",function(){return H.av(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ko","i3",function(){return H.av(H.e6(void 0))})
s($,"kp","i4",function(){return H.av(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"kn","i2",function(){return H.av(H.h9(null))})
s($,"km","i1",function(){return H.av(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"kr","i6",function(){return H.av(H.h9(void 0))})
s($,"kq","i5",function(){return H.av(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"ks","fM",function(){return P.iK()})
r($,"k6","cl",function(){var q=new M.dJ()
q.dj()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.ab,DOMError:J.ab,MediaError:J.ab,NavigatorUserMediaError:J.ab,OverconstrainedError:J.ab,PositionError:J.ab,SQLError:J.ab,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,HTMLAnchorElement:W.cr,HTMLAreaElement:W.cs,HTMLCanvasElement:W.aN,CanvasRenderingContext2D:W.bm,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,DOMException:W.dI,DOMRectReadOnly:W.bp,SVGAElement:W.d,SVGAnimateElement:W.d,SVGAnimateMotionElement:W.d,SVGAnimateTransformElement:W.d,SVGAnimationElement:W.d,SVGCircleElement:W.d,SVGClipPathElement:W.d,SVGDefsElement:W.d,SVGDescElement:W.d,SVGDiscardElement:W.d,SVGEllipseElement:W.d,SVGFEBlendElement:W.d,SVGFEColorMatrixElement:W.d,SVGFEComponentTransferElement:W.d,SVGFECompositeElement:W.d,SVGFEConvolveMatrixElement:W.d,SVGFEDiffuseLightingElement:W.d,SVGFEDisplacementMapElement:W.d,SVGFEDistantLightElement:W.d,SVGFEFloodElement:W.d,SVGFEFuncAElement:W.d,SVGFEFuncBElement:W.d,SVGFEFuncGElement:W.d,SVGFEFuncRElement:W.d,SVGFEGaussianBlurElement:W.d,SVGFEImageElement:W.d,SVGFEMergeElement:W.d,SVGFEMergeNodeElement:W.d,SVGFEMorphologyElement:W.d,SVGFEOffsetElement:W.d,SVGFEPointLightElement:W.d,SVGFESpecularLightingElement:W.d,SVGFESpotLightElement:W.d,SVGFETileElement:W.d,SVGFETurbulenceElement:W.d,SVGFilterElement:W.d,SVGForeignObjectElement:W.d,SVGGElement:W.d,SVGGeometryElement:W.d,SVGGraphicsElement:W.d,SVGImageElement:W.d,SVGLineElement:W.d,SVGLinearGradientElement:W.d,SVGMarkerElement:W.d,SVGMaskElement:W.d,SVGMetadataElement:W.d,SVGPathElement:W.d,SVGPatternElement:W.d,SVGPolygonElement:W.d,SVGPolylineElement:W.d,SVGRadialGradientElement:W.d,SVGRectElement:W.d,SVGScriptElement:W.d,SVGSetElement:W.d,SVGStopElement:W.d,SVGStyleElement:W.d,SVGElement:W.d,SVGSVGElement:W.d,SVGSwitchElement:W.d,SVGSymbolElement:W.d,SVGTSpanElement:W.d,SVGTextContentElement:W.d,SVGTextElement:W.d,SVGTextPathElement:W.d,SVGTextPositioningElement:W.d,SVGTitleElement:W.d,SVGUseElement:W.d,SVGViewElement:W.d,SVGGradientElement:W.d,SVGComponentTransferFunctionElement:W.d,SVGFEDropShadowElement:W.d,SVGMPathElement:W.d,Element:W.d,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.T,HTMLFormElement:W.cA,MouseEvent:W.a2,DragEvent:W.a2,PointerEvent:W.a2,WheelEvent:W.a2,Document:W.a_,DocumentFragment:W.a_,HTMLDocument:W.a_,ShadowRoot:W.a_,XMLDocument:W.a_,Attr:W.a_,DocumentType:W.a_,Node:W.a_,Path2D:W.cJ,HTMLSelectElement:W.cN,CompositionEvent:W.ah,FocusEvent:W.ah,KeyboardEvent:W.ah,TextEvent:W.ah,TouchEvent:W.ah,UIEvent:W.ah,Window:W.b3,DOMWindow:W.b3,ClientRect:W.bY,DOMRect:W.bY})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=V.jN
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=square_to_circle.dart.js.map
