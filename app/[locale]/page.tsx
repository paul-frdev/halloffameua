import SubscribeForm from '@/components/forms/SubscribeForm';
import { History } from '@/components/landing/History';
import { MainSlider } from '@/components/landing/MainSlider';
import { UpcomingEvents } from '@/components/landing/UpcomingEvents';

export default function Home() {

  return (
    <>
      <MainSlider />
      <History />
      <UpcomingEvents />
      <SubscribeForm />
    </>
  );
}
