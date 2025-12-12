import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data";

export default function Invoice() {
  // eslint-disable-next-line prefer-const
  let params = useParams();
  // eslint-disable-next-line prefer-const
  let invoice = getInvoice(Number(params.invoiceId));

  return (
    <>
      {invoice && (
        <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
        </main>
      )}
    </>
  );
}
