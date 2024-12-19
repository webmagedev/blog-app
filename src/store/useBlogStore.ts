import { create } from 'zustand';
import {BlogState} from '@/types';

export const useBlogStore = create<BlogState>((set) => ({
    posts: [],
    filteredPosts: [],
    searchQuery: '',

    setPosts: (posts) =>
        set(() => ({
            posts,
            filteredPosts: posts,
        })),

    setSearchQuery: (query) =>
        set((state) => {
            const filtered = state.posts.filter(
                (post) =>
                    post.title.toLowerCase().includes(query.toLowerCase()) ||
                    post.body.toLowerCase().includes(query.toLowerCase())
            );
            return {
                searchQuery: query,
                filteredPosts: filtered,
            };
        }),
}));
