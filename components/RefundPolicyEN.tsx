import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const RefundPolicyEN: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        REFUND AND CANCELLATION POLICY
                    </h1>
                    <p className="text-lg text-gray-600">
                        LINGUA TECHNOLOGIES INC
                    </p>
                </header>

                <main className="prose prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Philosophy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Lingua Technologies Inc., we believe in delivering real value from the first moment. By making a payment, the client acknowledges that they are acquiring access to technology, specialized knowledge, or professional time reserved exclusively for them — assets that have a real cost to the company once assigned. Access to any product or service implies the express acceptance of this policy. Furthermore, by completing a purchase, the client expressly acknowledges that access to the service or its performance begins immediately upon payment confirmation. To the fullest extent permitted by applicable law, the client thereby waives any statutory right of withdrawal or cooling-off period that may otherwise apply under their local legislation — consistent with established exceptions for digital services and professional content recognized under U.S. commercial law and broadly adopted international commercial frameworks.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. AI Voice Coach Subscriptions</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Subscription payments are non-refundable once the access period has begun, regardless of the level of use during that period.</li>
                            <li>The client can cancel at any time from their account. Access remains active until the end of the already paid period. Cancellation does not generate the right to partial or proportional refund.</li>
                            <li>No proportional refunds are made for unused days under any circumstances.</li>
                            <li>In case of critical technical failure attributable exclusively to Lingua Technologies Inc., the client has 15 business days to report it in writing to the corporate email. The company will evaluate the case and may offer an extension of access or equivalent credit for the affected time. Technical failures attributable to the client's connection, device, or configuration will not be considered.</li>
                            <li>Fees charged by external payment processors are non-refundable under any circumstances, as they are services already executed at the time of the transaction.</li>
                            <li>Subscription payments fund shared infrastructure that is provisioned in advance for each billing cycle — including AI computing capacity, platform availability, and system resources reserved per active account. This forward-provisioning model means that the costs associated with a subscription are committed at the start of each period regardless of actual usage levels, making mid-period refunds structurally incompatible with the company's operational and financial model.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Private Training Programs</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Once payment is confirmed and space is reserved in the schedule, no refunds are made for change of mind, withdrawal, or client's personal circumstances.</li>
                            <li>The costs associated with a private training program — including instructor scheduling and opportunity cost, personalized session preparation, software configuration for the client's profile, and administrative coordination — are incurred by Lingua Technologies Inc. at the time of booking, not at the time of delivery. These are non-recoverable costs regardless of subsequent client cancellation or non-attendance, and constitute the basis for the refund restrictions described in this section.</li>
                            <li>If the client needs to cancel, they must notify it in writing with a minimum of 48 hours in advance to be able to reschedule without additional cost. Rescheduling is subject to availability and applies only once per contracted program.</li>
                            <li>Cancellations with less than 48 hours notice do not generate the right to refund or free rescheduling.</li>
                            <li>If the program includes prior access to materials, guides, or software, the refund is voided from the moment such resources have been delivered, regardless of whether the client used them.</li>
                            <li>Non-attendance without prior notice will be considered a session held and will not generate the right to refund or rescheduling.</li>
                            <li>In case of cancellation by Lingua Technologies Inc., the client will receive a full refund or the option to reschedule.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Other Digital Products and Services</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Any digital product that involves delivery of content, software access, or transfer of materials is non-refundable once activated or delivered, regardless of the use the client has made of such resources.</li>
                            <li>For custom services or specific developments, refund terms will be established in the particular agreement signed between the parties. In the absence of such agreement, this policy applies.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Exception Criteria</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Refund requests outside of the situations expressly contemplated in this policy may only be approved in the following cases, and provided that there is verifiable evidence:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>duplicate charge error attributable to the company or payment processor</li>
                            <li>improper charge due to technical failure directly attributable to Lingua Technologies Inc.</li>
                            <li>inability to access the service caused by an internal system failure</li>
                            <li>direct and verifiable breach of the contracted service provision</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The following will not be considered valid reasons for refunds, among others:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>unawareness of the policy after making the purchase</li>
                            <li>client's personal circumstances</li>
                            <li>change of mind or lack of use of the service</li>
                            <li>problems with the client's connection, device, or configuration</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Any request outside of these situations will be rejected in accordance with this policy without exception.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Request Procedure</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>All refund or cancellation requests must be made in writing to the official corporate email: soporte@linguax-ai.com</li>
                            <li>Verbal agreements, social network messages, informal chats, or any communication outside the official channel have no validity to modify the terms of this policy or to initiate a refund process.</li>
                            <li>Lingua Technologies Inc. will respond to all formal requests within a maximum of 5 business days from their receipt. Incomplete requests or those sent through unofficial channels will not start the response period.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Refund Processing: Terms, Conditions, and Installment Structure</h2>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.1 Standard Processing</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Approved refunds will be processed within a maximum of 15 business days from the official written confirmation by Lingua Technologies Inc. All refund determinations are final and communicated exclusively in writing through the official support channel.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.2 Business Rationale for Installment Refunds</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Lingua Technologies Inc. operates on a pre-committed resource model. When a payment is received — for either a subscription or a private training program — the company immediately allocates infrastructure capacity, provisions AI computing resources, schedules professional time, and activates operational workflows on behalf of that client. These costs are incurred at the moment of purchase, not at the moment of service consumption. This is consistent with standard U.S. GAAP accounting practices, under which service costs are recognized and committed at the time of resource allocation, regardless of subsequent consumption levels.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Approved refunds are therefore disbursed from current operating revenue rather than from a dedicated escrow or reserve fund — a financial structure that is standard across subscription-based software (SaaS) companies, professional education providers, and digital service platforms worldwide. Issuing large refunds as a single lump sum can materially disrupt the company's capacity to sustain uninterrupted service for all active clients. Installment refunds are not a reflection of any financial inability to pay, but of responsible financial governance: a practice used by established companies globally to ensure that honoring one client's refund does not compromise the service quality and continuity for all remaining clients.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.3 Installment Eligibility</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Lingua Technologies Inc. reserves the right to structure an approved refund as a scheduled installment plan in any of the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li><strong>Subscriptions:</strong> when the refundable amount exceeds the equivalent of one (1) month's subscription fee for the affected account.</li>
                            <li><strong>Private Training Programs:</strong> when the refundable amount corresponds to two (2) or more undelivered sessions, or when materials, software access, or preparatory resources were provided to the client prior to cancellation.</li>
                            <li><strong>Any approved refund</strong> where the total amount exceeds USD $200 (or its equivalent in local currency at the exchange rate of the original transaction date).</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.4 Installment Schedule and Guarantees</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When an installment plan applies, the following conditions are guaranteed by Lingua Technologies Inc.:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                            <li>The total refund will be paid in no more than five (5) installments.</li>
                            <li>The full amount will be settled within a maximum of one hundred and eighty (180) calendar days from the client's written confirmation of the installment plan.</li>
                            <li>The first installment will be issued within fifteen (15) business days of the formal approval date.</li>
                            <li>Subsequent installments will follow at intervals of no more than thirty (30) calendar days each.</li>
                            <li>No administrative fee or deduction will be applied to the approved refund amount as a result of the installment structure itself.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.5 Notification and Confirmation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The client will be notified in writing of the proposed installment schedule before any payment is issued. The client must confirm acceptance in writing within five (5) business days of receiving the notification. Failure to respond within this period will be interpreted as acceptance of the proposed plan, and processing will begin accordingly. Lingua Technologies Inc. commits to maintaining active written communication with the client throughout the entire process until the refund is fully settled.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">7.6 Chargeback and Third-Party Dispute Policy</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Filing a dispute, chargeback, or claim with a payment processor, bank, or any third party before exhausting the official refund procedure established in this policy — and before receiving a final written response from Lingua Technologies Inc. — will be considered a material breach of the agreed terms. This may result in: (i) immediate suspension of access to all active services; (ii) forfeiture of any pending refund consideration; and (iii) recovery from the client of costs directly incurred by Lingua Technologies Inc. as a result of the chargeback process, including processor reversal fees and associated administrative costs. Lingua Technologies Inc. will always endeavor to resolve disputes directly, fairly, and promptly through its official channel before any third-party escalation becomes necessary.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. shall not be liable for indirect losses, consequential damages, lost profits, or any harm arising from the use or inability to use the service, beyond the amount actually paid by the client.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Jurisdiction and Applicable Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            This policy is governed by the laws of the State of Delaware, United States, and the courts of such jurisdiction shall be competent to resolve any dispute arising from it.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications to this Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. reserves the right to update this policy at any time. Changes will apply to new transactions and will be communicated with at least 7 days in advance through the official website or by email.
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

export default RefundPolicyEN;
