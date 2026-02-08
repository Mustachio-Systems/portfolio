'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mustachio Systems",
  description: "The terms and conditions governing the use of Mustachio Systems' services.",
};

export default function TermsOfService() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-12 uppercase tracking-widest">Last Updated: February 2, 2026</p>

        <div className="space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing the Mustachio Systems website or engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations of the <strong>Commonwealth of Puerto Rico</strong>. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
            <p className="leading-relaxed">
              Mustachio Systems provides Web Development, QA Automation, and IT Infrastructure services. The specific scope of work, timeline, and fees for any project will be outlined in a separate Proposal or Service Agreement agreed upon by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed mb-4">
              <strong>Client Ownership:</strong> Upon full payment of all fees, the Client is granted a non-exclusive, perpetual license to use the final website design and custom code produced for their specific project.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Mustachio Systems Rights:</strong> We reserve the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Retain ownership of preliminary drafts, unused concepts, and pre-existing code libraries/boilerplates.</li>
              <li>Display the completed project in our portfolio and marketing materials as a demonstration of our work, unless a Non-Disclosure Agreement (NDA) states otherwise.</li>
              <li>{'Place a small credit link (e.g., "Built by Mustachio Systems") in the footer of the website, which can be removed upon request or for a fee.'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall Mustachio Systems or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or the software we develop.
              <br /><br />
              We do not guarantee that our services will be error-free or uninterrupted. While we perform rigorous QA testing, software bugs can occur. We are not liable for any third-party service failures (e.g., hosting downtime, API changes).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Revisions and Concept Projects</h2>
            <p className="leading-relaxed">
              <strong>Concept Work:</strong> Projects labeled as {'"Concept" or "Unsolicited Redesign"'} in our portfolio are technical demonstrations created for educational and portfolio purposes only. We are not affiliated with, endorsed by, or sponsored by the brands featured in these concepts unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p className="leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Puerto Rico and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <div className="mt-6 p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <p className="text-white font-bold">Mustachio Systems</p>
              <p className="text-slate-400">Luis Pena Gonzalez</p>
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