// Template Literals Example
const product = {
  name: "Laptop Pro",
  price: 82499.99, // Price in INR
  specs: {
    cpu: "3.2GHz Quad Core",
    ram: "16GB",
    storage: "512GB SSD",
  },
  inStock: true,
};

// Write a function to format price in Indian Rupees using template literals
const formatPrice = (price) => `INR ${price.toFixed(2)}`;

 
// Function to check availability
const getAvailability = (inStock) => (inStock ? "In Stock" : "Out of Stock");

// Write a multi-line product description using template literals
const productDescription = `

Special Offer: ${product.name}

------------------

Price: ${formatPrice(product.price)}

Status: ${getAvailability(product.inStock)}

 

Technical Specifications:

• CPU: ${product.specs.cpu}

• RAM: ${product.specs.ram}

• Storage: ${product.specs.storage}

 

${

  product.inStock

    ? `Order now and get free shipping!

     Limited time offer - ${formatPrice(product.price)} only!`

    : `Subscribe to be notified when back in stock.`

}

`;
try {
  console.log(productDescription);
} catch (error) {
  console.error("Please read the instructions carefully and try again.");
}
