const uri = 'api/productitems';
let products = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get products.', error));
}

function getItem() {
    const id = document.getElementById('get-id').value;

    fetch(`${uri}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Product not found');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            _displayItem([data]); // Pass the single product as an array to _displayItem
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to retrieve product');
        });
}

function addItem() {
    const addIdTextbox = document.getElementById('add-id');
    const addNameTextbox = document.getElementById('add-name');
    const addDescriptionTextbox = document.getElementById('add-description');
    const addPriceTextbox = document.getElementById('add-price');

    console.log(42 + " id= " + addIdTextbox)

    const item = {
        id: addIdTextbox.value.trim(),
        name: addNameTextbox.value.trim(),
        description: addDescriptionTextbox.value.trim(),
        price: addPriceTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addIdTextbox.value = '';
            addNameTextbox.value = '';
            addDescriptionTextbox.value = '';
            addPriceTextbox.value = '';
        })
        .catch(error => console.error('Unable to add product.', error));
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(productCount) {
    const name = (productCount === 1) ? 'product' : 'products';

    document.getElementById('counter').innerText = `${productCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('products');
    tBody.innerHTML = '';

    _displayCount(data.length);

    data.forEach(item => {
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let idInput = document.createElement('input');
        idInput.type = 'text';
        idInput.disabled = true;
        idInput.value = item.id;
        td1.appendChild(idInput);

        let td2 = tr.insertCell(1);
        let nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.disabled = true;
        nameInput.value = item. name;
        td2.appendChild(nameInput);

        let td3 = tr.insertCell(2);
        let descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.disabled = true;
        descriptionInput.value = item.description;
        td3.appendChild(descriptionInput);

        let td4 = tr.insertCell(3);
        let priceInput = document.createElement('input');
        priceInput.type = 'text';
        priceInput.disabled = true;
        priceInput.value = item.price;
        td4.appendChild(priceInput);
    });

    products = data;
}

function _displayItem(data) {
    const tBody = document.getElementById('product');
    tBody.innerHTML = '';

    data.forEach(item => {
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let idInput = document.createElement('input');
        idInput.type = 'text';
        idInput.disabled = true;
        idInput.value = item.id;
        td1.appendChild(idInput);

        let td2 = tr.insertCell(1);
        let nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.disabled = true;
        nameInput.value = item.name;
        td2.appendChild(nameInput);

        let td3 = tr.insertCell(2);
        let descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.disabled = true;
        descriptionInput.value = item.description;
        td3.appendChild(descriptionInput);

        let td4 = tr.insertCell(3);
        let priceInput = document.createElement('input');
        priceInput.type = 'text';
        priceInput.disabled = true;
        priceInput.value = item.price;
        td4.appendChild(priceInput);
    });

    product = data;
}

function deleteItem(event) {
    event.preventDefault(); // Prevent default form submission
    const id = document.getElementById('delete-id').value;

    fetch(`${uri}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => {
            console.log('Success:', data);
            getItems();
            alert('Product deleted successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function updateItem() {
    const id = document.getElementById('edit-id').value.trim();

    console.log("Line " + 202 + " PRODUCT = " + id);

    const item = {
        id: id,
        name: document.getElementById('edit-name').value.trim(),
        description: document.getElementById('edit-description').value.trim(),
        price: document.getElementById('edit-price').value.trim(),
    };

    fetch(`${uri}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    return false;
}