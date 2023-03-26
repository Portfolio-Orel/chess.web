import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
