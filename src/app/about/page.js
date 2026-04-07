import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram, Youtube, Twitter, Send, MapPin, Compass, Globe, MessageSquare, Phone, Map, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff9f5] font-sans text-gray-900">
      {/* Header Space */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#e0f2f1] to-[#fff9f5]">
        <div className="relative z-10 text-center px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-orange-100 mb-8 animate-fade-in shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">Say Hello</span>
            </div>
            <div className="relative mb-8">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#1a1a1a] leading-none">
                    Get in touch
                </h1>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-2">
                    <svg viewBox="0 0 100 10" className="w-full text-[#00a896] fill-none stroke-current stroke-3">
                        <path d="M0,5 Q25,0 50,5 T100,5" />
                    </svg>
                </div>
            </div>
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
                Have a question about my stadium guides? Want to collaborate or just say hi? I'd love to hear from you.
            </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Connect Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">Connect with Erica</h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                While I'm often on the road (or walking incredible stadium concourses), I do my best to respond to every message from fellow travelers.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-8 bg-white rounded-3xl border border-gray-50 shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-[#fff4f0] rounded-2xl flex items-center justify-center text-orange-500">
                    <Mail size={32} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">EMAIL ME</p>
                    <h4 className="text-2xl font-black text-[#1a1a1a]">hi@ericatravels.com</h4>
                </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-8">
                <h3 className="text-xl font-black text-[#1a1a1a]">Social Channels</h3>
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { icon: Instagram, name: "Instagram", handle: "@ericatravels", color: "text-pink-500" },
                        { icon: Youtube, name: "YouTube", handle: "Erica's Tours", color: "text-red-500" },
                        { icon: Twitter, name: "Twitter", handle: "@ericatours", color: "text-blue-400" },
                        { icon: MapPin, name: "Pinterest", handle: "Qatar Inspo", color: "text-red-600" }
                    ].map((social, i) => (
                        <div key={i} className="p-6 bg-white rounded-3xl border border-gray-50 shadow-sm hover:shadow-lg transition-all group text-center space-y-4">
                            <div className={`w-12 h-12 ${social.color} mx-auto flex items-center justify-center`}>
                                <social.icon size={32} />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-[#1a1a1a]">{social.name}</h4>
                                <p className="text-[10px] font-bold text-gray-400">{social.handle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-[4rem] shadow-2xl p-10 md:p-16 border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#fff4f0] rounded-bl-full opacity-50"></div>
            <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">YOUR NAME</label>
                        <Input className="h-16 rounded-2xl bg-[#fcfcfc] border-gray-100 border focus-visible:ring-[#3b5bdb] font-bold" />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">EMAIL ADDRESS</label>
                        <Input type="email" className="h-16 rounded-2xl bg-[#fcfcfc] border-gray-100 border focus-visible:ring-[#3b5bdb] font-bold" />
                    </div>
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">SUBJECT</label>
                    <Input className="h-16 rounded-2xl bg-[#fcfcfc] border-gray-100 border focus-visible:ring-[#3b5bdb] font-bold" />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">MESSAGE</label>
                    <Textarea className="min-h-[150px] rounded-2xl bg-[#fcfcfc] border-gray-100 border focus-visible:ring-[#3b5bdb] font-bold p-6 resize-none" />
                </div>
                <Button className="w-full h-20 bg-[#3b5bdb] hover:bg-[#324ab2] text-white rounded-2xl text-lg font-black flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-500/20">
                    <Send size={24} className="-rotate-45" /> Send Message
                </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
