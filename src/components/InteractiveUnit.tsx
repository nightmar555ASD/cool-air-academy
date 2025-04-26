
import React, { useState } from 'react';
import { ComponentType } from '@/data/unitData';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface InteractiveUnitProps {
  components: ComponentType[];
  imageUrl: string;
}

const InteractiveUnit: React.FC<InteractiveUnitProps> = ({ components, imageUrl }) => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);

  const handleSelectComponent = (component: ComponentType) => {
    setSelectedComponent(component);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
      <div className="lg:col-span-2 relative">
        <div className="relative rounded-lg overflow-hidden border shadow-lg">
          <img 
            src={imageUrl || '/images/ac-unit.png'} 
            alt="وحدة تكييف" 
            className="w-full h-auto"
          />
          
          <TooltipProvider>
            {components.map((component) => (
              component.position && (
                <Tooltip key={component.id} delayDuration={300}>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute hover:scale-110 transition-transform bg-hvac-blue bg-opacity-70 hover:bg-opacity-100 rounded-full p-1.5 border-2 border-white cursor-pointer ${
                        selectedComponent?.id === component.id ? 'ring-4 ring-hvac-green animate-pulse' : ''
                      }`}
                      style={{
                        top: component.position.top,
                        left: component.position.left,
                        width: component.position.width,
                        height: component.position.height,
                      }}
                      onClick={() => handleSelectComponent(component)}
                    >
                      <span className="sr-only">{component.name}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white p-2 shadow-lg rounded text-sm">
                    <p>{component.name}</p>
                  </TooltipContent>
                </Tooltip>
              )
            ))}
          </TooltipProvider>
        </div>

        <div className="mt-4 bg-hvac-gray p-4 rounded-md">
          <p className="text-lg font-medium">انقر على المكونات في الصورة لمعرفة المزيد عنها</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {components.map(component => (
              <Button 
                key={component.id}
                variant="outline" 
                className={`text-sm ${selectedComponent?.id === component.id ? 'bg-hvac-blue text-white' : ''}`}
                onClick={() => handleSelectComponent(component)}
              >
                {component.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 animate-fade-in">
        {selectedComponent ? (
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl text-hvac-blue">{selectedComponent.name}</CardTitle>
              <CardDescription>{selectedComponent.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold mb-1">الوظيفة:</h4>
                <p>{selectedComponent.function}</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-1">الأعطال الشائعة:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedComponent.commonIssues.map((issue, index) => (
                    <li key={index} className="text-hvac-red">{issue}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-1">نصائح الصيانة:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedComponent.maintenanceTips.map((tip, index) => (
                    <li key={index} className="text-hvac-green">{tip}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => setSelectedComponent(null)}>
                إغلاق
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="h-full flex items-center justify-center">
            <CardContent className="text-center p-8">
              <h3 className="text-xl font-bold mb-4">تعرّف على جهاز التكييف</h3>
              <p className="text-muted-foreground">
                انقر على أحد المكونات في الصورة أو اختر من القائمة أدناه لعرض المعلومات التفصيلية.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InteractiveUnit;
