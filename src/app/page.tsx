"use client"
import {useEffect} from 'react';
import {useBlogStore} from '@/store/useBlogStore';
import dynamic from 'next/dynamic';
import {getPosts} from "@/api";

const SearchBar = dynamic(() => import('@/components/SearchBar'), {
    ssr: false,
});

const BlogList = dynamic(() => import('@/components/BlogList'), {
    loading: () => <div>Loading...</div>,
});

const Home = () => {
    const {filteredPosts, setPosts} = useBlogStore();

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data)
        });
    }, [setPosts]);

    return (
        <div>
            <SearchBar/>
            <BlogList posts={filteredPosts}/>
        </div>
    );
};

export default Home;
