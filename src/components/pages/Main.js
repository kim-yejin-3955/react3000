// import { info } from "node-sass";
import React from "react";
import Header from "../Header";
import Layout from "../Layout";

function Info({ text }) {
  return <div>{text}</div>;
}
const textInfo = [
  { text: "We provide" },
  { text: "visual Coding" },
  { text: "solutions" },
  { text: "for you webs" },
];
function Main() {
  return (
    <div id="wrap">
      <Header />
      <Layout>
        <section id="mainCont">
          <div className="main__cont">
            {textInfo.map((el) => (
              <Info text={el.text}  key={el.text}/>
              // key값을 꼭 넣어줘야함
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}
export default Main;
