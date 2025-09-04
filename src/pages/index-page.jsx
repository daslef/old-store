import { ProductLink } from "../components/product-link/product-link"
import { NavBar } from "../components/nav-bar/nav-bar"

export function IndexPage() {
    return (
        <>
            <NavBar />
            <main>
                <h1>PlayStore</h1>
                <div>
                    <h2>Мобильные телефоны</h2>

                    <ProductLink
                        href="Apple_iPhone_6.html"
                        image="/images/Apple_iPhone_6.jpg"
                        title="Apple iPhone 6"
                    />

                    <ProductLink
                        href="Samsung_Galaxy_S8.html"
                        image="/images/Samsung_Galaxy_S8.jpg"
                        title="Samsung Galaxy S8"
                    />

                </div>
                <div>
                    <h2>Фотоаппараты</h2>
                </div>
                <div>
                    <h2>Телевизоры</h2>
                </div>
            </main>
        </>
    )
}
