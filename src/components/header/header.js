/** @jsxImportSource theme-ui */

import { Container, Flex } from "theme-ui";
import { Link as ScrollLink } from "react-scroll";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import { useRouter } from "next/router";
import Logo from "components/logo";

export default function Header({ className, isWhite = false }) {
  const router = useRouter();

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo onClick={() => router.push("/")}>
            <h1
              className={`text-2xl font-semibold cursor-pointer ${
                isWhite && "text-white"
              }`}
            >
              CircularForZero
            </h1>
          </Logo>

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                sx={styles.nav.navLink}
                key={i}
                onClick={() => router.push(path)}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>

          {/* <Link
            path="/donate"
            ml={2}
            label="Donate"
            sx={styles.headerBtn}
            variant="buttons.primary"
          /> */}

          <button
            onClick={() => router.push("/donate")}
            className="bg-[#00897B] text-white px-5 py-2 rounded font-bold hidden lg:block"
          >
            Support Us
          </button>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#00897B",
    color: "white",
    display: ["none", null, null, null, "inline-block"],
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1430px",
    "@media(max-width:1440px)": {
      maxWidth: "1230px",
    },
    "@media screen and (max-width: 991px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 991px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
};
