import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">崔家巍</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-800">
                关于我
              </Link>
            </li>
            <li>
              <Link href="#education" className="text-gray-600 hover:text-gray-800">
                教育背景
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-gray-600 hover:text-gray-800">
                工作经验
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-600 hover:text-gray-800">
                项目经验
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-600 hover:text-gray-800">
                技能
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

