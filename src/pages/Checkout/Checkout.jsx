import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { product1_0 } from '~/assets/images';
import Button from '~/components/Button';
import QuantityChange from '~/components/Button/QuantityChange';
import FormInput from '~/components/FormInput';
import FormSelect from '~/components/FormSelect';
import * as http from '~/utils/http';

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        address: yup.string().required(),
        cityCode: yup.string().required(),
        districtCode: yup.string().required(),
        wardCode: yup.string().required(),
        note: yup.string(),
    })
    .required();

export default function Checkout() {
    const [options, setOptions] = useState({ cities: [], districts: [], wards: [] });
    const refForm = useRef(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        watch,
        setValue,
        getValues,
        resetField,
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        http.get(http.GHN, 'master-data/province').then(res => {
            const cities = res.data
                .map(item => ({ display: item.ProvinceName, value: item.ProvinceID }))
                .sort((prev, next) => prev.display.localeCompare(next.display));

            setOptions({ ...options, cities });
        });
        // eslint-disable-next-line
    }, []);

    // Handle select change
    const handleChangeCity = e => {
        const city = e.target[e.target.selectedIndex].text;
        const cityCode = e.target[e.target.selectedIndex].value;
        setValue('city', city);
        setValue('cityCode', cityCode);
        setValue('districtCode', '');
        setValue('wardCode', '');

        http.post(http.GHN, 'master-data/district', {
            province_id: parseInt(e.target.value),
        }).then(res => {
            const districts = res.data
                .map(item => ({ display: item.DistrictName, value: item.DistrictID }))
                .sort((prev, next) => prev.display.localeCompare(next.display));

            setOptions({ ...options, districts, wards: [] });
        });
    };

    const handleChangeDistrict = e => {
        const district = e.target[e.target.selectedIndex].text;
        const districtCode = e.target[e.target.selectedIndex].value;
        setValue('district', district);
        setValue('districtCode', districtCode);

        http.post(http.GHN, 'master-data/ward', {
            district_id: parseInt(e.target.value),
        }).then(res => {
            const wards = res.data
                .map(item => ({ display: item.WardName, value: item.WardCode }))
                .sort((prev, next) => prev.display.localeCompare(next.display));

            setOptions({ ...options, wards });
        });
    };

    const handleChangeWard = e => {
        const ward = e.target[e.target.selectedIndex].text;
        const wardCode = e.target[e.target.selectedIndex].value;
        setValue('ward', ward);
        setValue('wardCode', wardCode);

        http.post(http.GHN, 'v2/shipping-order/fee', {
            shop_id: 3281000,
            service_type_id: 2,
            insurance_value: 0,
            coupon: '',
            from_district_id: 1536,
            to_district_id: parseInt(getValues('districtCode')),
            to_ward_code: wardCode,
            weight: 500,
            length: 20,
            width: 4,
            height: 1,
        }).then(res => console.log(res));
    };

    // Handle submit
    const onSubmit = data => {
        alert(
            `name: ${data.name}
            email: ${data.email}
            phone: ${data.phone}
            address: ${data.address}
            city: ${data.city}
            district: ${data.district}
            ward: ${data.ward}
            note: ${data.note}`
        );
        // navigate('/');
        resetField('name');
        resetField('email');
        resetField('phone');
        resetField('address');
        resetField('cityCode');
        resetField('districtCode');
        resetField('wardCode');
        resetField('note');
        setOptions({ ...options, districts: [], wards: [] });
    };

    const onError = data => {
        for (const key of Object.keys(data)) {
            setFocus(key);
            break;
        }
    };

    return (
        <div className="my-container py-10">
            <div className="max-w-[500px] mx-auto">
                {/* Items */}
                <div>
                    <h2 className="text-xl text-primary text-center uppercase font-semibold border-b border-primary">
                        Your order (3 items)
                    </h2>
                    <div className="divide-y">
                        <div className="grid grid-cols-3 gap-2 py-4">
                            <div className="flex items-center">
                                <img
                                    src={product1_0}
                                    alt="product"
                                    className="w-20 aspect-square object-contain rounded-full bg-primary bg-opacity-10 lg:w-24"
                                />
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
                            <div className="flex items-center">
                                <img
                                    src={product1_0}
                                    alt="product"
                                    className="w-20 aspect-square object-contain rounded-full bg-primary bg-opacity-10 lg:w-24"
                                />
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
                <div className="mt-10">
                    <h2 className="text-xl text-primary text-center uppercase font-semibold border-b border-primary">
                        Contact Information
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit, onError)}
                        className="mt-5 [&_input]:text-dark [&_textarea]:text-dark [&_span]:text-dark"
                        spellCheck="false"
                        ref={refForm}
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
                        <FormSelect
                            register={register}
                            name="cityCode"
                            options={options.cities}
                            error={errors?.cityCode?.message}
                            currentValue={watch('cityCode')}
                            icon="location_on"
                            placeholder="City"
                            onChange={handleChangeCity}
                        />
                        <FormSelect
                            register={register}
                            name="districtCode"
                            options={options.districts}
                            error={errors?.districtCode?.message}
                            currentValue={watch('districtCode')}
                            icon="location_on"
                            placeholder="District"
                            onChange={handleChangeDistrict}
                        />
                        <FormSelect
                            register={register}
                            name="wardCode"
                            options={options.wards}
                            error={errors?.wardCode?.message}
                            currentValue={watch('wardCode')}
                            icon="location_on"
                            placeholder="Ward"
                            onChange={handleChangeWard}
                        />
                        <FormInput
                            register={register}
                            name="address"
                            error={errors?.address?.message}
                            type="text"
                            placeholder="Street Name, Building, House No."
                            icon="location_on"
                        />
                        <FormInput
                            register={register}
                            name="note"
                            error={errors?.note?.message}
                            type="textarea"
                            placeholder="Note"
                            icon="note"
                        />
                    </form>
                </div>

                {/* Payment */}
                <div className="mt-10">
                    <h2 className="text-xl text-primary text-center uppercase font-semibold border-b border-primary">
                        Checkout
                    </h2>
                    <table className="w-full max-w-[300px] my-4 mx-auto text-sm">
                        <tbody>
                            <tr>
                                <th className="py-2 text-left">Items price</th>
                                <td className="py-2 text-right">
                                    6,000,000<sup>đ</sup>
                                </td>
                            </tr>
                            <tr>
                                <th className="py-2 text-left">Shipping price</th>
                                <td className="py-2 text-right">
                                    30,000<sup>đ</sup>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className="py-2 text-left">Total</th>
                                <td className="py-2 text-right">
                                    6,030,000<sup>đ</sup>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Submit */}
                <Button
                    icon="price_check"
                    background
                    className="[&>span]:text-white w-full mt-10"
                    onClick={() => {
                        refForm.current.requestSubmit();
                    }}
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}
