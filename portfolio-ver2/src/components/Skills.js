import Clang from '../assets/Clang.png'
import ReactLogo from '../assets/React.png'
import JsLogo from '../assets/JS.png'
function Skills(){
    return(
        <div className="bg-slate-100 h-auto p-0 m-0" id='skills'>
            <div className=" flex rounded-t-3xl bg-gray-300 h-40 p-10 font-public text-4xl font-extrabold justify-center">
                SKILLS
            </div>
            <div className='flex bg-gray-300 w-full justify-center gap-20 pb-20'>
                <div className='bg-gray-300'>
                    <div className="flex flex-col max-w-sm gap-5 items-center justify-center">
                        <div className='max-w-[250px]'>
                            <img src={Clang} alt='C Language Logo'></img>
                        </div>
                        <div className='flex justify-center font-public text-3xl font-bold'>
                            C
                        </div>
                        <div className='break-words font-public font-normal text-xl text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non urna eleifend lectus vulputate cursus non et ligula.
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300'>
                    <div className="flex flex-col max-w-sm gap-5 justify-center items-center">
                        <div className='max-w-[250px]'>
                            <img src={ReactLogo} alt='React Logo'></img>
                        </div>
                        <div className='flex justify-center font-public text-3xl font-bold'>
                            React
                        </div>
                        <div className='break-words font-public font-normal text-xl text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non urna eleifend lectus vulputate cursus non et ligula.
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300'>
                    <div className="flex flex-col max-w-sm gap-5 justify-center items-center">
                        <div className='max-w-[250px]'>
                            <img src={JsLogo} alt='Javascript Logo'></img>
                        </div>
                        <div className='flex justify-center font-public text-3xl font-bold'>
                            Javascript
                        </div>
                        <div className='break-words font-public font-normal text-xl text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non urna eleifend lectus vulputate cursus non et ligula.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;