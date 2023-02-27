let name = '小明';
function sum(num1, num2) {
    return num1 + num2;
};


// 导出的方式
// 第一种
// 定义好变量最后导出
export {
    name, sum
};


// 第二种
// 直接定义一个变量并导出
// export let age = 10;


// 第三种
// 导出函数
// export function 函数名() {

// }

// 导出类
// export class Person {
//     age() {

//     }
// }


// 第四种
// default 导出的内容名称由调用者自定义，且只能导出一个 default 
const age = 23;
export default age;