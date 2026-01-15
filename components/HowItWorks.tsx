
import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Conectar',
        description: 'Conecte sus sistemas actuales en minutos a través de nuestra API segura y robusta.'
    },
    {
        number: '02',
        title: 'Entrenar',
        description: 'La IA comienza a analizar conversaciones y provee feedback accionable en tiempo real.'
    },
    {
        number: '03',
        title: 'Optimizar',
        description: 'Vea un aumento medible en la efectividad, tasas de cierre y satisfacción del cliente.'
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Implementación en 3 Pasos Simples</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Comience a transformar la comunicación de su equipo en tiempo récord.
                    </p>
                </div>
                <div className="mt-16 relative">
                     <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent hidden md:block" aria-hidden="true"></div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start">
                                    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-blue-500">{step.number}</span>
                                </div>
                                <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
                                <p className="mt-2 text-base text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
