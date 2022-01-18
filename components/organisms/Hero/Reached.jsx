import Image from "next/image";
import ReactNumberFormat from "react-number-format";

const Reached = (props) => {
  const { icon, count, info } = props;
  return (
    <div className="col-md-4 ">
      <Image
        src={icon}
        width={31}
        height={31}
        objectFit="contain"
        layout="fixed"
        alt="icon"
        className="pe-1 "
      />
      <p>
        <ReactNumberFormat value={count} displayType="text" thousandSeparator />
        <span className="text-muted fw-light">
          <small> {info}</small>
        </span>
      </p>
    </div>
  );
};

export default Reached;
