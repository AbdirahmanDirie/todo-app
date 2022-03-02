import {CheckIcon } from '@heroicons/react/solid'
import {CalendarIcon,TrashIcon } from '@heroicons/react/outline'
const Task =(props)=>{
    console.log("tasks",props)
    return(
        <div id='task' className='card-white border-l-4 border-[#6036a4] flex justify-between items-center max-w-xl w-full rounded-md bg-white relative'>

                    <div id='letf-side'>
                        
                    <div id="category">
                        <h5 className='font-semibold text-[#6036a6] inline-block border border-[#6036a4] rounded-full px-4'>{props.category}</h5>
                    </div>

                    <div className='mt-1' id='content'>
                        <h1 className='text-xl tracking-wide font-bold '>{props.title}</h1>
                        <div className='flex mt-1 gab-x-2 mb-8'>
                        <CalendarIcon className='text-gray-600 w-5 h-5'/>
                        
                        <span className='text-sm text-gray-600 ml-1'>{props.date}</span>
                        </div>
                        <div className='absolute bottom-2'>
                            <span className='capitalize font-bold tracking-wide text-[#6036a4]'>
                                {props.status}
                            </span>
                            
                        </div>
                    </div>

                    </div>

                    <div id='rigth-side' className='flex flex-col gab-5'>
                    <CheckIcon className='w-7 h-7 cursor-pointer text-green-500'/>
                    <TrashIcon className='w-7 h-7 cursor-pointer text-red-500 mt-2'/>
                    </div>
                    </div>
    )
}

export default Task;