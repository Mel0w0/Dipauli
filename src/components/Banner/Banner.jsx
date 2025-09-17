import { useEffect, useState } from "react";

const imagenes = [
    "/img/Banner.png",
    "/img/Banner2.png"
];

    const Banner = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval( () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className="relative w-full h-[420px]">
                <div className="w-full h-full">
                        <svg className=" absolute top-5 left-5 w-[116px] h-[120px] pointer-events-none z-10 "viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath" d="M52,52 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" fill="none" />
                            </defs>
                            <text fontSize="12" fill="white" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }} fontWeight="bold">
                                <textPath href="#circlePath" startOffset="9%" text-anchor="start">
                                    DESCUENTO
                                </textPath>
                            </text>
                        </svg>
                        <div className=" absolute indent-0 flex justify-center w-[87px] h-[87px] rounded-full bg-[#FDF15A] items-center text-white top-9 left-9 z-10">
                            <p className="text-3xl text-shadow-lg/25 pb-2">20%</p>
                        </div> 
                    
                    <img
                        src={imagenes[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className="absolute w-full h-full object-cover transition-opacity duration-500 z-0"
                    />
                </div>

            </div>

        );
    };

    export default Banner;