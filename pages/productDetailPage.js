class productDetailPage{
    constructor(page){
        this.page = page;
        this.addToCartButton = page.getByRole('link',{name: 'Add to cart'});
        this.goToCartBttn = page.getByRole('link', {name: 'Cart', exact: true});

    }

    async addToCart(){
        await this.addToCartButton.click();
  
    }

    async handlePopUp(){
        this.page.on('dialog', dialog => dialog.accept());

    }

    async goToCart(){
        this.goToCartBttn.click();
    }
}
module.exports = productDetailPage;