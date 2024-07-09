import { useEffect, useRef, useState } from "react";

const useMediaStream = () => {
  const [state, setState] = useState(null);
  const isStreamSet = useRef(false);

  useEffect(() => {
    if (isStreamSet) return;
    isStreamSet.current = true;
    (async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        console.log("setting your stream");
        setState(stream);
      } catch (error) {
        console.log(error, "Error in media navigator");
      }
    })();
  }, []);
  return {
    stream: state,
  };
};

export default useMediaStream;
