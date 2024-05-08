
export function addToCart(nameOfarray, product) {
  if (nameOfarray === 'cart') {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([product]))
      return
    }
    const newCart = [...cart, product]
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
}