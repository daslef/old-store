import { NavBar } from '../components/nav-bar/nav-bar'
import { ProductLink } from '../components/product-link/product-link'

export function CategoryPage() {
    return (
        <>
            <NavBar />
            <main>
                <h1>Мобильные телефоны</h1>
                <div>
                    <h2>Samsung</h2>
                    <ProductLink
                        href="products/mobile/samsung/Samsung_Galaxy_S8.html"
                        image="/images/Samsung_Galaxy_S8.jpg"
                        title="Samsung Galaxy S8"
                    />
                </div>
                <div>
                    <h2>Apple</h2>
                    <ProductLink
                        href="products/mobile/apple/Apple_iPhone_6.html"
                        image="/images/Apple_iPhone_6.jpg"
                        title="Apple iPhone 6"
                    />
                </div>
            </main>
        </>
    )
}
