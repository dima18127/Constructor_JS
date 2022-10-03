import {model} from './model';
import './styles/main.css'
import {Site} from './classes/site2'
import { Sidebar } from './classes/sidebar';


const site = new Site('#site');
console.log(model);
const sidebar = new Sidebar('#panel')
site.render(model)


