import {VIDEOS} from "@/utils/videos";
import VideoCard from "@/components/VideoCard";

const VideoGrid = () =>{
    return <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
        {
            VIDEOS.map((video, index)=><VideoCard
                key={index}
                title={video.title}
                banner={video.banner}
                logo={video.logo}
                channelName={video.channelName}
                postedAgo={video.postedAgo}
                views={video.views}
                />
            )
        }
    </div>
}

export default VideoGrid;
