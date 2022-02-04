const input = document.getElementById("in")
const btn = document.getElementById("bt")
const result = document.getElementById("re")

function calc() {
    const stack = []
    let str = input.value.trim()
    if (str === "") {
        alert("数値が入力されていません")
        return
    }
    const words = str.split(" ")
    console.log(words)
    for (const v of words) {
        const parsed = parseInt(v, 10)
        if (isNaN(parsed)) {
            let y = stack.pop()
            let x = stack.pop()
            switch (v) {
                case "+":
                    stack.push(x + y)
                    break;
                case "-":
                    stack.push(x - y)
                    break;
                case "*":
                    stack.push(x * y)
                    break;
                case "/":
                    stack.push(x / y)
                    break;
            }
        } else {
            stack.push(parsed)
        }
    }
    result.innerHTML = stack[0]
}

btn.addEventListener("click", calc)