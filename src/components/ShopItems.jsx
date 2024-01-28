import ShopItem from "./ShopItem";



export default function ShopItems(data) {
    return (
        <div id="meals">
            {data.data.map((item) => (
                <ShopItem key={item.id} id={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image} />
            ))}
        </div>
    )
}