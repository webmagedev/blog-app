"use client"
import {useEffect} from 'react';
import {useBlogStore} from '@/store/useBlogStore';
import axios from "axios";
import dynamic from 'next/dynamic';

const SearchBar = dynamic(() => import('@/components/SearchBar'), {
    ssr: false,
});

const BlogList = dynamic(() => import('@/components/BlogList'), {
    loading: () => <div>Loading...</div>,
});

const Home = () => {
    const {filteredPosts, setPosts} = useBlogStore();

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(data);
        };
        fetchPosts();
    }, [setPosts]);

    return (
        <div>
            <SearchBar/>
            <BlogList posts={filteredPosts}/>
        </div>
    );
};

export default Home;
