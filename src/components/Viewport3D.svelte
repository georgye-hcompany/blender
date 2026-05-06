<script>
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="3D Viewport editor panel">
  <!-- Header -->
  <div class="h-8 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[11px]" alt-id="3D Viewport header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1 px-1.5 py-[2px] cursor-pointer hover:bg-[#333] border border-transparent hover:border-[#3c3c3c] rounded text-[#a0a0a0]" alt-id="Editor type selector: 3D Viewport, first element in the 3D Viewport header">
        <i class="fa-light fa-cube text-[12px] text-white"></i>
        <i class="fa-solid fa-chevron-down text-[8px] opacity-70"></i>
      </div>
      <div class="flex items-center gap-1 px-1.5 py-[2px] bg-[#282828] border border-[#3c3c3c] rounded cursor-pointer hover:bg-[#333]" alt-id="Interaction mode selector: Object Mode, second element in the 3D Viewport header">
        <div class="w-3 h-3 rounded-full border border-white flex items-center justify-center"><div class="w-1.5 h-1.5 bg-white rounded-full"></div></div>
        <span class="text-[#ccc] px-0.5">Object Mode</span>
        <i class="fa-solid fa-chevron-down text-[8px] text-[#a0a0a0]"></i>
      </div>
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1 ml-1" alt-id="Viewport menu, third element in the 3D Viewport header">
        <i class="fa-solid fa-bars text-[12px]"></i>
      </div>
    </div>
    
    <!-- Middle tools -->
    <div class="flex flex-1 items-center justify-center gap-2">
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Transform Orientation: Global">
          <i class="fa-light fa-arrows-up-down-left-right text-[12px]"></i>
          <span class="text-[#ccc]">Global</span>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Transform Pivot Point">
          <i class="fa-solid fa-link text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Snap toggle">
          <i class="fa-solid fa-magnet text-[#ccc] text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Snap options dropdown">
          <i class="fa-solid fa-square-dashed text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Proportional Editing toggle">
          <i class="fa-solid fa-bullseye text-[#ccc] text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Proportional Editing options dropdown">
          <i class="fa-regular fa-bell text-[12px]"></i>
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
    </div>
    
    <!-- Right side tools -->
    <div class="flex items-center gap-2 text-[#a0a0a0]">
      <!-- Object Types Visibility -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Object Types Visibility settings">
        <i class="fa-solid fa-eye text-[12px]"></i>
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>

      <!-- Viewport Gizmos and Overlays -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] rounded-l" alt-id="Viewport Gizmos toggle">
          <i class="fa-solid fa-bow-arrow text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] border-l-0" alt-id="Viewport Gizmos dropdown">
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] border-l-0" alt-id="Viewport Overlays toggle">
          <i class="fa-solid fa-layer-group text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded-r border-l-0" alt-id="Viewport Overlays dropdown">
          <i class="fa-solid fa-chevron-down text-[8px]"></i>
        </div>
      </div>
      
      <!-- Toggle X-Ray -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded" alt-id="Toggle X-Ray">
        <i class="fa-solid fa-clone text-[12px]"></i>
      </div>

      <!-- Shading Modes -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-l" alt-id="Wireframe shading mode">
          <i class="fa-light fa-globe text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] border-l-0" alt-id="Solid shading mode">
          <i class="fa-solid fa-circle text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2 py-[2px] border-l-0" alt-id="Material Preview shading mode, currently active">
          <i class="fa-solid fa-circle-half-stroke text-[12px]"></i>
        </div>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2 py-[2px] rounded-r border-l-0" alt-id="Rendered shading mode">
          <i class="fa-regular fa-circle text-[12px]"></i>
        </div>
      </div>
      
      <!-- Shading dropdown -->
      <div class="flex items-center gap-1 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1 py-[2px] rounded" alt-id="Shading dropdown">
        <i class="fa-solid fa-chevron-down text-[8px]"></i>
      </div>
    </div>
  </div>
  
  <!-- Viewport Content -->
  <div class="flex-1 relative overflow-hidden bg-[#1c1c1c] flex items-center justify-center">
    
    <!-- Left Toolbar (T-Panel) -->
    <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px]" alt-id="Viewport left toolbar">
      <!-- Handle -->
      <div class="absolute -right-3 top-2 w-[12px] h-[28px] bg-[#282828] bg-opacity-95 rounded-r flex items-center justify-center cursor-ew-resize border border-[#1f1f1f] border-l-0 shadow-md">
        <i class="fa-solid fa-chevron-left text-[8px] text-[#a0a0a0]"></i>
      </div>

      <!-- Group 1 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-[42px]">
        <div class="w-full h-[42px] rounded-t-[3px] bg-[#4772b3] flex items-center justify-center text-white cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Select Box tool, currently active, first element in the viewport toolbar">
          <div class="relative w-6 h-6 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90">
            <i class="fa-solid fa-arrow-pointer text-[12px] text-white shadow-sm transform -translate-x-0.5"></i>
          </div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-white/80"></div>
        </div>
        <div class="w-full h-[42px] rounded-b-[3px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Cursor tool, second element in the viewport toolbar">
          <i class="fa-regular fa-crosshairs text-[20px]"></i>
        </div>
      </div>
      
      <!-- Group 2 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-[42px]">
        <div class="w-full h-[42px] hover:bg-[#444] rounded-t-[3px] flex items-center justify-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Move tool, third element in the viewport toolbar">
          <i class="fa-solid fa-arrows-up-down-left-right text-[18px]"></i>
        </div>
        <div class="w-full h-[42px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Rotate tool, fourth element in the viewport toolbar">
          <i class="fa-solid fa-rotate text-[18px]"></i>
        </div>
        <div class="w-full h-[42px] hover:bg-[#444] flex items-center justify-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Scale tool, fifth element in the viewport toolbar">
          <div class="relative flex items-center justify-center">
            <i class="fa-regular fa-square text-[18px]"></i>
            <i class="fa-solid fa-arrow-up-right text-[10px] absolute top-[-3px] right-[-5px]"></i>
          </div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[42px] hover:bg-[#444] rounded-b-[3px] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Transform tool, sixth element in the viewport toolbar">
          <div class="relative flex items-center justify-center">
            <i class="fa-solid fa-arrows-up-down-left-right text-[18px] opacity-70"></i>
            <div class="absolute w-3 h-3 bg-[#ccc] rounded-full border-[2px] border-[#282828]"></div>
          </div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
      </div>
      
      <!-- Group 3 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-[42px]">
        <div class="w-full h-[42px] hover:bg-[#444] rounded-t-[3px] flex items-center justify-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Annotate tool, seventh element in the viewport toolbar">
          <div class="relative flex flex-col items-center">
            <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-0.5"></i>
            <div class="w-5 h-[2px] bg-[#66cc99] rounded-full mt-0.5"></div>
          </div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[42px] hover:bg-[#444] rounded-b-[3px] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Measure tool, eighth element in the viewport toolbar">
          <div class="flex items-end text-[#ccc]">
            <i class="fa-solid fa-ruler-vertical text-[16px]"></i>
            <i class="fa-solid fa-ruler-horizontal text-[16px]"></i>
          </div>
        </div>
      </div>

      <!-- Group 4 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-[42px]">
        <div class="w-full h-[42px] hover:bg-[#444] rounded-[3px] flex items-center justify-center text-[#ccc] cursor-pointer relative" alt-id="Add Cube tool, ninth element in the viewport toolbar">
          <i class="fa-regular fa-cube text-[18px]"></i>
          <div class="absolute top-[4px] left-[3px] text-[#66cc99] font-bold text-[12px] leading-none">+</div>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
      </div>
    </div>
    
    <!-- Right Sidebar (N-Panel) -->
    <div class="absolute right-0 top-0 flex z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.3)] max-h-full">
      <!-- Main Content Area -->
      <div class="w-[280px] bg-[#282828] bg-opacity-95 backdrop-blur-sm flex flex-col text-[13px] rounded-bl-sm" alt-id="Viewport properties right sidebar">
        <!-- Content wrappers -->
        <div class="flex-1 overflow-y-auto overflow-x-hidden">
          <div class="border-b border-[#1f1f1f]">
            <!-- Transform Header -->
            <div class="flex items-center justify-between p-2 bg-[#3d3d3d] cursor-pointer text-[#ccc] hover:text-white" alt-id="Transform panel header, expanded">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center"></i>
                <span class="font-medium text-[14px]">Transform</span>
              </div>
              <!-- Drag grip -->
              <div class="flex gap-[2px] opacity-40 cursor-grab" alt-id="Panel drag handle">
                <div class="flex flex-col gap-[2px]">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                </div>
                <div class="flex flex-col gap-[2px]">
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2px] h-[2px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>
            <!-- Transform Content -->
            <div class="p-3 flex flex-col gap-4 text-[#a0a0a0]">
              
              <!-- Location -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Location:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group" alt-id="Location X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">-0.023445 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group" alt-id="Location Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">1.0303 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group" alt-id="Location Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">-0.28996 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                </div>
              </div>
              
              <!-- Rotation -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Rotation:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group" alt-id="Rotation X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group" alt-id="Rotation Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group" alt-id="Rotation Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                </div>
                <div class="bg-[#2a2a2a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1.5 text-[#ccc] flex justify-between items-center cursor-pointer hover:bg-[#333] mt-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Rotation mode dropdown">
                  <span class="text-[13px]">XYZ Euler</span><i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0]"></i>
                </div>
              </div>
              
              <!-- Scale -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Scale:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group" alt-id="Scale X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group" alt-id="Scale Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group" alt-id="Scale Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]"></i>
                  </div>
                </div>
              </div>
              
              <!-- Dimensions -->
              <div class="flex flex-col gap-1 pb-2">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Dimensions:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group" alt-id="Dimension X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">1.18 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group" alt-id="Dimension Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">0.23 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group" alt-id="Dimension Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10">0.0542 m</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <!-- Vertical Tabs -->
      <div class="flex flex-col mt-[35px] ml-[2px] gap-[2px] z-10 w-[34px]" alt-id="Viewport properties sidebar tabs">
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer text-white bg-[#3d3d3d] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Item tab, currently selected, first element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">Item</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Tool tab, second element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">Tool</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="View tab, third element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">View</div>
        <div class="py-3.5 flex items-center justify-center w-full cursor-pointer hover:text-white text-[#999] bg-[#161616] bg-opacity-95 hover:bg-[#333] rounded-r-[4px] rounded-l-[1px] shadow-sm text-[14px] tracking-wide" alt-id="Animation tab, fourth element in the viewport sidebar tabs" style="writing-mode: vertical-rl;">Animation</div>
      </div>
    </div>

    <!-- Grid approximation -->
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(#aaa 1px, transparent 1px), linear-gradient(90deg, #aaa 1px, transparent 1px); background-size: 40px 40px; transform: perspective(500px) rotateX(60deg) scale(2); transform-origin: top;"></div>

    <!-- The isometric room image placeholder -->
    <div class="relative w-80 h-80 z-10" alt-id="3D scene containing an isometric room">
       <div class="absolute inset-0 bg-[#2d1b11] transform rotate-45 scale-y-50 shadow-2xl border-4 border-[#22120a]"></div>
       <div class="absolute bottom-0 left-0 w-1/2 h-full bg-[#e6dbce] origin-bottom-right transform skew-y-[-45deg] border-l-4 border-t-4 border-[#a69b8e] flex items-center justify-center shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.2)]"></div>
       <div class="absolute bottom-0 right-0 w-1/2 h-full bg-[#1b6b5d] origin-bottom-left transform skew-y-[45deg] border-r-4 border-t-4 border-[#0b4b3d] shadow-[inset_10px_-10px_30px_rgba(0,0,0,0.4)]"></div>
       <!-- Window -->
       <div class="absolute top-[25%] right-[10%] w-[30%] h-[30%] bg-[#a0d2eb] border-[6px] border-[#5c3a21] origin-bottom-left transform skew-y-[45deg] grid grid-cols-2 grid-rows-2">
         <div class="border border-[#5c3a21] bg-white/20"></div>
         <div class="border border-[#5c3a21] bg-white/20"></div>
         <div class="border border-[#5c3a21] bg-white/20"></div>
         <div class="border border-[#5c3a21] bg-white/20"></div>
       </div>
    </div>
    
    <!-- Top right overlay gizmos (Moved to left of the sidebar) -->
    <div class="absolute top-6 right-[310px] flex flex-col items-center gap-3 z-10">
      <!-- Axis gizmo -->
      <div class="w-[84px] h-[84px] rounded-full hover:bg-[#3a3a3a]/30 relative mb-2 cursor-pointer transition-colors flex items-center justify-center" alt-id="3D navigation axis gizmo">
        <!-- Axes container -->
        <div class="absolute top-1/2 left-1/2 w-0 h-0">
          <!-- Lines -->
          <div class="absolute w-[2px] h-[30px] bg-[#3388ff] origin-bottom left-[-1px] bottom-0" style="transform: rotate(0deg);"></div>
          <div class="absolute w-[2px] h-[30px] bg-[#8cc43c] origin-bottom left-[-1px] bottom-0" style="transform: rotate(65deg);"></div>
          <div class="absolute w-[2px] h-[30px] bg-[#f34555] origin-bottom left-[-1px] bottom-0" style="transform: rotate(135deg);"></div>
          
          <!-- Positive Dots -->
          <div class="absolute w-[22px] h-[22px] bg-[#3388ff] rounded-full flex items-center justify-center text-[12px] text-white font-bold shadow-sm" style="transform: rotate(0deg) translateY(-30px) rotate(0deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive Z axis button, top element in the 3D navigation axis gizmo">Z</div>
          <div class="absolute w-[22px] h-[22px] bg-[#8cc43c] rounded-full flex items-center justify-center text-[12px] text-[#111] font-bold shadow-sm" style="transform: rotate(65deg) translateY(-30px) rotate(-65deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive Y axis button, top right element in the 3D navigation axis gizmo">Y</div>
          <div class="absolute w-[22px] h-[22px] bg-[#f34555] rounded-full flex items-center justify-center text-[12px] text-white font-bold shadow-sm" style="transform: rotate(135deg) translateY(-30px) rotate(-135deg); top: 0; left: 0; margin-left: -11px; margin-top: -11px;" alt-id="Positive X axis button, bottom right element in the 3D navigation axis gizmo">X</div>

          <!-- Negative Dots -->
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#3388ff] bg-[#333] bg-opacity-90" style="transform: rotate(180deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative Z axis button, bottom element in the 3D navigation axis gizmo"></div>
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#8cc43c] bg-[#333] bg-opacity-90" style="transform: rotate(245deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative Y axis button, bottom left element in the 3D navigation axis gizmo"></div>
          <div class="absolute w-[18px] h-[18px] rounded-full border-[3px] border-[#f34555] bg-[#333] bg-opacity-90" style="transform: rotate(315deg) translateY(-30px); top: 0; left: 0; margin-left: -9px; margin-top: -9px;" alt-id="Negative X axis button, top left element in the 3D navigation axis gizmo"></div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="flex flex-col gap-2">
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom viewport button, first element in the viewport navigation controls"><i class="fa-solid fa-magnifying-glass-plus text-[16px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan viewport button, second element in the viewport navigation controls"><i class="fa-solid fa-hand text-[16px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle camera view button, third element in the viewport navigation controls"><i class="fa-solid fa-video text-[15px]"></i></div>
        <div class="w-[38px] h-[38px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle perspective/orthographic button, fourth element in the viewport navigation controls"><i class="fa-solid fa-table-cells text-[17px]"></i></div>
      </div>
    </div>
  </div>
</div>
