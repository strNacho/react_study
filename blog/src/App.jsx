import React, { useState } from 'react';
import './App.css'

function App() {
  
  let post = '강남 우동 맛집';

  let [titles, setTitle] = useState(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']); // JSX 문법 4
  let [thumbs, setThumbs] = useState([0,0,0]);
  let thumbsUp = (index) => {
    let temp = [...thumbs];
    temp[index] += 1;
    setThumbs(temp);
  };
  let [modal, setModal] = useState(false);
  let [modalClicked, setModalIdx] = useState(0);
  let [inputValue, setInputValue] = useState("");
  
  const addTitle = (newTitle) => {
    let newTitles = [newTitle, ...titles];
    setTitle(newTitles);

    let newThumbs = [0, ...thumbs];
    setThumbs(newThumbs);
  }

  return (
    <div className="App">
      <div  className="black-nav">{/* JSX 문법 1 */}
        <h3>React blog</h3>
      </div>

      <button>가나다순 정렬</button>
      <button onClick={()=> {
          let copy = [...titles]; {/* JSX 문법 7 */}
          copy[0] = "남자 코트 추천";
          setTitle(copy)
        }
      }>글제목 수정</button>
      
      {/* JSX 문법 10 */}
      {titles.map((title, index) => ( 
        <div className="list" key={index}>
          {/* <h4 style={{textAlign : 'left'}}>{title}</h4> */} {/* JSX 문법 3, 2 */}
          {/* <h4>{title} <span onClick={()=>setThumbs(thumbs+1)}>👍🏻</span> {thumbs} </h4> */}{/* JSX 문법 5, 6 */}
          <h4 onClick={() => {
            setModal(!modal);
            setModalIdx(index);
          }}>{title} <span onClick={(e)=>{
            e.stopPropagation(); // 이벤트 버블링 막는 코드
            thumbsUp(index);}}>👍🏻</span> {thumbs[index]}</h4> 
        <p>2월 17일 발행</p>
      </div>
      ))}

      <Modal2/>
      
      {/* <Modal/> */}{/* JSX 문법 8 */}
      {modal ? <Modal 
      titles={titles}
      thumbs={thumbs}
      modalClicked={modalClicked}
      color="orange"
      onChangeTitle={(newTitle) => {
        let oldTitles = [...titles];
        oldTitles[modalClicked] = newTitle;
        setTitle(oldTitles);
      }}
      setTitle={setTitle}
      setThumbs={setThumbs}/> : null} {/* JSX 문법 9 */}
      <input type="string" onChange={(e)=>{setInputValue(e.target.value);} }/>
      <button onClick={()=>{
        addTitle(inputValue);
      }}>글작성</button>
    </div>
  )
}

function Modal(props){
  // const handleClick = () => {
  //   props.onChangeTitle("여자 패딩 추천")
  // }
  return(
    <div className="modal" style={{backgroundColor : props.color}}>
      <h4>{props.titles[props.modalClicked]}</h4> {/* JSX 문법 11 */}
      <p>날짜</p>
      <p>상세내용</p>
      {/* JSX 문법 11-1 */}
      {/* <button onClick={handleClick}>글수정</button>  */}
      <button onClick={()=>props.setTitle(['여자', '패딩', '추천'])}>글수정</button> 
      <button onClick={()=>{
        const titlesDeleted = props.titles.filter((item,index) => index != props.modalClicked );
        props.setTitle(titlesDeleted);
        const thumbsDeleted = props.thumbs.filter((item,index) => index != props.modalClicked);
        // console.log("thumbsDeleted", thumbsDeleted);
        props.setThumbs(thumbsDeleted);
        // 다른 방법으로 {arr}.splice() 함수 (원본배열 변경하고, 삭제된 값을 return 함)
      }}>글삭제</button>
    </div>
  )
}

// class를 이용한 옛날 React 문법
class Modal2 extends React.Component {
  constructor(props) { // props 받아오는 곳
    super(props);
    
    this.state = {
      name: 'kim',
      age : 20
    }
  }

  render(){
    return (
      <>
      <div>안녕 {this.state.name}</div>
      {/* <div>props 꺼내는 법 {this.props.test}</div> */}
      <button onClick={()=>{
        this.setState({age:20}) // state 변경 양식 
      }}>버튼</button>
      </>
    )
  }
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

// JSX 문법 5. 
// 이벤트 함수 바인딩

// JSX 문법 6.
// state 변경 함수

// JSX 문법 7.
// array, object 참조타입 state 변경 시 주의
// setstate 함수는 참조 위치가 동일할 경우 다시 렌더링하지 않음
// (tip) 데이터 가공시 원본은 유지할 것

// JSX 문법 8.
// html 조각 Component로 관리하기

// JSX 문법 9.
// html 영역에서 조건문 작성하기
// (if, for 등 '문'은 사용 불가 '식' 사용 가능 -> 삼항연산자)

// JSX 문법 10.
// html 영역에서 반복문 작성하기
// 표현식 배열.map(콜백함수) 사용
// 콜백함수 화살표함수로 작성시 =>(소괄호 : 표현식)은 암묵적 return, {중괄호 : 코드 블럭}은 명시적 return 필요

// JSX 문법 11.
// 부모 -> 자식 컴포넌트로 데이터 전송 : props (파라미터와 유사)
// JSX 문법 11-1.
// 자식컴포넌트가 props를 이용해서 부모 state 변경하는 방법 : 변경하는 함수 넘겨주기 
