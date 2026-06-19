import { copyFileSync } from 'fs';

copyFileSync('index.source.html', 'index.html');
console.log('Ready for local dev → http://localhost:5173/');
