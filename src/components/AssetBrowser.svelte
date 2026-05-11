<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'asset_browser';
  export let windowId = '';

  let isBrushLayout = false;
  let activeBrushTooltip = '';

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const val = urlParams.get(windowId) || '';
      if (val.includes('brush-layout') || windowId === 'window6') {
        isBrushLayout = true;
      }
      
      const openParam = urlParams.get('open') || '';
      const openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      const tooltipPrefix = `${windowId}-brush-tool-`;
      for (const state of openStates) {
        if (state.startsWith(tooltipPrefix) && state.endsWith('-tooltip')) {
          const toolSlug = state.substring(tooltipPrefix.length, state.length - '-tooltip'.length);
          activeBrushTooltip = toolSlug;
          break;
        }
      }
    }
  });

  function handleBrushToolClick(toolName) {
    const slug = toolName.toLowerCase().replace(/[\/ ]/g, '-');
    if (activeBrushTooltip === slug) {
      activeBrushTooltip = '';
    } else {
      activeBrushTooltip = slug;
    }
    
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      
      openStates = openStates.filter(s => !(s.startsWith(`${windowId}-brush-tool-`) && s.endsWith('-tooltip')));
      
      if (activeBrushTooltip) {
        openStates.push(`${windowId}-brush-tool-${activeBrushTooltip}-tooltip`);
      }
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  const brushItems = [
    { name: 'Blob', icon: 'fa-circle-dot', shortcut: 'Space Bar, 7' },
    { name: 'Clay', icon: 'fa-cube', shortcut: 'Space Bar, 3' },
    { name: 'Clay Strips', icon: 'fa-layer-group', shortcut: 'Space Bar, 4' },
    { name: 'Clay Thumb', icon: 'fa-hand-point-up', shortcut: '' },
    { name: 'Crease Polish', icon: 'fa-compress', shortcut: '' },
    { name: 'Create Sharp', icon: 'fa-pen-nib', shortcut: '' },
    { name: 'Draw', icon: 'fa-paintbrush', shortcut: 'Space Bar, 1' },
    { name: 'Draw Sharp', icon: 'fa-pen-nib', shortcut: 'Space Bar, 2' },
    { name: 'Inflate/Deflate', icon: 'fa-cloud', shortcut: 'Space Bar, 6' },
    { name: 'Layer', icon: 'fa-cubes', shortcut: 'Space Bar, 5' },
    { name: 'Full/Deepen', icon: 'fa-fill-drip', shortcut: '' },
    { name: 'Flatten', icon: 'fa-ruler-horizontal', shortcut: 'Space Bar, 0' },
    { name: 'Contrast', icon: 'fa-circle-half-stroke', shortcut: '' },
    { name: 'Plateu', icon: 'fa-window-minimize', shortcut: '' },
    { name: 'Scape Multiplane', icon: 'fa-gavel', shortcut: '' },
    { name: 'Scrape/Fill', icon: 'fa-eraser', shortcut: '' },
    { name: 'Smooth', icon: 'fa-droplet', shortcut: 'Space Bar, 9' },
    { name: 'Trim', icon: 'fa-scissors', shortcut: '' },
    { name: 'Boundary', icon: 'fa-border-all', shortcut: '' },
    { name: 'Elastic Grab', icon: 'fa-hand', shortcut: '' },
    { name: 'Elastic Snake Hook', icon: 'fa-worm', shortcut: '' },
    { name: 'Grab', icon: 'fa-hand', shortcut: 'G' },
    { name: 'Grab 2D', icon: 'fa-hand', shortcut: '' },
    { name: 'Grab Silhouette', icon: 'fa-hand', shortcut: '' },
    { name: 'Nudge', icon: 'fa-hand-holding', shortcut: '' },
    { name: 'Pinch/Magnify', icon: 'fa-compress-arrows-alt', shortcut: '' },
    { name: 'Pose', icon: 'fa-person-walking', shortcut: '' },
    { name: 'Pull', icon: 'fa-arrows-left-right', shortcut: '' },
    { name: 'Relax Pinch', icon: 'fa-compress-arrows-alt', shortcut: '' },
    { name: 'Relax Slide', icon: 'fa-arrows-left-right', shortcut: '' },
    { name: 'Snake Hook', icon: 'fa-worm', shortcut: 'K' },
    { name: 'Thumb', icon: 'fa-hand-point-up', shortcut: '' }
  ];

  const items = [
    { type: 'material', name: 'Boards - Basketweave', color: '#8b5a2b' },
    { type: 'material', name: 'Boards - Herringbone', color: '#a0522d' },
    { type: 'material', name: 'Planks - Herringbone', color: '#cd853f' },
    { type: 'material', name: 'Clay', color: '#d2b48c' },
    { type: 'material', name: 'Metal', color: '#777777' },
    { type: 'material', name: 'Porcelain - Black', color: '#1a1a1a' },
    { type: 'material', name: 'Porcelain - Teal', color: '#00ced1' },
    { type: 'material', name: 'Porcelain - White', color: '#f0f8ff' },
    { type: 'material', name: 'Concrete', color: '#a9a9a9' },
    { type: 'material', name: 'Plaster - Teal', color: '#48d1cc' },
    { type: 'material', name: 'Plaster - White', color: '#f5f5f5' },
    { type: 'material', name: 'Wood 1', color: '#6b4423' },
    { type: 'material', name: 'Wood 2', color: '#8b6508' },
    { type: 'material', name: 'Wood 3', color: '#b8860b' },
    { type: 'material', name: 'Wood 4', color: '#deb887' },
    { type: 'material', name: 'Wood 5', color: '#cd853f' },
    { type: 'material', name: 'Wood 6', color: '#8b4513' },
    { type: 'object', name: 'Art Supplies - Brushes', icon: 'fa-paint-brush' },
    { type: 'object', name: 'Art Supplies - Palette', icon: 'fa-palette' },
    { type: 'object', name: 'Easel', icon: 'fa-presentation-screen' },
    { type: 'object', name: 'Bird Cage', icon: 'fa-box' },
    { type: 'object', name: 'Curtains', icon: 'fa-person-booth' },
    { type: 'object', name: 'Mirror', icon: 'fa-rectangle-portrait' },
    { type: 'object', name: 'Rug', icon: 'fa-rug' },
    { type: 'object', name: 'Bench', icon: 'fa-chair' },
    { type: 'object', name: 'Desk', icon: 'fa-table' },
    { type: 'object', name: 'Display Case', icon: 'fa-cabinet-filing' },
    { type: 'object', name: 'Dresser', icon: 'fa-drawers' },
    { type: 'object', name: 'Ladder', icon: 'fa-stairs' },
    { type: 'object', name: 'Shelf', icon: 'fa-shelves' },
    { type: 'object', name: 'Stool Solid', icon: 'fa-chair-office' },
    { type: 'object', name: 'Table', icon: 'fa-table' },
    { type: 'object', name: 'Princess Chair', icon: 'fa-chair' },
    { type: 'object', name: 'Book', icon: 'fa-book' },
    { type: 'object', name: 'Cat in a Blanket', icon: 'fa-cat' },
    { type: 'object', name: 'Computer', icon: 'fa-computer' },
    { type: 'object', name: 'Tea Cup', icon: 'fa-mug-hot' },
    { type: 'object', name: 'Tea Pot', icon: 'fa-jug' },
    { type: 'object', name: 'Picture Frame - 1 Apple Orchard', icon: 'fa-image' },
    { type: 'object', name: 'Picture Frame - 1 Mountains Spring', icon: 'fa-image' },
    { type: 'object', name: 'Picture Frame - 2', icon: 'fa-image' },
    { type: 'object', name: 'Picture Frame - 4', icon: 'fa-image' },
    { type: 'object', name: 'Picture Frame - 5', icon: 'fa-image' },
    { type: 'object', name: 'Potted Plant - Muted', icon: 'fa-seedling' },
    { type: 'object', name: 'Potted Plant - Spider', icon: 'fa-seedling' }
  ];
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Bottom Asset Browser panel" appearance-id="dark panel occupying the bottom-left portion of the workspace in the default layout" location-id="bottom-left window (window1) of the main workspace grid" functionality-id="displays and organizes 3D assets for use in the scene" intent-id="browse and apply materials, objects, and other assets to the project">
  {#if isBrushLayout}
    <!-- Brush Layout Header -->
    <div class="h-[28px] flex items-center px-2 border-b border-[#1f1f1f] bg-[#282828] text-[#a0a0a0] text-[12px]" alt-id="Bottom Asset Browser brush layout header" appearance-id="28px dark header bar with editor selector, category tabs, and search field" location-id="top of the Asset Browser when in brush layout mode" functionality-id="provides navigation tabs and search for the brush asset layout" intent-id="filter and search brushes in the asset browser">
      <div class="flex items-center gap-2 h-full">
        <EditorSelector bind:editor={currentEditor} windowId={windowId} />
        
        <div class="flex items-center h-full ml-2">
          <div class="px-3 h-full flex items-center text-white bg-[#444] border-x border-[#1f1f1f] cursor-pointer" alt-id="All assets tab, currently selected" appearance-id="highlighted tab button labeled All in the brush layout header" location-id="first tab in the Asset Browser brush layout category tabs" functionality-id="shows all assets regardless of category" intent-id="view all available assets without category filtering">
            All
          </div>
          <div class="px-3 h-full flex items-center hover:bg-[#333] border-r border-[#1f1f1f] cursor-pointer" alt-id="General assets tab" appearance-id="tab button labeled General in the brush layout header" location-id="second tab in the Asset Browser brush layout category tabs" functionality-id="filters the asset list to show only general-purpose assets" intent-id="view only general-purpose assets">
            General
          </div>
          <div class="px-3 h-full flex items-center hover:bg-[#333] border-r border-[#1f1f1f] cursor-pointer" alt-id="Paint assets tab" appearance-id="tab button labeled Paint in the brush layout header" location-id="third tab in the Asset Browser brush layout category tabs" functionality-id="filters the asset list to show only paint-related assets" intent-id="view only paint brushes and assets">
            Paint
          </div>
          <div class="px-3 h-full flex items-center hover:bg-[#333] border-r border-[#1f1f1f] cursor-pointer" alt-id="Simulation assets tab" appearance-id="tab button labeled Simulation in the brush layout header" location-id="fourth tab in the Asset Browser brush layout category tabs" functionality-id="filters the asset list to show only simulation-related assets" intent-id="view only simulation assets">
            Simulation
          </div>
        </div>
      </div>
      
      <div class="flex-1"></div>
      
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white" alt-id="Assets count and display options" appearance-id="text showing asset count 38, list icon, and dropdown chevron" location-id="right side of the Asset Browser brush layout header" functionality-id="shows the number of assets and allows changing the display mode" intent-id="see how many assets are available and change the view style">
          <span class="pointer-events-none">38</span>
          <i class="fa-solid fa-list-ul text-[12px] opacity-80 pointer-events-none ml-1"></i>
          <i class="fa-solid fa-chevron-down text-[8px] opacity-70 pointer-events-none"></i>
        </div>
        
        <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
          <div class="px-2 py-1 flex items-center gap-2 w-48 text-[12px]">
            <i class="fa-light fa-magnifying-glass opacity-70"></i>
            <span class="opacity-60">Search</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Brush Layout Content -->
    <div class="flex-1 overflow-x-auto overflow-y-hidden bg-[#232323] p-1 flex items-center gap-1 relative" alt-id="Asset Browser brush horizontal list" appearance-id="dark horizontal row of small square brush icon buttons" location-id="main content area of the Asset Browser in brush layout mode" functionality-id="displays all available brush tools as clickable icon buttons" intent-id="quickly select a brush tool from the available options">
      {#each brushItems as tool}
        <div class="w-[50px] h-[50px] shrink-0 {activeBrushTooltip === tool.name.toLowerCase().replace(/[\/ ]/g, '-') ? 'bg-[#444]' : 'bg-[#333] hover:bg-[#444]'} rounded-[4px] border border-[#1f1f1f] flex flex-col items-center justify-center cursor-pointer group relative" on:click={() => handleBrushToolClick(tool.name)} alt-id="{tool.name} brush button" appearance-id="50x50 pixel square button with brush icon for {tool.name}" location-id="item in the Asset Browser brush horizontal list" functionality-id="selects the {tool.name} brush as the active tool" intent-id="switch to the {tool.name} brush for sculpting or painting">
           <i class="fa-solid {tool.icon} text-[20px] {activeBrushTooltip === tool.name.toLowerCase().replace(/[\/ ]/g, '-') ? 'text-white' : 'text-[#888] group-hover:text-[#aaa]'} pointer-events-none"></i>
           {#if activeBrushTooltip === tool.name.toLowerCase().replace(/[\/ ]/g, '-')}
             <div class="absolute bottom-[54px] left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white px-3 py-2 rounded shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-[#2a2a2a] z-50 whitespace-nowrap flex flex-col gap-1" alt-id="{tool.name} tool tooltip" appearance-id="dark floating tooltip showing the brush name and keyboard shortcut" location-id="above the {tool.name} brush button in the brush list" functionality-id="displays the name and shortcut for the {tool.name} brush tool" intent-id="identify the brush and learn its keyboard shortcut">
                <div class="text-[13px] pointer-events-none">{tool.name}</div>
                {#if tool.shortcut}
                  <div class="text-[11px] text-[#a0a0a0]">Shortcut: ⇧ {tool.shortcut}</div>
                {/if}
             </div>
           {/if}
        </div>
      {/each}
    </div>
  {:else}
    <!-- Default Asset Browser Header -->
    <div class="h-12 flex items-center px-4 border-b border-[#1f1f1f] justify-between text-[15px]" alt-id="Bottom Asset Browser header" appearance-id="48px dark header bar with editor selector, menu button, display options, search, and filter" location-id="top of the Asset Browser in default (non-brush) layout mode" functionality-id="provides navigation and filtering controls for the asset browser" intent-id="control how assets are displayed and searched">
    <div class="flex items-center gap-4">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Asset browser menu, second element in the bottom Asset Browser header" appearance-id="hamburger menu icon button in the Asset Browser header" location-id="second element from the left in the Asset Browser header" functionality-id="opens the Asset Browser menu with additional options" intent-id="access additional Asset Browser settings and commands">
        <i class="fa-solid fa-bars text-[18px] pointer-events-none"></i>
      </div>
    </div>
    <div class="flex items-center gap-3 text-[#a0a0a0]">
      <div class="cursor-pointer hover:text-white flex items-center gap-1.5" alt-id="Display settings button, third element in the bottom Asset Browser header" appearance-id="grid icon with a chevron dropdown in the Asset Browser header" location-id="third element from the left in the Asset Browser header" functionality-id="opens display settings for changing the asset grid view options" intent-id="customize how assets are displayed in the grid">
        <i class="fa-solid fa-table-cells-large text-[18px] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[11px] opacity-70 pointer-events-none"></i>
      </div>
      <div class="px-3 py-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] flex items-center gap-2.5 w-64 cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="Search assets input field, fourth element in the bottom Asset Browser header" appearance-id="dark input field with magnifying glass icon and Search placeholder text" location-id="fourth element from the left in the Asset Browser header" functionality-id="filters the displayed assets by text matching the search query" intent-id="find specific assets quickly by searching their names">
        <i class="fa-light fa-magnifying-glass opacity-70 text-[13px] pointer-events-none"></i>
        <span class="opacity-60 text-[14px] pointer-events-none">Search</span>
      </div>
      <div class="cursor-pointer hover:text-white flex items-center gap-1.5" alt-id="Filter assets button, fifth element in the bottom Asset Browser header" appearance-id="filter funnel icon with a chevron dropdown in the Asset Browser header" location-id="fifth element from the left in the Asset Browser header" functionality-id="opens filter options to narrow down displayed assets by type or tag" intent-id="filter assets to show only relevant types or categories">
        <i class="fa-light fa-filter text-[18px] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[11px] opacity-70 pointer-events-none"></i>
      </div>
      <div class="cursor-pointer hover:text-white ml-2" alt-id="Settings gear button, sixth element in the bottom Asset Browser header" appearance-id="gear settings icon in the Asset Browser header" location-id="sixth element from the left (rightmost) in the Asset Browser header" functionality-id="opens asset browser settings for configuration options" intent-id="configure the Asset Browser behavior and display preferences">
        <i class="fa-solid fa-gear text-[18px] pointer-events-none"></i>
      </div>
    </div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-72 border-r border-[#1f1f1f] bg-[#282828] p-3 flex flex-col text-[13px] overflow-y-auto" alt-id="Bottom Asset Browser sidebar" appearance-id="dark 288px wide left panel with library selector and catalog tree" location-id="left side of the Asset Browser main content area" functionality-id="shows the asset library selector and the catalog hierarchy for navigation" intent-id="navigate between asset libraries and filter by catalog">
      <div class="px-3 py-1.5 bg-[#282828] border border-[#3c3c3c] rounded flex items-center justify-between cursor-pointer hover:bg-[#333] mb-3" alt-id="Asset Library selector: Current File, first element in the bottom Asset Browser sidebar" appearance-id="dropdown button showing Current File with a chevron" location-id="top of the Asset Browser sidebar" functionality-id="selects which asset library to browse; currently showing assets from the current blend file" intent-id="switch between different asset libraries to browse">
        <span class="text-[#ccc] pointer-events-none">Current File</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
      </div>
      
      <div class="border border-[#3c3c3c] rounded bg-[#232323] p-1.5 flex flex-col gap-1 text-[13px]" alt-id="Asset catalogs tree" appearance-id="dark bordered panel showing a hierarchical tree of asset catalog folders" location-id="below the library selector in the Asset Browser sidebar" functionality-id="displays the catalog hierarchy and allows filtering assets by catalog" intent-id="navigate asset catalogs to find assets by category">
        <div class="py-1.5 px-2 cursor-pointer bg-[#4772b3] text-white rounded flex justify-between items-center" alt-id="All assets category, currently selected, first element in the catalogs tree" appearance-id="highlighted blue row labeled All with save and plus icons" location-id="first row in the asset catalogs tree" functionality-id="shows all assets from the current library without catalog filtering" intent-id="view all assets in the library without any category restriction">
          <div class="flex items-center gap-2 pointer-events-none">
            <i class="fa-solid fa-chevron-down text-[11px] w-4 text-center text-[#ccc] pointer-events-none"></i>
            <span class="pointer-events-none">All</span>
          </div>
          <div class="flex items-center gap-2 text-white opacity-80 pointer-events-none">
            <i class="fa-light fa-floppy-disk text-[14px] pointer-events-none"></i>
            <i class="fa-light fa-plus text-[14px] pointer-events-none"></i>
          </div>
        </div>
        
        <div class="flex">
          <div class="w-[9px] border-r border-[#444] ml-3"></div>
          <div class="flex-1 pl-2 flex flex-col gap-1 text-[#a0a0a0]">
            <div class="py-1.5 px-2 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-2" alt-id="Material catalog, second element in the catalogs tree" appearance-id="catalog row labeled Material with a right chevron, indented under All" location-id="second item in the asset catalogs tree, child of All" functionality-id="filters the asset grid to show only material assets" intent-id="find material assets quickly">
              <i class="fa-solid fa-chevron-right text-[11px] w-4 text-center pointer-events-none"></i> <span class="pointer-events-none">Material</span>
            </div>
            <div class="py-1.5 px-2 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-2" alt-id="Object catalog, third element in the catalogs tree" appearance-id="catalog row labeled Object with a right chevron, indented under All" location-id="third item in the asset catalogs tree, child of All" functionality-id="filters the asset grid to show only object assets" intent-id="find object assets quickly">
              <i class="fa-solid fa-chevron-right text-[11px] w-4 text-center pointer-events-none"></i> <span class="pointer-events-none">Object</span>
            </div>
          </div>
        </div>
        
        <div class="py-1.5 px-3 mt-1 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-3 text-[#a0a0a0]" alt-id="Unassigned assets category, fourth element in the catalogs tree" appearance-id="row with a dashed-file icon labeled Unassigned at the bottom of the catalog tree" location-id="fourth and last item in the asset catalogs tree" functionality-id="shows assets that have not been assigned to any catalog" intent-id="find and organize assets that have not been categorized">
          <i class="fa-light fa-file-dashed text-[14px] pointer-events-none"></i> <span class="pointer-events-none">Unassigned</span>
        </div>
      </div>
    </div>
    
    <!-- Grid -->
    <div class="flex-1 bg-[#282828] relative overflow-hidden" alt-id="Bottom Asset Browser main grid view" appearance-id="dark grid area displaying asset thumbnails with names" location-id="right portion of the Asset Browser main content area" functionality-id="displays asset thumbnails in a grid for browsing and selection" intent-id="browse and select assets visually from the asset library">
      <!-- Right panel toggle arrow -->
      <div class="absolute right-0 top-2 w-[14px] h-[22px] bg-[#3d3d3d] border-y border-l border-[#1f1f1f] rounded-l-sm flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] z-10" alt-id="Toggle right panel button" appearance-id="small dark chevron button on the right edge of the asset grid" location-id="far right edge of the Asset Browser main grid view area" functionality-id="toggles the visibility of the right panel in the asset browser" intent-id="show or hide the asset details panel on the right">
        <i class="fa-solid fa-chevron-left text-[8px] text-[#a0a0a0] pointer-events-none"></i>
      </div>

      <div class="absolute inset-0 p-3 overflow-y-auto">
        <div class="grid gap-x-2 gap-y-6" style="grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));">
          {#each items as item, i}
            <div class="flex flex-col items-center gap-[6px] cursor-pointer group" alt-id="{item.name} {item.type} asset, {i+1} element in the Asset Browser grid" appearance-id="{item.name} {item.type} asset thumbnail with name label at position {i+1} in the asset grid" location-id="item {i+1} in the Asset Browser main grid view" functionality-id="displays and selects the {item.name} {item.type} asset" intent-id="choose the {item.name} asset to use in the current scene">
              <!-- Square container -->
              <div class="w-[112px] h-[112px] relative flex items-center justify-center bg-[#333] rounded overflow-hidden pointer-events-none">
                {#if item.type === 'material'}
                  <!-- The material sphere -->
                  <div class="w-[96px] h-[96px] rounded-full shadow-[inset_-5px_-10px_20px_rgba(0,0,0,0.8),0_3px_6px_rgba(0,0,0,0.5)] border border-[#1f1f1f] group-hover:ring-2 group-hover:ring-[#4772b3] group-hover:ring-offset-1 group-hover:ring-offset-[#282828] overflow-hidden bg-cover bg-center pointer-events-none" style="background: radial-gradient(circle at 35% 25%, {item.color} 0%, #111 90%);">
                     <div class="absolute inset-0 bg-white opacity-[0.15] pointer-events-none" style="clip-path: ellipse(25% 15% at 30% 20%); filter: blur(1px);"></div>
                  </div>
                  <!-- Bottom left icon -->
                  <div class="absolute bottom-0 left-0 w-6 h-6 bg-[#232323] rounded-full flex items-center justify-center border border-[#1f1f1f] shadow-sm z-10 text-[#ccc] group-hover:text-white pointer-events-none">
                    <i class="fa-solid fa-circle-half-stroke text-[11px] pointer-events-none"></i>
                  </div>
                  <!-- Top right icon -->
                  <div class="absolute top-0 right-0 w-6 h-6 bg-[#232323] rounded-full flex items-center justify-center border border-[#1f1f1f] shadow-sm z-10 text-[#ccc] group-hover:text-white pointer-events-none">
                    <i class="fa-regular fa-pen-to-square text-[11px] pointer-events-none"></i>
                  </div>
                {:else}
                  <!-- Object placeholder -->
                  <div class="w-[96px] h-[96px] border border-[#1f1f1f] group-hover:ring-2 group-hover:ring-[#4772b3] group-hover:ring-offset-1 group-hover:ring-offset-[#282828] bg-[#2d2d2d] flex items-center justify-center pointer-events-none">
                    <i class="fa-solid {item.icon} text-4xl text-[#888] pointer-events-none"></i>
                  </div>
                  <!-- Bottom left icon -->
                  <div class="absolute bottom-0 left-0 w-6 h-6 bg-[#232323] rounded-full flex items-center justify-center border border-[#1f1f1f] shadow-sm z-10 text-[#ccc] group-hover:text-white pointer-events-none">
                    <i class="fa-solid fa-cube text-[11px] pointer-events-none"></i>
                  </div>
                  <!-- Top right icon -->
                  <div class="absolute top-0 right-0 w-6 h-6 bg-[#232323] rounded-full flex items-center justify-center border border-[#1f1f1f] shadow-sm z-10 text-[#ccc] group-hover:text-white pointer-events-none">
                    <i class="fa-regular fa-pen-to-square text-[11px] pointer-events-none"></i>
                  </div>
                {/if}
              </div>
              <span class="text-[11px] text-[#ccc] group-hover:text-white text-center px-1 leading-tight w-full truncate pointer-events-none">{item.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  {/if}
</div>
