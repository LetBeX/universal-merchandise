import { motion } from 'motion/react';
import img1 from '@/assets/1st.jpeg';
import img2 from '@/assets/2nd.jpeg';
import img3 from '@/assets/3rd.jpeg';
import img4 from '@/assets/4th.jpeg';
import img5 from '@/assets/5th.jpeg';

const images = [
  { src: img1, alt: "Universal Merchandise Store Interior" },
  { src: img2, alt: "Phone Accessories Display" },
  { src: img3, alt: "Jewelry Collection" },
  { src: img4, alt: "Electronics Shelf" },
  { src: img5, alt: "Customer Service Counter" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Store Gallery</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Take a look inside our store at Westwood Square Mall.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] ${
                index === 0 ? 'md:col-span-2 md:aspect-[2/1]' : 'md:aspect-square'
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
