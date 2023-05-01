import {FC} from 'react';

const BlockTimer:FC<{video:any}> = ({video}) => {
 return (
     <div className={'flex text-white ml-3'}>
         <p>
             {Math.floor(video.currentTime / 60) +
                 ':' +
                 ('0' + Math.floor(video.currentTime % 60)).slice(-2)}
         </p>
         <p> / </p>
         <p >
             {Math.floor(video.videoTime / 60) +
                 ':' +
                 ('0' + Math.floor(video.videoTime % 60)).slice(-2)}
         </p>
     </div>
 );
 }

export default BlockTimer;