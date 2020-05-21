export const PRODUCT_SEARCH = "PRODUCT_SEARCH";
export const PRODUCT_CATEGORIES = "PRODUCT_CATEGORIES";

export const searchProduct = (productSearch) => ({
    type: PRODUCT_SEARCH,
    payload: productSearch,
});

export const categoriesProduct = (categories) => ({
    type: PRODUCT_CATEGORIES,
    payload: categories,
})