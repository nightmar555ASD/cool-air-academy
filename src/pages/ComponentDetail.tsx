import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { components, refrigerationComponents, ComponentType } from '@/data/unitData';
import { videoContent } from '@/data/unitData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';

const ComponentDetail = () => {
  const { componentId } = useParams<{ componentId: string }>();
  const [component, setComponent] = useState<ComponentType | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<any[]>([]);

  useEffect(() => {
    // Find the component in both AC and refrigeration components
    const foundComponent = 
      [...components, ...refrigerationComponents].find(comp => comp.id === componentId) || null;
    
    setComponent(foundComponent);

    // Find related videos
    if (foundComponent && foundComponent.relatedVideos) {
      const videos = videoContent.filter(video => 
        foundComponent.relatedVideos?.includes(video.id)
      );
      setRelatedVideos(videos);
    }
  }, [componentId]);

  if (!component) {
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
      // يمكن إضافة المزيد من الأنواع للمكونات الأخرى هنا
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 p-6 flex items-center justify-center bg-hvac-gray">
                  <img 
                    src={component.imageUrl || '/images/component-placeholder.png'} 
                    alt={component.name}
                    className="max-w-full max-h-80 object-contain"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h1 className="text-3xl font-bold text-hvac-blue mb-2">{component.name}</h1>
                  <p className="text-gray-600 mb-6">{component.description}</p>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">الوظيفة:</h2>
                    <p>{component.function}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-bold text-hvac-red mb-3">الأعطال الشائعة:</h2>
                      <ul className="list-disc list-inside space-y-2">
                        {component.commonIssues.map((issue, index) => (
                          <li key={index}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold text-hvac-green mb-3">نصائح الصيانة:</h2>
                      <ul className="list-disc list-inside space-y-2">
                        {component.maintenanceTips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {relatedVideos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">فيديوهات ذات صلة</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedVideos.map(video => (
                    <Card key={video.id} className="overflow-hidden hover-lift">
                      <div className="aspect-video relative">
                        <img 
                          src={video.thumbnail || '/images/video-thumbnail-placeholder.png'} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-white bg-opacity-20 text-white border-2">
                            <span className="sr-only">Play</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2 line-clamp-1">{video.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button asChild className="w-full">
                          <Link to={`/videos/${video.id}`}>مشاهدة</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 bg-hvac-gray rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">هل تعلم؟</h2>
              <p className="text-lg">
                {component.id === 'compressor' && 'يستهلك الضاغط حوالي 70-80% من إجمالي الطاقة المستخدمة في نظام التكييف.'}
                {component.id === 'condenser' && 'يمكن أن يرتفع ضغط وسيط التبريد داخل المكثف إلى أكثر من 300 PSI في بعض أنظمة التكييف.'}
                {component.id === 'evaporator' && 'يمكن أن تنخفض درجة حرارة سطح المبخر إلى ما دون الصفر، مما يسبب تكون الثلج عليه في حالة وجود خلل في النظام.'}
                {component.id === 'expansion-valve' && 'يمكن لصمام التمدد خفض ضغط سائل التبريد بنسبة تصل إلى 80% في لحظة واحدة.'}
                {component.id === 'thermostat' && 'يمكن للثرموستات الذكي توفير ما يصل إلى 15% من تكاليف التدفئة والتبريد سنوياً.'}
                {component.id === 'filter' && 'يمكن أن يؤدي الفلتر المسدود إلى زيادة استهلاك الطاقة بنسبة تصل إلى 15% وتقليل قدرة التبريد بنسبة تصل إلى 30%.'}
                {!['compressor', 'condenser', 'evaporator', 'expansion-valve', 'thermostat', 'filter'].includes(component.id) && 
                  'الصيانة الدورية لمكونات التكييف يمكن أن تطيل عمر الجهاز بنسبة تصل إلى 40% وتوفر حوالي 30% من تكاليف الطاقة.'}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="types" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getComponentTypes(componentId).map((type, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video relative">
                    <img 
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
              {getComponentTypes(componentId).length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لم يتم إضافة أنواع لهذا المكون بعد.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComponentDetail;
