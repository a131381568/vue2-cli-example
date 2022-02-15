module.exports = {
  lintOnSave: false,
  // 增加開發環境的編譯器 (打包時要改為 false)
  runtimeCompiler: true,
  // 設置打包路徑
  // 部署生產環境和開發環境的URL:可對當前環境進行區分 */
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  // 打包時輸出的資料夾名稱
  outputDir: 'dist',
  // 放置生成的靜態資源(js、css、img、fonts),相對於 outputDir 的目錄 
  assetsDir: "assets",
  // 是否在打包時產生 sourceMap
  productionSourceMap: false,
  // 默認情況下，生成的靜態資源在它們的文件名中包含了 hash 以便更好的控制緩存，你可以通過將這個選項設為 false 來關閉文件名 hash
  filenameHashing: false,
  transpileDependencies: [
    'axios',
    'bootstrap',
    'svginjector-vue',
    'vue-axios',
    'vue-easytable'
  ],
}