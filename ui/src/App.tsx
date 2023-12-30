import Dashboard from "./pages/dashboard/dashboard";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./utils/reducers";

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
