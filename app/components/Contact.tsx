export default function Contact() {
  return (
    <section id="contact" className="my-8">
      <h2 className="text-2xl font-bold mb-4">联系方式</h2>
      <ul className="space-y-2">
        <li>
          <span className="font-semibold">邮箱：</span>
          <a href="mailto:zhangsan@example.com" className="text-blue-600 hover:underline">
            zhangsan@example.com
          </a>
        </li>
        <li>
          <span className="font-semibold">电话：</span>
          <a href="tel:+86123456789" className="text-blue-600 hover:underline">
            +86 123 456 789
          </a>
        </li>
        <li>
          <span className="font-semibold">LinkedIn：</span>
          <a
            href="https://www.linkedin.com/in/zhangsan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/zhangsan
          </a>
        </li>
        <li>
          <span className="font-semibold">GitHub：</span>
          <a
            href="https://github.com/zhangsan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/zhangsan
          </a>
        </li>
      </ul>
    </section>
  )
}

