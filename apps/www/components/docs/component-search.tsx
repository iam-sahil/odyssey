'use client';

import * as React from 'react';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import { cn } from '@workspace/ui/lib/utils';
import { Search } from 'lucide-react';

interface RegistryItem {
  name: string;
  title?: string;
  type?: string;
  path?: string;
  files?: Array<{ path?: string }>;
}

interface SearchResult {
  name: string;
  title: string;
  path: string;
  category: string;
}

export interface ComponentSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ComponentSearch({ open, onOpenChange }: ComponentSearchProps) {
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [registryData, setRegistryData] = React.useState<SearchResult[]>([]);
  const fuseRef = React.useRef<Fuse<SearchResult> | null>(null);
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  // Load registry data
  React.useEffect(() => {
    const loadRegistry = async () => {
      try {
        const response = await fetch('/r/registry.json');
        const data = await response.json();

        const items: SearchResult[] = [];

        if (data.items && Array.isArray(data.items)) {
          data.items.forEach((item: RegistryItem) => {
            // Include items that have a registry path (components, primitives, demo, etc.)
            if (item.files && item.files[0] && item.files[0].path) {
              const filePath = item.files[0].path;
              // Match registry/<section>/<rest>/index.tsx
              const pathMatch = filePath.match(
                /registry\/([^\/]+)\/(.+?)\/index\.tsx$/,
              );
              if (pathMatch) {
                const section = pathMatch[1]; // e.g. components or primitives
                const rest = pathMatch[2]; // e.g. animate/github-stars-wheel
                const documentationPath = `/docs/${section}/${rest}`;
                const category = section;

                items.push({
                  name: item.name,
                  title: item.title || item.name,
                  path: documentationPath,
                  category,
                });
                return;
              }
            }

            // Fallback: if name follows components-... pattern, map to docs/components
            if (item.name && item.name.startsWith('components-')) {
              const componentPath = item.name
                .replace('components-', '')
                .replace(/-/g, '/');
              items.push({
                name: item.name,
                title: item.title || item.name,
                path: `/docs/components/${componentPath}`,
                category: componentPath.split('/')[0] || 'components',
              });
            }
          });
        }

        setRegistryData(items);
        setSearchResults(items.slice(0, 20));

        // Initialize Fuse
        fuseRef.current = new Fuse(items, {
          keys: ['title', 'name'],
          threshold: 0.3,
          minMatchCharLength: 1,
        });
      } catch (error) {
        console.error('Failed to load registry:', error);
      }
    };

    if (open) {
      loadRegistry();
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setSelectedIndex(0);

    if (!searchQuery.trim()) {
      setSearchResults(registryData.slice(0, 20));
    } else if (fuseRef.current) {
      const results = fuseRef.current.search(searchQuery);
      setSearchResults(results.map((r) => r.item).slice(0, 20));
    }
  };

  const handleSelect = (result: SearchResult) => {
    router.push(result.path);
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev,
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (searchResults[selectedIndex]) {
          handleSelect(searchResults[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        onOpenChange(false);
        break;
    }
  };

  // scroll selected item into view when it changes
  React.useEffect(() => {
    const el = itemRefs.current[selectedIndex];
    if (el) {
      try {
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } catch {}
    }
  }, [selectedIndex]);

  // Group results by category
  const groupedResults = React.useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    searchResults.forEach((result) => {
      if (!groups[result.category]) {
        groups[result.category] = [];
      }
      groups[result.category].push(result);
    });
    return groups;
  }, [searchResults]);

  if (!open) return null;

  return (
    <>
      {/* Overlay with fade-in */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm',
          'animate-in fade-in-0 duration-200',
        )}
        onClick={() => onOpenChange(false)}
      />

      {/* Modal with slide and fade animation */}
      <div
        className={cn(
          'fixed left-1/2 top-[20%] z-50 w-full max-w-xl -translate-x-1/2',
          'animate-in fade-in-0 slide-in-from-top-4 duration-200',
        )}
      >
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
          </div>

          {/* Search Results */}
          <div className="max-h-[400px] overflow-y-auto px-2 py-2">
            {searchResults.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No results found.
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(groupedResults).map(([category, results]) => (
                  <div key={category}>
                    <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {category}
                    </div>
                    <div className="space-y-0.5">
                      {results.map((result, index) => {
                        const globalIndex = searchResults.indexOf(result);
                        return (
                          <button
                            key={result.name}
                            ref={(el) => {
                              itemRefs.current[globalIndex] = el;
                            }}
                            onClick={() => handleSelect(result)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={cn(
                              'w-full rounded-md px-3 py-2 text-left transition-colors',
                              globalIndex === selectedIndex
                                ? 'bg-accent text-accent-foreground'
                                : 'hover:bg-accent/50',
                            )}
                          >
                            <div className="text-sm font-medium">
                              {result.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.path}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border bg-muted/30 px-4 py-2.5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-background px-1 font-mono text-[10px]">
                    ↑↓
                  </kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-background px-1 font-mono text-[10px]">
                    ↵
                  </kbd>
                  <span>Select</span>
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-background px-1 font-mono text-[10px]">
                  ESC
                </kbd>
                <span>Close</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
