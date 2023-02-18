import {create} from "zustand";

interface ICounterStore{
    count: number
    increment: () => void
}

export const useCouterStore = create<ICounterStore>((set) => {
   return {
    count: 0,
    increment: () => 
        set((state) => {
            return {
                count: state.count + 1,
            }
        }),
   }
})

//ถ้าใส่ () ครอบ จะส่งค่าเป็น Obj
const a = () => ({
    a:5,
})