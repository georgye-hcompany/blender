<script>
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'outliner';
  export let windowId = '';
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="Top right Outliner editor panel" appearance-id="dark panel showing a scene hierarchy tree with collection and object entries" location-id="within an editor container panel in the top-right area of the Blender workspace" functionality-id="displays and manages the hierarchical scene structure including collections, objects, and their properties" intent-id="provide an overview of all scene objects organized in a tree structure for selection and visibility management">
  <!-- Header -->
  <div class="h-8 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-2 justify-between text-[13px] shrink-0" alt-id="Outliner header" appearance-id="dark horizontal bar with display mode dropdown, search bar, filter button, and new collection button" location-id="top of the Outliner panel, below the editor container header" functionality-id="contains controls for filtering, searching, and managing the outliner display mode" intent-id="provide tools for navigating and filtering the scene hierarchy">
    <!-- Left side -->
    <div class="flex items-center gap-2">
      <EditorSelector bind:editor={currentEditor} windowId={windowId} />
      <div class="flex items-center gap-1.5 px-2 py-0.5 bg-[#282828] border border-[#3c3c3c] rounded cursor-pointer hover:bg-[#333]" alt-id="Outliner Display Mode" appearance-id="dropdown button showing the current display mode such as Scenes with a chevron" location-id="left side of the Outliner header" functionality-id="opens a dropdown to switch between different outliner display modes like Scenes, View Layer, and Sequence" intent-id="change what type of data is displayed in the outliner hierarchy">
        <i class="fa-solid fa-layer-group text-[12px] text-[#ccc] pointer-events-none"></i>
        <span class="text-[#ccc] pointer-events-none">View Layer</span>
        <i class="fa-solid fa-chevron-down text-[9px] text-[#a0a0a0] pointer-events-none"></i>
      </div>
    </div>
    
    <!-- Middle -->
    <div class="flex-1 flex justify-center px-2">
      <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] w-[180px] max-w-full justify-between" alt-id="Outliner Search Bar" appearance-id="dark search input field with a magnifying glass icon and text placeholder" location-id="center of the Outliner header" functionality-id="accepts text to filter the outliner tree to show only matching items" intent-id="quickly find specific objects or collections by name in the scene hierarchy">
        <div class="flex items-center gap-2 text-[#888]">
          <i class="fa-solid fa-magnifying-glass text-[10px] pointer-events-none"></i>
          <span class="text-[12px] pointer-events-none">Search</span>
        </div>
      </div>
    </div>
    
    <!-- Right side tools -->
    <div class="flex items-center gap-2">
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="Filter" appearance-id="small filter funnel icon button" location-id="right side of the Outliner header, before the New Collection button" functionality-id="opens a filter panel for customizing which object types are shown in the outliner" intent-id="hide or show specific types of scene data in the hierarchy view">
        <i class="fa-solid fa-filter text-[12px] pointer-events-none"></i>
      </div>
      <div class="cursor-pointer hover:text-white text-[#a0a0a0] px-1" alt-id="New Collection" appearance-id="small button with a collection/folder plus icon" location-id="right side of the Outliner header, last button" functionality-id="creates a new empty collection at the current level in the scene hierarchy" intent-id="quickly add a new organizational collection to the scene">
        <i class="fa-solid fa-folder-plus text-[14px] pointer-events-none"></i>
      </div>
      <div class="w-[1px] h-4 bg-[#3c3c3c] mx-1"></div>
      
      <!-- Column Headers -->
      <div class="flex items-center text-[#ccc] opacity-70" style="gap: 12px; margin-right: 6px;">
        <i class="fa-solid fa-square-check text-[12px]" alt-id="Header: Enable Collection" appearance-id="checkmark square icon indicating the enable/disable collection column header" location-id="first column header icon in the Outliner header row, far right" functionality-id="labels the column for enabling or disabling collections and their visibility in all modes" intent-id="indicate which column controls collection enable state"></i>
        <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg]" alt-id="Header: Selectable" appearance-id="pointer arrow icon indicating the selectability column header" location-id="second column header icon in the Outliner header row" functionality-id="labels the column for toggling whether objects can be selected in the viewport" intent-id="indicate which column controls object selectability"></i>
        <i class="fa-solid fa-eye text-[12px]" alt-id="Header: Hide in Viewport" appearance-id="eye icon indicating the hide in viewport column header" location-id="third column header icon in the Outliner header row" functionality-id="labels the column for toggling object visibility in the viewport" intent-id="indicate which column controls viewport visibility"></i>
        <i class="fa-solid fa-desktop text-[12px]" alt-id="Header: Disable in Viewports" appearance-id="monitor/desktop icon indicating the disable in viewports column header" location-id="fourth column header icon in the Outliner header row" functionality-id="labels the column for globally disabling objects across all viewports" intent-id="indicate which column controls global viewport display state"></i>
        <i class="fa-solid fa-camera text-[12px]" alt-id="Header: Disable in Renders" appearance-id="camera icon indicating the disable in renders column header" location-id="fifth column header icon in the Outliner header row" functionality-id="labels the column for excluding objects from rendering" intent-id="indicate which column controls render visibility state"></i>
      </div>
    </div>
  </div>
  
  <!-- Tree List -->
  <div class="flex-1 overflow-y-auto bg-[#232323] text-[#eee] text-[13px] hide-scrollbar" alt-id="Outliner tree list" appearance-id="scrollable dark list of collection and object rows with indented hierarchy and status icons" location-id="main content area of the Outliner panel, below the header" functionality-id="displays the full scene hierarchy as an interactive tree with expand/collapse and visibility controls" intent-id="provide a structured overview of all scene elements for selection, organization, and visibility management">
    <div class="flex flex-col py-1">
      
      <!-- Row 1: Scene Collection -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer" alt-id="Outliner row: Scene Collection" appearance-id="tree row showing a folder icon and the text Scene Collection, the root node of the scene hierarchy" location-id="top row of the Outliner tree list" functionality-id="represents the root Scene Collection containing all scene objects and sub-collections" intent-id="access and manage the top-level collection that holds all scene content">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 4px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box text-[13px] text-[#eee] mr-1.5 opacity-80"></i>
            <span class="truncate">Scene Collection</span>
          </div>
        </div>
      </div>
      
      <!-- Row 2: Common -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Common" appearance-id="tree row showing a folder icon, a expand triangle, and the text Common" location-id="second row in the Outliner tree list, nested under Scene Collection" functionality-id="represents the Common collection containing shared assets like reference images" intent-id="manage objects in the Common shared assets collection">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Common</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Common: Checkbox checked" appearance-id="solid white checkmark square icon showing the collection is enabled" location-id="enable column of the Outliner Common collection row" functionality-id="indicates the Common collection is enabled and visible in the scene" intent-id="show that the Common collection is active and its objects are accessible"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Common: Selectable solid" appearance-id="solid white pointer arrow icon showing selectability is on" location-id="selectable column of the Outliner Common collection row" functionality-id="indicates the Common collection objects are selectable in the viewport" intent-id="show that objects in Common can be clicked and selected"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Common: Visible solid" appearance-id="solid white eye icon showing viewport visibility is on" location-id="visible column of the Outliner Common collection row" functionality-id="indicates the Common collection is visible in the viewport" intent-id="show that objects in Common are displayed in the 3D viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Common: Monitor solid" appearance-id="solid white monitor icon showing global viewport visibility is on" location-id="monitor column of the Outliner Common collection row" functionality-id="indicates the Common collection is enabled across all viewports" intent-id="show that Common collection objects appear in all viewport displays"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Common: Camera solid" appearance-id="solid white camera icon showing render visibility is on" location-id="render column of the Outliner Common collection row" functionality-id="indicates the Common collection objects will appear in renders" intent-id="show that Common collection objects are included in the render output"></i>
        </div>
      </div>

      <!-- Row 3: Reference Images -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Reference Images" appearance-id="tree row showing a folder icon and the text Reference Images, nested under Common" location-id="Outliner tree list, nested under Common collection" functionality-id="represents the Reference Images sub-collection containing image plane references" intent-id="manage the reference images used for modeling reference in the scene">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-[#aaa] mr-1.5"></i>
            <span class="truncate">Reference Images</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Reference Images: Checkbox unchecked" appearance-id="empty white square outline checkbox showing collection is not enabled" location-id="enable column of the Reference Images collection row" functionality-id="indicates the Reference Images collection is currently disabled" intent-id="show that the Reference Images collection is not active in the current state"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Reference Images: Selectable solid grey" appearance-id="gray pointer arrow icon showing selectability is partially on" location-id="selectable column of the Reference Images collection row" functionality-id="indicates the Reference Images objects have restricted selectability" intent-id="show that Reference Images objects may have limited selection capability"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Reference Images: Visible closed grey" appearance-id="gray closed eye icon showing the collection is hidden in viewport" location-id="visible column of the Reference Images collection row" functionality-id="indicates the Reference Images collection is hidden in the viewport" intent-id="show that reference image planes are not currently visible in the 3D viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Reference Images: Monitor white" appearance-id="white monitor icon showing global viewport display is on" location-id="monitor column of the Reference Images collection row" functionality-id="indicates the Reference Images collection is enabled in global viewport settings" intent-id="show that reference images are enabled at the viewport level even if locally hidden"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Reference Images: Camera outline grey" appearance-id="gray camera icon showing render visibility is off" location-id="render column of the Reference Images collection row" functionality-id="indicates the Reference Images collection is excluded from renders" intent-id="show that reference image planes do not appear in the final rendered output"></i>
        </div>
      </div>

      <!-- Row 4: Atelier Image -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Atelier Image" appearance-id="tree row showing an image plane icon and the text Atelier Image" location-id="Outliner tree list, nested under Reference Images collection" functionality-id="represents the Atelier Image reference plane object in the scene" intent-id="manage the Atelier reference image plane used for modeling reference">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 60px;">
            <i class="fa-solid fa-image text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Atelier Image</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Atelier Image: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Atelier Image row" functionality-id="indicates the Atelier Image object is enabled" intent-id="show that the Atelier Image object is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Atelier Image: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Atelier Image row" functionality-id="indicates the Atelier Image has restricted selectability" intent-id="show that the Atelier Image object has limited selection in the viewport"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Atelier Image: Visible closed grey" appearance-id="gray closed eye icon showing the object is hidden" location-id="visible column of the Atelier Image row" functionality-id="indicates the Atelier Image is hidden in the viewport" intent-id="show that the Atelier Image plane is not displayed in the 3D viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Atelier Image: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Atelier Image row" functionality-id="indicates the Atelier Image is enabled globally in viewports" intent-id="show that the Atelier Image is globally enabled even when locally hidden"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Atelier Image: Camera grey" appearance-id="gray camera icon showing the object is excluded from renders" location-id="render column of the Atelier Image row" functionality-id="indicates the Atelier Image is excluded from the render output" intent-id="show that the Atelier Image reference plane does not appear in renders"></i>
        </div>
      </div>

      <!-- Row 5: Villa Image -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Villa Image" appearance-id="tree row showing an image plane icon and the text Villa Image" location-id="Outliner tree list, nested under Reference Images collection" functionality-id="represents the Villa Image reference plane object in the scene" intent-id="manage the Villa reference image plane used for modeling reference">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 60px;">
            <i class="fa-solid fa-image text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Villa Image</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Villa Image: Checkbox unchecked" appearance-id="empty white square outline checkbox" location-id="enable column of the Villa Image row" functionality-id="indicates the Villa Image object is disabled" intent-id="show that the Villa Image object is not enabled"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Villa Image: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Villa Image row" functionality-id="indicates the Villa Image has restricted selectability" intent-id="show that Villa Image selection is limited"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Villa Image: Visible closed grey" appearance-id="gray closed eye icon showing the object is hidden" location-id="visible column of the Villa Image row" functionality-id="indicates the Villa Image is hidden in the viewport" intent-id="show that the Villa Image plane is not displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Villa Image: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Villa Image row" functionality-id="indicates the Villa Image is globally enabled in viewports" intent-id="show the Villa Image is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Villa Image: Camera grey" appearance-id="gray camera icon" location-id="render column of the Villa Image row" functionality-id="indicates the Villa Image is excluded from renders" intent-id="show that Villa Image does not appear in renders"></i>
        </div>
      </div>

      <!-- Row 6: Bed Bunker Image -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Bed Bunker Image" appearance-id="tree row showing an image plane icon and the text Bed Bunker Image" location-id="Outliner tree list, nested under Reference Images collection" functionality-id="represents the Bed Bunker Image reference plane object in the scene" intent-id="manage the Bed Bunker reference image plane used for modeling reference">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#aaa]" style="padding-left: 60px;">
            <i class="fa-solid fa-image text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Bed Bunker Image</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Bed Bunker Image: Checkbox unchecked" appearance-id="empty white square outline checkbox" location-id="enable column of the Bed Bunker Image row" functionality-id="indicates the Bed Bunker Image object is disabled" intent-id="show that the Bed Bunker Image object is not enabled"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Bed Bunker Image: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Bed Bunker Image row" functionality-id="indicates the Bed Bunker Image has restricted selectability" intent-id="show that Bed Bunker Image selection is limited"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Bed Bunker Image: Visible closed grey" appearance-id="gray closed eye icon" location-id="visible column of the Bed Bunker Image row" functionality-id="indicates the Bed Bunker Image is hidden in the viewport" intent-id="show that the Bed Bunker Image plane is not displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Bed Bunker Image: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Bed Bunker Image row" functionality-id="indicates the Bed Bunker Image is globally enabled" intent-id="show the Bed Bunker Image is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Bed Bunker Image: Camera grey" appearance-id="gray camera icon" location-id="render column of the Bed Bunker Image row" functionality-id="indicates the Bed Bunker Image is excluded from renders" intent-id="show that Bed Bunker Image does not appear in renders"></i>
        </div>
      </div>

      <!-- Row 7: Camera -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Camera" appearance-id="tree row showing a camera icon and the text Camera" location-id="Outliner tree list, nested under Common collection" functionality-id="represents the Camera object used for rendering the scene" intent-id="manage the scene camera for controlling the render viewpoint">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-video text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate text-white">Camera</span>
            <i class="fa-solid fa-video text-[12px] text-[#66cc99] ml-2" alt-id="Camera object data" appearance-id="small green video camera icon indicating a camera data-block" location-id="inside the Camera outliner row, after the object name" functionality-id="links to the camera data properties such as focal length and sensor size" intent-id="access the camera data-block for editing camera-specific settings"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white outline-none" alt-id="Camera: Selectable grey outline (no fill)" appearance-id="gray pointer arrow icon with outline only, no fill" location-id="selectable column of the Camera row" functionality-id="indicates the Camera has limited selectability in viewport" intent-id="show that camera selectability is restricted in the current configuration"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Camera: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Camera row" functionality-id="indicates the Camera is visible in the viewport" intent-id="show that the camera object is displayed in the 3D viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Camera: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Camera row" functionality-id="indicates the Camera is globally enabled in viewports" intent-id="show that the camera appears in all viewport displays"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Camera: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Camera row" functionality-id="indicates the Camera is included in renders" intent-id="show that this camera object is renderable"></i>
        </div>
      </div>

      <!-- Row 8: Studio -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Studio" appearance-id="tree row showing a folder icon and the text Studio" location-id="Outliner tree list, under Scene Collection" functionality-id="represents the Studio collection containing studio environment objects" intent-id="manage objects in the studio environment collection">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Studio</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Studio: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Studio collection row" functionality-id="indicates the Studio collection is enabled and active" intent-id="show that the Studio collection is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Studio: Selectable solid" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Studio collection row" functionality-id="indicates Studio collection objects are selectable" intent-id="show that Studio objects can be selected in the viewport"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Studio: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Studio collection row" functionality-id="indicates the Studio collection is visible in viewport" intent-id="show that Studio collection objects are displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Studio: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Studio collection row" functionality-id="indicates the Studio collection is globally enabled" intent-id="show that Studio appears in all viewport displays"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Studio: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Studio collection row" functionality-id="indicates the Studio collection will appear in renders" intent-id="show that Studio collection objects are renderable"></i>
        </div>
      </div>

      <!-- Row 9: Window -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Window" appearance-id="tree row showing a mesh cube icon and the text Window" location-id="Outliner tree list, nested under Studio collection" functionality-id="represents the Window mesh object in the studio environment" intent-id="manage the Window object properties and visibility">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Window</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Window: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Window row" functionality-id="indicates the Window object is enabled" intent-id="show that the Window object is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Window: Selectable solid" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Window row" functionality-id="indicates the Window object is selectable" intent-id="show that Window can be selected in the viewport"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Window: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Window row" functionality-id="indicates the Window object is visible in viewport" intent-id="show that the Window object is displayed in the viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Window: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Window row" functionality-id="indicates the Window is globally enabled" intent-id="show that Window appears in all viewports"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Window: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Window row" functionality-id="indicates the Window object is included in renders" intent-id="show that the Window mesh appears in renders"></i>
        </div>
      </div>

      <!-- Row 10: Empty -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Empty" appearance-id="tree row showing an axes arrows icon and the text Empty" location-id="Outliner tree list, nested under Studio collection" functionality-id="represents the Empty axis object used as a scene helper or parent" intent-id="manage the Empty object as a grouping or organizational helper">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-arrows-up-down-left-right text-[13px] text-[#ffb366] mr-1.5" style="transform: rotate(45deg);"></i>
            <span class="truncate">Empty</span>
            <i class="fa-solid fa-draw-polygon text-[12px] text-[#ffb366] ml-2 opacity-80" alt-id="Empty object data" appearance-id="small orange polygon icon indicating empty object data" location-id="inside the Empty outliner row, after the object name" functionality-id="links to the empty object data properties" intent-id="access properties of the empty object"></i>
            <span class="text-[10px] ml-[1px]">7</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Empty: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Empty row" functionality-id="indicates the Empty object has limited selectability" intent-id="show that Empty selection is restricted"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Empty: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the Empty row" functionality-id="indicates the Empty is visible but may be less prominent" intent-id="show the Empty object visibility status"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Empty: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Empty row" functionality-id="indicates the Empty is globally enabled" intent-id="show that Empty is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Empty: Camera grey" appearance-id="gray camera icon" location-id="render column of the Empty row" functionality-id="indicates the Empty may be excluded from renders" intent-id="show render status of the Empty object"></i>
        </div>
      </div>

      <!-- Row 11: Window Board -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Window Board" appearance-id="tree row showing a mesh icon and the text Window Board with modifier and geometry nodes indicators" location-id="Outliner tree list, nested under Studio collection" functionality-id="represents the Window Board mesh object with modifiers and geometry nodes" intent-id="manage the Window Board object including its modifier stack">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            <span class="truncate">Window Board</span>
            <i class="fa-solid fa-wrench text-[12px] text-[#4772b3] ml-2" alt-id="Window Board Modifier" appearance-id="small blue wrench icon indicating a modifier is applied" location-id="inside the Window Board outliner row, after the object name" functionality-id="indicates the Window Board has modifier(s) applied to its geometry" intent-id="show that the Window Board uses procedural modifiers"></i>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-1" alt-id="Window Board Geometry Nodes" appearance-id="small green circle nodes icon indicating geometry nodes are applied" location-id="inside the Window Board outliner row, after the modifier icon" functionality-id="indicates the Window Board has Geometry Nodes modifier" intent-id="show that Window Board uses node-based geometry processing"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Window Board: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Window Board row" functionality-id="indicates Window Board has limited selectability" intent-id="show Window Board selection status"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Window Board: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the Window Board row" functionality-id="indicates Window Board visibility status" intent-id="show Window Board display state"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Window Board: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Window Board row" functionality-id="indicates Window Board is globally enabled" intent-id="show Window Board global enable state"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Window Board: Camera grey" appearance-id="gray camera icon" location-id="render column of the Window Board row" functionality-id="indicates Window Board render status" intent-id="show whether Window Board appears in renders"></i>
        </div>
      </div>

      <!-- Row 12: Structure -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Structure" appearance-id="tree row showing a folder icon and the text Structure" location-id="Outliner tree list, as a major collection" functionality-id="represents the Structure collection containing architectural structure objects" intent-id="manage objects in the architectural structure collection">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Structure</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Structure: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Structure collection row" functionality-id="indicates the Structure collection is enabled" intent-id="show the Structure collection is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Structure: Selectable solid" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Structure collection row" functionality-id="indicates Structure objects are selectable" intent-id="show Structure objects can be selected"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Structure: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Structure collection row" functionality-id="indicates the Structure collection is visible" intent-id="show the Structure collection is displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Structure: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Structure collection row" functionality-id="indicates Structure is globally enabled" intent-id="show Structure is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Structure: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Structure collection row" functionality-id="indicates Structure collection is included in renders" intent-id="show Structure objects are renderable"></i>
        </div>
      </div>

      <!-- Row 13-19: Beams and Cubes -->
      {#each ['Beam2', 'Beam2.001', 'Beam3', 'Beam4', 'Beam5', 'Cube', 'Cube.002'] as name}
        <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: {name}" appearance-id="tree row showing a mesh object icon and the object name" location-id="Outliner tree list, nested under the Structure collection" functionality-id="represents a structural mesh object in the scene" intent-id="select and manage this structural scene object">
          <div class="flex-1 flex items-center h-full min-w-0">
            <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
              <div class="w-3 flex justify-center items-center mr-1">
                <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
              </div>
              <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
              <span class="truncate">{name}</span>
              <i class="fa-solid fa-wrench text-[12px] text-[#4772b3] ml-2" alt-id="{name} Modifier" appearance-id="small blue wrench icon indicating a modifier is applied to the object" location-id="inside the named object outliner row, after the object name" functionality-id="indicates the named object has modifier(s) applied" intent-id="show that this object uses procedural modifiers in its stack"></i>
              <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-1" alt-id="{name} Geometry Nodes" appearance-id="small green circle nodes icon indicating geometry nodes" location-id="inside the named structural object outliner row, after the object name" functionality-id="indicates the named structural object has Geometry Nodes applied" intent-id="show that this structural object uses node-based geometry processing"></i>
            </div>
          </div>
          <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
            <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="{name}: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the named object outliner row" functionality-id="indicates the named object has limited selectability" intent-id="show the object selection state"></i>
            <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="{name}: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the named object outliner row" functionality-id="indicates the named object visibility status" intent-id="show whether the object is displayed in the viewport"></i>
            <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="{name}: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the named structural object outliner row" functionality-id="indicates the structural object is globally enabled" intent-id="show the object is active in global enable state"></i>
            <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="{name}: Camera grey" appearance-id="gray camera icon" location-id="render column of the named structural object outliner row" functionality-id="indicates the structural object render status" intent-id="show whether this structural object appears in renders"></i>
          </div>
        </div>
      {/each}

      <!-- Row 20: Lighting -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Lighting" appearance-id="tree row showing a folder icon and the text Lighting" location-id="Outliner tree list, as a major collection for lighting objects" functionality-id="represents the Lighting collection containing all light objects in the scene" intent-id="manage all scene lighting objects as a group">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Lighting</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Lighting: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Lighting collection row" functionality-id="indicates the Lighting collection is enabled" intent-id="show the Lighting collection is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="Lighting: Selectable grey outline (no fill)" appearance-id="gray pointer arrow outline icon with no fill" location-id="selectable column of the Lighting collection row" functionality-id="indicates Lighting objects have restricted selectability" intent-id="show light objects have limited selection capability"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Lighting: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the Lighting collection row" functionality-id="indicates Lighting visibility status" intent-id="show the Lighting collection display state"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Lighting: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Lighting collection row" functionality-id="indicates Lighting is globally enabled" intent-id="show Lighting is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Lighting: Camera grey" appearance-id="gray camera icon" location-id="render column of the Lighting collection row" functionality-id="indicates Lighting render status" intent-id="show Lighting render visibility"></i>
        </div>
      </div>

      <!-- Row 21-23: Bounce/Fill Lights -->
      {#each ['Bounce Light', 'Fill Light', 'Fill Light.001'] as name}
        <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: {name}" appearance-id="tree row showing a light bulb icon and the light object name" location-id="Outliner tree list, nested under the Lighting collection" functionality-id="represents a light object in the scene" intent-id="select and manage this scene lighting object">
          <div class="flex-1 flex items-center h-full min-w-0">
            <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
              <div class="w-3 flex justify-center items-center mr-1">
                <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
              </div>
              <i class="fa-solid fa-lightbulb text-[13px] text-[#ffb366] mr-1.5"></i>
              <span class="truncate">{name}</span>
              <i class="fa-solid fa-lightbulb text-[12px] text-[#66cc99] ml-2" style="transform: rotate(180deg);" alt-id="{name} Light Data" appearance-id="small green inverted light bulb icon indicating light data" location-id="inside the named light object outliner row, after the object name" functionality-id="links to the light data properties such as energy and color" intent-id="access light-specific data properties for the named light object"></i>
            </div>
          </div>
          <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
            <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="{name}: Selectable grey outline" appearance-id="gray pointer arrow outline icon" location-id="selectable column of the named light object row" functionality-id="indicates the light object has restricted selectability" intent-id="show the light object selection state"></i>
            <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="{name}: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the named light object outliner row" functionality-id="indicates the light object visibility status in the viewport" intent-id="show whether this light object is displayed in the viewport"></i>
            <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="{name}: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the named light object outliner row" functionality-id="indicates the light object is globally enabled" intent-id="show the light object is active in global enable state"></i>
            <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="{name}: Camera grey" appearance-id="gray camera icon" location-id="render column of the named light object outliner row" functionality-id="indicates the light object render status" intent-id="show whether this light object appears in renders"></i>
          </div>
        </div>
      {/each}

      <!-- Row 24: IrradianceVolume -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: IrradianceVolume" appearance-id="tree row showing a light probe icon and the text IrradianceVolume" location-id="Outliner tree list, nested under the Lighting collection" functionality-id="represents the IrradianceVolume light probe object for Eevee global illumination" intent-id="manage the irradiance volume probe used for baking indirect lighting">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-braille text-[13px] text-[#ffb366] mr-1.5" style="transform: rotate(45deg);"></i>
            <span class="truncate">IrradianceVolume</span>
            <i class="fa-solid fa-braille text-[12px] text-[#66cc99] ml-2" alt-id="IrradianceVolume Data" appearance-id="small green braille dots icon indicating irradiance volume data" location-id="inside the IrradianceVolume outliner row, after the object name" functionality-id="links to the irradiance volume data properties" intent-id="access the IrradianceVolume light probe settings"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="IrradianceVolume: Selectable grey outline" appearance-id="gray pointer arrow outline icon" location-id="selectable column of the IrradianceVolume row" functionality-id="indicates IrradianceVolume selectability status" intent-id="show the IrradianceVolume selection state"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="IrradianceVolume: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the IrradianceVolume row" functionality-id="indicates IrradianceVolume visibility in viewport" intent-id="show IrradianceVolume display state"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="IrradianceVolume: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the IrradianceVolume row" functionality-id="indicates IrradianceVolume is globally enabled" intent-id="show IrradianceVolume global enable state"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="IrradianceVolume: Camera grey" appearance-id="gray camera icon" location-id="render column of the IrradianceVolume row" functionality-id="indicates IrradianceVolume render status" intent-id="show whether IrradianceVolume appears in renders"></i>
        </div>
      </div>

      <!-- Row 25: Spot_Outside -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Spot_Outside" appearance-id="tree row showing a spotlight icon and the text Spot_Outside" location-id="Outliner tree list, nested under the Lighting collection" functionality-id="represents the Spot_Outside light object, a spot light used for exterior lighting" intent-id="manage the outdoor spotlight that illuminates the scene from outside">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-lightbulb text-[13px] text-[#ffb366] mr-1.5"></i>
            <span class="truncate">Spot_Outside</span>
            <i class="fa-solid fa-lightbulb text-[12px] text-[#66cc99] ml-2" style="transform: rotate(180deg);" alt-id="Spot_Outside Light Data" appearance-id="small green inverted light bulb icon indicating spot light data" location-id="inside the Spot_Outside outliner row, after the object name" functionality-id="links to the spot light data properties" intent-id="access the Spot_Outside light data settings like cone angle and energy"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#555] outline-none" alt-id="Spot_Outside: Selectable grey outline" appearance-id="gray pointer arrow outline icon" location-id="selectable column of the Spot_Outside row" functionality-id="indicates Spot_Outside selectability status" intent-id="show the Spot_Outside light selection state"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Spot_Outside: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the Spot_Outside row" functionality-id="indicates Spot_Outside visibility in viewport" intent-id="show Spot_Outside display state"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Spot_Outside: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Spot_Outside row" functionality-id="indicates Spot_Outside is globally enabled" intent-id="show Spot_Outside global enable state"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Spot_Outside: Camera grey" appearance-id="gray camera icon" location-id="render column of the Spot_Outside row" functionality-id="indicates Spot_Outside render status" intent-id="show whether Spot_Outside appears in renders"></i>
        </div>
      </div>

      <!-- Row 26: Volume -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Volume" appearance-id="tree row showing a volume cube icon and the text Volume with geometry nodes indicator" location-id="Outliner tree list, nested under the Lighting collection" functionality-id="represents the Volume object used for volumetric effects" intent-id="manage the volumetric element used for fog, smoke, or atmospheric effects">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            <span class="truncate">Volume</span>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-2" alt-id="Volume Geometry Nodes" appearance-id="small green circle nodes icon indicating geometry nodes" location-id="inside the Volume outliner row, after the object name" functionality-id="indicates the Volume object has Geometry Nodes applied" intent-id="show the Volume uses node-based geometry processing"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Volume: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Volume row" functionality-id="indicates Volume selectability status" intent-id="show the Volume selection state"></i>
          <i class="fa-solid fa-chevron-down text-[12px] text-[#ccc]" alt-id="Volume: Eye half open grey" appearance-id="gray chevron down icon indicating partially visible state" location-id="visible column of the Volume row" functionality-id="indicates the Volume has a partially visible or restricted visibility state" intent-id="show that the Volume object visibility is limited or conditional"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Volume: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Volume row" functionality-id="indicates Volume is globally enabled" intent-id="show the Volume global enable state"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Volume: Camera grey" appearance-id="gray camera icon" location-id="render column of the Volume row" functionality-id="indicates Volume render status" intent-id="show whether Volume appears in renders"></i>
        </div>
      </div>

      <!-- Row 27: Walls -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Walls" appearance-id="tree row showing a folder icon and the text Walls" location-id="Outliner tree list, as a major collection for wall objects" functionality-id="represents the Walls collection containing all wall mesh objects in the scene" intent-id="manage all architectural wall objects as a group">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Walls</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Walls: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Walls collection row" functionality-id="indicates the Walls collection is enabled" intent-id="show the Walls collection is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Walls: Selectable solid" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Walls collection row" functionality-id="indicates Walls objects are selectable" intent-id="show Walls objects can be selected"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Walls: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Walls collection row" functionality-id="indicates the Walls collection is visible" intent-id="show the Walls collection is displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Walls: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Walls collection row" functionality-id="indicates Walls is globally enabled" intent-id="show Walls is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Walls: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Walls collection row" functionality-id="indicates the Walls collection is included in renders" intent-id="show Walls objects are renderable"></i>
        </div>
      </div>

      <!-- Row 28-29: Wall1, Wall2 -->
      {#each ['Wall1', 'Wall2'] as name}
        <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: {name}" appearance-id="tree row showing a mesh object icon and the wall object name" location-id="Outliner tree list, nested under the Walls collection" functionality-id="represents a wall mesh object in the scene" intent-id="select and manage this architectural wall object">
          <div class="flex-1 flex items-center h-full min-w-0">
            <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
              <div class="w-3 flex justify-center items-center mr-1">
                <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
              </div>
              <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
              <span class="truncate">{name}</span>
              <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-2" alt-id="{name} Geometry Nodes" appearance-id="small green circle nodes icon indicating geometry nodes" location-id="inside the named wall object outliner row, after the object name" functionality-id="indicates the named wall object has Geometry Nodes applied" intent-id="show that this wall object uses node-based geometry processing"></i>
            </div>
          </div>
          <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
            <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="{name}: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the named wall object outliner row" functionality-id="indicates the wall object has limited selectability" intent-id="show the wall object selection state"></i>
            <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="{name}: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the named wall object outliner row" functionality-id="indicates the wall object visibility status in the viewport" intent-id="show whether this wall object is displayed in the viewport"></i>
            <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="{name}: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the named wall object outliner row" functionality-id="indicates the wall object is globally enabled" intent-id="show the wall object is active in global enable state"></i>
            <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="{name}: Camera grey" appearance-id="gray camera icon" location-id="render column of the named wall object outliner row" functionality-id="indicates the wall object render status" intent-id="show whether this wall object appears in renders"></i>
          </div>
        </div>
      {/each}

      <!-- Row 30: Floor Collection -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Floor Collection" appearance-id="tree row showing a folder icon and the text Floor Collection" location-id="Outliner tree list, as a major collection for floor objects" functionality-id="represents the Floor Collection containing all floor and ground mesh objects" intent-id="manage all floor and ground level objects as a group">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 36px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium">Floor</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Floor Collection: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Floor Collection row" functionality-id="indicates the Floor Collection is enabled" intent-id="show the Floor Collection is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Floor Collection: Selectable solid" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Floor Collection row" functionality-id="indicates Floor Collection objects are selectable" intent-id="show Floor Collection objects can be selected"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Floor Collection: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Floor Collection row" functionality-id="indicates the Floor Collection is visible" intent-id="show the Floor Collection is displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Floor Collection: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Floor Collection row" functionality-id="indicates Floor Collection is globally enabled" intent-id="show Floor Collection is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Floor Collection: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Floor Collection row" functionality-id="indicates the Floor Collection is included in renders" intent-id="show Floor Collection objects are renderable"></i>
        </div>
      </div>

      <!-- Row 31: Floor Object (Selected) -->
      <div class="flex items-center h-[22px] bg-[#4772b3] cursor-pointer group" alt-id="Outliner row: Floor Object" appearance-id="blue highlighted tree row showing a mesh icon and the text Floor Object as the currently active object" location-id="Outliner tree list, nested under Floor Collection, highlighted as active" functionality-id="represents the Floor Object mesh, currently the active selected object in the scene" intent-id="identify and manage the currently active selected floor mesh object">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-white" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-white"></i>
            </div>
            <div class="w-3.5 h-3.5 border border-[#ffb366] bg-[#282828] rounded-sm flex items-center justify-center mr-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366]" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            </div>
            <span class="truncate">Floor</span>
            <i class="fa-solid fa-wrench text-[12px] text-[#99b3e6] ml-2" alt-id="Floor Object Modifier" appearance-id="small light blue wrench icon indicating a modifier is applied" location-id="inside the Floor Object outliner row, after the object name" functionality-id="indicates the Floor Object has modifier(s) applied" intent-id="show that Floor Object uses procedural modifiers"></i>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-1" alt-id="Floor Object Geometry Nodes" appearance-id="small green circle nodes icon indicating geometry nodes" location-id="inside the Floor Object outliner row, after the modifier icon" functionality-id="indicates the Floor Object has Geometry Nodes applied" intent-id="show that Floor Object uses node-based geometry processing"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Floor Object: Selectable solid white" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Floor Object row" functionality-id="indicates the Floor Object is selectable" intent-id="show Floor Object can be selected"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Floor Object: Visible solid white" appearance-id="solid white eye icon" location-id="visible column of the Floor Object row" functionality-id="indicates the Floor Object is visible" intent-id="show Floor Object is displayed in viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Floor Object: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Floor Object row" functionality-id="indicates the Floor Object is globally enabled" intent-id="show Floor Object global enable state"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Floor Object: Camera white" appearance-id="white camera icon" location-id="render column of the Floor Object row" functionality-id="indicates the Floor Object is included in renders" intent-id="show Floor Object is renderable"></i>
        </div>
      </div>

      <!-- Row 32: Ground Plate -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Ground Plate" appearance-id="tree row showing a mesh icon and the text Ground Plate with geometry nodes indicator" location-id="Outliner tree list, nested under Floor Collection" functionality-id="represents the Ground Plate mesh object with geometry nodes" intent-id="manage the ground plate object used as the scene floor base">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full text-[#ccc]" style="padding-left: 52px;">
            <div class="w-3 flex justify-center items-center mr-1">
              <i class="fa-solid fa-chevron-right text-[9px] text-[#ccc]"></i>
            </div>
            <i class="fa-solid fa-caret-down text-[14px] text-[#ffb366] mr-1.5" style="transform: scaleX(0.8) scaleY(1.2);"></i>
            <span class="truncate">Ground Plate</span>
            <i class="fa-solid fa-circle-nodes text-[12px] text-[#66cc99] ml-2" alt-id="Ground Plate Geometry Nodes" appearance-id="small green circle nodes icon" location-id="inside the Ground Plate outliner row, after the object name" functionality-id="indicates the Ground Plate has Geometry Nodes applied" intent-id="show Ground Plate uses node-based geometry processing"></i>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#ccc]" alt-id="Ground Plate: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Ground Plate row" functionality-id="indicates Ground Plate selectability status" intent-id="show Ground Plate selection state"></i>
          <i class="fa-solid fa-eye text-[12px] text-[#ccc]" alt-id="Ground Plate: Visible solid grey" appearance-id="gray eye icon" location-id="visible column of the Ground Plate row" functionality-id="indicates Ground Plate visibility" intent-id="show Ground Plate display state"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Ground Plate: Monitor white" appearance-id="white monitor icon" location-id="monitor column of the Ground Plate row" functionality-id="indicates Ground Plate is globally enabled" intent-id="show Ground Plate global state"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#ccc]" alt-id="Ground Plate: Camera grey" appearance-id="gray camera icon" location-id="render column of the Ground Plate row" functionality-id="indicates Ground Plate render status" intent-id="show whether Ground Plate appears in renders"></i>
        </div>
      </div>

      <!-- Row 33: Studio Assets -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Studio Assets" appearance-id="tree row showing a folder icon and the text Studio Assets" location-id="Outliner tree list, as a major collection" functionality-id="represents the Studio Assets collection containing studio asset objects" intent-id="manage shared studio asset objects as a group">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <i class="fa-solid fa-box-archive text-[13px] text-white mr-1.5 opacity-90"></i>
            <span class="truncate font-medium text-white">Studio Assets</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <i class="fa-solid fa-square-check text-[12px] text-white" alt-id="Studio Assets: Checkbox checked" appearance-id="solid white checkmark square icon" location-id="enable column of the Studio Assets collection row" functionality-id="indicates the Studio Assets collection is enabled" intent-id="show the Studio Assets collection is active"></i>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-white" alt-id="Studio Assets: Selectable solid" appearance-id="solid white pointer arrow icon" location-id="selectable column of the Studio Assets collection row" functionality-id="indicates Studio Assets objects are selectable" intent-id="show Studio Assets objects can be selected"></i>
          <i class="fa-solid fa-eye text-[12px] text-white" alt-id="Studio Assets: Visible solid" appearance-id="solid white eye icon" location-id="visible column of the Studio Assets collection row" functionality-id="indicates the Studio Assets collection is visible" intent-id="show the Studio Assets collection is displayed"></i>
          <i class="fa-solid fa-desktop text-[12px] text-white" alt-id="Studio Assets: Monitor solid" appearance-id="solid white monitor icon" location-id="monitor column of the Studio Assets collection row" functionality-id="indicates Studio Assets is globally enabled" intent-id="show Studio Assets is globally enabled"></i>
          <i class="fa-solid fa-camera text-[12px] text-white" alt-id="Studio Assets: Camera solid" appearance-id="solid white camera icon" location-id="render column of the Studio Assets collection row" functionality-id="indicates the Studio Assets collection is included in renders" intent-id="show Studio Assets objects are renderable"></i>
        </div>
      </div>

      <!-- Row 34: Demo Assets -->
      <div class="flex items-center h-[22px] hover:bg-[#333] cursor-pointer group" alt-id="Outliner row: Demo Assets" appearance-id="tree row showing a folder icon and the text Demo Assets" location-id="Outliner tree list, as the last major collection" functionality-id="represents the Demo Assets collection containing demonstration asset objects" intent-id="manage demo asset objects as a group">
        <div class="flex-1 flex items-center h-full min-w-0">
          <div class="flex items-center w-full" style="padding-left: 20px;">
            <i class="fa-solid fa-box-archive text-[13px] text-[#aaa] mr-1.5"></i>
            <span class="truncate font-medium text-[#aaa]">Demo Assets</span>
          </div>
        </div>
        <div class="flex items-center" style="gap: 12px; margin-right: 6px;">
          <div class="w-[12px] h-[12px] border border-white rounded-[2px]" alt-id="Demo Assets: Checkbox unchecked" appearance-id="empty white square outline checkbox" location-id="enable column of the Demo Assets collection row" functionality-id="indicates the Demo Assets collection is disabled" intent-id="show the Demo Assets collection is not active"></div>
          <i class="fa-solid fa-arrow-pointer text-[12px] transform rotate-[-45deg] text-[#aaa]" alt-id="Demo Assets: Selectable solid grey" appearance-id="gray pointer arrow icon" location-id="selectable column of the Demo Assets collection row" functionality-id="indicates Demo Assets objects have limited selectability" intent-id="show Demo Assets selection state"></i>
          <i class="fa-solid fa-eye-slash text-[12px] text-[#aaa] opacity-50" alt-id="Demo Assets: Visible closed grey" appearance-id="gray closed eye icon showing collection is hidden" location-id="visible column of the Demo Assets collection row" functionality-id="indicates Demo Assets collection is hidden in viewport" intent-id="show Demo Assets is not displayed in the viewport"></i>
          <i class="fa-solid fa-desktop text-[12px] text-[#aaa] opacity-50" alt-id="Demo Assets: Monitor outline grey" appearance-id="gray monitor outline icon with reduced opacity" location-id="monitor column of the Demo Assets collection row" functionality-id="indicates Demo Assets has restricted global visibility" intent-id="show Demo Assets has limited global display state"></i>
          <i class="fa-solid fa-camera text-[12px] text-[#aaa] opacity-50" alt-id="Demo Assets: Camera outline grey" appearance-id="gray camera icon with reduced opacity" location-id="render column of the Demo Assets collection row" functionality-id="indicates Demo Assets collection is excluded from renders" intent-id="show Demo Assets objects do not appear in renders"></i>
        </div>
      </div>

    </div>
  </div>
</div>
