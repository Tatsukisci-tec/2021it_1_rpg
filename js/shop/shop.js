import G from '../common/global.js'
import { CONFIG } from '../common/config.js';

export function shop_init(option) {
    $("#mat_shop").show();
    // console.log(option);
    // G.playBGM("zakosen");
     addEventListeners();
}
function addEventListeners() {
    $("#itemlist .item .buy").click((e)=>{
        console.log("test");
        $("#upper_right #itemimage img").attr("src","images/soubi/icon087.png");
    })
}

export function shop_keyDown(code) {
    switch(code) {
        case 37:
            console.log("left")
            break;
        case 38:
            console.log("up")
            break;
        case 39:
            console.log("right")
            break;
        case 40:
            console.log("down")
            break;
        default:
            break;
    }
}
