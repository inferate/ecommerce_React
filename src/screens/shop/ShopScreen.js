import React, { Component } from "react";
import CollectionPreview from "../../components/menu/preview/CollectionPreview";
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
          <CollectionPreview key={id} {...restCollectionItems} />
        ))}
      </div>
    );
  }
}
export default ShopScreen;
