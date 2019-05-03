import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "My Task",
    id: "12346"
  });
  await updateTask({
    name: "My Task Updated!",
    id: "12346"
  });
})();
