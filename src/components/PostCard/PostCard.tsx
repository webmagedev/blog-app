import Link from 'next/link';
import Image from "next/image";
import {BlogPost} from '@/types';

const PostCard = ({post}: { post: BlogPost }) => {
    const todayDate = new Date().toISOString().slice(0, 10)
    const shortTitle = post.body.substring(0, 27)
    const shortInfo = post.body.substring(0, 100)

    return (
        <Link
            className="fade-in border dark:border-gray-700 flex flex-col items-center bg-white dark:bg-gray-800 hover:shadow-md"
            href={`/blog/${post.id}`}
            aria-label={`Read more about ${post.title}`}
        >
            <Image
                src={`https://picsum.photos/id/${post.id}/600/400`}
                alt={`Image for blog post titled: ${post.title}`}
                width={600}
                height={400}
                quality={75}
            />
            <div className="flex h-full justify-between flex-col item p-4">
                <p className="text-xl font-bold">{shortTitle}...</p>
                <p className="text-gray-500">{shortInfo}...</p>
                <div>
                    <p>Author: <b>John Doe {post.id}</b></p>
                    <p>Date: <b>{todayDate}</b></p>
                </div>
            </div>
        </Link>
    )
};

export default PostCard;
