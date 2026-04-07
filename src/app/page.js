import Link from "next/link";
import { ArrowRight, Play, MapPin, Search, Calendar, Clock, Star, Heart, Shield, Plane, Music, Camera, Cloud, Compass, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden font-sans">
      {/* 1. New Hero Section */}
      <section className="relative min-h-[850px] w-full flex items-center overflow-hidden bg-white mt-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-[#f3fafc]"></div>
          <div className="w-1/2 h-full bg-[#fdfbf3]"></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 text-gray-300"><Cloud className="w-12 h-12" /></div>
        <div className="absolute top-10 right-20 text-gray-300 rotate-45"><Plane className="w-8 h-8" /></div>
        <div className="absolute bottom-40 right-10 text-gray-300"><Compass className="w-10 h-10" /></div>

        <div className="container mx-auto px-6 md:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-[#1a0f0a] leading-[1] relative">
                Qatar's World <br /> Cup Stadiums <br /> Await You
                <span className="absolute -right-16 bottom-4 text-[#22d3ee]"><Waves className="w-12 h-12" /></span>
              </h1>
              <p className="text-gray-500 text-lg max-w-md font-medium leading-relaxed">
                Follow my journey exploring the architectural wonders of Qatar. Discover what to see, how to get there, and the best time to visit.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-10 py-5 rounded-full font-bold flex items-center gap-2 transition-all shadow-xl shadow-orange-500/30 group">
                Explore Stadiums <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-4 transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <span className="font-bold text-[#1a0f0a] text-sm">Watch My <br /> Journey</span>
              </button>
            </div>
          </div>

          {/* Right Content - Illustration & Cards */}
          <div className="flex-1 relative">
            <div className="w-full aspect-[4/5] bg-blue-500 rounded-2xl relative overflow-hidden shadow-2xl">
              <img 
                src="/hero-illustration.png" 
                alt="Erica Qatar" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlapping Cards */}
              {/* Guide Card */}
              <div className="absolute top-10 right-[-20px] bg-white p-4 rounded-2xl shadow-xl w-32 animate-bounce-slow">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-2 mx-auto">
                    <MapPin className="w-6 h-6" />
                </div>
                <div className="text-center">
                    <p className="text-[14px] font-black text-black">Guide</p>
                    <p className="text-[10px] text-gray-400">How to visit</p>
                </div>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-sm">NEW</div>
              </div>

              {/* Lusail City Card */}
              <div className="absolute bottom-20 left-[-40px] bg-white p-4 rounded-2xl shadow-xl w-48">
                <div className="relative rounded-xl overflow-hidden mb-3">
                    <img src="/doha-skyline.png" alt="Lusail" className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange-500" /> Qatar
                    </div>
                </div>
                <p className="text-base font-black text-black">Lusail City</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex -space-x-2">
                        <img src="/user1.jpg" className="w-6 h-6 rounded-full border border-white" />
                        <img src="/user2.jpg" className="w-6 h-6 rounded-full border border-white" />
                        <img src="/user3.jpg" className="w-6 h-6 rounded-full border border-white" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold">1K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stadium Highlights Section */}
      <section className="bg-[#1c0d02] py-24 px-6 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Lusail Stadium */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-40 bg-orange-500 rounded-full relative overflow-hidden border-4 border-orange-400">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-black/80 flex items-center justify-center">
                    <div className="w-2 h-12 bg-red-500 rounded-full"></div>
                </div>
            </div>
            <div className="space-y-1">
                <h3 className="text-white text-xl font-black">Lusail <br /> Stadium</h3>
                <Link href="/stadiums" className="text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline">
                    View Details +
                </Link>
            </div>
          </div>

          {/* Al Bayt Stadium */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-40 bg-white/10 rounded-full relative overflow-hidden border-4 border-white/20 flex flex-col">
                <div className="flex-1 bg-yellow-400/90 rounded-t-full"></div>
                <div className="flex-1 flex flex-col items-center justify-center gap-2 pb-4">
                    <div className="w-12 h-1 bg-white/40"></div>
                    <div className="w-12 h-1 bg-white/40"></div>
                    <div className="w-12 h-1 bg-white/40"></div>
                </div>
            </div>
            <div className="space-y-1">
                <h3 className="text-white text-xl font-black">Al Bayt <br /> Stadium</h3>
                <Link href="/stadiums" className="text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline">
                    View Details +
                </Link>
            </div>
          </div>

          {/* Stadium 974 */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-40 rounded-full overflow-hidden border-4 border-white/20 flex flex-col">
                <div className="h-1/4 bg-blue-500"></div>
                <div className="h-1/4 bg-orange-500"></div>
                <div className="h-1/4 bg-green-500"></div>
                <div className="h-1/4 bg-red-500"></div>
            </div>
            <div className="space-y-1">
                <h3 className="text-white text-xl font-black">Stadium <br /> 974</h3>
                <Link href="/stadiums" className="text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline">
                    View Details +
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
