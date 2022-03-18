import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/atom/Breadcrumb";
import Carousel from "../../components/organisms/DetailItem/Carousel";
import DetailItem from "../../components/organisms/DetailItem/DetailItem";
import FormBook from "../../components/organisms/DetailItem/FormBook";
import Testimonial from "../../components/organisms/Testimonial";
import { getDetailitem } from "../../services/detail-item-page";

const Index = (props) => {
  const { data } = useSelector((state) => state.dataReducer);
  const { item } = props;
  const night = data[0].perNight();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "UPDATE_ITEM_ID", payload: item });
  }, []);

  return (
    <div className="container">
      <section className="details">
        <div className="place text-center">
          <Breadcrumb previousPage={"Home"} currentPage={"Hotel Detail"} />
          <h2>{item.title}</h2>
          <p className="text-secondary fw-light fs-6">
            {item.city} {item.country}
          </p>
        </div>
        <Carousel image={item.image} />
        <div className="row d-flex my-5">
          <DetailItem item={item} />
          <FormBook
            night={night}
            price={item.price}
            total={item.price * night}
            id={item._id}
          />
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const response = await getDetailitem(id);
  const item = response.data;
  return {
    props: item,
  };
}
