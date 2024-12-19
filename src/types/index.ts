export interface BlogState {
    posts: BlogPost[];
    filteredPosts: BlogPost[];
    searchQuery: string;
    setPosts: (posts: BlogPost[]) => void;
    setSearchQuery: (query: string) => void;
}

export interface BlogPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    author?: string;
    publishedAt?: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}