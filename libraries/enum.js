!function(){window.ENUM=function(r,e){if(!(r instanceof Array))throw"First argument of ENUM must be an array";for(var a={},n=function(r){return e&&(r=e(r)),r=a[r],n[r]},t=0,o=r.length;t<o;t++){var s=r[t];s instanceof Array||(s=[s]);var f=Math.pow(2,t),i=s[0];a[i]=i;for(var u=0,c=s.length;u<c;u++){var w=s[u],g=new Number(f);g.asString=w,g.asLowerCase=w.toLowerCase(),g.asUpperCase=w.toUpperCase(),g.asInteger=f,g.ENUM=n,0==u?(n[w]=g,a[f]=i):a[w]=i}}return Object.freeze&&Object.freeze(n),n}}();