/** @jsxImportSource @theme-ui/core */

import { NavLink as MenuLink, Link as A } from "theme-ui";
import NextLink from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { keyframes } from "@emotion/react";

export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}
export function Link({ path, children, label, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({ path, label, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? "Learn More"} <IoIosArrowForward size="16px" />
      </A>
    </NextLink>
  );
}

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;

const styles = {
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transform: "translateX(3px)",
    },
    ":hover": {
      svg: {
        animation: `${fadeRight} 0.5s linear`,
      },
    },
  },
};
