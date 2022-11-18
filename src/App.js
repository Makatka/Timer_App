import Container from "./components/Container/Container.js"
import Timer from "./components/Timer/Timer";
import Controls from "./components/Controls/Controls";
import React, {useEffect, useState} from "react";
import Button from "./components/Button/Button";

const App = () => {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <Container>
      <Timer time={time}/>
      <Controls>
        {!timerOn && (time == 0) && (
          <Button name={"start"} action={() => setTimerOn(true)} />
        )}
        {time !== 0 && (
          <Button name={"resume"} action={() => setTimerOn(true)} />
        )}
        <Button name={"stop"}  action={() => setTimerOn(false)} />
        <Button name={"reset"} action={() => setTime(0)} />
      </Controls>
      </Container>
  );
}

export default App;
