export const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex flex-row items-center justify-between px-4">
        {/* Author */}
        <div className="flex items-center space-x-2">
          <span className="flex items-center">Made with ❤️ by Nihal</span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} QuizVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
