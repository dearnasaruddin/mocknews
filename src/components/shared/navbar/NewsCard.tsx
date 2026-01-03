import { Button } from '@/components/ui/button'
import { NewsCardProps } from '@/types/news'
import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Link className='p-4 border rounded-md shadow-md inline-block group' href={`/news/${article.id}`}>
      <div>
        <Image src={article.imageUrl} alt='news image' width={380} height={300} className='mb-5 md:h-56 rounded group-hover:scale-105 transition-all duration-200' />
      </div>
      <div>
        <h3 className="text-xl dark:text-gray-300 font-semibold my-3">{article.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{article.content}</p>
      </div>
      <Button variant='default' className="cursor-pointer">
        Read more
      </Button>
    </Link>
  )
}

export default NewsCard