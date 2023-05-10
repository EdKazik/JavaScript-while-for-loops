// 1
let str = '';
for (let num = 20; num <= 30; num += 0.5) {
		str += `${num}; `;  
}
console.log(str);

// 2

const someValue = 27;
for (let d = 10; d <= 100; d += 10) {
        console.log(`${d}: ${(d*someValue)}`);
}

// 3

const N = 90;
let s = '';
for (let a = 1 ; a <= 10000; a++) {
    let b = a * a;
    if (b <= N) {
        s += `${a}; `
            
    }   	
}
console.log(s);


// 4

const n = 20;
for (let f = 2; f <= n; f++) {
    for (let g = 2; g <= f; g++) {
        if ((f % g == 0) && (g != f)) {
            break;
        } else {
            console.log(f)
            break
        }
    }
}

// 5

const z = 135;
for (let t = 3; t < z; ) {
    if (z % t === 0) {  
            prompt(`${(z/3)/3} to the third degree = ${z}`)
            break;
    } else {
        alert ('Your number is not suitable for the third degree!!!')
        break;
        }
}