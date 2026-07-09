import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Timeline from "@/components/Timeline";
import LoveLetter from "@/components/LoveLetter";
import Reasons from "@/components/Reasons";
import Surprise from "@/components/Surprise";

export default function Home() {
  return (
    <main className="min-h-screen bg-romantic-dark">
      <Hero />
      <Gallery />
      <VideoGallery />
      <Timeline />
      <LoveLetter />
      <Reasons />
      <Surprise />
    </main>
  );
}
