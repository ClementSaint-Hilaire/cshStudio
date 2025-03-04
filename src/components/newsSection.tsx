export default function NewsSection() {
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 bg-monochrome-100">
            <div className="max-w-[1680px] mx-auto">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-4">
                        <svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M3.64645 14.3536C3.84171 14.5488 4.15829 14.5488 4.35355 14.3536L7.53553 11.1716C7.7308 10.9763 7.7308 10.6597 7.53553 10.4645C7.34027 10.2692 7.02369 10.2692 6.82843 10.4645L4 13.2929L1.17157 10.4645C0.97631 10.2692 0.659728 10.2692 0.464466 10.4645C0.269203 10.6597 0.269203 10.9763 0.464466 11.1716L3.64645 14.3536ZM3.5 -2.18557e-08L3.5 14L4.5 14L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#1D1D1F"/>
                        </svg>
                    </div>
                    <span className="text-monochrome-800 text-subbody font-medium font-satoshi">scroll to explore</span>
                </div>

                <div className="flex gap-6 relative">
                    <div className="w-3/4">
                        <div className="sticky top-8">
                            <div className="aspect-video w-full bg-monochrome-800 rounded-md mb-4"></div>
                            <div>
                                <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">Titre du projet</h3>
                                <p className="text-subbody font-medium font-satoshi text-monochrome-800">/catégorie</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 flex flex-col gap-6">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex-shrink-0">
                                <div className="aspect-square w-full bg-monochrome-800 rounded-md mb-4"></div>
                                <div>
                                    <h3 className="text-subtitle md:text-title font-medium font-satoshi text-monochrome-800">Titre du projet</h3>
                                    <p className="text-subbody font-medium font-satoshi text-monochrome-800">/catégorie</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}