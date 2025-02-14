import { test, expect } from '@playwright/test';
import { Homepage} from '../pages/homePage';




test('Homepage loads successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
}) //testing if the website opens.

//the next few tests will test if the buttons successfully redirect the user.

test('Services open successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.openServices();
// check to see if 'E.Paslaugos' opens and check for correct url
 })

 test('News open successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.openNews();
// check if the 'naujienos' page opens and check for correct url.
})



