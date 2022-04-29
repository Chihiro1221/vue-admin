import {install} from '@icon-park/vue-next/es/all';
import '@icon-park/vue-next/styles/index.css';
import {App} from "vue";

export default function setupIconPark(app: App) {
  install(app);
}