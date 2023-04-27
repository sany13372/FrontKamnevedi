import {FC} from 'react';
import TopBar from "@/components/screens/Home/TopBar/TopBar";
import LeftBlock from "./LeftBlock/LeftBlock";
import RightBlock from './RightBlock/RightBlock'

const Home: FC = () => {
    return (
        <div className={'flex flex-col'}>
            <TopBar/>
            <div className={'flex'}>
                <LeftBlock/>
                <RightBlock/>
            </div>
        </div>
    );
}

export default Home;