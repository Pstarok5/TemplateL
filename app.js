let petData = [

    {
        name: "Lagoon",
        species: "Kangidam",
        birthYear: 2000,
        made: "Made by Eiensten",
        photo: "img1.jpg"
    },


    {
        name: "The Sun",
        species: "Morning",
        birthYear: 2001,
        made: "Made by God",
        photo: "img3.jpg"
    },



    {
        name: "Beverages",
        species: "Coffee",
        birthYear: 2002,
        made: "Made by Thomas",
        photo: "img4.jpg"
    },



    {
        name: "Restuarant",
        species: "Eatry",
        birthYear: 2003,
        made: "Made by Albert",
        photo: "pizzahouse.jpg"
    },


];



let petDiv = petData.map((x) => {

    return `
    
            <div class="img-container"> 

                <img src=${x.photo} alt ="Lion" class="img">


                <div className="pet-D"> 
                
                    <p> Name: ${x.name} </p>
                    <p> Species: ${x.species} </p>
                    <p> BirthYear: ${x.birthYear} </p>
                    <p> Made: ${x.made} </p>
                </div>
            
            
            </div>
    
    
    `

});



let petName = document.getElementById("pet");
petName.innerHTML = `<div class="pet-vet"> <div class="Items"> we have ${petDiv.length
} Items <p> ${petDiv.join("")} </p> </div> </div>`