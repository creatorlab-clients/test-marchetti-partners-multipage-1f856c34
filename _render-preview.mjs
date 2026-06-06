import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir    = path.dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(fs.readFileSync(path.join(dir, 'template.config.json'), 'utf8'));

// Build context from slot defaults
const ctx = {};
for (const [key, slot] of Object.entries(config.slots)) {
  if (slot.default !== undefined) ctx[key] = slot.default;
}

// Ensure frameBaseUrl is set
if (!ctx.frameBaseUrl) {
  ctx.frameBaseUrl = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/legale-002-multipage/frames/';
}

// Process script.js: substitute frameBaseUrl placeholder
const scriptSrc       = fs.readFileSync(path.join(dir, 'script.js'), 'utf8');
const scriptProcessed = scriptSrc.replace(/\{\{frameBaseUrl\}\}/g, ctx.frameBaseUrl);

// Pages to render
const pages = [
  { src: 'index.html',    out: 'index-preview.html'    },
  { src: 'praticas.html', out: 'praticas-preview.html' },
  { src: 'equipe.html',   out: 'equipe-preview.html'   },
  { src: 'contato.html',  out: 'contato-preview.html'  },
];

// Page names for link rewriting in preview
const pageNames = ['index', 'praticas', 'equipe', 'contato'];

for (const { src, out } of pages) {
  const template = fs.readFileSync(path.join(dir, src), 'utf8');
  const compiled = Handlebars.compile(template, { strict: false });
  let html = compiled(ctx);

  // Inline processed script
  html = html.replace(
    /<script src="script\.js"><\/script>/,
    `<script>\n${scriptProcessed}\n</script>`
  );

  // Rewrite inter-page links to point at preview files
  for (const p of pageNames) {
    html = html.replace(new RegExp(`href="${p}\\.html"`, 'g'), `href="${p}-preview.html"`);
  }

  fs.writeFileSync(path.join(dir, out), html, 'utf8');
  console.log(`✓ ${out}`);
}

console.log('\nPreview pronta. Apri:');
console.log('  http://localhost:8002/template-legale-002-multipage/index-preview.html');
console.log('  http://localhost:8002/template-legale-002-multipage/praticas-preview.html');
console.log('  http://localhost:8002/template-legale-002-multipage/equipe-preview.html');
console.log('  http://localhost:8002/template-legale-002-multipage/contato-preview.html');
