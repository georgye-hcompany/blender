<script>
  import { onMount } from 'svelte';

  let isFileMenuOpen = false;
  let isFileMenuNewOpen = false;
  let isFileMenuRecoverOpen = false;
  let isFileMenuDataPreviewsOpen = false;
  let isFileMenuImportOpen = false;
  let isFileMenuExportOpen = false;
  let isFileMenuExternalDataOpen = false;
  let isFileMenuCleanUpOpen = false;
  let isFileMenuDefaultsOpen = false;
  let isEditMenuOpen = false;
  let isEditMenuUndoHistoryOpen = false;
  let isRenderMenuOpen = false;
  let isWindowMenuOpen = false;
  let isHelpMenuOpen = false;
  let isAddWorkspaceDropdownOpen = false;
  let isAddWorkspaceGeneralOpen = false;
  let isAddWorkspace2DAnimationOpen = false;
  let isAddWorkspaceSculptingOpen = false;
  let isAddWorkspaceStoryboardingOpen = false;
  let isAddWorkspaceVFXOpen = false;
  let isAddWorkspaceVideoEditingOpen = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      if (openParam.includes('file-menu-dropdown')) {
        isFileMenuOpen = true;
      }
      if (openParam.includes('file-menu-new-dropdown')) {
        isFileMenuNewOpen = true;
      }
      if (openParam.includes('file-menu-recover-dropdown')) {
        isFileMenuRecoverOpen = true;
      }
      if (openParam.includes('add-workspace-dropdown')) {
        isAddWorkspaceDropdownOpen = true;
      }
      if (openParam.includes('add-workspace-general-dropdown')) {
        isAddWorkspaceGeneralOpen = true;
      }
      if (openParam.includes('add-workspace-2d-animation-dropdown')) {
        isAddWorkspace2DAnimationOpen = true;
      }
      if (openParam.includes('add-workspace-sculpting-dropdown')) {
        isAddWorkspaceSculptingOpen = true;
      }
      if (openParam.includes('add-workspace-storyboarding-dropdown')) {
        isAddWorkspaceStoryboardingOpen = true;
      }
      if (openParam.includes('add-workspace-vfx-dropdown')) {
        isAddWorkspaceVFXOpen = true;
      }
      if (openParam.includes('add-workspace-video-editing-dropdown')) {
        isAddWorkspaceVideoEditingOpen = true;
      }
    }
  });

  function toggleFileMenu(e) {
    if (e) e.stopPropagation();
    isFileMenuOpen = !isFileMenuOpen;
    if (isFileMenuOpen) {
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleEditMenu(e) {
    if (e) e.stopPropagation();
    isEditMenuOpen = !isEditMenuOpen;
    if (isEditMenuOpen) {
      isFileMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleRenderMenu(e) {
    if (e) e.stopPropagation();
    isRenderMenuOpen = !isRenderMenuOpen;
    if (isRenderMenuOpen) {
      isFileMenuOpen = false;
      isEditMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleWindowMenu(e) {
    if (e) e.stopPropagation();
    isWindowMenuOpen = !isWindowMenuOpen;
    if (isWindowMenuOpen) {
      isFileMenuOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isHelpMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }

  function toggleHelpMenu(e) {
    if (e) e.stopPropagation();
    isHelpMenuOpen = !isHelpMenuOpen;
    if (isHelpMenuOpen) {
      isFileMenuOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isAddWorkspaceDropdownOpen = false;
    }
    updateOpenParam();
  }
  
  function toggleAddWorkspaceDropdown(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceDropdownOpen = !isAddWorkspaceDropdownOpen;
    if (!isAddWorkspaceDropdownOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }
  
  function toggleAddWorkspaceGeneral(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceGeneralOpen = !isAddWorkspaceGeneralOpen;
    if (isAddWorkspaceGeneralOpen) {
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }
  
  function toggleAddWorkspace2DAnimation(e) {
    if (e) e.stopPropagation();
    isAddWorkspace2DAnimationOpen = !isAddWorkspace2DAnimationOpen;
    if (isAddWorkspace2DAnimationOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceSculpting(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceSculptingOpen = !isAddWorkspaceSculptingOpen;
    if (isAddWorkspaceSculptingOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceStoryboarding(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceStoryboardingOpen = !isAddWorkspaceStoryboardingOpen;
    if (isAddWorkspaceStoryboardingOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceVFXOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceVFX(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceVFXOpen = !isAddWorkspaceVFXOpen;
    if (isAddWorkspaceVFXOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVideoEditingOpen = false;
    }
    updateOpenParam();
  }

  function toggleAddWorkspaceVideoEditing(e) {
    if (e) e.stopPropagation();
    isAddWorkspaceVideoEditingOpen = !isAddWorkspaceVideoEditingOpen;
    if (isAddWorkspaceVideoEditingOpen) {
      isAddWorkspaceGeneralOpen = false;
      isAddWorkspace2DAnimationOpen = false;
      isAddWorkspaceSculptingOpen = false;
      isAddWorkspaceStoryboardingOpen = false;
      isAddWorkspaceVFXOpen = false;
    }
    updateOpenParam();
  }

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      let openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',').filter(Boolean) : [];
      
      const slugFileMenu = 'file-menu-dropdown';
      if (isFileMenuOpen) {
        if (!openStates.includes(slugFileMenu)) openStates.push(slugFileMenu);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenu);
      }
      
      const slugFileMenuNew = 'file-menu-new-dropdown';
      if (isFileMenuNewOpen) {
        if (!openStates.includes(slugFileMenuNew)) openStates.push(slugFileMenuNew);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuNew);
      }
      
      const slugFileMenuRecover = 'file-menu-recover-dropdown';
      if (isFileMenuRecoverOpen) {
        if (!openStates.includes(slugFileMenuRecover)) openStates.push(slugFileMenuRecover);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuRecover);
      }
      
      const slugFileMenuDataPreviews = 'file-menu-data-previews-dropdown';
      if (isFileMenuDataPreviewsOpen) {
        if (!openStates.includes(slugFileMenuDataPreviews)) openStates.push(slugFileMenuDataPreviews);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuDataPreviews);
      }
      
      const slugFileMenuImport = 'file-menu-import-dropdown';
      if (isFileMenuImportOpen) {
        if (!openStates.includes(slugFileMenuImport)) openStates.push(slugFileMenuImport);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuImport);
      }
      
      const slugFileMenuExport = 'file-menu-export-dropdown';
      if (isFileMenuExportOpen) {
        if (!openStates.includes(slugFileMenuExport)) openStates.push(slugFileMenuExport);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuExport);
      }
      
      const slugFileMenuExternalData = 'file-menu-external-data-dropdown';
      if (isFileMenuExternalDataOpen) {
        if (!openStates.includes(slugFileMenuExternalData)) openStates.push(slugFileMenuExternalData);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuExternalData);
      }
      
      const slugFileMenuCleanUp = 'file-menu-clean-up-dropdown';
      if (isFileMenuCleanUpOpen) {
        if (!openStates.includes(slugFileMenuCleanUp)) openStates.push(slugFileMenuCleanUp);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuCleanUp);
      }
      
      const slugFileMenuDefaults = 'file-menu-defaults-dropdown';
      if (isFileMenuDefaultsOpen) {
        if (!openStates.includes(slugFileMenuDefaults)) openStates.push(slugFileMenuDefaults);
      } else {
        openStates = openStates.filter(s => s !== slugFileMenuDefaults);
      }
      
      const slugEditMenu = 'edit-menu-dropdown';
      if (isEditMenuOpen) {
        if (!openStates.includes(slugEditMenu)) openStates.push(slugEditMenu);
      } else {
        openStates = openStates.filter(s => s !== slugEditMenu);
      }
      
      const slugEditMenuUndoHistory = 'edit-menu-undo-history-dropdown';
      if (isEditMenuUndoHistoryOpen) {
        if (!openStates.includes(slugEditMenuUndoHistory)) openStates.push(slugEditMenuUndoHistory);
      } else {
        openStates = openStates.filter(s => s !== slugEditMenuUndoHistory);
      }
      
      const slugRenderMenu = 'render-menu-dropdown';
      if (isRenderMenuOpen) {
        if (!openStates.includes(slugRenderMenu)) openStates.push(slugRenderMenu);
      } else {
        openStates = openStates.filter(s => s !== slugRenderMenu);
      }
      
      const slugWindowMenu = 'window-menu-dropdown';
      if (isWindowMenuOpen) {
        if (!openStates.includes(slugWindowMenu)) openStates.push(slugWindowMenu);
      } else {
        openStates = openStates.filter(s => s !== slugWindowMenu);
      }
      
      const slugHelpMenu = 'help-menu-dropdown';
      if (isHelpMenuOpen) {
        if (!openStates.includes(slugHelpMenu)) openStates.push(slugHelpMenu);
      } else {
        openStates = openStates.filter(s => s !== slugHelpMenu);
      }
      
      const slugDropdown = 'add-workspace-dropdown';
      if (isAddWorkspaceDropdownOpen) {
        if (!openStates.includes(slugDropdown)) openStates.push(slugDropdown);
      } else {
        openStates = openStates.filter(s => s !== slugDropdown);
      }
      
      const slugGeneral = 'add-workspace-general-dropdown';
      if (isAddWorkspaceGeneralOpen) {
        if (!openStates.includes(slugGeneral)) openStates.push(slugGeneral);
      } else {
        openStates = openStates.filter(s => s !== slugGeneral);
      }
      
      const slug2D = 'add-workspace-2d-animation-dropdown';
      if (isAddWorkspace2DAnimationOpen) {
        if (!openStates.includes(slug2D)) openStates.push(slug2D);
      } else {
        openStates = openStates.filter(s => s !== slug2D);
      }
      
      const slugSculpting = 'add-workspace-sculpting-dropdown';
      if (isAddWorkspaceSculptingOpen) {
        if (!openStates.includes(slugSculpting)) openStates.push(slugSculpting);
      } else {
        openStates = openStates.filter(s => s !== slugSculpting);
      }
      
      const slugStoryboarding = 'add-workspace-storyboarding-dropdown';
      if (isAddWorkspaceStoryboardingOpen) {
        if (!openStates.includes(slugStoryboarding)) openStates.push(slugStoryboarding);
      } else {
        openStates = openStates.filter(s => s !== slugStoryboarding);
      }
      
      const slugVFX = 'add-workspace-vfx-dropdown';
      if (isAddWorkspaceVFXOpen) {
        if (!openStates.includes(slugVFX)) openStates.push(slugVFX);
      } else {
        openStates = openStates.filter(s => s !== slugVFX);
      }
      
      const slugVideoEditing = 'add-workspace-video-editing-dropdown';
      if (isAddWorkspaceVideoEditingOpen) {
        if (!openStates.includes(slugVideoEditing)) openStates.push(slugVideoEditing);
      } else {
        openStates = openStates.filter(s => s !== slugVideoEditing);
      }
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }
</script>

<div class="h-[42px] bg-[#202020] border-b border-[#151515] flex items-center justify-between text-[14px] select-none" alt-id="Main application top bar">
  <div class="flex items-center h-full">
    <div class="px-4 flex items-center h-full hover:bg-[#333] cursor-pointer" alt-id="Blender logo menu, first element in the main menu bar">
      <i class="fa-brands fa-neos text-[#ccc] text-[18px] pointer-events-none"></i>
    </div>
    <div class="flex h-full">
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isFileMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleFileMenu} alt-id="File menu, 2 element in the main menu bar"><span class="pointer-events-none">File</span></div>
        
        {#if isFileMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[240px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="File menu dropdown">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isFileMenuNewOpen = true; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: New">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-file-circle-plus text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">N</u>ew</span>
              </div>
              <div class="flex items-center gap-1 pointer-events-none">
                <span class="text-[11px] text-[#aaa] group-hover:text-[#eee]">⌘ N</span>
                <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee]"></i>
              </div>
              
              {#if isFileMenuNewOpen}
                <!-- New Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[-4px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="New nested menu">
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: General">
                    <i class="fa-solid fa-file-circle-plus text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">G</u>eneral</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: 2D Animation">
                    <i class="fa-solid fa-file-lines text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">2D Animation</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: Sculpting">
                    <i class="fa-solid fa-paintbrush text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none"><u class="underline-offset-2 decoration-1">S</u>culpting</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: Storyboarding">
                    <i class="fa-solid fa-pen text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">Storyboarding</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: VFX">
                    <i class="fa-solid fa-crosshairs text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">VFX</span>
                  </div>
                  
                  <div class="flex items-center gap-2 px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="New menu item: Video Editing">
                    <i class="fa-solid fa-clapperboard text-[#ccc] group-hover:text-white text-[12px] w-4 text-center pointer-events-none"></i>
                    <span class="pointer-events-none">Video <u class="underline-offset-2 decoration-1">E</u>diting</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Open...">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-folder-open text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">O</u>pen...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ O</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Open Recent">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Open <u class="underline-offset-2 decoration-1">R</u>ecent</span>
              </div>
              <div class="flex items-center gap-1 pointer-events-none">
                <span class="text-[11px] text-[#aaa] group-hover:text-[#eee]">⇧ ⌘ O</span>
                <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee]"></i>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Revert">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Rev<u class="underline-offset-2 decoration-1">e</u>rt</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group bg-[#4d4d4d] text-white" on:mouseenter={() => { isFileMenuRecoverOpen = true; isFileMenuNewOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Recover">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Recover</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuRecoverOpen}
                <!-- Recover Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[106px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Recover nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Recover menu item: Last Session">
                    <span class="pointer-events-none ml-6"><u class="underline-offset-2 decoration-1">L</u>ast Session</span>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Recover menu item: Auto Save...">
                    <span class="pointer-events-none ml-6"><u class="underline-offset-2 decoration-1">A</u>uto Save...</span>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-floppy-disk text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">S</u>ave</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ S</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save As...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save <u class="underline-offset-2 decoration-1">A</u>s...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⇧ ⌘ S</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save Copy...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save <u class="underline-offset-2 decoration-1">C</u>opy...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Save Incremental">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save <u class="underline-offset-2 decoration-1">I</u>ncremental</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌥ ⌘ S</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Link...">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-link text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">L</u>ink...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Append...">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-paperclip text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">A</u>ppend...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuDataPreviewsOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuDataPreviewsOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Data Previews">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">D</u>ata Previews</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuDataPreviewsOpen}
                <!-- Data Previews Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[316px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[240px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Data Previews nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Refresh Data-Block Previews">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">R</u>efresh Data-Block Previews</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Batch-Generate Previews...">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">B</u>atch-Generate Previews...</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Clear Data-Block Previews...">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">C</u>lear Data-Block Previews...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Data Previews menu item: Batch-Clear Previews...">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Batch-Clear <u class="underline-offset-2 decoration-1">P</u>reviews...</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuImportOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuImportOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Import">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-download text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">I</u>mport</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuImportOpen}
                <!-- Import Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[340px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[280px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Import nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Alembic">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">A</u>lembic (.abc)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Universal Scene Description">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>niversal Scene Description (.usd*)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: SVG as Grease Pencil">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">S</u>VG as Grease Pencil</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Wavefront">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">W</u>avefront (.obj)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Stanford PLY">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Stanford <u class="underline-offset-2 decoration-1">P</u>LY (.ply)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: STL">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>S<u class="underline-offset-2 decoration-1">T</u>L (.stl)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: FBX">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>BX (.fbx)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Motion Capture">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">M</u>otion Capture (.bvh)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: Scalable Vector Graphics">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Scalable <u class="underline-offset-2 decoration-1">V</u>ector Graphics (.svg)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: FBX Legacy">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>FBX (.fbx) (<u class="underline-offset-2 decoration-1">L</u>egacy)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Import menu item: glTF 2.0">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">g</u>lTF 2.0 (.glb/.gltf)</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuExportOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuExportOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Export">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-upload text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">E</u>xport</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuExportOpen}
                <!-- Export Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[366px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[280px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Export nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Alembic">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">A</u>lembic (.abc)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Universal Scene Description">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>niversal Scene Description (.usd*)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Grease Pencil as SVG">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">G</u>rease Pencil as SVG</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Grease Pencil as PDF">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Grease <u class="underline-offset-2 decoration-1">P</u>encil as PDF</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Wavefront">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">W</u>avefront (.obj)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: Stanford PLY">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">S</u>tanford PLY (.ply)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: STL">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>S<u class="underline-offset-2 decoration-1">T</u>L (.stl)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 mx-1 cursor-default opacity-50" alt-id="Export menu item: Motion Capture">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Motion Capture (.bvh)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: FBX">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>BX (.fbx)</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Export menu item: glTF 2.0">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>g<u class="underline-offset-2 decoration-1">l</u>TF 2.0 (.glb/.gltf)</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 mx-1 cursor-default opacity-50" alt-id="File menu item: Export All Collections">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>E<u class="underline-offset-2 decoration-1">x</u>port All Collections</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuExternalDataOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuExternalDataOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuCleanUpOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: External Data">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Ex<u class="underline-offset-2 decoration-1">t</u>ernal Data</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuExternalDataOpen}
                <!-- External Data Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[396px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[260px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="External Data nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Automatically Pack Resources">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <i class="fa-regular fa-square text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                      <span><u class="underline-offset-2 decoration-1">A</u>utomatically Pack Resources</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Pack Resources">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">P</u>ack Resources</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Unpack Resources">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">U</u>npack Resources</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Pack Linked Libraries">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Pack <u class="underline-offset-2 decoration-1">L</u>inked Libraries</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Unpack Linked Libraries">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>U<u class="underline-offset-2 decoration-1">n</u>pack Linked Libraries</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Make Paths Relative">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">M</u>ake Paths Relative</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Make Paths Absolute">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span>Ma<u class="underline-offset-2 decoration-1">k</u>e Paths Absolute</span>
                    </div>
                  </div>
                  
                  <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Report Missing Files">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">R</u>eport Missing Files</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="External Data menu item: Find Missing Files...">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">F</u>ind Missing Files...</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuCleanUpOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuCleanUpOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuDefaultsOpen = false; updateOpenParam(); }} alt-id="File menu item: Clean Up">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Clean <u class="underline-offset-2 decoration-1">U</u>p</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuCleanUpOpen}
                <!-- Clean Up Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[420px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[210px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Clean Up nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Clean Up menu item: Purge Unused Data...">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">P</u>urge Unused Data...</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Clean Up menu item: Manage Unused Data...">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">M</u>anage Unused Data...</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isFileMenuDefaultsOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isFileMenuDefaultsOpen = true; isFileMenuNewOpen = false; isFileMenuRecoverOpen = false; isFileMenuDataPreviewsOpen = false; isFileMenuImportOpen = false; isFileMenuExportOpen = false; isFileMenuExternalDataOpen = false; isFileMenuCleanUpOpen = false; updateOpenParam(); }} alt-id="File menu item: Defaults">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">D</u>efaults</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isFileMenuDefaultsOpen}
                <!-- Defaults Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[448px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[210px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Defaults nested menu">
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Defaults menu item: Save Startup File">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">S</u>ave Startup File</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group/item" alt-id="Defaults menu item: Load Factory Settings">
                    <div class="flex items-center gap-2 pointer-events-none">
                      <div class="w-4 text-center"></div>
                      <span><u class="underline-offset-2 decoration-1">L</u>oad Factory Settings</span>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="File menu item: Quit">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-power-off text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">Q</u>uit</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Q</span>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isEditMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleEditMenu} alt-id="Edit menu, 3 element in the main menu bar"><span class="pointer-events-none">Edit</span></div>
        
        {#if isEditMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[240px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Edit menu dropdown">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Undo">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-rotate-left text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">U</u>ndo</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Z</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 mx-1 cursor-default opacity-50" alt-id="Edit menu item: Redo">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-rotate-right text-[#ccc] text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">R</u>edo</span>
              </div>
              <span class="text-[11px] text-[#aaa] pointer-events-none">⇧ ⌘ Z</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group {isEditMenuUndoHistoryOpen ? 'bg-[#4d4d4d] text-white' : ''}" on:mouseenter={() => { isEditMenuUndoHistoryOpen = true; updateOpenParam(); }} on:mouseleave={() => isEditMenuUndoHistoryOpen = false} alt-id="Edit menu item: Undo History">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Undo <u class="underline-offset-2 decoration-1">H</u>istory</span>
              </div>
              <i class="fa-solid fa-caret-right text-[10px] text-[#aaa] group-hover:text-[#eee] pointer-events-none"></i>
              
              {#if isEditMenuUndoHistoryOpen}
                <!-- Undo History Nested Menu -->
                <div class="absolute left-[calc(100%-4px)] top-[50px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[101] w-[200px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Undo History nested menu">
                  <div class="px-3 py-1 text-[#aaa] italic pointer-events-none">Empty</div>
                </div>
              {/if}
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Adjust Last Operation...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">A</u>djust Last Operation...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F9</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Repeat Last">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Repeat <u class="underline-offset-2 decoration-1">L</u>ast</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⇧ R</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Repeat History...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>R<u class="underline-offset-2 decoration-1">e</u>peat History...</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Menu Search...">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-magnifying-glass text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">M</u>enu Search...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F3</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Rename Active Item...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Rename Active <u class="underline-offset-2 decoration-1">I</u>tem...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F2</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Batch Rename...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">B</u>atch Rename...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F2</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Lock Object Modes">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-square-check text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Lock <u class="underline-offset-2 decoration-1">O</u>bject Modes</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Edit menu item: Preferences...">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-gear text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">P</u>references...</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ ,</span>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isRenderMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleRenderMenu} alt-id="Render menu, 4 element in the main menu bar"><span class="pointer-events-none">Render</span></div>
        
        {#if isRenderMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Render menu dropdown">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Render Image">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-camera-retro text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">R</u>ender Image</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F12</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Render Animation">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-film text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Render <u class="underline-offset-2 decoration-1">A</u>nimation</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F12</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Render Audio...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>R<u class="underline-offset-2 decoration-1">e</u>nder Audio...</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: View Render">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">V</u>iew Render</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">F11</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: View Animation">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>V<u class="underline-offset-2 decoration-1">i</u>ew Animation</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ F11</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Render menu item: Lock Interface">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-regular fa-square text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">L</u>ock Interface</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isWindowMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleWindowMenu} alt-id="Window menu, 5 element in the main menu bar"><span class="pointer-events-none">Window</span></div>
        
        {#if isWindowMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[260px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Window menu dropdown">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: New Window">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">N</u>ew Window</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: New Main Window">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>New <u class="underline-offset-2 decoration-1">M</u>ain Window</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Toggle Window Fullscreen">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-up-right-and-down-left-from-center text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">T</u>oggle Window Fullscreen</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Next Workspace">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Next <u class="underline-offset-2 decoration-1">W</u>orkspace</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Page Down</span>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Previous Workspace">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">P</u>revious Workspace</span>
              </div>
              <span class="text-[11px] text-[#aaa] group-hover:text-[#eee] pointer-events-none">⌘ Page Up</span>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Show Status Bar">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-square-check text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Show Status Bar</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Save Screenshot...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">S</u>ave Screenshot...</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Window menu item: Save Screenshot (Editor)...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save Screenshot (<u class="underline-offset-2 decoration-1">E</u>ditor)...</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>
      <div class="relative h-full flex items-center">
        <div class="px-3 flex items-center h-full {isHelpMenuOpen ? 'bg-[#4772b3] text-white' : 'hover:bg-[#333] text-[#ccc]'} cursor-pointer" on:click={toggleHelpMenu} alt-id="Help menu, 6 element in the main menu bar"><span class="pointer-events-none">Help</span></div>
        
        {#if isHelpMenuOpen}
          <div class="absolute left-0 top-[42px] bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-[100] w-[220px] rounded-sm flex flex-col cursor-default" on:click|stopPropagation alt-id="Help menu dropdown">
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Manual">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-globe text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span><u class="underline-offset-2 decoration-1">M</u>anual</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Support">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">S</u>upport</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: User Communities">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">U</u>ser Communities</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Get Involved">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">G</u>et Involved</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Release Notes">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span><u class="underline-offset-2 decoration-1">R</u>elease Notes</span>
              </div>
            </div>
            
            <div class="h-[1px] bg-[#333] my-1 mx-1"></div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Report a Bug">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-globe text-[#ccc] group-hover:text-white text-[12px] w-4 text-center"></i>
                <span>Report <u class="underline-offset-2 decoration-1">a</u> Bug</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white rounded-[3px] mx-1 cursor-pointer group" alt-id="Help menu item: Save System Info...">
              <div class="flex items-center gap-2 pointer-events-none">
                <div class="w-4 text-center"></div>
                <span>Save System <u class="underline-offset-2 decoration-1">I</u>nfo...</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Divider -->
    <div class="h-6 w-[1px] bg-[#111] mx-2"></div>
    

    <!-- Global Click Outside -->
    {#if isAddWorkspaceDropdownOpen || isFileMenuOpen || isEditMenuOpen || isRenderMenuOpen || isWindowMenuOpen || isHelpMenuOpen}
      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
        isFileMenuOpen = false;
        isFileMenuNewOpen = false;
        isFileMenuRecoverOpen = false;
        isFileMenuDataPreviewsOpen = false;
        isFileMenuImportOpen = false;
        isFileMenuExportOpen = false;
        isFileMenuExternalDataOpen = false;
        isFileMenuCleanUpOpen = false;
        isFileMenuDefaultsOpen = false;
        isAddWorkspaceDropdownOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
        isAddWorkspaceGeneralOpen = false;
        isAddWorkspace2DAnimationOpen = false;
        isAddWorkspaceSculptingOpen = false;
        isAddWorkspaceStoryboardingOpen = false;
        isAddWorkspaceVFXOpen = false;
        isAddWorkspaceVideoEditingOpen = false;
        updateOpenParam();
      }}></div>
    {/if}
    <!-- Workspaces -->
    <div class="flex h-full items-end pt-1 relative">
      {#each [
        { name: 'Scene', active: true },
        { name: 'Rendering', active: false },
        { name: 'Animation', active: false },
        { name: 'Compositing', active: false },
        { name: '2D Animation', active: false }
      ] as tab, i}
        <div class="px-4 py-1.5 flex items-center cursor-pointer {tab.active ? 'bg-[#3d3d3d] text-[#fff] rounded-t' : 'text-[#a0a0a0] hover:text-[#ccc]'}" alt-id="{tab.name} workspace tab, {tab.active ? 'currently active' : ''}">
          <span class="text-[13px] pointer-events-none">{tab.name}</span>
        </div>
      {/each}
      <div class="px-4 py-1.5 flex items-center cursor-pointer text-[#a0a0a0] hover:text-[#ccc]" on:click={toggleAddWorkspaceDropdown} alt-id="Add workspace button">
        <i class="fa-light fa-plus text-[16px] pointer-events-none"></i>
      </div>
      
      {#if isAddWorkspaceDropdownOpen}
        <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
          isFileMenuOpen = false;
          isAddWorkspaceDropdownOpen = false;
      isEditMenuOpen = false;
      isRenderMenuOpen = false;
      isWindowMenuOpen = false;
      isHelpMenuOpen = false;
          isAddWorkspaceGeneralOpen = false;
          isAddWorkspace2DAnimationOpen = false;
          isAddWorkspaceSculptingOpen = false;
          isAddWorkspaceStoryboardingOpen = false;
          isAddWorkspaceVFXOpen = false;
          isAddWorkspaceVideoEditingOpen = false;
          updateOpenParam();
        }}></div>
        <div class="fixed left-[420px] top-[80px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px]" alt-id="Add Workspace dropdown menu">
          <div class="px-3 py-1.5 text-[#a0a0a0] text-[13px]" alt-id="Add Workspace title">Add Workspace</div>
          <div class="w-full h-[1px] bg-[#2a2a2a] my-1"></div>
          
          <div class="flex items-center gap-2 px-3 py-1.5 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Search workspace types">
            <i class="fa-light fa-magnifying-glass text-[13px] pointer-events-none"></i>
            <span class="text-[13px] pointer-events-none">Search...</span>
          </div>
          <div class="w-full h-[1px] bg-[#2a2a2a] my-1"></div>
          
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceGeneralOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceGeneral} alt-id="General workspace category">
            <span class="text-[13px] pointer-events-none ml-6">General</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceGeneralOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceGeneralOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="General workspaces nested menu">
                {#each ['Animation', 'Compositing', 'Geometry Nodes', 'Layout', 'Modeling', 'Rendering', 'Scripting', 'Sculpting', 'Shading', 'Texture Paint', 'UV Editing'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspace2DAnimationOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspace2DAnimation} alt-id="2D Animation workspace category">
            <span class="text-[13px] pointer-events-none ml-6">2D Animation</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspace2DAnimationOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspace2DAnimationOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="2D Animation workspaces nested menu">
                {#each ['2D Animation', '2D Full Canvas'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceSculptingOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceSculpting} alt-id="Sculpting workspace category">
            <span class="text-[13px] pointer-events-none ml-6">Sculpting</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceSculptingOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceSculptingOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="Sculpting workspaces nested menu">
                {#each ['Sculpting', 'Shading'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceStoryboardingOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceStoryboarding} alt-id="Storyboarding workspace category">
            <span class="text-[13px] pointer-events-none ml-6">Storyboarding</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceStoryboardingOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceStoryboardingOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="Storyboarding workspaces nested menu">
                {#each ['Storyboarding', 'Video Editing'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceVFXOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceVFX} alt-id="VFX workspace category">
            <span class="text-[13px] pointer-events-none ml-6">VFX</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceVFXOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceVFXOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="VFX workspaces nested menu">
                {#each ['Compositing', 'Masking', 'Motion Tracking', 'Rendering'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          <div class="flex items-center justify-between px-3 py-1 {isAddWorkspaceVideoEditingOpen ? 'bg-[#444] text-[#ccc]' : 'text-[#ccc] hover:bg-[#4772b3] hover:text-white'} cursor-pointer relative" on:click={toggleAddWorkspaceVideoEditing} alt-id="Video Editing workspace category">
            <span class="text-[13px] pointer-events-none ml-6">Video Editing</span>
            <i class="fa-solid fa-caret-right text-[10px] {isAddWorkspaceVideoEditingOpen ? 'text-white' : 'text-[#888]'} pointer-events-none"></i>
            
            {#if isAddWorkspaceVideoEditingOpen}
              <div class="absolute left-full top-[-4px] bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-50 py-1 w-[200px] cursor-default" on:click|stopPropagation alt-id="Video Editing workspaces nested menu">
                {#each ['Rendering', 'Video Editing'] as ws}
                  <div class="px-5 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="{ws} workspace option">
                    <span class="text-[13px] pointer-events-none">{ws}</span>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          
          <div class="w-full h-[1px] bg-[#2a2a2a] my-1"></div>
          <div class="flex items-center gap-2 px-3 py-1 text-[#ccc] hover:bg-[#4772b3] hover:text-white cursor-pointer" alt-id="Duplicate Current workspace">
            <i class="fa-regular fa-clone text-[13px] pointer-events-none"></i>
            <span class="text-[13px] pointer-events-none">Duplicate Current</span>
          </div>
        </div>
      {/if}
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
