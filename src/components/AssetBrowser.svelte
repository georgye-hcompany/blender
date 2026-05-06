<script>
  const materials = [
    { name: 'Boards - Basketweave', color: '#8b5a2b' },
    { name: 'Boards - Herringbone', color: '#a0522d' },
    { name: 'Planks - Herringbone', color: '#cd853f' },
    { name: 'Clay', color: '#d2b48c' },
    { name: 'Metal', color: '#777777' },
    { name: 'Porcelain - Black', color: '#1a1a1a' },
    { name: 'Porcelain - Teal', color: '#00ced1' },
    { name: 'Porcelain - White', color: '#f0f8ff' },
    { name: 'Concrete', color: '#a9a9a9' },
    { name: 'Plaster - Teal', color: '#48d1cc' },
    { name: 'Plaster - White', color: '#f5f5f5' },
    { name: 'Wood 1', color: '#6b4423' },
    { name: 'Wood 2', color: '#8b6508' },
    { name: 'Wood 3', color: '#b8860b' },
    { name: 'Wood 4', color: '#deb887' },
    { name: 'Wood 5', color: '#cd853f' },
    { name: 'Wood 6', color: '#8b4513' }
  ];
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Asset Browser editor panel">
  <!-- Header -->
  <div class="h-8 flex items-center px-2 border-b border-[#1f1f1f] justify-between text-[11px]" alt-id="Asset Browser header">
    <div class="flex items-center gap-2">
      <div class="px-1.5 py-[2px] bg-[#282828] border border-[#3c3c3c] rounded hover:bg-[#333] cursor-pointer flex items-center gap-1 text-[#ccc]" alt-id="Editor type selector: Asset Browser, first element in the Asset Browser header">
        <i class="fa-light fa-books"></i>
        <i class="fa-solid fa-chevron-down text-[8px] text-[#a0a0a0]"></i>
      </div>
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Asset browser menu, second element in the Asset Browser header">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <div class="flex items-center gap-[6px] text-[#a0a0a0]">
      <div class="cursor-pointer hover:text-white flex items-center gap-1" alt-id="Display settings button, third element in the Asset Browser header">
        <i class="fa-solid fa-table-cells-large"></i>
        <i class="fa-solid fa-chevron-down text-[8px] opacity-70"></i>
      </div>
      <div class="px-2 py-[2px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] flex items-center gap-[6px] w-40 cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="Search assets input field, fourth element in the Asset Browser header">
        <i class="fa-light fa-magnifying-glass opacity-70 text-[10px]"></i>
        <span class="opacity-60 text-[11px]">Search</span>
      </div>
      <div class="cursor-pointer hover:text-white flex items-center gap-1" alt-id="Filter assets button, fifth element in the Asset Browser header">
        <i class="fa-light fa-filter"></i>
        <i class="fa-solid fa-chevron-down text-[8px] opacity-70"></i>
      </div>
      <div class="cursor-pointer hover:text-white ml-1" alt-id="Settings gear button, sixth element in the Asset Browser header">
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-72 border-r border-[#1f1f1f] bg-[#282828] p-3 flex flex-col text-[13px] overflow-y-auto" alt-id="Asset Browser sidebar">
      <div class="px-3 py-1.5 bg-[#282828] border border-[#3c3c3c] rounded flex items-center justify-between cursor-pointer hover:bg-[#333] mb-3" alt-id="Asset Library selector: Current File, first element in the Asset Browser sidebar">
        <span class="text-[#ccc]">Current File</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0]"></i>
      </div>
      
      <div class="border border-[#3c3c3c] rounded bg-[#232323] p-1.5 flex flex-col gap-1 text-[13px]" alt-id="Asset catalogs tree">
        <div class="py-1.5 px-2 cursor-pointer hover:bg-[#333] rounded text-[#ccc] flex justify-between items-center" alt-id="All assets category, first element in the catalogs tree">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-chevron-down text-[11px] w-4 text-center"></i>
            <span>All</span>
          </div>
          <div class="flex items-center gap-2 text-[#a0a0a0]">
            <i class="fa-light fa-floppy-disk text-[14px]"></i>
            <i class="fa-light fa-plus text-[14px]"></i>
          </div>
        </div>
        
        <div class="flex">
          <div class="w-[9px] border-r border-[#444] ml-3"></div>
          <div class="flex-1 pl-2 flex flex-col gap-1 text-[#a0a0a0]">
            <div class="py-1.5 px-2 cursor-pointer bg-[#4772b3] text-white rounded flex items-center gap-2" alt-id="Material catalog, currently selected, second element in the catalogs tree">
              <i class="fa-solid fa-chevron-right text-[11px] w-4 text-center text-[#ccc]"></i> Material
            </div>
            <div class="py-1.5 px-2 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-2" alt-id="Object catalog, third element in the catalogs tree">
              <i class="fa-solid fa-chevron-right text-[11px] w-4 text-center"></i> Object
            </div>
          </div>
        </div>
        
        <div class="py-1.5 px-3 mt-1 cursor-pointer hover:bg-[#333] hover:text-[#ccc] rounded flex items-center gap-3 text-[#a0a0a0]" alt-id="Unassigned assets category, fourth element in the catalogs tree">
          <i class="fa-light fa-file-dashed text-[14px]"></i> Unassigned
        </div>
      </div>
    </div>
    <!-- Grid -->
    <div class="flex-1 bg-[#282828] relative overflow-hidden" alt-id="Asset Browser main grid view">
      <!-- Right panel toggle arrow -->
      <div class="absolute right-0 top-4 w-[14px] h-[22px] bg-[#3d3d3d] border-y border-l border-[#1f1f1f] rounded-l-sm flex items-center justify-center cursor-pointer hover:bg-[#4d4d4d] z-10" alt-id="Toggle right panel button">
        <i class="fa-solid fa-chevron-left text-[8px] text-[#a0a0a0]"></i>
      </div>

      <div class="absolute inset-0 p-4 overflow-y-auto">
        <div class="grid gap-x-2 gap-y-6" style="grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));">
          {#each materials as mat, i}
            <div class="flex flex-col items-center gap-[6px] cursor-pointer group" alt-id="{mat.name} material asset, {i+1} element in the Asset Browser grid">
              <!-- Square container for positioning corner icons outside the sphere -->
              <div class="w-[104px] h-[104px] relative">
                <!-- The actual sphere -->
                <div class="absolute inset-0 rounded-full shadow-[inset_-5px_-10px_25px_rgba(0,0,0,0.8),0_5px_10px_rgba(0,0,0,0.5)] border border-[#1f1f1f] group-hover:ring-2 group-hover:ring-[#4772b3] group-hover:ring-offset-2 group-hover:ring-offset-[#282828] overflow-hidden bg-cover bg-center" style="background: radial-gradient(circle at 35% 25%, {mat.color} 0%, #111 90%);">
                   <div class="absolute inset-0 bg-white opacity-[0.15]" style="clip-path: ellipse(25% 15% at 30% 20%); filter: blur(2px);"></div>
                </div>
                <!-- Bottom left icon -->
                <div class="absolute -bottom-1 -left-1 w-5 h-5 bg-[#232323] rounded-full flex items-center justify-center border border-[#1f1f1f] shadow-sm z-10 text-[#ccc] group-hover:text-white">
                  <i class="fa-solid fa-circle-half-stroke text-[10px]"></i>
                </div>
                <!-- Top right icon -->
                <div class="absolute top-0 right-0 w-5 h-5 bg-[#232323] rounded-full flex items-center justify-center border border-[#1f1f1f] shadow-sm z-10 text-[#ccc] group-hover:text-white">
                  <i class="fa-regular fa-pen-to-square text-[10px]"></i>
                </div>
              </div>
              <span class="text-[11px] text-[#ccc] group-hover:text-white text-center px-1 leading-tight">{mat.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
