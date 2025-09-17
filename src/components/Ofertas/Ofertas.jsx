const Ofertas = () => {

    return(
        <section className="flex flex-col items-center w-auto h-120">
            <div className="">
                <div className="flex justify-center w-[300px]">
                    <h2 className="absolute flex justify-self-end pt-60 text-[30px] font-titulos place-items-end text-[#FAE905] text-shadow-lg/30 z-10">Ventas al por mayor</h2>
                </div>
                <div className="">
                    <img src="/img/ofertas.png" alt="Foto pijamas" className="absolute w-[300px] z-0"/>
                </div>
            </div>

            
            <div className="flex flex-col items-center justify-end mt-7 bg-[#CCCEE7] min-w-85 min-h-95">
                <p className="font-titulos text-[25px] mb-3 text-white text-shadow-lg">Ofertas para tu bendi</p>
                <button className=" text-[13px] mb-7 py-1 px-7 font-texto bg-[#92B8D8] text-white rounded-full" >Comprar ahora</button>
            </div>
        </section>
    )
}

export default Ofertas;