import { Component } from "../core/jun";
import Headline from "../components/Headline";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    this.el.classList.add("container");
    this.el.append(headline);
  }
}
