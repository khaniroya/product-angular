
export function randomIdCreate(max: number, min: number) {
    var idCreate = Math.floor(Math.random() * (max - min)) + min
    return idCreate;
}