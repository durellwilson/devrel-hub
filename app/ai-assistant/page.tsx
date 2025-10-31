'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';

export default function AIAssistant() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🤖 AI Swift Assistant
          </h1>
          <p className="text-gray-600">Ask anything about Swift, SwiftUI, CoreML, or iOS development</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 h-[500px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-xl mb-4">👋 Hi! I'm your Swift learning assistant</p>
              <div className="space-y-2 text-sm">
                <p>• "How do I use SwiftData?"</p>
                <p>• "Show me a CoreML example"</p>
                <p>• "What's the best way to test SwiftUI?"</p>
                <p>• "Help me build a todo app"</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-4 ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about Swift, SwiftUI, CoreML..."
            className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
          >
            Send
          </button>
        </form>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold mb-2">📚 Learning Path</h3>
            <p className="text-sm text-gray-600">Beginner to Advanced tracks</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold mb-2">🧪 TDD Framework</h3>
            <p className="text-sm text-gray-600">Test-driven development</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-bold mb-2">🤖 ML Toolkit</h3>
            <p className="text-sm text-gray-600">CoreML + CreateML</p>
          </div>
        </div>
      </div>
    </div>
  );
}
