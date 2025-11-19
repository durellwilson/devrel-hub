import Link from 'next/link'

const packages = [
  { name: 'Swift Learning Path', url: 'https://github.com/durellwilson/swift-learning-path', desc: 'Complete curriculum with 10 projects', icon: '🎓', category: 'Learning' },
  { name: 'Swift TDD Framework', url: 'https://github.com/durellwilson/swift-tdd-framework', desc: 'Test-driven development utilities', icon: '🧪', category: 'Testing' },
  { name: 'CoreML + CreateML Kit', url: 'https://github.com/durellwilson/coreml-createml-kit', desc: 'Machine learning toolkit', icon: '🤖', category: 'ML' },
  { name: 'App Intents Pro', url: 'https://github.com/durellwilson/appintents-pro', desc: 'Siri & Shortcuts integration', icon: '🎤', category: 'Integration' },
  { name: 'Swift Security Toolkit', url: 'https://github.com/durellwilson/swift-security-toolkit', desc: 'Production security utilities', icon: '🔒', category: 'Security' },
  { name: 'SwiftUI DevRel Kit', url: 'https://github.com/durellwilson/swiftui-devrel-kit', desc: 'Beautiful DevRel components', icon: '🎨', category: 'UI' },
  { name: 'Apple Full-Stack Template', url: 'https://github.com/durellwilson/apple-fullstack-template', desc: 'iOS 18+ / macOS 15+ template', icon: '📦', category: 'Templates' },
  { name: 'SwiftData Pro Scaffold', url: 'https://github.com/durellwilson/swiftdata-pro-scaffold', desc: 'Advanced SwiftData patterns', icon: '💾', category: 'Data' },
  { name: 'Apple Ecosystem Starter', url: 'https://github.com/durellwilson/apple-ecosystem-starter', desc: 'All Apple frameworks', icon: '🍎', category: 'Ecosystem' },
]

const teachableProjects = [
  { 
    name: 'AI Recipe Generator', 
    url: 'https://github.com/durellwilson/ai-recipe-generator', 
    time: '40 min',
    desc: 'Generate recipes from ingredients using AI',
    icon: '🍳',
    skills: 'SwiftUI, SwiftData, AI Integration',
    difficulty: 'Beginner'
  },
  { 
    name: 'Mood Tracker', 
    url: 'https://github.com/durellwilson/mood-tracker', 
    time: '45 min',
    desc: 'Track daily mood with beautiful charts',
    icon: '😊',
    skills: 'Swift Charts, Dashboard',
    difficulty: 'Intermediate'
  },
  { 
    name: 'Photo Memory Journal', 
    url: 'https://github.com/durellwilson/photo-memory-journal', 
    time: '50 min',
    desc: 'Beautiful photo grid with custom layouts',
    icon: '📸',
    skills: 'Custom Layout, Tags',
    difficulty: 'Intermediate'
  },
]

const projectIdeas = [
  { name: 'AI Transit Tracker', difficulty: 'Beginner', skills: 'SwiftUI, MapKit, AI Predictions' },
  { name: 'Smart Expense Splitter', difficulty: 'Intermediate', skills: 'CloudKit, AI Categorization' },
  { name: 'AI Fitness Coach', difficulty: 'Intermediate', skills: 'HealthKit, ML, Recommendations' },
  { name: 'AI Photo Editor', difficulty: 'Advanced', skills: 'CoreML, Vision, Image Generation' },
  { name: 'Secure Password Manager', difficulty: 'Advanced', skills: 'Security, Biometrics, Encryption' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🤖 Detroit Swift DevRel
          </h1>
          <div className="space-x-6">
            <Link href="/ai-assistant" className="text-purple-300 hover:text-purple-100 font-medium transition">AI Assistant</Link>
            <Link href="/docs" className="text-purple-300 hover:text-purple-100 font-medium transition">Docs</Link>
            <a href="https://github.com/durellwilson" target="_blank" className="text-purple-300 hover:text-purple-100 font-medium transition">GitHub</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-purple-300 font-semibold text-sm tracking-wide">🚀 AI-POWERED SWIFT DEVELOPMENT 2026</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Build with AI Agents
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            24 production-ready Swift packages, AI-powered tutorials, and modern tooling for iOS 18+ development
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/ai-assistant" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              Start with AI Assistant
            </Link>
            <a href="https://github.com/durellwilson/swift-learning-path" target="_blank" className="border-2 border-purple-500/50 text-purple-300 px-8 py-4 rounded-full font-semibold hover:border-purple-400 hover:bg-purple-500/10 transition-all">
              View Learning Path
            </a>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">🎓 Teachable Projects</h3>
            <p className="text-gray-400 text-lg">Build real apps in under an hour with AI-assisted tutorials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teachableProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all border border-purple-500/20 hover:border-purple-500/50 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform">{project.icon}</div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-purple-400">{project.time}</div>
                    <div className={`text-xs px-3 py-1 rounded-full mt-2 ${
                      project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.difficulty}
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">{project.name}</h4>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.desc}</p>
                <div className="text-sm text-purple-300 bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20">
                  {project.skills}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">📦 Swift Packages</h3>
            <p className="text-gray-400 text-lg">Production-ready tools for modern iOS development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <a
                key={pkg.name}
                href={pkg.url}
                target="_blank"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-700 hover:border-purple-500/50 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{pkg.icon}</div>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">{pkg.category}</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{pkg.name}</h4>
                <p className="text-gray-400 text-sm">{pkg.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white">🚀 AI-Enhanced Project Ideas</h3>
            <p className="text-gray-400 text-lg">Next-generation apps powered by AI and ML</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectIdeas.map((project) => (
              <div key={project.name} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{project.name}</h4>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{project.skills}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">Ready to Build with AI?</h3>
          <p className="text-xl mb-8 opacity-90">
            Start with a teachable project or ask our AI assistant for personalized guidance
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/ai-assistant" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Ask AI Assistant
            </Link>
            <a href="https://github.com/durellwilson/ai-recipe-generator" target="_blank" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
              Start First Project
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400">
          <p className="text-lg">Built with ❤️ for Detroit's Swift community</p>
          <p className="text-sm mt-2 text-gray-500">24 repositories • 3 teachable projects • AI-powered learning</p>
        </div>
      </footer>
    </main>
  )
}
