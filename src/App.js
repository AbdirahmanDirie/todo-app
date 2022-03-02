import './App.css';
import Left from './components/Assides/Left';
import Right from './components/Assides/Right';
import Main from './components/Main/Main';

const App =()=>{

  const tasks =[
    {
      title: "Going Work",
      date: '2022-01-01',
      category: "Work",
      status: "in Progress",
    },
    {
      title: "Learning Bottcamp",
      date: '2022-02-01',
      category: "Learning",
      status: "Complete",
    }
  ]


  
   return (
    <div className='flex min-h-screen w-screen bg-gray-100'>

     <Left/>
     <Main tasks={tasks}/>
     <Right/>
    
     
    </div>
  );

}

export default App;
