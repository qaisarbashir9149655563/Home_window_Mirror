import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row } from "antd";
import ShowProducts from "../showProducts";

interface ProductsContentProps {
  productsList: any;
}

const ProductsContent: React.FC<ProductsContentProps> = ({ productsList }) => {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (productsList.length > 0) {
      const initialItems = productsList.slice(0, 5);
      setItems(initialItems);
      // saveItemsToLocalStorage(initialItems);
    }
  }, [productsList]);
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const saveItemsToLocalStorage = (updatedItems: any[]) => {
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const fetchMoreData = () => {
    console.log(` fetchMoreData ${items.length} and ${productsList.length}`);
    setTimeout(() => {
      if (items.length < productsList.length) {
        const newItems = items.concat(
          productsList.slice(items.length, items.length + 5)
        );
        setItems(newItems);
        saveItemsToLocalStorage(newItems);
      } else {
        console.log("setHasMore", hasMore);
        setHasMore(false);
      }
    }, 1000);
  };

  return (
    <div className="show-products">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Row>
          {items &&
            items.map((item: any) => (
              <ShowProducts
                key={item.key}
                image={item.image}
                title={item.Title}
                alt={item.alt}
                description={item.Description}
              />
            ))}
        </Row>
      </InfiniteScroll>
    </div>
  );
};

export default ProductsContent;
