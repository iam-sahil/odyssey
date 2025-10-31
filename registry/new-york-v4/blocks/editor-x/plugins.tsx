import { useState } from "react"
import {
  CHECK_LIST,
  ELEMENT_TRANSFORMERS,
  MULTILINE_ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
} from "@lexical/markdown"
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin"
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin"
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin"
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin"

import { ContentEditable } from "@/registry/new-york-v4/editor/editor-ui/content-editable"
import { ActionsPlugin } from "@/registry/new-york-v4/editor/plugins/actions/actions-plugin"
import { CharacterLimitPlugin } from "@/registry/new-york-v4/editor/plugins/actions/character-limit-plugin"
import { ClearEditorActionPlugin } from "@/registry/new-york-v4/editor/plugins/actions/clear-editor-plugin"

import { AutoLinkPlugin } from "@/registry/new-york-v4/editor/plugins/auto-link-plugin"
import { AutocompletePlugin } from "@/registry/new-york-v4/editor/plugins/autocomplete-plugin"
import { CodeActionMenuPlugin } from "@/registry/new-york-v4/editor/plugins/code-action-menu-plugin"
import { CodeHighlightPlugin } from "@/registry/new-york-v4/editor/plugins/code-highlight-plugin"
import { ComponentPickerMenuPlugin } from "@/registry/new-york-v4/editor/plugins/component-picker-menu-plugin"
import { ContextMenuPlugin } from "@/registry/new-york-v4/editor/plugins/context-menu-plugin"
import { DragDropPastePlugin } from "@/registry/new-york-v4/editor/plugins/drag-drop-paste-plugin"
import { DraggableBlockPlugin } from "@/registry/new-york-v4/editor/plugins/draggable-block-plugin"
import { AutoEmbedPlugin } from "@/registry/new-york-v4/editor/plugins/embeds/auto-embed-plugin"
import { TwitterPlugin } from "@/registry/new-york-v4/editor/plugins/embeds/twitter-plugin"
import { YouTubePlugin } from "@/registry/new-york-v4/editor/plugins/embeds/youtube-plugin"
import { EmojiPickerPlugin } from "@/registry/new-york-v4/editor/plugins/emoji-picker-plugin"
import { EmojisPlugin } from "@/registry/new-york-v4/editor/plugins/emojis-plugin"
import { FloatingLinkEditorPlugin } from "@/registry/new-york-v4/editor/plugins/floating-link-editor-plugin"
import { ImagesPlugin } from "@/registry/new-york-v4/editor/plugins/images-plugin"
import { ListMaxIndentLevelPlugin } from "@/registry/new-york-v4/editor/plugins/list-max-indent-level-plugin"
import { AlignmentPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/alignment-picker-plugin"
import { BulletedListPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/bulleted-list-picker-plugin"
import { CheckListPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/check-list-picker-plugin"
import { CodePickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/code-picker-plugin"
import { ColumnsLayoutPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/columns-layout-picker-plugin"
import { DividerPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/divider-picker-plugin"
import { EmbedsPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/embeds-picker-plugin"
import { HeadingPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/heading-picker-plugin"
import { ImagePickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/image-picker-plugin"
import { NumberedListPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/numbered-list-picker-plugin"
import { ParagraphPickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/paragraph-picker-plugin"
import { QuotePickerPlugin } from "@/registry/new-york-v4/editor/plugins/picker/quote-picker-plugin"
import {
  DynamicTablePickerPlugin,
  TablePickerPlugin,
} from "@/registry/new-york-v4/editor/plugins/picker/table-picker-plugin"
import { BlockFormatDropDown } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format-toolbar-plugin"
import { FormatBulletedList } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-bulleted-list"
import { FormatCheckList } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-check-list"
import { FormatCodeBlock } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-code-block"
import { FormatHeading } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-heading"
import { FormatNumberedList } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-numbered-list"
import { FormatParagraph } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-paragraph"
import { FormatQuote } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/format-quote"
import { BlockInsertPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert-plugin"
import { InsertColumnsLayout } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-columns-layout"
import { InsertEmbeds } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-embeds"
import { InsertImage } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-image"
import { InsertTable } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-table"
import { ClearFormattingToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/clear-formatting-toolbar-plugin"
import { CodeLanguageToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/code-language-toolbar-plugin"
import { ToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/toolbar-plugin"
import { EMOJI } from "@/registry/new-york-v4/editor/transformers/markdown-emoji-transformer"
import { HR } from "@/registry/new-york-v4/editor/transformers/markdown-hr-transformer"
import { IMAGE } from "@/registry/new-york-v4/editor/transformers/markdown-image-transformer"
import { TABLE } from "@/registry/new-york-v4/editor/transformers/markdown-table-transformer"
import { TWEET } from "@/registry/new-york-v4/editor/transformers/markdown-tweet-transformer"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const placeholder = "Press / for commands..."
const maxLength = 500

export function Plugins({}) {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="vertical-align-middle sticky top-0 z-10 flex items-center gap-2 overflow-auto border-b p-1">
            <Separator orientation="vertical" className="!h-7" />
            <BlockFormatDropDown>
              <FormatParagraph />
              <FormatHeading levels={["h1", "h2", "h3"]} />
              <FormatNumberedList />
              <FormatBulletedList />
              <FormatCheckList />
              <FormatCodeBlock />
              <FormatQuote />
            </BlockFormatDropDown>
            {blockType === "code" ? (
              <CodeLanguageToolbarPlugin />
            ) : (
              <>
                <Separator orientation="vertical" className="!h-7" />
           
                <Separator orientation="vertical" className="!h-7" />
                <BlockInsertPlugin>
              
                  <InsertImage />
                  <InsertTable />
                  <InsertColumnsLayout />
                  <InsertEmbeds />
                </BlockInsertPlugin>
              </>
            )}
          </div>
        )}
      </ToolbarPlugin>
      <div className="relative">
        <AutoFocusPlugin />
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-[calc(100vh-90px)] min-h-72 overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />

        <ClickableLinkPlugin />
        <CheckListPlugin />
    
   
        <ListPlugin />
        <TabIndentationPlugin />
        <HashtagPlugin />
        <HistoryPlugin />


        <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
 
        <EmojisPlugin />
        <ImagesPlugin />

  

        <AutoEmbedPlugin />
        <TwitterPlugin />
        <YouTubePlugin />

        <CodeHighlightPlugin />
        <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />

        <MarkdownShortcutPlugin
          transformers={[
            TABLE,
            HR,
            IMAGE,
            EMOJI,
            TWEET,
            CHECK_LIST,
            ...ELEMENT_TRANSFORMERS,
            ...MULTILINE_ELEMENT_TRANSFORMERS,
            ...TEXT_FORMAT_TRANSFORMERS,
            ...TEXT_MATCH_TRANSFORMERS,
          ]}
        />
     

        <AutocompletePlugin />
        <AutoLinkPlugin />

        <ComponentPickerMenuPlugin
          baseOptions={[
            ParagraphPickerPlugin(),
            HeadingPickerPlugin({ n: 1 }),
            HeadingPickerPlugin({ n: 2 }),
            HeadingPickerPlugin({ n: 3 }),
            TablePickerPlugin(),
            CheckListPickerPlugin(),
            NumberedListPickerPlugin(),
            BulletedListPickerPlugin(),
            QuotePickerPlugin(),
            CodePickerPlugin(),
            DividerPickerPlugin(),
            EmbedsPickerPlugin({ embed: "tweet" }),
            EmbedsPickerPlugin({ embed: "youtube-video" }),
            ImagePickerPlugin(),
            ColumnsLayoutPickerPlugin(),
            AlignmentPickerPlugin({ alignment: "left" }),
            AlignmentPickerPlugin({ alignment: "center" }),
            AlignmentPickerPlugin({ alignment: "right" }),
            AlignmentPickerPlugin({ alignment: "justify" }),
          ]}
          dynamicOptionsFn={DynamicTablePickerPlugin}
        />

        <ContextMenuPlugin />
        <DragDropPastePlugin />
        <EmojiPickerPlugin />

        <FloatingLinkEditorPlugin
          anchorElem={floatingAnchorElem}
          isLinkEditMode={isLinkEditMode}
          setIsLinkEditMode={setIsLinkEditMode}
        />
 

        <ListMaxIndentLevelPlugin />
      </div>
      <ActionsPlugin>
        <div className="clear-both flex items-center justify-between gap-2 overflow-auto border-t p-1">
          <div className="flex flex-1 justify-start">
 

            <CharacterLimitPlugin maxLength={maxLength} charset="UTF-16" />
          </div>
          <div>
        
          </div>
          <div className="flex flex-1 justify-end">
       
         

      
            <>
              <ClearEditorActionPlugin />
              <ClearEditorPlugin />
            </>
  
          </div>
        </div>
      </ActionsPlugin>
    </div>
  )
}
