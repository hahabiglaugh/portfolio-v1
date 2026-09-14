# 部署

项目使用 Next.js App Router 页面结构，原构建运行于 Vinext + Vite。
保留 `npm run build`、`dev`、`start` 及 `vite.config.ts` 的 Vercel/Nitro 部署逻辑。
新增独立 Next.js 静态导出入口，不修改内容、CSS 或 public 文件。

## GitHub Pages

1. 在仓库 Settings → Pages → Build and deployment 中将 Source 设为 **GitHub Actions**。
2. 推送到 `main`，或手动运行 **Deploy to GitHub Pages**。
3. 唯一的 Pages workflow：`.github/workflows/deploy-pages.yml`。
4. 默认访问地址：https://hahabiglaugh.github.io/portfolio-v1/ 。

Workflow 使用 Node.js 22、`npm ci`、`npm run build:pages`，上传 `out` 并通过
`actions/deploy-pages` 发布。无需提交 `out`，也无需 `gh-pages` 分支。

本地验证（默认 `/portfolio-v1`）：

```sh
npm ci
npm run build:pages
npm run verify:pages
```

`basePath` 同时处理 Next.js 的 CSS/JS 路径，因此不另设 CDN `assetPrefix`。
原生链接、图片、视频封面、视频和 PDF 通过 `withBasePath` 处理；页内锚点和外链不变。
`trailingSlash` 为子页面生成目录下的 `index.html`，支持直接访问和刷新。
图片使用静态资源，不依赖图片优化服务器。三个作品 slug 在构建时生成。

## 后续绑定 lisijing.xyz

配置域名 DNS，并在仓库 Settings → Pages → Custom domain 设置 `lisijing.xyz`。
随后重新运行 workflow：`actions/configure-pages` 的 `base_path` 会变为空字符串，
新构建将使用根路径。不需要改源码或写死域名，也不需要添加 CNAME 文件。
静态导出的路径在构建时固定，改变域名设置后必须重新构建。

本地模拟根路径构建（PowerShell）：

```powershell
$env:NEXT_PUBLIC_BASE_PATH = ''
npm run build:pages
npm run verify:pages
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Vercel 继续使用原 `npm run build`；不要在 Vercel 设置 `STATIC_EXPORT` 或
`NEXT_PUBLIC_BASE_PATH`。静态导出新增的 Next.js 类型配置与原 Vinext 类型配置分开。

## 本次文件变更

- `package.json`、`package-lock.json`：新增固定版本 Next.js 和静态构建、校验命令。
- `next.config.ts`、`tsconfig.next.json`：条件静态导出、路径及独立类型配置。
- `scripts/build-pages.mjs`、`scripts/verify-pages.mjs`：跨平台构建及导出资源校验。
- `.github/workflows/deploy-pages.yml`：main 自动构建、校验、发布。
- `lib/deployment-path.ts`：统一处理根路径和仓库子路径。
- `app/portfolio.tsx`、`app/about/page.tsx`、`app/archive/page.tsx`：资源和链接路径适配。
- `app/work/[slug]/page.tsx`：生成三个静态作品路由及路径适配。
- `app/work/[slug]/mynutchos-case-study.tsx`、`xiaohongshu-case-study.tsx`、
  `chagee-case-study.tsx`：作品中的链接、图片、视频和封面路径适配。
- `components/site-footer.tsx`、`components/visual-archive/photography-archive.tsx`：
  页脚链接及摄影预览、灯箱图片路径适配。
- `DEPLOYMENT.md`：部署和自定义域名说明。

本地已验证 `/portfolio-v1` 和空 basePath 两种静态构建；每种均通过 6 个业务路由、
208 处本地链接/资源引用检查，public 文件逐字节一致。
设置 `VERCEL=1` 后执行原 `npm run build` 也成功生成 `.vercel/output`。
