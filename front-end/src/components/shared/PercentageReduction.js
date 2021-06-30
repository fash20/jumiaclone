const reduction = (price, oldPrice) => {
    let reduct = 0;
    if (oldPrice === null | oldPrice === undefined ){
        oldPrice = price
    }
    else {
        reduct = (((oldPrice - price)/oldPrice)*100);
    }
    return reduct
} 

export default reduction