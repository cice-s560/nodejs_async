function cadenaPromesas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2000), 1000);
    });
}

cadenaPromesas()
    .then(time => {
        console.log('...espera...');
        return new Promise(resolve => {
            setTimeout(() => resolve('Fin'), time);
        });
    })
    .then(param => {
        return new Promise((resolve, reject) => {
            reject(new Error('Error en cadena de promesas'));
        });
    })
    .then(param => console.log(param))
    .catch(err => console.error(`Error: ${err.message}`));