const Header = () => {
    return (
        <header className="flex items-center justify-between p-2">
            <div>
                <img src="/public/img/logotexto.png" alt="Logo" className="h-auto w-25 ml-3"/>
            </div>
            <div className="flex gap-2">
                <nav>
                    <ul className=" flex gap-4 pt-1 text-xs md:text-3xl">
                        <li>Categorias</li>
                        <li>Promociones</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <div>
                    <img src="/public/img/carrito.png" alt="Carrito de compras" className="h-auto w-6 mr-3"/>
                </div>
            </div>
        </header>
    );
};

export default Header;