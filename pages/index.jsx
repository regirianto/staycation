import CategoriesPropertie from "../components/organisms/Categories";
import Hero from "../components/organisms/Hero";
import MostPicked from "../components/organisms/MostPicked";
import Testimonial from "../components/organisms/Testimonial";
import { getLandinPage } from "../services/landing-page";

export default function Home(props) {
  const { itemsProperties } = props;
  const mostPicks = itemsProperties.mostPicked;
  const categoriesProperties = itemsProperties.categories;
  return (
    <>
      <Hero />
      <MostPicked mostPicks={mostPicks} />
      <CategoriesPropertie categoriesProperties={categoriesProperties} />
      <Testimonial />
    </>
  );
}

export async function getServerSideProps() {
  const itemsProperties = await getLandinPage();
  return {
    props: { itemsProperties: itemsProperties.data },
  };
}
