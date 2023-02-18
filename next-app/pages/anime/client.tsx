import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { NextPage } from "next"
import Image from "next/image"

async function getAllAnime(){
    return await axios.get("https://api.jikan.moe/v4/anime?q=spy")
}

const AnimePage: NextPage = () => {
    const query = useQuery({queryKey: ['all-anime'], queryFn: getAllAnime})
    return (
        <>
            {query.map((item)=>(
                <div key={item.mal_id}>
                    <div>{item.titles[0].title}</div>
                    <Image 
                        src={item.images.jpg.large_image_url} 
                        alt={''} 
                        width={200} 
                        height={300}
                    />
                </div>
            ))}
        </>
    )
}

export default AnimePage