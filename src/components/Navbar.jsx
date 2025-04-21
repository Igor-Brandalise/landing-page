function Navbar() {
  return (

    <nav className="bg-gradient-to-r from-[#D53469] via-[#D76E5D] to-[#D9A552]">
      <div className="flex flex-col items-center md:flex-row md:justify-between w-full px-4 py-4">

        {/* Logo */}
        <h1 className="text-[30px] font-extrabold text-white xl:ml-10 mb-5 mr-5 md:mb-0 md:ml-10">
          Landing
        </h1>

        {/* Menu + Botão */}
        <div className="flex gap-5 items-center md:flex-row ">
          <ul className="flex gap-6 text-black font-medium md:flex-row items-center">
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
          </ul>

          <button className="bg-[#F5E8D3] h-[2.5em] w-[6em] rounded-3xl font-bold xl:mr-10">
            Action
          </button>
        </div>
      </div>

      <hr className="h-[2px] w-full bg-[#eb9b99] border-0 rounded-full" />
    </nav>
  );
}

export default Navbar;
