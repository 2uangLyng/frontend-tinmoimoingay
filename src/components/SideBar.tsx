"use client";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { getAllCategories } from "@/services/getCategories";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >([]);

  const pathname = usePathname();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <Sidebar className="w-full md:w-64" variant="floating">
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold text-gray-900">Categories</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => {
                const isActive = pathname === `/category/${category.slug}`;
                return (
                  <SidebarMenuItem key={category.slug}>
                    <Link href={`/category/${category.slug}`}>
                      <SidebarMenuButton
                        isActive={isActive}
                        className="justify-between"
                      >
                        <span>{category.name}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
