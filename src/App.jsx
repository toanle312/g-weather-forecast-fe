import MainLayout from './layouts/MainLayout';
import AppProvier from './context/AppContext';

function App() {
  return (
    <AppProvier>
      <MainLayout />
    </AppProvier>
  );
}

export default App;
