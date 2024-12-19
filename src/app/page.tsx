"use client"
import {useEffect} from 'react';
import BlogList from '../components/BlogList';
import SearchBar from '../components/SearchBar';
import {useBlogStore} from '@/store/useBlogStore';
import axios from "axios";

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
