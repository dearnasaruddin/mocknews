import { NewsArticle } from "@/types/news"
import NewsCard from "../shared/NewsCard"

const NewsList = ({newsData}: {newsData: NewsArticle[]}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        {newsData?.map(article=>(
            <div key={article.id}>
                <NewsCard article={article}/>
            </div>
            ))}
    </div>
  )
}

export default NewsList