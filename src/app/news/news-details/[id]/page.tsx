import newsData from '@/data/newsData';
import Image from 'next/image';
import React from 'react'

const NewsDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const article = newsData.find((article) => article.id === id);
    return (
        <section className="pt-12">
            <article className="max-w-4xl mx-auto p-2 lg:p-6 shadow-md border rounded-lg flex flex-col justify-center items-center">
                {article?.imageUrl && (
                    <div>
                        <Image
                            src={article?.imageUrl}
                            alt={article?.title}
                            blurDataURL='@/assets/placeholder.png'
                            placeholder='blur'
                            width={800}
                            height={450}
                            className="rounded-md object-cover"
                        />
                    </div>
                )}
                <div className="my-5 px-2 lg:px-6">
                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-1 rounded"                    >
                        {article?.category}
                    </span>
                    <h2 className="text-3xl font-bold my-4">{article?.title}</h2>
                    {article && <p>{new Date(article.publishedAt).toLocaleDateString()}</p>}
                </div>


                {/* Full Description */}
                <div className="lg:mt-6 px-2 lg:px-6">
                    <p className="mb-4">{article?.content}</p>
                </div>
            </article>
        </section>
    )
}

export default NewsDetailsPage