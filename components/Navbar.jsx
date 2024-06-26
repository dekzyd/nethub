const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full h-20 flex justify-center">
        <div className="container bg-slate-100 p-3 flex items-center gap-x-3">
          <div id="logo" className=" basis-1/4 text-3xl">
            Nethub
          </div>
          <ul className="flex basis-3/4 justify-end">
            <li className="px-4 py-2">About</li>
            <li className="px-4 py-2">Solutions</li>
            <li className="px-4 py-2">Resources</li>
            <li className="px-4 py-2">Contact Us</li>
            <li className="px-4 py-2">Search</li>
          </ul>
        </div>
      </div>
      <div>
        <svg
          className="w-full h-4 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path fill="#EE4E4E" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
