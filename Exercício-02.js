// EXERCÍCIO 02
// Implemente a função separaParImpar(nums) em JavaScript que receba um array de números inteiros e devolva um novo array contendo dois sub-arrays:
// O primeiro sub-array deve agrupar todos os números pares de nums, na mesma ordem em que aparecem.
// O segundo sub-array deve agrupar todos os números ímpares de nums, também na mesma ordem original.
// Sua solução deve obedecer às seguintes restrições de implementação:
// Para adicionar elementos aos sub-arrays pares e ímpares, utilize atribuição direta via índice (sem usar push()).

let separarParimpar = (nums) => {
    let pares =[]
    let impares = []
    let indicePar = 0
    let indiceImpar = 0

    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
            pares [indicePar] = nums [i]
            indicePar++
        }else {
            impares[indiceImpar] = nums[i]
            indiceImpar++
        }
    }
    return 'Os números pares são: ${[pares]} e os ímpares são ${[impares]}'
}