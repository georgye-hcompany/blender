<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'spreadsheet';
  export let windowId = '';

  let isGeometryExpanded = true;
  let isDomainExpanded = true;
  let isMeshExpanded = true;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      
      if (openParam.includes(`${windowId}-spreadsheet-geometry-collapsed`)) {
        isGeometryExpanded = false;
      }
      if (openParam.includes(`${windowId}-spreadsheet-domain-collapsed`)) {
        isDomainExpanded = false;
      }
      if (openParam.includes(`${windowId}-spreadsheet-mesh-collapsed`)) {
        isMeshExpanded = false;
      }
    }
  });

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      
      // Filter out existing spreadsheet states
      openStates = openStates.filter(s => !s.startsWith(`${windowId}-spreadsheet-`));
      
      if (!isGeometryExpanded) openStates.push(`${windowId}-spreadsheet-geometry-collapsed`);
      if (!isDomainExpanded) openStates.push(`${windowId}-spreadsheet-domain-collapsed`);
      if (!isMeshExpanded) openStates.push(`${windowId}-spreadsheet-mesh-collapsed`);
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function toggleGeometry() { isGeometryExpanded = !isGeometryExpanded; updateOpenParam(); }
  function toggleDomain() { isDomainExpanded = !isDomainExpanded; updateOpenParam(); }
  function toggleMesh() { isMeshExpanded = !isMeshExpanded; updateOpenParam(); }

</script>

<div class="w-full h-full flex flex-col bg-[#282828] text-[#e6e6e6] overflow-hidden" alt-id="Spreadsheet Window">
  <!-- Header Bar -->
  <div class="h-[28px] bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 py-1 justify-between select-none shrink-0">
    <div class="flex items-center gap-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <div class="flex items-center text-[13px] text-[#ccc] gap-3 px-2 whitespace-nowrap">
        <span class="cursor-pointer hover:text-white" alt-id="View menu"><u>V</u>iew</span>
      </div>

      <div class="w-[1px] h-4 bg-[#3c3c3c] mx-1"></div>

      <!-- Floor Path -->
      <div class="flex items-center gap-1.5 text-[13px] text-[#ccc]" alt-id="Spreadsheet Path">
        <i class="fa-solid fa-draw-polygon text-[12px] text-[#ffb366] pointer-events-none"></i>
        <span class="text-[#eee] pointer-events-none font-medium">Floor</span>
        
        <div class="ml-2 w-5 h-5 flex items-center justify-center bg-[#4772b3] border border-[#222] rounded shadow-sm cursor-pointer" alt-id="Pin Button">
          <i class="fa-solid fa-thumbtack text-[11px] text-white pointer-events-none transform -rotate-45"></i>
        </div>
      </div>
    </div>
    
    <div class="flex items-center gap-2 pr-2">
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Pointer Tool">
        <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] pointer-events-none"></i>
      </div>
      <div class="cursor-pointer text-[#a0a0a0] px-1 bg-[#4772b3] border border-[#4772b3] rounded h-[22px] flex items-center justify-center text-white" alt-id="Filter Tool">
        <i class="fa-solid fa-filter text-[12px] pointer-events-none"></i>
      </div>
    </div>
  </div>

  <div class="flex-1 flex overflow-hidden">
    <!-- Left Sidebar -->
    <div class="w-[180px] bg-[#1a1a1a] border-r border-[#1f1f1f] flex flex-col z-20 shrink-0 text-[12px] text-[#ccc]">
      <div class="p-2 border-b border-[#222]">
        <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded h-[24px] px-2 cursor-pointer hover:bg-[#333] justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="Evaluated Dropdown">
          <span class="text-[13px] text-[#eee] pointer-events-none">Evaluated</span>
          <i class="fa-solid fa-chevron-down text-[10px] text-[#888] pointer-events-none"></i>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto hide-scrollbar pb-2">
        <!-- Geometry Accordion -->
        <div class="flex flex-col mt-1">
          <div class="flex items-center px-1 py-1 cursor-pointer hover:bg-[#333]" on:click={toggleGeometry} alt-id="Geometry accordion">
            <div class="w-4 flex justify-center">
              <i class="fa-solid {isGeometryExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-[9px] text-[#888]"></i>
            </div>
            <span class="font-medium text-[#eee]">Geometry</span>
          </div>
          
          {#if isGeometryExpanded}
            <div class="flex items-center pl-5 pr-2 py-[3px] bg-[#4772b3] text-white cursor-pointer group" alt-id="Geometry selection">
              <i class="fa-solid fa-circle-nodes text-[12px] mr-1.5 opacity-90"></i>
              <span class="truncate">(Geometry)</span>
            </div>
          {/if}
        </div>

        <!-- Domain Accordion -->
        <div class="flex flex-col mt-1">
          <div class="flex items-center px-1 py-1 cursor-pointer hover:bg-[#333]" on:click={toggleDomain} alt-id="Domain accordion">
            <div class="w-4 flex justify-center">
              <i class="fa-solid {isDomainExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-[9px] text-[#888]"></i>
            </div>
            <span class="font-medium text-[#eee]">Domain</span>
          </div>
          
          {#if isDomainExpanded}
            <div class="flex flex-col">
              <!-- Mesh Accordion -->
              <div class="flex items-center pl-3 pr-2 py-1 cursor-pointer hover:bg-[#333]" on:click={toggleMesh} alt-id="Mesh accordion">
                <div class="w-4 flex justify-center">
                  <i class="fa-solid {isMeshExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-[9px] text-[#888]"></i>
                </div>
                <i class="fa-solid fa-draw-polygon text-[12px] mr-1.5 text-[#ccc]"></i>
                <span class="text-[#eee]">Mesh</span>
              </div>
              
              {#if isMeshExpanded}
                <div class="flex items-center pl-9 pr-2 py-[3px] bg-[#4772b3] text-white cursor-pointer group justify-between" alt-id="Mesh Vertex">
                  <div class="flex items-center gap-1.5">
                    <div class="w-[12px] h-[12px] border-[1.5px] border-current rounded-full relative"><div class="w-1 h-1 bg-current rounded-full absolute right-[-2px] bottom-[-2px]"></div></div>
                    <span>Vertex</span>
                  </div>
                  <span class="text-[11px] opacity-70">1.1M</span>
                </div>
                <div class="flex items-center pl-9 pr-2 py-[3px] hover:bg-[#333] cursor-pointer group justify-between" alt-id="Mesh Edge">
                  <div class="flex items-center gap-1.5">
                    <i class="fa-regular fa-square text-[13px] opacity-80"></i>
                    <span>Edge</span>
                  </div>
                  <span class="text-[11px] opacity-50">2.1M</span>
                </div>
                <div class="flex items-center pl-9 pr-2 py-[3px] hover:bg-[#333] cursor-pointer group justify-between" alt-id="Mesh Face">
                  <div class="flex items-center gap-1.5">
                    <i class="fa-solid fa-square text-[13px] opacity-80"></i>
                    <span>Face</span>
                  </div>
                  <span class="text-[11px] opacity-50">1.0M</span>
                </div>
                <div class="flex items-center pl-9 pr-2 py-[3px] hover:bg-[#333] cursor-pointer group justify-between" alt-id="Mesh Face Corner">
                  <div class="flex items-center gap-1.5">
                    <i class="fa-regular fa-clone text-[13px] opacity-80"></i>
                    <span>Face Corner</span>
                  </div>
                  <span class="text-[11px] opacity-50">2M</span>
                </div>
              {/if}

              <!-- Disabled Items -->
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Curve">
                <i class="fa-solid fa-bezier-curve text-[12px] mr-1.5"></i>
                <span>Curve</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Grease Pencil">
                <i class="fa-solid fa-pencil text-[12px] mr-1.5"></i>
                <span>Grease Pencil</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Point Cloud">
                <i class="fa-solid fa-braille text-[12px] mr-1.5" style="transform: rotate(45deg);"></i>
                <span>Point Cloud</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Volume Grids">
                <i class="fa-solid fa-cloud text-[12px] mr-1.5"></i>
                <span>Volume Grids</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Instances">
                <i class="fa-solid fa-layer-group text-[12px] mr-1.5"></i>
                <span>Instances</span>
              </div>
            </div>
          {/if}
          
          <div class="flex items-center pl-5 pr-2 py-1 opacity-40 cursor-not-allowed mt-1" alt-id="Disabled Bundle">
            <span>Bundle</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Table Area -->
    <div class="flex-1 bg-[#232323] overflow-auto relative hide-scrollbar" alt-id="Spreadsheet Table Area">
      <table class="w-full text-left border-collapse text-[13px]">
        <thead class="sticky top-0 z-10 bg-[#282828] border-b border-[#1f1f1f] text-[#ccc]">
          <tr>
            <th class="w-12 bg-[#2d2d2d] border-r border-[#1f1f1f]"></th>
            <th colspan="3" class="font-normal text-center py-1 border-r border-[#1f1f1f]">position</th>
          </tr>
        </thead>
        <tbody class="font-mono text-[12px]">
          {#each Array(41) as _, i}
            <tr class={i % 2 === 0 ? 'bg-[#2a2a2a]' : 'bg-[#232323]'} alt-id="Table row {i}">
              <td class="w-12 bg-[#2d2d2d] border-r border-[#1f1f1f] text-right pr-2 text-[#aaa] py-[3px] select-none">{i}</td>
              <td class="px-4 py-[3px] text-right text-[#eee]">{(Math.sin(i) > 0 ? 1.000 : Math.sin(i) < 0 ? -1.000 : 0.000).toFixed(3)}</td>
              <td class="px-4 py-[3px] text-right text-[#eee]">{(Math.cos(i) > 0 ? 1.000 : Math.cos(i) < 0 ? -1.000 : 0.000).toFixed(3)}</td>
              <td class="px-4 py-[3px] text-right text-[#eee]">0.000</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
