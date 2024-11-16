import React from 'react';
import { CoinImageCustom } from '@/components/coin/CoinImageCustom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { FormControl } from '@/components/ui/form';

interface SelectCoinImageProps {
    data: string[];
    value?: string;
    onChange?: (value: string) => void;
}

const SelectCoinImage: React.FC<SelectCoinImageProps> = ({
    data,
    value = '',
    onChange
}) => {
    return (
        <FormControl>
            <div className="flex flex-wrap gap-4 p-4">
                {data.map((symbol) => (
                    <motion.div
                        key={symbol}
                        className="relative cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onChange?.(symbol)}
                    >
                        <div className={`
                            relative rounded-full overflow-hidden transition-all duration-200
                            ${value === symbol ? 'ring-4 ring-gray-400 dark:ring-white' : 'ring-1 ring-gray-200 hover:ring-primary/50'}
                        `}>
                            <CoinImageCustom
                                symbol={symbol}
                                className="w-20 h-20 object-cover brightness-90"
                            />

                            {value === symbol && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                            )}
                        </div>

                        <div className={`
                            mt-2 text-center text-sm font-medium
                            ${value === symbol ? 'text-primary' : 'text-gray-600'}
                        `}>
                            {symbol}
                        </div>
                    </motion.div>
                ))}
            </div>
        </FormControl>
    );
};

export default SelectCoinImage;