
const puppeteer = require("puppeteer");
const cheerio = require('cheerio');
const fs = require('fs');
navigateWebPage();

async function navigateWebPage() {

  
  const email = 'lowiXD@hotmail.com';
  const password = 'TnjFFgJh';

  //const datos = login(email, password);
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  
  await page.goto('https://deportesweb.madrid.es/DeportesWeb/login');

  


 // Espera a que el artículo esté disponible en el DOM
 await page.waitForSelector('article.navigation-section-widget-collection-item');

 // Selecciona el elemento artículo
 var articleElement = await page.$('article.navigation-section-widget-collection-item');

 // Haz clic en el artículo
 await articleElement.click();

 // Espera a que el formulario de inicio de sesión esté disponible en el DOM
 await page.waitForSelector('form');

 // Espera a que los campos de entrada estén disponibles en el DOM
 await page.waitForSelector('#ContentFixedSection_uLogin_txtIdentificador');
 await page.waitForSelector('#ContentFixedSection_uLogin_txtContrasena');

 // Ingresa el correo electrónico
 await page.type('#ContentFixedSection_uLogin_txtIdentificador', email);

 // Ingresa la contraseña
 await page.type('#ContentFixedSection_uLogin_txtContrasena', password);

 //Envía el formulario de inicio de sesión
 await page.keyboard.press('Enter');



  // Espera a que la página se cargue después de enviar el formulario
  await page.waitForNavigation();


  

 
  
 
    await page.goto('https://deportesweb.madrid.es/DeportesWeb/Modulos/VentaServicios/Eventos/AltaEventos?token=5F47B0942AD5C1AE3BFED61B45B09069'); 
     // Espera a que la página se cargue después de enviar el formulario
   

    const html = await page.content();

   

  


// Esperar a que el elemento ul con la clase 'media-list clearfix' esté presente en la página
//await page.waitForSelector('ul.media-list.clearfix');

// Obtener la lista de elementos li que tienen la clase 'media.pull-left'
//const liElements = await page.$$('ul.media-list.clearfix li.media.pull-left');

// Iterar sobre cada elemento y hacer clic en ellos
/*for (const liElement of liElements) {
  
     await liElement.click();
    
    new Promise(resolve => setTimeout(resolve, 1000));

   

    


    
}*/
const $ = cheerio.load(html);
const lis = $('#ContentFixedSection_uAltaEventos_uCentrosSeleccionar_divCentros > ul > li');


  for (let i = 0; i < lis.length; i++) {
    // Obtener el texto del elemento li actual
    const texto = $(lis[i]).text();
    console.log('Texto del elemento li:', texto);

    await page.waitForSelector('#ContentFixedSection_uAltaEventos_uCentrosSeleccionar_divCentros > ul > li:nth-child(' + (i + 1) + ')');
    //await page.click('#ContentFixedSection_uAltaEventos_uCentrosSeleccionar_divCentros > ul > li:nth-child(' + (i + 1) + ')');
    const los = $('#ContentFixedSection_uAltaEventos_uAltaEventosFechas_divRecintos > ul > li');
    for (let i = 0; i < los.length; i++) {
      
    const texto = $(los[i]).text();
    console.log('Texto del elemento li:', texto);

    await page.waitForSelector('#ContentFixedSection_uAltaEventos_uAltaEventosFechas_divRecintos  > ul > li:nth-child(' + (i + 1) + ')');


    }
    console.log('Clic realizado en el elemento li número', i + 1);
   
    
    
}   
  
  
}






  






