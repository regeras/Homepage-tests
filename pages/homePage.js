import { expect } from '@playwright/test';

export class Homepage {
    constructor(page) {
        this.page = page;
    }
    


async goto() {
await this.page.goto("https://www.regitra.lt/#");

const popupClose = this.page.getByRole('link', { name: '×' }).first();
if (await popupClose.isVisible()){
    await popupClose.click();}
await expect(this.page).toHaveTitle(/Regitra/i);
} //just opens the page and closes any popup

async openServices() {
    await this.page.locator('.top_link > a').first().click();
    await expect(this.page).toHaveURL(/www.eregitra.lt/); 
} //cliks "E.paslaugos", the first button most users will use and checks if it loaded successfully.

async openNews() {
    await this.page.locator('div:nth-child(2) > a').first().click();
    await expect(this.page).toHaveURL(/naujienos/);
}



}