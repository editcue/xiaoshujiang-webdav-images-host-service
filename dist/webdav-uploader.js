!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var n,o,i;i=function(){let e=new function(){this.strip=function(e){return/^\s*([\s\S]*?)\s*$/.exec(e)[1]},this.deentitize=function(e){for(var t=/&#(x?)([a-f0-9]{2,});/gi;;){var r=t.exec(e);if(!r)break;var n=r[2],o=10;r[1]&&(o=16),n=String.fromCharCode(parseInt(n,o)),e=e.replace(new RegExp(r[0],"g"),n)}return e=(e=(e=(e=(e=(e=(e=e.replace(/&gt;/g,">")).replace(/&lt;/g,"<")).replace(/&apos;/g,"'")).replace(/&quot;/g,'"')).replace(/&amp;/g,"&")).replace(/&nbsp;/g,"")).replace(/^<\?xml\s+version\s*=\s*(["'])[^\1]+\1[^?]*\?>/,"")},this.encodeBase64=function(t){return e.encode(t)};var e={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var r,n,o,i,s,a,u,c="",l=0;for(t=e._utf8_encode(t);l<t.length;)i=(r=t.charCodeAt(l++))>>2,s=(3&r)<<4|(n=t.charCodeAt(l++))>>4,a=(15&n)<<2|(o=t.charCodeAt(l++))>>6,u=63&o,isNaN(n)?a=u=64:isNaN(o)&&(u=64),c=c+e._keyStr.charAt(i)+e._keyStr.charAt(s)+e._keyStr.charAt(a)+e._keyStr.charAt(u);return c},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}}};return new function(){var t=this;this.DEBUG=0,this.STATUS_CODES={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"None-Authoritive Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested range not satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not supported",507:"Insufficient Storage"},this.DavClient=function(){},this.DavClient.prototype.initialize=function(e,t,r,n,o){this.host=e||location.hostname,this.port=t||location.port||443,this.protocol=r||location.protocol.substr(0,location.protocol.length-1)||"https",this.username=n||null,this.password=o||null,this.request=null},this.DavClient.prototype.OPTIONS=function(e,t,r){this._getRequest("OPTIONS",e,t,r).send("")},this.DavClient.prototype.GET=function(e,t,r){this._getRequest("GET",e,t,r).send("")},this.DavClient.prototype.PUT=function(e,t,r,n,o){var i=this._getRequest("PUT",e,r,n);i.setRequestHeader("Content-type","text/xml,charset=UTF-8"),o&&i.setRequestHeader("If","<"+o+">"),i.send(t)},this.DavClient.prototype.PROPFIND=function(e,t,r,n){var o=this._getRequest("PROPFIND",e,t,r);n=n||0,o.setRequestHeader("Depth",n),o.setRequestHeader("Content-type","text/xml; charset=UTF-8"),o.send('<?xml version="1.0" encoding="UTF-8" ?><D:propfind xmlns:D="DAV:"><D:allprop /></D:propfind>')},this.DavClient.prototype.DELETE=function(e,t,r,n){var o=this._getRequest("DELETE",e,t,r);n&&o.setRequestHeader("If","<"+n+">"),o.send("")},this.DavClient.prototype.MKCOL=function(e,t,r,n){var o=this._getRequest("MKCOL",e,t,r);n&&o.setRequestHeader("If","<"+n+">"),o.send("")},this.DavClient.prototype.COPY=function(e,t,r,n,o,i){var s=this._getRequest("COPY",e,r,n),a=this._generateUrl(t);s.setRequestHeader("Destination",a),o&&s.setRequestHeader("Overwrite","F"),i&&s.setRequestHeader("If","<"+i+">"),s.send("")},this.DavClient.prototype.MOVE=function(e,t,r,n,o,i){var s=this._getRequest("MOVE",e,r,n),a=this._generateUrl(t);s.setRequestHeader("Destination",a),o&&s.setRequestHeader("Overwrite","F"),i&&s.setRequestHeader("If","<"+i+">"),s.send("")},this.DavClient.prototype._getRequest=function(e,r,n,o){var i=t.getXmlHttpRequest();i.onreadystatechange=this._wrapHandler(n,i,o);var s=this._generateUrl(r);return i.open(e,s,!0),i.setRequestHeader("Accept-Encoding"," "),i.setRequestHeader("Authorization",this._createBasicAuth(this.username,this.password)),i},this.DavClient.prototype._wrapHandler=function(e,r,n){var o=this;return(new function(){this.execute=function(){if(console.log(JSON.stringify(r)),4==r.readyState){var i=r.status.toString(),s=o._parseHeaders(r.getAllResponseHeaders()),a=r.responseText,u=t.STATUS_CODES[i];e.call(n,i,u,a,s)}}}).execute},this.DavClient.prototype._generateUrl=function(e){var t=this.protocol+"://"+this.host;return this.port&&(t+=":"+this.port),t+=e},this.DavClient.prototype._createBasicAuth=function(t,r){var n=t+":"+r;return"Basic "+e.encodeBase64(n)},this.DavClient.prototype._parseHeaders=function(t){for(var r=t.split("\n"),n={},o=0;o<r.length;o++){var i=e.strip(r[o]);if(i){var s=i.split(":"),a=e.strip(s.shift()),u=e.strip(s.join(":")),c=a.toLowerCase();void 0!==n[c]?n[c].push?n[c].push(u):n[c]=[n[u]]:n[c]=u}}return n},this.getXmlHttpRequest=function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw alert("Your browser does not support XMLHttpRequest, required for WebDAV access."),"Browser not supported"},this.debug=function(e){if(t.DEBUG){var r=document.createElement("div");e=document.createTextNode(e),r.appendChild(e),document.getElementsByTagName("body")[0].appendChild(r)}}}},"object"==typeof e.exports?e.exports=i():void 0===(o="function"==typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=o)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);!function(e,t,r){var n,o=(n=new Date).getFullYear()+(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+(n.getDate()<10?"0"+n.getDate():n.getDate())+(n.getHours()<10?"0"+n.getHours():n.getHours())+(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+(n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds())+"_"+t,i=new FileReader;i.addEventListener("load",(function(){var r=i.result;console.log("file readed:"+t+" -> "+o),e.PUT(config.filePath+o,r,(function(e){console.log("file uploaded:"+o+" | status code: "+e);var t=config.urlPrefix+o;callback(201==e?null:new Error("upload error status code:"+e),o,t)}))}),!1),r&&i.readAsArrayBuffer(r)}(new class{constructor(e,t,r,n,i){var s=new o.a.DavClient;return s.initialize(e,t,r,n,i),s}}(config.hostname,config.port,config.protocol,config.username,config.password),filename,fileData)}]);