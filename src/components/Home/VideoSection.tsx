import Carousel from "react-material-ui-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
const VideoSection = () => {
    return (
        <>
            <section className="h-full">
                <Carousel
                    NextIcon={<IoIosArrowForward />}
                    PrevIcon={<IoIosArrowBack />}
                    animation="fade"
                    className="justify-center items-center"
                    height="50vw"
                >
                    {/* <Player
                        playsInline
                        fluid
                        poster="/assets/poster.png"
                        src="https://media.istockphoto.com/id/1410286476/de/video/luftaufnahmen-%C3%BCber-einer-der-golfinseln-von-british-columbia.mp4?s=mp4-640x640-is&k=20&c=_jyGOswT-pFaIPtnEjzIKWcpPkOrqsnILjoTagowFY4="
                    />
                    <Player
                        playsInline
                        fluid
                        poster="/assets/poster.png"
                        src="https://excite.videvo.net/videvo_files/video/premium/partners0060/large_watermarked/BB_77664d6e-80d5-45a0-9c83-b13de9540cdb_preview.mp4"
                    />
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://cdn.videvo.net/videvo_files/video/premium/video0323/large_watermarked/629_629-0061_preview.mp4"
                    /> */}
                </Carousel>
            </section>
        </>
    );
};

export default VideoSection;
