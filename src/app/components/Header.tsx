import Logo from './Logo';
import { LargaNowButton } from "./ui/LargaNowButton";
import { NavLink } from "./ui/NavLink";

// Navigation data - centralized management
const navigationItems = [
  { href: "#", label: "PROMOTIONS" },
  { href: "#", label: "BE OUR PARTNER" },
  { href: "#", label: "LOGIN" },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          <div className="flex items-center space-x-8">
          {/* Navigation Links - Centered */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <NavLink key={index} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button - Using LargaNowButton (defaults to Almarai) */}
          <LargaNowButton 
            variant="primary"
            size="lg" 
            className="rounded-[50px]"
          >
            GET OUR APP NOW!
          </LargaNowButton>
          </div>
        </div>
      </div>
    </header>
  );
} 