import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import sadhyaFoodList from "../assets/json/sadhyafoodlist.json";
import checkbox from "../assets/json/checkbox.json"

import Menu from './menu';

import { useState } from "react";
export default function SadhyaFood() {
    const [foodList, setFoodList] = useState(sadhyaFoodList)
    const [selectedCategory, setSelectedCategory] = useState(["All"])
    const [cartItems,setCartItems] =useState([])

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

    const discountAmount = (subTotal*(8.3/100)).toFixed(2)
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


    return (
        <>
            <div className="text-center py-5 bg-light border-bottom">
                <h1 className="display-4 fw-bold text-success mb-3">
                    🌼 Thiruvonam Sadhya 🌼
                </h1>
                <p className="lead text-secondary fst-italic mb-3">
                    “A Feast of Tradition, Served with the Spirit of Onam.”
                </p>
                <p className="fs-4 fw-bold text-success mb-0">
                    ✨ Onashamsakal! ✨
                </p>

            </div>


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
                cartlist = {foodList}
                foodList={finalFilteredList}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalQuantity={totalQuantity}
                subTotal={subTotal}
                discountAmount={discountAmount}
                finalAmount={finalAmount}
            />

        </>

    )
}