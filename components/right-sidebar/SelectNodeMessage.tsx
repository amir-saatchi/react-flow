import { Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function SelectNodeMessage() {
  return (
    <>
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">Properties</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <div className="flex flex-col items-center justify-center h-40 text-center text-muted-foreground">
          <Settings className="w-8 h-8 mb-2 opacity-50" />
          <p>Select a node to edit its properties</p>
        </div>
      </CardContent>
    </>
  );
}

export default SelectNodeMessage;

{/* <div className="w-64 h-full border-l bg-background">
  <Card className="border-0 shadow-none rounded-none"></Card>
</div>; */}
