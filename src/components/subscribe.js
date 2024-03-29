/** @jsxImportSource theme-ui */
import { Box, Container } from "theme-ui";
import { rgba } from "polished";
import SubscriptionForm from "components/subscription-form";
import { SectionHead } from "layout/services";

const Subscribe = () => {
  return (
    <Box as="section" sx={styles.section} className="py-10">
      <Container>
        <SectionHead
          sx={styles.heading}
          title="Subscribe to get notified about update"
          description="By subscribing with your mail, you will accept our privacy policy"
        />
        <SubscriptionForm sx={styles.subscriptionForm} />
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    backgroundColor: "#2D2D2D",
  },
  heading: {
    h3: {
      color: "white",
    },
    p: {
      color: rgba("white", 0.6),
      fontSize: [2],
    },
  },
  subscriptionForm: {
    m: ["30px auto 0"],
    maxWidth: [555],
    flexDirection: ["column", null, null, "row"],
    input: {
      backgroundColor: rgba("white", 0.08),
      border: "0 none",
      color: rgba("white", 0.8),
      fontFamily: "body",
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("white", 0.8),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
};
