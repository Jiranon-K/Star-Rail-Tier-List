"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  lightCones,
  getAllPaths,
  type LightCone,
  type LightConePath,
} from "@/data/lightCones";
import { Search } from "lucide-react";
import Image from "next/image";

export default function LightConesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLightCones, setFilteredLightCones] =
    useState<LightCone[]>(lightCones);
  const [selectedRarity, setSelectedRarity] = useState<number | null>(null);
  const [selectedPath, setSelectedPath] = useState<LightConePath | null>(null);
  const [showPathDropdown, setShowPathDropdown] = useState(false);

  const paths = getAllPaths();

  useEffect(() => {
    let result = lightCones;

    if (searchQuery) {
      result = result.filter((lightCone) =>
        lightCone.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRarity) {
      result = result.filter(
        (lightCone) => lightCone.rarity === selectedRarity
      );
    }

    if (selectedPath) {
      result = result.filter((lightCone) => lightCone.path === selectedPath);
    }

    setFilteredLightCones(result);
  }, [searchQuery, selectedRarity, selectedPath]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRarity(null);
    setSelectedPath(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        showPathDropdown &&
        !(event.target as Element).closest(".path-dropdown-container")
      ) {
        setShowPathDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showPathDropdown]);

  // ฟังก์ชันสำหรับเลือกสีตามเส้นทาง
  const getPathColor = (path: LightConePath) => {
    switch (path) {
      case "ทำลายล้าง":
        return "from-red-500/70 to-orange-700/70";
      case "ล่าสังหาร":
        return "from-green-500/70 to-green-700/70";
      case "ปัญญา":
        return "from-blue-500/70 to-purple-700/70";
      case "ประสาน":
        return "from-yellow-400/70 to-amber-600/70";
      case "ลบล้าง":
        return "from-pink-400/70 to-purple-600/70";
      case "อนุรักษ์":
        return "from-teal-400/70 to-cyan-600/70";
      case "เฟื่องฟู":
        return "from-lime-400/70 to-green-600/70";
      case "ความทรงจำ":
        return "from-blue-300/70 to-blue-500/70";
      default:
        return "from-gray-400/70 to-gray-600/70";
    }
  };

  // Text color for light cone text is always white
  const pathTextColor = "text-white";

  const getPathTextShadow = (path: LightConePath) => {
    switch (path) {
      case "ทำลายล้าง":
        return "text-shadow-fire";
      case "ล่าสังหาร":
        return "text-shadow-wind";
      case "ปัญญา":
        return "text-shadow-quantum";
      case "ประสาน":
        return "text-shadow-lightning";
      case "ลบล้าง":
        return "text-shadow-imaginary";
      case "อนุรักษ์":
        return "text-shadow-ice";
      case "เฟื่องฟู":
        return "text-shadow-physical";
      case "ความทรงจำ":
        return "text-shadow-ice";
      default:
        return "text-shadow-physical";
    }
  };

  const getPathGlow = (path: LightConePath) => {
    switch (path) {
      case "ทำลายล้าง":
        return "glow-fire";
      case "ล่าสังหาร":
        return "glow-wind";
      case "ปัญญา":
        return "glow-quantum";
      case "ประสาน":
        return "glow-lightning";
      case "ลบล้าง":
        return "glow-imaginary";
      case "อนุรักษ์":
        return "glow-ice";
      case "เฟื่องฟู":
        return "glow-physical";
      case "ความทรงจำ":
        return "glow-ice";
      default:
        return "";
    }
  };

  return (
    <main className="bg-base-100 min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="relative pt-16 pb-24 flex content-center items-center justify-center h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/honkai-banner6.jpg')",
            filter: "blur(8px)",
            backgroundColor: "#151934",
          }}
        >
          <span className="w-full h-full absolute opacity-70 bg-gradient-to-t from-[#080A1A] via-[#080A1Aaa] to-[#080A1A22]"></span>
        </div>

        <div className="container relative mx-auto z-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              <div className="pt-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6">
                  LIGHT CONES
                </h1>
                <p className="mt-4 text-sm sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
                  ค้นหาและเรียนรู้เกี่ยวกับ Light Cone ทั้งหมดในจักรวาล Honkai
                  Star Rail
                </p>
                <div className="mt-8 animate-bounce">
                  <div className="w-10 h-10 mx-auto border-2 border-blue-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8 -mt-20 relative z-[100]">
        <div className="backdrop-blur-md bg-black/40 rounded-2xl p-6 border border-white/10 shadow-lg mb-12 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="ค้นหา Light Cone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-10 pr-4 rounded-full bg-black/60 border border-blue-500/30 focus:outline-none focus:ring-2 focus:border-blue-500/50 focus:ring-blue-500/50 text-white"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                size={20}
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {/* Rarity Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setSelectedRarity(selectedRarity === 3 ? null : 3)
                  }
                  className={`px-6 py-2 rounded-full border transition-all ${
                    selectedRarity === 3
                      ? "bg-blue-600/40 border-blue-500 text-white shadow-lg shadow-blue-500/20 font-bold"
                      : "bg-black/60 border-white/20 text-gray-300 hover:border-blue-400/50"
                  }`}
                >
                  3★
                </button>
                <button
                  onClick={() =>
                    setSelectedRarity(selectedRarity === 4 ? null : 4)
                  }
                  className={`px-6 py-2 rounded-full border transition-all ${
                    selectedRarity === 4
                      ? "bg-purple-600/40 border-purple-500 text-white shadow-lg shadow-purple-500/20 font-bold"
                      : "bg-black/60 border-white/20 text-gray-300 hover:border-purple-400/50"
                  }`}
                >
                  4★
                </button>
                <button
                  onClick={() =>
                    setSelectedRarity(selectedRarity === 5 ? null : 5)
                  }
                  className={`px-6 py-2 rounded-full border transition-all ${
                    selectedRarity === 5
                      ? "bg-orange-600/40 border-orange-500 text-white shadow-lg shadow-orange-500/20 font-bold"
                      : "bg-black/60 border-white/20 text-gray-300 hover:border-orange-400/50"
                  }`}
                >
                  5★
                </button>
              </div>

              {/* Path Filter */}
              <div className="relative path-dropdown-container z-[150]">
                <button
                  onClick={() => {
                    setShowPathDropdown(!showPathDropdown);
                  }}
                  className={`px-6 py-2 rounded-full bg-black/60 border ${
                    selectedPath
                      ? "border-purple-500/80 text-purple-300"
                      : "border-white/20 text-gray-300"
                  } focus:outline-none hover:border-purple-400/50 transition-all flex items-center gap-2`}
                >
                  <span>{selectedPath || "Path"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      showPathDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showPathDropdown && (
                  <div className="absolute bottom-full mb-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-xl ring-1 ring-black ring-opacity-5 z-[200] border border-purple-500/30">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setSelectedPath(null);
                          setShowPathDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-purple-500/20"
                      >
                        Path ทั้งหมด
                      </button>
                      {paths.map((path) => (
                        <button
                          key={path}
                          onClick={() => {
                            setSelectedPath(path);
                            setShowPathDropdown(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedPath === path
                              ? "bg-purple-500/30 text-white"
                              : "text-gray-200 hover:bg-purple-500/20"
                          }`}
                        >
                          {path}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="px-6 py-2 rounded-full border border-white/20 bg-black/60 text-gray-300 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all"
              >
                ล้างตัวกรอง
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Light Cone Section */}
      <section className="container mx-auto px-4 py-8 relative z-[90]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl text-blue-300 font-medium px-4 py-2 backdrop-blur-sm bg-black/20 rounded-full border border-blue-500/10">
            พบ {filteredLightCones.length} Light Cones
            {selectedRarity || selectedPath || searchQuery ? " (กรอง)" : ""}
          </h2>
        </div>

        {/* Light Cone Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredLightCones.map((lightCone) => (
            <div
              key={lightCone.id}
              className={`group relative overflow-hidden rounded-xl ${getPathGlow(
                lightCone.path
              )} hover-card-effect backdrop-blur-sm bg-black/10 border border-white/5`}
            >
              {/* Rarity Stars */}
              <div className="absolute top-2 left-0 right-0 z-10 flex justify-center">
                {Array.from({ length: lightCone.rarity }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Light Cone Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/50">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className="w-3/4 h-3/4 relative">
                    <Image
                      src={lightCone.imageUrl}
                      alt={lightCone.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Light Cone Info */}
              <div className="absolute bottom-0 inset-x-0 z-20">
                <div
                  className={`px-3 py-2 bg-gradient-to-r ${getPathColor(
                    lightCone.path
                  )} backdrop-blur-md border-t border-white/20`}
                >
                  <h3
                    className={`${pathTextColor} ${getPathTextShadow(
                      lightCone.path
                    )} font-bold text-center text-lg truncate`}
                  >
                    {lightCone.name}
                  </h3>
                </div>

                {/* Path tooltip on hover */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-10 inset-x-0 flex justify-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {lightCone.path}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLightCones.length === 0 && (
          <div className="text-center py-20 backdrop-blur-lg bg-black/20 rounded-xl border border-white/10">
            <p className="text-2xl text-gray-300 mb-4">ไม่พบ Light Cone</p>
            <p className="text-gray-400 mb-6">ลองเปลี่ยนตัวกรองหรือคำค้นหา</p>
            <button
              onClick={clearFilters}
              className="px-8 py-3 bg-blue-500/20 text-blue-300 rounded-full hover:bg-blue-500/30 transition-colors border border-blue-500/30"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
