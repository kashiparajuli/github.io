$(() => {
    $(".add-cart").on("submit", function () {
        let data = {
            name: $(this).children('#name').val(),
            price: $(this).children('#price').val()
        }
        $.post({
            url: "/addtoCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done((res) => {
            $('#message').text('Product added to cart successfully');
            $('#count').text(res.count);
        })
        .fail(noSuccess);
        return false;
    });

    // const addedSuccess = () => {
    //     $('#message').text('Product added to cart successfully');
    // }
    const noSuccess = (error) => {
    }

});
