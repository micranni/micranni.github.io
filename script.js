
const original = document.querySelector('.logos-slide');
const container = document.querySelector('.logos');
const numberOfCopies = 4; // Change this to how many copies you want

for (let i = 0; i < numberOfCopies; i++) {
    const copy = original.cloneNode(true);
    container.appendChild(copy);
}

