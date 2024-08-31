
import './App.css';
import { appRouter } from './Components/AppLayout';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
