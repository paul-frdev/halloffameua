import SubscribeForm from '@/components/forms/SubscribeForm';
import { History } from '@/components/landing/History';
import { UpcomingEvents } from '@/components/landing/UpcomingEvents';
import { MainSlider } from '@/components/MainSlider';
import { mainSlides } from '@/constants/sliders';

export default function Home() {

  return (
    <>
      <MainSlider slides={mainSlides} />
      <History />
      <UpcomingEvents />
      <SubscribeForm />
    </>
  );
}
