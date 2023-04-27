import {FC, PropsWithChildren} from 'react';
import Header from "@/components/Header/Header";
import UserProvider from "@/providers/UsersProvider";

const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={'min-h-screen flex-col'}>
            <UserProvider>
                <Header/>
                {children}
            </UserProvider>
        </div>
    );
}

export default MainLayout;