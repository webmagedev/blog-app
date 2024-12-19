import Link from 'next/link';
import {BlogPost} from '@/types';

const PostCard = ({post}: { post: BlogPost }) => {
        const todayDate = new Date().toISOString().slice(0, 10)
        const shortTitle = post.body.substring(0, 27)
        const shortInfo = post.body.substring(0, 100)

        return (
            <Link
                className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 hover:shadow-md"
                href={`/blog/${post.id}`}
            >
                <img src={`https://picsum.photos/id/${post.id}/600/400`} alt=""/>
                <div className="p-4">
                    <h2 className="text-xl  font-bold">{shortTitle}...</h2>
                    <p className="text-gray-500">{shortInfo}...</p>
                    Date: <b>{todayDate}</b>
                </div>
            </Link>
        )
    }
;

export default PostCard;
