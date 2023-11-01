import React from "react";
import CustomRoutes from "./router/custom-routes";
import { Provider as StoreProvider } from "react-redux";
import store from "./store"

const App = () => {
  return (
    <>
      <StoreProvider store={store}>
        <CustomRoutes />
      </StoreProvider>
    </>
  );
};

export default App;
