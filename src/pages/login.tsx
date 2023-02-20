import { useForm, SubmitHandler } from 'react-hook-form';
import { Util } from '@/util';
import { useRef } from 'react';

type LoginData = { name: string, password: string };

export default function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginData>();

    const onSubmit = (data: LoginData) => {
        console.log(data); // firebase.
    }

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label> name </label>
                <input { ...register("name", { required: true, pattern: /^[a-z0-9]+$/i }) } />
                { errors.name && errors.name.type === "required" && <p> ⚠️ This field is required </p> }
                { errors.name && errors.name.type === "pattern" && <p> ⚠️ User name must contain only letters, numbers </p> }

                <label> password </label>
                <input type={"text"} { ...register("password", { required: true, minLength: 6 }) } />
                { errors.password && errors.password.type === "required" && <p> ⚠️ This field is required </p> }
                { errors.password && errors.password.type === "minLength" && <p> ⚠️ Password must be a string with a minimum length of 6 </p> }

                <input type={'submit'} />
            </form>

            <input type={'submit'} value={'register'} onClick={ () => { window.location.href="register" } }/>
        </div>
    );
}
