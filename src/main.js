let html = document.querySelector('#html')
let style = document.querySelector('#style ')
let string = ` /*你好，我叫丽雯
 *接下来我要演示一下我的前端功底
 *首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px; 
}

/*接下来我把div变成一个八卦图 
 *注意看好咯哦 
 *首先把div变成一个圆圈 
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/*八卦是阴阳形成的
 *一黑一白  
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*但还少了两个小圆圈的点睛之笔
 *让我来加上它  
 **/
#div1::before{
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background: #000000;
    border-radius: 50%; 
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: #ffffff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%); 
}
` 
//显示在屏幕上的内容 
//注意第一个div‘}’之后不能加分号，不然默认后面的样式不执行

// /*你好👋，我是一名前端新人
// 接下来我要加样式了
// 我要加的样式是*/
// body{
//     color: red;
// };

let string2 = ''; //缓存 用来帮助展示需要展示在屏幕上的内容
//string = string.replace(/\n/g,  '<br>')

let n = 0
//demo.innerHTML = string.substring(0, n);

let step = () =>{
    setTimeout(() => {
        //n = n + 1; 
        if (string[n] === '\n'){
            //如果是回车，就改成下面的格式
            string2 += '<br>';
        }else if(string[n] === ' '){
            string2 += '&nbsp;';
        }
        else{
            //如果不是回车，就照搬
            string2 += string[n];
        }
        //string2 += string[n] === '\n' ? '<br>' : string[n]; 

        html.innerHTML = string2 ;
        style.innerHTML = string.substring(0, n) ;

        window.scrollTo(0,99999); 
        html .scrollTo(0,99999);

        if(n < string.length-1){ 
            n += 1
            step();
        }
    }, 50);
}

step();
