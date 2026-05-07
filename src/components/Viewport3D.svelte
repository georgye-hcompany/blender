<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'viewport_3d';
  export let isMainViewport = false;
  export let windowId = '';
  let isLeftToolbarCollapsed = false;
  let isLeftToolbarExpanded = false;

  onMount(() => {
    if (typeof window !== 'undefined' && windowId) {
      const urlParams = new URLSearchParams(window.location.search);
      const val = urlParams.get(windowId) || '';
      if (val.includes('collapsed-left-toolbar')) {
        isLeftToolbarCollapsed = true;
      }
      if (val.includes('expanded-left-toolbar')) {
        isLeftToolbarExpanded = true;
      }
    }
  });

  $: {
    if (typeof window !== 'undefined' && windowId) {
      const url = new URL(window.location.href);
      let changed = false;
      const currentVal = url.searchParams.get(windowId) || currentEditor;
      let baseEditor = currentVal.split(',')[0];
      
      // If baseEditor is empty, it defaults to currentEditor
      if (!baseEditor) baseEditor = currentEditor;
      
      let newState = '';
      if (isLeftToolbarCollapsed) newState = 'collapsed-left-toolbar';
      else if (isLeftToolbarExpanded) newState = 'expanded-left-toolbar';
      
      let newVal = baseEditor;
      if (newState) newVal += ',' + newState;
      
      if (currentVal !== newVal) {
        url.searchParams.set(windowId, newVal);
        changed = true;
      }
      
      if (changed) {
        const search = url.searchParams.toString().replace(/%2C/g, ',');
        window.history.replaceState({}, '', `${url.pathname}?${search}`);
      }
    }
  }
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="3D Viewport editor panel">
  <!-- Header -->
  <div class="h-8 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[11px]" alt-id="3D Viewport header">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
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
  <div class="flex-1 relative overflow-hidden flex items-center justify-center {isMainViewport ? 'bg-[#1c1c1c]' : 'bg-[#333333]'}">
    
    <!-- Left Toolbar (T-Panel) -->
    {#if isLeftToolbarCollapsed}
      <div class="absolute left-0 top-4 z-20" alt-id="Collapsed left toolbar handle">
        <div class="w-[18px] h-[28px] bg-[#282828] bg-opacity-95 rounded-r flex items-center justify-center cursor-pointer hover:bg-[#333] border border-[#1f1f1f] border-l-0 shadow-md" on:click={() => isLeftToolbarCollapsed = false} alt-id="Expand left toolbar button">
          <i class="fa-solid fa-chevron-right text-[10px] text-[#a0a0a0]"></i>
        </div>
      </div>
    {:else}
      <div class="absolute left-0 top-2 flex flex-col gap-[6px] z-20 pl-[4px] {isLeftToolbarExpanded ? 'w-[120px]' : 'w-[50px]'} transition-[width] duration-150 group/toolbar" alt-id="Viewport left toolbar">
        
        <!-- Invisible Resize Handle on the right edge -->
        <div class="absolute right-[-6px] top-0 w-[12px] h-full cursor-ew-resize z-30" on:mousedown={(e) => {
          if (isLeftToolbarExpanded) {
            const startX = e.clientX;
            const onMouseMove = (moveEvent) => {
              if (startX - moveEvent.clientX > 20) {
                isLeftToolbarExpanded = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              }
            };
            const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          } else {
            const startX = e.clientX;
            const onMouseMove = (moveEvent) => {
              if (moveEvent.clientX - startX > 20) {
                isLeftToolbarExpanded = true;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              } else if (startX - moveEvent.clientX > 20) {
                isLeftToolbarCollapsed = true;
                isLeftToolbarExpanded = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              }
            };
            const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          }
        }} alt-id="Invisible resize left toolbar handle"></div>

      <!-- Group 1 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] rounded-t-[3px] bg-[#4772b3] flex items-center text-white cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Select Box tool, currently active, first element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative w-6 h-6 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90">
              <i class="fa-solid fa-arrow-pointer text-[12px] text-white shadow-sm transform -translate-x-0.5"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Select Box</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-white/80"></div>
        </div>
        <div class="w-full h-[50px] rounded-b-[3px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Cursor tool, second element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-regular fa-crosshairs text-[20px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Cursor</span>
        </div>
      </div>
      
      <!-- Group 2 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-t-[3px] flex items-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Move tool, third element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-solid fa-arrows-up-down-left-right text-[18px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Move</span>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer border-b border-[#1f1f1f]" alt-id="Rotate tool, fourth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <i class="fa-solid fa-rotate text-[18px]"></i>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Rotate</span>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] flex items-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Scale tool, fifth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex items-center justify-center">
              <i class="fa-regular fa-square text-[18px]"></i>
              <i class="fa-solid fa-arrow-up-right text-[10px] absolute top-[-3px] right-[-5px]"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Scale</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] rounded-b-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Transform tool, sixth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex items-center justify-center">
              <i class="fa-solid fa-arrows-up-down-left-right text-[18px] opacity-70"></i>
              <div class="absolute w-3 h-3 bg-[#ccc] rounded-full border-[2px] border-[#282828]"></div>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Transform</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
      </div>
      
      <!-- Group 3 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-t-[3px] flex items-center text-[#ccc] cursor-pointer relative border-b border-[#1f1f1f]" alt-id="Annotate tool, seventh element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="relative flex flex-col items-center">
              <i class="fa-solid fa-pen text-[14px] transform rotate-45 -translate-y-0.5"></i>
              <div class="w-5 h-[2px] bg-[#66cc99] rounded-full mt-0.5"></div>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Annotate</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
        <div class="w-full h-[50px] hover:bg-[#444] rounded-b-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Measure tool, eighth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0">
            <div class="flex items-end text-[#ccc]">
              <i class="fa-solid fa-ruler-vertical text-[16px]"></i>
              <i class="fa-solid fa-ruler-horizontal text-[16px]"></i>
            </div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Measure</span>
        </div>
      </div>

      <!-- Group 4 -->
      <div class="flex flex-col bg-[#282828] bg-opacity-95 rounded-[4px] shadow-md border border-[#1f1f1f] w-full overflow-hidden">
        <div class="w-full h-[50px] hover:bg-[#444] rounded-[3px] flex items-center text-[#ccc] cursor-pointer relative" alt-id="Add Cube tool, ninth element in the viewport toolbar">
          <div class="w-[50px] h-[50px] flex items-center justify-center shrink-0 relative">
            <i class="fa-regular fa-cube text-[18px]"></i>
            <div class="absolute top-[8px] left-[7px] text-[#66cc99] font-bold text-[12px] leading-none">+</div>
          </div>
          <span class="text-[13px] whitespace-nowrap {isLeftToolbarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 pr-2">Add Cube</span>
          <div class="absolute bottom-[2px] right-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[6px] border-b-[#888]"></div>
        </div>
      </div>
    </div>
    {/if}
    
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
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Location X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">-0.023445 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location X button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Location Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.0303 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location Y button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Location Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">-0.28996 m</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Location Z button"></i>
                  </div>
                </div>
              </div>
              
              <!-- Rotation -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Rotation:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation X button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation Y button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Rotation Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0°</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Rotation Z button"></i>
                  </div>
                </div>
                <div class="bg-[#2a2a2a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1.5 text-[#ccc] flex justify-between items-center cursor-pointer hover:bg-[#333] mt-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" alt-id="Rotation mode dropdown">
                  <span class="text-[13px] pointer-events-none">XYZ Euler</span><i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                </div>
              </div>
              
              <!-- Scale -->
              <div class="flex flex-col gap-1">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Scale:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale X button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale Y button"></i>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Scale Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.000</span>
                    <i class="fa-light fa-lock-open text-[#666] hover:text-[#ccc] cursor-pointer z-10 text-[12px]" alt-id="Lock Scale Z button"></i>
                  </div>
                </div>
              </div>
              
              <!-- Dimensions -->
              <div class="flex flex-col gap-1 pb-2">
                <div class="text-[#ccc] text-[12px] mb-[2px]">Dimensions:</div>
                <div class="flex flex-col gap-[1px]">
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-t-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension X input field">
                    <span class="w-5 text-[#ff3333] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">X</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">1.18 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension Y input field">
                    <span class="w-5 text-[#88ff33] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Y</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0.23 m</span>
                  </div>
                  <div class="flex items-center bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-b-[3px] px-[8px] py-[4px] relative group cursor-text" alt-id="Dimension Z input field">
                    <span class="w-5 text-[#3388ff] font-semibold text-[11px] drop-shadow-md z-10 pointer-events-none">Z</span>
                    <span class="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-50 pointer-events-none"></span>
                    <span class="flex-1 text-right text-white pr-2 text-[13px] z-10 pointer-events-none">0.0542 m</span>
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

    {#if isMainViewport}
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
      
      <!-- Top Left Overlay Text -->
      <div class="absolute top-3 flex flex-col gap-0.5 text-[14px] font-medium z-10 {isLeftToolbarCollapsed ? 'left-8' : (isLeftToolbarExpanded ? 'left-[140px]' : 'left-[60px]')}" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
        <div class="text-[#eee]">(1) Collection | cube_01</div>
      </div>
    {:else}
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
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] border border-black rounded-full"></div>
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] border border-[#ff8800] rounded-full"></div>
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
      <div class="absolute top-3 flex flex-col gap-0.5 text-[12px] font-medium z-20 {isLeftToolbarCollapsed ? 'left-8' : (isLeftToolbarExpanded ? 'left-[140px]' : 'left-[60px]')}" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
        <div class="text-[#eee]">fps: 24</div>
        <div class="text-[#eee]">(7148) Studio Assets | Window Board</div>
      </div>
    {/if}
    
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
