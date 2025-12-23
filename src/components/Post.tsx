import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Post as PostType } from "@/data/fakeData";
import { cn } from "@/lib/utils";
import CommentModal from "./CommentModal";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
    setShowHeartAnimation(true);
    setTimeout(() => setShowHeartAnimation(false), 1000);
  };

  return (
    <>
      <article className="border-b border-border bg-background" data-testid="post">
        {/* Post Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={post.userAvatar}
              alt={post.username}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-semibold" data-testid="post-username">{post.username}</span>
          </div>
          <button className="hover:opacity-60 transition-opacity">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>

        {/* Post Image */}
        <div className="relative select-none" onDoubleClick={handleDoubleClick}>
          <img
            src={post.image}
            alt="Post"
            className="w-full aspect-square object-cover"
            data-testid="post-image"
          />
          {showHeartAnimation && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Heart
                className="w-24 h-24 text-white fill-white animate-scale-in"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className="hover:opacity-60 transition-all"
                data-testid="like-button"
              >
                <Heart
                  className={cn(
                    "w-7 h-7 transition-all",
                    liked
                      ? "fill-instagram-like text-instagram-like scale-110"
                      : "text-foreground"
                  )}
                />
              </button>
              <button
                onClick={() => setShowComments(true)}
                className="hover:opacity-60 transition-opacity"
              >
                <MessageCircle className="w-7 h-7" />
              </button>
              <button className="hover:opacity-60 transition-opacity">
                <Send className="w-7 h-7" />
              </button>
            </div>
            <button
              onClick={() => setSaved(!saved)}
              className="hover:opacity-60 transition-all"
            >
              <Bookmark
                className={cn(
                  "w-7 h-7 transition-all",
                  saved ? "fill-foreground" : ""
                )}
              />
            </button>
          </div>

          {/* Likes Count */}
          <div className="mt-2">
            <span className="text-sm font-semibold" data-testid="like-count">
              {likes.toLocaleString()} likes
            </span>
          </div>

          {/* Caption */}
          <div className="mt-2 text-sm">
            <span className="font-semibold mr-2">{post.username}</span>
            <span>{post.caption}</span>
          </div>

          {/* View Comments */}
          {post.comments.length > 0 && (
            <button
              onClick={() => setShowComments(true)}
              className="text-sm text-muted-foreground mt-2 hover:text-foreground transition-colors"
            >
              View all {post.comments.length} comments
            </button>
          )}

          {/* Timestamp */}
          <div className="text-xs text-muted-foreground mt-2 uppercase">
            {post.timestamp}
          </div>
        </div>
      </article>

      <CommentModal
        open={showComments}
        onClose={() => setShowComments(false)}
        post={post}
      />
    </>
  );
};

export default Post;
