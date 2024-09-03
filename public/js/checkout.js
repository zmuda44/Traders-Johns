const ccNameEl = document.getElementById('cc-name')
const ccNumberEl = document.getElementById('cc-number')
const ccBillingEl = document.getElementById('cc-billing')
const productEl = document.querySelector('.product-name')
const submitBtn = document.getElementById('credit-card-btn')

//Click on checkout to send credit card and item information to credit card merchant site

const sendcreditCardInfo = async (e) => {
    try {
        e.preventDefault()
        const name = ccNameEl.value;
        const number = ccNumberEl.value;
        const billing = ccBillingEl.value;
        const product = productEl.textContent

        if (name && number && billing) {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                body: JSON.stringify({ name, number, billing, product }),
                headers: { 'Content-Type': 'application/json' },
            })
            console.log(response);
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || response.statusText}`);
            }
        } else {
            alert('Transaction failed please check information');
        }
    } catch (error) {
        console.error(error);
    };
};


submitBtn.addEventListener('click', sendcreditCardInfo)








