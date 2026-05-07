<script>
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'properties';
  export let windowId = '';
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="Properties editor panel">
  <!-- Header -->
  <div class="h-12 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-4 justify-between text-[15px]" alt-id="Properties header">
    <EditorSelector bind:editor={currentEditor} windowId={windowId} />
    
    <div class="flex-1 flex justify-center items-center px-5">
      <div class="flex items-center gap-2.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] px-4 py-1.5 w-[240px] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] text-[#a0a0a0]" alt-id="Search properties input field">
        <i class="fa-light fa-magnifying-glass text-[15px] opacity-70 pointer-events-none"></i>
        <span class="text-[14px] opacity-60 pointer-events-none">Search</span>
      </div>
    </div>
    
    <div class="flex items-center cursor-pointer hover:text-white text-[#a0a0a0] px-3 py-1.5 hover:bg-[#333] rounded" alt-id="Filter properties button">
      <i class="fa-solid fa-chevron-down text-[11px] pointer-events-none"></i>
    </div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Left vertical tabs -->
    <div class="w-[44px] bg-[#1e1e1e] flex flex-col items-center pt-3 gap-1.5 text-[#a0a0a0] text-[18px] border-r border-[#151515]" alt-id="Properties sidebar tabs">
      <div class="w-full flex justify-center py-2 cursor-pointer text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm" alt-id="Tool"><i class="fa-solid fa-screwdriver-wrench"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer hover:text-white" alt-id="Render"><i class="fa-solid fa-camera-retro"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer hover:text-white" alt-id="Output"><i class="fa-solid fa-print"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer hover:text-white" alt-id="View Layer"><i class="fa-solid fa-layer-group"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer hover:text-white" alt-id="Scene"><i class="fa-solid fa-clapperboard"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#cc6666] hover:text-[#ff8888]" alt-id="World"><i class="fa-solid fa-globe"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer hover:text-white" alt-id="Collection"><i class="fa-solid fa-box-archive"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#e68a00] hover:text-[#ffaa33]" alt-id="Object"><i class="fa-solid fa-square-dashed"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#4772b3] hover:text-[#6699ff]" alt-id="Modifiers"><i class="fa-solid fa-wrench"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#4772b3] hover:text-[#6699ff]" alt-id="Particles"><i class="fa-solid fa-circle-nodes"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#4772b3] hover:text-[#6699ff]" alt-id="Physics"><i class="fa-solid fa-atom"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#4772b3] hover:text-[#6699ff]" alt-id="Constraints"><i class="fa-solid fa-link"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#33cc66] hover:text-[#66ff99]" alt-id="Data"><i class="fa-solid fa-draw-polygon"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#cc6666] hover:text-[#ff8888]" alt-id="Material"><i class="fa-solid fa-circle-quarter"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#cc6666] hover:text-[#ff8888]" alt-id="Texture"><i class="fa-solid fa-chess-board"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer hover:text-white" alt-id="Properties panel settings"><i class="fa-solid fa-caret-down text-[12px]"></i></div>
    </div>
    
    <!-- Main content -->
    <div class="flex-1 bg-[#282828] flex flex-col text-[14px] overflow-hidden" alt-id="Properties main content view">
      <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        
        <!-- Tool Header -->
        <div class="flex items-center gap-3">
          <div class="relative w-10 h-10 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90 rounded-[3px]" alt-id="Select Box tool icon">
            <i class="fa-solid fa-arrow-pointer text-[18px] text-white shadow-sm transform -translate-x-0.5"></i>
          </div>
          <span class="text-[#ccc] text-[16px] font-medium">Select Box</span>
        </div>
        
        <!-- Selection modes -->
        <div class="flex items-center gap-1.5">
          <div class="w-9 h-9 bg-[#4772b3] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Set">
            <i class="fa-regular fa-square-dashed text-[20px] text-white"></i>
          </div>
          <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Extend">
            <i class="fa-regular fa-object-union text-[20px] text-[#a0a0a0]"></i>
          </div>
          <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Subtract">
            <i class="fa-regular fa-object-subtract text-[20px] text-[#a0a0a0]"></i>
          </div>
          <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Difference">
            <i class="fa-regular fa-object-exclude text-[20px] text-[#a0a0a0]"></i>
          </div>
          <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Intersect">
            <i class="fa-regular fa-object-intersect text-[20px] text-[#a0a0a0]"></i>
          </div>
        </div>
        
        <!-- Options Accordion -->
        <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden mt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Options accordion, expanded">
            <div class="flex items-center gap-2.5">
              <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
              <span class="font-medium text-[#ccc] text-[15px]">Options</span>
            </div>
            <div class="flex items-center gap-[2.5px] opacity-40">
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
            </div>
          </div>
          
          <div class="p-3 bg-[#282828] border-t border-[#1f1f1f]">
            <!-- Transform Sub-Accordion -->
            <div class="flex flex-col">
              <div class="flex items-center gap-2.5 px-1 py-1.5 cursor-pointer hover:text-white text-[#ccc]" alt-id="Transform sub-accordion, expanded">
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center"></i>
                <span class="text-[14px]">Transform</span>
              </div>
              
              <div class="flex pl-10 py-3">
                <span class="text-[#a0a0a0] w-28 pt-0.5 text-[14px]">Affect Only</span>
                <div class="flex flex-col gap-2.5">
                  <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Origins checkbox">
                    <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                    <span class="text-[#ccc] text-[14px]">Origins</span>
                  </div>
                  <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Locations checkbox">
                    <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                    <span class="text-[#ccc] text-[14px]">Locations</span>
                  </div>
                  <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Parents checkbox">
                    <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                    <span class="text-[#ccc] text-[14px]">Parents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Workspace Accordion -->
        <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Workspace accordion, collapsed">
            <div class="flex items-center gap-2.5">
              <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
              <span class="font-medium text-[#ccc] text-[15px]">Workspace</span>
            </div>
            <div class="flex items-center gap-[2.5px] opacity-40">
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>