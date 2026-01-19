import { env } from "@/env"
import { ur } from "zod/v4/locales"



const API_URL = env.API_URL
interface ServiceOptions {
    cache?: RequestCache,
    revalidate?: number
}

interface GetBlogParams {
    isFeatured?: boolean,
    search?: string
}



export const BlogService = {
    getBlogPosts: async function (params?: GetBlogParams, options?: ServiceOptions) {
        try {
            const url = new URL(`${API_URL}/posts`)

            if (params) {
                Object.entries(params).forEach(([Key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(Key, value)
                    }
                })
            }
            const config: RequestInit = {}
            if (options?.cache) {
                config.cache = options.cache
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }

            const res = await fetch(url.toString(), config)
            console.log(res)
        
            const data = await res.json()
            return { data: data, error: null }

        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } }
        }
    }
}