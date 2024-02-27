$(document).ready(function(){
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: '{{ route('contacts.store') }}',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                console.log(data);
                $('#error-name').text('');
            $('#error-phone').text('');
            $('#error-email').text('');
            $('#error-subject').text('');

            if (data.errors) {
                if (data.errors.name) {
                    $('#error-name').text(data.errors.name[0]);
                }

                if (data.errors.phone) {
                    $('#error-phone').text(data.errors.price[0]);
                }

                if (data.errors.email) {
                    $('#error-email').text(data.errors.image[0]);
                }
                if (data.errors.subject) {
                    $('#error-subject').text(data.errors.image[0]);
                }
            } else {
                // Start Message 
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',

                    showConfirmButton: false,
                    timer: 3000
                })

                Toast.fire({
                    type: 'success',
                    icon: 'success',
                    title: 'Message Send Successfully!!',
                })

                $("#product_form")[0].reset();

            }
            }
        });
    });
});