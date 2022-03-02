import Task from "./Task";
const Tasks=(props)=>{
    return(
        <div id='tasks' className='flex flex-wrap flex-col-2 items-center justify-center px-2 pt-10 bg-[#CDC9FE] rounded-md'>
        <h1 className='text-left font-bold text-xl border-b pb-2 mb-3 w-full max-w-xl'>Lists</h1>
            <div id="list" className="w-full flex flex-col justify-center items-center ">

             <Task 
             title={props.tasks[0].title}  
             date={props.tasks[0].date} 
             category={props.tasks[0].category}
             status={props.tasks[0].status}
             />

            </div>     
     

                
        </div>
    )
}

export default Tasks;