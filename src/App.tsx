/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";
import { ArrowRight, Check, ExternalLink, Mail, Menu, MessageSquare, Send, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import meImage from "../Me.png";
import project1 from "../Images/1.png";
import project2 from "../Images/2.png";
import project3 from "../Images/3.png";
import project4 from "../Images/4.png";
import foouxImage from "../fooux.png";

export default function App() {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.add('is-scrolling');
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-gray-950 font-sans selection:bg-[#b7ff00] selection:text-black">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 p-6 lg:p-10 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl font-serif italic text-gray-900 tracking-tight font-medium"
        >
          RAR
        </motion.div>
      </nav>

      <main className="relative z-10 w-full">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <FutureProjectsSection />
        <WhyMeSection />
        <ContactSection />
      </main>
      <Chatbot />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-0 px-6 lg:px-10 bg-[#fbfdf7] min-h-[95vh] flex flex-col items-center justify-between border-b border-gray-100 overflow-hidden">
      {/* Green Background Glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[120vw] md:w-[70vw] h-[60vh] md:h-[80vh] bg-gradient-to-b from-[#b7ff00]/60 via-[#c9ff33]/40 to-transparent blur-[120px] rounded-[100%] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center flex-1">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8 bg-white/80 backdrop-blur-md border border-gray-200 pl-2 pr-4 py-1.5 rounded-full text-xs font-semibold shadow-sm"
        >
           <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm shadow-gray-100/50">
              <div className="w-1.5 h-1.5 bg-[#b7ff00] rounded-full shadow-[0_0_8px_#b7ff00]"></div>
           </div>
           <span className="text-gray-800 tracking-wide uppercase">Become RARE with RAR</span>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center z-10 relative pointer-events-none mb-4 w-full"
        >
          <h1 className="text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium leading-[0.9] tracking-tighter text-gray-900 mx-auto">
            Hi I'm Raja
          </h1>
          <h2 className="text-[16vw] md:text-[11vw] lg:text-[9.5vw] font-serif italic text-gray-900 leading-[0.7] tracking-tighter mt-[-1%] mx-auto block xl:-ml-[3%] mb-2">
            Web Developer
          </h2>
        </motion.div>

        {/* Main Interactive Row (Image + Floating Text) */}
        <div className="relative w-full flex-1 flex flex-col lg:block mt-8 lg:mt-0 min-h-[45vh] md:min-h-[50vh]">
          
{/* Left Side Floating (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-12 absolute left-0 lg:left-[2%] top-[10%] xl:top-[12%] z-30"
          >
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full pl-2 pr-4 py-2 shadow-xl shadow-black/5 border border-white w-max">
              <img src="https://cdn.modrinth.com/data/ZeVD5ZBy/b648f2683cd0bf1e09c784ff814d71ba02180305.gif" alt="Available" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm font-semibold tracking-tight text-gray-800 pr-2">Available for projects now</span>
            </div>
          </motion.div>

          {/* The Actual Image Overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[90%] max-w-[340px] md:max-w-[450px] lg:max-w-[550px] mx-auto z-20 relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 flex justify-center items-end h-[100%] lg:h-[120%]"
          >
             <img
                src={meImage}
                alt="Raja Abdul Rehman"
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', 
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
                }}
              />
          </motion.div>

          {/* Right Side Floating (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-start gap-10 absolute right-0 lg:right-[2%] xl:right-[5%] top-[15%] xl:top-[20%] text-left max-w-[260px] z-30"
          >
            <p className="text-[17px] font-medium text-gray-800 leading-[1.4] text-left border-l-[3px] border-[#b7ff00] pl-4">
              I build clean websites and AI products from Mansehra, Pakistan — at 14.
            </p>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#171717] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:bg-black active:scale-95 shadow-xl w-fit"
            >
              <ArrowRight className="w-5 h-5 opacity-70" /> Hire Me
            </a>
          </motion.div>

        </div>

      </div>

      {/* Bottom Logos / Partners Bar */}
      <div className="w-full mx-auto border-t border-gray-200 mt-auto py-6 lg:py-8 flex items-center justify-start md:justify-center lg:justify-between opacity-60 px-6 gap-10 md:gap-14 overflow-x-auto z-20 whitespace-nowrap bg-[#fbfdf7] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {[
          { name: 'Startups', icon: '✦' },
          { name: 'Agencies', icon: '❂' },
          { name: 'Founders', icon: '◔' },
          { name: 'Brands', icon: '❖' },
          { name: 'Ecommerce', icon: '◖' },
          { name: 'Creators', icon: '✜' }
        ].map((brand) => (
          <div key={brand.name} className="flex items-center gap-2 font-bold text-gray-400 text-lg md:text-xl font-sans tracking-tight hover:text-black transition-colors cursor-pointer shrink-0">
            <span className="text-gray-300 text-2xl drop-shadow-sm">{brand.icon}</span> {brand.name}
          </div>
        ))}
      </div>

      {/* Mobile Only Floating Actions (Under Image) */}
      <div className="lg:hidden w-full px-6 pb-10 flex flex-col items-center gap-6 z-30 bg-[#fbfdf7] relative pt-6 text-center mt-[-5%]">
         <p className="text-[16px] font-medium text-gray-800 leading-snug max-w-sm border-l-4 border-[#b7ff00] pl-4 text-left mx-auto">
           I build clean websites and AI products from Mansehra, Pakistan — at 14.
         </p>
         <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-gray-100">
           <div className="w-3 h-3 rounded-full bg-[#b7ff00] animate-pulse"></div>
           <span className="text-xs font-semibold tracking-tight">Available for projects now</span>
         </div>
         <a
           href="#contact"
           className="w-full max-w-xs flex justify-center items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium transition-transform active:scale-95 shadow-xl"
         >
           <ArrowRight className="w-5 h-5 opacity-70" /> Hire Me
         </a>
      </div>

    </section>
  );
}

// Pricing in two modes: Setup (one-time) and Monthly (subscription)
const setupPlans = [
  {
    name: "Starter Website",
    price: "$50-$150",
    features: ["1 Page Website", "Mobile Ready", "Free Demo Website"],
  },
  {
    name: "Business Website",
    price: "$200-$500",
    features: ["Multi-page Website", "AI Integrations", "Free Demo Website"],
    popular: true,
  },
  {
    name: "3D Website Package",
    price: "$1k-$10k",
    features: ["Immersive 3D Experience", "AI Integrations", "Free Demo Website"],
  },
];

const monthlyPlans = [
  {
    name: "Starter Monthly",
    price: "$197 / month",
    features: [
      "AI chatbot integration",
      "Email & chat support",
      "SEO basics & analytics",
      "Content generation tools",
      "1 monthly website optimization",
    ],
  },
  {
    name: "Pro Monthly",
    price: "$279 / month",
    features: [
      "AI chatbot with advanced intents",
      "Priority support and onboarding",
      "AI-powered marketing automations",
      "Dedicated assistant for your project",
      "Monthly analytics & insights dashboard",
    ],
    popular: true,
  },
];

function ServicesSection() {
  const [mode, setMode] = useState<"setup" | "monthly">("setup");
  const plans = mode === "setup" ? setupPlans : monthlyPlans;
  return (
    <section className="py-32 px-6 lg:px-10 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-4">
              01 / What I Build
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
              Premium <span className="font-serif italic font-normal">Solutions</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            I don't just build websites. I craft digital experiences that convert visitors into customers.
          </p>
        </div>

        {/* Pricing Mode Toggle (simplified) */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-md text-sm font-semibold ${mode === "setup" ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-200'} `}
            onClick={() => setMode("setup")}
          >
            Setup
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-semibold ${mode === "monthly" ? 'bg-black text-white' : 'bg-white text-gray-700 border border-gray-200'} `}
            onClick={() => setMode("monthly")}
          >
            Monthly
          </button>
        </div>
        
        {/* Pricing Cards */}
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-white border transition-all duration-300 ${
                plan.popular ? "border-gray-900 shadow-xl" : "border-gray-200"
              } hover:shadow-[0_0_40px_-10px_rgba(183,255,0,0.4)] hover:border-[#b7ff00] hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-10 bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Requested
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="text-4xl font-serif mb-8 text-gray-900">{ (plan.price as any) }</div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#b7ff00]/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-gray-900" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-xl text-center font-semibold transition-all ${
                  plan.popular
                    ? "bg-black text-[#b7ff00] hover:bg-gray-800"
                    : "bg-gray-50 text-black hover:bg-gray-100"
                }`}
              >
                Let's Build It
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "RAR",
    url: "https://agrest-gandel.vercel.app/",
    img: project1,
  },
  {
    name: "RAR",
    url: "https://beauti-101.vercel.app/",
    img: project2,
  },
  {
    name: "RAR",
    url: "https://alison-spear.vercel.app/",
    img: project3,
  },
  {
    name: "RAR",
    url: "https://bisnar-chase.vercel.app/",
    img: project4,
  },
];

function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-4">
            02 / Selected Works
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            Featured <span className="font-serif italic font-normal">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`block group cursor-pointer ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative rounded-[2rem] overflow-hidden mb-6 bg-gray-100 aspect-[4/3]">
                <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                
                {/* Floating View Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <ExternalLink className="w-5 h-5 text-black" />
                </div>
              </div>
              
              <div className="pl-2 flex items-baseline gap-3">
                <span className="text-xl font-medium text-gray-400 font-serif italic">0{i + 1}</span>
                <h3 className="text-2xl font-semibold mb-1 group-hover:text-gray-600 transition-colors">{project.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureProjectsSection() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-4">
            03 / Future Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">
            Raising funds for <span className="font-serif italic font-normal text-black block mt-2">Fooux</span>
          </h2>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full bg-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#b7ff00] rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="w-full md:w-1/2 relative z-10">
               <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                 <img src={foouxImage} alt="Fooux" className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700 bg-white" />
               </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left relative z-10">
               <span className="bg-[#b7ff00] text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div> Active
               </span>
               <h3 className="flex items-center mb-6 relative w-max -ml-0.5">
                 <span className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">f</span>
                 <span className="relative flex justify-center items-center pb-[10px] mx-[2px] mt-1.5">
                    <div className="absolute bottom-[2px] left-[5%] right-[5%] w-[90%] h-[12px] md:h-[15px] border-b-[4px] md:border-b-[5px] border-white rounded-[50%]"></div>
                    <div className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-full bg-[#0ceb3f] animate-blink mx-[2px]" />
                    <div className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-full bg-[#0ceb3f] animate-blink mx-[2px]" style={{ animationDelay: '100ms' }} />
                 </span>
                 <span className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">ux</span>
               </h3>
               <p className="text-xl md:text-2xl text-gray-300 font-serif italic mb-10 leading-relaxed">
                 "AI tool for a simple person to create a Business Empire."
               </p>
               <a href="https://instagram.com/rar_turk" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg">
                 Let's Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyMeSection() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-black text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#b7ff00] rounded-full blur-[150px] opacity-10 pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#b7ff00] text-xs font-bold uppercase tracking-[0.2em] block mb-6">
              04 / Why Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight mb-8">
              "Most people waste their teenage years. <span className="font-serif italic font-normal text-gray-400">I build products, learn business, and help brands grow online.</span>"
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {[
              { label: "Started Building", value: "< 15" },
              { label: "Projects Built", value: "-" },
              { label: "Based In", value: "Pakistan" },
              { label: "Vision", value: "Global" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-serif mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-10 bg-white relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-8">
          05 / Contact
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6 relative z-10 flex flex-wrap justify-center gap-x-4 items-center">
          <span>Let's Build Something</span> 
          <span className="font-serif italic font-normal text-black relative">
            Serious
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-[30%] bg-[#b7ff00]/40 -z-10 -rotate-2 origin-left" />
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-lg font-medium">
          Need a high-converting website or an AI product? Let's talk business.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md">
          <a
            href="mailto:rarblowup@gmail.com"
            className="group relative flex items-center justify-center gap-3 w-full bg-black text-white px-8 py-5 rounded-2xl font-semibold text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-[#b7ff00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Mail className="w-5 h-5 relative z-10 group-hover:text-black transition-colors" />
            <span className="relative z-10 group-hover:text-black transition-colors">rarblowup@gmail.com</span>
          </a>

          <a
            href="https://instagram.com/rarwithidk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 w-full sm:w-auto items-center justify-center gap-2 bg-gray-50 text-black px-8 py-5 rounded-2xl font-semibold text-lg border border-gray-200 transition-all hover:border-gray-900 hover:bg-gray-100"
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string; isContactAction?: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChatScroll = () => {
    setIsScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: "Hey, I'm Azmuth. I know everything about RAR - services, pricing (discounts too!), why businesses need a website, and why you should choose him. Say 'I am [Your Name]' and I'll help you personally!" }]);
    }
  }, [isOpen, messages.length]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput("");

    setTimeout(() => {
      let botResponse = "";
      let isContactAction = false;
      const lowerInput = userMessage.toLowerCase();

      const intents = [
        // ==================== IDENTITY & BACKGROUND ====================
        {
          patterns: [/\b(who is rar|who is raja|who are you|about you|your story|who is this|introduce yourself)\b/],
          response: "I'm Azmuth, speaking on behalf of Raja Abdul Rehman (RAR)! He is a 14-year-old web developer and AI builder from Mansehra, Pakistan, who started building before turning 15."
        },
        {
          patterns: [/\b(age|how old|when were you born|year born)\b/],
          response: "Raja is 14 years old right now, but he has the skills of a veteran developer!"
        },
        {
          patterns: [/\b(where do you live|where are you from|location|mansehra|pakistan|country)\b/],
          response: "Raja is proudly from Mansehra, Khyber Pakhtunkhwa, Pakistan, but he works with clients globally from all around the world."
        },
        {
          patterns: [/\b(your name|full name|real name)\b/],
          response: "His name is Raja Abdul Rehman, but everyone calls him RAR!"
        },
        {
          patterns: [/\b(what do you do|your profession|what are you)\b/],
          response: "Raja is a full-stack web developer and AI product builder. He builds stunning websites, powerful web applications, and intelligent AI tools."
        },
        {
          patterns: [/\b(how did you start|when did you start coding|how did you learn|from where you learned)\b/],
          response: "Raja started coding at a very young age and self-taught most of his skills. His passion for building things led him to master web development and AI integration all before turning 15!"
        },
        // ==================== WHY CHOOSE RAR / RAJA ====================
        {
          patterns: [/why.*choose.*(you|rar|raja)/i, /why.*should.*i.*(hire|choose|work with)/i, /why.*your.*services/i, /why.*pick.*you/i, /why.*work.*with.*you/i, /why.*better.*than/i, /why.*i.*choose/i, /reason.*hire/i, /benefit.*working/i],
          response: "Great question! Here's why you should choose RAR: 1) Premium quality at competitive prices - you get more value for your money. 2) Fast turnaround without compromising quality - your project delivered quickly. 3) Personal attention - you work directly with the developer, no middleman. 4) Cutting-edge tech skills including AI integration and 3D experiences. 5) Young, hungry, and motivated to prove himself - he treats every project like it's his own. 6) Free demo websites for select clients! 7) Raja CAN give you discounts too - just ask about special offers!"
        },
        {
          patterns: [/\b(what makes you different|unique|special|why are you special)\b/],
          response: "What makes Raja special: He's a 14-year-old with skills that rival industry veterans. He combines fresh creativity with technical excellence. He's not just a developer - he's a partner in your vision. Plus, he offers flexible pricing and discounts for the right clients!"
        },
        {
          patterns: [/\b(are you professional|can you deliver quality|trustworthy|reliable)\b/],
          response: "Absolutely! Despite his young age, Raja has delivered multiple successful projects. His work speaks for itself - check out his portfolio! He's professional, responsive, and committed to delivering top-notch results every time."
        },
        // ==================== WEB DEVELOPMENT BASICS ====================
        {
          patterns: [/\b(what is web development|what is web dev|define web development|what does web developer do)\b/],
          response: "Web development is the process of building and maintaining websites and web applications. It involves coding (HTML, CSS, JavaScript), designing user interfaces, server-side programming, database management, and ensuring websites are fast, secure, and user-friendly. Think of it as building your business's digital home on the internet!"
        },
        {
          patterns: [/\b(what is frontend|front end|front-end)\b/],
          response: "Frontend development is the part of web development that focuses on what users see and interact with - the visual design, layouts, buttons, menus, and animations. It uses languages like HTML, CSS, and JavaScript with frameworks like React to create beautiful, interactive user interfaces."
        },
        {
          patterns: [/\b(what is backend|back end|back-end|server side)\b/],
          response: "Backend development is the invisible magic behind websites - it handles data, user accounts, payments, databases, and server logic. It's what makes websites functional beyond just looks. Raja uses Node.js and other technologies to build powerful backends."
        },
        {
          patterns: [/\b(full stack|fullstack|full-stack)\b/],
          response: "Full-stack development means working on both frontend (what users see) and backend (server/database) of websites. Raja is a full-stack developer - he can build entire websites from scratch, including the design, features, and database!"
        },
        {
          patterns: [/\b(what is html|what does html do)\b/],
          response: "HTML (HyperText Markup Language) is the skeleton of every website. It defines the structure - headings, paragraphs, images, links, buttons, and all content. Without HTML, there would be no website!"
        },
        {
          patterns: [/\b(what is css|style|cascading)\b/],
          response: "CSS (Cascading Style Sheets) is what makes websites beautiful! It controls colors, fonts, layouts, animations, and the overall visual appearance. It's like the paint, decorations, and interior design for your website."
        },
        {
          patterns: [/\b(what is javascript|js|script)\b/],
          response: "JavaScript is the programming language that makes websites interactive. It powers features like form validation, animations, sliders, chatbots, and dynamic content updates. It's what transforms a static page into a dynamic web application!"
        },
        {
          patterns: [/\b(what is react|what is nextjs|vue|angular)\b/],
          response: "React and Next.js are modern JavaScript frameworks/frameworks for building fast, interactive websites. They're like advanced tools that make development faster and websites more powerful. Raja specializes in React and Next.js for building cutting-edge web applications."
        },
        // ==================== WHY BUSINESSES NEED WEBSITES ====================
        {
          patterns: [/\b(why does every business need a website|why business need website|why company need website|why website for business)\b/],
          response: "Every business needs a website because: 1) It's your 24/7 online store - customers can find you anytime. 2) It builds credibility and trust - people research before buying. 3) It reaches more customers beyond your local area. 4) It's cheaper than traditional advertising. 5) It provides customer support and information instantly. 6) Your competitors definitely have one! 7) It enables online sales and bookings. In today's digital world, no business can thrive without an online presence!"
        },
        {
          patterns: [/\b(why online presence matters|why digital presence|why internet presence)\b/],
          response: "Your online presence is your digital reputation! Most customers Google businesses before contacting them. A strong online presence: builds trust, attracts new customers 24/7, competes with bigger companies, and grows your business exponentially. Without it, you're invisible to potential customers searching for services like yours!"
        },
        {
          patterns: [/\b(benefits of website|advantages of having a website|why create website)\b/],
          response: "Key benefits of having a website: 24/7 availability, global reach, cost-effective marketing, increased credibility, direct customer communication, showcase products/services, collect leads, sell products online, build brand identity, compete with larger businesses, and track customer data. It's the best investment for any business!"
        },
        {
          patterns: [/\b(can i sell online|can i make money online|ecommerce benefit|online store benefit)\b/],
          response: "Absolutely! An e-commerce website lets you sell products 24/7 to customers anywhere in the world. Benefits include: lower costs than physical stores, unlimited inventory space, automatic sales, accept payments online, reach global customers, and scale your business anytime. Raja can build you a complete online store!"
        },
        {
          patterns: [/\b(website vs social media|why website over facebook|why not just social media)\b/],
          response: "While social media is great, a website is essential because: you own your content (no algorithm changes), more professional credibility, better SEO/ranking on Google, complete control over branding, direct customer data ownership, and it's a permanent hub. Use social media to drive traffic to your website where you convert visitors into customers!"
        },
        // ==================== PRICING & DISCOUNTS ====================
        {
          patterns: [/\b(price|cost|how much|quote|estimate|budget|cheap|expensive|payment|fee|charges)\b/],
          response: "Raja offers flexible pricing: Starter Website: $50-$150 | Business Website: $200-$500 | 3D Website Package: $1k-$10k | Monthly Plans: Starter at $197/month or Pro at $279/month (includes AI chatbot, priority support, and more). Prices vary based on complexity, features, and timeline. AND YES - Raja CAN give you a discount! Just ask about special offers or discuss your budget. He loves helping great projects come to life!"
        },
        {
          patterns: [/\b(discount|discounts|offer|offers|special price|reduced|cheaper|deal| Deals)\b/],
          response: "Awesome that you asked! Raja offers various discounts: - Early bird discounts for new clients - Special rates for startups and students - Bundle packages for multiple services - Referral discounts - Negotiable pricing based on project scope! Don't be shy - ask Raja directly about discounts at rarblowup@gmail.com. He's always open to creating win-win deals!"
        },
        {
          patterns: [/\b(free demo|demo website|trial|try before buy)\b/],
          response: "Yes! Raja offers FREE demo websites for select clients. It's a great way to see his work quality before committing. Ask him about this opportunity when you reach out!"
        },
        {
          patterns: [/\b(payment plans|installment|monthly payment|pay in parts)\b/],
          response: "Raja offers flexible payment options! You can pay a deposit to start and the rest upon completion, or opt for monthly plans ($197-$279/month) for ongoing support. Discuss your preferred payment structure when you contact him."
        },
        // ==================== SERVICES ====================
        {
          patterns: [/\b(services|what do you do|what can you build|offer|services)\b/],
          response: "Raja builds: 1) Stunning landing pages 2) Business websites 3) E-commerce stores 4) Portfolio sites 5) AI-powered applications 6) 3D interactive websites 7) Web apps and platforms 8) Chatbots and automation 9) SEO optimization 10) Website maintenance. Basically, if you can imagine it, he can build it!"
        },
        {
          patterns: [/\b(what is ai integration|ai chatbot|artificial intelligence|smart features)\b/],
          response: "AI integration means adding intelligent features to your website like: smart chatbots that answer customer questions 24/7, automated responses, personalized recommendations, voice assistants, predictive analytics, and automation of repetitive tasks. Raja specializes in building AI-powered web experiences!"
        },
        {
          patterns: [/\b(3d website|threejs|immersive|interactive|3d experience)\b/],
          response: "Raja creates stunning 3D websites using Three.js! These are immersive experiences where users can interact with 3D elements, explore products in 3D, and enjoy mind-blowing animations. Perfect for brands that want to stand out from the crowd. Packages start at $1k!"
        },
        {
          patterns: [/\b(logo design|branding|identity|brand design)\b/],
          response: "While Raja specializes in web development, he can connect you with talented designers for logos and branding. Alternatively, he can integrate professional brand elements into your website design."
        },
        // ==================== TECHNICAL QUESTIONS ====================
        {
          patterns: [/\b(mobile|responsive|phone|tablet|ipad|mobile friendly)\b/],
          response: "Absolutely! Every website Raja builds is 100% mobile-first and fully responsive. It will look perfect and work flawlessly on iPhones, Android phones, tablets, laptops, and large desktop screens. Mobile responsiveness is non-negotiable in today's world!"
        },
        {
          patterns: [/\b(seo|search engine|google|rank|traffic|search optimization)\b/],
          response: "SEO (Search Engine Optimization) is built into every project! Raja uses: proper semantic HTML, fast load speeds, meta tags, optimized images, mobile-first design, and clean code. This helps your site rank higher on Google and get more organic traffic. Want to be found? Ask about SEO packages!"
        },
        {
          patterns: [/\b(speed|fast|loading|performance|optimization)\b/],
          response: "Speed is a top priority! Raja uses: optimized images, lazy loading, code splitting, caching strategies, and modern frameworks to ensure blazing fast load times. A fast website = better user experience + better Google ranking!"
        },
        {
          patterns: [/\b(secure|security|ssl|https|protection)\b/],
          response: "Security is handled! Raja implements: SSL certificates (HTTPS), secure data handling, protection against common vulnerabilities, and follows security best practices. Your website and user data will be safe and secure."
        },
        {
          patterns: [/\b(ecommerce|shop|store|sell|buy|checkout|stripe|payment gateway|paypal)\b/],
          response: "Looking to sell online? Raja builds fully-featured e-commerce stores with: secure payment gateways (Stripe, PayPal, etc.), shopping carts, inventory management, order processing, customer accounts, and mobile-friendly checkout. Start selling today!"
        },
        {
          patterns: [/\b(domain|host|server|aws|vercel|netlify|dns|domain name)\b/],
          response: "Don't worry about the technical stuff! Raja handles everything: domain registration, hosting setup, deployment on fast servers (Vercel, Netlify, AWS), and DNS configuration. You just focus on your business!"
        },
        {
          patterns: [/\b(maintain|support|after launch|updates|help me later|maintenance)\b/],
          response: "The relationship doesn't end at launch! Raja offers: ongoing maintenance, security updates, content changes, feature additions, performance monitoring, and technical support. Ask about monthly support plans to keep your site running perfectly!"
        },
        {
          patterns: [/\b(backup|data backup|recovery)\b/],
          response: "Yes, Raja implements regular backup strategies for your website data. In case of any issues, your data can be restored quickly. Ask about the backup plan for your specific project!"
        },
        // ==================== TIMELINE & PROCESS ====================
        {
          patterns: [/\b(time|how long|duration|fast|speed|deadline|turnaround|when ready)\b/],
          response: "Project timelines vary: Simple landing page: 3-5 days | Business website: 1-2 weeks | E-commerce store: 2-4 weeks | Custom web app: 4-8 weeks | 3D immersive sites: 4-12 weeks. Exact timeline depends on your specific requirements. Rush orders may be available!"
        },
        {
          patterns: [/\b(process|how does it work|steps|workflow|what happens next)\b/],
          response: "Working with Raja is simple: 1) You contact him with your idea/requirements. 2) He reviews and sends a quote & timeline. 3) You approve and pay deposit. 4) He designs and develops your site. 5) You review and request revisions. 6) Final payment & launch! It's that easy!"
        },
        {
          patterns: [/\b(revision|change|i don't like it|fix|modify|update)\b/],
          response: "Client satisfaction is priority! Revisions are included in the process - Raja refines the design until it matches your exact vision. Just communicate your feedback clearly and he'll make it right!"
        },
        {
          patterns: [/\b(contract|agreement|terms|legal|before start)\b/],
          response: "Yes, Raja provides clear contracts covering: project scope, deliverables, timeline, payment terms, revision limits, and ownership rights. This ensures both parties are protected. Don't worry - it's straightforward and professional!"
        },
        // ==================== PROJECT & EXPERIENCE ====================
        {
          patterns: [/\b(portfolio|projects|work|experience|built|showcase|previous work)\b/],
          response: "Raja has built over 4 major platforms including Fooux (AI tool), Aura Commerce, and many premium client sites. Check out his 'Selected Works' section on this website to see his real projects! Each project showcases different skills."
        },
        {
          patterns: [/\b(fooux|what is fooux|fooux ai)\b/],
          response: "Fooux is Raja's flagship AI tool designed to help everyday people build their own Business Empire. It's an AI-powered platform that simplifies business creation and management. Raja is currently raising funds to scale Fooux globally!"
        },
        {
          patterns: [/\b(aura|what is aura)\b/],
          response: "Aura Commerce is one of Raja's premium e-commerce projects - a fully-featured online store with beautiful design and powerful functionality. It showcases his ability to build complete commercial platforms!"
        },
        {
          patterns: [/\b(clients|customers|testimonials|reviews|feedback|who have you worked with)\b/],
          response: "Raja has worked with various clients globally, from startups to established businesses. Each project is unique and tailored to the client's needs. Contact him to see specific case studies and client references!"
        },
        {
          patterns: [/\b(experience|years of experience|how long)\b/],
          response: "Raja has been coding and building websites for several years, starting at a very young age. Despite being 14, his practical experience and portfolio speak volumes. Quality matters more than age!"
        },
        // ==================== GOALS & VISION ====================
        {
          patterns: [/\b(target|goal|vision|mission|dream|ambition|9999|trillion|change the world)\b/],
          response: "Raja's ultimate goal is to hit $9,999 TRILLION (yes, trillion!) and change the world forever through AI and software. He's building Fooux and other AI products to achieve this massive vision. The sky is not the limit - it's just the beginning!"
        },
        {
          patterns: [/\b(future|plans|roadmap|what's next)\b/],
          response: "Raja's future plans include: scaling Fooux globally, building more AI-powered products, working with international clients, and eventually creating a tech empire. He's just getting started!"
        },
        {
          patterns: [/\b(investor|investment|funding|raise money|venture)\b/],
          response: "Raja is actively looking for investors to scale Fooux and his other AI projects. If you're interested in investing in a young, visionary developer, reach out! Big things are coming!"
        },
        // ==================== SKILLS & TECH ====================
        {
          patterns: [/\b(skills|tech stack|languages|tools|react|tailwind|node|javascript|framework|code)\b/],
          response: "Raja's tech stack: Frontend - React, Next.js, TypeScript, Tailwind CSS, Framer Motion | Backend - Node.js, Express | Database - MongoDB, PostgreSQL | AI - OpenAI integration, custom chatbots | 3D - Three.js | Deployment - Vercel, Netlify, AWS. He's always learning new technologies!"
        },
        {
          patterns: [/\b(3d|animations|motion|animated|gsap|threejs|interactive)\b/],
          response: "Yes! Raja builds immersive 3D experiences using Three.js and creates ultra-smooth animations with Framer Motion and GSAP. His websites don't just look good - they come alive with interactive elements that wow visitors!"
        },
        {
          patterns: [/\b(database|mongodb|postgresql|sql|data storage)\b/],
          response: "Raja works with various databases: MongoDB for flexible document storage, PostgreSQL for structured data, and more. He chooses the best database solution based on your project's specific needs."
        },
        {
          patterns: [/\b(api|rest api|integration|third party|connect)\b/],
          response: "Yes! Raja can integrate with third-party APIs: payment gateways (Stripe, PayPal), social logins (Google, Facebook), mapping (Google Maps), email services, CRMs, and any other service with a public API. Just ask!"
        },
        // ==================== COMMUNICATION & HIRING ====================
        {
          patterns: [/\b(hire|job|contact|email|meeting|talk|start|begin|how to|work with you|available for hire)\b/],
          response: "Ready to start? Contact Raja at rarblowup@gmail.com or reach out on Instagram @rar_turk. Tell him about your project and he'll get back to you with a custom quote. Let's build something amazing together!",
          action: true
        },
        {
          patterns: [/\b(email|email address|contact email|where to email)\b/],
          response: "You can email Raja directly at rarblowup@gmail.com - he usually responds within 24 hours. Also available on Instagram @rar_turk for quick chats!",
          action: true
        },
        {
          patterns: [/\b(instagram|social media|social|instagram|twitter|x|tiktok)\b/],
          response: "Connect with Raja on Instagram: @rar_turk. Follow for updates on his latest projects and behind-the-scenes content!",
          action: true
        },
        {
          patterns: [/\b(whatsapp|phone|call|number|telegram)\b/],
          response: "For quickest response, email Raja at rarblowup@gmail.com or DM on Instagram @rar_turk. He'll share WhatsApp or other contact details once you connect!"
        },
        {
          patterns: [/\b(timezone|available hours|when available|working hours)\b/],
          response: "Raja is based in Pakistan (PKT timezone) but works with global clients. He's flexible with meeting times and usually available most days. Just coordinate with him directly!"
        },
        // ==================== TECHNICAL HELP ====================
        {
          patterns: [/\b(what is wordpress|should i use wordpress|wix|squarespace|sitebuilder)\b/],
          response: "While WordPress, Wix, and Squarespace are good for simple sites, Raja builds custom websites that are faster, more secure, and fully tailored to your needs. Custom sites rank better, look unique, and scale with your business. For a premium, professional result, go custom!"
        },
        {
          patterns: [/\b(hosting|free hosting|cheap hosting|which hosting)\b/],
          response: "Raja recommends premium hosting like Vercel or Netlify for performance and reliability. He handles the hosting setup for you - you don't need to worry about the technical details!"
        },
        {
          patterns: [/\b(domain name|buy domain|register domain|how to get domain)\b/],
          response: "Raja can help you find and register the perfect domain name! He handles everything - you just tell him what you want. Domain prices typically range from $10-50/year depending on the name."
        },
        {
          patterns: [/\b(website maintenance|monthly cost|ongoing cost|how much to maintain)\b/],
          response: "Monthly maintenance typically costs $50-200 depending on updates needed. Alternatively, Raja offers monthly support plans starting at $197/month which includes hosting, updates, and priority support!"
        },
        // ==================== GENERAL QUESTIONS ====================
        {
          patterns: [/\b(can you help me|i need a website|i want a website|build me a website|create website)\b/],
          response: "Absolutely! Raja would love to help you. Just email him at rarblowup@gmail.com or DM on Instagram @rar_turk with details about what you need. He'll get back to you with a custom quote and timeline!",
          action: true
        },
        {
          patterns: [/\b(what can i ask you|what do you know|help me|what questions)\b/],
          response: "You can ask me anything about: Raja and his background, web development basics, why every business needs a website, why choose RAR, pricing and discounts, services offered, timeline and process, technical features (SEO, mobile, security), ongoing support, and more. Try asking!"
        },
        {
          patterns: [/\b(cool|awesome|amazing|impressive|great)\b/],
          response: "Thank you! I aim to please. 😄 Want to see more? Check out Raja's portfolio or ask about starting your own project!"
        },
        // ==================== GREETINGS & PLEASANTRIES ====================
        {
          patterns: [/\b(hi|hello|hey|yo|greetings|wassup|what's up|good morning|good evening|good afternoon)\b/],
          response: "Hello there! I'm Azmuth, your AI assistant. I know everything about Raja, web development, why businesses need websites, pricing, discounts, and much more. What would you like to know?"
        },
        {
          patterns: [/\b(thanks|thank you|thx|appreciate|grateful)\b/],
          response: "You're very welcome! Happy to help. Let me know if there's anything else you'd like to ask - I'm here to answer all your questions about Raja and his services!"
        },
        {
          patterns: [/\b(bye|goodbye|cya|see ya|later|good night)\b/],
          response: "Catch you later! Keep innovating and when you're ready to build your dream website, you know where to find Raja. See you soon!"
        },
        {
          patterns: [/\b(ok|okay|alright|sure|no problem|got it)\b/],
          response: "Great! Let me know if you want to know more about anything - pricing, services, why businesses need websites, or anything else!"
        },
        // ==================== AI & BOT QUESTIONS ====================
        {
          patterns: [/\b(who are you|what are you|what is this|bot|ai|azmuth|are you human)\b/],
          response: "I am Azmuth, the super-smart AI Assistant representing Raja! Think of me as your guide to everything about Raja, web development, and building successful online businesses. I was created to help answer all your questions instantly!"
        },
        {
          patterns: [/\b(are you real|are you alive|can you think)\b/],
          response: "I'm an AI assistant built to help you - think of me as a really smart robot that knows all about Raja's work! I don't sleep, don't get tired, and I'm available 24/7 to answer your questions!"
        },
        {
          patterns: [/\b(how were you created|who made you|built you)\b/],
          response: "I was created by Raja using advanced AI technologies! He built me to be his digital assistant, helping visitors learn about his services, answer questions, and guide them to start their projects."
        }
      ];

      let matched = false;
      let userName = "";

      // Detect if user introduces themselves (e.g., "I am John" or "My name is...")
      const nameMatch = userMessage.match(/(?:i am|my name is|i'm|this is)\s+([a-zA-Z]+)/i);
      if (nameMatch) {
        userName = nameMatch[1];
        botResponse = `Nice to meet you, ${userName}! 👋 I'm Azmuth, your AI assistant. I can help you with:\n\n🔹 Why you should choose RAR for your project\n🔹 Detailed pricing and DISCOUNTS\n🔹 Services offered (websites, AI, 3D, ecommerce)\n🔹 Why every business needs a website\n🔹 Technical questions (SEO, mobile, security)\n🔹 How to get started\n\nWhat would you like to know? Just ask away!`;
        matched = true;
      }

      if (!matched) {
        for (const intent of intents) {
          if (intent.patterns.some(pattern => pattern.test(lowerInput))) {
            botResponse = intent.response;
            if (intent.action) isContactAction = true;
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        botResponse = "Hmm, I'm not entirely sure about that specific detail, but I know everything about Raja's web design, pricing, discounts, why businesses need websites, and AI vision! Try asking me about:\n\n💰 'What are your prices?' or 'Do you give discounts?'\n🌐 'Why should I choose RAR?'\n💻 'What is web development?'\n🚀 'Why do businesses need websites?'\n\nOr just ask 'Who is Raja?' to get started!";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse, isContactAction }]);
    }, 600);
  };

  return (
    <>
      <button
          type="button"
          onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
          style={{ zIndex: 99999, pointerEvents: 'auto' }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-black border-[3px] border-[#0ceb3f] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(12,235,63,0.4)] hover:scale-110 active:scale-95 transition-transform group cursor-pointer relative"
      >
        <svg viewBox="0 0 100 100" className="w-10 h-10 group-hover:rotate-180 transition-transform duration-300 ease-in-out drop-shadow-[0_0_8px_rgba(12,235,63,0.5)] pointer-events-none">
          <circle cx="50" cy="50" r="48" fill="black" />
          <path d="M 23 23 A 38 38 0 0 1 77 23 L 50 50 L 77 77 A 38 38 0 0 1 23 77 L 50 50 Z" fill="#4d8802" />
          <path d="M 19 19 A 38 38 0 0 1 73 19 L 46 46 L 73 73 A 38 38 0 0 1 19 73 L 46 46 Z" fill="#80e600" />
          <path d="M 15 42 A 36 36 0 0 1 42 15" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
          <circle cx="18" cy="55" r="5" fill="white" />
        </svg>
        <span className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
      </button>

      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: 20, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.15, ease: "easeOut" }}
           className="fixed bottom-24 right-6 w-[320px] max-w-[calc(100vw-48px)] bg-[#fdfdfd] border-[3px] border-white rounded-[2rem] z-[99999] shadow-[0_25px_50px_rgba(12,235,63,0.25),0_0_0_4px_#0ceb3f,inset_0_5px_15px_rgba(255,255,255,1)] flex flex-col font-sans overflow-hidden"
        >
          {/* Global Shiny Gloss Overlays */}
          <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-white/90 to-transparent pointer-events-none z-30 mix-blend-overlay" />
          <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 pointer-events-none z-30 mix-blend-overlay" />

          {/* Header (Omnitrix Core Dial) */}
          <div className="bg-gradient-to-b from-black to-[#111] border-b-[5px] border-[#0ceb3f] px-5 py-4 flex items-center justify-between relative shrink-0 z-20 shadow-[0_10px_20px_-10px_rgba(12,235,63,0.5)] m-1 rounded-t-[2.2rem] overflow-hidden">
            {/* Header Glare */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-[#0ceb3f]/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-[#0ceb3f] bg-black shadow-[inset_0_0_10px_#0ceb3f]">
                {/* Omnitrix Hourglass center */}
                <div className="absolute w-[60%] h-[60%] border-t-[4px] border-b-[4px] border-[#0ceb3f] rounded-sm rotate-45 shadow-[0_0_8px_#0ceb3f]" />
                <div className="absolute w-[60%] h-[60%] border-l-[4px] border-r-[4px] border-[#0ceb3f] rounded-sm -rotate-45 shadow-[0_0_8px_#0ceb3f]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#0ceb3f] z-10 shadow-[0_0_8px_#0ceb3f] animate-pulse" />
                {/* Dial glare */}
                <div className="absolute top-0 left-1 w-6 h-3 bg-white/40 rounded-full rotate-[-30deg] pointer-events-none blur-[0.5px]" />
              </div>
              <div className="flex flex-col drop-shadow-md">
                <span className="text-[#0ceb3f] font-black tracking-[0.15em] text-[11px] drop-shadow-[0_0_5px_#0ceb3f]">AZMUTH (AI)</span>
                <span className="text-[#0ceb3f]/80 text-[9px] tracking-widest font-mono">SYSTEM ACTIVE</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} title="Close Chat" type="button" className="text-[#0ceb3f]/80 bg-white/5 border border-[#0ceb3f]/30 rounded-full transition-all p-1.5 relative z-10 hover:bg-[#0ceb3f]/20 hover:scale-110 hover:text-[#0ceb3f]">
               <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area - Shiny White Surface */}
          <div 
             onScroll={handleChatScroll}
             className={`flex-1 min-h-[250px] max-h-[350px] overflow-y-auto p-5 space-y-4 text-sm bg-gradient-to-br from-white via-gray-50 to-[#e8e8e8] font-sans relative z-10 shadow-inner scrollbar-green ${isScrolling ? 'is-scrolling' : ''}`}
          >
             {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
                   <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-[0_5px_15px_rgba(0,0,0,0.08)] border ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-b from-white to-gray-100 text-gray-900 rounded-tr-sm border-white font-semibold' 
                        : 'bg-gradient-to-b from-[#111] to-black text-[#0ceb3f] rounded-tl-sm border border-[#0ceb3f]/50 font-medium tracking-wide shadow-[0_8px_20px_-5px_rgba(12,235,63,0.4)] relative overflow-hidden'
                   }`}>
                     {msg.role === 'bot' && <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />}
                     <span className="relative z-10">{msg.text}</span>
                     {msg.isContactAction && (
                        <a 
                          href="#contact" 
                          onClick={() => setIsOpen(false)}
                          className="mt-4 block w-full py-2.5 px-3 bg-[#0ceb3f]/10 text-[#0ceb3f] text-center rounded-lg border border-[#0ceb3f]/50 hover:bg-[#0ceb3f] hover:text-black transition-colors font-bold tracking-[0.2em] text-xs relative z-10 overflow-hidden group"
                        >
                           <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none group-hover:bg-white/30" />
                           ASK RAR
                        </a>
                     )}
                   </div>
                </div>
             ))}
          </div>

          {/* Input Area - Shiny White Gloss */}
          <div className="p-4 bg-white/90 backdrop-blur-xl border-t border-gray-200 relative z-20 pb-5">
             <div className="flex items-center gap-2 bg-gradient-to-b from-gray-50 to-[#eeeeee] border border-gray-300 rounded-full px-4 py-2 focus-within:border-[#0ceb3f] focus-within:ring-2 focus-within:ring-[#0ceb3f]/30 transition-all shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Input Inner Shine */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/80 pointer-events-none" />
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-gray-900 outline-none placeholder:text-gray-400 text-sm font-semibold relative z-10"
                />
                <button onClick={handleSend} className="text-[#0ceb3f] bg-black hover:scale-105 active:scale-95 transition-all p-2 rounded-full flex items-center justify-center border-2 border-[#0ceb3f] shadow-[0_0_15px_rgba(12,235,63,0.5)] relative z-10">
                   <div className="absolute top-0.5 left-1 w-3 h-1.5 bg-white/40 rounded-full rotate-[-20deg] pointer-events-none blur-[0.5px]" />
                   <Send className="w-4 h-4 ml-0.5" />
                </button>
             </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
