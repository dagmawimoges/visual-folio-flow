import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.loading('Sending your message...');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.dismiss();
      toast.success('Message sent! Thank you for reaching out.');
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <motion.div
      className="bg-gray-900 text-white pt-28 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" required className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white" />
            <input type="email" placeholder="Your Email" required className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white" />
            <textarea placeholder="Your Message" rows={5} required className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"></textarea>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-white text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300 disabled:bg-gray-500"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send className="ml-2" />}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}