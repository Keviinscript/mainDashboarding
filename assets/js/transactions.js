(function () {

  async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

let transactions 
fetchData('localhost:3000/getTransactions/')
    .then(data => {
        if (data) {
            console.log(data);
            transactions = data
        }
    });

  // const transactions = [
  //   {
  //     id: 1,
  //     type: 'deposit',
  //     amount: 50000,
  //     narration: 'Salary for June',
  //     date: '2024-06-01',
  //     time: '09:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 2,
  //     type: 'withdrawal',
  //     amount: 20000,
  //     narration: 'ATM withdrawal',
  //     date: '2024-06-05',
  //     time: '11:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 3,
  //     type: 'deposit',
  //     amount: 30000,
  //     narration: 'Freelance payment',
  //     date: '2024-06-10',
  //     time: '14:45:00',
  //     successful: true,
  //   },
  //   {
  //     id: 4,
  //     type: 'withdrawal',
  //     amount: 15000,
  //     narration: 'Grocery shopping',
  //     date: '2024-06-12',
  //     time: '16:20:00',
  //     successful: true,
  //   },
  //   {
  //     id: 5,
  //     type: 'deposit',
  //     amount: 100000,
  //     narration: 'Bonus received',
  //     date: '2024-06-15',
  //     time: '10:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 6,
  //     type: 'withdrawal',
  //     amount: 5000,
  //     narration: 'Coffee shop expense',
  //     date: '2024-06-16',
  //     time: '15:00:00',
  //     successful: false,
  //   },
  //   {
  //     id: 7,
  //     type: 'deposit',
  //     amount: 20000,
  //     narration: 'Gift money',
  //     date: '2024-06-17',
  //     time: '08:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 8,
  //     type: 'withdrawal',
  //     amount: 30000,
  //     narration: 'Utility bill payment',
  //     date: '2024-06-18',
  //     time: '13:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 9,
  //     type: 'deposit',
  //     amount: 15000,
  //     narration: 'Refund received',
  //     date: '2024-06-19',
  //     time: '12:15:00',
  //     successful: true,
  //   },
  //   {
  //     id: 10,
  //     type: 'withdrawal',
  //     amount: 40000,
  //     narration: 'Online shopping',
  //     date: '2024-06-20',
  //     time: '18:45:00',
  //     successful: false,
  //   },
  //   {
  //     id: 11,
  //     type: 'deposit',
  //     amount: 75000,
  //     narration: 'Savings contribution',
  //     date: '2024-06-21',
  //     time: '09:15:00',
  //     successful: true,
  //   },
  //   {
  //     id: 12,
  //     type: 'withdrawal',
  //     amount: 10000,
  //     narration: 'Car maintenance',
  //     date: '2024-06-22',
  //     time: '11:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 13,
  //     type: 'deposit',
  //     amount: 60000,
  //     narration: 'Investment profits',
  //     date: '2024-06-23',
  //     time: '14:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 14,
  //     type: 'withdrawal',
  //     amount: 45000,
  //     narration: 'Household bills',
  //     date: '2024-06-24',
  //     time: '10:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 15,
  //     type: 'deposit',
  //     amount: 30000,
  //     narration: 'Accrued work allowance',
  //     date: '2024-06-25',
  //     time: '16:45:00',
  //     successful: true,
  //   },
  //   {
  //     id: 16,
  //     type: 'withdrawal',
  //     amount: 20000,
  //     narration: 'Vacation expenses',
  //     date: '2024-06-26',
  //     time: '09:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 17,
  //     type: 'deposit',
  //     amount: 120000,
  //     narration: 'Stock sales proceeds',
  //     date: '2024-06-27',
  //     time: '13:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 18,
  //     type: 'withdrawal',
  //     amount: 60000,
  //     narration: 'Car purchase down payment',
  //     date: '2024-06-28',
  //     time: '11:15:00',
  //     successful: true,
  //   },
  //   {
  //     id: 19,
  //     type: 'deposit',
  //     amount: 40000,
  //     narration: 'Contract commission',
  //     date: '2024-06-29',
  //     time: '15:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 20,
  //     type: 'withdrawal',
  //     amount: 80000,
  //     narration: 'Gold purchase',
  //     date: '2024-06-30',
  //     time: '14:45:00',
  //     successful: true,
  //   },
  //   {
  //     id: 21,
  //     type: 'deposit',
  //     amount: 70000,
  //     narration: 'Freelance project payment',
  //     date: '2024-07-01',
  //     time: '10:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 22,
  //     type: 'withdrawal',
  //     amount: 100000,
  //     narration: 'Real estate investment',
  //     date: '2024-07-02',
  //     time: '16:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 23,
  //     type: 'deposit',
  //     amount: 50000,
  //     narration: 'Inheritance',
  //     date: '2024-07-03',
  //     time: '09:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 24,
  //     type: 'withdrawal',
  //     amount: 25000,
  //     narration: 'New furniture purchase',
  //     date: '2024-07-04',
  //     time: '11:45:00',
  //     successful: true,
  //   },
  //   {
  //     id: 25,
  //     type: 'deposit',
  //     amount: 80000,
  //     narration: 'Business income',
  //     date: '2024-07-05',
  //     time: '14:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 26,
  //     type: 'withdrawal',
  //     amount: 35000,
  //     narration: 'Charity donation',
  //     date: '2024-07-06',
  //     time: '10:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 27,
  //     type: 'deposit',
  //     amount: 60000,
  //     narration: 'Stock dividends',
  //     date: '2024-07-07',
  //     time: '08:45:00',
  //     successful: true,
  //   },
  //   {
  //     id: 28,
  //     type: 'withdrawal',
  //     amount: 50000,
  //     narration: 'Car loan repayment',
  //     date: '2024-07-08',
  //     time: '13:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 29,
  //     type: 'deposit',
  //     amount: 90000,
  //     narration: 'Contract work',
  //     date: '2024-07-09',
  //     time: '11:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 30,
  //     type: 'withdrawal',
  //     amount: 60000,
  //     narration: 'Home renovation',
  //     date: '2024-07-10',
  //     time: '15:15:00',
  //     successful: true,
  //   },
  //   {
  //     id: 31,
  //     type: 'deposit',
  //     amount: 70000,
  //     narration: 'Investment return',
  //     date: '2024-07-11',
  //     time: '09:45:00',
  //     successful: true,
  //   },
  //   {
  //     id: 32,
  //     type: 'withdrawal',
  //     amount: 55000,
  //     narration: 'Vacation expenses',
  //     date: '2024-07-12',
  //     time: '10:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 33,
  //     type: 'deposit',
  //     amount: 95000,
  //     narration: 'Stock market gains',
  //     date: '2024-07-13',
  //     time: '12:00:00',
  //     successful: true,
  //   },
  //   {
  //     id: 34,
  //     type: 'withdrawal',
  //     amount: 25000,
  //     narration: 'Medical expenses',
  //     date: '2024-07-14',
  //     time: '14:30:00',
  //     successful: true,
  //   },
  //   {
  //     id: 35,
  //     type: 'deposit',
  //     amount: 110000,
  //     narration: 'Sale of property',
  //     date: '2024-07-15',
  //     time: '11:00:00',
  //     successful: true,
  //   },
  // ];

  const transactionStart = document.querySelector('#transactionStart');

  window.addEventListener('DOMContentLoaded', function () {
    displayTransactions(transactions);
    console.log(22);
  });

  function displayTransactions(eachTransaction) {
    var displayTransaction = eachTransaction.map(function (t) {
      return `<div class="block p-2 bg-white border border-gray-200 rounded-lg shadow my-2">
                    <div class="w-[100%] md:w-[75%] mx-auto">
                        <div class="grid grid-cols-5 justify-items-center">
                            <div class="flex justify-self-start  ">
                                <div class="  max-w-xs   items-center p-3 text-sm font-medium text-center text-white bg-teal-50 rounded-full">
                                    <div class="flex justify-center ">
                                        <svg class=" items-center w-7 h-7" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#008080" d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>

                                    </div>
                                </div>
                            </div>
                            <div class="col-span-3 justify-self-start space-y-1">
                                <h2 class="text-sm whitespace-nowrap font-semibold tracking-tight text-gray-800"> ${
                                  t.narration
                                }</h2>
                                <p class="text-xs whitespace-nowrap tracking-wide font-extralight text-gray-700 ">${
                                  t.date
                                },${t.time}</p>
                            </div>
                            <div>
                                <div class="space-y-1">
                                    <h2 class="font-semibold text-sm ${
                                      t.type === 'deposit'
                                        ? `text-green-800 pr-0 pl-0`
                                        : `text-gray-800 pr-0 pl-0`
                                    }  tracking-tight ">
                                    ${
                                      t.type === 'deposit' ? '+' : '-'
                                    }$${t.amount}
                                    
                                    </h2>
                                    <div>
                                    ${
                                      t.type === 'deposit'
                                        ? `<p class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded   border border-green-400">
                                          Successful
                                        </p>`
                                        : `<p class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-red-400">
                                          Failed
                                        </p>`
                                    }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    });

    displayTransaction = displayTransaction.join('');
    transactionStart.innerHTML = displayTransaction;
  }

  console.log(
    'Total deposits:',
    transactions
      .filter((t) => t.type === 'deposit')
      .reduce((sum, t) => sum + t.amount, 0)
  );
  console.log(
    'Total withdrawals:',
    transactions
      .filter((t) => t.type === 'withdrawal')
      .reduce((sum, t) => sum + t.amount, 0)
  );
})();
