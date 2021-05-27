import React from "react";
import Header from "../Header";
import Layout from "../Layout";
import WrapTitle from "../basics/WrapTitle";

function ScriptInfo({ image, id, title, desc }) {
  return (
    
      <div className="script">
        <div className="script-img">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="script-txt">
          <dl>
            <dt>{desc}</dt>
            <dd>{desc}</dd>
          </dl>
        </div>
        <div className="script_btn">
        <ul>
            <li className="active"><a href="#c">01</a></li>
            <li><a href="#c">02</a></li>
            <li><a href="#c">03</a></li>
            <li><a href="#c">04</a></li>
            <li><a href="#c">05</a></li>
            <li><a href="#c">06</a></li>
            <li><a href="#c">07</a></li>
            <li><a href="#c">08</a></li>
            <li><a href="#c">09</a></li>
            <li><a href="#c">10</a></li>
        </ul>
        </div>
      </div>
      
  );
}

const script = [
  {
    id: 1,
    image: "img/script-Rectangle 244.png",
    title: "animationRequestFrame",
    desc: "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    id: 1,
    image: "img/script-Rectangle 251.png",
    title: "animationRequestFrame",
    desc: "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    id: 1,
    image: "img/script-Rectangle 252.png",
    title: "animationRequestFrame",
    desc: "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
];

function Script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="scriptCont">
          <div className="container">
            <WrapTitle text={["SCRIPT", "JAVASCRIPT"]} />
            <div className="script-cont">
            {script.map((text) => (
              <ScriptInfo
                image={text.image}
                key={text.id}
                title={text.title}
                desc={text.desc}
              />
            ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
export default Script;
