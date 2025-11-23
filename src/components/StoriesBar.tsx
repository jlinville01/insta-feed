import { users } from "@/data/fakeData";

const StoriesBar = () => {
  return (
    <div className="border-b border-border bg-background">
      <div className="max-w-[470px] mx-auto px-4 py-4 overflow-x-auto">
        <div className="flex gap-4">
          {users
            .filter((user) => user.hasStory)
            .map((user) => (
              <button
                key={user.id}
                className="flex flex-col items-center gap-1 flex-shrink-0 group"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-instagram-gradientEnd via-instagram-gradientMid to-instagram-gradientStart">
                    <div className="w-full h-full rounded-full bg-background p-[2px]">
                      <img
                        src={user.avatar}
                        alt={user.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-xs text-foreground truncate max-w-[64px]">
                  {user.username}
                </span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesBar;
