import LatestNews from "@/components/shared/LatestNews";
import Banner from "@/components/shared/Banner";
import NewsLetter from "@/components/shared/NewsLetter";

export default async function Home() {
  return (
    <div className="pt-12 dark:text-gray-300">
      <Banner />
      <LatestNews />
      <NewsLetter />
    </div>
  );
}
