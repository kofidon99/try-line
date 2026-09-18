import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('site',{recursive:true});
await Promise.all(["app.js","catalog.js","engine.js","platform.js","render.js","style.css","index.html",".nojekyll"].map(f=>copyFile(f,'site/'+f)));
