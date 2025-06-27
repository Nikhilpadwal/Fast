import React from "react";
import "./FAQ.scss";

export default function FAQ() {
  return (
    <div>
      <div className="faq-main mt-5">
        <div className="faq-left">
          <div className="left-inner">
            <p className="head">FAQ</p>
            <p className="sec-head">
              Frequently Asked <span className="Qua">Questions</span>.
            </p>
          </div>
        </div>

        <div className="faq-right">
          <div
            className="accordion accordion-flush "
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <h5>What types of ingredients does your company supply?</h5>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Our company provides ingredients for a diverse range of
                  industries, Agriculture, Fertilizers, Silicone Super Spreader,
                  Paint Additives, Home And Industrial Cleaning, General
                  Emulsifiers
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <h5>How do I request a product sample?</h5>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  After signing in, navigate to the product page of the item you
                  are interested in. Click the "Request Sample" button and
                  complete the necessary details. Your request will be processed
                  shortly.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <h5>What happens after I request a sample?</h5>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Once you request a sample, our support team will review your
                  request and may conduct background checks. After approval, we
                  will ship the sample to the address provided. You will be
                  notified via email about the status of your request and
                  shipment details.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <h5>I have product-related questions. Who can help me?</h5>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Each product page contains all product-related information,
                  including technical specifications, data sheets, key benefits,
                  and frequently asked questions. If you still have questions,
                  contact our customer support team at sales@fentonchemical.com.
                  Additionally, you can visit the Contact Us section on our
                  website to submit a query, and one of our support executives
                  will get back to you as soon as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
