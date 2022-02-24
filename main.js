class Prima {
    temp = [];
    bilanganGanjil = [];
    bilanganGenap = [];

    constructor(n) {
        this.n = n;
    }

    nonPrima() {
        for (let i = 1; i < this.n; i++) {
            let flag = 0;

            if (i == 1) flag = 1;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 1) this.temp.push(i);
        }

        return `Bukan Bilangan Prima ${ this.temp }`;
    }

    handleBilangan(val, data) {
        this.temp.forEach((item) => {
            if (item % 2 == val) data.push(item);
        });

        const type = val == 0 ? "Genap" : "Ganjil";

        return `Bilangan ${ type } = ${ data }`;
    }

    ganjil() {
        return this.handleBilangan(1, this.bilanganGanjil);
    }

    genap() {
        return this.handleBilangan(0, this.bilanganGenap);
    }
}

const data = new Prima(30);

console.info(data.nonPrima());
console.info(data.ganjil());
console.info(data.genap());