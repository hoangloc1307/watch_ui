export default function FormInput({ register, name, error, ...rest }) {
    return (
        <div className="relative mb-9">
            <input
                type={rest.type}
                id={name}
                placeholder={rest.placeholder}
                aria-invalid={error ? 'false' : 'true'}
                className={`block w-full bg-transparent border outline-none text-white text-sm p-2.5 pl-9 rounded-lg peer${
                    error ? ' border-red-500' : ''
                } aria-invalid:border-green-500 placeholder:text-white aria-invalid:focus:border-primary`}
                {...register(name)}
            />
            <label
                htmlFor={name}
                aria-invalid={error ? 'false' : 'true'}
                className="text-primary text-xs font-poppins bg-white border px-3 rounded-md absolute left-7 top-0 -translate-y-1/2 peer-placeholder-shown:hidden peer-focus:border-primary aria-invalid:border-green-500"
            >
                {rest.placeholder}
            </label>
            <span className="material-symbols-outlined text-white text-[20px] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none empty:hidden">
                {rest.icon}
            </span>
            {error && <p className="text-red-400 text-sm absolute top-[calc(100%+3px)] left-2">Error: {error}</p>}
        </div>
    );
}
