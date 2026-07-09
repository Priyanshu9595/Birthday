import Hero from "@/components/Hero";
import HeartSlideshow from "@/components/HeartSlideshow";
import CategorizedMemories from "@/components/CategorizedMemories";
import Timeline from "@/components/Timeline";
import LoveLetter from "@/components/LoveLetter";
import Reasons from "@/components/Reasons";
import Surprise from "@/components/Surprise";

export default function Home() {
  return (
    <main className="min-h-screen bg-romantic-dark overflow-x-hidden">
      <Hero />
      <HeartSlideshow />
      <CategorizedMemories />
      <Timeline />
      <LoveLetter />
      <Reasons />
      <Surprise />
    </main>
  );
}
