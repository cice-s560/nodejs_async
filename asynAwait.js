const request = require('request-promise');

function miPromesa() {
    return new Promise((resolve, reject) => {
        // Happy Path
        // const url = 'http://google.com/';
        // Unhappy path -> catch
        const url = 'http://tretretretretwrefd.com/';

        setTimeout(() => resolve(url), 1000);
    });
}

// async indica que su respuesta es una promesa. Lo convierte
async function dameResultado() {
    const resultado = await miPromesa();

    console.log('promesa: ', resultado);
}


// dameResultado();


async function resultados() {
    try {
        const url = await miPromesa();
        const webData = await request(url);

        return {
            url,
            webData
        };

        // Promise Mode: 
        // miPromesa()
        // .then(url => {
        //     new Promise(resolve => resolve(request(url)));
        // })
        // .then(data => {
        //     url,
        //     webData
        // });
    }
    catch(e) {
        console.error('Error: ', e.message);
    }
}

(async () => {
    console.log(await resultados());
})();
