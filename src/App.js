import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from './AppLayout/snackbar/snackbar';
import { AuthProvider } from './firebase/auth';
import { NavigationProvider } from './navigation/navigation';
import { router } from './router/router';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <AuthProvider>
          <NavigationProvider>
            <RouterProvider router={router} />
          </NavigationProvider>
        </AuthProvider>
      </SnackbarProvider>
    </div>
  );
}
