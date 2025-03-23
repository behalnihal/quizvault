import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="top-0 left-0 z-[3] fixed flex justify-between items-center bg-black backdrop-blur-md px-6 pt-3 pb-3 border-gray-800 border-b w-full">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo  */}
        <div className="text-2xl flex-1">
          <Link href="/" className="flex items-center">
            <span className="bg-clip-text bg-gradient-to-r from-white to-neutral-500 font-medium text-transparent text-xl">
              QuizVault
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
