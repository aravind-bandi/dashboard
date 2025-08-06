// import React, { useState } from "react";

// const InvoiceForm = ({ setInvoiceData }) => {
//   const [formData, setFormData] = useState({
//     customerName: "",
//     products: [{ name: "", quantity: 1, price: 0 }],
//     taxRate: 10,
//     discount: 0,
//     invoiceNumber: "", // Add invoice number
//   });

//   const handleInputChange = (e, index = null) => {
//     if (index !== null) {
//       const updatedProducts = [...formData.products];
//       updatedProducts[index][e.target.name] = e.target.value;
//       setFormData({ ...formData, products: updatedProducts });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const addProduct = () => {
//     setFormData({
//       ...formData,
//       products: [...formData.products, { name: "", quantity: 1, price: 0 }],
//     });
//   };

//   const generateInvoiceNumber = () => {
//     // Generate a unique invoice number
//     return `INV-${Date.now()}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const invoiceNumber = generateInvoiceNumber(); // Generate invoice number
//     setInvoiceData({ ...formData, invoiceNumber }); // Include in data
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="customerName"
//         placeholder="Customer Name"
//         onChange={handleInputChange}
//       />
//       {formData.products.map((product, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             onChange={(e) => handleInputChange(e, index)}
//           />
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Quantity"
//             onChange={(e) => handleInputChange(e, index)}
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             onChange={(e) => handleInputChange(e, index)}
//           />
//         </div>
//       ))}
//       <button type="button" onClick={addProduct}>
//         Add Product
//       </button>
//       <input
//         type="number"
//         name="taxRate"
//         placeholder="Tax Rate (%)"
//         onChange={handleInputChange}
//       />
//       <input
//         type="number"
//         name="discount"
//         placeholder="Discount"
//         onChange={handleInputChange}
//       />
//       <button type="submit">Generate Invoice</button>
//     </form>
//   );
// };

// export default InvoiceForm;
