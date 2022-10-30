import { memo } from 'react';

export default memo(function FormInput({ register, name, error, ...rest }) {
    console.log('FormInput');
    return (
        <div className={`relative ${error ? 'mb-9' : 'mb-5'}`}>
            <input
                {...register(name)}
                type={rest.type}
                id={name}
                placeholder={rest.placeholder}
                aria-invalid={error ? 'true' : 'false'}
                className={`block w-full bg-transparent border outline-none text-white text-sm p-2.5 pl-9 rounded-lg peer aria-invalid:border-red-500 placeholder:text-white focus:border-primary`}
            />
            <label
                htmlFor={name}
                aria-invalid={error ? 'true' : 'false'}
                className="text-primary text-xs bg-white border px-3 rounded-md absolute left-7 top-0 -translate-y-1/2 peer-placeholder-shown:hidden peer-focus:border-primary aria-invalid:border-red-500"
            >
                {rest.placeholder}
            </label>
            <span className="material-symbols-outlined text-white text-[20px] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none empty:hidden">
                {rest.icon}
            </span>
            {error && <p className="text-red-400 text-sm absolute top-[calc(100%+3px)] left-2">Error: {error}</p>}
        </div>
    );
});
