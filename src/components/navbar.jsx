import { useState } from "react"; 
import './../index.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Overview", href: "#" },
    { name: "About Fork", href: "#" },
    { name: "Buying Options", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <div className="fixed w-full top-0 left-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-lg  py-[15px]">
      <nav className="w-full max-w-[90%] px-6 py-3 flex justify-between items-center"> 
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-2 group cursor-pointer">
  <img
    src="/logo.png"
    alt="Logo"
    className="w-8 h-8 transition-all duration-300 group-hover:opacity-0"
  />
  <img
    src="/logo2.png"
    alt="Logo hover"
    className="w-8 h-8 absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
  />
  <span className="font-lato font-bold text-[24px] leading-[16px] tracking-[0px] align-middle uppercase text-[#8D81AC] group-hover:text-white transition-colors">
    ForkIO
  </span>
</div>

        </a>
        <ul className="hidden md:flex space-x-[48px] text-[#8D81AC] font-[16px] font-montserrat font-bold">
          {links.map((link) => (
            <li key={link.name} className="pt-[9px] pb-[9px]">
              <a href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-[#8D81AC] text-white rounded-[40px] w-[145px] h-[37px] hover:bg-white hover:text-[#8D81AC] transition">
            Buy Now
          </button>
        </ul>
      </nav>
    </div>
  );
}
