import { Home, Search, PlusSquare, Video, User } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
      <div className="flex items-center justify-around h-12">
        <button className="hover:opacity-60 transition-opacity">
          <Home className="w-6 h-6" />
        </button>
        <button className="hover:opacity-60 transition-opacity">
          <Search className="w-6 h-6" />
        </button>
        <button className="hover:opacity-60 transition-opacity">
          <PlusSquare className="w-6 h-6" />
        </button>
        <button className="hover:opacity-60 transition-opacity">
          <Video className="w-6 h-6" />
        </button>
        <button className="hover:opacity-60 transition-opacity">
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
