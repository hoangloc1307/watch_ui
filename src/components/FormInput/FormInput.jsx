import { memo } from 'react';

export default memo(function FormInput({ register, name, error, ...rest }) {
    return (
        <div className={`relative ${error ? 'mb-10' : 'mb-5'} text-white`}>
            {rest.type === 'textarea' ? (
                <textarea
                    {...register(name)}
                    id={name}
                    placeholder={rest.placeholder}
                    aria-invalid={error ? 'true' : 'false'}
                    className={`resize-none block w-full h-16 bg-transparent border outline-none text-sm p-2.5 pl-9 rounded-lg peer aria-invalid:border-red-500 placeholder:text-inherit placeholder-shown:pt-[21px] focus:border-primary focus:bg-primary focus:text-white`}
                />
            ) : (
                <input
                    {...register(name)}
                    type={rest.type}
                    id={name}
                    placeholder={rest.placeholder}
                    aria-invalid={error ? 'true' : 'false'}
                    className={`block w-full bg-transparent border outline-none text-sm p-2.5 pl-9 rounded-lg peer aria-invalid:border-red-500 placeholder:text-inherit focus:border-primary focus:bg-primary focus:text-white`}
                />
            )}

            <label
                htmlFor={name}
                aria-invalid={error ? 'true' : 'false'}
                className="text-primary text-xs bg-white border px-3 rounded-md absolute left-7 top-0 -translate-y-1/2 peer-placeholder-shown:hidden peer-focus:border-primary aria-invalid:border-red-500"
            >
                {rest.placeholder}
            </label>
            <span className="material-symbols-outlined text-[20px] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none peer-focus:text-white empty:hidden">
                {rest.icon}
            </span>
            {error && <p className="text-red-400 text-sm absolute top-[calc(100%+3px)] left-2">Error: {error}</p>}
        </div>
    );
});
