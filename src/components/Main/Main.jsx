

import Header from './Header'
import Content from '../Content/Content';

const Main = (props) =>{

    console.log('main',props)
    return(
        <section className='grow'>
        <Header />
         <Content tasks={props.tasks}/>
      </section>
    )
}

// add button
{/* <div className="bg-white rounded-lg text-xl w-10 h-8 flex justify-center items-center shadow-md absolute">
<button>
<PlusCircleIcon className="h-8 w-8 text-[#6036A4] rounded-full"/>
</button>
</div> */}

export default Main;