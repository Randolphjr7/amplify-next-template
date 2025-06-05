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




  return (
    <main>
      <h1>Team Panacea!!!!!!</h1>
      <h1> </h1>
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
        bucket={{
            bucketName: 'team-panacea-s3-bucket',
            region: 'us-west-2',
          }}
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
