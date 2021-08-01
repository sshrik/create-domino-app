import {Component, Dobee} from '@sshrik/domino';
import PictureInfo from '@/component/PictureInfo';
Dobee.registerComponent("picture-info", PictureInfo);

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    const infoObject = {
      infoText: "hello",
      onPictureClick: Dobee.setCallback('onPictureClick', () => {
        console.log(this);
      })
    }

    return `
    <div class="app-container">
      <picture-info props=${this.useProps(infoObject)}></picture-info>
      <picture-info props=${this.useProps(infoObject)}></picture-info>
      <picture-info props=${this.useProps(infoObject)}></picture-info>
      <picture-info props=${this.useProps(infoObject)}></picture-info>
      <picture-info props=${this.useProps(infoObject)}></picture-info>
    </div>
    `;
  }
}