import { useState } from 'react';
import logo from '../assets/react.svg'
import { Sidebar } from '../components/Sidebar';

export function Home() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <>
            <Sidebar />
            <div className="bg-black h-screen flex justify-center items-center">
                <main className="bg-gray-950 rounded-3xl p-5 w-96 m-auto flex flex-col items-center gap-4 border-4 border-gray-900">
                    {/* Name of the artist */}
                    <h1 className="text-white text-3xl">Artist Name</h1>

                    <div 
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Photo */}
                        <img src={logo} className="size-52" alt="Artist" />

                        {/* Info block */}
                        <div 
                            className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white rounded-lg transition-opacity duration-300 ${
                                isHovered ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <h2 className="text-lg font-bold">Artist Info</h2>
                            <p className="text-sm">Some details about the artist...</p>
                        </div>
                    </div>

                    {/* Top 5 musics of the artist */}
                    <div className="flex h-20 gap-3 justify-center items-center">
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <img key={index} src={logo} className="size-14 transition-all hover:scale-125" alt={`Logo ${index}`} />
                            ))
                        }
                    </div>
                    <button className="bg-green-600 rounded-lg text-yellow-50 w-24 h-10 hover:bg-green-700 transition">
                        Shuffle
                    </button>
                </main>
            </div>
        
        </>
    )
}