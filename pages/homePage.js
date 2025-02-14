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
//opens the next visible button and checks that url changed.
}

async openExams() {
    await this.page.locator('.link_holder > a').first().click();
    await expect(this.page).toHaveURL(/egzaminai/);
}

async openLicenses() {
    await this.page.locator('div:nth-child(2) > .link_holder > a').click();
    await expect(this.page).toHaveURL(/vairuotojo-pazymejimai-2/);
}

async openVehicles() {
    await this.page.locator('div:nth-child(3) > .link_holder > a').click();
    await expect(this.page).toHaveURL(/transporto-priemones/);
}
//all the above simply click a button that redirects the user and checks if it redirected successfully.


async youtubeLink() {
    await this.page.locator('a.social').first().click();
    const page1Promise = this.page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Reject all' }).click();
  await expect(page1).toHaveURL(/regitraLTvideo/);
}


async facebookLink() {
    await this.page.locator('a.social').nth(1).click();
    const page1Promise = this.page.waitForEvent('popup');
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(/Regitraa/);

}

async instagramLink() {
    await this.page.locator('a.social').nth(2).click();
    const page1Promise = this.page.waitForEvent('popup');
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(/regitra_official/);
}
//this code locates the socials buttons, clicks the first, the second, and third, waits for a new page to open and checks the URL.
}