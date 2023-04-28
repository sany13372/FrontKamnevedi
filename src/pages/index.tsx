import {Inter} from 'next/font/google'
import Home from "@/components/screens/Home/Home";

const inter = Inter({subsets: ['latin'], weight: ['400', '700']})

export default function HomePage() {
    return (
        <div className={inter.className}>
            <Home/>
        </div>
    )
}
