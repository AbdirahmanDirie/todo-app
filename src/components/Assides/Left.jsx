const Left =()=>{
    return(

        // Left
        <aside id='leftt' className='w-20 flex-none lg:w-28 shadow-lg shadow-gray-200 rounded-tr-lg bg-white xl:w-60'>

            <div id="logo" className="flex items-center justify-center">

            <div id="logoImage" className="my-5 mx-3  flex justify-center items-center">

            <img src="./images/logo.png" alt="logo" className="lg:w-14 lg:h-auto m-0 p-0 shadow-xl shadow-gray-200 rounded-full"/> 

            </div>



            <div id="logoText" className="hidden xl:block">
            <h1 className="text-2xl font-bold font-sans">
                <span className="text-2xl font-bold text-[#6036A4] font-sans uppercase">Right</span> APP
                </h1>

            <p className="text-sm font-thin text-gray-500 tracking-wide">Save your tasks</p>
            </div>
            </div>

        
        </aside>
        
    )
}

export default Left;