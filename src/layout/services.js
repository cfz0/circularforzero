/** @jsxImportSource theme-ui */
import { Box, Grid, Heading, Text } from "theme-ui";
import Image from "components/image";
import { LearnMore } from "components/link";
import Fade from "react-reveal/Fade";

const Services = ({ data }) => {
  console.log(data);
  return (
    <Box as="section" id="get-involved" sx={styles.section}>
      <Fade bottom>
        <SectionHead title={data.sub_heading} description={data.heading} />

        <div className="w-full flex justify-center">
          <Grid sx={styles.serviceGrid} className="shadow-2xl border px-10">
            {data.card.map((card, i) => (
              <Box sx={styles.service} key={i}>
                <Box as="figure">
                  <Image
                    width="64"
                    height="64"
                    // src={`${CMS_URL}${card.icon.data.attributes.url}`}
                    src=""
                    alt={card.title}
                  />
                </Box>
                <Heading as="h4">{card.heading}</Heading>
                <Text as="p">{card.description}</Text>
                <LearnMore path={card.link} />
              </Box>
            ))}
          </Grid>
        </div>
      </Fade>
    </Box>
  );
};

export const SectionHead = ({
  title,
  slogan,
  description,
  emoji,
  ...props
}) => {
  return (
    <Box sx={styles.heading} {...props}>
      {slogan && (
        <Text as="p" sx={styles.slogan}>
          {slogan}
        </Text>
      )}
      <Heading as="h3" sx={styles.title}>
        {emoji ? <span>{title}</span> : title}
        {emoji && <Image src={emoji} alt="emoji" />}
      </Heading>
      <Text as="p" sx={styles.description}>
        {description}
      </Text>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [5, null, null, 5, 5, null, 5],
    pb: [5, null, null, null, 5, null, 5],
  },
  serviceGrid: {
    backgroundColor: "white",
    boxShadow: "0px 0px 25px rgba(54, 91, 125, 0.04)",
    borderRadius: 10,
    gap: ["40px", null, null, "60px 40px", "50px 30px", "60px 40px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(1, 250px)",
      null,
      null,
      "repeat(2, 260px)",
      "repeat(3, 258px)",
      "repeat(4, 300px)",
    ],
    pt: [5, null, null, 4],
    pb: [5, null, null, 4],
  },

  heading: {
    textAlign: "center",
    maxWidth: 660,
    margin: "0 auto 35px",
  },
  slogan: {
    color: "primary",
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 2.5,
  },
  title: {
    color: "heading",
    fontWeight: 600,
    fontSize: [4, null, null, 6],
    lineHeight: [1.33, 1.33, 1.5],
    letterSpacing: [null, null, null, "heading"],
    img: {
      ml: ["15px"],
      position: "relative",
      top: "8px",
      maxWidth: [25, null, null, "100%"],
    },
  },
  description: {
    color: "heading",
    fontSize: ["14px", null, "16px"],
    lineHeight: [1.86, null, 2.2],
    mt: [5],
    maxWidth: 610,
    m: ["10px auto 0"],
  },
  service: {
    textAlign: "center",
    figure: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // eslint-disable-next-line no-sparse-arrays
      mb: [4, null, null, , null],
      minHeight: 64,
    },
    h4: {
      color: "heading",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: 1.77,
      mb: [2, null, null, 3],
    },
    p: {
      color: "text",
      fontSize: [1, null, null, "15px"],
      lineHeight: [1.83, null, null, 2],
      mb: [3, null, null, 4],
    },
    a: {
      fontSize: [1, null, null, "15px"],
    },
  },
};
