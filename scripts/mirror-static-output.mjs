import { cp, mkdir, rm, stat, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = process.cwd();
const clientDir = resolve(root, "dist", "client");
const distDir = resolve(root, "dist");
const outputDir = resolve(root, ".output");
const outputPublicDir = resolve(root, ".output", "public");
const outputServerDir = resolve(root, ".output", "server");

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

await mkdir(outputServerDir, { recursive: true });
await writeFile(
  join(outputServerDir, "index.mjs"),
  `import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const publicDir = join(import.meta.dirname, "..", "public");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

function cacheControl(filePath) {
  if (filePath.endsWith(".html")) return "no-cache, no-store, must-revalidate";
  if (/\\.(?:js|css|mjs|png|jpe?g|gif|webp|avif|svg|ico|woff2|mp4)$/.test(filePath)) {
    return "public, max-age=31536000, immutable";
  }
  return "public, max-age=3600";
}

function resolvePath(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const normalized = normalize(pathname).replace(/^([/\\\\])+/, "");
  return join(publicDir, normalized || "index.html");
}

async function findFile(url) {
  const requested = resolvePath(url);

  try {
    const info = await stat(requested);
    if (info.isFile()) return requested;
    if (info.isDirectory()) {
      const indexFile = join(requested, "index.html");
      const indexInfo = await stat(indexFile);
      if (indexInfo.isFile()) return indexFile;
    }
  } catch {}

  return join(publicDir, "index.html");
}

createServer(async (req, res) => {
  try {
    const filePath = await findFile(req.url || "/");
    const type = contentTypes[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, {
      "content-type": type,
      "cache-control": cacheControl(filePath),
    });
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(\`xXx Sound static server listening on :\${port}\`);
});
`,
);
await writeFile(
  join(outputDir, "package.json"),
  JSON.stringify({ type: "module", scripts: { start: "node server/index.mjs" } }, null, 2),
);

console.log("Static output mirrored to dist/ and .output/ with server/index.mjs");
