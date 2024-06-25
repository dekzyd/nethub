const Navbar = () => {
  return (
    <nav className="w-full bg-red-200 h-24 flex justify-center">
      <div className="container bg-slate-100 p-3 flex items-center gap-x-3">
        <div id="logo" className="bg-slate-500 basis-1/3">
          logo
        </div>
        <ul className="flex bg-slate-500 basis-2/3">
          <li className="px-4 py-2">list</li>
          <li className="px-4 py-2">list</li>
          <li className="px-4 py-2">list</li>
          <li className="px-4 py-2">list</li>
          <li className="px-4 py-2">list</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
