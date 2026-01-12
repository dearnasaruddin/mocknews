'use client'
import CategoryFilter from '@/components/news/CategoryFilter'
import NewsList from '@/components/news/NewsList'
import SearchBar from '@/components/news/SearchBar'
import newsData from '@/data/newsData'
import { useEffect, useState } from 'react'

const NewsPage = ({ categoryFromSlug }: { categoryFromSlug: string }) => {

    const [filteredNews, setFilteredNews] = useState(newsData)
    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        if (category !== 'All') {
            setFilteredNews(newsData.filter(article => article.category.toLowerCase() === category.toLowerCase()))
        } else {
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


    if (categoryFromSlug && categoryFromSlug !== 'All' && selectedCategory !== categoryFromSlug) {
        handleCategoryChange(categoryFromSlug)
    }

    return (
        <div className='pt-12'>
            {categoryFromSlug ?
                <h2 className='text-2xl font-bold mb-8 capitalize'>News from <span className='text-blue-500'>{categoryFromSlug}</span> Category</h2>
                :
                <h2 className='text-2xl font-bold mb-8'>Latest News</h2>
            }
            {!categoryFromSlug &&
                <div className='flex items-center justify-between gap-4 lg:gap-12 mb-5'>
                    <SearchBar onSearch={handleSearch} />
                    <CategoryFilter onCategoryChange={handleCategoryChange} />
                </div>
            }
            <div className='lg:min-h-[60vh]'>
                <NewsList newsData={filteredNews} />
            </div>
        </div>
    )
}

export default NewsPage