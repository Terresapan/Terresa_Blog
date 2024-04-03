import Chatbot from "./components/Chatbot";
import Intro from "./components/Intro";
import Postsall from "./components/Postsall";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="main">
      <Intro />
      <Postsall />
      <Chatbot />
    </main>
  );
}
