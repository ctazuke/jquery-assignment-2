$.ajax({
  url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
  type: "GET",

// Using the $.ajax success function, loop through the response. 
// Do not use a hard coded number in the loop.
  success: function(response) {

// Create a new function that updates one user at a time. 
// Call this new function inside the loop in step 4.      
    for (var i = 0; i < response.length; i++) {
      var user = response[i];
      updateUserInformation(i, user);
    }
  }
})

// This new function should update the elements of the div with the class of user-profile. 
// It should:
// Set the user's image.
// Set the user's first and last name.
// Set the user's company name and address.
// Set the user's email address. The email address should be clickable.
// Hint: Email address links need to have mailto: in from of them. 
// E.g: <a href="mailto:person@example.com">person@example.com</a>
// Set the background color of .user-profile to the user's favorite color.
function updateUserInformation(i, user) {
  var $user = $(".user-profile").eq(i);
  $user.find(".thumbnail").find("img").text(user.picture);
  $user.find(".thumbnail").find("img").attr("src", user.picture);
  $user.find("h3").text(user.name.first + " " + user.name.last);
  $user.find("address").find("strong").text(user.company.name);
  $user.find("address").find("span.street").text(user.company.address.street);
  $user.find("address").find("span.city").text(user.company.address.city);
  $user.find("address").find("span.state").text(user.company.address.state);
  $user.find("address").find("span.zip").text(user.company.address.zip);
  $user.find("address").find("a").text(user.company.email);
  $user.find("address").find("a").attr("href", "mailto:" + user.company.email);
  $user.css("background-color", user.favoriteColor);
}


