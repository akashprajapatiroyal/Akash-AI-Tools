import logo from './logo.svg';
import './App.css';
import { Configuration, OpenAIApi} from 'openai'
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './AIOptions';
import Translation from './components/Translation';
import { useState } from 'react';

function App() {
  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const selectOption = (option) => {
    setOption(option);
  };

  const dostuff = async () => {
    let object = { ...option, prompt: input };
    // console.log(object);

    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
    // setOption({ ...option, prompt: input });
  };
  // console.log(option);
  
  // Object.values(option).length
  return ( 
    <div className='App'>
      
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ) : (
      <Translation dostuff={dostuff} setInput={setInput} result={result}/>
      )}
    </div>
  );
}

export default App;
