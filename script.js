var productarry = [
    {
        name: 'Vicks Cough Syrup Honey',
        price: 68.99,
        image:
        'https://cdn-prd-02.pnp.co.za/sys-master/images/h0c/hb4/10573893271582/silo-product-image-v2-03Nov2021-180709-5011321451988-up-2809738-64779_400Wx400H'
    },
    {
        name: 'Brand new', 
        price: 124.99,
        image:
        'https://i.ebayimg.com/images/g/IJ8AAOSwS8Fh59Pp/s-l640.jpg'
    },
    {
        name: 'Benadryl Children',
        price: 15.35,
        image:
        'https://assets.mydeal.com.au/47788/benadryl-children-s-cough-liquid-2-years-honey-lemon-flavour-200ml-4640734_00.jpg?v=637757804126547730&imgclass=dealpageimage'
    },
    {
        name: 'VICKS Vapor Rub',
        price: 395.00,
        image:
        'https://lzd-img-global.slatic.net/g/p/9252063b2b735b4eb69981503541a98d.jpg_720x720q80.jpg_.webp'
    },
    {
        name: 'Vicks Cough Drops Menthol',
        price: 20.00,
        image:
        'https://newassets.apollo247.com/pub/media/catalog/product/v/i/vic0017.jpg'
    },
    {
        name: 'Cepacol Honey & Lemon',
        price: 56.99, 
        image: 
        'https://www.igroceryz.co.za/wp-content/uploads/2020/09/HB0828.jpg'
    },
    {
        name: 'Benylin Phlegm Cough Syrup', 
        price: 5.99, 
        image: 
        'https://www.mccabespharmacy.com/media/catalog/product/cache/0a25e76219dc520d48d652a126760a56/b/e/benylin-phlegm-cough-syrup-125ml.webp'
    },
    {
        name: 'CAL-C-VITA BAYER', 
        price: 130.50, 
        image: 
        'https://sentrumpharmacy.com/wp-content/uploads/2021/07/CAL-C-VITA-BAYER-ORANGE-20-EFFERVESCENT-TABLETS.jpg'
    },
];

let doctorstock = []

let procard = document.getElementById("procard")
let nuum = document.getElementById("nuum");
let bobdisplay = document.getElementById("bobdisplay");
let cridisplay = document.getElementById("cridisplay");


function displayprocard() {
    procard.innerHTML = ""

//-------------------------------------------------------Display-----------------------------------------------------------------------
    for (let i = 0; i < productarry.length; i++) {
        procard.innerHTML += `
        
<div class="card">
<img
    class="productImage"
    src=${productarry[i].image}
    alt=""/>
    <div class="Title">${productarry[i].name}
    </div>
    <div class="Price" id="procard_price">R <span>${
        productarry[i].price
    }</span></div>
    <button onclick="BtnAD(${i})">+ ADD TO CART</button>
    </div>
`
}
    nuum.innerHTML = doctorstock.length;
}
//--------------------------------------------------totaldisplay-----------------------------------------------------------------------

function Calculate() {
    let total = 0
    
    for (let i = 0; i < doctorstock.length; i++) {
        total += doctorstock[i].price
    }
    
    bobdisplay.innerHTML = total
}
//----------------------------------------------------remove------------------------------------------------------------------------------
    
function remove(i) {
    doctorstock.splice(i, 1)
    document.getElementById('nuum').innerHTML = doctorstock.length;

    redu();

    Calculate();

    saveToLocalStorage()

    getLocalStorage()

    displayprocard();
}
//---------------------------------------------------cardnumber---------------------------------------------------------------------------


function BtnAD(i) {
    doctorstock.push(productarry[i]);
    document.getElementById("nuum").innerHTML = doctorstock.length;
    
    redu();

    Calculate();

    saveToLocalStorage()

    getLocalStorage()
    
    displayprocard();
}

function redu() {
    cridisplay.innerHTML = ""
    
    for (let i = 0; i < doctorstock.length; i++) {
        cridisplay.innerHTML += `
        
        <div class="card">
        <img
            class="productImage"
            src=${doctorstock[i].image}
            alt=""/>
            <div class="Title">${doctorstock[i].name}
            </div>
            <div class="Price" id="procard_price>R <span>${
                doctorstock[i].price
            }</span></div>
            <button class="btn btn=danger" onclick="remove(${i})">X Remove</button>
            </div> `
        }
    }
    //-------------------------------------------------------image remove button----------------------------------------------------------

//---------------------------------------------------save localstorage-----------------------------------------------------------
    function saveToLocalStorage() {
    let data = JSON.stringify(doctorstock)
    localStorage.setItem('doctorstock', data)
    }
    
  //----------------------------------------------------------read localstorage----------------------------------------------------------
    function getLocalStorage() {
        let data = JSON.parse(localStorage.getItem('doctorstock'))
        doctorstock = data
    }
    
    redu();

    displayprocard()  