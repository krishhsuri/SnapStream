import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          One video is worth a thousand words
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Easily record and share AI-powered video messages with your teammates and customers to supercharge productivity.
        </p>
        <Link href="/auth/sign-up">
          <p className="bg-[#7320DD] text-lg font-semibold px-6 py-3 rounded-full hover:bg-[#7320DD]/80 transition">
            Get SnapStream for Free
          </p>
        </Link>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-900 text-center">
        <h2 className="text-2xl font-semibold mb-6">Trusted by over 25 million people across 400,000 companies</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Replace with actual company logos */}
          <Image src="/company-logo-1.png" alt="Company 1" width={150} height={50} />
          <Image src="/company-logo-2.png" alt="Company 2" width={150} height={50} />
          <Image src="/company-logo-3.png" alt="Company 3" width={150} height={50} />
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">The easiest screen recorder you’ll ever use</h2>
        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Lightning fast screen recording</h3>
              <p className="text-lg text-gray-300">
                Easily record your screen and camera. Record on any device using SnapStream’s Chrome extension, desktop app, or mobile app.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-700 w-full h-64 rounded-lg"></div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-6">
            <div className="md:w-1/2">
              <div className="bg-gray-700 w-full h-64 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">So much more than a screen recorder</h3>
              <p className="text-lg text-gray-300">
                SnapStream simplifies collaboration and communication with AI-powered video insights and annotations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-12">Video messaging for all use cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Sales</h3>
            <p className="text-gray-300">
              Personalize your pitch with video outreach to close more deals.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Engineering</h3>
            <p className="text-gray-300">
              Share technical details and progress updates with clarity.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Customer Support</h3>
            <p className="text-gray-300">
              Resolve issues faster by showing solutions visually.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Design</h3>
            <p className="text-gray-300">
              Share prototypes and ideas to speed up feedback cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">From our blog</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">When to Choose Synchronous Vs. Asynchronous Communication</h3>
            <p className="text-gray-300">
              Explore the intricacies of sync vs. async communication and how SnapStream bridges the gap.
            </p>
            <Link href="/blog/sync-vs-async">
              <p className="text-[#7320DD] font-semibold mt-2 inline-block">Read the article</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} SnapStream. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/about">
            <p className="hover:text-white">About</p>
          </Link>
          <Link href="/privacy">
            <p className="hover:text-white">Privacy Policy</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-white">Contact</p>
          </Link>
        </div>
      </footer>
    </main>
  );
}
