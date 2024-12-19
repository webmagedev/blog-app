import { BlogPost } from '@/types';
import PostCard from "@/components/PostCard";

const BlogList = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
};

export default BlogList;
