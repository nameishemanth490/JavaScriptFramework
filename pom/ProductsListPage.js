class ProductsListPage {

    productsList = "//ul[@class='product_list grid row']/li//a[@class='product_img_link']";

    selectProduct(productId) {
        const products=browser.$$(this.productsList);
        for (const product in products) {
            if (products.hasOwnProperty(product)) {
                const element = products[product];
                if(element.getAttribute('href').includes(productId)) {
                    element.click();
                    break;
                }
            }
        }
    }

    
}
module.exports = new ProductsListPage();