export default function About() {
  return (
    <section id="about" className="my-8">
      <h2 className="text-2xl font-bold mb-4">关于我</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          28岁，6年工作经验的全栈开发工程师，专注于前端技术栈、AI赋能开发和Serverless架构。
        </p>
        <ul className="space-y-2">
          <li>
            <span className="font-semibold">个人网站：</span>
            <a
              href="http://www.cuijiawei.top/my_person_profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.cuijiawei.top/my_person_profile/
            </a>
          </li>
          <li>
            <span className="font-semibold">电话：</span>15091753891
          </li>
          <li>
            <span className="font-semibold">邮箱：</span>cuij523@gmail.com
          </li>
        </ul>
      </div>
    </section>
  )
}

