import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import CompletedProjects from "../pages/CompletedProjects";
import ProjectsForSale from "../pages/ProjectsForSale";
import TrackProject from "../pages/TrackProject";
import Contact from "../pages/Contact";
import Payments from "../pages/Payments";
import Terms from "../pages/Terms";

import AdminLogin from "../pages/admin/AdminLogin";
import SuperAdminDashboard from "../pages/admin/SuperAdminDashboard";
import TeamAdminDashboard from "../pages/admin/TeamAdminDashboard";
import AdminOrders from "../pages/admin/AdminOrders";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC PAGES ================= */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/projects/completed"
        element={
          <MainLayout>
            <CompletedProjects />
          </MainLayout>
        }
      />
      <Route
        path="/projects/for-sale"
        element={
          <MainLayout>
            <ProjectsForSale />
          </MainLayout>
        }
      />
      <Route
        path="/track-project"
        element={
          <MainLayout>
            <TrackProject />
          </MainLayout>
        }
      />
      <Route
        path="/payments"
        element={
          <MainLayout>
            <Payments />
          </MainLayout>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <MainLayout>
            <Terms />
          </MainLayout>
        }
      />
      {/* ================= ADMIN PAGES ================= */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/super"
        element={
          <ProtectedRoute>
            <SuperAdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/team"
        element={
          <ProtectedRoute>
            <TeamAdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute>
            <AdminOrders />
          </ProtectedRoute>
        }
      />
      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <MainLayout>
            <div className="flex flex-col items-center justify-center py-24 space-y-4 text-center">
              <h1 className="text-6xl font-bold text-primary-500">404</h1>
              <p className="text-xl text-gray-600">Page not found</p>
              <a href="/" className="text-primary-500 hover:underline font-medium">
                Go back home
              </a>
            </div>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
