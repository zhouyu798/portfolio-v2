# portfolio-v2

张裕个人作品集的实验版项目，用于验证滚轮进场动画和页面动效。

正式站点 `zhouyu798.github.io` 不应作为本项目远程仓库。本项目部署路径固定为：

```text
https://zhouyu798.github.io/portfolio-v2/
```

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

1. 在 GitHub 新建空仓库 `portfolio-v2`，不要初始化 README、license 或 `.gitignore`。
2. 绑定新仓库：

   ```bash
   git remote add origin https://github.com/zhouyu798/portfolio-v2.git
   git branch -M main
   git push -u origin main
   ```

3. 在 GitHub 仓库中打开 `Settings > Pages`。
4. 将 `Build and deployment` 设置为 `GitHub Actions`。
5. 推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布 `dist`。

## Deployment Notes

- Vite `base` 必须保持为 `/portfolio-v2/`。
- React Router 会从 `import.meta.env.BASE_URL` 自动读取 basename。
- public 目录资源应通过 `assetPath()` 生成路径，避免部署后 404。
- 禁止提交本地路径：`C:/`、`/Users/`、`localhost`、`file://`。

## Recovery

查看提交：

```bash
git log --oneline
```

回退某次动画修改：

```bash
git revert <commit>
git push
```

删除实验版时，可以在 GitHub 停用 Pages 或删除 `portfolio-v2` 仓库。本地断开远程：

```bash
git remote remove origin
```

## Migrating Back To The Main Site

如果实验版效果确认满意，另行 clone 正式站仓库 `zhouyu798.github.io`，新建分支后复制已验证代码，把 Vite `base` 改回 `/`，重新构建测试，再通过明确的合并提交发布正式站。
