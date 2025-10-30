import { Hero } from "@/src/components/homepage/Hero";
import { UpcomingTour } from "@/src/components/tours/upcomingtour/UpcomingTour";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <UpcomingTour />
    </div>
  );
}
