import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useLocation } from "react-router";
import { ModeToggle } from "./ModeToggle";

// Navigation links array
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header>
      {/* Glassmorphism background */}
      <div className="mx-4 mt-4">
        <div>
          {/* Purple neon glow at top */}
          <div className="absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          <div className="flex h-16 items-center justify-between gap-4 px-4 container mx-auto">
            {/* Left side - Logo & Mobile menu */}
            <div className="flex items-center gap-4">
              {/* Mobile menu trigger */}
              <div className="flex items-center md:hidden">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="group size-8 bg-white/5 border border-white/10 hover:bg-white/10"
                      size="icon"
                      variant="ghost"
                    >
                      <svg
                        className="pointer-events-none"
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                          d="M4 12L20 12"
                        />
                        <path
                          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                          d="M4 12H20"
                        />
                        <path
                          className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                          d="M4 12H20"
                        />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-52 rounded-xl border border-white/10 bg-[#0a0f1e]/90 backdrop-blur-xl p-2 md:hidden"
                  >
                    <NavigationMenu className="max-w-none *:w-full">
                      <NavigationMenuList className="flex-col items-start gap-1">
                        {navigationLinks.map((link) => (
                          <NavigationMenuItem
                            className="w-full"
                            key={link.href}
                          >
                            <NavigationMenuLink
                              className={`
                                w-full rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200
                                ${
                                  isActive(link.href)
                                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                                }
                              `}
                              href={link.href}
                            >
                              {link.label}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Logo */}
              <a className="flex items-center" href="/">
                <Logo />
              </a>
            </div>

            {/* Center - Desktop Navigation - Centered Pill */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="relative rounded-full border dark:border-white/10 dark:bg-white/5 px-1 py-1">
                <NavigationMenu className="h-full *:h-full">
                  <NavigationMenuList className="h-full gap-1">
                    {navigationLinks.map((link) => (
                      <NavigationMenuItem className="h-full" key={link.href}>
                        <NavigationMenuLink
                          className={`
                            relative h-full rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300
                            ${
                              isActive(link.href)
                                ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                                : "text-muted-foreground hover:text-white hover:bg-white/5"
                            }
                          `}
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Right side - Sign In/Up Buttons */}
            <div className="flex items-center gap-3">
              <ModeToggle />
              <Button
                asChild
                className=" py-5 border border-purple-500/50  dark:text-white hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                size="sm"
                variant="ghost"
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className=" py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-500 hover:to-purple-400 shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(124,58,237,0.7)] transition-all duration-300"
                size="sm"
              >
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
