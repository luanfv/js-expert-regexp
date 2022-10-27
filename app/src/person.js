const { evaluateRegex } = require('./util');

class Person {
    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado,
    ]) {
        const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-z]+$)/g);
        const formatFirstLetter = ((prop) => {
            return prop.replace(firstLetterExp, (_, group1, group2) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`;
            });
        });

        this.nome = nome;
        this.nacionalidade = formatFirstLetter(nacionalidade);
        this.estadoCivil = formatFirstLetter(estadoCivil);
        this.documento = documento.replace(evaluateRegex(/\D/g), '');
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/))[0];
        this.numero = numero;
        this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/))[0];
        this.estado = estado.replace(evaluateRegex(/\.$/), '');
    }
}

module.exports = Person;
