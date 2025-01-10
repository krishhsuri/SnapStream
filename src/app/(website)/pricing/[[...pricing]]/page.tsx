'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const PricingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background-dark text-white py-16">
      {/* Header Section */}
      <div className="container mx-auto text-center px-6 mb-16">
        <h1 className="text-6xl font-bold text-white mb-4 mt-20">
          Choose the plan that fits your needs.
        </h1>
      </div>

      {/* Pricing Plans Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Free Plan */}
        <div className="border border-gray-700 text-center p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Free</h2>
          <p className="text-lg text-gray-300 mb-6">Perfect for individuals starting out or testing the waters.</p>
          <p className="text-4xl font-bold text-white mb-6">$0 / month</p>
          <ul className="text-left text-gray-300 mb-6 space-y-4 list-disc list-inside">
            <li>1 User</li>
            <li>Basic Support</li>
            <li>500MB Storage</li>
            <li>Access to Community Forums</li>
            <li>Basic Analytics</li>
          </ul>
          <Button className="bg-primary text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Start Free Trial
          </Button>
        </div>

        {/* Standard Plan */}
        <div className="border border-gray-700 text-center p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Standard</h2>
          <p className="text-lg text-gray-300 mb-6">For growing businesses needing more features and flexibility.</p>
          <p className="text-4xl font-bold text-white mb-6">$29 / month</p>
          <ul className="text-left text-gray-300 mb-6 space-y-4 list-disc list-inside">
            <li>5 Users</li>
            <li>Priority Support</li>
            <li>5GB Storage</li>
            <li>Advanced Features</li>
            <li>Customizable Dashboard</li>
            <li>Weekly Reports</li>
          </ul>
          <Button className="bg-primary text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Choose Plan
          </Button>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-700 text-center p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-white mb-4">Premium</h2>
          <p className="text-lg text-gray-300 mb-6">For teams that need the best performance and support.</p>
          <p className="text-4xl font-bold text-white mb-6">$79 / month</p>
          <ul className="text-left text-gray-300 mb-6 space-y-4 list-disc list-inside">
            <li>Unlimited Users</li>
            <li>24/7 Support</li>
            <li>50GB Storage</li>
            <li>Dedicated Account Manager</li>
            <li>Enterprise Integrations</li>
            <li>Custom SLA</li>
            <li>Advanced Security Features</li>
          </ul>
          <Button className="bg-primary text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Choose Plan
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto text-center px-6 mt-16">
        <h2 className="text-3xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { question: "What is included in the Free Plan?", answer: "The Free plan includes basic support, 1 user, and up to 500MB of storage." },
            { question: "Can I upgrade my plan later?", answer: "Yes, you can easily upgrade your plan at any time from your account settings." },
            { question: "Do you offer a money-back guarantee?", answer: "Yes, we offer a 30-day money-back guarantee on all paid plans." },
            { question: "Is there a discount for annual subscriptions?", answer: "Yes, we offer a 20% discount on annual subscriptions." },
            { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time from your account settings." },
            { question: "Do you offer support for integrations?", answer: "Yes, we offer support for various integrations with third-party services." }
          ].map((faq, index) => (
            <div key={index} className="text-left">
              <h3
                className="text-xl font-medium text-white cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>▼</span>
              </h3>
              {openFAQ === index && <p className="text-lg text-gray-300 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage
