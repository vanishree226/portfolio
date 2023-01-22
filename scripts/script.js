function myFunction()
{
    const person = {
        firstName: "Josephine",
        lastName : "Marry",
        profession:"Web Developer",
        born:"January 17 1978 , chicago. ",
        education:"New York University.",
        award:"ACM Fellow, EFF Pioneer  ",
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
    document.getElementById("details").innerHTML =
    person.fullName() + " is a " + person.profession +  "She is born on " + person.born + "She done education in " + person.education +" " + person.award + " these are the awards she received. ";
}   
  
function display(){
  var users = ['Josephine','John','Ben'];
  var age = [21,23,27];
  var email = ['josephine@gmail.com','john@gmail.com','ben@gmail.com'];
  var text = document.getElementById('table');
 
  
  var table = 
  '<table><thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr></thead></tbody>';
    for(var i = 0; i< users.length; i++){
      table += '<tr><td>' + (i + 1) + '</td><td>' + users[i] + '</td><td>' +age[i] + '</td><td>' +email[i] + '</td></tr>';
    }
  table += '</tbody></table>';

  document.getElementById("table").innerHTML = table;
  }

 