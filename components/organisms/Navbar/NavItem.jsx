const NavItem = (props) => {
  const { title, href, active } = props;

  const classNames = `nav-link text-secondary ${active ? "active" : ""}`;
  return (
    <li className="nav-item ">
      <a className={classNames} href={href}>
        {title}
      </a>
    </li>
  );
};

export default NavItem;
