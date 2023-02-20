import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { Util } from '@/util';

type registerData = { name: string, password: string, passwordConfirm: string };

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<registerData>();
    const passwordRef = useRef<string>("");

    const onSubmit = (data: registerData) => {
        const onSubmit = (data: registerData) => {
            console.log(data.name, Util.Hash(data.password)); // firebase.
        }
    }

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label> name </label>
                <input { ...register("name", { required: true, pattern: /^[a-z0-9]+$/i }) } />
                { errors.name && errors.name.type === "required" && <p> ⚠️ This field is required </p> }
                { errors.name && errors.name.type === "pattern" && <p> ⚠️ User name must contain only letters, numbers </p> }

                <label> password </label>
                <input type={"password"} { ...register("password", { required: true, minLength: 6 }) } />
                { errors.password && errors.password.type === "required" && <p> ⚠️ This field is required </p> }
                { errors.password && errors.password.type === "minLength" && <p> ⚠️ Password must be a string with a minimum length of 6 </p> }

                <label> password confirm </label>
                <input type={"password"} { ...register("passwordConfirm", { required: true, validate: (value) => { return passwordRef.current === value } }) } />
                { errors.passwordConfirm && errors.passwordConfirm.type === "required" && <p> ⚠️ This field is required </p> }
                { errors.passwordConfirm && errors.passwordConfirm.type === "validate" && <p> ⚠️ </p> }

                <input type={'submit'} />
            </form>
        </div>
    );
}
