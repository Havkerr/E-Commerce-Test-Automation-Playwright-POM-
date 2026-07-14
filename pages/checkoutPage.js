class checkoutPage{
    constructor(page){
        this.page = page;
        this.Name = page.locator('#name');
        this.Country = page.locator('#country');
        this.City = page.locator('#city');
        this.CreditCard = page.locator('#card');
        this.Month = page.locator('#month');
        this.Year = page.locator('#year');

        this.purchaseBttn = page.getByRole('button', {name: 'Purchase'});
    }
    
    async fillForm(name,country,city,card,month,year){
        await this.Name.fill('name');
        await this.Country.fill('country');
        await this.City.fill('city');
        await this.CreditCard.fill('card');
        await this.Month.fill('month');
        await this.Year.fill('year');
    }
    
    async clickPurchase(){

       await this.purchaseBttn.click();
    }

}
module.exports = checkoutPage;