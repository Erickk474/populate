const request = require('request');
const productTransformation = require('./data-transformation/product');
const skuTransformation = require('./data-transformation/sku');


(async() => {

    const productsFormated = new Array();

    let products = await getProducts(4);
    products = JSON.parse(products.body)[0];

    for (const product of products.children) {
        const productMaster = productTransformation(product);

        if (product.children.length) {
            productMaster.variants = skuTransformation(product.children);
            productMaster.tags = product.children.map(item => item.name);
        };

        productsFormated.push(productMaster);
    }

    console.log(productMaster);

})();


function getProducts(category) {
    return new Promise((resolve, reject) => {
        request('https://www.overboard.com.br/api/catalog_system/pub/category/tree/' + category,
            (err, res, body) => {
                if (!err && res.statusCode === 200) {
                    resolve({ success: true, body })
                }
                if (!err && res.statusCode === 404) {
                    resolve({ success: false, body });
                }
                reject(err);
            });
    });
}