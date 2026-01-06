import React from 'react'
import NewsCard from './NewsCard'
import newsData from '@/data/newsData'
import { NewsArticle } from '@/types/news'

const LatestNews = () => {
    return (
        <div className="my-12">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-between gap-5">
                {newsData.slice(3, 6).map((article: NewsArticle) => (
                    <div key={article.id}>
                        <NewsCard article={article} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestNews