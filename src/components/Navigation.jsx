import logo from '../assets/logo.jpg'

export default function Navigation() {
    return (
        <div id="main-header">
            <div id="title">
                <img src={logo} alt="logo" />
                <h1>reactfood</h1>
            </div>
            <button>Cart</button>
        </div>
    )
}