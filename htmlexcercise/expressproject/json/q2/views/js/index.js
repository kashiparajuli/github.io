$(() => {

    const addedSuccess = (data) => {
        console.log(data)
        $("#name").val(data);
    }
    const noSuccess = (err) => {
        console.log(err)
    }
    $("#form").on("submit",() => {
        $.get({
            url: "/8ball",
            data: "",
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});

