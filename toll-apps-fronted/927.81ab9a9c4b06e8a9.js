"use strict";(self.webpackChunkTollAppsFronted=self.webpackChunkTollAppsFronted||[]).push([[927],{2927:(ee,C,r)=>{r.r(C),r.d(C,{EventComponent:()=>g});var c=r(6895),k=r(7579),T=r(4482),M=r(5403),A=r(8421),Z=r(5032);function d(s){return(0,T.e)((e,n)=>{(0,A.Xf)(s).subscribe((0,M.x)(n,()=>n.complete(),Z.Z)),!n.closed&&e.subscribe(n)})}var p=r(433),_=r(9803),I=r(727);class F extends I.w0{constructor(e,n){super()}schedule(e,n=0){return this}}const b={setInterval(s,e,...n){const{delegate:i}=b;return i?.setInterval?i.setInterval(s,e,...n):setInterval(s,e,...n)},clearInterval(s){const{delegate:e}=b;return(e?.clearInterval||clearInterval)(s)},delegate:void 0};var z=r(8737);const D={now:()=>(D.delegate||Date).now(),delegate:void 0};class h{constructor(e,n=h.now){this.schedulerActionCtor=e,this.now=n}schedule(e,n=0,i){return new this.schedulerActionCtor(this,e).schedule(i,n)}}h.now=D.now;const N=new class J extends h{constructor(e,n=h.now){super(e,n),this.actions=[],this._active=!1}flush(e){const{actions:n}=this;if(this._active)return void n.push(e);let i;this._active=!0;do{if(i=e.execute(e.state,e.delay))break}while(e=n.shift());if(this._active=!1,i){for(;e=n.shift();)e.unsubscribe();throw i}}}(class P extends F{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){var i;if(this.closed)return this;this.state=e;const a=this.id,o=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(o,a,n)),this.pending=!0,this.delay=n,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(o,this.id,n),this}requestAsyncId(e,n,i=0){return b.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,n,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return n;null!=n&&b.clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(e,n);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let a,i=!1;try{this.work(e)}catch(o){i=!0,a=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:e,scheduler:n}=this,{actions:i}=n;this.work=this.state=this.scheduler=null,this.pending=!1,(0,z.P)(i,this),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,super.unsubscribe()}}});var j=r(3888),Y=r(9672);const B=(0,j.d)(s=>function(n=null){s(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=n});function H(s){throw new B(s)}var t=r(8256),v=r(529);var y=r(1135);class u{constructor(e){this.http=e,this.baseUrl="https://wildfire.ddns.net:8094",this.currentEvent=new y.X({id:-1,date:new Date,deadline:new Date,participants:[]}),this.applying=new y.X(!1),this.username=new y.X("Vend\xe9g")}currentEventWatch(){return this.currentEvent.asObservable()}currentUsername(){return this.username.asObservable()}setEvent(e){this.currentEvent.next(e)}setUsername(e){this.username.next(e)}login(e){const n=(new v.LE).set("name",e);return this.http.post(`${this.baseUrl}/events/login`,void 0,{params:n})}getCurrentEvent(e){const n=(new v.LE).set("name",e);return this.http.get(`${this.baseUrl}/events/current`,{params:n})}applyForCurrentEvent(e,n="0"){const i=(new v.LE).set("name",e).set("type",n);return this.http.post(`${this.baseUrl}/events/apply`,void 0,{params:i})}deleteApplicationForCurrentEvent(e){const n=(new v.LE).set("name",e);return this.http.delete(`${this.baseUrl}/events`,{params:n})}}u.\u0275fac=function(e){return new(e||u)(t.LFG(v.eN))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});var S=r(5481);function V(s,e){if(1&s&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&s){const n=e.$implicit;t.xp6(1),t.Oqu(n)}}function G(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",1)(1,"p",2),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"p",3),t._uU(5,"Jelentkeztek:"),t.qZA(),t.TgZ(6,"div",4),t.YNc(7,V,2,1,"p",5),t.qZA(),t.TgZ(8,"button",6),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.applyBtnClicked())}),t._uU(9),t.qZA(),t.TgZ(10,"p",7),t._uU(11),t.ALo(12,"date"),t.qZA()()}if(2&s){const n=t.oxw();t.xp6(2),t.hij("Tollas - ",t.xi3(3,6,n._currentEvent.date,"y, MMMM d")," - Vas\xe1rnap"),t.xp6(5),t.Q6J("ngForOf",n._currentEvent.participants),t.xp6(1),t.Q6J("disabled",n.deadLined)("ngClass",n.applied?"btn-remove":"btn-add"),t.xp6(1),t.Oqu(n.applied?"Jelentkez\xe9s t\xf6rl\xe9se":"Jelentkez\xe9s"),t.xp6(2),t.hij("Hat\xe1rid\u0151: ",n.deadLined?"Lej\xe1rt":t.xi3(12,9,n._currentEvent.deadline,"y, MMMM d, hh:mm")," - P\xe9ntek hajnal")}}class f{constructor(e,n){this.eventService=e,this.alertService=n,this.subsDestroy=new k.x,this._currentEvent={id:-1,date:new Date,deadline:new Date,participants:[]},this.deadLined=!1,this.applied=!1,this.username="",e.currentUsername().pipe(d(this.subsDestroy)).subscribe(i=>{this.username=i}),e.currentEventWatch().pipe(d(this.subsDestroy)).subscribe(i=>{this._currentEvent=i,this.checkDeadLine(),this.checkApplication()})}ngOnInit(){this.getCurrentEventData()}checkDeadLine(){this.deadLined=new Date(this._currentEvent.deadline)<=new Date(Date.now()),this.deadLined=!1}checkApplication(){let e=!1;this._currentEvent.participants.forEach(n=>{n.includes(this.username)&&(e=!0)}),this.applied=e}getCurrentEventData(){this.eventService.getCurrentEvent(this.username).pipe(function X(s,e){const{first:n,each:i,with:a=H,scheduler:o=e??N,meta:W=null}=function L(s){return s instanceof Date&&!isNaN(s)}(s)?{first:s}:"number"==typeof s?{each:s}:s;if(null==n&&null==i)throw new TypeError("No timeout provided.");return(0,T.e)((R,m)=>{let O,l,x=null,E=0;const U=w=>{l=(0,Y.f)(m,o,()=>{try{O.unsubscribe(),(0,A.Xf)(a({meta:W,lastValue:x,seen:E})).subscribe(m)}catch(q){m.error(q)}},w)};O=R.subscribe((0,M.x)(m,w=>{l?.unsubscribe(),E++,m.next(x=w),i>0&&U(i)},void 0,void 0,()=>{l?.closed||l?.unsubscribe(),x=null})),!E&&U(null!=n?"number"==typeof n?n:+n-o.now():i)})}(2e3)).pipe(d(this.subsDestroy)).subscribe({next:e=>{this.eventService.setEvent(e)},error:e=>{this.alertService.addMessage(e?.error?.errorMessage?e.error.errorMessage:"A szerver nem el\xe9rhet\u0151, k\xe9rlek prob\xe1lkozz k\xe9s\u0151bb!")}})}applyBtnClicked(){this.applied?window.confirm("Biztosan t\xf6rl\xf6d a jelentkez\xe9sed?")&&this.eventService.deleteApplicationForCurrentEvent(this.username).pipe(d(this.subsDestroy)).subscribe({next:n=>{this.eventService.setEvent(n)},error:n=>{this.alertService.addMessage(n.errorMessage)}}):this.eventService.applying.next(!0)}ngOnDestroy(){this.subsDestroy.next(""),this.subsDestroy.complete()}}function $(s,e){if(1&s&&(t.TgZ(0,"p",3),t._uU(1),t.qZA()),2&s){const n=t.oxw();t.xp6(1),t.hij("\xdcdv ",n.username,"")}}function K(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.applying=!1)}),t.TgZ(1,"div",5),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(2,"p",6),t._uU(3,"H\xe1nyan fogtok j\xf6nni?"),t.qZA(),t.TgZ(4,"div",7)(5,"input",8),t.NdJ("ngModelChange",function(a){t.CHM(n);const o=t.oxw();return t.KtG(o.applicationType=a)}),t.qZA(),t.TgZ(6,"p",9),t._uU(7),t.qZA()(),t.TgZ(8,"button",10),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.saveApplication())}),t._uU(9,"Ment\xe9s"),t.qZA()()()}if(2&s){const n=t.oxw();t.xp6(5),t.Q6J("ngModel",n.applicationType),t.xp6(2),t.Oqu(0===n.applicationType?"Egyed\xfcl":1===n.applicationType?"Te + 1 F\u0151":"Te + 2 F\u0151")}}f.\u0275fac=function(e){return new(e||f)(t.Y36(u),t.Y36(S.c))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-card-event"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","event-container",4,"ngIf"],[1,"event-container"],[1,"event-title"],[1,"p-title"],[1,"event-participants"],["class","event-participant",4,"ngFor","ngForOf"],[1,"btn",3,"disabled","ngClass","click"],[1,"deadline"],[1,"event-participant"]],template:function(e,n){1&e&&t.YNc(0,G,13,12,"div",0),2&e&&t.Q6J("ngIf",-1!==n._currentEvent.id)},dependencies:[c.ez,c.mk,c.sg,c.O5,c.uU],styles:[".event-container[_ngcontent-%COMP%]{max-width:500px;background:rgba(255,255,255,.25);box-shadow:0 8px 32px #1f26875e;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border-radius:10px;border:1px solid rgba(255,255,255,.18);padding:2rem;display:flex;flex-direction:column;align-items:center;gap:2rem}.event-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:600;text-align:center;word-break:break-word}.event-participants[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;align-items:center;width:100%}.event-participant[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:400;text-align:center;padding:3px;background:whitesmoke;border-radius:5px;width:100%}.deadline[_ngcontent-%COMP%]{color:red}.p-title[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:600;width:100%;text-align:center}"]});class g{constructor(e,n){this.eventService=e,this.alertService=n,this.username="Vend\xe9g",this.subsDestroy=new k.x,this.applying=!1,this.applicationType=0}ngOnInit(){this.getUserName(),this.eventService.applying.asObservable().pipe(d(this.subsDestroy)).subscribe(e=>{this.applying=e}),this.eventService.currentEventWatch().pipe(d(this.subsDestroy)).subscribe(e=>{this.currentEvent=e})}getUserName(){const e=window.prompt("Mi a felhaszn\xe1l\xf3 neved?");null==e?this.getUserName():(this.username=e,this.eventService.setUsername(e))}saveApplication(){let e="0";switch(this.applicationType){case 1:e="1";break;case 2:e="2"}this.eventService.applyForCurrentEvent(this.username,e).pipe(d(this.subsDestroy)).subscribe({next:n=>{this.eventService.setEvent(n),this.applying=!1},error:n=>{this.alertService.addMessage(n.errorMessage)}})}ngOnDestroy(){this.subsDestroy.next(""),this.subsDestroy.complete()}}g.\u0275fac=function(e){return new(e||g)(t.Y36(u),t.Y36(S.c))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-event"]],standalone:!0,features:[t.jDz],decls:5,vars:2,consts:[[1,"background"],["class","username",4,"ngIf"],["class","modal",3,"click",4,"ngIf"],[1,"username"],[1,"modal",3,"click"],[1,"applying",3,"click"],[1,"applying-title"],[1,"applying-input"],["type","range","id","vol","name","vol","min","0","max","2",2,"width","100%",3,"ngModel","ngModelChange"],[2,"text-align","center"],[1,"btn","btn-blue",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,$,2,1,"p",1),t._UZ(2,"app-card-event"),t.YNc(3,K,10,2,"div",2),t.qZA(),t._UZ(4,"app-alert")),2&e&&(t.xp6(1),t.Q6J("ngIf",-1!==(null==n.currentEvent?null:n.currentEvent.id)),t.xp6(2),t.Q6J("ngIf",n.applying))},dependencies:[c.ez,c.O5,p.u5,p.Fj,p.eT,p.JJ,p.On,_.w,f],styles:[".background[_ngcontent-%COMP%]{background:linear-gradient(249deg,#44ff00,#00a0ff);background-size:360% 360%;animation:_ngcontent-%COMP%_gradient-animation 40s ease infinite;width:100vw;height:100vh;margin:0;padding:5rem 2rem;position:absolute;top:0;left:0;display:flex;flex-direction:column;gap:3rem}.username[_ngcontent-%COMP%]{font-size:3rem;font-weight:600}@keyframes _ngcontent-%COMP%_gradient-animation{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}.applying[_ngcontent-%COMP%]{max-width:500px;background:whitesmoke;padding:1.5rem;border-radius:10px;display:flex;flex-direction:column;gap:1.5rem}.applying-title[_ngcontent-%COMP%]{text-align:center;font-size:1.4rem;font-weight:700}.modal[_ngcontent-%COMP%]{position:absolute;top:0;left:0;background:rgba(0,0,0,.3);width:100vw;height:100vh;z-index:20;display:flex;justify-content:center;align-items:center}"]})}}]);