'use client'
import newsData from "@/data/newsData"
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"

const CategoryFilter = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
    const categories = Array.from(new Set(newsData.map(article => article.category)))
    categories.unshift('All')

    return (
        <div className="flex flex-wrap gap-2">
            <NativeSelect onChange={(e) => onCategoryChange(e.target.value)}>
                {categories.map((category) => (
                    <NativeSelectOption key={category} value={category}>
                        {category}
                    </NativeSelectOption>
                ))}
            </NativeSelect>
        </div>
    )
}

export default CategoryFilter