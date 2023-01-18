import{f as a,o as s,a as o,h as e,r as c,i as r,b as u}from"./entry.9003f90e.js";import{u as h}from"./composables.221a539e.js";const d={},p={class:"bloc"},m=e("h3",null,"Ajouter une nouvelle ressource",-1),f=e("form",{action:"https://avec.lucaslacroix.com/nouvelle-ressource/",method:"POST"},[e("div",{class:"ensemble"},[e("label",{for:"lien"},"Lien de la ressource"),e("br"),e("input",{type:"url",id:"lien",name:"lien",maxlength:"350",required:""})]),e("button",{type:"submit"},"Envoyer la ressource")],-1),g=[m,f];function b(n,t){return s(),o("section",p,g)}const v=a(d,[["render",b]]);const x={},y={class:"bloc"},w=e("h3",null,"Besoin d'une ressource particuli\xE8re ?",-1),$=e("form",{action:"https://avec.lucaslacroix.com/recherche/",method:"POST"},[e("textarea",{id:"besoin",name:"besoin",rows:"5",cols:"33",placeholder:"Quelle est votre besoin en terme de ressource",minlength:"25",maxlength:"800",required:""}),e("div",{class:"ensemble"},[e("label",{for:"contact"},"Votre courriel"),e("br"),e("input",{type:"email",id:"email",name:"email",maxlength:"140",required:""})]),e("button",{type:"submit"},"Envoyer le message")],-1),D=[w,$];function j(n,t){return s(),o("section",y,D)}const k=a(x,[["render",j]]);const q={class:"contenu"},E=u('<h4>Explorer les</h4><h1>Ressources</h1><p> Bienvenue sur le site des ressources en design graphique et d&#39;interaction. </p><h2>Derniers ajouts</h2><div class="groupe-element"><a href="https://datavizproject.com/" target="_blank" rel="nofollow" class="element"><h3>Dataviz Project</h3><p>Dictionnaire de la data viz</p><p class="info"> UI Design \xB7 Design Graphique</p></a><a href="https://www.shortcogs.com/" target="_blank" rel="nofollow" class="element"><h3>Short Cogs</h3><p>Guide pratique des bias cognitifs</p><p class="info"> UX Design</p></a><a href="https://www.ecoindex.fr/" target="_blank" rel="nofollow" class="element"><h3>Eco Index</h3><p>G\xE9n\xE9rateur d&#39;audit d&#39;\xE9co-conception de site</p></a><a href="https://tarekraafat.github.io/autoComplete.js/" target="_blank" rel="nofollow" class="element"><h3>autoComplete.js</h3><p>Librairie js pour auto compl\xE9tion des champs text</p><p class="info">Web \xB7 Exp\xE9rience Utilisateur</p></a></div><h2>Contribuer</h2>',6),B={class:"colonnes"},V={__name:"index",setup(n){const t=c("Ressources en Design graphique, d'interfaces et d\u2019exp\xE9riences"),i=c("Documentation, outil en ligne, logiciel, m\xE9thodes");return h({title:t,meta:[{name:"description",content:i}]}),(N,C)=>{const l=v,_=k;return s(),o("div",q,[E,e("div",B,[r(l),r(_)])])}}};export{V as default};