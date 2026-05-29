import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <div
        className="fixed inset-0 bg-[#e9e9e9] dark:bg-[#0d0e13] h-full w-full -z-10"
      />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
