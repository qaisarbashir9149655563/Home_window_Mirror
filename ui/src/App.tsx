import Dashboard from "./pages/dashboard/dashboard";
import { SelectedImageProvider } from "./contextHook/myContext";
const App = () => {
  return (
    <SelectedImageProvider>
      <Dashboard />
    </SelectedImageProvider>
  );
};

export default App;
