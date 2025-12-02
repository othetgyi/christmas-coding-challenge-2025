const { execSync } = require('child_process');
const pkg = require('./package.json');

const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

for (const [dep, version] of Object.entries(allDeps)) {
    try {
        const result = execSync(`npm view ${dep}@${version} time --json`).toString();
        const time = JSON.parse(result);
        console.log(`${dep}@${version}: ${time[version]}`);
    } catch (e) {
        console.log(`${dep}@${version}: Not found`);
    }
}