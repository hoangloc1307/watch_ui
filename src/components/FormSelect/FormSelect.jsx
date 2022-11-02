export default function FormSelect({ register, name, options, error, ...rest }) {
    return (
        <div className={`relative ${error ? 'mb-10' : 'mb-5'}`}>
            <select
                {...register(name)}
                aria-invalid={error ? 'true' : 'false'}
                className={`block w-full bg-transparent border outline-none text-sm p-2.5 pl-9 rounded-lg peer aria-invalid:border-red-500 placeholder:text-inherit focus:border-primary focus:bg-primary focus:text-white`}
                value={rest.currentValue || ''}
            >
                {!rest.currentValue && (
                    <option value="" className="py-1">
                        {rest.placeholder}
                    </option>
                )}
                {options?.map(item => (
                    <option key={item.value} value={item.value} className="py-1">
                        {item.display}
                    </option>
                ))}
            </select>
            <label
                htmlFor={name}
                aria-invalid={error ? 'true' : 'false'}
                className={`text-primary text-xs bg-white border px-3 rounded-md absolute left-7 top-0 -translate-y-1/2 ${
                    rest.currentValue ? '' : 'hidden'
                } peer-focus:border-primary aria-invalid:border-red-500`}
            >
                {rest.placeholder}
            </label>
            <span className="material-symbols-outlined text-[20px] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none peer-focus:text-white empty:hidden">
                {rest.icon}
            </span>
            {error && <p className="text-red-400 text-sm absolute top-[calc(100%+3px)] left-2">Error: {error}</p>}
        </div>
    );
}
