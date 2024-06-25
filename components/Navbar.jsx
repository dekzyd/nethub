const Navbar = () => {
  return (
    <nav className="w-full bg-red-200 h-24 flex justify-center">
      <div className="container bg-slate-100 p-3 flex items-center gap-x-3">
        <div id="logo" className="bg-slate-500 basis-1/4 text-3xl">
          Nethub
        </div>
        <ul className="flex bg-slate-500 basis-3/4 justify-end">
          <li className="px-4 py-2">About</li>
          <li className="px-4 py-2">Solutions</li>
          <li className="px-4 py-2">Resources</li>
          <li className="px-4 py-2">Contact Us</li>
          <li className="px-4 py-2">Search</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
