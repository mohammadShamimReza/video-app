import Player from "@/component/Player";
import { useSocket } from "@/contaxt/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";

function Room() {
  const socket = useSocket();
  const { stream } = useMediaStream();
  const { myId, peer } = usePeer();
  console.log(stream);
  return (
    <div>
      <Player url={stream} muted={true} playing playerId={myId} />
    </div>
  );
}

export default Room;
