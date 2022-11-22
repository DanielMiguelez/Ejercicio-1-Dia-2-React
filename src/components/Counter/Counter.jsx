import { useState } from "react";


const Counter = (props) => {
    const [count, setCount] = useState(props.value);

    const increment = () => {
      setCount(count + 2);
    };

    const decrement = () => {
        setCount(count - 2);
    }
    return (
      <div>
        Counter:{count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );

}

  
  export default Counter;