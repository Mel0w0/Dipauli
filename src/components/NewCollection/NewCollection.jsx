import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function NewCollection() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://689bcb8758a27b18087c2ef6.mockapi.io/api/v1/productosderopa")
        .then((res) => res.json())
        .then((data) => setCategorias(data))
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
      <h2 className="text-[30px] py-5 flex justify-center ">Nueva colección</h2>
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
          {categorias.map((cat) => {
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
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-60
                  transition duration-500 flex flex-col justify-end gap-1 text-shadow-lg/30 text-[#FFFFFF] p-3"
                >
                  <h3 className="text-2xl font-semibold">
                    {cat.title}
                  </h3>
                  <p className="text-sm font-semibold pl-2">
                    {cat.descripcion}
                  </p>
                  <h4 className="text-base font-semibold pl-2">
                    {cat.precio}
                  </h4>
                </div>
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