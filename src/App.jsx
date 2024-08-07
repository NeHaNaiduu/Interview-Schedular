import './App.css'
import Contentbox from './components/Contentbox'
import Details from './components/Details'
import Progress from './components/Progress'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Progress/>
      <div className='wrapper'>
        <Sidebar/>
        <Contentbox/>
      </div>
    </>
  )
}

export default App
