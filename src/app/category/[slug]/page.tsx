import NewsList from "@/components/NewsList";
import SideBar from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getNewByCategory } from "@/services/getNewsByCategory";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  console.log("🔥 Slug param:", slug);

  const newsList = await getNewByCategory(slug);

  console.log("🧪 Result from API:", newsList);
  console.log("✅ Is array?", Array.isArray(newsList));

  return (
    <div className="min-h-screen max-w-3xl mx-auto bg-white">
      <SidebarProvider>
        <SideBar />
        <main className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
              {slug.replaceAll("-", " ")}
            </h1>
            <p className="text-gray-600">Tìm thấy {newsList.length} bài viết</p>
          </div>

          <NewsList news={newsList} />
        </main>
      </SidebarProvider>
    </div>
  );
}
