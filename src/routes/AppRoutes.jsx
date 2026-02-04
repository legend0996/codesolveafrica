import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
      <Route path="/admin/super" element={<SuperAdminDashboard />} />
      <Route path="/admin/team" element={<TeamAdminDashboard />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
    </Routes>
  );
};

export default AppRoutes;
