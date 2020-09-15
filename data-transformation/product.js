module.exports = (data) => {
    return {
        title: data.name,
        category: [data.name],
        tags: [],
        image: '',
        variants: []
    }
}