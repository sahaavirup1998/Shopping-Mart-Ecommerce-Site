import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
// import products from "../assets/data/products";
import countTimerImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filterBestSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filterTrendingProducts);
    setBestSaleProducts(filterBestSaleProducts);
    setMobileProducts(filterMobileProducts);
    setWirelessProducts(filterWirelessProducts);
    setPopularProducts(filterPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Interior Design More Modern And Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  dolor, nostrum iure nesciunt quis porro minima similique ex
                  libero vitae ipsam molestiae amet illo dolorum.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImage} alt="heroImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sale Products</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={bestSaleProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top_content">
                <h3 className="text-white fs-4 mb3">Offers will end in</h3>
                <h2 className="text-white fs-3 mb2">Quality Products</h2>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="12" md="6" className="text-end counter_img">
              <img src={countTimerImg} alt="countTimerImg" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals mb-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrived Items</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={mobileProducts} />
            )}
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={wirelessProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="popular_category mb-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Populoar Products</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
