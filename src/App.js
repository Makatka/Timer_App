import Container from "./components/Container/Container.js"
import Timer from "./components/Timer/Timer";
import Controls from "./components/Controls/Controls";
import React, {useEffect, useState} from "react";
import Button from "./components/Button/Button";

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer) {
      setTimer(setInterval(() => setTime((prev) => prev + 10), 10));
    }
  }

  const stop = () => {
    clearInterval(timer);
    setTimer(null)
  }

  const reset = () => {
    setTime(0)
    setTimer(null)
  }

  useEffect(() => {

    return () => clearInterval(timer)
  }, [timer])

  return (
    <Container>
      <Timer time={time}/>
      <Controls>
        {timer === null && time === 0 && (<Button name={"start"} action={start}/>)}
        {time !== 0 && (<Button name={"resume"} action={start}/>)}
        <Button name={"stop"} action={stop}/>
        <Button name={"reset"} action={reset}/>
      </Controls>
    </Container>
  );
}

export default App;
