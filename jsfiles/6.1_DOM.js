// ----------->    DOM - (Document Object Model)   <-----------
// ----------->    Get attribute (attr)   <-----------
{
    let div = document.querySelector("div");
    console.log(div);
    
    let id = div.getAttribute("id");
    console.log(id);
    
    let name = div.getAttribute("name");
    console.log(name);

    let ptag = document.querySelector("p");
    console.log(ptag.getAttribute("class"));
}

// ----------->    Set attribute (attr,value)   <-----------
{
    let ptag = document.querySelector("p");
    console.log(ptag.setAttribute("class", "content"));
}

// ----------->    Style : node.style   <-----------
{
    let div = document.querySelector("div");
    div.style.backgroundColor = "#d5d5d5";
    div.style.fontWeight = "bold";
    
}

// ----------->   Insert Element   <-----------
{
    // node.append (el) - adds at the end node (inside)
    let btn = document.createElement("button");
    console.log(btn);
    btn.innerText = "Submit";
    let div = document.querySelector("div");
    div.append(btn);

    let heading = document.createElement("h1");
    heading.innerHTML = "<i>This is a DOM</i>";
    document.querySelector("body").prepend(heading);


    // node.prepend (el) - adds at the start of node (inside)
    let btn2 = document.createElement("button");
    btn2.innerText = "Submit2";
    div.prepend(btn2);
    
    // node.before (el) - adds before the node (outside)
    let btn3 = document.createElement("button");
    btn3.innerText = "Submit3";
    div.before(btn3);
    
    // node.after (el) - adds after the node (outside)
    let btn4 = document.createElement("button");
    btn4.innerText = "Submit4";
    div.after(btn4);
}

// ----------->   Delete Element   <-----------
{
    let para = document.querySelector("p");
    console.log(para);
    para.remove(para)
    console.log(para);
}