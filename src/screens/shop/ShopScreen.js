import React, { Component } from "react";
import ColectionPreview from "../../components/menu/preview/ColectionPreview";
import { SHOP_DATA } from "../../data/shop.data";

class ShopScreen extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restCollectionItems }) => (
          <ColectionPreview key={id} {...restCollectionItems} />
        ))}
      </div>
    );
  }
}
export default ShopScreen;
