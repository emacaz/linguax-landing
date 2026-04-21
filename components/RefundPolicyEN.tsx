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
                            At Lingua Technologies Inc., we believe in delivering real value from the first moment. By making a payment, the client acknowledges that they are acquiring access to technology, specialized knowledge, or professional time reserved exclusively for them — assets that have a real cost to the company once assigned.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. AI Voice Coach Subscriptions</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Subscription payments are non-refundable once the access period has begun.</li>
                            <li>The client can cancel at any time from their account. Access remains active until the end of the already paid period.</li>
                            <li>No proportional refunds are made for unused days.</li>
                            <li>In case of critical technical failure attributable to Lingua Technologies Inc., the client has 15 business days to report it. The company will evaluate the case and may offer an extension of access or equivalent credit for the affected time.</li>
                            <li>Fees charged by external payment processors are non-refundable under any circumstances, as they are services already executed at the time of the transaction.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Private Training Programs</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Once payment is confirmed and space is reserved in the schedule, no refunds are made for change of mind, withdrawal, or client's personal circumstances.</li>
                            <li>If the client needs to cancel, they must notify it with a minimum of 48 hours in advance to be able to reschedule without additional cost.</li>
                            <li>Cancellations with less than 48 hours notice do not generate the right to refund or free rescheduling.</li>
                            <li>If the program includes prior access to materials, guides, or software, the refund is voided from the moment such resources have been delivered.</li>
                            <li>In case of cancellation by Lingua Technologies Inc., the client will receive a full refund or the option to reschedule.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Other Digital Products and Services</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Any digital product that involves delivery of content, software access, or transfer of materials is non-refundable once activated or delivered.</li>
                            <li>For custom services or specific developments, refund terms will be established in the particular agreement signed between the parties.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Exceptions for Lack of Knowledge of the Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            In cases where the client has not had prior access to this policy before making their payment, Lingua Technologies Inc. will evaluate the refund request individually. If approved, the refund will be processed in accordance with point 7 of this policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Request Procedure</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>All refund or cancellation requests must be made in writing to the official corporate email.</li>
                            <li>Verbal agreements or messages on social networks are not valid to modify the terms of this policy.</li>
                            <li>Lingua Technologies Inc. will respond to all formal requests within a maximum of 5 business days.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Refund Terms and Conditions</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Approved refunds will be processed within a maximum of 15 business days from the official confirmation by Lingua Technologies Inc.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In cases where the amount to be refunded is significant or the company's operational flow requires it, Lingua Technologies Inc. reserves the right to fractionate the refund into agreed installments with the client, without this implying non-compliance with this policy.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            In any case, the client will be notified of the payment plan before its execution and must confirm it in writing.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to this Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lingua Technologies Inc. reserves the right to update this policy at any time. Changes will apply to new transactions and will be communicated in advance.
                        </p>
                    </section>

                    <section className="mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Contact:</strong> soporte@linguax-ai.com
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