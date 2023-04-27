import {Inter} from 'next/font/google'
import Home from "@/components/screens/Home/Home";

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
      <>
        <Home/>
      </>
  )
}
