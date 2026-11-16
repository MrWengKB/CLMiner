// 游戏参数（可在此调整）
const CONFIG = {
  COLS: 11,            // 每排矿石数
  ROWS: 50,           // 总排数
  VISIBLE_ROWS: 5,
  START_COL: 0,       // 起始列（0 = 第一行第一个）    // 一屏可见排数

  START_HEARTS: 6,
  START_SHOVELS: 10,

  YELLOW_RATE: 0.10,  // 黄矿比例（可相连）
  PURPLE_RATE: 0.03,  // 紫色宝石比例（互不相连）
  BOMB_RATE: 0.05,
  GAP_RATE: 0.06,     // 随机空白（没有矿石）比例    // 炸弹比例

  VALUE: { brown: 1, yellow: 3, purple: 10 },
  YELLOW_HP: 2,       // 黄矿需挖两次

  QUIZ_REWARD: 5,     // 答对奖励矿铲

  SHOP: [
    { hearts: 1, price: 10 },
    { hearts: 5, price: 45 },
    { hearts: 10, price: 85 },
  ],

  REVEAL_BOMBS: true,  // true = 炸弹显示为 💣；false = 炸弹伪装成褐色矿石
  PLAYER: '👷',
};
