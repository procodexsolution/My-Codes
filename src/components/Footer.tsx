'use client'

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-gray-800 py-10 px-4 sm:px-6">
      <div className="max-w-[1180px] mx-auto">
        
        {/* === Main Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* === Left Column: Logo + Info === */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="/logo.jpg"
                alt="Amir"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-lg font-bold">Amir</h3>
            </div>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed max-w-md">
              Developer & Trainer - Freelancing, Programming & AI. Top Rated Plus on Upwork with 10+ years experience.
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-7H5v7z" />
                </svg>
                <a href="mailto:learnwithshajeel@gmail.com" className="hover:text-[#fdc700] transition-colors">
                  learnwithshajeel@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lahore, Dubai & Remote</span>
              </div>
            </div>
          </div>

          {/* === Right Side Columns === */}
          <div className="md:col-span-4">
            {/* ✅ Mobile = 4 cols, Tablet+ = 4 cols in 1 row */}
            <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-6 text-xs">
              
              {/* Main Platforms */}
              <div>
                <h4 className="font-semibold mb-2 uppercase tracking-wide">Main Platforms</h4>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">YouTube Channel</a></li>
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">Official Website</a></li>
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">Newsletter</a></li>
                </ul>
              </div>

              {/* Freelance */}
              <div>
                <h4 className="font-semibold mb-2 uppercase tracking-wide">Freelance</h4>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">Upwork</a></li>
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">Fiverr</a></li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h4 className="font-semibold mb-2 uppercase tracking-wide">Community</h4>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">Facebook Group</a></li>
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">WhatsApp Channel</a></li>
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">Skool Community</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-2 uppercase tracking-wide">Contact</h4>
                <ul className="space-y-1 text-gray-400">
                  <li><a href="#" className="hover:text-[#fdc700] transition-colors">WhatsApp</a></li>
                  <li><a href="mailto:learnwithshajeel@gmail.com" className="hover:text-[#fdc700] transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* === Divider === */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* === Bottom Row === */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Socials */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span className="text-xs text-gray-400 whitespace-nowrap">Follow me:</span>
            <div className="flex gap-1.5">
              {[
                { name: 'YouTube', icon: 'Y' },
                { name: 'LinkedIn', icon: 'in' },
                { name: 'Facebook', icon: 'f' },
                { name: 'Instagram', icon: 'ig' },
                { name: 'X', icon: 'X' },
                { name: 'TikTok', icon: 't' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-800 text-[10px] font-bold text-white hover:bg-[#fdc700] hover:text-black transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400">
            © 2025 Amir. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
