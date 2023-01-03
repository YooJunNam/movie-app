import { Component } from "./core/jun";

export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view"); //중복 피하기 위해서 두 단어 결합.

    this.el.append(routerView);
  }
}
