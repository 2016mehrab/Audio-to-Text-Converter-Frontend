import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile({ value, onChange,inputRef }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="audioFile"
        className="text-sm font-medium text-muted-foreground"
      >
        Please provide your audio file
      </Label>
      {/* <Input accept="audio/*" id="audioFile" className="h-16" type="file" /> */}
      <Input
      ref= {inputRef}
        onChange={onChange}
        accept="audio/*"
        id="audioFile"
        className="
        flex justify-between
     file:mr-8  file:py-1.5  file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-primary file:text-primary-foreground
      
      "
        type="file"
      />
      {value && (
        <p className="text-xs text-muted-foreground mt-1">
          Selected: <strong>{value.name}</strong>
        </p>
      )}
    </div>
  );
}
