import { useEditor } from "tldraw";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { SplineIcon } from "lucide-react";

export default function ModifyShapeButton() {
  const editor = useEditor();
  const handleModifyShapes = async () => {
    const selectedShapeIds = editor.getSelectedShapeIds();
    if (selectedShapeIds.length === 0) {
      return toast.info("No shapes selected");
    }

    editor.rotateShapesBy(editor.getSelectedShapeIds(), Math.PI);
  };
  return (
    <Button
      variant={"indigo"}
      className="pointer-events-auto mr-2 my-2 rounded-xl drop-shadow-md`"
      onClick={handleModifyShapes}
    >
     <SplineIcon/> Modify shape
    </Button>
  );
}
