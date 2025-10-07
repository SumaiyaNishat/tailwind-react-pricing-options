import { Suspense } from 'react'

import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/pricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChar'
import axios from 'axios'
import MarkChart from './components/MarkChart/Markchart'


const PricingPromise = fetch('pricingData.json').then(res => res.json());
const markPromise = axios.get('marksData.json')

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>

        {/* data load*/}

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarkChart></MarkChart>
        </Suspense>

        <ResultsChart  markPromise={ markPromise }></ResultsChart>

      </main>

      <footer>

      </footer>
      
    </>
  )
}

export default App
