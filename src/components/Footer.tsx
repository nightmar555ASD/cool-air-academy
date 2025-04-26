
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-hvac-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">أكاديمية التبريد والتكييف</h3>
            <p className="text-gray-300">
              منصة تعليمية متخصصة في مجال التبريد والتكييف
              لطلاب المدارس الثانوية الصناعية وكل من يرغب في تعلم أساسيات المجال.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">الرئيسية</Link>
              </li>
              <li>
                <Link to="/ac-unit" className="text-gray-300 hover:text-white transition">اعرف جهازك</Link>
              </li>
              <li>
                <Link to="/components" className="text-gray-300 hover:text-white transition">المكونات</Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-300 hover:text-white transition">الفيديوهات</Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-300 hover:text-white transition">الاختبارات</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <p className="text-gray-300">لديك سؤال أو استفسار؟</p>
            <p className="text-gray-300">اتصل بنا على: info@hvac-academy.com</p>
            <div className="mt-4">
              <button className="bg-hvac-blue text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
                ارسل رسالة
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - أكاديمية التبريد والتكييف</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
