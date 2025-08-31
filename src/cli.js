// CLI-Schnittstelle für das Versionsverwaltungssystem

const readline = require('readline');
const app = require('./app');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Benutzerinteraktionen implementieren
rl.question('Was möchten Sie tun? ', (answer) => {
    console.log(`Sie haben: ${answer}`);
    rl.close();
});
