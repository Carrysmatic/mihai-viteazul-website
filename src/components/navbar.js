const { default: Link } = require("next/link")

const Navbar = () => {
    return (
        <nav class="flex items-center text-blue-300 justify-between h-16 px-20 mx-20 mt-16">
            <div class="flex items-center">
                <img class="h-20 w-45" src="/MV.jpg" alt="Logo" />
            </div>
            <div class="flex items-center space-x-4">
                <a href="/" class="text-blue-800 hover:text-blue-600">Acasa</a>
                <div class="group relative">
                    <button class="text-blue-800 hover:text-blue-600">Invatamant</button>
                    <div class="group-hover:block absolute z-10 hidden bg-white w-32 mt-2 py-2 rounded-md shadow-md">
                        <a href="#" class="block px-2 py-2 text-blue-800 hover:bg-blue-100">Invatamant primar</a>
                        <a href="#" class="block px-2 py-2 text-blue-800 hover:bg-blue-100">Invatamant gimnazial</a>
                    </div>
                </div>
                <a href="#" class="text-blue-800 hover:text-blue-600">Contact</a>
                <a href="#" class="text-blue-800 hover:text-blue-600">Inscrieri clasa pregatitoare</a>
                <a href="#" class="text-blue-800 hover:text-blue-600">Proiect Erasmus+</a>
                <a href="#" class="text-blue-800 hover:text-blue-600">Declaratii de avere</a>
                <a href="#" class="text-blue-800 hover:text-blue-600">Examene si concursuri</a>
                <div class="group relative">
                    <button class="text-blue-800 hover:text-blue-600">Manageriale</button>
                    <div class="group-hover:block absolute z-10 hidden bg-white w-32 mt-4 py-2 rounded-md shadow-md">
                        <a href="#" class="block px-4 py-2 text-blue-800 hover:bg-blue-100">Resurse umane</a>
                        <a href="#" class="block px-4 py-2 text-blue-800 hover:bg-blue-100">Hotarari si decizii</a>
                        <a href="#" class="block px-4 py-2 text-blue-800 hover:bg-blue-100">Buget</a>
                    </div>
                    <a href="#" class="text-blue-800 hover:text-blue-600">Contact</a>
                </div>  
                </div>
        </nav>
    )
}

export default Navbar;