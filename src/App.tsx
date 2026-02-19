import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star, 
  Smartphone, 
  Watch, 
  Gem, 
  Zap, 
  ShieldCheck, 
  ChevronDown,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, ReactNode } from 'react';

const BUSINESS_NAME = "Universal Merchandise";
const PHONE_NUMBER = "+1 905-956-3726";
const WHATSAPP_LINK = "https://wa.me/19059563726";
const ADDRESS = "7205 Goreway Dr, Unit 13, Mississauga, ON L4T 2T9";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Universal+Merchandise+7205+Goreway+Dr+Unit+13+Mississauga";

import heroBg from '@/assets/hero-bg.jpeg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Universal Merchandise Storefront at Westwood Square Mall" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-brand-accent/30">
              <Star size={12} fill="currentColor" />
              Top Rated in Malton
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Universal <br />
              <span className="text-brand-accent italic">Merchandise</span>
            </h1>
            <p className="text-xl text-stone-300 mb-10 leading-relaxed">
              Your one-stop destination for premium jewelry, phone accessories, and expert repairs in Mississauga. Located inside Westwood Square Mall.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 bg-brand-accent text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-accent/10"
              >
                <Phone size={20} />
                Call +1 905-956-3726
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-emerald-600/10"
              >
                <MessageSquare size={20} />
                WhatsApp Us
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-stone-400">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < 4 ? "#d4af37" : "none"} stroke={i < 4 ? "#d4af37" : "currentColor"} />
                ))}
              </div>
              <span><strong>4.8/5</strong> from 166 Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Best Sellers Grid */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Best Sellers & Most Requested</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Quick picks customers come in for — available in-store today at unbeatable prices.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              icon={<Gem className="text-brand-accent" />}
              title="Gold & Silver Jewelry"
              description="Chains, rings, earrings, and full sets for every occasion."
            />
            <ProductCard 
              icon={<Watch className="text-brand-accent" />}
              title="Fashion & Stainless"
              description="Everyday wear, gifting, hoops, nose pins, and cuff links."
            />
            <ProductCard 
              icon={<Smartphone className="text-brand-accent" />}
              title="Cases & Protectors"
              description="Premium protection for all popular phone models."
            />
            <ProductCard 
              icon={<Zap className="text-brand-accent" />}
              title="Chargers & Wireless"
              description="Reliable charging solutions and fast wireless pads."
            />
            <ProductCard 
              icon={<ShieldCheck className="text-brand-accent" />}
              title="Bluetooth Accessories"
              description="High-quality audio and hands-free convenience on the go."
            />
            <ProductCard 
              icon={<Star className="text-brand-accent" />}
              title="Gift Items"
              description="Key chains, small gifts, and unique finds for loved ones."
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-stone-500 mb-6 italic">Looking for something specific?</p>
            <a href={`tel:${PHONE_NUMBER}`} className="text-brand-primary font-bold border-b-2 border-brand-accent hover:text-brand-accent transition-colors">
              Call to check availability or ask for the best deal today
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-serif font-bold mb-8 text-center">Services That Save You Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <ServiceItem title="Jewelry Repairs" description="Quick fixes, resizing, and professional adjustments." />
                <ServiceItem title="Phone Repairs" description="Expert help with common hardware and software issues." />
                <ServiceItem title="Lucky Mobile Activation" description="Get connected fast with new plan activations." />
                <ServiceItem title="Top-ups & Payments" description="RAZA / OYE / BOSS top-ups and bill payment support." />
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-stone-400 mb-6 italic">Fast help, clear pricing, and practical recommendations — no confusion.</p>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-3 bg-brand-accent text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all"
                >
                  <Phone size={20} />
                  Need help right now? Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Trusted by Locals in Mississauga</h2>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-brand-accent">
              <Star fill="currentColor" />
              <span>4.8/5 on Google</span>
              <span className="text-stone-300 text-lg font-normal">(166 reviews)</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewChip text="Great variety in one store" />
            <ReviewChip text="Helpful for top-ups & phone needs" />
            <ReviewChip text="Good pricing for jewelry & accessories" />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-serif font-bold mb-8">Visit Us in Malton</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-stone-600">{ADDRESS}</p>
                    <p className="text-stone-500 text-sm mt-1">Inside Westwood Square Mall</p>
                    <a 
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-accent font-semibold mt-2 hover:underline"
                    >
                      Get Directions <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="text-brand-accent" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-stone-600 max-w-xs">
                      <span>Mon – Fri:</span>
                      <span className="font-medium">9:00 AM – 8:00 PM</span>
                      <span>Sat:</span>
                      <span className="font-medium">10:00 AM – 6:00 PM</span>
                      <span>Sun:</span>
                      <span className="font-medium">12:00 AM – 5:00 PM</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-4 italic">* Hours may vary by source. Please verify on Google Business Profile before visiting.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-200 relative">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <MapPin size={48} className="text-brand-accent mb-4" />
                <p className="font-bold text-lg mb-2">Westwood Square Mall</p>
                <p className="text-stone-500 mb-6">7205 Goreway Dr, Unit 13, Mississauga</p>
                <a 
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>
          
          <div className="space-y-4">
            <FaqItem 
              question="Do you do repairs?" 
              answer="Yes — jewelry and phone repairs are among our most requested services. We handle quick fixes, adjustments, and common phone hardware issues."
              isOpen={openFaq === 0}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <FaqItem 
              question="Can I activate Lucky Mobile or do top-ups here?" 
              answer="Absolutely. We offer Lucky phone plan activation and top-ups for RAZA, OYE, and BOSS. We also support bill payments."
              isOpen={openFaq === 1}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
            <FaqItem 
              question="What do you sell most?" 
              answer="Our best sellers are jewelry (gold, silver, fashion, and stainless) and everyday phone accessories like cases, screen protectors, chargers, and wireless chargers."
              isOpen={openFaq === 2}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-stone-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ServiceItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={20} />
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-stone-400">{description}</p>
      </div>
    </div>
  );
}

function ReviewChip({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100 font-medium text-stone-700">
      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
        <Star size={16} className="text-brand-accent" fill="currentColor" />
      </div>
      {text}
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-stone-100 rounded-xl overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left font-bold hover:bg-stone-50 transition-colors"
      >
        {question}
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 text-stone-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
