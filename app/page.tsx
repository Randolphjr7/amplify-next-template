"use client";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import { FileUploader } from '@aws-amplify/ui-react-storage';


Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
    
  const { signOut } = useAuthenticator();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <h1>Team Panacea!!!!!!</h1>
      <h1> </h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
     
      <FileUploader
           acceptedFileTypes={[
            // you can list file extensions:
            '.gif',
            '.bmp',
            '.doc',
            '.jpeg',
            '.jpg',
            '.pdf',
            '.csv',
            // or MIME types:
            'image/png',
            'video/*',
          ]}
      path="public/"
      maxFileCount={100}
      isResumable
      />

      </div>
      <div></div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
