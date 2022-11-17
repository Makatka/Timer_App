import Container from "./components/Container/Container.js"
import Timer from "./components/Timer/Timer";
import Controls from "./components/Controls/Controls";
import Button from "./components/Button/Button";
import React, {useState} from "react";

const App = () => {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState('');

  let updatedH = time.h;
  let updatedM = time.m;
  let updatedS = time.s;
  let updatedMs = time.ms;

  const start = () => {
    run();
    setInterv( setInterval(run, 10));
  }
  const stop = () => {
    clearInterval(interv);
  }
  const reset = () => {
    setTime({ms:0, s:0, m:0, h:0});
  }

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  return (
    <Container>
      <Timer time={time}/>
      <Controls>
        <Button action={start}>Start</Button>
        <Button action={stop}>Stop</Button>
        <Button action={reset}>Reset</Button>
      </Controls>
    </Container>
  );
}

export default App;
