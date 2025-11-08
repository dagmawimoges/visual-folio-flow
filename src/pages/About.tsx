import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { testimonials, awards } from '../lib/data';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <motion.div 
      className="bg-gray-900 text-white pt-28 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-300">I'm a passionate creator at the intersection of design and technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mb-20">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="md:col-span-2">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0379c44d-5490-4d3b-acf9-4847a4fc7674/about-profile-9zcm9pv-1762603498236.webp" 
              alt="Profile" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
            />
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-4">Jelani Adebayo</h2>
            <p className="text-gray-300 mb-6 text-lg">
              As a software engineer with a deep-rooted passion for design, I specialize in building beautiful, functional, and user-centric digital experiences. My work is driven by a desire to solve complex problems with elegant solutions. I thrive on bringing ideas to life, from the initial concept to the final polished product.
            </p>
            <a 
              href="/placeholder-resume.pdf" 
              download 
              className="inline-flex items-center bg-white text-black font-bold py-3 px-6 rounded-full text-md hover:bg-gray-200 transition-colors duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </motion.div>
        </div>

        <TestimonialsSection />
        <AwardsSection />
      </div>
    </motion.div>
  );
}

function TestimonialsSection() {
  return (
    <motion.section variants={fadeInUp} initial="initial" animate="animate" className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
            <div className="text-right">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function AwardsSection() {
  return (
    <motion.section variants={fadeInUp} initial="initial" animate="animate">
      <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
      <div className="max-w-2xl mx-auto">
        {awards.map((award, i) => (
          <div key={i} className="flex justify-between items-center border-b border-gray-700 py-4">
            <span className="font-bold text-lg">{award.title}</span>
            <span className="text-gray-400">{award.year}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}