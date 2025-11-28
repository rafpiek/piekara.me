import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function GDPR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-black dark:to-slate-900">
      <Navigation currentPage="/gdpr" />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Privacy & GDPR Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Introduction</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Welcome to my personal website. This Privacy Policy explains how I collect, use, and protect your information when you visit piekara.me.
                I am committed to protecting your personal data and ensuring compliance with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Data Controller</h2>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Name:</strong> Rafał Piekarz<br/>
                  <strong>Website:</strong> https://piekara.me<br/>
                  <strong>Purpose:</strong> Personal portfolio and information sharing<br/>
                  <strong>Contact:</strong> For privacy inquiries, please use the contact information provided in the Info Hub section
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Information I Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    <li>IP address (anonymized where possible)</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website</li>
                    <li>General location information (country/region level)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Information You Provide Voluntarily</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    <li>Contact form submissions (name, email, message)</li>
                    <li>Comments or feedback</li>
                    <li>Newsletter subscription (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How I Use Your Information</h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>To provide and maintain my website</li>
                <li>To respond to your inquiries and messages</li>
                <li>To improve user experience and website performance</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To ensure website security and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Legal Basis for Processing</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                I process your personal data based on the following legal grounds under GDPR:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li><strong>Legitimate Interest:</strong> For website analytics and security monitoring</li>
                <li><strong>Consent:</strong> When you voluntarily provide information through contact forms</li>
                <li><strong>Legal Obligation:</strong> When required by law to retain certain information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Third-Party Services</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                This website may use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li><strong>Hosting Providers:</strong> Vercel/Netlify for website hosting</li>
                <li><strong>Analytics:</strong> Privacy-focused analytics tools (if any)</li>
                <li><strong>CDN:</strong> Content Delivery Networks for performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Your Rights Under GDPR</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how your data is used</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
                <li><strong>Right to Object:</strong> Object to processing of your data</li>
                <li><strong>Right to Withdraw Consent:</strong> Revoke consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Data Security</h2>
              <p className="text-slate-600 dark:text-slate-400">
                I implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include SSL encryption, secure hosting environments, and regular security updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Data Retention</h2>
              <p className="text-slate-600 dark:text-slate-400">
                I retain your personal data only as long as necessary for the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are typically retained for 12 months for communication purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Cookies</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                This website may use cookies to enhance your browsing experience:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> To understand website usage (anonymized)</li>
                <li><strong>Preference Cookies:</strong> To remember your settings</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-400 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">International Data Transfers</h2>
              <p className="text-slate-600 dark:text-slate-400">
                If your data is transferred outside the EU/EEA, I ensure adequate protection through appropriate safeguards such as Standard Contractual Clauses (SCCs) or other GDPR-compliant mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Changes to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-400">
                I may update this Privacy Policy from time to time to reflect changes in my practices or applicable law. The updated policy will be posted on this page with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your GDPR rights, please contact me using the information provided in the Info Hub section.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Data Protection Concerns:</strong> If you believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}