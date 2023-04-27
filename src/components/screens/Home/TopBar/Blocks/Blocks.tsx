import {FC} from 'react';
import BlocksItem from "./BlocksItem/BlocksItem";

export interface IBlocks {
    type:string,
    counts:number
}
const Blocks: FC = () => {
    const blocks: IBlocks[] = [
        {type:'Shortlisted',counts:2},
        {type:'Completed',counts:2},
        {type:'On hold',counts:5},
        {type:'Invited',counts:47},
        {type:'Abandoned',counts:3},
        {type:'Pending',counts:2},
        {type:'Rejected',counts:1},
        {type:'Refused',counts:3},
        ]
    return (
        <div className={'flex gap-2 flex-wrap  max-[950px]:order-2'}>
            {blocks.map((item: IBlocks) => <BlocksItem key={item.type} item={item}/>)}
        </div>
    );
}

export default Blocks;