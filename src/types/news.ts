export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}

export interface NewsCardProps {
  article: NewsArticle;
}   