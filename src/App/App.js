import {Component, Dobee} from '@sshrik/domino';
import Descriptor from '@/src/Descriptor';
import Header from '@/src/Header';
import Footer from '@/src/Footer';
import LinkText from '@/src/LinkText';
import './app.css';
Dobee.registerComponent("domino-desc", Descriptor);
Dobee.registerComponent("domino-footer", Footer);
Dobee.registerComponent("domino-header", Header);
Dobee.registerComponent("domino-link-text", LinkText);

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    const firstLinkIfno = {
      plainText: ["Follow this", "to learn more."],
      linkText: ["link"],
      link: ["https://github.com/sshrik/DOMino/wiki"],
    }

    const secondLinkInfo = {
      plainText: ["Edit app/script.js to modify."],
      linkText: [],
      link: [],
    }

    return `
    <div class="app-container">
      <domino-desc></domino-desc>
      <domino-header>Now you can use Domino!</domino-header>
      <domino-link-text props='${this.useProps(firstLinkIfno)}'></domino-link-text>
      <domino-link-text props='${this.useProps(secondLinkInfo)}'></domino-link-text>
    </div>
    <domino-footer></domino-footer>
    `;
  }
}