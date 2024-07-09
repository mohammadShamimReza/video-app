import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import styles from "@/styles/home.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };
  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("please provide a valid room id");
    }
  };
  return (
    <div className={styles.homeContainer}>
      <h1 className="homeTitle">video App</h1>
      <div>
        <input
          placeholder="Enter the room id"
          value={roomId}
          onChange={(e) => setRoomId(e?.target?.value)}
        />
        <button className="homeButton" onClick={joinRoom}>
          Join Room
        </button>
        <span>------------------ or ---------------</span>
        <button onClick={createAndJoin}>Create a new room</button>
      </div>
    </div>
  );
}
