<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'shader_editor';
  export let windowId = '';

  let activeSidebarTab = 'tool';
  let isToolExpanded = true;
  let isNodeExpanded = true;
  
  // URL params logic
  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes(`${windowId}-shader-editor-tool`)) {
        activeSidebarTab = 'tool';
      }
      if (openParam.includes(`${windowId}-shader-editor-node`)) {
        activeSidebarTab = 'node';
      }
      if (openParam.includes(`${windowId}-shader-editor-view`)) {
        activeSidebarTab = 'view';
      }
      if (openParam.includes(`${windowId}-shader-editor-options`)) {
        activeSidebarTab = 'options';
      }
    }
  });

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const openStates = [];
      if (activeSidebarTab === 'tool') openStates.push(`${windowId}-shader-editor-tool`);
      if (activeSidebarTab === 'node') openStates.push(`${windowId}-shader-editor-node`);
      if (activeSidebarTab === 'view') openStates.push(`${windowId}-shader-editor-view`);
      if (activeSidebarTab === 'options') openStates.push(`${windowId}-shader-editor-options`);
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function setSidebarTab(tab) {
    activeSidebarTab = tab;
    updateOpenParam();
  }

</script>

<div class="w-full h-full flex flex-col bg-[#1c1c1c] text-[#e6e6e6] overflow-hidden" alt-id="Shader Editor Window">
  <!-- Header Bar -->
  <div class="h-[28px] bg-[#1a1a1a] flex items-center px-2 py-1 justify-between select-none shrink-0 z-20">
    <div class="flex items-center gap-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded px-2 py-[2px] cursor-pointer hover:bg-[#333] text-[13px] gap-1.5" alt-id="Shader Type">
        <i class="fa-solid fa-cube text-[12px] text-[#ffb366] pointer-events-none"></i>
        <span class="text-[#ccc] pointer-events-none">Object</span>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
      </div>

      <div class="flex items-center text-[13px] text-[#ccc] gap-3 px-2 whitespace-nowrap">
        <span class="cursor-pointer hover:text-white" alt-id="View menu"><u>V</u>iew</span>
        <span class="cursor-pointer hover:text-white" alt-id="Select menu"><u>S</u>elect</span>
        <span class="cursor-pointer hover:text-white" alt-id="Add menu"><u>A</u>dd</span>
        <span class="cursor-pointer hover:text-white" alt-id="Node menu"><u>N</u>ode</span>
      </div>

      <div class="w-[1px] h-4 bg-[#3c3c3c] mx-1"></div>

      <div class="flex items-center gap-1">
        <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded px-2 py-[2px] cursor-pointer hover:bg-[#333] text-[13px] gap-1.5" alt-id="Material Slot">
          <span class="text-[#ccc] pointer-events-none">Slot 1</span>
          <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
        </div>

        <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded h-[24px] overflow-hidden ml-1">
          <div class="flex items-center gap-1.5 px-2 hover:bg-[#333] cursor-pointer h-full" alt-id="Material Select">
            <i class="fa-solid fa-circle text-[13px] text-[#ff6666] pointer-events-none"></i>
            <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
          </div>
          <div class="flex items-center px-2 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="Active Material Name">
            <span class="text-[13px] text-[#eee] pointer-events-none min-w-[80px]">Boards - Basketweave</span>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full bg-[#282828]" alt-id="Users">
            <span class="text-[12px] text-[#eee] pointer-events-none">2</span>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="Fake User">
            <i class="fa-solid fa-shield text-[12px] text-[#ccc] pointer-events-none"></i>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="New Material">
            <i class="fa-regular fa-copy text-[12px] text-[#ccc] pointer-events-none"></i>
          </div>
          <div class="flex items-center justify-center w-6 border-l border-[#3c3c3c] hover:bg-[#333] cursor-pointer h-full" alt-id="Unlink Material">
            <i class="fa-solid fa-xmark text-[12px] text-[#ccc] pointer-events-none"></i>
          </div>
        </div>
      </div>
      
      <div class="flex-1"></div> <!-- Spacer to push the next items to the right -->

      <!-- Right side icons -->
      <div class="flex items-center gap-1.5 pr-2">
        <div class="flex items-center cursor-pointer hover:text-white text-[#ccc] gap-1" alt-id="Snap">
          <i class="fa-solid fa-magnet text-[13px] pointer-events-none"></i>
        </div>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#888] cursor-pointer hover:text-white" alt-id="Snap Settings"></i>
        
        <div class="w-[1px] h-4 bg-[#3c3c3c] mx-0.5"></div>
        
        <div class="flex items-center cursor-pointer hover:text-white text-[#ccc] gap-1" alt-id="Toggle Overlays">
          <div class="w-[14px] h-[14px] border-[1.5px] border-current rounded-full flex items-center justify-center pointer-events-none relative">
             <div class="w-1 h-1 bg-current rounded-full pointer-events-none absolute right-[-2px] bottom-[-2px]"></div>
          </div>
        </div>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#888] cursor-pointer hover:text-white" alt-id="Overlays Settings"></i>
      </div>
    </div>
  </div>

  <div class="flex-1 relative overflow-hidden bg-[#1f1f1f] text-[#e6e6e6]" alt-id="Node graph area">
    <!-- Grid Background -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background-image: linear-gradient(to right, #242424 1px, transparent 1px), linear-gradient(to bottom, #242424 1px, transparent 1px); background-size: 24px 24px;"></div>

    <!-- Top Left Breadcrumbs -->
    <div class="absolute top-3 left-4 flex items-center gap-1.5 text-[13px] font-medium z-20 text-[#ccc]" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" alt-id="Shader Editor breadcrumbs">
      <i class="fa-solid fa-cube text-[11px] text-[#ffb366] pointer-events-none"></i>
      <span class="hover:text-white cursor-pointer" alt-id="Breadcrumb: Floor">Floor</span>
      <i class="fa-solid fa-chevron-right text-[9px] text-[#888] mx-0.5 pointer-events-none"></i>
      <i class="fa-solid fa-cube text-[11px] text-[#ffb366] pointer-events-none"></i>
      <span class="hover:text-white cursor-pointer" alt-id="Breadcrumb: Plane.005">Plane.005</span>
      <i class="fa-solid fa-chevron-right text-[9px] text-[#888] mx-0.5 pointer-events-none"></i>
      <i class="fa-solid fa-circle text-[11px] text-[#ff6666] pointer-events-none"></i>
      <span class="text-white" alt-id="Breadcrumb: Boards - Basketweave">Boards - Basketweave</span>
      
      <div class="ml-2 w-5 h-5 flex items-center justify-center hover:bg-[#333] rounded cursor-pointer border border-transparent hover:border-[#444]" alt-id="Pin Material">
        <i class="fa-solid fa-thumbtack text-[11px] text-[#ccc] pointer-events-none"></i>
      </div>
    </div>

    <!-- Node Editor Workspace Wrapper -->
    <div class="absolute inset-0 z-10 flex items-center justify-start pl-[56px] pr-[300px] pointer-events-none">
      <div class="relative w-[1200px] max-w-[calc(100%-2rem)] h-[min(720px,calc(100%-1.5rem))] min-h-[520px] pointer-events-auto -translate-y-[20px]">
        <!-- Node Splines (SVG overlay) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          <!-- SH-Boards.Basketweave BSDF -> Material Output Surface -->
          <path d="M 460 364 C 490 364, 490 404, 520 404" fill="none" stroke="#66cc99" stroke-width="2" />
        </svg>

        <!-- Node Editor Workspace -->
        <div class="absolute inset-0 z-10 w-full h-full">
          <!-- SH-Boards.Basketweave Node -->
          <div class="absolute top-[300px] left-[260px] w-[200px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Node: SH-Boards.Basketweave">
            <div class="bg-[#4a6b4a] text-white px-2 py-1.5 rounded-t-[3px] flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
                <span class="font-medium pointer-events-none">SH-Boards.Basket...</span>
              </div>
            </div>
            <div class="flex flex-col py-1.5">
              <div class="flex justify-end items-center px-2 py-0.5 relative group mt-1">
                <span class="text-[#eee] mr-3 pointer-events-none">BSDF</span>
                <div class="w-3 h-3 rounded-full bg-[#66cc99] border border-[#111] absolute right-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Output socket: BSDF"></div>
              </div>
              <div class="px-2 pt-2 pb-1 flex flex-col gap-1.5 mt-2">
                <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Boards Basketweave select">
                  <div class="flex items-center gap-1.5 pointer-events-none">
                    <i class="fa-solid fa-circle-half-stroke text-[10px] pointer-events-none"></i>
                    <i class="fa-solid fa-chevron-down text-[8px] opacity-60 pointer-events-none"></i>
                    <span class="text-[12px] pointer-events-none truncate max-w-[80px]">SH-Boar...</span>
                  </div>
                  <i class="fa-solid fa-shield text-[10px] opacity-60 pointer-events-none"></i>
                </div>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#ccaa33] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Color"></div>
                <span class="text-[#ccc] ml-3 flex-1 pointer-events-none">Color</span>
                <div class="w-[60px] h-[18px] bg-[#996633] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-[#a57340]" alt-id="Node Color Picker"></div>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#a0a0a0] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Contrast"></div>
                <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[18px] flex items-center justify-between px-2 ml-3 cursor-ew-resize hover:bg-[#5a5a5a]" alt-id="Node Contrast slider">
                   <span class="text-[11px] text-[#ccc] pointer-events-none">Contrast</span>
                   <span class="text-[11px] text-[#eee] pointer-events-none">1.000</span>
                </div>
              </div>
            </div>
            <!-- Stack shadow lines -->
            <div class="absolute w-[180px] h-[4px] bg-[#282828] border border-[#111] rounded-b-[4px] bottom-[-4px] left-[10px] z-[-1]"></div>
            <div class="absolute w-[160px] h-[4px] bg-[#282828] border border-[#111] rounded-b-[4px] bottom-[-8px] left-[20px] z-[-2]"></div>
          </div>

          <!-- Material Output Node -->
          <div class="absolute top-[320px] left-[520px] w-[200px] bg-[#282828] bg-opacity-90 rounded-[4px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] border border-[#111] flex flex-col text-[12px]" alt-id="Node: Material Output">
            <div class="bg-[#8c4040] text-white px-2 py-1.5 rounded-t-[3px] flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-chevron-down text-[10px] pointer-events-none"></i>
                <span class="font-medium pointer-events-none">Material Output</span>
              </div>
            </div>
            <div class="flex flex-col py-1.5">
              <div class="px-2 pt-1 pb-1 flex flex-col gap-1.5">
                <div class="bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 py-1 flex items-center justify-between text-[#ccc] cursor-pointer" alt-id="Material Output Target">
                  <span class="text-[12px] pointer-events-none">All</span>
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-60 pointer-events-none"></i>
                </div>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#66cc99] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Surface"></div>
                <span class="text-[#eee] ml-3 pointer-events-none">Surface</span>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#66cc99] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Volume"></div>
                <span class="text-[#ccc] ml-3 pointer-events-none">Volume</span>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#8c66ff] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Displacement"></div>
                <span class="text-[#ccc] ml-3 pointer-events-none">Displacement</span>
              </div>
              <div class="flex items-center px-2 py-0.5 relative group mt-1">
                <div class="w-3 h-3 rounded-full bg-[#a0a0a0] border border-[#111] absolute left-[-6px] cursor-pointer hover:scale-125 transition-transform" alt-id="Input socket: Thickness"></div>
                <span class="text-[#ccc] ml-3 pointer-events-none">Thickness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Sidebar (N-panel) -->
    <div class="absolute right-0 top-0 bottom-0 flex">
      <!-- Content Area -->
      <div class="w-[240px] bg-[#282828] border-l border-[#1f1f1f] flex flex-col z-20">
        {#if activeSidebarTab === 'tool'}
          <div class="flex-1 overflow-y-auto hide-scrollbar" alt-id="Sidebar Tool tab content">
            <div class="flex flex-col">
              <!-- Active Tool -->
              <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] m-[5px]">
                <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={() => isToolExpanded = !isToolExpanded} alt-id="Active Tool accordion">
                  <div class="flex items-center gap-2">
                    {#if isToolExpanded}
                      <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                    {:else}
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                    {/if}
                    <span class="text-[#eee] text-[13px] font-medium">Active Tool</span>
                  </div>
                  <div class="flex items-center gap-[2.5px] opacity-40">
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  </div>
                </div>
                
                {#if isToolExpanded}
                  <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                    <div class="flex items-center gap-2 bg-[#1a1a1a] border border-[#111] rounded-[3px] p-2">
                       <i class="fa-solid fa-square-dashed text-[12px] text-[#ccc]"></i>
                       <span class="text-[13px] text-[#eee]">Select Box</span>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {:else}
          <div class="flex-1 overflow-y-auto hide-scrollbar" alt-id="Sidebar {activeSidebarTab} tab content"></div>
        {/if}
      </div>
      
      <!-- Tabs -->
      <div class="w-[30px] bg-[#1a1a1a] border-l border-[#1f1f1f] flex flex-col z-20">
        <div class="flex-1 flex flex-col justify-start w-full">
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'node' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('node')} alt-id="Node tab">
            Node
          </div>
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] translate-y-[80px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'tool' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('tool')} alt-id="Tool tab">
            Tool
          </div>
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] translate-y-[160px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'view' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('view')} alt-id="View tab">
            View
          </div>
          <div class="w-[80px] h-[30px] origin-top-left rotate-90 translate-x-[30px] translate-y-[240px] flex items-center justify-center cursor-pointer text-[12px] font-medium {activeSidebarTab === 'options' ? 'text-white' : 'text-[#888] hover:text-[#ccc]'}" on:click={() => setSidebarTab('options')} alt-id="Options tab">
            Options
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
