import Tasks from '../Tasks/Tasks'

const Content =(props)=>{
    console.log("contents", props)
    return(
        // Main
        <main className='bg-white card-white relative'>
            <Tasks tasks={props.tasks}/>
      
        </main>
    )
}

export default Content;