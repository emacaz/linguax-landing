
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-gray-500 text-sm">
                    <p className="font-semibold tracking-wider uppercase">
                        A Delaware Corporation / US Based Infrastructure
                    </p>
                    <p className="mt-4">
                        &copy; {currentYear} LinguaX. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
