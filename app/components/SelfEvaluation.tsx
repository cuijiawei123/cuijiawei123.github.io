export default function SelfEvaluation() {
  const evaluations = [
    "技术热情：专注于前端技术栈、AI 赋能开发和 Serverless 架构，不断探索新技术以提升产品性能与用户体验。",
    "团队协作：具备优秀的跨团队沟通能力，善于推动项目进展、促进团队协作。",
    "创新驱动：面对挑战时，注重从根本上解决问题，并推动代码质量和业务创新，始终追求高效交付。",
  ]

  return (
    <section id="self-evaluation" className="my-8">
      <h2 className="text-2xl font-bold mb-4">自我评价</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="list-disc list-inside">
          {evaluations.map((evaluation, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {evaluation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

