import { Book, Menu, Activity, GraduationCap, Users, ShoppingBag, CalendarDays, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import * as React from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "https://mysportsinjury.co.uk/wp-content/uploads/2024/06/65f8e0fe405ebd03bea9b940_MSI__1_-removebg-preview-p-500-1.png",
    alt: "MY Sports Injury",
    title: "",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/#services",
      items: [
        {
          title: "Sports Physiotherapy",
          description: "Expert assessment and treatment",
          icon: <Activity className="size-5 shrink-0 text-[#C8F04B]" />,
          url: "/#services",
        },
        {
          title: "Sports Massage",
          description: "Deep tissue recovery and care",
          icon: <Activity className="size-5 shrink-0 text-[#C8F04B]" />,
          url: "/#services",
        },
        {
          title: "Acupuncture",
          description: "Pain relief and muscle relaxation",
          icon: <Activity className="size-5 shrink-0 text-[#C8F04B]" />,
          url: "/#services",
        },
        {
          title: "Injury Rehab",
          description: "Comprehensive recovery plans",
          icon: <Activity className="size-5 shrink-0 text-[#C8F04B]" />,
          url: "/#services",
        },
      ],
    },
    {
      title: "CPD Courses",
      url: "/cpd-courses",
    },
    {
      title: "Membership",
      url: "/membership",
    },
    {
      title: "Shop",
      url: "/shop",
    },
  ],
  mobileExtraLinks = [
    { name: "Run MCR", url: "/run-mcr" },
    { name: "0161 524 4339", url: "tel:01615244339" },
  ],
  auth = {
    login: { text: "Call Us", url: "tel:01615244339" },
    signup: { text: "Book Now", url: "/book" },
  },
}: Navbar1Props) => {
  return (
    <section className="fixed top-10 left-0 right-0 z-40 py-2 w-full transition-all duration-400 ease-in-out backdrop-blur-2xl bg-[#0a0a0c]/90 border-b border-[#C8F04B]/10">
      <div className="container max-w-7xl mx-auto px-6">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-8">
            <a href={logo.url} className="flex items-center gap-2 flex-shrink-0">
              <img src={logo.src} className="h-8 w-auto brightness-0 invert hover:brightness-110 transition-all" alt={logo.alt} />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={auth.login.url} className="flex items-center gap-1.5 text-[#7A7A8A] text-sm hover:text-white transition-colors font-medium">
              <Phone className="w-4 h-4" />
              0161 524 4339
            </a>
            <a href={auth.signup.url} className="bg-[#C8F04B] text-[#0C0C0E] font-bold text-sm rounded-full px-5 py-2 hover:bg-white hover:shadow-[0_0_20px_rgba(200,240,75,0.4)] transition-all duration-200">
              {auth.signup.text}
            </a>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="h-7 w-auto brightness-0 invert" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-[#0E0E12] border-l border-[#C8F04B]/10 text-white">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2 pt-4">
                      <img src={logo.src} className="h-7 w-auto brightness-0 invert" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-2"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t border-[#ffffff10] py-4">
                    <div className="flex flex-col gap-2">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-[#7A7A8A] transition-colors hover:bg-white/5 hover:text-white"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href={auth.signup.url} className="text-center bg-[#C8F04B] text-[#0C0C0E] font-bold text-base rounded-full px-5 py-3 hover:bg-white transition-all duration-200">
                      {auth.signup.text}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent text-[#7A7A8A] hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white font-medium text-sm px-4">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-[400px] p-4 bg-[#0E0E12]/95 backdrop-blur-xl border border-[#C8F04B]/10 rounded-xl shadow-2xl">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none gap-4 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 group"
                    href={subItem.url}
                  >
                    <div className="mt-1 bg-black/20 p-2 rounded-lg group-hover:bg-[#C8F04B]/10 transition-colors">
                      {subItem.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1 group-hover:text-[#C8F04B] transition-colors">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-xs leading-relaxed text-[#7A7A8A]">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <a
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#7A7A8A] transition-colors hover:text-white"
          href={item.url}
        >
          {item.title}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b border-[#ffffff08]">
        <AccordionTrigger className="py-3 font-semibold text-white hover:no-underline text-base px-2">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-1 pb-3 px-2">
          <div className="flex flex-col gap-1">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none items-center gap-3 rounded-md p-2 leading-none outline-none transition-colors hover:bg-white/5 group"
                href={subItem.url}
              >
                <div className="text-[#C8F04B]">
                  {subItem.icon}
                </div>
                <div className="text-sm font-medium text-[#7A7A8A] group-hover:text-white">
                  {subItem.title}
                </div>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold text-white py-3 border-b border-[#ffffff08] px-2 block text-base hover:text-[#C8F04B] transition-colors">
      {item.title}
    </a>
  );
};

export { Navbar1 };
