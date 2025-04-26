
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const NotFoundState = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">المكون غير موجود</h2>
          <p className="mb-6">عذراً، لم يتم العثور على المكون المطلوب.</p>
          <Button asChild>
            <Link to="/components">العودة إلى قائمة المكونات</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};
