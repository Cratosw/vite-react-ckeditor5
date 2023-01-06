import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Command from '@ckeditor/ckeditor5-core/src/command';
import Context from '@ckeditor/ckeditor5-core/src/context';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import React from 'react';

const editorConfig = {
  plugins: [
    Essentials,
    Autoformat,
    BlockQuote,
    Bold,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    Indent,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    TableToolbar,
    Alignment,
    AutoImage,
    AutoLink,
    Code,
    CodeBlock,
    FindAndReplace,
    Font,
    Highlight,
    HorizontalLine,
    HtmlEmbed,
    ImageInsert,
    ImageResize,
    ImageUpload,
    IndentBlock,
    LinkImage,
    ListProperties,
    Mention,
    PageBreak,
    PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    SourceEditing,
    Strikethrough,
    Subscript,
    Superscript,
    TableCaption,
    TableCellProperties,
    TableProperties,
    TextTransformation,
    TodoList,
    Underline,
    WordCount,
  ],
  toolbar: [
    'undo',
    'redo',
    'findAndReplace',
    'selectAll',
    'heading',
    'removeFormat',
    'bold',
    'italic',
    'strikethrough',
    'underline',
    'code',
    'subscript',
    'superscript',
    'specialCharacters',
    'horizontalLine',
    'pageBreak',
    '-',
    'highlight',
    'fontSize',
    'fontFamily',
    'fontColor',
    'fontBackgroundColor',
    'link',
    'blockQuote',
    'insertTable',
    'uploadImage',
    'mediaEmbed',
    'codeBlock',
    'htmlEmbed',
    'bulletedList',
    'numberedList',
    'todoList',
    'outdent',
    'indent',
    'alignment',
    'sourceEditing',
  ],
  language: 'zh-cn',
  fontFamily: {
    supportAllValues: true,
  },
  fontSize: {
    options: [10, 12, 14, 'default', 18, 20, 22],
    supportAllValues: true,
  },
  image: {
    styles: {
      options: [
        'inline',
        'alignLeft',
        'alignRight',
        'alignCenter',
        'alignBlockLeft',
        'alignBlockRight',
        'block',
        'side',
      ],
    },
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null,
      },
      {
        name: 'resizeImage:50',
        label: '50%',
        value: '50',
      },
      {
        name: 'resizeImage:75',
        label: '75%',
        value: '75',
      },
    ],
    insert: {
      integrations: ['insertImageViaUrl'],
    },
  },
};
interface CustomCkeditorProps {
  value: string;
  onChange: (value: string) => void;
}
const CustomCkeditor = ({ value, onChange }: CustomCkeditorProps) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value ?? ''}
      config={editorConfig}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        // console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
      onBlur={(event, editor) => {
        // console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        // console.log('Focus.', editor);
      }}
    />
  );
};
export default CustomCkeditor;
