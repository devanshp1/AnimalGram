import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '@/hooks/useSignIn';

type FormValues = { identifier: string; password: string };

const SignInForm = () => {
    const { signIn } = useSignIn();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: { identifier: '', password: '' }
    });

    const onSubmit = async (data: FormValues) => {
        try {
            await signIn(data);
            toast.success('Signed in successfully');
            navigate('/');
        } catch (err: any) {
            toast.error(err?.response?.data?.message || err.message || 'Sign-in failed');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block">Email or Username</label>
                <Input {...register('identifier')} />
            </div>
            <div>
                <label className="block">Password</label>
                <Input type="password" {...register('password')} />
            </div>
            <Button type="submit">Sign In</Button>
        </form>
    )
}

export default SignInForm;