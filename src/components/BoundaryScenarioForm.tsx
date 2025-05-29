import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface BoundaryScenarioData {
  relationship: string
  personName: string
  communicationStyle: string
  persuasionTactics: string
  languageStyle: string
  persistence: string
  request: string
  refusalReason: string
  frequency: string
  location: string
}

const BoundaryScenarioForm: React.FC = () => {
  const [formData, setFormData] = useState<BoundaryScenarioData>({
    relationship: '',
    personName: '',
    communicationStyle: '',
    persuasionTactics: '',
    languageStyle: '',
    persistence: '',
    request: '',
    refusalReason: '',
    frequency: '',
    location: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Process form data and start conversation
    console.log('Form submitted:', formData)
  }

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
                Setting up your boundary scenario
              </p>
            </div>
            <Link 
              to="/scenarios" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Scenarios
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Setting Boundaries with Friends & Family
            </h1>
            <p className="text-lg text-gray-600">
              Let's customize this scenario to match your real situation. The more specific you are, the more realistic the practice will feel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Relationship */}
            <div>
              <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-2">
                What is your relationship to this person?
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select relationship type</option>
                <option value="close friend">Close Friend</option>
                <option value="casual friend">Casual Friend</option>
                <option value="family member">Family Member</option>
                <option value="sibling">Sibling</option>
                <option value="parent">Parent</option>
                <option value="partner">Partner</option>
                <option value="acquaintance">Acquaintance</option>
                <option value="coworker">Coworker</option>
              </select>
            </div>

            {/* Person's Name */}
            <div>
              <label htmlFor="personName" className="block text-sm font-medium text-gray-700 mb-2">
                What is this person's name?
              </label>
              <input
                type="text"
                id="personName"
                name="personName"
                value={formData.personName}
                onChange={handleInputChange}
                placeholder="e.g., Sarah, Mom, Alex"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Communication Style */}
            <div>
              <label htmlFor="communicationStyle" className="block text-sm font-medium text-gray-700 mb-2">
                What is their communication style?
              </label>
              <select
                id="communicationStyle"
                name="communicationStyle"
                value={formData.communicationStyle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select communication style</option>
                <option value="aggressive">Aggressive</option>
                <option value="passive-aggressive">Passive-aggressive</option>
                <option value="guilt-tripping">Guilt-tripping</option>
                <option value="sarcastic">Sarcastic</option>
                <option value="playful">Playful</option>
                <option value="manipulative">Manipulative</option>
                <option value="direct">Direct</option>
                <option value="emotional">Emotional</option>
              </select>
            </div>

            {/* Persuasion Tactics */}
            <div>
              <label htmlFor="persuasionTactics" className="block text-sm font-medium text-gray-700 mb-2">
                What tactics do they use to persuade you?
              </label>
              <input
                type="text"
                id="persuasionTactics"
                name="persuasionTactics"
                value={formData.persuasionTactics}
                onChange={handleInputChange}
                placeholder="e.g., guilt, shame, peer pressure, humor, threats to the relationship"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Language Style */}
            <div>
              <label htmlFor="languageStyle" className="block text-sm font-medium text-gray-700 mb-2">
                How does their language sound?
              </label>
              <input
                type="text"
                id="languageStyle"
                name="languageStyle"
                value={formData.languageStyle}
                onChange={handleInputChange}
                placeholder="e.g., casual, mean, curse-heavy, passive, formal, Gen Z slang"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Persistence Level */}
            <div>
              <label htmlFor="persistence" className="block text-sm font-medium text-gray-700 mb-2">
                How persistent are they when you say no?
              </label>
              <select
                id="persistence"
                name="persistence"
                value={formData.persistence}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select persistence level</option>
                <option value="backs off quickly">Backs off quickly</option>
                <option value="mildly pushes">Mildly pushes</option>
                <option value="moderately persistent">Moderately persistent</option>
                <option value="very pushy">Very pushy</option>
                <option value="extremely pushy">Extremely pushy</option>
                <option value="won't take no for an answer">Won't take no for an answer</option>
              </select>
            </div>

            {/* The Request */}
            <div>
              <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-2">
                What are they asking you to do?
              </label>
              <textarea
                id="request"
                name="request"
                value={formData.request}
                onChange={handleInputChange}
                placeholder="e.g., Help them move this weekend, lend them money, attend a family event"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Refusal Reason */}
            <div>
              <label htmlFor="refusalReason" className="block text-sm font-medium text-gray-700 mb-2">
                Why don't you want to do it? (your internal reason or boundary)
              </label>
              <textarea
                id="refusalReason"
                name="refusalReason"
                value={formData.refusalReason}
                onChange={handleInputChange}
                placeholder="e.g., I'm exhausted from work, I can't afford it, I have other plans, It makes me uncomfortable"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Frequency */}
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                How often has this happened in the past?
              </label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select frequency</option>
                <option value="first time">First time</option>
                <option value="occasionally">Occasionally</option>
                <option value="frequently">Frequently</option>
                <option value="repeatedly">Repeatedly</option>
                <option value="constantly">Constantly</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Where is this conversation taking place?
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., over text, at their house, at a family dinner, on the phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Start Conversation Practice
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">
            Rhetor AI - Your conversation details are used only for this practice session
          </p>
        </div>
      </footer>
    </div>
  )
}

export default BoundaryScenarioForm
