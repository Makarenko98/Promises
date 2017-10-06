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
loadImage(imgList[0])
    .then(function (url) {
        $('#images').append('<img src="' + url + '" style="width: 200px;" />');
    })
    .catch(function (url) {
        //как и сообщалось выше, не обязательно, чтобы сюда передавался объект типа Error
        //например, вы захотите сохранить в отдельный массив пути к картинкам , которые не подгрузились, и потом что-нибудь с ним сделать...
        console.log("не удалось загрузить изображение по указанному пути: ", url);
    });

function displayImages(images) {
    var imgSrc = images.shift(); // проходим по массиву с изображениями
    if (!imgSrc) return; //если в результате рекурсии прошлись по всему массиву

    //если в массиве еще есть изображение, загружаем его
    return loadImage(imgSrc)
        .then(function (url) {
            $('#images').append('<img src="' + url + '" style="width: 200px;"/>');
            return displayImages(images); //рекурсия
        })
        .catch(function (url) {
            //если какое-то из изображений не загрузилось, переходим к следующему изображению
            console.log('не удалось загрузить изображение по указанному пути: ', url);
            return displayImages(images); //рекурсия
        });
}

displayImages(imgList);