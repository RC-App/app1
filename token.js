// dados.js

const usuarios = [
    { id: "U2FsdGVkX1/fDuDuyXmfTtchq9ztFJZh4k2z3lny5xA=", token: "U2FsdGVkX1+G5//2txMwiPfH8qfdU57utZVY9VbNu5SVky/NWaMVXZX4YxEOWoEb" }, // ronaldo
    { id: "U2FsdGVkX1+2O3mdRSsbHkKjvhxjk6M8pv4apQCELlMkG1p6ufTFtzBzCHZamkca", token: "U2FsdGVkX1+OAgwM/uhI7qSZUJBY+qFdSiD5VMwnbHpM+z3pZowVGFSV3RLqb7wi" }, //jcarlos.teixeira
    { id: "U2FsdGVkX19Mrm2qPyNigxSy462FBJ0tS1PM+8T9f9fczYFhsoeP8YjRotEmYotJ", token: "U2FsdGVkX1/+UmsmXhywyXA76tSQGxaTW649n3g7C2t98vjfbCcw56zCAma/kUP1" }, //ubedio
    { id: "U2FsdGVkX1+hcYbXT2r8DmYf7lszn+bgJJVhyGT7qX0=", token: "U2FsdGVkX18FUbcjLIBYPWAzeimmdQlESrzFn5ftNjuAuG1kYWgNOwH2zQmsk6X7" }, //jarbas
    { id: "U2FsdGVkX18KVdq4schMNzLwLPwIJBs66x6HOKc9IDS5xOlhbl3XwTsruQBPqFRv", token: "U2FsdGVkX18kxjEvNi9/FsrOAql5OLlgcsRMSbtj6zLTYZCdbM/BB5UOnYRUzyLP" }, //joseenildo
    
    
    { id: "U2FsdGVkX1/UNYkOZVUa6e61DDettkfSuPDkyFIqyB0=", token: "U2FsdGVkX1+grbIoMOtmqydBQS4SU1g57pYs+GYyfB1bGdDmCA+3d4uvEQOei0MQ" }, //marcelo
    
];

function obterTokenPorNomeUsuario(nomeUsuario, senha) {
    // Verifique se o nome de usuário e a senha foram fornecidos
    if (!nomeUsuario || !senha) {
        return null;
    }

    for (const usuario of usuarios) {
        try {
            const decryptedId = CryptoJS.AES.decrypt(usuario.id, senha).toString(CryptoJS.enc.Utf8).trim();
            if (decryptedId === nomeUsuario) {
                return usuario.token;
            }
        } catch (error) {
            console.error('Erro ao descriptografar ID:', error);
        }
    }
    return null;
}
