import { useForm, SubmitHandler } from 'react-hook-form';

type LoginData = { userName: string, password: string };

const hash = (password: string): number => {
    let hash = 0;

    for (let i = 0; i < password.length; ++i) {
        hash += Number(password[i]);
    }

    return hash;
}

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();

    const onSubmit = (data: LoginData) => {
        console.log(hash(data.password));
    }

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label> user name </label>
                <input { ...register("userName", { required: true, pattern: /^[a-z0-9]+$/i }) } />
                { errors.userName && errors.userName.type === "pattern" && <p> ⚠️ alphabet, 0~9 </p> }

                <label> password </label>
                <input { ...register("password", { required: true, minLength: 4 }) } />

                <input type={'submit'} />
            </form>
            <input type={'submit'} value={'register'}/>
        </div>
    );
}
