import React, { useCallback, useState } from "react";
import QRGenerator from "./components/QRGenerator";

const App = () => {
  const [text, setText] = useState();
  const [value, setValue] = useState();
  const handleOnChange = useCallback((e) => {
    e.preventDefault();
    setText(e.target.value);
  }, []);
  const handleOnClick = useCallback(() => {
    setValue(text);
  }, [text]);
  return (
    <div>
      <label for="text">Enter the text to be converted into QR code</label>
      <input id="text" onChange={handleOnChange} defaultValue={text} />
      <button onClick={handleOnClick}>Generate</button>
      <QRGenerator text={value} />
    </div>
  );
};

export default App;
