
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Book, FileImage } from 'lucide-react';
import { toast } from 'sonner';

const ResourceItem = ({ title, description, icon, downloadUrl }: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  downloadUrl: string 
}) => {
  const handleDownload = () => {
    toast.success(`بدأ تحميل ${title}`);
    // In a real application, this would point to actual files
    window.open(downloadUrl, '_blank');
  };

  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-start">
          <div className="mr-4 p-2 bg-hvac-blue bg-opacity-10 rounded-lg">
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleDownload} variant="outline" className="w-full flex items-center justify-center">
          <Download className="ml-2 h-4 w-4" />
          تحميل
        </Button>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">الموارد التعليمية</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            قم بتحميل موارد تعليمية متنوعة لمساعدتك في فهم أنظمة التبريد والتكييف بشكل أفضل.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">ملفات PDF</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceItem 
              title="دليل أساسيات التكييف والتبريد"
              description="دليل شامل لفهم المبادئ الأساسية في أنظمة التكييف والتبريد."
              icon={<Book className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/hvac-basics-guide.pdf"
            />
            
            <ResourceItem 
              title="مكونات التكييف: دليل مصور"
              description="كتيب مصور يشرح جميع مكونات أجهزة التكييف بالتفاصيل."
              icon={<FileImage className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/ac-components-illustrated.pdf"
            />
            
            <ResourceItem 
              title="دليل تشخيص وإصلاح الأعطال"
              description="دليل عملي للتعرف على الأعطال الشائعة وكيفية إصلاحها."
              icon={<FileText className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/troubleshooting-guide.pdf"
            />
            
            <ResourceItem 
              title="صيانة أنظمة التبريد المنزلية"
              description="دليل شامل لصيانة الثلاجات وأجهزة التبريد المنزلية."
              icon={<Book className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/home-refrigeration-maintenance.pdf"
            />
            
            <ResourceItem 
              title="ملخص الدورة: الصف الأول"
              description="ملخص شامل لمنهج التبريد والتكييف للصف الأول الثانوي الصناعي."
              icon={<FileText className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/first-year-summary.pdf"
            />
            
            <ResourceItem 
              title="ملخص الدورة: الصف الثاني"
              description="ملخص شامل لمنهج التبريد والتكييف للصف الثاني الثانوي الصناعي."
              icon={<FileText className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/second-year-summary.pdf"
            />
            
            <ResourceItem 
              title="ملخص الدورة: الصف الثالث"
              description="ملخص شامل لمنهج التبريد والتكييف للصف الثالث الثانوي الصناعي."
              icon={<FileText className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/third-year-summary.pdf"
            />
            
            <ResourceItem 
              title="كتالوج الأدوات والمعدات"
              description="دليل مرجعي للأدوات والمعدات المستخدمة في مجال التبريد والتكييف."
              icon={<FileImage className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/tools-equipment-catalog.pdf"
            />
            
            <ResourceItem 
              title="المصطلحات الفنية في التبريد والتكييف"
              description="قاموس المصطلحات الفنية المستخدمة في مجال التبريد والتكييف."
              icon={<Book className="h-6 w-6 text-hvac-blue" />}
              downloadUrl="/resources/hvac-terminology.pdf"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">جداول مرجعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceItem 
              title="جدول ضغوط وسيط التبريد"
              description="جدول مرجعي لضغوط مختلف أنواع وسائط التبريد في درجات حرارة مختلفة."
              icon={<FileText className="h-6 w-6 text-hvac-green" />}
              downloadUrl="/resources/refrigerant-pressure-chart.pdf"
            />
            
            <ResourceItem 
              title="جدول تحويل وحدات القياس"
              description="جدول لتحويل مختلف وحدات القياس المستخدمة في مجال التبريد والتكييف."
              icon={<FileText className="h-6 w-6 text-hvac-green" />}
              downloadUrl="/resources/unit-conversion-chart.pdf"
            />
            
            <ResourceItem 
              title="قائمة فحص للصيانة الدورية"
              description="قائمة مرجعية للصيانة الدورية لأنظمة التكييف المختلفة."
              icon={<FileText className="h-6 w-6 text-hvac-green" />}
              downloadUrl="/resources/maintenance-checklist.pdf"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">مخططات تعليمية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceItem 
              title="مخطط دائرة التبريد"
              description="مخطط تفصيلي لدائرة التبريد مع شرح لكل مكون ودوره في العملية."
              icon={<FileImage className="h-6 w-6 text-hvac-red" />}
              downloadUrl="/resources/refrigeration-cycle-diagram.pdf"
            />
            
            <ResourceItem 
              title="مخطط الدائرة الكهربائية للتكييف"
              description="مخطط الدائرة الكهربائية لمختلف أنواع أجهزة التكييف."
              icon={<FileImage className="h-6 w-6 text-hvac-red" />}
              downloadUrl="/resources/electrical-circuit-diagram.pdf"
            />
            
            <ResourceItem 
              title="مخطط تشريحي للضاغط"
              description="مخطط تفصيلي يوضح المكونات الداخلية للضاغط وآلية عمله."
              icon={<FileImage className="h-6 w-6 text-hvac-red" />}
              downloadUrl="/resources/compressor-anatomy.pdf"
            />
          </div>
        </div>

        <div className="bg-hvac-gray rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">نقبل مساهمات وموارد جديدة</h2>
              <p>
                هل لديك مواد تعليمية تود مشاركتها؟ نرحب بمساهمات المعلمين والخبراء لإثراء المحتوى التعليمي.
              </p>
            </div>
            <Button className="bg-hvac-blue hover:bg-hvac-blue/90">
              تواصل معنا
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
