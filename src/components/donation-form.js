/** @jsxImportSource theme-ui */

import {
  Box,
  Text,
  Radio,
  Label,
  Input,
  Button,
  Heading,
  Checkbox,
} from "theme-ui";
import { rgba } from "polished";
import { useState } from "react";
import loadScript from "hooks/useScript";
import { API } from "api/cms";
import PaymentStatus from "./payment-status";
import { CircularProgress } from "@material-ui/core";

// import googlePay from "assets/images/icons/google-pay.png";

const presetAmounts = [10, 200, 1000, 5000];

const DonationForm = () => {
  const [state, setState] = useState({
    // donationType: "onetime",
    amount: 10,
    joinCommunity: true,
    step: 1,
    name: "",
    email: "",
    mobile_phone: "",
    payment_id: null,
  });

  const detailsForm = [
    {
      placeholder: "Your Name *",
      id: "name",
    },
    {
      placeholder: "Email Address *",
      id: "email",
    },
    {
      placeholder: "Mobile Phone (Optional)",
      id: "mobile_phone",
    },
  ];

  // const handleDonationType = (e) => {
  //   setState({
  //     ...state,
  //     donationType: e.target.value,
  //   });
  // };

  const [dialogopen, setDialogOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleAmount = (e) => {
    setError({ field: "", message: "" });
    setState({
      ...state,
      amount: Number(e.target.value),
    });
  };

  const handleCheckbox = (e) => {
    setState({
      ...state,
      joinCommunity: e.target.checked,
    });
  };

  const [error, setError] = useState({ field: "", message: "" });

  const handleClickNext = () => {
    if (isNaN(state.amount)) {
      return setError({
        field: "amount",
        message: "You can only use numbers",
      });
    }

    if (!state.amount) {
      return setError({
        field: "amount",
        message: "Please select or type the amount",
      });
    }
    if (state.amount <= 1) {
      return setError({
        field: "amount",
        message: "The amount must be atleast INR 1.00",
      });
    }

    setError({ field: "", message: "" });
    setState({ ...state, step: 2 });
  };

  const handleSubmit = async () => {
    if (!state.name) {
      return setError({
        field: "name",
        message: "Please type your name",
      });
    }
    if (!state.email) {
      return setError({
        field: "email",
        message: "Please type your email",
      });
    }
    setLoading(true);

    try {
      const order = await API.post("/donate/order", {
        currency: "INR",
        amount: Number(state.amount * 100),
      });

      await initateRazorpay(order);
      setLoading(false);
    } catch (error) {
      alert("An error occured");
      setLoading(false);
    }
  };

  const initateRazorpay = async (order) => {
    const script = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!script) return null;

    const options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      amount: parseInt(state.amount * 100),
      currency: "INR",
      name: `CircularForZero`,
      description: ``,
      // image: "https://www.multi-talented.com/favicon.png",
      order_id: order.id,
      handler: async function (response) {
        setState({
          ...state,
          payment_id: response.razorpay_payment_id,
          step: 1,
          email: "",
          mobile_phone: "",
          name: "",
        });
        API.post("/payment/success", {
          amount: state.amount,
          payment_id: response.razorpay_payment_id,
          to: state.email,
        });
        setLoading(false);
        setDialogOpen(true);

        return response;
      },
      prefill: {
        name: state.name,
        email: state.email,
        contact: state.mobile_phone,
      },

      theme: {
        color: "#00897B",
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.on("payment.failed", function ({ error }) {
      console.log(error);
      return error;
    });

    paymentObject.open();
  };

  return (
    <>
      <PaymentStatus
        open={dialogopen}
        handleClose={() => setDialogOpen(false)}
        amount={state.amount}
        payment_id={state.payment_id}
      />
      <Box sx={styles.formWrapper}>
        <Heading sx={styles.title}>
          Donate for the smile of orphans face
        </Heading>
        <Box sx={styles.form}>
          {/* <Box sx={styles.radioGroup}>
          <Label>
            <Radio
              value="onetime"
              name="donation-type"
              defaultChecked={state.donationType === "onetime"}
              onChange={handleDonationType}
            />
            Donate onetime
          </Label>
          <Label>
            <Radio
              value="monthly"
              name="donation-type"
              defaultChecked={state.donationType === "monthly"}
              onChange={handleDonationType}
            />
            Every Month
          </Label>
        </Box> */}
          {state.step === 1 ? (
            <>
              <Box sx={styles.presetAmounts}>
                {presetAmounts.map((amount, i) => (
                  <Label
                    key={i}
                    className={state.amount === amount ? "active" : ""}
                  >
                    <Radio
                      value={amount}
                      name="amount"
                      onChange={handleAmount}
                      defaultChecked={state.amount === amount}
                    />
                    ₹{amount}
                  </Label>
                ))}
              </Box>
              <Box sx={styles.input}>
                <Label htmlFor="other-amount" variant="styles.srOnly">
                  Other Amount (INR)
                </Label>
                <Input
                  id="other-amount"
                  placeholder="Other Amount (INR)"
                  onChange={handleAmount}
                  sx={error.field === "amount" ? styles.error : {}}
                />
                {error.field === "amount" && (
                  <p className="mt-2 text-[#ff0000]">{error.message}</p>
                )}
              </Box>
              <Box sx={styles.checkbox}>
                <Label>
                  <Checkbox
                    onChange={handleCheckbox}
                    defaultChecked={state.joinCommunity}
                  />
                  <Text as="span">Want to join with donation community</Text>
                </Label>
              </Box>
              <Box sx={styles.buttonGroup}>
                <Button variant="primary" onClick={handleClickNext}>
                  Next
                </Button>
              </Box>
            </>
          ) : (
            <>
              {detailsForm.map((item, i) => (
                <Box sx={styles.input} key={i}>
                  <Label htmlFor="other-amount" variant="styles.srOnly">
                    {item.placeholder}
                  </Label>
                  <Input
                    id="other-amount"
                    placeholder={item.placeholder}
                    onChange={({ target }) => {
                      setState({ ...state, [item.id]: target.value });
                    }}
                    sx={error.field === item.id ? styles.error : {}}
                  />
                  {error.field === item.id && (
                    <p className="mt-2 text-[#ff0000]">{error.message}</p>
                  )}
                </Box>
              ))}
              <Box sx={styles.buttonGroup}>
                <Button
                  variant="primary"
                  sx={styles.submit}
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: loading && "rgba(0,0,0,0.12)",
                    pointerEvents: loading && "none",
                  }}
                >
                  {loading ? (
                    <CircularProgress
                      size={24}
                      style={{ color: "rgba(0,0,0,0.2)" }}
                    />
                  ) : (
                    "Support"
                  )}
                </Button>
                <div className="mt-2">
                  <Button
                    variant="muted"
                    onClick={() => setState({ ...state, step: 1 })}
                    style={{ pointerEvents: loading && "none" }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DonationForm;

const styles = {
  formWrapper: {
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 24px 50px rgba(54, 91, 125, 0.05)",
    p: ["26px", null, null, "35px 40px 50px"],
    position: "relative",
    "::before, ::after": {
      background: `url(${"/assets/donate-dot-pattern.png"}) no-repeat right top`,
      content: [null, null, null, null, null, `''`],
      position: "absolute",
      width: 302,
      height: 347,
      zIndex: -1,
    },
    "::before": {
      left: "-60px",
      bottom: 15,
    },
    "::after": {
      right: "-41px",
      top: "-30px",
    },
  },
  title: {
    color: "textSecondary",
    fontWeight: "bold",
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: "heading",
    mb: [4, null, null, 5],
    textAlign: ["center", null, null, null, "left"],
  },
  form: {
    label: {
      alignItems: "center",
      cursor: "pointer",
      fontWeight: 400,
    },
  },
  radioGroup: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    flexDirection: ["column", null, null, "row"],
    mb: [5, null, null, 5],
    "> label": {
      alignItems: "center",
      fontSize: [1, null, null, "15px"],
      width: "auto",
      "+ label": {
        ml: [null, null, null, 4],
        mt: [2, null, null, 0],
      },
    },
  },
  presetAmounts: {
    display: "grid",
    alignItems: "center",
    marginBottom: 15,
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: ["7px", null, null, 2],
    mb: [3],
    label: {
      color: "textSecondary",
      border: (t) => `1px solid ${t.colors.borderColor}`,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: [1, 2, null, 3],
      lineHeight: 1.11,
      minHeight: [40, null, null, null, 50, 60],
      padding: 0,
      textAlign: "center",
      transition: "0.3s ease-in-out 0s",
      "> div": {
        position: "absolute",
        height: 0,
        opacity: 0,
        visibility: "hidden",
        width: 0,
      },
      "&.active": {
        backgroundColor: "#EDFFF7",
        borderColor: "primary",
        color: "#00897B",
      },
    },
  },
  input: {
    mb: [3, null, null, 4],
    input: {
      minHeight: [45, null, null, 60, 50, 60],
      "::placeholder": {
        color: rgba("#02073E", 0.35),
      },
    },
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    label: {
      span: {
        fontSize: [0, 1],
      },
    },
  },
  buttonGroup: {
    mt: [5, null, null, 8],
    span: {
      display: "flex",
      justifyContent: "center",
      color: rgba("#000", 0.4),
      fontWeight: "bold",
      fontSize: 1,
      lineHeight: 2.87,
    },
    button: {
      minHeight: [45, null, null, 60, 50, 60],
      width: "100%",
    },
  },
  googlePay: {
    backgroundColor: "#EDF2F7",
    minHeight: 60,
    py: 0,
    fontSize: [1, null, null, 2],
    img: {
      mr: 2,
      maxWidth: [23, 25, null, null, 25, "100%"],
    },
  },
  error: {
    border: "1px solid #FF0000",
  },
};
