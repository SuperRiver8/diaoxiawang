import { Link as RouterLink, type LinkProps } from "react-router-dom";

export function Link({ href, ...props }: Omit<LinkProps, "to"> & { href: string }) {
  return <RouterLink to={href} {...props} />;
}
