import { useEditor } from "tldraw";
import { Button } from "./ui/button";
import { toast } from "sonner";

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
      className="pointer-events-auto font-bold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-2 py-1 rounded-md"
      onClick={handleModifyShapes}
    >
      Modify shape
    </Button>
  );
}
