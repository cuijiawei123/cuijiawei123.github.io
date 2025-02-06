export default function Skills() {
  const skills = [
    { category: "前端框架", items: ["React 18", "Next.js", "Vue3", "ShadCN UI"] },
    { category: "后端技术", items: ["Node.js", "Express", "Firebase", "Java", "Python"] },
    { category: "数据库", items: ["Firestore", "MySQL", "PostgreSQL", "MongoDB"] },
    { category: "DevOps工具", items: ["CI/CD", "Serverless", "Turborepo", "Docker"] },
    { category: "AI工具", items: ["GPT API", "LangChain", "向量数据库"] },
  ]

  return (
    <section id="skills" className="my-8">
      <h2 className="text-2xl font-bold mb-4">技术栈</h2>
      <div className="bg-white shadow rounded-lg p-6">
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

