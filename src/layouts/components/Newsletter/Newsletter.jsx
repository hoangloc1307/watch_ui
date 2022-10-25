import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        <>
            <h2 className="font-dancing-script text-xl text-center text-primary capitalize mb-4 md:text-2xl">
                Newsletter
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="relative mx-auto sm:max-w-[700px]">
                <input
                    {...register('email')}
                    className="w-full border rounded-lg shadow outline-none py-2 pl-4 pr-24 text-xs focus:border-primary md:text-sm"
                    placeholder="Enter your email..."
                />
                <p className="absolute top-[calc(100%+5px)] left-0 text-red-500 text-xs md:text-sm">
                    {errors.email?.message}
                </p>
                <button
                    type="submit"
                    className="absolute right-0 top-0 bottom-0 w-20 bg-primary bg-opacity-80 text-white text-xs tracking-wider font-poppins rounded-r-lg hover:bg-opacity-100 md:text-sm"
                >
                    Follow
                </button>
            </form>
        </>
    );
};

export default Newsletter;
