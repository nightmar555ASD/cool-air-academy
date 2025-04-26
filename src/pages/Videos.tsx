
import React, { useState } from 'react';
import { videoContent } from '@/data/unitData';
import VideoPlayer from '@/components/VideoPlayer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter videos by search query
  const filteredVideos = videoContent.filter(
    video => 
      video.title.includes(searchQuery) || 
      video.description.includes(searchQuery)
  );

  // Group videos by category
  const basicVideos = filteredVideos.filter(video => video.category === 'basics');
  const componentVideos = filteredVideos.filter(video => video.category === 'components');
  const maintenanceVideos = filteredVideos.filter(video => video.category === 'maintenance');
  const efficiencyVideos = filteredVideos.filter(video => video.category === 'efficiency');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">الفيديوهات التعليمية</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            شاهد مجموعة متنوعة من الفيديوهات التي تشرح أنظمة التكييف والتبريد، مكوناتها، وكيفية صيانتها.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="ابحث عن فيديو..."
              className="pr-10 py-6 text-lg"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-5">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="basics">الأساسيات</TabsTrigger>
              <TabsTrigger value="components">المكونات</TabsTrigger>
              <TabsTrigger value="maintenance">الصيانة</TabsTrigger>
              <TabsTrigger value="efficiency">كفاءة الطاقة</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map(video => (
                <VideoPlayer
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                  thumbnail={video.thumbnail || '/images/video-thumbnail-placeholder.png'}
                />
              ))}
              {filteredVideos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد نتائج تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="basics" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {basicVideos.map(video => (
                <VideoPlayer
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                  thumbnail={video.thumbnail || '/images/video-thumbnail-placeholder.png'}
                />
              ))}
              {basicVideos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد فيديوهات في هذه الفئة تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="components" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {componentVideos.map(video => (
                <VideoPlayer
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                  thumbnail={video.thumbnail || '/images/video-thumbnail-placeholder.png'}
                />
              ))}
              {componentVideos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد فيديوهات في هذه الفئة تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maintenanceVideos.map(video => (
                <VideoPlayer
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                  thumbnail={video.thumbnail || '/images/video-thumbnail-placeholder.png'}
                />
              ))}
              {maintenanceVideos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد فيديوهات في هذه الفئة تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="efficiency" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {efficiencyVideos.map(video => (
                <VideoPlayer
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                  thumbnail={video.thumbnail || '/images/video-thumbnail-placeholder.png'}
                />
              ))}
              {efficiencyVideos.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-500">لا توجد فيديوهات في هذه الفئة تطابق بحثك.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-hvac-gray rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">هل ترغب في المزيد من المحتوى؟</h2>
          <p className="text-lg mb-6">
            اشترك في قناتنا على يوتيوب للحصول على محتوى تعليمي جديد كل أسبوع حول التكييف والتبريد.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
              اشترك في القناة
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
