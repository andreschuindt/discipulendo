import { writeFileSync, readFileSync } from "node:fs";
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
<rect width="64" height="64" rx="14" fill="#261032"/>
<rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="#e9c978" stroke-opacity=".32" stroke-width="1.5"/>
<path fill="#f5d894" fill-rule="evenodd" d="M16 14H36C49 14 56 22 56 32S49 50 36 50H16V45H21V19H16V14ZM31 22V42H36C43 42 47 38 47 32S43 22 36 22H31Z"/>
</svg>`;
const bytes = Buffer.from(svg, "utf8");
writeFileSync("public/favicon.svg", svg);
const raster = async (size) => sharp(bytes, { density: 300 }).resize(size, size).png().toBuffer();
writeFileSync("public/favicon-32x32.png", await raster(32));
writeFileSync("public/apple-touch-icon.png", await raster(180));
writeFileSync("public/icon-192.png", await raster(192));
writeFileSync("public/icon-512.png", await raster(512));
const icon = await raster(64);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(64, 6);
header.writeUInt8(64, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(icon.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync("public/favicon.ico", Buffer.concat([header, icon]));

const landing = "public/landing.html";
let html = readFileSync(landing, "utf8");
for (const filename of ["favicon.svg", "favicon-32x32.png", "favicon.ico", "apple-touch-icon.png"]) {
  html = html.replaceAll('href="/'+filename+'"', 'href="/'+filename+'?v=discipulendo-20261109"');
}
if (!html.includes('favicon.svg?v=discipulendo-20261109')) {
  throw new Error("Não foi possível atualizar a referência do favicon no HTML.");
}
writeFileSync(landing, html);
console.log("Favicon DISCIPULENDO atualizado: SVG, PNG, ICO e ícones de dispositivos.");
