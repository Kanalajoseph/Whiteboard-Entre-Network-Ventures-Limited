import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./routes";
import { AdminAuthProvider } from "../contexts/AdminAuthContext";

export default function App() {
  return (
    <AdminAuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#fb923c',
              secondary: '#fff',
            },
          },
        }}
      />
    </AdminAuthProvider>
  );
}
