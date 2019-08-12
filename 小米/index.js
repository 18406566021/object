window.onload = function () {
    let yingyin = document.querySelectorAll(".new1")
    let yingyinbox = document.querySelectorAll(".new2")
    yingyin[0].style.zIndex = 10
    yingyinbox[0].style.zIndex = 10

    yingyin.forEach((item,index)=>{
        item.onmouseenter = function () {
            yingyinbox.forEach(function (item,index) {
                yingyin[index].style.color = "#000000"
                yingyinbox[index].style.zIndex = 0
                yingyin[index].style.borderBottom = "none"
            })
            yingyinbox[index].style.zIndex = 10
            yingyin[index].style.color = "#ff6700"
            yingyin[index].style.borderBottom = "2px solid #ff6700"
        }
    })
}

