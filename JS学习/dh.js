function slow(obj, target, callback) { // -------------------------封装函数

    clearInterval(obj.time) // --------------------------清除上一个计时器

    obj.time = setInterval(function () { // -------------开启定时器

        step = (target - obj.offsetLeft) / 10 // --------渐慢公式 赋值给 step  // 渐慢效果公式： (目标位置 - 当前位置) / 10
        if (step > 0) { // ------------------------------判断 step 是正数还是负数 
            step = Math.ceil(step) // ------------------- step 是正数执行 向大的取值(Math.ceil())
        } else {
            step = Math.floor(step) // ------------------ step 是负数执行 向小的取值(Math.floor())
        }


        if (obj.offsetLeft == target) { // --------------判断 div 的left值是否 等于 target
            clearInterval(obj.time) // ------------------div 的 left 值等于 target 时，清除定时器
            if (callback) {
                callback()
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px' // div 的 left 值布等于 target 时，left值 加上 step(公式得到的值)
        }
    }, 20)
}