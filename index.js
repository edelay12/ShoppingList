
$(function() {
console.log("K");

$(function addItem() {

    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        
        let userInput = $(event.currentTarget).find('input').val();
        
        let newitem = `<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
            
        $('ul').append(newitem);
       

});
});


$(function deleteItem(){

    $('.shopping-item-delete').on('click', function(event){
        $( event.target ).closest( "li" ).remove();

    });

});

$(function checkItem(){

  // $('.shopping-item-toggle').on('click', function(event){
  //$(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    //$('span.shopping-item').toggleClass();
    
    $('ul').on('click', '.shopping-item-toggle', function(event) {
      $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');    });

//});
});

});
