import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg mb-4">Let's connect and create something amazing.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-gray-400 transition-colors"><Github /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Linkedin /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Twitter /></a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Kazi Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}