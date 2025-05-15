import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputFile } from "./InputFile";
import { Separator } from "./ui/separator";
import { Constants } from "@/constant/Constants";
import { toast } from "sonner";

export function CardWithForm() {
  const [audioFile, setAudioFile] = React.useState(null);
  const inputRef = React.useRef(null);

  const handleFileChange = (e) => {
    console.log("e files", e.target.files);
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > Constants.FILE_SIZE) {
        toast.error("File too large", {
          description: "File must be <= 10MB",
        });
        setAudioFile(null);
        inputRef.current.value = "";
      } else {
        setAudioFile(file);
        toast.success("File added successfully", {
          description: file.name,
        });
      }
    }
  };

  const handleClearFile = () => {
    setAudioFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
      toast.success("File cleared");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!audioFile) {
      toast.warning("Please select a file first.");
      return;
    }

    console.log("Uploading:", audioFile);
    toast("Uploading started", {
      description: audioFile.name,
      action: {
        label: "Cancel",
        onClick: () => {
          setAudioFile(null);
          toast.info("Upload cancelled");
        },
      },
    });
  };

  return (
    <Card className="min-w-[350px] w-full max-w-md">
      <CardHeader className={"pb-3"}>
        <CardTitle className="text-2xl font-semibold">Transcriber</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Upload your audio and get transcription
        </CardDescription>
      </CardHeader>

      <CardContent className={""}>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full gap-4">
            <InputFile
              inputRef={inputRef}
              value={audioFile}
              onChange={handleFileChange}
            />

            <div className="flex justify-between">
              <Button onClick={handleClearFile} type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Upload</Button>
            </div>
          </div>
        </form>
      </CardContent>

      <Separator />
      <CardContent>
        <p className="text-center font-medium mb-2">Your Transcription</p>
        <div className="min-h-[100px] p-4 border rounded-md bg-gray-50 text-gray-900 overflow-auto">
          {/* Transcription text will appear here */}
          <em>No transcription yet.</em>
        </div>
      </CardContent>
    </Card>
  );
}
