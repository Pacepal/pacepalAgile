import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

export function LoginPage({ session, onNavigate }) {
  return (
    <main className="contenedor formulario-layout">
      <LoginForm session={session} onNavigate={onNavigate} />
    </main>
  );
}

export function RegisterPage({ session, onNavigate }) {
  return (
    <main className="contenedor formulario-layout">
      <RegisterForm onRegister={session.register} sessionMessage={session.message} onNavigate={onNavigate} />
    </main>
  );
}
