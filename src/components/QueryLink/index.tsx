/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { NavLink, useLocation } from "react-router-dom";

export default function QueryLink({ to, ...props }: any) {
  let location = useLocation();

  return <NavLink to={to + location.search} {...props} />;
}
