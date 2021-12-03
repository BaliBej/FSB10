fetch('https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL')
    .then(resp => resp.json())
    .then(data => {

        data.holidays.forEach(holiday => {

            const holidayLi = document.createElement('li');

            const holidayH3 = document.createElement('h3');
            holidayH3.className = 'holiday-name';
            const holidayDate = document.createElement('date');
            holidayDate.className = 'holiday-date';

            holidayH3.innerText = holiday.name;
            holidayDate.innerText = holiday.date;

            holidayLi.appendChild(holidayDate);
            holidayLi.appendChild(holidayH3);

            document.querySelector('body').appendChild(holidayLi);

        })

    })
