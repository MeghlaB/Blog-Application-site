import BlogCard from "@/components/modules/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { BlogService } from "@/services/blog.services";
import { BlogPost } from "@/types";
import { relative } from "path";




export default async function Home() {
  const {data} = await BlogService.getBlogPosts({
     isFeatured:true,
   
  },{
    cache:"no-store"
    // revalidate:10
  })

 

  return (
    <div className=" grid grid-cols-3 max-w-7xl mx-auto px-4   gap-6">
 {
  data?.data.map((post: BlogPost) => (
    <BlogCard key={post.id} post={post} />
  ))
}

    </div>
  );
}
