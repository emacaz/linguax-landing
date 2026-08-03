import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicyEN: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        PRIVACY POLICY
                    </h1>
                    <p className="text-lg text-gray-600">
                        LINGUA TECHNOLOGIES INC
                    </p>
                </header>

                <main className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Who is responsible for your data</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. ("LinguaX AI", "we", "us"), a corporation organized in the State of Delaware, United States, is responsible for the personal data we collect through linguax-ai.com and the trainer application (app.linguax-ai.com). This policy applies to free-trial users, individual paying users, and business (B2B) account users.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What data we collect</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Account data:</strong> name and email address, whether you sign up via passwordless magic link (free trial / individual plan) or via password and license key (business accounts).</li>
                            <li><strong>Audio and conversation content:</strong> when you use the trainer, your voice is streamed in real time to our AI provider to generate the conversation, transcriptions, vocabulary hints, corrections, and translations. We do not permanently store audio recordings on our own servers; voice processing is performed by the AI provider described in section 4.</li>
                            <li><strong>Trainer usage data:</strong> target language, the training context you write, mode preferences (Normal/Human Mode), and interactions with hints and translations.</li>
                            <li><strong>Payment data:</strong> we do not store card numbers. Payments are processed directly by Stripe; we only retain the customer and subscription identifiers needed to manage your account.</li>
                            <li><strong>Technical and browsing data:</strong> IP address (used to detect your region for pricing and to prevent trial abuse), browser language, and site usage data collected by Google Analytics and Microsoft Clarity (see section 5).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How we use your data</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Providing the service: maintaining real-time conversation sessions, generating contextual hints, corrections, and translations.</li>
                            <li>Managing your account: authentication, sending access links, managing your subscription and billing.</li>
                            <li>Communicating with you: account confirmations, notices about your free trial, support, and — only if you expressly consent at signup — product and marketing communications.</li>
                            <li>Preventing abuse: enforcing daily limits on new free trials and preventing misuse of the trial period.</li>
                            <li>Improving the product: understanding aggregate usage patterns through Google Analytics and Microsoft Clarity.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Who we share your data with</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell your personal data. We share it only with the following providers, to the extent necessary to operate the service:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Google Cloud / Firebase:</strong> account authentication, database (Firestore), and server functions that run the application.</li>
                            <li><strong>Google Gemini API:</strong> processes your voice and text in real time during training sessions to generate the trainer's responses, transcriptions, hints, and translations.</li>
                            <li><strong>Brevo:</strong> sends transactional emails (access links) and, if you consented, marketing communications.</li>
                            <li><strong>Stripe:</strong> payment processing and subscription management. Stripe receives and stores your card data directly; we do not have access to it.</li>
                            <li><strong>Google Analytics and Microsoft Clarity:</strong> website usage analytics and anonymized session recording for product improvement purposes.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and similar technologies</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our website uses the following cookies and tracking technologies:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Google Analytics:</strong> measures visits and aggregate behavior on the site.</li>
                            <li><strong>Microsoft Clarity:</strong> records browsing sessions (cursor movement, clicks) and generates heatmaps to understand how the site is used.</li>
                            <li><strong>Offer functional cookie:</strong> on the independent-professionals offer page, we store a technical cookie that remembers the remaining time on a promotion for 7 days.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International data transfers</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our infrastructure and providers are based primarily in the United States. If you access our services from the European Union, the European Economic Area, or any other region with its own data protection regulations, your data will be transferred to and processed in the United States and in the countries where our providers operate (section 4).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. How long we retain your data</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We retain your account data for as long as your account is active. If you request account deletion, we will delete or anonymize your personal data within a reasonable timeframe, except where we must retain certain information for legal, tax, or dispute-resolution obligations (for example, billing records).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>Access the personal data we hold about you.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>Request deletion of your account and personal data.</li>
                            <li>Object to the use of your data for marketing.</li>
                            <li>Withdraw your consent at any time, without affecting the lawfulness of prior processing.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            To exercise any of these rights, write to us at hola@linguax-ai.com.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our services are not directed at children under 16, and we do not knowingly collect data from anyone under that age. If you believe a child has provided us with personal data, contact us so we can delete it.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We apply reasonable technical and organizational measures to protect your data, including secure authentication and encryption in transit. No system is completely secure; we cannot guarantee the absolute security of information transmitted over the internet.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to this policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this policy from time to time. Significant changes will be communicated through the official website or by email before they take effect.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
                        <p className="text-gray-700 leading-relaxed">
                            For any questions about this policy or how we handle your data, write to us at hola@linguax-ai.com.
                        </p>
                    </section>
                </main>

                <div className="text-center mt-12">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                    >
                        ← Back to home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyEN;
