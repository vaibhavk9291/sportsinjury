"use client";

import { Home, Activity, GraduationCap, Users, ShoppingBag, CalendarDays } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/#services', icon: Activity },
    { name: 'Courses', url: '/cpd-courses', icon: GraduationCap },
    { name: 'Members', url: '/membership', icon: Users },
    { name: 'Shop', url: '/shop', icon: ShoppingBag },
    { name: 'Book', url: '/book', icon: CalendarDays }
  ];

  return <NavBar items={navItems} />;
}
