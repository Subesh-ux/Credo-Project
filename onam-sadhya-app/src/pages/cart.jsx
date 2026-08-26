export default function Cart({
    
    addToCart,
    removeFromCart,
    totalQuantity,
    discountAmount,
    finalAmount,
    subTotal,
    cartlist
}) {

    return (
        <>
            <div className="container my-5">

                <h2 className="text-center fw-bold text-success mb-4">
                    🛒 Your Cart
                </h2>

                <div className="row g-4">

                    
                    <div className="col-8">

                        <div className="card shadow-sm border-0">
                            <div className="card-header bg-success text-white fw-bold fs-5">
                                CART ITEMS
                            </div>

                            <div className="card-body">

                                {
                                    cartlist.map(food => {

                                        if (food.Quantity > 0) {
                                            return (
                                                <div
                                                    className="card mb-3 border-light shadow-sm"
                                                    key={food.id}
                                                >
                                                    <div className="row g-0 align-items-center">

                                                        <div className="col-3">
                                                            <img
                                                                src={food.image}
                                                                alt={food.name}
                                                                className="img-fluid rounded-start"
                                                                style={{
                                                                    height: "140px",
                                                                    width: "100%",
                                                                    objectFit: "cover"
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="col-9">
                                                            <div className="card-body">

                                                                <div className="d-flex justify-content-between align-items-start">

                                                                    <div>
                                                                        <h5 className="card-title fw-bold mb-1">
                                                                            {food.name}
                                                                        </h5>

                                                                        <p className="text-muted mb-2">
                                                                            {food.category}
                                                                        </p>

                                                                        <span className="fw-bold text-success">
                                                                            ₹{food.price}
                                                                        </span>
                                                                    </div>

                                                                    <div className="text-end">

                                                                        <p className="fw-bold mb-2">
                                                                            ₹{food.price * food.Quantity}
                                                                        </p>

                                                                        <div className="btn-group">

                                                                            <button
                                                                                className="btn btn-outline-success"
                                                                                onClick={() => removeFromCart(food.id)}
                                                                            >
                                                                                −
                                                                            </button>

                                                                            <button className="btn btn-success" disabled>
                                                                                {food.Quantity}
                                                                            </button>

                                                                            <button
                                                                                className="btn btn-outline-success"
                                                                                onClick={() => addToCart(food.id)}
                                                                            >
                                                                                +
                                                                            </button>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        }

                                        return null
                                    })
                                }

                            </div>
                        </div>

                    </div>


                    {/* ORDER SUMMARY */}
                    <div className="col-4">

                        <div className="card shadow border-0">

                            <div className="card-header bg-success text-white text-center fw-bold fs-5">
                                ORDER SUMMARY
                            </div>

                            <div className="card-body">

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Total Items</span>
                                    <span className="fw-bold">
                                        {totalQuantity}
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>
                                        ₹{subTotal.toFixed(2)}
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Discount</span>
                                    <span className="text-success fw-bold">
                                        − ₹{discountAmount}
                                    </span>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between mb-4">
                                    <span className="fw-bold fs-5">
                                        Grand Total
                                    </span>

                                    <span className="fw-bold fs-5 text-success">
                                        ₹{(finalAmount).toFixed(2)}
                                    </span>
                                </div>

                                <button className="btn btn-success w-100 fw-bold py-2">
                                    Proceed to Checkout
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
