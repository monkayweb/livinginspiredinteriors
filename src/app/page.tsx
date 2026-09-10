import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import StudioInterlude from "@/components/sections/StudioInterlude";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Capabilities from "@/components/sections/Capabilities";
import RecognitionPreview from "@/components/sections/RecognitionPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <StudioInterlude />
      <FeaturedWork />
      <Capabilities />
      <RecognitionPreview />
    </>
  );
}
