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
            <div className="relative w-full min-h-screen overflow-hidden z-0">
                <div className="w-full h-full">
                    <img
                        src={imagenes[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className="absolute w-auto h-[320px] object-cover transition-opacity duration-500"
                    />
                </div>

                <div className="relative w-[100px] h-[100x] pt-11 pl-15">
                    <svg class="absolute top-5 left-5 w-[200px] h-[200px] pointer-events-none" viewBox="0 0 100 100">
                        <defs>
                            <path id="textcircle" d="M50,50 m-40,0 a29,40 0 1,1 60,0 a35,40 0 1,1 -60,0" fill="none" />
                        </defs>
                        <text font-size="7" fill="white" font-weight="bold">
                            <textPath href="#textcircle" startOffset="15%" text-anchor="middle">
                                DESCUENTO
                            </textPath>
                        </text>
                    </svg>
                    <div className="absolute indent-0 flex justify-center w-[70px] h-[70px] rounded-full bg-amber-300 items-center text-white">
                        <p className="text-2xl">20%</p>
                    </div>
                </div>

            </div>

        );
    };

    export default Banner;