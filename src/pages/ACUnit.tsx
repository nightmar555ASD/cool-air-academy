
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { components } from '@/data/unitData';
import InteractiveUnit from '@/components/InteractiveUnit';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ACUnit = () => {
  const [unitType, setUnitType] = useState<'split' | 'window' | 'central'>('split');
  
  const outdoorComponents = components.filter(c => c.category === 'outdoor' || c.category === 'both');
  const indoorComponents = components.filter(c => c.category === 'indoor' || c.category === 'both');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">اعرف جهازك</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            استكشف مكونات جهاز التكييف بطريقة تفاعلية. انقر على أي مكون لمعرفة المزيد عن وظيفته، الأعطال الشائعة، ونصائح الصيانة.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>نوع التكييف</CardTitle>
            <CardDescription>اختر نوع جهاز التكييف الذي ترغب في استكشافه</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              <div 
                className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-all ${unitType === 'split' ? 'bg-hvac-blue text-white' : 'bg-white'}`}
                onClick={() => setUnitType('split')}
              >
                <div className="text-center">
                  <img src="/images/split-ac.png" alt="تكييف سبليت" className="mx-auto h-32 object-contain mb-2" />
                  <h3 className="font-medium">تكييف سبليت</h3>
                </div>
              </div>

              <div 
                className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-all ${unitType === 'window' ? 'bg-hvac-blue text-white' : 'bg-white'}`}
                onClick={() => setUnitType('window')}
              >
                <div className="text-center">
                  <img src="/images/window-ac.png" alt="تكييف شباك" className="mx-auto h-32 object-contain mb-2" />
                  <h3 className="font-medium">تكييف شباك</h3>
                </div>
              </div>

              <div 
                className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-all ${unitType === 'central' ? 'bg-hvac-blue text-white' : 'bg-white'}`}
                onClick={() => setUnitType('central')}
              >
                <div className="text-center">
                  <img src="/images/central-ac.png" alt="تكييف مركزي" className="mx-auto h-32 object-contain mb-2" />
                  <h3 className="font-medium">تكييف مركزي</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="indoor" className="mt-8">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="indoor" className="px-6">الوحدة الداخلية</TabsTrigger>
              <TabsTrigger value="outdoor" className="px-6">الوحدة الخارجية</TabsTrigger>
              <TabsTrigger value="full-system" className="px-6">النظام كامل</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="indoor" className="animate-fade-in">
            <InteractiveUnit 
              components={indoorComponents} 
              imageUrl={`/images/${unitType}-indoor.png`}
            />
          </TabsContent>

          <TabsContent value="outdoor" className="animate-fade-in">
            <InteractiveUnit 
              components={outdoorComponents} 
              imageUrl={`/images/${unitType}-outdoor.png`}
            />
          </TabsContent>

          <TabsContent value="full-system" className="animate-fade-in">
            <InteractiveUnit 
              components={components} 
              imageUrl={`/images/${unitType}-full.png`}
            />
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-hvac-gray rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">نظرة عامة على أنظمة التكييف</h2>
          <p className="text-lg mb-4">
            تعمل أجهزة التكييف على مبدأ دورة التبريد التي تتضمن أربع عمليات رئيسية: الضغط، التكثيف، التمدد، والتبخير. 
            تتكون معظم أنظمة التكييف من وحدتين رئيسيتين:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold text-hvac-blue mb-2">الوحدة الخارجية</h3>
              <p>
                تحتوي على الضاغط والمكثف والمروحة. تقوم بضغط وسيط التبريد وطرد الحرارة للخارج.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold text-hvac-blue mb-2">الوحدة الداخلية</h3>
              <p>
                تحتوي على المبخر والفلتر والمروحة. تقوم بامتصاص الحرارة من الهواء داخل الغرفة.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ACUnit;
