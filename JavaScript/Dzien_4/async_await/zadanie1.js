const $title = document.getElementById("title");
const $completed = document.getElementById("completed");
const $author = document.getElementById("author");

async function getData() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
        const data2 = await response2.json();

        $title.innerText = data.title;
        $completed.innerText = data.completed;
        $author.innerText = data2.name;

    } catch(error) {
        console.log(error);
    }

}

getData();
