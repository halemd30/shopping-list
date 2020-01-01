'use strict';

const STORE = [
  {id: cuid(), name: "item", checked: true},
  // {id: cuid(), name: "oranges", checked: true},
  // {id: cuid(), name: "milk", checked: true},
  // {id: cuid(), name: "bread", checked: true}
];

//console.log(STORE);

function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item shopping-item-checked ${item.checked ? '.shopping-item-checked' : '.shopping-item'}">${item.name}</span>
      <div class="shopping-item-controls">
        <button type="button" class="shopping-item-toggle item-toggle">
            <span class="button-label">check</span>
        </button>
        <button type="button" class="shopping-item-delete item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

function handleItemChecked() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item-checked');
  });
}

// function handleItemChecked() {
//   $('.shopping-list').on('click', '.shopping-item-toggle', function() {
//     $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item-checked');
//   });
// }

function cuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateShoppingItemsString(shoppingList) {
  //console.log("Generating shopping list element");
  const items = shoppingList.map((item) => generateItemElement(item));
  return items.join("");
}

function renderShoppingList() {
  // render the shopping list in the DOM
  //console.log('`renderShoppingList` ran');
  const shoppingListItem = generateShoppingItemsString(STORE);
  //console.log(shoppingListItemsString);
  // insert that HTML into the DOM
  $('.shopping-list').html(shoppingListItem);
}

function handleNewItem() {
  $('#shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    let text = $('#shopping-list-entry').val();
    $('.shopping-list').append(generateItemElement(text));
    $('#shopping-list-entry').val('');

    STORE.push(text);
    //renderShoppingList(generateShoppingItemsString(STORE));
  })
}



function handleDeletedItem() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
  })
  console.log('`handleDeleteItemClicked` ran')
}

/************ OLD FUNCTIONS
function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  
  return items.join("");
}

function renderShoppingList() {
  // render the shopping list in the DOM
  //console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);
  //console.log(shoppingListItemsString);
  // insert that HTML into the DOM
  $('.shopping-list').html(shoppingListItemsString);
}


function handleNewItemSubmit() {
    // this function will be responsible for when users add a new shopping list item

    $("#shopping-list-form").on('submit', function(event) { 
        event.preventDefault(); 
        let items = $('#shopping-list-entry').val();
        //$('#shopping-list-entry').val('');
        $('.shopping-list').append(generateItemElement(items));
        
        console.log(item);

        

        // STORE.push($('#shopping-list-entry').val());
        // renderShoppingList(generateShoppingItemsString(STORE));
    });
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.

  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item-checked');
  });

  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
  })

  console.log('`handleDeleteItemClicked` ran')
}



// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}
***********/

function handleShoppingList() {
  renderShoppingList();
  handleNewItem();
  handleItemChecked();
  handleDeletedItem();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);