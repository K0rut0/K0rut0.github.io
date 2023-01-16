import Github from '../assets/github.png'

function Projects(){
    return(
        <div className="flex justify-center bg-slate-300">
            <div className="flex flex-col bg-matteBlack rounded-t-3xl h-fit w-full justify-center items-center gap-y-10 pb-16">
                <div className="flex justify-center p-5 font-public font-extrabold text-white text-3xl">
                    RECENT PROJECTS
                </div>
                <div className="flex bg-white rounded-pill w-[1100px] h-96 justify-center items-center gap-x-14">
                    <div className="flex flex-col justify-center items-center w-[400px] gap-y-5">
                        <div className="font-public flex justify-center font-extrabold text-2xl">
                            Project 1
                        </div>
                        <div className="font-public break-words text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius, metus ut scelerisque iaculis, sapien erat pulvinar nunc, sed ornare leo nisl in mauris.
                        </div>
                        <a href="#">
                            <img src={Github} alt='github logo' className='w-[50px]'></img>
                        </a>
                    </div>
                    <div className='flex border-solid border-gray-400 border h-[240px]'></div>
                    <div className="flex flex-col justify-center items-center w-[400px] gap-y-5">
                        <div className="font-public flex justify-center font-extrabold text-2xl">
                            Project 2
                        </div>
                        <div className="font-public break-words text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius, metus ut scelerisque iaculis, sapien erat pulvinar nunc, sed ornare leo nisl in mauris.
                        </div>
                        <a href="#">
                            <img src={Github} alt='github logo' className='w-[50px]'></img>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center font-public text-white text-3xl font-extrabold'>
                    CONTACTS
                </div>
                <div className="flex flex-col bg-white rounded-3xl w-[800px] h-96 justify-center items-center gap-y-10">
                    <div className='font-public font-bold text-xl flex gap-x-3'>
                        Email: <p className='font-public font-normal'> someemail@domain.com</p>
                    </div>
                    <div className='font-public font-bold text-xl flex gap-x-3'>
                        Linkedin <p className='font-public font-normal'> linkedin.com/user</p>
                    </div>
                    <div className='font-public font-bold text-xl flex gap-x-3'>
                        Github: <p className='font-public font-normal'> insert github link here</p>
                    </div>
                    <div className='font-public font-bold text-xl flex gap-x-3'>
                        Discord: <p className='font-public font-normal'> Koruto#1276 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects