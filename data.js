// ============================================================
// V0.1 MVP — 硬编码数据
// ============================================================

// --- 个人信息 ---
const profileData = {
  name: "范小客",
  tagline: "AI爱好者 · 效率工具控 · 终身学习者",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.23 3.438 9.67 8.205 11.24.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.955 24 17.52 24 12.29 24 5.78 18.627.5 12 .5z"/></svg>`
    },
    {
      label: "Twitter",
      url: "https://twitter.com",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 5.88zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    },
    {
      label: "邮箱",
      url: "mailto:hello@example.com",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
    }
  ]
};

// --- AI工具列表 ---
const toolsData = [
  {
    id: "chatgpt-001",
    name: "ChatGPT",
    description: "OpenAI开发的对话式AI助手，支持多轮对话、代码生成与多模态理解",
    category: "对话助手",
    icon: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
    url: "https://chatgpt.com",
    tags: ["免费", "多语言", "多模态"],
    isFeatured: true,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "claude-001",
    name: "Claude",
    description: "Anthropic推出的AI助手，擅长深度分析、长文档阅读与写作辅助",
    category: "对话助手",
    icon: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
    url: "https://claude.ai",
    tags: ["免费", "长文本", "分析"],
    isFeatured: true,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "copilot-001",
    name: "GitHub Copilot",
    description: "AI编程助手，实时补全代码，支持多种编程语言和主流IDE",
    category: "AI编程",
    icon: "https://www.google.com/s2/favicons?domain=github.com&sz=64",
    url: "https://github.com/features/copilot",
    tags: ["付费", "代码补全", "多语言"],
    isFeatured: false,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "cursor-001",
    name: "Cursor",
    description: "AI代码编辑器，基于大模型重构编程工作流，支持结对编程",
    category: "AI编程",
    icon: "https://www.google.com/s2/favicons?domain=cursor.com&sz=64",
    url: "https://cursor.com",
    tags: ["免费", "代码编辑", "AI结对"],
    isFeatured: true,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "midjourney-001",
    name: "Midjourney",
    description: "AI图像生成工具，以艺术风格和高质量渲染著称",
    category: "AI绘图",
    icon: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=64",
    url: "https://www.midjourney.com",
    tags: ["付费", "高质量", "艺术"],
    isFeatured: false,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "stable-diffusion-001",
    name: "Stable Diffusion",
    description: "开源AI绘图模型，支持本地部署与高度自定义生成",
    category: "AI绘图",
    icon: "https://www.google.com/s2/favicons?domain=stability.ai&sz=64",
    url: "https://stability.ai",
    tags: ["免费", "开源", "本地部署"],
    isFeatured: false,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "notion-ai-001",
    name: "Notion AI",
    description: "嵌入Notion的AI写作助手，帮你续写、总结、翻译和头脑风暴",
    category: "AI写作",
    icon: "https://www.google.com/s2/favicons?domain=notion.so&sz=64",
    url: "https://www.notion.so/ai",
    tags: ["付费", "写作", "知识管理"],
    isFeatured: false,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "perplexity-001",
    name: "Perplexity",
    description: "AI驱动的搜索引擎，直接给出带来源摘要的答案",
    category: "AI搜索",
    icon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64",
    url: "https://www.perplexity.ai",
    tags: ["免费", "实时搜索", "来源标注"],
    isFeatured: true,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "runway-001",
    name: "Runway",
    description: "AI视频生成与编辑平台，支持文生视频、图生视频等创意功能",
    category: "AI视频",
    icon: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=64",
    url: "https://runwayml.com",
    tags: ["付费", "视频生成", "编辑"],
    isFeatured: false,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "elevenlabs-001",
    name: "ElevenLabs",
    description: "AI语音合成工具，支持多语言、多音色的高保真语音生成",
    category: "AI音频",
    icon: "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64",
    url: "https://elevenlabs.io",
    tags: ["免费", "语音合成", "多语言"],
    isFeatured: false,
    createdAt: "2026-05-20T00:00:00Z"
  },
  {
    id: "openai-o3-001",
    name: "GPT-4o",
    description: "OpenAI最新多模态大模型，支持图像理解、语音交互与高级推理",
    category: "对话助手",
    icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
    url: "https://chatgpt.com",
    tags: ["免费", "多模态", "GPT-4"],
    isFeatured: true,
    createdAt: "2026-05-23T00:00:00Z"
  },
  {
    id: "openai-o3-002",
    name: "OpenAI o3",
    description: "OpenAI最新推理模型，ARC-AGI基准测试最高分，擅长复杂推理与代码生成",
    category: "对话助手",
    icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
    url: "https://openai.com/index/openai-o3",
    tags: ["付费", "推理", "前沿"],
    isFeatured: true,
    createdAt: "2026-05-23T00:00:00Z"
  }
];
