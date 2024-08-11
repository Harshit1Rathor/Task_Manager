import './polyfills.server.mjs';
import{A as ce,B as we,C as Ee,D as o,E as a,F as V,G as R,H as h,I as y,J as Fe,K as l,L as S,M as Se,N as Z,O as Y,P as J,Q as X,R as g,S as ke,U as xe,Y as Ie,_ as Oe,a as Ce,aa as Pe,b as Ve,ba as U,c as be,ca as b,d as De,da as Te,e as $,ea as he,f as z,g as ae,ga as Ne,h as A,ha as Re,i as p,ia as Ue,j as le,ja as Ge,k as C,l as Me,m as w,ma as je,n as E,o as Ae,p as m,q as ue,r as q,s as u,sa as Be,t as c,u as de,v as T,w as M,x as F,y as v,z as N}from"./chunk-CHIEIQMG.mjs";import{a as f,b as _}from"./chunk-5XUXGTUW.mjs";var He=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["app-header"]],standalone:!0,features:[g],decls:4,vars:0,template:function(n,r){n&1&&(o(0,"header")(1,"div")(2,"h1"),l(3,"EasyTask"),a()()())},styles:["header[_ngcontent-%COMP%]{height:30vh;display:flex;justify-content:center;text-align:center}h1[_ngcontent-%COMP%]{margin:0;margin-top:5rem;font-size:4.5rem;background:linear-gradient(to right,#ee9caa 50%,#5c80e3 50%);-webkit-text-fill-color:transparent;background-clip:text;-webkit-background-clip:text}div[_ngcontent-%COMP%]{width:60%;background-color:#181818;border-bottom-left-radius:15px;border-bottom-right-radius:15px}"]})}return t})();var Le=(()=>{class t{user;selected;select=new m;get imagePath(){return"../../assets/"+this.user.avatar}onSelectUser(){this.select.emit(this.user.id)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["app-user"]],inputs:{user:"user",selected:"selected"},outputs:{select:"select"},standalone:!0,features:[g],decls:5,vars:5,consts:[[3,"click"],[3,"src","alt"]],template:function(n,r){n&1&&(o(0,"div")(1,"button",0),h("click",function(){return r.onSelectUser()}),V(2,"img",1),o(3,"span"),l(4),a()()()),n&2&&(u(),N("active",r.selected),u(),v("src",r.imagePath,q)("alt",r.user.name),u(2),S(r.user.name))},styles:["button[_ngcontent-%COMP%]{background-color:#181818;border:none;width:11rem;border-radius:4px;color:#fff;padding:.7rem 15%;font-size:1.1rem;cursor:pointer;display:flex}button[_ngcontent-%COMP%]:hover, .active[_ngcontent-%COMP%]{background-color:#373737}div[_ngcontent-%COMP%]{margin-top:1rem}img[_ngcontent-%COMP%]{height:2.5rem}span[_ngcontent-%COMP%]{padding-left:1rem;font-size:1.2rem;padding-top:.7rem}"]})}return t})();var We=[{id:"u1",name:"Raju",avatar:"user1.png"},{id:"u2",name:"Chandu",avatar:"user2.png"},{id:"u3",name:"Rakesh",avatar:"user3.png"},{id:"u4",name:"Mat",avatar:"user4.png"},{id:"u5",name:"Carl",avatar:"user5.png"}];var $e=(()=>{class t{task;complete=new m;onCompleteTask(){this.complete.emit(this.task.id)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["app-task"]],inputs:{task:"task"},outputs:{complete:"complete"},standalone:!0,features:[g],decls:12,vars:3,consts:[[1,"summary"],[1,"actions"],[3,"click"]],template:function(n,r){n&1&&(o(0,"article")(1,"p"),l(2,"_____________________________________________________"),a(),o(3,"h2"),l(4),a(),o(5,"time"),l(6),a(),o(7,"p",0),l(8),a(),o(9,"p",1)(10,"button",2),h("click",function(){return r.onCompleteTask()}),l(11,"Complete"),a()()()),n&2&&(u(4),S(r.task.title),u(2),S(r.task.dueDate),u(2),S(r.task.summary))},styles:["article[_ngcontent-%COMP%]{color:#fff}.actions[_ngcontent-%COMP%]{display:flex;justify-content:right;margin-right:2rem;margin-top:2rem}button[_ngcontent-%COMP%]{border:none;padding:.7rem 1rem;border-radius:3px;font-size:1rem;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#c7c7c7}.summary[_ngcontent-%COMP%]{width:90%}"]})}return t})();var Qe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(c(de),c(ue))},e.\u0275dir=C({type:e});let t=e;return t})(),Mt=(()=>{let e=class e extends Qe{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=Ae(e)))(s||e)}})(),e.\u0275dir=C({type:e,features:[M]});let t=e;return t})(),et=new A("");var At={provide:et,useExisting:z(()=>se),multi:!0};function wt(){let t=he()?he().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Et=new A(""),se=(()=>{let e=class e extends Qe{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!wt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(c(de),c(ue),c(Et,8))},e.\u0275dir=C({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&h("input",function(D){return s._handleInput(D.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(D){return s._compositionEnd(D.target.value)})},features:[X([At]),M]});let t=e;return t})();var tt=new A(""),nt=new A("");function it(t){return t!=null}function rt(t){return xe(t)?Ve(t):t}function st(t){let e={};return t.forEach(i=>{e=i!=null?f(f({},e),i):e}),Object.keys(e).length===0?null:e}function ot(t,e){return e.map(i=>i(t))}function Ft(t){return!t.validate}function at(t){return t.map(e=>Ft(e)?e:i=>e.validate(i))}function St(t){if(!t)return null;let e=t.filter(it);return e.length==0?null:function(i){return st(ot(i,e))}}function pe(t){return t!=null?St(at(t)):null}function kt(t){if(!t)return null;let e=t.filter(it);return e.length==0?null:function(i){let n=ot(i,e).map(rt);return De(n).pipe(be(st))}}function me(t){return t!=null?kt(at(t)):null}function ze(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function xt(t){return t._rawValidators}function It(t){return t._rawAsyncValidators}function fe(t){return t?Array.isArray(t)?t:[t]:[]}function Q(t,e){return Array.isArray(t)?t.includes(e):t===e}function qe(t,e){let i=fe(e);return fe(t).forEach(r=>{Q(i,r)||i.push(r)}),i}function Ze(t,e){return fe(e).filter(i=>!Q(t,i))}var ee=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=pe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=me(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},O=class extends ee{get formDirective(){return null}get path(){return null}},W=class extends ee{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},te=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Bn=_(f({},Ot),{"[class.ng-submitted]":"isSubmitted"}),lt=(()=>{let e=class e extends te{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(c(W,2))},e.\u0275dir=C({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&N("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[M]});let t=e;return t})(),ut=(()=>{let e=class e extends te{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(c(O,10))},e.\u0275dir=C({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&N("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[M]});let t=e;return t})();var G="VALID",K="INVALID",x="PENDING",j="DISABLED",P=class{},ne=class extends P{constructor(e,i){super(),this.value=e,this.source=i}},H=class extends P{constructor(e,i){super(),this.pristine=e,this.source=i}},L=class extends P{constructor(e,i){super(),this.touched=e,this.source=i}},I=class extends P{constructor(e,i){super(),this.status=e,this.source=i}};function dt(t){return(oe(t)?t.validators:t)||null}function Pt(t){return Array.isArray(t)?pe(t):t||null}function ct(t,e){return(oe(e)?e.asyncValidators:t)||null}function Tt(t){return Array.isArray(t)?me(t):t||null}function oe(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Nt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new $(1e3,"");if(!n[i])throw new $(1001,"")}function Rt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new $(1002,"")})}var ie=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=U(()=>this.statusReactive()),this.statusReactive=T(void 0),this._pristine=U(()=>this.pristineReactive()),this.pristineReactive=T(!0),this._touched=U(()=>this.touchedReactive()),this.touchedReactive=T(!1),this._events=new Ce,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return b(this.statusReactive)}set status(e){b(()=>this.statusReactive.set(e))}get valid(){return this.status===G}get invalid(){return this.status===K}get pending(){return this.status==x}get disabled(){return this.status===j}get enabled(){return this.status!==j}get pristine(){return b(this.pristineReactive)}set pristine(e){b(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return b(this.touchedReactive)}set touched(e){b(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(qe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ze(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ze(e,this._rawAsyncValidators))}hasValidator(e){return Q(this._rawValidators,e)}hasAsyncValidator(e){return Q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(_(f({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new L(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new L(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(_(f({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new H(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new H(!0,n))}markAsPending(e={}){this.status=x;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new I(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(_(f({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(r=>{r.disable(_(f({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,n)),this._events.next(new I(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(f({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=G,this._forEachChild(n=>{n.enable(_(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(f({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===G||this.status===x)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,i)),this._events.next(new I(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(_(f({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:G}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=rt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new I(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new m,this.statusChanges=new m}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?K:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(K)?K:G}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new H(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new L(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){oe(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Pt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Tt(this._rawAsyncValidators)}},re=class extends ie{constructor(e,i,n){super(dt(i),ct(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Rt(this,!0,e),Object.keys(e).forEach(n=>{Nt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,s)=>{n=i(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ge=new A("CallSetDisabledState",{providedIn:"root",factory:()=>_e}),_e="always";function Ut(t,e){return[...e.path,t]}function ht(t,e,i=_e){ft(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),jt(t,e),Ht(t,e),Bt(t,e),Gt(t,e)}function Ye(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Gt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ft(t,e){let i=xt(t);e.validator!==null?t.setValidators(ze(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=It(t);e.asyncValidator!==null?t.setAsyncValidators(ze(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ye(e._rawValidators,r),Ye(e._rawAsyncValidators,r)}function jt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&pt(t,e)})}function Bt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&pt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function pt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ht(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Lt(t,e){t==null,ft(t,e)}function Wt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function $t(t){return Object.getPrototypeOf(t.constructor)===Mt}function zt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function qt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===se?i=s:$t(s)?n=s:r=s}),r||n||i||null}var Zt={provide:O,useExisting:z(()=>ve)},B=Promise.resolve(),ve=(()=>{let e=class e extends O{get submitted(){return b(this.submittedReactive)}constructor(n,r,s){super(),this.callSetDisabledState=s,this._submitted=U(()=>this.submittedReactive()),this.submittedReactive=T(!1),this._directives=new Set,this.ngSubmit=new m,this.form=new re({},pe(n),me(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){B.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),ht(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){B.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){B.then(()=>{let r=this._findContainer(n.path),s=new re({});Lt(s,n),r.registerControl(n.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){B.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){B.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submittedReactive.set(!0),zt(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(c(tt,10),c(nt,10),c(ge,8))},e.\u0275dir=C({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&h("submit",function(D){return s.onSubmit(D)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[X([Zt]),M]});let t=e;return t})();function Je(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Xe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Yt=class extends ie{constructor(e=null,i,n){super(dt(i),ct(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oe(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Xe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Je(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Je(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Xe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Jt={provide:W,useExisting:z(()=>ye)},Ke=Promise.resolve(),ye=(()=>{let e=class e extends W{constructor(n,r,s,d,D,Dt){super(),this._changeDetectorRef=D,this.callSetDisabledState=Dt,this.control=new Yt,this._registered=!1,this.name="",this.update=new m,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=qt(this,d)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Wt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ht(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Ke.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Pe(r);Ke.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Ut(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(c(O,9),c(tt,10),c(nt,10),c(et,10),c(Oe,8),c(ge,8))},e.\u0275dir=C({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[X([Jt]),M,Me]});let t=e;return t})(),mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=C({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=le({type:e}),e.\u0275inj=ae({});let t=e;return t})();var gt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ge,useValue:n.callSetDisabledState??_e}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=le({type:e}),e.\u0275inj=ae({imports:[Xt]});let t=e;return t})();var _t=(()=>{class t{cancel=new m;add=new m;onCancel(){this.cancel.emit()}enteredTitle="";enteredSummary="";enteredDate="";onSubmit(){this.add.emit({title:this.enteredTitle,summary:this.enteredSummary,date:this.enteredDate})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["app-new-task"]],outputs:{cancel:"cancel",add:"add"},standalone:!0,features:[g],decls:22,vars:3,consts:[["id","backdrop",1,"backdrop",3,"click"],["open",""],[3,"ngSubmit"],["for","title"],["type","text","id","title","name","title",3,"ngModelChange","ngModel"],["for","summary"],["id","summary","rows","5","name","summary",3,"ngModelChange","ngModel"],["for","due-date"],["type","date","id","due-date","name","due-date",3,"ngModelChange","ngModel"],[1,"actions"],["type","button",3,"click"],["type","submit"]],template:function(n,r){n&1&&(o(0,"div",0),h("click",function(){return r.onCancel()}),a(),o(1,"dialog",1)(2,"h2"),l(3,"Add Task"),a(),o(4,"form",2),h("ngSubmit",function(){return r.onSubmit()}),o(5,"p")(6,"label",3),l(7,"Title"),a(),o(8,"input",4),J("ngModelChange",function(d){return Y(r.enteredTitle,d)||(r.enteredTitle=d),d}),a()(),o(9,"p")(10,"label",5),l(11,"Summary"),a(),o(12,"textarea",6),J("ngModelChange",function(d){return Y(r.enteredSummary,d)||(r.enteredSummary=d),d}),a()(),o(13,"p")(14,"label",7),l(15,"Due Date"),a(),o(16,"input",8),J("ngModelChange",function(d){return Y(r.enteredDate,d)||(r.enteredDate=d),d}),a()(),o(17,"p",9)(18,"button",10),h("click",function(){return r.onCancel()}),l(19,"Cancel"),a(),o(20,"button",11),l(21,"Create"),a()()()()),n&2&&(u(8),Z("ngModel",r.enteredTitle),u(4),Z("ngModel",r.enteredSummary),u(4),Z("ngModel",r.enteredDate))},dependencies:[gt,mt,se,lt,ut,ye,ve],styles:[".backdrop[_ngcontent-%COMP%]{background-color:#000000e6;position:fixed;top:0;left:0;width:100%;height:100vh}dialog[_ngcontent-%COMP%]{width:90%;max-width:30rem;background-color:#131313;border-radius:6px;border:none;box-shadow:1px 1px 20px #fffc;overflow:hidden;padding:1rem;top:5rem}h2[_ngcontent-%COMP%]{margin:0;color:#fff}label[_ngcontent-%COMP%]{display:block;font-weight:700;font-size:.85rem;color:#fff}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;font:inherit;padding:.15rem .25rem;border-radius:4px;border:1px solid #ffffff;background-color:#fff}.actions[_ngcontent-%COMP%]{margin:1rem 0 0;display:flex;justify-content:flex-end;gap:.25rem}button[_ngcontent-%COMP%]{font:inherit;cursor:pointer;border:none;padding:.35rem 1.25rem;border-radius:4px;background-color:transparent}button[type=button][_ngcontent-%COMP%], button[type=button][_ngcontent-%COMP%]:hover, button[type=button][_ngcontent-%COMP%]:active{color:#fff}button[type=submit][_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 3px #0000004d;transition:all .3s ease}button[type=submit][_ngcontent-%COMP%]:hover, button[type=submit][_ngcontent-%COMP%]:active{background-color:#c3c3c3;box-shadow:0 1px 6px #0000004d}@media (min-width: 768px){dialog[_ngcontent-%COMP%]{padding:2rem}}"]})}return t})();var Qt=(t,e)=>e.id;function en(t,e){if(t&1){let i=R();o(0,"app-new-task",4),h("cancel",function(){w(i);let r=y();return E(r.onCancelAddTask())})("add",function(r){w(i);let s=y();return E(s.onAddTask(r))}),a()}}function tn(t,e){if(t&1){let i=R();o(0,"li")(1,"app-task",5),h("complete",function(r){w(i);let s=y(2);return E(s.onCompleteTask(r))}),a()()}if(t&2){let i=y().$implicit;u(),v("task",i)}}function nn(t,e){if(t&1&&F(0,tn,2,1,"li"),t&2){let i=e.$implicit,n=y();ce(i.userId===n.id?0:-1)}}var vt=(()=>{class t{name;avatar;id;isAddingTask=!1;get avatarLink(){return"../../assets/"+this.avatar}constructor(){let i=localStorage.getItem("tasks");i&&(this.tasks=JSON.parse(i))}tasks=[{id:"t1",userId:"u1",title:"Master Angular",summary:"Learn all the basic and advanced features of Angular & how to apply them.",dueDate:"2025-12-31"},{id:"t2",userId:"u3",title:"Build first prototype",summary:"Learn all the basic and advanced features of Angular & how to apply them.",dueDate:"2024-05-31"},{id:"t3",userId:"u3",title:"Prepare issue template",summary:"Learn all the basic and advanced features of Angular & how to apply them.",dueDate:"2024-06-15"}];onCompleteTask(i){this.tasks=this.tasks.filter(n=>n.id!==i),this.saveTasks()}onStartAddingTask(){this.isAddingTask=!0}onCancelAddTask(){this.isAddingTask=!1}onAddTask(i){this.tasks.unshift({id:new Date().getTime().toString(),userId:this.id,title:i.title,summary:i.summary,dueDate:i.date}),this.isAddingTask=!1,this.saveTasks()}saveTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["app-tasks"]],inputs:{name:"name",avatar:"avatar",id:"id"},standalone:!0,features:[g],decls:13,vars:4,consts:[["id","tasks"],[3,"src","alt"],[1,"spacer"],[3,"click"],[3,"cancel","add"],[3,"complete","task"]],template:function(n,r){n&1&&(F(0,en,1,0,"app-new-task"),o(1,"section",0)(2,"header"),V(3,"img",1),o(4,"h2"),l(5),a(),V(6,"div",2),o(7,"menu")(8,"button",3),h("click",function(){return r.onStartAddingTask()}),l(9,"Add Task"),a()()(),o(10,"ul"),we(11,nn,1,1,null,null,Qt),a()()),n&2&&(ce(r.isAddingTask?0:-1),u(3),v("src",r.avatarLink,q)("alt",r.name),u(2),Se("",r.name,"'s Tasks"),u(6),Ee(r.tasks))},dependencies:[$e,_t],styles:["img[_ngcontent-%COMP%]{height:3rem;width:3rem}header[_ngcontent-%COMP%]{display:flex;color:#fff;justify-content:center;align-items:center;text-align:center;width:30rem;padding-top:1rem}.spacer[_ngcontent-%COMP%]{width:3rem}h2[_ngcontent-%COMP%]{padding-left:5%}button[_ngcontent-%COMP%]{border:none;padding:.5rem 1rem;border-radius:2px;font-size:1rem;cursor:pointer;background-color:#fff}button[_ngcontent-%COMP%]:hover{background-color:#c7c7c7}ul[_ngcontent-%COMP%]{list-style:none}section[_ngcontent-%COMP%]{margin-top:1rem;background-color:#181818;border-radius:4px;padding-bottom:1rem}"]})}return t})();function rn(t,e){if(t&1){let i=R();o(0,"li")(1,"app-user",4),h("select",function(r){w(i);let s=y();return E(s.onSelectUser(r))}),a()()}if(t&2){let i=e.$implicit,n=y();u(),v("user",i)("selected",i.id===n.selectedUserId)}}function sn(t,e){if(t&1&&V(0,"app-tasks",5),t&2){let i=y();v("name",i.selectedUser.name)("id",i.selectedUser.id)("avatar",i.selectedUser.avatar)}}function on(t,e){t&1&&(o(0,"p"),l(1,"Select a User to see their tasks."),a())}var yt=(()=>{class t{title="web";users=We;selectedUserId;get selectedUser(){return this.users.find(i=>i.id===this.selectedUserId)}onSelectUser(i){this.selectedUserId=i}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[g],decls:7,vars:3,consts:[["fallback",""],["id","users"],[4,"ngFor","ngForOf"],[3,"name","id","avatar",4,"ngIf","ngIfElse"],[3,"select","user","selected"],[3,"name","id","avatar"]],template:function(n,r){if(n&1&&(V(0,"app-header"),o(1,"main")(2,"ul",1),F(3,rn,2,2,"li",2),a(),F(4,sn,1,3,"app-tasks",3)(5,on,2,0,"ng-template",null,0,ke),a()),n&2){let s=Fe(6);u(3),v("ngForOf",r.users),u(),v("ngIf",r.selectedUser)("ngIfElse",s)}},dependencies:[He,Le,vt,Ne,Re],styles:["ul[_ngcontent-%COMP%]{list-style:none}main[_ngcontent-%COMP%]{display:flex}ul[_ngcontent-%COMP%]{margin-top:0;margin-left:20%}app-tasks[_ngcontent-%COMP%]{margin-left:2%}p[_ngcontent-%COMP%]{font-size:1.5rem;margin-left:2rem}"]})}return t})();var Ct=[];var Vt={providers:[Ie({eventCoalescing:!0}),Be(Ct),Ge()]};var an={providers:[je()]},bt=Te(Vt,an);var ln=()=>Ue(yt,bt),_i=ln;export{_i as a};