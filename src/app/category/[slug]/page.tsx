import NewsList from "@/components/NewsList";
import SideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllCategories } from "@/services/getCategories";
import { getNewByCategorySlug } from "@/services/getNewsByCategory";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const newsList = await getNewByCategorySlug(slug);
  const categories = await getAllCategories();

  return (
    <SidebarProvider>
      <SideBar categories={categories} />
      <main className="w-full px-4 py-6 max-w-7xl mx-auto min-h-screen bg-white flex flex-col items-center">
        <div className="mb-8 text-center flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
            {categories.find((cat) => cat.slug === slug)?.name || slug}
          </h1>
        </div>

        <NewsList news={newsList} singleColumn />
      </main>
    </SidebarProvider>
  );
}
