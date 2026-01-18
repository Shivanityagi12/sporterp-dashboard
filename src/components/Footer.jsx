 import { useState } from "react";

import {FiSettings, FiSliders, FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-white border-t mt-10">
      <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        {/* Left */}
        <p>© 2021 SportERP. All rights reserved.</p>

        {/* Center */}
        <div className="flex gap-4 text-sm text-gray-500">
  <span className="cursor-pointer underline">Privacy Policy</span>
  <span className="cursor-pointer underline">API</span>
  <span className="cursor-pointer underline">Contact</span>
</div>

      


        {/* Right */}
        <div className="flex items-center gap-4 text-gray-600 relative">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 hover:text-gray-800"
            >
              <img
                src="/flags/us.png"
                alt="US"
                className="w-5 h-4 rounded-sm"
              />
              <span>English (US)</span>
              {open ? <FiChevronDown /> : <FiChevronUp />}
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 bottom-8 bg-white border rounded-md shadow-md w-44">
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/flags/us.png" className="w-5 h-4 rounded-sm" />
                  <span>English (US)</span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/flags/in.png" className="w-5 h-4 rounded-sm" />
                  <span>English (IN)</span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/flags/fr.png" className="w-5 h-4 rounded-sm" />
                  <span>Français</span>
                </div>
              </div>
            )}
          </div>

          

          {/* Settings sliders */}
          <FiSliders className="cursor-pointer hover:text-gray-800" />
          {/* Settings */}
  <FiSettings className="cursor-pointer hover:text-gray-700" />

        </div>
      </div>
    </footer>
  );
}



