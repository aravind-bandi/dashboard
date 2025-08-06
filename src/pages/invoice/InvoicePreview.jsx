// import React from "react";
// import jsPDF from "jspdf";

// const InvoicePreview = ({ data }) => {
//   const calculateTotal = () => {
//     const subTotal = data.products.reduce(
//       (sum, product) =>
//         sum + product.quantity * parseFloat(product.price || 0),
//       0
//     );
//     const tax = (subTotal * data.taxRate) / 100;
//     const discount = parseFloat(data.discount || 0);
//     return subTotal + tax - discount;
//   };

//   const downloadInvoice = () => {
//     const doc = new jsPDF();
//     doc.text("Invoice", 10, 10);
//     doc.text(`Invoice Number: ${data.invoiceNumber}`, 10, 20); // Include invoice number
//     doc.text(`Customer Name: ${data.customerName}`, 10, 30);
//     data.products.forEach((product, index) => {
//       doc.text(
//         `${index + 1}. ${product.name} - ${product.quantity} x ${product.price}`,
//         10,
//         40 + index * 10
//       );
//     });
//     doc.text(`Total: ${calculateTotal().toFixed(2)}`, 10, 40 + data.products.length * 10);
//     doc.save(`invoice_${data.invoiceNumber}.pdf`);
//   };

//   return (
//     <div>
//       <h2>Invoice Preview</h2>
//       <p>Invoice Number: {data.invoiceNumber}</p>
//       <p>Customer Name: {data.customerName}</p>
//       <ul>
//         {data.products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.quantity} x {product.price}
//           </li>
//         ))}
//       </ul>
//       <p>Total: {calculateTotal().toFixed(2)}</p>
//       <button onClick={downloadInvoice}>Download Invoice</button>
//     </div>
//   );
// };

// export default InvoicePreview;
