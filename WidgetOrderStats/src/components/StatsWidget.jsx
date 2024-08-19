import React, { useEffect, useState } from 'react';
import StatsOrder from './StatsOrder';
import data from '../data/data.json'; 
import axios from 'axios';

const WidgetOrderStats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
       setStats(data)
    }, []);

    return (
        <div className=" max-w-[800px] mx-auto bg-white p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {stats.map((stat) => (
                <StatsOrder
                    key={stat.id}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    changeType={stat.changeType}
                    icon={stat.icon}
                    color={stat.color}
                />
            ))}
        </div>
    );
};

export default WidgetOrderStats;
