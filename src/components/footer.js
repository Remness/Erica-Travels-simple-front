"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const pathname = usePathname();


  return (
    <footer className="bg-[#1c0d02] text-white/70 relative border-t-8 border-[#ff5722]">
      <div className="container mx-auto px-6 md:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Erica's Qatar Tour */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">Erica's Qatar Tour</h3>
            <p className="text-sm leading-relaxed max-w-xs font-medium">
              Exploring the architectural wonders and cultural heritage of Qatar, one stadium at a time. Follow my journey and plan your own stadium adventure.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-orange-500 transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-orange-500 transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:ml-12">
            <h3 className="text-white text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3 font-medium">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/stadiums" className="hover:text-orange-500 transition-colors">Stadiums</Link></li>
              <li><Link href="/guide" className="hover:text-orange-500 transition-colors">Qatar Guide</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Erica's Blog</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">Contact Us</h3>
            <div className="flex items-center gap-3 font-bold group">
                <div className="w-8 h-8 rounded-lg border border-orange-500/30 flex items-center justify-center text-orange-500">
                    <Mail size={16} />
                </div>
                <Link href="mailto:hi@ericatravels.com" className="hover:text-white transition-colors">hi@ericatravels.com</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold">Newsletter</h3>
            <p className="text-sm font-medium">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="space-y-4">
               <div className="relative group">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-[#2a1a10] border-none rounded-xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                />
               </div>
              <Button className="w-full bg-[#ff5722] hover:bg-[#ff7043] text-white py-6 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/20 transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500">
            <p>© 2026 Erica's Qatar Tour. <span className="text-gray-400 font-black">(Website Designer: Muhammad Wail)</span> All rights reserved.</p>
            <div className="flex gap-8">
                <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
