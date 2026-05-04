import bg from "../../public/bg-Photoroom.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="fixed inset-0 h-full w-full -z-10"
      />
      {children}
    </div>
  );
}
