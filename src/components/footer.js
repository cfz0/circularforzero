/** @jsxImportSource theme-ui */

import { Flex, Box, Text, Container } from "theme-ui";
import { rgba } from "polished";
import { Link } from "components/link";
// import Logo from "components/logo";

const menuItems = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#",
    label: "Team",
  },
  {
    path: "#",
    label: "Team",
  },
  {
    path: "#",
    label: "Team",
  },
  {
    path: "#",
    label: "Team",
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer} className="py-7 px-10">
      <Flex sx={styles.footerInner}>
        <Flex sx={styles.copyright} className="lg:items-start items-center">
          <h1 className="text-2xl font-semibold text-white">CircularForZero</h1>

          <Text as="span">
            Design &amp; Developed by{" "}
            <span className="cursor-pointer" style={{ color: "#00897B" }}>
              Pulkit Gupta{" "}
            </span>
          </Text>
        </Flex>
        <Flex as="ul" sx={styles.footerNav}>
          {menuItems?.map((item, index) => (
            <li key={index}>
              <Link path={item?.path}>{item?.label}</Link>
            </li>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#292929",
  },
  footerInner: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, null, "row"],
  },
  copyright: {
    flexDirection: ["column"],
    span: {
      color: rgba("white", 0.7),
      fontSize: 1,
      lineHeight: "18px",
      mt: [3, null, null, null, 0],
      textAlign: ["center", null, null, "left"],
    },
  },
  logo: {},
  footerNav: {
    listStyle: "none",
    // flexDirection: ['column', null, null, null, 'row'],
    m: ["25px 0 0", null, null, null, 0],
    p: 0,
    li: {
      "+ li": {
        ml: [3, null, null, null, 3, 4],
      },
      a: {
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: [1, null, null, 2, 1, 2],
      },
    },
  },
};
