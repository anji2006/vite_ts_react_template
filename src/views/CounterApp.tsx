import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, randomIncrement } from "../redux/counterSlice";

interface CounterProps {
  defaultCount: number;
}

interface ConterStore {
  counter: number;
}

const Counter: React.FC<CounterProps> = () => {
  const count = useSelector((store: ConterStore) => store.counter);

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}> + Count {count}</button>

      <button onClick={() => dispatch(decrement())}> - Count {count}</button>
      <button onClick={() => dispatch(randomIncrement())}>
        Randomly Increment
      </button>
    </div>
  );
};

export default Counter;
