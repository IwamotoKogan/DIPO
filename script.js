 // Funkcija za izračunavanje cene na osnovu dimenzija
        function calculatePrice(height, width, depth) {
            const basePrice = 1000;
            const increment = 20;
            const limit = 5;

            const heightDifference = height - 90;
            const widthDifference = width - 100;
            const depthDifference = depth - 30;

            const heightPrice = heightDifference >= 0 ? Math.floor(heightDifference / limit) * increment : 0;
            const widthPrice = widthDifference >= 0 ? Math.floor(widthDifference / limit) * increment : 0;
            const depthPrice = depthDifference >= 0 ? Math.floor(depthDifference / limit) * increment : 0;

            const totalPrice = basePrice + heightPrice + widthPrice + depthPrice;
            return totalPrice;
        }

        // Funkcija koja proverava da li su unete vrednosti numeričkog tipa
        function isValidNumber(value) {
            return !isNaN(value);
        }

        // Funkcija koja proverava da li su unete dimenzije unutar dozvoljenog opsega
        function isValidDimensions(height, width, depth) {
            const minHeight = 90;
            const maxHeight = 200;
            const minWidth = 100;
            const maxWidth = 250;
            const minDepth = 30;
            const maxDepth = 60;

            return height >= minHeight && height <= maxHeight &&
                width >= minWidth && width <= maxWidth &&
                depth >= minDepth && depth <= maxDepth;
        }

        // Funkcija koja se poziva prilikom klika na dugme za izračunavanje cene
        function calculate() {
            const heightInput = document.getElementById('height');
            const widthInput = document.getElementById('width');
            const depthInput = document.getElementById('depth');

            const height = parseInt(heightInput.value);
            const width = parseInt(widthInput.value);
            const depth = parseInt(depthInput.value);

            if (!isValidNumber(height) || !isValidNumber(width) || !isValidNumber(depth)) {
                document.getElementById('price').innerText = "Niste uneli validne podatke";
                return;
            }

            if (!isValidDimensions(height, width, depth)) {
                document.getElementById('price').innerText = "Dimenzije koje ste uneli su izvan dozvoljenog opsega";
                return;
            }

            const totalPrice = calculatePrice(height, width, depth);

            document.getElementById('price').innerText = `Cena: ${totalPrice} evra`;
        }

        document.getElementById('calculate-btn').addEventListener('click', calculate);

        /************Dodati elementi za skladištenje podataka************ */
        // ... (ostatak JavaScript koda za kalkulator)

// Kreiramo objekat za čuvanje podataka o kuhinji
let kuhinjaData = {
    height: 0,
    width: 0,
    depth: 0,
    price: 0
};


    function addToCart() {
    const heightInput = document.getElementById('height');
    const widthInput = document.getElementById('width');
    const depthInput = document.getElementById('depth');

    const height = parseInt(heightInput.value);
    const width = parseInt(widthInput.value);
    const depth = parseInt(depthInput.value);

    if (!isValidNumber(height) || !isValidNumber(width) || !isValidNumber(depth)) {
        document.getElementById('price').innerText = "Niste uneli validne podatke";
        return;
    }

    if (!isValidDimensions(height, width, depth)) {
        document.getElementById('price').innerText = "Dimenzije koje ste uneli su izvan dozvoljenog opsega";
        return;
    }

    const totalPrice = calculatePrice(height, width, depth);

    // Popunimo podatke o kuhinji
    kuhinjaData.height = height;
    kuhinjaData.width = width;
    kuhinjaData.depth = depth;
    kuhinjaData.price = totalPrice;

    // Ažuriramo brojčanik na korpi
    const cartItems = document.getElementById('cart-items');
    cartItems.innerText = parseInt(cartItems.innerText) + 1;

   // Prikažemo notifikaciju +1 na dugmetu "Korpa"
    const cartButton = document.getElementById('cart-button');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = '+1';
    cartButton.appendChild(notification);

    // Sačuvajmo podatke u localStorage
    localStorage.setItem('kuhinjaData', JSON.stringify(kuhinjaData));
}

// Dodelimo događaj "onclick" dugmetu "Kupi"
const kupiBtn = document.getElementById('kupi-btn');
kupiBtn.addEventListener('click', addToCart);



         /************KRAJ Dodati elementi za skladištenje podataka************ */