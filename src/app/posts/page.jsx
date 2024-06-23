import { getPosts } from "@/Api/postApi";
import Link from "next/link";


const Postpage = async () => {
    const any = await getPosts()
    return (
        <div className="">
            <div>
               <h1 className="text-3xl font-bold"> All Post Is Here : </h1>
            </div>
            <div className="grid grid-cols-3 mt-5 mb-10">
                {
                    any?.slice(0,10).map((item,id)=> <div key={item.id} className="border-2 p-4 border-cyan-400 mt-5 mx-5">
                        <h1 className="text-2xl font bold"> Title : {item.userId}</h1>
                        <h1 className="text-xl font bold"> Title : {item.title}</h1>
                        <h1 className="text-sm font bold"> Title : {item.body}</h1>
                        <button className="bg-orange-600 p-6"> <Link href={`/posts/${id}`}>See Details</Link> </button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Postpage;