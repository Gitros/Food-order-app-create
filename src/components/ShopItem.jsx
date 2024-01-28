export default function ShopItem({ id, name, price, description, image }) {
    return (
        <div className="meal-item">
            <article id={id}>
                <img src={`http://localhost:3000/${image}`} alt="" />
                <h3>{name}</h3>
                <p className="meal-item-price">{price}</p>
                <p className="meal-item-description">{description}</p>
                <button className="button">Add to cart</button>
            </article>
        </div>
    )
}