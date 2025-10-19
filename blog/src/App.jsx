import { useState } from 'react';
import './App.css'

function App() {
  
  let post = '강남 우동 맛집';

  let [title, setTitle] = useState('여자 코트 추천') // JSX 문법 4

  return (
    <div className="App">
      <div  className="black-nav">{/* JSX 문법 1 */}
        <h3>블로그임</h3>
      </div>
      <div className="list">
        <h4 style={{textAlign : 'left'}}>{title}</h4>{/* JSX 문법 3, 2 */}
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  )
}

export default App

// JSX 문법 1.
// class 넣을 땐 className (자바스크립트 class와 HTML의 class 구분)

// JSX 문법 2.
// 변수 꽂을 땐 {변수명}

// JSX 문법 3.
// style 넣을 땐
// style={{이름: '값'}} (이름은 camel case)
// style={ { key에 '-'는 뺄셈 연산 기호로 사용x }Object }변수

// JSX 문법 4.
// useState() - 데이터 번경 시 html 즉시 재렌더링
// 변수에 리터럴 할당해서 바인딩 시 리터럴 변경해도 재렌더링 안 됨 