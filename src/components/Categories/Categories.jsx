const datosContenedores = [
    { imagen: "/img/NB.png", texto: 'NB A 5 Meses'},
    { imagen: '/img/6Meses.png', texto: '6 Meses a 1 Año'},
    { imagen: '/img/2Años.png', texto: '2 Años a 6 Años'},
    { imagen: '/img/7Años.png', texto: '7 años a 12 Años'}
]

function Contenedores({ data }) {
    return(
        <div className="grid grid-cols-2 gap-10 pl-3">
            {data.map((item, index) => (
                <div key={index}className="w-[203px] h-[203px] rounded-full">
                    <img src={item.imagen} alt={item.texto}/>
                    <p className="flex justify-center">{item.texto}</p>
                </div>
            ))}
        </div>
    );
}

const Categories = () => {
    return (
        <div>
            <div className=" flex justify-center py-14 text-[30px]">
                <h1>Compra por categoría</h1>
            </div>
            <div className="">
                <Contenedores data ={datosContenedores}/>
            </div>
        </div>
    );
};

export default Categories;