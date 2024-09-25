document.getElementById("box").addEventListener('click',(e)=>{
    console.log(e.target.id);
    const shape=e.target.id;
    const box=document.getElementById("box");
    box.remove();
    // console.log(e.target.id);
    if(shape==='square'){
        const container=document.createElement("div");
        container.setAttribute("id","container");
        const h2 = document.createElement("h2");
        h2.setAttribute("class","text");
        h2.textContent="you clicked Square"
        const input =document.createElement("input")
        input.setAttribute("class","input");
        input.placeholder="Enter value";
        input.setAttribute("id","side");
        const btn=document.createElement("button");
        btn.textContent="Calculate";
        btn.addEventListener("click",(e)=>{
            const inputValue = parseFloat(document.getElementById('side').value);
            console.log("Entered Input "+inputValue);
            const ans=inputValue*inputValue;
            console.log("Answer : "+ans);
            document.getElementById("container").remove();
            const ansText=document.createElement("h2");
            ansText.textContent="Answer is";
            const squareContainer=document.createElement("div");
            squareContainer.setAttribute("class","squareConatiner");
            squareContainer.setAttribute("id","squareContainer");
            squareContainer.appendChild(ansText);
            if(isNaN(ans)){
                ansText.textContent=`Area is : Enter a Value`;
                const goback=document.createElement("button");
                goback.textContent="Go Back";
                squareContainer.appendChild(goback);
                goback.addEventListener("click",(e)=>{
                    squareContainer.remove();
                    document.body.appendChild(container);
                })
                const home=document.createElement("button");
                home.textContent="Home";
                home.addEventListener("click",(e)=>{
                    document.getElementById("squareContainer").remove();
                    document.body.appendChild(box);
                })
                squareContainer.appendChild(home);
            }
            else{
                ansText.textContent=`Area is : ${ans}`;
                const goback=document.createElement("button");
                goback.textContent="Go Back";
                squareContainer.appendChild(goback);
                goback.addEventListener("click",(e)=>{
                    squareContainer.remove();
                    document.body.appendChild(container);
                })
                const home=document.createElement("button");
                home.textContent="Home";
                home.addEventListener("click",(e)=>{
                    document.getElementById("squareContainer").remove();
                    document.body.appendChild(box);
                })
                squareContainer.appendChild(home);
            }
            document.body.appendChild(squareContainer);
        })
        btn.setAttribute("class","btn");
        const btn2=document.createElement("button");
        btn2.setAttribute("class","btn2");
        btn2.addEventListener("click",(e)=>{
            document.getElementById("container").remove();
            document.body.appendChild(box);
        })
        btn2.textContent="Back";
        const home=document.createElement("button");
        home.textContent="Home";
        home.addEventListener("click",(e)=>{
            document.getElementById("container").remove();
            document.body.appendChild(box);
        })
        container.appendChild(h2);
        container.appendChild(input);
        container.appendChild(btn);
        container.appendChild(btn2);
        container.appendChild(home);
        container.setAttribute("class","container");
        document.body.appendChild(container);
    }
    if(shape==='circle'){
        const container=document.createElement("div");
        container.setAttribute("id","container");
        const h2 = document.createElement("h2");
        h2.setAttribute("class","text");
        h2.textContent="you clicked Circle";
        const input =document.createElement("input")
        input.setAttribute("class","input");
        input.setAttribute("id","side");
        input.placeholder="Enter Radius";
        const btn=document.createElement("button");
        btn.textContent="Calculate";
        btn.addEventListener("click",(e)=>{
            const inputValue = parseFloat(document.getElementById('side').value);
            console.log("Entered Input "+inputValue);
            const ans=Math.PI*inputValue*inputValue;
            console.log("Answer : "+ans);
            document.getElementById("container").remove();
            const ansText=document.createElement("h2");
            ansText.textContent="Answer is";
            const squareContainer=document.createElement("div");
            squareContainer.setAttribute("class","squareConatiner");
            squareContainer.setAttribute("id","squareContainer");
            squareContainer.appendChild(ansText);
            if(isNaN(ans)){
                ansText.textContent=`Area is : Enter a Value`;
                const goback=document.createElement("button");
                goback.textContent="Go Back";
                squareContainer.appendChild(goback);
                goback.addEventListener("click",(e)=>{
                    squareContainer.remove();
                    document.body.appendChild(container);
                })
                const home=document.createElement("button");
                home.textContent="Home";
                home.addEventListener("click",(e)=>{
                    document.getElementById("squareContainer").remove();
                    document.body.appendChild(box);
                })
                squareContainer.appendChild(home);
            }
            else{
                ansText.textContent=`Area is : ${ans}`;
                const goback=document.createElement("button");
                goback.textContent="Go Back";
                squareContainer.appendChild(goback);
                goback.addEventListener("click",(e)=>{
                    squareContainer.remove();
                    document.body.appendChild(container);
                })
                const home=document.createElement("button");
                home.textContent="Home";
                home.addEventListener("click",(e)=>{
                    document.getElementById("squareContainer").remove();
                    document.body.appendChild(box);
                })
                squareContainer.appendChild(home);
            }
            document.body.appendChild(squareContainer);
        })
        btn.setAttribute("class","btn");
        const btn2=document.createElement("button");
        btn2.setAttribute("class","btn2");
        btn2.addEventListener("click",(e)=>{
            document.getElementById("container").remove();
            document.body.appendChild(box);
        })
        btn2.textContent="Back";
        const home=document.createElement("button");
        home.textContent="Home";
        home.addEventListener("click",(e)=>{
            document.getElementById("container").remove();
            document.body.appendChild(box);
        })
        container.appendChild(h2);
        container.appendChild(input);
        container.appendChild(btn);
        container.appendChild(btn2);
        container.appendChild(home);
        container.setAttribute("class","container");
        document.body.appendChild(container);
    }
    if(shape==='triangle'){
        const container=document.createElement("div");
        container.setAttribute("id","container");
        const h2 = document.createElement("h2");
        h2.setAttribute("class","text");
        h2.textContent="you clicked Triangle";
        const input =document.createElement("input")
        input.setAttribute("class","input");
        input.setAttribute("id","side");
        input.placeholder="Enter Base";
        const input1 =document.createElement("input")
        input.setAttribute("class","input1");
        input1.setAttribute("id","side1");
        input1.placeholder="Enter Height";
        const btn=document.createElement("button");
        btn.textContent="Calculate";
        btn.addEventListener("click",(e)=>{
            const inputValue = parseFloat(document.getElementById('side').value);
            const inputValue1 = parseFloat(document.getElementById('side1').value);
            console.log("Entered Input "+inputValue);
            console.log("Entered Input "+inputValue1);
            const ans=0.5*inputValue*inputValue1;
            console.log("Answer : "+ans);
            document.getElementById("container").remove();
            const ansText=document.createElement("h2");
            ansText.textContent="Answer is";
            const squareContainer=document.createElement("div");
            squareContainer.setAttribute("class","squareConatiner");
            squareContainer.setAttribute("id","squareContainer");
            squareContainer.appendChild(ansText);
            if(isNaN(ans)){
                ansText.textContent=`Area is : Enter a Value`;
                const goback=document.createElement("button");
                goback.textContent="Go Back";
                squareContainer.appendChild(goback);
                goback.addEventListener("click",(e)=>{
                    squareContainer.remove();
                    document.body.appendChild(container);
                })
                const home=document.createElement("button");
                home.textContent="Home";
                home.addEventListener("click",(e)=>{
                    document.getElementById("squareContainer").remove();
                    document.body.appendChild(box);
                })
                squareContainer.appendChild(home);
            }
            else{
                ansText.textContent=`Area is : ${ans}`;
                const goback=document.createElement("button");
                goback.textContent="Go Back";
                squareContainer.appendChild(goback);
                goback.addEventListener("click",(e)=>{
                    squareContainer.remove();
                    document.body.appendChild(container);
                })
                const home=document.createElement("button");
                home.textContent="Home";
                home.addEventListener("click",(e)=>{
                    document.getElementById("squareContainer").remove();
                    document.body.appendChild(box);
                })
                squareContainer.appendChild(home);
            }
            document.body.appendChild(squareContainer);
        })
        btn.setAttribute("class","btn");
        const btn2=document.createElement("button");
        btn2.setAttribute("class","btn2");
        btn2.addEventListener("click",(e)=>{
            document.getElementById("container").remove();
            document.body.appendChild(box);
        })
        btn2.textContent="Back";
        const home=document.createElement("button");
        home.textContent="Home";
        home.addEventListener("click",(e)=>{
            document.getElementById("container").remove();
            document.body.appendChild(box);
        })
        container.appendChild(h2);
        container.appendChild(input);
        container.appendChild(input1);
        container.appendChild(btn);
        container.appendChild(btn2);
        container.appendChild(home);
        container.setAttribute("class","container");
        document.body.appendChild(container);
    }
})
