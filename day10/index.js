export default async function main() {
    console.log('hello');

    var a = 1;

    console.log(`a : ${a}`);
    a = a + 1;
    console.log(`a : ${a}`);

    let b = 1;
    b += 5;
    console.log(`b : ${b}`);

    const c = 1;
    console.log(`c : ${c}`);

    let a1 = 1;
    console.log(`a1 : ${a1}`);
    {
        let a1 = 3;
        a1 += 1;
        console.log(`a1 : ${a1}`);
    }
    console.log(`a1 : ${a1}`);

 
    const items = Array.from(document.querySelectorAll('.menu-item'));
    if (items.length === 0) return;


    let idx = items.findIndex(el => el.classList.contains('select'));
    if (idx < 0) {
        idx = 0;
        items[0].classList.add('select');
    }

    function applySelect(newIdx) {
        items[idx].classList.remove('select');
        idx = (newIdx + items.length) % items.length; 
        items[idx].classList.add('select');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            applySelect(idx + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            applySelect(idx - 1);
        }
    });
}
