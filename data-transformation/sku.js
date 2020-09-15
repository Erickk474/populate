module.exports = (data) => {

    const response = new Array();

    for (const each of data) {
        response.push({
            title: each.name,
            price: 100,
            old_price: 100,
            promotion: false,
            height: '1',
            weight: '1',
            quantity: 1,
            images: [each.url]
        })
    }

    return response;
}