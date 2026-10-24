import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const args=process.argv.slice(2);const portIndex=args.indexOf('--port');const port=Number(portIndex>=0?args[portIndex+1]:process.env.PORT||3000);const hostIndex=args.indexOf('--host');const host=hostIndex>=0?args[hostIndex+1]:'0.0.0.0';
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.glb':'model/gltf-binary','.json':'application/json'};
createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);return res.end()}if((await stat(file)).isDirectory())file=resolve(file,'index.html');res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(await readFile(file))}catch{res.writeHead(404);res.end('Not found')}}).listen(port,host,()=>console.log(`Open http://${host}:${port}`));
