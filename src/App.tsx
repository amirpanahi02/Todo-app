import React from "react";
import CardsContainer from "./app/components/cardsContainer/CardsContainer";
import store from "./app/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <CardsContainer />
    </Provider>
  );
};

export default App;
