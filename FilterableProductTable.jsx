import React, { useState } from "react";
cb dhjvjdvcdvhb
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
ghvggjvjcjgc
import { PRODUCTS } from "./products";

const FilterableProductTable = props => {
  const [filterText, setFilterText] = useState(``);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = changedFilterText => {
    setFilterText(changedFilterText);
  };

  const handleInStockOnlyChange = changedInStockOnly => {
    setInStockOnly(changedInStockOnly);
  };

  return (
    <div>
      <SearchBar
        searchDetails={{ filterText, inStockOnly }}
        handleFilterTextChange={handleFilterTextChange}
        handleInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        products={PRODUCTS}
        searchDetails={{ filterText, inStockOnly }}
      />
    </div>
  );
};

export default FilterableProductTable;
