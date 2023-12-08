import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './firebase/auth';
import { router } from './router/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
