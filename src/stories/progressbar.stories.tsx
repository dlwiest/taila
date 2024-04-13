import { useEffect, useState } from 'react';
import { ProgressBar } from '..';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
};

export const Standard = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prevValue) => (prevValue < 100 ? prevValue + 20 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="w-64">
                <div className="w-full flex flex-row justify-between mb-1">
                    <span className="text-xs text-gray-700">{value}</span>
                    <span className="text-xs text-gray-700">100</span>
                </div>
                <ProgressBar value={value} />
            </div>
        </div>
    );
};
