/**
 * 语文-议论文演示数据（由 demo-data.js 汇总为 window.DEMO_DATA.chinese_argument）
 */
window.DEMO_CHINESE_ARGUMENT = {
  title: '语文-议论文',
  teacherLabel: '教师批阅',
  aiLabel: 'AI批阅',
  /** 本科目只有单题总分，不需要小题详情与“操作”列 */
  hideOperationColumn: true,
  rounds: [1],
  /** 各轮共用：AI 批阅效果反馈（不随轮次变化） */
  feedback: [
    { title: '总体反馈', images: ['assets/chinese-argument/1.png'], tips: [
    ]},
    { title: '评分纠错', images: ['assets/chinese-argument/2.png'], tips: [
    ]},
    { title: '素材启发', images: ['assets/chinese-argument/3.png'], tips: [
    ]}
  ],
  // 本科目不展示 AI 答疑演示，因此不需要 video；保持为空即可
  video: '',
  byRound: {
    '1': {
      rows: [
        { name: '刘**', t: 27, a: 24, d: -3, p: '11%', detail: [] },
        { name: '吴**', t: 24, a: 27, d: 3, p: '12.5%', detail: [] },
        { name: '张**', t: 24, a: 21.5, d: -2.5, p: '10.4%', detail: [] },
        { name: '刘**', t: 24.5, a: 21.5, d: -3, p: '12%', detail: [] },
        { name: '邓**', t: 22, a: 23.5, d: 1.5, p: '6.8%', detail: [] },
        { name: '王**', t: 23, a: 21, d: -2, p: '8.7%', detail: [] },
        { name: '李**', t: 18.5, a: 21, d: 2.5, p: '13.5%', detail: [] },
        { name: '石**', t: 18, a: 16, d: -2, p: '11%', detail: [] },
        { name: '张**', t: 20, a: 14, d: -6, p: '30%', detail: [] },
        { name: '李**', t: 15, a: 15, d: 0, p: '0%', detail: [] },
        { name: '王**', t: 3, a: 5.5, d: 2.5, p: '83%', detail: [] },
        { name: '沈**', t: 8, a: 4.5, d: -3.5, p: '43%', detail: [] }
      ]
    }
  }
};

