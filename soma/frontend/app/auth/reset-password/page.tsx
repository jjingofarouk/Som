import ResetPasswordForm from '../../../components/auth/ResetPasswordForm';

export default function ResetPassword() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reset Password</h1>
      <ResetPasswordForm />
    </div>
  );
}
