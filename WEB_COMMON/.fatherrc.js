export default {
  entry: "src/index.jsx",
  esm: "rollup",
  cjs: "rollup",
  cssModules: {
    type: true,
    generateScopedName: "[path]_[local]_[hash:base64:5]"
  },
  extraBabelPlugins: [["import", { libraryName: "antd", style: true }]],
};
