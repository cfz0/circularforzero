// import { Button } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import * as React from "react";
import { BsCheck2 } from "react-icons/bs";

export default function PaymentDialog({
  open,
  handleClose,
  amount,
  payment_id,
}) {
  return (
    <>
      <Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
        <div className="py-5 flex flex-col items-center">
          <div className="bg-[#00897B] text-3xl text-white rounded-full px-2 py-2 ">
            <BsCheck2 />
          </div>
          <h1 className="font-bold text-2xl mt-2">
            Thank you for your support!
          </h1>
          <p className="text-center mt-2">
            Your payment of INR {amount} was completed <br />
            successfully. A receipt is on your way to your inbox <br /> Your
            order id is<strong> {payment_id} </strong>
          </p>

          <button
            className="bg-[#00897B] text-white px-10 py-2 font-bold rounded mt-5"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
}
