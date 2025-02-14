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

test('Exams page opens successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.openExams();
//check if the exams page opens and check for correct url.
})

test('Licenses page opens successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.openLicenses();
//check driver's licenses page and check for url.
 })

 test('Vehicles page opens successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.openVehicles();
})

test('Youtube link redirects successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.youtubeLink();
//tests if the social youtube button redirects to the correct youtube channel.
})

test('Facebook link redirects successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.facebookLink();
//tests the facebook link.
})

test('Instagram link redirects successfully', async ({ page }) => {
    let homePage = new Homepage(page);
    await homePage.goto();
    await homePage.instagramLink();
//tests the instagram link.
})