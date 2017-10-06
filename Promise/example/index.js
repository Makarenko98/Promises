let imgList = []

for (let i = 1; i <= 10; i++) {
    imgList.push('img/' + i + '.jpg');
}


function loadImage(url) {
    //объект "обещание"
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            //в случае успешной загрузки изображения, результат "обещания" будет url этого изображения
            return resolve(url);
        }
        img.onerror = function () {
            //в случае не успешной загрузки изображения, результат "обещания" будет url этого изображения
            return reject(url);
        }
        img.src = url;
    });
}

/**
 *
 * @param imgList - массив url
 * @returns {Promise}
 */
function loadAndDisplayImages(imgList) {
    var notLoaded = []; //сохраним url, какие не были загружены
    var loaded = []; //сохраним url, какие были загружены
    var promiseImgs = imgList.map(loadImage);

    //вернем результат работы вызова reduce(...) - объект Promise, чтобы можно было потом  при необходимости продолжить цепочку вызовов:
    //loadAndDisplayImages(...).then(...).catch(...);
    return promiseImgs.reduce(function (previousPromise, currentPromise) {
            return previousPromise
                .then(function () {
                    //выполняется этот участок кода, так как previousPromise - в состоянии resolved (= Promise.resolve())
                    return currentPromise;
                })
                .then(function (url) //для "обещаний" в состоянии resolved
                    {
                        $('#images').append('<img src="' + url + '" style="width: 200px;"/>');
                        loaded.push(url);
                        return Promise.resolve(url);
                    })
                .catch(function (url) //для "обещаний" в состоянии rejected
                    {
                        console.log('не удалось загрузить изображение по указанному пути: ', url);
                        notLoaded.push(url);
                        return Promise.resolve(url);
                    });

        }, Promise.resolve())
        .then(function (lastUrl) {
            console.log('lastUrl:', lastUrl);

            let res = {
                loaded: loaded,
                notLoaded: notLoaded
            };

            //но мы вернем Promise, значение которого будет объект
            return Promise.resolve(res);
        });

}

loadAndDisplayImages(imgList)
    .then(function (loadRes) {
        console.log(loadRes);
    })
    .catch(function (err) {
        console.log(err);
    });