'use client';

import { Carousel, CarouselItem } from '@/components/ui/carousel';

export default function CarouselPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">轮播组件</h1>
          <p className="text-gray-600 mb-6">轮播组件用于展示一系列图片或内容，支持自动播放和手动控制。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本轮播</h2>
          <div className="w-full h-64">
            <Carousel>
              <CarouselItem className="h-full bg-red-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 1</h3>
              </CarouselItem>
              <CarouselItem className="h-full bg-blue-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 2</h3>
              </CarouselItem>
              <CarouselItem className="h-full bg-green-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 3</h3>
              </CarouselItem>
            </Carousel>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">自动轮播</h2>
          <div className="w-full h-64">
            <Carousel autoplay interval={2000} infinite>
              <CarouselItem className="h-full bg-orange-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 1</h3>
              </CarouselItem>
              <CarouselItem className="h-full bg-teal-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 2</h3>
              </CarouselItem>
              <CarouselItem className="h-full bg-indigo-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 3</h3>
              </CarouselItem>
            </Carousel>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">图片轮播</h2>
          <div className="w-full h-80">
            <Carousel autoplay interval={3000} infinite>
              <CarouselItem className="h-full">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20nature%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9" 
                  alt="Nature" 
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20city%20skyline%20at%20night&image_size=landscape_16_9" 
                  alt="City" 
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peaceful%20beach%20with%20palm%20trees&image_size=landscape_16_9" 
                  alt="Beach" 
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            </Carousel>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">多卡片轮播（同时展示3个）</h2>
          <div className="w-full h-80">
            <Carousel autoplay interval={3000} infinite itemsToShow={3}>
              <CarouselItem className="h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-64 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">卡片 1</h3>
                  <p className="text-gray-600 text-center">这是第一张卡片的内容</p>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-64 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">卡片 2</h3>
                  <p className="text-gray-600 text-center">这是第二张卡片的内容</p>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-64 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">卡片 3</h3>
                  <p className="text-gray-600 text-center">这是第三张卡片的内容</p>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-64 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">卡片 4</h3>
                  <p className="text-gray-600 text-center">这是第四张卡片的内容</p>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-64 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">卡片 5</h3>
                  <p className="text-gray-600 text-center">这是第五张卡片的内容</p>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-64 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">卡片 6</h3>
                  <p className="text-gray-600 text-center">这是第六张卡片的内容</p>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">上下滚动轮播</h2>
          <div className="w-full h-80">
            <Carousel direction="vertical" autoplay interval={3000} infinite>
              <CarouselItem className="h-full bg-red-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 1</h3>
              </CarouselItem>
              <CarouselItem className="h-full bg-blue-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 2</h3>
              </CarouselItem>
              <CarouselItem className="h-full bg-green-100 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Slide 3</h3>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
