//Add new products to db and page from form
const createNewProduct = async (event) => {
    event.preventDefault();

  
    const product_name = document.getElementById('product-name').value.trim();
    const description = document.getElementById('product-description').value.trim();
    const price = document.getElementById('price').value.trim();
    const category_id = document.getElementById('product-category').value.trim();

  
    if (product_name && description && price && category_id) {
      console.log(product_name)
      const response = await fetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify({ product_name, description, price, category_id, }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create product');
      }
    }
  };


document
  .querySelector('.product-create-btn')
  .addEventListener('click', createNewProduct);

//Go to product checkoutpage on click of card
const cards = document.querySelectorAll('.card')

function getProductId () {
    const productId = this.getAttribute('value')
    document.location.replace(`/checkout/${productId}`)
}

for (const card of cards) {
    card.addEventListener('click', getProductId)
}

