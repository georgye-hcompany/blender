<script>
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'image_editor';
  export let windowId = '';
</script>

<div class="h-full flex flex-col bg-[#282828]" alt-id="Image Editor panel">
  <!-- Header -->
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px]" alt-id="Image Editor header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <!-- View menu -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white text-[#ccc] px-1" alt-id="View menu, second element in the Image Editor header">
        <span class="text-[14px] px-0.5 pointer-events-none">View</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
      </div>
      
      <!-- Image dropdown -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white text-[#ccc] px-1" alt-id="Image selection menu, third element in the Image Editor header">
        <i class="fa-solid fa-image text-[14px] text-[#ccc] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
      </div>

      <!-- File input group -->
      <div class="flex items-center gap-1">
        <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-[10px] py-[4px] text-[#ccc] min-w-[220px] justify-between relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-text" alt-id="Current image file name: untitled.png">
          <span class="text-[14px] tracking-wide relative top-[-1px] pointer-events-none">untitled.png</span>
          <div class="flex items-center gap-3 opacity-80">
            <!-- Shield icon -->
            <div class="w-5 h-5 bg-[#4772b3] rounded-sm flex items-center justify-center shadow-sm cursor-pointer" alt-id="Fake user indicator">
              <i class="fa-solid fa-shield-check text-[12px] text-white pointer-events-none"></i>
            </div>
            <i class="fa-regular fa-file text-[15px] hover:text-white cursor-pointer" alt-id="New image button"></i>
            <i class="fa-solid fa-clone text-[15px] hover:text-white cursor-pointer" alt-id="Copy image button"></i>
            <i class="fa-solid fa-xmark text-[15px] hover:text-white cursor-pointer ml-1" alt-id="Close image button"></i>
          </div>
        </div>
        <!-- Pin -->
        <i class="fa-solid fa-thumbtack text-[15px] text-[#ccc] hover:text-white cursor-pointer ml-1 transform -rotate-45" alt-id="Pin image button"></i>
      </div>
    </div>
    
    <!-- Right side -->
    <div class="flex items-center gap-0.5 text-[#a0a0a0]">
      <!-- Gizmos -->
      <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Gizmos toggle">
        <i class="fa-solid fa-bow-arrow text-[14px] pointer-events-none"></i>
      </div>
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0 mr-1" alt-id="Gizmos dropdown">
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Overlays -->
      <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Overlays toggle">
        <i class="fa-solid fa-circle-half-stroke text-[14px] pointer-events-none"></i>
      </div>
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0 mr-1" alt-id="Overlays dropdown">
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Image channels -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Image Channels toggle">
        <i class="fa-solid fa-image text-[14px] opacity-80 pointer-events-none"></i>
      </div>
    </div>
  </div>

  <!-- Main view -->
  <div class="flex-1 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center" alt-id="Image Editor main view">
    <!-- Left Toolbar -->
    <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] w-[50px]" alt-id="Image Editor left toolbar">
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] overflow-hidden">
        <!-- Sample Tool -->
        <div class="w-full h-[50px] rounded-t-[3px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer border-b border-[#1f1f1f]" alt-id="Sample color tool, currently active">
          <i class="fa-solid fa-eye-dropper text-[18px] text-white shadow-sm transform -rotate-45 pointer-events-none"></i>
        </div>
        <!-- Annotate Tool -->
        <div class="w-full h-[50px] rounded-b-[3px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer" alt-id="Annotate tool">
          <div class="relative flex flex-col items-center pointer-events-none">
            <i class="fa-solid fa-pen text-[16px] transform rotate-45 -translate-y-0.5 pointer-events-none"></i>
            <div class="w-[24px] h-[2px] bg-[#66cc99] rounded-full mt-1 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Controls -->
    <div class="absolute right-4 top-4 flex flex-col gap-2 z-20">
      <div class="w-[46px] h-[46px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom image button"><i class="fa-solid fa-magnifying-glass-plus text-[20px] pointer-events-none"></i></div>
      <div class="w-[46px] h-[46px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan image button"><i class="fa-solid fa-hand text-[20px] pointer-events-none"></i></div>
    </div>
    
    <!-- Right Expand Chevron -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-4 h-8 bg-[#282828]/50 flex items-center justify-center cursor-pointer hover:bg-[#333] rounded-l opacity-50 hover:opacity-100 transition-opacity" alt-id="Expand right sidebar button">
      <i class="fa-solid fa-chevron-left text-[10px] text-[#ccc] pointer-events-none"></i>
    </div>

    <!-- Image Content -->
    <div class="relative max-w-full max-h-full flex items-center justify-center p-4">
      <img src="https://picsum.photos/seed/blender/800/600" class="max-w-full max-h-full object-contain shadow-[0_0_15px_rgba(0,0,0,0.5)]" alt="Rendered studio image" />
    </div>
  </div>
</div>
