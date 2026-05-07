<script>
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'asset_browser';
  export let windowId = '';

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

<div class="h-full flex flex-col bg-[#282828]" alt-id="Bottom Asset Browser panel">
  <!-- Header -->
  <div class="h-12 flex items-center px-4 border-b border-[#1f1f1f] justify-between text-[15px]" alt-id="Bottom Asset Browser header">
    <div class="flex items-center gap-4">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Asset browser menu, second element in the bottom Asset Browser header">
        <i class="fa-solid fa-bars text-[18px] pointer-events-none"></i>
      </div>
    </div>
    <div class="flex items-center gap-3 text-[#a0a0a0]">
      <div class="cursor-pointer hover:text-white flex items-center gap-1.5" alt-id="Display settings button, third element in the bottom Asset Browser header">
        <i class="fa-solid fa-table-cells-large text-[18px] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[11px] opacity-70 pointer-events-none"></i>
      </div>
      <div class="px-3 py-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] flex items-center gap-2.5 w-64 cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="Search assets input field, fourth element in the bottom Asset Browser header">
        <i class="fa-light fa-magnifying-glass opacity-70 text-[13px] pointer-events-none"></i>
        <span class="opacity-60 text-[14px] pointer-events-none">Search</span>
      </div>
      <div class="cursor-pointer hover:text-white flex items-center gap-1.5" alt-id="Filter assets button, fifth element in the bottom Asset Browser header">
        <i class="fa-light fa-filter text-[18px] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[11px] opacity-70 pointer-events-none"></i>
      </div>
      <div class="cursor-pointer hover:text-white ml-2" alt-id="Settings gear button, sixth element in the bottom Asset Browser header">
        <i class="fa-solid fa-gear text-[18px] pointer-events-none"></i>
      </div>
    </div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-72 border-r border-[#1f1f1f] bg-[#282828] p-3 flex flex-col text-[13px] overflow-y-auto" alt-id="Bottom Asset Browser sidebar">
      <div class="px-3 py-1.5 bg-[#282828] border border-[#3c3c3c] rounded flex items-center justify-between cursor-pointer hover:bg-[#333] mb-3" alt-id="Asset Library selector: Current File, first element in the bottom Asset Browser sidebar">
        <span class="text-[#ccc] pointer-events-none">Current File</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
      </div>
      
      <div class="border border-[#3c3c3c] rounded bg-[#232323] p-1.5 flex flex-col gap-1 text-[13px]" alt-id="Asset catalogs tree">
        <div class="py-1.5 px-2 cursor-pointer bg-[#4772b3] text-white rounded flex justify-between items-center" alt-id="All assets category, currently selected, first element in the catalogs tree">
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
            <div class="py-1.5 px-2 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-2" alt-id="Material catalog, second element in the catalogs tree">
              <i class="fa-solid fa-chevron-right text-[11px] w-4 text-center pointer-events-none"></i> <span class="pointer-events-none">Material</span>
            </div>
            <div class="py-1.5 px-2 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-2" alt-id="Object catalog, third element in the catalogs tree">
              <i class="fa-solid fa-chevron-right text-[11px] w-4 text-center pointer-events-none"></i> <span class="pointer-events-none">Object</span>
            </div>
          </div>
        </div>
        
        <div class="py-1.5 px-3 mt-1 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-3 text-[#a0a0a0]" alt-id="Unassigned assets category, fourth element in the catalogs tree">
          <i class="fa-light fa-file-dashed text-[14px] pointer-events-none"></i> <span class="pointer-events-none">Unassigned</span>
        </div>
      </div>
    </div>
    
    <!-- Grid -->
    <div class="flex-1 bg-[#282828] relative overflow-hidden" alt-id="Bottom Asset Browser main grid view">
      <!-- Right panel toggle arrow -->
      <div class="absolute right-0 top-2 w-[14px] h-[22px] bg-[#3d3d3d] border-y border-l border-[#1f1f1f] rounded-l-sm flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] z-10" alt-id="Toggle right panel button">
        <i class="fa-solid fa-chevron-left text-[8px] text-[#a0a0a0] pointer-events-none"></i>
      </div>

      <div class="absolute inset-0 p-3 overflow-y-auto">
        <div class="grid gap-x-2 gap-y-6" style="grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));">
          {#each items as item, i}
            <div class="flex flex-col items-center gap-[6px] cursor-pointer group" alt-id="{item.name} {item.type} asset, {i+1} element in the Asset Browser grid">
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
</div>
