const api = {
    key: "83a84eb9547c697ef141",
    base: "https://free.currconv.com/api/v7/convert?"
}

const list1 = document.querySelector("#countries1");
const list2 = document.querySelector("#countries2");

let output = document.querySelector(".output");

let amount = document.querySelector("#amount");
 
function fetchAPI(Country1, Country2){
    if (Country1 == "--Choose a currency--" || Country2 == "--Choose a currency--") {
        output.innerHTML = "<p>You need to select a currency on both sides!</p>"
    }
    else if (Country1 == Country2) {
        output.innerHTML = "<p>How can you convert " + Country1 + " into " + Country2 + "?</p>";
    }else{
        fetch(`${api.base}q=${Country1}_${Country2}&compact=ultra&apiKey=${api.key}`)
    .then(currency => {
        return currency.json() ;
    }).then(Working);

    function Working(currency){
        let FromCon1 = list1.options[list1.selectedIndex].text;
        let FromCon2 = list2.options[list2.selectedIndex].text; 
        console.log(currency);

        const Key = Object.keys(currency)[0];
        console.log(Key);

        const Value = currency[Object.keys(currency)[0]];
        console.log(Value);

        let value = amount.value;
        console.log(value.length);

        let ConvRate = Math.round((value*Value),2);
    
        output.innerHTML = "<p>" + value + " " + Country1 + " is equal to " + ConvRate+ " " + Country2 + "</p>";
    };
    }
}

amount.addEventListener("keypress", (event)=>{
    if(event.keyCode == 13){
        let FromCon1 = list1.options[list1.selectedIndex].text;
        let FromCon2 = list2.options[list2.selectedIndex].text; 
        fetchAPI(FromCon1, FromCon2);  
    }  
})

const convert = document.querySelector(".convert");
convert.addEventListener("click", ()=>{
    let FromCon1 = list1.options[list1.selectedIndex].text;
    let FromCon2 = list2.options[list2.selectedIndex].text;
    fetchAPI(FromCon1, FromCon2);
})

// Menu Bar
const nav = document.querySelector(".menu");
const menu = document.querySelector(".bars");

menu.addEventListener("click", ()=>{
    document.querySelector(".bar1").classList.toggle("bar1-rotate");
    document.querySelector(".bar2").classList.toggle("bar2-opa");
    document.querySelector(".bar3").classList.toggle("bar3-rotate");
    nav.classList.toggle("nav-appear");
})