import React from "react";
import Counter from "./views/CounterApp";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <p>Hii Anjiii</p>
        <Counter defaultCount={8} />
        <Counter defaultCount={88} />
        <Counter defaultCount={18} />
      </div>
    </Provider>
  );
};

export default App;
