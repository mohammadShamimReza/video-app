import { useSocket } from "@/contaxt/socket";
import { useEffect } from "react";

export default function Home() {
  const socket = useSocket();
  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket.id);
    });
  }, [socket]);

  return <div className="">welcome</div>;
}
