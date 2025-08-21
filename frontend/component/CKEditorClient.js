import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "ckbox/dist/styles/themes/lark.css";

const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  {
    ssr: false,
  }
);

const ClassicEditor = dynamic(
  () => import("@ckeditor/ckeditor5-build-classic"),
  {
    ssr: false,
  }
);
export default function CKEditorClient({ value, onChange }) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "insertTable",
              "mediaEmbed",
              "undo",
              "redo",
            ],
          }}
        ></CKEditor>
      ) : (
        <p>Loading editor...</p>
      )}
    </div>
  );
}
