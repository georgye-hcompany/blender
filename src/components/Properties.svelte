<script>
  import { onMount } from 'svelte';
  import EditorSelector from './EditorSelector.svelte';
  export let currentEditor = 'properties';
  export let windowId = '';

  let activeTab = 'tool';
  let isVisibleTabsMenuOpen = false;
  let isSamplingExpanded = true;
  let isSamplingViewportExpanded = true;
  let isSamplingRenderExpanded = true;
  let isSamplingLightsExpanded = false;
  let isSamplingAdvancedExpanded = false;

  let isLightPathsExpanded = true;
  let isLightPathsMaxBouncesExpanded = true;
  let isLightPathsClampingExpanded = true;
  let isLightPathsCausticsExpanded = true;

  let isVolumesExpanded = true;
  let isSubdivisionExpanded = true;
  let isCurvesExpanded = true;
  let isCurvesViewportDisplayExpanded = false;
  let isSimplifyExpanded = true;
  let isSimplifyViewportExpanded = true;
  let isSimplifyRenderExpanded = true;
  let isSimplifyCullingExpanded = false;
  let isSimplifyGreasePencilExpanded = false;
  let isMotionBlurExpanded = true;
  let isMotionBlurShutterCurveExpanded = true;
  let isFilmExpanded = true;
  let isFilmPixelFilterExpanded = true;
  let isFilmTransparentExpanded = true;
  let isPerformanceExpanded = true;
  let isPerformanceDeviceDropdownOpen = false;
  let isBakeExpanded = true;
  let isBakeInfluenceExpanded = true;
  let isBakeSelectedToActiveExpanded = false;
  let isBakeOutputExpanded = true;
  let isBakeMarginExpanded = true;
  let isBakeTypeDropdownOpen = false;
  let isBakeViewFromDropdownOpen = false;
  let isBakeTargetDropdownOpen = false;
  let isGreasePencilExpanded = true;
  let isGreasePencilViewportExpanded = true;
  let isGreasePencilRenderExpanded = true;
  let isFreestyleExpanded = true;
  let isFreestyleLineThicknessModeAbsolute = true;
  let isColorManagementExpanded = true;
  let isColorManagementCurvesExpanded = false;
  let isColorManagementWhiteBalanceExpanded = false;
  let isColorManagementWorkingSpaceExpanded = false;
  let isColorManagementAdvancedExpanded = false;

  // Output Tab States
  let isFormatExpanded = true;
  let isFrameRangeExpanded = true;
  let isTimeStretchingExpanded = false;
  let isStereoscopyExpanded = true;
  let isOutputExpanded = true;
  let isOutputColorManagementExpanded = true;
  let isOutputPixelDensityExpanded = true;
  let isMetadataExpanded = true;
  let isMetadataNoteExpanded = false;
  let isBurnIntoImageExpanded = true;
  let isPostProcessingExpanded = true;
  let isStereoscopyStereo3D = true;
  let isOutputColorBW = false;
  let isOutputColorRGB = false;
  let isOutputColorRGBA = true;
  let isOutputColorDepth8 = true;
  let isOutputColorManagementFollowScene = true;

  // View Layer Tab States
  let isViewLayerExpanded = true;
  let isOverrideExpanded = true;
  let isPassesExpanded = true;
  let isPassesDataExpanded = true;
  let isPassesLightExpanded = true;
  let isPassesCryptomatteExpanded = true;
  let isPassesShaderAOVExpanded = true;
  let isPassesLightGroupsExpanded = true;
  let isFilterExpanded = true;

  // Scene Tab States
  let isSceneExpanded = true;
  let isUnitsExpanded = true;
  let isGravityExpanded = true;
  let isSimulationExpanded = true;
  let isKeyingSetsExpanded = true;
  let isAudioExpanded = true;
  let isRigidBodyWorldExpanded = true;
  let isAnimationExpanded = true;
  let isSceneCustomPropertiesExpanded = true;

  // World Tab States
  let isWorldPreviewExpanded = true;
  let isWorldSurfaceExpanded = true;
  let isWorldVolumeExpanded = true;
  let isWorldRayVisibilityExpanded = true;
  let isWorldSettingsExpanded = true;
  let isWorldSettingsSurfaceExpanded = true;
  let isWorldSettingsVolumeExpanded = true;
  let isWorldSettingsLightGroupExpanded = true;
  let isWorldViewportDisplayExpanded = true;
  let isWorldAnimationExpanded = true;
  let isWorldCustomPropertiesExpanded = true;

  // Collection Tab States
  let isCollectionVisibilityExpanded = true;
  let isCollectionVisibilityViewLayerExpanded = true;
  let isCollectionInstancingExpanded = true;
  let isCollectionExportersExpanded = true;
  let isCollectionLineArtExpanded = true;
  let isCollectionCustomPropertiesExpanded = false;

  // Object Tab States
  let isObjectTransformExpanded = true;
  let isObjectDeltaTransformExpanded = false;
  let isObjectRelationsExpanded = false;
  let isObjectCollectionsExpanded = false;
  let isObjectInstancingExpanded = false;
  let isObjectMotionPathsExpanded = false;
  let isObjectShadingExpanded = false;
  let isObjectMotionBlurExpanded = false;
  let isObjectVisibilityExpanded = false;
  let isObjectViewportDisplayExpanded = true;
  let isObjectLineArtExpanded = false;
  let isObjectAnimationExpanded = false;
  let isObjectCustomPropertiesExpanded = true;

  // Modifiers Tab States
  let isModifierSubdivisionExpanded = true;
  let isModifierSubdivisionAdaptiveExpanded = false;
  let isModifierSubdivisionAdvancedExpanded = false;

  // Constraints Tab States
  let isAddObjectConstraintDropdownOpen = false;

  // Data Tab States
  let isDataVertexGroupsExpanded = true;
  let isDataShapeKeysExpanded = true;
  let isDataUVMapsExpanded = true;
  let isDataColorAttributesExpanded = true;
  let isDataAttributesExpanded = true;
  let isDataTextureSpaceExpanded = true;
  let isDataRemeshExpanded = true;
  let isDataGeometryDataExpanded = true;
  let isDataAnimationExpanded = true;
  let isDataCustomPropertiesExpanded = true;

  // Material Tab State
  let isMaterialPreviewExpanded = true;
  let isMaterialSurfaceExpanded = true;
  let isMaterialVolumeExpanded = false;
  let isMaterialDisplacementExpanded = false;
  let isMaterialSettingsExpanded = true;
  let isMaterialLineArtExpanded = true;
  let isMaterialViewportDisplayExpanded = true;
  let isMaterialCustomPropertiesExpanded = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const openParam = urlParams.get('open') || '';
      
      if (openParam.includes(`${windowId}-tab-render`)) {
        activeTab = 'render';
      }
      if (openParam.includes(`${windowId}-sampling-collapsed`)) {
        isSamplingExpanded = false;
      }
      if (openParam.includes(`${windowId}-sampling-viewport-collapsed`)) {
        isSamplingViewportExpanded = false;
      }
      if (openParam.includes(`${windowId}-sampling-render-collapsed`)) {
        isSamplingRenderExpanded = false;
      }
      if (openParam.includes(`${windowId}-light-paths-collapsed`)) {
        isLightPathsExpanded = false;
      }
      if (openParam.includes(`${windowId}-light-paths-max-bounces-collapsed`)) {
        isLightPathsMaxBouncesExpanded = false;
      }
      if (openParam.includes(`${windowId}-light-paths-clamping-collapsed`)) {
        isLightPathsClampingExpanded = false;
      }
      if (openParam.includes(`${windowId}-light-paths-caustics-collapsed`)) {
        isLightPathsCausticsExpanded = false;
      }
      if (openParam.includes(`${windowId}-volumes-collapsed`)) {
        isVolumesExpanded = false;
      }
      if (openParam.includes(`${windowId}-subdivision-collapsed`)) {
        isSubdivisionExpanded = false;
      }
      if (openParam.includes(`${windowId}-curves-collapsed`)) {
        isCurvesExpanded = false;
      }
      if (openParam.includes(`${windowId}-curves-viewport-display-expanded`)) {
        isCurvesViewportDisplayExpanded = true;
      }
      if (openParam.includes(`${windowId}-simplify-collapsed`)) {
        isSimplifyExpanded = false;
      }
      if (openParam.includes(`${windowId}-simplify-viewport-collapsed`)) {
        isSimplifyViewportExpanded = false;
      }
      if (openParam.includes(`${windowId}-simplify-render-collapsed`)) {
        isSimplifyRenderExpanded = false;
      }
      if (openParam.includes(`${windowId}-simplify-culling-expanded`)) {
        isSimplifyCullingExpanded = true;
      }
      if (openParam.includes(`${windowId}-simplify-grease-pencil-expanded`)) {
        isSimplifyGreasePencilExpanded = true;
      }
      if (openParam.includes(`${windowId}-motion-blur-collapsed`)) {
        isMotionBlurExpanded = false;
      }
      if (openParam.includes(`${windowId}-motion-blur-shutter-curve-collapsed`)) {
        isMotionBlurShutterCurveExpanded = false;
      }
      if (openParam.includes(`${windowId}-film-collapsed`)) {
        isFilmExpanded = false;
      }
      if (openParam.includes(`${windowId}-film-pixel-filter-collapsed`)) {
        isFilmPixelFilterExpanded = false;
      }
      if (openParam.includes(`${windowId}-film-transparent-collapsed`)) {
        isFilmTransparentExpanded = false;
      }
      if (openParam.includes(`${windowId}-performance-collapsed`)) {
        isPerformanceExpanded = false;
      }
      if (openParam.includes(`${windowId}-performance-device-dropdown-closed`)) {
        isPerformanceDeviceDropdownOpen = false;
      }
      if (openParam.includes(`${windowId}-bake-collapsed`)) {
        isBakeExpanded = false;
      }
      if (openParam.includes(`${windowId}-bake-influence-collapsed`)) {
        isBakeInfluenceExpanded = false;
      }
      if (openParam.includes(`${windowId}-bake-selected-to-active-expanded`)) {
        isBakeSelectedToActiveExpanded = true;
      }
      if (openParam.includes(`${windowId}-bake-output-collapsed`)) {
        isBakeOutputExpanded = false;
      }
      if (openParam.includes(`${windowId}-bake-margin-collapsed`)) {
        isBakeMarginExpanded = false;
      }
      if (openParam.includes(`${windowId}-bake-type-dropdown-open`)) {
        isBakeTypeDropdownOpen = true;
      }
      if (openParam.includes(`${windowId}-bake-view-from-dropdown-open`)) {
        isBakeViewFromDropdownOpen = true;
      }
      if (openParam.includes(`${windowId}-bake-target-dropdown-open`)) {
        isBakeTargetDropdownOpen = true;
      }
      if (openParam.includes(`${windowId}-grease-pencil-collapsed`)) {
        isGreasePencilExpanded = false;
      }
      if (openParam.includes(`${windowId}-grease-pencil-viewport-collapsed`)) {
        isGreasePencilViewportExpanded = false;
      }
      if (openParam.includes(`${windowId}-grease-pencil-render-collapsed`)) {
        isGreasePencilRenderExpanded = false;
      }
      if (openParam.includes(`${windowId}-freestyle-collapsed`)) {
        isFreestyleExpanded = false;
      }
      if (openParam.includes(`${windowId}-freestyle-line-thickness-mode-relative`)) {
        isFreestyleLineThicknessModeAbsolute = false;
      }
      if (openParam.includes(`${windowId}-color-management-collapsed`)) {
        isColorManagementExpanded = false;
      }
      if (openParam.includes(`${windowId}-color-management-curves-expanded`)) {
        isColorManagementCurvesExpanded = true;
      }
      if (openParam.includes(`${windowId}-color-management-white-balance-expanded`)) {
        isColorManagementWhiteBalanceExpanded = true;
      }
      if (openParam.includes(`${windowId}-color-management-working-space-expanded`)) {
        isColorManagementWorkingSpaceExpanded = true;
      }
      if (openParam.includes(`${windowId}-color-management-advanced-expanded`)) {
        isColorManagementAdvancedExpanded = true;
      }
      
      // Output Tab
      if (openParam.includes(`${windowId}-tab-output`)) {
        activeTab = 'output';
      }
      if (openParam.includes(`${windowId}-format-collapsed`)) {
        isFormatExpanded = false;
      }
      if (openParam.includes(`${windowId}-frame-range-collapsed`)) {
        isFrameRangeExpanded = false;
      }
      if (openParam.includes(`${windowId}-time-stretching-expanded`)) {
        isTimeStretchingExpanded = true;
      }
      if (openParam.includes(`${windowId}-stereoscopy-collapsed`)) {
        isStereoscopyExpanded = false;
      }
      if (openParam.includes(`${windowId}-output-collapsed`)) {
        isOutputExpanded = false;
      }
      if (openParam.includes(`${windowId}-output-color-management-collapsed`)) {
        isOutputColorManagementExpanded = false;
      }
      if (openParam.includes(`${windowId}-output-pixel-density-collapsed`)) {
        isOutputPixelDensityExpanded = false;
      }
      if (openParam.includes(`${windowId}-metadata-collapsed`)) {
        isMetadataExpanded = false;
      }
      if (openParam.includes(`${windowId}-metadata-note-expanded`)) {
        isMetadataNoteExpanded = true;
      }
      if (openParam.includes(`${windowId}-burn-into-image-collapsed`)) {
        isBurnIntoImageExpanded = false;
      }
      if (openParam.includes(`${windowId}-post-processing-collapsed`)) {
        isPostProcessingExpanded = false;
      }
      
      if (openParam.includes(`${windowId}-tab-view-layer`)) {
        activeTab = 'view-layer';
      }
      if (openParam.includes(`${windowId}-view-layer-collapsed`)) {
        isViewLayerExpanded = false;
      }
      if (openParam.includes(`${windowId}-override-collapsed`)) {
        isOverrideExpanded = false;
      }
      if (openParam.includes(`${windowId}-passes-collapsed`)) {
        isPassesExpanded = false;
      }
      if (openParam.includes(`${windowId}-passes-data-collapsed`)) {
        isPassesDataExpanded = false;
      }
      if (openParam.includes(`${windowId}-passes-light-collapsed`)) {
        isPassesLightExpanded = false;
      }
      if (openParam.includes(`${windowId}-passes-cryptomatte-collapsed`)) {
        isPassesCryptomatteExpanded = false;
      }
      if (openParam.includes(`${windowId}-passes-shader-aov-collapsed`)) {
        isPassesShaderAOVExpanded = false;
      }
      if (openParam.includes(`${windowId}-passes-light-groups-collapsed`)) {
        isPassesLightGroupsExpanded = false;
      }
      if (openParam.includes(`${windowId}-filter-collapsed`)) {
        isFilterExpanded = false;
      }

      // Scene Tab
      if (openParam.includes(`${windowId}-tab-scene`)) {
        activeTab = 'scene';
      }
      if (openParam.includes(`${windowId}-scene-collapsed`)) {
        isSceneExpanded = false;
      }
      if (openParam.includes(`${windowId}-units-collapsed`)) {
        isUnitsExpanded = false;
      }
      if (openParam.includes(`${windowId}-gravity-collapsed`)) {
        isGravityExpanded = false;
      }
      if (openParam.includes(`${windowId}-simulation-collapsed`)) {
        isSimulationExpanded = false;
      }
      if (openParam.includes(`${windowId}-keying-sets-collapsed`)) {
        isKeyingSetsExpanded = false;
      }
      if (openParam.includes(`${windowId}-audio-collapsed`)) {
        isAudioExpanded = false;
      }
      if (openParam.includes(`${windowId}-rigid-body-world-collapsed`)) {
        isRigidBodyWorldExpanded = false;
      }
      if (openParam.includes(`${windowId}-animation-collapsed`)) {
        isAnimationExpanded = false;
      }
      if (openParam.includes(`${windowId}-scene-custom-properties-collapsed`)) {
        isSceneCustomPropertiesExpanded = false;
      }

      // World Tab
      if (openParam.includes(`${windowId}-tab-world`)) {
        activeTab = 'world';
      }
      if (openParam.includes(`${windowId}-world-preview-collapsed`)) {
        isWorldPreviewExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-surface-collapsed`)) {
        isWorldSurfaceExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-volume-collapsed`)) {
        isWorldVolumeExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-ray-visibility-collapsed`)) {
        isWorldRayVisibilityExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-settings-collapsed`)) {
        isWorldSettingsExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-settings-surface-collapsed`)) {
        isWorldSettingsSurfaceExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-settings-volume-collapsed`)) {
        isWorldSettingsVolumeExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-settings-light-group-collapsed`)) {
        isWorldSettingsLightGroupExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-viewport-display-collapsed`)) {
        isWorldViewportDisplayExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-animation-collapsed`)) {
        isWorldAnimationExpanded = false;
      }
      if (openParam.includes(`${windowId}-world-custom-properties-collapsed`)) {
        isWorldCustomPropertiesExpanded = false;
      }

      // Collection Tab
      if (openParam.includes(`${windowId}-tab-collection`)) {
        activeTab = 'collection';
      }
      if (openParam.includes(`${windowId}-collection-visibility-collapsed`)) {
        isCollectionVisibilityExpanded = false;
      }
      if (openParam.includes(`${windowId}-collection-visibility-view-layer-collapsed`)) {
        isCollectionVisibilityViewLayerExpanded = false;
      }
      if (openParam.includes(`${windowId}-collection-instancing-collapsed`)) {
        isCollectionInstancingExpanded = false;
      }
      if (openParam.includes(`${windowId}-collection-exporters-collapsed`)) {
        isCollectionExportersExpanded = false;
      }
      if (openParam.includes(`${windowId}-collection-line-art-collapsed`)) {
        isCollectionLineArtExpanded = false;
      }
      if (openParam.includes(`${windowId}-collection-custom-properties-expanded`)) {
        isCollectionCustomPropertiesExpanded = true;
      }

      // Object Tab
      if (openParam.includes(`${windowId}-tab-object`)) {
        activeTab = 'object';
      }
      if (openParam.includes(`${windowId}-object-transform-collapsed`)) {
        isObjectTransformExpanded = false;
      }
      if (openParam.includes(`${windowId}-object-delta-transform-expanded`)) {
        isObjectDeltaTransformExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-relations-expanded`)) {
        isObjectRelationsExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-collections-expanded`)) {
        isObjectCollectionsExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-instancing-expanded`)) {
        isObjectInstancingExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-motion-paths-expanded`)) {
        isObjectMotionPathsExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-shading-expanded`)) {
        isObjectShadingExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-motion-blur-expanded`)) {
        isObjectMotionBlurExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-visibility-expanded`)) {
        isObjectVisibilityExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-viewport-display-collapsed`)) {
        isObjectViewportDisplayExpanded = false;
      }
      if (openParam.includes(`${windowId}-object-line-art-expanded`)) {
        isObjectLineArtExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-animation-expanded`)) {
        isObjectAnimationExpanded = true;
      }
      if (openParam.includes(`${windowId}-object-custom-properties-collapsed`)) {
        isObjectCustomPropertiesExpanded = false;
      }

      // Modifiers Tab
      if (openParam.includes(`${windowId}-tab-modifiers`)) {
        activeTab = 'modifiers';
      }
      if (openParam.includes(`${windowId}-modifier-subdivision-collapsed`)) {
        isModifierSubdivisionExpanded = false;
      }
      if (openParam.includes(`${windowId}-modifier-subdivision-adaptive-expanded`)) {
        isModifierSubdivisionAdaptiveExpanded = true;
      }
      if (openParam.includes(`${windowId}-modifier-subdivision-advanced-expanded`)) {
        isModifierSubdivisionAdvancedExpanded = true;
      }
      // Physics Tab
      if (openParam.includes(`${windowId}-tab-physics`)) {
        activeTab = 'physics';
      }
      // Constraints Tab
      if (openParam.includes(`${windowId}-tab-constraints`)) {
        activeTab = 'constraints';
      }
      // Data Tab
      if (openParam.includes(`${windowId}-tab-data`)) {
        activeTab = 'data';
      }
      if (openParam.includes(`${windowId}-data-vertex-groups-collapsed`)) {
        isDataVertexGroupsExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-shape-keys-collapsed`)) {
        isDataShapeKeysExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-uv-maps-collapsed`)) {
        isDataUVMapsExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-color-attributes-collapsed`)) {
        isDataColorAttributesExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-attributes-collapsed`)) {
        isDataAttributesExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-texture-space-collapsed`)) {
        isDataTextureSpaceExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-remesh-collapsed`)) {
        isDataRemeshExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-geometry-data-collapsed`)) {
        isDataGeometryDataExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-animation-collapsed`)) {
        isDataAnimationExpanded = false;
      }
      if (openParam.includes(`${windowId}-data-custom-properties-collapsed`)) {
        isDataCustomPropertiesExpanded = false;
      }

      // Material Tab
      if (openParam.includes(`${windowId}-tab-material`)) {
        activeTab = 'material';
      }
      if (openParam.includes(`${windowId}-material-preview-collapsed`)) {
        isMaterialPreviewExpanded = false;
      }
      if (openParam.includes(`${windowId}-material-surface-collapsed`)) {
        isMaterialSurfaceExpanded = false;
      }
      if (openParam.includes(`${windowId}-material-volume-expanded`)) {
        isMaterialVolumeExpanded = true;
      }
      if (openParam.includes(`${windowId}-material-displacement-expanded`)) {
        isMaterialDisplacementExpanded = true;
      }
      if (openParam.includes(`${windowId}-material-settings-expanded`)) {
        isMaterialSettingsExpanded = true;
      }
      if (openParam.includes(`${windowId}-material-line-art-expanded`)) {
        isMaterialLineArtExpanded = true;
      }
      if (openParam.includes(`${windowId}-material-custom-properties-expanded`)) {
        isMaterialCustomPropertiesExpanded = true;
      }
    }
  });

  
  function toggleVisibleTabsMenu(e) {
    if (e) e.stopPropagation();
    isVisibleTabsMenuOpen = !isVisibleTabsMenuOpen;
    updateOpenParam();
  }

  function updateOpenParam() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const openParam = url.searchParams.get('open') || '';
      let openStates = openParam ? openParam.split(',') : [];
      
      // Filter out our states
      openStates = openStates.filter(s => !s.startsWith(`${windowId}-tab-`) && 
                                          !s.startsWith(`${windowId}-sampling-`) &&
                                          !s.startsWith(`${windowId}-volumes-`) &&
                                          !s.startsWith(`${windowId}-subdivision-`) &&
                                          !s.startsWith(`${windowId}-curves-`) &&
                                          !s.startsWith(`${windowId}-simplify-`) &&
                                          !s.startsWith(`${windowId}-motion-blur-`) &&
                                          !s.startsWith(`${windowId}-film-`) &&
                                          !s.startsWith(`${windowId}-performance-`) &&
                                          !s.startsWith(`${windowId}-bake-`) &&
                                          !s.startsWith(`${windowId}-grease-pencil-`) &&
                                          !s.startsWith(`${windowId}-freestyle-`) &&
                                          !s.startsWith(`${windowId}-color-management-`) &&
                                          !s.startsWith(`${windowId}-format-`) &&
                                          !s.startsWith(`${windowId}-frame-range-`) &&
                                          !s.startsWith(`${windowId}-time-stretching-`) &&
                                          !s.startsWith(`${windowId}-stereoscopy-`) &&
                                          !s.startsWith(`${windowId}-output-`) &&
                                          !s.startsWith(`${windowId}-metadata-`) &&
                                          !s.startsWith(`${windowId}-burn-into-image-`) &&
                                          !s.startsWith(`${windowId}-post-processing-`) &&
                                          !s.startsWith(`${windowId}-view-layer-`) &&
                                          !s.startsWith(`${windowId}-override-`) &&
                                          !s.startsWith(`${windowId}-passes-`) &&
                                          !s.startsWith(`${windowId}-filter-`) &&
                                          !s.startsWith(`${windowId}-scene-`) &&
                                          !s.startsWith(`${windowId}-units-`) &&
                                          !s.startsWith(`${windowId}-gravity-`) &&
                                          !s.startsWith(`${windowId}-simulation-`) &&
                                          !s.startsWith(`${windowId}-keying-sets-`) &&
                                          !s.startsWith(`${windowId}-audio-`) &&
                                          !s.startsWith(`${windowId}-rigid-body-world-`) &&
                                          !s.startsWith(`${windowId}-animation-`) &&
                                          !s.startsWith(`${windowId}-world-`) &&
                                          !s.startsWith(`${windowId}-collection-`) &&
                                          !s.startsWith(`${windowId}-object-`) &&
                                          !s.startsWith(`${windowId}-add-object-constraint-`) &&
                                          !s.startsWith(`${windowId}-light-paths-`));
      
      const slugVisibleTabs = `${windowId}-properties-visible-tabs-dropdown`;
      if (isVisibleTabsMenuOpen) {
        if (!openStates.includes(slugVisibleTabs)) openStates.push(slugVisibleTabs);
      } else {
        openStates = openStates.filter(s => s !== slugVisibleTabs);
      }
      
      if (activeTab === 'render') openStates.push(`${windowId}-tab-render`);
      if (!isSamplingExpanded && activeTab === 'render') openStates.push(`${windowId}-sampling-collapsed`);
      if (!isSamplingViewportExpanded && activeTab === 'render') openStates.push(`${windowId}-sampling-viewport-collapsed`);
      if (!isSamplingRenderExpanded && activeTab === 'render') openStates.push(`${windowId}-sampling-render-collapsed`);
      if (!isLightPathsExpanded && activeTab === 'render') openStates.push(`${windowId}-light-paths-collapsed`);
      if (!isLightPathsMaxBouncesExpanded && activeTab === 'render') openStates.push(`${windowId}-light-paths-max-bounces-collapsed`);
      if (!isLightPathsClampingExpanded && activeTab === 'render') openStates.push(`${windowId}-light-paths-clamping-collapsed`);
      if (!isLightPathsCausticsExpanded && activeTab === 'render') openStates.push(`${windowId}-light-paths-caustics-collapsed`);
      if (!isVolumesExpanded && activeTab === 'render') openStates.push(`${windowId}-volumes-collapsed`);
      if (!isSubdivisionExpanded && activeTab === 'render') openStates.push(`${windowId}-subdivision-collapsed`);
      if (!isCurvesExpanded && activeTab === 'render') openStates.push(`${windowId}-curves-collapsed`);
      if (isCurvesViewportDisplayExpanded && activeTab === 'render') openStates.push(`${windowId}-curves-viewport-display-expanded`);
      if (!isSimplifyExpanded && activeTab === 'render') openStates.push(`${windowId}-simplify-collapsed`);
      if (!isSimplifyViewportExpanded && activeTab === 'render') openStates.push(`${windowId}-simplify-viewport-collapsed`);
      if (!isSimplifyRenderExpanded && activeTab === 'render') openStates.push(`${windowId}-simplify-render-collapsed`);
      if (isSimplifyCullingExpanded && activeTab === 'render') openStates.push(`${windowId}-simplify-culling-expanded`);
      if (isSimplifyGreasePencilExpanded && activeTab === 'render') openStates.push(`${windowId}-simplify-grease-pencil-expanded`);
      if (!isMotionBlurExpanded && activeTab === 'render') openStates.push(`${windowId}-motion-blur-collapsed`);
      if (!isMotionBlurShutterCurveExpanded && activeTab === 'render') openStates.push(`${windowId}-motion-blur-shutter-curve-collapsed`);
      if (!isFilmExpanded && activeTab === 'render') openStates.push(`${windowId}-film-collapsed`);
      if (!isFilmPixelFilterExpanded && activeTab === 'render') openStates.push(`${windowId}-film-pixel-filter-collapsed`);
      if (!isFilmTransparentExpanded && activeTab === 'render') openStates.push(`${windowId}-film-transparent-collapsed`);
      if (!isPerformanceExpanded && activeTab === 'render') openStates.push(`${windowId}-performance-collapsed`);
      if (!isPerformanceDeviceDropdownOpen && activeTab === 'render') openStates.push(`${windowId}-performance-device-dropdown-closed`);
      if (!isBakeExpanded && activeTab === 'render') openStates.push(`${windowId}-bake-collapsed`);
      if (!isBakeInfluenceExpanded && activeTab === 'render') openStates.push(`${windowId}-bake-influence-collapsed`);
      if (isBakeSelectedToActiveExpanded && activeTab === 'render') openStates.push(`${windowId}-bake-selected-to-active-expanded`);
      if (!isBakeOutputExpanded && activeTab === 'render') openStates.push(`${windowId}-bake-output-collapsed`);
      if (!isBakeMarginExpanded && activeTab === 'render') openStates.push(`${windowId}-bake-margin-collapsed`);
      if (isBakeTypeDropdownOpen && activeTab === 'render') openStates.push(`${windowId}-bake-type-dropdown-open`);
      if (isBakeViewFromDropdownOpen && activeTab === 'render') openStates.push(`${windowId}-bake-view-from-dropdown-open`);
      if (isBakeTargetDropdownOpen && activeTab === 'render') openStates.push(`${windowId}-bake-target-dropdown-open`);
      if (!isGreasePencilExpanded && activeTab === 'render') openStates.push(`${windowId}-grease-pencil-collapsed`);
      if (!isGreasePencilViewportExpanded && activeTab === 'render') openStates.push(`${windowId}-grease-pencil-viewport-collapsed`);
      if (!isGreasePencilRenderExpanded && activeTab === 'render') openStates.push(`${windowId}-grease-pencil-render-collapsed`);
      if (!isFreestyleExpanded && activeTab === 'render') openStates.push(`${windowId}-freestyle-collapsed`);
      if (!isFreestyleLineThicknessModeAbsolute && activeTab === 'render') openStates.push(`${windowId}-freestyle-line-thickness-mode-relative`);
      if (!isColorManagementExpanded && activeTab === 'render') openStates.push(`${windowId}-color-management-collapsed`);
      if (isColorManagementCurvesExpanded && activeTab === 'render') openStates.push(`${windowId}-color-management-curves-expanded`);
      if (isColorManagementWhiteBalanceExpanded && activeTab === 'render') openStates.push(`${windowId}-color-management-white-balance-expanded`);
      if (isColorManagementWorkingSpaceExpanded && activeTab === 'render') openStates.push(`${windowId}-color-management-working-space-expanded`);
      if (isColorManagementAdvancedExpanded && activeTab === 'render') openStates.push(`${windowId}-color-management-advanced-expanded`);

      // Output Tab
      if (activeTab === 'output') openStates.push(`${windowId}-tab-output`);
      if (!isFormatExpanded && activeTab === 'output') openStates.push(`${windowId}-format-collapsed`);
      if (!isFrameRangeExpanded && activeTab === 'output') openStates.push(`${windowId}-frame-range-collapsed`);
      if (isTimeStretchingExpanded && activeTab === 'output') openStates.push(`${windowId}-time-stretching-expanded`);
      if (!isStereoscopyExpanded && activeTab === 'output') openStates.push(`${windowId}-stereoscopy-collapsed`);
      if (!isOutputExpanded && activeTab === 'output') openStates.push(`${windowId}-output-collapsed`);
      if (!isOutputColorManagementExpanded && activeTab === 'output') openStates.push(`${windowId}-output-color-management-collapsed`);
      if (!isOutputPixelDensityExpanded && activeTab === 'output') openStates.push(`${windowId}-output-pixel-density-collapsed`);
      if (!isMetadataExpanded && activeTab === 'output') openStates.push(`${windowId}-metadata-collapsed`);
      if (isMetadataNoteExpanded && activeTab === 'output') openStates.push(`${windowId}-metadata-note-expanded`);
      if (!isBurnIntoImageExpanded && activeTab === 'output') openStates.push(`${windowId}-burn-into-image-collapsed`);
      if (!isPostProcessingExpanded && activeTab === 'output') openStates.push(`${windowId}-post-processing-collapsed`);
      
      // View Layer Tab
      if (activeTab === 'view-layer') openStates.push(`${windowId}-tab-view-layer`);
      if (!isViewLayerExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-view-layer-collapsed`);
      if (!isOverrideExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-override-collapsed`);
      if (!isPassesExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-passes-collapsed`);
      if (!isPassesDataExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-passes-data-collapsed`);
      if (!isPassesLightExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-passes-light-collapsed`);
      if (!isPassesCryptomatteExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-passes-cryptomatte-collapsed`);
      if (!isPassesShaderAOVExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-passes-shader-aov-collapsed`);
      if (!isPassesLightGroupsExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-passes-light-groups-collapsed`);
      if (!isFilterExpanded && activeTab === 'view-layer') openStates.push(`${windowId}-filter-collapsed`);
      
      // Scene Tab
      if (activeTab === 'scene') openStates.push(`${windowId}-tab-scene`);
      if (!isSceneExpanded && activeTab === 'scene') openStates.push(`${windowId}-scene-collapsed`);
      if (!isUnitsExpanded && activeTab === 'scene') openStates.push(`${windowId}-units-collapsed`);
      if (!isGravityExpanded && activeTab === 'scene') openStates.push(`${windowId}-gravity-collapsed`);
      if (!isSimulationExpanded && activeTab === 'scene') openStates.push(`${windowId}-simulation-collapsed`);
      if (!isKeyingSetsExpanded && activeTab === 'scene') openStates.push(`${windowId}-keying-sets-collapsed`);
      if (!isAudioExpanded && activeTab === 'scene') openStates.push(`${windowId}-audio-collapsed`);
      if (!isRigidBodyWorldExpanded && activeTab === 'scene') openStates.push(`${windowId}-rigid-body-world-collapsed`);
      if (!isAnimationExpanded && activeTab === 'scene') openStates.push(`${windowId}-animation-collapsed`);
      if (!isSceneCustomPropertiesExpanded && activeTab === 'scene') openStates.push(`${windowId}-scene-custom-properties-collapsed`);
      
      // World Tab
      if (activeTab === 'world') openStates.push(`${windowId}-tab-world`);
      if (!isWorldPreviewExpanded && activeTab === 'world') openStates.push(`${windowId}-world-preview-collapsed`);
      if (!isWorldSurfaceExpanded && activeTab === 'world') openStates.push(`${windowId}-world-surface-collapsed`);
      if (!isWorldVolumeExpanded && activeTab === 'world') openStates.push(`${windowId}-world-volume-collapsed`);
      if (!isWorldRayVisibilityExpanded && activeTab === 'world') openStates.push(`${windowId}-world-ray-visibility-collapsed`);
      if (!isWorldSettingsExpanded && activeTab === 'world') openStates.push(`${windowId}-world-settings-collapsed`);
      if (!isWorldSettingsSurfaceExpanded && activeTab === 'world') openStates.push(`${windowId}-world-settings-surface-collapsed`);
      if (!isWorldSettingsVolumeExpanded && activeTab === 'world') openStates.push(`${windowId}-world-settings-volume-collapsed`);
      if (!isWorldSettingsLightGroupExpanded && activeTab === 'world') openStates.push(`${windowId}-world-settings-light-group-collapsed`);
      if (!isWorldViewportDisplayExpanded && activeTab === 'world') openStates.push(`${windowId}-world-viewport-display-collapsed`);
      if (!isWorldAnimationExpanded && activeTab === 'world') openStates.push(`${windowId}-world-animation-collapsed`);
      if (!isWorldCustomPropertiesExpanded && activeTab === 'world') openStates.push(`${windowId}-world-custom-properties-collapsed`);

      // Collection Tab
      if (activeTab === 'collection') openStates.push(`${windowId}-tab-collection`);
      if (!isCollectionVisibilityExpanded && activeTab === 'collection') openStates.push(`${windowId}-collection-visibility-collapsed`);
      if (!isCollectionVisibilityViewLayerExpanded && activeTab === 'collection') openStates.push(`${windowId}-collection-visibility-view-layer-collapsed`);
      if (!isCollectionInstancingExpanded && activeTab === 'collection') openStates.push(`${windowId}-collection-instancing-collapsed`);
      if (!isCollectionExportersExpanded && activeTab === 'collection') openStates.push(`${windowId}-collection-exporters-collapsed`);
      if (!isCollectionLineArtExpanded && activeTab === 'collection') openStates.push(`${windowId}-collection-line-art-collapsed`);
      if (isCollectionCustomPropertiesExpanded && activeTab === 'collection') openStates.push(`${windowId}-collection-custom-properties-expanded`);

      // Object Tab
      if (activeTab === 'object') openStates.push(`${windowId}-tab-object`);
      if (!isObjectTransformExpanded && activeTab === 'object') openStates.push(`${windowId}-object-transform-collapsed`);
      if (isObjectDeltaTransformExpanded && activeTab === 'object') openStates.push(`${windowId}-object-delta-transform-expanded`);
      if (isObjectRelationsExpanded && activeTab === 'object') openStates.push(`${windowId}-object-relations-expanded`);
      if (isObjectCollectionsExpanded && activeTab === 'object') openStates.push(`${windowId}-object-collections-expanded`);
      if (isObjectInstancingExpanded && activeTab === 'object') openStates.push(`${windowId}-object-instancing-expanded`);
      if (isObjectMotionPathsExpanded && activeTab === 'object') openStates.push(`${windowId}-object-motion-paths-expanded`);
      if (isObjectShadingExpanded && activeTab === 'object') openStates.push(`${windowId}-object-shading-expanded`);
      if (isObjectMotionBlurExpanded && activeTab === 'object') openStates.push(`${windowId}-object-motion-blur-expanded`);
      if (isObjectVisibilityExpanded && activeTab === 'object') openStates.push(`${windowId}-object-visibility-expanded`);
      if (!isObjectViewportDisplayExpanded && activeTab === 'object') openStates.push(`${windowId}-object-viewport-display-collapsed`);
      if (isObjectLineArtExpanded && activeTab === 'object') openStates.push(`${windowId}-object-line-art-expanded`);
      if (isObjectAnimationExpanded && activeTab === 'object') openStates.push(`${windowId}-object-animation-expanded`);
      if (!isObjectCustomPropertiesExpanded && activeTab === 'object') openStates.push(`${windowId}-object-custom-properties-collapsed`);

      // Modifiers Tab
      if (activeTab === 'modifiers') openStates.push(`${windowId}-tab-modifiers`);
      if (!isModifierSubdivisionExpanded && activeTab === 'modifiers') openStates.push(`${windowId}-modifier-subdivision-collapsed`);
      if (isModifierSubdivisionAdaptiveExpanded && activeTab === 'modifiers') openStates.push(`${windowId}-modifier-subdivision-adaptive-expanded`);
      if (isModifierSubdivisionAdvancedExpanded && activeTab === 'modifiers') openStates.push(`${windowId}-modifier-subdivision-advanced-expanded`);

      // Physics Tab
      if (activeTab === 'physics') openStates.push(`${windowId}-tab-physics`);

      // Constraints Tab
      if (activeTab === 'constraints') openStates.push(`${windowId}-tab-constraints`);
      if (isAddObjectConstraintDropdownOpen && activeTab === 'constraints') openStates.push(`${windowId}-add-object-constraint-dropdown-open`);

      // Data Tab
      if (activeTab === 'data') openStates.push(`${windowId}-tab-data`);
      if (!isDataVertexGroupsExpanded && activeTab === 'data') openStates.push(`${windowId}-data-vertex-groups-collapsed`);
      if (!isDataShapeKeysExpanded && activeTab === 'data') openStates.push(`${windowId}-data-shape-keys-collapsed`);
      if (!isDataUVMapsExpanded && activeTab === 'data') openStates.push(`${windowId}-data-uv-maps-collapsed`);
      if (!isDataColorAttributesExpanded && activeTab === 'data') openStates.push(`${windowId}-data-color-attributes-collapsed`);
      if (!isDataAttributesExpanded && activeTab === 'data') openStates.push(`${windowId}-data-attributes-collapsed`);
      if (!isDataTextureSpaceExpanded && activeTab === 'data') openStates.push(`${windowId}-data-texture-space-collapsed`);
      if (!isDataRemeshExpanded && activeTab === 'data') openStates.push(`${windowId}-data-remesh-collapsed`);
      if (!isDataGeometryDataExpanded && activeTab === 'data') openStates.push(`${windowId}-data-geometry-data-collapsed`);
      if (!isDataAnimationExpanded && activeTab === 'data') openStates.push(`${windowId}-data-animation-collapsed`);
      if (!isDataCustomPropertiesExpanded && activeTab === 'data') openStates.push(`${windowId}-data-custom-properties-collapsed`);

      // Material Tab
      if (activeTab === 'material') openStates.push(`${windowId}-tab-material`);
      if (!isMaterialPreviewExpanded && activeTab === 'material') openStates.push(`${windowId}-material-preview-collapsed`);
      if (!isMaterialSurfaceExpanded && activeTab === 'material') openStates.push(`${windowId}-material-surface-collapsed`);
      if (isMaterialVolumeExpanded && activeTab === 'material') openStates.push(`${windowId}-material-volume-expanded`);
      if (isMaterialDisplacementExpanded && activeTab === 'material') openStates.push(`${windowId}-material-displacement-expanded`);
      if (isMaterialSettingsExpanded && activeTab === 'material') openStates.push(`${windowId}-material-settings-expanded`);
      if (isMaterialLineArtExpanded && activeTab === 'material') openStates.push(`${windowId}-material-line-art-expanded`);
      if (isMaterialCustomPropertiesExpanded && activeTab === 'material') openStates.push(`${windowId}-material-custom-properties-expanded`);
      
      if (openStates.length > 0) {
        url.searchParams.set('open', openStates.join(','));
      } else {
        url.searchParams.delete('open');
      }
      const search = url.searchParams.toString().replace(/%2C/g, ',');
      window.history.replaceState({}, '', `${url.pathname}?${search}`);
    }
  }

  function setTab(tab) {
    activeTab = tab;
    updateOpenParam();
  }

  function toggleSampling() {
    isSamplingExpanded = !isSamplingExpanded;
    updateOpenParam();
  }

  function toggleSamplingViewport() {
    isSamplingViewportExpanded = !isSamplingViewportExpanded;
    updateOpenParam();
  }

  function toggleSamplingRender() {
    isSamplingRenderExpanded = !isSamplingRenderExpanded;
    updateOpenParam();
  }

  function toggleLightPaths() {
    isLightPathsExpanded = !isLightPathsExpanded;
    updateOpenParam();
  }

  function toggleLightPathsMaxBounces() {
    isLightPathsMaxBouncesExpanded = !isLightPathsMaxBouncesExpanded;
    updateOpenParam();
  }

  function toggleLightPathsClamping() {
    isLightPathsClampingExpanded = !isLightPathsClampingExpanded;
    updateOpenParam();
  }

  function toggleLightPathsCaustics() {
    isLightPathsCausticsExpanded = !isLightPathsCausticsExpanded;
    updateOpenParam();
  }

  function toggleVolumes() {
    isVolumesExpanded = !isVolumesExpanded;
    updateOpenParam();
  }

  function toggleSubdivision() {
    isSubdivisionExpanded = !isSubdivisionExpanded;
    updateOpenParam();
  }

  function toggleCurves() {
    isCurvesExpanded = !isCurvesExpanded;
    updateOpenParam();
  }

  function toggleCurvesViewportDisplay() {
    isCurvesViewportDisplayExpanded = !isCurvesViewportDisplayExpanded;
    updateOpenParam();
  }

  function toggleSimplify() {
    isSimplifyExpanded = !isSimplifyExpanded;
    updateOpenParam();
  }

  function toggleSimplifyViewport() {
    isSimplifyViewportExpanded = !isSimplifyViewportExpanded;
    updateOpenParam();
  }

  function toggleSimplifyRender() {
    isSimplifyRenderExpanded = !isSimplifyRenderExpanded;
    updateOpenParam();
  }

  function toggleSimplifyCulling() {
    isSimplifyCullingExpanded = !isSimplifyCullingExpanded;
    updateOpenParam();
  }

  function toggleSimplifyGreasePencil() {
    isSimplifyGreasePencilExpanded = !isSimplifyGreasePencilExpanded;
    updateOpenParam();
  }

  function toggleMotionBlur() {
    isMotionBlurExpanded = !isMotionBlurExpanded;
    updateOpenParam();
  }

  function toggleMotionBlurShutterCurve() {
    isMotionBlurShutterCurveExpanded = !isMotionBlurShutterCurveExpanded;
    updateOpenParam();
  }

  function toggleFilm() {
    isFilmExpanded = !isFilmExpanded;
    updateOpenParam();
  }

  function toggleFilmPixelFilter() {
    isFilmPixelFilterExpanded = !isFilmPixelFilterExpanded;
    updateOpenParam();
  }

  function toggleFilmTransparent() {
    isFilmTransparentExpanded = !isFilmTransparentExpanded;
    updateOpenParam();
  }

  function togglePerformance() {
    isPerformanceExpanded = !isPerformanceExpanded;
    updateOpenParam();
  }

  function togglePerformanceDeviceDropdown() {
    isPerformanceDeviceDropdownOpen = !isPerformanceDeviceDropdownOpen;
    updateOpenParam();
  }

  function toggleBake() {
    isBakeExpanded = !isBakeExpanded;
    updateOpenParam();
  }

  function toggleBakeInfluence() {
    isBakeInfluenceExpanded = !isBakeInfluenceExpanded;
    updateOpenParam();
  }

  function toggleBakeSelectedToActive() {
    isBakeSelectedToActiveExpanded = !isBakeSelectedToActiveExpanded;
    updateOpenParam();
  }

  function toggleBakeOutput() {
    isBakeOutputExpanded = !isBakeOutputExpanded;
    updateOpenParam();
  }

  function toggleBakeMargin() {
    isBakeMarginExpanded = !isBakeMarginExpanded;
    updateOpenParam();
  }

  function toggleBakeTypeDropdown() {
    isBakeTypeDropdownOpen = !isBakeTypeDropdownOpen;
    updateOpenParam();
  }

  function toggleBakeViewFromDropdown() {
    isBakeViewFromDropdownOpen = !isBakeViewFromDropdownOpen;
    updateOpenParam();
  }

  function toggleBakeTargetDropdown() {
    isBakeTargetDropdownOpen = !isBakeTargetDropdownOpen;
    updateOpenParam();
  }

  function toggleGreasePencil() {
    isGreasePencilExpanded = !isGreasePencilExpanded;
    updateOpenParam();
  }

  function toggleGreasePencilViewport() {
    isGreasePencilViewportExpanded = !isGreasePencilViewportExpanded;
    updateOpenParam();
  }

  function toggleGreasePencilRender() {
    isGreasePencilRenderExpanded = !isGreasePencilRenderExpanded;
    updateOpenParam();
  }

  function toggleFreestyle() {
    isFreestyleExpanded = !isFreestyleExpanded;
    updateOpenParam();
  }

  function setFreestyleLineThicknessMode(absolute) {
    isFreestyleLineThicknessModeAbsolute = absolute;
    updateOpenParam();
  }

  function toggleColorManagement() {
    isColorManagementExpanded = !isColorManagementExpanded;
    updateOpenParam();
  }

  function toggleColorManagementCurves() {
    isColorManagementCurvesExpanded = !isColorManagementCurvesExpanded;
    updateOpenParam();
  }

  function toggleColorManagementWhiteBalance() {
    isColorManagementWhiteBalanceExpanded = !isColorManagementWhiteBalanceExpanded;
    updateOpenParam();
  }

  function toggleColorManagementWorkingSpace() {
    isColorManagementWorkingSpaceExpanded = !isColorManagementWorkingSpaceExpanded;
    updateOpenParam();
  }

  function toggleColorManagementAdvanced() {
    isColorManagementAdvancedExpanded = !isColorManagementAdvancedExpanded;
    updateOpenParam();
  }

  // Output Tab Toggles
  function toggleFormat() {
    isFormatExpanded = !isFormatExpanded;
    updateOpenParam();
  }

  function toggleFrameRange() {
    isFrameRangeExpanded = !isFrameRangeExpanded;
    updateOpenParam();
  }

  function toggleTimeStretching() {
    isTimeStretchingExpanded = !isTimeStretchingExpanded;
    updateOpenParam();
  }

  function toggleStereoscopy() {
    isStereoscopyExpanded = !isStereoscopyExpanded;
    updateOpenParam();
  }

  function toggleOutput() {
    isOutputExpanded = !isOutputExpanded;
    updateOpenParam();
  }

  function toggleOutputColorManagement() {
    isOutputColorManagementExpanded = !isOutputColorManagementExpanded;
    updateOpenParam();
  }

  function toggleOutputPixelDensity() {
    isOutputPixelDensityExpanded = !isOutputPixelDensityExpanded;
    updateOpenParam();
  }

  function toggleMetadata() {
    isMetadataExpanded = !isMetadataExpanded;
    updateOpenParam();
  }

  function toggleMetadataNote() {
    isMetadataNoteExpanded = !isMetadataNoteExpanded;
    updateOpenParam();
  }

  function toggleBurnIntoImage() {
    isBurnIntoImageExpanded = !isBurnIntoImageExpanded;
    updateOpenParam();
  }

  function togglePostProcessing() {
    isPostProcessingExpanded = !isPostProcessingExpanded;
    updateOpenParam();
  }

  function setStereoscopyStereo3D(stereo3D) {
    isStereoscopyStereo3D = stereo3D;
    updateOpenParam();
  }

  function setOutputColor(bw, rgb, rgba) {
    isOutputColorBW = bw;
    isOutputColorRGB = rgb;
    isOutputColorRGBA = rgba;
    updateOpenParam();
  }

  function setOutputColorDepth(depth8) {
    isOutputColorDepth8 = depth8;
    updateOpenParam();
  }

  function setOutputColorManagementFollowScene(followScene) {
    isOutputColorManagementFollowScene = followScene;
    updateOpenParam();
  }

  // View Layer Tab Toggles
  function toggleViewLayer() {
    isViewLayerExpanded = !isViewLayerExpanded;
    updateOpenParam();
  }

  function toggleOverride() {
    isOverrideExpanded = !isOverrideExpanded;
    updateOpenParam();
  }

  function togglePasses() {
    isPassesExpanded = !isPassesExpanded;
    updateOpenParam();
  }

  function togglePassesData() {
    isPassesDataExpanded = !isPassesDataExpanded;
    updateOpenParam();
  }

  function togglePassesLight() {
    isPassesLightExpanded = !isPassesLightExpanded;
    updateOpenParam();
  }

  function togglePassesCryptomatte() {
    isPassesCryptomatteExpanded = !isPassesCryptomatteExpanded;
    updateOpenParam();
  }

  function togglePassesShaderAOV() {
    isPassesShaderAOVExpanded = !isPassesShaderAOVExpanded;
    updateOpenParam();
  }

  function togglePassesLightGroups() {
    isPassesLightGroupsExpanded = !isPassesLightGroupsExpanded;
    updateOpenParam();
  }

  function toggleFilter() {
    isFilterExpanded = !isFilterExpanded;
    updateOpenParam();
  }

  // Scene Tab Toggles
  function toggleScene() {
    isSceneExpanded = !isSceneExpanded;
    updateOpenParam();
  }

  function toggleUnits() {
    isUnitsExpanded = !isUnitsExpanded;
    updateOpenParam();
  }

  function toggleGravity() {
    isGravityExpanded = !isGravityExpanded;
    updateOpenParam();
  }

  function toggleSimulation() {
    isSimulationExpanded = !isSimulationExpanded;
    updateOpenParam();
  }

  function toggleKeyingSets() {
    isKeyingSetsExpanded = !isKeyingSetsExpanded;
    updateOpenParam();
  }

  function toggleAudio() {
    isAudioExpanded = !isAudioExpanded;
    updateOpenParam();
  }

  function toggleRigidBodyWorld() {
    isRigidBodyWorldExpanded = !isRigidBodyWorldExpanded;
    updateOpenParam();
  }

  function toggleAnimation() {
    isAnimationExpanded = !isAnimationExpanded;
    updateOpenParam();
  }

  function toggleSceneCustomProperties() {
    isSceneCustomPropertiesExpanded = !isSceneCustomPropertiesExpanded;
    updateOpenParam();
  }

  // World Tab Toggles
  function toggleWorldPreview() {
    isWorldPreviewExpanded = !isWorldPreviewExpanded;
    updateOpenParam();
  }

  function toggleWorldSurface() {
    isWorldSurfaceExpanded = !isWorldSurfaceExpanded;
    updateOpenParam();
  }

  function toggleWorldVolume() {
    isWorldVolumeExpanded = !isWorldVolumeExpanded;
    updateOpenParam();
  }

  function toggleWorldRayVisibility() {
    isWorldRayVisibilityExpanded = !isWorldRayVisibilityExpanded;
    updateOpenParam();
  }

  function toggleWorldSettings() {
    isWorldSettingsExpanded = !isWorldSettingsExpanded;
    updateOpenParam();
  }

  function toggleWorldSettingsSurface() {
    isWorldSettingsSurfaceExpanded = !isWorldSettingsSurfaceExpanded;
    updateOpenParam();
  }

  function toggleWorldSettingsVolume() {
    isWorldSettingsVolumeExpanded = !isWorldSettingsVolumeExpanded;
    updateOpenParam();
  }

  function toggleWorldSettingsLightGroup() {
    isWorldSettingsLightGroupExpanded = !isWorldSettingsLightGroupExpanded;
    updateOpenParam();
  }

  function toggleWorldViewportDisplay() {
    isWorldViewportDisplayExpanded = !isWorldViewportDisplayExpanded;
    updateOpenParam();
  }

  function toggleWorldAnimation() {
    isWorldAnimationExpanded = !isWorldAnimationExpanded;
    updateOpenParam();
  }

  function toggleWorldCustomProperties() {
    isWorldCustomPropertiesExpanded = !isWorldCustomPropertiesExpanded;
    updateOpenParam();
  }

  // Collection Tab Toggles
  function toggleCollectionVisibility() {
    isCollectionVisibilityExpanded = !isCollectionVisibilityExpanded;
    updateOpenParam();
  }

  function toggleCollectionVisibilityViewLayer() {
    isCollectionVisibilityViewLayerExpanded = !isCollectionVisibilityViewLayerExpanded;
    updateOpenParam();
  }

  function toggleCollectionInstancing() {
    isCollectionInstancingExpanded = !isCollectionInstancingExpanded;
    updateOpenParam();
  }

  function toggleCollectionExporters() {
    isCollectionExportersExpanded = !isCollectionExportersExpanded;
    updateOpenParam();
  }

  function toggleCollectionLineArt() {
    isCollectionLineArtExpanded = !isCollectionLineArtExpanded;
    updateOpenParam();
  }

  function toggleCollectionCustomProperties() {
    isCollectionCustomPropertiesExpanded = !isCollectionCustomPropertiesExpanded;
    updateOpenParam();
  }

  // Object Tab Toggles
  function toggleObjectTransform() {
    isObjectTransformExpanded = !isObjectTransformExpanded;
    updateOpenParam();
  }

  function toggleObjectDeltaTransform() {
    isObjectDeltaTransformExpanded = !isObjectDeltaTransformExpanded;
    updateOpenParam();
  }

  function toggleObjectRelations() {
    isObjectRelationsExpanded = !isObjectRelationsExpanded;
    updateOpenParam();
  }

  function toggleObjectCollections() {
    isObjectCollectionsExpanded = !isObjectCollectionsExpanded;
    updateOpenParam();
  }

  function toggleObjectInstancing() {
    isObjectInstancingExpanded = !isObjectInstancingExpanded;
    updateOpenParam();
  }

  function toggleObjectMotionPaths() {
    isObjectMotionPathsExpanded = !isObjectMotionPathsExpanded;
    updateOpenParam();
  }

  function toggleObjectShading() {
    isObjectShadingExpanded = !isObjectShadingExpanded;
    updateOpenParam();
  }

  function toggleObjectMotionBlur() {
    isObjectMotionBlurExpanded = !isObjectMotionBlurExpanded;
    updateOpenParam();
  }

  function toggleObjectVisibility() {
    isObjectVisibilityExpanded = !isObjectVisibilityExpanded;
    updateOpenParam();
  }

  function toggleObjectViewportDisplay() {
    isObjectViewportDisplayExpanded = !isObjectViewportDisplayExpanded;
    updateOpenParam();
  }

  function toggleObjectLineArt() {
    isObjectLineArtExpanded = !isObjectLineArtExpanded;
    updateOpenParam();
  }

  function toggleObjectAnimation() {
    isObjectAnimationExpanded = !isObjectAnimationExpanded;
    updateOpenParam();
  }

  function toggleObjectCustomProperties() {
    isObjectCustomPropertiesExpanded = !isObjectCustomPropertiesExpanded;
    updateOpenParam();
  }

  // Modifiers Tab Toggles
  function toggleModifierSubdivision() {
    isModifierSubdivisionExpanded = !isModifierSubdivisionExpanded;
    updateOpenParam();
  }

  function toggleModifierSubdivisionAdaptive() {
    isModifierSubdivisionAdaptiveExpanded = !isModifierSubdivisionAdaptiveExpanded;
    updateOpenParam();
  }

  function toggleModifierSubdivisionAdvanced() {
    isModifierSubdivisionAdvancedExpanded = !isModifierSubdivisionAdvancedExpanded;
    updateOpenParam();
  }

  function toggleAddObjectConstraintDropdown() {
    isAddObjectConstraintDropdownOpen = !isAddObjectConstraintDropdownOpen;
    updateOpenParam();
  }

  // Data Tab Toggles
  function toggleDataVertexGroups() {
    isDataVertexGroupsExpanded = !isDataVertexGroupsExpanded;
    updateOpenParam();
  }

  function toggleDataShapeKeys() {
    isDataShapeKeysExpanded = !isDataShapeKeysExpanded;
    updateOpenParam();
  }

  function toggleDataUVMaps() {
    isDataUVMapsExpanded = !isDataUVMapsExpanded;
    updateOpenParam();
  }

  function toggleDataColorAttributes() {
    isDataColorAttributesExpanded = !isDataColorAttributesExpanded;
    updateOpenParam();
  }

  function toggleDataAttributes() {
    isDataAttributesExpanded = !isDataAttributesExpanded;
    updateOpenParam();
  }

  function toggleDataTextureSpace() {
    isDataTextureSpaceExpanded = !isDataTextureSpaceExpanded;
    updateOpenParam();
  }

  function toggleDataRemesh() {
    isDataRemeshExpanded = !isDataRemeshExpanded;
    updateOpenParam();
  }

  function toggleDataGeometryData() {
    isDataGeometryDataExpanded = !isDataGeometryDataExpanded;
    updateOpenParam();
  }

  function toggleDataAnimation() {
    isDataAnimationExpanded = !isDataAnimationExpanded;
    updateOpenParam();
  }

  function toggleDataCustomProperties() {
    isDataCustomPropertiesExpanded = !isDataCustomPropertiesExpanded;
    updateOpenParam();
  }

  // Material Tab Toggles
  function toggleMaterialPreview() {
    isMaterialPreviewExpanded = !isMaterialPreviewExpanded;
    updateOpenParam();
  }

  function toggleMaterialSurface() {
    isMaterialSurfaceExpanded = !isMaterialSurfaceExpanded;
    updateOpenParam();
  }

  function toggleMaterialVolume() {
    isMaterialVolumeExpanded = !isMaterialVolumeExpanded;
    updateOpenParam();
  }

  function toggleMaterialDisplacement() {
    isMaterialDisplacementExpanded = !isMaterialDisplacementExpanded;
    updateOpenParam();
  }

  function toggleMaterialSettings() {
    isMaterialSettingsExpanded = !isMaterialSettingsExpanded;
    updateOpenParam();
  }

  function toggleMaterialLineArt() {
    isMaterialLineArtExpanded = !isMaterialLineArtExpanded;
    updateOpenParam();
  }

  function toggleMaterialViewportDisplay() {
    isMaterialViewportDisplayExpanded = !isMaterialViewportDisplayExpanded;
    updateOpenParam();
  }

  function toggleMaterialCustomProperties() {
    isMaterialCustomPropertiesExpanded = !isMaterialCustomPropertiesExpanded;
    updateOpenParam();
  }
</script>

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="Properties editor panel">
  <!-- Header -->
  <div class="h-12 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-4 justify-between text-[15px]" alt-id="Properties header">
    <EditorSelector bind:editor={currentEditor} windowId={windowId} />
    
    <div class="flex-1 flex justify-center items-center px-5">
      <div class="flex items-center gap-2.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] px-4 py-1.5 w-[240px] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] text-[#a0a0a0]" alt-id="Search properties input field">
        <i class="fa-light fa-magnifying-glass text-[15px] opacity-70 pointer-events-none"></i>
        <span class="text-[14px] opacity-60 pointer-events-none">Search</span>
      </div>
    </div>
    
    <div class="flex items-center cursor-pointer hover:text-white text-[#a0a0a0] px-3 py-1.5 hover:bg-[#333] rounded" alt-id="Filter properties button">
      <i class="fa-solid fa-chevron-down text-[11px] pointer-events-none"></i>
    </div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Left vertical tabs -->
    <div class="w-[44px] bg-[#1e1e1e] flex flex-col items-center pt-3 gap-1.5 text-[#a0a0a0] text-[18px] border-r border-[#151515]" alt-id="Properties sidebar tabs">
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'tool' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('tool')} alt-id="Tool"><i class="fa-solid fa-screwdriver-wrench"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'render' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('render')} alt-id="Render"><i class="fa-solid fa-camera-retro"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'output' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('output')} alt-id="Output"><i class="fa-solid fa-print"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'view-layer' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('view-layer')} alt-id="View Layer"><i class="fa-solid fa-layer-group"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'scene' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('scene')} alt-id="Scene"><i class="fa-solid fa-clapperboard"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'world' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#ff8888]' : 'text-[#cc6666] hover:text-[#ff8888]'}" on:click={() => setTab('world')} alt-id="World"><i class="fa-solid fa-globe"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'collection' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('collection')} alt-id="Collection"><i class="fa-solid fa-box-archive"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'object' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#ffaa33]' : 'text-[#e68a00] hover:text-[#ffaa33]'}" on:click={() => setTab('object')} alt-id="Object"><i class="fa-solid fa-square-dashed"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'modifiers' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#6699ff]' : 'text-[#4772b3] hover:text-[#6699ff]'}" on:click={() => setTab('modifiers')} alt-id="Modifiers"><i class="fa-solid fa-wrench"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#4772b3] hover:text-[#6699ff]" alt-id="Particles"><i class="fa-solid fa-circle-nodes"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'physics' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#6699ff]' : 'text-[#4772b3] hover:text-[#6699ff]'}" on:click={() => setTab('physics')} alt-id="Physics"><i class="fa-solid fa-atom"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'constraints' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#6699ff]' : 'text-[#4772b3] hover:text-[#6699ff]'}" on:click={() => setTab('constraints')} alt-id="Constraints"><i class="fa-solid fa-link"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'data' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#66ff99]' : 'text-[#33cc66] hover:text-[#66ff99]'}" on:click={() => setTab('data')} alt-id="Data"><i class="fa-solid fa-draw-polygon"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'material' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#ff6666]' : 'text-[#cc6666] hover:text-[#ff8888]'}" on:click={() => setTab('material')} alt-id="Material"><i class="fa-solid fa-circle"></i></div>
      <div class="relative w-full flex justify-center">
        <div class="w-full flex justify-center py-2 cursor-pointer {isVisibleTabsMenuOpen ? 'text-white bg-[#333]' : 'hover:text-white'}" on:click={toggleVisibleTabsMenu} alt-id="Properties panel settings">
          <i class="fa-solid fa-caret-down text-[12px] pointer-events-none"></i>
        </div>
        
        {#if isVisibleTabsMenuOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isVisibleTabsMenuOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-full top-0 ml-1 bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Visible Tabs popup">
            <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Visible Tabs header">
              <span class="pointer-events-none">Visible Tabs</span>
            </div>
            
            <!-- Items -->
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-screwdriver-wrench text-[13px] w-4 text-center"></i>
                <span>Tool</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-camera-retro text-[13px] w-4 text-center"></i>
                <span>Render</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-print text-[13px] w-4 text-center"></i>
                <span>Output</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-layer-group text-[13px] w-4 text-center"></i>
                <span>View Layer</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-clapperboard text-[13px] w-4 text-center"></i>
                <span>Scene</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-globe text-[13px] w-4 text-center"></i>
                <span>World</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-box-archive text-[13px] w-4 text-center"></i>
                <span>Collection</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-square-dashed text-[13px] w-4 text-center"></i>
                <span>Object</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-wrench text-[13px] w-4 text-center"></i>
                <span>Modifiers</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-wand-magic-sparkles text-[13px] w-4 text-center"></i>
                <span>Effects</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-circle-nodes text-[13px] w-4 text-center"></i>
                <span>Particles</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-atom text-[13px] w-4 text-center"></i>
                <span>Physics</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-link text-[13px] w-4 text-center"></i>
                <span>Constraints</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-draw-polygon text-[13px] w-4 text-center"></i>
                <span>Data</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-bone text-[13px] w-4 text-center"></i>
                <span>Bone</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-link text-[13px] w-4 text-center"></i>
                <span>Bone Constraints</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-circle text-[13px] w-4 text-center"></i>
                <span>Material</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-chess-board text-[13px] w-4 text-center"></i>
                <span>Texture</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-server text-[13px] w-4 text-center"></i>
                <span>Strip</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-wrench text-[13px] w-4 text-center"></i>
                <span>Strip Modifiers</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Main content -->
    <div class="flex-1 bg-[#282828] flex flex-col text-[14px] overflow-hidden" alt-id="Properties main content view">
      <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {#if activeTab === 'tool'}
          <!-- Tool Header -->
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90 rounded-[3px]" alt-id="Select Box tool icon">
              <i class="fa-solid fa-arrow-pointer text-[18px] text-white shadow-sm transform -translate-x-0.5"></i>
            </div>
            <span class="text-[#ccc] text-[16px] font-medium">Select Box</span>
          </div>
          
          <!-- Selection modes -->
          <div class="flex items-center gap-1.5">
            <div class="w-9 h-9 bg-[#4772b3] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Set">
              <i class="fa-regular fa-square-dashed text-[20px] text-white"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Extend">
              <i class="fa-regular fa-object-union text-[20px] text-[#a0a0a0]"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Subtract">
              <i class="fa-regular fa-object-subtract text-[20px] text-[#a0a0a0]"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Difference">
              <i class="fa-regular fa-object-exclude text-[20px] text-[#a0a0a0]"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Intersect">
              <i class="fa-regular fa-object-intersect text-[20px] text-[#a0a0a0]"></i>
            </div>
          </div>
          
          <!-- Options Accordion -->
          <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden mt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Options accordion, expanded">
              <div class="flex items-center gap-2.5">
                <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                <span class="font-medium text-[#ccc] text-[15px]">Options</span>
              </div>
              <div class="flex items-center gap-[2.5px] opacity-40">
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              </div>
            </div>
            
            <div class="p-3 bg-[#282828] border-t border-[#1f1f1f]">
              <!-- Transform Sub-Accordion -->
              <div class="flex flex-col">
                <div class="flex items-center gap-2.5 px-1 py-1.5 cursor-pointer hover:text-white text-[#ccc]" alt-id="Transform sub-accordion, expanded">
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center"></i>
                  <span class="text-[14px]">Transform</span>
                </div>
                
                <div class="flex pl-10 py-3">
                  <span class="text-[#a0a0a0] w-28 pt-0.5 text-[14px]">Affect Only</span>
                  <div class="flex flex-col gap-2.5">
                    <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Origins checkbox">
                      <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                      <span class="text-[#ccc] text-[14px]">Origins</span>
                    </div>
                    <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Locations checkbox">
                      <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                      <span class="text-[#ccc] text-[14px]">Locations</span>
                    </div>
                    <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Parents checkbox">
                      <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                      <span class="text-[#ccc] text-[14px]">Parents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Workspace Accordion -->
          <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Workspace accordion, collapsed">
              <div class="flex items-center gap-2.5">
                <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                <span class="font-medium text-[#ccc] text-[15px]">Workspace</span>
              </div>
              <div class="flex items-center gap-[2.5px] opacity-40">
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
              </div>
            </div>
          </div>
        {:else if activeTab === 'render'}
          <!-- Render Tab Header -->
          <div class="flex items-center gap-3 w-full pr-1">
            <div class="relative w-6 h-6 flex items-center justify-center opacity-90 rounded-[3px]" alt-id="Scene icon">
              <i class="fa-solid fa-shapes text-[16px] text-[#ccc]"></i>
            </div>
            <span class="text-[#ccc] text-[14px] font-medium" alt-id="Scene Name">Cube Diorama</span>
            <i class="fa-solid fa-thumbtack text-[13px] text-[#888] ml-auto transform rotate-45 hover:text-[#ccc] cursor-pointer" alt-id="Pin icon"></i>
          </div>

          <div class="flex flex-col gap-1.5 mt-2">
            <div class="flex items-center gap-2">
              <span class="w-[120px] text-right text-[13px] text-[#ccc]">Render Engine</span>
              <div class="flex-1 bg-[#2b2b2b] border border-[#1f1f1f] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#333]" alt-id="Render Engine dropdown, value Cycles">
                <span class="text-[13px] text-[#eee]">Cycles</span>
                <i class="fa-solid fa-chevron-down text-[10px] opacity-60"></i>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-[120px] text-right text-[13px] text-[#ccc]">Device</span>
              <div class="flex-1 bg-[#2b2b2b] border border-[#1f1f1f] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#333]" alt-id="Device dropdown, value GPU Compute">
                <span class="text-[13px] text-[#eee]">GPU Compute</span>
                <i class="fa-solid fa-chevron-down text-[10px] opacity-60"></i>
              </div>
            </div>
          </div>

          <!-- Accordions Container -->
          <div class="flex flex-col gap-0.5 mt-2">
            
            <!-- Sampling -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSampling} alt-id="Sampling accordion">
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-chevron-{isSamplingExpanded ? 'down' : 'right'} text-[11px] w-3 text-center text-[#ccc]"></i>
                  <span class="text-[#eee] text-[13px]">Sampling</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              {#if isSamplingExpanded}
                <div class="bg-[#282828] border-t border-[#1f1f1f]">
                  <!-- Viewport -->
                  <div class="flex items-center justify-between px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc]" on:click={toggleSamplingViewport} alt-id="Viewport sub-accordion">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-chevron-{isSamplingViewportExpanded ? 'down' : 'right'} text-[11px] w-3 text-center"></i>
                      <span class="text-[13px]">Viewport</span>
                    </div>
                    <i class="fa-solid fa-sliders text-[12px] opacity-70"></i>
                  </div>
                  {#if isSamplingViewportExpanded}
                    <div class="flex flex-col gap-1 pl-4 pr-3 py-1">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Noise Threshold</span>
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">0.1000</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Max Samples</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">32</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Min Samples</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">0</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-6 py-1.5">
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#ccc]">Denoise</span>
                    </div>
                  {/if}

                  <!-- Render -->
                  <div class="flex items-center justify-between px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc] bg-[#2d2d2d]" on:click={toggleSamplingRender} alt-id="Render sub-accordion">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-chevron-{isSamplingRenderExpanded ? 'down' : 'right'} text-[11px] w-3 text-center"></i>
                      <span class="text-[13px]">Render</span>
                    </div>
                    <i class="fa-solid fa-sliders text-[12px] opacity-70"></i>
                  </div>
                  {#if isSamplingRenderExpanded}
                    <div class="flex flex-col gap-1 pl-4 pr-3 py-1.5 bg-[#282828] border-t border-[#1f1f1f]">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Noise Threshold</span>
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                        <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#888]">0.0100</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Samples</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">32</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Time Limit</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">0 s</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 px-6 py-1 bg-[#282828]">
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#ccc]">Denoise</span>
                    </div>
                    <div class="flex items-center gap-2 px-6 py-1 cursor-pointer hover:text-white text-[#ccc] bg-[#282828]">
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center"></i>
                      <span class="text-[13px]">Lights</span>
                    </div>
                    <div class="flex items-center gap-2 px-6 py-1 cursor-pointer hover:text-white text-[#ccc] bg-[#282828] pb-3">
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center"></i>
                      <span class="text-[13px]">Advanced</span>
                    </div>
                  {/if}
                </div>
              {/if}
            </div>

            <!-- Light Paths -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleLightPaths} alt-id="Light Paths accordion">
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-chevron-{isLightPathsExpanded ? 'down' : 'right'} text-[11px] w-3 text-center text-[#ccc]"></i>
                  <span class="text-[#eee] text-[13px]">Light Paths</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-sliders text-[12px] opacity-70 text-[#ccc]"></i>
                  <div class="flex items-center gap-[2.5px] opacity-40">
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  </div>
                </div>
              </div>
              {#if isLightPathsExpanded}
                <div class="bg-[#282828] border-t border-[#1f1f1f]">
                  <!-- Max Bounces -->
                  <div class="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc]" on:click={toggleLightPathsMaxBounces} alt-id="Max Bounces sub-accordion">
                    <i class="fa-solid fa-chevron-{isLightPathsMaxBouncesExpanded ? 'down' : 'right'} text-[11px] w-3 text-center"></i>
                    <span class="text-[13px]">Max Bounces</span>
                  </div>
                  {#if isLightPathsMaxBouncesExpanded}
                    <div class="flex flex-col gap-1 pl-4 pr-3 py-1">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Total</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">12</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Diffuse</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">4</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Glossy</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">4</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Transmission</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">12</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Volume</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">0</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Transparent</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">8</span>
                        </div>
                      </div>
                    </div>
                  {/if}

                  <!-- Clamping -->
                  <div class="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc] bg-[#2d2d2d] border-t border-[#1f1f1f]" on:click={toggleLightPathsClamping} alt-id="Clamping sub-accordion">
                    <i class="fa-solid fa-chevron-{isLightPathsClampingExpanded ? 'down' : 'right'} text-[11px] w-3 text-center"></i>
                    <span class="text-[13px]">Clamping</span>
                  </div>
                  {#if isLightPathsClampingExpanded}
                    <div class="flex flex-col gap-1 pl-4 pr-3 py-1.5 bg-[#282828] border-t border-[#1f1f1f]">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Direct Light</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">0.00</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Indirect Light</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">10.00</span>
                        </div>
                      </div>
                    </div>
                  {/if}

                  <!-- Caustics -->
                  <div class="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc] bg-[#2d2d2d] border-t border-[#1f1f1f]" on:click={toggleLightPathsCaustics} alt-id="Caustics sub-accordion">
                    <i class="fa-solid fa-chevron-{isLightPathsCausticsExpanded ? 'down' : 'right'} text-[11px] w-3 text-center"></i>
                    <span class="text-[13px]">Caustics</span>
                  </div>
                  {#if isLightPathsCausticsExpanded}
                    <div class="flex flex-col gap-1 pl-4 pr-3 py-1.5 bg-[#282828] border-t border-[#1f1f1f]">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Filter Glossy</span>
                        <div class="flex-1 ml-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                          <span class="text-[13px] text-[#eee]">1.00</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-0.5">
                        <span class="w-[120px] text-right text-[13px] text-[#ccc]">Caustics</span>
                        <div class="flex flex-col gap-1.5 ml-2 mt-0.5">
                          <div class="flex items-center gap-2">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#eee]">Reflective</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#eee]">Refractive</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/if}
                  
                  <div class="flex items-center gap-2 px-6 py-1.5 bg-[#282828] pb-3 border-t border-[#1f1f1f]">
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                    <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                      <i class="fa-solid fa-check text-[10px] text-white"></i>
                    </div>
                    <span class="text-[13px] text-[#ccc]">Fast GI Approximation</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Volumes -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleVolumes} alt-id="Volumes accordion">
                <div class="flex items-center gap-2">
                  {#if isVolumesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Volumes</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isVolumesExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Volumes Biased checkbox; unchecked">
                      <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Biased</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Subdivision -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSubdivision} alt-id="Subdivision accordion">
                <div class="flex items-center gap-2">
                  {#if isSubdivisionExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Subdivision</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isSubdivisionExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Dicing Rate Render</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] rounded-b-[1px] border-b-0 h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Dicing Rate Render slider; value 1.00">
                      <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 -mt-[9px]">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Viewport</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Viewport slider; value 8.00">
                      <span class="text-[13px] text-[#eee] pointer-events-none">8.00</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Offscreen Scale</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Offscreen Scale slider; value 4.00">
                      <span class="text-[13px] text-[#eee] pointer-events-none">4.00</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Max Subdivisions</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Max Subdivisions slider; value 12">
                      <span class="text-[13px] text-[#eee] pointer-events-none">12</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Dicing Camera</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-[#222]" alt-id="Subdivision Dicing Camera input; empty">
                      <div class="w-3 h-3 border border-dashed border-[#ccc] flex items-center justify-center mr-2 pointer-events-none"><div class="w-1.5 h-1.5 bg-[#ccc]"></div></div>
                      <span class="text-[13px] text-[#666] flex-1 pointer-events-none">Object</span>
                      <i class="fa-solid fa-eye-dropper text-[12px] text-[#ccc] hover:text-white pointer-events-none"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Curves -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCurves} alt-id="Curves accordion">
                <div class="flex items-center gap-2">
                  {#if isCurvesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Curves</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isCurvesExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Shape</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Curves Shape dropdown; value Rounded Ribbons">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Rounded Ribbons</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Curve Subdivisions</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Curves Curve Subdivisions slider; value 2">
                      <span class="text-[13px] text-[#eee] pointer-events-none">2</span>
                    </div>
                  </div>

                  <!-- Viewport Display (Nested) -->
                  <div class="mt-1 -mx-3 -mb-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333] border-t border-[#1f1f1f]" on:click={toggleCurvesViewportDisplay} alt-id="Curves Viewport Display accordion">
                      {#if isCurvesViewportDisplayExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Viewport Display</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Simplify -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSimplify} alt-id="Simplify accordion">
                <div class="flex items-center gap-2">
                  {#if isSimplifyExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                  <span class="text-[#eee] text-[13px]">Simplify</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isSimplifyExpanded}
                <div class="flex flex-col bg-[#282828] border-t border-[#1f1f1f]">
                  <!-- Viewport Nested Accordion -->
                  <div class="flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyViewport} alt-id="Simplify Viewport accordion">
                      {#if isSimplifyViewportExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Viewport</span>
                    </div>
                    {#if isSimplifyViewportExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Max Subdivision</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Viewport Max Subdivision slider; value 6">
                            <span class="text-[13px] text-[#eee] pointer-events-none">6</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Child Particles</span>
                          <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Viewport Child Particles slider; value 1.000; active">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Texture Limit</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Simplify Viewport Texture Limit dropdown; value No Limit">
                            <span class="text-[13px] text-[#eee] pointer-events-none">No Limit</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume Resolution</span>
                          <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Viewport Volume Resolution slider; value 1.000; active">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Viewport Normals checkbox; unchecked">
                            <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Normals</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Render Nested Accordion -->
                  <div class="flex flex-col overflow-hidden border-t border-[#1f1f1f]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyRender} alt-id="Simplify Render accordion">
                      {#if isSimplifyRenderExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Render</span>
                    </div>
                    {#if isSimplifyRenderExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Max Subdivision</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Render Max Subdivision slider; value 0">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Child Particles</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Render Child Particles slider; value 0.000">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Texture Limit</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Simplify Render Texture Limit dropdown; value No Limit">
                            <span class="text-[13px] text-[#eee] pointer-events-none">No Limit</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Culling Nested Accordion -->
                  <div class="flex flex-col overflow-hidden border-t border-[#1f1f1f]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyCulling} alt-id="Simplify Culling accordion">
                      {#if isSimplifyCullingExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Culling</span>
                    </div>
                    {#if isSimplifyCullingExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Camera Culling</span>
                          <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0" alt-id="Simplify Culling Camera Culling checkbox; unchecked"></div>
                          <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] relative" alt-id="Simplify Culling Camera Culling slider; value 0.10">
                            <div class="absolute top-0 left-0 bottom-0 bg-[#5985cc] pointer-events-none" style="width: 2%;"></div>
                            <span class="text-[13px] text-[#eee] relative z-10 pointer-events-none">0.10</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Distance Culling</span>
                          <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0" alt-id="Simplify Culling Distance Culling checkbox; unchecked"></div>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Culling Distance Culling slider; value 50 m">
                            <span class="text-[13px] text-[#eee] pointer-events-none">50 m</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Grease Pencil Nested Accordion -->
                  <div class="flex flex-col overflow-hidden border-t border-[#1f1f1f]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyGreasePencil} alt-id="Simplify Grease Pencil accordion">
                      {#if isSimplifyGreasePencilExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Simplify Grease Pencil checkbox; unchecked"></div>
                      <span class="text-[#eee] text-[13px]">Grease Pencil</span>
                    </div>
                    {#if isSimplifyGreasePencilExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Playback Only checkbox; unchecked">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#888] pointer-events-none">Playback Only</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Fill checkbox; checked">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Fill</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Modifiers checkbox; checked">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Modifiers</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Shader Effects checkbox; checked">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Shader Effects</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Layers Tinting checkbox; checked">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Layers Tinting</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Antialiasing checkbox; checked">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Antialiasing</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Motion Blur -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMotionBlur} alt-id="Motion Blur accordion">
                <div class="flex items-center gap-2">
                  {#if isMotionBlurExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                  <span class="text-[#eee] text-[13px]">Motion Blur</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isMotionBlurExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Position</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Motion Blur Position dropdown; value Center on Frame">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Center on Frame</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Shutter</span>
                    <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] relative" alt-id="Motion Blur Shutter slider; value 0.50">
                      <div class="absolute top-0 left-0 bottom-0 bg-[#5985cc] pointer-events-none" style="width: 50%;"></div>
                      <span class="text-[13px] text-[#eee] relative z-10 pointer-events-none">0.50</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rolling Shutter</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] rounded-b-[1px] border-b-0 px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Motion Blur Rolling Shutter dropdown; value None">
                      <span class="text-[13px] text-[#eee] pointer-events-none">None</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 -mt-[9px]">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rolling Shutter Duration</span>
                    <div class="flex-1 bg-[#4772b3] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] relative" alt-id="Motion Blur Rolling Shutter Duration slider; value 0.10">
                      <div class="absolute top-0 left-0 bottom-0 bg-[#5985cc] pointer-events-none" style="width: 10%;"></div>
                      <span class="text-[13px] text-[#eee] relative z-10 pointer-events-none">0.10</span>
                    </div>
                  </div>

                  <!-- Shutter Curve (Nested) -->
                  <div class="mt-1 -mx-3 -mb-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333] border-t border-[#1f1f1f]" on:click={toggleMotionBlurShutterCurve} alt-id="Motion Blur Shutter Curve accordion">
                      {#if isMotionBlurShutterCurveExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Shutter Curve</span>
                    </div>
                    {#if isMotionBlurShutterCurveExpanded}
                      <div class="flex flex-col p-3 pt-2">
                        <div class="flex items-center justify-end gap-1 mb-1">
                          <div class="flex rounded-[3px] border border-[#1f1f1f] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] bg-[#3a3a3a]">
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Shutter Curve zoom in"><i class="fa-solid fa-magnifying-glass-plus text-[10px] text-[#ccc]"></i></div>
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Shutter Curve zoom out"><i class="fa-solid fa-magnifying-glass-minus text-[10px] text-[#ccc]"></i></div>
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444]" alt-id="Shutter Curve auto fit"><div class="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#ccc]"></div></div>
                          </div>
                          <div class="flex rounded-[3px] border border-[#1f1f1f] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] bg-[#3a3a3a] ml-1">
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444]" alt-id="Shutter Curve options dropdown"><i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i></div>
                          </div>
                        </div>
                        <div class="w-full h-[150px] bg-[#333] border border-[#444] rounded-[2px] relative mb-2" alt-id="Shutter Curve graph area">
                          <div class="absolute inset-0 grid grid-cols-4 grid-rows-2">
                            <div class="border-r border-b border-[#3d3d3d]"></div>
                            <div class="border-r border-b border-[#3d3d3d]"></div>
                            <div class="border-r border-b border-[#3d3d3d]"></div>
                            <div class="border-b border-[#3d3d3d]"></div>
                            <div class="border-r border-[#3d3d3d]"></div>
                            <div class="border-r border-[#3d3d3d]"></div>
                            <div class="border-r border-[#3d3d3d]"></div>
                            <div></div>
                          </div>
                          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-[#994444]"></div>
                          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-transparent border-t-[#111]"></div>
                        </div>
                        <div class="flex items-center gap-1">
                          <div class="flex rounded-[3px] border border-[#1f1f1f] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] bg-[#3a3a3a]">
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 1">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 Q7,12 7,2 Q7,12 13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 2">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 Q4,2 7,2 Q10,2 13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 3">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 L7,2 L13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 4">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 C4,12 4,2 7,2 C10,2 10,12 13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 5">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 L7,12 L7,2 L13,2"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444]" alt-id="Curve preset 6">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 L1,2 L13,2 L13,12"/></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Film -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFilm} alt-id="Film accordion">
                <div class="flex items-center gap-2">
                  {#if isFilmExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Film</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isFilmExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Exposure</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Film Exposure slider; value 1.00">
                      <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
                    </div>
                  </div>

                  <!-- Pixel Filter (Nested) -->
                  <div class="mt-1 -mx-3 -mb-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleFilmPixelFilter} alt-id="Film Pixel Filter accordion">
                      {#if isFilmPixelFilterExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Pixel Filter</span>
                    </div>
                    {#if isFilmPixelFilterExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Type</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Film Pixel Filter Type dropdown; value Blackman-Harris">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Blackman-Harris</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Width</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Film Pixel Filter Width slider; value 1.50 px">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.50 px</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- Transparent (Nested) -->
                  <div class="-mx-3 -mb-3 mt-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleFilmTransparent} alt-id="Film Transparent accordion">
                      {#if isFilmTransparentExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[#eee] text-[13px]">Transparent</span>
                    </div>
                    {#if isFilmTransparentExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Film Transparent Glass checkbox; unchecked">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#888] pointer-events-none">Transparent Glass</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Roughness Threshold</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] opacity-60" alt-id="Film Roughness Threshold slider; value 0.10; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0.10</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Performance -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePerformance} alt-id="Performance accordion">
                <div class="flex items-center gap-2">
                  {#if isPerformanceExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Performance</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-sliders text-[12px] opacity-70 text-[#ccc]"></i>
                  <div class="flex items-center gap-[2.5px] opacity-40">
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  </div>
                </div>
              </div>
              
              {#if isPerformanceExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 relative">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Device</span>
                    <div class="flex-1 bg-[#4772b3] border border-[#111] rounded-[3px] px-2 h-[22px] flex items-center justify-between cursor-pointer" on:click={togglePerformanceDeviceDropdown} alt-id="Performance Device dropdown; value CPU">
                      <span class="text-[13px] text-[#eee] pointer-events-none">CPU</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#eee] pointer-events-none"></i>
                    </div>
                    {#if isPerformanceDeviceDropdownOpen}
                      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                        isPerformanceDeviceDropdownOpen = false; 
                        updateOpenParam(); 
                      }}></div>
                      <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="Performance Device dropdown menu">
                        <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer" alt-id="Performance Device option CPU">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">C</u>PU</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer" alt-id="Performance Device option GPU">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">G</u>PU</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Bake -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleBake} alt-id="Bake accordion">
                <div class="flex items-center gap-2">
                  {#if isBakeExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Bake</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isBakeExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="w-full flex bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] items-center justify-center relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]">
                    <i class="fa-solid fa-camera text-[12px] text-[#eee] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                    <span class="text-[13px] text-[#eee] pointer-events-none">Bake</span>
                  </div>

                  <div class="flex items-center justify-center mt-1">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake from Multires checkbox; unchecked">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Bake from Multires</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 relative">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Bake Type</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" on:click={toggleBakeTypeDropdown} alt-id="Bake Type dropdown; value Combined">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Combined</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                    {#if isBakeTypeDropdownOpen}
                      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                        isBakeTypeDropdownOpen = false; 
                        updateOpenParam(); 
                      }}></div>
                      <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="Bake Type dropdown menu">
                        <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Combined">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">C</u>ombined</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Ambient Occlusion">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">A</u>mbient Occlusion</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Shadow">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">S</u>hadow</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Position">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">P</u>osition</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Normal">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">N</u>ormal</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option UV">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">U</u>V</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Roughness">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">R</u>oughness</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Emission">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">E</u>mission</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Environment">
                          <span class="text-[13px]">En<u class="underline-offset-2 decoration-1">v</u>ironment</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Diffuse">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">D</u>iffuse</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Glossy">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">G</u>lossy</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Transmission">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">T</u>ransmission</span>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <div class="flex items-center gap-2 mt-1 relative">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">View From</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" on:click={toggleBakeViewFromDropdown} alt-id="View From dropdown; value Above Surface">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Above Surface</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                    {#if isBakeViewFromDropdownOpen}
                      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                        isBakeViewFromDropdownOpen = false; 
                        updateOpenParam(); 
                      }}></div>
                      <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="View From dropdown menu">
                        <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer flex items-center gap-2" alt-id="View From option Above Surface">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">A</u>bove Surface</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="View From option Active Camera">
                          <span class="text-[13px]">Active <u class="underline-offset-2 decoration-1">C</u>amera</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- Influence -->
                  <div class="-mx-3 -mb-3 mt-1 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeInfluence} alt-id="Bake Influence accordion">
                      {#if isBakeInfluenceExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Influence</span>
                    </div>
                    {#if isBakeInfluenceExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-start gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Lighting</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Direct checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Indirect checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Indirect</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Contributions</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Diffuse checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Diffuse</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Glossy checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Glossy</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Transmission checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Transmission</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Emission checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Emission</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Selected to Active -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeSelectedToActive} alt-id="Bake Selected to Active accordion">
                      {#if isBakeSelectedToActiveExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[#eee] text-[13px]">Selected to Active</span>
                    </div>
                    {#if isBakeSelectedToActiveExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                      </div>
                    {/if}
                  </div>

                  <!-- Output -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeOutput} alt-id="Bake Output accordion">
                      {#if isBakeOutputExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Output</span>
                    </div>
                    {#if isBakeOutputExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2 mt-1 relative">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Target</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" on:click={toggleBakeTargetDropdown} alt-id="Bake Output Target dropdown; value Active Color Attribute">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Active Color Attribute</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                          {#if isBakeTargetDropdownOpen}
                            <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                              isBakeTargetDropdownOpen = false; 
                              updateOpenParam(); 
                            }}></div>
                            <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="Bake Output Target dropdown menu">
                              <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Output Target option Image Textures">
                                <span class="text-[13px]"><u class="underline-offset-2 decoration-1">I</u>mage Textures</span>
                              </div>
                              <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer flex items-center gap-2" alt-id="Bake Output Target option Active Color Attribute">
                                <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">A</u>ctive Color Attribute</span>
                              </div>
                            </div>
                          {/if}
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Output Clear Image checkbox; checked">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#eee] pointer-events-none">Clear Image</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Margin -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeMargin} alt-id="Bake Margin accordion">
                      {#if isBakeMarginExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Margin</span>
                    </div>
                    {#if isBakeMarginExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Type</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Bake Margin Type dropdown; value Adjacent Faces">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Adjacent Faces</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Size</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Bake Margin Size slider; value 16 px">
                            <span class="text-[13px] text-[#eee] pointer-events-none">16 px</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Grease Pencil -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleGreasePencil} alt-id="Grease Pencil accordion">
                <div class="flex items-center gap-2">
                  {#if isGreasePencilExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Grease Pencil</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isGreasePencilExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  
                  <!-- Viewport -->
                  <div class="-mx-3 -mb-3 mt-1 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleGreasePencilViewport} alt-id="Grease Pencil Viewport accordion">
                      {#if isGreasePencilViewportExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Viewport</span>
                    </div>
                    {#if isGreasePencilViewportExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">SMAA Threshold</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Grease Pencil Viewport SMAA Threshold slider; value 1.000">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Render -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleGreasePencilRender} alt-id="Grease Pencil Render accordion">
                      {#if isGreasePencilRenderExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Render</span>
                    </div>
                    {#if isGreasePencilRenderExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">SMAA Threshold</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Grease Pencil Render SMAA Threshold slider; value 1.000">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">SSAA Samples</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Grease Pencil Render SSAA Samples slider; value 1">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Motion Blur Steps</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] opacity-60" alt-id="Grease Pencil Render Motion Blur Steps slider; value 0; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Freestyle -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFreestyle} alt-id="Freestyle accordion">
                <div class="flex items-center gap-2">
                  {#if isFreestyleExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                  <span class="text-[#eee] text-[13px]">Freestyle</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isFreestyleExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Line Thickness Mode</span>
                    <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                      <div 
                        class="flex-1 flex items-center justify-center cursor-pointer {isFreestyleLineThicknessModeAbsolute ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}"
                        on:click={() => setFreestyleLineThicknessMode(true)}
                        alt-id="Freestyle Line Thickness Mode Absolute; {isFreestyleLineThicknessModeAbsolute ? 'selected' : 'unselected'}"
                      >
                        <span class="text-[13px] {isFreestyleLineThicknessModeAbsolute ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Absolute</span>
                      </div>
                      <div 
                        class="flex-1 flex items-center justify-center cursor-pointer {!isFreestyleLineThicknessModeAbsolute ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}"
                        on:click={() => setFreestyleLineThicknessMode(false)}
                        alt-id="Freestyle Line Thickness Mode Relative; {!isFreestyleLineThicknessModeAbsolute ? 'selected' : 'unselected'}"
                      >
                        <span class="text-[13px] {!isFreestyleLineThicknessModeAbsolute ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Relative</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Line Thickness</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Freestyle Line Thickness slider; value 1.000 px">
                      <span class="text-[13px] text-[#eee] pointer-events-none">1.000 px</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Color Management -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleColorManagement} alt-id="Color Management accordion">
                <div class="flex items-center gap-2">
                  {#if isColorManagementExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Color Management</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isColorManagementExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-1">
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Display</span>
                      <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Display dropdown; value sRGB">
                        <span class="text-[13px] text-[#eee] pointer-events-none">sRGB</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Exposure</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Color Management Exposure slider; value 0.000">
                        <div class="h-full bg-[#4772b3] w-1/2 absolute left-0 top-0"></div>
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">0.000</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">View</span>
                      <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management View dropdown; value Filmic">
                        <span class="text-[13px] text-[#eee] pointer-events-none">Filmic</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Gamma</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Color Management Gamma slider; value 1.000">
                        <div class="h-full bg-[#4772b3] w-[25%] absolute left-0 top-0"></div>
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">1.000</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Look</span>
                      <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Look dropdown; value None">
                        <span class="text-[13px] text-[#eee] pointer-events-none">None</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                      </div>
                    </div>
                  </div>

                  <!-- Curves -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementCurves} alt-id="Color Management Curves accordion">
                      {#if isColorManagementCurvesExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[#eee] text-[13px]">Curves</span>
                    </div>
                    {#if isColorManagementCurvesExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                      </div>
                    {/if}
                  </div>

                  <!-- White Balance -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementWhiteBalance} alt-id="Color Management White Balance accordion">
                      <div class="flex items-center gap-2">
                        {#if isColorManagementWhiteBalanceExpanded}
                          <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                        {/if}
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[#eee] text-[13px]">White Balance</span>
                      </div>
                      <div class="flex items-center gap-3 text-[#ccc] opacity-70">
                        <i class="fa-solid fa-sliders text-[12px] hover:text-white cursor-pointer" alt-id="Color Management White Balance sliders button"></i>
                        <i class="fa-solid fa-eye-dropper text-[12px] hover:text-white cursor-pointer" alt-id="Color Management White Balance eyedropper button"></i>
                      </div>
                    </div>
                    {#if isColorManagementWhiteBalanceExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Temperature</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] opacity-60" alt-id="Color Management White Balance Temperature slider; value 6500 K; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">6500 K</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Tint</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Color Management White Balance Tint slider; value 10.0">
                            <div class="h-full bg-[#4772b3] w-1/2 absolute left-0 top-0"></div>
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">10.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Working Space -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementWorkingSpace} alt-id="Color Management Working Space accordion">
                      {#if isColorManagementWorkingSpaceExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Working Space</span>
                    </div>
                    {#if isColorManagementWorkingSpaceExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">File</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Working Space File dropdown; value Linear Rec.709">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Linear Rec.709</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Sequencer</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Working Space Sequencer dropdown; value sRGB">
                            <span class="text-[13px] text-[#eee] pointer-events-none">sRGB</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Advanced -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden rounded-b-[5px]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementAdvanced} alt-id="Color Management Advanced accordion">
                      {#if isColorManagementAdvancedExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Advanced</span>
                    </div>
                    {#if isColorManagementAdvancedExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Display Emulation</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Advanced Display Emulation dropdown; value Automatic">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Automatic</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>
            
          </div>
        {:else if activeTab === 'output'}
          <div class="flex flex-col gap-2 relative">

            <!-- Format -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFormat} alt-id="Format accordion">
                <div class="flex items-center gap-2">
                  {#if isFormatExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Format</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <i class="fa-solid fa-sliders text-[12px] text-[#ccc] hover:text-white mr-2"></i>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isFormatExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Resolution X</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Resolution X slider; value 1024 px">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1024 px</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Resolution Y slider; value 1024 px">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1024 px</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">%</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Resolution % slider; value 200%">
                        <div class="h-full bg-[#4772b3] w-full absolute left-0 top-0"></div>
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">200%</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Aspect X</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Aspect X slider; value 1.000">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Aspect Y slider; value 1.000">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-1 mt-1">
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Render Region checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#888] pointer-events-none">Render Region</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                      <div class="flex items-center gap-2 cursor-default opacity-60" alt-id="Crop to Render Region checkbox; unchecked; disabled">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#888] pointer-events-none">Crop to Render Region</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Frame Rate</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Frame Rate dropdown; value 24 fps">
                      <span class="text-[13px] text-[#eee] pointer-events-none">24 fps</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Frame Range -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFrameRange} alt-id="Frame Range accordion">
                <div class="flex items-center gap-2">
                  {#if isFrameRangeExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Frame Range</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isFrameRangeExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Frame Start</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Frame Start slider; value 1">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">End</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Frame End slider; value 10000">
                        <span class="text-[13px] text-[#eee] pointer-events-none">10000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Step</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Frame Step slider; value 1">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1</span>
                      </div>
                    </div>
                  </div>

                  <!-- Time Stretching -->
                  <div class="-mx-3 -mb-3 mt-1 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleTimeStretching} alt-id="Time Stretching accordion">
                      {#if isTimeStretchingExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Time Stretching</span>
                    </div>
                    {#if isTimeStretchingExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Stereoscopy -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleStereoscopy} alt-id="Stereoscopy accordion">
                <div class="flex items-center gap-2">
                  {#if isStereoscopyExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                  <span class="text-[#eee] text-[13px]">Stereoscopy</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isStereoscopyExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                    <div 
                      class="flex-1 flex items-center justify-center cursor-pointer {isStereoscopyStereo3D ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}"
                      on:click={() => setStereoscopyStereo3D(true)}
                      alt-id="Stereo 3D / Multi-View toggle; Stereo 3D {isStereoscopyStereo3D ? 'selected' : 'unselected'}"
                    >
                      <span class="text-[13px] {isStereoscopyStereo3D ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Stereo 3D</span>
                    </div>
                    <div 
                      class="flex-1 flex items-center justify-center cursor-pointer {!isStereoscopyStereo3D ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}"
                      on:click={() => setStereoscopyStereo3D(false)}
                      alt-id="Stereo 3D / Multi-View toggle; Multi-View {!isStereoscopyStereo3D ? 'selected' : 'unselected'}"
                    >
                      <span class="text-[13px] {!isStereoscopyStereo3D ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Multi-View</span>
                    </div>
                  </div>

                  <div class="flex flex-col bg-[#1d1d1d] border border-[#111] rounded-[3px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden mt-1">
                    <div class="flex items-center justify-between px-2 py-1 bg-[#4772b3] cursor-pointer" alt-id="Stereoscopy Left Camera item; checked">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-camera text-[12px] text-white"></i>
                        <span class="text-[13px] text-white">left</span>
                      </div>
                      <div class="w-[14px] h-[14px] bg-[#3a5d91] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                    </div>
                    <div class="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-[#333]" alt-id="Stereoscopy Right Camera item; checked">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-camera text-[12px] text-[#ccc]"></i>
                        <span class="text-[13px] text-[#eee]">right</span>
                      </div>
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                    </div>
                    <div class="flex items-center justify-center py-[2px] bg-[#282828] border-t border-[#111] cursor-pointer hover:bg-[#333]">
                      <span class="text-[14px] font-bold text-[#ccc] leading-none mb-1">..</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">File Suffix</span>
                    <div class="flex-1 bg-[#1d1d1d] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-text" alt-id="File Suffix input; value _L">
                      <span class="text-[13px] text-[#eee] pointer-events-none">_L</span>
                      <span class="w-[1px] h-[14px] bg-white ml-[1px] animate-pulse"></span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Output -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleOutput} alt-id="Output accordion">
                <div class="flex items-center gap-2">
                  {#if isOutputExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Output</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isOutputExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2">
                    <div class="flex-1 bg-[#1d1d1d] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-text" alt-id="Output Path input; value //">
                      <span class="text-[13px] text-[#eee] pointer-events-none">//</span>
                    </div>
                    <i class="fa-solid fa-folder text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Browse Output Path button"></i>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Saving</span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Saving File Extensions checkbox; checked">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">File Extensions</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Cache Result checkbox; unchecked">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Cache Result</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Media Type</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Media Type dropdown; value Image">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Image</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">File Format</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="File Format dropdown; value PNG (.png)">
                      <span class="text-[13px] text-[#eee] pointer-events-none">PNG (.png)</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color</span>
                    <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                      <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorBW ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColor(true, false, false)} alt-id="Output Color BW toggle; {isOutputColorBW ? 'selected' : 'unselected'}">
                        <span class="text-[13px] {isOutputColorBW ? 'text-white' : 'text-[#ccc]'} pointer-events-none">BW</span>
                      </div>
                      <div class="flex-1 flex items-center justify-center cursor-pointer border-l border-r border-[#222] {isOutputColorRGB ? 'bg-[#4772b3] border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColor(false, true, false)} alt-id="Output Color RGB toggle; {isOutputColorRGB ? 'selected' : 'unselected'}">
                        <span class="text-[13px] {isOutputColorRGB ? 'text-white' : 'text-[#ccc]'} pointer-events-none">RGB</span>
                      </div>
                      <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorRGBA ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColor(false, false, true)} alt-id="Output Color RGBA toggle; {isOutputColorRGBA ? 'selected' : 'unselected'}">
                        <span class="text-[13px] {isOutputColorRGBA ? 'text-white' : 'text-[#ccc]'} pointer-events-none">RGBA</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color Depth</span>
                    <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                      <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorDepth8 ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorDepth(true)} alt-id="Output Color Depth 8 toggle; {isOutputColorDepth8 ? 'selected' : 'unselected'}">
                        <span class="text-[13px] {isOutputColorDepth8 ? 'text-white' : 'text-[#ccc]'} pointer-events-none">8</span>
                      </div>
                      <div class="flex-1 flex items-center justify-center cursor-pointer {!isOutputColorDepth8 ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorDepth(false)} alt-id="Output Color Depth 16 toggle; {!isOutputColorDepth8 ? 'selected' : 'unselected'}">
                        <span class="text-[13px] {!isOutputColorDepth8 ? 'text-white' : 'text-[#ccc]'} pointer-events-none">16</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Compression</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Compression slider; value 15%">
                      <div class="h-full bg-[#4772b3] w-[15%] absolute left-0 top-0"></div>
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">15%</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Image Sequence</span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Image Sequence Overwrite checkbox; checked">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">Overwrite</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Image Sequence Placeholders checkbox; unchecked">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Placeholders</span>
                    </div>
                  </div>

                  <!-- Color Management -->
                  <div class="-mx-3 -mb-3 mt-1 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleOutputColorManagement} alt-id="Output Color Management accordion">
                      {#if isOutputColorManagementExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Color Management</span>
                    </div>
                    {#if isOutputColorManagementExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                            <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorManagementFollowScene ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorManagementFollowScene(true)} alt-id="Output Color Management Follow Scene toggle; {isOutputColorManagementFollowScene ? 'selected' : 'unselected'}">
                              <span class="text-[13px] {isOutputColorManagementFollowScene ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Follow Scene</span>
                            </div>
                            <div class="flex-1 flex items-center justify-center cursor-pointer {!isOutputColorManagementFollowScene ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorManagementFollowScene(false)} alt-id="Output Color Management Override toggle; {!isOutputColorManagementFollowScene ? 'selected' : 'unselected'}">
                              <span class="text-[13px] {!isOutputColorManagementFollowScene ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Override</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Display</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default" alt-id="Output Color Management Display dropdown; value sRGB; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">sRGB</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">View</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default" alt-id="Output Color Management View dropdown; value Filmic; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Filmic</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Look</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default" alt-id="Output Color Management Look dropdown; value None; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">None</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Exposure</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Output Color Management Exposure slider; value 0.000; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Gamma</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Output Color Management Gamma slider; value 1.000; disabled">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-default" alt-id="Output Color Management Use Curves checkbox; unchecked; disabled">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Use Curves</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-default" alt-id="Output Color Management Use White Balance checkbox; unchecked; disabled">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Use White Balance</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Pixel Density -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleOutputPixelDensity} alt-id="Output Pixel Density accordion">
                      {#if isOutputPixelDensityExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <span class="text-[#eee] text-[13px]">Pixel Density</span>
                    </div>
                    {#if isOutputPixelDensityExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Pixels</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Output Pixel Density Pixels slider; value 72.00">
                            <span class="text-[13px] text-[#eee] pointer-events-none">72.00</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Unit</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Output Pixel Density Unit dropdown; value Pixels/Inch">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Pixels/Inch</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Metadata -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMetadata} alt-id="Metadata accordion">
                <div class="flex items-center gap-2">
                  {#if isMetadataExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Metadata</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isMetadataExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Metadata Input</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Metadata Input dropdown; value Scene">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Scene</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-start gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px] pointer-events-none">Include</span>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Date checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Date</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Time checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Time</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Render Time checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Render Time</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Frame checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Frame</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Frame Range checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Frame Range</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Memory checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Memory</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Hostname checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Hostname</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Camera checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Camera</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Lens checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Lens</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Scene checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Scene</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Marker checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Marker</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Filename checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Filename</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Strip Name checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Strip Name</span>
                      </div>
                    </div>
                  </div>

                  <!-- Note -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleMetadataNote} alt-id="Metadata Note accordion">
                      {#if isMetadataNoteExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[#eee] text-[13px]">Note</span>
                    </div>
                    {#if isMetadataNoteExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex-1 bg-[#1d1d1d] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-text" alt-id="Metadata Note input">
                          <span class="text-[13px] text-[#eee] pointer-events-none"></span>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Burn Into Image -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleBurnIntoImage} alt-id="Burn Into Image accordion">
                <div class="flex items-center gap-2">
                  {#if isBurnIntoImageExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                  <span class="text-[#eee] text-[13px]">Burn Into Image</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isBurnIntoImageExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Font Size</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Burn Into Image Font Size slider; value 12 px">
                      <span class="text-[13px] text-[#eee] pointer-events-none">12 px</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Text Color</span>
                    <div class="flex-1 h-[22px] rounded-[3px] bg-black border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer" alt-id="Burn Into Image Text Color picker"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Background</span>
                    <div class="flex-1 h-[22px] rounded-[3px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjOWU5ZTllIi8+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiM5ZTllOWUiLz4KPHJlY3QgeD0iNCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI2I4YjhiOCIvPgo8cmVjdCB5PSI0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjYjhiOGI4Ii8+Cjwvc3ZnPg==')] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer relative overflow-hidden" alt-id="Burn Into Image Background Color picker">
                      <div class="absolute left-0 top-0 h-full w-[60%] bg-black"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Burn Into Image Include Labels checkbox; checked">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">Include Labels</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Post Processing -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePostProcessing} alt-id="Post Processing accordion">
                <div class="flex items-center gap-2">
                  {#if isPostProcessingExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Post Processing</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isPostProcessingExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-start gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Pipeline</span>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Post Processing Pipeline Compositing checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Compositing</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Post Processing Pipeline Sequencer checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Sequencer</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Dither</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Post Processing Dither slider; value 1.00">
                      <div class="h-full bg-[#4772b3] w-full absolute left-0 top-0"></div>
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {:else if activeTab === 'view-layer'}
          <!-- View Layer Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-clapperboard text-[14px] text-[#ccc]"></i>
                <span class="hover:text-white cursor-pointer" alt-id="Scene breadcrumb">Cube Diorama</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#888]"></i>
                <span class="text-[#eee]" alt-id="View Layer breadcrumb">Studio</span>
              </div>
              <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin View Layer"></i>
            </div>
            
            <!-- Active Layer Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active View Layer dropdown">
                <i class="fa-solid fa-layer-group text-[13px] text-[#ccc]"></i>
                <span class="text-[13px] text-[#eee]">Studio</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Add View Layer">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- View Layer -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleViewLayer} alt-id="View Layer accordion">
                <div class="flex items-center gap-2">
                  {#if isViewLayerExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">View Layer</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isViewLayerExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Use for Rendering checkbox; unchecked">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Use for Rendering</span>
                    </div>
                    <div class="flex-1 max-w-[12px] flex justify-end">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777]"></div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <div class="flex items-center gap-2 cursor-pointer pr-[16px]" alt-id="Render Single Layer checkbox; checked">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">Render Single Layer</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Override -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleOverride} alt-id="Override accordion">
                <div class="flex items-center gap-2">
                  {#if isOverrideExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Override</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isOverrideExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Material Override</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="Material Override dropdown">
                      <i class="fa-solid fa-circle-quarter text-[14px] text-[#cc6666]"></i>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Material</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">World Override</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Override dropdown">
                      <i class="fa-solid fa-globe text-[14px] text-[#cc6666]"></i>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">World</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Samples</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Samples slider; value 0">
                      <div class="h-full bg-[#4772b3] w-[0%] absolute left-0 top-0"></div>
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Passes -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePasses} alt-id="Passes accordion">
                <div class="flex items-center gap-2">
                  {#if isPassesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Passes</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isPassesExpanded}
                <div class="flex flex-col p-[1px] bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  
                  <!-- Data Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesData} alt-id="Data sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isPassesDataExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Data</span>
                      </div>
                    </div>
                    {#if isPassesDataExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Include</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Combined checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Combined</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Depth checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Depth</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Mist checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Mist</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Position checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Position</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Normal checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Normal</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Vector checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Vector</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include UV checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">UV</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Grease Pencil checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Grease Pencil</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Denoising Data checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Denoising Data</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Indexes</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Indexes Object Index checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Object Index</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Indexes Material Index checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Material Index</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Debug</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Debug Sample Count checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Sample Count</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer opacity-50" alt-id="Passes Data Debug Render Time checkbox; unchecked disabled">
                              <div class="w-[14px] h-[14px] bg-[#333] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#888] pointer-events-none">Render Time</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Alpha Threshold</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Alpha Threshold slider; value 0.500">
                            <div class="h-full bg-[#4772b3] w-[50%] absolute left-0 top-0"></div>
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">0.500</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Light Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesLight} alt-id="Light sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isPassesLightExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Light</span>
                      </div>
                    </div>
                    {#if isPassesLightExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Diffuse</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Diffuse Direct checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Diffuse Indirect checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Diffuse Color checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Color</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Glossy</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Glossy Direct checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Glossy Indirect checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Glossy Color checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Color</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Transmission</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Transmission Direct checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Transmission Indirect checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Transmission Color checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Color</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Volume</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Volume Direct checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Volume Indirect checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Other</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Emission checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Emission</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Environment checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Environment</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Ambient Occlusion checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Ambient Occlusion</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Shadow Catcher checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Shadow Catcher</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    {/if}
                  </div>

                  <!-- Cryptomatte Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesCryptomatte} alt-id="Cryptomatte sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isPassesCryptomatteExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Cryptomatte</span>
                      </div>
                    </div>
                    {#if isPassesCryptomatteExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]"></span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Cryptomatte Object checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Object</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Cryptomatte Material checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Material</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Cryptomatte Asset checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Asset</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Levels</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Passes Cryptomatte Levels slider; value 6">
                            <div class="h-full bg-[#4772b3] w-[0%] absolute left-0 top-0"></div>
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Shader AOV Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesShaderAOV} alt-id="Shader AOV sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isPassesShaderAOVExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Shader AOV</span>
                      </div>
                    </div>
                    {#if isPassesShaderAOVExpanded}
                      <div class="flex flex-col p-3 bg-[#282828]">
                        <div class="flex items-stretch gap-1">
                          <div class="flex-1 h-[44px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden">
                            <!-- Empty list area -->
                          </div>
                          <div class="flex flex-col gap-1 w-6">
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Shader AOV">
                              <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                            </div>
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Shader AOV">
                              <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-1 mt-1 justify-between px-1">
                          <i class="fa-solid fa-play text-[10px] text-[#888]"></i>
                          <i class="fa-solid fa-ellipsis text-[12px] text-[#888] tracking-widest leading-[10px]"></i>
                          <div class="w-[10px]"></div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Light Groups Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesLightGroups} alt-id="Light Groups sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isPassesLightGroupsExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Light Groups</span>
                      </div>
                    </div>
                    {#if isPassesLightGroupsExpanded}
                      <div class="flex flex-col p-3 bg-[#282828]">
                        <div class="flex items-stretch gap-1">
                          <div class="flex-1 h-[44px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden">
                            <!-- Empty list area -->
                          </div>
                          <div class="flex flex-col gap-1 w-6">
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Light Group">
                              <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                            </div>
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Light Group">
                              <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                            </div>
                            <div class="h-[22px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Light Group menu">
                              <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-1 mt-1 justify-between px-1">
                          <i class="fa-solid fa-play text-[10px] text-[#888]"></i>
                          <i class="fa-solid fa-ellipsis text-[12px] text-[#888] tracking-widest leading-[10px]"></i>
                          <div class="w-[10px]"></div>
                        </div>
                      </div>
                    {/if}
                  </div>

                </div>
              {/if}
            </div>

            <!-- Filter -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFilter} alt-id="Filter accordion">
                <div class="flex items-center gap-2">
                  {#if isFilterExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Filter</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isFilterExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-start gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Include</span>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Environment checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Environment</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Surfaces checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Surfaces</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Curves checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Curves</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Volumes checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Volumes</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Grease Pencil checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Grease Pencil</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Use</span>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer opacity-50" alt-id="Filter Use Motion Blur checkbox; unchecked disabled">
                        <div class="w-[14px] h-[14px] bg-[#333] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#888] pointer-events-none">Motion Blur</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Use Denoising checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Denoising</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Custom Properties accordion">
                <div class="flex items-center gap-2">
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  <span class="text-[#eee] text-[13px]">Custom Properties</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                <div class="flex">
                  <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="New Custom Property button">
                    <span class="text-[13px] text-[#eee]">New</span>
                  </div>
                  <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                    <i class="fa-solid fa-plus text-[11px] text-white"></i>
                  </div>
                </div>
                
                <div class="flex items-center gap-2 mt-1 relative">
                  <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">prop</span>
                  <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Custom Property prop slider; value 1.000">
                    <div class="h-full bg-[#4772b3] w-[100%] absolute left-0 top-0"></div>
                    <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                      <span class="text-[13px] text-[#eee]">1.000</span>
                    </div>
                  </div>
                  <div class="absolute right-[4px] flex items-center justify-center w-[18px] h-[18px] cursor-pointer opacity-70 hover:opacity-100" alt-id="Edit Custom Property settings">
                    <i class="fa-solid fa-gear text-[11px] text-[#ccc]"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        {:else if activeTab === 'scene'}
          <!-- Scene Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-clapperboard text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Scene breadcrumb">Cube Diorama</span>
              </div>
            </div>
            
            <!-- Active Scene Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active Scene dropdown">
                <i class="fa-solid fa-clapperboard text-[13px] text-[#ccc]"></i>
                <span class="text-[13px] text-[#eee]">Cube Diorama</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Add Scene">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Delete Scene">
                <i class="fa-solid fa-xmark text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- Scene -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleScene} alt-id="Scene accordion">
                <div class="flex items-center gap-2">
                  {#if isSceneExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Scene</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isSceneExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Camera</span>
                    <div class="flex-1 flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                      <div class="flex items-center px-2 flex-1 cursor-pointer gap-2 hover:bg-[#222] h-full" alt-id="Camera dropdown">
                        <i class="fa-solid fa-video text-[12px] text-[#ccc]"></i>
                        <span class="text-[13px] text-[#eee] flex-1">Camera</span>
                      </div>
                      <div class="flex items-center justify-center w-6 h-full cursor-pointer hover:text-white text-[#888]" alt-id="Clear Camera">
                        <i class="fa-solid fa-xmark text-[11px]"></i>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Background Scene</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="Background Scene dropdown">
                      <i class="fa-solid fa-clapperboard text-[13px] text-[#ccc]"></i>
                      <span class="text-[13px] text-[#888] flex-1">Scene</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Active Clip</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="Active Clip dropdown">
                      <i class="fa-solid fa-film text-[13px] text-[#ccc]"></i>
                      <span class="text-[13px] text-[#888] flex-1">Movie Clip</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Units -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleUnits} alt-id="Units accordion">
                <div class="flex items-center gap-2">
                  {#if isUnitsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Units</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isUnitsExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Unit System</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Unit System dropdown">
                      <span class="text-[13px] text-[#eee]">Metric</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Unit Scale</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Unit Scale slider; value 1.000000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Separate Units checkbox; unchecked">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Separate Units</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rotation</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Rotation dropdown">
                      <span class="text-[13px] text-[#eee]">Degrees</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Length</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Length dropdown">
                      <span class="text-[13px] text-[#eee]">Meters</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Mass</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Mass dropdown">
                      <span class="text-[13px] text-[#eee]">Kilograms</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Time</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Time dropdown">
                      <span class="text-[13px] text-[#eee]">Seconds</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Temperature</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Temperature dropdown">
                      <span class="text-[13px] text-[#eee]">Kelvin</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Gravity -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleGravity} alt-id="Gravity accordion">
                <div class="flex items-center gap-2">
                  {#if isGravityExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="flex items-center gap-2" alt-id="Gravity checkbox; checked">
                    <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                      <i class="fa-solid fa-check text-[10px] text-white"></i>
                    </div>
                    <span class="text-[#eee] text-[13px]">Gravity</span>
                  </div>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isGravityExpanded}
                <div class="flex flex-col gap-[1px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Gravity X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Gravity X slider; value 0 m/s²">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m/s²</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Gravity Y slider; value 0 m/s²">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m/s²</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Gravity Z slider; value -9.8 m/s²">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">-9.8 m/s²</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Simulation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSimulation} alt-id="Simulation accordion">
                <div class="flex items-center gap-2">
                  {#if isSimulationExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Simulation</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isSimulationExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Simulation Range checkbox; unchecked">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Simulation Range</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">Start</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="Simulation Start slider; value 1">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">End</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="Simulation End slider; value 10000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">10000</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Keying Sets -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleKeyingSets} alt-id="Keying Sets accordion">
                <div class="flex items-center gap-2">
                  {#if isKeyingSetsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Keying Sets</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isKeyingSetsExpanded}
                <div class="flex flex-col p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-stretch gap-1">
                    <div class="flex-1 h-[44px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden">
                      <!-- Empty list area -->
                    </div>
                    <div class="flex flex-col gap-1 w-6">
                      <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Keying Set">
                        <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                      </div>
                      <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Keying Set">
                        <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 mt-1 justify-between px-1">
                    <i class="fa-solid fa-play text-[10px] text-[#888]"></i>
                    <i class="fa-solid fa-ellipsis text-[12px] text-[#888] tracking-widest leading-[10px]"></i>
                    <div class="w-[10px]"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Audio -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleAudio} alt-id="Audio accordion">
                <div class="flex items-center gap-2">
                  {#if isAudioExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Audio</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isAudioExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Audio Volume slider; value 1.000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Distance Model</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Audio Distance Model dropdown">
                      <span class="text-[13px] text-[#eee]">Inverse Clamped</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Doppler Speed</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Audio Doppler Speed slider; value 343.300">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">343.300</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Doppler Factor</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Audio Doppler Factor slider; value 1.000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="Update Animation Cache button">
                      <span class="text-[#eee] text-[13px]">Update Animation Cache</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Rigid Body World -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleRigidBodyWorld} alt-id="Rigid Body World accordion">
                <div class="flex items-center gap-2">
                  {#if isRigidBodyWorldExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Rigid Body World</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isRigidBodyWorldExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="Add Rigid Body World button">
                      <span class="text-[#eee] text-[13px]">Add Rigid Body World</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Animation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleAnimation} alt-id="Animation accordion">
                <div class="flex items-center gap-2">
                  {#if isAnimationExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Animation</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isAnimationExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <div class="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="Animation Scene Dropdown">
                      <span class="text-[13px] text-[#ccc]">Scene</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888] ml-1"></i>
                    </div>
                    <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a]" alt-id="Animation Add">
                      <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                    </div>
                    <div class="flex-1 h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="Animation New button">
                      <span class="text-[#eee] text-[13px]">New</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSceneCustomProperties} alt-id="Custom Properties accordion">
                <div class="flex items-center gap-2">
                  {#if isSceneCustomPropertiesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Custom Properties</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isSceneCustomPropertiesExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="New Custom Property button">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                    <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                  
                  <div class="flex flex-col gap-1 mt-2">
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="LOR_Settings">LOR_Settings</span>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Custom Property LOR_Settings Edit Value">
                        <span class="text-[13px] text-[#eee]">Edit Value</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_Settings Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_Settings Delete"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="LOR_sequence_settings">LOR_sequence_settings</span>
                      <div class="flex-1"></div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_sequence_settings Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_sequence_settings Delete"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="LOR_shot_settings">LOR_shot_settings</span>
                      <div class="flex-1"></div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_shot_settings Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_shot_settings Delete"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWBusyDrawing">NWBusyDrawing</span>
                      <div class="flex-1 h-[22px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWBusyDrawing Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWBusyDrawing Delete"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWLazySource">NWLazySource</span>
                      <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Custom Property NWLazySource value">
                        <span class="text-[13px] text-[#a0a0a0]">UV Map</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazySource Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazySource Delete"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWLazyTarget">NWLazyTarget</span>
                      <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Custom Property NWLazyTarget value">
                        <span class="text-[13px] text-[#a0a0a0]">Vector Math</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazyTarget Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazyTarget Delete"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWSourceSocket">NWSourceSocket</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Custom Property NWSourceSocket slider; value 0">
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">0</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWSourceSocket Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWSourceSocket Delete"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="character_update_settings">character_update_settings</span>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Custom Property character_update_settings Edit Value">
                        <span class="text-[13px] text-[#eee]">Edit Value</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property character_update_settings Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property character_update_settings Delete"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="kitsu">kitsu</span>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Custom Property kitsu Edit Value">
                        <span class="text-[13px] text-[#eee]">Edit Value</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property kitsu Settings"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property kitsu Delete"></i>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {:else if activeTab === 'world'}
          <!-- World Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-clapperboard text-[14px] text-[#ccc]"></i>
                <span class="hover:text-white cursor-pointer" alt-id="Scene breadcrumb">Cube Diorama</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#888]"></i>
                <span class="text-[#eee]" alt-id="World breadcrumb">World</span>
              </div>
              <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin World"></i>
            </div>
            
            <!-- Active World Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center justify-center w-8 h-full border-r border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="World Shield Toggle">
                <i class="fa-solid fa-shield-halved text-[12px] text-[#888]"></i>
              </div>
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active World dropdown">
                <i class="fa-solid fa-globe text-[13px] text-[#cc6666]"></i>
                <span class="text-[13px] text-[#eee]">World</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Add World">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Delete World">
                <i class="fa-solid fa-xmark text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- Preview -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldPreview} alt-id="World Preview accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldPreviewExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Preview</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldPreviewExpanded}
                <div class="flex flex-col p-[1px] bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="w-full h-[90px] bg-gradient-to-b from-[#333] to-black rounded-b-[4px] relative overflow-hidden" alt-id="World Preview Image">
                    <div class="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Surface -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSurface} alt-id="World Surface accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldSurfaceExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Surface</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldSurfaceExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Surface</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Type dropdown">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Mix Shader</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Factor</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Factor dropdown">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#a0a0a0]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Light Path | Is Camera Ray</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 relative">
                    <div class="absolute left-[8px] flex items-center gap-1.5 opacity-50 pointer-events-none">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#ccc]"></i>
                      <div class="w-1 h-1 rounded-full bg-[#ccc]"></div>
                    </div>
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Shader</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Shader 1 dropdown">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Background</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 relative">
                    <div class="absolute left-[8px] flex items-center gap-1.5 opacity-50 pointer-events-none">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#ccc]"></i>
                      <div class="w-1 h-1 rounded-full bg-[#ccc]"></div>
                    </div>
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Shader</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Shader 2 dropdown">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Background</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Volume -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldVolume} alt-id="World Volume accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldVolumeExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Volume</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldVolumeExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Volume Type dropdown">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">None</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Ray Visibility -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldRayVisibility} alt-id="World Ray Visibility accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldRayVisibilityExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Ray Visibility</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldRayVisibilityExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <div class="flex flex-col gap-1.5 pr-[24px]">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Camera checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Camera</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Diffuse checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Diffuse</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Glossy checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Glossy</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Transmission checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Transmission</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Volume Scatter checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Volume Scatter</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Settings -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettings} alt-id="World Settings accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldSettingsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Settings</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldSettingsExpanded}
                <div class="flex flex-col p-[1px] bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  
                  <!-- Surface Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettingsSurface} alt-id="World Settings Surface sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isWorldSettingsSurfaceExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Surface</span>
                      </div>
                    </div>
                    {#if isWorldSettingsSurfaceExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Sampling</span>
                          <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="World Settings Sampling dropdown">
                            <span class="text-[13px] text-[#eee]">Auto</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">Map Resolution</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="World Settings Map Resolution slider; value 1024">
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">1024</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">Max Bounces</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="World Settings Max Bounces slider; value 1024">
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">1024</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="World Settings Shadow Caustics checkbox; unchecked">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Shadow Caustics</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Volume Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettingsVolume} alt-id="World Settings Volume sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isWorldSettingsVolumeExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Volume</span>
                      </div>
                    </div>
                    {#if isWorldSettingsVolumeExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Sampling</span>
                          <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="World Volume Sampling dropdown">
                            <span class="text-[13px] text-[#eee]">Equiangular</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Interpolation</span>
                          <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="World Volume Interpolation dropdown">
                            <span class="text-[13px] text-[#eee]">Linear</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Light Group Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettingsLightGroup} alt-id="World Settings Light Group sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isWorldSettingsLightGroupExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">Light Group</span>
                      </div>
                    </div>
                    {#if isWorldSettingsLightGroupExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Light Group</span>
                          <div class="flex-1 flex items-center gap-1">
                            <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
                            <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a] opacity-50" alt-id="World Add Light Group">
                              <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                </div>
              {/if}
            </div>

            <!-- Viewport Display -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldViewportDisplay} alt-id="World Viewport Display accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldViewportDisplayExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Viewport Display</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldViewportDisplayExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color</span>
                    <div class="flex-1 h-[22px] rounded-[3px] bg-[#2a2a2a] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer" alt-id="World Viewport Display Color picker"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Animation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldAnimation} alt-id="World Animation accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldAnimationExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Animation</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldAnimationExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex flex-col gap-1">
                    <span class="text-[12px] text-[#ccc]">World</span>
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="World Animation Scene Dropdown">
                        <i class="fa-solid fa-clapperboard text-[13px] text-[#ccc]"></i>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] ml-1"></i>
                      </div>
                      <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a]" alt-id="World Animation Scene Add">
                        <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                      </div>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="World Animation Scene New button">
                        <span class="text-[#eee] text-[13px]">New</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-1 mt-1">
                    <span class="text-[12px] text-[#ccc]">Shader Node Tree</span>
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="World Animation Shader Node Tree Dropdown">
                        <i class="fa-solid fa-circle-nodes text-[13px] text-[#ccc]"></i>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] ml-1"></i>
                      </div>
                      <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a]" alt-id="World Animation Shader Node Tree Add">
                        <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                      </div>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="World Animation Shader Node Tree New button">
                        <span class="text-[#eee] text-[13px]">New</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldCustomProperties} alt-id="World Custom Properties accordion">
                <div class="flex items-center gap-2">
                  {#if isWorldCustomPropertiesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Custom Properties</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isWorldCustomPropertiesExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="World New Custom Property button">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                    <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {:else if activeTab === 'collection'}
          <!-- Collection Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-box-archive text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Collection breadcrumb">Studio Assets</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[10px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Collection View Layer settings"></i>
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Collection"></i>
              </div>
            </div>
            
            <!-- Visibility -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionVisibility} alt-id="Collection Visibility accordion">
                <div class="flex items-center gap-2">
                  {#if isCollectionVisibilityExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Visibility</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isCollectionVisibilityExpanded}
                <div class="flex flex-col p-[1px] bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  
                  <div class="flex flex-col gap-[3px] p-3 pt-2">
                    <div class="flex items-center gap-2 mt-1 justify-center">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection Visibility Selectable checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Selectable</span>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 mt-1 justify-center pr-3">
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Show In</span>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection Visibility Show In Renders checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Renders</span>
                      </div>
                    </div>
                  </div>

                  <!-- View Layer Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mt-1">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionVisibilityViewLayer} alt-id="Collection View Layer sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isCollectionVisibilityViewLayerExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[12px]">View Layer</span>
                      </div>
                    </div>
                    {#if isCollectionVisibilityViewLayerExpanded}
                      <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828]">
                        <div class="flex items-center gap-2 mt-1 justify-center">
                          <div class="flex flex-col gap-1.5 pr-[24px]">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection View Layer Include checkbox; checked">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Include</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection View Layer Holdout checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Holdout</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection View Layer Indirect Only checkbox; unchecked">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect Only</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>

            <!-- Instancing -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionInstancing} alt-id="Collection Instancing accordion">
                <div class="flex items-center gap-2">
                  {#if isCollectionInstancingExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Instancing</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isCollectionInstancingExpanded}
                <div class="flex flex-col gap-[1px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Instance Offset X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Instance Offset X slider; value 0 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="w-[14px] flex items-center justify-center opacity-50 pointer-events-none">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#ccc]"></i>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Instance Offset Y slider; value 0 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="w-[14px]"></div>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Instance Offset Z slider; value 0 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="w-[14px]"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Exporters -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionExporters} alt-id="Collection Exporters accordion">
                <div class="flex items-center gap-2">
                  {#if isCollectionExportersExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Exporters</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isCollectionExportersExpanded}
                <div class="flex flex-col p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-stretch gap-1">
                    <div class="flex-1 h-[66px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden">
                      <!-- Empty list area -->
                    </div>
                    <div class="flex flex-col justify-between w-6 h-[66px]">
                      <div class="flex flex-col gap-[2px]">
                        <div class="h-[20px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Exporter">
                          <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                        </div>
                        <div class="h-[20px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Exporter">
                          <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                        </div>
                      </div>
                      <div class="flex flex-col gap-[2px]">
                        <div class="h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Move Exporter Up">
                          <i class="fa-solid fa-caret-up text-[12px] text-[#888]"></i>
                        </div>
                        <div class="h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Move Exporter Down">
                          <i class="fa-solid fa-caret-down text-[12px] text-[#888]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 mt-1 justify-between px-1 mb-2">
                    <i class="fa-solid fa-play text-[10px] text-[#888]"></i>
                    <i class="fa-solid fa-ellipsis text-[12px] text-[#888] tracking-widest leading-[10px]"></i>
                    <div class="w-[10px]"></div>
                  </div>
                  <div class="w-full h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50 cursor-not-allowed gap-2" alt-id="Export All button (disabled)">
                    <i class="fa-solid fa-arrow-up-from-bracket text-[11px] text-[#888] absolute left-5"></i>
                    <span class="text-[#888] text-[13px]">Export All</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Line Art -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionLineArt} alt-id="Collection Line Art accordion">
                <div class="flex items-center gap-2">
                  {#if isCollectionLineArtExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Line Art</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isCollectionLineArtExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Usage</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Collection Line Art Usage dropdown">
                      <span class="text-[13px] text-[#eee]">Include</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2 mt-1">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection Mask checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Collection Mask</span>
                      </div>
                    </div>

                    <div class="flex gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-1 pointer-events-none opacity-50">Masks</span>
                      <div class="flex-1 flex gap-[1px]">
                        <div class="flex-1 h-[22px] bg-[#2a2a2a] border border-[#222] rounded-l-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                        <div class="flex-1 h-[22px] bg-[#2a2a2a] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                        <div class="flex-1 h-[22px] bg-[#2a2a2a] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                        <div class="flex-1 h-[22px] bg-[#2a2a2a] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                        <div class="flex-1 h-[22px] bg-[#2a2a2a] border border-[#222] rounded-r-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Intersection Priority</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Intersection Priority slider; value 0">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionCustomProperties} alt-id="Collection Custom Properties accordion">
                <div class="flex items-center gap-2">
                  {#if isCollectionCustomPropertiesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Custom Properties</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isCollectionCustomPropertiesExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Collection New Custom Property button">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                    <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {:else if activeTab === 'object'}
          <!-- Object Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-square-dashed text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Object breadcrumb">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[10px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Object settings"></i>
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object"></i>
              </div>
            </div>
            
            <!-- Active Object -->
            <div class="flex items-center gap-2 px-2 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="Active Object dropdown">
              <i class="fa-solid fa-square-dashed text-[13px] text-[#e68a00]"></i>
              <span class="text-[13px] text-[#eee] flex-1">Floor</span>
            </div>

            <!-- Transform -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectTransform} alt-id="Object Transform accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectTransformExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Transform</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isObjectTransformExpanded}
                <div class="flex flex-col gap-[1px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Location X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Location X slider; value 0 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Location X"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Location Y slider; value 0 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Location Y"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Location Z slider; value -1 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">-1 m</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Location Z"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rotation X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Rotation X slider; value 0°">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0&deg;</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Rotation X"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Rotation Y slider; value 0°">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0&deg;</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Rotation Y"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Rotation Z slider; value 0°">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0&deg;</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Rotation Z"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Mode</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Rotation Mode dropdown">
                      <span class="text-[13px] text-[#eee]">XYZ Euler</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                    <div class="w-[10px] opacity-0 pointer-events-none"><i class="fa-solid fa-unlock text-[10px]"></i></div>
                    <div class="w-1.5 h-1.5 opacity-0 mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Scale X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Scale X slider; value 1.000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Scale X"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Scale Y slider; value 1.000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Scale Y"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Scale Z slider; value 1.000">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Scale Z"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Delta Transform -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectDeltaTransform} alt-id="Object Delta Transform accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectDeltaTransformExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Delta Transform</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Relations -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectRelations} alt-id="Object Relations accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectRelationsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Relations</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Collections -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectCollections} alt-id="Object Collections accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectCollectionsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Collections</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Instancing -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectInstancing} alt-id="Object Instancing accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectInstancingExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Instancing</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Motion Paths -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectMotionPaths} alt-id="Object Motion Paths accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectMotionPathsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Motion Paths</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Shading -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectShading} alt-id="Object Shading accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectShadingExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Shading</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Motion Blur -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectMotionBlur} alt-id="Object Motion Blur accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectMotionBlurExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="flex items-center gap-2" alt-id="Object Motion Blur checkbox; checked">
                    <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                      <i class="fa-solid fa-check text-[10px] text-white"></i>
                    </div>
                    <span class="text-[#eee] text-[13px]">Motion Blur</span>
                  </div>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Visibility -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectVisibility} alt-id="Object Visibility accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectVisibilityExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Visibility</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Viewport Display -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectViewportDisplay} alt-id="Object Viewport Display accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectViewportDisplayExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Viewport Display</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isObjectViewportDisplayExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-start gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Show</span>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Name checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Name</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Axes checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Axes</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Wireframe checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Wireframe</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show All Edges checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">All Edges</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Texture Space checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Texture Space</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Shadow checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Shadow</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show In Front checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">In Front</span>
                      </div>
                    </div>
                    <div class="flex flex-col gap-[20px] flex-1 items-end mt-[2px] opacity-70">
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color</span>
                    <div class="flex-1 h-[22px] rounded-[3px] bg-white border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer" alt-id="Object Viewport Display Color picker"></div>
                    <div class="w-1.5 flex justify-center opacity-70">
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Display As</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Object Viewport Display As dropdown">
                      <span class="text-[13px] text-[#eee]">Textured</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                    <div class="w-1.5 h-1.5 mx-1 opacity-0 pointer-events-none"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Bounds</span>
                    <div class="flex-1 flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Bounds checkbox; unchecked disabled">
                      <div class="w-[14px] h-[14px] bg-[#333] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Box</span>
                    </div>
                    <div class="w-1.5 h-1.5 mx-1 opacity-0 pointer-events-none"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Line Art -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectLineArt} alt-id="Object Line Art accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectLineArtExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Line Art</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Animation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectAnimation} alt-id="Object Animation accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectAnimationExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Animation</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectCustomProperties} alt-id="Object Custom Properties accordion">
                <div class="flex items-center gap-2">
                  {#if isObjectCustomPropertiesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px]">Custom Properties</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isObjectCustomPropertiesExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Object New Custom Property button">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                    <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {:else if activeTab === 'modifiers'}
          <!-- Modifiers Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-square-dashed text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Object breadcrumb">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object"></i>
              </div>
            </div>
            
            <!-- Add Modifier Button -->
            <div class="w-full h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] mb-2 gap-2 relative" alt-id="Add Modifier button">
              <div class="absolute left-2 top-0 bottom-0 flex items-center">
                <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
              </div>
              <span class="text-[#eee] text-[13px]">Add Modifier</span>
            </div>
            
            <!-- Subdivision Modifier -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-2 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleModifierSubdivision} alt-id="Modifier Subdivision accordion">
                <div class="flex items-center gap-2">
                  {#if isModifierSubdivisionExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="w-[14px] h-[14px] flex items-center justify-center shrink-0 border border-[#888] rounded-[2px] opacity-70">
                    <i class="fa-regular fa-square text-[10px]"></i>
                  </div>
                  <span class="text-[#eee] text-[13px]">Subdivision</span>
                </div>
                
                <div class="flex items-center gap-2" on:click|stopPropagation>
                  <i class="fa-solid fa-camera text-[12px] text-[#4772b3]" alt-id="Modifier Render Visibility"></i>
                  <i class="fa-solid fa-desktop text-[12px] text-[#4772b3]" alt-id="Modifier Viewport Visibility"></i>
                  <div class="flex items-center justify-center w-[13px] h-[13px] bg-[#4772b3] rounded-[2px]" alt-id="Modifier Edit Mode Visibility">
                    <i class="fa-solid fa-square text-[9px] text-white"></i>
                  </div>
                  <div class="flex items-center justify-center w-[13px] h-[13px] bg-[#4772b3] rounded-[2px]" alt-id="Modifier On Cage Visibility">
                    <i class="fa-solid fa-play text-[9px] text-white transform -rotate-90"></i>
                  </div>
                  <i class="fa-solid fa-chevron-down text-[10px] text-[#888] hover:text-[#ccc]"></i>
                  <i class="fa-solid fa-xmark text-[12px] text-[#888] hover:text-[#ccc]"></i>
                  <div class="flex items-center gap-[2px] opacity-40 ml-1">
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                    <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  </div>
                </div>
              </div>
              
              {#if isModifierSubdivisionExpanded}
                <div class="flex flex-col p-[1px] bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex mt-1 mx-2">
                    <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-l-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a]" alt-id="Catmull-Clark Mode">
                      <span class="text-[13px] text-[#ccc]">Catmull-Clark</span>
                    </div>
                    <div class="flex-1 h-[22px] bg-[#4772b3] border border-[#222] border-l-0 rounded-r-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" alt-id="Simple Mode">
                      <span class="text-[13px] text-white">Simple</span>
                    </div>
                  </div>
                  
                  <div class="flex flex-col gap-1.5 p-3 py-2">
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Levels Viewport</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Levels Viewport slider; value 4">
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">4</span>
                        </div>
                      </div>
                      <div class="w-1.5 flex justify-center opacity-70">
                        <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Render</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Render slider; value 5">
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">5</span>
                        </div>
                      </div>
                      <div class="w-1.5 flex justify-center opacity-70">
                        <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 mt-1 justify-center pr-3">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Optimal Display checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Optimal Display</span>
                      </div>
                      <div class="w-1.5 flex justify-center opacity-70">
                        <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Adaptive Subdivision Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mt-1">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleModifierSubdivisionAdaptive} alt-id="Modifier Adaptive Subdivision sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isModifierSubdivisionAdaptiveExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <div class="flex items-center gap-2" alt-id="Modifier Adaptive Subdivision checkbox; unchecked">
                          <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                          <span class="text-[#ccc] text-[13px]">Adaptive Subdivision</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Advanced Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-1">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleModifierSubdivisionAdvanced} alt-id="Modifier Advanced sub-accordion">
                      <div class="flex items-center gap-2">
                        {#if isModifierSubdivisionAdvancedExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <span class="text-[#ccc] text-[13px]">Advanced</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              {/if}
            </div>
          </div>
        {:else if activeTab === 'physics'}
          <!-- Physics Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-3">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-atom text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Object breadcrumb">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object"></i>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-x-2 gap-y-1">
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Force Field">
                <i class="fa-solid fa-wind text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Force Field</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Soft Body">
                <i class="fa-solid fa-leaf text-[12px] text-[#ccc] opacity-80 absolute left-2 transform -scale-x-100"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Soft Body</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Collision">
                <i class="fa-solid fa-cubes text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Collision</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Fluid">
                <i class="fa-solid fa-droplet text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Fluid</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Cloth">
                <i class="fa-solid fa-shirt text-[11px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Cloth</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Rigid Body">
                <i class="fa-solid fa-box text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Rigid Body</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Dynamic Paint">
                <i class="fa-solid fa-paint-roller text-[11px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Dynamic Paint</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Rigid Body Constraint">
                <i class="fa-solid fa-hourglass-empty text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Rigid Body Constraint</span>
              </div>
            </div>
          </div>
        {:else if activeTab === 'constraints'}
          <!-- Constraints Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-link text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Object breadcrumb">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object"></i>
              </div>
            </div>
            
            <!-- Add Object Constraint Header & Dropdown -->
            <div class="relative w-full">
              <div class="flex items-center justify-between px-3 h-[24px] cursor-pointer rounded-[3px] {isAddObjectConstraintDropdownOpen ? 'bg-[#4772b3] text-white shadow-none' : 'bg-[#1a1a1a] border border-[#151515] text-[#eee] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]'}" on:click={toggleAddObjectConstraintDropdown} alt-id="Add Object Constraint dropdown">
                <span class="text-[13px] font-medium {isAddObjectConstraintDropdownOpen ? 'text-white' : 'text-[#eee]'}">Add Object Constraint</span>
                <i class="fa-solid fa-chevron-down {isAddObjectConstraintDropdownOpen ? 'text-white' : 'text-[#888]'} text-[10px]"></i>
              </div>
              
              {#if isAddObjectConstraintDropdownOpen}
                <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                  isAddObjectConstraintDropdownOpen = false; 
                  updateOpenParam(); 
                }}></div>
                <div class="absolute left-0 top-[24px] w-full bg-[#181818] rounded-b-[4px] shadow-[0_4px_6px_rgba(0,0,0,0.5)] z-50 flex border border-[#111] border-t-0" alt-id="Add Object Constraint dropdown menu">
                  <!-- Motion Tracking Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Motion Tracking</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Camera Solver constraint">
                        <i class="fa-solid fa-camera-retro text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Camera Solver</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Follow Track constraint">
                        <i class="fa-solid fa-route text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Follow Track</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Object Solver constraint">
                        <i class="fa-solid fa-box-open text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Object Solver</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Transform Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Transform</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Location constraint">
                        <i class="fa-solid fa-arrows-up-down-left-right text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Location</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Rotation constraint">
                        <i class="fa-solid fa-rotate text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Rotation</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Scale constraint">
                        <i class="fa-solid fa-maximize text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Scale</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Transforms constraint">
                        <i class="fa-solid fa-compress text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Transforms</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px] mt-1.5" alt-id="Limit Distance constraint">
                        <i class="fa-solid fa-arrows-left-right-to-line text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Distance</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Limit Location constraint">
                        <i class="fa-solid fa-compress-arrows-alt text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Location</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Limit Rotation constraint">
                        <i class="fa-solid fa-arrow-rotate-left text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Rotation</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Limit Scale constraint">
                        <i class="fa-solid fa-down-left-and-up-right-to-center text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Scale</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Maintain Volume constraint">
                        <i class="fa-solid fa-minimize text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Maintain Volume</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px] mt-1.5" alt-id="Transformation constraint">
                        <i class="fa-solid fa-arrows-spin text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Transformation</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Transform Cache constraint">
                        <i class="fa-solid fa-database text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Transform Cache</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Tracking Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Tracking</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Clamp To constraint">
                        <i class="fa-solid fa-magnet text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Clamp To</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Damped Track constraint">
                        <i class="fa-solid fa-location-crosshairs text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Damped Track</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Locked Track constraint">
                        <i class="fa-solid fa-lock text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Locked Track</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Stretch To constraint">
                        <i class="fa-solid fa-bullseye text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Stretch To</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Track To constraint">
                        <i class="fa-solid fa-arrow-right-to-bracket text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Track To</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Relationship Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Relationship</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Action constraint">
                        <i class="fa-solid fa-play text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Action</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Armature constraint">
                        <i class="fa-solid fa-bone text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Armature</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Child Of constraint">
                        <i class="fa-solid fa-link text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Child Of</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Floor constraint">
                        <i class="fa-solid fa-arrows-to-circle text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Floor</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Follow Path constraint">
                        <i class="fa-solid fa-bezier-curve text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Follow Path</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Geometry Attribute constraint">
                        <i class="fa-solid fa-shapes text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Geometry Attribute</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Pivot constraint">
                        <i class="fa-solid fa-compress-arrows-alt text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Pivot</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Shrinkwrap constraint">
                        <i class="fa-solid fa-compress text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Shrinkwrap</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        {:else if activeTab === 'data'}
          <!-- Data Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-draw-polygon text-[14px] text-[#ccc]"></i>
                <span class="text-[#eee]" alt-id="Object breadcrumb">Mesh</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[10px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Data settings"></i>
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Data"></i>
              </div>
            </div>
            
            <!-- Active Data Block -->
            <div class="flex items-center gap-2 px-2 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="Active Data Block dropdown">
              <i class="fa-solid fa-draw-polygon text-[13px] text-[#33cc66]"></i>
              <span class="text-[13px] text-[#eee] flex-1">Mesh</span>
            </div>

            <!-- Vertex Groups -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataVertexGroups} alt-id="Data Vertex Groups accordion">
                <div class="flex items-center gap-2">
                  {#if isDataVertexGroupsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Vertex Groups</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataVertexGroupsExpanded}
                <div class="flex gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] min-h-[60px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-end p-2 relative">
                    <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Vertex Group">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Vertex Group">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Vertex Group Menu">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Shape Keys -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataShapeKeys} alt-id="Data Shape Keys accordion">
                <div class="flex items-center gap-2">
                  {#if isDataShapeKeysExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Shape Keys</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataShapeKeysExpanded}
                <div class="flex flex-col gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex gap-2">
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] min-h-[60px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-end p-2 relative">
                      <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                    </div>
                    <div class="flex flex-col gap-[2px]">
                      <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Shape Key">
                        <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                      </div>
                      <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Shape Key">
                        <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                      </div>
                      <div class="h-[2px]"></div>
                      <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Shape Key Menu">
                        <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                      </div>
                    </div>
                  </div>
                  <div class="h-[24px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer" alt-id="Add Rest Position button">
                    <span class="text-[#eee] text-[13px]">Add Rest Position</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- UV Maps -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataUVMaps} alt-id="Data UV Maps accordion">
                <div class="flex items-center gap-2">
                  {#if isDataUVMapsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">UV Maps</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataUVMapsExpanded}
                <div class="flex gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] min-h-[60px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden">
                    <div class="flex items-center justify-between px-2 py-1 bg-[#4772b3] cursor-pointer" alt-id="UVMap selected item">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-draw-polygon text-[12px] text-white"></i>
                        <span class="text-[13px] text-white">UVMap</span>
                      </div>
                      <i class="fa-solid fa-camera text-[12px] text-white opacity-80"></i>
                    </div>
                    <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add UV Map">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove UV Map">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="UV Map Menu">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Color Attributes -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataColorAttributes} alt-id="Data Color Attributes accordion">
                <div class="flex items-center gap-2">
                  {#if isDataColorAttributesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Color Attributes</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataColorAttributesExpanded}
                <div class="flex gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] min-h-[60px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-end p-2 relative">
                    <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Color Attribute">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Color Attribute">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Color Attribute Menu">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Attributes -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataAttributes} alt-id="Data Attributes accordion">
                <div class="flex items-center gap-2">
                  {#if isDataAttributesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Attributes</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataAttributesExpanded}
                <div class="flex gap-2 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] min-h-[60px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden py-1">
                    <div class="flex items-center justify-between px-3 py-[2px] cursor-pointer hover:bg-[#222]" alt-id="position Attribute item">
                      <span class="text-[13px] text-[#ccc]">position</span>
                      <span class="text-[11px] text-[#888]">Vertex &middot; Vector</span>
                    </div>
                    <div class="flex items-center justify-between px-3 py-[2px] cursor-pointer hover:bg-[#222]" alt-id="UVMap Attribute item">
                      <span class="text-[13px] text-[#ccc]">UVMap</span>
                      <span class="text-[11px] text-[#888]">Face Corner &middot; 2D Vector</span>
                    </div>
                    <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Attribute">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Attribute">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Attribute Menu">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Texture Space -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataTextureSpace} alt-id="Data Texture Space accordion">
                <div class="flex items-center gap-2">
                  {#if isDataTextureSpaceExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Texture Space</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataTextureSpaceExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Texture Mesh</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Texture Mesh input">
                      <i class="fa-solid fa-draw-polygon text-[12px] text-[#33cc66] mr-2"></i>
                      <span class="text-[13px] text-[#eee] flex-1 opacity-50">Mesh</span>
                    </div>
                    <div class="flex items-center justify-center w-5 cursor-pointer opacity-70 hover:opacity-100">
                      <i class="fa-solid fa-pen text-[12px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 justify-center pr-[26px]">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Auto Texture Space checkbox; checked">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none font-medium">Auto Texture Space</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Location X</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Location X slider; value 0 m disabled">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">0 m</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Location Y slider; value 0 m disabled">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">0 m</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Location Z slider; value 0 m disabled">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">0 m</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Size X</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Size X slider; value 1.000 disabled">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">1.000</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Size Y slider; value 1.000 disabled">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">1.000</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Size Z slider; value 1.000 disabled">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">1.000</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Remesh -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataRemesh} alt-id="Data Remesh accordion">
                <div class="flex items-center gap-2">
                  {#if isDataRemeshExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Remesh</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataRemeshExpanded}
                <div class="flex flex-col gap-1.5 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Mode</span>
                    <div class="flex-1 flex h-[22px]">
                      <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-l-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" alt-id="Remesh Mode Voxel">
                        <span class="text-[13px] text-white">Voxel</span>
                      </div>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-l-0 rounded-r-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a]" alt-id="Remesh Mode Quad">
                        <span class="text-[13px] text-[#ccc]">Quad</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Voxel Size</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Voxel Size slider; value 0.1 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0.1 m</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Adaptivity</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Adaptivity slider; value 0 m">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Fix Poles checkbox; checked">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">Fix Poles</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Preserve</span>
                    <div class="flex flex-col flex-1 gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Preserve Volume checkbox; checked">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Volume</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Preserve Attributes checkbox; unchecked">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Attributes</span>
                      </div>
                    </div>
                  </div>

                  <div class="w-full h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a] mt-2 cursor-pointer" alt-id="Voxel Remesh button">
                    <span class="text-[#eee] text-[13px]">Voxel Remesh</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Geometry Data -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataGeometryData} alt-id="Data Geometry Data accordion">
                <div class="flex items-center gap-2">
                  {#if isDataGeometryDataExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Geometry Data</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataGeometryDataExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex relative">
                    <div class="flex-1 h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center cursor-not-allowed shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Clear Sculpt Mask Data disabled">
                      <span class="text-[13px] text-[#ccc]">Clear Sculpt Mask Data</span>
                    </div>
                    <div class="absolute left-2 top-0 bottom-0 flex items-center opacity-50">
                      <i class="fa-solid fa-xmark text-[12px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex relative">
                    <div class="flex-1 h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center cursor-not-allowed shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Clear Skin Data disabled">
                      <span class="text-[13px] text-[#ccc]">Clear Skin Data</span>
                    </div>
                    <div class="absolute left-2 top-0 bottom-0 flex items-center opacity-50">
                      <i class="fa-solid fa-xmark text-[12px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="w-full h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a]" alt-id="Reorder Mesh Spatially">
                    <span class="text-[13px] text-[#eee]">Reorder Mesh Spatially</span>
                  </div>

                  <div class="flex relative mt-[1px]">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Add Custom Normals Data">
                      <span class="text-[13px] text-[#eee]">Add Custom Normals Data</span>
                    </div>
                    <div class="absolute left-2 top-0 bottom-0 flex items-center opacity-70">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Animation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataAnimation} alt-id="Data Animation accordion">
                <div class="flex items-center gap-2">
                  {#if isDataAnimationExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Animation</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataAnimationExpanded}
                <div class="flex flex-col gap-1 p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <span class="text-[12px] text-[#ccc] mb-[2px]">Mesh</span>
                  <div class="flex gap-[2px]">
                    <div class="flex-1 flex gap-[2px]">
                      <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Data Animation Mesh dropdown">
                        <i class="fa-solid fa-draw-polygon text-[12px] text-[#33cc66] mr-2"></i>
                        <span class="text-[13px] text-[#eee] flex-1 opacity-50">Mesh</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                      </div>
                    </div>
                    <div class="px-5 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Data Animation New button">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataCustomProperties} alt-id="Data Custom Properties accordion">
                <div class="flex items-center gap-2">
                  {#if isDataCustomPropertiesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Custom Properties</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isDataCustomPropertiesExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Data New Custom Property button">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                    <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {:else if activeTab === 'material'}
          <!-- Material Tab Content -->
          <div class="flex flex-col">
            <!-- Breadcrumbs -->
            <div class="flex items-center justify-between px-1 py-1 mb-2">
              <div class="flex items-center gap-2 text-[13px] text-[#ccc]">
                <i class="fa-solid fa-cube text-[14px] text-[#ffb366]"></i>
                <span class="text-[#eee]" alt-id="Object breadcrumb">Cube.005</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#666]"></i>
                <i class="fa-solid fa-play text-[14px] text-[#ccc] transform -rotate-90"></i>
                <span class="text-[#eee]" alt-id="Mesh breadcrumb">Cube.005</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#666]"></i>
                <i class="fa-solid fa-circle text-[14px] text-[#ff6666] opacity-0"></i>
                <i class="fa-solid fa-circle-half-stroke text-[14px] text-[#ff6666] absolute"></i>
                <span class="text-[#eee] ml-1" alt-id="Material breadcrumb">Wooden Bars</span>
              </div>
            </div>
            
            <!-- Material List -->
            <div class="flex items-stretch gap-1 mb-1">
              <div class="flex-1 h-[70px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                <div class="flex items-center gap-2 px-2 py-1 bg-[#4772b3] cursor-pointer" alt-id="Selected Material List Item">
                  <i class="fa-solid fa-circle-half-stroke text-[13px] text-[#222]"></i>
                  <span class="text-[13px] text-white">Wooden Bars</span>
                </div>
              </div>
              <div class="flex flex-col gap-1 w-6">
                <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Material Slot">
                  <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                </div>
                <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Material Slot">
                  <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                </div>
                <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Specials Menu">
                  <i class="fa-solid fa-chevron-down text-[10px] text-[#ccc]"></i>
                </div>
              </div>
            </div>

            <!-- Active Material Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active Material dropdown">
                <i class="fa-solid fa-circle-half-stroke text-[13px] text-[#eee]"></i>
                <span class="text-[13px] text-[#eee] flex-1">Wooden Bars</span>
              </div>
              <div class="flex items-center justify-center w-[40px] h-full border-l border-[#151515] bg-[#333]" alt-id="Users">
                <span class="text-[12px] text-[#eee]">7</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Fake User">
                <i class="fa-solid fa-shield text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="New Material">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Unlink Data-block">
                <i class="fa-solid fa-xmark text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- Preview -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialPreview} alt-id="Material Preview accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialPreviewExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Preview</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isMaterialPreviewExpanded}
                <div class="flex p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px] gap-2">
                  <div class="flex-1 bg-[#1a1a1a] rounded-[3px] border border-[#151515] h-[100px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden" alt-id="Preview Area">
                     <!-- Checkerboard background pattern -->
                     <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333), linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333); background-size: 16px 16px; background-position: 0 0, 8px 8px;"></div>
                     <!-- Placeholder sphere -->
                     <div class="w-[80px] h-[80px] rounded-full bg-[#ddd] shadow-inner relative z-10 overflow-hidden">
                       <!-- Stippled texture -->
                       <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 4px 4px;"></div>
                       <div class="absolute inset-0 rounded-full" style="box-shadow: inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.8);"></div>
                     </div>
                  </div>
                  <div class="flex flex-col gap-[2px] w-6">
                    <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-regular fa-square text-[12px] text-[#ccc]"></i>
                    </div>
                    <div class="h-[22px] bg-[#4772b3] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-solid fa-circle text-[12px] text-white"></i>
                    </div>
                    <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-solid fa-cube text-[12px] text-[#ccc]"></i>
                    </div>
                    <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-solid fa-wind text-[12px] text-[#ccc]"></i>
                    </div>
                    <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-solid fa-shirt text-[12px] text-[#ccc]"></i>
                    </div>
                    <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-solid fa-droplet text-[12px] text-[#ccc]"></i>
                    </div>
                    <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm">
                      <i class="fa-solid fa-globe text-[12px] text-[#ccc]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Surface -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialSurface} alt-id="Material Surface accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialSurfaceExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Surface</span>
                </div>
                <div class="flex items-center gap-[2.5px] opacity-40">
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                  <div class="w-[2.5px] h-[2.5px] rounded-full bg-[#ccc]"></div>
                </div>
              </div>
              
              {#if isMaterialSurfaceExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1 mb-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Surface</span>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#70b370]"></div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                      <span class="text-[13px] text-[#eee]">Principled BSDF</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <i class="fa-solid fa-chevron-right text-[9px] text-[#aaa]"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#cccc33]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Base Color</span>
                    </div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]">
                      <span class="text-[13px] text-[#eee]">Mix</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Metallic</span>
                    </div>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <i class="fa-solid fa-chevron-right text-[9px] text-[#aaa]"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#cccc33]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Roughness</span>
                    </div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]">
                      <span class="text-[13px] text-[#eee]">Multiply Add</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">IOR</span>
                    </div>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.450</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Alpha</span>
                    </div>
                    <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 mb-2">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <i class="fa-solid fa-chevron-right text-[9px] text-[#aaa]"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#8c66ff]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Normal</span>
                    </div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]">
                      <span class="text-[13px] text-[#eee]">Bump</span>
                    </div>
                  </div>

                  <div class="flex flex-col pl-1">
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Diffuse</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Subsurface</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Specular</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Transmission</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Coat</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Sheen</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Emission</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Thin Film</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Volume -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialVolume} alt-id="Material Volume accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialVolumeExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Volume</span>
                </div>
              </div>
              
              {#if isMaterialVolumeExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume</span>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#70b370]"></div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                      <span class="text-[13px] text-[#eee]">None</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Displacement -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialDisplacement} alt-id="Material Displacement accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialDisplacementExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Displacement</span>
                </div>
              </div>
              
              {#if isMaterialDisplacementExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Displacement</span>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#8c66ff]"></div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                      <span class="text-[13px] text-[#eee]">Default</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Settings -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialSettings} alt-id="Material Settings accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialSettingsExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Settings</span>
                </div>
              </div>
              
              {#if isMaterialSettingsExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1 mb-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Pass Index</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0</span>
                      </div>
                    </div>
                  </div>

                  <!-- Nested Surface -->
                  <div class="flex flex-col">
                    <div class="flex items-center gap-2 py-1 cursor-pointer">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#eee]">Surface</span>
                    </div>
                    <div class="pl-4 flex flex-col gap-[3px] mt-1 mb-2">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Displacement</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Bump Only</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Emission Sampling</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Auto</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#4772b3] border border-[#151515] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                            <i class="fa-solid fa-check text-[9px] text-white"></i>
                          </div>
                          <span class="text-[13px] text-[#eee]">Transparent Shadows</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#4772b3] border border-[#151515] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                            <i class="fa-solid fa-check text-[9px] text-white"></i>
                          </div>
                          <span class="text-[13px] text-[#eee]">Bump Map Correction</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Nested Volume -->
                  <div class="flex flex-col border-t border-[#1f1f1f] pt-1">
                    <div class="flex items-center gap-2 py-1 cursor-pointer">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#eee]">Volume</span>
                    </div>
                    <div class="pl-4 flex flex-col gap-[3px] mt-1 mb-1">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Sampling</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Multiple Importance</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Interpolation</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Linear</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              {/if}
            </div>

            <!-- Line Art -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialLineArt} alt-id="Material Line Art accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialLineArtExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Line Art</span>
                </div>
              </div>
              
              {#if isMaterialLineArtExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2">
                      <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                      <span class="text-[13px] text-[#eee]">Material Mask</span>
                    </div>
                    <div class="flex-1 flex justify-end">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Masks</span>
                    <div class="flex-1 flex">
                      <div class="flex-1 h-[22px] border border-[#222] bg-[#333]"></div>
                      <div class="flex-1 h-[22px] border-y border-r border-[#222] bg-[#333]"></div>
                      <div class="flex-1 h-[22px] border-y border-r border-[#222] bg-[#333]"></div>
                      <div class="flex-1 h-[22px] border-y border-r border-[#222] bg-[#333]"></div>
                      <div class="flex-1 h-[22px] border-y border-r border-[#222] bg-[#333]"></div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Levels</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Intersection Priority</span>
                    <div class="flex items-center gap-2 flex-1">
                      <div class="w-3.5 h-3.5 bg-[#333] border border-[#222] rounded-[2px] flex items-center justify-center cursor-not-allowed"></div>
                      <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">0</span>
                        </div>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                  </div>

                </div>
              {/if}
            </div>

            <!-- Viewport Display -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialViewportDisplay} alt-id="Material Viewport Display accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialViewportDisplayExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Viewport Display</span>
                </div>
              </div>
              
              {#if isMaterialViewportDisplayExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color</span>
                    <div class="flex-1 bg-[#e0d6cb] border border-[#222] rounded-[3px] h-[22px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Metallic</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0.000</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 mb-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Roughness</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                      <div class="absolute left-0 top-0 bottom-0 bg-[#4772b3]" style="width: 40%;"></div>
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0.400</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#999]"></div>
                  </div>

                  <!-- Nested Settings -->
                  <div class="flex flex-col border-t border-[#1f1f1f] pt-1">
                    <div class="flex items-center gap-2 py-1 cursor-pointer">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#eee]">Settings</span>
                    </div>
                    <div class="pl-4 flex flex-col gap-[3px] mt-1 mb-1">
                      
                      <div class="flex items-start gap-2 mt-1">
                        <div class="w-[120px] shrink-0 flex items-center justify-end gap-2">
                          <span class="text-right text-[12px] text-[#ccc] pointer-events-none">Backface Culling</span>
                          <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                        </div>
                        <div class="flex flex-col gap-[3px]">
                          <div class="flex items-center gap-2">
                            <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                            <span class="text-[13px] text-[#eee]">Camera</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                            <span class="text-[13px] text-[#eee]">Shadow</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                            <span class="text-[13px] text-[#eee]">Light Probe Volume</span>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-2 opacity-50">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Max Displacement</span>
                        <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group">
                          <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                            <span class="text-[13px] text-[#eee]">0 m</span>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Render Method</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Dithered</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1 opacity-50">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#333] border border-[#222] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                          <span class="text-[13px] text-[#eee]">Raytraced Transmission</span>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Thickness</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Sphere</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1 opacity-50">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#333] border border-[#222] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
                          <span class="text-[13px] text-[#eee]">From Shadow</span>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume Intersection</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]">
                          <span class="text-[13px] text-[#eee]">Fast</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialCustomProperties} alt-id="Material Custom Properties accordion">
                <div class="flex items-center gap-2">
                  {#if isMaterialCustomPropertiesExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <span class="text-[#eee] text-[13px] font-medium">Custom Properties</span>
                </div>
              </div>
              
              {#if isMaterialCustomPropertiesExpanded}
                <div class="flex flex-col gap-[3px] p-3 pt-2 bg-[#282828] border-t border-[#1f1f1f] rounded-b-[5px]">
                  <div class="flex">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
