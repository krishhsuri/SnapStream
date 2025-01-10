import React from 'react'
import { Button } from '@/components/ui/button'

const ContactSalesPage = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-20">
      <div className="container mx-auto flex justify-between gap-12 px-6 lg:px-0">
        {/* Left Section - Information */}
        <div className="w-full lg:w-1/2 text-center lg:text-left py-10">
          <h1 className="text-7xl font-extrabold text-white mb-10">
            Contact Our 
            Sales <br /> Team
          </h1>
          <p className="text-2xl  text-white mb-12">
          Reach out to our experienced sales experts for a personalized consultation, or feel free to ask any questions you may have regarding our pricing, integrations, and how our solution can specifically meet your unique business needs
          </p>
          <p className="text-lg mt-6 text-white">
            <strong>Note:</strong> We’ll respond within 1 business day to discuss your needs.
          </p>
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-white mb-4">Why Choose Us?</h2>
            <ul className="text-lg text-white space-y-2">
              <li>✔️ Expert Consultation</li>
              <li>✔️ Competitive Pricing</li>
              <li>✔️ Seamless Integrations</li>
              <li>✔️ 24/7 Customer Support</li>
              <li>✔️ Tailored Solutions</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-2/5 bg-muted p-7 rounded-lg shadow-lg ">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 bg-background border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 bg-background border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-lg font-semibold text-white mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full p-4 bg-background border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 bg-background border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                placeholder="Tell us about your needs"
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button className="bg-dark text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary/30 transition-colors duration-300">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSalesPage