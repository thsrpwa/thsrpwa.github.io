import{$ as z,E as d,F as J,G as b,H as u,P as w,Qa as Z,R as S,T as X,Z as E,a as I,aa as W,g as v,i as c,j as V,k as F,l as P,m as $,t as q,u as C,x as R,y as M}from"./chunk-MSTJQYN7.js";var g=class{},Q=(()=>{class n extends g{getTranslation(e){return v({})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(n)))(s||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),D=class{},Y=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();function N(n,r){if(n===r)return!0;if(n===null||r===null)return!1;if(n!==n&&r!==r)return!0;let e=typeof n,t=typeof r,s,i,a;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(r))return!1;if((s=n.length)==r.length){for(i=0;i<s;i++)if(!N(n[i],r[i]))return!1;return!0}}else{if(Array.isArray(r))return!1;a=Object.create(null);for(i in n){if(!N(n[i],r[i]))return!1;a[i]=!0}for(i in r)if(!(i in a)&&typeof r[i]<"u")return!1;return!0}return!1}function l(n){return typeof n<"u"&&n!==null}function A(n){return j(n)&&!H(n)&&n!==null}function j(n){return typeof n=="object"}function H(n){return Array.isArray(n)}function te(n){return typeof n=="string"}function se(n){return typeof n=="function"}function K(n,r){let e=Object.assign({},n);return j(n)?(j(n)&&j(r)&&Object.keys(r).forEach(t=>{A(r[t])?t in n?e[t]=K(n[t],r[t]):Object.assign(e,{[t]:r[t]}):Object.assign(e,{[t]:r[t]})}),e):K({},r)}function x(n,r){let e=r.split(".");r="";do r+=e.shift(),l(n)&&l(n[r])&&(A(n[r])||H(n[r])||!e.length)?(n=n[r],r=""):e.length?r+=".":n=void 0;while(e.length);return n}function ie(n,r,e){let t=r.split("."),s=n;for(let i=0;i<t.length;i++){let a=t[i];i===t.length-1?s[a]=e:((!s[a]||!A(s[a]))&&(s[a]={}),s=s[a])}}var p=class{},k=(()=>{class n extends p{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){if(te(e))return this.interpolateString(e,t);if(se(e))return this.interpolateFunction(e,t)}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(s,i)=>{let a=x(t,i);return l(a)?a:s}):e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(n)))(s||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),L=class{},ee=(()=>{class n extends L{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=w(n)))(s||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),T=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new S;onLangChange=new S;onDefaultLangChange=new S},O=new b("ISOLATE_TRANSLATE_SERVICE"),U=new b("USE_DEFAULT_LANG"),_=new b("DEFAULT_LANGUAGE"),B=new b("USE_EXTEND"),m=n=>c(n)?n:v(n),G=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;extend;loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onDefaultLangChange(){return this.store.onDefaultLangChange}get defaultLang(){return this.store.defaultLang}set defaultLang(e){this.store.defaultLang=e}get currentLang(){return this.store.currentLang}set currentLang(e){this.store.currentLang=e}get langs(){return this.store.langs}set langs(e){this.store.langs=e}get translations(){return this.store.translations}set translations(e){this.store.translations=e}constructor(e,t,s,i,a,h=!0,o=!1,f=!1,y){this.store=e,this.currentLoader=t,this.compiler=s,this.parser=i,this.missingTranslationHandler=a,this.useDefaultLang=h,this.extend=f,o&&(this.store=new T),y&&this.setDefaultLang(y)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(C(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return v(this.translations[e]);this.currentLang||(this.currentLang=e);let t=this.retrieveTranslations(e);return c(t)?(t.pipe(C(1)).subscribe(()=>{this.changeLang(e)}),t):(this.changeLang(e),v(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(R(1),C(1));return this.loadingTranslations=t.pipe(V(s=>this.compiler.compileTranslations(s,e)),R(1),C(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?I(I({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),t}setTranslation(e,t,s=!1){let i=this.compiler.compileTranslations(t,e);(s||this.extend)&&this.translations[e]?this.translations[e]=K(this.translations[e],i):this.translations[e]=i,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){let t=e.filter(s=>!this.langs.includes(s));t.length>0&&(this.langs=[...this.langs,...t])}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,t,s){let i;if(e&&(i=this.runInterpolation(x(e,t),s)),i===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(i=this.runInterpolation(x(this.translations[this.defaultLang],t),s)),i===void 0){let a={key:t,translateService:this};typeof s<"u"&&(a.interpolateParams=s),i=this.missingTranslationHandler.handle(a)}return i!==void 0?i:t}runInterpolation(e,t){if(H(e))return e.map(s=>this.runInterpolation(s,t));if(A(e)){let s={};for(let i in e){let a=this.runInterpolation(e[i],t);a!==void 0&&(s[i]=a)}return s}else return this.parser.interpolate(e,t)}getParsedResult(e,t,s){if(t instanceof Array){let i={},a=!1;for(let o of t)i[o]=this.getParsedResultForKey(e,o,s),a=a||c(i[o]);if(!a)return i;let h=t.map(o=>m(i[o]));return $(h).pipe(V(o=>{let f={};return o.forEach((y,ne)=>{f[t[ne]]=y}),f}))}return this.getParsedResultForKey(e,t,s)}get(e,t){if(!l(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(q(s=>m(this.getParsedResult(s,e,t)))):m(this.getParsedResult(this.translations[this.currentLang],e,t))}getStreamOnTranslationChange(e,t){if(!l(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return F(P(()=>this.get(e,t)),this.onTranslationChange.pipe(M(s=>{let i=this.getParsedResult(s.translations,e,t);return m(i)})))}stream(e,t){if(!l(e)||!e.length)throw new Error('Parameter "key" required');return F(P(()=>this.get(e,t)),this.onLangChange.pipe(M(s=>{let i=this.getParsedResult(s.translations,e,t);return m(i)})))}instant(e,t){if(!l(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let s=this.getParsedResult(this.translations[this.currentLang],e,t);return c(s)?Array.isArray(e)?e.reduce((i,a)=>(i[a]=a,i),{}):e:s}set(e,t,s=this.currentLang){ie(this.translations[s],e,te(t)?this.compiler.compile(t,s):this.compiler.compileTranslations(t,s)),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(t){return new(t||n)(u(T),u(g),u(L),u(p),u(D),u(U),u(O),u(B),u(_))};static \u0275prov=d({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ve=(()=>{class n{translateService;element;_ref;key;lastParams;currentParams;onLangChangeSub;onDefaultLangChangeSub;onTranslationChangeSub;set translate(e){e&&(this.key=e,this.checkNodes())}set translateParams(e){N(this.currentParams,e)||(this.currentParams=e,this.checkNodes(!0))}constructor(e,t,s){this.translateService=e,this.element=t,this._ref=s,this.onTranslationChangeSub||(this.onTranslationChangeSub=this.translateService.onTranslationChange.subscribe(i=>{i.lang===this.translateService.currentLang&&this.checkNodes(!0,i.translations)})),this.onLangChangeSub||(this.onLangChangeSub=this.translateService.onLangChange.subscribe(i=>{this.checkNodes(!0,i.translations)})),this.onDefaultLangChangeSub||(this.onDefaultLangChangeSub=this.translateService.onDefaultLangChange.subscribe(i=>{this.checkNodes(!0)}))}ngAfterViewChecked(){this.checkNodes()}checkNodes(e=!1,t){let s=this.element.nativeElement.childNodes;s.length||(this.setContent(this.element.nativeElement,this.key),s=this.element.nativeElement.childNodes),s.forEach(i=>{let a=i;if(a.nodeType===3){let h;if(e&&(a.lastKey=null),l(a.lookupKey))h=a.lookupKey;else if(this.key)h=this.key;else{let o=this.getContent(a),f=o.trim();f.length&&(a.lookupKey=f,o!==a.currentValue?(h=f,a.originalContent=o||a.originalContent):a.originalContent&&(h=a.originalContent.trim()))}this.updateValue(h,a,t)}})}updateValue(e,t,s){if(e){if(t.lastKey===e&&this.lastParams===this.currentParams)return;this.lastParams=this.currentParams;let i=a=>{(a!==e||!t.lastKey)&&(t.lastKey=e),t.originalContent||(t.originalContent=this.getContent(t)),t.currentValue=l(a)?a:t.originalContent||e,this.setContent(t,this.key?t.currentValue:t.originalContent.replace(e,t.currentValue)),this._ref.markForCheck()};if(l(s)){let a=this.translateService.getParsedResult(s,e,this.currentParams);c(a)?a.subscribe({next:i}):i(a)}else this.translateService.get(e,this.currentParams).subscribe(i)}}getContent(e){return l(e.textContent)?e.textContent:e.data}setContent(e,t){l(e.textContent)?e.textContent=t:e.data=t}ngOnDestroy(){this.onLangChangeSub&&this.onLangChangeSub.unsubscribe(),this.onDefaultLangChangeSub&&this.onDefaultLangChangeSub.unsubscribe(),this.onTranslationChangeSub&&this.onTranslationChangeSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)(E(G),E(X),E(Z))};static \u0275dir=W({type:n,selectors:[["","translate",""],["","ngx-translate",""]],inputs:{translate:"translate",translateParams:"translateParams"}})}return n})();var Ce=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:g,useClass:Q},e.compiler||{provide:L,useClass:ee},e.parser||{provide:p,useClass:k},e.missingTranslationHandler||{provide:D,useClass:Y},T,{provide:O,useValue:e.isolate},{provide:U,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:_,useValue:e.defaultLanguage},G]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:g,useClass:Q},e.compiler||{provide:L,useClass:ee},e.parser||{provide:p,useClass:k},e.missingTranslationHandler||{provide:D,useClass:Y},{provide:O,useValue:e.isolate},{provide:U,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:_,useValue:e.defaultLanguage},G]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=J({})}return n})();export{g as a,G as b,ve as c,Ce as d};
