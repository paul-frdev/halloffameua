import newsList from "../../../../scripts/media.json";
import { UpcomingEvents } from '@/components/landing/UpcomingEvents';
import { NewsItem } from '@/components/newsId/NewsItem';

export default function NewsItemPage({ params: { newsId } }: { params: { newsId: string } }) {

  const filteredNewsItem = newsList.find(item => item.id === +newsId && {
    id: item.id,
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