import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Constants from "../config/FAQ";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const initialFaqs = Constants.FAQ;
    setFaqs(initialFaqs);
  }, []);
  return (
    <div id="faq" className="text-white pt-5 pb-5">
      <Container>
        <div
          className="text-center mb-5 font-xl"
          style={{ fontWeight: "bold" }}
        >
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div
          className="faq-group cursor-pointer"
          style={{ borderTop: "1px solid #bbb" }}
        >
          {faqs.map((item, index) => (
            <div
              className="faq-item"
              key={index}
              style={{ borderBottom: "1px solid #bbb" }}
              onClick={() => {
                const collapse = [];
                faqs.forEach((f, fIndex) => {
                  if (index == fIndex) {
                    f.collapse = !f.collapse;
                  }
                  collapse.push(f);
                });
                setFaqs(collapse);
              }}
            >
              <div
                className="faq-item-q d-flex align-items-center justify-content-between mt-3 mb-3 "
                style={{ fontWeight: "bold" }}
              >
                <div className="faqHdng">{item.question}</div>
                <div className="cursor-pointer">
                  {item.collapse ? "+" : "-"}
                </div>
              </div>
              {!item.collapse && (
                <div
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className="mb-2"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
