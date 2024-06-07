export function TopBar() {
    return(
        <div className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
            <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <div>
            <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md text-gray-800"
            />
        </div>
        </div>
    );
}