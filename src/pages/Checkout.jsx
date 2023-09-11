import React from "react";
import "../styles/Checkout.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalOty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter phone No." />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter street address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your city" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter postal code" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty: <span>{totalOty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy_btn auth_btn w-100">
                  Place your order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
