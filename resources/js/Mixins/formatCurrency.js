export default {
    methods: {
        formatCurrency(price) {
            var priceNum = parseInt(price, 10);
            priceNum = priceNum / 100;
            // price = price / 100;
            return priceNum.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
            });
        },
    },
};
