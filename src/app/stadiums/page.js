import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, ArrowRight, Star } from "lucide-react";

export default function StadiumsPage() {
    return (
        <div className="bg-[#f5f5f5] min-h-screen font-sans pb-20">
            {/* Header Space for fixed nav */}
            <div className="h-32"></div>

            <div className="container mx-auto px-6 md:px-20">
                {/* Title Section */}
                <div className="mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">Qatar World Cup Stadiums</h1>
                    <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                        Explore the 8 incredible venues that hosted the 2022 FIFA World Cup. Each stadium tells a unique story of culture and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stadiums.map((stadium, index) => (
                        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100">
                            {/* Stadium Image */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={stadium.image}
                                    alt={stadium.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex-1 flex flex-col space-y-4">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-2xl font-black text-[#1a1a1a]">{stadium.name}</h2>
                                    <span className="text-[10px] font-bold text-[#00a896] bg-emerald-50 px-2 py-1 rounded">{stadium.capacity}</span>
                                </div>
                                
                                <div className="flex items-center gap-2 text-[#00a896] text-xs font-bold">
                                    <MapPin size={14} /> {stadium.location}
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3">
                                    {stadium.description}
                                </p>

                                <div className="pt-4 mt-auto">
                                    <Link href="/guide" className="block w-full">
                                        <Button className="w-full bg-[#00a896] hover:bg-[#008f80] text-white py-6 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-500/20">
                                            View Stadium Guide
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const stadiums = [
    {
        id: "lusail",
        name: "Lusail Stadium",
        location: "Lusail City",
        capacity: "88,966",
        image: "/hero-bg.jpg",
        description: "The crown jewel of the tournament, this stadium hosted the historic final. Its design draws inspiration from the fanar lantern and intricate decorative motifs on bowls and other vessels found across the Arab world.",
    },
    {
        id: "al-bayt",
        name: "Al Bayt Stadium",
        location: "Al Khor",
        capacity: "68,895",
        image: "/al-bayt.png",
        description: "The host of the opening match, Al Bayt is unmistakably Qatari. Its design resembles the traditional 'bayt al sha'ar' tents used by nomadic people in the region for centuries.",
    },
    {
        id: "al-janoub",
        name: "Al Janoub Stadium",
        location: "Al Wakrah",
        capacity: "44,325",
        image: "/beach.jpg",
        description: "Designed by the late Zaha Hadid, this stadium's futuristic look is inspired by the sails of traditional dhow boats, paying tribute to Al Wakrah's seafaring past.",
    },
    {
        id: "ahmad-bin-ali",
        name: "Ahmad Bin Ali Stadium",
        location: "Umm Al Afaei",
        capacity: "45,032",
        image: "/adventure.jpg",
        description: "Located on the edge of the desert, its glowing façade features patterns that represent different aspects of Qatar: the importance of family, the beauty of the desert, native flora and fauna, and local and international trade.",
    },
    {
        id: "khalifa-international",
        name: "Khalifa International Stadium",
        location: "Al Rayyan",
        capacity: "45,857",
        image: "/tokyo.jpg",
        description: "Qatar's most historic stadium, built in 1976 and extensively renovated for the World Cup. It's famous for its magnificent dual arches and legacy of hosting major sporting events.",
    },
    {
        id: "stadium-974",
        name: "Stadium 974",
        location: "Ras Abu Aboud, Doha",
        capacity: "44,089",
        image: "/cultural.jpg",
        description: "A completely dismountable stadium made of 974 shipping containers, paying tribute to the country's maritime history and international dialing code.",
    },
];
