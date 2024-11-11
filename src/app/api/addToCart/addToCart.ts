export const addToCart = async (
  productId: string, // Specify the type of productId as number
  productName: string, // Specify the type of productName as string
  productPrice: string, // Specify the type of productPrice as number
  quantity: number = 1 // Specify the type of quantity as number (default to 1)
): Promise<any> => {
  // Specify the return type as Promise<any>
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom-api/v1/cart/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productId,
        productName,
        productPrice,
        quantity,
      }),
    }
  );
  const data = await response.json();
  return data;
};
