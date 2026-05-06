<script>
</script>

<div class="h-8 bg-[#202020] border-b border-[#151515] flex items-center justify-between text-[12px] select-none" alt-id="Main application top bar">
  <div class="flex items-center h-full">
    <div class="px-3 flex items-center h-full hover:bg-[#333] cursor-pointer" alt-id="Blender logo menu, first element in the main menu bar">
      <i class="fa-brands fa-neos text-[#ccc]"></i>
    </div>
    <div class="flex h-full">
      {#each ['File', 'Edit', 'Render', 'Window', 'Help'] as item, i}
        <div class="px-3 flex items-center h-full hover:bg-[#333] cursor-pointer text-[#ccc]" alt-id="{item} menu, {i+2} element in the main menu bar">{item}</div>
      {/each}
    </div>
  </div>
  <div class="flex items-center h-full overflow-hidden text-[11px]">
    {#each ['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Texture Paint', 'Shading', 'Animation', 'Rendering', 'Compositing', 'Geometry Nodes', 'Scripting'] as tab, i}
      <div class="px-3 flex items-center h-full cursor-pointer {tab === 'Shading' ? 'bg-[#3d3d3d] text-white' : 'text-[#a0a0a0] hover:text-[#ccc] hover:bg-[#333]'}" alt-id="{tab} workspace tab, {i+1} element in the workspace tabs">{tab}</div>
    {/each}
  </div>
  <div class="flex items-center h-full pr-2 gap-4 text-[11px]">
    <div class="flex items-center gap-2 cursor-pointer hover:text-white text-[#a0a0a0]" alt-id="Scene selection dropdown">
      <i class="fa-light fa-clapperboard"></i>
      <span class="text-[#ccc]">Scene</span>
    </div>
    <div class="flex items-center gap-2 cursor-pointer hover:text-white text-[#a0a0a0]" alt-id="View Layer selection dropdown">
      <i class="fa-light fa-layer-group"></i>
      <span class="text-[#ccc]">View Layer</span>
    </div>
  </div>
</div>
