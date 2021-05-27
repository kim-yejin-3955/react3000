# 리액트 시작하기 

## 리액트 엡 만들기
npx create-react-app 앱이름

## 로우터 설정 
npm install react-router-dom

## 변수 타입 설정
npm install prop-types

## SASS 설정
npm install node-sass

## page 만드는 순서 
App.js에 모든 페이지 import 해줌
각 페이지에서  export 해줌 -> export default 페이지이름
ex) 
import React from "react";

function Main(){
    return(
        <div>
            <h1>메인 페이지 입니다</h1>
        </div>
    )
}
export default Main;

## 줄정렬 자동 완성
Setting -> format -> Editor: Default Formatter를 Prettier - code formatter로 설정 & Editor: Format On Save에 체크

## Tab 숫자 설정? 줄바꿈할때 몇칸 띌지를 설정해줌

## vmax 사용법 알아두기
