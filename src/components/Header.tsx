import { House, FolderKanban, Mail } from "lucide-react";
export function Header() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: FolderKanban, label: "Projects" },
    { icon: Mail, label: "Contact" },
  ];
  type NavItemProps = {
    icon: React.ComponentType;
    label: string;
  };
  function NavItem({ icon, label }: NavItemProps) {
    const Icon = icon;
    return (
      <li className="flex items-center gap-2">
        <Icon />
        <span>{label}</span>
      </li>
    );
  }
  return (
    <header className="flex justify-center items-center p-7 bg-gray-800 text-white">
      <nav>
        <ul className="flex cursor-pointer gap-10 hover-">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} label={item.label} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
