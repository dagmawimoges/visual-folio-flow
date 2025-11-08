import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../lib/data';
import { ArrowRight } from 'lucide-react';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <HeroSection />
      <ProjectGallery />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/0379c44d-5490-4d3b-acf9-4847a4fc7674/hero-background-bzbpz15-1762603440630.webp)' }}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <motion.div variants={stagger} className="relative z-20 px-4">
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Creative Vision, Digital Precision</motion.h1>
        <motion.p variants={fadeInUp} className="text-lg md:text-xl max-w-3xl mx-auto mb-8">An African software engineer transforming ideas into stunning digital experiences.</motion.p>
        <motion.div variants={fadeInUp}>
          <Link to="/about" className="inline-flex items-center bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
            About Me <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectGallery() {
  return (
    <section className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="bg-gray-800 rounded-lg overflow-hidden group">
              <Link to={`/project/${project.id}`}>
                <div className="relative h-60">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">View Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}