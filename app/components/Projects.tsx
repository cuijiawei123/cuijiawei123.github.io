export default function Projects() {
  const projects = [
    {
      name: "notesum.ai",
      period: "2024.7 - 至今",
      role: "全栈开发",
      description: "使用大模型为用户提供学术论文总结和个性化推荐服务",
      details: [
        "全栈开发：负责notesum.ai 项目的开发，该平台利用大模型对学术论文进行总结，生成摘要，并结合用户的交互行为（点赞、点踩、收藏）进行个性化推荐。",
        "技术栈：基于Next.js、ShadCN UI、Firebase 和 Python 进行前后端开发，设计并实现 Serverless 架构。",
        "大模型集成：封装并优化GPT、Claude、DeepSeek等大模型API接口，使平台能够高效地处理大规模论文数据和用户请求。",
        "用户交互系统：设计并优化用户行为分析与推荐算法，提升推荐系统的准确性和用户活跃度。",
        "性能优化：通过 Firebase Firestore 优化数据存储和查询性能，保证系统在高并发情况下的稳定性。",
        "推荐算法：与数据团队合作，根据用户的行为数据（如点赞、点踩等）优化推荐算法，提高推荐内容的准确性和用户粘性。",
        "代码质量与协作：参与项目的需求分析、技术评审、架构设计与开发，确保项目按时交付，并通过 CI/CD 流程加速开发周期。",
      ],
    },
    {
      name: "AI助手平台",
      period: "2024.3 - 2024.7",
      role: "全栈开发",
      description: "企业内部员工使用的AI助手平台。用于对接GPT及公司自研的大模型，实现研发大幅提效",
      details: [
        "Next.js 全栈开发：从零到一构建 AI助手平台，为公司内部开发人员提供 AI 辅助工具，提升开发效率。",
        "大模型集成：封装 GPT API 和自研大模型接口，实现多模型适配，提升系统扩展性。",
        "性能优化：面对高并发流量，优化了 API 请求队列、限流机制，有效缓解了系统压力，确保稳定运行。",
        "成果：开发人员工作效率提升了50%，平均减少了5天的交付周期，并获得公司年度创新项目奖项。",
      ],
    },
    {
      name: "云桌面虚拟化平台",
      period: "2023.10 - 2024.3",
      role: "前端开发",
      description: "响应国家工信部国产化改造号召，公司战略级项目。对接三大运营商云平台，实现基于虚拟化基座的云桌面管理",
      details: [
        "虚拟化平台开发：主导公司云桌面管理平台 的前端开发，支持三大运营商云平台接入。",
        "技术创新：设计并实现了分片上传和断点续传 方案，显著提升了大文件传输的稳定性和成功率。",
        "跨团队协作：牵头每日敏捷复盘会议，统一项目标准，协调各方进度，确保项目高效推进。",
        "项目成果：项目在技术评审中获得 最高分，成功中标并为公司带来可观的市场份额。",
      ],
    },
    {
      name: "用户自助平台",
      period: "2022.6 - 2023.10",
      role: "全栈开发",
      description:
        "用户通过自助平台申请云桌面、规格变更、升配降配、订阅退订，实现了全流程数字化，大幅降低了云桌面、服务器运维成本及人力",
      details: [
        "自助平台开发：负责开发 云桌面自助申请平台，用户可通过平台申请云桌面服务、规格变更、升降配等。",
        "全栈技术：使用 Vue3 开发前端，Java 进行后端开发，设计和实现了完整的审批流与权限管理。",
        "高扩展性设计：针对多次 UI 迭代需求，设计了高扩展性 UI 组件，提升了页面适配能力。",
        "成果：优化后的平台提升了审批效率 90%，减少了 20% 的现网问题，并支持公司无纸化办公转型，荣获公司年度效能项目奖。",
      ],
    },
  ]

  return (
    <section id="projects" className="my-8">
      <h2 className="text-2xl font-bold mb-4">项目经验</h2>
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600">
            {project.role} | {project.period}
          </p>
          <p className="text-gray-700 mt-2">{project.description}</p>
          <ul className="list-disc list-inside mt-2">
            {project.details.map((detail, idx) => (
              <li key={idx} className="text-gray-700">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

