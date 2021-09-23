import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassComponentLifecyclePage extends Component {
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  // 컴포넌트가 그려지고 난 이후에
  componentDidMount = () => {
    console.log("컴포넌트 마운트 완료");
    this.inputRef.current.focus();
  };

  componentDidUpdate = () => {
    console.log("컴포넌트 수정 완료");
  };

  // 컴포넌트 사라질 때  페이지 이동하면 잘가요~~ 왜 필요? 채팅 방에서 나가는 경우 알림
  componentWillUnmount = () => {
    console.log("잘가요~~");
  };

  onClickCount = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1, // prev 가 가지고있는 count
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        현재카운트: {this.state.count}
        <button onClick={this.onClickCount}>카운트 증가!!</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}
