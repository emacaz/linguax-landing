
import React from 'react';
import { AnalysisIcon, IntegrationIcon, SecurityIcon } from './icons';

const features = [
    {
        name: 'Análisis Tonal IA',
        description: 'Nuestra IA analiza el tono, ritmo y claridad para optimizar cada conversación y mejorar la efectividad.',
        icon: <AnalysisIcon />,
    },
    {
        name: 'Integración Transparente',
        description: 'Se integra con sus plataformas CRM y de comunicación existentes sin fricción, en cuestión de minutos.',
        icon: <IntegrationIcon />,
    },
    {
        name: 'Seguridad Enterprise-Grade',
        description: 'Infraestructura segura y confiable, diseñada para las exigencias corporativas y la protección de datos.',
        icon: <SecurityIcon />,
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-[#0A0A12]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Potencia Sin Precedentes. Resultados Medibles.</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        LinguaX no es solo una herramienta, es la infraestructura que su equipo necesita para dominar la comunicación.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name} className="p-8 border border-gray-800 rounded-2xl bg-[#0F0F1A]/50">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-violet-600/20 text-violet-400">
                                {feature.icon}
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">{feature.name}</h3>
                            <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
