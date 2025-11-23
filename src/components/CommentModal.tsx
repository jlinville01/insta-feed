import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart, Send, Smile } from "lucide-react";
import { Post } from "@/data/fakeData";
import { cn } from "@/lib/utils";

interface CommentModalProps {
  open: boolean;
  onClose: () => void;
  post: Post;
}

const CommentModal = ({ open, onClose, post }: CommentModalProps) => {
  const [commentLikes, setCommentLikes] = useState<Record<string, boolean>>({});
  const [newComment, setNewComment] = useState("");

  const toggleCommentLike = (commentId: string) => {
    setCommentLikes((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 gap-0 bg-background">
        <div className="flex h-full">
          {/* Image Section */}
          <div className="flex-1 bg-black flex items-center justify-center">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Comments Section */}
          <div className="w-[340px] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <img
                src={post.userAvatar}
                alt={post.username}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-semibold">{post.username}</span>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Caption as first comment */}
              <div className="mb-4">
                <div className="flex gap-3">
                  <img
                    src={post.userAvatar}
                    alt={post.username}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-sm">
                      <span className="font-semibold mr-2">{post.username}</span>
                      <span>{post.caption}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {post.timestamp}
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Comments */}
              {post.comments.map((comment) => (
                <div key={comment.id} className="mb-4">
                  <div className="flex gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.username}`}
                      alt={comment.username}
                      className="w-8 h-8 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-semibold mr-2">
                          {comment.username}
                        </span>
                        <span>{comment.text}</span>
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                        <span>2h</span>
                        <span>{comment.likes} likes</span>
                        <button className="hover:text-foreground transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCommentLike(comment.id)}
                      className="flex-shrink-0"
                    >
                      <Heart
                        className={cn(
                          "w-3 h-3 transition-all",
                          commentLikes[comment.id]
                            ? "fill-instagram-like text-instagram-like"
                            : "text-muted-foreground"
                        )}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Input */}
            <div className="border-t border-border">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <button className="hover:opacity-60 transition-opacity">
                    <Smile className="w-6 h-6" />
                  </button>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                  {newComment && (
                    <button className="text-link font-semibold text-sm hover:opacity-60 transition-opacity">
                      Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
