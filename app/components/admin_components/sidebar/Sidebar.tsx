"use client";
import Logo from "../../shared/Logo";
import AdminProfileLink from "./AdminProfileLink";
import OverviewLinks from "./OverviewLinks";
import StoreLinks from "./StoreLinks";
import SystemLinks from "./SystemLinks";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div>
      <button className="block md:hidden px-5 py-2" onClick={handleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        className={`hidden md:flex h-screen w-50 border-r border-border-subtle sticky top-0
       pt-2 bg-foreground flex-col justify-between`}
      >
        <div>
          <div className="flex flex-col items-start mb-4 pl-5">
            <Logo textSize="text-3xl" textColor="text-primary-foreground" />
            <p className="font-bold text-sm text-muted-foreground">
              Admin Panel
            </p>
          </div>

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />

          <OverviewLinks />

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />

          <StoreLinks />

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />

          <SystemLinks />

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />
        </div>

        <div className="mb-4">
          <hr className="border opacity-50 border-muted-foreground w-full mb-2 bg-primary-foreground" />
          <AdminProfileLink />
        </div>
      </div>

      <div
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden fixed top-0 left-0 h-screen w-full border-r border-border-subtle
       pt-2 bg-foreground flex flex-col justify-between z-50 backdrop-blur-md duration-500`}
      >
        <div>
          <div className="flex flex-row  justify-between mb-4 px-5">
            <div className="flex flex-col items-start">
              <Logo textSize="text-3xl" textColor="text-primary-foreground" />
              <p className="font-bold text-sm text-muted-foreground">
                Admin Panel
              </p>
            </div>
            <div className="md:hidden">
              <button className="block md:hidden " onClick={handleSidebar}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-white dark:text-black"
                />
              </button>
            </div>
          </div>

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />

          <OverviewLinks />

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />

          <StoreLinks />

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />

          <SystemLinks />

          <hr className="border opacity-50 border-muted-foreground w-full my-4 bg-primary-foreground" />
        </div>

        <div className="mb-4">
          <hr className="border opacity-50 border-muted-foreground w-full mb-2 bg-primary-foreground" />
          <AdminProfileLink />
        </div>
      </div>
    </div>
  );
}
