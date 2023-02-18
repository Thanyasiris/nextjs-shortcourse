import { GetServerSideProps, NextPage } from "next"
import Image from "next/image"

interface IAnimePageProps{
    data:any[]
}
const AnimePage: NextPage<IAnimePageProps> = ({data}) => {
    return <>
        {data.map((item) => (
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
}
export default AnimePage

export const getServerSideProps: GetServerSideProps = async (counter) => {
    const request = await fetch("https://api.jikan.moe/v4/anime")
    const body = await request.json()
    return {
        props:{
            data: body.data,
        },
    }
}