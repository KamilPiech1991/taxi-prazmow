!function(s,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(s||self).SwupBodyClassPlugin=t()}(this,function(){function s(){return s=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(s[n]=e[n])}return s},s.apply(this,arguments)}const t=s=>String(s).split(".").map(s=>String(parseInt(s||"0",10))).concat(["0","0"]).slice(0,3).join(".");class e{constructor(){this.isSwupPlugin=!0,this.swup=void 0,this.version=void 0,this.requires={},this.handlersToUnregister=[]}mount(){}unmount(){this.handlersToUnregister.forEach(s=>s()),this.handlersToUnregister=[]}_beforeMount(){if(!this.name)throw new Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return"object"!=typeof this.requires||Object.entries(this.requires).forEach(([s,e])=>{if(!function(s,e,n){const i=function(s,t){var e;if("swup"===s)return null!=(e=t.version)?e:"";{var n;const e=t.findPlugin(s);return null!=(n=null==e?void 0:e.version)?n:""}}(s,n);return!!i&&((s,e)=>e.every(e=>{const[,n,i]=e.match(/^([\D]+)?(.*)$/)||[];var r,o;return((s,t)=>{const e={"":s=>0===s,">":s=>s>0,">=":s=>s>=0,"<":s=>s<0,"<=":s=>s<=0};return(e[t]||e[""])(s)})((o=i,r=t(r=s),o=t(o),r.localeCompare(o,void 0,{numeric:!0})),n||">=")}))(i,e)}(s,e=Array.isArray(e)?e:[e],this.swup)){const t=`${s} ${e.join(", ")}`;throw new Error(`Plugin version mismatch: ${this.name} requires ${t}`)}}),!0}on(s,t,e={}){var n;t=!(n=t).name.startsWith("bound ")||n.hasOwnProperty("prototype")?t.bind(this):t;const i=this.swup.hooks.on(s,t,e);return this.handlersToUnregister.push(i),i}once(t,e,n={}){return this.on(t,e,s({},n,{once:!0}))}before(t,e,n={}){return this.on(t,e,s({},n,{before:!0}))}replace(t,e,n={}){return this.on(t,e,s({},n,{replace:!0}))}off(s,t){return this.swup.hooks.off(s,t)}}return class extends e{constructor(s){void 0===s&&(s={}),super(),this.name="SwupBodyClassPlugin",this.requires={swup:">=4.6"},this.defaults={prefix:""},this.options=void 0,this.updateBodyClass=s=>{this.updateClassNames(document.body,s.to.document.body)},this.options={...this.defaults,...s}}mount(){this.on("content:replace",this.updateBodyClass)}updateClassNames(s,t){const e=[...s.classList].filter(s=>this.isValidClassName(s)),n=[...t.classList].filter(s=>this.isValidClassName(s));s.classList.remove(...e),s.classList.add(...n)}isValidClassName(s){return s&&s.startsWith(this.options.prefix)}}});