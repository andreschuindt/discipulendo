"use client";
import { useEffect } from "react";
import type { ReactNode } from "react";

const checkout = "https://payfast.greenn.com.br/75450/offer/JCF2ZL";
const css = [
"#inscricao.nova-oferta{padding:68px 20px 80px;color:#f6e9d5;background:linear-gradient(150deg,#361741,#200b2d);}",
"#inscricao .oferta-inner{max-width:790px;margin:auto}",
"#inscricao .oferta-intro{text-align:center;max-width:720px;margin:0 auto 30px}",
"#inscricao .oferta-intro .over{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#efc87e}",
"#inscricao .oferta-intro h2{font:400 clamp(30px,5vw,48px)/1.12 Georgia,serif;color:#f8dea5;margin:14px 0}",
"#inscricao .oferta-intro p{font-size:15px;line-height:1.7;color:#e2d1df}",
"#inscricao .oferta-card{box-sizing:border-box;max-width:580px;margin:0 auto;padding:clamp(20px,4vw,34px);background:radial-gradient(circle at 100% 0%,#5d325b,transparent 42%),linear-gradient(155deg,#371741,#240e32);border-radius:24px;box-shadow:0 25px 80px #12051f77}",
"#inscricao .oferta-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}",
"#inscricao .oferta-tag{background:#4f3052;color:#ecd6ec;padding:7px 12px;font-size:11px;font-weight:700;text-transform:uppercase;border-radius:32px}",
"#inscricao .oferta-tag:first-child{background:#65405a;color:#ffe3a3}",
"#inscricao .oferta-cupom{border:1px dashed #d5a95a;border-radius:17px;padding:18px 10px;text-align:center;background:#1f0d2b}",
"#inscricao .oferta-cupom .hint{display:block;font-size:14px;color:#eadddf}",
"#inscricao .oferta-cupom strong{display:block;font:700 clamp(25px,6vw,38px)/1.3 Georgia,serif;color:#ffe4a4;margin:6px 0;overflow-wrap:anywhere}",
"#inscricao .oferta-cupom small{font-size:12px;color:#e5d7e3}",
"#inscricao .oferta-preco{background:#43234e;text-align:center;border-radius:20px;padding:23px 14px;margin:22px 0}",
"#inscricao .oferta-preco .antes{font:clamp(20px,4vw,28px) Georgia,serif;color:#f4e5e4}",
"#inscricao .oferta-preco s{text-decoration-color:#e7a0a9;text-decoration-thickness:2px}",
"#inscricao .oferta-preco .valor{font:700 clamp(56px,11vw,90px)/1.15 Georgia,serif;letter-spacing:-.045em;color:#ffe3a1;margin:8px 0 16px}",
"#inscricao .oferta-preco .aplicado{display:inline-block;border-radius:30px;background:linear-gradient(100deg,#f7de96,#cfa24f);color:#281130;font-weight:800;padding:10px 18px;font-size:clamp(12px,3vw,16px)}",
"#inscricao .oferta-beneficios{list-style:none;margin:24px 0 30px;padding:0}",
"#inscricao .oferta-beneficios li{display:flex;gap:12px;font-size:15px;line-height:1.5;margin:15px 0;color:#f8eddf}",
"#inscricao .oferta-beneficios li:before{content:'✦';color:#e9c16b}",
"#inscricao .oferta-cta{display:flex;align-items:center;justify-content:center;gap:22px;text-align:center;min-height:58px;border-radius:35px;padding:10px 18px;background:linear-gradient(100deg,#f9e19d,#cca04d);color:#23102d;text-decoration:none;font-weight:800;font-size:15px}",
"#inscricao .oferta-footer{text-align:center;font-size:11px;font-weight:800;letter-spacing:.04em;margin:19px 0 4px;color:#f5d895}",
"#inscricao .oferta-help{text-align:center;font:italic 13px Georgia,serif;color:#e6d1e7;margin:0}",
"@media(max-width:500px){#inscricao.nova-oferta{padding:50px 15px 65px}#inscricao .oferta-card{padding:21px 16px}#inscricao .oferta-beneficios li{font-size:14px}}"
].join("\n");
function updateOffer() {
 const area=document.querySelector<HTMLElement>("#inscricao");
 if(!area) return;
 if(!document.getElementById("oferta-revisada-css")) {
  const s=document.createElement("style");s.id="oferta-revisada-css";s.textContent=css;document.head.appendChild(s);
 }
 if(area.dataset.updatedOferta!=="yes") {
  area.dataset.updatedOferta="yes";area.classList.add("nova-oferta");
  area.innerHTML=[
  '<div class="oferta-inner"><div class="oferta-intro">',
  '<div class="over">A decisão é sua. O convite também.</div>',
  '<h2>Daqui a alguns meses, você pode agradecer por ter dado o primeiro passo hoje.</h2>',
  '<p>Comece uma jornada para compreender a Palavra, criar raízes e refletir Cristo no cotidiano. Você não está comprando mais informação. Está escolhendo formação.</p>',
  '</div><div class="oferta-card"><div class="oferta-tags">',
  '<span class="oferta-tag">Condição exclusiva</span><span class="oferta-tag">Sem fidelização</span></div>',
  '<div class="oferta-cupom"><span class="hint">Um cupom exclusivo para você.</span><strong>SOMOSDISCIPULOS</strong><small>Juntos somos discípulos de Jesus Cristo.</small></div>',
  '<div class="oferta-preco"><div class="antes">De <s>R$ 47,00</s> para</div><div class="valor">R$ 37,00</div><span class="aplicado">com esse cupom acima aplicado.</span></div>',
  '<ul class="oferta-beneficios"><li>Acesso imediato às aulas já gravadas</li><li>Duas novas aulas guiadas por mês</li><li>Materiais práticos e comunidade exclusiva</li><li>Acesso à Plataforma Alma Cuidada</li></ul>',
  '<a class="oferta-cta" href="'+checkout+'" rel="noopener noreferrer">Quero começar minha jornada <span aria-hidden="true">→</span></a>',
  '<p class="oferta-footer">COMPRA SEGURA • CUPOM JÁ INCLUSO</p>',
  '<p class="oferta-help">Você será direcionado ao checkout oficial.</p>',
  '</div></div>'
  ].join("");
 }
 document.querySelectorAll<HTMLAnchorElement>('a[href*="payfast.greenn.com.br/75450/offer/"]').forEach(a=>a.href=checkout);
 const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes:Text[]=[];
 while(walk.nextNode())nodes.push(walk.currentNode as Text);
 for(const n of nodes){
  const v=n.nodeValue||"";
  if(v.includes("a primeira mensalidade fica por R$ 18,50 e as seguintes por R$ 37,00/mês"))
   n.nodeValue=v.replace("a primeira mensalidade fica por R$ 18,50 e as seguintes por R$ 37,00/mês","a mensalidade fica por R$ 37,00/mês");
  else if(v.includes("Começar por R$ 18,50"))n.nodeValue=v.replace("Começar por R$ 18,50","Começar por R$ 37,00");
  else if(v.includes("sessenta e dois centavos por dia no primeiro mês"))n.nodeValue=v.replace("sessenta e dois centavos por dia no primeiro mês","um real e vinte e três centavos por dia");
 }
}
export default function Template({children}:{children:ReactNode}){
 useEffect(()=>{updateOffer()},[]);
 return <>{children}</>;
}
