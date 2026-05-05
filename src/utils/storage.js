export const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const addToWishlist = (figure) => {
    const list = getWishlist();

    const exists = list.find((item) => item.id === figure.id);
    if (!exists) {
        list.push(figure);
        localStorage.setItem("wishlist", JSON.stringify(list));
    }
};

export const removeFromWishlist = (id) => {
    const list = getWishlist().filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(list));
};



//Collection
export const getCollection = () => {
    return JSON.parse(localStorage.getItem("collection")) || [];
};

export const addToCollection = (figure) => {
    const list = getCollection();

    const exists = list.find((item) => item.id === figure.id);
    if (!exists) {
        list.push(figure);
        localStorage.setItem("collection", JSON.stringify(list));
    }
};

export const removeFromCollection = (id) => {
    const list = getCollection().filter((item) => item.id !== id);
    localStorage.setItem("collection", JSON.stringify(list));
};

// check functions
export const isInCollection = (id) => {
    const list = getCollection();
    return list.some((item) => item.id === id);
};

export const isInWishlist = (id) => {
    const list = getWishlist();
    return list.some((item) => item.id === id);
};