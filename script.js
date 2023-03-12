let arr = []
for (let i = 0; i < 30; i++) { //формируем массив из числел
    arr[i] = Math.floor(Math.random() * 100)
}

function table(arr) {
    let length = arr.length
    let table = document.createElement("table") //формируем таблицу
    table.id = "table"
    let cols = 5                                //создаем таблицу с заданным количеством столбцов
    let rows = Math.ceil(length / cols)         //вычисляем количество рядов таблицы
    for (let i = rows; i > 0; i--) {
        let tr = table.insertRow()              //формируем ряд
        for (let n = cols; n > 0; n--) {
            length--
            let td = tr.insertCell()            //формируем ячейку
            td.innerText = arr[length]          //записывем значение в ячейку
            arr[length] >= 50 ? td.style.backgroundColor = 'orange' : null
        }
    }
    document.body.insertBefore(table, document.body.firstChild) //записываем таблицу в начале тега body
}

function foo() {
    let number = Math.floor(Math.random() * 100)    //генерируем новое значение
    let table = document.getElementById("table")
    let cells = table.querySelectorAll('td')
    let tr, td = {}

    cells.length % 5 == 0 ? tr = table.insertRow() : tr = table.lastChild.lastChild //если ряд полон создаем новый
    td = tr.insertCell()                                                            //добавляем ячейку
    number >= 50 ? td.style.backgroundColor = 'orange' : null
    td.innerText = number
}

table(arr)