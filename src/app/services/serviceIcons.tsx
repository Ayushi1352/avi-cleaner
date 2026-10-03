import { Utensils } from "lucide-react";
import { BuildingIcon, HomeIcon } from "@/components/icons";

function WindowIcon({ className = "" }) {
  return (
    <svg className={`animate-icon-pulse-subtle ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3.5" y="3" width="17" height="18" rx="1.5" />
      <path d="M12 3v18M3.5 12h17" />
      <path d="M8 16.5h2" strokeLinecap="round" />
    </svg>
  );
}

function CarpetIcon({ className = "" }) {
  return (
    <svg className={`animate-icon-pulse-subtle ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" />
      <circle cx="9" cy="9" r="2.2" />
      <path d="M13 13.5 20 20.5M17 21h4" />
    </svg>
  );
}

const map = {
  home: HomeIcon,
  office: BuildingIcon,
  building: BuildingIcon,
  kitchen: (props) => <Utensils {...props} className={`animate-icon-pulse-subtle ${props.className || ""}`} strokeWidth={2.2} />,
  window: WindowIcon,
  carpet: CarpetIcon,
};

export default function ServiceIcon({ name, className = "h-6 w-6" }) {
  const Icon = map[name] || HomeIcon;
  return <Icon className={className} />;
}
