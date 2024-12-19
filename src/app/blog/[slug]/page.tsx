import { notFound } from 'next/navigation';
import Link from 'next/link';
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
};

async function fetchPost(slug: string): Promise<Post | null> {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    return data;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await fetchPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-2xl mx-auto my-8 px-4 py-6">
            <Link
                href="/"
                className="mb-10 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Back to Blog List
            </Link>

            <div className="grid gap-6">
                <img src={`https://picsum.photos/id/${post.id}/1200/900`} alt="Post Image"/>

                <div>
                    <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
                    <div>
                        <h2 className="text-gray-500">
                            By: <b>John Doe {post.userId}</b>
                        </h2>

                        <p className="text-gray-500">
                            Date: <b>{new Date().toISOString().slice(0, 10)}</b>
                        </p>
                    </div>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
}
