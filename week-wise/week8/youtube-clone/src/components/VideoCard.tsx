
const VideoCard = ({banner, logo, title, channelName, views, postedAgo }:any) => {
    return <div className={"p-3 cursor-pointer"}>
        <img className={"rounded-xl"} src={banner} alt="banner"/>
        <div className={"grid grid-cols-12 pt-2"}>
            <div className={"col-span-1"}>
                <img className={"rounded-full w-20 h-20"} src={logo} alt="logo"/>
            </div>
            <div className={"col-span-11 pl-5"}>
                <div>
                    {title}
                </div>

                <div className={"col-span-11 text-gray-400 text-base"}>
                    {channelName}
                </div>
                <div className={"col-span-11 text-gray-400 text-base"}>
                    {views} | {postedAgo} ago
                </div>
            </div>
        </div>
    </div>
}

export default VideoCard;
