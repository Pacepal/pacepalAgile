import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

export function LoginPage({ session, onNavigate }) {
  return (
    <main className="contenedor formulario-layout">
      <LoginForm session={session} />
      <p className="enlace-alterno">
        No tienes cuenta?{' '}
        <button type="button" className="link-button" onClick={() => onNavigate('registro')}>
          Crear cuenta
        </button>
      </p>
    </main>
  );
}

export function RegisterPage({ session, onNavigate }) {
  return (
    <main className="contenedor formulario-layout">
      <RegisterForm onRegister={session.register} sessionMessage={session.message} />
      <p className="enlace-alterno">
        Ya tienes cuenta?{' '}
        <button type="button" className="link-button" onClick={() => onNavigate('login')}>
          Iniciar sesion
        </button>
      </p>
    </main>
  );
}
