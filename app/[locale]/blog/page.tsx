import { NewsList } from '@/components/blog/NewsList';
import newsList from "../../../scripts/media.json";
import { UpcomingEvents } from '@/components/landing/UpcomingEvents';

export default function NewsPage() {

  return (
    <>
      <NewsList news={newsList} />
      <UpcomingEvents />
    </>
  );
}