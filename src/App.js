import { Component } from "./core/jun";
import TheHeader, { theHeader } from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view"); //중복 피하기 위해서 두 단어 결합.

    this.el.append(theHeader, routerView, theFooter);
  }
}
