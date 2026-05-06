<script>
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Outliner editor panel">
  <!-- Header -->
  <div class="h-7 flex items-center px-2 justify-between text-[11px] border-b border-[#1f1f1f]" alt-id="Outliner header">
    <div class="flex items-center gap-2">
      <div class="cursor-pointer hover:text-white text-[#a0a0a0]" alt-id="Editor type selector: Outliner, first element in the Outliner header"><i class="fa-light fa-list-tree"></i></div>
      <div class="px-2 py-0.5 bg-[#1c1c1c] rounded border border-[#333] flex items-center gap-2 cursor-text text-[#a0a0a0] w-32" alt-id="Search outliner input field, second element in the Outliner header">
        <i class="fa-light fa-magnifying-glass"></i>
        <span>Search...</span>
      </div>
    </div>
    <div class="flex items-center gap-2 text-[#a0a0a0]">
       <div class="cursor-pointer hover:text-white" alt-id="Filter outliner button, third element in the Outliner header"><i class="fa-light fa-filter"></i></div>
    </div>
  </div>
  
  <div class="flex-1 overflow-y-auto py-1 px-0 text-[12px] bg-[#232323]" alt-id="Outliner tree view">
    <!-- Tree -->
    <div class="flex items-center gap-1 hover:bg-[#333] cursor-pointer py-[2px] px-2" alt-id="Scene Collection, first element in the Outliner tree">
      <i class="fa-solid fa-caret-down text-[10px] w-3 text-center text-[#ccc]"></i>
      <i class="fa-light fa-box-open text-[#a0a0a0]"></i>
      <span class="text-white">Scene Collection</span>
    </div>
    
    <div class="pl-5 flex flex-col">
      <div class="flex items-center gap-1 hover:bg-[#333] cursor-pointer py-[2px] px-1" alt-id="Camera object, first element in the Scene Collection">
        <i class="fa-solid fa-camera text-[#a0a0a0] w-4 text-center"></i>
        <span class="text-[#ccc]">Camera</span>
      </div>
      <div class="flex items-center gap-1 bg-[#4772b3] cursor-pointer py-[2px] px-1 rounded mx-1" alt-id="Cube.019 object, currently selected, second element in the Scene Collection">
        <i class="fa-solid fa-cube text-[#ccc] w-4 text-center"></i>
        <span class="text-white">Cube.019</span>
      </div>
      <div class="flex items-center gap-1 hover:bg-[#333] cursor-pointer py-[2px] px-1" alt-id="Light object, third element in the Scene Collection">
        <i class="fa-solid fa-lightbulb text-[#a0a0a0] w-4 text-center"></i>
        <span class="text-[#ccc]">Light</span>
      </div>
    </div>
  </div>
</div>
