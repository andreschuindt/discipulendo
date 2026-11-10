import { readFileSync, writeFileSync } from "node:fs";

const path = "public/landing.html";
const title = "DISCIPULENDO - Para quem ama Jesus, ler e aprender.";
const image = "https://discipulendo.vercel.app/discipulendo-og-fundadores-por-mes-1080.jpg?v=20261110";
let content = readFileSync(path, "utf8");

const titleTag = /<title[^>]*>[\s\S]*?<\/title>/i;
if (!titleTag.test(content)) throw new Error("HTML sem title.");
content = content.replace(titleTag, "<title>" + title + "</title>");

function replaceMeta(attribute, key, value) {
 const pattern = new RegExp('<meta\\s+[^>]*' + attribute + '="' + key + '"[^>]*>', 'i');
 if (!pattern.test(content)) throw new Error("Tag ausente: " + key);
 content = content.replace(pattern, tag => tag.replace(/content="[^"]*"/, 'content="' + value + '"'));
}
for (const [attr,key,value] of [
 ["property","og:title",title],
 ["property","og:image",image],
 ["property","og:image:secure_url",image],
 ["property","og:image:type","image/jpeg"],
 ["property","og:image:width","1080"],
 ["property","og:image:height","1080"],
 ["property","og:image:alt","DISCIPULENDO — para 100 membros fundadores: de R$ 47,00 por R$ 37,00 por mês"],
 ["name","twitter:title",title],
 ["name","twitter:image",image]
]) replaceMeta(attr,key,value);

const old = "discipulendo-compartilhar-oferta-100-cupons.jpg";
if (content.includes(old)) throw new Error("Imagem antiga ainda no HTML.");
if (!content.includes('name="description"') || !content.includes('property="og:description"')) throw new Error("Descrição original ausente.");
writeFileSync(path,content);
console.log("OG da landing atualizado: "+title+" | "+image);

const layoutPath = "app/layout.tsx";
let layout = readFileSync(layoutPath,"utf8");
layout = layout.replaceAll("https://discipulendo.vercel.app/discipulendo-compartilhar-oferta-100-cupons.jpg",image)
               .replaceAll("DISCIPULENDO | Discipulado Cristão e Formação Espiritual",title)
               .replaceAll("DISCIPULENDO | 100 cupons especiais disponíveis",title);
writeFileSync(layoutPath,layout);
