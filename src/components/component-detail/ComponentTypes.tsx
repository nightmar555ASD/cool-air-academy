
import { Card, CardContent } from '@/components/ui/card';

interface ComponentType {
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface ComponentTypesProps {
  types: ComponentType[];
}

export const ComponentTypes = ({ types }: ComponentTypesProps) => {
  if (types.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-lg text-gray-500">لم يتم إضافة أنواع لهذا المكون بعد.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {types.map((type, index) => (
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
    </div>
  );
};
