import { CoinImageCustom } from '@/components/coin/CoinImageCustom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { FormControl } from '@/components/ui/form';
import { CoinMarketCapSchema } from '@/lib/validation/types';
import SkeletonWrapper from '../loader/SkeletonWrapper';

interface SelectCoinImageProps {
    data?: CoinMarketCapSchema[];
    value?: string;
    onChange?: (value: string) => void;
    isLoading: boolean;
}

const SelectCoinImage: React.FC<SelectCoinImageProps> = ({
    data,
    value = '',
    onChange,
    isLoading
}) => {
    const loadingPlaceholders = Array(2).fill(null);

    return (
        <FormControl>
            <div className="flex flex-wrap gap-4 p-4">
                {isLoading ? (
                    loadingPlaceholders.map((_, index) => (
                        <div key={index} className="relative">
                            <div className="relative rounded-full overflow-hidden">
                                <div className="w-20 h-20">
                                    <SkeletonWrapper isLoading={true}>
                                        <div className="w-20 h-20" />
                                    </SkeletonWrapper>
                                </div>
                            </div>
                            <div className="mt-2 h-4 w-16 mx-auto">
                                <SkeletonWrapper isLoading={true}>
                                    <div className="w-full h-full" />
                                </SkeletonWrapper>
                                <SkeletonWrapper isLoading={true}>
                                    <div className="mt-2 text-center text-sm font-medium">
                                        Symbol
                                    </div>
                                </SkeletonWrapper>
                            </div>
                        </div>
                    ))
                ) : (
                    data?.map((coin: CoinMarketCapSchema) => {
                        const tokenAddress = coin.platform?.token_address || '';
                        
                        return (
                            <motion.div
                                key={coin.id}
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onChange?.(tokenAddress)}
                            >
                                <div className={`relative rounded-full overflow-hidden transition-all duration-200
                                        ${value === tokenAddress ? 'ring-4 ring-gray-400 dark:ring-white' : 'ring-1 ring-gray-200 hover:ring-primary/50'}
                                    `}>
                                    <CoinImageCustom
                                        symbol={coin.symbol}
                                        className="w-20 h-20 object-cover brightness-90"
                                    />
                                    {value === tokenAddress && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className={`mt-2 text-center text-sm font-medium
                                        ${value === tokenAddress ? 'text-primary' : 'text-gray-600'}
                                    `}>
                                    {coin.symbol}
                                </div>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </FormControl>
    );
};

export default SelectCoinImage;