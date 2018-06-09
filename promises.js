function cadenaPromesas() {
    return new Promise((resolve, reject) => {
        resolve('Promesa resuelta');
    });
}

cadenaPromesas().then(param => console.log(param))