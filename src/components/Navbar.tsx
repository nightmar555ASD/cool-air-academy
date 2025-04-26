
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, BookOpen, Video, Award, FileText, LayoutGrid } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'الرئيسية', path: '/', icon: <Home className="h-4 w-4 ml-2" /> },
    { name: 'اعرف جهازك', path: '/ac-unit', icon: <BookOpen className="h-4 w-4 ml-2" /> },
    { name: 'المكونات', path: '/components', icon: <LayoutGrid className="h-4 w-4 ml-2" /> },
    { name: 'الفيديوهات', path: '/videos', icon: <Video className="h-4 w-4 ml-2" /> },
    { name: 'الاختبارات', path: '/quiz', icon: <Award className="h-4 w-4 ml-2" /> },
    { name: 'الموارد', path: '/resources', icon: <FileText className="h-4 w-4 ml-2" /> },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="font-bold text-2xl text-hvac-blue">
              أكاديمية <span className="text-hvac-green">التبريد والتكييف</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="px-3 py-2 text-hvac-dark rounded-md hover:bg-hvac-gray flex items-center transition-colors duration-200"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-hvac-dark"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-gray-200 animate-fade-in">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="block py-2 px-4 text-hvac-dark hover:bg-hvac-gray rounded flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
