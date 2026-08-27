import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import sadhyaFoodList from "../assets/json/sadhyafoodlist.json";
import checkbox from "../assets/json/checkbox.json"

import Menu from './menu';

import { useState } from "react";
export default function SadhyaFood() {
    const [foodList, setFoodList] = useState(sadhyaFoodList)
    const [selectedCategory, setSelectedCategory] = useState(["All"])
    const [paymentStatus, setPaymentStatus] = useState(false)
    const [cardButtonStatus, setCartButtonStatus] = useState(true)
    const orderId = Math.floor(Math.random() * 10000)


    const pay = () => {
        setSelectedCategory([
            "All"
        ])
        
        setPaymentStatus(true)
        setCartButtonStatus(false)
    }
    const back = () => {

        setFoodList(foodList.map(food => ({
            ...food,
            Quantity: 0
        })))
        setPaymentStatus(false)
        setCartButtonStatus(true)
    }
    const addToCart = (id) => {
        setFoodList(
            foodList.map(food => {
                if (food.id === id) {
                    return {
                        ...food,
                        Quantity: food.Quantity + 1
                    }
                }

                return food
            })
        )
    }
    const removeFromCart = (id) => {
        setFoodList(
            foodList.map(food => {
                if (food.id === id) {
                    if (food.Quantity > 0) {
                        return {
                            ...food,
                            Quantity: food.Quantity - 1
                        }
                    }
                }
                return food
            }
            )
        )
    }
    const totalQuantity = foodList.reduce((acc, foodList) => {

        return acc + foodList.Quantity
    }, 0)

    const subTotal = foodList.reduce((acc, food) => {
        return acc + (food.price * food.Quantity)
    }, 0)

    const discountAmount = (subTotal * (8.3 / 100)).toFixed(2)
    const finalAmount = subTotal.toFixed(2) - discountAmount
    const [searchValue, setSearchValue] = useState("")

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }
    const nameFilteredFoodList = foodList.filter(food =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    const checked = (event) => {
        let checkedData = selectedCategory.includes(event)
        return checkedData
    }

    const handlechange = (event) => {
        const category = event.target.id
        const status = event.target.checked

        if (status == true && category == "All") {
            setSelectedCategory([
                "All"
            ])
        }
        else if (status == true && category !== "All") {
            setSelectedCategory([
                ...selectedCategory.filter(item => item !== "All"),
                category
            ])
        }
        else if (status == false) {
            const newCategory = selectedCategory.filter(selectedCategory => category != selectedCategory)

            if (newCategory.length == 0) {
                setSelectedCategory(["All"])
            }
            else {
                setSelectedCategory(newCategory)
            }
        }
    }

    let finalFilteredList

    if (selectedCategory.includes("All")) {
        finalFilteredList = nameFilteredFoodList
    }
    else {
        finalFilteredList = nameFilteredFoodList.filter(value =>
            selectedCategory.includes(value.category)
        )
    }

    const cartButton = () => {
        if (totalQuantity > 0) {
            document.getElementById("cart-section").scrollIntoView()
            setCartButtonStatus(false)
        }
    }
    const menuButton = () => {
        document.getElementById("menu-section").scrollIntoView()

        setCartButtonStatus(true)
    }


    return (
        <>  {cardButtonStatus === true ? (
            <button
                className="btn btn-warning position-sticky shadow-lg me-2 rounded-pill px-4 py-2 z-3 btn-lg fs-6" style={{ top: "88%", left: "90%" }}
                onClick={cartButton} disabled={totalQuantity === 0}
            >
                🛒 Cart {totalQuantity}
            </button>
        ) : (paymentStatus === false) &&
        (
            <button
                className="btn btn-warning shadow-lg position-sticky me-2 rounded-pill px-4 py-2 z-3 fs-6" style={{ top: "88%", left: "100%" }}
                onClick={menuButton}
            >
                Menu
            </button>
        )}

            <div className="text-center py-5 bg-light border-bottom" >
                <h1 className="display-5 fw-bold text-success mb-3">
                    🌼 Thiruvonam Sadhya 🌼
                </h1>
                <p className="lead text-secondary fst-italic mb-3">
                    “A Feast of Tradition, Served with the Spirit of Onam.”
                </p>
                <p className="fs-4 fw-bold text-success mb-0">
                    ✨ Onashamsakal! ✨
                </p>

            </div>

            {(paymentStatus === true && totalQuantity > 0) ? (
                <div
                    className="text-center py-5 bg-light border rounded-4 container shadow-lg"
                    style={{ width: "50%", height: "fit-content" }}
                >
                    <h1 className="fw-bold text-success my-3 fs-1">🌼</h1>

                    <p className="lead text-success fw-bold mb-3">
                        🎉 Thank You! 🎉
                    </p>

                    <p className="display-6 mb-4 fw-bold text-success">
                        Your order has been placed successfully!
                    </p>

                    <div
                        className="mx-auto bg-white rounded-3 shadow-sm p-4 mb-4"
                        style={{ width: "60%" }}
                    >
                        <div className="row mb-3">
                            <div className="col-6 text-start">
                                <p className="fw-bold text-secondary mb-0">Order ID</p>
                            </div>
                            <div className="col-6 text-end fw-bold text-secondary">
                                #{orderId}
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-6 text-start">
                                <p className="fw-bold text-secondary mb-0">Items</p>
                            </div>
                            <div className="col-6 text-end fw-bold text-secondary">
                                {totalQuantity}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 text-start">
                                <p className="fw-bold text-secondary mb-0">Amount</p>
                            </div>
                            <div className="col-6 text-end fw-bold text-success">
                                ₹{finalAmount.toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <button
                        className="btn btn-danger rounded-pill px-5 py-2 fw-bold shadow-sm"
                        onClick={back}
                    >
                        ← Back to Menu
                    </button>
                </div>
            ) :
                // (paymentStatus === true && totalQuantity == 0) ?
                //     (
                //         <div className='text-center py-5 bg-light border-1 container shadow' style={{ width: "50%", height: "fit-content" }}>
                //             <h1 className="fw-bold text-success my-3">🛒</h1>
                //             <p className="lead text-secondary fw-bold mb-3">🎉 Your Cart is Empty 🎉</p>
                //             <p className="display-7 mb-6 fw-bold text-success"> Please add some delicious Sadhya items to continue. </p>
                //             <br />
                //             <button className="btn btn-danger mb-3" onClick={back}>Back to Menu</button>
                //         </div>
                //     )
                //     :
                (
                    <div>
                        <div className="container my-4">

                            <h3 className="text-center fw-bold text-success mb-4">
                                Choose Category
                            </h3>

                            <div className="d-flex flex-row justify-content-center gap-2">
                                {
                                    checkbox.map((value, index) => (
                                        value.FieldType === "checkbox" &&
                                        value.FieldLabel.map((data, index) => (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    className="btn-check"
                                                    name={data}
                                                    id={data}
                                                    onChange={handlechange}
                                                    checked={checked(data)}
                                                />

                                                <label
                                                    className="btn btn-outline-success rounded-pill px-4 py-2"
                                                    htmlFor={data}
                                                >
                                                    {data}
                                                </label>
                                            </div>
                                        ))
                                    ))
                                }
                            </div>

                        </div>
                        <div className="input-group container">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search food..."
                                onChange={handleSearch}
                            />
                            <button className="btn btn-success">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>

                        <Menu
                            cartlist={foodList}
                            foodList={finalFilteredList}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            totalQuantity={totalQuantity}
                            subTotal={subTotal}
                            discountAmount={discountAmount}
                            finalAmount={finalAmount}
                            paymentStatus={paymentStatus}
                            pay={pay}
                        />
                    </div>
                )
            }

        </>

    )
}