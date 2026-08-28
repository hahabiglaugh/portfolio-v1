# Visual Archive assets

将优化后的摄影图片放入此目录，并在 `lib/photography/static-source.ts` 中添加对应条目。

页面只通过 `getPublishedPhotography()` 获取数据。未来接入 CMS 时，请实现
`PhotographyDataSource` 接口并替换数据源，不需要改动 Visual Archive 展示组件。
