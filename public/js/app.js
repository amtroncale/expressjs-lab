$.ajax({
    url: '/emails',
    type: 'GET',
    dataType: 'json'
})
.then(emails => {
    emails.forEach(user => {
        $('body').append(`<h1>${user.email}</h1>`)
    })
})