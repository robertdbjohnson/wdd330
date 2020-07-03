import { Hike } from './hike.js';

let hike1 = new Hike("Hike 1", '', '', '10 miles', 'easy', '', '');
let hike2 = new Hike("Hike 2", '', '', '20 miles', 'moderate', '', '');
let hike3 = new Hike("Hike 3", '', '', '30 miles', 'hard', '', '');

const hikeList = [];

hikeList.push(hike1);
hikeList.push(hike2);
hikeList.push(hike3);

console.log(hikeList);
