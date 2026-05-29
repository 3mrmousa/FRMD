import Link from "next/link";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

export default function OverviewLinks() {
  return (
    <div className="flex flex-col items-start pl-5">
      <p className="font-bold text-sm text-muted-foreground tracking-wider mb-2">
        Overview
      </p>
      <ul
        className="flex flex-col items-start gap-2
       text-primary-foreground font-bebas tracking-wider w-full"
      >
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <DashboardOutlinedIcon fontSize="small" />
          Dashboard
        </Link>
        <Link
          href="/admin/analytics"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <BarChartOutlinedIcon fontSize="small" />
          Analytics
        </Link>
      </ul>
    </div>
  );
}
