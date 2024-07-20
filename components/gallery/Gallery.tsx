"use client";

import { Image as ImageType } from "@/types";
import { TabList, TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import { FC } from "react";
import { GalleryTab } from './GalleryTab';
import { Image } from '../ui/Image';

interface GalleryProps {
  images: ImageType[];
}
export const Gallery: FC<GalleryProps> = ({ images }) => {

  return (
    <TabGroup as="div" className="flex flex-col-reverse w-full max-w-[800px]">
      <div className="mx-auto mt-6 block w-full max-w-2xl">
        <TabList className="grid grid-cols-3 gap-6 m-auto">
          {images?.map(image => <GalleryTab key={image.id} image={image} />)}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images?.map(image => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full overflow-hidden">
              <Image alt="Image" src={image.src} className="object-cover object-center" />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};