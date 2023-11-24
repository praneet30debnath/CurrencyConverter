import './App.css';
import * as React from 'react';
import mainLogo from './logoo.png';
import mainText from './text.png';
import Form from './Components/Form';
import { useState } from 'react';
import Output from './Components/Output';
import Panel from './Components/Panel';

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
        <div style={{ paddingTop: '2.2rem' }}> {/* Adding top padding */}
          <Output curr1={curr1} curr2={curr2} finalResult={finalResult} />
        </div>
      )
    }
    else {
      return (
        <div>

        </div>
      )
    }
  }

  function capitalizeEveryWord(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  const [ratesFinal, setRatesFinal] = React.useState({})

  React.useEffect(() => {
    async function fetchCurrencyRates() {
      const response = await fetch('https://api.getgeoapi.com/v2/currency/convert?api_key=c4e54d39de126ff57f2a46d0ef3a78739fee0a61');
      const currency = await response.json();
      const rates = currency.rates;
      const data = rates
      const a = []
      const b = []
      for (const [key, value] of Object.entries(data)) {
        a.push(capitalizeEveryWord(value.currency_name) + " (" + key + ")")
        b.push(parseFloat(value.rate))
      }
      let abc = {}
      a.forEach((k, i) => { abc[k] = b[i] })
      setRatesFinal(abc);
    }
    fetchCurrencyRates();
  }, []);

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
      <h2 style={{ textAlign: "center", marginTop: "-0.5rem", color: "white", marginBottom: "-2rem" }}>Created by Praneet Debnath</h2>
      <Form curr1={curr1} curr2={curr2} setCurr1={setCurr1} setCurr2={setCurr2} finalResult={finalResult} setFinalResult={setFinalResult} ratesFinal={ratesFinal} />
      <div style={{ marginTop: "2rem" }}>
        <Panel curr1={curr1} curr2={curr2} setCurr1={setCurr1} setCurr2={setCurr2} finalResult={finalResult} setFinalResult={setFinalResult} curr12={curr12} setCurr12={setCurr12} ratesFinal={ratesFinal} />
      </div>
      <div>
        {renderThing()}
      </div>
    </div>
  );
}

export default App;
