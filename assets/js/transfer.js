
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('paymentForm');
 

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const pinClass = document.getElementById('pinInput');
    const incorrectPin = document.getElementById('incorrectPin');
    const enteredPin = document.getElementById('pinInput').value;
    const correctPin = '4444';
    const imfCode ='123456';

    if (enteredPin === correctPin) {
      console.log('PIN is correct. Proceeding to save data to local storage.');

      const transferData = {
        beneficiaryName: document.getElementById('Beneficiary_name').value,
        beneficiaryBank: document.getElementById('BeneficiaryBank').value,
        swiftCode: document.getElementById('BeneficiarySWIFT').value,
        accountNumber: document.getElementById('BeneficiaryAccount').value,
        bankAddress: document.getElementById('BeneficiaryBankAddress').value,
        amount: document.getElementById('Amount').value,
        country: document.getElementById('countries').value,
        purpose: document.getElementById('Purpose').value,
      };

      // Save data to local storage
      localStorage.setItem('transferData', JSON.stringify(transferData));

      console.log('Data saved to local storage:', transferData);

      window.location.href = 'http://localhost:9000/imf';

      // Add an entry to the history stack when the page loads
      window.addEventListener('load', function () {
        history.pushState(null, null, location.href);
      });

      // Intercept the back button
      window.addEventListener('popstate', function (event) {
        // Redirect to a different page when the back button is clicked
        window.location.href = 'http://localhost:9000/transfer'; // Replace with your redirect URL
      });

    } else {
      // Remove the old class list
      pinClass.classList.remove(
        'bg-gray-50',
        'border',
        'border-gray-300',
        'text-gray-800',
        'text-sm',
        'rounded-lg',
        'focus:ring-customTeal',
        'focus:border-customTeal',
        'block',
        'w-full',
        'ps-10',
        'p-2.5'
      );

      // Add the new class list
      pinClass.classList.add(
        'bg-gray-50',
        'border-2',
        'border-red-600',
        'text-gray-800',
        'text-sm',
        'rounded-lg',
        'focus:ring-red-600',
        'focus:border-red-600',
        'block',
        'w-full',
        'ps-10',
        'p-2.5'
      );
      incorrectPin.classList.remove('hidden');
      console.log('PIN is incorrect. Data will not be saved to local storage.');
    }
  

    // Clear the form inputs if needed
    form.reset();
  });

  
});
