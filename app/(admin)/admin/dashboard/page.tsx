import Button from "@/app/components/admin_components/Button";
import Header from "@/app/components/admin_components/Header";
import { faCloudArrowDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardPage() {
  return (
    <div className="w-full">
      <Header title="Dashboard" subtitle="Thursday, 28 May 2026">
        <div className="flex items-center gap-2 shrink-0">
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button size="md">
              <FontAwesomeIcon icon={faCloudArrowDown} className="mr-1.5" />
              EXPORT
            </Button>
            <Button size="md">
              <FontAwesomeIcon icon={faPlus} className="mr-1.5" />
              ADD PRODUCT
            </Button>
          </div>
          {/* Mobile */}
          <div className="flex md:hidden items-center gap-1.5">
            <Button size="sm" variant="secondary">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </Button>
            <Button size="sm" variant="secondary">
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>
      </Header>
    </div>
  );
}
