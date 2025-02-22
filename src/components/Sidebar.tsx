import { useState } from "react"
import { Button } from "./Button"

interface SidebarProps {
    handleFilter: (value: number) => void
}

export function Sidebar({ handleFilter }: SidebarProps) {
    const [followers, setFollowers] = useState<number>(50)

    

    return (
        <aside 
            className="fixed left-0 top-1/4 h-1/2 w-10 group hover:w-72 bg-opacity-10 bg-gray-500 text-white p-4 transition-all duration-300 rounded-r-lg shadow-lg overflow-hidden"
        >
            <div className="mt-2 space-y-2 ml-7 group-hover:opacity-100 opacity-0 transition-opacity duration-300 delay-300">
                <h2 className="text-lg font-bold">Filter</h2>
                <div>
                    <label className="block mb-1">Followers: {followers}</label>
                    <input 
                        type="range" 
                        min="0"
                        max="10000"
                        value={followers}
                        onChange={(event) => setFollowers(parseInt(event.target.value, 10))}
                        className="w-full cursor-pointer"
                    />
                </div>

                <Button type="common" content="Apply" doThis={() => handleFilter(followers)} />
            </div>
        </aside>
    )
}
