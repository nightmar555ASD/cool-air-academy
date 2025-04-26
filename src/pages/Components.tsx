
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { components, refrigerationComponents, thermostatTypes } from '@/data/unitData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Components = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredACComponents = components.filter(
    component => component.name.includes(searchQuery) || component.description.includes(searchQuery)
  );
  
  const filteredRefComponents = refrigerationComponents.filter(
    component => component.name.includes(searchQuery) || component.description.includes(searchQuery)
  );
  
  const filteredThermostatTypes = thermostatTypes.filter(
    type => type.name.includes(searchQuery) || type.description.includes(searchQuery)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">مكونات أنظمة التكييف والتبريد</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            تعرف على جميع مكونات أنظمة التكييف والتبريد بالتفصيل، وظائفها، والأعطال الشائعة فيها، ونصائح الصيانة.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="ابحث عن مكون..."
              className="pr-10 py-6 text-lg"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="ac" className="mt-8">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="ac">التكييف</TabsTrigger>
              <TabsTrigger value="refrigeration">التبريد</TabsTrigger>
              <TabsTrigger value="thermostats">الثرموستات</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ac" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredACComponents.map((component) => (
                <Card key={component.id} className="component-highlight">
                  <CardHeader>
                    <CardTitle className="text-xl text-hvac-blue">{component.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={component.imageUrl || '/images/component-placeholder.png'} 
                      alt={component.name}
                      className="w-full h-40 object-contain mb-4 rounded"
                    />
                    <Accordion type="single" collapsible>
                      <AccordionItem value="function">
                        <AccordionTrigger>الوظيفة</AccordionTrigger>
                        <AccordionContent>
                          {component.function}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="issues">
                        <AccordionTrigger>الأعطال الشائعة</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-1">
                            {component.commonIssues.map((issue, index) => (
                              <li key={index}>{issue}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="maintenance">
                        <AccordionTrigger>نصائح الصيانة</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-1">
                            {component.maintenanceTips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/component/${component.id}`}>المزيد من التفاصيل</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              {filteredACComponents.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد نتائج تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="refrigeration" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRefComponents.map((component) => (
                <Card key={component.id} className="component-highlight">
                  <CardHeader>
                    <CardTitle className="text-xl text-hvac-blue">{component.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{component.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={component.imageUrl || '/images/component-placeholder.png'} 
                      alt={component.name}
                      className="w-full h-40 object-contain mb-4 rounded"
                    />
                    <Accordion type="single" collapsible>
                      <AccordionItem value="function">
                        <AccordionTrigger>الوظيفة</AccordionTrigger>
                        <AccordionContent>
                          {component.function}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="issues">
                        <AccordionTrigger>الأعطال الشائعة</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-1">
                            {component.commonIssues.map((issue, index) => (
                              <li key={index}>{issue}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="maintenance">
                        <AccordionTrigger>نصائح الصيانة</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-1">
                            {component.maintenanceTips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/component/${component.id}`}>المزيد من التفاصيل</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              {filteredRefComponents.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد نتائج تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="thermostats" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredThermostatTypes.map((type) => (
                <Card key={type.id} className="component-highlight">
                  <CardHeader>
                    <CardTitle className="text-xl text-hvac-blue">{type.name}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={type.imageUrl || '/images/thermostat-placeholder.png'} 
                      alt={type.name}
                      className="w-full h-40 object-contain mb-4 rounded"
                    />
                    <Accordion type="single" collapsible>
                      <AccordionItem value="advantages">
                        <AccordionTrigger>المميزات</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-1">
                            {type.advantages.map((adv, index) => (
                              <li key={index}>{adv}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="disadvantages">
                        <AccordionTrigger>العيوب</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside space-y-1">
                            {type.disadvantages.map((dis, index) => (
                              <li key={index}>{dis}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
              {filteredThermostatTypes.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد نتائج تطابق بحثك.</p>
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

export default Components;

