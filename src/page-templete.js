// creating team here 
const generateTeam = team => {
    //here generating all html parts 

    const generateManager = manager => {
        return `
       
            <div class="card card-employee" style="width: 18rem;">
                <div class="card-header bg-warning">
                    <h3 class="card-title">${manager.getName()}</h3>
                    <h4 class="card-title"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"><b>ID:</b> ${manager.getId()}
                        </li>
                        <li class="list-group-item"><b>Email:</b><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item"><b>Office Number:</b>${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            
            </div>
       
              
                `;
    };


    //creat html for engineers
    const generateEngineer = engineer => {

        return `
        
            <div class="card card-employee" style="width: 18rem;">
                <div class="card-header bg-warning">
                <h3 class="card-title">${engineer.getName()}</h3>
                <h4 class="card-title"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"><b>ID:</b> ${engineer.getId()}
                        2</li>
                        <li class="list-group-item"><b>Email:</b><a href="mailto:${engineer.getEmail()}
                        ">
                        ${engineer.getEmail()}</a></li>
                        <li class="list-group-item"><b>Github:</b> ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
            
        
       
        `;
    };


    //creat html for Intern
    const generateIntern = intern => {

        return `
        
            <div class="card card-employee" style="width: 18rem;">
                <div class="card-header bg-warning">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <h4 class="card-title"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item"><b>ID:</b>${intern.getId()}</li>
                            </li>
                            <li class="list-group-item"><b>Email:</b><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item"><b>School:</b> ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div> 
            </div>
       
             `;
    };


    //here creat an empty array for html page to push the new user input to it.
    
    const html = [];

    html.push (team
        .filter(employee => employee.getRole() === "manager")
        .map(manager => generateManager(manager))
    );

    html.push (team
        .filter(employee => employee.getRole() === "engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    html.push (team
        .filter(employee => employee.getRole() === "intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
    
}


//here generating the entire html page by exportig th function
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>

     <!--Bootstrap link-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <!--Fontawesome link-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">

    <!--css link-->
    <link rel="stylesheet" href="style.css">
    

</head>

<body>
    
    <!--The Header-->
    <header class="jumbotron jumbotron-fluid bg-info">
        <div class="container ">
          <h1 class="text-center" >My Team</h1>
        </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center"> 
               ${generateTeam(team)}
            </div>
               
        
        </div>    
    </div>
    </div>


</body>
</html>`
}
