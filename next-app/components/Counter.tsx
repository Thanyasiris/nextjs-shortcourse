import { FC } from "react";

interface ICounterProps{
    count?: number
}

const Counter: FC<ICounterProps> = ({count})=>{
    return <>count is {count}</>
}

export default Counter