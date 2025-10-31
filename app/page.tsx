import Link from 'next/link'

const packages = [
  { name: 'Swift Learning Path', url: 'https://github.com/durellwilson/swift-learning-path', desc: 'Complete curriculum with 10 projects', icon: '🎓' },
  { name: 'Swift TDD Framework', url: 'https://github.com/durellwilson/swift-tdd-framework', desc: 'Test-driven development utilities', icon: '🧪' },
  { name: 'CoreML + CreateML Kit', url: 'https://github.com/durellwilson/coreml-createml-kit', desc: 'Machine learning toolkit', icon: '🤖' },
  { name: 'App Intents Pro', url: 'https://github.com/durellwilson/appintents-pro', desc: 'Siri & Shortcuts integration', icon: '🎤' },
  { name: 'Swift Security Toolkit', url: 'https://github.com/durellwilson/swift-security-toolkit', desc: 'Production security utilities', icon: '🔒' },
  { name: 'SwiftUI DevRel Kit', url: 'https://github.com/durellwilson/swiftui-devrel-kit', desc: 'Beautiful DevRel components', icon: '🎨' },
  { name: 'Apple Full-Stack Template', url: 'https://github.com/durellwilson/apple-fullstack-template', desc: 'iOS 18+ / macOS 15+ template', icon: '📦' },
  { name: 'SwiftData Pro Scaffold', url: 'https://github.com/durellwilson/swiftdata-pro-scaffold', desc: 'Advanced SwiftData patterns', icon: '💾' },
  { name: 'Apple Ecosystem Starter', url: 'https://github.com/durellwilson/apple-ecosystem-starter', desc: 'All Apple frameworks', icon: '🍎' },
  { name: 'Security Awareness Course', url: 'https://durellwilson.github.io/security-awareness-course/', desc: '20+ chapters on AI security', icon: '🛡️' },
]

const projects = [
  { name: 'Transit Tracker', difficulty: 'Beginner', skills: 'SwiftUI, MapKit' },
  { name: 'Recipe Manager', difficulty: 'Beginner', skills: 'SwiftData, Images' },
  { name: 'Expense Splitter', difficulty: 'Intermediate', skills: 'CloudKit, Sharing' },
  { name: 'Fitness Logger', difficulty: 'Intermediate', skills: 'HealthKit, ML' },
  { name: 'AI Photo Editor', difficulty: 'Advanced', skills: 'CoreML, Vision' },
  { name: 'Password Manager', difficulty: 'Advanced', skills: 'Security, Biometrics' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🏭 Detroit Swift DevRel
          </h1>
          <div className="space-x-4">
            <Link href="/ai-assistant" className="text-blue-600 hover:text-blue-800 font-medium">AI Assistant</Link>
            <Link href="/docs" className="text-blue-600 hover:text-blue-800 font-medium">Documentation</Link>
            <a href="https://github.com/durellwilson" target="_blank" className="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Learn Swift. Build Apps. Join Community.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20 production-ready Swift packages, comprehensive learning path, and AI-powered assistance for modern iOS development
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/ai-assistant" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Start Learning with AI
            </Link>
            <a href="https://github.com/durellwilson/swift-learning-path" target="_blank" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              View Learning Path
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">📦 Swift Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <a
                key={pkg.name}
                href={pkg.url}
                target="_blank"
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-4xl mb-3">{pkg.icon}</div>
                <h4 className="text-lg font-bold mb-2">{pkg.name}</h4>
                <p className="text-gray-600 text-sm">{pkg.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">🚀 Project Ideas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold">{project.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{project.skills}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Build?</h3>
          <p className="text-xl mb-8 opacity-90">
            Start with our AI assistant or dive into the learning path
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/ai-assistant" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Ask AI Assistant
            </Link>
            <a href="https://github.com/durellwilson/apple-fullstack-template" target="_blank" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Clone Template
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>Built with ❤️ for Detroit's Swift community</p>
          <p className="text-sm mt-2">20 repositories • 10 projects • Unlimited learning</p>
        </div>
      </footer>
    </main>
  )
}
