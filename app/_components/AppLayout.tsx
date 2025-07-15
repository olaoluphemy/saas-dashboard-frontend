import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid grid-cols-[25%_auto] 2xl:grid-cols-[19%_auto]">
      <SideBar />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
