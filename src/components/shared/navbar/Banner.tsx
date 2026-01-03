import { Button } from '@/components/ui/button'
import Image from 'next/image'
import newsData from '@/data/newsData'
import Link from 'next/link'

const Banner = () => {
  const featuredArticle = newsData.find(article => article.id === "news-006"); // 
  return (
    <div className='bg-slate-100 dark:bg-slate-900'>
      <div className='px-4  lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        <div>
          {featuredArticle && <Image src={featuredArticle?.imageUrl} width={640} height={426} alt="Banner"  />}
        </div>
        <div className='space-y-4 flex flex-col'>
          <h4 className='text-sm font-medium text-gray-500 dark:text-gray-300'>{featuredArticle?.category}</h4>
          <h2 className='text-3xl font-bold'>{featuredArticle?.title}</h2>
          <p>{featuredArticle?.content.slice(0, 226)}</p>
          <p className='max-md:hidden'>{featuredArticle?.content.slice(226, 518)}</p>
          <Link href={`/news/${featuredArticle?.id}`}><Button className='w-full cursor-pointer' variant='default'>Read More</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner