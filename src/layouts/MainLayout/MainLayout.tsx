import {FC, PropsWithChildren} from 'react';
import Header from "@/components/Header/Header";
import UserProvider from "@/providers/UsersProvider";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin'], weight: ['400', '700']})
const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={`min-h-screen flex-col ${inter.className}`}>
            <UserProvider>
                <Header/>
                {children}
            </UserProvider>
        </div>
    );
}

export default MainLayout;