import { Navigate, Route, Routes } from "react-router-dom";
import CouponsPage from "@/pages/member-coupons";
import MemberPage from "@/pages/member";
import PointsPage from "@/pages/member-points";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import PromotionsPage from "@/pages/promotions";
import RegisterPage from "@/pages/register";
import VenuesPage from "@/pages/venues";
import VideosPage from "@/pages/videos";

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/venues" element={<VenuesPage />} />
    <Route path="/promotions" element={<PromotionsPage />} />
    <Route path="/videos" element={<VideosPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/member" element={<MemberPage />} />
    <Route path="/member/points" element={<PointsPage />} />
    <Route path="/member/coupons" element={<CouponsPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
