// app/components/digital-marketing-page.tsx
"use client";

import { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

/* ================= TYPES ================= */
interface Service {
  title: string;
  desc: string;
  best: string;
  details: string[];
  icon?: string;
}

interface StackItem {
  title: string;
  description: string;
  content: Service;
}

/* ================= DATA with Icons ================= */
const services: Service[] = [
  {
    title: "Influencer Marketing",
    desc: "Connect your brand with trusted creators to build credibility, reach new audiences, and drive conversions.",
    best: "D2C brands, product launches, lifestyle brands",
    icon: "✨",
    details: [
      "Influencer discovery across Instagram, YouTube, LinkedIn",
      "End-to-end campaign management and execution",
      "Content planning and creative direction",
      "UGC (User Generated Content) production",
      "Performance tracking and ROI optimization",
    ],
  },
  {
    title: "AI Marketing",
    desc: "Leverage AI to automate campaigns, optimize targeting, and maximize performance in real-time.",
    best: "E-commerce, SaaS, scaling businesses",
    icon: "🤖",
    details: [
      "AI-driven audience targeting and segmentation",
      "Campaign automation and optimization",
      "Predictive analytics for better decisions",
      "AI-generated creatives and ad copies",
      "Performance monitoring and scaling",
    ],
  },
  {
    title: "AI Model Generation",
    desc: "Create hyper-realistic AI models for product visuals without the cost of traditional shoots.",
    best: "Fashion, beauty, e-commerce brands",
    icon: "🎨",
    details: [
      "Custom AI model creation (age, ethnicity, style)",
      "Product catalogue-ready images",
      "Bulk image generation for scaling",
      "Consistent branding across visuals",
      "Faster turnaround vs traditional shoots",
    ],
  },
  {
    title: "Motion Posters",
    desc: "Cinematic animated posters designed to capture attention and increase engagement.",
    best: "Films, events, product launches",
    icon: "🎬",
    details: [
      "High-quality motion graphics and animation",
      "Social media optimized formats",
      "Teaser and promotional visuals",
      "Visual storytelling for campaigns",
      "Platform-specific adaptations",
    ],
  },
  {
    title: "Anime & Animation",
    desc: "Custom anime-style visuals and animations for engaging storytelling and branding.",
    best: "Gaming, youth-focused brands, startups",
    icon: "⚡",
    details: [
      "Character design and development",
      "2D/3D animation production",
      "Explainer and storytelling videos",
      "Branded animation campaigns",
      "Creative direction and scripting",
    ],
  },
  {
    title: "Spot Advertising",
    desc: "Short, high-impact ads designed to grab attention and drive quick conversions.",
    best: "Product launches, offers, events",
    icon: "🎯",
    details: [
      "6–30 second ad creatives",
      "High-conversion social media ads",
      "A/B testing for optimization",
      "Platform-specific ad variations",
      "Performance tracking and iteration",
    ],
  },
  {
    title: "YouTube Ads (Non-Skip)",
    desc: "Guaranteed visibility ads that deliver strong brand recall through storytelling.",
    best: "Brand awareness, premium products",
    icon: "▶️",
    details: [
      "Non-skippable ad formats",
      "Audience targeting and segmentation",
      "Creative storytelling approach",
      "Ad performance analytics",
      "Campaign optimization strategies",
    ],
  },
  {
    title: "Brand Awareness Campaigns",
    desc: "Multi-channel campaigns to build brand recognition, trust, and authority.",
    best: "Startups, rebranding, new markets",
    icon: "🌟",
    details: [
      "Brand positioning and messaging",
      "Cross-platform campaign execution",
      "Creative and content strategy",
      "Audience targeting and reach expansion",
      "Performance tracking and reporting",
    ],
  },
  {
    title: "SEO Content Writing",
    desc: "Content that ranks on search engines and converts visitors into customers.",
    best: "Websites, blogs, e-commerce",
    icon: "🔍",
    details: [
      "SEO blog writing and articles",
      "Website and landing page copy",
      "Keyword research and optimization",
      "Product descriptions and content",
      "Content strategy planning",
    ],
  },
  {
    title: "Wikipedia Writing",
    desc: "Professional Wikipedia page creation with proper research and compliance.",
    best: "Public figures, brands, organizations",
    icon: "📚",
    details: [
      "In-depth research and sourcing",
      "Wikipedia-compliant content writing",
      "Page creation and publishing",
      "Content editing and updates",
      "Approval process guidance",
    ],
  },
  {
    title: "Facebook Marketplace Marketing",
    desc: "Optimize product listings to drive direct leads and sales from marketplace.",
    best: "Local businesses, e-commerce brands",
    icon: "🛒",
    details: [
      "Optimized product listings",
      "SEO-driven descriptions",
      "Lead generation strategies",
      "Audience targeting",
      "Conversion optimization",
    ],
  },
  {
    title: "Artist Promotion",
    desc: "Promote music across streaming and social platforms to increase visibility.",
    best: "Independent artists, music labels",
    icon: "🎵",
    details: [
      "Playlist pitching and placements",
      "Social media promotions",
      "PR and outreach campaigns",
      "Audience targeting strategies",
      "Growth tracking and analytics",
    ],
  },
  {
    title: "Audio / Video Promotion",
    desc: "Boost reach and engagement for audio and video content across platforms.",
    best: "Music creators, video creators",
    icon: "🎧",
    details: [
      "Streaming platform promotions",
      "YouTube marketing strategies",
      "Cross-platform distribution",
      "Audience targeting",
      "Performance analytics",
    ],
  },
  {
    title: "Music Revenue Generation",
    desc: "Monetize your music across global streaming platforms efficiently.",
    best: "Artists, music producers",
    icon: "💸",
    details: [
      "Distribution to Spotify, Apple Music, etc.",
      "Royalty management and tracking",
      "Monetization strategies",
      "Content ID setup",
      "Revenue optimization",
    ],
  },
  {
    title: "Music Video Production",
    desc: "End-to-end production of high-quality music videos.",
    best: "Artists, labels",
    icon: "🎥",
    details: [
      "Concept development and scripting",
      "Professional video shooting",
      "Editing and post-production",
      "Creative direction",
      "Distribution-ready output",
    ],
  },
  {
    title: "Product Photography",
    desc: "High-quality visuals designed to boost product appeal and conversions.",
    best: "E-commerce, brands",
    icon: "📸",
    details: [
      "Studio product shoots",
      "High-end retouching",
      "Catalogue-ready images",
      "Lighting and composition setup",
      "Multiple angle shots",
    ],
  },
  {
    title: "Beauty Product Shoots",
    desc: "Premium visuals that highlight product aesthetics and quality.",
    best: "Beauty, skincare brands",
    icon: "💄",
    details: [
      "Macro and detail shots",
      "Luxury styling and setup",
      "Creative compositions",
      "High-end visual storytelling",
      "Brand-focused aesthetics",
    ],
  },
  {
    title: "Model Product Shoots",
    desc: "Lifestyle-based shoots using models to increase engagement and trust.",
    best: "Fashion, apparel brands",
    icon: "👗",
    details: [
      "Model casting and selection",
      "Styling and wardrobe planning",
      "Professional shoot execution",
      "Brand-aligned visuals",
      "Campaign-ready assets",
    ],
  },
  {
    title: "Brand Face Shoots",
    desc: "Create a strong brand identity with a recognizable face.",
    best: "Personal brands, companies",
    icon: "👤",
    details: [
      "Face selection and casting",
      "Brand alignment strategy",
      "Campaign visuals creation",
      "Consistency across marketing",
      "Identity development",
    ],
  },
  {
    title: "Regional Marketing",
    desc: "Localized campaigns tailored to different regions and cultures.",
    best: "Pan-India brands, local businesses",
    icon: "🌍",
    details: [
      "Regional language adaptations",
      "Localized content creation",
      "Cultural targeting strategies",
      "Regional ad campaigns",
      "Market-specific optimization",
    ],
  },
];

/* ================= DECORATIVE BACKGROUND ================= */
const DecorativeBackground = memo(() => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Gradient orbs */}
    <motion.div
      className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.2, 0.4],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Grid pattern overlay */}
    <div 
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    />
  </div>
));
DecorativeBackground.displayName = 'DecorativeBackground';

/* ================= SCROLL STACK CARD ================= */
const ScrollStackCard = memo(({
  item,
  index,
  total,
  onClick,
}: {
  item: { title: string; description: string; icon?: string };
  index: number;
  total: number;
  onClick: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for scale/opacity
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);
  const scale = useSpring(scaleRaw, { stiffness: 100, damping: 20, restDelta: 0.001 });
  const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 20, restDelta: 0.001 });

  // Dynamic positioning for stacking effect
  const topValue = `max(8vh, calc(22vh - ${index * 20}px))`;
  
  return (
    <motion.div
      ref={cardRef}
      style={{
        position: "sticky",
        top: topValue,
        scale,
        opacity,
        zIndex: total - index,
        marginTop: index === 0 ? 0 : "2px",
      }}
      className="w-full max-w-3xl mx-auto group"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${item.title}`}
    >
      <motion.div
        className="relative p-8 rounded-3xl border border-gray-200 
                   bg-white shadow-sm cursor-pointer
                   transition-all duration-300 ease-out
                   hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100
                   focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400/0 via-indigo-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Icon badge */}
        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full 
                        bg-gradient-to-br from-indigo-500 to-purple-600 
                        flex items-center justify-center text-lg shadow-lg shadow-indigo-500/25
                        group-hover:scale-110 transition-transform duration-300">
          {item.icon || "✨"}
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-4 mb-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 
                          bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-amber-400 
                          transition-all duration-300">
              {item.title}
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            {item.description}
          </p>
          
          {/* Hover indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm text-indigo-500/80 
                          opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span>Explore service</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Subtle border gradient */}
        <div className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none">
          <div className="w-full h-full rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
});
ScrollStackCard.displayName = 'ScrollStackCard';

/* ================= SCROLL STACK CONTAINER ================= */
function ScrollStack({
  items,
  onCardClick,
}: {
  items: StackItem[];
  onCardClick: (service: Service) => void;
}) {
  return (
    <div className="relative mt-16 pb-32">
      {items.map((item, index) => (
        <ScrollStackCard
          key={item.title}
          item={item}
          index={index}
          total={items.length}
          onClick={() => onCardClick(item.content)}
        />
      ))}
      {/* Spacer for scroll completion */}
      <div className="h-screen" />
    </div>
  );
}

/* ================= SERVICE DRAWER ================= */
function ServiceDrawer({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  // Lock body scroll when drawer is open
  useState(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  });

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-[100] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-white/95 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            className="relative w-full md:w-[55vw] lg:w-[48vw] xl:w-[42vw] 
                       bg-gradient-to-b from-gray-900 to-black 
                       border-l border-gray-100 overflow-y-auto
                       shadow-2xl shadow-black/50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Decorative header gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />
            
            <div className="p-8 pt-24 pb-16">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 group flex items-center gap-2 
                           text-gray-400 hover:text-white 
                           bg-white/5 hover:bg-white/10 
                           border border-gray-200 rounded-xl px-4 py-2 
                           transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Close details panel"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm font-medium">Close</span>
              </motion.button>

              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 
                                flex items-center justify-center text-2xl shadow-lg shadow-yellow-500/30">
                  {service.icon || "✨"}
                </div>
                <h2 id="drawer-title" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h2>
              </div>
              
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">{service.desc}</p>

              {/* Best For Badge */}
              <motion.div 
                className="mb-10 p-5 border border-yellow-400/30 rounded-2xl 
                           bg-gradient-to-r from-yellow-400/10 to-amber-500/5
                           backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">🎯</span>
                  <h3 className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
                    Best For
                  </h3>
                </div>
                <p className="text-yellow-100/90 font-medium">{service.best}</p>
              </motion.div>

              {/* What's Included */}
              <motion.section 
                className="mb-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-yellow-400 rounded-full" />
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      className="group p-4 border border-gray-100 rounded-xl 
                                 bg-gray-50 hover:bg-indigo-50 hover:border-indigo-200
                                 transition-all duration-200 cursor-default"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.03 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-0.5">•</span>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          {detail}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Benefits Grid */}
              <motion.section 
                className="mb-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-yellow-400 rounded-full" />
                  What You Get
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: "🚀", text: "Faster Growth" },
                    { icon: "📈", text: "More Leads" },
                    { icon: "💰", text: "Higher ROI" },
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="p-4 border border-gray-100 rounded-xl bg-white 
                                 text-center hover:border-yellow-400/40 hover:bg-yellow-400/5
                                 transition-all duration-200"
                      whileHover={{ y: -2 }}
                    >
                      <div className="text-2xl mb-2">{benefit.icon}</div>
                      <div className="text-xs font-medium text-gray-600">{benefit.text}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.section 
                className="text-center pt-8 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Ready to transform your brand? Get a custom strategy tailored to your goals.
                </p>
                <motion.button
                  className="group relative px-8 py-4 rounded-full font-semibold 
                             bg-gradient-to-r from-yellow-400 to-amber-500 text-black
                             hover:from-yellow-300 hover:to-amber-400
                             shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40
                             transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Add your consultation logic here
                    console.log("Consultation requested for:", service.title);
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] 
                                  bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </motion.button>
                <p className="mt-4 text-xs text-gray-400">
                  No commitment • Response within 24 hours
                </p>
              </motion.section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================= MAIN PAGE COMPONENT ================= */
export default function DigitalMarketingPage() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div className="relative bg-white text-gray-900 min-h-screen px-4 sm:px-6 py-16 sm:py-24 overflow-x-hidden">
      {/* Background decorations */}
      <DecorativeBackground />
      
      {/* Hero Section */}
      <motion.header 
        className="text-center mb-16 sm:mb-24 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-indigo-50 border border-indigo-200 mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-sm text-gray-600">20+ Premium Services</span>
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 
                           bg-clip-text text-transparent">
            Our Services
          </span>
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore our comprehensive suite of digital marketing solutions 
          designed to scale your brand, engage audiences, and drive measurable growth.
        </p>
        
        {/* Scroll indicator */}
        <motion.div 
          className="mt-12 flex flex-col items-center gap-2 text-gray-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.header>

      {/* Services Scroll Stack */}
      <ScrollStack
        items={services.map((s) => ({
          title: s.title,
          description: s.desc,
          icon: s.icon,
          content: s,
        }))}
        onCardClick={setActiveService}
      />

      {/* Service Detail Drawer */}
      <ServiceDrawer 
        service={activeService} 
        onClose={() => setActiveService(null)} 
      />

      {/* Add keyframes for shine animation */}
      <style jsx global>{`
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}