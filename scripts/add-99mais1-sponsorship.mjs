import { readFileSync, writeFileSync } from "node:fs";

const file = "public/landing.html";
const url = "https://99mais1.vercel.app/";
const sponsorUrl = "#inscricao";
const detailsUrl = url;
let html = readFileSync(file, "utf8");

const section = [
'<section class="s99-section" id="patrocine-99mais1" aria-labelledby="s99-title">',
'  <div class="s99-shell">',
'    <div class="s99-body">',
'      <p class="s99-eyebrow"><span aria-hidden="true">✦</span> DISCIPULENDO APOIA • IMPACTO SOCIAL</p>',
'      <p class="s99-tag">PROJETO 99 + 1</p>',
'      <h2 id="s99-title">Seja um(a) <em>patrocinador(a)</em> de quem cuida de vidas.</h2>',
'      <p class="s99-deck">Quem foi enviado também precisa ser cuidado.</p>',
'      <p class="s99-copy">Há missionários servindo em campos urbanos e transculturais enquanto enfrentam solidão, sobrecarga emocional e distância de suas redes de apoio. O <strong>PROJETO 99 + 1</strong> nasce para oferecer um espaço seguro de escuta, aconselhamento terapêutico e psicoeducação com perspectiva cristocêntrica — sem custo para missionários em campo.</p>',
'      <div class="s99-mini-facts" aria-label="Como funciona o Projeto 99 + 1">',
'        <span><strong>02</strong> encontros online por mês</span>',
'        <span><strong>100%</strong> gratuito para missionários</span>',
'      </div>',
'      <div class="s99-commitment">',
'        <span class="s99-commitment-icon" aria-hidden="true">✦</span>',
'        <p><strong>Um compromisso que pode continuar mês após mês.</strong> Apoios recorrentes ao 99 + 1 podem sustentar facilitação, materiais, tecnologia e a expansão do cuidado. Na seção acima, conheça também a assinatura mensal do DISCIPULENDO.</p>',
'      </div>',
'      <div class="s99-actions">',
'        <a class="s99-primary" href="' + sponsorUrl + '" aria-label="Ir à oferta de assinatura mensal DISCIPULENDO na seção acima"><span aria-hidden="true">♡</span> Quero ser patrocinador(a) <span class="s99-arrow" aria-hidden="true">↑</span></a>',
'        <a class="s99-secondary" href="' + detailsUrl + '" target="_blank" rel="noopener noreferrer">Conheça o PROJETO 99 + 1 <span aria-hidden="true">→</span></a>',
'      </div>',
'      <p class="s99-note">Ao acessar a oferta acima, você encontrará a assinatura mensal do DISCIPULENDO (R$ 37,00/mês), processada pela Greenn — não uma doação automaticamente destinada ao 99 + 1. Para patrocínio direto ao projeto, consulte o site oficial. O apoio não dá acesso a dados ou relatos pessoais dos missionários.</p>',
'    </div>',
'    <aside class="s99-art" aria-label="Simbolismo do Projeto 99 + 1: ninguém fica para trás">',
'      <div class="s99-halo">',
'        <span class="s99-art-top">UM CHAMADO AO CUIDADO</span>',
'        <div class="s99-number"><span>99</span><b>+</b><span>1</span></div>',
'        <span class="s99-art-equals">= 100</span>',
'      </div>',
'      <div class="s99-art-quote">“Nenhum chamado deveria exigir que alguém sofresse sozinho.”</div>',
'      <div class="s99-art-caption">MISSÃO • ESCUTA • PRESENÇA</div>',
'    </aside>',
'  </div>',
'</section>'
].join("");

const css = [
'<style id="s99-styles">',
'.s99-section{position:relative;isolation:isolate;padding:clamp(58px,7vw,108px) clamp(16px,4vw,36px);background:linear-gradient(180deg,#1b0d27 0%,#281030 42%,#1f0d2c 100%);overflow:hidden;color:#f5e7d5}',
'.s99-section::before{content:"";position:absolute;width:600px;height:600px;top:-410px;right:-180px;border-radius:50%;background:radial-gradient(circle,rgba(221,171,81,.17),transparent 68%);pointer-events:none;z-index:-1}',
'.s99-section::after{content:"";position:absolute;width:420px;height:420px;bottom:-340px;left:-150px;border-radius:50%;background:radial-gradient(circle,rgba(73,143,134,.16),transparent 73%);pointer-events:none;z-index:-1}',
'.s99-section .s99-shell{position:relative;max-width:1160px;display:grid;grid-template-columns:minmax(0,1.42fr) minmax(285px,.85fr);gap:clamp(24px,5vw,65px);align-items:center;margin:0 auto;padding:clamp(26px,4.5vw,66px);border:1px solid rgba(242,206,129,.42);border-radius:32px;background:linear-gradient(132deg,rgba(65,30,71,.83),rgba(30,14,46,.96));box-shadow:0 25px 85px rgba(9,3,18,.35),inset 0 1px 0 rgba(255,227,175,.13)}',
'.s99-section .s99-shell::before{position:absolute;content:"";top:0;left:11%;right:11%;height:1px;background:linear-gradient(90deg,transparent,#f8d994,transparent)}',
'.s99-section .s99-eyebrow{display:flex;align-items:center;gap:9px;color:#e9be70;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:850;margin:0 0 24px;line-height:1.5}',
'.s99-section .s99-eyebrow span{font-size:16px}',
'.s99-section .s99-tag{display:inline-flex;align-items:center;border:1px solid rgba(238,195,115,.4);border-radius:40px;background:rgba(235,190,112,.09);padding:7px 14px;margin:0 0 16px;color:#f7dca4;font-size:11px;font-weight:850;letter-spacing:.14em}',
'.s99-section h2{font-family:Georgia,"Times New Roman",serif;font-weight:650;letter-spacing:-.025em;color:#fff1c3;font-size:clamp(33px,4.3vw,60px);line-height:1.11;margin:0 0 20px;max-width:760px}',
'.s99-section h2 em{font-style:italic;color:#f0bd65;font-weight:500}',
'.s99-section .s99-deck{color:#eac584;font-family:Georgia,"Times New Roman",serif;font-style:italic;font-size:clamp(18px,2vw,24px);line-height:1.4;margin:0 0 15px}',
'.s99-section .s99-copy{color:#e8dbe3;line-height:1.75;font-size:clamp(14px,1.3vw,16px);margin:0;max-width:680px}',
'.s99-section .s99-copy strong{color:#ffdfa3}',
'.s99-section .s99-mini-facts{display:flex;gap:11px;flex-wrap:wrap;margin:25px 0 23px}',
'.s99-section .s99-mini-facts span{display:inline-flex;align-items:center;gap:8px;border-radius:999px;border:1px solid rgba(248,222,161,.22);background:rgba(255,243,212,.055);padding:10px 14px;font-size:12px;color:#eee0dc}',
'.s99-section .s99-mini-facts strong{font-family:Georgia,serif;font-size:20px;color:#ffda94;line-height:1}',
'.s99-section .s99-commitment{display:flex;gap:13px;align-items:flex-start;padding:18px 18px 17px;border-left:3px solid #deac59;background:linear-gradient(90deg,rgba(239,184,92,.14),rgba(58,27,69,.12));border-radius:4px 15px 15px 4px}',
'.s99-section .s99-commitment-icon{color:#f6d897;font-size:19px;line-height:1.4;flex:none}',
'.s99-section .s99-commitment p{margin:0;color:#f1e2e4;font-size:13px;line-height:1.7}',
'.s99-section .s99-commitment strong{color:#ffdc98}',
'.s99-section .s99-actions{display:flex;gap:12px;flex-wrap:wrap;margin:26px 0 16px;align-items:center}',
'.s99-section .s99-primary,.s99-section .s99-secondary{display:inline-flex;justify-content:center;align-items:center;gap:11px;text-align:center;min-height:56px;padding:12px 18px;border-radius:99px;box-sizing:border-box;font-size:13px;line-height:1.35;font-weight:850;text-decoration:none!important;transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}',
'.s99-section .s99-primary{background:linear-gradient(110deg,#f7dfa0,#d4a64e);color:#24102b!important;border:1px solid #ffe6a6;box-shadow:0 9px 32px rgba(229,177,89,.28)}',
'.s99-section .s99-primary .s99-arrow{font-size:18px}',
'.s99-section .s99-secondary{color:#f8e8ca!important;background:rgba(255,255,255,.035);border:1px solid rgba(243,202,137,.48)}',
'.s99-section .s99-primary:hover,.s99-section .s99-secondary:hover{transform:translateY(-3px);filter:brightness(1.055)}',
'.s99-section .s99-primary:hover{box-shadow:0 15px 44px rgba(229,177,89,.35)}',
'.s99-section .s99-primary:focus-visible,.s99-section .s99-secondary:focus-visible{outline:3px solid #ffe6a6;outline-offset:4px}',
'.s99-section .s99-note{font-size:11px;line-height:1.6;color:#c8b8c8;margin:3px 0 0;max-width:650px}',
'.s99-section .s99-art{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:420px;border:1px solid rgba(216,181,111,.3);border-radius:28px;padding:36px 19px 27px;text-align:center;background:radial-gradient(circle at 51% 30%,rgba(40,112,106,.32),transparent 58%),linear-gradient(160deg,rgba(15,53,58,.38),rgba(29,17,45,.65));box-shadow:inset 0 1px 0 rgba(255,239,192,.11);overflow:hidden}',
'.s99-section .s99-art:before,.s99-section .s99-art:after{content:"";position:absolute;border:1px solid rgba(248,207,130,.19);border-radius:50%;pointer-events:none}',
'.s99-section .s99-art:before{height:320px;width:320px;top:36px;left:50%;transform:translateX(-50%)}',
'.s99-section .s99-art:after{height:268px;width:268px;top:62px;left:50%;transform:translateX(-50%);border-style:dashed}',
'.s99-section .s99-halo{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:300px}',
'.s99-section .s99-art-top{font-size:10px;letter-spacing:.19em;font-weight:800;color:#d6c19c}',
'.s99-section .s99-number{display:flex;align-items:center;gap:8px;font-family:Georgia,"Times New Roman",serif;color:#ffe1a1;font-size:clamp(67px,9vw,116px);line-height:1;letter-spacing:-.09em;text-shadow:0 6px 37px rgba(246,199,99,.26)}',
'.s99-section .s99-number b{color:#afdbcb;font-size:.48em;font-weight:400;letter-spacing:0;transform:translateY(-2px)}',
'.s99-section .s99-art-equals{font-family:Georgia,"Times New Roman",serif;color:#b5dbce;font-style:italic;font-size:24px;letter-spacing:.07em;margin-top:8px}',
'.s99-section .s99-art-quote{position:relative;z-index:1;max-width:300px;font-family:Georgia,"Times New Roman",serif;color:#f6e8c7;font-size:clamp(17px,1.9vw,21px);font-style:italic;line-height:1.4;margin-top:2px}',
'.s99-section .s99-art-caption{position:relative;z-index:1;color:#b7d9cc;letter-spacing:.18em;font-size:10px;font-weight:800;margin-top:22px}',
'@media(max-width:850px){.s99-section .s99-shell{grid-template-columns:1fr;gap:23px}.s99-section .s99-art{min-height:280px;max-width:none}.s99-section .s99-halo{min-height:200px}.s99-section .s99-art:before{top:-27px}.s99-section .s99-art:after{top:-1px}.s99-section .s99-number{font-size:90px}}',
'@media(max-width:580px){.s99-section{padding:54px 13px}.s99-section .s99-shell{border-radius:23px;padding:25px 18px}.s99-section h2{font-size:clamp(32px,9.2vw,43px)}.s99-section .s99-mini-facts{margin:21px 0}.s99-section .s99-actions{flex-direction:column;align-items:stretch}.s99-section .s99-primary,.s99-section .s99-secondary{width:100%;min-height:58px}.s99-section .s99-art{min-height:250px;padding:18px 15px}.s99-section .s99-halo{min-height:188px}.s99-section .s99-number{font-size:clamp(70px,18vw,98px)}.s99-section .s99-art-quote{font-size:18px}}',
'@media(prefers-reduced-motion:reduce){.s99-section .s99-primary,.s99-section .s99-secondary{transition:none}}',
'</style>'
].join("\n");

if(html.includes('id="patrocine-99mais1"') || html.includes('id="s99-styles"')){
  throw new Error("A seção 99+1 já existe. Revisar antes de inserir uma duplicata.");
}
const footer = /<footer\s+id="contato">/;
if(!footer.test(html)) throw new Error("Não encontrei o rodapé oficial. Sem alterações.");
if(!html.includes('<section class="pricing pricing-nova" id="inscricao">')) throw new Error("Não encontrei a oferta mensal. Sem alterações.");
if(!html.includes("</head>")) throw new Error("Head não encontrado.");
html = html.replace(footer, section+"const pricing = /<section\s+class="pricing pricing-nova"\s+id="inscricao">/;
if(!pricing.test(html)) throw new Error("Não encontrei a seção de inscrição. Sem alterações.");
if(!html.includes("</head>")) throw new Error("Head não encontrado.");
html = html.replace(pricing, section+"$&");");
html = html.replace("</head>",css+"</head>");

for(const check of ['id="patrocine-99mais1"',sponsorUrl,detailsUrl,'id="s99-styles"','id="inscricao"','Quero ser patrocinador(a)']){
 if(!html.includes(check))throw new Error("Falta conteúdo requerido: "+check);
}
if(html.indexOf('id="inscricao"') >= html.indexOf('id="patrocine-99mais1"')) throw new Error("A oferta deve ficar acima do bloco 99 + 1.");
if(html.indexOf('id="patrocine-99mais1"') >= html.indexOf('<footer id="contato">')) throw new Error("O bloco 99 + 1 deve ficar antes do rodapé.");
if(!html.includes('href="#inscricao"'))throw new Error("A navegação para o checkout não foi preservada.");
writeFileSync(file,html);
console.log("Seção PROJETO 99 + 1 posicionada imediatamente antes do rodapé; botões e âncoras preservados.");
