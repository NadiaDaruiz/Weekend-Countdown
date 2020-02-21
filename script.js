/* Add an event to the button
   Need to get the input value 
   Put the value Name into an string interpolation */

(() => {

    const input = document.getElementById('name')
    const button = document.querySelector('.btn')
    const messageBox = document.querySelector('.message__box')
    const p = document.querySelector('p')

    button.addEventListener('click', getName)

    function getName() {
        let name = input.value.toUpperCase().substring(0, 1) + input.value.toLowerCase().substring(1);

        // figure out the date thing

        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = weekdays[new Date().getDay()];
        let daysLeft = 6 - weekdays.indexOf(date); // 6 cause is weekdays, I'm leaving out Sat and Sun

        let message = '';

        if (date === 'Saturday' || date === 'Sunday') {
            message = `Hello ${name}.Today is ${date}. It's the weekend!`
        } else {
            message = `Hello ${name}.Today is ${date}, only ${daysLeft} day till the weekend.`
        }

        p.innerHTML = message;
    }
})()

