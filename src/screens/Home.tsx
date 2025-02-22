import { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Button } from '../components/Button'
import { getContext } from '../context/ContextProvider'
import defaultProfilePhoto from '../assets/default-user-photo.jpg'

interface Track {
    name: string;
    id: string;
    imageUrl: string;
}
  
interface Artist {
    name: string;
    followers: number;
    imageUrl: string;
    topTracks: Track[];
}
  

export function Home() {
    const endpoint = getContext()
    const [isHovered, setIsHovered] = useState(false)
    const [data, setData] = useState<Artist[]>()
    const [index, setIndex] = useState<number>(0)

    const getRandomArtist = async () => {
        const response: Response = await fetch(`${endpoint}/random-small-artists`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })

        if(response.ok) {
            const getData = await response.json()
            setData(getData)
            console.log("fetch")
        }
    }

    useEffect(() => {
        getRandomArtist()
    }, [])

    const shuffle = () => {
        if(index == (data && data.length > 0 ? data.length : 2) - 1) {
            getRandomArtist()
        } else {
            setIndex(index + 1)
        }
    }
    
    return (
        <>
            <Sidebar />
            <div className="bg-black min-h-screen h-full flex justify-center items-center p-14">
                <main className="bg-gray-950 rounded-3xl p-5 w-96 m-auto flex flex-col items-center gap-4 border-4 border-gray-900">
                    {/* Name of the artist */}
                    <h1 className="text-white text-3xl">{data && data.length > 0 ? data[index].name : "Loading..."}</h1>

                    <div 
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Photo */}
                        <img 
                            src={data && data.length > 0 && data[index].imageUrl !== "No image" ? data[index].imageUrl : defaultProfilePhoto} 
                            className="size-52 rounded-xl" 
                            alt="Artist" 
                        />

                        {/* Info block */}
                        <div 
                            className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white rounded-lg transition-opacity duration-300 ${
                                isHovered ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <h2 className="text-lg font-bold">{data && data.length > 0 ? data[index].followers : "Loading..."}</h2>
                        </div>
                    </div>

                    {/* Top 5 musics of the artist */}
                    <div className="gap-0">
                        {
                            data && data.length > 0 && data[index].topTracks.map((track, trackIndex) => (
                                <>
                                    <iframe key={track.id}
                                        src={`https://open.spotify.com/embed/track/${data && data.length > 0 ? track.id : undefined}`}
                                        allow="encrypted-media"
                                        className='h-96 w-fit'>
                                    </iframe>
                                </>
                            ))
                        }
                    </div>

                    <Button content="Shuffle" doThis={shuffle}/>
                </main>
            </div>
        
        </>
    )
}