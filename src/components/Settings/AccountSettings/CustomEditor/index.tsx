"use client";

import { useState } from "react";
import {
  Editor,
  EditorProvider,
  ContentEditableEvent,
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg"; 

export default function CustomEditor() {
  const [value, setValue] = useState<string>("Type your message here...");

  function onChange(e: ContentEditableEvent) {
    setValue(e.target.value);
  }

  return (
    <EditorProvider>
      <Editor
        value={value}
        onChange={onChange}
        style={{ minHeight: "200px" }}
        className="rsw-editor"
      >
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          <BtnClearFormatting />
          <HtmlButton />
          <Separator />
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}
