export function useProducts(prisma) {
  const [data, setData] = useState();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return [data, handleSubmit];

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const where = {};

    const productId = form.elements.productId.value;
    const productName = form.elements.productName.value;
    const productPrice = form.elements.value;

    if (productId) where.id = productId;
    if (productName) where.name = productName;
    if (productPrice) where.price = { lte: maxPrice };

    const results = await prisma.products.findMany({ where });

    setData(results);
  }
}
// const [data, setData] = useState([]);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;

//     const productId = form.elements.productId.value;
//     const productName = form.elements.productName.value;
//     const productPrice = form.elements.productPrice.value;

//     // Send params to your backend API route (e.g., /api/products)
//     const params = new URLSearchParams();
//     if (productId) params.append("id", productId);
//     if (productName) params.append("name", productName);
//     if (productPrice) params.append("price", productPrice);

//     const response = await fetch(`/api/products?${params.toString()}`);
//     const results = await response.json();

//     setData(results);
//   }
