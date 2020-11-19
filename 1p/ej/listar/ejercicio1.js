var s = [31, 1, 4, 2, 32]
var perm1

function permutaciones(n) {
    perm1 = [];
    let perm = (a, p = []) => {
        if (!a.length) {
            perm1.push(p);
            return;
        }
        for (let i in a) {
            let curr = a.slice();
            let nx = curr.splice(i, 1);
            perm(curr, p.concat(nx));
        }
    }
    perm(n);
    return perm1;
}
console.log(permutaciones(s));
console.log('O(n^2)');