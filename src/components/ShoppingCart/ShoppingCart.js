import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

import { AllProductsContext } from "../../context/AllProducts";
import CartMiniatureViewProduct from "../CartMiniatureViewProduct";

import "./ShoppingCart.css";

export default class ShoppingCart extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <div>
            <Menu
              isOpen={context.isCartDrawerOpen}
              right
              pageWrapId={"page-wrap"}
              noOverlay
              customBurgerIcon={false}
              customCrossIcon={false}
              width={350}
            >
              <div className={"cartHeader"}>
                <img
                  src={"https://image.flaticon.com/icons/svg/70/70460.svg"}
                  onClick={() => context.toggleShoppingCart()}
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
                <label className={"cart-header-title"}>YOUR CART</label>
              </div>
              <div className={"cartBody"}>
                {context.cartProducts.length === 0
                  ? "No item in your cart"
                  : ""}
                {context.cartProducts.length !== 0 &&
                  context.cartProducts.map(product => (
                    <div>
                      <CartMiniatureViewProduct
                        key={product.id}
                        product={product}
                      />
                    </div>
                  ))}
              </div>
            </Menu>
          </div>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
