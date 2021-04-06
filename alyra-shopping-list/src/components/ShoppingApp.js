// src/components/ShoppingApp.js
import ShoppingList from "./ShoppingList"
import AddPopularProduct from "./AddPopularProduct"
import AddProductForm from "./AddProductForm"

const ShoppingApp = () => {
  return (
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList />
      </section>
      <section className="col-lg-4">
        <div className="bg-light border p-4">
          <h2 className="mb-3 h4">Ajouter un produit :</h2>
          <AddProductForm />
          <AddPopularProduct />
        </div>
      </section>
    </main>
  )
}

export default ShoppingApp