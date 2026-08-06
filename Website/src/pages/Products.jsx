import { useItems } from "../hooks/useItems";
import { Items } from "../components/Items";

export function Products() {
  const { items, didMount } = useItems();

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form logic here
  }

  return (
    <main>
      <Items />

      {/* Input form placed directly in the main layout */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="productsInput">Products:</label>
        <input type="text" name="products" id="productsInput" />
        <button type="submit">Submit</button>
      </form>

      <p>{"didMount: " + didMount}</p>

      <section>
        {items.map((dataItem, index) => (
          <figure key={index + dataItem.id}>
            <img src={dataItem.image} alt={dataItem.title} />
            <figcaption>
              <p>{dataItem.title}</p>
              <p>
                ${dataItem.price} - {dataItem.category}
              </p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}

export default Products;

// import { useState, useEffect } from "react";
// import { Items } from "../components/Items";

// export function Products() {
//   const [products, setProducts] = useState([]);
//   const [didMount, setDidMount] = useState(false);
//   useEffect(componentDidMount, []);

//   return (
//     <main>
//       <p>{"didMount: " + didMount}</p>

//       <section>{products}</section>

//       <p>TOO DO explain what the user needs to do and about this page</p>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="productsInput">Limit Products:</label>
//         <input type="text" name="products" id="productsInput" />

//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );

//   // Fetch initial products when the component mounts
//   function componentDidMount() {
//     setDidMount(true);
//     handleData();
//   }

//   async function handleData() {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const results = await response.json();
//       const details = results.map(toProducts);
//       setProducts(details);
//     } catch (error) {
//       console.error("Error fetching initial data:", error);
//     }
//   }

//   // Create the handleSubmit function using data
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const data = {
//       limit: form.elements.products.value,
//     };

//     const dataString = new URLSearchParams(data).toString();
//     try {
//       const response = await fetch(
//         `https://fakestoreapi.com/products?${dataString}`,
//       );
//       const results = await response.json();
//       const details = results.map(toProducts);
//       setProducts(details);
//     } catch {
//       console.log("Error fetching filtered data:");
//     }
//   }

//   function toProducts(dataItem, index) {
//     const key = index + dataItem.id;
//     return (
//       <details key={key}>
//         <summary>{dataItem.title}</summary>
//         <figure>
//           <img src={dataItem.image} alt={dataItem.title} />
//           <figcaption>
//             ${dataItem.price} - {dataItem.category}
//           </figcaption>
//         </figure>
//       </details>
//     );
//   }
// }
// return (
//     <main className="container mx-auto p-6 space-y-6">
//       {/* Jewelry Slides Carousel */}
//       <Items />

//       <p className="text-xs font-mono text-neutral-500">
//         {"didMount: " + didMount}
//       </p>

//       {/* Tailwind Elements Styled Form */}
//       <form onSubmit={handleSubmit} className="flex max-w-md items-end gap-3">
//         <div className="relative flex-1" data-twe-input-wrapper-init>
//           <input
//             type="text"
//             name="products"
//             id="productsInput"
//             className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
//             placeholder="Limit Products"
//           />
//           <label
//             htmlFor="productsInput"
//             className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//           >
//             Products
//           </label>
//         </div>

//         <button
//           type="submit"
//           data-twe-ripple-init
//           data-twe-ripple-color="light"
//           className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-accent-200 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//         >
//           Submit
//         </button>
//       </form>

//       <section>{items.map(toProducts)}</section>

//       <p className="text-sm text-neutral-600 dark:text-neutral-300">
//         To render data from an API, we fetch the array of information when the
//         component first mounts. Once we have the data, we use standard dot
//         notation to call the .map method, writing a regular function directly
//         inside it to loop through each character and output organized HTML
//         elements to the page.
//       </p>
//     </main>
// export default Products;
