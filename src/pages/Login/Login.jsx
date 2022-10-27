import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { banner2, logoWhite } from '~/assets/images';
import Button from '~/components/Button';
import FormInput from '~/components/FormInput';

const schema = yup
    .object({
        username: yup.string().required('Username is required!'),
        password: yup.string().required('Password is required!'),
    })
    .required();

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        alert(`username: ${data.username}\npassword: ${data.password}`);
    };

    const onError = data => {
        for (const key of Object.keys(data)) {
            setFocus(key);
            break;
        }
    };

    return (
        <div className="relative h-screen flex justify-center items-center">
            {/* Background image */}
            <img
                src={banner2}
                alt="background dyoss login"
                className="absolute left-0 top-0 object-center object-cover w-full h-full z-[-1]"
            />
            {/* Form */}
            <div className="w-full bg-white bg-opacity-30 shadow-lg backdrop-blur-sm rounded-lg border border-white border-opacity-20 p-4">
                {/* Logo */}
                <div className="flex items-center justify-between">
                    <img src={logoWhite} alt="dyoss" className="w-[75px]" />
                    <h2 className="text-white font-semibold font-poppins text-lg capitalize">Login</h2>
                </div>
                {/* Form login */}
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)} className="my-5">
                    <FormInput
                        register={register}
                        name="username"
                        error={errors?.username?.message}
                        type="text"
                        placeholder="Username"
                        icon="person"
                    />
                    <FormInput
                        register={register}
                        name="password"
                        error={errors?.password?.message}
                        type="password"
                        placeholder="Password"
                        icon="lock"
                    />
                    {/* Login button */}
                    <Button icon="login" background className="w-full flex-row-reverse" type="submit">
                        Login
                    </Button>
                </form>
                {/* Login with */}
                <p className="text-white text-center mb-2 text-sm relative">
                    <span className="absolute wi"></span>
                    Or Login With
                </p>
                <div className="flex items-center justify-between">
                    <Button
                        className="flex items-center gap-1 text-white w-[120px] border-white hover:border-primary"
                        outline
                    >
                        <svg viewBox="0 0 320 512" className="h-3.5 [aspect-ratio:1.6/1]" fill="currentColor">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                        Facebook
                    </Button>
                    <Button
                        className="flex items-center gap-1 text-white w-[120px] border-white hover:border-primary"
                        outline
                    >
                        <svg viewBox="0 0 320 512" className="h-3.5 [aspect-ratio:1.6/1]" fill="currentColor">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                        Google
                    </Button>
                </div>
                {/* Options */}
                <div className="flex flex-col gap-1 mt-5">
                    <Button
                        icon="lock_reset"
                        className="text-white text-xs justify-start pl-0 w-full hover:text-primary"
                    >
                        Forgot password
                    </Button>
                    <Button
                        icon="person_add"
                        className="text-white text-xs justify-start pl-0 w-full hover:text-primary"
                        to="/register"
                    >
                        Create new account
                    </Button>
                    <Button
                        icon="keyboard_backspace"
                        className="text-white text-xs justify-start pl-0 w-full hover:text-primary"
                        to="/"
                    >
                        Back to home page
                    </Button>
                </div>
            </div>
        </div>
    );
}
