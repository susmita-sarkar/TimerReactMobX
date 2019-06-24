import React, {Component} from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

class Timer extends Component {
  @observable timer = 0;


  // constructor() {
    // setInterval(() => {
    //   this.timer += 1;
    // }, 1000);
  // }

  // @action.bound
  // reset() {
  //   this.timer = 0;
  // }
}

const TimerView = observer(({ Timer }) => (
  // <button onClick={appState.reset}>
  <button>Seconds passed: {Timer.timer}</button>
));
 componentDidMount(){
  setInterval(() => {
    this.timer += 1;
  }, 1000);
    }

render(
  <div>
    <TimerView Timer={new TimerState()} />
    <DevTools />
  </div>,
);
export default Timer;