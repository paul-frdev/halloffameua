import { NewsItem } from '@/components/newsId/NewsItem';
import newsList from "../../../../scripts/media.json";
import { UpcomingEvents } from '@/components/landing/UpcomingEvents';

export default function NewsItemPage({ params: { newsId } }: { params: { newsId: string } }) {

  const filteredNewsItem = newsList.find(item => +item.id === +newsId && {
    id: item.id,
    src: item.src,
    date: item.date,
    title: item.title,
    description: item.description
  })

  return (
    <>
      <NewsItem newsItem={filteredNewsItem} />
      <UpcomingEvents />
    </>
  );
}