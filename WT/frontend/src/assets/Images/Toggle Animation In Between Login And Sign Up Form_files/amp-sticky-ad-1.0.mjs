(self.AMP=self.AMP||[]).push({m:1,v:"2110082201002",n:"amp-sticky-ad",ev:"1.0",l:true,f:function(AMP,_){let p;class q{constructor(){this.promise=new Promise(((a,b)=>{this.resolve=a;this.reject=b}))}}let r=Array.isArray;
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */function t(a,b){let c=[];for(a=a.firstElementChild;a;a=a.nextElementSibling)b(a)&&c.push(a);return c}function u(a){return t(a,(b=>{{let c;"string"==typeof b?c=b:b.nodeType===Node.ELEMENT_NODE&&(c=b.tagName);b=c&&c.toLowerCase().startsWith("i-")?!0:b.nodeType!==Node.ELEMENT_NODE?!1:b.hasAttribute("placeholder")||b.hasAttribute("fallback")||b.hasAttribute("overflow")}return!b}))}let v=self.AMP_CONFIG||{},w=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function x(a){if(self.document&&self.document.head&&(!self.location||!w.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}v.cdnUrl||x("runtime-host");v.geoApiUrl||x("amp-geo-api");let y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function z(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let A=self.__AMP_LOG;function B(a,b){if(!A.user)throw Error("failed to call initLogConstructor");A.user.assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function C(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return D(a,b)}function E(a){var b=F(a);b=F(b);b=b.isSingleDoc()?b.win:b;return D(b,"owners")}function F(a){return a.nodeType?C((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function D(a,b){let c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function G(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a}G["default"]=G;G.__esModule=!0;function H(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?I(Object(c),!0).forEach((function(d){G(a,d,c[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):I(Object(c)).forEach((function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(c,d))}))}return a}function I(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter((function(g){return Object.getOwnPropertyDescriptor(a,g).enumerable})));c.push.apply(c,d)}return c}H["default"]=H;H.__esModule=!0;function J(a){var b,c,d,g,f;if(a.__AMP__EXPERIMENT_TOGGLES)var k=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);k=a.__AMP__EXPERIMENT_TOGGLES;var e=H(H({},null!==(b=a.AMP_CONFIG)&&void 0!==b?b:{}),null!==(c=a.AMP_EXP)&&void 0!==c?c:JSON.parse((null===(d=a.__AMP_EXP)||void 0===d?void 0:d.textContent)||"{}"));for(let n in e)b=e[n],"number"===typeof b&&0<=b&&1>=b&&(k[n]=Math.random()<b);e=null===(g=a.AMP_CONFIG)||void 0===g?void 0:g["allow-doc-opt-in"];if(r(e)&&e.length&&(g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");for(var h of g)e.includes(h)&&(k[h]=!0)}h=Object;g=h.assign;var l;e="";try{"localStorage"in a&&(e=a.localStorage.getItem("amp-experiment-toggles"))}catch(n){}e=(null===(l=e)||void 0===l?void 0:l.split(/\s*,\s*/g))||[];l=Object.create(null);for(var m of e)m&&("-"==m[0]?l[m.substr(1)]=!1:l[m]=!0);g.call(h,k,l);m=null===(f=a.AMP_CONFIG)||void 0===f?void 0:f["allow-url-opt-in"];if(r(m)&&m.length){a=a.location.originalHash||a.location.hash;f=Object.create(null);if(a)for(;h=y.exec(a);)l=z(h[1],h[1]),h=h[2]?z(h[2].replace(/\+/g," "),h[2]):"",f[l]=h;a=f;for(let n of m)f=a[`e-${n}`],"1"==f&&(k[n]=!0),"0"==f&&(k[n]=!1)}}return!!k["amp-sticky-ad-to-amp-ad-v3"]}JSON.parse('{"_ping_":{"renderStartImplemented":true,"clientIdScope":"_PING_","consentHandlingOverride":true},"1wo":{},"24smi":{"prefetch":"https://jsn.24smi.net/smi.js","preconnect":"https://data.24smi.net"},"a8":{"prefetch":"https://statics.a8.net/amp/ad.js","renderStartImplemented":true},"a9":{"prefetch":"https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"},"accesstrade":{"prefetch":"https://h.accesstrade.net/js/amp/amp.js"},"adagio":{"prefetch":"https://js-ssl.neodatagroup.com/adagio_amp.js","preconnect":["https://ad-aws-it.neodatagroup.com","https://tracker.neodatagroup.com"],"renderStartImplemented":true},"adblade":{"prefetch":"https://web.adblade.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.adblade.com","https://static.adblade.com"],"renderStartImplemented":true},"adbutler":{"prefetch":"https://servedbyadbutler.com/app.js"},"adform":{},"adfox":{"prefetch":"https://yandex.ru/ads/system/context.js","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"adgeneration":{"prefetch":"https://i.socdm.com/sdk/js/adg-script-loader.js"},"adglare":{"renderStartImplemented":true},"adhese":{"renderStartImplemented":true},"adincube":{"renderStartImplemented":true},"adition":{},"adman":{},"admanmedia":{"renderStartImplemented":true},"admixer":{"renderStartImplemented":true,"preconnect":["https://inv-nets.admixer.net","https://cdn.admixer.net"]},"adnuntius":{"prefetch":"https://cdn.adnuntius.com/adn.js","renderStartImplemented":true},"adocean":{"consentHandlingOverride":true},"adop":{},"adpicker":{"renderStartImplemented":true},"adplugg":{"prefetch":"https://www.adplugg.com/serve/js/ad.js","renderStartImplemented":true},"adpon":{"prefetch":"https://ad.adpon.jp/amp.js","clientIdScope":"AMP_ECID_ADPON"},"adpushup":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":"https://cdn.adpushup.com"},"adreactor":{},"adsensor":{"prefetch":"https://wfpscripts.webspectator.com/amp/adsensor-amp.js","clientIdScope":"amp_ecid_adensor","renderStartImplemented":true},"adservsolutions":{},"adsloom":{"clientIdScope":"AMP_ECID_ADSLOOM"},"adsnative":{"prefetch":"https://static.adsnative.com/static/js/render.v1.js","preconnect":"https://api.adsnative.com"},"adspeed":{"preconnect":"https://g.adspeed.net","renderStartImplemented":true},"adspirit":{},"adstir":{"prefetch":"https://js.ad-stir.com/js/adstir_async.js","preconnect":"https://ad.ad-stir.com"},"adstyle":{"prefetch":"https://widgets.ad.style/amp.js","preconnect":["https://w.ad.style"]},"adtech":{"prefetch":"https://s.aolcdn.com/os/ads/adsWrapper3.js","preconnect":["https://mads.at.atwola.com","https://aka-cdn.adtechus.com"]},"adtelligent":{"preconnect":["https://s.adtelligent.com"],"renderStartImplemented":true},"adthrive":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js"],"preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"adunity":{"preconnect":["https://content.adunity.com"],"renderStartImplemented":true},"aduptech":{"prefetch":"https://s.d.adup-tech.com/jsapi","preconnect":["https://d.adup-tech.com","https://m.adup-tech.com","https://v.adup-tech.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"adventive":{"preconnect":["https://ads.adventive.com","https://amp.adventivedev.com"],"renderStartImplemented":true},"adverline":{"prefetch":"https://ads.adverline.com/richmedias/amp.js","preconnect":["https://adnext.fr"],"renderStartImplemented":true},"adverticum":{},"advertserve":{"renderStartImplemented":true},"adyoulike":{"consentHandlingOverride":true,"prefetch":"https://fo-static.omnitagjs.com/amp.js","renderStartImplemented":true},"adzerk":{},"affiliateb":{"prefetch":"https://track.affiliate-b.com/amp/a.js","renderStartImplemented":true},"aja":{"prefetch":["https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js","https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js"],"preconnect":["https://ad.as.amanad.adtdp.com"]},"appvador":{"prefetch":["https://cdn.apvdr.com/js/VastAdUnit.min.js","https://cdn.apvdr.com/js/VideoAd.min.js","https://cdn.apvdr.com/js/VideoAd3PAS.min.js","https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js","https://cdn.apvdr.com/js/VideoAdNative.min.js"],"renderStartImplemented":true},"amoad":{"prefetch":["https://j.amoad.com/js/a.js","https://j.amoad.com/js/n.js"],"preconnect":["https://d.amoad.com","https://i.amoad.com","https://m.amoad.com","https://v.amoad.com"]},"amplified":{"preconnect":"https://srv.clickfuse.com","renderStartImplemented":true},"aniview":{"renderStartImplemented":true},"anyclip":{"prefetch":"https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre.js","preconnect":["https://trafficmanager.anyclip.com","https://lreprx-server.anyclip.com"],"renderStartImplemented":true},"appnexus":{"prefetch":"https://acdn.adnxs.com/ast/ast.js","preconnect":"https://ib.adnxs.com","renderStartImplemented":true},"atomx":{"prefetch":"https://s.ato.mx/p.js"},"avantisvideo":{"renderStartImplemented":true},"beaverads":{"renderStartImplemented":true},"beopinion":{"prefetch":"https://widget.beop.io/sdk.js","preconnect":["https://t.beop.io","https://s.beop.io","https://data.beop.io"],"renderStartImplemented":true},"bidtellect":{},"blade":{"prefetch":"https://sdk.streamrail.com/blade/sr.blade.js","renderStartImplemented":true},"brainy":{},"bringhub":{"renderStartImplemented":true,"preconnect":["https://static.bh-cdn.com","https://core-api.bringhub.io"]},"broadbandy":{"renderStartImplemented":true},"broadstreetads":{"prefetch":"https://cdn.broadstreetads.com/init-2.min.js","renderStartImplemented":true},"byplay":{},"caajainfeed":{"prefetch":["https://cdn.amanad.adtdp.com/sdk/ajaamp.js"],"preconnect":["https://ad.amanad.adtdp.com"]},"capirs":{"renderStartImplemented":true},"caprofitx":{"prefetch":["https://cdn.caprofitx.com/pfx.min.js","https://cdn.caprofitx.com/tags/amp/profitx_amp.js"],"preconnect":"https://ad.caprofitx.adtdp.com"},"cedato":{"renderStartImplemented":true},"chargeads":{},"colombia":{"prefetch":"https://static.clmbtech.com/ad/commons/js/colombia-amp.js"},"conative":{"renderStartImplemented":true},"connatix":{"renderStartImplemented":true},"contentad":{},"criteo":{"prefetch":"https://static.criteo.net/js/ld/publishertag.js","preconnect":"https://cas.criteo.com"},"csa":{"prefetch":"https://www.google.com/adsense/search/ads.js"},"dable":{"preconnect":["https://static.dable.io","https://api.dable.io","https://images.dable.io"],"renderStartImplemented":true},"digiteka":{"renderStartImplemented":true},"directadvert":{"renderStartImplemented":true},"distroscale":{"preconnect":["https://c.jsrdn.com","https://s.jsrdn.com","https://i.jsrdn.com"],"renderStartImplemented":true},"dotandads":{"prefetch":"https://amp.ad.dotandad.com/dotandadsAmp.js","preconnect":"https://bal.ad.dotandad.com"},"dynad":{"preconnect":["https://t.dynad.net","https://tm.jsuol.com.br"]},"eadv":{"renderStartImplemented":true,"clientIdScope":"AMP_ECID_EADV","prefetch":["https://www.eadv.it/track/esr.min.js","https://www.eadv.it/track/ead.min.js"]},"empower":{"prefetch":"https://cdn.empower.net/sdk/amp-ad.min.js","renderStartImplemented":true},"engageya":{},"epeex":{},"eplanning":{"prefetch":"https://us.img.e-planning.net/layers/epl-amp.js"},"exco":{"renderStartImplemented":true},"ezoic":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js","https://g.ezoic.net/ezoic/ampad.js"],"clientIdScope":"AMP_ECID_EZOIC","consentHandlingOverride":true,"renderStartImplemented":true},"f1e":{"prefetch":"https://img.ak.impact-ad.jp/util/f1e_amp.min.js"},"f1h":{"preconnect":"https://img.ak.impact-ad.jp","renderStartImplemented":true},"fake":{},"fake-delayed":{"renderStartImplemented":true},"feedad":{"clientIdScope":"__fa_amp","prefetch":"https://web.feedad.com/sdk/feedad-async.js","renderStartImplemented":true,"fullWidthHeightRatio":1.7777777777777777,"consentHandlingOverride":true},"felmat":{"prefetch":"https://t.felmat.net/js/fmamp.js","renderStartImplemented":true},"finative":{},"firstimpression":{"prefetch":"https://ecdn.firstimpression.io/static/js/fiamp.js","preconnect":"https://cdn.firstimpression.io","renderStartImplemented":true,"consentHandlingOverride":true},"flite":{},"fluct":{"prefetch":["https://pdn.adingo.jp/p.js"],"preconnect":["https://cdn-fluct.sh.adingo.jp","https://sh.adingo.jp","https://i.adingo.jp"]},"forkmedia":{"renderStartImplemented":true},"freewheel":{"prefetch":"https://cdn.stickyadstv.com/prime-time/fw-amp.min.js","renderStartImplemented":true},"fusion":{"prefetch":"https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js"},"gecko":{},"genieessp":{"prefetch":"https://js.gsspcln.jp/l/amp.js"},"giraff":{"renderStartImplemented":true},"glomex":{"prefetch":"https://player.glomex.com/integration/1/amp-embed.js"},"gmossp":{"prefetch":"https://cdn.gmossp-sp.jp/ads/amp.js"},"gumgum":{"prefetch":"https://js.gumgum.com/slot.js","renderStartImplemented":true},"holder":{"prefetch":"https://i.holder.com.ua/js2/holder/ajax/ampv1.js","preconnect":"https://h.holder.com.ua","renderStartImplemented":true},"ibillboard":{},"idealmedia":{"renderStartImplemented":true,"preconnect":["https://jsc.idealmedia.io","https://servicer.idealmedia.io","https://s-img.idealmedia.io/"]},"imedia":{"prefetch":"https://i.imedia.cz/js/im3.js","renderStartImplemented":true},"imobile":{"prefetch":"https://spamp.i-mobile.co.jp/script/amp.js","preconnect":"https://spad.i-mobile.co.jp"},"imonomy":{"renderStartImplemented":true},"improvedigital":{},"industrybrains":{"prefetch":"https://web.industrybrains.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.industrybrains.com","https://static.industrybrains.com"],"renderStartImplemented":true},"inmobi":{"prefetch":"https://cf.cdn.inmobi.com/ad/inmobi.secure.js","renderStartImplemented":true},"innity":{"prefetch":"https://cdn.innity.net/admanager.js","preconnect":"https://as.innity.com","renderStartImplemented":true},"insticator":{"preconnect":"https://d3lcz8vpax4lo2.cloudfront.net","renderStartImplemented":true},"invibes":{"prefetch":"https://k.r66net.com/GetAmpLink","renderStartImplemented":true,"consentHandlingOverride":true},"iprom":{"prefetch":"https://cdn.ipromcloud.com/ipromNS.js"},"ix":{"prefetch":["https://js-sec.indexww.com/apl/amp.js"],"preconnect":"https://as-sec.casalemedia.com","renderStartImplemented":true},"jubna":{},"kargo":{},"ketshwa":{},"kiosked":{"renderStartImplemented":true},"jixie":{"prefetch":["https://scripts.jixie.io/jxamp.min.js"],"clientIdScope":"__jxamp","clientIdCookieName":"_jx","renderStartImplemented":true},"kixer":{"prefetch":"https://cdn.kixer.com/ad/load.js","renderStartImplemented":true},"kuadio":{},"lentainform":{"renderStartImplemented":true,"preconnect":["https://jsc.lentainform.com","https://servicer.lentainform.com","https://s-img.lentainform.com"]},"ligatus":{"prefetch":"https://ssl.ligatus.com/render/ligrend.js","renderStartImplemented":true},"lockerdome":{"prefetch":"https://cdn2.lockerdomecdn.com/_js/amp.js","renderStartImplemented":true},"logly":{"preconnect":["https://l.logly.co.jp","https://cdn.logly.co.jp"],"renderStartImplemented":true},"loka":{"prefetch":"https://loka-cdn.akamaized.net/scene/amp.js","preconnect":["https://scene-front.lokaplatform.com","https://loka-materials.akamaized.net"],"renderStartImplemented":true},"luckyads":{"renderStartImplemented":true},"macaw":{"renderStartImplemented":true},"mads":{"prefetch":"https://eu2.madsone.com/js/tags.js"},"mantis-display":{"prefetch":"https://assets.mantisadnetwork.com/mantodea.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://res.cloudinary.com","https://resize.mantisadnetwork.com"]},"marfeel":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":["https://live.mrf.io","https://tpc.googlesyndication.com","https://fastlane.rubiconproject.com","https://htlb.casalemedia.com","https://prg.smartadserver.com","https://ib.adnxs.com","https://bidder.criteo.com","https://marfeel-d.openx.net","https://ice.360yield.com","https://mbid.marfeelrev.com","https://adservice.google.com"],"consentHandlingOverride":true},"mantis-recommend":{"prefetch":"https://assets.mantisadnetwork.com/recommend.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://resize.mantisadnetwork.com"]},"mediaad":{},"medianet":{"preconnect":"https://contextual.media.net","renderStartImplemented":true},"mediavine":{"prefetch":"https://amp.mediavine.com/wrapper.min.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"medyanet":{"renderStartImplemented":true},"meg":{"renderStartImplemented":true},"mgid":{"renderStartImplemented":true,"preconnect":["https://jsc.mgid.com","https://servicer.mgid.com","https://s-img.mgid.com"]},"microad":{"prefetch":"https://j.microad.net/js/camp.js","preconnect":["https://s-rtb.send.microad.jp","https://s-rtb.send.microadinc.com","https://cache.send.microad.jp","https://cache.send.microadinc.com","https://deb.send.microad.jp"]},"miximedia":{"renderStartImplemented":true},"mixpo":{"prefetch":"https://cdn.mixpo.com/js/loader.js","preconnect":["https://player1.mixpo.com","https://player2.mixpo.com"]},"monetizer101":{"renderStartImplemented":true},"mox":{"prefetch":["https://ad.mox.tv/js/amp.min.js","https://ad.mox.tv/mox/mwayss_invocation.min.js"],"renderStartImplemented":true},"my6sense":{"renderStartImplemented":true},"myfinance":{"preconnect":["https://a.myfidevs.io","https://static.myfinance.com","https://www.myfinance.com"],"renderStartImplemented":true,"clientIdScope":"AMP_ECID_GOOGLE"},"myoffrz":{"renderStartImplemented":true},"mytarget":{"prefetch":"https://ad.mail.ru/static/ads-async.js","renderStartImplemented":true},"myua":{"renderStartImplemented":true},"mywidget":{"preconnect":"https://likemore-fe.go.mail.ru","prefetch":"https://likemore-go.imgsmail.ru/widget_amp.js","renderStartImplemented":true},"nativeroll":{"prefetch":"https://cdn01.nativeroll.tv/js/seedr-player.min.js"},"nativery":{"preconnect":"https://cdn.nativery.com"},"nativo":{"prefetch":"https://s.ntv.io/serve/load.js"},"navegg":{"renderStartImplemented":true},"nend":{"prefetch":"https://js1.nend.net/js/amp.js","preconnect":["https://output.nend.net","https://img1.nend.net"]},"netletix":{"preconnect":["https://call.netzathleten-media.de"],"renderStartImplemented":true},"noddus":{"prefetch":"https://noddus.com/amp_loader.js","renderStartImplemented":true},"nokta":{"prefetch":"https://static.virgul.com/theme/mockups/noktaamp/ampjs.js","renderStartImplemented":true},"nws":{},"oblivki":{"renderStartImplemented":true},"onead":{"prefetch":"https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js","renderStartImplemented":true},"onnetwork":{"renderStartImplemented":true},"openadstream":{},"openx":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"opinary":{"renderStartImplemented":true},"outbrain":{"renderStartImplemented":true,"prefetch":"https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js","preconnect":["https://odb.outbrain.com"],"consentHandlingOverride":true},"pixels":{"prefetch":"https://cdn.adsfactor.net/amp/pixels-amp.min.js","clientIdCookieName":"__AF","renderStartImplemented":true},"playstream":{"prefetch":"https://app.playstream.media/js/amp.js","renderStartImplemented":true},"plista":{},"polymorphicads":{"prefetch":"https://www.polymorphicads.jp/js/amp.js","preconnect":["https://img.polymorphicads.jp","https://ad.polymorphicads.jp"],"renderStartImplemented":true},"popin":{"renderStartImplemented":true},"postquare":{},"ppstudio":{"renderStartImplemented":true},"pressboard":{"renderStartImplemented":true},"promoteiq":{},"pubexchange":{},"pubguru":{"renderStartImplemented":true},"pubmatic":{"prefetch":"https://ads.pubmatic.com/AdServer/js/amp.js"},"pubmine":{"prefetch":["https://s.pubmine.com/head.js"],"preconnect":"https://delivery.g.switchadhub.com","renderStartImplemented":true},"puffnetwork":{"prefetch":"https://static.puffnetwork.com/amp_ad.js","renderStartImplemented":true},"pulse":{"prefetch":"https://static.pulse.mail.ru/pulse-widget-amp.js","renderStartImplemented":true},"pulsepoint":{"prefetch":"https://ads.contextweb.com/TagPublish/getjs.static.js","preconnect":"https://tag.contextweb.com"},"purch":{"prefetch":"https://ramp.purch.com/serve/creative_amp.js","renderStartImplemented":true},"quoraad":{"prefetch":"https://a.quora.com/amp_ad.js","preconnect":"https://ampad.quora.com","renderStartImplemented":true},"rakutenunifiedads":{"prefetch":"https://s-cdn.rmp.rakuten.co.jp/js/amp.js","renderStartImplemented":true},"rbinfox":{"renderStartImplemented":true},"rcmwidget":{"prefetch":"https://rcmjs.rambler.ru/static/rcmw/rcmw-amp.js","renderStartImplemented":true},"readmo":{"renderStartImplemented":true},"realclick":{"renderStartImplemented":true},"recomad":{"renderStartImplemented":true},"recreativ":{"prefetch":"https://go.rcvlink.com/static/amp.js","renderStartImplemented":true},"relap":{"renderStartImplemented":true},"relappro":{"prefetch":"https://cdn.relappro.com/adservices/amp/relappro.amp.min.js","preconnect":"https://tags.relappro.com","renderStartImplemented":true},"remixd":{"preconnect":"https://tags.remixd.com","renderStartImplemented":true},"revcontent":{"prefetch":"https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js","preconnect":["https://trends.revcontent.com","https://cdn.revcontent.com","https://img.revcontent.com"],"renderStartImplemented":true},"revjet":{"prefetch":"https://cdn.revjet.com/~cdn/JS/03/amp.js","renderStartImplemented":true},"rfp":{"prefetch":"https://js.rfp.fout.jp/rfp-amp.js","preconnect":"https://ad.rfp.fout.jp","renderStartImplemented":true},"rnetplus":{},"rubicon":{},"runative":{"prefetch":"https://cdn.run-syndicate.com/sdk/v1/n.js","renderStartImplemented":true},"sas":{"renderStartImplemented":true},"seedingalliance":{},"sekindo":{"renderStartImplemented":true},"sharethrough":{"renderStartImplemented":true},"shemedia":{"prefetch":["https://securepubads.g.doubleclick.net/tag/js/gpt.js","https://ads.shemedia.com/static/amp.js"],"preconnect":["https://partner.googleadservices.com","https://tpc.googlesyndication.com","https://ads.blogherads.com"],"renderStartImplemented":true},"sklik":{"prefetch":"https://c.imedia.cz/js/amp.js"},"slimcutmedia":{"preconnect":["https://sb.freeskreen.com","https://static.freeskreen.com","https://video.freeskreen.com"],"renderStartImplemented":true},"smartads":{"prefetch":"https://smart-ads.biz/amp.js"},"smartadserver":{"prefetch":"https://ec-ns.sascdn.com/diff/js/amp.v0.js","preconnect":"https://static.sascdn.com","renderStartImplemented":true},"smartclip":{"prefetch":"https://cdn.smartclip.net/amp/amp.v0.js","preconnect":"https://des.smartclip.net","renderStartImplemented":true},"smi2":{"renderStartImplemented":true},"smilewanted":{"prefetch":"https://prebid.smilewanted.com/amp/amp.js","preconnect":"https://static.smilewanted.com","renderStartImplemented":true},"sogouad":{"prefetch":"https://theta.sogoucdn.com/wap/js/aw.js","renderStartImplemented":true},"sortable":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://tags-cdn.deployads.com","https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"sona":{"renderStartImplemented":true},"sovrn":{"prefetch":"https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js"},"speakol":{"renderStartImplemented":true},"spotx":{"preconnect":"https://js.spotx.tv","renderStartImplemented":true},"springAds":{"preconnect":["https://ib.adnxs.com"],"renderStartImplemented":true},"ssp":{"prefetch":"https://ssp.imedia.cz/static/js/ssp.js","renderStartImplemented":true,"consentHandlingOverride":true},"strossle":{"preconnect":["https://amp.spklw.com","https://widgets.sprinklecontent.com","https://images.sprinklecontent.com"]},"sunmedia":{"prefetch":"https://vod.addevweb.com/sunmedia/amp/ads/sunmedia.js","preconnect":"https://static.addevweb.com","renderStartImplemented":true},"svknative":{"renderStartImplemented":true,"prefetch":"https://widget.svk-native.ru/js/embed.js"},"swoop":{"prefetch":"https://www.swoop-amp.com/amp.js","preconnect":["https://www.swpsvc.com","https://client.swpcld.com"],"renderStartImplemented":true},"taboola":{},"tagon":{"prefetch":"https://js.tagon.co/tagon-amp.min.js"},"tail":{"renderStartImplemented":true},"tcsemotion":{"prefetch":"https://ads.tcsemotion.com/www/delivery/amphb.js","renderStartImplemented":true},"teads":{"prefetch":"https://s8t.teads.tv/media/format/v3/teads-format.min.js","preconnect":["https://cdn2.teads.tv","https://a.teads.tv","https://t.teads.tv","https://r.teads.tv"],"consentHandlingOverride":true},"temedya":{"prefetch":["https://widget.cdn.vidyome.com/builds/loader-amp.js","https://vidyome-com.cdn.vidyome.com/vidyome/builds/widgets.js"],"renderStartImplemented":true},"torimochi":{"renderStartImplemented":true},"tracdelight":{"prefetch":"https://scripts.tracdelight.io/amp.js","renderStartImplemented":true},"trafficstars":{"prefetch":"https://cdn.tsyndicate.com/sdk/v1/master.spot.js","renderStartImplemented":true},"triplelift":{},"trugaze":{"clientIdScope":"__tg_amp","renderStartImplemented":true},"uas":{"prefetch":"https://ads.pubmatic.com/AdServer/js/phoenix.js"},"ucfunnel":{"renderStartImplemented":true},"uzou":{"preconnect":["https://speee-ad.akamaized.net"],"renderStartImplemented":true},"unruly":{"prefetch":"https://video.unrulymedia.com/native/native-loader.js","renderStartImplemented":true},"valuecommerce":{"prefetch":"https://amp.valuecommerce.com/amp_bridge.js","preconnect":["https://ad.jp.ap.valuecommerce.com"],"renderStartImplemented":true},"vdoai":{"prefetch":"https://a.vdo.ai/core/dependencies_amp/vdo.min.js","renderStartImplemented":true},"verizonmedia":{"prefetch":"https://jac.yahoosandbox.com/amp/jac.js","preconnect":["https://jill.fc.yahoo.com"],"renderStartImplemented":true},"videointelligence":{"preconnect":"https://s.vi-serve.com","renderStartImplemented":true},"videonow":{"renderStartImplemented":true},"viralize":{"renderStartImplemented":true},"vlyby":{"prefetch":"https://cdn.vlyby.com/amp/qad/qad-outer2.js"},"vmfive":{"prefetch":"https://man.vm5apis.com/dist/adn-web-sdk.js","preconnect":["https://vawpro.vm5apis.com","https://vahfront.vm5apis.com"],"renderStartImplemented":true},"webediads":{"prefetch":"https://eu1.wbdds.com/amp.min.js","preconnect":["https://goutee.top","https://mediaathay.org.uk"],"renderStartImplemented":true},"weborama-display":{"prefetch":["https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js","https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js"]},"whopainfeed":{"prefetch":"https://widget.infeed.com.ar/widget/widget-amp.js"},"widespace":{},"wisteria":{"renderStartImplemented":true},"wpmedia":{"prefetch":"https://std.wpcdn.pl/wpjslib/wpjslib-amp.js","preconnect":["https://www.wp.pl","https://v.wpimg.pl"],"renderStartImplemented":true},"wunderkind":{"preconnect":["https://tag.wknd.ai","https://api.bounceexchange.com"],"renderStartImplemented":true},"xlift":{"prefetch":"https://cdn.x-lift.jp/resources/common/xlift_amp.js","renderStartImplemented":true},"yahoo":{"prefetch":"https://s.yimg.com/aaq/ampad/display.js","preconnect":"https://us.adserver.yahoo.com"},"yahoofedads":{"renderStartImplemented":true},"yahoojp":{"prefetch":["https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js","https://yads.c.yimg.jp/js/yads.js"],"preconnect":"https://yads.yahoo.co.jp"},"yahoonativeads":{"renderStartImplemented":true},"yandex":{"prefetch":"https://yandex.ru/ads/system/context.js","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"yektanet":{"preconnect":["https://cdn.yektanet.com","https://cg-sc.yektanet.com","https://native.yektanet.com","https://nfetch.yektanet.net","https://rfetch.yektanet.net","https://scrapper.yektanet.com","https://ua.yektanet.com","https://bfetch.yektanet.com","https://mostatil.cdn.yektanet.com"],"renderStartImplemented":true},"yengo":{"renderStartImplemented":true},"yieldbot":{"prefetch":["https://cdn.yldbt.com/js/yieldbot.intent.amp.js","https://msg.yldbt.com/js/ybmsg.html"],"preconnect":"https://i.yldbt.com"},"yieldmo":{"prefetch":"https://static.yieldmo.com/ym.1.js","preconnect":["https://s.yieldmo.com","https://ads.yieldmo.com"],"renderStartImplemented":true},"yieldone":{"prefetch":"https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js"},"yieldpro":{"preconnect":"https://creatives.yieldpro.eu","renderStartImplemented":true},"zedo":{"prefetch":"https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js","renderStartImplemented":true},"zen":{"prefetch":"https://zen.yandex.ru/widget-loader","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"zergnet":{},"zucks":{"preconnect":["https://j.zucks.net.zimg.jp","https://sh.zucks.net","https://k.zucks.net","https://static.zucks.net.zimg.jp"]},"baidu":{"prefetch":"https://dup.baidustatic.com/js/dm.js","renderStartImplemented":true},"sulvo":{}}');function K(a){a.tagName.startsWith("AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){let b=new q;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM}function L(a,b){let c=a.filter((d=>Number(d))).join(",");b=b||"";return b+(b&&c?",":"")+c}function M(a){return a.every((b=>!isNaN(parseInt(b,10))))}function N(a,b){if(a){var d,c=b.getAttribute("data-experiment-id");if(d=c)d=c?c.split(","):[],d=M(d);d?b.setAttribute("data-experiment-id",L([a],c)):b.setAttribute("data-experiment-id",a)}}let O;let P="Webkit webkit Moz moz ms O o".split(" "),Q={getPropertyPriority:()=>"",getPropertyValue:()=>""};function R(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function S(a){a.o&&(a.o(),a.o=null)}function T(a){S(a);a.C.then((()=>{a.mutateElement((()=>{a.D||(a.A=!0,U(a),a.h.addToFixedLayer(a.element,!0).then((()=>V(a))))}))}))}function U(a){let b=a.win.document.createElement("button");b.classList.add("amp-sticky-ad-close-button");b.setAttribute("aria-label",a.element.getAttribute("data-close-button-aria-label")||"Close this ad");let c=a.F.bind(a);b.addEventListener("click",c);a.element.appendChild(b)}function V(a){K(a.j).then((b=>{b.build().then((()=>W(a)))}))}function W(a){let b=a.j;E(a.element).scheduleLayout(a.element,b);return b.signals().whenSignal("render-start").then((()=>{let c;return a.measureElement((()=>{c=(a.win.getComputedStyle(a.element)||Q).backgroundColor})).then((()=>a.B.mutatePromise((()=>{a.element.setAttribute("visible","");a.h.updatePaddingBottom(a.element.offsetHeight);var d=c;let g=d.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g,"($1,$2,$3, 1)");if(d!=g){d=a.element;var f=d.style;if("background-color".startsWith("--"))f="background-color";else{O||(O=Object.create(null));var k=O["background-color"];if(!k){k="background-color";if(void 0===f["background-color"]){var e;b:{for(e=0;e<P.length;e++){let h=P[e]+"Background-color";if(void 0!==f[h]){e=h;break b}}e=""}void 0!==f[e]&&(k=e)}O["background-color"]=k}f=k}f&&(f.startsWith("--")?d.style.setProperty(f,g):d.style[f]=g)}}))))}))}class X extends AMP.BaseElement{constructor(a){super(a);this.B=this.getVsync();this.h=this.j=null;this.A=!1;this.o=null;this.D=!1;this.C=null}buildCallback(){B(1>=this.win.document.querySelectorAll("amp-sticky-ad.i-amphtml-built, amp-ad[sticky].i-amphtml-built").length,"At most one sticky ad can be loaded per page");this.h=this.getViewport();this.element.classList.add("i-amphtml-sticky-ad-layout");let a=u(this.element);B(1==a.length&&"AMP-AD"==a[0].tagName,"amp-sticky-ad must have a single amp-ad child");this.j=a[0];E(this.element).setOwner(this.j,this.element);this.C=K(this.j).then((c=>c.build())).then((()=>this.mutateElement((()=>{R(this.element,!0)}))));let b=this.win.document.createElement("amp-sticky-ad-top-padding");b.classList.add("amp-sticky-ad-top-padding");this.element.insertBefore(b,this.j);this.win.setTimeout((()=>{this.o=this.h.onScroll((()=>{1<this.h.getScrollTop()&&T(this)}))}))}layoutCallback(){this.A&&(R(this.element,!0),this.h.updatePaddingBottom(this.element.offsetHeight),E(this.element).scheduleLayout(this.element,this.j));p||(p=Promise.resolve(void 0));var a=p;return a}upgradeCallback(){if(!J(this.win))return null;var a=u(this.element);B(1==a.length&&"AMP-AD"==a[0].tagName,"amp-sticky-ad must have a single amp-ad child");a=a[0];let b=.5>Math.random(),c=(a.getAttribute("type")||"").toLowerCase();"doubleclick"!=c&&"adsense"!=c||N(b?"31062661":"31062660",a);if(!b)return C(this.win,"extensions").loadElementClass("amp-ad","0.1").then((()=>null));a.setAttribute("sticky","bottom");let d=a.cloneNode();this.element.parentElement.replaceChild(d,this.element);return C(this.win,"extensions").loadElementClass("amp-ad","0.1").then((g=>new g(d)))}isAlwaysFixed(){return!0}unlayoutCallback(){this.h.updatePaddingBottom(0);return!0}detachedCallback(){S(this)}collapsedCallback(a){a===this.j&&(this.D=!0,this.A=!1,R(this.element,!1),this.B.mutate((()=>{this.h.updatePaddingBottom(0)})))}F(){this.B.mutate((()=>{this.A=!1;E(this.element).scheduleUnlayout(this.element,this.j);this.h.removeFromFixedLayer(this.element);var b,a=this.element;null===(b=a.parentElement)||void 0===b?void 0:b.removeChild(a);this.h.updatePaddingBottom(0)}))}}AMP.registerElement("amp-sticky-ad",X,"amp-sticky-ad{position:fixed!important;text-align:center;bottom:0!important;left:0;width:100%!important;z-index:11;max-height:100px!important;box-sizing:border-box;opacity:1!important;background-image:none!important;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;margin-bottom:0!important;padding-bottom:env(safe-area-inset-bottom,0px)}amp-sticky-ad-top-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;z-index:12}.i-amphtml-sticky-ad-layout{display:-ms-flexbox;display:flex;visibility:hidden!important;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:visible!important;transform:translateZ(0)!important}amp-sticky-ad[visible]{visibility:visible!important}.i-amphtml-sticky-ad-layout>amp-ad{display:block}.amp-sticky-ad-close-button{position:absolute;visibility:hidden;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31 352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-sticky-ad[visible]>.amp-sticky-ad-close-button{visibility:visible}.amp-sticky-ad-close-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-sticky-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-sticky-ad-close-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-sticky-ad/1.0/amp-sticky-ad.css*/")}});//# sourceMappingURL=amp-sticky-ad-1.0.mjs.map