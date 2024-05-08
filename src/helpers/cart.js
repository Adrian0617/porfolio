export function addToCart(nameOfarray, product) {
    const cart = JSON.parse(localStorage.getItem(nameOfarray));

    if (!cart) {
      localStorage.setItem(nameOfarray, JSON.stringify([{...product, quantity: 1}]));
      return;
    }
    
    const existItem = cart.find((item) => item.id === product.id);
    
    if (existItem) {
      const newCart = cart.map(item => item.id === product.id ? ({...product, quantity: item.quantity+1 }) : item )
      localStorage.setItem(nameOfarray, JSON.stringify(newCart));
      return;
    }

    const newCart = [...cart,  {...product, quantity: 1}];
    localStorage.setItem(nameOfarray, JSON.stringify(newCart));
  
}

export function deleteItem(nameOfarray, id) {
  const getItems = JSON.parse(localStorage.getItem(nameOfarray));
  const newItems = getItems.filter((item) => item.id !== id);
  localStorage.setItem(nameOfarray, JSON.stringify(newItems));
}
