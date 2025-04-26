
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { components, refrigerationComponents, ComponentType } from '@/data/unitData';
import { videoContent } from '@/data/unitData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';
import { NotFoundState } from '@/components/component-detail/NotFoundState';
import { ComponentTypes } from '@/components/component-detail/ComponentTypes';
import { OverviewTab } from '@/components/component-detail/OverviewTab';

const ComponentDetail = () => {
  const { componentId } = useParams<{ componentId: string }>();
  const [component, setComponent] = useState<ComponentType | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<any[]>([]);

  useEffect(() => {
    const foundComponent = 
      [...components, ...refrigerationComponents].find(comp => comp.id === componentId) || null;
    
    setComponent(foundComponent);

    if (foundComponent && foundComponent.relatedVideos) {
      const videos = videoContent.filter(video => 
        foundComponent.relatedVideos?.includes(video.id)
      );
      setRelatedVideos(videos);
    }
  }, [componentId]);

  if (!component) {
    return <NotFoundState />;
  }

  const getComponentTypes = (id: string) => {
    switch(id) {
      case 'condenser':
        return [
          {
            name: "المكثف الهوائي",
            description: "يستخدم الهواء كوسيط لتبريد غاز التبريد وتحويله إلى سائل",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            features: [
              "مناسب للاستخدام المنزلي",
              "سهل الصيانة",
              "تكلفة منخفضة",
              "يحتاج لتدفق هواء جيد"
            ]
          },
          {
            name: "المكثف المائي",
            description: "يستخدم الماء كوسيط لتبريد غاز التبريد وتحويله إلى سائل",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
            features: [
              "كفاءة تبريد عالية",
              "مناسب للأنظمة الكبيرة",
              "يحتاج لمصدر مياه مستمر",
              "تكلفة تشغيل أعلى"
            ]
          },
          {
            name: "المكثف التبخيري",
            description: "يجمع بين مزايا المكثف الهوائي والمائي",
            image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
            features: [
              "كفاءة عالية في المناطق الحارة",
              "استهلاك مياه أقل من المكثف المائي",
              "مناسب للمناطق الجافة",
              "يحتاج لصيانة دورية"
            ]
          }
        ];
      case 'compressor':
        return [
          {
            name: "الضاغط الترددي",
            description: "يعمل بواسطة حركة المكبس الترددية لضغط غاز التبريد",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            features: [
              "قوي وموثوق",
              "مناسب للوحدات الصغيرة",
              "صيانة بسيطة",
              "صوت تشغيل مرتفع نسبياً"
            ]
          },
          {
            name: "الضاغط الحلزوني",
            description: "يستخدم لولبين حلزونيين متداخلين لضغط غاز التبريد",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
            features: [
              "كفاءة عالية",
              "صوت تشغيل منخفض",
              "عمر تشغيلي طويل",
              "مناسب للوحدات المتوسطة والكبيرة"
            ]
          },
          {
            name: "الضاغط الدوراني",
            description: "يستخدم دوران أسطوانة داخل تجويف لضغط غاز التبريد",
            image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
            features: [
              "حجم صغير",
              "كفاءة جيدة",
              "مناسب للوحدات المنزلية",
              "اهتزاز منخفض"
            ]
          }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/components" className="flex items-center text-hvac-blue hover:underline">
            <ChevronRight className="h-4 w-4 ml-1 transform rotate-180" />
            العودة إلى المكونات
          </Link>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="overview" className="w-1/2">نظرة عامة</TabsTrigger>
            <TabsTrigger value="types" className="w-1/2">الأنواع</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-fade-in">
            <OverviewTab component={component} relatedVideos={relatedVideos} />
          </TabsContent>

          <TabsContent value="types" className="animate-fade-in">
            <ComponentTypes types={getComponentTypes(componentId)} />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComponentDetail;
