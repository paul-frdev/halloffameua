import { NewsItem } from '@/components/newsId/NewsItem';
import newsList from "../../../../scripts/news.json";

export default function NewsItemPage({ params: { articleId } }: { params: { articleId: string } }) {

  const filteredNewsItem = newsList.find(item => +item.id === +articleId && {
    id: item.id,
    src: item.src,
    date: item.date,
    title: item.title,
    description: item.description
  })

  return (
    <>
      <NewsItem newsItem={filteredNewsItem} />
    </>
  );
}