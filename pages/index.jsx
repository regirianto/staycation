import BackyardCategories from "../components/organisms/BackyardCategories";
import Hero from "../components/organisms/Hero";
import KitchenCategories from "../components/organisms/KitchenCategories";
import LivingRoomCategories from "../components/organisms/LivingRoomCategories";
import MostPicked from "../components/organisms/MostPicked";
import Testimonial from "../components/organisms/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <MostPicked />
      <BackyardCategories />
      <LivingRoomCategories />
      <KitchenCategories />
      <Testimonial />
    </>
  );
}
