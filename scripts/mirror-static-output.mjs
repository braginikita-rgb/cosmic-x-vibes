import { cp, mkdir, rm, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = process.cwd();
const clientDir = resolve(root, "dist", "client");
const distDir = resolve(root, "dist");
const outputPublicDir = resolve(root, ".output", "public");

async function assertDirectory(path) {
  const info = await stat(path);
  if (!info.isDirectory()) {
    throw new Error(`${path} is not a directory`);
  }
}

async function assertFile(path) {
  const info = await stat(path);
  if (!info.isFile()) {
    throw new Error(`${path} is not a file`);
  }
}

function assertInsideWorkspace(path) {
  if (!path.startsWith(root)) {
    throw new Error(`Refusing to write outside workspace: ${path}`);
  }
}

async function copyClientTo(targetDir, { clean }) {
  assertInsideWorkspace(targetDir);

  if (clean) {
    await rm(targetDir, { recursive: true, force: true });
  }

  await mkdir(targetDir, { recursive: true });
  await cp(clientDir, targetDir, { recursive: true, force: true });
}

await assertDirectory(clientDir);
await assertFile(join(clientDir, "index.html"));

await copyClientTo(outputPublicDir, { clean: true });
await copyClientTo(distDir, { clean: false });

console.log("Static output mirrored to dist/ and .output/public/");
