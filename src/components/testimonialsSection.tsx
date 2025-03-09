import AnimatedContent from "@/Animations/AnimatedContent";

export default function TestimonialsSection() {
    return (
        <div className="w-full bg-monochrome-100">
            <div className="max-w-[1680px] gap-[64px] mx-auto flex flex-col px-4 md:px-6 lg:px-8 py-8 md:py-12">
                <AnimatedContent>
                    <h1 className="text-title font-medium font-satoshi leading-[48px] text-monochrome-800">/Temoignages</h1>
                </AnimatedContent>

                <div className="flex flex-col md:flex-row gap-[64px] w-full">
                    <div className="w-0 md:w-1/3 h-auto gap-[64px]" ></div>
                    
                    <div className="w-full md:w-1/3 h-auto gap-[64px] flex flex-col gap-[8px]">
                    <AnimatedContent>

                        <p className="w-full h-auto text-body font-medium font-satoshi text-monochrome-800">
                        Je tiens tout d'abord à remercier Clément pour tout le travail exceptionnel qu’il a réalisé. Son professionnalisme m’a véritablement impressionné, tout comme son souci constant de bien faire. Chaque élément de ses créations, des couleurs, des icônes, des rendus, aux détails graphiques, témoigne d’une grande rigueur et d’un véritable talent. Grâce à lui, nous avons une identité visuelle forte et parfaitement alignée avec nos valeurs, que nous ne pouvions même pas imaginer avant de le rencontrer, et qui est désormais essentielle pour nous. Clément est une personne sérieuse et appliquée, sur qui on peut compter, et collaborer avec lui a été un véritable plaisir. Je ne peux que le recommander à tous ceux qui recherchent un professionnel de la création artistique passionné, investi et talentueux.
                        </p>
                        <div className="flex flex-col">
                            <p className="text-heading font-semibold font-satoshi text-monochrome-800">
                            Eliot Mafille
                            </p>
                            <p className="text-body font-medium font-satoshi text-monochrome-800">
                                Président de Skorpia
                            </p>
                        </div>
                        </AnimatedContent>

                    </div> 
                    
                    <div className="w-full md:w-1/3 h-auto gap-[64px] flex flex-col gap-[8px]">
                    <AnimatedContent>

                        <p className="w-full h-auto text-body font-medium font-satoshi text-monochrome-800">
                        Rien à redire ! Tu es structuré, organisé, méthodologie, clair, explicite. Encore merci pour le travail qualitatif que tu as fournis !”
                        </p>
                        <div className="flex flex-col">
                            <p className="text-heading font-semibold font-satoshi text-monochrome-800">
                                Yacin Nedelec
                            </p>
                            <p className="text-body font-medium font-satoshi text-monochrome-800">
                                Gérant de Trott2Rue
                            </p>
                        </div>
                        </AnimatedContent>

                    </div> 
                    
                </div>
            </div>
        </div>
    )
}