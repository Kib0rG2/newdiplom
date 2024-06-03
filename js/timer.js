// Определяем действующие элементы на странице
const month = document.querySelector('#month');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Делаем расчеты
const currentMonth = new Date().getMonth();
const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1; // Если текущий месяц - декабрь, следующий будет январь следующего года
const nextYear = nextMonth === 0 ? new Date().getFullYear() + 1 : new Date().getFullYear();
const nextMonthStart = new Date(nextYear, nextMonth, 1);

// Устанавливаем месяц на страницу
function updateCounter() {
    const currentTime = new Date();
    const diff = nextMonthStart - currentTime;

    // Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем 8 часов
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // Минут всего, далее остаток от преобразования в часы, минут осталось
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    // Секунд всего, далее остаток от преобразования в минуты, секунд осталось
    const secondsLeft = Math.floor(diff / 1000) % 60;

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

// Запускаем расчет 1 раз в секунду (каждую секунду)
setInterval(updateCounter, 1000);

setTimeout(function () {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);
