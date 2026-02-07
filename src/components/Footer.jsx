import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-10 border-t border-white/10">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-gray-400 text-sm md:text-base font-medium">
          Copyright @ {currentYear}, <span className="text-white font-bold">Cryptoplace</span> - All Rights Reserved.
        </p>
        
        {/* Petit plus : Liens de navigation discrets */}
        <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest mt-2">
          <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer