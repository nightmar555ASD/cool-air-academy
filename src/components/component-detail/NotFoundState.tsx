
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileSearch, Home, List } from 'lucide-react';

export const NotFoundState = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <FileSearch className="h-24 w-24 text-hvac-blue" />
          </div>
          <h2 className="text-3xl font-bold mb-4">المكون غير موجود</h2>
          <p className="mb-6 text-lg text-gray-600 max-w-md mx-auto">
            عذراً، لم يتم العثور على المكون المطلوب. قد يكون الرابط غير صحيح أو تمت إزالة المكون.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="flex items-center gap-2">
              <Link to="/components">
                <List className="h-5 w-5" />
                العودة إلى قائمة المكونات
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex items-center gap-2">
              <Link to="/">
                <Home className="h-5 w-5" />
                الذهاب إلى الصفحة الرئيسية
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
