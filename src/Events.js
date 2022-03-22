/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', function () {
        this.remove();
    });
    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    arr.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('mouseover', function () {
            this.setAttribute('title', this.textContent);
        });
        ul.append(li);
    });
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.textContent = 'tensor';
    a.addEventListener('click', function temp(e) {
        e.preventDefault();
        this.textContent += ` ${this.getAttribute('href')}`;
        this.removeEventListener('click', temp);
    });
    document.body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    ul.addEventListener('click', function (e) {
        if (e.target.nodeName === 'LI') e.target.textContent += '!';
    });
    button.addEventListener('click', function (e) {
        let li = document.createElement('li');
        li.textContent = 'Пункт';
        document.querySelector('ul').append(li);
    });
    ul.append(li);
    document.body.append(ul);
    document.body.append(button);
}
