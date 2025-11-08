import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../lib/data';
import { ArrowLeft } from 'lucide-react';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Project() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-lg text-gray-300 hover:text-white">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-gray-900 text-white pt-28 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="mr-2" />
                Back to Projects
            </Link>
        </motion.div>

        <motion.h1 variants={fadeInUp} initial="initial" animate="animate" className="text-4xl md:text-6xl font-bold mb-4">{project.title}</motion.h1>
        <motion.p variants={fadeInUp} initial="initial" animate="animate" className="text-xl text-gray-400 mb-12">{project.category}</motion.p>

        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mb-12 shadow-2xl rounded-lg overflow-hidden">
          <img src={project.img} alt={project.title} className="w-full h-auto object-cover" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {project.details.map(detail => (
                    <div key={detail.label} className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">{detail.label}</h3>
                        <p className="text-lg text-white">{detail.value}</p>
                    </div>
                ))}
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h2 className="text-3xl font-bold mb-4">About the Project</h2>
                <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}