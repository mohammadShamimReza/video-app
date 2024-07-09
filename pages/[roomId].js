import { useSocket } from "@/contaxt/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";

function Room() {
  const socket = useSocket();
  const stream = useMediaStream();
  const { myId, peer } = usePeer();
  return <div></div>;
}

export default Room;
