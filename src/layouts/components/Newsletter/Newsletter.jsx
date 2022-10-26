import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '~/components/Button';

const schema = yup
    .object({
        email: yup.string().email('Invalid email!'),
    })
    .required();

const Newsletter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        if (data.email) {
            console.log(data);
        }
    };

    return (
        <div>
            <h2 className="font-dancing-script text-xl text-center text-primary capitalize mb-4 md:text-2xl">
                Newsletter
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="relative mx-auto sm:max-w-[700px]">
                <input
                    {...register('email')}
                    className={`w-full border rounded-lg shadow outline-none p-2 pr-[128px] text-sm text-primary focus:border-primary md:text-sm`}
                    placeholder="Enter your email..."
                />
                <p className="absolute top-[calc(100%+5px)] left-0 text-red-500 text-xs md:text-sm">
                    {errors.email?.message}
                </p>
                <Button
                    type="submit"
                    icon="notification_add"
                    label="Subscribe"
                    background
                    className="absolute top-0 right-0 bottom-0 h-auto rounded-l-none w-[120px]"
                />
            </form>
        </div>
    );
};

export default Newsletter;
