import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home.jsx';
import AddCompetition from './AddCompetition.jsx';
import Competition from './Competitions.jsx';
import NotFound from './NotFound.jsx';
import CompetitionDetails from './CompetitionDetails.jsx';
import NavigationBar from './NavigationBar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavigationBar/>
        </div>
        <section>
        <div>
        <Home/>
        <AddCompetition/>
        <Competition/>
        <NotFound/>
        <CompetitionDetails/>
</div>
</section>
    </>

  )
}

export default App
