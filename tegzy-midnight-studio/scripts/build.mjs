import {build} from 'esbuild';
import {access} from 'node:fs/promises';
await Promise.all(['dist/index.html','dist/style.css','dist/assets/monitor.glb','dist/assets/lamp.glb','dist/assets/keyboard.glb'].map(p=>access(p)));
await build({entryPoints:['src.js'],bundle:true,minify:true,outfile:'dist/app.js',target:['es2022'],legalComments:'eof'});
console.log('Built portfolio in dist/');
