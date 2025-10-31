import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "rich-text-editor-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/rich-text"],
    registryDependencies: ["@shadcn-editor/editor"],
    files: [
      {
        path: "editor/editor-ui/content-editable.tsx",
        target: "components/editor/editor-ui/content-editable.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toolbar-plugin",
    type: "registry:ui",
    registryDependencies: [
      "button-group",
      "dialog",
      "@shadcn-editor/rich-text-editor-plugin",
    ],
    files: [
      {
        path: "editor/plugins/toolbar/toolbar-plugin.tsx",
        target: "components/editor/plugins/toolbar/toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/context/toolbar-context.tsx",
        target: "components/editor/context/toolbar-context.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-modal.tsx",
        target: "components/editor/editor-hooks/use-modal.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "history-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/utils"],
    registryDependencies: ["button", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/toolbar/history-toolbar-plugin.tsx",
        target: "components/editor/plugins/toolbar/history-toolbar-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "block-format-toolbar-plugin",
    type: "registry:ui",
    registryDependencies: ["select", "@shadcn-editor/toolbar-plugin"],
    dependencies: [
      "@lexical/list",
      "@lexical/utils",
      "@lexical/selection",
      "@lexical/code",
    ],
    files: [
      {
        path: "editor/plugins/toolbar/block-format-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/block-format-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
      {
        path: "editor/plugins/toolbar/block-format/block-format-data.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/block-format-data.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-bulleted-list.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-bulleted-list.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-check-list.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-check-list.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-heading.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-heading.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-numbered-list.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-numbered-list.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-paragraph.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-paragraph.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-quote.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-quote.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/list-max-indent-level-plugin.tsx",
        target: "components/editor/plugins/list-max-indent-level-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "font-family-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/selection"],
    registryDependencies: ["select", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/toolbar/font-family-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/font-family-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "font-size-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/selection"],
    registryDependencies: ["button", "input", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/toolbar/font-size-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/font-size-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "font-format-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/table"],
    registryDependencies: ["toggle", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/toolbar/font-format-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/font-format-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "subsuper-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/table"],
    registryDependencies: ["toggle-group", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/toolbar/subsuper-toolbar-plugin.tsx",
        target: "components/editor/plugins/toolbar/subsuper-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "font-color-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["react-colorful", "@lexical/selection"],
    registryDependencies: [
      "button",
      "input",
      "popover",
      "@shadcn-editor/toolbar-plugin",
    ],
    files: [
      {
        path: "editor/plugins/toolbar/font-color-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/font-color-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/font-background-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/font-background-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-ui/colorpicker.tsx",
        target: "components/editor/editor-ui/colorpicker.tsx",
        type: "registry:ui",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "element-format-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/link", "@lexical/utils", "@lexical/selection"],
    registryDependencies: [
      "separator",
      "toggle-group",
      "@shadcn-editor/toolbar-plugin",
    ],
    files: [
      {
        path: "editor/plugins/toolbar/element-format-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/element-format-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/utils/get-selected-node.ts",
        target: "components/editor/utils/get-selected-node.ts",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "clear-formatting-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/utils", "@lexical/table"],
    registryDependencies: ["button", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/toolbar/clear-formatting-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/clear-formatting-toolbar-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "link-toolbar-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/link", "@lexical/utils", "@lexical/selection"],
    registryDependencies: [
      "toggle",
      "button",
      "input",
      "@shadcn-editor/toolbar-plugin",
      "@shadcn-editor/link-plugin",
    ],
    files: [
      {
        path: "editor/plugins/toolbar/link-toolbar-plugin.tsx",
        target: "components/editor/plugins/toolbar/link-toolbar-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-update-toolbar.ts",
        target: "components/editor/editor-hooks/use-update-toolbar.ts",
        type: "registry:hook",
      },
      {
        path: "editor/utils/get-selected-node.ts",
        target: "components/editor/utils/get-selected-node.ts",
        type: "registry:component",
      },
      {
        path: "editor/utils/url.ts",
        target: "components/editor/utils/url.ts",
        type: "registry:component",
      },
    ],
  },
  {
    name: "actions-plugin",
    type: "registry:ui",
    registryDependencies: ["@shadcn-editor/rich-text-editor-plugin"],
    files: [
      {
        path: "editor/plugins/actions/actions-plugin.tsx",
        target: "components/editor/plugins/actions/actions-plugin.tsx",
        type: "registry:component",
      },
    ],
  },


  

  
  {
    name: "clear-editor-plugin",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "dialog",
      "tooltip",
      "@shadcn-editor/actions-plugin",
    ],
    files: [
      {
        path: "editor/plugins/actions/clear-editor-plugin.tsx",
        target: "components/editor/plugins/actions/clear-editor-plugin.tsx",
        type: "registry:component",
      },
    ],
  },

 
  {
    name: "autocomplete-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/utils", "@lexical/selection"],
    registryDependencies: ["@shadcn-editor/rich-text-editor-plugin"],
    files: [
      {
        path: "editor/plugins/autocomplete-plugin.tsx",
        target: "components/editor/plugins/autocomplete-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/nodes/autocomplete-node.tsx",
        target: "components/editor/nodes/autocomplete-node.tsx",
        type: "registry:component",
      },
      {
        path: "editor/utils/swipe.ts",
        target: "components/editor/utils/swipe.ts",
        type: "registry:component",
      },
    ],
  },
  {
    name: "auto-embed-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/utils", "@lexical/markdown"],
    registryDependencies: [
      "button",
      "command",
      "dialog",
      "input",
      "popover",
      "select",
      "@shadcn-editor/toolbar-plugin",
    ],
    files: [
      {
        path: "editor/plugins/embeds/auto-embed-plugin.tsx",
        target: "components/editor/plugins/embeds/auto-embed-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/embeds/twitter-plugin.tsx",
        target: "components/editor/plugins/embeds/twitter-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/nodes/embeds/tweet-node.tsx",
        target: "components/editor/nodes/embeds/tweet-node.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/embeds/youtube-plugin.tsx",
        target: "components/editor/plugins/embeds/youtube-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/nodes/embeds/youtube-node.tsx",
        target: "components/editor/nodes/embeds/youtube-node.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-modal.tsx",
        target: "components/editor/editor-hooks/use-modal.tsx",
        type: "registry:component",
      },
      {
        path: "editor/transformers/markdown-tweet-transformer.ts",
        target: "components/editor/transformers/markdown-tweet-transformer.ts",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-insert/insert-embeds.tsx",
        target:
          "components/editor/plugins/toolbar/block-insert/insert-embeds.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "auto-focus-plugin",
    type: "registry:ui",
    registryDependencies: ["@shadcn-editor/rich-text-editor-plugin"],
  },
  {
    name: "component-picker-menu-plugin",
    type: "registry:ui",
    registryDependencies: [
      "command",
      "dialog",
      "@shadcn-editor/rich-text-editor-plugin",
    ],
    files: [
      {
        path: "editor/plugins/component-picker-menu-plugin.tsx",
        target: "components/editor/plugins/component-picker-menu-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-modal.tsx",
        target: "components/editor/editor-hooks/use-modal.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/alignment-picker-plugin.tsx",
        target: "components/editor/plugins/picker/alignment-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/bulleted-list-picker-plugin.tsx",
        target:
          "components/editor/plugins/picker/bulleted-list-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/check-list-picker-plugin.tsx",
        target: "components/editor/plugins/picker/check-list-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/code-picker-plugin.tsx",
        target: "components/editor/plugins/picker/code-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/columns-layout-picker-plugin.tsx",
        target:
          "components/editor/plugins/picker/columns-layout-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/component-picker-option.tsx",
        target: "components/editor/plugins/picker/component-picker-option.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/divider-picker-plugin.tsx",
        target: "components/editor/plugins/picker/divider-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/embeds-picker-plugin.tsx",
        target: "components/editor/plugins/picker/embeds-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/heading-picker-plugin.tsx",
        target: "components/editor/plugins/picker/heading-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/image-picker-plugin.tsx",
        target: "components/editor/plugins/picker/image-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/numbered-list-picker-plugin.tsx",
        target:
          "components/editor/plugins/picker/numbered-list-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/paragraph-picker-plugin.tsx",
        target: "components/editor/plugins/picker/paragraph-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/quote-picker-plugin.tsx",
        target: "components/editor/plugins/picker/quote-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/picker/table-picker-plugin.tsx",
        target: "components/editor/plugins/picker/table-picker-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "code-plugin",
    type: "registry:ui",
    dependencies: [
      "lodash",
      "@lexical/utils",
      "@lexical/code",
      "@lexical/selection",
    ],
    devDependencies: ["@types/lodash"],
    registryDependencies: ["select", "@shadcn-editor/toolbar-plugin"],
    files: [
      {
        path: "editor/plugins/code-action-menu-plugin.tsx",
        target: "components/editor/plugins/code-action-menu-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/code-highlight-plugin.tsx",
        target: "components/editor/plugins/code-highlight-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-hooks/use-debounce.ts",
        target: "components/editor/editor-hooks/use-debounce.ts",
        type: "registry:component",
      },
      {
        path: "editor/editor-ui/code-button.tsx",
        target: "components/editor/editor-ui/code-button.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/format-code-block.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/format-code-block.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-format/block-format-data.tsx",
        target:
          "components/editor/plugins/toolbar/block-format/block-format-data.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/code-language-toolbar-plugin.tsx",
        target:
          "components/editor/plugins/toolbar/code-language-toolbar-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "context-menu-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/link"],
    registryDependencies: [
      "command",
      "popover",
      "@shadcn-editor/rich-text-editor-plugin",
    ],
    files: [
      {
        path: "editor/plugins/context-menu-plugin.tsx",
        target: "components/editor/plugins/context-menu-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "draggable-block-plugin",
    type: "registry:ui",
    registryDependencies: ["@shadcn-editor/rich-text-editor-plugin"],
    files: [
      {
        path: "editor/plugins/draggable-block-plugin.tsx",
        target: "components/editor/plugins/draggable-block-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "drag-drop-paste-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/utils"],
    registryDependencies: [
      "@shadcn-editor/rich-text-editor-plugin",
      "@shadcn-editor/image-plugin",
    ],
    files: [
      {
        path: "editor/plugins/drag-drop-paste-plugin.tsx",
        target: "components/editor/plugins/drag-drop-paste-plugin.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "emoji-plugin",
    type: "registry:ui",
    registryDependencies: ["command", "@shadcn-editor/rich-text-editor-plugin"],
    files: [
      {
        path: "editor/plugins/emojis-plugin.tsx",
        target: "components/editor/plugins/emojis-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/nodes/emoji-node.tsx",
        target: "components/editor/nodes/emoji-node.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/emoji-picker-plugin.tsx",
        target: "components/editor/plugins/emoji-picker-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/utils/emoji-list.ts",
        target: "components/editor/utils/emoji-list.ts",
        type: "registry:component",
      },
      {
        path: "editor/transformers/markdown-emoji-transformer.ts",
        target: "components/editor/transformers/markdown-emoji-transformer.ts",
        type: "registry:component",
      },
    ],
  },

  {
    name: "hashtag-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/hashtag"],
    registryDependencies: ["@shadcn-editor/rich-text-editor-plugin"],
  },
 
  {
    name: "image-plugin",
    type: "registry:ui",
    dependencies: ["@lexical/utils", "@lexical/markdown"],
    registryDependencies: [
      "button",
      "dialog",
      "input",
      "label",
      "select",
      "tabs",
      "@shadcn-editor/toolbar-plugin",
    ],
    files: [
      {
        path: "editor/plugins/images-plugin.tsx",
        target: "components/editor/plugins/images-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/nodes/image-node.tsx",
        target: "components/editor/nodes/image-node.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-ui/image-component.tsx",
        target: "components/editor/editor-ui/image-component.tsx",
        type: "registry:component",
      },
      {
        path: "editor/editor-ui/image-resizer.tsx",
        target: "components/editor/editor-ui/image-resizer.tsx",
        type: "registry:component",
      },
      {
        path: "editor/shared/can-use-dom.ts",
        target: "components/editor/shared/can-use-dom.ts",
        type: "registry:component",
      },
      {
        path: "editor/transformers/markdown-image-transformer.ts",
        target: "components/editor/transformers/markdown-image-transformer.ts",
        type: "registry:component",
      },
      {
        path: "editor/plugins/toolbar/block-insert/insert-image.tsx",
        target:
          "components/editor/plugins/toolbar/block-insert/insert-image.tsx",
        type: "registry:component",
      },
    ],
  },
 
 
  {
    name: "link-plugin",
    type: "registry:ui",
    files: [
      {
        path: "editor/plugins/auto-link-plugin.tsx",
        target: "components/editor/plugins/auto-link-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/floating-link-editor-plugin.tsx",
        target: "components/editor/plugins/floating-link-editor-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/plugins/link-plugin.tsx",
        target: "components/editor/plugins/link-plugin.tsx",
        type: "registry:component",
      },
      {
        path: "editor/utils/set-floating-elem-position-for-link-editor.ts",
        target:
          "components/editor/utils/set-floating-elem-position-for-link-editor.ts",
        type: "registry:component",
      },
      {
        path: "editor/utils/url.ts",
        target: "components/editor/utils/url.ts",
        type: "registry:component",
      },
    ],
  },
  

  

]
