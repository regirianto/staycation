import BackyardCategories from "../components/organisms/BackyardCategories";
import Hero from "../components/organisms/Hero";
import LivingRoomCategories from "../components/organisms/LivingRoomCategories";
import MostPicked from "../components/organisms/MostPicked";

export default function Home() {
  return (
    <>
      <div className="container mt-5 overflow-hidden">
        <Hero />
        <MostPicked />
        <BackyardCategories />
        <LivingRoomCategories />
      </div>
    </>
  );
}
