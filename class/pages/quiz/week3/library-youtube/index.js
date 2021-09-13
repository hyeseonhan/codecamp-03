import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutub = styled(ReactPlayer)``;

export default function LibraryYoutubepage() {
  return (
    <MyYoutub
      url="https://www.youtube.com/watch?v=SsGQBMNiI5c"
      width={800}
      height={600}
      muted="false"
      playing="false"
    />
  );
}
