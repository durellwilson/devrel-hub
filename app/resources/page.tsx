import Link from 'next/link'

export default function Resources() {
  const resources = [
    {
      category: "📚 Learning Paths",
      items: [
        { name: "Swift Fundamentals", url: "https://durellwilson.github.io/swift-2026-course/", desc: "Complete Swift guide for 2026" },
        { name: "iOS Interview Prep", url: "https://durellwilson.github.io/ios-interview-mastery/", desc: "70 essential interview questions" },
        { name: "SwiftUI Essentials", url: "https://github.com/durellwilson/swiftui-essentials", desc: "Modern SwiftUI patterns" },
      ]
    },
    {
      category: "🛠️ Tools & Frameworks",
      items: [
        { name: "SwiftData Pro Scaffold", url: "https://github.com/durellwilson/swiftdata-pro-scaffold", desc: "Advanced SwiftData patterns" },
        { name: "Swift TDD Framework", url: "https://github.com/durellwilson/swift-tdd-framework", desc: "Test-driven development" },
        { name: "SwiftUI DevRel Kit", url: "https://github.com/durellwilson/swiftui-devrel-kit", desc: "Beautiful components" },
      ]
    },
    {
      category: "🤖 AI & ML",
      items: [
        { name: "CoreML + CreateML Kit", url: "https://github.com/durellwilson/coreml-createml-kit", desc: "Machine learning toolkit" },
        { name: "AI Recipe Generator", url: "https://github.com/durellwilson/ai-recipe-generator", desc: "AI-powered SwiftUI app" },
        { name: "Swift Autonomous Agent", url: "https://github.com/durellwilson/swift-autonomous-agent", desc: "AI agent framework" },
      ]
    },
    {
      category: "📱 Sample Projects",
      items: [
        { name: "Mood Tracker", url: "https://github.com/durellwilson/mood-tracker", desc: "SwiftUI + Swift Charts" },
        { name: "Photo Memory Journal", url: "https://github.com/durellwilson/photo-memory-journal", desc: "Custom layouts & tags" },
        { name: "Apple Full-Stack Template", url: "https://github.com/durellwilson/apple-fullstack-template", desc: "iOS 18+ starter" },
      ]
    },
    {
      category: "📖 Documentation",
      items: [
        { name: "Apple Developer Docs", url: "https://developer.apple.com/documentation/", desc: "Official documentation" },
        { name: "Swift.org", url: "https://swift.org", desc: "Swift language resources" },
        { name: "WWDC Videos", url: "https://developer.apple.com/videos/", desc: "Latest from Apple" },
      ]
    },
    {
      category: "🎯 Best Practices",
      items: [
        { name: "Swift Style Guide", url: "https://google.github.io/swift/", desc: "Google's Swift guide" },
        { name: "iOS Architecture", url: "https://github.com/durellwilson/swiftui-dataflow", desc: "Modern patterns" },
        { name: "Security Toolkit", url: "https://github.com/durellwilson/swift-security-toolkit", desc: "Production security" },
      ]
    }
  ];

  const quickLinks = [
    { name: "🎓 Start Learning", url: "/devrel-hub", icon: "📚" },
    { name: "🤖 AI Assistant", url: "/devrel-hub/ai-assistant", icon: "💬" },
    { name: "📝 Documentation", url: "/devrel-hub/docs", icon: "📖" },
    { name: "💼 Portfolio", url: "https://durellwilson.github.io/portfolio/", icon: "🎨" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/devrel-hub" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🤖 Detroit Swift DevRel
          </Link>
          <div className="flex gap-6">
            <Link href="/devrel-hub" className="text-purple-300 hover:text-purple-100 transition">Home</Link>
            <Link href="/devrel-hub/resources" className="text-purple-100 font-semibold">Resources</Link>
            <Link href="/devrel-hub/ai-assistant" className="text-purple-300 hover:text-purple-100 transition">AI Assistant</Link>
            <a href="https://github.com/durellwilson" target="_blank" className="text-purple-300 hover:text-purple-100 transition">GitHub</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-purple-300 font-semibold text-sm tracking-wide">📚 COMPREHENSIVE RESOURCES</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Everything You Need
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Curated resources for Swift and iOS development - from beginner to advanced
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-center border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{link.icon}</div>
              <p className="text-white font-semibold">{link.name}</p>
            </a>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="text-3xl font-bold mb-6 text-white">{section.category}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-gray-700 hover:border-purple-500/50 group"
                  >
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">Join the Community</h3>
          <p className="text-xl mb-8 opacity-90">
            Connect with other Swift developers and share your knowledge
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/durellwilson"
              target="_blank"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Follow on GitHub
            </a>
            <a
              href="https://durellwilson.contra.com"
              target="_blank"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p className="text-lg">Built with ❤️ for Detroit's Swift community</p>
          <p className="text-sm mt-2 text-gray-500">24 repositories • 3 teachable projects • AI-powered learning</p>
        </div>
      </footer>
    </main>
  );
}
