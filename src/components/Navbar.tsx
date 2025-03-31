import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo  */}
        <div className="text-2xl flex-1">
          <Link href="/" className="flex items-center">
            <span className=" backdrop:blur-2xl bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-red-600 font-bold text-transparent text-xl">
              QuizVault
            </span>
          </Link>
        </div>

        {/* Mode Toggle  */}
        <ModeToggle />
      </div>
    </div>
  );
};
