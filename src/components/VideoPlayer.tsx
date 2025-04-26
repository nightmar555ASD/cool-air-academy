
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  description,
  url,
  thumbnail,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden rounded-t-md">
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`${url}?autoplay=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-2 border-white"
                  onClick={() => setIsPlaying(true)}
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-hvac-blue">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      {!isPlaying && (
        <div className="px-4 pb-4">
          <Button
            className="w-full bg-hvac-blue hover:bg-hvac-blue/90"
            onClick={() => setIsPlaying(true)}
          >
            شاهد الآن
          </Button>
        </div>
      )}
    </Card>
  );
};

export default VideoPlayer;
