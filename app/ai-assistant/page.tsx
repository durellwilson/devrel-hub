'use client';

import { useState } from 'react';
import Link from 'next/link';

const SWIFT_KNOWLEDGE = {
  swiftdata: "SwiftData is Apple's modern data persistence framework. Use @Model for entities, @Query for fetching, and ModelContainer for setup. Example:\n\n@Model\nclass Task {\n  var title: String\n  var isComplete: Bool\n  init(title: String) {\n    self.title = title\n    self.isComplete = false\n  }\n}",
  swiftui: "SwiftUI uses declarative syntax. Key concepts: @State for local state, @Binding for two-way binding, @Observable for shared state. Example:\n\nstruct ContentView: View {\n  @State private var count = 0\n  var body: some View {\n    Button(\"Count: \\(count)\") {\n      count += 1\n    }\n  }\n}",
  coreml: "CoreML enables on-device ML. Use CreateML to train models, then integrate with Vision framework. Example:\n\nlet model = try VNCoreMLModel(for: YourModel().model)\nlet request = VNCoreMLRequest(model: model) { request, error in\n  guard let results = request.results as? [VNClassificationObservation] else { return }\n  // Process results\n}",
  testing: "Use XCTest for unit tests. For SwiftUI, use ViewInspector or snapshot testing. Example:\n\nfunc testViewModel() async {\n  let vm = ViewModel()\n  await vm.fetchData()\n  XCTAssertEqual(vm.items.count, 5)\n}",
  async: "Swift Concurrency uses async/await. Mark functions with async, call with await. Use Task for concurrent work:\n\nfunc fetchData() async throws -> [Item] {\n  let (data, _) = try await URLSession.shared.data(from: url)\n  return try JSONDecoder().decode([Item].self, from: data)\n}"
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response with knowledge base
    setTimeout(() => {
      let response = "I can help with Swift, SwiftUI, SwiftData, CoreML, testing, and iOS development. Try asking about specific topics!";
      
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes('swiftdata') || lowerInput.includes('data persistence')) {
        response = SWIFT_KNOWLEDGE.swiftdata;
      } else if (lowerInput.includes('swiftui') || lowerInput.includes('view') || lowerInput.includes('ui')) {
        response = SWIFT_KNOWLEDGE.swiftui;
      } else if (lowerInput.includes('coreml') || lowerInput.includes('machine learning') || lowerInput.includes('ml')) {
        response = SWIFT_KNOWLEDGE.coreml;
      } else if (lowerInput.includes('test') || lowerInput.includes('tdd')) {
        response = SWIFT_KNOWLEDGE.testing;
      } else if (lowerInput.includes('async') || lowerInput.includes('await') || lowerInput.includes('concurrency')) {
        response = SWIFT_KNOWLEDGE.async;
      } else if (lowerInput.includes('todo') || lowerInput.includes('app')) {
        response = "To build a todo app:\n\n1. Create a Task model with @Model\n2. Use @Query to fetch tasks\n3. Add TextField for input\n4. Use List to display tasks\n5. Add toggle for completion\n\nCheck out our AI Recipe Generator project for a similar pattern!";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = "👋 Hi! I'm your Swift AI assistant. I can help with:\n\n• SwiftUI & SwiftData\n• CoreML & Machine Learning\n• Testing & TDD\n• Async/Await & Concurrency\n• iOS Development Best Practices\n\nWhat would you like to learn?";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <nav className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/devrel-hub" className="text-purple-300 hover:text-purple-100 font-medium transition">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <span className="text-purple-300 font-semibold text-sm">🤖 AI-POWERED LEARNING</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Swift AI Assistant
          </h1>
          <p className="text-gray-400 text-lg">Ask anything about Swift, SwiftUI, CoreML, or iOS development</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-purple-500/20 p-6 mb-6 h-[500px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-2xl mb-6 text-white">👋 Hi! I'm your Swift learning assistant</p>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 transition cursor-pointer" onClick={() => setInput("How do I use SwiftData?")}>
                  <p className="text-purple-300">💾 "How do I use SwiftData?"</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 transition cursor-pointer" onClick={() => setInput("Show me a CoreML example")}>
                  <p className="text-purple-300">🤖 "Show me a CoreML example"</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 transition cursor-pointer" onClick={() => setInput("What's the best way to test SwiftUI?")}>
                  <p className="text-purple-300">🧪 "What's the best way to test SwiftUI?"</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 hover:bg-purple-500/20 transition cursor-pointer" onClick={() => setInput("Help me build a todo app")}>
                  <p className="text-purple-300">📝 "Help me build a todo app"</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-gray-800 text-gray-100 border border-purple-500/20'
                  }`}>
                    <p className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{m.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 border border-purple-500/20 rounded-2xl p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Swift, SwiftUI, CoreML..."
            className="flex-1 bg-gray-900 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Send
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <a href="https://github.com/durellwilson/swift-learning-path" target="_blank" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📚</div>
            <h3 className="font-bold text-white mb-2">Learning Path</h3>
            <p className="text-sm text-gray-400">Beginner to Advanced tracks</p>
          </a>
          <a href="https://github.com/durellwilson/swift-tdd-framework" target="_blank" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🧪</div>
            <h3 className="font-bold text-white mb-2">TDD Framework</h3>
            <p className="text-sm text-gray-400">Test-driven development</p>
          </a>
          <a href="https://github.com/durellwilson/coreml-createml-kit" target="_blank" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="font-bold text-white mb-2">ML Toolkit</h3>
            <p className="text-sm text-gray-400">CoreML + CreateML</p>
          </a>
        </div>
      </div>
    </div>
  );
}
