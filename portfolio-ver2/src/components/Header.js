function Header(){
  return (
    <div className="bg-slate-100 flex flex-row justify-between p-5">
      <div className=" bg-slate-100 font-public font-black text-5xl tracking-normal">
        KORUTO.DEV&lt;&gt;
      </div>
      <div className="flex flex-row font-public text-3xl space-x-16">
        <button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">ABOUT</button>
        <button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">SKILLS</button>
        <button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">PROJECTS</button>
        <button className="no-underline hover:underline hover:font-bold decoration-8 decoration-indigo-500">CONTACTS</button>
      </div>
    </div>
  )
}

export default Header;
