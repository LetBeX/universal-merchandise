import { MapPin, Phone, Mail, Star } from 'lucide-react';

const BUSINESS_NAME = "Universal Merchandise";
const PHONE_NUMBER = "+1 905-956-3726";
const ADDRESS = "7205 Goreway Dr, Unit 13, Mississauga, ON L4T 2T9";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Universal+Merchandise+7205+Goreway+Dr+Unit+13+Mississauga";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              Universal <span className="text-brand-accent italic">Merchandise</span>
            </h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Your trusted local destination for premium jewelry, professional repairs, and mobile accessories in Malton.
            </p>
            <div className="flex items-center gap-2 text-brand-accent">
              <Star size={16} fill="currentColor" />
              <span className="font-bold">4.8/5 on Google Reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#products" className="hover:text-brand-accent transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
              <li><a href="#location" className="hover:text-brand-accent transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-stone-400">
              <li>
                 <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} className="text-brand-accent" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                  <MapPin size={18} className="text-brand-accent mt-1" />
                  <span>{ADDRESS}</span>
                </a>
              </li>
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-lg mb-6">Business Hours</h4>
            <ul className="space-y-2 text-stone-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
               <li className="flex justify-between">
                <span>Sat</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
               <li className="flex justify-between">
                <span>Sun</span>
                <span className="text-white">12:00 PM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
