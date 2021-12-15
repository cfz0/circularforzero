/** @jsxImportSource theme-ui */

import { Label, Flex, Input, Button } from "theme-ui";

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor="email" variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id="email"
        placeholder="Enter Email address"
        style={{ paddingLeft: "30px" }}
      />
      <Button>{buttonLabel ?? "Get Started"}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      minHeight: [60],
      height: "auto",
      width: "auto",
    },
    button: {
      ml: [3],
    },
  },
};
