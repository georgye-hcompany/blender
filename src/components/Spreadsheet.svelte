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

<div class="w-full h-full flex flex-col bg-[#282828] text-[#e6e6e6] overflow-hidden" alt-id="Spreadsheet Window" appearance-id="dark panel with a header containing menu items, path navigation, and filter tools, and a spreadsheet table below" location-id="within the Spreadsheet editor container panel in the Blender workspace" functionality-id="displays a tabular view of object geometry data such as vertex positions, edges, and face attributes" intent-id="inspect and analyze the numerical data of the selected object geometry">
  <!-- Header Bar -->
  <div class="h-[28px] bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 py-1 justify-between select-none shrink-0">
    <div class="flex items-center gap-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      
      <div class="flex items-center text-[13px] text-[#ccc] gap-3 px-2 whitespace-nowrap">
        <span class="cursor-pointer hover:text-white" alt-id="View menu" appearance-id="underlined text menu item labeled View" location-id="leftmost item in the Spreadsheet header menu bar" functionality-id="opens the View dropdown menu for Spreadsheet display settings" intent-id="access view options for the spreadsheet panel"><u>V</u>iew</span>
      </div>

      <div class="w-[1px] h-4 bg-[#3c3c3c] mx-1"></div>

      <!-- Floor Path -->
      <div class="flex items-center gap-1.5 text-[13px] text-[#ccc]" alt-id="Spreadsheet Path" appearance-id="breadcrumb path showing the current object and geometry node path with icons" location-id="center area of the Spreadsheet header, between the menu and right-side tools" functionality-id="displays the data path to the currently viewed geometry data" intent-id="show which object and modifier or geometry is being inspected">
        <i class="fa-solid fa-draw-polygon text-[12px] text-[#ffb366] pointer-events-none"></i>
        <span class="text-[#eee] pointer-events-none font-medium">Floor</span>
        
        <div class="ml-2 w-5 h-5 flex items-center justify-center bg-[#4772b3] border border-[#222] rounded shadow-sm cursor-pointer" alt-id="Pin Button" appearance-id="small blue square button with a pin icon" location-id="right side of the Spreadsheet path area in the header" functionality-id="pins the current data path to keep it visible when selection changes" intent-id="lock the spreadsheet view to the current object data regardless of selection">
          <i class="fa-solid fa-thumbtack text-[11px] text-white pointer-events-none transform -rotate-45"></i>
        </div>
      </div>
    </div>
    
    <div class="flex items-center gap-2 pr-2">
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Pointer Tool" appearance-id="cursor icon button, not highlighted, showing inactive state" location-id="right side of the Spreadsheet header, first of the two tool buttons" functionality-id="activates the pointer tool for selecting rows in the spreadsheet" intent-id="switch to selection mode to interactively select geometry elements from the spreadsheet">
        <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] pointer-events-none"></i>
      </div>
      <div class="cursor-pointer text-[#a0a0a0] px-1 bg-[#4772b3] border border-[#4772b3] rounded h-[22px] flex items-center justify-center text-white" alt-id="Filter Tool" appearance-id="filter icon button, highlighted in blue showing active state" location-id="right side of the Spreadsheet header, second of the two tool buttons" functionality-id="activates the filter tool for filtering spreadsheet rows by expression" intent-id="narrow down visible spreadsheet rows by entering a filter expression">
        <i class="fa-solid fa-filter text-[12px] pointer-events-none"></i>
      </div>
    </div>
  </div>

  <div class="flex-1 flex overflow-hidden">
    <!-- Left Sidebar -->
    <div class="w-[180px] bg-[#1a1a1a] border-r border-[#1f1f1f] flex flex-col z-20 shrink-0 text-[12px] text-[#ccc]">
      <div class="p-2 border-b border-[#222]">
        <div class="flex items-center bg-[#282828] border border-[#3c3c3c] rounded h-[24px] px-2 cursor-pointer hover:bg-[#333] justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="Evaluated Dropdown" appearance-id="dropdown button showing the text Evaluated with a chevron" location-id="Spreadsheet header, right side after the tool buttons" functionality-id="selects whether to display original or evaluated geometry data in the spreadsheet" intent-id="choose to view the raw input data or the final computed geometry values">
          <span class="text-[13px] text-[#eee] pointer-events-none">Evaluated</span>
          <i class="fa-solid fa-chevron-down text-[10px] text-[#888] pointer-events-none"></i>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto hide-scrollbar pb-2">
        <!-- Geometry Accordion -->
        <div class="flex flex-col mt-1">
          <div class="flex items-center px-1 py-1 cursor-pointer hover:bg-[#333]" on:click={toggleGeometry} alt-id="Geometry accordion" appearance-id="collapsible row with a triangle arrow icon and the label Geometry" location-id="first section in the left sidebar filter panel of the Spreadsheet" functionality-id="expands or collapses the Geometry section showing available geometry data sources" intent-id="browse geometry data types available for the selected object">
            <div class="w-4 flex justify-center">
              <i class="fa-solid {isGeometryExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-[9px] text-[#888]"></i>
            </div>
            <span class="font-medium text-[#eee]">Geometry</span>
          </div>
          
          {#if isGeometryExpanded}
            <div class="flex items-center pl-5 pr-2 py-[3px] bg-[#4772b3] text-white cursor-pointer group" alt-id="Geometry selection" appearance-id="highlighted blue row showing the active geometry selection" location-id="inside the Geometry section of the Spreadsheet left sidebar" functionality-id="represents the currently selected geometry data source being displayed in the spreadsheet" intent-id="indicate which geometry data is currently being viewed in the table">
              <i class="fa-solid fa-circle-nodes text-[12px] mr-1.5 opacity-90"></i>
              <span class="truncate">(Geometry)</span>
            </div>
          {/if}
        </div>

        <!-- Domain Accordion -->
        <div class="flex flex-col mt-1">
          <div class="flex items-center px-1 py-1 cursor-pointer hover:bg-[#333]" on:click={toggleDomain} alt-id="Domain accordion" appearance-id="collapsible row with a triangle arrow icon and the label Domain" location-id="second section in the left sidebar filter panel of the Spreadsheet" functionality-id="expands or collapses the Domain section for selecting the geometry domain to view" intent-id="choose which geometry domain such as Vertex, Edge, or Face to display in the spreadsheet">
            <div class="w-4 flex justify-center">
              <i class="fa-solid {isDomainExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-[9px] text-[#888]"></i>
            </div>
            <span class="font-medium text-[#eee]">Domain</span>
          </div>
          
          {#if isDomainExpanded}
            <div class="flex flex-col">
              <!-- Mesh Accordion -->
              <div class="flex items-center pl-3 pr-2 py-1 cursor-pointer hover:bg-[#333]" on:click={toggleMesh} alt-id="Mesh accordion" appearance-id="collapsible row with a triangle arrow and the label Mesh" location-id="first item in the Domain section of the Spreadsheet left sidebar" functionality-id="expands or collapses the Mesh sub-section showing mesh domain options" intent-id="access vertex, edge, face, and face corner domain options for mesh data">
                <div class="w-4 flex justify-center">
                  <i class="fa-solid {isMeshExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-[9px] text-[#888]"></i>
                </div>
                <i class="fa-solid fa-draw-polygon text-[12px] mr-1.5 text-[#ccc]"></i>
                <span class="text-[#eee]">Mesh</span>
              </div>
              
              {#if isMeshExpanded}
                <div class="flex items-center pl-9 pr-2 py-[3px] bg-[#4772b3] text-white cursor-pointer group justify-between" alt-id="Mesh Vertex" appearance-id="highlighted blue row showing Vertex as the selected mesh domain" location-id="first item under Mesh in the Domain section of the Spreadsheet left sidebar" functionality-id="displays per-vertex attribute data in the spreadsheet table" intent-id="view and inspect the numeric data associated with each mesh vertex">
                  <div class="flex items-center gap-1.5">
                    <div class="w-[12px] h-[12px] border-[1.5px] border-current rounded-full relative"><div class="w-1 h-1 bg-current rounded-full absolute right-[-2px] bottom-[-2px]"></div></div>
                    <span>Vertex</span>
                  </div>
                  <span class="text-[11px] opacity-70">1.1M</span>
                </div>
                <div class="flex items-center pl-9 pr-2 py-[3px] hover:bg-[#333] cursor-pointer group justify-between" alt-id="Mesh Edge" appearance-id="row item labeled Edge in the Mesh domain section" location-id="second item under Mesh in the Domain section of the Spreadsheet left sidebar" functionality-id="switches the spreadsheet table to display per-edge attribute data" intent-id="inspect the numeric data associated with each mesh edge">
                  <div class="flex items-center gap-1.5">
                    <i class="fa-regular fa-square text-[13px] opacity-80"></i>
                    <span>Edge</span>
                  </div>
                  <span class="text-[11px] opacity-50">2.1M</span>
                </div>
                <div class="flex items-center pl-9 pr-2 py-[3px] hover:bg-[#333] cursor-pointer group justify-between" alt-id="Mesh Face" appearance-id="row item labeled Face in the Mesh domain section" location-id="third item under Mesh in the Domain section of the Spreadsheet left sidebar" functionality-id="switches the spreadsheet table to display per-face attribute data" intent-id="inspect the numeric data associated with each mesh polygon face">
                  <div class="flex items-center gap-1.5">
                    <i class="fa-solid fa-square text-[13px] opacity-80"></i>
                    <span>Face</span>
                  </div>
                  <span class="text-[11px] opacity-50">1.0M</span>
                </div>
                <div class="flex items-center pl-9 pr-2 py-[3px] hover:bg-[#333] cursor-pointer group justify-between" alt-id="Mesh Face Corner" appearance-id="row item labeled Face Corner in the Mesh domain section" location-id="fourth item under Mesh in the Domain section of the Spreadsheet left sidebar" functionality-id="switches the spreadsheet table to display per-face-corner attribute data" intent-id="inspect the numeric data associated with each vertex-face corner connection">
                  <div class="flex items-center gap-1.5">
                    <i class="fa-regular fa-clone text-[13px] opacity-80"></i>
                    <span>Face Corner</span>
                  </div>
                  <span class="text-[11px] opacity-50">2M</span>
                </div>
              {/if}

              <!-- Disabled Items -->
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Curve" appearance-id="dimmed row labeled Curve, not clickable" location-id="Domain section of the Spreadsheet left sidebar, below the Mesh options" functionality-id="represents the Curve domain option which is unavailable for the current object type" intent-id="show that Curve domain data is not available for the currently selected object">
                <i class="fa-solid fa-bezier-curve text-[12px] mr-1.5"></i>
                <span>Curve</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Grease Pencil" appearance-id="dimmed row labeled Grease Pencil, not clickable" location-id="Domain section of the Spreadsheet left sidebar, below the Curve option" functionality-id="represents the Grease Pencil domain option which is unavailable for the current object type" intent-id="show that Grease Pencil domain data is not available for the currently selected object">
                <i class="fa-solid fa-pencil text-[12px] mr-1.5"></i>
                <span>Grease Pencil</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Point Cloud" appearance-id="dimmed row labeled Point Cloud, not clickable" location-id="Domain section of the Spreadsheet left sidebar, below the Grease Pencil option" functionality-id="represents the Point Cloud domain option which is unavailable for the current object type" intent-id="show that Point Cloud domain data is not available for the currently selected object">
                <i class="fa-solid fa-braille text-[12px] mr-1.5" style="transform: rotate(45deg);"></i>
                <span>Point Cloud</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Volume Grids" appearance-id="dimmed row labeled Volume Grids, not clickable" location-id="Domain section of the Spreadsheet left sidebar, below the Point Cloud option" functionality-id="represents the Volume Grids domain option which is unavailable for the current object type" intent-id="show that Volume Grids domain data is not available for the currently selected object">
                <i class="fa-solid fa-cloud text-[12px] mr-1.5"></i>
                <span>Volume Grids</span>
              </div>
              <div class="flex items-center pl-7 pr-2 py-1 opacity-40 cursor-not-allowed" alt-id="Disabled Instances" appearance-id="dimmed row labeled Instances, not clickable" location-id="Domain section of the Spreadsheet left sidebar, below the Volume Grids option" functionality-id="represents the Instances domain option which is unavailable for the current object type" intent-id="show that Instances domain data is not available for the currently selected object">
                <i class="fa-solid fa-layer-group text-[12px] mr-1.5"></i>
                <span>Instances</span>
              </div>
            </div>
          {/if}
          
          <div class="flex items-center pl-5 pr-2 py-1 opacity-40 cursor-not-allowed mt-1" alt-id="Disabled Bundle" appearance-id="dimmed row labeled Bundle, not clickable" location-id="below the Domain section in the Spreadsheet left sidebar" functionality-id="represents the Bundle section which is unavailable for the current object type" intent-id="show that Bundle tracking data is not available for the currently selected object">
            <span>Bundle</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Table Area -->
    <div class="flex-1 bg-[#232323] overflow-auto relative hide-scrollbar" alt-id="Spreadsheet Table Area" appearance-id="dark table with alternating row shading, column headers, and numeric data cells" location-id="right side of the Spreadsheet panel, taking up the majority of the layout" functionality-id="displays the attribute data for the selected geometry domain in a tabular format" intent-id="provide a readable numeric view of all geometry attributes for analysis and debugging">
      <table class="w-full text-left border-collapse text-[13px]">
        <thead class="sticky top-0 z-10 bg-[#282828] border-b border-[#1f1f1f] text-[#ccc]">
          <tr>
            <th class="w-12 bg-[#2d2d2d] border-r border-[#1f1f1f]"></th>
            <th colspan="3" class="font-normal text-center py-1 border-r border-[#1f1f1f]">position</th>
          </tr>
        </thead>
        <tbody class="font-mono text-[12px]">
          {#each Array(41) as _, i}
            <tr class={i % 2 === 0 ? 'bg-[#2a2a2a]' : 'bg-[#232323]'} alt-id="Table row {i}" appearance-id="alternating {i % 2 === 0 ? 'light' : 'dark'} table row {i} containing numeric data cells for each attribute" location-id="row {i} within the Spreadsheet Table Area" functionality-id="displays the attribute values for geometry element {i} such as a vertex or edge" intent-id="inspect the data for element {i} in the spreadsheet">
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
