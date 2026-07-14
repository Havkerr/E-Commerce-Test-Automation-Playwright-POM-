class homePage{
    constructor(page){
        this.page = page;
        this.productLink = page.getByRole('link', { name: 'Samsung galaxy s7' });
    }

    async navigate(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async selectProduct(){
        await this.productLink.click();
    }

}
module.exports = homePage;