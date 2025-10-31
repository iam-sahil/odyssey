import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface DocsConfig {
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Plugins",
          href: "/docs/plugins",
          items: [],
        },
      ],
    },
    {
      title: "Editor Plugins",
      items: [
        {
          title: "Rich Text Editor",
          href: "/docs/plugins/rich-text-editor",
          items: [],
        },
        {
          title: "Toolbar",
          href: "/docs/plugins/toolbar",
          items: [
            {
              title: "Block Format",
              href: "/docs/plugins/toolbar/block-format-toolbar",
              items: [],
            },
        
           
          
           
        
          
          ],
        },
        {
          title: "Actions",
          href: "/docs/plugins/actions",
          items: [
            {
              title: "Clear Editor",
              href: "/docs/plugins/actions/clear-editor",
              items: [],
            },
       
          
          
          
            
            
          ],
        },
        {
          title: "Autocomplete",
          href: "/docs/plugins/autocomplete",
          items: [],
        },
          {
          title: "TestComponent",
          href: "/docs/plugins/test-component",
          items: [],
        },
        {
          title: "Auto Embed",
          href: "/docs/plugins/auto-embed",
          items: [],
        },
        {
          title: "Auto Focus",
          href: "/docs/plugins/auto-focus",
          items: [],
        },
        {
          title: "Code",
          href: "/docs/plugins/code",
          items: [],
        },
        {
          title: "Component Picker Menu",
          href: "/docs/plugins/component-picker-menu",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/plugins/context-menu",
          items: [],
        },
        {
          title: "Draggable Block",
          href: "/docs/plugins/draggable-block",
          items: [],
        },
        {
          title: "Drag Drop Paste",
          href: "/docs/plugins/drag-drop-paste",
          items: [],
        },
        {
          title: "Emoji",
          href: "/docs/plugins/emoji",
          items: [],
        },
     
        {
          title: "Hashtag",
          href: "/docs/plugins/hashtag",
          items: [],
        },
      
     
    
      
     
      
       
      ],
    },
  ],
}
