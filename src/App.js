import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './firebase/auth';
import { SnackbarProvider } from './AppLayout/snackbar/snackbar';
import { router } from './router/router';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </AuthProvider>
    </div>
  );
}
