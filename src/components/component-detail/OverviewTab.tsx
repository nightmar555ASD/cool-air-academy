
import { ComponentType } from '@/data/unitData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface OverviewTabProps {
  component: ComponentType;
  relatedVideos: any[];
}

export const OverviewTab = ({ component, relatedVideos }: OverviewTabProps) => {
  return (
    <div className="space-y-12">
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

      <div className="bg-hvac-gray rounded-lg p-6">
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
    </div>
  );
};
