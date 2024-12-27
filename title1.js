const btn1 = document.querySelector(".btn");
const inp = document.querySelector(".in");
const res1=document.querySelector(".res")
const title1=document.querySelector(".titleprint")
const print=document.querySelector(".result")

const url = " http://127.0.0.1:8000/news_prediction";



const getPrediction = async (input_data) => {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify(input_data),
        });
    const res=await response.json()
    title1.innerText=inp.value
    res1.innerText=res.prediction
    
    print.classList.remove("hide")
    
};

btn1.addEventListener("click", () => {
    const input_data = {
        'Title': inp.value  
    };
    if(inp.value==''){
        alert("Please enter a valid title")
    }
    else{
        getPrediction(input_data);
    }
    
});

