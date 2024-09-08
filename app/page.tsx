"use client";

import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit publicApiKey={"ck_pub_7c31d25212559c6cb212797018c2326b"}>
      <TasksProvider>
        <TasksList />
      </TasksProvider>
      <CopilotPopup />
    </CopilotKit>
  );
}
