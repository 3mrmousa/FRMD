import Link from "next/link";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function SystemLinks() {
  return (
    <div className="flex flex-col items-start pl-5">
      <p className="font-bold text-sm text-muted-foreground tracking-wider mb-2">
        System
      </p>
      <ul
        className="flex flex-col items-start gap-2
       text-primary-foreground font-bebas tracking-wider w-full"
      >
        <Link
          href="/admin/settings"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <SettingsOutlinedIcon fontSize="small" />
          Settings
        </Link>
        <Link
          href="/admin/notifications"
          className="flex items-center gap-2 text-lg pl-3 w-full hover:text-primary hover:bg-muted transition-colors duration-300 cursor-pointer"
        >
          <NotificationsOutlinedIcon fontSize="small" />
          Notifications
        </Link>
      </ul>
    </div>
  );
}
