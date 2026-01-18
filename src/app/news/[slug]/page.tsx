import { Metadata } from "next"
import NewsPage from "../page"

type Props = {
  params: { slug: string }
}

// ============= Dynamic Metadata =============
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
 
  return {
    title: `${slug} category`,
  }
}

const CategoryPage =async ({ params }: Props) => {
    const { slug } = await params;

    return (
        <NewsPage categoryFromSlug={slug} />
    )
}

export default CategoryPage