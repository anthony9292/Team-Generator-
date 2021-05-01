const style = `

html, body { 
   
    max-width: 100% !important; 
    overflow-x: hidden !important;

}

body { 
      display: flex; 
      flex-direction: column;
      align-items: center; 
}

banner-bar { 
    background-color:rgb(0, 16, 127);
    width:100%; 
    color:#ffffff; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 20hv; 
}

h1{ 
    font-family: "Times New Roman", Times, serif;
    font size: 8vw; 
}

p { 
    font family: "Lucida Console", "Courier New", monospace;
    position: relative; 
    left: 12px; 

}

h2 { 
    font family: "Lucida Console", "Courier New", monospace;
    position: relative; 
    font-size: 19px; 
    left: 12px

}

.unit-card { 
    width:250px; 
    height: 35vh; 
    margin-bottom:4vh;
    background-color: rgb(240, 238, 238); 
    box-shadow: 2px 5px black; 
    border-top-left-radius: 10px; 
} 

card-container { 

    position: absolute; 
    top:26vh; 
    display: flex; 
    flex-wrap:wrap; 
    justify-content: space-around; 
    width:60vw; 
}

.card-top { 
    background-color: rgb(228, 174, 76); 
    border: 2px solid rgb(228, 178, 76); 
    width 246; 
    border-top-left-radius:10px; 

}
.card-bottom { 
    display: flex; 
    flex-direction: column; 
    align-content:center;

}
` 
module.exports = style; 
