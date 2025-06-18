import { Search } from "lucide-react";
import Link from "next/link";
import SearchForm from "./SearchForm";

const NavCategory = () => {
  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              NewsHub
            </Link>
          </div>
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavCategory;
