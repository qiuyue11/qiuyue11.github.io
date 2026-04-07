/**
 * 汇总各学科数据为 window.DEMO_DATA，供 index.html 使用。
 * 加载顺序（在 index.html 中）：chinese.js → chinese-argument.js → chemistry-g1.js → chemistry-g2.js → biology.js → history.js → politics.js → geography.js → 本文件。
 *
 * 字段约定见各科目文件顶部注释；图片/视频路径相对 index.html。
 */
window.DEMO_DATA = {
  chinese: window.DEMO_CHINESE,
  chinese_argument: window.DEMO_CHINESE_ARGUMENT,
  biology: window.DEMO_BIOLOGY,
  history: window.DEMO_HISTORY,
  politics: window.DEMO_POLITICS,
  geography: window.DEMO_GEOGRAPHY,
  chemistry_g1: window.DEMO_CHEMISTRY_G1,
  chemistry_g2: window.DEMO_CHEMISTRY_G2
};
