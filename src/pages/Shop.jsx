import React, { useState } from "react";
import "../styles/Shop.css";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handelFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "chair") {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "watch") {
      const filterProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "mobile") {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "wireless") {
      const filterProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filterProducts);
    }
  };

  const handelSearch = (e) => {
    const searchItem = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Products">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handelFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search here...."
                  onChange={handelSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are available</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
