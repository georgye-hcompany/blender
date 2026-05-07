<script>
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'outliner';
  export let windowId = '';
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="Top right 3D Viewport editor panel">
  <!-- Header -->
  <div class="h-10 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-3 justify-between text-[13px]" alt-id="3D Viewport header">
    <!-- Left side -->
    <div class="flex items-center gap-3">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="flex items-center gap-1.5 px-2 py-1 bg-[#282828] border border-[#3c3c3c] rounded cursor-pointer hover:bg-[#333]" alt-id="Sets the object interaction mode.">
        <div class="w-4 h-4 rounded-full border border-white flex items-center justify-center pointer-events-none"><div class="w-2 h-2 bg-white rounded-full pointer-events-none"></div></div>
        <span class="text-[#ccc] px-1 pointer-events-none">Object Mode</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
      </div>
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1.5 ml-2" alt-id="Options">
        <i class="fa-solid fa-bars text-[14px] pointer-events-none"></i>
      </div>
    </div>
    
    <!-- Middle tools -->
    <div class="flex flex-1 items-center justify-center gap-3 overflow-hidden">
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-l" alt-id="Transformation orientation">
          <i class="fa-light fa-arrows-up-down-left-right text-[14px] pointer-events-none"></i>
          <span class="text-[#ccc] whitespace-nowrap hidden sm:inline pointer-events-none">Global</span>
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-r border-l-0" alt-id="Transform Pivot Point">
          <i class="fa-solid fa-link text-[14px] pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-l" alt-id="Snap">
          <i class="fa-solid fa-magnet text-[#ccc] text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-r border-l-0" alt-id="Snapping">
          <i class="fa-solid fa-square-dashed text-[14px] pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5 text-[#a0a0a0]">
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-l" alt-id="Proportional Editing Objects">
          <i class="fa-solid fa-bullseye text-[#ccc] text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-r border-l-0" alt-id="Proportional Editing Falloff">
          <i class="fa-regular fa-bell text-[14px] pointer-events-none"></i>
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
        </div>
      </div>
    </div>
    
    <!-- Right side tools -->
    <div class="flex items-center gap-3 text-[#a0a0a0]">
      <!-- Object Types Visibility -->
      <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded" alt-id="Selectability & Visibility">
        <i class="fa-solid fa-eye text-[14px] pointer-events-none"></i>
        <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
      </div>

      <!-- Viewport Gizmos and Overlays -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1.5 cursor-pointer text-[#ccc] hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded" alt-id="Gizmos">
          <i class="fa-solid fa-bow-arrow text-[14px] pointer-events-none"></i>
        </div>
      </div>
      
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1.5 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2.5 py-1 rounded-l" alt-id="Show Overlays">
          <i class="fa-solid fa-layer-group text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1.5 py-1 rounded-r border-l-0" alt-id="Overlays">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
        </div>
      </div>
      
      <!-- Toggle X-Ray -->
      <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded" alt-id="Toggle X-Ray">
        <i class="fa-solid fa-clone text-[14px] pointer-events-none"></i>
      </div>

      <!-- Shading Modes -->
      <div class="flex items-center gap-0.5">
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 rounded-l" alt-id="Viewport Shading: Wireframe">
          <i class="fa-light fa-globe text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 border-l-0" alt-id="Viewport Shading Solid">
          <i class="fa-solid fa-circle text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer text-white bg-[#4772b3] border border-[#4772b3] px-2.5 py-1 border-l-0" alt-id="Viewport Shading: Material Preview">
          <i class="fa-solid fa-circle-half-stroke text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-2.5 py-1 border-l-0" alt-id="Viewport Shading: Rendered">
          <i class="fa-regular fa-circle text-[14px] pointer-events-none"></i>
        </div>
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white bg-[#282828] border border-[#3c3c3c] px-1.5 py-1 rounded-r border-l-0" alt-id="Shading">
          <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Viewport Content -->
  <div class="flex-1 relative overflow-hidden bg-[#333333] flex items-center justify-center">
    
    <!-- Grid approximation -->
    <div class="absolute inset-0 opacity-[0.15]" style="background-image: linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px); background-size: 80px 80px; background-position: center center;"></div>

    <!-- Center Axes -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-0 w-full h-[1px] bg-[#cc3333] opacity-60 z-0"></div> <!-- X Axis -->
      <div class="absolute top-0 left-1/2 w-[1px] h-full bg-[#8cc43c] opacity-80 z-0"></div> <!-- Y Axis -->
    </div>

    <!-- The Scene -->
    <div class="relative w-[400px] h-[400px] z-10" alt-id="3D scene Top Orthographic view">
       
       <!-- Large Circle (Left Bottom) -->
       <div class="absolute bottom-0 left-[-40px] w-[200px] h-[200px] rounded-full border border-black opacity-50"></div>
       <div class="absolute bottom-[-10px] left-[-50px] w-[220px] h-[220px] rounded-full border border-black opacity-30"></div>

       <!-- The Window Board (Center Object) -->
       <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[80px] bg-[#8b6540] border-[2px] border-black shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center outline outline-[1.5px] outline-[#ff8800] z-20">
         <div class="w-[60px] h-[50px] border border-[#553311] relative">
           <!-- Inner details -->
           <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] border border-black rounded-full"></div>
           <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] border border-[#ff8800] rounded-full"></div>
           <!-- Center pivot dot -->
           <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#ff8800] rounded-full"></div>
         </div>
       </div>

       <!-- Selection Box (Wireframe around object) -->
       <div class="absolute top-1/2 left-1/2 transform -translate-x-[45px] -translate-y-[55px] w-[120px] h-[100px] border border-black opacity-50 z-10 transform skew-x-12"></div>

       <!-- Camera (Top Right) -->
       <div class="absolute top-[40px] right-[100px] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[80px] border-b-black opacity-90 transform -rotate-[25deg] z-10"></div>
       
       <!-- Camera Pivot Point -->
       <div class="absolute top-[30px] right-[120px] w-[16px] h-[16px] border border-black border-dashed rounded-full flex items-center justify-center">
         <div class="w-[4px] h-[4px] bg-black rounded-full"></div>
       </div>
    </div>
    
    <!-- Top Left Overlay Text -->
    <div class="absolute top-3 left-4 flex flex-col gap-0.5 text-[12px] font-medium z-20" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
      <div class="text-[#eee]">fps: 24</div>
      <div class="text-[#eee]">(7148) Studio Assets | Window Board</div>
    </div>

    <!-- Top Right Overlay Gizmos -->
    <div class="absolute top-6 right-6 flex flex-col items-center gap-3 z-20">
      <!-- Axis gizmo -->
      <div class="w-[64px] h-[64px] rounded-full hover:bg-[#3a3a3a]/30 relative mb-2 cursor-pointer transition-colors flex items-center justify-center" alt-id="3D navigation axis gizmo">
        <!-- Axes container -->
        <div class="absolute top-1/2 left-1/2 w-0 h-0">
          <!-- Lines -->
          <div class="absolute w-[1.5px] h-[22px] bg-[#3388ff] origin-bottom left-[-0.5px] bottom-0" style="transform: rotate(0deg);"></div>
          <div class="absolute w-[1.5px] h-[22px] bg-[#8cc43c] origin-bottom left-[-0.5px] bottom-0" style="transform: rotate(65deg);"></div>
          <div class="absolute w-[1.5px] h-[22px] bg-[#f34555] origin-bottom left-[-0.5px] bottom-0" style="transform: rotate(135deg);"></div>
          
          <!-- Positive Dots -->
          <div class="absolute w-[16px] h-[16px] bg-[#3388ff] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm" style="transform: rotate(0deg) translateY(-22px) rotate(0deg); top: 0; left: 0; margin-left: -8px; margin-top: -8px;" alt-id="Positive Z axis button, top element in the 3D navigation axis gizmo">Z</div>
          <div class="absolute w-[16px] h-[16px] bg-[#8cc43c] rounded-full flex items-center justify-center text-[10px] text-[#111] font-bold shadow-sm" style="transform: rotate(65deg) translateY(-22px) rotate(-65deg); top: 0; left: 0; margin-left: -8px; margin-top: -8px;" alt-id="Positive Y axis button, top right element in the 3D navigation axis gizmo">Y</div>
          <div class="absolute w-[16px] h-[16px] bg-[#f34555] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm" style="transform: rotate(135deg) translateY(-22px) rotate(-135deg); top: 0; left: 0; margin-left: -8px; margin-top: -8px;" alt-id="Positive X axis button, bottom right element in the 3D navigation axis gizmo">X</div>

          <!-- Negative Dots -->
          <div class="absolute w-[12px] h-[12px] rounded-full border-[2.5px] border-[#3388ff] bg-[#333] bg-opacity-90" style="transform: rotate(180deg) translateY(-22px); top: 0; left: 0; margin-left: -6px; margin-top: -6px;" alt-id="Negative Z axis button, bottom element in the 3D navigation axis gizmo"></div>
          <div class="absolute w-[12px] h-[12px] rounded-full border-[2.5px] border-[#8cc43c] bg-[#333] bg-opacity-90" style="transform: rotate(245deg) translateY(-22px); top: 0; left: 0; margin-left: -6px; margin-top: -6px;" alt-id="Negative Y axis button, bottom left element in the 3D navigation axis gizmo"></div>
          <div class="absolute w-[12px] h-[12px] rounded-full border-[2.5px] border-[#f34555] bg-[#333] bg-opacity-90" style="transform: rotate(315deg) translateY(-22px); top: 0; left: 0; margin-left: -6px; margin-top: -6px;" alt-id="Negative X axis button, top left element in the 3D navigation axis gizmo"></div>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="flex flex-col gap-1.5">
        <div class="w-[30px] h-[30px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Zoom viewport button, first element in the viewport navigation controls"><i class="fa-solid fa-magnifying-glass-plus text-[12px] pointer-events-none"></i></div>
        <div class="w-[30px] h-[30px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Pan viewport button, second element in the viewport navigation controls"><i class="fa-solid fa-hand text-[12px] pointer-events-none"></i></div>
        <div class="w-[30px] h-[30px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle camera view button, third element in the viewport navigation controls"><i class="fa-solid fa-video text-[11px] pointer-events-none"></i></div>
        <div class="w-[30px] h-[30px] bg-[#2a2a2a]/60 hover:bg-[#3a3a3a]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#ccc] cursor-pointer shadow-sm" alt-id="Toggle perspective/orthographic button, fourth element in the viewport navigation controls"><i class="fa-solid fa-table-cells text-[13px] pointer-events-none"></i></div>
      </div>
    </div>
  </div>
</div>