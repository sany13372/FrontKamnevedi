import {FC} from 'react';
import Blocks from "@/components/screens/Home/TopBar/Blocks/Blocks";
import BlockActions from "./BlockActions/BlockActions";

const TopBar: FC = () => {
    return (
        <div className={'flex items-center justify-center bg-birus-bg px-2 flex-wrap min-[957px]:pr-7 min-[957px]:pl-10 py-2  min-[957px]:justify-between'}>
            <Blocks/>
            <BlockActions/>
        </div>
    );
}

export default TopBar;