/** @jsxImportSource theme-ui */

import { Flex, Box } from "theme-ui";
import { rgba } from "polished";
import Logo from "./logo";
import Link from "next/link";
// import Logo from "components/logo";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer} className="py-7  sm:px-10 px-5">
      <Flex sx={styles.footerInner}>
        <Flex sx={styles.copyright} className="lg:items-start">
          <Logo>
            <h1 className="text-2xl font-semibold text-white">
              CircularForZero
            </h1>
          </Logo>

          <div className="max-w-[350px] mt-2 text-white text-sm opacity-70 mt-5 lg:mt-0">
            We want to accelerate the countdown to a zero-waste world through a
            systematic engagement of industry sectors, government, policy think
            tanks, entrepreneurs, and academic research institutions.
            {/* Design &amp; Developed by{" "}
            <span className="cursor-pointer" style={{ color: "#00897B" }}>
              Pulkit Gupta{" "}
            </span> */}
          </div>
        </Flex>

        <div className="mt-5 lg:mt-0">
          <h1 className="text-2xl text-white font-medium">Useful Links</h1>
          <p className="text-white text-md opacity-70 text-left mt-2">
            <div>
              <Link href="/team">Team</Link>
            </div>
            <Link href="/about">About</Link>
            <br />
            <Link href="/our-programs">Our Programs</Link>
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <h1 className="text-2xl text-white font-medium">Address</h1>
          <p className="text-white text-sm opacity-70 text-left mt-2">
            House no 3/6 floor 3rd landmark <br />
            opp park Single storey ramesh nagar
            <br />
            newdelhi West Delhi DL 110015 IN
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <h1 className="text-2xl text-white font-medium">Contact</h1>
          <p className="text-white opacity-70 mt-2">
            +91 95995 47095
            <br />
            circularforzero@gmail.com
          </p>
        </div>
      </Flex>
      <h1 className="text-white w-full text-center mt-10 -mb-3">
        Designed and Developed by{" "}
        <span className="text-primary">Pulkit Gupta</span>
      </h1>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#292929",
  },
  footerInner: {
    // alignItems: "center",
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
