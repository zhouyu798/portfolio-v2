import { assetPath } from "../utils/assets.js";

const image = (name) => assetPath(`images/portfolio/optimized/${name.replace(/\.png$/i, ".webp")}`);

export const projects = [
  {
    id: "01",
    slug: "running-social-experience",
    title: "华为运动健康 · 跑步社交探索",
    english: "Huawei Health · Running Social Experience",
    time: "2026.02 - 2026.04",
    role: "UX Designer / Product Designer",
    cover: image("project-01-cover.png"),
    tags: ["产品策划", "交互设计", "用户调研", "设计迭代"],
    keywords: ["用户调研", "产品策划", "交互设计", "流程设计", "高保真界面", "方案验证"],
    description:
      "从跑步记录与训练场景出发，探索运动健康产品向社交场景延展的可能性。",
    problem:
      "传统跑步工具更多关注数据记录，但独自跑步用户容易出现动力不稳定、过程无聊、坚持困难等问题。该项目尝试将跑步记录场景延展为轻量运动社交场景，让用户在保持训练目标的同时获得陪伴感和互动反馈。",
    insight: [
      {
        title: "压力与退缩",
        body: "用户对跑步挑战感兴趣，但担心对战关系带来过强压力。",
      },
      {
        title: "互动与负担",
        body: "用户并不排斥跑步中的互动，但担心互动本身变成额外负担。",
      },
      {
        title: "真实与防备",
        body: "用户愿意尝试真人匹配，但担心一开始暴露过多真实信息。",
      },
    ],
    strategy: [
      "从跑步记录工具延展至运动社交场景。",
      "划定功能范围：联结用户关系，同时支撑科学训练。",
      "通过 MVP 验证用户是否存在运动社交需求。",
      "根据验证结果制定产品迭代方案与运营策略。",
    ],
    flow:
      "入口选择 → 选择挑战方式 → 设置目标 → 匿名匹配 → 开始跑步 → 跑中互动 → 完成反馈 → 解锁信息 → 是否加好友",
    solutions: [
      {
        title: "共同目标",
        body: "双人累计完成同一个跑步目标，降低竞争压力。",
      },
      {
        title: "追逐游戏",
        body: "通过领先 / 落后关系增强挑战感。",
      },
      {
        title: "匿名匹配",
        body: "匹配初期隐藏头像、昵称等信息，降低身份防备感。",
      },
      {
        title: "AI 跑步气泡",
        body: "根据双方状态生成轻量互动提示，减少用户表达成本。",
      },
      {
        title: "跑后解锁",
        body: "完成挑战后解锁对方信息，形成跑后社交闭环。",
      },
    ],
    value:
      "概念项目中的原型测试与用户反馈显示：挑战参与意愿提升 20%，跑中互动成本降低 35%，跑中互动转化率提升 42%，再次挑战意愿提升 28%。这些数据用于表达方案验证方向，不作为真实商业上线数据。",
    reflection:
      "这个项目让我把运动场景中的情绪、节奏和社交边界转译为具体的交互结构。重点不是增加功能，而是让互动在合适的时机以更低成本出现。",
    images: [
      {
        src: image("project-01-strategy.png"),
        caption: "从跑步记录工具延展至运动社交场景，并明确 MVP 验证路径。",
      },
      {
        src: image("project-01-play-definition.png"),
        caption: "将生活经验与运动动机转译为真人匹配跑步挑战玩法。",
      },
      {
        src: image("project-01-storyboard.png"),
        caption: "通过故事板梳理从运动入口、独自开跑到跑后回看的完整情绪变化。",
      },
      {
        src: image("project-01-flow.png"),
        caption: "用户流程覆盖匹配、开跑、互动、完成反馈与社交解锁。",
      },
      {
        src: image("project-01-research.png"),
        caption: "前期访谈聚焦压力、互动负担和身份防备三个关键顾虑。",
      },
      {
        src: image("project-01-entry.png"),
        caption: "通过挑战方式与匿名选项降低开始门槛，提升参与意愿。",
      },
      {
        src: image("project-01-ai-bubble.png"),
        caption: "用 AI 跑步气泡降低跑中表达成本，让互动更自然。",
      },
      {
        src: image("project-01-validation.png"),
        caption: "方案验证以原型测试与用户反馈呈现概念项目的预期效果。",
      },
    ],
  },
  {
    id: "02",
    slug: "live-view-system-design",
    title: "HarmonyOS · 系统级实况窗设计",
    english: "HarmonyOS · Live View System Design",
    time: "2026.04 - 2026.05",
    role: "System UX Designer",
    cover: image("project-02-intro.png"),
    tags: ["系统规范", "信息架构", "状态表达"],
    keywords: ["系统规范", "信息架构", "状态表达", "低打扰交互", "Live View"],
    description:
      "基于 HarmonyOS 实况窗结构，设计跑步挑战过程中的状态展示、进度反馈与低打扰互动体验。",
    problem:
      "跑步挑战过程中，用户不方便频繁打开 App；对手状态变化容易被错过；普通消息提醒又不适合跑步场景。因此需要一个系统级轻量入口，让用户在锁屏或桌面中快速理解当前战况。",
    insight: [
      {
        title: "跑中不方便频繁打开 App",
        body: "跑步时用户注意力集中在身体状态和路线判断上，完整界面会增加查看成本。",
      },
      {
        title: "对手状态变化容易被错过",
        body: "距离差、领先关系和状态变化需要被快速感知，而不是被普通通知淹没。",
      },
      {
        title: "普通消息不适合跑步场景",
        body: "跑中提醒需要轻量、低打扰，并且能帮助用户理解当前局面。",
      },
    ],
    strategy: [
      "实况窗并不展示完整运动数据，而是作为跑步挑战的系统级轻量入口。",
      "优先保留挑战关系、关键进度、轻量状态提示 3 类真正影响跑中判断的信息。",
      "用固定区、辅助区、扩展区重新组织信息，控制阅读成本。",
    ],
    flow:
      "固定区承载当前局面和核心状态，辅助区承载 AI 状态、轻量反馈和状态理解，扩展区承载进度可视化和更多状态信息。",
    solutions: [
      {
        title: "固定区",
        body: "承载当前局面和核心状态，例如“对手落后 100m”。",
      },
      {
        title: "辅助区",
        body: "承载 AI 状态、轻量反馈和状态理解。",
      },
      {
        title: "扩展区",
        body: "承载进度可视化和更多状态信息。",
      },
      {
        title: "状态胶囊",
        body: "将配速、心率、步频等复杂指标转译成用户能快速理解的状态标签。",
      },
    ],
    value:
      "实况窗不直接堆叠配速、心率、步频等复杂指标，而是将它们转译成“状态良好”“对方吃力”等短标签，让用户在跑步过程中以更低成本理解当前状况。状态被看见之后，AI 的鼓励才更自然，互动也更低负担。",
    reflection:
      "系统级体验的关键是克制。只有当信息被重新排序，轻量入口才不会成为另一个小 App，而能真正降低跑中查看成本。",
    images: [
      {
        src: image("project-02-intro.png"),
        caption: "定义实况窗作为跑步挑战的系统级轻量入口。",
      },
      {
        src: image("project-02-info-priority.png"),
        caption: "在有限卡片空间中重新调整信息优先级和区域结构。",
      },
      {
        src: image("project-02-status-capsule.png"),
        caption: "把运动数据翻译成状态胶囊，让提醒更容易被理解。",
      },
    ],
  },
  {
    id: "03",
    slug: "multi-device-running-challenge",
    title: "万物互联 · 多设备协同跑步挑战",
    english: "Multi-device Running Challenge",
    time: "2026.05 - 2026.06",
    role: "Scenario UX Designer",
    cover: image("project-03-intro.png"),
    tags: ["场景联动", "设备协同", "生态体验"],
    keywords: ["多设备协同", "场景联动", "IoT", "运动体验", "任务分发"],
    description:
      "通过手机、手表、耳机与 AI 眼镜的角色分工，构建跑前、跑中、跑后的连续体验链路。",
    problem:
      "在跑步挑战场景中，用户不适合频繁查看完整界面。多设备协同的价值不是显示更多信息，而是让正确的信息出现在最合适的触点上。",
    insight: [
      {
        title: "正确的信息",
        body: "跑步挑战不需要把完整界面搬到每个设备上，而是重新分配信息颗粒度。",
      },
      {
        title: "合适的触点",
        body: "手机、手表、耳机与 AI 眼镜分别适合承担不同的提醒、反馈和沉淀任务。",
      },
      {
        title: "连续体验链路",
        body: "跑前、跑中、跑后需要形成连接，让运动体验更少打断、更有陪伴感。",
      },
    ],
    strategy: [
      "手机作为挑战中枢，负责匹配搭子、设定目标、查看完整战况和赛后沉淀。",
      "手表通过轻震和短文本提示距离差、配速变化和目标进度。",
      "耳机将 AI 鼓励转化为一句语音反馈，在途中提供节奏引导与同行式陪伴。",
      "AI 眼镜识别路口、人流、障碍等跑步路况，并提供安全建议和第一视角运动回放。",
    ],
    flow:
      "AI 判断中枢识别距离差变化、配速波动、心率波动和运动机会，再把提醒、反馈与陪伴分发到不同设备上。",
    solutions: [
      {
        title: "手机：挑战中枢",
        body: "负责匹配搭子、设定目标、查看完整战况和赛后沉淀。",
      },
      {
        title: "手表：即时提醒",
        body: "通过轻震和短文本提示距离差、配速变化和目标进度。",
      },
      {
        title: "耳机：语音陪伴",
        body: "将 AI 鼓励转化为一句语音反馈，在途中提供节奏引导与同行式陪伴。",
      },
      {
        title: "AI 眼镜：环境感知",
        body: "识别路口、人流、障碍等跑步路况，并提供安全建议和第一视角运动回放。",
      },
    ],
    value:
      "跑步挑战不再局限于单一界面，而是在不同设备之间形成连接。用户不用频繁低头查看手机，也能获得低打扰且更具陪伴感的运动体验。",
    reflection:
      "多设备设计不是把同一套界面搬到更多屏幕，而是重新分配任务、时机和反馈方式。",
    images: [
      {
        src: image("project-03-intro.png"),
        caption: "以手机、手表、耳机和 AI 眼镜构建跑步挑战的多触点体验。",
      },
      {
        src: image("project-03-device-task.png"),
        caption: "不同设备承担不同任务，让跑步挑战更连续、更自然。",
      },
    ],
  },
  {
    id: "04",
    slug: "ai-assisted-component-system",
    title: "AI 辅助 · 设计组件库搭建",
    english: "AI-assisted Design Component System",
    time: "2026.06",
    role: "Design System Designer / AI Workflow Explorer",
    cover: image("project-04-design-system.png"),
    tags: ["AI 工作流", "组件归类", "设计规范"],
    keywords: ["AI 工作流", "设计系统", "组件规范", "Figma", "Codex"],
    description:
      "基于华为官方设计规范，借助 Codex 辅助提炼颜色、字体、间距、圆角与核心组件规则，并沉淀为可复用的 Figma 组件资产。",
    problem:
      "当页面持续扩展到多端和多场景时，如果缺少稳定的设计系统基础，颜色、字体、间距、圆角与组件规范会快速分散，影响复用和改版效率。",
    insight: [
      {
        title: "规范需要资产化",
        body: "设计规范需要转译为具体、可复用、可维护的组件资产。",
      },
      {
        title: "AI 辅助提炼",
        body: "AI 可以辅助提炼规则、归类组件和生成说明，但最终需要设计判断控制边界。",
      },
      {
        title: "统一体验基础",
        body: "组件库的价值不只是统一视觉，也包括统一信息层级和反馈方式。",
      },
    ],
    strategy: [
      "用 AI 辅助把设计规范转化为可复用组件资产。",
      "沉淀 Color、Font、Radius、Spacing、Navigation、Button、Record 等核心规范。",
      "让后续页面设计与多端场景具备统一基础。",
    ],
    flow:
      "官方规范梳理 → AI 辅助提炼 token 与组件规则 → Figma 组件归类 → 页面复用与改版验证",
    solutions: [
      { title: "Color / 颜色规范", body: "统一品牌色、警示色、确认色与字体色。" },
      { title: "Font / 字体规范", body: "沉淀中文、英文、数字和信息层级的字体规则。" },
      { title: "Radius / 圆角规范", body: "统一系统卡片、按钮、胶囊与记录卡片的圆角节奏。" },
      { title: "Spacing / 间距规范", body: "整理页面边距、组件内边距和模块间距。" },
      { title: "Navigation / 导航规范", body: "梳理主导航、容器和品牌层级。" },
      { title: "Button / 按钮规范", body: "定义主按钮、分类按钮、分段按钮与信息按钮。" },
      { title: "Record / 记录卡片规范", body: "沉淀运动记录卡片的信息区和品牌区规则。" },
    ],
    value:
      "通过 AI 辅助规范提炼与组件整理，提升组件搭建、复用与改版效率，让后续页面在视觉风格、信息层级和交互反馈上保持一致。",
    reflection:
      "AI 更适合承担规则提炼和结构化整理，设计师仍需要负责判断组件边界、视觉节奏和实际复用价值。",
    images: [
      {
        src: image("project-04-design-system.png"),
        caption: "将颜色、字体、圆角、间距与核心组件规范整理为可复用组件资产。",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
