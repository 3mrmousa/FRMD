import Sidebar from "@/app/components/admin_components/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row ">
      <div className="self-end">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col py-3 px-5">{children}</main>
    </div>
  );
}
