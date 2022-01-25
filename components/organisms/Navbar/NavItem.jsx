import Link from "next/link";

const NavItem = (props) => {
  const { title, href, active = false } = props;

  const classNames = `nav-link text-secondary ${active && "active"}`;
  return (
    <li className="nav-item ">
      <Link href={href}>
        <a className={classNames}>{title}</a>
      </Link>
    </li>
  );
};

export default NavItem;
