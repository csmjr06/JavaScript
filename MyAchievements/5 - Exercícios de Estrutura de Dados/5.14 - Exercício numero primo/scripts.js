let N = prompt ("Entre com o número: ")
R = "O número " + N + " é primo!"
for (let i = N-1; i > 1; i--) {
    if (N % i == 0) {
        R = "O número " + N + " não é primo!"
        break
    }
}
console.log(R)