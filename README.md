# 花蝇蝶 · 个人网站

纯静态题库网站，使用个人 Logo 和森林绿配色，包含题海建模精选模块、题号 1–8、原稿参考答案以及两份 PDF 下载。无需安装依赖或构建，公式渲染资源均保存在本地。

## 部署到 GitHub Pages

1. 新建 GitHub 仓库，默认分支设为 `main`。
2. 将本文件同级的 `dist` 文件夹和 `.github` 文件夹上传到仓库根目录。注意 `.github` 是包含部署配置的文件夹。
3. 在仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 在 **Actions** 中运行 **Deploy GitHub Pages**，或向 `main` 分支提交文件。成功后，Pages 页面会显示访问地址。

全部资源使用相对路径，支持 `https://用户名.github.io/仓库名/`。请保留 `dist` 内的所有文件。

## 本地预览

在本目录运行 `python -m http.server 8765 --directory dist`，打开 `http://localhost:8765`。

## 内容与 PDF

- `dist/questions.js`：8 道题的文字、公式和图件路径。
- `dist/assets/fig-2-44.png`：assets 中的微信原图，裁去左侧无关残字后用于第 8 题。
- `dist/assets/answer-*.png`：答案卷原稿高清页面。对应题号的原稿页次依次为 1、2、3、4、5、7、8、6。
- `dist/questions.pdf`：用户提供的《题海建模专项预测卷_花蝇蝶.pdf》。该文件的第 8 题已使用原图，保留原版。
- `dist/answers.pdf`：用户提供的《题海建模专项卷答案_花蝇蝶.pdf》，保留原版。
- PDF 导出按钮下载上述完整文件，不会随网页文字修改自动重新排版生成。

作者：花蝇蝶。

已验证全部题号、公式显示、答案图片对应、375px 与 768px 布局和两个 PDF 下载。
