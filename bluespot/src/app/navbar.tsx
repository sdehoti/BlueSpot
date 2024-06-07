export function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyLogo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#categories" className="text-white hover:text-gray-300">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
