import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Counter from '@/components/Counter'
import { useCouterStore } from '@/store/counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count,setCount]= useState<number>(0);
  const [words,setWords]= useState<String[]>([]);
  const counterStore = useCouterStore()

  const increment = () => {
    setCount(count+1)
  }

  const addRandomWords = () => {
    const tmp = words.slice()
    tmp.push(Math.floor(Math.random()*1000).toString())
    setWords(tmp)
  }

  return (
    <>
      <h1>{counterStore.count}</h1>
      <button onClick={counterStore.increment}>increment</button>
      <div>
        {words.map((word) => (
          <div /*key={word}*/>{word}</div>
        ))}
      </div>
      <button onClick={addRandomWords}>add Random Words</button>
      <Counter count={count} />
    </>
  )
}


