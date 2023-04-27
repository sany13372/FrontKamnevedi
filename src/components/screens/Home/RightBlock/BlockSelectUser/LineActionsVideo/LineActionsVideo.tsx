import {FC} from 'react';
import Share from './Share/Share'
import ReactionVideo from './ReactionVideo/ReactionVideo'
import LikeImg from '../../../../../../../public/Like.svg'
import DissLikeImg from '../../../../../../../public/DissLike.svg'
import HoldImg from '../../../../../../../public/tabler_hand-stop.svg'

const LineActionsVideo: FC = () => {
    return (
        <div className={'flex items-center flex-wrap justify-between'}>
            <Share/>
            <div className={'flex items-center gap-2'}>
                <ReactionVideo title={'Shortlist'} image={LikeImg}/>
                <ReactionVideo title={'Reject'} image={DissLikeImg}/>
                <ReactionVideo title={'On hold'} image={HoldImg}/>
            </div>
        </div>
    );
}

export default LineActionsVideo;