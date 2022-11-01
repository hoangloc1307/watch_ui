import { twMerge } from 'tailwind-merge';
import Button from './Button';

export default function QuantityChange({ value, onIncrease, onDecrease, className }) {
    return (
        <div className={twMerge('flex flex-col items-center gap-2', className)}>
            <Button className="w-full h-full p-0" outline onClick={onIncrease}>
                <span className="material-symbols-outlined text-base">add</span>
            </Button>
            <span className="block text-center text-sm cursor-default">{value}</span>
            <Button className="w-full h-full p-0" outline onClick={onDecrease}>
                <span className="material-symbols-outlined text-base">remove</span>
            </Button>
        </div>
    );
}
