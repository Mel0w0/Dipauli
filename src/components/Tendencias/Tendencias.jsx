import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Tendencias() {
    const [categorias, setTendencias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://689bcb8758a27b18087c2ef6.mockapi.io/api/v1/productosderopa")
        .then((res) => res.json())
        .then((data) => setTendencias(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, []);

    const scroll = (dir) => {
        if (!sliderRef.current) return;
        const amount = Math.round(sliderRef.current.clientWidth * 0.6);
        sliderRef.current.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    if (loading) return  <div className="text-center py-10">Cargando...</div>;
    if (error) return <div className="text-center py-10">Error al cargar</div>;

    return (
    <div className="w-full flex flex-col gap-4 my-20">
      <h2 className="text-[30px] flex justify-center py-5 ">Tendencias</h2>
      <div className="relative flex items-center">
        {/* Flecha izquierda */}
        <button
          aria-label="Anterior"
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-[#F3F0F0] shadow-md rounded-full p-1"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Contenedor carrusel */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide gap-4 scroll-smooth px-8"
        >
          {categorias.map((cat, index) => {
            return (
              <div
                key={cat.id}
                className="relative min-w-[210px] h-[320px] rounded-2xl overflow-hidden group"
              >
                {/* Imagen */}
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className={`w-full h-full object-fill transition-transform duration-500`}
                />
              </div>
            );
          })}
        </div>

        {/* Flecha derecha */}
        <button
          aria-label="Siguiente"
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-[#F3F0F0] shadow-md rounded-full p-1"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
    )
};