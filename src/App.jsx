import './App.css'
import {NavigationBar,Footer,Services,Welcome,Transactions,} from './components'
const App = () =>{

  return (
   <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
    <NavigationBar/>
    <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
    </div>
  )
}

export default App
