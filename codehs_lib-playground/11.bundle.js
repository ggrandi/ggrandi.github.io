(self.webpackJsonp=self.webpackJsonp||[]).push([[11],{250:function(t,e,r){"use strict";r.r(e),r.d(e,"canvas",(function(){return i})),r.d(e,"ctx",(function(){return s})),r.d(e,"output",(function(){return n})),r.d(e,"setUpdate",(function(){return f})),r.d(e,"getWidth",(function(){return o})),r.d(e,"getHeight",(function(){return a})),r.d(e,"hideCursor",(function(){return c})),r.d(e,"setBackgroundColor",(function(){return u})),r.d(e,"setSize",(function(){return h})),r.d(e,"showCursor",(function(){return l})),r.d(e,"add",(function(){return p})),r.d(e,"remove",(function(){return y})),r.d(e,"removeAll",(function(){return _})),r.d(e,"getElementAt",(function(){return b})),r.d(e,"getElementsAt",(function(){return w})),r.d(e,"clearConsole",(function(){return v})),r.d(e,"println",(function(){return C})),r.d(e,"readBoolean",(function(){return S})),r.d(e,"readFloat",(function(){return M})),r.d(e,"readInt",(function(){return O})),r.d(e,"readLine",(function(){return T})),r.d(e,"consoleInput",(function(){return E})),r.d(e,"readLineConsole",(function(){return $})),r.d(e,"readIntConsole",(function(){return W})),r.d(e,"readFloatConsole",(function(){return A})),r.d(e,"readBooleanConsole",(function(){return L})),r.d(e,"readColorConsole",(function(){return R})),r.d(e,"Randomizer",(function(){return H})),r.d(e,"Color",(function(){return D})),r.d(e,"checkColor",(function(){return N})),r.d(e,"Keyboard",(function(){return B})),r.d(e,"baseObj",(function(){return I})),r.d(e,"Circle",(function(){return F})),r.d(e,"Rectangle",(function(){return q})),r.d(e,"Line",(function(){return Y})),r.d(e,"WebImage",(function(){return G})),r.d(e,"Text",(function(){return j})),r.d(e,"checkFont",(function(){return K})),r.d(e,"Arc",(function(){return J})),r.d(e,"ArcMode",(function(){return U})),r.d(e,"Oval",(function(){return X})),r.d(e,"setTimer",(function(){return Q})),r.d(e,"stopTimer",(function(){return Z})),r.d(e,"stopAllTimers",(function(){return tt})),r.d(e,"mouseClickMethod",(function(){return et})),r.d(e,"mouseMoveMethod",(function(){return rt})),r.d(e,"keyUpMethod",(function(){return nt})),r.d(e,"keyDownMethod",(function(){return it})),r.d(e,"gcf",(function(){return at})),r.d(e,"getPosition",(function(){return ht})),r.d(e,"lineDistance",(function(){return ot})),r.d(e,"rotatePoint",(function(){return st})),r.d(e,"toDegrees",(function(){return lt})),r.d(e,"toRadians",(function(){return ut})),r.d(e,"shapes",(function(){return d})),r.d(e,"timers",(function(){return V}));const i=function(t){let e=document.getElementById(t);if(!e)throw new Error(`Cannot find any element with the id of "${t}". Please create that div in your html file.`);let r=document.createElement("canvas");return r.height=480,r.width=400,r.id="game",e.append(r),r}("output"),n=function(t){let e=document.getElementById(t);if(!e)throw new Error(`Cannot find any element with the id of "${t}". Please create that div in your html file.`);let r=document.createElement("pre");return r.id="console",e.append(r),r}("output"),s=i.getContext("2d");if(!s)throw new Error("Error creating canvas context. Check that the canvas is loading correctly.");const o=()=>i.width,a=()=>i.height,h=(t,e)=>{i.width=t,i.height=e},u=t=>{i.style.backgroundColor=t},l=t=>{i.style.cursor=t||"default"},c=()=>{i.style.cursor="none"},d=[];let g=!0;const f=t=>{g=t},_=()=>{d.splice(0,d.length)},p=(...t)=>{setTimeout(()=>{t.forEach(t=>{-1!==d.indexOf(t)&&y(t),d.push(t),g||t.draw()})},1)},y=(...t)=>{setTimeout(()=>{t.forEach(t=>{-1!=d.indexOf(t)&&d.splice(d.indexOf(t),1)})},1)},b=(t,e)=>{let r=void 0;return d.forEach(i=>{i.containsPoint(t,e)&&(r=i)}),r};function w(t,e){if(!0===t)return d;let r=[];return d.forEach(i=>{i.containsPoint(t,e)&&r.push(i)}),r.reverse()}const m=()=>{g&&(s.clearRect(0,0,i.width,i.height),d.forEach(t=>t.draw())),requestAnimationFrame(m)};m();class I{constructor(){this._x=-1e3,this._y=-1e3,this._color="black",this._type="Thing",this._rot=0,this._outline=!1,this._outlineColor="black",this._outlineWidth=1}toString(){return`${this.type} at (${this._x}, ${this._y})`}set type(t){this._type=t}get type(){return this._type}getType(){return this._type}setPosition(t,e){return this._x=t,this._y=e,this}setColor(t){return N(t)||console.warn(`Your color of ${t} is not a valid color`),this.color=N(t)?t:"black",this}setOutline(t,e,r){return this.outline=t,this.outlineColor=e||this.outlineColor,this.outlineWidth=r||this.outlineWidth,this}setBorder(t,e,r){return this.outline=t,this.outlineColor=e||this.outlineColor,this.outlineWidth=r||this.outlineWidth,this}setOutlineColor(t){return this.outlineColor=t,this}setBorderColor(t){return this.outlineColor=t,this}setOutlineWidth(t){return this.outlineWidth=t,this}setBorderWidth(t){return this.outlineWidth=t,this}set outline(t){this._outline=t}get outline(){return this._outline}set borderWidth(t){this._outlineWidth=t}get borderWidth(){return this._outlineWidth}set outlineWidth(t){t<0&&(console.warn("The outline width should be positive, please fix your outline width of "+t),t=Math.abs(t)),this._outlineWidth=t}get outlineWidth(){return this._outlineWidth}set border(t){this._outline=t}get border(){return this._outline}set outlineColor(t){N(t)||console.warn(`Your color of ${t} is not a valid color`),this._outlineColor=N(t)?t:"black"}get outlineColor(){return this._outlineColor}set borderColor(t){this.outlineColor=t}get borderColor(){return this._outlineColor}set x(t){this._x=t}get x(){return this._x}getX(){return this._x}set y(t){this._y=t}get y(){return this._y}getY(){return this._y}move(t,e){return this.x+=t,this.y+=e,this}set rotationDegrees(t){this._rot=t*Math.PI/180}get rotationDegrees(){return 180*this._rot/Math.PI}rotateDegrees(t){return this._rot+=t*Math.PI/180,this}set rotation(t){this._rot=t}get rotation(){return this._rot}rotate(t){return this._rot+=t,this}getRotation(){return this._rot}getRotationDegrees(){return 180*this._rot/Math.PI}set color(t){N(t)||console.warn(`Your color of ${t} is not a valid color`),this._color=N(t)?t:"black"}get color(){return this._color}getColor(){return this._color}add(){return p(this),this}remove(){return y(this),this}containsPoint(t,e){return!1}draw(){}}const x=(t,e)=>{let r=document.createElement("span");return r.innerHTML=t,r.style.color=e,r},k=t=>{if(t.innerText){let e=document.createElement("div");e.style.height="1px",e.style.width="100%",e.style.backgroundColor="black",e.style.marginTop="5px",e.style.marginBottom="5px",e.className="separator",t.append(e)}},v=()=>{for(;n.lastChild;)n.removeChild(n.lastChild)},C=(...t)=>{k(n);for(let e=0;e<t.length;e++){if(null===t[e])n.append(x("null","deeppink"));else switch(typeof t[e]){case"number":n.append(x(t[e],"purple"));break;case"object":console.log(t[e]),n.append(x(t[e].toString()+" => browser console","blue"));break;case"boolean":n.append(x(String(t[e]),"red"));break;case"undefined":n.append(x("undefined","deeppink"));break;default:n.append(x(t[e],"black"))}e!=t.length-1&&n.append(new Text(", "))}n.scrollTop=n.scrollHeight},T=t=>String(prompt(t)),O=t=>{let e;if(Boolean(e=parseInt(prompt(t)||"",10)))return e;for(let r=0;r<100;r++)if(Boolean(e=parseInt(prompt("Please enter an Integer. "+t)||"",10)))return e;return 0},M=t=>{let e;if(Boolean(e=parseFloat(prompt(t)||"")))return e;for(let r=0;r<100;r++)if(Boolean(e=parseFloat(prompt("Please enter an Integer. "+t)||"")))return e;return 0},S=(t,e="y",r="n")=>{let i;if((i=prompt(`${t} (${e}|${r})`))===e||i===r)return i===e;for(let n=0;n<100;n++)if((i=prompt(`Please enter ${t} (${e}|${r})`))===e||i===r)return i===e;return!1},E=async(t,e,r,i)=>{k(n),n.append(new Text(t+": "));let s,o=document.createElement("input");o.className="consoleInput",o.type=r,o.value="",n.append(o),i&&(s=document.createElement("input"),s.style.marginLeft="10px",s.className="consoleInput",s.type="button",s.value="Submit",n.append(s));let a=new Promise(t=>{i?(o.addEventListener("change",()=>{s.value="Submit: "+o.value}),s.addEventListener("click",(function(r){if(!r.metaKey&&!r.ctrlKey){const{value:i,done:a,color:h}=e(o,r);a&&(o.before(x(String(i),String(h))),n.removeChild(o),n.removeChild(s),t(i))}}),!1)):o.addEventListener("keydown",(function(r){if(!r.metaKey&&!r.ctrlKey){const{value:i,done:s,color:a}=e(o,r);s&&(o.before(x(String(i),String(a))),n.removeChild(o),t(i))}}),!1)});return o.focus(),n.scrollTop=n.scrollHeight,await a},$=async t=>await E(t,(function(t,e){return"Enter"===e.key?{done:!0,value:t.value,color:"black"}:{done:!1}}),"text"),P=async(t,e,r)=>await E(t,(function(t,i){return"Enter"!==i.key||isNaN(e(t.value))?("-"===i.key&&t.value.length>0&&i.preventDefault(),r&&!r(t.value,i)||(isNaN(+i.key)&&i.key.length<2||" "===i.key)&&"-"!==i.key&&i.preventDefault(),{done:!1}):{done:!0,value:e(t.value),color:"purple"}}),"number"),W=async t=>await P(t,t=>parseInt(t,10)),A=async t=>await P(t,t=>parseFloat(t),(t,e)=>!("."===e.key&&t.split(".").length<=1)),L=async t=>await E(t,(function(t){return{done:!0,color:"red",value:t.checked}}),"checkbox",!0),R=async t=>await E(t,(function(t){return{done:!0,color:t.value,value:t.value}}),"color",!0);class H{constructor(){console.warn("Creating a new Randomizer creates a new blank object")}static nextInt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}static nextBoolean(t=.5){return(t<0||t>1)&&(console.warn(`The value of ${t} is not between 1 and 0. Please pick a valid value`),t=.5),Math.random()<t}static nextFloat(t,e){return Math.random()*(e-t)+t}static nextColor(){return`#${this.randomHex(0,255)}${this.randomHex(0,255)}${this.randomHex(0,255)}`}static randomHex(t,e){const r=this.nextInt(t,e).toString(16),i=e.toString(16).length;return r.length>i?r:r.padStart(i,"0")}static randomArrayValue(t){return t[Math.floor(Math.random()*t.length)]}}class D extends String{constructor(t,e,r,i){(t<0||t>255)&&console.warn("The red should be between 0 and 255"),(e<0||e>255)&&console.warn("The green should be between 0 and 255"),(r<0||r>255)&&console.warn("The blue should be between 0 and 255"),i&&(i<0||i>1)&&console.warn("The alpha should be between 0 and 1"),super(`rgb${i?"a":""}(${t}, ${e}, ${r}${i?", "+i:""})`)}static get black(){return"#000000"}static get silver(){return"#c0c0c0"}static get gray(){return"#808080"}static get white(){return"#ffffff"}static get maroon(){return"#800000"}static get red(){return"#ff0000"}static get purple(){return"#800080"}static get fuchsia(){return"#ff00ff"}static get green(){return"#008000"}static get lime(){return"#00ff00"}static get olive(){return"#808000"}static get yellow(){return"#ffff00"}static get navy(){return"#000080"}static get blue(){return"#0000ff"}static get teal(){return"#008080"}static get aqua(){return"#00ffff"}static get orange(){return"#ffa500"}static get aliceblue(){return"#f0f8ff"}static get antiquewhite(){return"#faebd7"}static get aquamarine(){return"#7fffd4"}static get azure(){return"#f0ffff"}static get beige(){return"#f5f5dc"}static get bisque(){return"#ffe4c4"}static get blanchedalmond(){return"#ffebcd"}static get blueviolet(){return"#8a2be2"}static get brown(){return"#a52a2a"}static get burlywood(){return"#deb887"}static get cadetblue(){return"#5f9ea0"}static get chartreuse(){return"#7fff00"}static get chocolate(){return"#d2691e"}static get coral(){return"#ff7f50"}static get cornflowerblue(){return"#6495ed"}static get cornsilk(){return"#fff8dc"}static get crimson(){return"#dc143c"}static get cyan(){return"#00ffff"}static get darkblue(){return"#00008b"}static get darkcyan(){return"#008b8b"}static get darkgoldenrod(){return"#b8860b"}static get darkgray(){return"#a9a9a9"}static get darkgreen(){return"#006400"}static get darkgrey(){return"#a9a9a9"}static get darkkhaki(){return"#bdb76b"}static get darkmagenta(){return"#8b008b"}static get darkolivegreen(){return"#556b2f"}static get darkorange(){return"#ff8c00"}static get darkorchid(){return"#9932cc"}static get darkred(){return"#8b0000"}static get darksalmon(){return"#e9967a"}static get darkseagreen(){return"#8fbc8f"}static get darkslateblue(){return"#483d8b"}static get darkslategray(){return"#2f4f4f"}static get darkslategrey(){return"#2f4f4f"}static get darkturquoise(){return"#00ced1"}static get darkviolet(){return"#9400d3"}static get deeppink(){return"#ff1493"}static get deepskyblue(){return"#00bfff"}static get dimgray(){return"#696969"}static get dimgrey(){return"#696969"}static get dodgerblue(){return"#1e90ff"}static get firebrick(){return"#b22222"}static get floralwhite(){return"#fffaf0"}static get forestgreen(){return"#228b22"}static get gainsboro(){return"#dcdcdc"}static get ghostwhite(){return"#f8f8ff"}static get gold(){return"#ffd700"}static get goldenrod(){return"#daa520"}static get greenyellow(){return"#adff2f"}static get grey(){return"#808080"}static get honeydew(){return"#f0fff0"}static get hotpink(){return"#ff69b4"}static get indianred(){return"#cd5c5c"}static get indigo(){return"#4b0082"}static get ivory(){return"#fffff0"}static get khaki(){return"#f0e68c"}static get lavender(){return"#e6e6fa"}static get lavenderblush(){return"#fff0f5"}static get lawngreen(){return"#7cfc00"}static get lemonchiffon(){return"#fffacd"}static get lightblue(){return"#add8e6"}static get lightcoral(){return"#f08080"}static get lightcyan(){return"#e0ffff"}static get lightgoldenrodyellow(){return"#fafad2"}static get lightgray(){return"#d3d3d3"}static get lightgreen(){return"#90ee90"}static get lightgrey(){return"#d3d3d3"}static get lightpink(){return"#ffb6c1"}static get lightsalmon(){return"#ffa07a"}static get lightseagreen(){return"#20b2aa"}static get lightskyblue(){return"#87cefa"}static get lightslategray(){return"#778899"}static get lightslategrey(){return"#778899"}static get lightsteelblue(){return"#b0c4de"}static get lightyellow(){return"#ffffe0"}static get limegreen(){return"#32cd32"}static get linen(){return"#faf0e6"}static get magenta(){return"#ff00ff"}static get mediumaquamarine(){return"#66cdaa"}static get mediumblue(){return"#0000cd"}static get mediumorchid(){return"#ba55d3"}static get mediumpurple(){return"#9370db"}static get mediumseagreen(){return"#3cb371"}static get mediumslateblue(){return"#7b68ee"}static get mediumspringgreen(){return"#00fa9a"}static get mediumturquoise(){return"#48d1cc"}static get mediumvioletred(){return"#c71585"}static get midnightblue(){return"#191970"}static get mintcream(){return"#f5fffa"}static get mistyrose(){return"#ffe4e1"}static get moccasin(){return"#ffe4b5"}static get navajowhite(){return"#ffdead"}static get oldlace(){return"#fdf5e6"}static get olivedrab(){return"#6b8e23"}static get orangered(){return"#ff4500"}static get orchid(){return"#da70d6"}static get palegoldenrod(){return"#eee8aa"}static get palegreen(){return"#98fb98"}static get paleturquoise(){return"#afeeee"}static get palevioletred(){return"#db7093"}static get papayawhip(){return"#ffefd5"}static get peachpuff(){return"#ffdab9"}static get peru(){return"#cd853f"}static get pink(){return"#ffc0cb"}static get plum(){return"#dda0dd"}static get powderblue(){return"#b0e0e6"}static get rosybrown(){return"#bc8f8f"}static get royalblue(){return"#4169e1"}static get saddlebrown(){return"#8b4513"}static get salmon(){return"#fa8072"}static get sandybrown(){return"#f4a460"}static get seagreen(){return"#2e8b57"}static get seashell(){return"#fff5ee"}static get sienna(){return"#a0522d"}static get skyblue(){return"#87ceeb"}static get slateblue(){return"#6a5acd"}static get slategray(){return"#708090"}static get slategrey(){return"#708090"}static get snow(){return"#fffafa"}static get springgreen(){return"#00ff7f"}static get steelblue(){return"#4682b4"}static get tan(){return"#d2b48c"}static get thistle(){return"#d8bfd8"}static get tomato(){return"#ff6347"}static get turquoise(){return"#40e0d0"}static get violet(){return"#ee82ee"}static get wheat(){return"#f5deb3"}static get whitesmoke(){return"#f5f5f5"}static get yellowgreen(){return"#9acd32"}static get rebeccapurple(){return"#663399"}static randomRed(){return`#${H.randomHex(32,255)}1010`}static randomGreen(){return`#10${H.randomHex(32,255)}10`}static randomBlue(){return"#1010"+H.randomHex(32,255)}}const N=t=>/^#[a-f0-9]{6}([a-f0-9]{2})?$/.test(t)||/^rgba?\(([01]?\d?\d|2([0-4]\d|5[0-5])),\s?([01]?\d?\d|2([0-4]\d|5[0-5])),\s?([01]?\d?\d|2([0-4]\d|5[0-5]))(,\s?(1|0(.\d+)?))?\)$/.test(t)||/^hsla?\((3([0-5]\d|60)|[0-2]?(\d)?\d),\s?((100|\d?\d)%),\s?((100|\d?\d)%)(,\s?(1|0(.\d+)?))?\)$/.test(t)||D.hasOwnProperty(t);class B{static letter(t){return t}static get ALT_LEFT(){return"AltLeft"}static get ALT_RIGHT(){return"AltRight"}static get BACKSPACE(){return"Backspace"}static get CAPS_LOCK(){return"CapsLock"}static get CTRL_LEFT(){return"ControlLeft"}static get CTRL_RIGHT(){return"ControlRight"}static get DOWN(){return"ArrowDown"}static get ENTER(){return"Enter"}static get LEFT(){return"ArrowLeft"}static get LEFT_COMMAND(){return"OSLeft"}static get LEFT_WINDOW(){return"OSLeft"}static get RIGHT(){return"ArrowRight"}static get RIGHT_COMMAND(){return"OSRight"}static get RIGHT_WINDOW(){return"OSRight"}static get SELECT(){return"OSLeft"}static get SHIFT_LEFT(){return"ShiftLeft"}static get SHIFT_RIGHT(){return"ShiftLeft"}static get SPACE(){return"Space"}static get TAB(){return"Tab"}static get UP(){return"ArrowUp"}}class F extends I{constructor(t,e,r,i,n,s){super(),this.x=null!=e?e:-1e3,this.y=null!=r?r:-1e3,this.color=null!=i?i:"black",i&&!N(i)&&(console.warn(`The color ${i} is not a valid color`),this.color="black"),this.outline=n||!1,this.outlineColor=s||"black",s&&!N(s)&&(console.warn(`The outline color ${s} is not a valid color`),this.outlineColor="black"),this._radius=t,this.type="Circle"}set radius(t){this._radius=Math.abs(t)}get radius(){return this._radius}set diameter(t){this._radius=Math.abs(2*t)}get diameter(){return 2*this._radius}getDiameter(){return 2*this._radius}setDiameter(t){return this._radius=Math.abs(2*t),this}getRadius(){return this._radius}setRadius(t){return this._radius=Math.abs(t),this}draw(){s.beginPath(),s.arc(this.x,this.y,this._radius,0,2*Math.PI),this.outline&&(s.strokeStyle=this.outlineColor,s.lineWidth=this.outlineWidth,s.stroke()),s.fillStyle=this.color,s.fill()}containsPoint(t,e){const r=this.outline?this.outlineWidth/2:0;return ot(this.x,this.y,t,e)<this.radius+r}}class q extends I{constructor(t,e,r,i,n,s,o,a){super(),this.x=null!=r?r:-1e3,this.y=null!=i?i:-1e3,this.color=n||"black",n&&!N(n)&&(console.warn(`Your color of ${n} is not a valid color`),this.color="black"),this.rotation=s||0,this._width=t,this._height=e,this.outline=o||!1,this.outlineColor=a||"black",a&&!N(a)&&(console.warn(`Your outline color of ${a} is not a valid color`),this.outlineColor="black"),this.type="Rectangle"}set width(t){this._width=t}get width(){return this._width}getWidth(){return this.width}setWidth(t){return this.width=t,this}set height(t){this._height=t}get height(){return this._height}getHeight(){return this.height}setHeight(t){return this.height=t,this}setSize(t,e){return this._width=t,this._height=e,this}draw(){s.save(),s.beginPath(),s.translate(this.x+this._width/2,this.y+this._height/2),s.rotate(this.rotation),s.rect(-this._width/2,-this._height/2,this._width,this._height),this.outline&&(s.strokeStyle=this.outlineColor,s.lineWidth=this.outlineWidth,s.stroke()),s.fillStyle=this.color,s.fill(),s.restore()}containsPoint(t,e){if(t-=this.x+this._width/2,e-=this.y+this._height/2,0!==this.rotation){let r=st(t,e,this.rotation);t=r.x,e=r.y}const r=this.outline?this.outlineWidth/2:0;return-this._width/2-r<t&&t<this._width/2+r&&-this._height/2-r<e&&e<this._height/2+r}}class Y extends I{constructor(t,e,r,i,n,s){super(),this._x1=t,this._y1=e,this._x2=r,this._y2=i,this.color=s||"black",s&&!N(s)&&(console.warn(`Your color of ${s} is not a valid color`),this.color="black"),this._width=n||2,this.type="Line"}toString(){return`${this.type} from (${this.x1}, ${this.y1}) to (${this.x2}, ${this.y2})`}setLineWidth(t){return this._width=t,this}set x1(t){this._x1=t}get x1(){return this._x1}set x2(t){this._x2=t}get x2(){return this._x2}set y1(t){this._y1=t}get y1(){return this._y1}set y2(t){this._y2=t}get y2(){return this._y2}setStartpoint(t,e){return this._x1=t,this._y1=e,this}setEndpoint(t,e){return this._x2=t,this._y2=e,this}setPosition(t,e){return this.setStartpoint(t,e)}draw(){if(this.outline){s.save(),s.beginPath();const t=this._width+2*this.outlineWidth,e=ot(this.x1,this.y1,this.x2,this.y2)+2*this.outlineWidth;s.translate(Math.min(this._x1,this._x2)+Math.abs(this._x1-this._x2)/2,Math.min(this._y1,this._y2)+Math.abs(this._y1-this._y2)/2),s.rotate(Math.atan2(-(this.x2-this.x1),this.y2-this.y1)),s.fillStyle=this.outlineColor,s.rect(-t/2,-e/2,t,e),s.fill(),s.restore()}s.beginPath(),s.lineWidth=this._width,s.strokeStyle=this.color,s.moveTo(this._x1,this._y1),s.lineTo(this._x2,this._y2),s.stroke(),s.closePath()}containsPoint(t,e){let r=Math.atan2(-(this.x2-this.x1),this.y2-this.y1),i=st(t-this.x1,e-this.y1,r);t=i.x,e=i.y;let n=ot(this.x1,this.y1,this.x2,this.y2);const s=this.outline?this.outlineWidth:0;return-this._width/2-s<t&&t<this._width/2+s&&-s<e&&e<n+s}}class G extends q{constructor(t,e,r,i,n,s,o,a,h){super(null!=e?e:0,null!=r?r:0,null!=i?i:-1e3,null!=n?n:-1e3,"#00000000"),this._hasLoaded=!1,this._img=new Image,this._img.src=t,this._img.onload=t=>{let{naturalHeight:e,naturalWidth:r}=t.target;this._hasLoaded=!0,0===this.width&&(this.width=r,this.height=e),1===this._sw&&(this._sw=r,this._sh=e)},this.type="Image",this._sx=null!=s?s:0,this._sy=null!=o?o:0,this._sw=null!=a?a:1,this._sh=null!=h?h:1}get image(){return this._img}setAspectWidth(t){let{w:e,h:r}=this.aspectRatio;return this.width=t,this.height=r/e*t,this}setAspectHeight(t){let{w:e,h:r}=this.aspectRatio;return this.height=t,this.width=e/r*t,this}get aspectRatio(){let{naturalWidth:t,naturalHeight:e}=this._img;console.log(t,e);let r=at(t,e);return{w:t/r,h:e/r}}setClip(t,e,r,i){return this._sx=t,this._sy=e,this._sw=r,this._sh=i,this}getClip(){return{sx:this._sx,sy:this._sy,swidth:this._sw,sheight:this._sh}}draw(){super.draw(),this._hasLoaded&&(s.save(),s.beginPath(),s.translate(this.x+this.width/2,this.y+this.height/2),s.rotate(this.rotation),s.drawImage(this._img,this._sx,this._sy,this._sw,this._sh,-this.width/2,-this.height/2,this.width,this.height),s.restore())}}const z=/^((normal|italic|oblique) )?((normal|small-caps) )?((normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900) )?(\d+)px [\w]+$/,K=t=>z.test(t);class j extends I{constructor(t,e,r,i){super(),this.x=null!=r?r:-1e3,this.y=null!=i?i:-1e3,this._txt=t,e=e.replace(/pt/i,"px"),K(e)||console.warn(`Please pass a valid font to Text. Your font \`${e}\` should match \`\${size}px \${fontname}\``),this._font=K(e)?e:"20px Arial",s.font=this._font,this._w=s.measureText(t).width,this._h=Number(z.exec(e)[7]),this.type="Text"}set font(t){this._font=t,t=t.replace(/pt/i,"px"),this._font=K(t)?t:"20px Arial",K(t)||console.warn(`Please pass a valid font to Text. Your font \`${t}\` should match \`\${size}px \${fontname}\``),s.font=this._font,this._w=s.measureText(this._txt).width,this._h=Number((/(\d)+/g.exec(this._font)||[0])[0])}get font(){return this._font}setFont(t){return t=t.replace(/pt/i,"px"),this._font=K(t)?t:"20px Arial",K(t)||console.warn(`Please pass a valid font to Text. Your font \`${t}\` should match \`\${size}px \${fontname}\``),s.font=this._font,this._w=s.measureText(this._txt).width,this._h=Number((/(\d)+/g.exec(this._font)||[20])[0]),this}set text(t){this._txt=t,s.font=this._font,this._w=s.measureText(t).width,this._h=Number((/(\d)+/g.exec(this._font)||[0])[0])}get text(){return this._txt}getText(){return this.text}setText(t){return this.text=t,this}get width(){return this._w}getWidth(){return this._w}set height(t){this.font=`${t}px ${this._font.split("px ")[1]}`}get height(){return this._h}getHeight(){return this.height}setHeight(t){return this.font=this.font.replace(/\d+/g,String(t)),this}draw(){s.save(),s.beginPath(),s.translate(this.x+this._w/2,this.y-this._h/2),s.rotate(this.rotation),s.font=this._font,this.outline&&(s.strokeStyle=this.outlineColor,s.strokeText(this._txt,-this._w/2,this._h/2)),s.fillStyle=this.color,s.fillText(this._txt,-this._w/2,this._h/2),s.restore()}containsPoint(t,e){if(t-=this.x+this._w/2,e-=this.y-this._h/2,0!==this.rotation){let r=st(t,e,this.rotation);t=r.x,e=r.y}return-this._w/2<t&&t<this._w/2&&-this._h/2<e&&e<this._h/2}}var U;!function(t){t[t.DEGREES=0]="DEGREES",t[t.RADIANS=1]="RADIANS"}(U||(U={}));class J extends I{constructor(t,e,r,i,n,s,o){super(),this.x=null!=n?n:-1e3,this.y=null!=s?s:-1e3,this._radius=t,this._sa=i===U.DEGREES?e*Math.PI/180:e,this._ea=i===U.DEGREES?r*Math.PI/180:r,this._cc=null!=o&&o,this.type="Arc"}set radius(t){this._radius=t}get radius(){return this._radius}set startingAngle(t){this._sa=t}get startingAngle(){return this._sa}setStartingAngle(t){return this._sa=t,this}set endingAngle(t){this._ea=t}get endingAngle(){return this._ea}set counterClockwise(t){this._cc=t}get counterClockwise(){return this._cc}setEndingAngle(t){return this._sa=t,this}setAngle(t,e){return this._sa=t,this._ea=e,this}getAngle(){return{startingAngle:this._sa,endingAngle:this._ea}}draw(){s.save(),s.beginPath(),s.translate(this.x,this.y),s.rotate(this.rotation),s.arc(0,0,this._radius,this._sa,this._ea,this._cc),s.lineTo(0,0),s.closePath(),this.outline&&(s.strokeStyle=this.outlineColor,s.lineWidth=this.outlineWidth,s.stroke()),s.fillStyle=this.color,s.fill(),s.restore()}containsPoint(t,e){t-=this.x,e-=this.y;const r=this.outline?this.outlineWidth/2:0;if(ot(0,0,t,e)>=this._radius+r)return!1;if(0!==this.rotation){const r=st(t,e,this.rotation);t=r.x,e=r.y}let i=Math.atan2(e,t);return i<0&&(i+=2*Math.PI),this._cc!==(this._sa<this._ea?this._sa<i&&i<this._ea:i>this._sa||i<this._ea)}}class X extends I{constructor(t,e,r,i,n){super(),this._width=t,this._height=e,this.x=null!=r?r:-1e3,this.y=null!=i?i:-1e3,this.color=n||"black",n&&!N(n)&&(console.warn(`Your color of ${n} is not a valid color`),this.color="black")}set width(t){this._width=t}get width(){return this._width}setWidth(t){return this._width=t,this}set height(t){this._height=t}get height(){return this._height}setHeight(t){return this._height=t,this}setSize(t,e){return this._width=t,this._height=e,this}draw(){s.beginPath(),s.ellipse(this.x,this.y,this._width/2,this._height/2,this.rotation,0,2*Math.PI),s.fillStyle=this.color,this.outline&&(s.strokeStyle=this.outlineColor,s.lineWidth=this.outlineWidth,s.stroke()),s.fill()}containsPoint(t,e){if(t-=this.x,e-=this.y,0!==this.rotation){let r=st(t,e,this.rotation);t=r.x,e=r.y}const r=this.outline?this.outlineWidth/2:0;return t**2/(this._width/2+r)**2+e**2/(this._height/2+r)**2<=1}}const V=new Array,Q=(t,e,r,i)=>{Math.max(e,50/3)!==e&&(console.warn(`Your delay of ${e} is shorter than 1 / 60th of a second, please make sure that it is longer or equal to it`),e=50/3);let n=t.bind({},r),s=setInterval(n,e);V.push({callback:t,delay:e,params:r,name:i||t.name,id:s})},Z=t=>{V.forEach(e=>{e.name!==t&&e.callback!==t||(clearInterval(e.id),V.splice(V.indexOf(e),1))})},tt=()=>{V.forEach(t=>clearInterval(t.id)),V.splice(0,V.length)},et=t=>{i.onclick=t},rt=t=>{i.onmousemove=t},it=t=>{window.onkeydown=t},nt=t=>{window.onkeyup=t},st=(t,e,r)=>({x:Math.cos(r)*t+Math.sin(r)*e,y:-Math.sin(r)*t+Math.cos(r)*e}),ot=(t,e,r,i)=>Math.sqrt((t-r)**2+(e-i)**2),at=(t,e)=>{for(t=Math.max(Math.abs(t),Math.abs(e)),e=Math.min(Math.abs(t),Math.abs(e));;){if(0==e)return t;if(0==(t%=e))return e;e%=t}},ht=t=>{let e=t.target,r=0,i=0;for(;e.offsetParent;)r+=e.offsetLeft,i+=e.offsetTop,e=e.offsetParent;return{x:t.pageX-r,y:t.pageY-i}},ut=t=>t*Math.PI/2,lt=t=>2*t/Math.PI;console.log("%c\n   OIIIII              II        II    II   OIIIII    II         II      \n  OI                   II        II    II  OI         II      () II      \n OI        OIIO    OIIOII  OOOO  IIIIIIII   OIIIO     II         IIOIO   \n  OI      OI  IO  OI  IOI OI===O II    II       IO    II      II II  IO  \n   OIIIII  OIIO    OIIOII  Oooo  II    II  IIIIIO     IIIIIII II IIOIO   \n                                                                         \n has loaded                                                              \n                                                                         \n read the docs: %chttps://pythonkiwi123.github.io/documentation/\n","font-family: monospace; color: lightgreen; background-color: black;","background-color: black")}}]);