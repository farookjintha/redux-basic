
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from './store/actions/counter.action';
import { logIn, logOut } from './store/actions/auth.action';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const auth = useSelector(state => state.auth);
  // const [counter, setCounter] = useState(0);
  // const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
