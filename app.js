import { time } from "./scripts/time.js";
import { greeting } from "./scripts/greeting.js";
import { input } from "../input.js";


input();        
greeting();
setInterval(time, 1000);