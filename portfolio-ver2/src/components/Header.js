function Header(){
  return (
    <div className="bg-slate-100 flex flex-row justify-between p-5">
      <div className=" bg-slate-100 font-public font-black text-5xl tracking-normal">
        KORUTO.DEV&lt;&gt;
      </div>
      <div className="flex flex-row font-public text-3xl space-x-16">
        <a href="#about"><button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">ABOUT</button></a>
        <a href="#skills"><button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">SKILLS</button></a>
        <a href="#projects"><button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">PROJECTS</button></a>
        <a href="#contacts"><button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">CONTACTS</button></a>
      </div>
    </div>
  )
}

export default Header;
