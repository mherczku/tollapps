"use strict";(self.webpackChunkTollAppsFronted=self.webpackChunkTollAppsFronted||[]).push([[472],{9472:($,E,r)=>{r.r(E),r.d(E,{EventComponent:()=>g});var p=r(6895),f=r(7579),w=r(4482),L=r(5403),k=r(8421),A=r(5032);function d(i){return(0,w.e)((n,t)=>{(0,k.Xf)(i).subscribe((0,L.x)(t,()=>t.complete(),A.Z)),!t.closed&&n.subscribe(t)})}var u=r(433),S=r(1566),_=r(1165),P=r(3888),z=r(9672);const j=(0,P.d)(i=>function(t=null){i(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=t});function J(i){throw new j(i)}var e=r(1571),U=r(9646),B=r(1135);function I(i,n){}let T=(()=>{class i{constructor(t){this.viewContainerRef=t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.s_b))},i.\u0275dir=e.lG2({type:i,selectors:[["","host",""]]}),i})(),R=(()=>{class i{constructor(t,o){this.cdr=t,this.renderer2=o,this.display$=(0,U.of)({component:void 0,visible:!1}),this.display_={visible:!1}}setCloseCallback(t){this.closeCallback=t}setDisplay(t){this.display$=t,this.display$.subscribe(o=>{this.display_=o,this.cdr.detectChanges(),o.visible&&this.open(o.component)})}open(t){if(void 0!==t){const o=this.host.viewContainerRef;o.clear(),o.createComponent(t),this.listener=this.renderer2.listen("document","keyup.escape",s=>{this.escapePressed()})}}close(){this.closeCallback?.()&&(this.listener?.(),this.host.viewContainerRef.clear())}escapePressed(){this.display_.visible&&this.close()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(e.Qsj))},i.\u0275cmp=e.Xpm({type:i,selectors:[["lib-ngx-modalx"]],viewQuery:function(t,o){if(1&t&&e.Gf(T,7),2&t){let s;e.iGM(s=e.CRH())&&(o.host=s.first)}},decls:3,vars:1,consts:[["id","ngx-modal-host-container",1,"host-container",3,"ngClass","click"],[1,"content-container",3,"click"],["host",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.close()}),e.TgZ(1,"div",1),e.NdJ("click",function(l){return l.stopPropagation()}),e.YNc(2,I,0,0,"ng-template",2),e.qZA()()),2&t&&e.Q6J("ngClass",o.display_.visible?"host-visible":"hidden-host")},dependencies:[p.mk,T],styles:[".host-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.31);width:100vw;height:100vh;position:absolute;top:0;z-index:1000;display:flex;justify-content:center;align-items:center}.content-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;max-width:80%;width:-moz-fit-content;width:fit-content;background:whitesmoke;margin:1rem;border:1px solid black;border-radius:5px;z-index:1001}.hidden-host[_ngcontent-%COMP%]{visibility:hidden}.host-visible[_ngcontent-%COMP%]{visibility:visible;opacity:0;animation:_ngcontent-%COMP%_animateOpacity;animation-iteration-count:1;animation-fill-mode:forwards;animation-duration:.3s;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_animateOpacity{0%{opacity:0}to{opacity:1}}"]}),i})(),D=(()=>{class i{constructor(t,o,s){this.componentFactoryResolver=t,this.appRef=o,this.injector=s,this.display=new B.X({visible:!1}),this.escapeCloses=!0;const l=this.componentFactoryResolver.resolveComponentFactory(R).create(this.injector);this.appRef.attachView(l.hostView),l.instance.setCloseCallback(()=>this.close()),l.instance.setDisplay(this.watch()),document.body.appendChild(l.hostView.rootNodes[0])}watch(){return this.display.asObservable()}getExtra(){return this.display.getValue().extra}open(t,o=!0,s){this.escapeCloses=o,this.display.next({visible:!0,component:t,extra:s})}close(){return!!this.escapeCloses&&(this.display.next({visible:!1}),!0)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e._Vd),e.LFG(e.z2F),e.LFG(e.zs3))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Z=r(8468),x=r(6338),O=r(5481);class h{constructor(n,t,o,s,l){this.cdr=n,this.modal=t,this.router=o,this.eventService=s,this.alertService=l,this.applicationType=0,this.username="Vend\xe9g",this.subsDestroy=new f.x,this.eventService.currentUsername().pipe(d(this.subsDestroy)).subscribe(m=>this.username=m)}saveApplication(){let n="0";switch(this.applicationType){case 1:n="1";break;case 2:n="2"}this.eventService.applyForCurrentEvent(this.username,n).pipe(d(this.subsDestroy)).subscribe({next:t=>{this.eventService.setEvent(t),this.modal.close()},error:t=>{this.alertService.addMessage(t.errorMessage)}})}ngOnDestroy(){this.subsDestroy.next(""),this.subsDestroy.complete()}}h.\u0275fac=function(n){return new(n||h)(e.Y36(e.sBO),e.Y36(D),e.Y36(Z.F0),e.Y36(x.P),e.Y36(O.c))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-card-apply"]],standalone:!0,features:[e.jDz],decls:9,vars:2,consts:[[1,"applying",3,"click"],[1,"applying-title"],[1,"applying-input"],["type","range","id","vol","name","vol","min","0","max","2",2,"width","100%",3,"ngModel","ngModelChange"],[1,"tx-center","tx-base"],[1,"btn","btn-blue","tx-white",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.NdJ("click",function(s){return s.stopPropagation()}),e.TgZ(1,"p",1),e._uU(2,"H\xe1nyan fogtok j\xf6nni?"),e.qZA(),e.TgZ(3,"div",2)(4,"input",3),e.NdJ("ngModelChange",function(s){return t.applicationType=s}),e.qZA(),e.TgZ(5,"p",4),e._uU(6),e.qZA()(),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.saveApplication()}),e._uU(8,"Ment\xe9s"),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("ngModel",t.applicationType),e.xp6(2),e.Oqu(0===t.applicationType?"Egyed\xfcl":1===t.applicationType?"Te + 1 F\u0151":"Te + 2 F\u0151"))},dependencies:[p.ez,u.u5,u.Fj,u.eT,u.JJ,u.On],styles:[".applying[_ngcontent-%COMP%]{max-width:500px;background:whitesmoke;padding:1.5rem;border-radius:10px;display:flex;flex-direction:column;gap:1.5rem}.applying-title[_ngcontent-%COMP%]{text-align:center;font-size:1.4rem;font-weight:700}"],changeDetection:0});var a=r(7340);function V(i,n){if(1&i&&(e.TgZ(0,"div",9),e.O4$(),e.TgZ(1,"svg",10),e._UZ(2,"path",11)(3,"path",12)(4,"path",13)(5,"path",14)(6,"path",15)(7,"path",16),e.qZA(),e.kcU(),e.TgZ(8,"p",17),e._uU(9),e.qZA()()),2&i){const t=n.$implicit;e.xp6(9),e.Oqu(t)}}function H(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"p",3),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"p",4),e._uU(5,"Jelentkeztek:"),e.qZA(),e.TgZ(6,"div",5),e.YNc(7,V,10,1,"div",6),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.applyBtnClicked())}),e._uU(9),e.qZA(),e.TgZ(10,"p",8),e._uU(11),e.ALo(12,"date"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.hij("Tollas - ",e.xi3(3,7,t._currentEvent.date,"y, MMMM d")," - Vas\xe1rnap"),e.xp6(4),e.Q6J("@listAnimation",t._currentEvent.participants.length),e.xp6(1),e.Q6J("ngForOf",t._currentEvent.participants),e.xp6(1),e.Q6J("disabled",t.deadLined)("ngClass",t.applied?"btn-remove":"btn-add"),e.xp6(1),e.Oqu(t.applied?"Jelentkez\xe9s t\xf6rl\xe9se":"Jelentkez\xe9s"),e.xp6(2),e.hij("Hat\xe1rid\u0151: ",t.deadLined?"Lej\xe1rt":e.xi3(12,10,t._currentEvent.deadline,"y, MMMM d, hh:mm")," - P\xe9ntek reggel")}}class v{constructor(n,t,o){this.eventService=n,this.alertService=t,this.modalService=o,this.subsDestroy=new f.x,this._currentEvent={id:-1,date:new Date,deadline:new Date,participants:[]},this.deadLined=!1,this.applied=!1,this.username="",n.currentUsername().pipe(d(this.subsDestroy)).subscribe(s=>{this.username=s}),n.currentEventWatch().pipe(d(this.subsDestroy)).subscribe(s=>{this._currentEvent=s,this.checkDeadLine(),this.checkApplication()})}ngOnInit(){this.getCurrentEventData(),this.eventService.subscribe()}checkDeadLine(){this.deadLined=new Date(this._currentEvent.deadline)<=new Date(Date.now())}checkApplication(){let n=!1;this._currentEvent.participants.forEach(t=>{t.includes(this.username)&&(n=!0)}),this.applied=n}getCurrentEventData(){this.eventService.getCurrentEvent(this.username).pipe(function Y(i,n){const{first:t,each:o,with:s=J,scheduler:l=n??S.z,meta:m=null}=(0,_.q)(i)?{first:i}:"number"==typeof i?{each:i}:i;if(null==t&&null==o)throw new TypeError("No timeout provided.");return(0,w.e)((X,C)=>{let F,c,y=null,b=0;const N=M=>{c=(0,z.f)(C,l,()=>{try{F.unsubscribe(),(0,k.Xf)(s({meta:m,lastValue:y,seen:b})).subscribe(C)}catch(G){C.error(G)}},M)};F=X.subscribe((0,L.x)(C,M=>{c?.unsubscribe(),b++,C.next(y=M),o>0&&N(o)},void 0,void 0,()=>{c?.closed||c?.unsubscribe(),y=null})),!b&&N(null!=t?"number"==typeof t?t:+t-l.now():o)})}(2e3)).pipe(d(this.subsDestroy)).subscribe({next:n=>{this.eventService.setEvent(n)},error:n=>{this.alertService.addMessage(n?.error?.errorMessage?n.error.errorMessage:"A szerver nem el\xe9rhet\u0151, k\xe9rlek prob\xe1lkozz k\xe9s\u0151bb!")}})}applyBtnClicked(){this.applied?window.confirm("Biztosan t\xf6rl\xf6d a jelentkez\xe9sed?")&&this.eventService.deleteApplicationForCurrentEvent(this.username).pipe(d(this.subsDestroy)).subscribe({next:t=>{this.eventService.setEvent(t)},error:t=>{this.alertService.addMessage(t.errorMessage)}}):this.modalService.open(h)}ngOnDestroy(){this.subsDestroy.next(""),this.subsDestroy.complete(),this.eventService.closeSubscription()}}function Q(i,n){if(1&i&&(e.TgZ(0,"p",3),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("\xdcdv ",t.username,"!")}}v.\u0275fac=function(n){return new(n||v)(e.Y36(x.P),e.Y36(O.c),e.Y36(D))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-card-event"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[1,"background-color"],["class"," event-container",4,"ngIf"],[1,"event-container"],[1,"event-title"],[1,"p-title"],[1,"event-participants"],["class","event-participant",4,"ngFor","ngForOf"],[1,"btn",3,"disabled","ngClass","click"],[1,"deadline","tx-sm"],[1,"event-participant"],["width","64","height","64","viewBox","0 0 64 64","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M14.1701 41.4998C13.9828 41.3135 13.7293 41.209 13.4651 41.209C13.2009 41.209 12.9475 41.3135 12.7601 41.4998L8.68013 45.5798C8.12227 46.137 7.67972 46.7987 7.37777 47.5271C7.07583 48.2555 6.92041 49.0363 6.92041 49.8248C6.92041 50.6133 7.07583 51.394 7.37777 52.1224C7.67972 52.8508 8.12227 53.5125 8.68013 54.0698L9.94013 55.3298C10.4974 55.8876 11.1591 56.3302 11.8875 56.6321C12.6159 56.9341 13.3966 57.0895 14.1851 57.0895C14.9736 57.0895 15.7544 56.9341 16.4828 56.6321C17.2112 56.3302 17.8729 55.8876 18.4301 55.3298L22.5101 51.2498C22.6964 51.0624 22.8009 50.809 22.8009 50.5448C22.8009 50.2806 22.6964 50.0271 22.5101 49.8398L14.1701 41.4998ZM17.0001 53.9098C16.6286 54.2817 16.1875 54.5767 15.7019 54.778C15.2163 54.9793 14.6958 55.0829 14.1701 55.0829C13.6445 55.0829 13.124 54.9793 12.6384 54.778C12.1528 54.5767 11.7116 54.2817 11.3401 53.9098L10.0801 52.6498C9.70822 52.2783 9.41319 51.8371 9.21189 51.3515C9.01059 50.8659 8.90698 50.3454 8.90698 49.8198C8.90698 49.2941 9.01059 48.7736 9.21189 48.288C9.41319 47.8024 9.70822 47.3613 10.0801 46.9898L13.4501 43.6198L20.3601 50.5298L17.0001 53.9098Z","fill","#3FA9F5"],["d","M17.5201 33.9104C17.3288 33.7466 17.0827 33.6609 16.831 33.6707C16.5794 33.6804 16.3406 33.7847 16.1625 33.9628C15.9844 34.1409 15.8801 34.3797 15.8704 34.6313C15.8607 34.883 15.9463 35.1291 16.1101 35.3204L28.6801 47.9004C28.8714 48.0642 29.1175 48.1498 29.3691 48.1401C29.6208 48.1304 29.8596 48.026 30.0376 47.8479C30.2157 47.6698 30.3201 47.4311 30.3298 47.1794C30.3395 46.9278 30.2539 46.6817 30.0901 46.4904L17.5201 33.9104Z","fill","#3FA9F5"],["d","M19.1002 30.3C18.9089 30.1362 18.6628 30.0506 18.4111 30.0603C18.1594 30.07 17.9207 30.1744 17.7426 30.3525C17.5645 30.5306 17.4602 30.7693 17.4505 31.021C17.4407 31.2726 17.5263 31.5187 17.6902 31.71L32.2802 46.31C32.4671 46.4983 32.7213 46.6046 32.9866 46.6056C33.252 46.6065 33.5069 46.502 33.6952 46.315C33.8835 46.128 33.9898 45.8739 33.9907 45.6086C33.9917 45.3432 33.8871 45.0883 33.7002 44.9L19.1002 30.3Z","fill","#3FA9F5"],["d","M37.3 43.3104L20.69 26.7004C20.4987 26.5366 20.2526 26.451 20.001 26.4607C19.7493 26.4704 19.5105 26.5748 19.3324 26.7529C19.1544 26.9309 19.05 27.1697 19.0403 27.4214C19.0306 27.673 19.1162 27.9191 19.28 28.1104L35.88 44.7104C36.0713 44.8742 36.3174 44.9598 36.5691 44.9501C36.8207 44.9404 37.0595 44.8361 37.2376 44.658C37.4157 44.4799 37.52 44.2411 37.5297 43.9895C37.5394 43.7378 37.4538 43.4917 37.29 43.3004L37.3 43.3104Z","fill","#3FA9F5"],["d","M15.9302 37.5002C15.7389 37.3364 15.4929 37.2508 15.2412 37.2605C14.9895 37.2702 14.7508 37.3746 14.5727 37.5527C14.3946 37.7308 14.2903 37.9695 14.2805 38.2212C14.2708 38.4728 14.3564 38.7189 14.5202 38.9102L25.0802 49.4802C25.2715 49.644 25.5176 49.7297 25.7693 49.7199C26.021 49.7102 26.2597 49.6059 26.4378 49.4278C26.6159 49.2497 26.7202 49.011 26.73 48.7593C26.7397 48.5076 26.6541 48.2615 26.4902 48.0702L15.9302 37.5002Z","fill","#3FA9F5"],["d","M56.7899 25.0002C56.6808 24.8921 56.5483 24.8107 56.4026 24.7621C56.2569 24.7136 56.102 24.6992 55.9499 24.7202L46.9499 25.9502L48.1599 17.1202C48.1623 17.0802 48.1623 17.0401 48.1599 17.0002V17.0002C48.1687 16.9238 48.1687 16.8466 48.1599 16.7702C48.1365 16.7002 48.1132 16.6302 48.0899 16.5602C48.0473 16.4215 47.9678 16.2971 47.8599 16.2002L47.7699 16.0002C47.6982 15.9538 47.6209 15.9169 47.5399 15.8902H47.4399H47.3399C47.2569 15.8797 47.1729 15.8797 47.0899 15.8902H46.9299L38.0899 17.0002L39.3099 8.00018C39.3316 7.84673 39.3173 7.69034 39.2682 7.54336C39.219 7.39638 39.1364 7.26283 39.0268 7.15324C38.9173 7.04366 38.7837 6.96105 38.6367 6.91192C38.4897 6.8628 38.3334 6.84851 38.1799 6.87018L27.8899 8.33018C27.6422 8.36707 27.4174 8.49553 27.2599 8.69017C27.153 8.77471 27.0645 8.88021 26.9999 9.00018L12.5499 41.8102C12.5499 41.8102 12.5499 41.8102 12.5499 41.8802C12.5209 41.9674 12.5041 42.0583 12.4999 42.1502C12.4979 42.1868 12.4979 42.2235 12.4999 42.2602C12.4903 42.3399 12.4903 42.4205 12.4999 42.5002C12.4982 42.5335 12.4982 42.5669 12.4999 42.6002C12.5478 42.7115 12.6156 42.8131 12.6999 42.9002L21.0299 51.2302C21.1714 51.3709 21.3517 51.4662 21.5477 51.5036C21.7438 51.541 21.9465 51.5189 22.1299 51.4402L54.9999 37.0002C55.1725 36.9054 55.3243 36.7768 55.4462 36.6222C55.5682 36.4676 55.6579 36.2901 55.7099 36.1002L57.1099 25.8102C57.1211 25.6598 57.0981 25.5088 57.0427 25.3685C56.9873 25.2282 56.9009 25.1023 56.7899 25.0002V25.0002ZM54.9199 26.8802L53.7599 35.3902L21.9999 49.3502L20.7799 48.1302L46.1899 28.0002L54.9199 26.8802ZM45.9999 18.0002L44.8299 26.5702L19.3699 46.7002L18.3699 45.7002L17.3699 44.7002L37.4499 19.1502L45.9999 18.0002ZM28.6399 10.2502L37.1499 9.09018L35.9999 17.8102L15.8699 43.2102L14.6499 42.0002L28.6399 10.2502Z","fill","black"],[1,"tx-base"]],template:function(n,t){1&n&&(e.TgZ(0,"section",0),e.YNc(1,H,13,13,"div",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngIf",-1!==t._currentEvent.id))},dependencies:[p.ez,p.mk,p.sg,p.O5,p.uU],styles:[".background-color[_ngcontent-%COMP%]{margin:0 1rem}.event-container[_ngcontent-%COMP%]{max-width:500px;background:rgba(255,255,255,.4);box-shadow:0 8px 32px #1f26875e;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border-radius:10px;border:1px solid rgba(255,255,255,.18);padding:1rem;display:flex;flex-direction:column;align-items:center;gap:1.5rem}.event-title[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:600;text-align:center;word-break:break-word}.event-participants[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.event-participant[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem;border-radius:5px;width:100%;margin-left:-25px}.event-participant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:400;text-align:center}.event-participant[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:2.5rem}.deadline[_ngcontent-%COMP%]{color:red;text-align:center}.p-title[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:600;width:100%;text-align:center}"],data:{animation:[(0,a.X$)("listAnimation",[(0,a.eR)("* => *",[(0,a.IO)(":enter",[(0,a.oB)({opacity:0,height:0}),(0,a.EY)(300,[(0,a.jt)("0.3s",(0,a.oB)({opacity:1,height:"*"}))])],{optional:!0}),(0,a.IO)(":leave",[(0,a.oB)({opacity:1,height:"*"}),(0,a.EY)(300,[(0,a.jt)("0.3s",(0,a.oB)({opacity:0,height:0}))])],{optional:!0})])])]}});class g{constructor(n,t){this.router=n,this.eventService=t,this.username="Vend\xe9g",this.subsDestroy=new f.x}ngOnInit(){this.eventService.currentEventWatch().pipe(d(this.subsDestroy)).subscribe(n=>{this.currentEvent=n}),this.eventService.currentUsername().pipe(d(this.subsDestroy)).subscribe(n=>this.username=n)}ngOnDestroy(){this.subsDestroy.next(""),this.subsDestroy.complete()}logout(){localStorage.clear(),this.router.navigateByUrl("login")}}g.\u0275fac=function(n){return new(n||g)(e.Y36(Z.F0),e.Y36(x.P))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-event"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"background"],["class","username tx-white",4,"ngIf"],[1,"btn","btn-remove","tx-sm",3,"click"],[1,"username","tx-white"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,Q,2,1,"p",1),e._UZ(2,"app-card-event"),e.TgZ(3,"button",2),e.NdJ("click",function(){return t.logout()}),e._uU(4,"Kil\xe9p\xe9s"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngIf",-1!==(null==t.currentEvent?null:t.currentEvent.id)))},dependencies:[p.ez,p.O5,u.u5,v],styles:[".background[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;min-height:80vh;margin:4vh 0;justify-content:center}.username[_ngcontent-%COMP%]{font-size:3rem;font-weight:600;color:#e2e2e2}@keyframes _ngcontent-%COMP%_gradient-animation{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}"]})}}]);