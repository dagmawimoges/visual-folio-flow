import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold text-white">
            Kazi Portfolio
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'relative text-lg font-medium text-gray-300 hover:text-white transition-colors',
                    isActive && 'text-white'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-white"
                        layoutId="underline"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}