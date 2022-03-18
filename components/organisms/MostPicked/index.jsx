import ImgThumbLg from "./ImgThumbLg";
import ImgThumbSm from "./ImgThumbSm";

const MostPicked = (props) => {
  const { mostPicks } = props;
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
  return (
    <section className="most-picked my-5 ">
      <h2>Most Picked</h2>
      <div className={`row mt-4 `}>
        <ImgThumbLg
          title={mostPicks[0].title}
          city={mostPicks[0].city}
          country={mostPicks[0].country}
          price={mostPicks[0].price}
          img={`${IMG_URL}/${mostPicks[0].image[0].imageUrl}`}
          href={`/properties/${mostPicks[0]._id}`}
        />
        <div
          className={`col-md-8 d-flex flex-wrap flex-fill align-content-between justify-content-around mt-1 `}
        >
          {mostPicks.map((item, i) => {
            return (
              i > 0 && (
                <ImgThumbSm
                  img={`${IMG_URL}/${item.image[0].imageUrl}`}
                  price={item.price}
                  place={item.title}
                  city={item.city}
                  country={item.country}
                  key={item._id}
                  href={`/properties/${item._id}`}
                />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MostPicked;
