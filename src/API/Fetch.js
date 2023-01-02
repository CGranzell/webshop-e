   //Hämtar alla produkter
   export const  fetchProducts = async (setProducts) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  };




  // Hämtar en produkt
export const fetchProduct =  async (setProduct, productNr) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productNr}`);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    setProduct(data)
  } catch (error) {
    console.log(error);
  }
};