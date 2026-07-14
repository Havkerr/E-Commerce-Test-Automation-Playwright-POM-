class cartPage{
    constructor(page){
        this.page = page;
        this.placeOrderBttn = page.getByRole('button', {name: 'Place Order'});
    }

    async placeOrder(){
        await this.placeOrderBttn.click();
    }
}
module.exports = cartPage;