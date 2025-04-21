function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-[#D53469] via-[#D76E5D] to-[#D9A552]">


<div className="flex justify-between items-center w-full px-4 py-4">

  
  <h1 className="text-2xl font-extrabold text-white ml-10 ">Landing</h1>


  <div className="flex items-center gap-6">
    <ul className="flex gap-6 text-black font-medium">
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
    </ul>

    <button className="bg-[#F5E8D3] h-[2.5em] w-[6em] rounded-3xl mr-10 font-bold">Action</button>
  </div>
</div>

      <hr className="h-[2px] w-full bg-[#eb9b99] border-0 rounded-full"/> 
      
      </nav>
      
    );
  }
  
  export default Navbar;