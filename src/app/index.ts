import * as main from "./components/main/main";

const user = new main.Student("Urs", "uk", "Knüller");
document.body.innerHTML = main.Greeter(user);
