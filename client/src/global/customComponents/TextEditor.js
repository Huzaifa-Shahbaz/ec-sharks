import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";


const TextEditor = ({ longDescription, setLongDescription }) => {
  const editorRef = useRef(null);

  return (
    <div className="text-editor-container">
      <Editor
        apiKey="awkvjx61mj2casufx8h4z3fup8dw0xoqox6kzsu1tso25el7"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={longDescription}
        onEditorChange={(content) => setLongDescription(content)}
        init={{
          height: 300,
          menubar: false,

          plugins:
            "advcode advlist advtable anchor autocorrect autolink autosave casechange charmap checklist codesample directionality editimage emoticons export footnotes formatpainter help image insertdatetime link lists media mediaembed mergetags nonbreaking pagebreak permanentpen powerpaste searchreplace table tableofcontents tinymcespellchecker typography visualblocks visualchars wordcount",
          toolbar:
            "undo redo | fontfamily fontsize | bold italic underline | link forecolor | lineheight",
          font_formats:
            "Roboto=Roboto, sans-serif; Arial=Arial, sans-serif; Courier New=Courier New, monospace; Times New Roman=Times New Roman, serif;",
          content_style: `
          body { font-family: 'Roboto', sans-serif; }
        `,
        }}
      />
      <div className="water-mark"></div>
    </div>
  );
};

export default TextEditor;
