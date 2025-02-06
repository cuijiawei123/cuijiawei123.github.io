export default function Experience() {
  const experiences = [
    {
      company: "DreamFlow",
      position: "全栈开发",
      period: "2024.7 - 至今",
      description: "硅谷 AI 创业公司，负责 notesum.ai 学术论文推荐平台开发",
      responsibilities: [
        "负责 Next.js + Firebase 的 Serverless 全栈架构 设计与开发",
        "封装 大模型 API（GPT 及自研模型），实现论文摘要提取与个性化推荐",
        "设计 用户交互系统（点赞、点踩、收藏）优化推荐算法，提高用户粘性",
        "使用 ShadCN UI 构建高可用的前端组件库，提升 UI/UX 体验",
        "设计 数据存储方案（Firebase Firestore），优化查询性能，确保推荐系统的高效运行",
        "结合 Python 进行数据处理，分析用户行为优化推荐模型",
      ],
    },
    {
      company: "新华三技术有限公司",
      position: "前端开发",
      period: "2020.3 - 2024.7",
      description: "国内数字化解决方案领导者，就职于云与智能产品部workspace产品部",
      responsibilities: [
        "负责 workspace 云桌面 开发，涵盖 公有云/私有云、虚拟化 场景",
        "对接 运营商云平台（移动、联通、电信），制定前端标准规范",
        "设计 分片上传、断点续传 方案，提高大文件传输稳定性",
        "推动 CI/CD 自动化部署，加速产品交付",
      ],
    },
    {
      company: "圆通信息科技（西安）有限公司",
      position: "全栈开发",
      period: "2018.7 - 2020.3",
      description: "国内物流行业top企业，就职于国内产品开发部",
      responsibilities: [
        "参与 物流系统前后端开发（申购平台、接口平台、网点管家、用户实名制等）",
        "负责 后端 API 设计、前端 UI 开发，优化业务流程，提高运营效率",
      ],
    },
  ]

  return (
    <section id="experience" className="my-8">
      <h2 className="text-2xl font-bold mb-4">工作经验</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold">{exp.position}</h3>
          <p className="text-gray-600">
            {exp.company} | {exp.period}
          </p>
          <p className="text-gray-700 mt-2">{exp.description}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-700">
                {resp}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

