import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { product1_0 } from '~/assets/images';
import Button from '~/components/Button';
import QuantityChange from '~/components/Button/QuantityChange';
import FormInput from '~/components/FormInput';
import FormSelect from '~/components/FormSelect';

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        district: yup.string().required(),
        ward: yup.string().required(),
    })
    .required();

export default function Checkout() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(data);
        reset();
    };

    const onError = data => {
        for (const key of Object.keys(data)) {
            setFocus(key);
            break;
        }
    };

    return (
        <div className="my-container py-10">
            {/* Items */}
            <div className="max-w-[500px] mx-auto">
                <h2 className="text-xl text-primary text-center font-semibold">Your order (3 items)</h2>
                <div className="divide-y">
                    <div className="grid grid-cols-3 gap-2 py-4">
                        <div className="aspect-square my-auto">
                            <img src={product1_0} alt="product" className="w-full h-full object-contain" />
                        </div>
                        <div className="col-span-2 flex flex-col justify-center">
                            <h3 className="line-clamp-2 text-sm font-medium capitalize lg:text-base">
                                Product 1 With Long Long Name
                            </h3>
                            <div className="text-xs text-slate-500 ml-2 empty:hidden"></div>
                            <div className="flex items-center justify-between flex-wrap sm:mt-2">
                                <p className="text-sm text-primary font-medium w-full my-2 sm:w-auto">
                                    3,000,000<sup>đ</sup>
                                </p>
                                <QuantityChange
                                    value={1}
                                    onIncrease={() => {}}
                                    onDecrease={() => {}}
                                    className="flex-row-reverse [&>button]:h-6 [&>button]:px-4 justify-end gap-2"
                                />
                                <Button className="h-6" outline>
                                    <span className="material-symbols-outlined text-base">delete</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-4">
                        <div className="aspect-square my-auto">
                            <img src={product1_0} alt="product" className="w-full h-full object-contain" />
                        </div>
                        <div className="col-span-2 flex flex-col justify-center">
                            <h3 className="line-clamp-2 text-sm font-medium capitalize lg:text-base">
                                Product 1 With Long Long Name
                            </h3>
                            <div className="text-xs text-slate-500 ml-2 empty:hidden">
                                <p>Rosa - White/Mesh/36 </p>
                                <p>Pink Leather Straps - Rose Gold/18</p>
                            </div>
                            <div className="flex items-center justify-between flex-wrap sm:mt-2">
                                <p className="text-sm text-primary font-medium w-full my-2 sm:w-auto">
                                    3,000,000<sup>đ</sup>
                                </p>
                                <QuantityChange
                                    value={1}
                                    onIncrease={() => {}}
                                    onDecrease={() => {}}
                                    className="flex-row-reverse [&>button]:h-6 [&>button]:px-4 justify-end gap-2"
                                />
                                <Button className="h-6" outline>
                                    <span className="material-symbols-outlined text-base">delete</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact infomation */}
            <div className="mt-10 max-w-[500px] mx-auto">
                <h2 className="text-xl text-primary text-center font-semibold">Contact Information</h2>
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="mt-5 [&_input]:text-dark [&_span]:text-dark"
                >
                    <FormInput
                        register={register}
                        name="name"
                        error={errors?.name?.message}
                        type="text"
                        placeholder="Name"
                        icon="badge"
                    />
                    <FormInput
                        register={register}
                        name="email"
                        error={errors?.email?.message}
                        type="text"
                        placeholder="Email"
                        icon="mail"
                    />
                    <FormInput
                        register={register}
                        name="phone"
                        error={errors?.phone?.message}
                        type="text"
                        placeholder="Phone"
                        icon="call"
                    />
                    <FormInput
                        register={register}
                        name="address"
                        error={errors?.address?.message}
                        type="text"
                        placeholder="Address"
                        icon="location_on"
                    />
                    <FormSelect
                        register={register}
                        name="city"
                        options={[
                            { display: 'Đồng Nai', value: 60 },
                            { display: 'Bình Dương', value: 61 },
                        ]}
                        currentValue={watch('city')}
                        icon="location_on"
                        placeholder="City"
                        error={errors?.city?.message}
                    />
                    <FormSelect
                        register={register}
                        name="district"
                        options={[
                            { display: 'Long Thành', value: 'C1' },
                            { display: 'Nhơn Trạch', value: 'C2' },
                        ]}
                        currentValue={watch('district')}
                        icon="location_on"
                        placeholder="District"
                        error={errors?.district?.message}
                    />
                    <FormSelect
                        register={register}
                        name="ward"
                        options={[
                            { display: 'Phước An', value: 'PA' },
                            { display: 'Long Thọ', value: 'LT' },
                        ]}
                        currentValue={watch('ward')}
                        icon="location_on"
                        placeholder="Ward"
                        error={errors?.ward?.message}
                    />
                    <Button type="submit" icon="price_check" background className="[&>span]:text-white">
                        Checkout
                    </Button>
                </form>
            </div>
        </div>
    );
}
