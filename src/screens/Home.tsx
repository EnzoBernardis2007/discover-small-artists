import logo from '../assets/react.svg'

export function Home() {
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <main className="bg-gray-950 rounded-3xl p-5 w-96 m-auto flex flex-col items-center gap-4 border-4 border-green-600">
                {/* Name of the artist */}
                <h1 className="text-white text-3xl">Artist Name</h1>
                {/* Photo */}
                <img src={logo} className="size-52" />

                {/* Top 5 musics of the artist */}
                <div className="flex gap-3 p-2">
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <img key={index} src={logo} className="size-14" alt={`Logo ${index}`} />
                        ))
                    }
                </div>
                <button className="bg-green-600 rounded-lg text-yellow-50 w-24 h-10 hover:bg-green-700 transition">
                    Shuffle
                </button>
            </main>
        </div>
    )
}