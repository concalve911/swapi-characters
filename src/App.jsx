import React, { useState } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";

const store = configureStore();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <Provider store={store}>
      <div>
        <h1>SWAPI Characters App</h1>
        <CharacterList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Footer clearSearchTerm={clearSearchTerm} />
      </div>
    </Provider>
  );
};

export default App;
