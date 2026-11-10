import { readFileSync, writeFileSync } from "node:fs";

const destination = "https://inspira.greenn.club/vitrine";
const oldDestination = "https://almacuidada.my.canva.site/vemser";
const ctaText = "Conheça a plataforma do Projeto Inspira";
const css = String.raw`<style id="inspira-vitrine-destaque-css">
#inicio ~ * .inspira-vitrine-cta,
a.inspira-vitrine-cta {
  position:relative; display:inline-flex; align-items:center; justify-content:center;
  gap:15px; max-width:100%; min-height:68px; box-sizing:border-box;
  padding:13px 27px; border-radius:999px;
  border:1px solid #f7e3aa; background:linear-gradient(110deg,#ffe7a4 0%,#f5d38b 45%,#d6a649 100%) !important;
  color:#281532 !important; font-size:clamp(14px,1.6vw,16px); font-weight:850;
  line-height:1.35; letter-spacing:.005em; text-align:center;
  box-shadow:0 5px 0 rgba(82,43,23,.28),0 14px 38px rgba(233,184,93,.28),0 0 0 5px rgba(231,193,106,.08);
  text-decoration:none; transition:transform .2s ease,box-shadow .2s ease,filter .2s ease;
}
a.inspira-vitrine-cta:hover,a.inspira-vitrine-cta:focus-visible {
  transform:translateY(-3px);filter:brightness(1.055);
  box-shadow:0 8px 0 rgba(82,43,23,.23),0 20px 46px rgba(233,184,93,.42),0 0 0 5px rgba(231,193,106,.14);
}
a.inspira-vitrine-cta:focus-visible {outline:3px solid #fff1bc;outline-offset:4px;}
a.inspira-vitrine-cta span[aria-hidden] {
  display:inline-grid;place-items:center;flex:none;width:31px;height:31px;border-radius:50%;
  background:#3d1b49;color:#ffecb3;line-height:1;font-size:20px;
}
.alma-benefit-closing.inspira-vitrine-highlight {
  border:1px solid rgba(246,213,135,.5);border-radius:28px;
  background:radial-gradient(circle at 95% 15%,rgba(241,193,100,.14),transparent 50%),linear-gradient(130deg,rgba(80,35,87,.58),rgba(33,12,47,.7));
  box-shadow:inset 0 1px 0 rgba(255,234,175,.12),0 18px 55px rgba(24,7,32,.22);
  padding:clamp(24px,4vw,42px);
}
@media(max-width:600px) {
  a.inspira-vitrine-cta{width:100%;min-height:66px;padding:13px 18px;font-size:14px;}
  .alma-benefit-closing.inspira-vitrine-highlight{padding:22px 16px;}
}
@media(prefers-reduced-motion:reduce){
 a.inspira-vitrine-cta{transition:none;}
}
</style>`;

const landingPath = "public/landing.html";
let html = readFileSync(landingPath, "utf8");
const anchorPattern = /<a\b[^>]*class="[^"]*alma-benefit-button-primary[^"]*"[^>]*>[\s\S]*?Conheça a plataforma do Projeto Inspira[\s\S]*?<\/a>/i;
if (!anchorPattern.test(html)) throw new Error("Botão de acesso ao Projeto Inspira não encontrado na landing.");
html = html.replace(anchorPattern, (anchor) => {
  const prev = /href="([^"]+)"/.exec(anchor);
  if (!prev || (prev[1]!==oldDestination && prev[1]!==destination)) {
    throw new Error("Destino atual do botão é inesperado: "+(prev?.[1]??"sem href"));
  }
  return anchor.replace(/href="[^"]+"/, 'href="'+destination+'"')
               .replace('alma-benefit-button-primary', 'alma-benefit-button-primary inspira-vitrine-cta')
               .replace('target="_blank"', 'target="_blank" aria-label="Abrir a vitrine do Projeto Inspira em nova aba"');
});
html=html.replace('class="alma-benefit-closing"', 'class="alma-benefit-closing inspira-vitrine-highlight"');
if(!html.includes('id="inspira-vitrine-destaque-css"')) html=html.replace("</head>",css+"</head>");
if(!html.includes(destination) || !html.includes('inspira-vitrine-cta'))throw Error("CTA incorreta");
writeFileSync(landingPath,html);

for(const p of ["app/page.tsx","app/reference-fixes.css"]) {
 try {
  let txt=readFileSync(p,"utf8");
  if(p.endsWith(".tsx") && txt.includes(oldDestination)){
    txt=txt.replaceAll(oldDestination,destination);
    writeFileSync(p,txt);
  }
 } catch(err){if(err.code!=="ENOENT")throw err;}
}
console.log("Botão da vitrine do Projeto Inspira atualizado e destacado: "+destination);
