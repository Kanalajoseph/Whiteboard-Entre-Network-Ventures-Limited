import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import WENTutor from "../components/academy/WENTutor";

export default function SiteLayout() {
  const location = useLocation();
  const isAcademyRoute = location.pathname.startsWith('/academy');

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4.05rem_4.05rem]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-accent-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Blue "Sync" Blobs */}
      <div className="fixed top-[-20%] left-[-20%] w-[60rem] h-[60rem] bg-primary-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-20%] w-[60rem] h-[60rem] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      {isAcademyRoute && <WENTutor />}
    </div>
  );
}

