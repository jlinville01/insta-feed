import Header from "@/components/Header";
import StoriesBar from "@/components/StoriesBar";
import Post from "@/components/Post";
import BottomNav from "@/components/BottomNav";
import { posts } from "@/data/fakeData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-12 md:pb-0">
      <Header />
      <StoriesBar />
      <main className="max-w-[470px] mx-auto" data-testid="feed">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
