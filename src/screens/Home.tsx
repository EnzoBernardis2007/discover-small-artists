import { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Button } from '../components/Button'
import { getContext } from '../context/ContextProvider'
import defaultProfilePhoto from '../assets/default-user-photo.jpg'

interface Filter {
    followersLimit: number
}

interface Track {
    name: string
    id: string
    imageUrl: string
}
  
interface Artist {
    name: string
    followers: number
    imageUrl: string
    topTracks: Track[]
}
  
export function Home() {
    const endpoint = getContext()
    const [isHovered, setIsHovered] = useState(false)
    const [loader, setLoader] = useState<boolean>(true)
    const [fade, setFade] = useState<boolean>(true)
    const [data, setData] = useState<Artist[]>()
    const [index, setIndex] = useState<number>(0)

    const [filter, setFilter] = useState<Filter>({
        followersLimit: 100000
    })

    const handleFilter = (value: number) => {
        setFilter({
            followersLimit: value
        })

        getRandomArtist()
    }

    const getRandomArtist = async () => {
        setLoader(true)
        setFade(true)

        const url = new URL(`${endpoint}/random-small-artists`)
        const params = new URLSearchParams()

        if (filter.followersLimit) params.append('followersLimit', filter.followersLimit.toString())

        const response: Response = await fetch(`${url}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })

        if(response.ok) {
            const getData = await response.json()
            setData(getData)
            console.log("fetch: " + filter.followersLimit)

            setTimeout(() => setFade(false), 200)
            setTimeout(() => setLoader(false), 500) 
        }
    }

    useEffect(() => {
        getRandomArtist()
    }, [])

    const shuffle = () => {
        if(index == (data && data.length > 0 ? data.length : 2) - 1) {
            getRandomArtist()
            setIndex(0)
        } else {    
            setIndex(index + 1)
        }
    }
    
    return (
        <>
            <Sidebar handleFilter={handleFilter}/>
            <div className="bg-black min-h-screen h-full flex justify-center items-center p-14">
                {/* Loader */}
                { loader && 
                    <div className={`h-screen bg-black flex-col gap-4 w-full flex items-center justify-center fixed z-20 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-28 h-28 border-8 text-green-400 text-4xl animate-spin border-gray-200 flex items-center justify-center border-t-green-500 rounded-full" />
                    </div>
                }

                <main className="bg-opacity-10 bg-gray-500 rounded-3xl gap-6 p-10 w-[650px] h-auto m-auto flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        {/* Name of the artist */}
                        <h1 className="text-white text-3xl font-medium text-center">{data && data.length > 0 ? data[index].name : "Loading..."}</h1>

                        <div 
                            className="relative mb-10 mt-5"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Photo */}
                            <img 
                                src={data && data.length > 0 && data[index].imageUrl !== "No image" ? data[index].imageUrl : defaultProfilePhoto} 
                                className="w-52 rounded-xl" 
                                alt="Artist" 
                            />

                            {/* Info block */}
                            <div 
                                className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white hover:ring-2 hover:ring-white rounded-lg transition-opacity duration-300 ${
                                    isHovered ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <h2 className="text-lg font-bold">{data && data.length > 0 ? data[index].followers : "Loading..."}</h2>
                            </div>
                        </div>
                        
                        <Button type='special' content="Shuffle" doThis={shuffle}/>
                    </div>

                    {/* Top 5 musics of the artist */}
                    <div>
                        {
                            data && data.length > 0 && data[index].topTracks.map((track, trackIndex) => (
                                <iframe key={track.id}
                                    src={`https://open.spotify.com/embed/track/${data && data.length > 0 ? track.id : undefined}`}
                                    allow="encrypted-media"
                                    className='h-24 w-fit'>
                                </iframe>
                            ))
                        }
                    </div>
                </main>
            </div>
        </>
    )
}
