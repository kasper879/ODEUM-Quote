var pdfMake = require('pdfmake');
var fs = require('fs');
var image = require('../img/data')
var fonts = {
    Roboto: {
        normal: '../fonts/Roboto-Regular.ttf',
        bold: '../fonts/Roboto-Medium.ttf',
        italics: '../fonts/Roboto-Italic.ttf',
        bolditalics: '../fonts/Roboto-Italic.ttf'
    }
};

var printer = new pdfMake(fonts);

createPdf = (date) => {

    console.log('pdfmake is trigged')

    var pdfStyle = {
        header: {
            // you'll most often use dataURI images on the browser side
            // if no width/height/fit is provided, the original size will be used
            image: image,
            width: 115,
            height: 110,
            alignment: 'right',
            margin: [37, 0, 0, 0]
        },

        footer: {
            columns: [
                { text: 'WebHouse ApS · Kong Christians Alle 37 · DK-9000 Aalborg · Tel.: +45 96 30 30 72 · info@webhouse.dk · www.webhouse.dk · CVR: 21221198', alignment: 'center', fontSize: 7.5 }
            ]
        },

        content: [
            { text: 'Virksomhed', margin: [20, 30, 0, 0] },
            { text: 'Kontaktperson', margin: [20, 0, 0, 0] },
            { text: 'Email', margin: [20, 0, 0, 0] },
            { text: 'Telefon', margin: [20, 0, 0, 0] },

            { text: `Aalborg, 12/07/2017`, alignment: 'right' },

            { text: 'Titel på tilbud', fontSize: 20, margin: [20, 80, 0, 10], bold: true },
            { text: 'The domestic cat[1][5] (Felis silvestris catus or Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines.', margin: [20, 0, 0, 20] },

            { text: 'Med venlig hilsen', absolutePosition: { x: 65, y: 645 } },
            { text: 'Webhouse ApS', absolutePosition: { x: 65, y: 660 }, bold: true },
            { text: 'Christian Broberg', absolutePosition: { x: 65, y: 675 }, bold: true },
            { text: 'Kong Christians Alle 37', absolutePosition: { x: 65, y: 690 } },
            { text: '9000 Aalborg', absolutePosition: { x: 65, y: 705 }, pageBreak: 'after' },

            { text: 'Produkt oversigt', fontSize: 20, margin: [0, 80, 0, 20], bold: true },

            {
                //The table
                layout: 'lightHorizontalLines', // optional
                style: 'tableExample',
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: ['*', '*', '*'],

                    body: [
                        [{ text: 'Produkt', bold: true }, { text: 'Beskrivelse af produkt', bold: true }, { text: 'Pris', alignment: 'right', bold: true }],
                        ['Value 1', 'Value 2', { text: 'Value 3', alignment: 'right' }]
                    ]
                },
                styles: {
                    tableExample: {
                        margin: [15, 100, 0, 15]
                    },
                }
            }
        ]
    };

    var pdfDoc = printer.createPdfKitDocument(pdfStyle);
    pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish', function () {
        //success
    });

    pdfDoc.end();
}
createPdf();
module.exports = { createPdf }
