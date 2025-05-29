import React from 'react'
import { Link } from 'react-router-dom'

const ScenarioSelection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                Rhetor AI
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                Choose your conversation scenario
              </p>
            </div>
            <Link 
              to="/" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Select a Conversation Scenario
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the type of conversation you'd like to practice. Each scenario is designed to help you build confidence in specific situations.
          </p>
        </div>

        {/* Scenario Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Active Scenario: Setting Boundaries */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-200">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Setting Boundaries with Friends & Family
            </h3>
            <p className="text-gray-600 mb-4">
              Practice saying "no" confidently when friends or family members ask for favors you can't or don't want to do. Learn to set healthy boundaries without guilt.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                10-15 min
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Available
              </span>
            </div>
            <Link 
              to="/boundary-scenario"
              className="w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block text-center"
            >
              Start Practice Session
            </Link>
          </div>

          {/* Work in Progress Scenario: Expressing Hurt in Relationship */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 border-2 border-gray-200 relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Work in Progress
              </span>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 opacity-60">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-500 mb-2">
              Expressing Hurt in a Relationship
            </h3>
            <p className="text-gray-500 mb-4">
              Navigate vulnerable conversations about emotional hurt with your partner. Practice expressing your feelings while staying open to their perspective for healing and connection.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15-20 min
              </div>
            </div>
            <button 
              disabled 
              className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              More Scenarios Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              We're constantly developing new conversation scenarios based on user feedback. 
              Have a specific situation you'd like to practice?
            </p>
            <button className="bg-primary-100 text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-primary-200 transition-colors">
              Request a Scenario
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            Built with ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ScenarioSelection
