import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  sm:px-8 px-5 py-16 ">
      <Item Links={PRODUCTS} title="SERVICES" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="GVS" />
      <Item Links={SUPPORT} title="SOLUTIONS" />
    </div>
  );
};

export default ItemsContainer;
