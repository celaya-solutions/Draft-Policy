/* Shared engine for Celaya Solutions document pages:
   PostHog analytics, English/Spanish language gate + toggle, and a subtle view counter.
   Each page sets window.PAGE_ES (its own Spanish strings) and <body data-vc="..."> before this loads. */
(function(){
  "use strict";

  /* ---- PostHog (US cloud) ---- */
  try{
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_FHAcCX8OXdgcCrWcThblrmlRdb9uDyMWmlGdy869F1P',{api_host:'https://us.i.posthog.com',person_profiles:'identified_only',defaults:'2025-05-24'});
  }catch(e){}

  /* ---- i18n ---- */
  var KEY="csLang";
  var BASE_ES={
    "skip":"Saltar al contenido principal",
    "nav.home":"&larr; Inicio",
    "nav.docs":"&larr; Todos los documentos",
    "doc.download":"Descargar",
    "doc.downloadpdf":"Descargar PDF",
    "doc.downloadword":"Descargar documento de Word",
    "doc.openword":"Este es un documento de Word (.docx). Desc&aacute;rguelo para abrirlo en Word, Pages o Google Docs.",
    "doc.viewbelow":"Vea el documento abajo o desc&aacute;rguelo.",
    "doc.fallback":"Su navegador no puede mostrar el PDF aqu&iacute;. Use el bot&oacute;n de descarga de arriba para verlo.",
    "doc.related":"Lea tambi&eacute;n:",
    "doc.relatedhome":"Informe completo",
    "doc.relateddocs":"Todos los documentos",
    "footer.disc":"Preparado por <strong>Celaya Solutions Research LLC</strong>, El Paso, Texas. Informe comunitario independiente; <strong>no</strong> es una publicaci&oacute;n oficial de la Ciudad de El Paso. Los documentos primarios son registros p&uacute;blicos; los documentos legales preparados por el laboratorio son borradores y no constituyen asesor&iacute;a legal. Las correcciones son bienvenidas.",
    "footer.copy":"&copy; 2026 Celaya Solutions Research LLC &middot; El Paso, Texas &middot; Hecho para ser verificado."
  };
  var ES=BASE_ES;
  try{ if(window.PAGE_ES) for(var k in window.PAGE_ES) ES[k]=window.PAGE_ES[k]; }catch(e){}

  var nodes=[].slice.call(document.querySelectorAll("[data-i18n]"));
  var EN={};
  nodes.forEach(function(el){EN[el.getAttribute("data-i18n")]=el.innerHTML;});

  function stripTags(s){var d=document.createElement("div");d.innerHTML=s;return d.textContent||d.innerText||"";}

  function apply(lang){
    if(lang!=="es") lang="en";
    document.documentElement.lang=lang;
    nodes.forEach(function(el){
      var key=el.getAttribute("data-i18n");
      var v=(lang==="es" && ES[key]!=null)?ES[key]:EN[key];
      if(v!=null && el.innerHTML!==v) el.innerHTML=v;
    });
    try{ var t=(lang==="es"&&ES["meta.title"])?ES["meta.title"]:EN["meta.title"]; if(t) document.title=stripTags(t); }catch(e){}
    document.querySelectorAll(".langtoggle button").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-setlang")===lang?"true":"false");
    });
  }

  /* ---- language gate ---- */
  var gate=document.getElementById("langgate");
  function closeGate(){ if(!gate)return; gate.hidden=true; document.body.style.overflow=""; }
  function openGate(){ if(!gate)return; gate.hidden=false; document.body.style.overflow="hidden"; var f=gate.querySelector("button"); if(f) f.focus(); }
  function setLang(lang){ try{localStorage.setItem(KEY,lang);}catch(e){} apply(lang); closeGate(); }

  document.querySelectorAll("[data-setlang]").forEach(function(b){
    b.addEventListener("click",function(){ setLang(b.getAttribute("data-setlang")); });
  });
  if(gate){
    gate.addEventListener("keydown",function(e){
      if(e.key==="Escape"){ setLang("en"); return; }
      if(e.key==="Tab"){var b=gate.querySelectorAll("button");if(!b.length)return;var first=b[0],last=b[b.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    });
  }

  var saved=null; try{ saved=localStorage.getItem(KEY); }catch(e){}
  if(saved==="es"||saved==="en"){ apply(saved); }
  else { apply("en"); openGate(); }

  /* ---- subtle view counter ---- */
  try{
    var vcKey=(document.body.getAttribute("data-vc")||"page").replace(/[^a-z0-9_-]/gi,"");
    fetch("https://abacus.jasoncameron.dev/hit/celaya-draftpolicy/"+vcKey)
      .then(function(r){return r.ok?r.json():null;})
      .then(function(d){ if(!d)return; var n=(d.value!=null)?d.value:d.count; if(n==null)return; var c=document.getElementById("vc"); if(c){ c.textContent="· "+Number(n).toLocaleString(); c.hidden=false; } })
      .catch(function(){});
  }catch(e){}
})();
