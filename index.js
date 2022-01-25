const axios =  require('axios');
const cheerio = require('cheerio');

const url = 'https://www.fundsexplorer.com.br/ranking';

async function getFounds(){
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const dataListFunds = [];

    $('#table-ranking tbody td').each((i, elem)=>{
        const nameFunds = $(elem).text();
        dataListFunds.push(nameFunds);
    });
    //console.log(`${dataListFunds}`);
    return(dataListFunds);
}
async function getNameFunds(){
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let  listNameFunds = []

    $('#table-ranking thead th').each((i,elem) => {
        const  namePropriety = $(elem).text();
        listNameFunds.push(namePropriety);
    });
    // console.log(`${listNameFunds}`);
    return(listNameFunds);
}
function getTable(){
    getFounds();
    getNameFunds();
}