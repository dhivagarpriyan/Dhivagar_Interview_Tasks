import React from 'react';
import { ArrowUpRight, ShoppingCart, Coffee, Utensils } from 'lucide-react';

const iconMap = {
    ArrowUpRight: ArrowUpRight,
    ShoppingCart: ShoppingCart,
    Coffee: Coffee,
    Utensils: Utensils,
};

const StatsOrder = ({ title, value, change, changeType, icon, color }) => {
    const IconComponent = iconMap[icon];
    
    return (
        <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex-shrink-0">
                <IconComponent size={24} className={`text-${color}-500`} />
            </div>
            <div className="ml-4">
                <p className="text-gray-600 font-medium">{title}</p>
                <div className="flex items-center mt-2">
                    <span className="text-2xl font-bold text-gray-900">{value}</span>
                    <span
                        className={`ml-2 text-sm font-medium ${
                            changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {changeType === 'increase' ? '↑' : '↓'} {change}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StatsOrder;
