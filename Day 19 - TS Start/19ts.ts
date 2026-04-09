export{}; // This file is intentionally left empty to ensure that the TypeScript compiler treats this directory as a module.

let message: string = "Hello, this is TypeScript"

document.getElementById("demo")!.innerHTML = message;

// npm install -g typescript
// tsc nameOfTypeScriptFile.ts