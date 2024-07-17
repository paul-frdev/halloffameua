import { UpcomingEvents } from '@/components/landing/UpcomingEvents';
import { TestimonialsList } from '@/components/testimonials/TestimonialsList';
import testimonials from '../../../scripts/testimonials.json'


export default function TestimonialsPage() {

  return (
    <>
      <TestimonialsList testimonials={testimonials} />
      <UpcomingEvents />
    </>
  );
}