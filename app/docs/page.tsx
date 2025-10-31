import Link from 'next/link'

const docs = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Swift Learning Path', url: 'https://github.com/durellwilson/swift-learning-path' },
      { title: 'Apple Full-Stack Template', url: 'https://github.com/durellwilson/apple-fullstack-template' },
    ]
  },
  {
    category: 'Testing',
    items: [
      { title: 'Swift TDD Framework', url: 'https://github.com/durellwilson/swift-tdd-framework' },
    ]
  },
  {
    category: 'Machine Learning',
    items: [
      { title: 'CoreML + CreateML Kit', url: 'https://github.com/durellwilson/coreml-createml-kit' },
      { title: 'ML Text Kit', url: 'https://github.com/durellwilson/ml-text-kit' },
    ]
  },
  {
    category: 'Security',
    items: [
      { title: 'Swift Security Toolkit', url: 'https://github.com/durellwilson/swift-security-toolkit' },
      { title: 'Security Awareness Course', url: 'https://durellwilson.github.io/security-awareness-course/' },
    ]
  },
]

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">📚 Documentation</h1>
        
        {docs.map((section) => (
          <div key={section.category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
            <div className="space-y-2">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition border border-gray-200"
                >
                  <h3 className="font-semibold text-blue-600">{item.title} →</h3>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
