
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Video, Award, BookOpen, FileText, LayoutGrid } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-hvac-blue to-blue-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">أكاديمية التبريد والتكييف</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              المنصة التعليمية المتكاملة لطلاب التبريد والتكييف.
              تعلم أساسيات التكييف والتبريد بطريقة تفاعلية وعملية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-hvac-blue hover:bg-gray-100">
                <Link to="/ac-unit">اعرف جهازك</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-hvac-blue">
                <Link to="/videos">شاهد الفيديوهات</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">تعرف على أساسيات التكييف</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="فيديو تعريفي" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="text-center mt-6">
              <p className="text-lg text-gray-600">فيديو تعريفي يشرح أساسيات التبريد والتكييف</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-hvac-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">استكشف منصتنا التعليمية</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-hvac-blue bg-opacity-10 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-hvac-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">اعرف جهازك</h3>
                  <p className="text-gray-600 mb-6">استكشف مكونات التكييف بطريقة تفاعلية. انقر على أي جزء لمعرفة وظيفته وكيفية صيانته.</p>
                  <Button asChild className="mt-auto">
                    <Link to="/ac-unit">استكشاف</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-hvac-green bg-opacity-10 flex items-center justify-center mb-4">
                    <LayoutGrid className="h-8 w-8 text-hvac-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">تعرف على المكونات</h3>
                  <p className="text-gray-600 mb-6">دليل شامل لجميع مكونات أجهزة التكييف والتبريد مع شرح تفصيلي لكل منها.</p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/components">استعراض المكونات</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-hvac-blue bg-opacity-10 flex items-center justify-center mb-4">
                    <Video className="h-8 w-8 text-hvac-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">فيديوهات تعليمية</h3>
                  <p className="text-gray-600 mb-6">شاهد مجموعة متنوعة من الفيديوهات التعليمية التي تشرح مفاهيم التبريد والتكييف.</p>
                  <Button asChild className="mt-auto">
                    <Link to="/videos">مشاهدة الفيديوهات</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-hvac-red bg-opacity-10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-hvac-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">اختبارات تفاعلية</h3>
                  <p className="text-gray-600 mb-6">اختبر معرفتك من خلال اختبارات تفاعلية واحصل على شارات تقدير.</p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/quiz">بدء الاختبار</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-hvac-green bg-opacity-10 flex items-center justify-center mb-4">
                    <Book className="h-8 w-8 text-hvac-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">دليل الثلاجات</h3>
                  <p className="text-gray-600 mb-6">تعرف على مكونات الثلاجات وأنظمة التبريد المختلفة.</p>
                  <Button asChild className="mt-auto">
                    <Link to="/components">استكشاف الثلاجات</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-hvac-blue bg-opacity-10 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-hvac-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">الموارد والكتيبات</h3>
                  <p className="text-gray-600 mb-6">حمّل كتيبات PDF تحتوي على معلومات قيمة حول التبريد والتكييف.</p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/resources">تحميل الموارد</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-hvac-blue to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">جاهز للتعلم؟</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              ابدأ رحلتك التعليمية في عالم التبريد والتكييف الآن واكتسب المعرفة والمهارات اللازمة للنجاح.
            </p>
            <Button size="lg" asChild className="bg-white text-hvac-blue hover:bg-gray-100">
              <Link to="/ac-unit">ابدأ الآن</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
