document.getElementById('contactForm').addEventListener('submit', function(event) {
    .addEventListener('submit',Function(e) {

    

    // Simple validation
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var subject = "New message from " + name;
    var body = "Name :" + name + "\nEmail:" + email + "\nMessage:" + message;
    var mailto_link = 'mailto : gowthamimaydal@gmail.com' + '?subject=' + subject +'&body=' + encodeURIComponent(body);
    window.location.href = mailto_link;

    
});