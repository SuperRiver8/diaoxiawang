import { Navigate, Route, Routes } from "react-router-dom";
import CampaignsPage from "@/pages/campaigns";
import CouponsPage from "@/pages/coupons";
import DashboardPage from "@/pages/dashboard";
import LoginPage from "@/pages/login";
import MembersPage from "@/pages/members";
import PointsPage from "@/pages/points";
import PromotionsPage from "@/pages/promotions";
import VideosPage from "@/pages/videos";

export default function App() {
  return <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/members" element={<MembersPage />} />
    <Route path="/points" element={<PointsPage />} />
    <Route path="/coupons" element={<CouponsPage />} />
    <Route path="/promotions" element={<PromotionsPage />} />
    <Route path="/videos" element={<VideosPage />} />
    <Route path="/campaigns" element={<CampaignsPage />} />
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>;
}
