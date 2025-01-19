
import Gallery from "./components/gallery";
import Story from "./components/story";
import { CalendarSection } from "./components/calendar-section";
import { FooterSection } from "./components/footer-section";
import BannerSection from "./components/banner";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="overflow-x-hidden">
        <BannerSection />
        <Story />
        <CalendarSection />
        <Gallery />
        <FooterSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
