"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { characters, getAllElements, getAllPaths, type Character, type CharacterElement, type CharacterPath } from '@/data/characters';
import Image from 'next/image';
import { Search, Filter } from 'lucide-react';


type TierType = 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';


type GameMode = 'memoryOfChaos' | 'pureFiction' | 'apocalypticShadow';


const gameModeLabels: Record<GameMode, string> = {
  memoryOfChaos: 'Memory of Chaos',
  pureFiction: 'Pure Fiction',
  apocalypticShadow: 'Apocalyptic Shadow'
};


const tierConfig: Record<TierType, { label: string, color: string, bgColor: string, description: string }> = {
  'SS': { 
    label: 'SS', 
    color: 'from-pink-500 to-purple-600', 
    bgColor: 'bg-purple-900/30',
    description: 'ตัวละครที่มีประสิทธิภาพสูงสุด เป็นตัวเลือกแรกที่ควรใช้เสมอ'
  },
  'S': { 
    label: 'S', 
    color: 'from-red-500 to-orange-600', 
    bgColor: 'bg-orange-900/30',
    description: 'ตัวละครที่มีประสิทธิภาพสูง สามารถใช้ได้หลากหลายสถานการณ์'
  },
  'A': { 
    label: 'A', 
    color: 'from-orange-400 to-yellow-500', 
    bgColor: 'bg-yellow-900/30',
    description: 'ตัวละครที่ดี เหมาะกับบางทีมคอมโบและสถานการณ์เฉพาะ'
  },
  'B': { 
    label: 'B', 
    color: 'from-blue-400 to-cyan-500', 
    bgColor: 'bg-blue-900/30',
    description: 'ตัวละครที่ใช้ได้ แต่มีตัวเลือกที่ดีกว่า'
  },
  'C': { 
    label: 'C', 
    color: 'from-green-400 to-teal-500', 
    bgColor: 'bg-green-900/30',
    description: 'ตัวละครที่มีประสิทธิภาพค่อนข้างต่ำ เหมาะกับผู้เล่นที่มีทรัพยากรจำกัด'
  },
  'D': { 
    label: 'D', 
    color: 'from-gray-400 to-gray-600', 
    bgColor: 'bg-gray-900/30',
    description: 'ตัวละครที่ไม่แนะนำให้ลงทุน มีทางเลือกที่ดีกว่ามาก'
  },
};


const createPredefinedTierLists = (): Record<GameMode, Record<TierType, Character[]>> => {

  const findCharByName = (name: string): Character | undefined => {
    return characters.find(char => char.name.toLowerCase().includes(name.toLowerCase()));
  };
  
  // Memory of Chaos Tier List
  const chaosMode: Record<TierType, Character[]> = {
    'SS': [
      findCharByName('Aglaea')!, 
      findCharByName('Mydei')!,
      findCharByName('The Herta')!,
      findCharByName('Tribbie')!,
      findCharByName('Robin')!,
      findCharByName('Ruan Mei')!,
      findCharByName('Sunday')!,
      findCharByName('Aventurine')!,
      findCharByName('Lingsha')!
    ].filter(Boolean) as Character[],
    
    'S': [
      findCharByName('Acheron')!,
      findCharByName('Feixiao')!,
      findCharByName('Firefly')!,
      findCharByName('Rappa')!,
      findCharByName('Jade')!,
      findCharByName('March 7th The Hunt')!,
      findCharByName('Topaz & Numby')!,
      findCharByName('Jiaoqiu')!,
      findCharByName('Fugue')!,
      findCharByName('Trailblazer • Remembrance')!,
      findCharByName('Gallagher')!,
      findCharByName('Huohuo')!
    ].filter(Boolean) as Character[],
    
    'A': [
      findCharByName('Boothill')!,
      findCharByName('Jing Yuan')!,
      findCharByName('Yunli')!,
      findCharByName('Argenti')!,
      findCharByName('Black Swan')!, 
      findCharByName('Moze')!,
      findCharByName('Serval')!,
      findCharByName('Pela')!,
      findCharByName('Sparkle')!,
      findCharByName('Trailblazer • Harmony')!,
      findCharByName('Fu Xuan')!,
      findCharByName('Luocha')!
    ].filter(Boolean) as Character[],
    
    'B': [
      findCharByName('Dr. Ratio')!,
      findCharByName('Himeko')!,
      findCharByName('Yanqing')!,
      findCharByName('Dan Heng - จ้าวยลจันทรา')!,
      findCharByName('Kafka')!,
      findCharByName('Herta')!,
      findCharByName('Bronya')!,
      findCharByName('Silver Wolf')!,
      findCharByName('Tingyun')!
    ].filter(Boolean) as Character[],
    
    'C': [
      findCharByName('Clara')!,
      findCharByName('Jingliu')!,
      findCharByName('Bailu')!,
      findCharByName('Gepard')!
    ].filter(Boolean) as Character[],
    
    'D': [
      findCharByName('Qingque')!,
      findCharByName('Blade')!,
      findCharByName('Seele')!,
      findCharByName('Sampo')!,
      findCharByName('Asta')!,
      findCharByName('Guinaifen')!,
      findCharByName('Lynx')!,
      findCharByName('Luka')!,
      findCharByName('Xueyi')!,
      findCharByName('Welt')!,
      findCharByName('Hanya')!
    ].filter(Boolean) as Character[]
  };
  
  // Pure Fiction Tier List 
  const fictionMode: Record<TierType, Character[]> = {
    'SS': [
      findCharByName('The Herta')!,
      findCharByName('Jade')!,
      findCharByName('Herta')!,
      findCharByName('Argenti')!,
      findCharByName('Jing Yuan')!,
      findCharByName('Tribbie')!,
      findCharByName('Lingsha')!,
      findCharByName('Robin')!
    ].filter(Boolean) as Character[],
    
    'S': [
      findCharByName('Rappa')!,
      findCharByName('Jing Yuan')!,
      findCharByName('Acheron')!,
      findCharByName('Aglaea')!,
      findCharByName('Yunli')!,
      findCharByName('Black Swan')!,
      findCharByName('Kafka')!,
      findCharByName('Serval')!,
      findCharByName('Himeko')!,
      findCharByName('Sunday')!,
      findCharByName('Aventurine')!,
      findCharByName('Ruan Mei')!,
      findCharByName('Huohuo')!,
      findCharByName('Fugue')!,
      findCharByName('Gallagher')!,
      findCharByName('Jiaoqiu')!,
      findCharByName('Trailblazer • Remembrance')!
    ].filter(Boolean) as Character[],
    
    'A': [
      findCharByName('Mydei')!,
      findCharByName('Blade')!,
      findCharByName('Firefly')!,
      findCharByName('Feixiao')!,
      findCharByName('Seele')!,
      findCharByName('Clara')!,
      findCharByName('Asta')!,
      findCharByName('Gepard')!,
      findCharByName('Hanya')!,
      findCharByName('Lynx')!
    ].filter(Boolean) as Character[],
    
    'B': [
      findCharByName('Dan Heng - จ้าวยลจันทรา')!,
      findCharByName('Jingliu')!,
      findCharByName('Qingque')!,
      findCharByName('Sampo')!,
      findCharByName('Dr. Ratio')!,
      findCharByName('Topaz & Numby')!,
      findCharByName('March 7th The Hunt')!,
      findCharByName('Xueyi')!,
      findCharByName('Sparkle')!,
      findCharByName('Fu Xuan')!,
      findCharByName('Tingyun')!,
      findCharByName('Luocha')!,
      findCharByName('Bronya')!,
      findCharByName('Bailu')!,
      findCharByName('Pela')!,
      findCharByName('Trailblazer • Harmony')!
    ].filter(Boolean) as Character[],
    
    'C': [
      findCharByName('Boothill')!,
      findCharByName('Yanqing')!,
      findCharByName('Dan Heng')!,
      findCharByName('Luka')!,
      findCharByName('Arlan')!,
      findCharByName('Hook')!,
      findCharByName('Misha')!,
      findCharByName('Trailblazer')!,
      findCharByName('Sushang')!,
      findCharByName('Moze')!
    ].filter(Boolean) as Character[],
    
    'D': [
      findCharByName('Yukong')!,
      findCharByName('Silver Wolf')!,
      findCharByName('Welt')!,
      findCharByName('Guinaifen')!,
      findCharByName('March 7th')!,
      findCharByName('Trailblazer')!,
      findCharByName('Natasha')!
    ].filter(Boolean) as Character[]
  };
  
  // Apocalyptic Shadow Tier List 
  const shadowMode: Record<TierType, Character[]> = {
    'SS': [
      findCharByName('The Herta')!,
      findCharByName('March 7th The Hunt')!,
      findCharByName('Acheron')!,
      findCharByName('Tribbie')!,
      findCharByName('Aventurine')!,
      findCharByName('Sunday')!,
      findCharByName('Huohuo')!,
      findCharByName('Trailblazer • Harmony')!,
      findCharByName('Gallagher')!,
      findCharByName('Fugue')!,
      findCharByName('Trailblazer • Remembrance')!,
      findCharByName('Firefly')!,
      findCharByName('Boothill')!,
      findCharByName('Feixiao')!,
      findCharByName('Rappa')!,
      findCharByName('Ruan Mei')!,
      findCharByName('Lingsha')!,
      findCharByName('Robin')!
    ].filter(Boolean) as Character[],
    
    'S': [
      findCharByName('Argenti')!,
      findCharByName('Jing Yuan')!,
      findCharByName('Jade')!,
      findCharByName('Yunli')!,
      findCharByName('Dr. Ratio')!,
      findCharByName('Aglaea')!,
      findCharByName('Himeko')!,
      findCharByName('Sparkle')!,
      findCharByName('Fu Xuan')!,
      findCharByName('Tingyun')!,
      findCharByName('Luocha')!,
      findCharByName('Bronya')!
    ].filter(Boolean) as Character[],
    
    'A': [
      findCharByName('Dan Heng - จ้าวยลจันทรา')!,
      findCharByName('Topaz & Numby')!,
      findCharByName('Moze')!,
      findCharByName('Serval')!,
      findCharByName('Herta')!,
      findCharByName('Silver Wolf')!,
      findCharByName('Bailu')!,
      findCharByName('Pela')!,
      findCharByName('Gepard')!,
      findCharByName('Jiaoqiu')!
    ].filter(Boolean) as Character[],
    
    'B': [
      findCharByName('Jingliu')!,
      findCharByName('Seele')!,
      findCharByName('Xueyi')!,
      findCharByName('Sushang')!,
      findCharByName('Luka')!,
      findCharByName('Mydei')!,
      findCharByName('Serval')!,
      findCharByName('Herta')!,
      findCharByName('Asta')!,
      findCharByName('Hanya')!,
      findCharByName('Yukong')!,
      findCharByName('Welt')!
    ].filter(Boolean) as Character[],
    
    'C': [
      findCharByName('Clara')!,
      findCharByName('Qingque')!,
      findCharByName('Blade')!,
      findCharByName('Kafka')!,
      findCharByName('Black Swan')!,
      findCharByName('Trailblazer')!,
      findCharByName('Arlan')!,
      findCharByName('Dan Heng')!
    ].filter(Boolean) as Character[],

    'D': [
      findCharByName('Hook')!,
      findCharByName('Yanqing')!,
      findCharByName('Sampo')!,
      findCharByName('Guinaifen')!,
      findCharByName('Natasha')!,
      findCharByName('March 7th')!,
      findCharByName('Trailblazer')!,
      findCharByName('Lynx')!
    ].filter(Boolean) as Character[]
  };
  
  return {
    memoryOfChaos: chaosMode,
    pureFiction: fictionMode,
    apocalypticShadow: shadowMode
  };
};

export default function TierListPage() {
  
  const predefinedTierLists = createPredefinedTierLists();
  
  
  const [selectedMode, setSelectedMode] = useState<GameMode>('memoryOfChaos');
  
  
  const [selectedElement, setSelectedElement] = useState<CharacterElement | null>(null);
  const [selectedPath, setSelectedPath] = useState<CharacterPath | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
 
  const elements = getAllElements();
  const paths = getAllPaths();
  
 
  const getFilteredTierList = (): Record<TierType, Character[]> => {
    const currentTierList = predefinedTierLists[selectedMode];
    const result = {} as Record<TierType, Character[]>;
    
    (Object.keys(currentTierList) as TierType[]).forEach(tier => {
      result[tier] = currentTierList[tier].filter(character => {
        
        if (selectedElement && character.element !== selectedElement) {
          return false;
        }
        
      
        if (selectedPath && character.path !== selectedPath) {
          return false;
        }
        
        
        if (searchQuery && !character.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        
        return true;
      });
    });
    
    return result;
  };
  
 
  const resetFilters = () => {
    setSelectedElement(null);
    setSelectedPath(null);
    setSearchQuery('');
  };
  
 
  const getElementColor = (element: CharacterElement) => {
    switch (element) {
      case 'กายภาพ': return 'border-gray-400';
      case 'ไฟ': return 'border-red-400';
      case 'น้ำแข็ง': return 'border-blue-300';
      case 'สายฟ้า': return 'border-purple-400';
      case 'ลม': return 'border-green-300';
      case 'ควอนตัม': return 'border-blue-500';
      case 'จินตภาพ': return 'border-pink-400';
      default: return 'border-gray-400';
    }
  };
  
 
  const getElementGlow = (element: CharacterElement) => {
    switch (element) {
      case 'กายภาพ': return 'glow-physical';
      case 'ไฟ': return 'glow-fire';
      case 'น้ำแข็ง': return 'glow-ice';
      case 'สายฟ้า': return 'glow-lightning';
      case 'ลม': return 'glow-wind';
      case 'ควอนตัม': return 'glow-quantum';
      case 'จินตภาพ': return 'glow-imaginary';
      default: return '';
    }
  };
  
 
  const getModeDescription = (mode: GameMode): string => {
    switch (mode) {
      case 'memoryOfChaos':
        return 'โหมดการเล่นที่เน้นการทำดาเมจสูงสุดในเวลาจำกัด เหมาะกับตัวละครที่มีพลังโจมตีสูงและทำดาเมจ AoE ได้ดี';
      case 'pureFiction':
        return 'โหมดการเล่นที่เน้นความอยู่รอดและการซัพพอร์ต เหมาะกับทีมที่มีการป้องกันและฟื้นฟูพลังชีวิตที่ดี';
      case 'apocalypticShadow':
        return 'โหมดการเล่นที่เน้นความเร็วและการควบคุม เหมาะกับตัวละครที่มีความเร็วสูงและมีความสามารถในการควบคุมศัตรู';
      default:
        return '';
    }
  };
  
  
  const getTotalFilteredCharacters = (): number => {
    const filteredTierList = getFilteredTierList();
    return Object.values(filteredTierList).reduce((total, chars) => total + chars.length, 0);
  };
  
  
  const isFiltering = (): boolean => {
    return !!(selectedElement || selectedPath || searchQuery);
  };
  
  return (
    <main className="bg-base-100 min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="relative pt-16 pb-24 flex content-center items-center justify-center h-[50vh]">
        <div 
          className="absolute top-0 w-full h-full bg-center bg-cover" 
          style={{
            backgroundImage: "url('/honkai-banner3.png')",
            filter: "blur(8px)", 
            backgroundColor: "#151934"
          }}
        >
          <span className="w-full h-full absolute opacity-70 bg-gradient-to-t from-[#080A1A] via-[#080A1Aaa] to-[#080A1A22]"></span>
        </div>
        
        <div className="container relative mx-auto z-10">
          <div className="items-center flex flex-wrap">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              <div className="pt-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6">TIER LIST PATCH 3.1</h1>
                <p className="mt-4 text-sm sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
                  การจัดอันดับตัวละครใน HONKAI STAR RAIL ตามความแข็งแกร่งและประสิทธิภาพ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Control Panel */}
      <div className="container mx-auto px-4 py-8 relative z-10 -mt-20">
        <div className="bg-black/60 backdrop-blur-md rounded-xl border border-purple-500/20 p-6 shadow-xl">
          <div className="flex flex-wrap justify-between gap-4 mb-4">
            {/* โหมดการเล่น */}
            <div className="space-y-2 w-full">
              <h3 className="text-white font-medium">เลือกโหมดการเล่น</h3>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(gameModeLabels) as GameMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm ${
                      selectedMode === mode 
                        ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20' 
                        : 'bg-black/60 border border-white/20 text-gray-300 hover:bg-purple-500/20 hover:border-purple-400/50'
                    } transition-colors`}
                  >
                    {gameModeLabels[mode]}
                  </button>
                ))}
              </div>
              
              {/* คำอธิบายโหมด */}
              <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/20 text-blue-200 text-sm mt-2">
                {getModeDescription(selectedMode)}
              </div>
            </div>
            
            {/* ตัวกรองและค้นหา */}
            <div className="flex flex-wrap items-center gap-2 w-full">
              <div className="relative w-full sm:w-auto flex-grow">
                <input
                  type="text"
                  placeholder="ค้นหาตัวละคร..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-2 pl-10 pr-4 rounded-lg bg-black/60 border border-white/30 focus:outline-none focus:ring-2 focus:border-blue-500/50 focus:ring-blue-500/50 text-white w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 text-white rounded-lg border border-blue-500/30 flex items-center gap-2 transition-colors"
              >
                <Filter size={18} /> ตัวกรอง
              </button>
              
              {isFiltering() && (
                <button 
                  onClick={resetFilters} 
                  className="px-4 py-2 bg-gray-600/30 hover:bg-gray-600/50 text-white rounded-lg border border-gray-500/30 transition-colors"
                >
                  ล้างตัวกรอง
                </button>
              )}
            </div>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-black/40 rounded-lg border border-white/10">
              <div className="flex flex-wrap gap-6">
                <div className="space-y-2">
                  <h3 className="text-white font-medium">ธาตุ</h3>
                  <div className="flex flex-wrap gap-2">
                    {elements.map((element) => (
                      <button
                        key={element}
                        onClick={() => setSelectedElement(selectedElement === element ? null : element)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedElement === element 
                            ? 'bg-blue-500/50 border-blue-400 text-white' 
                            : 'bg-black/60 border-white/20 text-gray-300 hover:bg-blue-500/20'
                        } border transition-colors`}
                      >
                        {element}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-white font-medium">เส้นทาง</h3>
                  <div className="flex flex-wrap gap-2">
                    {paths.map((path) => (
                      <button
                        key={path}
                        onClick={() => setSelectedPath(selectedPath === path ? null : path)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedPath === path 
                            ? 'bg-purple-500/50 border-purple-400 text-white' 
                            : 'bg-black/60 border-white/20 text-gray-300 hover:bg-purple-500/20'
                        } border transition-colors`}
                      >
                        {path}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Tier List */}
      <section className="container mx-auto px-4 py-6 relative z-10">
        <div className="bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Tier List - {gameModeLabels[selectedMode]}</h2>
            
            {isFiltering() && (
              <div className="text-blue-300 text-sm px-4 py-2 backdrop-blur-sm bg-black/20 rounded-full border border-blue-500/10">
                พบ {getTotalFilteredCharacters()} ตัวละคร (กรอง)
              </div>
            )}
          </div>
          
          {/* Tier Rows */}
          {(Object.keys(tierConfig) as TierType[]).map((tier) => (
            <div key={tier} className="mb-4">
              <div className="flex rounded-lg overflow-hidden border border-white/10">
                <div className={`w-12 sm:w-16 md:w-20 h-auto flex items-center justify-center bg-gradient-to-r ${tierConfig[tier].color} py-4`}>
                  <span className="text-2xl md:text-4xl font-bold text-white">{tier}</span>
                </div>
                
                <div className={`flex-1 flex flex-wrap gap-2 sm:gap-3 p-3 md:p-4 min-h-24 ${tierConfig[tier].bgColor}`}>
                  {getFilteredTierList()[tier].map((character) => (
                    <div
                      key={character.id}
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 ${getElementColor(character.element)} hover:border-white/80 transition-all hover:scale-105 ${getElementGlow(character.element)}`}
                    >
                      <Image
                        src={character.imageUrl}
                        alt={character.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs text-center text-white font-medium px-1">{character.name}</span>
                      </div>
                      <div className="absolute top-0 right-0 bg-black/70 rounded-bl-md px-1">
                        <span className="text-xs text-yellow-400">{character.rarity}★</span>
                      </div>
                    </div>
                  ))}
                  
                  {getFilteredTierList()[tier].length === 0 && (
                    <div className="w-full py-2 text-center text-gray-400 italic">
                      ไม่พบตัวละครในเทียร์นี้ที่ตรงกับตัวกรอง
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tier Description */}
        <div className="mt-8 bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">คำอธิบาย Tier</h3>
          <ul className="space-y-3">
            {(Object.keys(tierConfig) as TierType[]).map((tier) => (
              <li key={tier} className="flex items-center text-white">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${tierConfig[tier].color} mr-4`}>
                  <span className="font-bold text-xl">{tier}</span>
                </div>
                <span>{tierConfig[tier].description}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Game Mode explanation */}
        <div className="mt-8 bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">คำอธิบายโหมดเกม</h3>
          <ul className="space-y-5">
            {(Object.keys(gameModeLabels) as GameMode[]).map((mode) => (
              <li key={mode} className="text-white">
                <h4 className={`text-lg font-semibold mb-1 ${selectedMode === mode ? 'text-purple-400' : ''}`}>
                  {gameModeLabels[mode]}
                </h4>
                <p className="text-gray-300 text-sm">{getModeDescription(mode)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}