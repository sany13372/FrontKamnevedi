import {FC, PropsWithChildren} from 'react';
import localFont from "next/font/local";

export const gilroy = localFont({
    src: [
        {
            path: '../../../public/fonts/Gilroy-Regular.otf',
            weight: '400',
        },
        {
            path: '../../../public/fonts/Gilroy-Medium.otf',
            weight: '500',
        },
        {
            path: '../../../public/fonts/Gilroy-Semibold.otf',
            weight: '600',
        },
        {
            path: '../../../public/fonts/Gilroy-Bold.otf',
            weight: '700',
        },
    ],
});

export const oswald = localFont({
    src: [
        {
            path: '../../../public/fonts/Oswald-Medium.ttf',
            weight: '500'
        }
    ]
})

const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={gilroy.className}>
            {/*<Header/>*/}
            {children}
        </div>
    );
}

export default MainLayout;