import { useState } from "react";
import { exportThemesDrawerId } from "../drawers/utils.js";
import { ExportAsDaisyui } from "./ExportAsDaisyui.js";

interface ExportThemesDrawerProps {
  children: React.ReactNode;
}
const exportTabs = ["all", "daisyui", "shadcn"] as const;
type TExportTab = (typeof exportTabs)[number];
export function ExportThemesDrawer({ children }: ExportThemesDrawerProps) {
  const [tab, setTab] = useState<TExportTab>("all");
  return (
    <div className="drawer drawer-end z-50">
      <input id={exportThemesDrawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content z-20">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor={exportThemesDrawerId}
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-base-200 z-50 text-base-content min-h-full w-[90%] lg:w-[60%] p-4">
          {/* Sidebar content here */}
          <ul className="flex flex-wrap gap-2">
            {exportTabs.map((currTab) => {
              return (
                <li key={currTab}>
                  <button
                    className={`btn btn-sm ${currTab === tab ? "btn-primary" : ""}`}
                    onClick={() => {
                      setTab(currTab);
                    }}>
                    {currTab}
                  </button>
                </li>
              );
            })}
          </ul>
          <li>
            <ExportAsDaisyui />
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
