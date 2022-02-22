let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newproduct, next) => {
    const exitsProduct = cart.find((item) => item.id === newproduct.id);
    if (!exitsProduct) {
        cart.push(newproduct);
    } else {
        // eslint-disable-next-line no-plusplus
        exitsProduct.quantity += +newproduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
