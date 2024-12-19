import {notFound} from 'next/navigation';
import Link from 'next/link';
import axios from "axios";
import Image from "next/image";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
};

async function getPost(slug: string): Promise<Post | null> {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    return data;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const post = await getPost((await params).slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="grid">
            <Link
                href="/"
                aria-label={`Return back to Blogs List`}
                tabIndex={0}
                className="w-full xl:w-64 text-center mb-10 px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Back to Blogs
            </Link>

            <div className="flex flex-col gap-6">
                <Image
                    src={`https://picsum.photos/id/${post.id}/600/400`}
                    alt={post.title}
                    width={600}
                    height={400}
                    quality={75}
                />
                <div className="grid gap-6">
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                    <div>
                        <h2 className="text-gray-500">
                            By: <b>John Doe {post.userId}</b>
                        </h2>

                        <h3 className="text-gray-500">
                            Date: <b>{new Date().toISOString().slice(0, 10)}</b>
                        </h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius gravida lacus vel
                        laoreet.
                        Morbi in enim quis massa venenatis egestas. Suspendisse fringilla leo eu accumsan ornare. Mauris
                        quis turpis pellentesque lorem dapibus convallis. Praesent vestibulum luctus lorem, non luctus
                        risus mattis eu. Nullam faucibus turpis sit amet justo fringilla, consectetur laoreet diam
                        mattis. Donec mollis sodales lacus, iaculis aliquam enim venenatis sed. Sed non purus vel ante
                        pharetra consectetur lobortis ut sem. Etiam sit amet interdum nibh. Phasellus placerat, nibh sed
                        interdum gravida, enim enim vestibulum lacus, ut consequat risus nisl sed ante. Phasellus nunc
                        nisl, pretium nec sodales eu, imperdiet eu nibh.
                        <br/>
                        Vivamus ultrices non lacus sed volutpat. Nam quis purus dolor. Vestibulum quis accumsan augue.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris aliquet sodales lectus, non
                        feugiat neque accumsan a. Quisque ac lectus et eros sodales condimentum. Fusce sollicitudin
                        commodo sapien et fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        dignissim egestas urna, vestibulum aliquet est volutpat quis. Morbi laoreet volutpat ipsum, eget
                        dictum enim rutrum nec. Fusce faucibus lorem eget felis mollis sodales. Pellentesque nec ipsum
                        laoreet, pretium tortor nec, blandit sapien. Nulla nisl eros, faucibus vel felis ut, fermentum
                        ultricies odio.
                        <br/>
                        Aliquam pulvinar nunc et lobortis vulputate. Quisque tempus arcu vitae urna lacinia, id
                        fringilla nibh varius. Aliquam varius tempus varius. In sodales, lorem a vestibulum porta, massa
                        quam iaculis lorem, vehicula finibus risus nunc hendrerit dolor. Praesent finibus convallis
                        diam, et consequat leo tristique quis. Nunc id blandit massa, vitae mollis leo. Phasellus
                        fringilla non odio fringilla pretium. Sed consectetur in ligula et lacinia. Proin justo lectus,
                        tincidunt quis purus vitae, faucibus tincidunt lectus. Mauris sit amet quam eu arcu ultricies
                        aliquet in sit amet lacus. Donec nec massa vitae augue dapibus maximus quis quis ipsum.
                        Curabitur ex est, tincidunt id lacinia vitae, aliquet in justo. Morbi turpis metus, lobortis ut
                        elementum eu, ornare eget risus. Sed a ante nisi. Integer quis molestie orci.
                        <br/>
                        Aenean vel magna convallis, porttitor ligula quis, tincidunt libero. Aliquam erat volutpat.
                        Pellentesque imperdiet augue at lacus posuere, ut dictum arcu lobortis. Pellentesque sed mi ac
                        nibh dignissim volutpat. Pellentesque pellentesque nibh eu mi efficitur vehicula. Vivamus
                        elementum velit mollis urna commodo consectetur. Donec eu elementum ligula, nec dignissim dui.
                        Donec ac nulla eu quam venenatis imperdiet et vel est. Aenean varius tellus lorem, eu
                        sollicitudin ligula vestibulum et. Maecenas ullamcorper nulla dolor, quis condimentum enim porta
                        id. Suspendisse facilisis commodo orci, nec porttitor dolor molestie non. Quisque efficitur
                        hendrerit odio, ut consectetur nunc tristique vitae. Vivamus id ligula condimentum, venenatis
                        elit et, facilisis erat. Duis metus neque, fringilla sed imperdiet vel, blandit at eros.
                        <br/>
                        Cras eget massa mauris. Fusce bibendum, quam quis rhoncus tristique, urna sapien tempor tortor,
                        eget malesuada sapien augue quis leo. In diam leo, mattis vitae urna ac, finibus rhoncus augue.
                        Maecenas in lobortis felis. Nam ornare, purus non elementum fringilla, magna odio ultricies
                        mauris, sed volutpat erat orci ut nunc. Interdum et malesuada fames ac ante ipsum primis in.
                    </p>
                </div>
            </div>
        </div>
    );
}
