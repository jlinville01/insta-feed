export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  hasStory: boolean;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  image: string;
  likes: number;
  caption: string;
  timestamp: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  likes: number;
}

export const users: User[] = [
  {
    id: "1",
    username: "travel_wanderer",
    fullName: "Emma Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    hasStory: true,
  },
  {
    id: "2",
    username: "foodie_adventures",
    fullName: "Marcus Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    hasStory: true,
  },
  {
    id: "3",
    username: "tech_guru",
    fullName: "Sophia Williams",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    hasStory: false,
  },
  {
    id: "4",
    username: "fitness_life",
    fullName: "Jake Morrison",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake",
    hasStory: true,
  },
  {
    id: "5",
    username: "artistic_soul",
    fullName: "Olivia Taylor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    hasStory: false,
  },
  {
    id: "6",
    username: "nature_lover",
    fullName: "Liam Anderson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
    hasStory: true,
  },
  {
    id: "7",
    username: "fashionista",
    fullName: "Ava Martinez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava",
    hasStory: true,
  },
  {
    id: "8",
    username: "gamer_pro",
    fullName: "Ethan Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
    hasStory: false,
  },
  {
    id: "9",
    username: "bookworm",
    fullName: "Isabella Garcia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
    hasStory: true,
  },
  {
    id: "10",
    username: "music_vibes",
    fullName: "Noah Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
    hasStory: false,
  },
  {
    id: "11",
    username: "pet_lover",
    fullName: "Mia Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    hasStory: true,
  },
  {
    id: "12",
    username: "chef_delights",
    fullName: "Lucas Thompson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    hasStory: false,
  },
  {
    id: "13",
    username: "yoga_zen",
    fullName: "Charlotte Lee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte",
    hasStory: true,
  },
  {
    id: "14",
    username: "photo_wizard",
    fullName: "James White",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    hasStory: true,
  },
  {
    id: "15",
    username: "adventure_seeker",
    fullName: "Amelia Harris",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amelia",
    hasStory: false,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    userId: "1",
    username: "travel_wanderer",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    likes: 1247,
    caption: "Mountain views that take your breath away 🏔️ #travel #nature #mountains",
    timestamp: "2 hours ago",
    comments: [
      { id: "1", username: "nature_lover", text: "Absolutely stunning! 😍", likes: 12 },
      { id: "2", username: "adventure_seeker", text: "Where is this?", likes: 5 },
    ],
  },
  {
    id: "2",
    userId: "2",
    username: "foodie_adventures",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    likes: 892,
    caption: "Homemade ramen bowl 🍜 Recipe coming soon! #foodie #cooking #ramen",
    timestamp: "4 hours ago",
    comments: [
      { id: "3", username: "chef_delights", text: "Looks delicious!", likes: 8 },
      { id: "4", username: "foodie_adventures", text: "@chef_delights Thanks! 🙏", likes: 3 },
    ],
  },
  {
    id: "3",
    userId: "3",
    username: "tech_guru",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    likes: 2341,
    caption: "New setup, who dis? 💻✨ #tech #workspace #productivity",
    timestamp: "6 hours ago",
    comments: [
      { id: "5", username: "gamer_pro", text: "Clean setup! 🔥", likes: 15 },
    ],
  },
  {
    id: "4",
    userId: "4",
    username: "fitness_life",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    likes: 567,
    caption: "Morning grind 💪 No excuses! #fitness #gym #motivation",
    timestamp: "8 hours ago",
    comments: [
      { id: "6", username: "yoga_zen", text: "Keep it up! 💪", likes: 4 },
    ],
  },
  {
    id: "5",
    userId: "5",
    username: "artistic_soul",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    likes: 1523,
    caption: "Lost in colors 🎨 #art #painting #creative",
    timestamp: "10 hours ago",
    comments: [
      { id: "7", username: "photo_wizard", text: "Beautiful work!", likes: 18 },
      { id: "8", username: "artistic_soul", text: "Thank you! 💕", likes: 6 },
    ],
  },
  {
    id: "6",
    userId: "6",
    username: "nature_lover",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    likes: 3402,
    caption: "Golden hour magic ✨🌅 #nature #sunset #landscape",
    timestamp: "12 hours ago",
    comments: [
      { id: "9", username: "photo_wizard", text: "Perfect timing!", likes: 22 },
    ],
  },
  {
    id: "7",
    userId: "7",
    username: "fashionista",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    likes: 2156,
    caption: "Street style vibes 👗✨ #fashion #ootd #style",
    timestamp: "14 hours ago",
    comments: [
      { id: "10", username: "artistic_soul", text: "Love this look! 😍", likes: 14 },
    ],
  },
  {
    id: "8",
    userId: "8",
    username: "gamer_pro",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    likes: 1789,
    caption: "Level up! 🎮 New high score achieved #gaming #esports",
    timestamp: "16 hours ago",
    comments: [
      { id: "11", username: "tech_guru", text: "Nice! What game?", likes: 7 },
    ],
  },
  {
    id: "9",
    userId: "9",
    username: "bookworm",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    likes: 945,
    caption: "Current read 📚☕ Can't put it down! #books #reading",
    timestamp: "18 hours ago",
    comments: [
      { id: "12", username: "music_vibes", text: "What's the title?", likes: 3 },
    ],
  },
  {
    id: "10",
    userId: "10",
    username: "music_vibes",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    likes: 2678,
    caption: "Studio session vibes 🎵🎧 #music #producer #studio",
    timestamp: "20 hours ago",
    comments: [
      { id: "13", username: "gamer_pro", text: "Fire! 🔥", likes: 11 },
    ],
  },
  {
    id: "11",
    userId: "11",
    username: "pet_lover",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80",
    likes: 4521,
    caption: "Meet my best friend 🐕❤️ #dogs #pets #puppy",
    timestamp: "22 hours ago",
    comments: [
      { id: "14", username: "nature_lover", text: "So cute! 😍", likes: 25 },
      { id: "15", username: "pet_lover", text: "Thank you! 🥰", likes: 8 },
    ],
  },
  {
    id: "12",
    userId: "12",
    username: "chef_delights",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    likes: 1834,
    caption: "Margherita perfection 🍕🇮🇹 #pizza #italian #food",
    timestamp: "1 day ago",
    comments: [
      { id: "16", username: "foodie_adventures", text: "Need this in my life!", likes: 9 },
    ],
  },
  {
    id: "13",
    userId: "13",
    username: "yoga_zen",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    likes: 1267,
    caption: "Morning flow 🧘‍♀️☀️ #yoga #wellness #mindfulness",
    timestamp: "1 day ago",
    comments: [
      { id: "17", username: "fitness_life", text: "Great form! 👌", likes: 6 },
    ],
  },
  {
    id: "14",
    userId: "14",
    username: "photo_wizard",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80",
    likes: 3891,
    caption: "City lights at night 🌃✨ #photography #cityscape #urban",
    timestamp: "1 day ago",
    comments: [
      { id: "18", username: "tech_guru", text: "Incredible shot!", likes: 20 },
    ],
  },
  {
    id: "15",
    userId: "15",
    username: "adventure_seeker",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amelia",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    likes: 2945,
    caption: "Beach days are the best days 🏖️☀️ #beach #travel #summer",
    timestamp: "2 days ago",
    comments: [
      { id: "19", username: "travel_wanderer", text: "Paradise! 🌴", likes: 13 },
    ],
  },
];
