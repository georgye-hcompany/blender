<script>
</script>

<div class="h-[42px] bg-[#202020] border-b border-[#151515] flex items-center justify-between text-[14px] select-none" alt-id="Main application top bar">
  <div class="flex items-center h-full">
    <div class="px-4 flex items-center h-full hover:bg-[#333] cursor-pointer" alt-id="Blender logo menu, first element in the main menu bar">
      <i class="fa-brands fa-neos text-[#ccc] text-[18px] pointer-events-none"></i>
    </div>
    <div class="flex h-full">
      {#each ['File', 'Edit', 'Render', 'Window', 'Help'] as item, i}
        <div class="px-4 flex items-center h-full hover:bg-[#333] cursor-pointer text-[#ccc]" alt-id="{item} menu, {i+2} element in the main menu bar"><span class="pointer-events-none">{item}</span></div>
      {/each}
    </div>
  </div>
  <div class="flex items-center h-full pr-4 gap-3">
    <!-- Material Datablock -->
    <div class="flex items-center h-[28px] rounded-[4px] border border-[#111] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" alt-id="Material datablock selector">
      <div class="flex items-center gap-1.5 px-2 h-full bg-[#2a2a2a] border-r border-[#111] cursor-pointer hover:bg-[#333]" alt-id="Material icon and dropdown">
        <i class="fa-solid fa-shapes text-[14px] text-[#ccc] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] pointer-events-none"></i>
      </div>
      <div class="flex items-center px-2.5 h-full w-[160px] justify-between bg-[#1a1a1a] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Material name input field">
        <span class="text-[#eee] text-[14px] pointer-events-none">Cube Diorama</span>
        <i class="fa-solid fa-thumbtack text-[13px] text-[#888] hover:text-[#ccc] cursor-pointer transform -rotate-45" alt-id="Pin material"></i>
      </div>
      <div class="px-2 h-full flex items-center bg-[#3d3d3d] border-l border-[#111] cursor-pointer hover:bg-[#4d4d4d]" alt-id="New material button">
        <i class="fa-regular fa-copy text-[14px] text-[#eee] pointer-events-none"></i>
      </div>
      <div class="px-2 h-full flex items-center bg-[#2a2a2a] border-l border-[#111] cursor-pointer hover:bg-[#333]" alt-id="Unlink material button">
        <i class="fa-light fa-xmark text-[16px] text-[#555] hover:text-[#999] pointer-events-none"></i>
      </div>
    </div>

    <!-- World Datablock -->
    <div class="flex items-center h-[28px] rounded-[4px] border border-[#111] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" alt-id="World environment datablock selector">
      <div class="flex items-center gap-1.5 px-2 h-full bg-[#2a2a2a] border-r border-[#111] cursor-pointer hover:bg-[#333]" alt-id="World icon and dropdown">
        <i class="fa-light fa-images text-[14px] text-[#ccc] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] pointer-events-none"></i>
      </div>
      <div class="flex items-center px-2.5 h-full w-[110px] bg-[#1a1a1a] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="World name input field">
        <span class="text-[#eee] text-[14px] pointer-events-none">Studio</span>
      </div>
      <div class="px-2 h-full flex items-center bg-[#3d3d3d] border-l border-[#111] cursor-pointer hover:bg-[#4d4d4d]" alt-id="New world button">
        <i class="fa-regular fa-copy text-[14px] text-[#eee] pointer-events-none"></i>
      </div>
      <div class="px-2 h-full flex items-center bg-[#2a2a2a] border-l border-[#111] cursor-pointer hover:bg-[#333]" alt-id="Unlink world button">
        <i class="fa-light fa-xmark text-[16px] text-[#555] hover:text-[#999] pointer-events-none"></i>
      </div>
    </div>
  </div>
</div>
