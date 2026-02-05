'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12 uppercase tracking-widest">Last Updated: February 2, 2026</p>

        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              {'Mustachio Systems ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us.'} 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage our services.
              <br /><br />
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We collect information that you voluntarily provide to us when you fill out a contact form, request a quote, or communicate with us via email or WhatsApp.</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong>Personal Identification:</strong> Name, email address, phone number.</li>
              <li><strong>Project Details:</strong> Information regarding your business needs, technical requirements, and budget.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and operating system (collected automatically via standard analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use your data for the following legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-400">
              <li>To provide and maintain our services (Web Development, QA, IT Infrastructure).</li>
              <li>To communicate with you regarding your project inquiries.</li>
              <li>To issue invoices and contracts.</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection & Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              We may use trusted third-party services to operate our business, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-400">
              <li><strong>Hosting:</strong> Cloudflare / Vercel</li>
              <li><strong>Analytics:</strong> Google Analytics</li>
              <li><strong>Communications:</strong> Gmail, WhatsApp</li>
            </ul>
            <p className="mt-4">We do not sell, trade, or rent your personal identification information to others.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p className="leading-relaxed">
              This Privacy Policy is governed by and construed in accordance with the laws of the <strong>Commonwealth of Puerto Rico</strong>. Any disputes relating to this policy shall be subject to the exclusive jurisdiction of the courts of Puerto Rico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us directly:
            </p>
            <div className="mt-6 p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <p className="text-white font-bold">Mustachio Systems</p>
              <p className="text-slate-400">Attn: Luis Pena Gonzalez</p>
              <p className="text-slate-400">Email: lapgonzalez96@gmail.com</p>
              <p className="text-slate-400">Phone: +1 (939) 539-9445</p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}