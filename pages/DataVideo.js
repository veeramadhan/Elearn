// pages/DataVideo.js
import { useRouter } from 'next/router';

const DataVideo = () => {
  const router = useRouter();
  const { videoId } = router.query;

  return (
    <div className="flex justify-center mt-15 m-9">
      <div>
        {/* Here you can embed the YouTube video using the videoId */}
        {videoId && (
          <iframe
            src={videoId}
            title="Embedded Video"
            width="800"
            height="450"
            frameBorder="0"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default DataVideo;
