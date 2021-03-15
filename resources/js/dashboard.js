const sidebar = document.querySelectorAll('.side')[0];
const dashul = sidebar.querySelectorAll('ul')[0];
const dashopt = dashul.querySelectorAll('li');

dashul.onclick = (e) => {
    for (let li of dashopt) {
        li.classList.remove("color");
        lis = e.target;
        lis.classList.add("color");
    }
}