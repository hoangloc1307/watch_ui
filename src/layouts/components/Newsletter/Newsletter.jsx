import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '~/components/Button';
import { memo } from 'react';

const schema = yup
    .object({
        email: yup.string().email('Invalid email!'),
    })
    .required();

export default memo(function Newsletter() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        if (data.email) {
            console.log(data);
            reset();
        }
    };

    console.log('Newsletter');

    return (
        <div>
            <h2 className="text-base text-center capitalize mb-4 md:text-xl">Newsletter</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="relative mx-auto max-w-[500px]" autoComplete="off">
                <input
                    {...register('email')}
                    className={`w-full border rounded-lg shadow outline-none p-2 pr-[128px] text-xs text-primary focus:border-primary md:text-sm`}
                    placeholder="Enter your email here..."
                />
                <Button
                    type="submit"
                    icon="notification_add"
                    background
                    className="absolute top-0 right-0 bottom-0 h-[34px] rounded-l-none w-[120px] md:h-[38px]"
                >
                    Subscribe
                </Button>
                <p className="text-red-500 text-xs mt-2 empty:hidden md:text-sm">{errors?.email?.message}</p>
            </form>
        </div>
    );
});
