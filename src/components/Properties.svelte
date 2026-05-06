<script>
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Properties editor panel">
  <!-- Header -->
  <div class="h-7 flex items-center px-2 gap-2 text-[11px] border-b border-[#1f1f1f]" alt-id="Properties header">
    <div class="cursor-pointer hover:text-white text-[#a0a0a0]" alt-id="Editor type selector: Properties, first element in the Properties header"><i class="fa-light fa-sliders"></i></div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Left vertical tabs -->
    <div class="w-8 border-r border-[#1f1f1f] bg-[#232323] flex flex-col items-center py-2 gap-[10px] text-[#a0a0a0] text-[13px]" alt-id="Properties sidebar tabs">
      <div class="cursor-pointer hover:text-white" alt-id="Active Tool and Workspace settings tab, first element in the Properties tabs"><i class="fa-light fa-wrench"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Render Properties tab, second element in the Properties tabs"><i class="fa-light fa-camera-retro"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Output Properties tab, third element in the Properties tabs"><i class="fa-light fa-print"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="View Layer Properties tab, fourth element in the Properties tabs"><i class="fa-light fa-layer-group"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Scene Properties tab, fifth element in the Properties tabs"><i class="fa-light fa-clapperboard"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="World Properties tab, sixth element in the Properties tabs"><i class="fa-light fa-globe"></i></div>
      <div class="cursor-pointer text-[#4772b3]" alt-id="Object Properties tab, currently selected, seventh element in the Properties tabs"><i class="fa-solid fa-square"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Modifiers tab, eighth element in the Properties tabs"><i class="fa-light fa-wrench"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Particles tab, ninth element in the Properties tabs"><i class="fa-light fa-sparkles"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Physics Properties tab, tenth element in the Properties tabs"><i class="fa-light fa-atom"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Object Constraint Properties tab, eleventh element in the Properties tabs"><i class="fa-light fa-link"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Object Data Properties tab, twelfth element in the Properties tabs"><i class="fa-light fa-triangle"></i></div>
      <div class="cursor-pointer hover:text-white" alt-id="Material Properties tab, thirteenth element in the Properties tabs"><i class="fa-light fa-circle"></i></div>
    </div>
    <!-- Main content -->
    <div class="flex-1 bg-[#282828] flex flex-col text-[11px] overflow-hidden" alt-id="Properties main content view">
      <!-- Top section with object name -->
      <div class="p-2 border-b border-[#1f1f1f] flex items-center gap-2">
        <i class="fa-solid fa-cube text-[#ccc]"></i>
        <div class="flex-1 bg-[#1c1c1c] border border-[#333] px-2 py-[2px] rounded cursor-text hover:border-[#555]" alt-id="Object name input field">Cube.019</div>
      </div>
      <!-- Accordion sections -->
      <div class="flex-1 overflow-y-auto p-1 pr-2">
        <div class="flex flex-col gap-1">
          <!-- Transform section -->
          <div class="border border-[#1f1f1f] rounded overflow-hidden">
            <div class="bg-[#333] px-2 py-1 flex items-center gap-1 cursor-pointer" alt-id="Transform panel header, expanded">
              <i class="fa-solid fa-caret-down text-[10px] w-3 text-[#ccc]"></i>
              <span class="font-semibold text-[#ccc]">Transform</span>
            </div>
            <div class="p-2 bg-[#282828] flex flex-col gap-1">
              <!-- Location -->
              <div class="flex items-center gap-2">
                <span class="w-16 text-right text-[#a0a0a0]">Location X</span>
                <div class="flex-1 bg-[#1c1c1c] border border-[#333] px-2 py-[2px] rounded cursor-ew-resize hover:bg-[#222]" alt-id="Location X input field">
                  <span class="text-[#ccc]">0.00000 m</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-16 text-right text-[#a0a0a0]">Y</span>
                <div class="flex-1 bg-[#1c1c1c] border border-[#333] px-2 py-[2px] rounded cursor-ew-resize hover:bg-[#222]" alt-id="Location Y input field">
                  <span class="text-[#ccc]">0.00000 m</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-16 text-right text-[#a0a0a0]">Z</span>
                <div class="flex-1 bg-[#1c1c1c] border border-[#333] px-2 py-[2px] rounded cursor-ew-resize hover:bg-[#222]" alt-id="Location Z input field">
                  <span class="text-[#ccc]">0.00000 m</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Relations section -->
          <div class="bg-[#333] px-2 py-1 flex items-center gap-1 cursor-pointer rounded" alt-id="Relations panel header, collapsed">
            <i class="fa-solid fa-caret-right text-[10px] w-3 text-[#a0a0a0]"></i>
            <span class="font-semibold text-[#ccc]">Relations</span>
          </div>
          <!-- Collections section -->
          <div class="bg-[#333] px-2 py-1 flex items-center gap-1 cursor-pointer rounded" alt-id="Collections panel header, collapsed">
            <i class="fa-solid fa-caret-right text-[10px] w-3 text-[#a0a0a0]"></i>
            <span class="font-semibold text-[#ccc]">Collections</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
