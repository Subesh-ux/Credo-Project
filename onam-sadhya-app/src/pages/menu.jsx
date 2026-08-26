import Cart from "./cart"
export default function Menu({ foodList, addToCart, removeFromCart, totalQuantity, subTotal, discountAmount, cartlist,finalAmount }) {

    return (

        <>
            <div className="text-center py-5 bg-light border-bottom">
                <h3 className="display-8 fw-bold text-success mb-3">
                    🌼 Menu 🌼
                </h3>
            </div>
            <div className="container py-4">
                <div className="row g-4">
                    {foodList.map((value, index) => {
                        return (
                            <div key={index} className="col ">
                                <div className="card h-100 border border-lightgray " style={{
                                    width: "300px"

                                }}>

                                    <img
                                        src={value.image}
                                        alt={value.name}
                                        className="card-img-top"
                                        style={{
                                            height: "200px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <div className="card-body text-center d-flex flex-column ">

                                        <h5 className="card-title fw-bold">
                                            {value.name}
                                        </h5>

                                        <p className="card-text text-muted ">
                                            {value.category}
                                        </p>

                                        <h6 className="text-success fw-bold">
                                            ₹{value.price}
                                        </h6>

                                        <button
                                            className="btn btn-success mt-auto"
                                            onClick={() => addToCart(value.id)}
                                        >
                                            Add to Cart
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Cart
                foodList={foodList}
                totalQuantity={totalQuantity}
                discountAmount={discountAmount}
                finalAmount={finalAmount}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                subTotal={subTotal}
                cartlist={cartlist}
            />
        </>
    )
}