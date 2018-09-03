function onlineShop(selector) {

    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let bgn = $('#price');
    let quant = $('#quantity');
    let product = $('.custom-select');
    let finalquant=0;
    let finalPrice=0;
    quant.on('input',function () {
        if (product.val().length > 0 && bgn.val() > 0 && quant.val() > 0) {
            $('#submit').prop("disabled", false);
        } else {
            $('#submit').attr('disabled','disabled')
        }

    });
    bgn.on('input',function () {
        if (product.val().length > 0 && bgn.val() > 0 && quant.val() > 0) {
            $('#submit').prop("disabled", false);
        } else {
            $('#submit').attr('disabled','disabled')
        }
    });
    product.on('input', function () {
            if (product.val().length > 0 && bgn.val() > 0 && quant.val() > 0) {
                $('#submit').prop("disabled", false);
            } else {
                $('#submit').attr('disabled','disabled')
            }
        }
    );
        $('#submit').on('click', function () {
            $('.display').append($('<li>').text(`Product: ${product.val()} Price: ${bgn.val()} Quantity: ${quant.val()}`));
            $('#submit').attr('disabled','disabled')
            finalquant+=Number(quant.val());
            finalPrice+=Number(bgn.val());
            $('#sum').val(finalPrice);
            if(finalquant>=150){
                bgn.attr('disabled','disabled');
                quant.attr('disabled','disabled');
                product.attr('disabled','disabled');
                $('#submit').attr('disabled','disabled');
                $('#capacity').attr('class', 'fullCapacity');
                $('#capacity').val('full')
            }else{
                $('#capacity').val(finalquant)
            }
            quant.val(1);
            bgn.val(1);
            product.val('')
        });



}
    // console.log(product);
    // if(product.val().length>0&&bgn.val().length>0&&quant.val().length>0){
    //     $('#submit').prop( "disabled", false ).on('click',function () {
    //         $('.display').append($('li').text(`Product: ${product.val()} Price: ${bgn.val()} Quantity: ${quant.val()}`))
    //     });




