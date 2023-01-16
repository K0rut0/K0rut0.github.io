import Kanna from '../assets/Kannasip.gif' 


function Main(){
    return(
        <div className='flex  bg-slate-100 justify-center py-60'>
            <div className='flex flex-row space-x-5 max-w-4xl content-center align-middle'>
                <img className='rounded-2xl' src={Kanna} alt='kanna sipping'/>
                <div className='flex flex-col content-center space-y-5'>
                    <div className='font-public text-4xl font-extrabold'>
                        HELLO! I AM KORUTO
                    </div>
                    <div className='break-words font-public text-3xl font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non urna eleifend lectus vulputate cursus non et ligula.
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Main;