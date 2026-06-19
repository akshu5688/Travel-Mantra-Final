import { copyFileSync } from 'fs';

copyFileSync('index.source.html', 'index.html');
console.log('Prepared index.html for local dev');
