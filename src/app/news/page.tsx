'use client'
import CategoryFilter from '@/components/news/CategoryFilter'
import NewsList from '@/components/news/NewsList'
import SearchBar from '@/components/news/SearchBar'
import newsData from '@/data/newsData'
import { useState } from 'react'

const NewsPage = () => {
    const [filteredNews, setFilteredNews] = useState(newsData)
    const [selectedCategory, setSelectedCategory] = useState('All')


    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        if (category !== 'All') {
            setFilteredNews(newsData.filter(article => article.category === category))
        }else{
            setFilteredNews(newsData)
        }
    }

    const handleSearch = (query: string) => {
        if (selectedCategory != 'All') {
            const prevFiltered = [...filteredNews]
            setFilteredNews(prevFiltered.filter(article =>
                article.category.toLowerCase().includes(query.toLowerCase()) ||
                article.title.toLowerCase().includes(query.toLowerCase()) ||
                article.content.toLowerCase().includes(query.toLowerCase())
            ))
        } else {
            setFilteredNews(newsData.filter(article =>
                article.category.toLowerCase().includes(query.toLowerCase()) ||
                article.title.toLowerCase().includes(query.toLowerCase()) ||
                article.content.toLowerCase().includes(query.toLowerCase())
            ))
        }
    }


    return (
        <div className='pt-12'>
            <h2 className='text-2xl font-bold mb-8'>Latest News</h2>
            <div className='flex items-center justify-between gap-4 md:gap-12 mb-5'>
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter onCategoryChange={handleCategoryChange} />
            </div>
            <div className=''>
                <NewsList newsData={filteredNews} />
            </div>
        </div>
    )
}

export default NewsPage