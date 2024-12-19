import axios from "axios";
import {Post} from "@/types";

export const getPosts = async ():Promise<Post[]> => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data
}

export async function getPost(slug: string): Promise<Post | null> {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    return data;
}
