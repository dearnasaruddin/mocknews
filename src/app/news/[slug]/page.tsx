import NewsPage from "../page"

const CategoryPage =async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;

    return (
        <NewsPage categoryFromSlug={slug} />
    )
}

export default CategoryPage