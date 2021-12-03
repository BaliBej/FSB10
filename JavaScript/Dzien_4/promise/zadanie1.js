const ulList = document.querySelector(".list-group");

const getNames = function () {
    const names = ["Jan", "Piotr", "Anna"];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(names);
        }, 2000);
    });
};

getNames().then(data => {

    data.forEach(name => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = name;
        ulList.appendChild(li);
    });

});
