import { useEffect, useState } from "react"
import ShopItems from "./ShopItems"
import Error from "./Error";

export default function Shop() {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchAvailableMeals() {

            try {
                const response = await fetch('http://localhost:3000/meals')
                const resData = await response.json();

                if (!response.ok) {
                    throw new Error('failed to connect');
                }
                setMeals(resData)
            } catch (error) {
                setError(error)
            }

        }
        fetchAvailableMeals();
    }, [])

    if (error) {
        return <Error title="an error has accured, failed to fetch" message={error.message} />
    }


    return (
        <ShopItems data={meals} />
    )
}