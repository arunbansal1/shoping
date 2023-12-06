export const getDiscountedPrice = (regularPrice, discount) => {
    regularPrice = regularPrice || 0;
    discount = discount || 0;
    const discountValue = regularPrice *(discount/100);
    let finalValue = regularPrice-discountValue;
    return finalValue.toFixed(2);
}

