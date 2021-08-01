import {Component} from '@sshrik/domino';
import './linkText.css'

export default class LinkText extends Component {
  constructor() {
    super();
  }
  
  render() {
    const {plainText, linkText, link} = this.props;
    let result = "";
    plainText.forEach((text, index) => {
      result += `<p class="domino-text">${text}</p>`
      if(linkText[index]){
        result += `<a class="domino-text" href=${link[index]}>${linkText[index]}</a>`
      }
    })

    return `<div class="link-text-container">${result}</div>`;
  }
}