import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { Auth } from "./components/Auth";
import { Academy } from "./components/Academy";
import { Marketplace } from "./components/Marketplace";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <main>
                      <LandingPage />
                    </main>
                  </>
                }
              />
              <Route
                path="/preview_page.html"
                element={
                  <>
                    <Header />
                    <main>
                      <LandingPage />
                    </main>
                  </>
                }
              />
              <Route path="/auth" element={<Auth />} />
              <Route
                path="/academy"
                element={
                  <>
                    <Header />
                    <main>
                      <Academy />
                    </main>
                  </>
                }
              />
              <Route
                path="/marketplace"
                element={
                  <>
                    <Header />
                    <main>
                      <Marketplace />
                    </main>
                  </>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
            <Toaster />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}