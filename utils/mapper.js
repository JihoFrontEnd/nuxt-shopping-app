export function mapRandomImageUrl(product) {
  return {
    ...product,
    imageUrl: `${product.imageUrl}?random=${Math.random()}`,
  };
}
