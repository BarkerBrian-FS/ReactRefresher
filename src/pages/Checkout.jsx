import { useCart } from "../context/CartContext";

const Checkout = () => {
  const = useCart();
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
