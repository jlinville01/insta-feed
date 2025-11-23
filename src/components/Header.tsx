import { Heart, Home, MessageCircle, PlusSquare, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-[470px] mx-auto px-4 h-[60px] flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-instagram-gradientStart via-instagram-gradientMid to-instagram-gradientEnd bg-clip-text text-transparent">
          Instagram
        </h1>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity">
            <PlusSquare className="w-6 h-6" />
          </button>
          <button className="hover:opacity-60 transition-opacity">
            <Heart className="w-6 h-6" />
          </button>
          <button className="hover:opacity-60 transition-opacity">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
