import './App.css';
import mainLogo from './logoo.png';
import mainText from './text.png';
import Panel from './Components/Panel';
import Formtwo from './Components/Formtwo';
import { useState } from 'react';
import Outputthree from './Components/Outputthree';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Panelthree from './Components/Panelthree';

function App() {
  const [curr12, setCurr12] = useState(true)

  const renderThing = () => {
    if (finalResult !== finalResult) {
      return (
        <div>

        </div>
      )
    }
    else if (curr1 !== '' && curr2 !== '' && finalResult !== 0) {
      return (
        <Outputthree curr1={curr1} curr2={curr2} finalResult={finalResult} />
      )
    }
    else {
      return (
        <div>

        </div>
      )
    }
  }

  const [curr1, setCurr1] = useState('')
  const [curr2, setCurr2] = useState('')
  const [finalResult, setFinalResult] = useState(0)

  return (
    <div className="App">
      <div>
        <img src={mainLogo} alt='logo' />
        <img src={mainText} alt='logo' style={{ width: "170px", paddingTop: "15px" }} />
      </div>
      <h1 style={{ textAlign: "center", color: "white" }}>Currency Converter</h1>
      <h2 style={{ textAlign: "center", marginTop: "-0.5rem", color: "white" }}>Check live foreign currency exchange rates</h2>
      <h2 style={{ textAlign: "center", marginTop: "-0.5rem", color: "white", marginBottom:"-2rem" }}>Created by Praneet Debnath</h2>
      <Formtwo curr1={curr1} curr2={curr2} setCurr1={setCurr1} setCurr2={setCurr2} finalResult={finalResult} setFinalResult={setFinalResult}/>
      <div style={{ marginTop: "2rem"}}>
        {/* <Panel curr1={curr1} curr2={curr2} setCurr1={setCurr1} setCurr2={setCurr2} finalResult={finalResult} setFinalResult={setFinalResult} curr12={curr12} setCurr12={setCurr12} /> */}
        <Panelthree curr1={curr1} curr2={curr2} setCurr1={setCurr1} setCurr2={setCurr2} finalResult={finalResult} setFinalResult={setFinalResult} curr12={curr12} setCurr12={setCurr12} />
      </div>
      <div style={{ marginLeft: "22rem", marginTop: "1rem" }}>
        {/* {curr12===1 ? <Outputthree curr1={curr1} curr2={curr2} finalResult={finalResult} /> : <h1></h1>} */}
        {renderThing()}
      </div>
    </div>
  );
}

export default App;
