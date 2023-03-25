import { LoginForm } from "../../components/LoginForm";
import AddEventForm from "../../components/AddEventForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2">
        <AddEventForm />
      </div>
    </div>
  );
}
