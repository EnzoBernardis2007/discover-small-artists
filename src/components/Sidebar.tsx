export function Sidebar() {
    return (
        <aside 
            className="fixed left-0 top-1/4 h-auto w-10 hover:w-64 bg-gray-900 text-white p-4 overflow-hidden transition-all duration-300 rounded-r-lg shadow-lg"
        >
            <div className="mt-2 space-y-2 ml-7">
                <h2 className="text-lg font-bold">Filter</h2>
                <div>
                    <label className="block mb-1">Followers</label>
                    <input 
                        type="number" 
                        className="bg-gray-800 p-2 rounded-sm outline-none focus:ring-2 focus:ring-green-600 w-full no-arrows"
                    />
                </div>
            </div>
        </aside>
    );
}
