import React from 'react';
import Navbar from '@/components/Navbar';


export default function CharactersPage() {
  return (
    <main className="bg-base-100 min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="relative pt-16 pb-24 flex content-center items-center justify-center h-[60vh]">
        <div 
          className="absolute top-0 w-full h-full bg-center bg-cover" 
          style={{
            backgroundImage: "url('/honkai-banner4.png')",
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
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">ตัวละคร HONKAI STAR RAIL</h1>
                <p className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto">
                  ค้นหาและเรียนรู้เกี่ยวกับตัวละครทั้งหมดในจักรวาล Honkai Star Rail
                </p>
                <div className="mt-8 animate-bounce">
                  <div className="w-10 h-10 mx-auto border-2 border-blue-400 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}