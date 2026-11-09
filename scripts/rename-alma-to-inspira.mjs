import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const replacements = [
  ["A contratação é processada pela Greenn e poderá aparecer com o nome Alma Cuidada, plataforma que hospeda a jornada DISCIPULENDO.", "A contratação é processada pela Greenn. Confira a identificação da cobrança no checkout e no comprovante. A jornada DISCIPULENDO integra o Projeto Inspira."],
  ["Conheça mais a Plataforma Alma Cuidada", "Conheça a plataforma do Projeto Inspira"],
  ["Conheça a Plataforma Alma Cuidada", "Conheça a plataforma do Projeto Inspira"],
  ["no ecossistema Alma Cuidada", "no ecossistema do Projeto Inspira"],
  ["ao ecossistema Alma Cuidada", "ao ecossistema do Projeto Inspira"],
  ["do ecossistema Alma Cuidada", "do ecossistema do Projeto Inspira"],
  ["à Plataforma Alma Cuidada", "à plataforma do Projeto Inspira"],
  ["da Plataforma Alma Cuidada", "da plataforma do Projeto Inspira"],
  ["na Plataforma Alma Cuidada", "na plataforma do Projeto Inspira"],
  ["pela Plataforma Alma Cuidada", "pela plataforma do Projeto Inspira"],
  ["para a Plataforma Alma Cuidada", "para a plataforma do Projeto Inspira"],
  ["com a Plataforma Alma Cuidada", "com a plataforma do Projeto Inspira"],
  ["Plataforma Alma Cuidada", "Plataforma do Projeto Inspira"],
  ["pela Alma Cuidada", "pelo Projeto Inspira"],
  ["da Alma Cuidada", "do Projeto Inspira"],
  ["na Alma Cuidada", "no Projeto Inspira"],
  ["à Alma Cuidada", "ao Projeto Inspira"],
  ["a Alma Cuidada", "o Projeto Inspira"],
  ["A Alma Cuidada", "O Projeto Inspira"],
  ["ALMA CUIDADA", "PROJETO INSPIRA"],
  ["alma cuidada", "Projeto Inspira"],
  ["Alma Cuidada", "Projeto Inspira"]
];

const targets = [];
function collect(dir) {
  try {
    for (const entry of readdirSync(dir)) {
      const p=join(dir,entry);
      if (entry==="node_modules" || entry===".next" || entry===".git") continue;
      if (statSync(p).isDirectory()) collect(p);
      else if (/\.(?:tsx?|jsx?|html|md|mdx|json|css|txt|xml|webmanifest)$/i.test(entry)) targets.push(p);
    }
  } catch(err) {
    if(err.code!=="ENOENT")throw err;
  }
}
collect("app");
collect("components");
collect("data");
collect("content");
collect("public");
let total=0, changed=0;
for(const p of targets){
 let source=readFileSync(p,"utf8");
 if(!/alma\s+cuidada/i.test(source))continue;
 let result=source;
 for(const [before,after] of replacements)result=result.split(before).join(after);
 // A remaining literal is a visible or editorial occurrence needing review.
 const rest=result.match(/alma[\s\u00a0]+cuidada/ig);
 if(rest)throw new Error("Não foi possível corrigir completamente: "+p+" => "+rest.length+" ocorrências");
 if(result!==source) {
   const count=(source.match(/alma[\s\u00a0]+cuidada/ig)||[]).length;
   total+=count;changed++;
   writeFileSync(p,result);
   console.log("Projeto Inspira em "+p+": "+count+" alteração(ões)");
 }
}
if(total===0) throw Error("Nenhuma ocorrência encontrada nos arquivos do site; revisar geração da página.");
if(!readFileSync("public/landing.html","utf8").includes("Projeto Inspira")) throw Error("Landing não contém marca nova.");
if(readFileSync("public/landing.html","utf8").includes("Alma Cuidada"))throw Error("Landing ainda contém marca antiga.");
console.log("Substituições concluídas: "+total+" ocorrências em "+changed+" arquivo(s), com concordância e preposições ajustadas.");
