import { MdOutlineFlightTakeoff } from "react-icons/md"

const Header = () => {
    // w-full = width 100%
    // px = padding left and right
    // py = padding hau and bas
    return (
        <header className="w-full p-4 bg-slate-50">
            <nav className="flex items-center justify-between max-w-6xl mx-auto">
                <a href="/" className="text-lg font-bold flex items-center">
                    <MdOutlineFlightTakeoff className="text-2xl mr-1 text-red-900" />
                    Voyage City
                </a>
                <button className="bg-red-900 text-white px-6 py-2 rounded font-medium">
                    Se connecter
                </button>
            </nav>
        </header>
    )
}

export default Header
