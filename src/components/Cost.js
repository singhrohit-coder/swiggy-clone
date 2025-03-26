

const Cost = ({
    cartItems,
    deliveryFee,
    deliveryTip,
    platformFee,
    gstAndRestaurantCharges,
}) => { 

    // function for calculate price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, cartItem) => {
            const price = cartItem.card.info.price
                ? cartItem.card.info.price / 100
                : cartItem.card.info.defaultPrice / 100;
            return total + price * cartItem.quantity;
        }, 0);
    };

    // Bill Details Calculations
    const itemTotal = calculateTotalPrice();
    const totalBill = itemTotal + deliveryFee + deliveryTip + platformFee + gstAndRestaurantCharges;

    return (
        <div className="px-4 w-full">
            <div className="font-bold text-lg flex justify-center items-center">Bill Details</div>
            <div className="flex justify-between text-sm py-2">
                <span>Item Total</span>
                <span>₹ {itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm py-2">
                <span>Delivery Fee | 8.4 kms</span>
                <span>₹ {deliveryFee}</span>
            </div>
            <div className="flex justify-between text-sm py-2">
                <span>Delivery Tip</span>
                <span>₹ {deliveryTip}</span>
            </div>
            <div className="flex justify-between text-sm py-2">
                <span>Platform Fee</span>
                <span>₹ {platformFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm py-2">
                <span>GST and Restaurant Charges</span>
                <span>₹ {gstAndRestaurantCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg py-2 border-t">
                <span>TO PAY</span>
                <span>₹ {totalBill.toFixed(2)}</span>
            </div>
        </div>
    );

};

export default Cost;