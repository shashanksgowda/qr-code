import * as React from 'react';
import './App.css';
import QRGenerator from './components/QRGenerator';

function App() {
  const [input, setInput] = React.useState('');
  const [text, setText] = React.useState('');
  return (
    <div className="App">
      <label htmlFor="input">QR Generator</label>
      <input id="input" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <br />
      <button onClick={() => setText(input)}>Generate</button>
      <QRGenerator text={text} />
    </div>
  );
}

export default App;
