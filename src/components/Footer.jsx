import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-10 border-t border-white/10 px-4 md:px-[10%]">
      <div className="flex flex-col items-center justify-center gap-3 md:gap-2">
        <p className="text-gray-400 text-xs md:text-sm lg:text-base font-medium text-center">
          Copyright @ {currentYear}, <span className="text-white font-bold">Cryptoplace</span> - All Rights Reserved.
        </p>
        
        {/* Petit plus : Liens de navigation discrets */}
        <div className="flex flex-wrap gap-3 md:gap-6 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-2 justify-center">
          <a href="#" className="hover:text-brand-purple transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer