import { SocketProvider } from "@/contaxt/socket";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />;
    </SocketProvider>
  );
}
