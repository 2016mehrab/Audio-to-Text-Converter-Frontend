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

export function CardWithForm() {
  return (
    <Card className="min-w-[350px] w-full max-w-md">
      <CardHeader className={"pb-3"}>
        <CardTitle className="text-2xl font-semibold">Transcriber</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Upload your audio and get transcription
        </CardDescription>
      </CardHeader>
      
      <CardContent className={""}>
        <form>
          <div className="grid w-full gap-4">
            <InputFile />

            <div className="flex justify-between">
              <Button type="button" variant="outline">Cancel</Button>
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
