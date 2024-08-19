import React from 'react';
import "../Styles/TransactionList.css";
import costumer1 from "../assets/customer1.jpeg";
import costumer2 from "../assets/customer2.svg";

const transactions = [
    {
        id: 1,
        name: 'Aokiji',
        date: '28 Feb 2023',
        time: '06:23 PM',
        amount: '+$13.00',
        type: 'Received',
        avatar: costumer1,
    },
    {
        id: 2,
        name: 'Sima',
        date: '28 Feb 2023',
        time: '07:30 PM',
        amount: '-$9.00',
        type: 'Outgoing',
        avatar: costumer2,
    },
    {
        id: 3,
        name: 'Akainu',
        date: '28 Feb 2023',
        time: '06:23 PM',
        amount: '+$20.00',
        type: 'Received',
        avatar: costumer1,
    },
];

const TransactionList = () => {
    return (
        <div className="max-w-md mx-4 md:mx-auto mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200 shadow-md">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Last Transactions</h2>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">See All</a>
            </div>
            <div className="mt-6 space-y-4">
                {transactions.map((transaction) => (
                    <div 
                        key={transaction.id} 
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                    >
                        <img
                            src={transaction.avatar}
                            alt={transaction.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1 ml-4">
                            <h3 className="font-bold text-md">{transaction.name}</h3>
                            <p className="text-sm text-gray-500">
                                {transaction.date} • {transaction.time}
                            </p>
                        </div>
                        <div className="text-right">
                            <span
                                className={`block text-lg font-semibold ${
                                    transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                                }`}
                            >
                                {transaction.amount}
                            </span>
                            <span className="block text-sm text-gray-600">{transaction.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
