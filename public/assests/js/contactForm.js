$(document).ready(()=>{
    const contactForm = $("#contactForm");
    const userName = $("#name");
    const userEmail = $("#email");
    const userTele = $("#telephone");
    const startDate = $("#start-date");
    const endDate = $("#end-date");
    const selectedCategory = $("#select-category");
    const query = $("#message");
    const contactFormButton = $("#contactFormButton");

    contactFormButton.click((e)=>{
        e.preventDefault();

        if(userName.val() === '' || userEmail.val() === '' || userTele.val() === ''){
            alert("Please fill out this field");
        }
        else{
            //serviceID - templateID - #form - publickey
            emailjs.sendForm('service_gqkbfoc', 'template_dmwg86j', '#contactForm', 'V8PkcoBQ2MaaWslG3').then(()=>{
                setTimeout(()=>{
                    alert("Message Sent we will contact you soon!!");
                },2000);

                userName.val(''),
                userEmail.val(''),
                userTele.val(''),
                startDate.val(''),
                endDate.val(''),
                selectedCategory.val(),
                query.val();
            })
        }
    });
});