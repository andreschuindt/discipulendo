import { readFileSync, writeFileSync } from "node:fs";
const file = "public/landing.html";
const checkout = "https://payfast.greenn.com.br/52999/offer/k4Cdeb";
let html = readFileSync(file, "utf8");
const offer = [
'<section class="pricing pricing-nova" id="inscricao">',
'<div class="pricing-copy"><p class="section-kicker">A decisão é sua. O convite também.</p><h2>Daqui a alguns meses, você pode agradecer por ter dado <em>o primeiro passo hoje.</em></h2><p>Por cerca de R$ 1,23 ao dia, comece uma jornada para compreender a Palavra, criar raízes e refletir Cristo no cotidiano.</p><div class="pricing-quote">“Você não está comprando mais informação. Está escolhendo formação.”</div></div>',
'<div class="price-card"><div class="price-labels"><span>CONDIÇÃO EXCLUSIVA</span><span>SEM FIDELIZAÇÃO</span></div>',
'<div class="coupon-highlight"><small>Um cupom exclusivo para você.</small><strong>SOMOSDISCIPULOS</strong><span>Juntos somos discípulos de Jesus Cristo.</span></div>',
'<div class="nova-promocao"><div class="preco-de">De <del>R$ 47,00</del> para</div><div class="preco-por"><span class="preco-valor">R$ 37,00</span><span class="preco-periodo">POR MÊS</span></div><div class="cupom-aplicado">com esse cupom acima aplicado.</div></div>',
'<ul class="novos-beneficios"><li>Acesso imediato às aulas já gravadas</li><li>Duas novas aulas guiadas por mês</li><li>Materiais práticos e comunidade exclusiva</li><li>Acesso à Plataforma Alma Cuidada</li></ul>',
'<a class="button button-primary price-button" data-track="checkout_pricing" href="'+checkout+'" target="_blank" rel="noopener noreferrer">Quero começar minha jornada <span aria-hidden="true">→</span></a>',
'<p class="coupon-reminder"><strong>COMPRA SEGURA • CUPOM JÁ INCLUSO</strong><span>Você será direcionado ao checkout oficial.</span></p></div></section>'
].join("");
const pricingSection = /<section class="pricing(?: pricing-nova)?" id="inscricao">[\s\S]*?<\/section>/;
if(!pricingSection.test(html)) throw Error("Seção de preços não encontrada");
html=html.replace(pricingSection,offer);
html=html.replace(/https:\/\/payfast\.greenn\.com\.br\/75450\/offer\/JCF2ZL(?:\?[^"'<>\s]*)?/g,checkout);
html=html.replaceAll("a primeira mensalidade fica por R$ 18,50 e as seguintes por R$ 37,00/mês, sem fidelização.","a mensalidade promocional fica por R$ 37,00/mês, sem fidelização.");
html=html.replaceAll("Começar por R$ 18,50","Começar por R$ 37,00");
const styles = [
'<style id="discipulendo-oferta-revisada">',
'#inscricao.pricing-nova .price-card{background:radial-gradient(circle at 100% 0,#58315d,transparent 40%),linear-gradient(152deg,#3c1a47,#210d30 75%);color:#f6ebdd}',
'#inscricao.pricing-nova .price-labels{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px}',
'#inscricao.pricing-nova .price-labels span{font-size:10px;letter-spacing:.06em;padding:8px 11px;border-radius:50px;background:#533154;color:#ead6e8;font-weight:700}',
'#inscricao.pricing-nova .price-labels span:first-child{background:#60405b;color:#f9dc99}',
'#inscricao.pricing-nova .coupon-highlight{border:1px dashed #d4ac59;border-radius:18px;background:#210f2d;padding:20px 11px;text-align:center;display:block}',
'#inscricao.pricing-nova .coupon-highlight small{display:block;color:#ecdae8;font-size:clamp(12px,2.5vw,15px);text-transform:none;letter-spacing:0;font-weight:400}',
'#inscricao.pricing-nova .coupon-highlight strong{font-family:Georgia,serif;color:#ffe6a7;font-size:clamp(24px,3.7vw,32px);font-weight:700;letter-spacing:.015em;line-height:1.2;display:block;overflow-wrap:anywhere;margin:8px 0}',
'#inscricao.pricing-nova .coupon-highlight span{font-size:12px;color:#eedbe6;font-weight:600}',
'#inscricao.pricing-nova .nova-promocao{background:linear-gradient(140deg,#4b2a55,#3c1c49);border-radius:20px;text-align:center;margin:22px 0 27px;padding:24px 13px 22px}',
'#inscricao.pricing-nova .preco-de{font:400 clamp(21px,4vw,30px)/1.2 Georgia,serif;color:#f3e5e6}',
'#inscricao.pricing-nova .preco-de del{text-decoration-color:#e7a0ad;text-decoration-thickness:2px}',
'#inscricao.pricing-nova .preco-por{font:700 clamp(34px,6vw,70px)/1.17 Georgia,serif;letter-spacing:-.045em;color:#ffe6a6;margin:6px 0 16px;white-space:nowrap;display:flex;align-items:center;justify-content:center;gap:clamp(6px,1.4vw,12px)}',
'#inscricao.pricing-nova .preco-por .preco-valor{display:inline-block;min-width:0}',
'#inscricao.pricing-nova .preco-por .preco-periodo{display:inline-block;flex:0 0 auto;border:1px solid rgba(245,214,146,.65);background:linear-gradient(135deg,rgba(241,193,103,.15),rgba(89,47,96,.35));border-radius:99px;padding:6px 10px;color:#ffe3a3;font:800 11px/1.2 Arial,sans-serif;letter-spacing:.045em;box-shadow:0 0 14px rgba(236,183,90,.12)}',
'#inscricao.pricing-nova .cupom-aplicado{display:inline-block;max-width:100%;box-sizing:border-box;background:linear-gradient(105deg,#f8df9e,#d5a54e);color:#2c1136;font-family:Georgia,serif;font-size:clamp(13px,2.5vw,16px);font-weight:700;padding:11px 17px;border-radius:50px}',
'#inscricao.pricing-nova .novos-beneficios{list-style:none;padding:0;margin:20px 0 32px}',
'#inscricao.pricing-nova .novos-beneficios li{display:flex;align-items:baseline;gap:13px;color:#f9eeda;font-size:15px;line-height:1.5;margin:17px 0}',
'#inscricao.pricing-nova .novos-beneficios li::before{content:"✦";font-size:15px;color:#e7bf6d;flex:0 0 auto}',
'#inscricao.pricing-nova .price-button{width:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:50px;min-height:57px;text-align:center;background:linear-gradient(105deg,#f8df9b,#caa04d);color:#27132d;font-weight:800}',
'#inscricao.pricing-nova .coupon-reminder{text-align:center;margin-top:18px}',
'#inscricao.pricing-nova .coupon-reminder strong{display:block;font-size:11px;letter-spacing:.04em;color:#f7da99}',
'#inscricao.pricing-nova .coupon-reminder span{display:block;font:italic 13px/1.45 Georgia,serif;color:#e3cee1;margin-top:5px}',
'@media(max-width:600px){#inscricao.pricing-nova .price-card{padding:21px 16px}#inscricao.pricing-nova .coupon-highlight strong{font-size:clamp(22px,6vw,30px)}#inscricao.pricing-nova .preco-por{font-size:clamp(32px,9vw,52px);gap:7px}#inscricao.pricing-nova .preco-periodo{font-size:10px;padding:5px 8px}#inscricao.pricing-nova .novos-beneficios li{font-size:14px}}',
'@media(max-width:360px){#inscricao.pricing-nova .preco-por{font-size:clamp(29px,9vw,35px);gap:6px}#inscricao.pricing-nova .preco-periodo{font-size:9px;padding:5px 6px}}',
'</style>'
].join("");
if(!html.includes('id="discipulendo-oferta-revisada"'))html=html.replace("</head>",styles+"</head>");
for(const must of ["SOMOSDISCIPULOS","R$ 37,00",checkout,"Um cupom exclusivo para você."])if(!html.includes(must))throw Error("Falta conteúdo: "+must);
if(html.includes("18,50")||html.includes("50% OFF"))throw Error("Preço promocional antigo permanece");
writeFileSync(file,html);
console.log("Página oficial corrigida: "+file+" ("+html.length+" caracteres)");
