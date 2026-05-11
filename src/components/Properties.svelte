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

<div class="h-full flex flex-col bg-[#282828] relative" alt-id="Properties editor panel" appearance-id="dark vertical panel with sidebar icon tabs (in {windowId})" location-id="right side of the Blender layout, spanning the full height (in {windowId})" functionality-id="contains all object and scene property accordions organized by tab (in {windowId})" intent-id="configure scene, object, material, and render settings (in {windowId})">
  <!-- Header -->
  <div class="h-12 bg-[#282828] border-b border-[#1f1f1f] flex items-center px-4 justify-between text-[15px]" alt-id="Properties header" appearance-id="dark horizontal bar with search field and filter button (in {windowId})" location-id="top of the Properties editor panel (in {windowId})" functionality-id="provides search and filter controls for the Properties panel (in {windowId})" intent-id="quickly find relevant properties (in {windowId})">
    <EditorSelector bind:editor={currentEditor} windowId={windowId} />
    
    <div class="flex-1 flex justify-center items-center px-5">
      <div class="flex items-center gap-2.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] px-4 py-1.5 w-[240px] cursor-text shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] text-[#a0a0a0]" alt-id="Search properties input field" appearance-id="dark rounded search box with magnifying glass icon and Search placeholder text (in {windowId})" location-id="center of the Properties header (in {windowId})" functionality-id="allows text search to find specific property fields (in {windowId})" intent-id="locate properties by name without scrolling (in {windowId})">
        <i class="fa-light fa-magnifying-glass text-[15px] opacity-70 pointer-events-none"></i>
        <span class="text-[14px] opacity-60 pointer-events-none">Search</span>
      </div>
    </div>
    
    <div class="flex items-center cursor-pointer hover:text-white text-[#a0a0a0] px-3 py-1.5 hover:bg-[#333] rounded" alt-id="Filter properties button" appearance-id="small button with a chevron-down icon (in {windowId})" location-id="right side of the Properties header (in {windowId})" functionality-id="opens filter options for the Properties panel (in {windowId})" intent-id="narrow down which properties are shown (in {windowId})">
      <i class="fa-solid fa-chevron-down text-[11px] pointer-events-none"></i>
    </div>
  </div>
  
  <div class="flex-1 flex overflow-hidden">
    <!-- Left vertical tabs -->
    <div class="w-[44px] bg-[#1e1e1e] flex flex-col items-center pt-3 gap-1.5 text-[#a0a0a0] text-[18px] border-r border-[#151515]" alt-id="Properties sidebar tabs" appearance-id="narrow dark vertical strip with icon buttons for each properties category (in {windowId})" location-id="left edge of the Properties editor, between the header and main content (in {windowId})" functionality-id="contains icon buttons to switch between property tabs (in {windowId})" intent-id="navigate between different property categories (in {windowId})">
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'tool' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('tool')} alt-id="Tool" appearance-id="screwdriver-wrench icon button in the sidebar (in {windowId})" location-id="first item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Tool tab (in {windowId})" intent-id="view and edit tool-specific settings for the active tool (in {windowId})"><i class="fa-solid fa-screwdriver-wrench"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'render' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('render')} alt-id="Render" appearance-id="camera-retro icon button in the sidebar (in {windowId})" location-id="second item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Render tab (in {windowId})" intent-id="configure rendering engine settings (in {windowId})"><i class="fa-solid fa-camera-retro"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'output' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('output')} alt-id="Output" appearance-id="printer icon button in the sidebar (in {windowId})" location-id="third item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Output tab (in {windowId})" intent-id="configure render output format and path (in {windowId})"><i class="fa-solid fa-print"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'view-layer' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('view-layer')} alt-id="View Layer" appearance-id="layer-group icon button in the sidebar (in {windowId})" location-id="fourth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the View Layer tab (in {windowId})" intent-id="configure view layer passes and filters (in {windowId})"><i class="fa-solid fa-layer-group"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'scene' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('scene')} alt-id="Scene" appearance-id="clapperboard icon button in the sidebar (in {windowId})" location-id="fifth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Scene tab (in {windowId})" intent-id="configure scene-level settings (in {windowId})"><i class="fa-solid fa-clapperboard"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'world' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#ff8888]' : 'text-[#cc6666] hover:text-[#ff8888]'}" on:click={() => setTab('world')} alt-id="World" appearance-id="globe icon button in the sidebar, red-tinted (in {windowId})" location-id="sixth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the World tab (in {windowId})" intent-id="configure world background and environment lighting (in {windowId})"><i class="fa-solid fa-globe"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'collection' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm' : 'hover:text-white'}" on:click={() => setTab('collection')} alt-id="Collection" appearance-id="box-archive icon button in the sidebar (in {windowId})" location-id="seventh item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Collection tab (in {windowId})" intent-id="configure collection visibility and instancing (in {windowId})"><i class="fa-solid fa-box-archive"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'object' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#ffaa33]' : 'text-[#e68a00] hover:text-[#ffaa33]'}" on:click={() => setTab('object')} alt-id="Object" appearance-id="dashed-square icon button in the sidebar, orange-tinted (in {windowId})" location-id="eighth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Object tab (in {windowId})" intent-id="configure object transform and display settings (in {windowId})"><i class="fa-solid fa-square-dashed"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'modifiers' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#6699ff]' : 'text-[#4772b3] hover:text-[#6699ff]'}" on:click={() => setTab('modifiers')} alt-id="Modifiers" appearance-id="wrench icon button in the sidebar, blue-tinted (in {windowId})" location-id="ninth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Modifiers tab (in {windowId})" intent-id="add and configure object modifiers (in {windowId})"><i class="fa-solid fa-wrench"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer text-[#4772b3] hover:text-[#6699ff]" alt-id="Particles" appearance-id="circle-nodes icon button in the sidebar, blue-tinted (in {windowId})" location-id="tenth item in the Properties sidebar tabs (in {windowId})" functionality-id="navigates to the Particles properties tab (in {windowId})" intent-id="configure particle systems for the object (in {windowId})"><i class="fa-solid fa-circle-nodes"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'physics' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#6699ff]' : 'text-[#4772b3] hover:text-[#6699ff]'}" on:click={() => setTab('physics')} alt-id="Physics" appearance-id="atom icon button in the sidebar, blue-tinted (in {windowId})" location-id="eleventh item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Physics tab (in {windowId})" intent-id="configure physics simulations for the object (in {windowId})"><i class="fa-solid fa-atom"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'constraints' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#6699ff]' : 'text-[#4772b3] hover:text-[#6699ff]'}" on:click={() => setTab('constraints')} alt-id="Constraints" appearance-id="link icon button in the sidebar, blue-tinted (in {windowId})" location-id="twelfth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Constraints tab (in {windowId})" intent-id="add and configure object constraints (in {windowId})"><i class="fa-solid fa-link"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'data' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#66ff99]' : 'text-[#33cc66] hover:text-[#66ff99]'}" on:click={() => setTab('data')} alt-id="Data" appearance-id="draw-polygon icon button in the sidebar, green-tinted (in {windowId})" location-id="thirteenth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Data tab (in {windowId})" intent-id="configure mesh data properties (in {windowId})"><i class="fa-solid fa-draw-polygon"></i></div>
      <div class="w-full flex justify-center py-2 cursor-pointer {activeTab === 'material' ? 'text-white bg-[#3d3d3d] rounded-l-[4px] rounded-r-[1px] ml-1 shadow-sm text-[#ff6666]' : 'text-[#cc6666] hover:text-[#ff8888]'}" on:click={() => setTab('material')} alt-id="Material" appearance-id="solid circle icon button in the sidebar, red-tinted (in {windowId})" location-id="fourteenth item in the Properties sidebar tabs (in {windowId})" functionality-id="switches the Properties panel to the Material tab (in {windowId})" intent-id="configure material properties for the object (in {windowId})"><i class="fa-solid fa-circle"></i></div>
      <div class="relative w-full flex justify-center">
        <div class="w-full flex justify-center py-2 cursor-pointer {isVisibleTabsMenuOpen ? 'text-white bg-[#333]' : 'hover:text-white'}" on:click={toggleVisibleTabsMenu} alt-id="Properties panel settings" appearance-id="small caret-down icon button at the bottom of the sidebar (in {windowId})" location-id="bottom of the Properties sidebar tabs, below the Material tab (in {windowId})" functionality-id="opens the Visible Tabs popup to toggle which tabs are shown (in {windowId})" intent-id="customize which property tabs appear in the sidebar (in {windowId})">
          <i class="fa-solid fa-caret-down text-[12px] pointer-events-none"></i>
        </div>
        
        {#if isVisibleTabsMenuOpen}
          <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => {
            isVisibleTabsMenuOpen = false;
            updateOpenParam();
          }}></div>
          <div class="absolute left-full top-0 ml-1 bg-[#1d1d1d] text-[#cccccc] text-[13px] py-1.5 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border border-[#333] z-50 w-[220px] rounded-[3px] flex flex-col cursor-default" on:click|stopPropagation alt-id="Visible Tabs popup" appearance-id="dark floating dropdown panel listing all available property tabs (in {windowId})" location-id="to the right of the Properties sidebar settings button (in {windowId})" functionality-id="shows a list of all tabs with checkboxes to toggle visibility (in {windowId})" intent-id="customize which tabs appear in the Properties sidebar (in {windowId})">
            <div class="px-3 py-1 text-[#aaa] border-b border-[#333] mb-1 flex items-center" alt-id="Visible Tabs header" appearance-id="small gray text label reading Visible Tabs at top of popup (in {windowId})" location-id="top of the Visible Tabs popup panel (in {windowId})" functionality-id="labels the popup as the Visible Tabs menu (in {windowId})" intent-id="identify the purpose of this popup menu (in {windowId})">
              <span class="pointer-events-none">Visible Tabs</span>
            </div>
            
            <!-- Items -->
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Tool" appearance-id="row with screwdriver icon, Tool label, and blue checkmark (in {windowId})" location-id="first item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Tool tab in the sidebar (in {windowId})" intent-id="show or hide the Tool tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-screwdriver-wrench text-[13px] w-4 text-center"></i>
                <span>Tool</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Render" appearance-id="row with camera-retro icon, Render label, and blue checkmark (in {windowId})" location-id="second item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Render tab in the sidebar (in {windowId})" intent-id="show or hide the Render tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-camera-retro text-[13px] w-4 text-center"></i>
                <span>Render</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Output" appearance-id="row with printer icon, Output label, and blue checkmark (in {windowId})" location-id="third item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Output tab in the sidebar (in {windowId})" intent-id="show or hide the Output tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-print text-[13px] w-4 text-center"></i>
                <span>Output</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: View Layer" appearance-id="row with layer-group icon, View Layer label, and blue checkmark (in {windowId})" location-id="fourth item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the View Layer tab in the sidebar (in {windowId})" intent-id="show or hide the View Layer tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-layer-group text-[13px] w-4 text-center"></i>
                <span>View Layer</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Scene" appearance-id="row with clapperboard icon, Scene label, and blue checkmark (in {windowId})" location-id="fifth item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Scene tab in the sidebar (in {windowId})" intent-id="show or hide the Scene tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-clapperboard text-[13px] w-4 text-center"></i>
                <span>Scene</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: World" appearance-id="row with globe icon, World label, and blue checkmark (in {windowId})" location-id="sixth item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the World tab in the sidebar (in {windowId})" intent-id="show or hide the World tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-globe text-[13px] w-4 text-center"></i>
                <span>World</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Collection" appearance-id="row with box-archive icon, Collection label, and blue checkmark (in {windowId})" location-id="seventh item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Collection tab in the sidebar (in {windowId})" intent-id="show or hide the Collection tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-box-archive text-[13px] w-4 text-center"></i>
                <span>Collection</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Object" appearance-id="row with dashed-square icon, Object label, and blue checkmark (in {windowId})" location-id="eighth item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Object tab in the sidebar (in {windowId})" intent-id="show or hide the Object tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-square-dashed text-[13px] w-4 text-center"></i>
                <span>Object</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Modifiers" appearance-id="row with wrench icon, Modifiers label, and blue checkmark (in {windowId})" location-id="ninth item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Modifiers tab in the sidebar (in {windowId})" intent-id="show or hide the Modifiers tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-wrench text-[13px] w-4 text-center"></i>
                <span>Modifiers</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Effects" appearance-id="row with wand-magic-sparkles icon and Effects label in the Visible Tabs popup (in {windowId})" location-id="after Modifiers in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Effects tab in the sidebar (in {windowId})" intent-id="show or hide the Effects tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-wand-magic-sparkles text-[13px] w-4 text-center"></i>
                <span>Effects</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Particles" appearance-id="row with circle-nodes icon, Particles label, and blue checkmark (in {windowId})" location-id="after Effects in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Particles tab in the sidebar (in {windowId})" intent-id="show or hide the Particles tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-circle-nodes text-[13px] w-4 text-center"></i>
                <span>Particles</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Physics" appearance-id="row with atom icon, Physics label, and blue checkmark (in {windowId})" location-id="after Particles in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Physics tab in the sidebar (in {windowId})" intent-id="show or hide the Physics tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-atom text-[13px] w-4 text-center"></i>
                <span>Physics</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Constraints" appearance-id="row with link icon, Constraints label, and blue checkmark (in {windowId})" location-id="after Physics in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Constraints tab in the sidebar (in {windowId})" intent-id="show or hide the Constraints tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-link text-[13px] w-4 text-center"></i>
                <span>Constraints</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Data" appearance-id="row with draw-polygon icon, Data label, and blue checkmark (in {windowId})" location-id="after Constraints in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Data tab in the sidebar (in {windowId})" intent-id="show or hide the Data tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-draw-polygon text-[13px] w-4 text-center"></i>
                <span>Data</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Bone" appearance-id="row with bone icon and Bone label in the Visible Tabs popup (in {windowId})" location-id="after Data in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Bone tab in the sidebar (in {windowId})" intent-id="show or hide the Bone tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-bone text-[13px] w-4 text-center"></i>
                <span>Bone</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Bone Constraints" appearance-id="row with link icon and Bone Constraints label in the Visible Tabs popup (in {windowId})" location-id="after Bone in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Bone Constraints tab in the sidebar (in {windowId})" intent-id="show or hide the Bone Constraints tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-link text-[13px] w-4 text-center"></i>
                <span>Bone Constraints</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Visible Tabs option: Material" appearance-id="row with circle icon, Material label, and blue checkmark (in {windowId})" location-id="after Bone Constraints in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Material tab in the sidebar (in {windowId})" intent-id="show or hide the Material tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-circle text-[13px] w-4 text-center"></i>
                <span>Material</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Texture" appearance-id="row with chess-board icon and Texture label in the Visible Tabs popup (in {windowId})" location-id="after Material in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Texture tab in the sidebar (in {windowId})" intent-id="show or hide the Texture tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-chess-board text-[13px] w-4 text-center"></i>
                <span>Texture</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Strip" appearance-id="row with server icon and Strip label in the Visible Tabs popup (in {windowId})" location-id="after Texture in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Strip tab in the sidebar (in {windowId})" intent-id="show or hide the Strip tab (in {windowId})">
              <div class="flex items-center gap-2 pointer-events-none">
                <i class="fa-solid fa-server text-[13px] w-4 text-center"></i>
                <span>Strip</span>
              </div>
              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-sm flex items-center justify-center pointer-events-none shadow-inner"><i class="fa-solid fa-check text-[10px] text-white"></i></div>
            </div>
            
            <div class="flex items-center justify-between px-3 py-1 hover:bg-[#4772b3] hover:text-white cursor-pointer group" alt-id="Strip Modifiers" appearance-id="row with wrench icon and Strip Modifiers label in the Visible Tabs popup (in {windowId})" location-id="last item in the Visible Tabs popup (in {windowId})" functionality-id="toggles visibility of the Strip Modifiers tab in the sidebar (in {windowId})" intent-id="show or hide the Strip Modifiers tab (in {windowId})">
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
    <div class="flex-1 bg-[#282828] flex flex-col text-[14px] overflow-hidden" alt-id="Properties main content view" appearance-id="scrollable dark panel containing property accordions (in {windowId})" location-id="right portion of the Properties editor, filling the main area (in {windowId})" functionality-id="displays the property accordions for the currently active tab (in {windowId})" intent-id="show and edit all properties for the selected tab (in {windowId})">
      <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {#if activeTab === 'tool'}
          <!-- Tool Header -->
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 flex items-center justify-center border-[1.5px] border-dashed border-[#ffcc00] opacity-90 rounded-[3px]" alt-id="Select Box tool icon" appearance-id="dashed-border square icon with pointer arrow indicating Select Box tool (in {windowId})" location-id="top of the Tool tab content, leftmost in the tool header row (in {windowId})" functionality-id="shows the currently active tool is Select Box (in {windowId})" intent-id="identify the active viewport tool (in {windowId})">
              <i class="fa-solid fa-arrow-pointer text-[18px] text-white shadow-sm transform -translate-x-0.5"></i>
            </div>
            <span class="text-[#ccc] text-[16px] font-medium">Select Box</span>
          </div>
          
          <!-- Selection modes -->
          <div class="flex items-center gap-1.5">
            <div class="w-9 h-9 bg-[#4772b3] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Set" appearance-id="blue dashed-square button indicating Set mode is active (in {windowId})" location-id="leftmost of the five selection mode buttons in the Tool tab (in {windowId})" functionality-id="sets the selection mode to Set, replacing current selection (in {windowId})" intent-id="apply selection by replacing the current selection entirely (in {windowId})">
              <i class="fa-regular fa-square-dashed text-[20px] text-white"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Extend" appearance-id="gray object-union button for Extend mode (in {windowId})" location-id="second of the five selection mode buttons in the Tool tab (in {windowId})" functionality-id="sets the selection mode to Extend, adding to current selection (in {windowId})" intent-id="apply selection by adding to the existing selection (in {windowId})">
              <i class="fa-regular fa-object-union text-[20px] text-[#a0a0a0]"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Subtract" appearance-id="gray object-subtract button for Subtract mode (in {windowId})" location-id="third of the five selection mode buttons in the Tool tab (in {windowId})" functionality-id="sets the selection mode to Subtract, removing from current selection (in {windowId})" intent-id="apply selection by removing from the existing selection (in {windowId})">
              <i class="fa-regular fa-object-subtract text-[20px] text-[#a0a0a0]"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Difference" appearance-id="gray object-exclude button for Difference mode (in {windowId})" location-id="fourth of the five selection mode buttons in the Tool tab (in {windowId})" functionality-id="sets the selection mode to Difference, toggling selected items (in {windowId})" intent-id="apply selection by toggling items in and out of the selection (in {windowId})">
              <i class="fa-regular fa-object-exclude text-[20px] text-[#a0a0a0]"></i>
            </div>
            <div class="w-9 h-9 bg-[#333] hover:bg-[#444] rounded-[4px] border border-[#222] flex items-center justify-center cursor-pointer" alt-id="Mode: Intersect" appearance-id="gray object-intersect button for Intersect mode (in {windowId})" location-id="rightmost of the five selection mode buttons in the Tool tab (in {windowId})" functionality-id="sets the selection mode to Intersect, keeping only common elements (in {windowId})" intent-id="apply selection by keeping only items common to both selections (in {windowId})">
              <i class="fa-regular fa-object-intersect text-[20px] text-[#a0a0a0]"></i>
            </div>
          </div>
          
          <!-- Options Accordion -->
          <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden mt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Options accordion, expanded" appearance-id="expanded accordion header labeled Options with chevron-down icon (in {windowId})" location-id="below the selection mode buttons in the Tool tab (in {windowId})" functionality-id="toggles the Options accordion in the Tool properties (in {windowId})" intent-id="expand or collapse tool options (in {windowId})">
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
                <div class="flex items-center gap-2.5 px-1 py-1.5 cursor-pointer hover:text-white text-[#ccc]" alt-id="Transform sub-accordion, expanded" appearance-id="sub-accordion header labeled Transform with chevron-down icon (in {windowId})" location-id="inside the Options accordion in the Tool tab (in {windowId})" functionality-id="toggles the Transform sub-accordion (in {windowId})" intent-id="show or hide transform options (in {windowId})">
                  <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center"></i>
                  <span class="text-[14px]">Transform</span>
                </div>
                
                <div class="flex pl-10 py-3">
                  <span class="text-[#a0a0a0] w-28 pt-0.5 text-[14px]">Affect Only</span>
                  <div class="flex flex-col gap-2.5">
                    <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Origins checkbox" appearance-id="unchecked checkbox labeled Origins inside Transform options (in {windowId})" location-id="first row in the Affect Only group in the Tool tab Transform section (in {windowId})" functionality-id="when checked, transformations affect only origins of objects (in {windowId})" intent-id="limit transforms to affect only object origins (in {windowId})">
                      <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                      <span class="text-[#ccc] text-[14px]">Origins</span>
                    </div>
                    <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Locations checkbox" appearance-id="unchecked checkbox labeled Locations inside Transform options (in {windowId})" location-id="second row in the Affect Only group in the Tool tab Transform section (in {windowId})" functionality-id="when checked, transformations affect only locations of objects (in {windowId})" intent-id="limit transforms to affect only object locations (in {windowId})">
                      <div class="w-4 h-4 bg-[#1c1c1c] border border-[#111] border-b-[#333] border-r-[#333] rounded-[2px] flex items-center justify-center group-hover:bg-[#222]"></div>
                      <span class="text-[#ccc] text-[14px]">Locations</span>
                    </div>
                    <div class="flex items-center gap-3 cursor-pointer group" alt-id="Affect Only Parents checkbox" appearance-id="unchecked checkbox labeled Parents inside Transform options (in {windowId})" location-id="third row in the Affect Only group in the Tool tab Transform section (in {windowId})" functionality-id="when checked, transformations affect only parent objects (in {windowId})" intent-id="limit transforms to affect only parent objects (in {windowId})">
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
            <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Workspace accordion, collapsed" appearance-id="collapsed accordion header labeled Workspace with chevron-right icon (in {windowId})" location-id="below the Options accordion in the Tool tab (in {windowId})" functionality-id="toggles the Workspace accordion in the Tool properties (in {windowId})" intent-id="expand or collapse workspace settings (in {windowId})">
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
            <div class="relative w-6 h-6 flex items-center justify-center opacity-90 rounded-[3px]" alt-id="Scene icon" appearance-id="small clapperboard icon in the Scene tab breadcrumb area (in {windowId})" location-id="leftmost element in the Scene tab breadcrumb row (in {windowId})" functionality-id="decorates the breadcrumb row with the scene type icon (in {windowId})" intent-id="visually identify this as a scene property (in {windowId})">
              <i class="fa-solid fa-shapes text-[16px] text-[#ccc]"></i>
            </div>
            <span class="text-[#ccc] text-[14px] font-medium" alt-id="Scene Name" appearance-id="text input showing the current scene name (in {windowId})" location-id="inside the Scene tab header area (in {windowId})" functionality-id="allows renaming the active scene (in {windowId})" intent-id="change the name of the current scene (in {windowId})">Cube Diorama</span>
            <i class="fa-solid fa-thumbtack text-[13px] text-[#888] ml-auto transform rotate-45 hover:text-[#ccc] cursor-pointer" alt-id="Pin icon" appearance-id="thumbtack pin icon for pinning a datablock (in {windowId})" location-id="in a Properties tab header area (in {windowId})" functionality-id="pins the current datablock to keep it selected (in {windowId})" intent-id="prevent automatic datablock switching (in {windowId})"></i>
          </div>

          <div class="flex flex-col gap-1.5 mt-2">
            <div class="flex items-center gap-2">
              <span class="w-[120px] text-right text-[13px] text-[#ccc]">Render Engine</span>
              <div class="flex-1 bg-[#2b2b2b] border border-[#1f1f1f] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#333]" alt-id="Render Engine dropdown, value Cycles" appearance-id="dark dropdown showing Cycles as the active render engine (in {windowId})" location-id="top of the Render tab content area (in {windowId})" functionality-id="selects the render engine; currently set to Cycles (in {windowId})" intent-id="choose which render engine processes the scene (in {windowId})">
                <span class="text-[13px] text-[#eee]">Cycles</span>
                <i class="fa-solid fa-chevron-down text-[10px] opacity-60"></i>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-[120px] text-right text-[13px] text-[#ccc]">Device</span>
              <div class="flex-1 bg-[#2b2b2b] border border-[#1f1f1f] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#333]" alt-id="Device dropdown, value GPU Compute" appearance-id="dropdown showing GPU Compute as the compute device (in {windowId})" location-id="inside the Performance accordion (in {windowId})" functionality-id="selects the compute device for rendering; currently GPU Compute (in {windowId})" intent-id="choose CPU or GPU for rendering (in {windowId})">
                <span class="text-[13px] text-[#eee]">GPU Compute</span>
                <i class="fa-solid fa-chevron-down text-[10px] opacity-60"></i>
              </div>
            </div>
          </div>

          <!-- Accordions Container -->
          <div class="flex flex-col gap-0.5 mt-2">
            
            <!-- Sampling -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSampling} alt-id="Sampling accordion" appearance-id="accordion header labeled Sampling with expand chevron (in {windowId})" location-id="below the render region controls in the Render tab (in {windowId})" functionality-id="toggles the Sampling section for render and viewport sample settings (in {windowId})" intent-id="configure sampling quality for the render (in {windowId})">
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
                  <div class="flex items-center justify-between px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc]" on:click={toggleSamplingViewport} alt-id="Viewport sub-accordion" appearance-id="sub-accordion labeled Viewport inside Sampling (in {windowId})" location-id="inside the Sampling accordion, Viewport sub-section (in {windowId})" functionality-id="toggles viewport sampling controls (in {windowId})" intent-id="configure sample count for viewport rendering (in {windowId})">
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
                  <div class="flex items-center justify-between px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc] bg-[#2d2d2d]" on:click={toggleSamplingRender} alt-id="Render sub-accordion" appearance-id="sub-accordion labeled Render inside Sampling (in {windowId})" location-id="inside the Sampling accordion, Render sub-section (in {windowId})" functionality-id="toggles render sampling controls (in {windowId})" intent-id="configure sample count for final rendering (in {windowId})">
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
                    <div class="flex items-center gap-2 px-6 py-1 cursor-pointer hover:text-white text-[#ccc] bg-[#282828]" alt-id="Lights" appearance-id="row labeled Lights in the sampling section (in {windowId})" location-id="inside the Sampling accordion in the Render tab, Lights (in {windowId})" functionality-id="enables or configures light sampling (in {windowId})" intent-id="set up how lights are sampled during rendering (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center"></i>
                      <span class="text-[13px]">Lights</span>
                    </div>
                    <div class="flex items-center gap-2 px-6 py-1 cursor-pointer hover:text-white text-[#ccc] bg-[#282828] pb-3" alt-id="Advanced" appearance-id="row labeled Advanced in the sampling section (in {windowId})" location-id="inside the Sampling accordion in the Render tab, Advanced (in {windowId})" functionality-id="toggles advanced sampling settings (in {windowId})" intent-id="access advanced sampling controls (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center"></i>
                      <span class="text-[13px]">Advanced</span>
                    </div>
                  {/if}
                </div>
              {/if}
            </div>

            <!-- Light Paths -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleLightPaths} alt-id="Light Paths accordion" appearance-id="accordion header labeled Light Paths (in {windowId})" location-id="below the Sampling section in the Render tab (in {windowId})" functionality-id="toggles the Light Paths section controlling ray bounce limits (in {windowId})" intent-id="configure how light rays bounce through the scene (in {windowId})">
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
                  <div class="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc]" on:click={toggleLightPathsMaxBounces} alt-id="Max Bounces sub-accordion" appearance-id="sub-accordion labeled Max Bounces inside Light Paths (in {windowId})" location-id="first sub-accordion inside the Light Paths section (in {windowId})" functionality-id="toggles maximum ray bounce settings (in {windowId})" intent-id="set maximum bounce limits for different ray types (in {windowId})">
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
                  <div class="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc] bg-[#2d2d2d] border-t border-[#1f1f1f]" on:click={toggleLightPathsClamping} alt-id="Clamping sub-accordion" appearance-id="sub-accordion labeled Clamping inside Light Paths (in {windowId})" location-id="inside the Light Paths section in the Render tab, Clamping sub-accordion (in {windowId})" functionality-id="toggles clamping settings to limit firefly artifacts (in {windowId})" intent-id="reduce noise by clamping sample values (in {windowId})">
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
                  <div class="flex items-center gap-2 px-6 py-1.5 cursor-pointer hover:text-white text-[#ccc] bg-[#2d2d2d] border-t border-[#1f1f1f]" on:click={toggleLightPathsCaustics} alt-id="Caustics sub-accordion" appearance-id="sub-accordion labeled Caustics inside Light Paths (in {windowId})" location-id="inside the Light Paths section in the Render tab, Caustics sub-accordion (in {windowId})" functionality-id="toggles caustics settings for reflective and refractive caustics (in {windowId})" intent-id="enable or disable caustic light effects (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleVolumes} alt-id="Volumes accordion" appearance-id="accordion header labeled Volumes (in {windowId})" location-id="below the Light Paths section in the Render tab (in {windowId})" functionality-id="toggles the Volumes section for volumetric rendering settings (in {windowId})" intent-id="configure volumetric rendering behavior (in {windowId})">
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
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Volumes Biased checkbox; unchecked" appearance-id="unchecked checkbox labeled Biased in the Volumes section (in {windowId})" location-id="inside the Volumes accordion in the Render tab (in {windowId})" functionality-id="enables biased volume rendering for faster but less accurate results (in {windowId})" intent-id="trade accuracy for speed in volumetric rendering (in {windowId})">
                      <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Biased</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Subdivision -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSubdivision} alt-id="Subdivision accordion" appearance-id="accordion header labeled Subdivision (in {windowId})" location-id="below the Volumes section in the Render tab (in {windowId})" functionality-id="toggles the Subdivision section for render-time subdivision settings (in {windowId})" intent-id="configure adaptive subdivision for rendering (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] rounded-b-[1px] border-b-0 h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Dicing Rate Render slider; value 1.00" appearance-id="numeric slider showing value 1.00 for dicing rate (in {windowId})" location-id="inside the Subdivision accordion, Subdivision Dicing Rate Render slider (in {windowId})" functionality-id="sets the render dicing rate for adaptive subdivision (in {windowId})" intent-id="control detail level in adaptive subdivision (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 -mt-[9px]">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Viewport</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Viewport slider; value 8.00" appearance-id="numeric slider showing value 8.00 for viewport subdivision (in {windowId})" location-id="inside the Subdivision accordion, Subdivision Viewport slider (in {windowId})" functionality-id="sets the viewport subdivision level limit (in {windowId})" intent-id="limit subdivision levels in the viewport (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">8.00</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Offscreen Scale</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Offscreen Scale slider; value 4.00" appearance-id="numeric slider showing value 4.00 for offscreen scale (in {windowId})" location-id="inside the Subdivision accordion, Subdivision Offscreen Scale slider (in {windowId})" functionality-id="sets the scale factor for offscreen dicing (in {windowId})" intent-id="control subdivision detail for objects outside camera view (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">4.00</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Max Subdivisions</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Subdivision Max Subdivisions slider; value 12" appearance-id="numeric slider showing value 12 for max subdivisions (in {windowId})" location-id="inside the Subdivision accordion, Subdivision Max Subdivisions slider (in {windowId})" functionality-id="sets the maximum number of subdivision levels (in {windowId})" intent-id="prevent excessive subdivision that could slow rendering (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">12</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Dicing Camera</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-[#222]" alt-id="Subdivision Dicing Camera input; empty" appearance-id="input field for the dicing camera, currently empty (in {windowId})" location-id="inside the Subdivision accordion, Subdivision Dicing Camera input (in {windowId})" functionality-id="specifies a camera to use for dicing calculations (in {windowId})" intent-id="use a specific camera perspective for adaptive subdivision (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCurves} alt-id="Curves accordion" appearance-id="accordion header labeled Curves (in {windowId})" location-id="below the Subdivision section in the Render tab (in {windowId})" functionality-id="toggles the Curves section for hair curve render settings (in {windowId})" intent-id="configure hair and fur curve rendering (in {windowId})">
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
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Curves Shape dropdown; value Rounded Ribbons" appearance-id="dropdown showing Rounded Ribbons for curves shape (in {windowId})" location-id="inside the Curves accordion, Curves Shape dropdown (in {windowId})" functionality-id="sets the display shape of hair/fur curves during rendering (in {windowId})" intent-id="choose how curves are rendered as geometry (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Rounded Ribbons</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Curve Subdivisions</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Curves Curve Subdivisions slider; value 2" appearance-id="numeric slider showing value 2 for curve subdivisions (in {windowId})" location-id="inside the Curves accordion, Curves Curve Subdivisions slider (in {windowId})" functionality-id="sets the subdivision level for curves in rendering (in {windowId})" intent-id="control smoothness of rendered curves (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">2</span>
                    </div>
                  </div>

                  <!-- Viewport Display (Nested) -->
                  <div class="mt-1 -mx-3 -mb-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333] border-t border-[#1f1f1f]" on:click={toggleCurvesViewportDisplay} alt-id="Curves Viewport Display accordion" appearance-id="sub-accordion labeled Viewport Display inside Curves (in {windowId})" location-id="inside the Curves accordion in the Render tab (in {windowId})" functionality-id="toggles curve viewport display settings (in {windowId})" intent-id="configure how curves appear in the viewport (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSimplify} alt-id="Simplify accordion" appearance-id="accordion header labeled Simplify (in {windowId})" location-id="below the Curves section in the Render tab (in {windowId})" functionality-id="toggles the Simplify section for reducing scene complexity (in {windowId})" intent-id="use simplify to speed up viewport and render (in {windowId})">
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
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyViewport} alt-id="Simplify Viewport accordion" appearance-id="sub-accordion labeled Viewport inside Simplify (in {windowId})" location-id="inside the Simplify section in the Render tab, Simplify Viewport accordion (in {windowId})" functionality-id="toggles viewport simplification settings (in {windowId})" intent-id="configure simplification levels for the viewport (in {windowId})">
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
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Viewport Max Subdivision slider; value 6" appearance-id="numeric slider showing value 6 for viewport max subdivision (in {windowId})" location-id="inside the Simplify Viewport sub-accordion, Simplify Viewport Max Subdivision slider (in {windowId})" functionality-id="limits the maximum subdivision level in the viewport (in {windowId})" intent-id="reduce viewport subdivision to improve performance (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">6</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Child Particles</span>
                          <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Viewport Child Particles slider; value 1.000; active" appearance-id="numeric slider showing value 1.000 for viewport child particles (in {windowId})" location-id="inside the Simplify Viewport sub-accordion, Simplify Viewport Child Particles slider (in {windowId})" functionality-id="sets the fraction of child particles shown in the viewport (in {windowId})" intent-id="reduce particle count in viewport for performance (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Texture Limit</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Simplify Viewport Texture Limit dropdown; value No Limit" appearance-id="dropdown showing No Limit for viewport texture limit (in {windowId})" location-id="inside the Simplify Viewport sub-accordion, Simplify Viewport Texture Limit dropdown (in {windowId})" functionality-id="sets the maximum texture resolution in the viewport (in {windowId})" intent-id="limit texture memory usage in viewport (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">No Limit</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume Resolution</span>
                          <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Viewport Volume Resolution slider; value 1.000; active" appearance-id="numeric slider showing value 1.000 for viewport volume resolution (in {windowId})" location-id="inside the Simplify Viewport sub-accordion, Simplify Viewport Volume Resolution slider (in {windowId})" functionality-id="scales the resolution of volume objects in the viewport (in {windowId})" intent-id="reduce volume rendering detail in viewport for performance (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Viewport Normals checkbox; unchecked" appearance-id="unchecked checkbox labeled Normals in viewport simplify settings (in {windowId})" location-id="inside the Simplify Viewport sub-accordion, Simplify Viewport Normals checkbox (in {windowId})" functionality-id="hides normal overlays in simplified viewport mode (in {windowId})" intent-id="disable normal display to improve viewport performance (in {windowId})">
                            <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Normals</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Render Nested Accordion -->
                  <div class="flex flex-col overflow-hidden border-t border-[#1f1f1f]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyRender} alt-id="Simplify Render accordion" appearance-id="sub-accordion labeled Render inside Simplify (in {windowId})" location-id="inside the Simplify section in the Render tab, Simplify Render accordion (in {windowId})" functionality-id="toggles render simplification settings (in {windowId})" intent-id="configure simplification for final renders (in {windowId})">
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
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Render Max Subdivision slider; value 0" appearance-id="numeric slider showing value 0 for render max subdivision (in {windowId})" location-id="inside the Simplify Render sub-accordion, Simplify Render Max Subdivision slider (in {windowId})" functionality-id="limits the maximum subdivision level during rendering (in {windowId})" intent-id="reduce render subdivision to speed up renders (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Child Particles</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Render Child Particles slider; value 0.000" appearance-id="numeric slider showing value 0.000 for render child particles (in {windowId})" location-id="inside the Simplify Render sub-accordion, Simplify Render Child Particles slider (in {windowId})" functionality-id="sets the fraction of child particles shown in renders (in {windowId})" intent-id="reduce particle count in renders for speed (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Texture Limit</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Simplify Render Texture Limit dropdown; value No Limit" appearance-id="dropdown showing No Limit for render texture limit (in {windowId})" location-id="inside the Simplify Render sub-accordion, Simplify Render Texture Limit dropdown (in {windowId})" functionality-id="sets the maximum texture resolution during rendering (in {windowId})" intent-id="limit texture memory usage during rendering (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">No Limit</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Culling Nested Accordion -->
                  <div class="flex flex-col overflow-hidden border-t border-[#1f1f1f]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyCulling} alt-id="Simplify Culling accordion" appearance-id="sub-accordion labeled Culling inside Simplify (in {windowId})" location-id="inside the Simplify section in the Render tab, Simplify Culling accordion (in {windowId})" functionality-id="toggles culling simplification settings (in {windowId})" intent-id="configure frustum and distance culling (in {windowId})">
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
                          <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0" alt-id="Simplify Culling Camera Culling checkbox; unchecked" appearance-id="unchecked checkbox labeled Camera Culling (in {windowId})" location-id="inside the Simplify Culling sub-accordion, Simplify Culling Camera Culling checkbox (in {windowId})" functionality-id="enables camera frustum culling to skip out-of-view objects (in {windowId})" intent-id="skip rendering objects not in camera view (in {windowId})"></div>
                          <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] relative" alt-id="Simplify Culling Camera Culling slider; value 0.10" appearance-id="numeric slider showing value 0.10 for camera culling threshold (in {windowId})" location-id="inside the Simplify Culling sub-accordion, Simplify Culling Camera Culling slider (in {windowId})" functionality-id="sets the camera culling distance threshold (in {windowId})" intent-id="tune how aggressively out-of-view objects are culled (in {windowId})">
                            <div class="absolute top-0 left-0 bottom-0 bg-[#5985cc] pointer-events-none" style="width: 2%;"></div>
                            <span class="text-[13px] text-[#eee] relative z-10 pointer-events-none">0.10</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Distance Culling</span>
                          <div class="w-3.5 h-3.5 border border-[#111] bg-[#444] rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0" alt-id="Simplify Culling Distance Culling checkbox; unchecked" appearance-id="unchecked checkbox labeled Distance Culling (in {windowId})" location-id="inside the Simplify Culling sub-accordion, Simplify Culling Distance Culling checkbox (in {windowId})" functionality-id="enables distance-based culling of far objects (in {windowId})" intent-id="skip rendering objects beyond a certain distance (in {windowId})"></div>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Simplify Culling Distance Culling slider; value 50 m" appearance-id="numeric slider showing value 50 m for distance culling (in {windowId})" location-id="inside the Simplify Culling sub-accordion, Simplify Culling Distance Culling slider (in {windowId})" functionality-id="sets the maximum render distance for culling (in {windowId})" intent-id="define the render distance cutoff (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">50 m</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Grease Pencil Nested Accordion -->
                  <div class="flex flex-col overflow-hidden border-t border-[#1f1f1f]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleSimplifyGreasePencil} alt-id="Simplify Grease Pencil accordion" appearance-id="sub-accordion labeled Grease Pencil inside Simplify (in {windowId})" location-id="inside the Simplify section in the Render tab, Simplify Grease Pencil accordion (in {windowId})" functionality-id="toggles Grease Pencil-specific simplification settings (in {windowId})" intent-id="configure simplification for Grease Pencil (in {windowId})">
                      {#if isSimplifyGreasePencilExpanded}
                        <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                      {:else}
                        <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                      {/if}
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Simplify Grease Pencil checkbox; unchecked" appearance-id="unchecked checkbox labeled Grease Pencil in simplify (in {windowId})" location-id="inside the Simplify section in the Render tab, Simplify Grease Pencil checkbox (in {windowId})" functionality-id="enables simplification for Grease Pencil objects (in {windowId})" intent-id="apply simplify settings to Grease Pencil objects (in {windowId})"></div>
                      <span class="text-[#eee] text-[13px]">Grease Pencil</span>
                    </div>
                    {#if isSimplifyGreasePencilExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Playback Only checkbox; unchecked" appearance-id="unchecked checkbox labeled Playback Only in Grease Pencil simplify (in {windowId})" location-id="inside the Simplify Grease Pencil sub-accordion, Simplify Grease Pencil Playback Only checkbox (in {windowId})" functionality-id="when checked, applies Grease Pencil simplification only during playback (in {windowId})" intent-id="limit Grease Pencil simplification to animation playback (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#888] pointer-events-none">Playback Only</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Fill checkbox; checked" appearance-id="checked checkbox labeled Fill in Grease Pencil simplify (in {windowId})" location-id="inside the Simplify Grease Pencil sub-accordion, Simplify Grease Pencil Fill checkbox (in {windowId})" functionality-id="when unchecked, disables fill drawing in simplified mode (in {windowId})" intent-id="toggle fill rendering for Grease Pencil in simplified mode (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Fill</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Modifiers checkbox; checked" appearance-id="checked checkbox labeled Modifiers in Grease Pencil simplify (in {windowId})" location-id="inside the Simplify Grease Pencil sub-accordion, Simplify Grease Pencil Modifiers checkbox (in {windowId})" functionality-id="when unchecked, disables modifier evaluation in simplified mode (in {windowId})" intent-id="toggle modifier evaluation for Grease Pencil in simplified mode (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Modifiers</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Shader Effects checkbox; checked" appearance-id="checked checkbox labeled Shader Effects in Grease Pencil simplify (in {windowId})" location-id="inside the Simplify Grease Pencil sub-accordion, Simplify Grease Pencil Shader Effects checkbox (in {windowId})" functionality-id="when unchecked, disables shader effects in simplified mode (in {windowId})" intent-id="toggle shader effects for Grease Pencil in simplified mode (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Shader Effects</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Layers Tinting checkbox; checked" appearance-id="checked checkbox labeled Layers Tinting in Grease Pencil simplify (in {windowId})" location-id="inside the Simplify Grease Pencil sub-accordion, Simplify Grease Pencil Layers Tinting checkbox (in {windowId})" functionality-id="when unchecked, disables layer tinting in simplified mode (in {windowId})" intent-id="toggle layer color tinting for Grease Pencil in simplified mode (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#222] rounded-[2px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none">
                              <i class="fa-solid fa-check text-[10px] text-white"></i>
                            </div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Layers Tinting</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Simplify Grease Pencil Antialiasing checkbox; checked" appearance-id="checked checkbox labeled Antialiasing in Grease Pencil simplify (in {windowId})" location-id="inside the Simplify Grease Pencil sub-accordion, Simplify Grease Pencil Antialiasing checkbox (in {windowId})" functionality-id="when unchecked, disables antialiasing in simplified mode (in {windowId})" intent-id="toggle antialiasing for Grease Pencil in simplified mode (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMotionBlur} alt-id="Motion Blur accordion" appearance-id="accordion header labeled Motion Blur (in {windowId})" location-id="below the Simplify section in the Render tab (in {windowId})" functionality-id="toggles the Motion Blur section for render motion blur settings (in {windowId})" intent-id="configure motion blur for dynamic renders (in {windowId})">
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
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Motion Blur Position dropdown; value Center on Frame" appearance-id="dropdown showing Center on Frame for motion blur position (in {windowId})" location-id="inside the Motion Blur accordion, Motion Blur Position dropdown (in {windowId})" functionality-id="sets where within the frame the shutter is centered (in {windowId})" intent-id="position motion blur relative to the current frame (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Center on Frame</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Shutter</span>
                    <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] relative" alt-id="Motion Blur Shutter slider; value 0.50" appearance-id="numeric slider showing value 0.50 for shutter duration (in {windowId})" location-id="inside the Motion Blur accordion, Motion Blur Shutter slider (in {windowId})" functionality-id="sets the shutter duration as a fraction of the frame duration (in {windowId})" intent-id="control how long the shutter is open for motion blur (in {windowId})">
                      <div class="absolute top-0 left-0 bottom-0 bg-[#5985cc] pointer-events-none" style="width: 50%;"></div>
                      <span class="text-[13px] text-[#eee] relative z-10 pointer-events-none">0.50</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rolling Shutter</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] rounded-b-[1px] border-b-0 px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Motion Blur Rolling Shutter dropdown; value None" appearance-id="dropdown showing None for rolling shutter effect (in {windowId})" location-id="inside the Motion Blur accordion, Motion Blur Rolling Shutter dropdown (in {windowId})" functionality-id="sets the rolling shutter simulation type (in {windowId})" intent-id="simulate rolling shutter distortion from camera sensors (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">None</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 -mt-[9px]">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rolling Shutter Duration</span>
                    <div class="flex-1 bg-[#4772b3] border border-[#222] border-t-0 rounded-[3px] rounded-t-[1px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] relative" alt-id="Motion Blur Rolling Shutter Duration slider; value 0.10" appearance-id="numeric slider showing value 0.10 for rolling shutter duration (in {windowId})" location-id="inside the Motion Blur accordion, below the Rolling Shutter dropdown (in {windowId})" functionality-id="sets the duration of the rolling shutter effect (in {windowId})" intent-id="tune the rolling shutter timing (in {windowId})">
                      <div class="absolute top-0 left-0 bottom-0 bg-[#5985cc] pointer-events-none" style="width: 10%;"></div>
                      <span class="text-[13px] text-[#eee] relative z-10 pointer-events-none">0.10</span>
                    </div>
                  </div>

                  <!-- Shutter Curve (Nested) -->
                  <div class="mt-1 -mx-3 -mb-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333] border-t border-[#1f1f1f]" on:click={toggleMotionBlurShutterCurve} alt-id="Motion Blur Shutter Curve accordion" appearance-id="sub-accordion labeled Shutter Curve inside Motion Blur (in {windowId})" location-id="inside the Motion Blur accordion, Motion Blur Shutter Curve accordion (in {windowId})" functionality-id="toggles the shutter curve graph for fine-tuning motion blur timing (in {windowId})" intent-id="control the exact timing of the shutter opening and closing (in {windowId})">
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
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Shutter Curve zoom in" appearance-id="small zoom-in button for the shutter curve graph (in {windowId})" location-id="beside the shutter curve options (in {windowId})" functionality-id="zooms in on the shutter curve graph (in {windowId})" intent-id="zoom into the shutter curve for fine editing (in {windowId})"><i class="fa-solid fa-magnifying-glass-plus text-[10px] text-[#ccc]"></i></div>
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Shutter Curve zoom out" appearance-id="small zoom-out button for the shutter curve graph (in {windowId})" location-id="beside the shutter curve zoom in button (in {windowId})" functionality-id="zooms out on the shutter curve graph (in {windowId})" intent-id="zoom out of the shutter curve for overview (in {windowId})"><i class="fa-solid fa-magnifying-glass-minus text-[10px] text-[#ccc]"></i></div>
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444]" alt-id="Shutter Curve auto fit" appearance-id="auto-fit button for the shutter curve graph (in {windowId})" location-id="beside the shutter curve zoom buttons (in {windowId})" functionality-id="auto-fits the shutter curve to the visible area (in {windowId})" intent-id="fit the shutter curve to the available graph space (in {windowId})"><div class="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#ccc]"></div></div>
                          </div>
                          <div class="flex rounded-[3px] border border-[#1f1f1f] overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] bg-[#3a3a3a] ml-1">
                            <div class="w-6 h-5 flex items-center justify-center cursor-pointer hover:bg-[#444]" alt-id="Shutter Curve options dropdown" appearance-id="small dropdown for shutter curve preset options (in {windowId})" location-id="top-right of the Shutter Curve graph area (in {windowId})" functionality-id="opens options for the shutter curve preset (in {windowId})" intent-id="access curve preset options (in {windowId})"><i class="fa-solid fa-chevron-down text-[9px] text-[#ccc]"></i></div>
                          </div>
                        </div>
                        <div class="w-full h-[150px] bg-[#333] border border-[#444] rounded-[2px] relative mb-2" alt-id="Shutter Curve graph area" appearance-id="dark graph area showing a curve representing shutter timing (in {windowId})" location-id="inside the Motion Blur Shutter Curve accordion (in {windowId})" functionality-id="displays and allows editing of the shutter timing curve (in {windowId})" intent-id="visualize and edit the motion blur shutter curve (in {windowId})">
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
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 1" appearance-id="first preset button for the curve graph (in {windowId})" location-id="first preset button row in the shutter curve controls (in {windowId})" functionality-id="applies the first preset curve shape (in {windowId})" intent-id="quickly apply a common curve shape (in {windowId})">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 Q7,12 7,2 Q7,12 13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 2" appearance-id="second preset button for the curve graph (in {windowId})" location-id="second preset button in the curve controls (in {windowId})" functionality-id="applies the second preset curve shape (in {windowId})" intent-id="quickly apply a common curve shape (in {windowId})">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 Q4,2 7,2 Q10,2 13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 3" appearance-id="third preset button for the curve graph (in {windowId})" location-id="third preset button in the curve controls (in {windowId})" functionality-id="applies the third preset curve shape (in {windowId})" intent-id="quickly apply a common curve shape (in {windowId})">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 L7,2 L13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 4" appearance-id="fourth preset button for the curve graph (in {windowId})" location-id="fourth preset button in the curve controls (in {windowId})" functionality-id="applies the fourth preset curve shape (in {windowId})" intent-id="quickly apply a common curve shape (in {windowId})">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 C4,12 4,2 7,2 C10,2 10,12 13,12"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444] border-r border-[#1f1f1f]" alt-id="Curve preset 5" appearance-id="fifth preset button for the curve graph (in {windowId})" location-id="fifth preset button in the curve controls (in {windowId})" functionality-id="applies the fifth preset curve shape (in {windowId})" intent-id="quickly apply a common curve shape (in {windowId})">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ccc" stroke-width="1.2"><path d="M1,12 L7,12 L7,2 L13,2"/></svg>
                            </div>
                            <div class="w-[26px] h-[22px] flex items-center justify-center cursor-pointer hover:bg-[#444]" alt-id="Curve preset 6" appearance-id="sixth preset button for the curve graph (in {windowId})" location-id="sixth preset button in the curve controls (in {windowId})" functionality-id="applies the sixth preset curve shape (in {windowId})" intent-id="quickly apply a common curve shape (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFilm} alt-id="Film accordion" appearance-id="accordion header labeled Film (in {windowId})" location-id="below the Motion Blur section in the Render tab (in {windowId})" functionality-id="toggles the Film section for film/exposure settings (in {windowId})" intent-id="configure the film response and exposure (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Film Exposure slider; value 1.00" appearance-id="numeric slider showing value 1.00 for film exposure (in {windowId})" location-id="inside the Film accordion, Film Exposure slider (in {windowId})" functionality-id="adjusts the overall exposure of the final render (in {windowId})" intent-id="tune the brightness of the rendered image (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">1.00</span>
                    </div>
                  </div>

                  <!-- Pixel Filter (Nested) -->
                  <div class="mt-1 -mx-3 -mb-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleFilmPixelFilter} alt-id="Film Pixel Filter accordion" appearance-id="sub-accordion labeled Pixel Filter inside Film (in {windowId})" location-id="inside the Film accordion, Film Pixel Filter accordion (in {windowId})" functionality-id="toggles the pixel filter settings (in {windowId})" intent-id="configure anti-aliasing filter type and size (in {windowId})">
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
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Film Pixel Filter Type dropdown; value Blackman-Harris" appearance-id="dropdown showing Blackman-Harris for pixel filter type (in {windowId})" location-id="inside the Film Pixel Filter sub-accordion, Film Pixel Filter Type dropdown (in {windowId})" functionality-id="selects the anti-aliasing filter type (in {windowId})" intent-id="choose the anti-aliasing algorithm for edges (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Blackman-Harris</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Width</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Film Pixel Filter Width slider; value 1.50 px" appearance-id="numeric slider showing value 1.50 px for pixel filter width (in {windowId})" location-id="inside the Film Pixel Filter sub-accordion, Film Pixel Filter Width slider (in {windowId})" functionality-id="sets the width of the anti-aliasing filter in pixels (in {windowId})" intent-id="control the sharpness of the anti-aliasing (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.50 px</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- Transparent (Nested) -->
                  <div class="-mx-3 -mb-3 mt-3 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleFilmTransparent} alt-id="Film Transparent accordion" appearance-id="sub-accordion labeled Transparent inside Film (in {windowId})" location-id="inside the Film accordion, Film Transparent accordion (in {windowId})" functionality-id="toggles transparent background film settings (in {windowId})" intent-id="configure rendering with a transparent background (in {windowId})">
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
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Film Transparent Glass checkbox; unchecked" appearance-id="unchecked checkbox labeled Transparent Glass in film settings (in {windowId})" location-id="inside the Film Transparent sub-accordion, Film Transparent Glass checkbox (in {windowId})" functionality-id="when checked, renders glass as transparent in the background (in {windowId})" intent-id="make glass materials appear transparent against the background (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#888] pointer-events-none">Transparent Glass</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Roughness Threshold</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] opacity-60" alt-id="Film Roughness Threshold slider; value 0.10; disabled" appearance-id="disabled numeric slider showing value 0.10 for roughness threshold (in {windowId})" location-id="inside the Film Transparent sub-accordion, Film Roughness Threshold slider (in {windowId})" functionality-id="sets the roughness threshold for transparent glass handling (in {windowId})" intent-id="control how roughness affects transparent glass materials (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePerformance} alt-id="Performance accordion" appearance-id="accordion header labeled Performance (in {windowId})" location-id="below the Film section in the Render tab (in {windowId})" functionality-id="toggles the Performance section for hardware and memory settings (in {windowId})" intent-id="optimize rendering performance (in {windowId})">
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
                    <div class="flex-1 bg-[#4772b3] border border-[#111] rounded-[3px] px-2 h-[22px] flex items-center justify-between cursor-pointer" on:click={togglePerformanceDeviceDropdown} alt-id="Performance Device dropdown; value CPU" appearance-id="dropdown showing CPU for the performance device (in {windowId})" location-id="inside the Performance accordion, for device selection (in {windowId})" functionality-id="selects the CPU as the render device (in {windowId})" intent-id="choose CPU for rendering (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">CPU</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#eee] pointer-events-none"></i>
                    </div>
                    {#if isPerformanceDeviceDropdownOpen}
                      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                        isPerformanceDeviceDropdownOpen = false; 
                        updateOpenParam(); 
                      }}></div>
                      <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="Performance Device dropdown menu" appearance-id="floating dropdown menu listing available compute devices (in {windowId})" location-id="overlaying the Performance Device dropdown when open (in {windowId})" functionality-id="shows available device options for rendering (in {windowId})" intent-id="select a specific compute device (in {windowId})">
                        <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer" alt-id="Performance Device option CPU" appearance-id="menu item labeled CPU in the Performance Device dropdown (in {windowId})" location-id="inside the Performance Device dropdown menu, Performance Device option CPU (in {windowId})" functionality-id="selects CPU as the render compute device (in {windowId})" intent-id="use the CPU for rendering (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">C</u>PU</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer" alt-id="Performance Device option GPU" appearance-id="menu item labeled GPU in the Performance Device dropdown (in {windowId})" location-id="inside the Performance Device dropdown menu, Performance Device option GPU (in {windowId})" functionality-id="selects GPU as the render compute device (in {windowId})" intent-id="use the GPU for rendering (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleBake} alt-id="Bake accordion" appearance-id="accordion header labeled Bake (in {windowId})" location-id="below the Performance section in the Render tab (in {windowId})" functionality-id="toggles the Bake section for texture baking settings (in {windowId})" intent-id="configure baking of lighting into textures (in {windowId})">
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
                  <div class="w-full flex bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] items-center justify-center relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Bake" appearance-id="Bake button to start the baking process (in {windowId})" location-id="inside the Bake accordion in the Render tab (in {windowId})" functionality-id="executes the baking operation using current settings (in {windowId})" intent-id="start baking lighting into textures (in {windowId})">
                    <i class="fa-solid fa-camera text-[12px] text-[#eee] absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                    <span class="text-[13px] text-[#eee] pointer-events-none">Bake</span>
                  </div>

                  <div class="flex items-center justify-center mt-1">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake from Multires checkbox; unchecked" appearance-id="unchecked checkbox labeled Bake from Multires (in {windowId})" location-id="inside the Bake accordion, Bake from Multires checkbox (in {windowId})" functionality-id="when checked, bakes from a multires sculpt to a low-poly mesh (in {windowId})" intent-id="bake high-res sculpt details onto a low-poly mesh (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Bake from Multires</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 relative">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Bake Type</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" on:click={toggleBakeTypeDropdown} alt-id="Bake Type dropdown; value Combined" appearance-id="dropdown showing Combined for the bake type (in {windowId})" location-id="inside the Bake accordion, Bake Type dropdown (in {windowId})" functionality-id="selects what to bake; currently set to Combined (in {windowId})" intent-id="choose which lighting pass to bake into textures (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Combined</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                    {#if isBakeTypeDropdownOpen}
                      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                        isBakeTypeDropdownOpen = false; 
                        updateOpenParam(); 
                      }}></div>
                      <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="Bake Type dropdown menu" appearance-id="floating dropdown menu listing available bake types (in {windowId})" location-id="overlaying the Bake Type dropdown when open (in {windowId})" functionality-id="shows all available bake type options (in {windowId})" intent-id="select the specific bake pass to bake (in {windowId})">
                        <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Combined" appearance-id="menu item labeled Combined in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Combined (in {windowId})" functionality-id="selects Combined bake type to bake all lighting passes (in {windowId})" intent-id="bake the full combined lighting pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">C</u>ombined</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Ambient Occlusion" appearance-id="menu item labeled Ambient Occlusion in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Ambient Occlusion (in {windowId})" functionality-id="selects Ambient Occlusion bake type (in {windowId})" intent-id="bake only the AO pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">A</u>mbient Occlusion</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Shadow" appearance-id="menu item labeled Shadow in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Shadow (in {windowId})" functionality-id="selects Shadow bake type to bake shadow maps (in {windowId})" intent-id="bake only the shadow pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">S</u>hadow</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Position" appearance-id="menu item labeled Position in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Position (in {windowId})" functionality-id="selects Position bake type to bake world positions (in {windowId})" intent-id="bake the world position pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">P</u>osition</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Normal" appearance-id="menu item labeled Normal in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Normal (in {windowId})" functionality-id="selects Normal bake type to bake normal maps (in {windowId})" intent-id="bake only the normal pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">N</u>ormal</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option UV" appearance-id="menu item labeled UV in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option UV (in {windowId})" functionality-id="selects UV bake type to bake UV layouts (in {windowId})" intent-id="bake a UV map pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">U</u>V</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Roughness" appearance-id="menu item labeled Roughness in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Roughness (in {windowId})" functionality-id="selects Roughness bake type (in {windowId})" intent-id="bake the material roughness pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">R</u>oughness</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Emission" appearance-id="menu item labeled Emission in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Emission (in {windowId})" functionality-id="selects Emission bake type (in {windowId})" intent-id="bake the emission pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">E</u>mission</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Environment" appearance-id="menu item labeled Environment in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Environment (in {windowId})" functionality-id="selects Environment bake type (in {windowId})" intent-id="bake the environment lighting pass (in {windowId})">
                          <span class="text-[13px]">En<u class="underline-offset-2 decoration-1">v</u>ironment</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Diffuse" appearance-id="menu item labeled Diffuse in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Diffuse (in {windowId})" functionality-id="selects Diffuse bake type (in {windowId})" intent-id="bake the diffuse lighting pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">D</u>iffuse</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Glossy" appearance-id="menu item labeled Glossy in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Glossy (in {windowId})" functionality-id="selects Glossy bake type (in {windowId})" intent-id="bake the glossy lighting pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">G</u>lossy</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Type option Transmission" appearance-id="menu item labeled Transmission in the Bake Type dropdown (in {windowId})" location-id="inside the Bake Type dropdown menu, Bake Type option Transmission (in {windowId})" functionality-id="selects Transmission bake type (in {windowId})" intent-id="bake the transmission lighting pass (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1">T</u>ransmission</span>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <div class="flex items-center gap-2 mt-1 relative">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">View From</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" on:click={toggleBakeViewFromDropdown} alt-id="View From dropdown; value Above Surface" appearance-id="dropdown showing Above Surface for view from direction (in {windowId})" location-id="inside the Bake Selected to Active settings (in {windowId})" functionality-id="sets the ray direction for selected-to-active baking (in {windowId})" intent-id="specify from which direction to cast bake rays (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Above Surface</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                    {#if isBakeViewFromDropdownOpen}
                      <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                        isBakeViewFromDropdownOpen = false; 
                        updateOpenParam(); 
                      }}></div>
                      <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="View From dropdown menu" appearance-id="floating dropdown menu for view from direction selection (in {windowId})" location-id="overlaying the View From dropdown when open (in {windowId})" functionality-id="shows available ray direction options for baking (in {windowId})" intent-id="select the ray direction for baking (in {windowId})">
                        <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer flex items-center gap-2" alt-id="View From option Above Surface" appearance-id="menu item labeled Above Surface in the View From dropdown (in {windowId})" location-id="inside the View From dropdown menu, View From option Above Surface (in {windowId})" functionality-id="bakes rays from above the surface normal (in {windowId})" intent-id="use above-surface direction for bake rays (in {windowId})">
                          <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">A</u>bove Surface</span>
                        </div>
                        <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="View From option Active Camera" appearance-id="menu item labeled Active Camera in the View From dropdown (in {windowId})" location-id="inside the View From dropdown menu, View From option Active Camera (in {windowId})" functionality-id="bakes rays from the active camera direction (in {windowId})" intent-id="use camera direction for bake rays (in {windowId})">
                          <span class="text-[13px]">Active <u class="underline-offset-2 decoration-1">C</u>amera</span>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
                  <!-- Influence -->
                  <div class="-mx-3 -mb-3 mt-1 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeInfluence} alt-id="Bake Influence accordion" appearance-id="sub-accordion labeled Influence inside Bake (in {windowId})" location-id="inside the Bake accordion, Bake Influence accordion (in {windowId})" functionality-id="toggles influence settings for baking passes (in {windowId})" intent-id="configure which material components contribute to the bake (in {windowId})">
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
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Direct checkbox; checked" appearance-id="checked checkbox labeled Direct in Bake Influence (in {windowId})" location-id="inside the Bake Influence sub-accordion, Bake Influence Direct checkbox (in {windowId})" functionality-id="includes direct lighting in the bake (in {windowId})" intent-id="include direct light contribution in the baked result (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Indirect checkbox; checked" appearance-id="checked checkbox labeled Indirect in Bake Influence (in {windowId})" location-id="inside the Bake Influence sub-accordion, Bake Influence Indirect checkbox (in {windowId})" functionality-id="includes indirect lighting in the bake (in {windowId})" intent-id="include indirect light contribution in the baked result (in {windowId})">
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
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Diffuse checkbox; checked" appearance-id="checked checkbox labeled Diffuse in Bake Influence (in {windowId})" location-id="inside the Bake Influence sub-accordion, Bake Influence Diffuse checkbox (in {windowId})" functionality-id="includes the diffuse component in the bake (in {windowId})" intent-id="include diffuse lighting in the baked result (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Diffuse</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Glossy checkbox; checked" appearance-id="checked checkbox labeled Glossy in Bake Influence (in {windowId})" location-id="inside the Bake Influence sub-accordion, Bake Influence Glossy checkbox (in {windowId})" functionality-id="includes glossy component in the bake (in {windowId})" intent-id="include glossy contribution in the baked result (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Glossy</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Transmission checkbox; checked" appearance-id="checked checkbox labeled Transmission in Bake Influence (in {windowId})" location-id="inside the Bake Influence sub-accordion, Bake Influence Transmission checkbox (in {windowId})" functionality-id="includes transmission component in the bake (in {windowId})" intent-id="include transmission contribution in the baked result (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Transmission</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Influence Emission checkbox; checked" appearance-id="checked checkbox labeled Emission in Bake Influence (in {windowId})" location-id="inside the Bake Influence sub-accordion, Bake Influence Emission checkbox (in {windowId})" functionality-id="includes emission in the bake (in {windowId})" intent-id="include emission contribution in the baked result (in {windowId})">
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
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeSelectedToActive} alt-id="Bake Selected to Active accordion" appearance-id="sub-accordion labeled Selected to Active inside Bake (in {windowId})" location-id="inside the Bake accordion, Bake Selected to Active accordion (in {windowId})" functionality-id="toggles settings for baking from selected objects to the active object (in {windowId})" intent-id="bake lighting from high-poly selected objects onto the active low-poly object (in {windowId})">
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
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeOutput} alt-id="Bake Output accordion" appearance-id="sub-accordion labeled Output inside Bake (in {windowId})" location-id="inside the Bake accordion, Bake Output accordion (in {windowId})" functionality-id="toggles bake output path and format settings (in {windowId})" intent-id="configure where and how to save baked textures (in {windowId})">
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
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" on:click={toggleBakeTargetDropdown} alt-id="Bake Output Target dropdown; value Active Color Attribute" appearance-id="dropdown showing Active Color Attribute for bake output target (in {windowId})" location-id="inside the Bake Output sub-accordion, Bake Output Target dropdown (in {windowId})" functionality-id="selects where to bake the result; currently Active Color Attribute (in {windowId})" intent-id="choose the output location for the baked texture (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Active Color Attribute</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                          {#if isBakeTargetDropdownOpen}
                            <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                              isBakeTargetDropdownOpen = false; 
                              updateOpenParam(); 
                            }}></div>
                            <div class="absolute top-[22px] right-0 w-[calc(100%-128px)] bg-[#1d1d1d] border border-[#333] rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-50 py-1" alt-id="Bake Output Target dropdown menu" appearance-id="floating dropdown menu for bake output target selection (in {windowId})" location-id="overlaying the Bake Output Target dropdown when open (in {windowId})" functionality-id="shows available output target options for baking (in {windowId})" intent-id="select the bake output destination (in {windowId})">
                              <div class="px-2 py-[2px] text-[#ccc] hover:bg-[#333] hover:text-white cursor-pointer flex items-center gap-2" alt-id="Bake Output Target option Image Textures" appearance-id="menu item labeled Image Textures in the bake output dropdown (in {windowId})" location-id="inside the Bake Output Target dropdown menu, Bake Output Target option Image Textures (in {windowId})" functionality-id="bakes the result into image texture maps (in {windowId})" intent-id="use image textures as bake destination (in {windowId})">
                                <span class="text-[13px]"><u class="underline-offset-2 decoration-1">I</u>mage Textures</span>
                              </div>
                              <div class="px-2 py-[2px] bg-[#4772b3] text-white cursor-pointer flex items-center gap-2" alt-id="Bake Output Target option Active Color Attribute" appearance-id="menu item labeled Active Color Attribute in the bake output dropdown (in {windowId})" location-id="inside the Bake Output Target dropdown menu, Bake Output Target option Active Color Attribute (in {windowId})" functionality-id="bakes the result into the active vertex color attribute (in {windowId})" intent-id="use vertex color attribute as bake destination (in {windowId})">
                                <span class="text-[13px]"><u class="underline-offset-2 decoration-1 text-white">A</u>ctive Color Attribute</span>
                              </div>
                            </div>
                          {/if}
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="Bake Output Clear Image checkbox; checked" appearance-id="checked checkbox labeled Clear Image in bake output settings (in {windowId})" location-id="inside the Bake Output sub-accordion, Bake Output Clear Image checkbox (in {windowId})" functionality-id="when checked, clears the target image before baking (in {windowId})" intent-id="start each bake on a clean image (in {windowId})">
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
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleBakeMargin} alt-id="Bake Margin accordion" appearance-id="sub-accordion labeled Margin inside Bake (in {windowId})" location-id="inside the Bake accordion, Bake Margin accordion (in {windowId})" functionality-id="toggles bake margin settings for padding UV seams (in {windowId})" intent-id="configure margin to prevent seam bleeding (in {windowId})">
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
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Bake Margin Type dropdown; value Adjacent Faces" appearance-id="dropdown showing Adjacent Faces for bake margin type (in {windowId})" location-id="inside the Bake Margin sub-accordion, Bake Margin Type dropdown (in {windowId})" functionality-id="selects the margin calculation method (in {windowId})" intent-id="choose how margin pixels are filled (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Adjacent Faces</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Size</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Bake Margin Size slider; value 16 px" appearance-id="numeric slider showing value 16 px for bake margin size (in {windowId})" location-id="inside the Bake Margin sub-accordion, Bake Margin Size slider (in {windowId})" functionality-id="sets the number of pixel margin around UV seams (in {windowId})" intent-id="control how much padding is added around UV islands (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleGreasePencil} alt-id="Grease Pencil accordion" appearance-id="accordion header labeled Grease Pencil in the Render tab (in {windowId})" location-id="below the Bake section in the Render tab (in {windowId})" functionality-id="toggles Grease Pencil rendering settings (in {windowId})" intent-id="configure rendering of Grease Pencil objects (in {windowId})">
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
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleGreasePencilViewport} alt-id="Grease Pencil Viewport accordion" appearance-id="sub-accordion labeled Viewport inside Grease Pencil render settings (in {windowId})" location-id="inside the Grease Pencil accordion in the Render tab, Grease Pencil Viewport accordion (in {windowId})" functionality-id="toggles viewport display settings for Grease Pencil (in {windowId})" intent-id="configure how Grease Pencil appears in the viewport (in {windowId})">
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
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Grease Pencil Viewport SMAA Threshold slider; value 1.000" appearance-id="numeric slider showing value 1.000 for viewport SMAA threshold (in {windowId})" location-id="inside the Grease Pencil Viewport sub-accordion (in {windowId})" functionality-id="sets the SMAA anti-aliasing threshold for Grease Pencil in viewport (in {windowId})" intent-id="tune anti-aliasing quality for viewport Grease Pencil (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Render -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleGreasePencilRender} alt-id="Grease Pencil Render accordion" appearance-id="sub-accordion labeled Render inside Grease Pencil settings (in {windowId})" location-id="inside the Grease Pencil accordion in the Render tab, Grease Pencil Render accordion (in {windowId})" functionality-id="toggles render-specific Grease Pencil settings (in {windowId})" intent-id="configure Grease Pencil quality for final renders (in {windowId})">
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
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Grease Pencil Render SMAA Threshold slider; value 1.000" appearance-id="numeric slider showing value 1.000 for render SMAA threshold (in {windowId})" location-id="inside the Grease Pencil Render sub-accordion, Grease Pencil Render SMAA Threshold slider (in {windowId})" functionality-id="sets the SMAA anti-aliasing threshold for Grease Pencil in renders (in {windowId})" intent-id="tune anti-aliasing quality for rendered Grease Pencil (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">SSAA Samples</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Grease Pencil Render SSAA Samples slider; value 1" appearance-id="numeric slider showing value 1 for render SSAA samples (in {windowId})" location-id="inside the Grease Pencil Render sub-accordion, Grease Pencil Render SSAA Samples slider (in {windowId})" functionality-id="sets the number of SSAA samples for Grease Pencil rendering (in {windowId})" intent-id="control Grease Pencil render quality with super-sampling (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Motion Blur Steps</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] opacity-60" alt-id="Grease Pencil Render Motion Blur Steps slider; value 0; disabled" appearance-id="disabled numeric slider showing value 0 for motion blur steps (in {windowId})" location-id="inside the Grease Pencil Render sub-accordion, Grease Pencil Render Motion Blur Steps slider (in {windowId})" functionality-id="sets the motion blur steps for Grease Pencil rendering (in {windowId})" intent-id="configure motion blur quality for Grease Pencil (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFreestyle} alt-id="Freestyle accordion" appearance-id="accordion header labeled Freestyle in the Render tab (in {windowId})" location-id="below the Grease Pencil section in the Render tab (in {windowId})" functionality-id="toggles the Freestyle non-photorealistic rendering section (in {windowId})" intent-id="configure Freestyle line art rendering (in {windowId})">
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
                        alt-id="Freestyle Line Thickness Mode: Absolute; {isFreestyleLineThicknessModeAbsolute ? 'selected' : 'unselected'}" appearance-id="toggle button for Absolute line thickness mode (in {windowId})" location-id="inside the Freestyle accordion, as one of two mode toggles, Freestyle Line Thickness Mode: Absolute (in {windowId})" functionality-id="sets line thickness measurement to Absolute pixel units (in {windowId})" intent-id="use fixed pixel units for Freestyle line thickness (in {windowId})"
                      >
                        <span class="text-[13px] {isFreestyleLineThicknessModeAbsolute ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Absolute</span>
                      </div>
                      <div 
                        class="flex-1 flex items-center justify-center cursor-pointer {!isFreestyleLineThicknessModeAbsolute ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}"
                        on:click={() => setFreestyleLineThicknessMode(false)}
                        alt-id="Freestyle Line Thickness Mode: Relative; {!isFreestyleLineThicknessModeAbsolute ? 'selected' : 'unselected'}" appearance-id="toggle button for Relative line thickness mode (in {windowId})" location-id="inside the Freestyle accordion, as one of two mode toggles, Freestyle Line Thickness Mode: Relative (in {windowId})" functionality-id="sets line thickness measurement to Relative viewport-scaled units (in {windowId})" intent-id="use viewport-relative units for Freestyle line thickness (in {windowId})"
                      >
                        <span class="text-[13px] {!isFreestyleLineThicknessModeAbsolute ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Relative</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Line Thickness</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Freestyle Line Thickness slider; value 1.000 px" appearance-id="numeric slider showing value 1.000 px for line thickness (in {windowId})" location-id="inside the Freestyle accordion (in {windowId})" functionality-id="sets the base thickness of Freestyle rendered lines (in {windowId})" intent-id="control how thick Freestyle lines appear in renders (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">1.000 px</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Color Management -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleColorManagement} alt-id="Color Management accordion" appearance-id="accordion header labeled Color Management (in {windowId})" location-id="below the Freestyle section in the Render tab (in {windowId})" functionality-id="toggles the Color Management section for display and output color settings (in {windowId})" intent-id="configure how colors are processed and displayed (in {windowId})">
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
                      <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Display dropdown; value sRGB" appearance-id="dropdown showing sRGB for the display device (in {windowId})" location-id="inside the Color Management accordion, Color Management Display dropdown (in {windowId})" functionality-id="selects the display device color profile (in {windowId})" intent-id="match rendering to the connected monitor profile (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">sRGB</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Exposure</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Color Management Exposure slider; value 0.000" appearance-id="numeric slider showing value 0.000 for exposure (in {windowId})" location-id="inside the Color Management accordion, Color Management Exposure slider (in {windowId})" functionality-id="adjusts the exposure offset for the display transform (in {windowId})" intent-id="brighten or darken the displayed image (in {windowId})">
                        <div class="h-full bg-[#4772b3] w-1/2 absolute left-0 top-0"></div>
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">0.000</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">View</span>
                      <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management View dropdown; value Filmic" appearance-id="dropdown showing Filmic for the view transform (in {windowId})" location-id="inside the Color Management accordion, Color Management View dropdown (in {windowId})" functionality-id="selects the view transform; currently Filmic (in {windowId})" intent-id="choose how HDR scene linear values are mapped to display (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">Filmic</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Gamma</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Color Management Gamma slider; value 1.000" appearance-id="numeric slider showing value 1.000 for gamma (in {windowId})" location-id="inside the Color Management accordion, Color Management Gamma slider (in {windowId})" functionality-id="adjusts the gamma correction for display (in {windowId})" intent-id="fine-tune the tonal response curve (in {windowId})">
                        <div class="h-full bg-[#4772b3] w-[25%] absolute left-0 top-0"></div>
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">1.000</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[80px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Look</span>
                      <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Look dropdown; value None" appearance-id="dropdown showing None for the look preset (in {windowId})" location-id="inside the Color Management accordion, Color Management Look dropdown (in {windowId})" functionality-id="selects a stylistic look preset applied on top of the view transform (in {windowId})" intent-id="apply a creative grading look to renders (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">None</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                      </div>
                    </div>
                  </div>

                  <!-- Curves -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementCurves} alt-id="Color Management Curves accordion" appearance-id="sub-accordion labeled Curves inside Color Management (in {windowId})" location-id="inside the Color Management accordion, Color Management Curves accordion (in {windowId})" functionality-id="toggles the color curves editor for fine color grading (in {windowId})" intent-id="apply custom color curves to the render output (in {windowId})">
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
                    <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementWhiteBalance} alt-id="Color Management White Balance accordion" appearance-id="sub-accordion labeled White Balance inside Color Management (in {windowId})" location-id="inside the Color Management accordion, Color Management White Balance accordion (in {windowId})" functionality-id="toggles white balance adjustment controls (in {windowId})" intent-id="correct or stylize the color temperature (in {windowId})">
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
                        <i class="fa-solid fa-sliders text-[12px] hover:text-white cursor-pointer" alt-id="Color Management White Balance sliders button" appearance-id="small button to switch to manual white balance sliders (in {windowId})" location-id="inside the Color Management White Balance sub-accordion, Color Management White Balance sliders button (in {windowId})" functionality-id="switches between eyedropper and manual slider controls for white balance (in {windowId})" intent-id="toggle between auto and manual white balance input (in {windowId})"></i>
                        <i class="fa-solid fa-eye-dropper text-[12px] hover:text-white cursor-pointer" alt-id="Color Management White Balance eyedropper button" appearance-id="small eyedropper icon button in the white balance controls (in {windowId})" location-id="inside the Color Management White Balance sub-accordion, Color Management White Balance eyedropper button (in {windowId})" functionality-id="picks a reference white color from the render for white balance (in {windowId})" intent-id="use a neutral point in the image to set white balance (in {windowId})"></i>
                      </div>
                    </div>
                    {#if isColorManagementWhiteBalanceExpanded}
                      <div class="flex flex-col gap-2 p-3 pt-2 bg-[#333]">
                        <div class="flex items-center gap-2">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#888] pointer-events-none">Temperature</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] opacity-60" alt-id="Color Management White Balance Temperature slider; value 6500 K; disabled" appearance-id="disabled numeric slider showing value 6500 K for temperature (in {windowId})" location-id="inside the Color Management White Balance sub-accordion, Color Management White Balance Temperature slider (in {windowId})" functionality-id="sets the white balance color temperature in Kelvin (in {windowId})" intent-id="adjust the warmth or coolness of the render (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">6500 K</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Tint</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Color Management White Balance Tint slider; value 10.0" appearance-id="numeric slider showing value 10.0 for tint (in {windowId})" location-id="inside the Color Management White Balance sub-accordion, Color Management White Balance Tint slider (in {windowId})" functionality-id="adjusts the green-magenta tint for white balance (in {windowId})" intent-id="fine-tune the green-magenta balance of white (in {windowId})">
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
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementWorkingSpace} alt-id="Color Management Working Space accordion" appearance-id="sub-accordion labeled Working Space inside Color Management (in {windowId})" location-id="inside the Color Management accordion, Color Management Working Space accordion (in {windowId})" functionality-id="toggles settings for the working color space (in {windowId})" intent-id="configure which color space is used for intermediate calculations (in {windowId})">
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
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Working Space File dropdown; value Linear Rec.709" appearance-id="dropdown showing Linear Rec.709 for file working space (in {windowId})" location-id="inside the Color Management Working Space sub-accordion, Color Management Working Space File dropdown (in {windowId})" functionality-id="sets the color space used when reading and writing files (in {windowId})" intent-id="choose the file interchange color space (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Linear Rec.709</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Sequencer</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Working Space Sequencer dropdown; value sRGB" appearance-id="dropdown showing sRGB for sequencer working space (in {windowId})" location-id="inside the Color Management Working Space sub-accordion, Color Management Working Space Sequencer dropdown (in {windowId})" functionality-id="sets the color space used in the Video Sequencer (in {windowId})" intent-id="choose the sequencer color space (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">sRGB</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Advanced -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden rounded-b-[5px]">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleColorManagementAdvanced} alt-id="Color Management Advanced accordion" appearance-id="sub-accordion labeled Advanced inside Color Management (in {windowId})" location-id="inside the Color Management accordion, Color Management Advanced accordion (in {windowId})" functionality-id="toggles advanced color management settings (in {windowId})" intent-id="access less common color management options (in {windowId})">
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
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Color Management Advanced Display Emulation dropdown; value Automatic" appearance-id="dropdown showing Automatic for display emulation (in {windowId})" location-id="inside the Color Management Advanced sub-accordion (in {windowId})" functionality-id="sets the display emulation mode (in {windowId})" intent-id="configure how the display device is emulated (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFormat} alt-id="Format accordion" appearance-id="accordion header labeled Format in the Output tab (in {windowId})" location-id="top of the Output tab content area (in {windowId})" functionality-id="toggles the Format section for render format settings (in {windowId})" intent-id="configure the output image or video format (in {windowId})">
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
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Resolution X slider; value 1024 px" appearance-id="numeric slider showing value 1024 px for horizontal resolution (in {windowId})" location-id="inside the Format accordion, Resolution X row (in {windowId})" functionality-id="sets the horizontal pixel resolution of the render output (in {windowId})" intent-id="define the width of rendered images (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1024 px</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Resolution Y slider; value 1024 px" appearance-id="numeric slider showing value 1024 px for vertical resolution (in {windowId})" location-id="inside the Format accordion, Resolution Y row (in {windowId})" functionality-id="sets the vertical pixel resolution of the render output (in {windowId})" intent-id="define the height of rendered images (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1024 px</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">%</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Resolution % slider; value 200%" appearance-id="numeric slider showing value 200% for resolution scale (in {windowId})" location-id="inside the Format accordion, Resolution Scale row (in {windowId})" functionality-id="scales the final render resolution by this percentage (in {windowId})" intent-id="quickly halve or double the render size (in {windowId})">
                        <div class="h-full bg-[#4772b3] w-full absolute left-0 top-0"></div>
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">200%</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Aspect X</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Aspect X slider; value 1.000" appearance-id="numeric slider showing value 1.000 for X pixel aspect (in {windowId})" location-id="inside the Format accordion, Aspect X row (in {windowId})" functionality-id="sets the horizontal pixel aspect ratio (in {windowId})" intent-id="correct for non-square pixels in X (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Aspect Y slider; value 1.000" appearance-id="numeric slider showing value 1.000 for Y pixel aspect (in {windowId})" location-id="inside the Format accordion, Aspect Y row (in {windowId})" functionality-id="sets the vertical pixel aspect ratio (in {windowId})" intent-id="correct for non-square pixels in Y (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-1 mt-1">
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Render Region checkbox; unchecked" appearance-id="unchecked checkbox labeled Render Region in format settings (in {windowId})" location-id="inside the Format accordion, Render Region checkbox row (in {windowId})" functionality-id="when checked, limits the render to a user-defined region (in {windowId})" intent-id="render only a portion of the full frame (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#888] pointer-events-none">Render Region</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                      <div class="flex items-center gap-2 cursor-default opacity-60" alt-id="Crop to Render Region checkbox; unchecked; disabled" appearance-id="disabled unchecked checkbox labeled Crop to Render Region (in {windowId})" location-id="inside the Format accordion, next to the Render Region checkbox (in {windowId})" functionality-id="when checked, crops the output to the render region size (in {windowId})" intent-id="match output resolution to the render region (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#888] pointer-events-none">Crop to Render Region</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Frame Rate</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Frame Rate dropdown; value 24 fps" appearance-id="dropdown showing 24 fps for the frame rate (in {windowId})" location-id="inside the Format accordion, Frame Rate dropdown row (in {windowId})" functionality-id="sets the playback frame rate for the rendered animation (in {windowId})" intent-id="define how many frames per second the animation plays at (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">24 fps</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Frame Range -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFrameRange} alt-id="Frame Range accordion" appearance-id="accordion header labeled Frame Range in the Output tab (in {windowId})" location-id="below the Output section in the Output tab (in {windowId})" functionality-id="toggles the frame range settings for animation rendering (in {windowId})" intent-id="define the start and end frames of the render (in {windowId})">
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
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Frame Start slider; value 1" appearance-id="numeric slider showing value 1 for the start frame (in {windowId})" location-id="inside the Frame Range accordion, Frame Start row (in {windowId})" functionality-id="sets the first frame number of the render range (in {windowId})" intent-id="define where the rendered animation begins (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">End</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Frame End slider; value 10000" appearance-id="numeric slider showing value 10000 for the end frame (in {windowId})" location-id="inside the Frame Range accordion, Frame End row (in {windowId})" functionality-id="sets the last frame number of the render range (in {windowId})" intent-id="define where the rendered animation ends (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">10000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Step</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Frame Step slider; value 1" appearance-id="numeric slider showing value 1 for the frame step (in {windowId})" location-id="inside the Frame Range accordion, Frame Step row (in {windowId})" functionality-id="sets how many frames to skip between rendered frames (in {windowId})" intent-id="reduce render time by skipping frames (in {windowId})">
                        <span class="text-[13px] text-[#eee] pointer-events-none">1</span>
                      </div>
                    </div>
                  </div>

                  <!-- Time Stretching -->
                  <div class="-mx-3 -mb-3 mt-1 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleTimeStretching} alt-id="Time Stretching accordion" appearance-id="accordion header labeled Time Stretching in the Output tab (in {windowId})" location-id="inside the Output tab, below Frame Range (in {windowId})" functionality-id="toggles time stretching settings for animation speed (in {windowId})" intent-id="retime the animation by adjusting frame mapping (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleStereoscopy} alt-id="Stereoscopy accordion" appearance-id="accordion header labeled Stereoscopy in the Output tab (in {windowId})" location-id="inside the Output tab, below the Format accordion (in {windowId})" functionality-id="toggles stereoscopic 3D output settings (in {windowId})" intent-id="configure side-by-side or anaglyph 3D rendering (in {windowId})">
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
                      alt-id="Stereoscopy Mode: Stereo 3D; {isStereoscopyStereo3D ? 'selected' : 'unselected'}" appearance-id="toggle button for Stereo 3D mode (in {windowId})" location-id="inside the Stereoscopy accordion, Stereoscopy Mode: Stereo 3D (in {windowId})" functionality-id="selects Stereo 3D as the stereoscopic output mode (in {windowId})" intent-id="output rendered frames as stereoscopic 3D (in {windowId})"
                    >
                      <span class="text-[13px] {isStereoscopyStereo3D ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Stereo 3D</span>
                    </div>
                    <div 
                      class="flex-1 flex items-center justify-center cursor-pointer {!isStereoscopyStereo3D ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}"
                      on:click={() => setStereoscopyStereo3D(false)}
                      alt-id="Stereoscopy Mode: Multi-View; {!isStereoscopyStereo3D ? 'selected' : 'unselected'}" appearance-id="toggle button for Multi-View mode (in {windowId})" location-id="inside the Stereoscopy accordion, Stereoscopy Mode: Multi-View (in {windowId})" functionality-id="selects Multi-View as the stereoscopic output mode (in {windowId})" intent-id="output rendered frames as separate multi-view images (in {windowId})"
                    >
                      <span class="text-[13px] {!isStereoscopyStereo3D ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Multi-View</span>
                    </div>
                  </div>

                  <div class="flex flex-col bg-[#1d1d1d] border border-[#111] rounded-[3px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden mt-1">
                    <div class="flex items-center justify-between px-2 py-1 bg-[#4772b3] cursor-pointer" alt-id="Stereoscopy Left Camera item; checked" appearance-id="checked item for the left camera in stereoscopy settings (in {windowId})" location-id="inside the Stereoscopy accordion, Stereoscopy Left Camera item (in {windowId})" functionality-id="enables rendering from the left camera for stereoscopy (in {windowId})" intent-id="include the left eye view in stereoscopic renders (in {windowId})">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-camera text-[12px] text-white"></i>
                        <span class="text-[13px] text-white">left</span>
                      </div>
                      <div class="w-[14px] h-[14px] bg-[#3a5d91] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                    </div>
                    <div class="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-[#333]" alt-id="Stereoscopy Right Camera item; checked" appearance-id="checked item for the right camera in stereoscopy settings (in {windowId})" location-id="inside the Stereoscopy accordion, Stereoscopy Right Camera item (in {windowId})" functionality-id="enables rendering from the right camera for stereoscopy (in {windowId})" intent-id="include the right eye view in stereoscopic renders (in {windowId})">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-camera text-[12px] text-[#ccc]"></i>
                        <span class="text-[13px] text-[#eee]">right</span>
                      </div>
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                    </div>
                    <div class="flex items-center justify-center py-[2px] bg-[#282828] border-t border-[#111] cursor-pointer hover:bg-[#333]" alt-id=".." appearance-id="breadcrumb navigation dots indicating a parent path (in {windowId})" location-id="in a Properties tab breadcrumbs area (in {windowId})" functionality-id="represents a parent or ancestor level in the breadcrumb path (in {windowId})" intent-id="navigate up to a parent level in the property hierarchy (in {windowId})">
                      <span class="text-[14px] font-bold text-[#ccc] leading-none mb-1">..</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">File Suffix</span>
                    <div class="flex-1 bg-[#1d1d1d] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-text" alt-id="File Suffix input; value _L" appearance-id="text input showing _L for the file suffix (in {windowId})" location-id="inside the Output accordion, File Suffix input (in {windowId})" functionality-id="appends a suffix to rendered file names (in {windowId})" intent-id="differentiate multiple render outputs by suffix (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">_L</span>
                      <span class="w-[1px] h-[14px] bg-white ml-[1px] animate-pulse"></span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Output -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleOutput} alt-id="Output accordion" appearance-id="accordion header labeled Output in the Output tab (in {windowId})" location-id="below the Stereoscopy section in the Output tab (in {windowId})" functionality-id="toggles the output path, format, and color settings (in {windowId})" intent-id="configure where and how to save the rendered output (in {windowId})">
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
                    <div class="flex-1 bg-[#1d1d1d] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-text" alt-id="Output Path input; value //" appearance-id="text input showing // for the output file path (in {windowId})" location-id="inside the Output accordion, Output Path input (in {windowId})" functionality-id="sets the file path where rendered frames are saved (in {windowId})" intent-id="specify the directory and filename for render output (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">//</span>
                    </div>
                    <i class="fa-solid fa-folder text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Browse Output Path button" appearance-id="small folder icon button next to the output path input (in {windowId})" location-id="inside the Output accordion, next to the path input (in {windowId})" functionality-id="opens a file browser to select the render output path (in {windowId})" intent-id="navigate to a directory for saving renders (in {windowId})"></i>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Saving</span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Saving File Extensions checkbox; checked" appearance-id="checked checkbox labeled File Extensions (in {windowId})" location-id="inside the Output accordion, Saving File Extensions checkbox (in {windowId})" functionality-id="when checked, automatically adds file extensions to saved files (in {windowId})" intent-id="ensure output files have proper file extensions (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">File Extensions</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Cache Result checkbox; unchecked" appearance-id="unchecked checkbox labeled Cache Result (in {windowId})" location-id="inside the Animation accordion, Cache Result checkbox (in {windowId})" functionality-id="when checked, caches simulation results for faster playback (in {windowId})" intent-id="cache physics or simulation results (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Cache Result</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Media Type</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Media Type dropdown; value Image" appearance-id="dropdown showing Image for the media type (in {windowId})" location-id="inside the Output accordion, Media Type dropdown (in {windowId})" functionality-id="selects the media type for output (in {windowId})" intent-id="choose between image and video output format (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Image</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">File Format</span>
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="File Format dropdown; value PNG (.png)" appearance-id="dropdown showing PNG (.png) for the output file format (in {windowId})" location-id="inside the Output accordion, File Format dropdown (in {windowId})" functionality-id="selects the file format for saving rendered images (in {windowId})" intent-id="choose image or video format for render output (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">PNG (.png)</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color</span>
                    <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                      <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorBW ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColor(true, false, false)} alt-id="Output Color BW toggle; {isOutputColorBW ? 'selected' : 'unselected'}" appearance-id="toggle button labeled BW for black and white output (in {windowId})" location-id="inside the Output accordion, in the color channel group, Output Color BW toggle (in {windowId})" functionality-id="sets the output color channels to black and white (in {windowId})" intent-id="render in grayscale for single-channel output (in {windowId})">
                        <span class="text-[13px] {isOutputColorBW ? 'text-white' : 'text-[#ccc]'} pointer-events-none">BW</span>
                      </div>
                      <div class="flex-1 flex items-center justify-center cursor-pointer border-l border-r border-[#222] {isOutputColorRGB ? 'bg-[#4772b3] border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColor(false, true, false)} alt-id="Output Color RGB toggle; {isOutputColorRGB ? 'selected' : 'unselected'}" appearance-id="toggle button labeled RGB for color output without alpha (in {windowId})" location-id="inside the Output accordion, in the color channel group, Output Color RGB toggle (in {windowId})" functionality-id="sets the output color channels to RGB (in {windowId})" intent-id="render with color channels but no transparency (in {windowId})">
                        <span class="text-[13px] {isOutputColorRGB ? 'text-white' : 'text-[#ccc]'} pointer-events-none">RGB</span>
                      </div>
                      <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorRGBA ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColor(false, false, true)} alt-id="Output Color RGBA toggle; {isOutputColorRGBA ? 'selected' : 'unselected'}" appearance-id="selected toggle button labeled RGBA for color with alpha output (in {windowId})" location-id="inside the Output accordion, in the color channel group, Output Color RGBA toggle (in {windowId})" functionality-id="sets the output color channels to RGBA including transparency (in {windowId})" intent-id="render with color and alpha channels (in {windowId})">
                        <span class="text-[13px] {isOutputColorRGBA ? 'text-white' : 'text-[#ccc]'} pointer-events-none">RGBA</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Color Depth</span>
                    <div class="flex-1 flex bg-[#3d3d3d] border border-[#222] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden h-[22px]">
                      <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorDepth8 ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorDepth(true)} alt-id="Output Color Depth 8 toggle; {isOutputColorDepth8 ? 'selected' : 'unselected'}" appearance-id="selected toggle button labeled 8 for 8-bit color depth (in {windowId})" location-id="inside the Output accordion, in the bit depth group, Output Color Depth 8 toggle (in {windowId})" functionality-id="sets the output to 8-bit per channel color depth (in {windowId})" intent-id="use standard 8-bit color for smaller file sizes (in {windowId})">
                        <span class="text-[13px] {isOutputColorDepth8 ? 'text-white' : 'text-[#ccc]'} pointer-events-none">8</span>
                      </div>
                      <div class="flex-1 flex items-center justify-center cursor-pointer {!isOutputColorDepth8 ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorDepth(false)} alt-id="Output Color Depth 16 toggle; {!isOutputColorDepth8 ? 'selected' : 'unselected'}" appearance-id="toggle button labeled 16 for 16-bit color depth (in {windowId})" location-id="inside the Output accordion, in the bit depth group, Output Color Depth 16 toggle (in {windowId})" functionality-id="sets the output to 16-bit per channel color depth (in {windowId})" intent-id="use 16-bit color for higher dynamic range output (in {windowId})">
                        <span class="text-[13px] {!isOutputColorDepth8 ? 'text-white' : 'text-[#ccc]'} pointer-events-none">16</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Compression</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Compression slider; value 15%" appearance-id="numeric slider showing value 15% for file compression (in {windowId})" location-id="inside the Output accordion, Compression slider (in {windowId})" functionality-id="sets the compression level for the output file format (in {windowId})" intent-id="balance file size against save/load speed (in {windowId})">
                      <div class="h-full bg-[#4772b3] w-[15%] absolute left-0 top-0"></div>
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">15%</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Image Sequence</span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Image Sequence Overwrite checkbox; checked" appearance-id="checked checkbox labeled Overwrite for image sequence settings (in {windowId})" location-id="inside the Output accordion, Image Sequence Overwrite checkbox (in {windowId})" functionality-id="when checked, overwrites existing files when rendering (in {windowId})" intent-id="allow rendering to replace previously saved frames (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">Overwrite</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Image Sequence Placeholders checkbox; unchecked" appearance-id="unchecked checkbox labeled Placeholders for image sequence (in {windowId})" location-id="inside the Output accordion, Image Sequence Placeholders checkbox (in {windowId})" functionality-id="when checked, creates placeholder files for frames not yet rendered (in {windowId})" intent-id="reserve file slots for parallel rendering (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Placeholders</span>
                    </div>
                  </div>

                  <!-- Color Management -->
                  <div class="-mx-3 -mb-3 mt-1 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleOutputColorManagement} alt-id="Output Color Management accordion" appearance-id="sub-accordion labeled Color Management inside Output (in {windowId})" location-id="inside the Output accordion, Output Color Management accordion (in {windowId})" functionality-id="toggles color management override settings for output (in {windowId})" intent-id="override the scene color management for output files (in {windowId})">
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
                            <div class="flex-1 flex items-center justify-center cursor-pointer {isOutputColorManagementFollowScene ? 'bg-[#4772b3] border-r border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorManagementFollowScene(true)} alt-id="Output Color Management Follow Scene toggle; {isOutputColorManagementFollowScene ? 'selected' : 'unselected'}" appearance-id="selected toggle button labeled Follow Scene (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Follow Scene toggle (in {windowId})" functionality-id="sets output color management to follow scene settings (in {windowId})" intent-id="inherit color management from the scene settings (in {windowId})">
                              <span class="text-[13px] {isOutputColorManagementFollowScene ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Follow Scene</span>
                            </div>
                            <div class="flex-1 flex items-center justify-center cursor-pointer {!isOutputColorManagementFollowScene ? 'bg-[#4772b3] border-l border-[#333]' : 'hover:bg-[#4d4d4d]'}" on:click={() => setOutputColorManagementFollowScene(false)} alt-id="Output Color Management Override toggle; {!isOutputColorManagementFollowScene ? 'selected' : 'unselected'}" appearance-id="toggle button labeled Override (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Override toggle (in {windowId})" functionality-id="enables custom color management settings for output, overriding scene (in {windowId})" intent-id="use custom color management independent of the scene (in {windowId})">
                              <span class="text-[13px] {!isOutputColorManagementFollowScene ? 'text-white' : 'text-[#ccc]'} pointer-events-none">Override</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Display</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default" alt-id="Output Color Management Display dropdown; value sRGB; disabled" appearance-id="disabled dropdown showing sRGB for output color management display (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Display dropdown (in {windowId})" functionality-id="sets the display device for color management output (disabled when following scene) (in {windowId})" intent-id="configure output display color profile (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">sRGB</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">View</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default" alt-id="Output Color Management View dropdown; value Filmic; disabled" appearance-id="disabled dropdown showing Filmic for output color management view (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management View dropdown (in {windowId})" functionality-id="sets the view transform for output (disabled when following scene) (in {windowId})" intent-id="configure output view transform (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">Filmic</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Look</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-default" alt-id="Output Color Management Look dropdown; value None; disabled" appearance-id="disabled dropdown showing None for output look (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Look dropdown (in {windowId})" functionality-id="sets the look preset for output (disabled when following scene) (in {windowId})" intent-id="apply a stylistic look to output (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">None</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Exposure</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Output Color Management Exposure slider; value 0.000; disabled" appearance-id="disabled numeric slider for output exposure (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Exposure slider (in {windowId})" functionality-id="sets output exposure offset (disabled when following scene) (in {windowId})" intent-id="adjust output image brightness (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">0.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Gamma</span>
                          <div class="flex-1 bg-[#3d3d3d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-default shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Output Color Management Gamma slider; value 1.000; disabled" appearance-id="disabled numeric slider for output gamma (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Gamma slider (in {windowId})" functionality-id="sets output gamma correction (disabled when following scene) (in {windowId})" intent-id="adjust output tonal response (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">1.000</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-default" alt-id="Output Color Management Use Curves checkbox; unchecked; disabled" appearance-id="disabled unchecked checkbox for output color curves (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Use Curves checkbox (in {windowId})" functionality-id="when enabled, applies color curves to output (disabled when following scene) (in {windowId})" intent-id="apply curve color grading to output (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Use Curves</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 opacity-50">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                          <div class="flex items-center gap-2 cursor-default" alt-id="Output Color Management Use White Balance checkbox; unchecked; disabled" appearance-id="disabled unchecked checkbox for output white balance (in {windowId})" location-id="inside the Output Color Management sub-accordion, Output Color Management Use White Balance checkbox (in {windowId})" functionality-id="when enabled, applies white balance to output (disabled when following scene) (in {windowId})" intent-id="apply white balance correction to output (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Use White Balance</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Pixel Density -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleOutputPixelDensity} alt-id="Output Pixel Density accordion" appearance-id="sub-accordion labeled Pixel Density inside Output (in {windowId})" location-id="inside the Output accordion, Output Pixel Density accordion (in {windowId})" functionality-id="toggles pixel density settings for print output (in {windowId})" intent-id="configure DPI for print-ready renders (in {windowId})">
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
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Output Pixel Density Pixels slider; value 72.00" appearance-id="numeric slider showing value 72.00 for pixel density (in {windowId})" location-id="inside the Output Pixel Density sub-accordion, Output Pixel Density Pixels slider (in {windowId})" functionality-id="sets the pixel density (DPI) for print output (in {windowId})" intent-id="specify the resolution for print purposes (in {windowId})">
                            <span class="text-[13px] text-[#eee] pointer-events-none">72.00</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Unit</span>
                          <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Output Pixel Density Unit dropdown; value Pixels/Inch" appearance-id="dropdown showing Pixels/Inch for pixel density unit (in {windowId})" location-id="inside the Output Pixel Density sub-accordion, Output Pixel Density Unit dropdown (in {windowId})" functionality-id="selects the pixel density unit (in {windowId})" intent-id="choose between pixels per inch or per cm (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMetadata} alt-id="Metadata accordion" appearance-id="accordion header labeled Metadata in the Output tab (in {windowId})" location-id="below the Frame Range section in the Output tab (in {windowId})" functionality-id="toggles metadata settings for information embedded in renders (in {windowId})" intent-id="configure metadata fields added to rendered images (in {windowId})">
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
                    <div class="flex-1 bg-[#282828] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer" alt-id="Metadata Input dropdown; value Scene" appearance-id="dropdown showing Scene for metadata input source (in {windowId})" location-id="inside the Metadata accordion, Metadata Input dropdown (in {windowId})" functionality-id="selects the data source for embedded metadata (in {windowId})" intent-id="choose where metadata values come from (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">Scene</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#a0a0a0] pointer-events-none"></i>
                    </div>
                  </div>

                  <div class="flex items-start gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px] pointer-events-none">Include</span>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Date checkbox; checked" appearance-id="checked checkbox labeled Date in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Date checkbox (in {windowId})" functionality-id="when checked, embeds the render date in metadata (in {windowId})" intent-id="record the render date in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Date</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Time checkbox; checked" appearance-id="checked checkbox labeled Time in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Time checkbox (in {windowId})" functionality-id="when checked, embeds the render time in metadata (in {windowId})" intent-id="record the render time in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Time</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Render Time checkbox; checked" appearance-id="checked checkbox labeled Render Time in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Render Time checkbox (in {windowId})" functionality-id="when checked, embeds the render duration in metadata (in {windowId})" intent-id="record how long the render took in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Render Time</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Frame checkbox; checked" appearance-id="checked checkbox labeled Frame in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Frame checkbox (in {windowId})" functionality-id="when checked, embeds the frame number in metadata (in {windowId})" intent-id="record the frame number in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Frame</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Frame Range checkbox; unchecked" appearance-id="unchecked checkbox labeled Frame Range in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Frame Range checkbox (in {windowId})" functionality-id="when checked, embeds the frame range in metadata (in {windowId})" intent-id="record the animation frame range in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Frame Range</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Memory checkbox; checked" appearance-id="checked checkbox labeled Memory in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Memory checkbox (in {windowId})" functionality-id="when checked, embeds memory usage in metadata (in {windowId})" intent-id="record RAM usage in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Memory</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Hostname checkbox; unchecked" appearance-id="unchecked checkbox labeled Hostname in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Hostname checkbox (in {windowId})" functionality-id="when checked, embeds the computer hostname in metadata (in {windowId})" intent-id="record which machine rendered the output (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Hostname</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Camera checkbox; checked" appearance-id="checked checkbox labeled Camera in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Camera checkbox (in {windowId})" functionality-id="when checked, embeds the camera name in metadata (in {windowId})" intent-id="record which camera was used for the render (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Camera</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Lens checkbox; unchecked" appearance-id="unchecked checkbox labeled Lens in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Lens checkbox (in {windowId})" functionality-id="when checked, embeds the lens focal length in metadata (in {windowId})" intent-id="record the camera focal length in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Lens</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Scene checkbox; checked" appearance-id="checked checkbox labeled Scene in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Scene checkbox (in {windowId})" functionality-id="when checked, embeds the scene name in metadata (in {windowId})" intent-id="record which scene was rendered (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Scene</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Marker checkbox; unchecked" appearance-id="unchecked checkbox labeled Marker in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Marker checkbox (in {windowId})" functionality-id="when checked, embeds the nearest timeline marker in metadata (in {windowId})" intent-id="record timeline marker information in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Marker</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Filename checkbox; checked" appearance-id="checked checkbox labeled Filename in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Filename checkbox (in {windowId})" functionality-id="when checked, embeds the filename in render metadata (in {windowId})" intent-id="add the output filename to rendered image metadata (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Filename</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Metadata Include Strip Name checkbox; unchecked" appearance-id="unchecked checkbox labeled Strip Name in metadata include options (in {windowId})" location-id="inside the Metadata accordion, Metadata Include Strip Name checkbox (in {windowId})" functionality-id="when checked, embeds the sequencer strip name in metadata (in {windowId})" intent-id="record the sequencer strip in output files (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Strip Name</span>
                      </div>
                    </div>
                  </div>

                  <!-- Note -->
                  <div class="-mx-3 -mb-3 mt-3 border-t border-[#1f1f1f] flex flex-col overflow-hidden">
                    <div class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-[#333]" on:click={toggleMetadataNote} alt-id="Metadata Note accordion" appearance-id="sub-accordion labeled Note inside Metadata (in {windowId})" location-id="inside the Metadata accordion, Metadata Note accordion (in {windowId})" functionality-id="toggles the metadata note input field (in {windowId})" intent-id="add a custom text note to render metadata (in {windowId})">
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
                        <div class="flex-1 bg-[#1d1d1d] border border-[#111] border-b-[#333] border-r-[#333] rounded-[3px] px-2 h-[22px] flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-text" alt-id="Metadata Note input" appearance-id="text input for the metadata note (in {windowId})" location-id="inside the Metadata Note sub-accordion (in {windowId})" functionality-id="allows entering a custom text note for render metadata (in {windowId})" intent-id="embed a custom annotation in rendered output (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleBurnIntoImage} alt-id="Burn Into Image accordion" appearance-id="accordion header labeled Burn Into Image in the Output tab (in {windowId})" location-id="below the Metadata section in the Output tab (in {windowId})" functionality-id="toggles the Burn Into Image section for overlaying metadata on renders (in {windowId})" intent-id="visually embed metadata text directly on rendered images (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center justify-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]" alt-id="Burn Into Image Font Size slider; value 12 px" appearance-id="numeric slider showing value 12 px for burn-in font size (in {windowId})" location-id="inside the Burn Into Image accordion, Burn Into Image Font Size slider (in {windowId})" functionality-id="sets the font size for burned-in metadata text (in {windowId})" intent-id="control the size of metadata text on renders (in {windowId})">
                      <span class="text-[13px] text-[#eee] pointer-events-none">12 px</span>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Text Color</span>
                    <div class="flex-1 h-[22px] rounded-[3px] bg-black border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer" alt-id="Burn Into Image Text Color picker" appearance-id="color swatch for the burn-in text color (in {windowId})" location-id="inside the Burn Into Image accordion, Burn Into Image Text Color picker (in {windowId})" functionality-id="sets the text color for burned-in metadata (in {windowId})" intent-id="choose the text color for metadata overlays (in {windowId})"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Background</span>
                    <div class="flex-1 h-[22px] rounded-[3px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjOWU5ZTllIi8+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiM5ZTllOWUiLz4KPHJlY3QgeD0iNCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI2I4YjhiOCIvPgo8cmVjdCB5PSI0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjYjhiOGI4Ii8+Cjwvc3ZnPg==')] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer relative overflow-hidden" alt-id="Burn Into Image Background Color picker" appearance-id="color swatch for the burn-in background color (in {windowId})" location-id="inside the Burn Into Image accordion, Burn Into Image Background Color picker (in {windowId})" functionality-id="sets the background color behind burned-in metadata text (in {windowId})" intent-id="choose the background color for metadata overlays (in {windowId})">
                      <div class="absolute left-0 top-0 h-full w-[60%] bg-black"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc]"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Burn Into Image Include Labels checkbox; checked" appearance-id="checked checkbox labeled Include Labels for burn-in (in {windowId})" location-id="inside the Burn Into Image accordion, Burn Into Image Include Labels checkbox (in {windowId})" functionality-id="when checked, includes field labels in the burned-in metadata (in {windowId})" intent-id="add label names alongside values in burned-in text (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePostProcessing} alt-id="Post Processing accordion" appearance-id="accordion header labeled Post Processing in the Output tab (in {windowId})" location-id="below the Burn Into Image section in the Output tab (in {windowId})" functionality-id="toggles post-processing pipeline settings (in {windowId})" intent-id="configure compositing and sequencer for post-processing (in {windowId})">
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
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Post Processing Pipeline Compositing checkbox; unchecked" appearance-id="unchecked checkbox labeled Compositing in post-processing (in {windowId})" location-id="inside the Post Processing accordion, Post Processing Pipeline Compositing checkbox (in {windowId})" functionality-id="when checked, runs the compositor node tree after rendering (in {windowId})" intent-id="enable post-processing through the compositor (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Compositing</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Post Processing Pipeline Sequencer checkbox; checked" appearance-id="checked checkbox labeled Sequencer in post-processing (in {windowId})" location-id="inside the Post Processing accordion, Post Processing Pipeline Sequencer checkbox (in {windowId})" functionality-id="when checked, runs the video sequence editor after rendering (in {windowId})" intent-id="enable post-processing through the sequencer (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Sequencer</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Dither</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Post Processing Dither slider; value 1.00" appearance-id="numeric slider showing value 1.00 for dithering amount (in {windowId})" location-id="inside the Post Processing accordion, Post Processing Dither slider (in {windowId})" functionality-id="sets the amount of dithering applied to reduce color banding (in {windowId})" intent-id="reduce visible color banding in low bit-depth renders (in {windowId})">
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
                <span class="hover:text-white cursor-pointer" alt-id="Scene breadcrumb" appearance-id="text label showing the current scene name in the breadcrumb area (in {windowId})" location-id="top of the Scene tab, in the breadcrumbs row, Scene breadcrumb (in {windowId})" functionality-id="identifies the active scene being edited (in {windowId})" intent-id="confirm which scene's properties are shown (in {windowId})">Cube Diorama</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#888]"></i>
                <span class="text-[#eee]" alt-id="View Layer breadcrumb" appearance-id="text label showing the current view layer name (in {windowId})" location-id="top of the View Layer tab, in the breadcrumbs area (in {windowId})" functionality-id="identifies the active view layer being edited (in {windowId})" intent-id="confirm which view layer's properties are shown (in {windowId})">Studio</span>
              </div>
              <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin View Layer" appearance-id="thumbtack icon button in the View Layer tab header (in {windowId})" location-id="top-right of the View Layer tab breadcrumb area (in {windowId})" functionality-id="pins the current view layer so it stays selected regardless of viewport changes (in {windowId})" intent-id="keep these properties focused on a specific view layer (in {windowId})"></i>
            </div>
            
            <!-- Active Layer Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active View Layer dropdown" appearance-id="dropdown for selecting the active view layer (in {windowId})" location-id="in the breadcrumbs area of the View Layer tab (in {windowId})" functionality-id="switches between available view layers (in {windowId})" intent-id="navigate to a different view layer (in {windowId})">
                <i class="fa-solid fa-layer-group text-[13px] text-[#ccc]"></i>
                <span class="text-[13px] text-[#eee]">Studio</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Add View Layer" appearance-id="plus-circle icon button for adding a view layer (in {windowId})" location-id="in the View Layer tab header area (in {windowId})" functionality-id="creates a new view layer in the scene (in {windowId})" intent-id="add a new render layer (in {windowId})">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- View Layer -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleViewLayer} alt-id="View Layer accordion" appearance-id="accordion header labeled View Layer in the View Layer tab (in {windowId})" location-id="inside the View Layer tab content area, View Layer accordion (in {windowId})" functionality-id="toggles the View Layer section with layer-specific settings (in {windowId})" intent-id="configure view layer settings (in {windowId})">
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
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Use for Rendering checkbox; unchecked" appearance-id="unchecked checkbox labeled Use for Rendering (in {windowId})" location-id="inside a Properties tab accordion (in {windowId})" functionality-id="when checked, enables this item for use in rendering (in {windowId})" intent-id="include this item in the rendering pipeline (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Use for Rendering</span>
                    </div>
                    <div class="flex-1 max-w-[12px] flex justify-end">
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777]"></div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <div class="flex items-center gap-2 cursor-pointer pr-[16px]" alt-id="Render Single Layer checkbox; checked" appearance-id="checked checkbox labeled Render Single Layer (in {windowId})" location-id="inside the View Layer tab or Render tab (in {windowId})" functionality-id="when checked, renders only the active single view layer (in {windowId})" intent-id="focus the render on just one view layer (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleOverride} alt-id="Override accordion" appearance-id="accordion header labeled Override in the View Layer tab (in {windowId})" location-id="inside the View Layer tab content area, Override accordion (in {windowId})" functionality-id="toggles override settings for the view layer (in {windowId})" intent-id="configure material and world overrides for this layer (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="Material Override dropdown" appearance-id="dropdown for selecting a material override (in {windowId})" location-id="inside the Override accordion, Material Override dropdown (in {windowId})" functionality-id="overrides all materials in the view layer with this material (in {windowId})" intent-id="apply a single material to all objects in the layer (in {windowId})">
                      <i class="fa-solid fa-circle-quarter text-[14px] text-[#cc6666]"></i>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Material</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">World Override</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Override dropdown" appearance-id="dropdown for selecting a world override (in {windowId})" location-id="inside the Override accordion, World Override dropdown (in {windowId})" functionality-id="overrides the world environment for this view layer (in {windowId})" intent-id="apply a specific world only to this layer (in {windowId})">
                      <i class="fa-solid fa-globe text-[14px] text-[#cc6666]"></i>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">World</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Samples</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Samples slider; value 0" appearance-id="numeric slider showing value 0 for viewport samples (in {windowId})" location-id="inside the Viewport Sampling sub-accordion (in {windowId})" functionality-id="sets the number of viewport samples for Cycles (in {windowId})" intent-id="control viewport render quality via sample count (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePasses} alt-id="Passes accordion" appearance-id="accordion header labeled Passes in the View Layer tab (in {windowId})" location-id="inside the View Layer tab content area, Passes accordion (in {windowId})" functionality-id="toggles the render passes configuration (in {windowId})" intent-id="select which render passes to output (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesData} alt-id="Data sub-accordion" appearance-id="sub-accordion in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data sub-accordion (in {windowId})" functionality-id="toggles a sub-section of the Data tab (in {windowId})" intent-id="expand a specific data tab sub-section (in {windowId})">
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
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Combined checkbox; checked" appearance-id="checked checkbox for the Combined pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Combined checkbox (in {windowId})" functionality-id="when checked, outputs the combined beauty pass (in {windowId})" intent-id="include the main combined render pass (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Combined</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Depth checkbox; unchecked" appearance-id="unchecked checkbox for the Depth pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Depth checkbox (in {windowId})" functionality-id="when checked, outputs a depth (Z) pass (in {windowId})" intent-id="include depth data in render output (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Depth</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Mist checkbox; unchecked" appearance-id="unchecked checkbox for the Mist pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Mist checkbox (in {windowId})" functionality-id="when checked, outputs a mist/fog distance pass (in {windowId})" intent-id="include mist distance data in render output (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Mist</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Position checkbox; unchecked" appearance-id="unchecked checkbox for the Position pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Position checkbox (in {windowId})" functionality-id="when checked, outputs a world position pass (in {windowId})" intent-id="include world position data in render output (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Position</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Normal checkbox; unchecked" appearance-id="unchecked checkbox for the Normal pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Normal checkbox (in {windowId})" functionality-id="when checked, outputs a surface normal pass (in {windowId})" intent-id="include surface normal data in render output (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Normal</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Vector checkbox; unchecked" appearance-id="unchecked checkbox for the Vector/Motion pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Vector checkbox (in {windowId})" functionality-id="when checked, outputs a motion vector pass (in {windowId})" intent-id="include motion vector data for motion blur compositing (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Vector</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include UV checkbox; unchecked" appearance-id="unchecked checkbox for the UV pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include UV checkbox (in {windowId})" functionality-id="when checked, outputs a UV coordinate pass (in {windowId})" intent-id="include UV data in render output (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">UV</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Grease Pencil checkbox; unchecked" appearance-id="unchecked checkbox for the Grease Pencil pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Grease Pencil checkbox (in {windowId})" functionality-id="when checked, outputs Grease Pencil as a separate pass (in {windowId})" intent-id="isolate Grease Pencil in its own render pass (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Grease Pencil</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Include Denoising Data checkbox; unchecked" appearance-id="unchecked checkbox for Denoising Data pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Include Denoising Data checkbox (in {windowId})" functionality-id="when checked, outputs denoising albedo and normal passes (in {windowId})" intent-id="include data needed for external denoisers (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Denoising Data</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Indexes</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Indexes Object Index checkbox; unchecked" appearance-id="unchecked checkbox for Object Index pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Indexes Object Index checkbox (in {windowId})" functionality-id="when checked, outputs an object index ID pass (in {windowId})" intent-id="use object index for compositing selections (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Object Index</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Indexes Material Index checkbox; unchecked" appearance-id="unchecked checkbox for Material Index pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Indexes Material Index checkbox (in {windowId})" functionality-id="when checked, outputs a material index ID pass (in {windowId})" intent-id="use material index for compositing selections (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Material Index</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Debug</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Data Debug Sample Count checkbox; unchecked" appearance-id="unchecked checkbox for Debug Sample Count pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Debug Sample Count checkbox (in {windowId})" functionality-id="when checked, outputs a debug sample count pass (in {windowId})" intent-id="visualize sampling distribution across the image (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Sample Count</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer opacity-50" alt-id="Passes Data Debug Render Time checkbox; unchecked disabled" appearance-id="disabled unchecked checkbox for Debug Render Time pass (in {windowId})" location-id="inside the Passes Data sub-accordion, Passes Data Debug Render Time checkbox (in {windowId})" functionality-id="controls the debug render time pass output (disabled) (in {windowId})" intent-id="visualize per-pixel render time (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#333] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#888] pointer-events-none">Render Time</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Alpha Threshold</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Alpha Threshold slider; value 0.500" appearance-id="numeric slider showing value 0.500 for alpha threshold (in {windowId})" location-id="inside the Material Settings accordion, Alpha Threshold slider (in {windowId})" functionality-id="sets the alpha cutoff threshold for clip-based transparency (in {windowId})" intent-id="control the alpha cutoff point for transparent materials (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesLight} alt-id="Light sub-accordion" appearance-id="sub-accordion labeled Light inside Sampling (in {windowId})" location-id="inside the Sampling accordion in the Render tab, Light sub-accordion (in {windowId})" functionality-id="toggles light sampling settings (in {windowId})" intent-id="configure how lights are sampled (in {windowId})">
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
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Diffuse Direct checkbox; unchecked" appearance-id="unchecked checkbox for Diffuse Direct pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Diffuse Direct checkbox (in {windowId})" functionality-id="when checked, outputs the direct diffuse lighting pass (in {windowId})" intent-id="isolate direct diffuse lighting in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Diffuse Indirect checkbox; unchecked" appearance-id="unchecked checkbox for Diffuse Indirect pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Diffuse Indirect checkbox (in {windowId})" functionality-id="when checked, outputs the indirect diffuse lighting pass (in {windowId})" intent-id="isolate indirect diffuse lighting in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Diffuse Color checkbox; unchecked" appearance-id="unchecked checkbox for Diffuse Color pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Diffuse Color checkbox (in {windowId})" functionality-id="when checked, outputs the diffuse color/albedo pass (in {windowId})" intent-id="isolate the diffuse material color in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Color</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Glossy</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Glossy Direct checkbox; unchecked" appearance-id="unchecked checkbox for Glossy Direct pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Glossy Direct checkbox (in {windowId})" functionality-id="when checked, outputs the direct glossy/specular pass (in {windowId})" intent-id="isolate direct glossy reflections in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Glossy Indirect checkbox; unchecked" appearance-id="unchecked checkbox for Glossy Indirect pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Glossy Indirect checkbox (in {windowId})" functionality-id="when checked, outputs the indirect glossy pass (in {windowId})" intent-id="isolate indirect glossy reflections in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Glossy Color checkbox; unchecked" appearance-id="unchecked checkbox for Glossy Color pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Glossy Color checkbox (in {windowId})" functionality-id="when checked, outputs the glossy color/tint pass (in {windowId})" intent-id="isolate the glossy material color in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Color</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Transmission</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Transmission Direct checkbox; unchecked" appearance-id="unchecked checkbox for Transmission Direct pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Transmission Direct checkbox (in {windowId})" functionality-id="when checked, outputs the direct transmission lighting pass (in {windowId})" intent-id="isolate direct transmission in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Transmission Indirect checkbox; unchecked" appearance-id="unchecked checkbox for Transmission Indirect pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Transmission Indirect checkbox (in {windowId})" functionality-id="when checked, outputs the indirect transmission pass (in {windowId})" intent-id="isolate indirect transmission in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Transmission Color checkbox; unchecked" appearance-id="unchecked checkbox for Transmission Color pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Transmission Color checkbox (in {windowId})" functionality-id="when checked, outputs the transmission color pass (in {windowId})" intent-id="isolate the transmission material color in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Color</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Volume</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Volume Direct checkbox; unchecked" appearance-id="unchecked checkbox for Volume Direct pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Volume Direct checkbox (in {windowId})" functionality-id="when checked, outputs the direct volume lighting pass (in {windowId})" intent-id="isolate direct volume scattering in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Direct</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Volume Indirect checkbox; unchecked" appearance-id="unchecked checkbox for Volume Indirect pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Volume Indirect checkbox (in {windowId})" functionality-id="when checked, outputs the indirect volume lighting pass (in {windowId})" intent-id="isolate indirect volume scattering in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Indirect</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] mt-[2px]">Other</span>
                          <div class="flex flex-col gap-1.5">
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Emission checkbox; unchecked" appearance-id="unchecked checkbox for Emission pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Other Emission checkbox (in {windowId})" functionality-id="when checked, outputs the emission light pass (in {windowId})" intent-id="isolate emissive materials in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Emission</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Environment checkbox; unchecked" appearance-id="unchecked checkbox for Environment pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Other Environment checkbox (in {windowId})" functionality-id="when checked, outputs the environment/world lighting pass (in {windowId})" intent-id="isolate world environment lighting in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Environment</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Ambient Occlusion checkbox; unchecked" appearance-id="unchecked checkbox for Ambient Occlusion pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Other Ambient Occlusion checkbox (in {windowId})" functionality-id="when checked, outputs the ambient occlusion pass (in {windowId})" intent-id="isolate AO contribution in renders (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Ambient Occlusion</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Light Other Shadow Catcher checkbox; unchecked" appearance-id="unchecked checkbox for Shadow Catcher pass (in {windowId})" location-id="inside the Passes Light sub-accordion, Passes Light Other Shadow Catcher checkbox (in {windowId})" functionality-id="when checked, outputs the shadow catcher pass (in {windowId})" intent-id="isolate shadow catcher objects in compositing (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesCryptomatte} alt-id="Cryptomatte sub-accordion" appearance-id="sub-accordion labeled Cryptomatte inside Passes (in {windowId})" location-id="inside the Passes accordion in the View Layer tab, Cryptomatte sub-accordion (in {windowId})" functionality-id="toggles the Cryptomatte pass settings (in {windowId})" intent-id="configure cryptomatte ID passes for compositing (in {windowId})">
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
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Cryptomatte Object checkbox; unchecked" appearance-id="unchecked checkbox for Cryptomatte Object pass (in {windowId})" location-id="inside the Passes Cryptomatte sub-accordion, Passes Cryptomatte Object checkbox (in {windowId})" functionality-id="when checked, outputs object-based cryptomatte passes (in {windowId})" intent-id="enable per-object cryptomatte masks (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Object</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Cryptomatte Material checkbox; unchecked" appearance-id="unchecked checkbox for Cryptomatte Material pass (in {windowId})" location-id="inside the Passes Cryptomatte sub-accordion, Passes Cryptomatte Material checkbox (in {windowId})" functionality-id="when checked, outputs material-based cryptomatte passes (in {windowId})" intent-id="enable per-material cryptomatte masks (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Material</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Passes Cryptomatte Asset checkbox; unchecked" appearance-id="unchecked checkbox for Cryptomatte Asset pass (in {windowId})" location-id="inside the Passes Cryptomatte sub-accordion, Passes Cryptomatte Asset checkbox (in {windowId})" functionality-id="when checked, outputs asset-based cryptomatte passes (in {windowId})" intent-id="enable per-asset cryptomatte masks (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Asset</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Levels</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Passes Cryptomatte Levels slider; value 6" appearance-id="numeric slider showing value 6 for cryptomatte levels (in {windowId})" location-id="inside the Passes Cryptomatte sub-accordion, Passes Cryptomatte Levels slider (in {windowId})" functionality-id="sets the number of cryptomatte levels for overlapping objects (in {windowId})" intent-id="control how many overlapping objects are encoded in cryptomatte (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesShaderAOV} alt-id="Shader AOV sub-accordion" appearance-id="sub-accordion labeled Shader AOV inside Passes (in {windowId})" location-id="inside the Passes accordion in the View Layer tab, Shader AOV sub-accordion (in {windowId})" functionality-id="toggles the Shader AOV pass settings (in {windowId})" intent-id="configure custom shader output passes (in {windowId})">
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
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Shader AOV" appearance-id="button for adding a new Shader AOV (in {windowId})" location-id="inside the Passes Shader AOV sub-accordion, Add Shader AOV (in {windowId})" functionality-id="adds a new Shader AOV pass output (in {windowId})" intent-id="create a custom shader output variable pass (in {windowId})">
                              <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                            </div>
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Shader AOV" appearance-id="button for removing a Shader AOV (in {windowId})" location-id="inside the Passes Shader AOV sub-accordion, Remove Shader AOV (in {windowId})" functionality-id="removes the selected Shader AOV pass (in {windowId})" intent-id="delete an existing custom shader pass (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={togglePassesLightGroups} alt-id="Light Groups sub-accordion" appearance-id="sub-accordion labeled Light Groups inside Passes (in {windowId})" location-id="inside the Passes accordion in the View Layer tab, Light Groups sub-accordion (in {windowId})" functionality-id="toggles the Light Groups pass settings (in {windowId})" intent-id="configure light group render passes (in {windowId})">
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
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Light Group" appearance-id="button for adding a light group pass (in {windowId})" location-id="inside the Passes Light Groups sub-accordion, Add Light Group (in {windowId})" functionality-id="adds a new light group pass (in {windowId})" intent-id="create a separate render pass for a group of lights (in {windowId})">
                              <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                            </div>
                            <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Light Group" appearance-id="button for removing a light group pass (in {windowId})" location-id="inside the Passes Light Groups sub-accordion, Remove Light Group (in {windowId})" functionality-id="removes the selected light group pass (in {windowId})" intent-id="delete a light group pass (in {windowId})">
                              <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                            </div>
                            <div class="h-[22px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Light Group menu" appearance-id="dropdown menu for light group selection (in {windowId})" location-id="inside the Passes Light Groups sub-accordion, Light Group menu (in {windowId})" functionality-id="opens options for light group management (in {windowId})" intent-id="manage light group assignments (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleFilter} alt-id="Filter accordion" appearance-id="accordion header labeled Filter in the View Layer tab (in {windowId})" location-id="inside the View Layer tab content area, Filter accordion (in {windowId})" functionality-id="toggles the filter settings for object types in this layer (in {windowId})" intent-id="control which object types are rendered in this layer (in {windowId})">
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
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Environment checkbox; checked" appearance-id="checked checkbox labeled Environment in the filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Include Environment checkbox (in {windowId})" functionality-id="includes environment/world in this view layer (in {windowId})" intent-id="render the environment in this layer (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Environment</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Surfaces checkbox; checked" appearance-id="checked checkbox labeled Surfaces in the filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Include Surfaces checkbox (in {windowId})" functionality-id="includes mesh surface objects in this view layer (in {windowId})" intent-id="render mesh objects in this layer (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Surfaces</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Curves checkbox; checked" appearance-id="checked checkbox labeled Curves in the filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Include Curves checkbox (in {windowId})" functionality-id="includes curve objects in this view layer (in {windowId})" intent-id="render curve objects in this layer (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Curves</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Volumes checkbox; checked" appearance-id="checked checkbox labeled Volumes in the filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Include Volumes checkbox (in {windowId})" functionality-id="includes volume objects in this view layer (in {windowId})" intent-id="render volume objects in this layer (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Volumes</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Include Grease Pencil checkbox; checked" appearance-id="checked checkbox labeled Grease Pencil in the filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Include Grease Pencil checkbox (in {windowId})" functionality-id="includes Grease Pencil objects in this view layer (in {windowId})" intent-id="render Grease Pencil in this layer (in {windowId})">
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
                      <div class="flex items-center gap-2 cursor-pointer opacity-50" alt-id="Filter Use Motion Blur checkbox; unchecked disabled" appearance-id="disabled unchecked checkbox labeled Motion Blur in filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Use Motion Blur checkbox (in {windowId})" functionality-id="controls motion blur usage for this view layer (disabled) (in {windowId})" intent-id="enable motion blur for this layer (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#333] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#888] pointer-events-none">Motion Blur</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Filter Use Denoising checkbox; checked" appearance-id="checked checkbox labeled Denoising in filter settings (in {windowId})" location-id="inside the Filter accordion, Filter Use Denoising checkbox (in {windowId})" functionality-id="when checked, applies denoising to this view layer (in {windowId})" intent-id="enable AI denoising for this layer (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" alt-id="Custom Properties accordion" appearance-id="accordion header labeled Custom Properties (in {windowId})" location-id="inside the Properties tab content area, near the bottom, Custom Properties accordion (in {windowId})" functionality-id="toggles the custom properties section for the current datablock (in {windowId})" intent-id="manage user-defined properties (in {windowId})">
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
                  <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="New Custom Property button" appearance-id="button labeled New inside Custom Properties accordion (in {windowId})" location-id="inside the Custom Properties accordion, New Custom Property button (in {windowId})" functionality-id="creates a new custom property on the scene (in {windowId})" intent-id="add a user-defined property to the scene (in {windowId})">
                    <span class="text-[13px] text-[#eee]">New</span>
                  </div>
                  <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                    <i class="fa-solid fa-plus text-[11px] text-white"></i>
                  </div>
                </div>
                
                <div class="flex items-center gap-2 mt-1 relative">
                  <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">prop</span>
                  <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Custom Property prop slider; value 1.000" appearance-id="numeric slider showing value 1.000 for the 'prop' custom property (in {windowId})" location-id="inside the Custom Properties accordion, in the properties list (in {windowId})" functionality-id="displays and edits the value of the 'prop' custom property (in {windowId})" intent-id="adjust this user-defined property value (in {windowId})">
                    <div class="h-full bg-[#4772b3] w-[100%] absolute left-0 top-0"></div>
                    <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                      <span class="text-[13px] text-[#eee]">1.000</span>
                    </div>
                  </div>
                  <div class="absolute right-[4px] flex items-center justify-center w-[18px] h-[18px] cursor-pointer opacity-70 hover:opacity-100" alt-id="Edit Custom Property settings" appearance-id="gear icon button for editing custom property settings (in {windowId})" location-id="inside the Custom Properties accordion, next to the 'prop' slider (in {windowId})" functionality-id="opens the custom property settings to change its name, min, max, and type (in {windowId})" intent-id="configure settings for this custom property (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Scene breadcrumb" appearance-id="text label showing the current scene name in the breadcrumb area (in {windowId})" location-id="top of the Scene tab, in the breadcrumbs row, Scene breadcrumb (in {windowId})" functionality-id="identifies the active scene being edited (in {windowId})" intent-id="confirm which scene's properties are shown (in {windowId})">Cube Diorama</span>
              </div>
            </div>
            
            <!-- Active Scene Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active Scene dropdown" appearance-id="dropdown for selecting the active scene (in {windowId})" location-id="in the breadcrumbs area of the Scene tab (in {windowId})" functionality-id="switches between available scenes (in {windowId})" intent-id="navigate to a different scene (in {windowId})">
                <i class="fa-solid fa-clapperboard text-[13px] text-[#ccc]"></i>
                <span class="text-[13px] text-[#eee]">Cube Diorama</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Add Scene" appearance-id="plus icon button for adding a new scene (in {windowId})" location-id="in the Scene tab header area, Add Scene (in {windowId})" functionality-id="creates a new scene in the project (in {windowId})" intent-id="add a new scene (in {windowId})">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Delete Scene" appearance-id="minus icon button for deleting a scene (in {windowId})" location-id="in the Scene tab header area, Delete Scene (in {windowId})" functionality-id="deletes the current scene (in {windowId})" intent-id="remove an unwanted scene from the project (in {windowId})">
                <i class="fa-solid fa-xmark text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- Scene -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleScene} alt-id="Scene accordion" appearance-id="accordion header labeled Scene in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Scene accordion (in {windowId})" functionality-id="toggles the Scene section with general scene settings (in {windowId})" intent-id="configure scene background and physics settings (in {windowId})">
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
                      <div class="flex items-center px-2 flex-1 cursor-pointer gap-2 hover:bg-[#222] h-full" alt-id="Camera dropdown" appearance-id="dropdown for selecting the active render camera (in {windowId})" location-id="inside the Scene accordion, Camera dropdown (in {windowId})" functionality-id="selects which camera object to use for rendering (in {windowId})" intent-id="assign the camera for this scene's renders (in {windowId})">
                        <i class="fa-solid fa-video text-[12px] text-[#ccc]"></i>
                        <span class="text-[13px] text-[#eee] flex-1">Camera</span>
                      </div>
                      <div class="flex items-center justify-center w-6 h-full cursor-pointer hover:text-white text-[#888]" alt-id="Clear Camera" appearance-id="button labeled Clear Camera in the Render or Scene settings (in {windowId})" location-id="inside a Properties tab camera settings area (in {windowId})" functionality-id="clears or unlinks the camera selection (in {windowId})" intent-id="remove the camera assignment (in {windowId})">
                        <i class="fa-solid fa-xmark text-[11px]"></i>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Background Scene</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="Background Scene dropdown" appearance-id="dropdown for selecting a background scene (in {windowId})" location-id="inside the Scene accordion, Background Scene dropdown (in {windowId})" functionality-id="sets a scene to use as a backdrop behind this scene (in {windowId})" intent-id="composite another scene as background (in {windowId})">
                      <i class="fa-solid fa-clapperboard text-[13px] text-[#ccc]"></i>
                      <span class="text-[13px] text-[#888] flex-1">Scene</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Active Clip</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="Active Clip dropdown" appearance-id="dropdown for selecting the active motion tracking clip (in {windowId})" location-id="inside a constraints or tracking tab (in {windowId})" functionality-id="selects the active motion tracking clip for constraints (in {windowId})" intent-id="choose which tracking clip to use (in {windowId})">
                      <i class="fa-solid fa-film text-[13px] text-[#ccc]"></i>
                      <span class="text-[13px] text-[#888] flex-1">Movie Clip</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Units -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleUnits} alt-id="Units accordion" appearance-id="accordion header labeled Units in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Units accordion (in {windowId})" functionality-id="toggles the Units section for measurement units (in {windowId})" intent-id="configure the unit system for the scene (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Unit System dropdown" appearance-id="dropdown for selecting the unit system (in {windowId})" location-id="inside the Units accordion, Unit System dropdown (in {windowId})" functionality-id="selects the unit system such as Metric, Imperial, or None (in {windowId})" intent-id="choose measurement units for the scene (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Metric</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Unit Scale</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Unit Scale slider; value 1.000000" appearance-id="numeric slider showing value 1.000000 for unit scale (in {windowId})" location-id="inside the Units accordion, Unit Scale slider (in {windowId})" functionality-id="sets the scale factor mapping scene units to real-world meters (in {windowId})" intent-id="define how scene units relate to physical measurements (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Separate Units checkbox; unchecked" appearance-id="unchecked checkbox labeled Separate Units (in {windowId})" location-id="inside the Units accordion, Separate Units checkbox (in {windowId})" functionality-id="when checked, displays measurements with separate units like 1m 50cm (in {windowId})" intent-id="toggle between combined and separated unit display (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Separate Units</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rotation</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Rotation dropdown" appearance-id="dropdown for selecting the rotation unit display (in {windowId})" location-id="inside the Units accordion, Rotation dropdown (in {windowId})" functionality-id="selects how rotation values are displayed (in {windowId})" intent-id="choose between degrees and radians for rotation display (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Degrees</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Length</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Length dropdown" appearance-id="dropdown for selecting the length unit (in {windowId})" location-id="inside the Units accordion, Length dropdown (in {windowId})" functionality-id="selects the specific length unit such as Meters or Feet (in {windowId})" intent-id="choose the display unit for distances (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Meters</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Mass</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Mass dropdown" appearance-id="dropdown for selecting the mass unit (in {windowId})" location-id="inside the Units accordion, Mass dropdown (in {windowId})" functionality-id="selects the mass unit for physics simulations (in {windowId})" intent-id="choose the display unit for mass (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Kilograms</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Time</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Time dropdown" appearance-id="dropdown for selecting the time unit (in {windowId})" location-id="inside the Units accordion, Time dropdown (in {windowId})" functionality-id="selects the time unit display format (in {windowId})" intent-id="choose how time is displayed (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Seconds</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Temperature</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Temperature dropdown" appearance-id="dropdown for selecting the temperature unit (in {windowId})" location-id="inside the Units accordion, Temperature dropdown (in {windowId})" functionality-id="selects the temperature unit (in {windowId})" intent-id="choose the display unit for temperature (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Kelvin</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Gravity -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleGravity} alt-id="Gravity accordion" appearance-id="accordion header labeled Gravity in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Gravity accordion (in {windowId})" functionality-id="toggles the Gravity section for physics gravity settings (in {windowId})" intent-id="configure gravitational force for physics simulations (in {windowId})">
                <div class="flex items-center gap-2">
                  {#if isGravityExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="flex items-center gap-2" alt-id="Gravity checkbox; checked" appearance-id="checked checkbox enabling gravity in the scene (in {windowId})" location-id="inside the Gravity accordion, Gravity checkbox (in {windowId})" functionality-id="when checked, enables gravity for physics simulations (in {windowId})" intent-id="turn on gravitational force for physics (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Gravity X slider; value 0 m/s²" appearance-id="numeric slider showing value 0 m/s² for gravity X component (in {windowId})" location-id="inside the Gravity accordion, Gravity X slider (in {windowId})" functionality-id="sets the X component of the gravity vector (in {windowId})" intent-id="define gravity direction and magnitude on the X axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m/s²</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Gravity Y slider; value 0 m/s²" appearance-id="numeric slider showing value 0 m/s² for gravity Y component (in {windowId})" location-id="inside the Gravity accordion, Gravity Y slider (in {windowId})" functionality-id="sets the Y component of the gravity vector (in {windowId})" intent-id="define gravity direction and magnitude on the Y axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m/s²</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Gravity Z slider; value -9.8 m/s²" appearance-id="numeric slider showing value -9.8 m/s² for gravity Z component (in {windowId})" location-id="inside the Gravity accordion, Gravity Z slider (in {windowId})" functionality-id="sets the Z component of the gravity vector; typically -9.8 for Earth gravity (in {windowId})" intent-id="define gravity direction and magnitude on the Z axis (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSimulation} alt-id="Simulation accordion" appearance-id="accordion header labeled Simulation in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Simulation accordion (in {windowId})" functionality-id="toggles simulation settings for frame range (in {windowId})" intent-id="configure which frame range is used for physics simulations (in {windowId})">
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
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Simulation Range checkbox; unchecked" appearance-id="unchecked checkbox labeled Simulation Range (in {windowId})" location-id="inside the Simulation accordion, Simulation Range checkbox (in {windowId})" functionality-id="when checked, limits simulation to the specified frame range (in {windowId})" intent-id="restrict physics simulation to a custom range (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                      <span class="text-[13px] text-[#ccc] pointer-events-none">Simulation Range</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">Start</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="Simulation Start slider; value 1" appearance-id="numeric slider showing value 1 for simulation start frame (in {windowId})" location-id="inside the Simulation accordion, Simulation Start slider (in {windowId})" functionality-id="sets the first frame of the physics simulation (in {windowId})" intent-id="define when physics simulation begins (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">End</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="Simulation End slider; value 10000" appearance-id="numeric slider showing value 10000 for simulation end frame (in {windowId})" location-id="inside the Simulation accordion, Simulation End slider (in {windowId})" functionality-id="sets the last frame of the physics simulation (in {windowId})" intent-id="define when physics simulation ends (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleKeyingSets} alt-id="Keying Sets accordion" appearance-id="accordion header labeled Keying Sets in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Keying Sets accordion (in {windowId})" functionality-id="toggles the Keying Sets section for animation keying configuration (in {windowId})" intent-id="configure which properties are keyed in custom keying sets (in {windowId})">
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
                      <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Keying Set" appearance-id="plus icon button for adding a keying set (in {windowId})" location-id="inside the Keying Sets accordion, Add Keying Set (in {windowId})" functionality-id="adds a new custom keying set to the scene (in {windowId})" intent-id="create a named set of properties for quick keyframing (in {windowId})">
                        <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                      </div>
                      <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Keying Set" appearance-id="minus icon button for removing a keying set (in {windowId})" location-id="inside the Keying Sets accordion, Remove Keying Set (in {windowId})" functionality-id="removes the selected keying set (in {windowId})" intent-id="delete an unwanted keying set (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleAudio} alt-id="Audio accordion" appearance-id="accordion header labeled Audio in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Audio accordion (in {windowId})" functionality-id="toggles the Audio section for scene audio settings (in {windowId})" intent-id="configure audio synchronization and mixing (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Audio Volume slider; value 1.000" appearance-id="numeric slider showing value 1.000 for audio volume (in {windowId})" location-id="inside the Audio accordion, Audio Volume slider (in {windowId})" functionality-id="sets the master volume for scene audio (in {windowId})" intent-id="control overall audio loudness (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Distance Model</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Audio Distance Model dropdown" appearance-id="dropdown for selecting the audio distance model (in {windowId})" location-id="inside the Audio accordion, Audio Distance Model dropdown (in {windowId})" functionality-id="selects how audio attenuates with distance (in {windowId})" intent-id="choose the audio falloff model (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Inverse Clamped</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Doppler Speed</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Audio Doppler Speed slider; value 343.300" appearance-id="numeric slider showing value 343.300 for the speed of sound (in {windowId})" location-id="inside the Audio accordion, Audio Doppler Speed slider (in {windowId})" functionality-id="sets the speed of sound for Doppler calculations (in {windowId})" intent-id="define the speed of sound used in Doppler simulation (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">343.300</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Doppler Factor</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Audio Doppler Factor slider; value 1.000" appearance-id="numeric slider showing value 1.000 for Doppler factor (in {windowId})" location-id="inside the Audio accordion, Audio Doppler Factor slider (in {windowId})" functionality-id="sets the strength of the Doppler pitch shift effect (in {windowId})" intent-id="configure Doppler pitch change for moving sounds (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="Update Animation Cache button" appearance-id="button labeled Update Animation Cache (in {windowId})" location-id="inside the Data Animation accordion, Update Animation Cache button (in {windowId})" functionality-id="refreshes the animation cache for the data block (in {windowId})" intent-id="rebuild cached animation data (in {windowId})">
                      <span class="text-[#eee] text-[13px]">Update Animation Cache</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Rigid Body World -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleRigidBodyWorld} alt-id="Rigid Body World accordion" appearance-id="accordion header labeled Rigid Body World in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Rigid Body World accordion (in {windowId})" functionality-id="toggles the Rigid Body World simulation settings (in {windowId})" intent-id="configure the scene-level rigid body physics world (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="Add Rigid Body World button" appearance-id="button to add a Rigid Body World (in {windowId})" location-id="inside the Rigid Body World accordion, Add Rigid Body World button (in {windowId})" functionality-id="creates a Rigid Body World simulation in the scene (in {windowId})" intent-id="enable rigid body physics for the scene (in {windowId})">
                      <span class="text-[#eee] text-[13px]">Add Rigid Body World</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Animation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleAnimation} alt-id="Animation accordion" appearance-id="accordion header labeled Animation in the Scene tab (in {windowId})" location-id="inside the Scene tab content area, Animation accordion (in {windowId})" functionality-id="toggles the Animation section for scene animation settings (in {windowId})" intent-id="configure scene-level animation properties (in {windowId})">
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
                    <div class="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="Animation Scene Dropdown" appearance-id="dropdown for selecting the animation scene (in {windowId})" location-id="inside the Animation accordion, Animation Scene Dropdown (in {windowId})" functionality-id="switches the scene used for animation (in {windowId})" intent-id="choose which scene to apply the animation to (in {windowId})">
                      <span class="text-[13px] text-[#ccc]">Scene</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888] ml-1"></i>
                    </div>
                    <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a]" alt-id="Animation Add" appearance-id="plus icon button for adding an animation (in {windowId})" location-id="inside the Animation accordion, Animation Add (in {windowId})" functionality-id="creates a new animation action for the scene (in {windowId})" intent-id="add an animation action to the scene (in {windowId})">
                      <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                    </div>
                    <div class="flex-1 h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="Animation New button" appearance-id="button labeled New for creating an animation (in {windowId})" location-id="inside the Animation accordion, Animation New button (in {windowId})" functionality-id="creates a new animation datablock (in {windowId})" intent-id="initialize a new animation action (in {windowId})">
                      <span class="text-[#eee] text-[13px]">New</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleSceneCustomProperties} alt-id="Custom Properties accordion" appearance-id="accordion header labeled Custom Properties (in {windowId})" location-id="inside the Properties tab content area, near the bottom, Custom Properties accordion (in {windowId})" functionality-id="toggles the custom properties section for the current datablock (in {windowId})" intent-id="manage user-defined properties (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="New Custom Property button" appearance-id="button labeled New inside Custom Properties accordion (in {windowId})" location-id="inside the Custom Properties accordion, New Custom Property button (in {windowId})" functionality-id="creates a new custom property on the scene (in {windowId})" intent-id="add a user-defined property to the scene (in {windowId})">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                    <div class="absolute left-[70px] mt-[3px] pointer-events-none opacity-50">
                      <i class="fa-solid fa-plus text-[11px] text-white"></i>
                    </div>
                  </div>
                  
                  <div class="flex flex-col gap-1 mt-2">
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="LOR_Settings">LOR_Settings</span>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Custom Property LOR_Settings Edit Value" appearance-id="edit icon button for the LOR_Settings custom property (in {windowId})" location-id="inside the Custom Properties accordion, next to LOR_Settings, Custom Property LOR_Settings Edit Value (in {windowId})" functionality-id="opens the value editor for LOR_Settings (in {windowId})" intent-id="modify the value of this pipeline custom property (in {windowId})">
                        <span class="text-[13px] text-[#eee]">Edit Value</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_Settings Settings" appearance-id="settings icon button for the LOR_Settings custom property (in {windowId})" location-id="inside the Custom Properties accordion, next to LOR_Settings, Custom Property LOR_Settings Settings (in {windowId})" functionality-id="opens settings for the LOR_Settings property (in {windowId})" intent-id="configure name, type, and range for this property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_Settings Delete" appearance-id="delete icon button for the LOR_Settings custom property (in {windowId})" location-id="inside the Custom Properties accordion, next to LOR_Settings, Custom Property LOR_Settings Delete (in {windowId})" functionality-id="deletes the LOR_Settings custom property from the datablock (in {windowId})" intent-id="remove this pipeline custom property (in {windowId})"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="LOR_sequence_settings">LOR_sequence_settings</span>
                      <div class="flex-1"></div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_sequence_settings Settings" appearance-id="settings icon button for LOR_sequence_settings (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property LOR_sequence_settings Settings (in {windowId})" functionality-id="opens settings for LOR_sequence_settings (in {windowId})" intent-id="configure this sequence settings property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_sequence_settings Delete" appearance-id="delete icon button for LOR_sequence_settings (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property LOR_sequence_settings Delete (in {windowId})" functionality-id="deletes the LOR_sequence_settings property (in {windowId})" intent-id="remove this sequence settings property (in {windowId})"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="LOR_shot_settings">LOR_shot_settings</span>
                      <div class="flex-1"></div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_shot_settings Settings" appearance-id="settings icon button for LOR_shot_settings (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property LOR_shot_settings Settings (in {windowId})" functionality-id="opens settings for LOR_shot_settings (in {windowId})" intent-id="configure this shot settings property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property LOR_shot_settings Delete" appearance-id="delete icon button for LOR_shot_settings (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property LOR_shot_settings Delete (in {windowId})" functionality-id="deletes the LOR_shot_settings property (in {windowId})" intent-id="remove this shot settings property (in {windowId})"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWBusyDrawing">NWBusyDrawing</span>
                      <div class="flex-1 h-[22px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWBusyDrawing Settings" appearance-id="settings icon button for NWBusyDrawing property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWBusyDrawing Settings (in {windowId})" functionality-id="opens settings for NWBusyDrawing property (in {windowId})" intent-id="configure this node wrangler property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWBusyDrawing Delete" appearance-id="delete icon button for NWBusyDrawing property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWBusyDrawing Delete (in {windowId})" functionality-id="deletes the NWBusyDrawing property (in {windowId})" intent-id="remove this node wrangler property (in {windowId})"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWLazySource">NWLazySource</span>
                      <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Custom Property NWLazySource value" appearance-id="value slider or field for the NWLazySource custom property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWLazySource value (in {windowId})" functionality-id="displays and edits the NWLazySource property value (in {windowId})" intent-id="adjust this animation node custom property (in {windowId})">
                        <span class="text-[13px] text-[#a0a0a0]">UV Map</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazySource Settings" appearance-id="settings icon button for NWLazySource property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWLazySource Settings (in {windowId})" functionality-id="opens settings for NWLazySource property (in {windowId})" intent-id="configure this animation node property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazySource Delete" appearance-id="delete icon button for NWLazySource property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWLazySource Delete (in {windowId})" functionality-id="deletes the NWLazySource property (in {windowId})" intent-id="remove this animation node property (in {windowId})"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWLazyTarget">NWLazyTarget</span>
                      <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Custom Property NWLazyTarget value" appearance-id="value slider or field for the NWLazyTarget custom property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWLazyTarget value (in {windowId})" functionality-id="displays and edits the NWLazyTarget property value (in {windowId})" intent-id="adjust this animation node custom property (in {windowId})">
                        <span class="text-[13px] text-[#a0a0a0]">Vector Math</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazyTarget Settings" appearance-id="settings icon button for NWLazyTarget property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWLazyTarget Settings (in {windowId})" functionality-id="opens settings for NWLazyTarget property (in {windowId})" intent-id="configure this animation node property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWLazyTarget Delete" appearance-id="delete icon button for NWLazyTarget property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWLazyTarget Delete (in {windowId})" functionality-id="deletes the NWLazyTarget property (in {windowId})" intent-id="remove this animation node property (in {windowId})"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="NWSourceSocket">NWSourceSocket</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Custom Property NWSourceSocket slider; value 0" appearance-id="numeric slider showing value 0 for NWSourceSocket property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWSourceSocket slider (in {windowId})" functionality-id="displays and edits the NWSourceSocket property integer value (in {windowId})" intent-id="set the source socket index for this node wrangler property (in {windowId})">
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">0</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWSourceSocket Settings" appearance-id="settings icon button for NWSourceSocket property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWSourceSocket Settings (in {windowId})" functionality-id="opens settings for NWSourceSocket property (in {windowId})" intent-id="configure this node wrangler socket property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property NWSourceSocket Delete" appearance-id="delete icon button for NWSourceSocket property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property NWSourceSocket Delete (in {windowId})" functionality-id="deletes the NWSourceSocket property (in {windowId})" intent-id="remove this node wrangler socket property (in {windowId})"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="character_update_settings">character_update_settings</span>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Custom Property character_update_settings Edit Value" appearance-id="edit icon button for character_update_settings property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property character_update_settings Edit Value (in {windowId})" functionality-id="opens the value editor for character_update_settings (in {windowId})" intent-id="modify the character update settings value (in {windowId})">
                        <span class="text-[13px] text-[#eee]">Edit Value</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property character_update_settings Settings" appearance-id="settings icon button for character_update_settings property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property character_update_settings Settings (in {windowId})" functionality-id="opens settings for character_update_settings (in {windowId})" intent-id="configure this character rig property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property character_update_settings Delete" appearance-id="delete icon button for character_update_settings property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property character_update_settings Delete (in {windowId})" functionality-id="deletes the character_update_settings property (in {windowId})" intent-id="remove this character rig property (in {windowId})"></i>
                      </div>
                    </div>

                    <div class="flex items-center gap-2 relative">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none truncate pr-2" title="kitsu">kitsu</span>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Custom Property kitsu Edit Value" appearance-id="edit icon button for the kitsu custom property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property kitsu Edit Value (in {windowId})" functionality-id="opens the value editor for kitsu property (in {windowId})" intent-id="modify the kitsu pipeline value (in {windowId})">
                        <span class="text-[13px] text-[#eee]">Edit Value</span>
                      </div>
                      <div class="flex items-center gap-1.5 ml-2 mr-1">
                        <i class="fa-solid fa-gear text-[11px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property kitsu Settings" appearance-id="settings icon button for the kitsu custom property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property kitsu Settings (in {windowId})" functionality-id="opens settings for the kitsu property (in {windowId})" intent-id="configure this Kitsu pipeline property (in {windowId})"></i>
                        <i class="fa-solid fa-xmark text-[13px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Custom Property kitsu Delete" appearance-id="delete icon button for kitsu custom property (in {windowId})" location-id="inside the Custom Properties accordion, Custom Property kitsu Delete (in {windowId})" functionality-id="deletes the kitsu property (in {windowId})" intent-id="remove this Kitsu pipeline tracking property (in {windowId})"></i>
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
                <span class="hover:text-white cursor-pointer" alt-id="Scene breadcrumb" appearance-id="text label showing the current scene name in the breadcrumb area (in {windowId})" location-id="top of the Scene tab, in the breadcrumbs row, Scene breadcrumb (in {windowId})" functionality-id="identifies the active scene being edited (in {windowId})" intent-id="confirm which scene's properties are shown (in {windowId})">Cube Diorama</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#888]"></i>
                <span class="text-[#eee]" alt-id="World breadcrumb" appearance-id="text label showing the current world name in the breadcrumb area (in {windowId})" location-id="top of the World tab, in the breadcrumbs row (in {windowId})" functionality-id="identifies the active world being edited (in {windowId})" intent-id="confirm which world's properties are shown (in {windowId})">World</span>
              </div>
              <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin World" appearance-id="thumbtack icon button in the World tab header (in {windowId})" location-id="top-right of the World tab breadcrumb area (in {windowId})" functionality-id="pins the current world so it stays selected (in {windowId})" intent-id="keep these properties focused on a specific world (in {windowId})"></i>
            </div>
            
            <!-- Active World Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center justify-center w-8 h-full border-r border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="World Shield Toggle" appearance-id="shield icon toggle in the World tab header (in {windowId})" location-id="in the World tab breadcrumb area, World Shield Toggle (in {windowId})" functionality-id="toggles fake user on the world to prevent deletion (in {windowId})" intent-id="protect the world datablock from automatic cleanup (in {windowId})">
                <i class="fa-solid fa-shield-halved text-[12px] text-[#888]"></i>
              </div>
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active World dropdown" appearance-id="dropdown for selecting the active world (in {windowId})" location-id="in the breadcrumbs area of the World tab (in {windowId})" functionality-id="switches between available world datablocks (in {windowId})" intent-id="navigate to a different world (in {windowId})">
                <i class="fa-solid fa-globe text-[13px] text-[#cc6666]"></i>
                <span class="text-[13px] text-[#eee]">World</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Add World" appearance-id="plus icon button for adding a new world (in {windowId})" location-id="in the World tab header area (in {windowId})" functionality-id="creates a new world datablock (in {windowId})" intent-id="add a new world for scenes (in {windowId})">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Delete World" appearance-id="minus-circle icon button for deleting a world in the header area (in {windowId})" location-id="in the World tab breadcrumb area, Delete World (in {windowId})" functionality-id="deletes the current world datablock (in {windowId})" intent-id="remove an unused world (in {windowId})">
                <i class="fa-solid fa-xmark text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- Preview -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldPreview} alt-id="World Preview accordion" appearance-id="accordion header labeled Preview in the World tab (in {windowId})" location-id="top of the World tab content area (in {windowId})" functionality-id="toggles the world preview image display (in {windowId})" intent-id="see a visual preview of the world background (in {windowId})">
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
                  <div class="w-full h-[90px] bg-gradient-to-b from-[#333] to-black rounded-b-[4px] relative overflow-hidden" alt-id="World Preview Image" appearance-id="dark rectangular preview showing the world background appearance (in {windowId})" location-id="inside the World Preview accordion (in {windowId})" functionality-id="displays a rendered preview of the current world settings (in {windowId})" intent-id="visualize how the world background looks (in {windowId})">
                    <div class="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Surface -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSurface} alt-id="World Surface accordion" appearance-id="accordion header labeled Surface in the World tab (in {windowId})" location-id="inside the World tab content area, World Surface accordion (in {windowId})" functionality-id="toggles the Surface section for world background shader settings (in {windowId})" intent-id="configure the world background color and shader (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Type dropdown" appearance-id="dropdown for selecting the world surface type (in {windowId})" location-id="inside the World Surface accordion, World Surface Type dropdown (in {windowId})" functionality-id="selects the type of background shader (in {windowId})" intent-id="choose the world background type (in {windowId})">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Mix Shader</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Factor</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Factor dropdown" appearance-id="dropdown for the world surface factor (in {windowId})" location-id="inside the World Surface accordion, World Surface Factor dropdown (in {windowId})" functionality-id="configures a factor parameter in the world surface shader (in {windowId})" intent-id="adjust a strength or blend factor for the world shader (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Shader 1 dropdown" appearance-id="dropdown for the first world surface shader parameter (in {windowId})" location-id="inside the World Surface accordion, World Surface Shader 1 dropdown (in {windowId})" functionality-id="configures the first parameter of the world surface shader (in {windowId})" intent-id="set the world background shader value (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Surface Shader 2 dropdown" appearance-id="dropdown for the second world surface shader parameter (in {windowId})" location-id="inside the World Surface accordion, World Surface Shader 2 dropdown (in {windowId})" functionality-id="configures the second parameter of the world surface shader (in {windowId})" intent-id="set the secondary world background shader parameter (in {windowId})">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">Background</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Volume -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldVolume} alt-id="World Volume accordion" appearance-id="accordion header labeled Volume in the World tab (in {windowId})" location-id="inside the World tab content area, World Volume accordion (in {windowId})" functionality-id="toggles the Volume section for world volumetric atmosphere settings (in {windowId})" intent-id="configure volumetric atmosphere for the world (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] gap-2 hover:bg-[#222]" alt-id="World Volume Type dropdown" appearance-id="dropdown for selecting the world volume type (in {windowId})" location-id="inside the World Volume accordion, World Volume Type dropdown (in {windowId})" functionality-id="selects the type of volumetric shader for the world (in {windowId})" intent-id="choose how the world volume effect is rendered (in {windowId})">
                      <div class="w-[6px] h-[6px] rounded-full bg-[#66cc66]"></div>
                      <span class="text-[13px] text-[#a0a0a0] flex-1">None</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Ray Visibility -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldRayVisibility} alt-id="World Ray Visibility accordion" appearance-id="accordion header labeled Ray Visibility in the World tab (in {windowId})" location-id="inside the World tab content area, World Ray Visibility accordion (in {windowId})" functionality-id="toggles the Ray Visibility section for controlling where the world is visible (in {windowId})" intent-id="configure in which render passes the world is visible (in {windowId})">
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
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Camera checkbox; checked" appearance-id="checked checkbox labeled Camera for ray visibility (in {windowId})" location-id="inside the World Ray Visibility accordion, World Ray Visibility Camera checkbox (in {windowId})" functionality-id="when checked, the world is visible to camera rays (in {windowId})" intent-id="show the world background in the render (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Camera</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Diffuse checkbox; checked" appearance-id="checked checkbox labeled Diffuse for ray visibility (in {windowId})" location-id="inside the World Ray Visibility accordion, World Ray Visibility Diffuse checkbox (in {windowId})" functionality-id="when checked, the world contributes to diffuse lighting (in {windowId})" intent-id="include the world in indirect diffuse calculations (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Diffuse</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Glossy checkbox; checked" appearance-id="checked checkbox labeled Glossy for ray visibility (in {windowId})" location-id="inside the World Ray Visibility accordion, World Ray Visibility Glossy checkbox (in {windowId})" functionality-id="when checked, the world is visible in glossy/specular reflections (in {windowId})" intent-id="show the world in reflective surfaces (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Glossy</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Transmission checkbox; checked" appearance-id="checked checkbox labeled Transmission for ray visibility (in {windowId})" location-id="inside the World Ray Visibility accordion, World Ray Visibility Transmission checkbox (in {windowId})" functionality-id="when checked, the world is visible through transmissive materials (in {windowId})" intent-id="show the world through transparent or glass materials (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Transmission</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="World Ray Visibility Volume Scatter checkbox; checked" appearance-id="checked checkbox labeled Volume Scatter for ray visibility (in {windowId})" location-id="inside the World Ray Visibility accordion, World Ray Visibility Volume Scatter checkbox (in {windowId})" functionality-id="when checked, the world is visible in volumetric scattering (in {windowId})" intent-id="include the world in volumetric light scattering (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettings} alt-id="World Settings accordion" appearance-id="accordion header labeled Settings in the World tab (in {windowId})" location-id="inside the World tab content area, World Settings accordion (in {windowId})" functionality-id="toggles the World Settings section (in {windowId})" intent-id="configure additional world rendering settings (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettingsSurface} alt-id="World Settings Surface sub-accordion" appearance-id="sub-accordion labeled Surface inside World Settings (in {windowId})" location-id="inside the World Settings accordion, World Settings Surface sub-accordion (in {windowId})" functionality-id="toggles surface-related world settings (in {windowId})" intent-id="configure world surface parameters (in {windowId})">
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
                          <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="World Settings Sampling dropdown" appearance-id="dropdown for world sampling method (in {windowId})" location-id="inside the World Settings accordion, World Settings Sampling dropdown (in {windowId})" functionality-id="selects the sampling method for the world background (in {windowId})" intent-id="choose how the world background is importance sampled (in {windowId})">
                            <span class="text-[13px] text-[#eee]">Auto</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">Map Resolution</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="World Settings Map Resolution slider; value 1024" appearance-id="numeric slider showing value 1024 for world map resolution (in {windowId})" location-id="inside the World Settings accordion, World Settings Map Resolution slider (in {windowId})" functionality-id="sets the resolution of the environment map used for world lighting (in {windowId})" intent-id="control environment map quality for world illumination (in {windowId})">
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">1024</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none opacity-50">Max Bounces</span>
                          <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative opacity-50" alt-id="World Settings Max Bounces slider; value 1024" appearance-id="numeric slider showing value 1024 for world max bounces (in {windowId})" location-id="inside the World Settings accordion, World Settings Max Bounces slider (in {windowId})" functionality-id="sets the maximum number of ray bounces for the world (in {windowId})" intent-id="limit world ray bounces to control render time (in {windowId})">
                            <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                              <span class="text-[13px] text-[#eee]">1024</span>
                            </div>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                          <div class="flex items-center gap-2 cursor-pointer" alt-id="World Settings Shadow Caustics checkbox; unchecked" appearance-id="unchecked checkbox labeled Shadow Caustics (in {windowId})" location-id="inside the World Settings accordion, World Settings Shadow Caustics checkbox (in {windowId})" functionality-id="when checked, enables shadow caustics from the world background (in {windowId})" intent-id="render caustic effects from world lighting (in {windowId})">
                            <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                            <span class="text-[13px] text-[#ccc] pointer-events-none">Shadow Caustics</span>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Volume Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[1px]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettingsVolume} alt-id="World Settings Volume sub-accordion" appearance-id="sub-accordion labeled Volume inside World Settings (in {windowId})" location-id="inside the World Settings accordion, World Settings Volume sub-accordion (in {windowId})" functionality-id="toggles volume-related world settings (in {windowId})" intent-id="configure world volumetric parameters (in {windowId})">
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
                          <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="World Volume Sampling dropdown" appearance-id="dropdown for world volume sampling method (in {windowId})" location-id="inside the World Volume accordion, World Volume Sampling dropdown (in {windowId})" functionality-id="sets the sampling method for world volumetrics (in {windowId})" intent-id="control how the world volumetric is sampled during rendering (in {windowId})">
                            <span class="text-[13px] text-[#eee]">Equiangular</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                          </div>
                        </div>

                        <div class="flex items-center gap-2 mt-1">
                          <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Interpolation</span>
                          <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="World Volume Interpolation dropdown" appearance-id="dropdown for world volume interpolation setting (in {windowId})" location-id="inside the World Volume accordion, World Volume Interpolation dropdown (in {windowId})" functionality-id="sets the interpolation method for the world volume shader (in {windowId})" intent-id="configure how the world volume is sampled (in {windowId})">
                            <span class="text-[13px] text-[#eee]">Linear</span>
                            <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>

                  <!-- Light Group Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldSettingsLightGroup} alt-id="World Settings Light Group sub-accordion" appearance-id="sub-accordion labeled Light Group inside World Settings (in {windowId})" location-id="inside the World Settings accordion, World Settings Light Group sub-accordion (in {windowId})" functionality-id="toggles light group assignment for the world (in {windowId})" intent-id="assign the world background to a light group pass (in {windowId})">
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
                            <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a] opacity-50" alt-id="World Add Light Group" appearance-id="button to add the world to a light group (in {windowId})" location-id="inside the World Settings Light Group sub-accordion (in {windowId})" functionality-id="adds the world background to a light group for render passes (in {windowId})" intent-id="include the world in a specific light group pass (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldViewportDisplay} alt-id="World Viewport Display accordion" appearance-id="accordion header labeled Viewport Display in the World tab (in {windowId})" location-id="inside the World tab content area, World Viewport Display accordion (in {windowId})" functionality-id="toggles viewport display settings for the world (in {windowId})" intent-id="configure how the world appears in the viewport (in {windowId})">
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
                    <div class="flex-1 h-[22px] rounded-[3px] bg-[#2a2a2a] border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer" alt-id="World Viewport Display Color picker" appearance-id="color swatch for the world viewport display color (in {windowId})" location-id="inside the World Viewport Display accordion (in {windowId})" functionality-id="sets the viewport background color for the world (in {windowId})" intent-id="choose the viewport background color for this world (in {windowId})"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Animation -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldAnimation} alt-id="World Animation accordion" appearance-id="accordion header labeled Animation in the World tab (in {windowId})" location-id="inside the World tab content area, World Animation accordion (in {windowId})" functionality-id="toggles animation settings for the world (in {windowId})" intent-id="configure keyframe animation for world properties (in {windowId})">
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
                      <div class="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="World Animation Scene Dropdown" appearance-id="dropdown for selecting world animation scene (in {windowId})" location-id="inside the World Animation accordion, World Animation Scene Dropdown (in {windowId})" functionality-id="selects the scene for world animation (in {windowId})" intent-id="choose which scene's animation is applied to the world (in {windowId})">
                        <i class="fa-solid fa-clapperboard text-[13px] text-[#ccc]"></i>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] ml-1"></i>
                      </div>
                      <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a]" alt-id="World Animation Scene Add" appearance-id="add button in the World Animation Scene section (in {windowId})" location-id="inside the World Animation accordion, World Animation Scene Add (in {windowId})" functionality-id="adds a scene animation action for the world (in {windowId})" intent-id="create a scene-level animation for world settings (in {windowId})">
                        <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                      </div>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="World Animation Scene New button" appearance-id="button labeled New in the World Animation Scene section (in {windowId})" location-id="inside the World Animation accordion, World Animation Scene New button (in {windowId})" functionality-id="creates a new animation datablock for the world scene (in {windowId})" intent-id="initialize a new world scene animation (in {windowId})">
                        <span class="text-[#eee] text-[13px]">New</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-1 mt-1">
                    <span class="text-[12px] text-[#ccc]">Shader Node Tree</span>
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] px-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="World Animation Shader Node Tree Dropdown" appearance-id="dropdown for selecting the world shader node tree (in {windowId})" location-id="inside the World Animation accordion, World Animation Shader Node Tree Dropdown (in {windowId})" functionality-id="selects which shader node tree to animate for the world (in {windowId})" intent-id="choose a node tree for world shader animation (in {windowId})">
                        <i class="fa-solid fa-circle-nodes text-[13px] text-[#ccc]"></i>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#888] ml-1"></i>
                      </div>
                      <div class="flex items-center justify-center w-6 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-[3px] shadow-sm cursor-pointer hover:bg-[#5a5a5a]" alt-id="World Animation Shader Node Tree Add" appearance-id="add button for the World shader node tree animation (in {windowId})" location-id="inside the World Animation accordion, World Animation Shader Node Tree Add (in {windowId})" functionality-id="adds animation to the world shader node tree (in {windowId})" intent-id="keyframe world shader node values (in {windowId})">
                        <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                      </div>
                      <div class="flex-1 h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm cursor-pointer" alt-id="World Animation Shader Node Tree New button" appearance-id="button labeled New for the world shader node tree (in {windowId})" location-id="inside the World Animation accordion, World Animation Shader Node Tree New button (in {windowId})" functionality-id="creates a new shader node tree for the world animation (in {windowId})" intent-id="initialize a new node tree for world animation (in {windowId})">
                        <span class="text-[#eee] text-[13px]">New</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleWorldCustomProperties} alt-id="World Custom Properties accordion" appearance-id="accordion header labeled Custom Properties in the World tab (in {windowId})" location-id="inside the World tab content area, at the bottom (in {windowId})" functionality-id="toggles custom properties for the world datablock (in {windowId})" intent-id="add or manage custom world-level properties (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="World New Custom Property button" appearance-id="button labeled New inside World Custom Properties accordion (in {windowId})" location-id="inside the World Custom Properties accordion (in {windowId})" functionality-id="creates a new custom property on the world (in {windowId})" intent-id="add a user-defined property to the world (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Collection breadcrumb" appearance-id="text label showing the current collection name (in {windowId})" location-id="top of the Collection tab, in the breadcrumbs row (in {windowId})" functionality-id="identifies the active collection being edited (in {windowId})" intent-id="confirm which collection's properties are shown (in {windowId})">Studio Assets</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[10px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Collection View Layer settings" appearance-id="settings section for collection view layer configuration (in {windowId})" location-id="inside the Collection View Layer sub-accordion, Collection View Layer settings (in {windowId})" functionality-id="shows settings for how this collection behaves in the active view layer (in {windowId})" intent-id="configure view-layer-specific collection behavior (in {windowId})"></i>
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Collection" appearance-id="thumbtack icon button in the Collection tab header (in {windowId})" location-id="top-right of the Collection tab breadcrumb area (in {windowId})" functionality-id="pins the current collection so it stays selected (in {windowId})" intent-id="keep these properties focused on a specific collection (in {windowId})"></i>
              </div>
            </div>
            
            <!-- Visibility -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionVisibility} alt-id="Collection Visibility accordion" appearance-id="accordion header labeled Visibility in the Collection tab (in {windowId})" location-id="inside the Collection tab content area, Collection Visibility accordion (in {windowId})" functionality-id="toggles the Visibility section for collection display settings (in {windowId})" intent-id="configure when and where the collection is visible (in {windowId})">
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
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection Visibility Selectable checkbox; checked" appearance-id="checked checkbox labeled Selectable in collection visibility (in {windowId})" location-id="inside the Collection Visibility accordion, Collection Visibility Selectable checkbox (in {windowId})" functionality-id="when checked, objects in this collection can be selected in the viewport (in {windowId})" intent-id="control whether the collection's objects are selectable (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Selectable</span>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 mt-1 justify-center pr-3">
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Show In</span>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection Visibility Show In Renders checkbox; checked" appearance-id="checked checkbox labeled Show In Renders in collection visibility (in {windowId})" location-id="inside the Collection Visibility accordion, Collection Visibility Show In Renders checkbox (in {windowId})" functionality-id="when checked, objects in this collection appear in final renders (in {windowId})" intent-id="control whether the collection renders (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Renders</span>
                      </div>
                    </div>
                  </div>

                  <!-- View Layer Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mt-1">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionVisibilityViewLayer} alt-id="Collection View Layer sub-accordion" appearance-id="sub-accordion labeled View Layer inside Collection Visibility (in {windowId})" location-id="inside the Collection Visibility accordion, Collection View Layer sub-accordion (in {windowId})" functionality-id="toggles per-view-layer visibility settings for the collection (in {windowId})" intent-id="configure the collection's visibility per view layer (in {windowId})">
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
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection View Layer Include checkbox; checked" appearance-id="checked checkbox labeled Include in the collection view layer settings (in {windowId})" location-id="inside the Collection View Layer sub-accordion, Collection View Layer Include checkbox (in {windowId})" functionality-id="when checked, includes this collection in the active view layer (in {windowId})" intent-id="include or exclude the collection from the view layer (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                                <i class="fa-solid fa-check text-[10px] text-white"></i>
                              </div>
                              <span class="text-[13px] text-[#eee] pointer-events-none">Include</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection View Layer Holdout checkbox; unchecked" appearance-id="unchecked checkbox labeled Holdout in the collection view layer settings (in {windowId})" location-id="inside the Collection View Layer sub-accordion, Collection View Layer Holdout checkbox (in {windowId})" functionality-id="when checked, renders this collection as a holdout/matte object (in {windowId})" intent-id="use the collection as a holdout in compositing (in {windowId})">
                              <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                              <span class="text-[13px] text-[#ccc] pointer-events-none">Holdout</span>
                            </div>
                            <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection View Layer Indirect Only checkbox; unchecked" appearance-id="unchecked checkbox labeled Indirect Only in the collection view layer settings (in {windowId})" location-id="inside the Collection View Layer sub-accordion, Collection View Layer Indirect Only checkbox (in {windowId})" functionality-id="when checked, renders this collection only for indirect light contribution (in {windowId})" intent-id="use the collection only as a light blocker or bouncer (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionInstancing} alt-id="Collection Instancing accordion" appearance-id="accordion header labeled Instancing in the Collection tab (in {windowId})" location-id="inside the Collection tab content area, Collection Instancing accordion (in {windowId})" functionality-id="toggles the Instancing section for collection instance settings (in {windowId})" intent-id="configure the collection for instancing (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Instance Offset X slider; value 0 m" appearance-id="numeric slider showing value 0 m for instance offset X (in {windowId})" location-id="inside the Collection Instancing accordion, Instance Offset X slider (in {windowId})" functionality-id="sets the X offset applied when the collection is instanced (in {windowId})" intent-id="adjust the X position of collection instances (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Instance Offset Y slider; value 0 m" appearance-id="numeric slider showing value 0 m for instance offset Y (in {windowId})" location-id="inside the Collection Instancing accordion, Instance Offset Y slider (in {windowId})" functionality-id="sets the Y offset applied when the collection is instanced (in {windowId})" intent-id="adjust the Y position of collection instances (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="w-[14px]"></div>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Instance Offset Z slider; value 0 m" appearance-id="numeric slider showing value 0 m for instance offset Z (in {windowId})" location-id="inside the Collection Instancing accordion, Instance Offset Z slider (in {windowId})" functionality-id="sets the Z offset applied when the collection is instanced (in {windowId})" intent-id="adjust the Z position of collection instances (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionExporters} alt-id="Collection Exporters accordion" appearance-id="accordion header labeled Exporters in the Collection tab (in {windowId})" location-id="inside the Collection tab content area, Collection Exporters accordion (in {windowId})" functionality-id="toggles the Exporters section for pipeline integration (in {windowId})" intent-id="configure exporters for production pipeline use (in {windowId})">
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
                        <div class="h-[20px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Exporter" appearance-id="button to add an exporter to the collection (in {windowId})" location-id="inside the Collection Exporters accordion, Add Exporter (in {windowId})" functionality-id="adds a new exporter configuration to the collection (in {windowId})" intent-id="set up a new export pipeline target (in {windowId})">
                          <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                        </div>
                        <div class="h-[20px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Exporter" appearance-id="button to remove an exporter from the collection (in {windowId})" location-id="inside the Collection Exporters accordion, Remove Exporter (in {windowId})" functionality-id="removes the selected exporter from the collection (in {windowId})" intent-id="delete an existing export configuration (in {windowId})">
                          <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                        </div>
                      </div>
                      <div class="flex flex-col gap-[2px]">
                        <div class="h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Move Exporter Up" appearance-id="button to move the exporter up in the list (in {windowId})" location-id="inside the Collection Exporters accordion, Move Exporter Up (in {windowId})" functionality-id="moves the selected exporter higher in the order (in {windowId})" intent-id="move the selected exporter up in the collection exporters list (in {windowId})">
                          <i class="fa-solid fa-caret-up text-[12px] text-[#888]"></i>
                        </div>
                        <div class="h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Move Exporter Down" appearance-id="button to move the exporter down in the list (in {windowId})" location-id="inside the Collection Exporters accordion, Move Exporter Down (in {windowId})" functionality-id="moves the selected exporter lower in the order (in {windowId})" intent-id="move the selected exporter down in the collection exporters list (in {windowId})">
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
                  <div class="w-full h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50 cursor-not-allowed gap-2" alt-id="Export All button (disabled)" appearance-id="disabled button labeled Export All in the Exporters section (in {windowId})" location-id="inside the Collection Exporters accordion, Export All button (disabled) (in {windowId})" functionality-id="when enabled, exports using all configured exporters (in {windowId})" intent-id="run all export configurations at once (in {windowId})">
                    <i class="fa-solid fa-arrow-up-from-bracket text-[11px] text-[#888] absolute left-5"></i>
                    <span class="text-[#888] text-[13px]">Export All</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Line Art -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionLineArt} alt-id="Collection Line Art accordion" appearance-id="accordion header labeled Line Art in the Collection tab (in {windowId})" location-id="inside the Collection tab content area, Collection Line Art accordion (in {windowId})" functionality-id="toggles Line Art settings for the collection (in {windowId})" intent-id="configure how collection objects contribute to line art rendering (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Collection Line Art Usage dropdown" appearance-id="dropdown for line art usage setting (in {windowId})" location-id="inside the Collection Line Art accordion (in {windowId})" functionality-id="selects how this collection contributes to Freestyle/line art (in {windowId})" intent-id="control the collection's line art inclusion mode (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Include</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2 mt-1">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Collection Mask checkbox; unchecked" appearance-id="unchecked checkbox labeled Mask in collection visibility (in {windowId})" location-id="inside the Collection Visibility accordion, Collection Mask checkbox (in {windowId})" functionality-id="when checked, uses this collection as a render mask (in {windowId})" intent-id="use the collection as a holdout mask (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative" alt-id="Intersection Priority slider; value 0" appearance-id="numeric slider showing value 0 for intersection priority (in {windowId})" location-id="inside a Data accordion, Intersection Priority slider (in {windowId})" functionality-id="sets the priority for resolving mesh intersections (in {windowId})" intent-id="control overlap handling when objects intersect (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleCollectionCustomProperties} alt-id="Collection Custom Properties accordion" appearance-id="accordion header labeled Custom Properties in the Collection tab (in {windowId})" location-id="inside the Collection tab content area, at the bottom (in {windowId})" functionality-id="toggles custom properties for the collection datablock (in {windowId})" intent-id="add or manage custom collection-level properties (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Collection New Custom Property button" appearance-id="button labeled New inside Collection Custom Properties (in {windowId})" location-id="inside the Collection Custom Properties accordion (in {windowId})" functionality-id="creates a new custom property on the collection (in {windowId})" intent-id="add a user-defined property to the collection (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Object breadcrumb" appearance-id="text label showing the current object name in the breadcrumb area (in {windowId})" location-id="top of the Object tab, in the breadcrumbs row, Object breadcrumb (in {windowId})" functionality-id="identifies the active object whose properties are shown (in {windowId})" intent-id="confirm which object's properties are being edited (in {windowId})">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[10px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Object settings" appearance-id="chevron-down icon button in the Object tab header (in {windowId})" location-id="top-right of the Object tab breadcrumb area, left of the pin (in {windowId})" functionality-id="opens a settings dropdown for object property options (in {windowId})" intent-id="access object settings and display options (in {windowId})"></i>
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object" appearance-id="thumbtack icon button in the Object tab header (in {windowId})" location-id="top-right of the Object tab breadcrumb area, Pin Object (in {windowId})" functionality-id="pins the current object so it stays selected regardless of viewport changes (in {windowId})" intent-id="keep these properties focused on a specific object (in {windowId})"></i>
              </div>
            </div>
            
            <!-- Active Object -->
            <div class="flex items-center gap-2 px-2 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="Active Object dropdown" appearance-id="dropdown showing the active object name with its icon (in {windowId})" location-id="below the breadcrumb in the Object tab (in {windowId})" functionality-id="switches between objects; currently shows the active object (in {windowId})" intent-id="navigate to a different object's properties (in {windowId})">
              <i class="fa-solid fa-square-dashed text-[13px] text-[#e68a00]"></i>
              <span class="text-[13px] text-[#eee] flex-1">Floor</span>
            </div>

            <!-- Transform -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectTransform} alt-id="Object Transform accordion" appearance-id="accordion header labeled Transform in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Transform accordion (in {windowId})" functionality-id="toggles the Transform section for object location, rotation, and scale (in {windowId})" intent-id="view and edit the object's spatial transform (in {windowId})">
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
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Location X slider; value 0 m" appearance-id="numeric slider showing value 0 m for the X location (in {windowId})" location-id="inside the Object Transform accordion, first row (in {windowId})" functionality-id="sets the X-axis world position of the object (in {windowId})" intent-id="position the object along the X axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Location X" appearance-id="lock icon button for X location in the Object Transform accordion (in {windowId})" location-id="next to the Location X slider (in {windowId})" functionality-id="when locked, prevents the X location from being changed (in {windowId})" intent-id="lock the X position to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Location Y slider; value 0 m" appearance-id="numeric slider showing value 0 m for the Y location (in {windowId})" location-id="inside the Object Transform accordion, second row (in {windowId})" functionality-id="sets the Y-axis world position of the object (in {windowId})" intent-id="position the object along the Y axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Location Y" appearance-id="lock icon button for Y location in the Object Transform accordion (in {windowId})" location-id="next to the Location Y slider (in {windowId})" functionality-id="when locked, prevents the Y location from being changed (in {windowId})" intent-id="lock the Y position to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Location Z slider; value -1 m" appearance-id="numeric slider showing value -1 m for the Z location (in {windowId})" location-id="inside the Object Transform accordion, third row (in {windowId})" functionality-id="sets the Z-axis world position of the object (in {windowId})" intent-id="position the object along the Z axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">-1 m</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Location Z" appearance-id="lock icon button for Z location in the Object Transform accordion (in {windowId})" location-id="next to the Location Z slider (in {windowId})" functionality-id="when locked, prevents the Z location from being changed (in {windowId})" intent-id="lock the Z position to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Rotation X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Rotation X slider; value 0°" appearance-id="numeric slider showing value 0° for X rotation (in {windowId})" location-id="inside the Object Transform accordion, first rotation row (in {windowId})" functionality-id="sets the X-axis rotation of the object (in {windowId})" intent-id="rotate the object around the X axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0&deg;</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Rotation X" appearance-id="lock icon button for X rotation in the Object Transform accordion (in {windowId})" location-id="next to the Rotation X slider (in {windowId})" functionality-id="when locked, prevents the X rotation from being changed (in {windowId})" intent-id="lock the X rotation to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Rotation Y slider; value 0°" appearance-id="numeric slider showing value 0° for Y rotation (in {windowId})" location-id="inside the Object Transform accordion, second rotation row (in {windowId})" functionality-id="sets the Y-axis rotation of the object (in {windowId})" intent-id="rotate the object around the Y axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0&deg;</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Rotation Y" appearance-id="lock icon button for Y rotation in the Object Transform accordion (in {windowId})" location-id="next to the Rotation Y slider (in {windowId})" functionality-id="when locked, prevents the Y rotation from being changed (in {windowId})" intent-id="lock the Y rotation to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Rotation Z slider; value 0°" appearance-id="numeric slider showing value 0° for Z rotation (in {windowId})" location-id="inside the Object Transform accordion, third rotation row (in {windowId})" functionality-id="sets the Z-axis rotation of the object (in {windowId})" intent-id="rotate the object around the Z axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0&deg;</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Rotation Z" appearance-id="lock icon button for Z rotation in the Object Transform accordion (in {windowId})" location-id="next to the Rotation Z slider (in {windowId})" functionality-id="when locked, prevents the Z rotation from being changed (in {windowId})" intent-id="lock the Z rotation to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Mode</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Rotation Mode dropdown" appearance-id="dropdown for selecting the rotation representation mode (in {windowId})" location-id="inside the Object Transform accordion, above the rotation sliders (in {windowId})" functionality-id="selects between Euler, Quaternion, and axis-angle rotation modes (in {windowId})" intent-id="choose how rotation values are stored and displayed (in {windowId})">
                      <span class="text-[13px] text-[#eee]">XYZ Euler</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                    <div class="w-[10px] opacity-0 pointer-events-none"><i class="fa-solid fa-unlock text-[10px]"></i></div>
                    <div class="w-1.5 h-1.5 opacity-0 mx-1"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Scale X</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Scale X slider; value 1.000" appearance-id="numeric slider showing value 1.000 for X scale (in {windowId})" location-id="inside the Object Transform accordion, first scale row (in {windowId})" functionality-id="sets the X-axis scale of the object (in {windowId})" intent-id="resize the object along the X axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Scale X" appearance-id="lock icon button for X scale in the Object Transform accordion (in {windowId})" location-id="next to the Scale X slider (in {windowId})" functionality-id="when locked, prevents the X scale from being changed (in {windowId})" intent-id="lock the X scale to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Scale Y slider; value 1.000" appearance-id="numeric slider showing value 1.000 for Y scale (in {windowId})" location-id="inside the Object Transform accordion, second scale row (in {windowId})" functionality-id="sets the Y-axis scale of the object (in {windowId})" intent-id="resize the object along the Y axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Scale Y" appearance-id="lock icon button for Y scale in the Object Transform accordion (in {windowId})" location-id="next to the Scale Y slider (in {windowId})" functionality-id="when locked, prevents the Y scale from being changed (in {windowId})" intent-id="lock the Y scale to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Scale Z slider; value 1.000" appearance-id="numeric slider showing value 1.000 for Z scale (in {windowId})" location-id="inside the Object Transform accordion, third scale row (in {windowId})" functionality-id="sets the Z-axis scale of the object (in {windowId})" intent-id="resize the object along the Z axis (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">1.000</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 opacity-70">
                      <i class="fa-solid fa-unlock text-[10px] text-[#ccc] cursor-pointer hover:text-white" alt-id="Lock Scale Z" appearance-id="lock icon button for Z scale in the Object Transform accordion (in {windowId})" location-id="next to the Scale Z slider (in {windowId})" functionality-id="when locked, prevents the Z scale from being changed (in {windowId})" intent-id="lock the Z scale to prevent accidental edits (in {windowId})"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#777] mx-1"></div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Delta Transform -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectDeltaTransform} alt-id="Object Delta Transform accordion" appearance-id="accordion header labeled Delta Transform in the Object tab (in {windowId})" location-id="inside the Object tab content area, below Transform (in {windowId})" functionality-id="toggles the Delta Transform section for additional offset transforms (in {windowId})" intent-id="apply extra transform offsets without changing the base transform (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectRelations} alt-id="Object Relations accordion" appearance-id="accordion header labeled Relations in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Relations accordion (in {windowId})" functionality-id="toggles the Relations section for parent and collection relationships (in {windowId})" intent-id="configure parent-child relationships and collection membership (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectCollections} alt-id="Object Collections accordion" appearance-id="accordion header labeled Collections in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Collections accordion (in {windowId})" functionality-id="toggles the Collections section showing which collections the object belongs to (in {windowId})" intent-id="manage collection membership for this object (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectInstancing} alt-id="Object Instancing accordion" appearance-id="accordion header labeled Instancing in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Instancing accordion (in {windowId})" functionality-id="toggles the Instancing section for object duplication settings (in {windowId})" intent-id="configure how this object is instanced (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectMotionPaths} alt-id="Object Motion Paths accordion" appearance-id="accordion header labeled Motion Paths in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Motion Paths accordion (in {windowId})" functionality-id="toggles the Motion Paths section for path visualization (in {windowId})" intent-id="configure motion path display for animation (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectShading} alt-id="Object Shading accordion" appearance-id="accordion header labeled Shading in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Shading accordion (in {windowId})" functionality-id="toggles the Shading section for object-level shading settings (in {windowId})" intent-id="configure shadow casting and receiving (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectMotionBlur} alt-id="Object Motion Blur accordion" appearance-id="accordion header labeled Motion Blur in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Motion Blur accordion (in {windowId})" functionality-id="toggles the Motion Blur section for per-object blur settings (in {windowId})" intent-id="configure motion blur for this specific object (in {windowId})">
                <div class="flex items-center gap-2">
                  {#if isObjectMotionBlurExpanded}
                    <i class="fa-solid fa-chevron-down text-[11px] w-3 text-center text-[#ccc]"></i>
                  {:else}
                    <i class="fa-solid fa-chevron-right text-[11px] w-3 text-center text-[#ccc]"></i>
                  {/if}
                  <div class="flex items-center gap-2" alt-id="Object Motion Blur checkbox; checked" appearance-id="checked checkbox for enabling motion blur on the object (in {windowId})" location-id="inside the Object Motion Blur accordion (in {windowId})" functionality-id="when checked, enables motion blur for this object during rendering (in {windowId})" intent-id="apply motion blur to this object (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectVisibility} alt-id="Object Visibility accordion" appearance-id="accordion header labeled Visibility in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Visibility accordion (in {windowId})" functionality-id="toggles the Visibility section for controlling render visibility (in {windowId})" intent-id="configure in which render passes this object is visible (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectViewportDisplay} alt-id="Object Viewport Display accordion" appearance-id="accordion header labeled Viewport Display in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Viewport Display accordion (in {windowId})" functionality-id="toggles the Viewport Display section for object appearance in the viewport (in {windowId})" intent-id="configure how this object looks in the 3D viewport (in {windowId})">
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
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Name checkbox; unchecked" appearance-id="unchecked checkbox labeled Show Name in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show Name checkbox (in {windowId})" functionality-id="when checked, displays the object's name as an overlay in the viewport (in {windowId})" intent-id="show or hide the object name label (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Name</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Axes checkbox; unchecked" appearance-id="unchecked checkbox labeled Show Axes in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show Axes checkbox (in {windowId})" functionality-id="when checked, displays the object's local axes in the viewport (in {windowId})" intent-id="show local coordinate axes for the object (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Axes</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Wireframe checkbox; unchecked" appearance-id="unchecked checkbox labeled Show Wireframe in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show Wireframe checkbox (in {windowId})" functionality-id="when checked, shows the wireframe on top of the solid object (in {windowId})" intent-id="overlay wireframe on the object in the viewport (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Wireframe</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show All Edges checkbox; unchecked" appearance-id="unchecked checkbox labeled Show All Edges in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show All Edges checkbox (in {windowId})" functionality-id="when checked, shows all mesh edges including hidden edges (in {windowId})" intent-id="display all edges of the mesh in viewport (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">All Edges</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Texture Space checkbox; unchecked" appearance-id="unchecked checkbox labeled Show Texture Space in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show Texture Space checkbox (in {windowId})" functionality-id="when checked, shows the object's texture space bounding box (in {windowId})" intent-id="display the texture space bounds (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Texture Space</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show Shadow checkbox; checked" appearance-id="checked checkbox labeled Show Shadow in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show Shadow checkbox (in {windowId})" functionality-id="when checked, shows this object casting shadows in the viewport (in {windowId})" intent-id="display shadow casting for this object in viewport (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Shadow</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Show In Front checkbox; unchecked" appearance-id="unchecked checkbox labeled Show In Front in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Show In Front checkbox (in {windowId})" functionality-id="when checked, renders this object on top of all others in the viewport (in {windowId})" intent-id="make this object always visible regardless of other geometry (in {windowId})">
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
                    <div class="flex-1 h-[22px] rounded-[3px] bg-white border border-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer" alt-id="Object Viewport Display Color picker" appearance-id="color swatch for the object's viewport display color (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Color picker (in {windowId})" functionality-id="sets the object's solid color in viewport display (in {windowId})" intent-id="customize the object's viewport color (in {windowId})"></div>
                    <div class="w-1.5 flex justify-center opacity-70">
                      <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Display As</span>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Object Viewport Display As dropdown" appearance-id="dropdown for selecting how the object is displayed in the viewport (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display As dropdown (in {windowId})" functionality-id="selects the display mode such as Textured, Solid, or Bounds (in {windowId})" intent-id="choose the viewport display style for this object (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Textured</span>
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                    </div>
                    <div class="w-1.5 h-1.5 mx-1 opacity-0 pointer-events-none"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Bounds</span>
                    <div class="flex-1 flex items-center gap-2 cursor-pointer" alt-id="Object Viewport Display Bounds checkbox; unchecked disabled" appearance-id="disabled unchecked checkbox labeled Bounds in viewport display (in {windowId})" location-id="inside the Object Viewport Display accordion, Object Viewport Display Bounds checkbox (in {windowId})" functionality-id="when enabled, shows a bounding box around the object (in {windowId})" intent-id="display the object's bounding volume (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectLineArt} alt-id="Object Line Art accordion" appearance-id="accordion header labeled Line Art in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Line Art accordion (in {windowId})" functionality-id="toggles the Line Art section for Freestyle line art settings (in {windowId})" intent-id="configure this object's contribution to line art rendering (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectAnimation} alt-id="Object Animation accordion" appearance-id="accordion header labeled Animation in the Object tab (in {windowId})" location-id="inside the Object tab content area, Object Animation accordion (in {windowId})" functionality-id="toggles the Animation section for object animation actions (in {windowId})" intent-id="configure keyframe animation for this object (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleObjectCustomProperties} alt-id="Object Custom Properties accordion" appearance-id="accordion header labeled Custom Properties in the Object tab (in {windowId})" location-id="inside the Object tab content area, at the bottom (in {windowId})" functionality-id="toggles custom properties for the object datablock (in {windowId})" intent-id="add or manage custom object-level properties (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Object New Custom Property button" appearance-id="button labeled New inside Object Custom Properties accordion (in {windowId})" location-id="inside the Object Custom Properties accordion (in {windowId})" functionality-id="creates a new custom property on the object (in {windowId})" intent-id="add a user-defined property to the object (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Object breadcrumb" appearance-id="text label showing the current object name in the breadcrumb area (in {windowId})" location-id="top of the Object tab, in the breadcrumbs row, Object breadcrumb (in {windowId})" functionality-id="identifies the active object whose properties are shown (in {windowId})" intent-id="confirm which object's properties are being edited (in {windowId})">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object" appearance-id="thumbtack icon button in the Object tab header (in {windowId})" location-id="top-right of the Object tab breadcrumb area, Pin Object (in {windowId})" functionality-id="pins the current object so it stays selected regardless of viewport changes (in {windowId})" intent-id="keep these properties focused on a specific object (in {windowId})"></i>
              </div>
            </div>
            
            <!-- Add Modifier Button -->
            <div class="w-full h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] mb-2 gap-2 relative" alt-id="Add Modifier button" appearance-id="dark button labeled Add Modifier at the top of the modifier list (in {windowId})" location-id="inside the Modifiers tab, below the breadcrumbs (in {windowId})" functionality-id="opens the modifier selection to add a new modifier (in {windowId})" intent-id="add a procedural modifier to the object (in {windowId})">
              <div class="absolute left-2 top-0 bottom-0 flex items-center">
                <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
              </div>
              <span class="text-[#eee] text-[13px]">Add Modifier</span>
            </div>
            
            <!-- Subdivision Modifier -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-2 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleModifierSubdivision} alt-id="Modifier Subdivision accordion" appearance-id="accordion header for the Subdivision Surface modifier (in {windowId})" location-id="inside the Modifiers tab, in the modifier stack (in {windowId})" functionality-id="toggles the Subdivision modifier settings panel (in {windowId})" intent-id="view and configure the subdivision surface modifier (in {windowId})">
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
                  <i class="fa-solid fa-camera text-[12px] text-[#4772b3]" alt-id="Modifier Render Visibility" appearance-id="small camera icon button on the modifier header (in {windowId})" location-id="inside the Modifier Subdivision accordion header row, in the visibility icons, Modifier Render Visibility (in {windowId})" functionality-id="toggles the modifier's visibility during rendering (in {windowId})" intent-id="show or hide the modifier's effect in final renders (in {windowId})"></i>
                  <i class="fa-solid fa-desktop text-[12px] text-[#4772b3]" alt-id="Modifier Viewport Visibility" appearance-id="small monitor icon button on the modifier header (in {windowId})" location-id="inside the Modifier Subdivision accordion header row, in the visibility icons, Modifier Viewport Visibility (in {windowId})" functionality-id="toggles the modifier's visibility in the viewport (in {windowId})" intent-id="show or hide the modifier's effect in the viewport (in {windowId})"></i>
                  <div class="flex items-center justify-center w-[13px] h-[13px] bg-[#4772b3] rounded-[2px]" alt-id="Modifier Edit Mode Visibility" appearance-id="small edit mode icon button on the modifier header (in {windowId})" location-id="inside the Modifier Subdivision accordion header row, in the visibility icons, Modifier Edit Mode Visibility (in {windowId})" functionality-id="toggles the modifier's visibility in Edit Mode (in {windowId})" intent-id="show or hide the modifier's effect while editing (in {windowId})">
                    <i class="fa-solid fa-square text-[9px] text-white"></i>
                  </div>
                  <div class="flex items-center justify-center w-[13px] h-[13px] bg-[#4772b3] rounded-[2px]" alt-id="Modifier On Cage Visibility" appearance-id="small cage icon button on the modifier header (in {windowId})" location-id="inside the Modifier Subdivision accordion header row, in the visibility icons, Modifier On Cage Visibility (in {windowId})" functionality-id="toggles whether editing affects the cage mesh (in {windowId})" intent-id="control whether Edit Mode edits the subdivided cage (in {windowId})">
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
                    <div class="flex-1 h-[22px] bg-[#4d4d4d] border border-[#222] rounded-l-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a]" alt-id="Catmull-Clark Mode" appearance-id="mode selector button for Catmull-Clark subdivision type (in {windowId})" location-id="inside the Subdivision section or modifier settings, Catmull-Clark Mode (in {windowId})" functionality-id="sets the subdivision algorithm to Catmull-Clark (in {windowId})" intent-id="choose Catmull-Clark algorithm for smooth curved subdivision (in {windowId})">
                      <span class="text-[13px] text-[#ccc]">Catmull-Clark</span>
                    </div>
                    <div class="flex-1 h-[22px] bg-[#4772b3] border border-[#222] border-l-0 rounded-r-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" alt-id="Simple Mode" appearance-id="mode selector button for Simple subdivision type (in {windowId})" location-id="inside the Subdivision section or modifier settings, Simple Mode (in {windowId})" functionality-id="sets the subdivision algorithm to Simple, which just splits edges (in {windowId})" intent-id="choose Simple algorithm for non-smoothing subdivision (in {windowId})">
                      <span class="text-[13px] text-white">Simple</span>
                    </div>
                  </div>
                  
                  <div class="flex flex-col gap-1.5 p-3 py-2">
                    <div class="flex items-center gap-2">
                      <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Levels Viewport</span>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Levels Viewport slider; value 4" appearance-id="numeric slider showing value 4 for viewport subdivision levels (in {windowId})" location-id="inside the Modifier Subdivision accordion, Levels Viewport slider (in {windowId})" functionality-id="sets the number of subdivision levels applied in the viewport (in {windowId})" intent-id="control viewport subdivision density (in {windowId})">
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
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Render slider; value 5" appearance-id="numeric slider showing value 5 for render samples (in {windowId})" location-id="inside the Render Sampling sub-accordion (in {windowId})" functionality-id="sets the number of render samples for Cycles (in {windowId})" intent-id="control render quality via sample count (in {windowId})">
                        <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                          <span class="text-[13px] text-[#eee]">5</span>
                        </div>
                      </div>
                      <div class="w-1.5 flex justify-center opacity-70">
                        <i class="fa-solid fa-circle text-[4px] text-[#888]"></i>
                      </div>
                    </div>
                    
                    <div class="flex items-center gap-2 mt-1 justify-center pr-3">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Optimal Display checkbox; checked" appearance-id="checked checkbox labeled Optimal Display (in {windowId})" location-id="inside the Subdivision section, Optimal Display checkbox (in {windowId})" functionality-id="reduces viewport display complexity for subdivided meshes (in {windowId})" intent-id="improve viewport performance with subdivided objects (in {windowId})">
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
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleModifierSubdivisionAdaptive} alt-id="Modifier Adaptive Subdivision sub-accordion" appearance-id="sub-accordion labeled Adaptive Subdivision inside the Subdivision modifier (in {windowId})" location-id="inside the Modifier Subdivision accordion, Modifier Adaptive Subdivision sub-accordion (in {windowId})" functionality-id="toggles adaptive subdivision settings (in {windowId})" intent-id="configure camera-distance-based adaptive subdivision (in {windowId})">
                      <div class="flex items-center gap-2">
                        {#if isModifierSubdivisionAdaptiveExpanded}
                          <i class="fa-solid fa-chevron-down text-[10px] w-2 text-center text-[#999]"></i>
                        {:else}
                          <i class="fa-solid fa-chevron-right text-[10px] w-2 text-center text-[#999]"></i>
                        {/if}
                        <div class="flex items-center gap-2" alt-id="Modifier Adaptive Subdivision checkbox; unchecked" appearance-id="unchecked checkbox labeled Adaptive Subdivision in the Subdivision modifier (in {windowId})" location-id="inside the Modifier Subdivision accordion, Modifier Adaptive Subdivision checkbox (in {windowId})" functionality-id="enables adaptive subdivision that adjusts detail based on camera distance (in {windowId})" intent-id="dynamically control subdivision density based on distance (in {windowId})">
                          <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                          <span class="text-[#ccc] text-[13px]">Adaptive Subdivision</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Advanced Sub-accordion -->
                  <div class="flex flex-col bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-1">
                    <div class="flex items-center justify-between px-4 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleModifierSubdivisionAdvanced} alt-id="Modifier Advanced sub-accordion" appearance-id="sub-accordion labeled Advanced inside the Subdivision modifier (in {windowId})" location-id="inside the Modifier Subdivision accordion, Modifier Advanced sub-accordion (in {windowId})" functionality-id="toggles advanced subdivision settings (in {windowId})" intent-id="access less common subdivision controls (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Object breadcrumb" appearance-id="text label showing the current object name in the breadcrumb area (in {windowId})" location-id="top of the Object tab, in the breadcrumbs row, Object breadcrumb (in {windowId})" functionality-id="identifies the active object whose properties are shown (in {windowId})" intent-id="confirm which object's properties are being edited (in {windowId})">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object" appearance-id="thumbtack icon button in the Object tab header (in {windowId})" location-id="top-right of the Object tab breadcrumb area, Pin Object (in {windowId})" functionality-id="pins the current object so it stays selected regardless of viewport changes (in {windowId})" intent-id="keep these properties focused on a specific object (in {windowId})"></i>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-x-2 gap-y-1">
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Force Field" appearance-id="button to add a Force Field (in {windowId})" location-id="inside the Data or Physics tab, Add Force Field (in {windowId})" functionality-id="adds a Force Field to the object for physics interactions (in {windowId})" intent-id="create a force field that affects physics simulations (in {windowId})">
                <i class="fa-solid fa-wind text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Force Field</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Soft Body" appearance-id="button to add Soft Body physics (in {windowId})" location-id="inside the Data or Physics tab, Add Soft Body (in {windowId})" functionality-id="adds a Soft Body simulation to the object (in {windowId})" intent-id="enable soft body deformation for this object (in {windowId})">
                <i class="fa-solid fa-leaf text-[12px] text-[#ccc] opacity-80 absolute left-2 transform -scale-x-100"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Soft Body</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Collision" appearance-id="button to add a Collision physics modifier (in {windowId})" location-id="inside the Data or Physics tab, Add Collision (in {windowId})" functionality-id="adds a Collision physics simulation to the object (in {windowId})" intent-id="enable collision detection for this object (in {windowId})">
                <i class="fa-solid fa-cubes text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Collision</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Fluid" appearance-id="button to add a Fluid simulation (in {windowId})" location-id="inside the Data or Physics tab, Add Fluid (in {windowId})" functionality-id="adds a Fluid simulation modifier to the object (in {windowId})" intent-id="enable fluid simulation for this object (in {windowId})">
                <i class="fa-solid fa-droplet text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Fluid</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Cloth" appearance-id="button to add a Cloth physics modifier (in {windowId})" location-id="inside the Data or Physics tab, Add Cloth (in {windowId})" functionality-id="adds a Cloth physics simulation to the object (in {windowId})" intent-id="enable cloth simulation for this object (in {windowId})">
                <i class="fa-solid fa-shirt text-[11px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Cloth</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Rigid Body" appearance-id="button to add Rigid Body physics (in {windowId})" location-id="inside the Data or Physics tab, Add Rigid Body (in {windowId})" functionality-id="adds a Rigid Body simulation to the object (in {windowId})" intent-id="make this object a rigid body in physics simulation (in {windowId})">
                <i class="fa-solid fa-box text-[12px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Rigid Body</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Dynamic Paint" appearance-id="button to add Dynamic Paint (in {windowId})" location-id="inside the Data or Physics tab, Add Dynamic Paint (in {windowId})" functionality-id="adds a Dynamic Paint modifier to the object (in {windowId})" intent-id="enable dynamic paint effects on this object (in {windowId})">
                <i class="fa-solid fa-paint-roller text-[11px] text-[#ccc] opacity-80 absolute left-2"></i>
                <span class="text-[#eee] text-[13px] w-full text-center pr-3">Dynamic Paint</span>
              </div>
              
              <div class="h-[22px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center px-2 shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer relative" alt-id="Add Rigid Body Constraint" appearance-id="button to add a Rigid Body Constraint (in {windowId})" location-id="inside the Data or Physics tab, Add Rigid Body Constraint (in {windowId})" functionality-id="adds a Rigid Body Constraint connecting two rigid bodies (in {windowId})" intent-id="link rigid bodies together with a physics constraint (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Object breadcrumb" appearance-id="text label showing the current object name in the breadcrumb area (in {windowId})" location-id="top of the Object tab, in the breadcrumbs row, Object breadcrumb (in {windowId})" functionality-id="identifies the active object whose properties are shown (in {windowId})" intent-id="confirm which object's properties are being edited (in {windowId})">Floor</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Object" appearance-id="thumbtack icon button in the Object tab header (in {windowId})" location-id="top-right of the Object tab breadcrumb area, Pin Object (in {windowId})" functionality-id="pins the current object so it stays selected regardless of viewport changes (in {windowId})" intent-id="keep these properties focused on a specific object (in {windowId})"></i>
              </div>
            </div>
            
            <!-- Add Object Constraint Header & Dropdown -->
            <div class="relative w-full">
              <div class="flex items-center justify-between px-3 h-[24px] cursor-pointer rounded-[3px] {isAddObjectConstraintDropdownOpen ? 'bg-[#4772b3] text-white shadow-none' : 'bg-[#1a1a1a] border border-[#151515] text-[#eee] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]'}" on:click={toggleAddObjectConstraintDropdown} alt-id="Add Object Constraint dropdown" appearance-id="button labeled Add Object Constraint (in {windowId})" location-id="inside the Constraints tab, at the top (in {windowId})" functionality-id="opens a dropdown to add a new constraint to the object (in {windowId})" intent-id="add a new constraint to control the object's transform (in {windowId})">
                <span class="text-[13px] font-medium {isAddObjectConstraintDropdownOpen ? 'text-white' : 'text-[#eee]'}">Add Object Constraint</span>
                <i class="fa-solid fa-chevron-down {isAddObjectConstraintDropdownOpen ? 'text-white' : 'text-[#888]'} text-[10px]"></i>
              </div>
              
              {#if isAddObjectConstraintDropdownOpen}
                <div class="fixed inset-0 z-40 bg-transparent" on:click|stopPropagation={() => { 
                  isAddObjectConstraintDropdownOpen = false; 
                  updateOpenParam(); 
                }}></div>
                <div class="absolute left-0 top-[24px] w-full bg-[#181818] rounded-b-[4px] shadow-[0_4px_6px_rgba(0,0,0,0.5)] z-50 flex border border-[#111] border-t-0" alt-id="Add Object Constraint dropdown menu" appearance-id="floating dropdown menu listing available constraint types (in {windowId})" location-id="overlaying the Add Object Constraint button when open (in {windowId})" functionality-id="shows all available constraint types to add (in {windowId})" intent-id="select a specific constraint type to add (in {windowId})">
                  <!-- Motion Tracking Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Motion Tracking</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Camera Solver constraint" appearance-id="constraint row labeled Camera Solver in the constraints list (in {windowId})" location-id="inside the Constraints tab, Camera Solver constraint (in {windowId})" functionality-id="displays the Camera Solver constraint settings (in {windowId})" intent-id="configure a Camera Solver constraint for motion tracking (in {windowId})">
                        <i class="fa-solid fa-camera-retro text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Camera Solver</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Follow Track constraint" appearance-id="constraint row labeled Follow Track in the constraints list (in {windowId})" location-id="inside the Constraints tab, Follow Track constraint (in {windowId})" functionality-id="displays the Follow Track constraint settings (in {windowId})" intent-id="track a motion tracking marker (in {windowId})">
                        <i class="fa-solid fa-route text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Follow Track</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Object Solver constraint" appearance-id="constraint row labeled Object Solver in the constraints list (in {windowId})" location-id="inside the Constraints tab, Object Solver constraint (in {windowId})" functionality-id="displays the Object Solver constraint settings (in {windowId})" intent-id="solve the object's position from motion tracking (in {windowId})">
                        <i class="fa-solid fa-box-open text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Object Solver</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Transform Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Transform</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Location constraint" appearance-id="constraint row labeled Copy Location in the constraints list (in {windowId})" location-id="inside the Constraints tab, Copy Location constraint (in {windowId})" functionality-id="displays the Copy Location constraint settings (in {windowId})" intent-id="copy another object's location (in {windowId})">
                        <i class="fa-solid fa-arrows-up-down-left-right text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Location</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Rotation constraint" appearance-id="constraint row labeled Copy Rotation in the constraints list (in {windowId})" location-id="inside the Constraints tab, Copy Rotation constraint (in {windowId})" functionality-id="displays the Copy Rotation constraint settings (in {windowId})" intent-id="copy another object's rotation (in {windowId})">
                        <i class="fa-solid fa-rotate text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Rotation</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Scale constraint" appearance-id="constraint row labeled Copy Scale in the constraints list (in {windowId})" location-id="inside the Constraints tab, Copy Scale constraint (in {windowId})" functionality-id="displays the Copy Scale constraint settings (in {windowId})" intent-id="copy another object's scale (in {windowId})">
                        <i class="fa-solid fa-maximize text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Scale</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Copy Transforms constraint" appearance-id="constraint row labeled Copy Transforms in the constraints list (in {windowId})" location-id="inside the Constraints tab, Copy Transforms constraint (in {windowId})" functionality-id="displays the Copy Transforms constraint settings (in {windowId})" intent-id="copy the full transform of another object (in {windowId})">
                        <i class="fa-solid fa-compress text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Copy Transforms</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px] mt-1.5" alt-id="Limit Distance constraint" appearance-id="constraint row labeled Limit Distance in the constraints list (in {windowId})" location-id="inside the Constraints tab, Limit Distance constraint (in {windowId})" functionality-id="displays the Limit Distance constraint settings (in {windowId})" intent-id="constrain the object within a distance from a target (in {windowId})">
                        <i class="fa-solid fa-arrows-left-right-to-line text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Distance</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Limit Location constraint" appearance-id="constraint row labeled Limit Location in the constraints list (in {windowId})" location-id="inside the Constraints tab, Limit Location constraint (in {windowId})" functionality-id="displays the Limit Location constraint settings (in {windowId})" intent-id="restrict the object's location within bounds (in {windowId})">
                        <i class="fa-solid fa-compress-arrows-alt text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Location</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Limit Rotation constraint" appearance-id="constraint row labeled Limit Rotation in the constraints list (in {windowId})" location-id="inside the Constraints tab, Limit Rotation constraint (in {windowId})" functionality-id="displays the Limit Rotation constraint settings (in {windowId})" intent-id="restrict the object's rotation within bounds (in {windowId})">
                        <i class="fa-solid fa-arrow-rotate-left text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Rotation</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Limit Scale constraint" appearance-id="constraint row labeled Limit Scale in the constraints list (in {windowId})" location-id="inside the Constraints tab, Limit Scale constraint (in {windowId})" functionality-id="displays the Limit Scale constraint settings (in {windowId})" intent-id="restrict the object's scale within bounds (in {windowId})">
                        <i class="fa-solid fa-down-left-and-up-right-to-center text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Limit Scale</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Maintain Volume constraint" appearance-id="constraint row labeled Maintain Volume in the constraints list (in {windowId})" location-id="inside the Constraints tab, Maintain Volume constraint (in {windowId})" functionality-id="displays the Maintain Volume constraint settings (in {windowId})" intent-id="preserve volume when scaling along one axis (in {windowId})">
                        <i class="fa-solid fa-minimize text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Maintain Volume</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px] mt-1.5" alt-id="Transformation constraint" appearance-id="constraint row labeled Transformation in the constraints list (in {windowId})" location-id="inside the Constraints tab, Transformation constraint (in {windowId})" functionality-id="displays the Transformation constraint settings (in {windowId})" intent-id="map transform values from one object to another (in {windowId})">
                        <i class="fa-solid fa-arrows-spin text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Transformation</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Transform Cache constraint" appearance-id="constraint row labeled Transform Cache in the constraints list (in {windowId})" location-id="inside the Constraints tab, Transform Cache constraint (in {windowId})" functionality-id="displays the Transform Cache constraint settings (in {windowId})" intent-id="import transforms from an Alembic cache (in {windowId})">
                        <i class="fa-solid fa-database text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Transform Cache</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Tracking Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Tracking</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Clamp To constraint" appearance-id="constraint row labeled Clamp To in the constraints list (in {windowId})" location-id="inside the Constraints tab, Clamp To constraint (in {windowId})" functionality-id="displays the Clamp To constraint settings (in {windowId})" intent-id="constrain movement along a curve (in {windowId})">
                        <i class="fa-solid fa-magnet text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Clamp To</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Damped Track constraint" appearance-id="constraint row labeled Damped Track in the constraints list (in {windowId})" location-id="inside the Constraints tab, Damped Track constraint (in {windowId})" functionality-id="displays the Damped Track constraint settings (in {windowId})" intent-id="track another object with minimum rotation (in {windowId})">
                        <i class="fa-solid fa-location-crosshairs text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Damped Track</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Locked Track constraint" appearance-id="constraint row labeled Locked Track in the constraints list (in {windowId})" location-id="inside the Constraints tab, Locked Track constraint (in {windowId})" functionality-id="displays the Locked Track constraint settings (in {windowId})" intent-id="track a target while keeping one axis fixed (in {windowId})">
                        <i class="fa-solid fa-lock text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Locked Track</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Stretch To constraint" appearance-id="constraint row labeled Stretch To in the constraints list (in {windowId})" location-id="inside the Constraints tab, Stretch To constraint (in {windowId})" functionality-id="displays the Stretch To constraint settings (in {windowId})" intent-id="stretch toward a target object (in {windowId})">
                        <i class="fa-solid fa-bullseye text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Stretch To</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Track To constraint" appearance-id="constraint row labeled Track To in the constraints list (in {windowId})" location-id="inside the Constraints tab, Track To constraint (in {windowId})" functionality-id="displays the Track To constraint settings (in {windowId})" intent-id="point an axis toward a target (in {windowId})">
                        <i class="fa-solid fa-arrow-right-to-bracket text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Track To</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Relationship Column -->
                  <div class="flex-1 flex flex-col p-1.5">
                    <span class="text-[12px] text-[#aaa] mb-1.5 px-2">Relationship</span>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Action constraint" appearance-id="constraint row labeled Action in the constraints list (in {windowId})" location-id="inside the Constraints tab, in the constraint stack, Action constraint (in {windowId})" functionality-id="displays the Action constraint settings (in {windowId})" intent-id="configure an Action constraint driving animation from another property (in {windowId})">
                        <i class="fa-solid fa-play text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Action</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Armature constraint" appearance-id="constraint row labeled Armature in the constraints list (in {windowId})" location-id="inside the Constraints tab, in the constraint stack, Armature constraint (in {windowId})" functionality-id="displays the Armature constraint settings (in {windowId})" intent-id="configure an Armature constraint for bone-driven transforms (in {windowId})">
                        <i class="fa-solid fa-bone text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Armature</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Child Of constraint" appearance-id="constraint row labeled Child Of in the constraints list (in {windowId})" location-id="inside the Constraints tab, Child Of constraint (in {windowId})" functionality-id="displays the Child Of constraint settings (in {windowId})" intent-id="make this object a child of another with offset (in {windowId})">
                        <i class="fa-solid fa-link text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Child Of</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Floor constraint" appearance-id="constraint row labeled Floor in the constraints list (in {windowId})" location-id="inside the Constraints tab, Floor constraint (in {windowId})" functionality-id="displays the Floor constraint settings (in {windowId})" intent-id="prevent the object from going below a floor plane (in {windowId})">
                        <i class="fa-solid fa-arrows-to-circle text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Floor</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Follow Path constraint" appearance-id="constraint row labeled Follow Path in the constraints list (in {windowId})" location-id="inside the Constraints tab, Follow Path constraint (in {windowId})" functionality-id="displays the Follow Path constraint settings (in {windowId})" intent-id="constrain movement along a path curve (in {windowId})">
                        <i class="fa-solid fa-bezier-curve text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Follow Path</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Geometry Attribute constraint" appearance-id="constraint row labeled Geometry Attribute in the constraints list (in {windowId})" location-id="inside the Constraints tab, Geometry Attribute constraint (in {windowId})" functionality-id="displays the Geometry Attribute constraint settings (in {windowId})" intent-id="drive the constraint from a geometry attribute (in {windowId})">
                        <i class="fa-solid fa-shapes text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Geometry Attribute</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Pivot constraint" appearance-id="constraint row labeled Pivot in the constraints list (in {windowId})" location-id="inside the Constraints tab, Pivot constraint (in {windowId})" functionality-id="displays the Pivot constraint settings (in {windowId})" intent-id="rotate around a custom pivot point (in {windowId})">
                        <i class="fa-solid fa-compress-arrows-alt text-[#888] text-[12px] group-hover:text-white w-3"></i>
                        <span class="text-[13px] text-[#ccc] group-hover:text-white">Pivot</span>
                      </div>
                      <div class="flex items-center gap-2 py-[2px] px-2 cursor-pointer hover:bg-[#4772b3] hover:text-white group rounded-[2px]" alt-id="Shrinkwrap constraint" appearance-id="constraint row labeled Shrinkwrap in the constraints list (in {windowId})" location-id="inside the Constraints tab, Shrinkwrap constraint (in {windowId})" functionality-id="displays the Shrinkwrap constraint settings (in {windowId})" intent-id="project the object onto a surface (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Object breadcrumb" appearance-id="text label showing the current object name in the breadcrumb area (in {windowId})" location-id="top of the Object tab, in the breadcrumbs row, Object breadcrumb (in {windowId})" functionality-id="identifies the active object whose properties are shown (in {windowId})" intent-id="confirm which object's properties are being edited (in {windowId})">Mesh</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-down text-[10px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Data settings" appearance-id="data block settings section at the top of the Data tab (in {windowId})" location-id="inside the Data tab header area (in {windowId})" functionality-id="contains the active data block selection and settings (in {windowId})" intent-id="configure the mesh data for this object (in {windowId})"></i>
                <i class="fa-solid fa-thumbtack text-[13px] text-[#888] cursor-pointer hover:text-[#ccc]" alt-id="Pin Data" appearance-id="thumbtack icon button in the Data tab header (in {windowId})" location-id="top-right of the Data tab breadcrumb area (in {windowId})" functionality-id="pins the current mesh data so it stays selected (in {windowId})" intent-id="keep these properties focused on a specific mesh datablock (in {windowId})"></i>
              </div>
            </div>
            
            <!-- Active Data Block -->
            <div class="flex items-center gap-2 px-2 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-[#222]" alt-id="Active Data Block dropdown" appearance-id="dropdown for selecting the active data block (in {windowId})" location-id="in the Data tab breadcrumbs area, Active Data Block dropdown (in {windowId})" functionality-id="switches between available data blocks for this object type (in {windowId})" intent-id="choose a different data block to use (in {windowId})">
              <i class="fa-solid fa-draw-polygon text-[13px] text-[#33cc66]"></i>
              <span class="text-[13px] text-[#eee] flex-1">Mesh</span>
            </div>

            <!-- Vertex Groups -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataVertexGroups} alt-id="Data Vertex Groups accordion" appearance-id="accordion header labeled Vertex Groups in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Vertex Groups accordion (in {windowId})" functionality-id="toggles the Vertex Groups section (in {windowId})" intent-id="manage vertex groups for weight painting and rigging (in {windowId})">
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
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Vertex Group" appearance-id="plus button for adding a vertex group (in {windowId})" location-id="inside the Data Vertex Groups accordion, Add Vertex Group (in {windowId})" functionality-id="adds a new vertex group to the mesh (in {windowId})" intent-id="create a new named vertex group (in {windowId})">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Vertex Group" appearance-id="minus button for removing a vertex group (in {windowId})" location-id="inside the Data Vertex Groups accordion, Remove Vertex Group (in {windowId})" functionality-id="removes the selected vertex group from the mesh (in {windowId})" intent-id="delete an unwanted vertex group (in {windowId})">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Vertex Group Menu" appearance-id="dropdown menu icon for vertex group options (in {windowId})" location-id="inside the Data Vertex Groups accordion, Vertex Group Menu (in {windowId})" functionality-id="opens a context menu with vertex group operations (in {windowId})" intent-id="access additional vertex group management options (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Shape Keys -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataShapeKeys} alt-id="Data Shape Keys accordion" appearance-id="accordion header labeled Shape Keys in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Shape Keys accordion (in {windowId})" functionality-id="toggles the Shape Keys section for mesh deformation presets (in {windowId})" intent-id="manage shape key basis and targets (in {windowId})">
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
                      <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Shape Key" appearance-id="plus button for adding a shape key (in {windowId})" location-id="inside the Data Shape Keys accordion, Add Shape Key (in {windowId})" functionality-id="adds a new shape key to the mesh (in {windowId})" intent-id="create a new shape deformation target (in {windowId})">
                        <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                      </div>
                      <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Shape Key" appearance-id="minus button for removing a shape key (in {windowId})" location-id="inside the Data Shape Keys accordion, Remove Shape Key (in {windowId})" functionality-id="removes the selected shape key (in {windowId})" intent-id="delete an unwanted shape key (in {windowId})">
                        <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                      </div>
                      <div class="h-[2px]"></div>
                      <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Shape Key Menu" appearance-id="dropdown menu icon for shape key options (in {windowId})" location-id="inside the Data Shape Keys accordion, Shape Key Menu (in {windowId})" functionality-id="opens a context menu with shape key operations (in {windowId})" intent-id="access additional shape key management options (in {windowId})">
                        <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                      </div>
                    </div>
                  </div>
                  <div class="h-[24px] bg-[#3d3d3d] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)] hover:bg-[#474747] cursor-pointer" alt-id="Add Rest Position button" appearance-id="button labeled Add Rest Position in the Rigid Body World accordion (in {windowId})" location-id="inside the Rigid Body World accordion, Add Rest Position button (in {windowId})" functionality-id="adds a rest position state for rigid body simulation (in {windowId})" intent-id="define the initial rest state for rigid body objects (in {windowId})">
                    <span class="text-[#eee] text-[13px]">Add Rest Position</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- UV Maps -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataUVMaps} alt-id="Data UV Maps accordion" appearance-id="accordion header labeled UV Maps in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data UV Maps accordion (in {windowId})" functionality-id="toggles the UV Maps section for UV coordinate layers (in {windowId})" intent-id="manage UV map layers for texture mapping (in {windowId})">
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
                    <div class="flex items-center justify-between px-2 py-1 bg-[#4772b3] cursor-pointer" alt-id="UVMap selected item" appearance-id="highlighted UV map item in the UV Maps list (in {windowId})" location-id="inside the Data UV Maps accordion, UVMap selected item (in {windowId})" functionality-id="shows the currently selected/active UV map (in {windowId})" intent-id="identify the active UV map being edited (in {windowId})">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-draw-polygon text-[12px] text-white"></i>
                        <span class="text-[13px] text-white">UVMap</span>
                      </div>
                      <i class="fa-solid fa-camera text-[12px] text-white opacity-80"></i>
                    </div>
                    <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add UV Map" appearance-id="plus button for adding a UV map (in {windowId})" location-id="inside the Data UV Maps accordion, Add UV Map (in {windowId})" functionality-id="adds a new UV map layer to the mesh (in {windowId})" intent-id="create a new UV coordinate layer (in {windowId})">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove UV Map" appearance-id="minus button for removing a UV map (in {windowId})" location-id="inside the Data UV Maps accordion, Remove UV Map (in {windowId})" functionality-id="removes the selected UV map layer (in {windowId})" intent-id="delete an unwanted UV map (in {windowId})">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="UV Map Menu" appearance-id="dropdown menu icon for UV map options (in {windowId})" location-id="inside the Data UV Maps accordion, UV Map Menu (in {windowId})" functionality-id="opens a context menu for UV map operations (in {windowId})" intent-id="access additional UV map management options (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Color Attributes -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataColorAttributes} alt-id="Data Color Attributes accordion" appearance-id="accordion header labeled Color Attributes in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Color Attributes accordion (in {windowId})" functionality-id="toggles the Color Attributes section for vertex color data (in {windowId})" intent-id="manage vertex color layers (in {windowId})">
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
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Color Attribute" appearance-id="plus button for adding a color attribute (in {windowId})" location-id="inside the Data Color Attributes accordion, Add Color Attribute (in {windowId})" functionality-id="adds a new color attribute layer to the mesh (in {windowId})" intent-id="create a new vertex color layer (in {windowId})">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Color Attribute" appearance-id="minus button for removing a color attribute (in {windowId})" location-id="inside the Data Color Attributes accordion, Remove Color Attribute (in {windowId})" functionality-id="removes the selected color attribute layer (in {windowId})" intent-id="delete an unwanted vertex color layer (in {windowId})">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Color Attribute Menu" appearance-id="dropdown menu icon for color attribute options (in {windowId})" location-id="inside the Data Color Attributes accordion, Color Attribute Menu (in {windowId})" functionality-id="opens a context menu for color attribute operations (in {windowId})" intent-id="access additional color attribute management options (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Attributes -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataAttributes} alt-id="Data Attributes accordion" appearance-id="accordion header labeled Attributes in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Attributes accordion (in {windowId})" functionality-id="toggles the Attributes section for mesh attribute data (in {windowId})" intent-id="manage generic mesh attributes (in {windowId})">
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
                    <div class="flex items-center justify-between px-3 py-[2px] cursor-pointer hover:bg-[#222]" alt-id="position Attribute item" appearance-id="attribute item labeled position in the Attributes list (in {windowId})" location-id="inside the Data Attributes accordion, position Attribute item (in {windowId})" functionality-id="represents the position attribute of the mesh (in {windowId})" intent-id="view the vertex position attribute (in {windowId})">
                      <span class="text-[13px] text-[#ccc]">position</span>
                      <span class="text-[11px] text-[#888]">Vertex &middot; Vector</span>
                    </div>
                    <div class="flex items-center justify-between px-3 py-[2px] cursor-pointer hover:bg-[#222]" alt-id="UVMap Attribute item" appearance-id="UV map item in the UV Maps list (in {windowId})" location-id="inside the Data UV Maps accordion, UVMap Attribute item (in {windowId})" functionality-id="represents a UV map layer in the list (in {windowId})" intent-id="select this UV map as the active one (in {windowId})">
                      <span class="text-[13px] text-[#ccc]">UVMap</span>
                      <span class="text-[11px] text-[#888]">Face Corner &middot; 2D Vector</span>
                    </div>
                    <i class="fa-solid fa-grip-lines text-[#888] absolute right-2 bottom-2 text-[12px] opacity-40"></i>
                  </div>
                  <div class="flex flex-col gap-[2px]">
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Add Attribute" appearance-id="plus button for adding an attribute (in {windowId})" location-id="inside the Data Attributes accordion, Add Attribute (in {windowId})" functionality-id="adds a new generic attribute to the mesh (in {windowId})" intent-id="create a new named mesh attribute (in {windowId})">
                      <i class="fa-solid fa-plus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Remove Attribute" appearance-id="minus button for removing an attribute (in {windowId})" location-id="inside the Data Attributes accordion, Remove Attribute (in {windowId})" functionality-id="removes the selected attribute from the mesh (in {windowId})" intent-id="delete an unwanted mesh attribute (in {windowId})">
                      <i class="fa-solid fa-minus text-[11px] text-[#888]"></i>
                    </div>
                    <div class="h-[2px]"></div>
                    <div class="w-[24px] h-[20px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#3d3d3d] opacity-50" alt-id="Attribute Menu" appearance-id="dropdown menu icon for attribute options (in {windowId})" location-id="inside the Data Attributes accordion, Attribute Menu (in {windowId})" functionality-id="opens a context menu for attribute operations (in {windowId})" intent-id="access additional attribute management options (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[11px] text-[#888]"></i>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Texture Space -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataTextureSpace} alt-id="Data Texture Space accordion" appearance-id="accordion header labeled Texture Space in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Texture Space accordion (in {windowId})" functionality-id="toggles the Texture Space section for automatic UV mapping (in {windowId})" intent-id="configure the automatic texture space for this mesh (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Texture Mesh input" appearance-id="text input for a texture reference mesh (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Mesh input (in {windowId})" functionality-id="sets a reference mesh object for texture space calculation (in {windowId})" intent-id="use another object's shape to define texture coordinates (in {windowId})">
                      <i class="fa-solid fa-draw-polygon text-[12px] text-[#33cc66] mr-2"></i>
                      <span class="text-[13px] text-[#eee] flex-1 opacity-50">Mesh</span>
                    </div>
                    <div class="flex items-center justify-center w-5 cursor-pointer opacity-70 hover:opacity-100" alt-id="interactive element 6976" appearance-id="interactive element in the Properties panel (in {windowId})" location-id="inside the Properties panel content area, interactive element 6976 (in {windowId})" functionality-id="provides an interactive control within the properties (in {windowId})" intent-id="interact with this property control (in {windowId})">
                      <i class="fa-solid fa-pen text-[12px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 justify-center pr-[26px]">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Auto Texture Space checkbox; checked" appearance-id="checked checkbox labeled Auto in texture space settings (in {windowId})" location-id="inside the Data Texture Space accordion, Auto Texture Space checkbox (in {windowId})" functionality-id="when checked, automatically calculates the texture space from the mesh bounds (in {windowId})" intent-id="use automatic texture space calculation (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none font-medium">Auto Texture Space</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Location X</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Location X slider; value 0 m disabled" appearance-id="disabled slider for texture space location X (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Space Location X slider (in {windowId})" functionality-id="shows the X location of the texture space origin (disabled with Auto enabled) (in {windowId})" intent-id="manually set texture space X origin (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">0 m</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Location Y slider; value 0 m disabled" appearance-id="disabled slider for texture space location Y (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Space Location Y slider (in {windowId})" functionality-id="shows the Y location of the texture space origin (disabled with Auto enabled) (in {windowId})" intent-id="manually set texture space Y origin (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">0 m</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Location Z slider; value 0 m disabled" appearance-id="disabled slider for texture space location Z (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Space Location Z slider (in {windowId})" functionality-id="shows the Z location of the texture space origin (disabled with Auto enabled) (in {windowId})" intent-id="manually set texture space Z origin (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">0 m</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Size X</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Size X slider; value 1.000 disabled" appearance-id="disabled slider for texture space size X (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Space Size X slider (in {windowId})" functionality-id="shows the X size of the texture space (disabled with Auto enabled) (in {windowId})" intent-id="manually set texture space X size (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">1.000</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Y</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Size Y slider; value 1.000 disabled" appearance-id="disabled slider for texture space size Y (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Space Size Y slider (in {windowId})" functionality-id="shows the Y size of the texture space (disabled with Auto enabled) (in {windowId})" intent-id="manually set texture space Y size (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#ccc]">1.000</span>
                      </div>
                    </div>
                    <div class="w-5"></div>
                  </div>

                  <div class="flex items-center gap-2 opacity-50">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Z</span>
                    <div class="flex-1 bg-[#333] border border-[#222] rounded-[3px] h-[22px] flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] overflow-hidden relative cursor-not-allowed" alt-id="Texture Space Size Z slider; value 1.000 disabled" appearance-id="disabled slider for texture space size Z (in {windowId})" location-id="inside the Data Texture Space accordion, Texture Space Size Z slider (in {windowId})" functionality-id="shows the Z size of the texture space (disabled with Auto enabled) (in {windowId})" intent-id="manually set texture space Z size (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataRemesh} alt-id="Data Remesh accordion" appearance-id="accordion header labeled Remesh in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Remesh accordion (in {windowId})" functionality-id="toggles the Remesh section for mesh retopology tools (in {windowId})" intent-id="access voxel and quad remesh tools (in {windowId})">
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
                      <div class="flex-1 bg-[#4772b3] border border-[#222] rounded-l-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" alt-id="Remesh Mode Voxel" appearance-id="Voxel mode toggle button in the Remesh section (in {windowId})" location-id="inside the Data Remesh accordion, Remesh Mode Voxel (in {windowId})" functionality-id="selects Voxel remesh mode for volume-based remeshing (in {windowId})" intent-id="use voxel-based remeshing algorithm (in {windowId})">
                        <span class="text-[13px] text-white">Voxel</span>
                      </div>
                      <div class="flex-1 bg-[#4d4d4d] border border-[#222] border-l-0 rounded-r-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a]" alt-id="Remesh Mode Quad" appearance-id="Quad mode toggle button in the Remesh section (in {windowId})" location-id="inside the Data Remesh accordion, Remesh Mode Quad (in {windowId})" functionality-id="selects Quad remesh mode for quad-based retopology (in {windowId})" intent-id="use quad-dominant remeshing algorithm (in {windowId})">
                        <span class="text-[13px] text-[#ccc]">Quad</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Voxel Size</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Voxel Size slider; value 0.1 m" appearance-id="numeric slider showing value 0.1 m for voxel remesh size (in {windowId})" location-id="inside the Data Remesh accordion, Voxel Size slider (in {windowId})" functionality-id="sets the voxel size for voxel remeshing (in {windowId})" intent-id="control detail density of voxel remesh (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0.1 m</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Adaptivity</span>
                    <div class="flex-1 bg-[#4d4d4d] border border-[#222] rounded-[3px] h-[22px] flex items-center cursor-ew-resize shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] overflow-hidden relative group" alt-id="Adaptivity slider; value 0 m" appearance-id="numeric slider showing value 0 m for remesh adaptivity (in {windowId})" location-id="inside the Data Remesh accordion, Adaptivity slider (in {windowId})" functionality-id="sets the adaptivity threshold for voxel remeshing (in {windowId})" intent-id="reduce polygon count on flat areas (in {windowId})">
                      <div class="w-full h-full absolute left-0 top-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[13px] text-[#eee]">0 m</span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <div class="flex items-center gap-2 cursor-pointer" alt-id="Fix Poles checkbox; checked" appearance-id="checked checkbox labeled Fix Poles (in {windowId})" location-id="inside the Subdivision section, Fix Poles checkbox (in {windowId})" functionality-id="reduces pinching at poles in Catmull-Clark subdivision (in {windowId})" intent-id="improve mesh quality at high-degree vertices (in {windowId})">
                      <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                      <span class="text-[13px] text-[#eee] pointer-events-none">Fix Poles</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1 justify-center">
                    <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Preserve</span>
                    <div class="flex flex-col flex-1 gap-1.5">
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Preserve Volume checkbox; checked" appearance-id="checked checkbox labeled Preserve Volume in the Data tab (in {windowId})" location-id="inside a Data accordion, Preserve Volume checkbox (in {windowId})" functionality-id="when checked, preserves mesh volume during deformation (in {windowId})" intent-id="maintain volume when the mesh is deformed (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#4772b3] border border-[#111] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center shrink-0 pointer-events-none">
                          <i class="fa-solid fa-check text-[10px] text-white"></i>
                        </div>
                        <span class="text-[13px] text-[#eee] pointer-events-none">Volume</span>
                      </div>
                      <div class="flex items-center gap-2 cursor-pointer" alt-id="Preserve Attributes checkbox; unchecked" appearance-id="unchecked checkbox labeled Preserve Attributes in the Data tab (in {windowId})" location-id="inside a Data accordion, Preserve Attributes checkbox (in {windowId})" functionality-id="when checked, preserves vertex attributes during operations (in {windowId})" intent-id="keep custom attributes through mesh operations (in {windowId})">
                        <div class="w-[14px] h-[14px] bg-[#3d3d3d] border border-[#222] rounded-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] shrink-0 pointer-events-none"></div>
                        <span class="text-[13px] text-[#ccc] pointer-events-none">Attributes</span>
                      </div>
                    </div>
                  </div>

                  <div class="w-full h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a] mt-2 cursor-pointer" alt-id="Voxel Remesh button" appearance-id="button labeled Voxel Remesh in the Remesh accordion (in {windowId})" location-id="inside the Data Remesh accordion, Voxel Remesh button (in {windowId})" functionality-id="executes the voxel remesh operation on the mesh (in {windowId})" intent-id="apply voxel remeshing to retopologize the mesh (in {windowId})">
                    <span class="text-[#eee] text-[13px]">Voxel Remesh</span>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Geometry Data -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataGeometryData} alt-id="Data Geometry Data accordion" appearance-id="accordion header labeled Geometry Data in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Geometry Data accordion (in {windowId})" functionality-id="toggles the Geometry Data section for mesh attribute management (in {windowId})" intent-id="manage geometry data like custom normals and UV data (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center cursor-not-allowed shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Clear Sculpt Mask Data disabled" appearance-id="disabled button to clear sculpt mask data (in {windowId})" location-id="inside the Data Geometry Data accordion, Clear Sculpt Mask Data disabled (in {windowId})" functionality-id="when enabled, removes sculpt mask data from the mesh (in {windowId})" intent-id="delete stored sculpt mask information (in {windowId})">
                      <span class="text-[13px] text-[#ccc]">Clear Sculpt Mask Data</span>
                    </div>
                    <div class="absolute left-2 top-0 bottom-0 flex items-center opacity-50">
                      <i class="fa-solid fa-xmark text-[12px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="flex relative">
                    <div class="flex-1 h-[24px] bg-[#333] border border-[#222] rounded-[3px] flex items-center justify-center cursor-not-allowed shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-50" alt-id="Clear Skin Data disabled" appearance-id="disabled button to clear skin data (in {windowId})" location-id="inside the Data Geometry Data accordion, Clear Skin Data disabled (in {windowId})" functionality-id="when enabled, removes skin modifier data from the mesh (in {windowId})" intent-id="delete stored skin modifier information (in {windowId})">
                      <span class="text-[13px] text-[#ccc]">Clear Skin Data</span>
                    </div>
                    <div class="absolute left-2 top-0 bottom-0 flex items-center opacity-50">
                      <i class="fa-solid fa-xmark text-[12px] text-[#888]"></i>
                    </div>
                  </div>

                  <div class="w-full h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:bg-[#5a5a5a]" alt-id="Reorder Mesh Spatially" appearance-id="button to reorder mesh data spatially (in {windowId})" location-id="inside the Data Geometry Data accordion, Reorder Mesh Spatially (in {windowId})" functionality-id="reorders the mesh vertex/face data for spatial locality (in {windowId})" intent-id="optimize mesh data layout for rendering and simulation (in {windowId})">
                    <span class="text-[13px] text-[#eee]">Reorder Mesh Spatially</span>
                  </div>

                  <div class="flex relative mt-[1px]">
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a]" alt-id="Add Custom Normals Data" appearance-id="button to add custom normals data to the mesh (in {windowId})" location-id="inside the Data Geometry Data accordion, Add Custom Normals Data (in {windowId})" functionality-id="adds custom normal data storage to the mesh (in {windowId})" intent-id="enable custom normals for shading control (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataAnimation} alt-id="Data Animation accordion" appearance-id="accordion header labeled Animation in the Data tab (in {windowId})" location-id="inside the Data tab content area, Data Animation accordion (in {windowId})" functionality-id="toggles animation settings for the mesh data block (in {windowId})" intent-id="configure animation actions for the mesh (in {windowId})">
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
                      <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Data Animation Mesh dropdown" appearance-id="dropdown for selecting mesh animation action (in {windowId})" location-id="inside the Data Animation accordion, Data Animation Mesh dropdown (in {windowId})" functionality-id="selects the animation action for the mesh data (in {windowId})" intent-id="choose which animation to apply to the mesh (in {windowId})">
                        <i class="fa-solid fa-draw-polygon text-[12px] text-[#33cc66] mr-2"></i>
                        <span class="text-[13px] text-[#eee] flex-1 opacity-50">Mesh</span>
                        <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                      </div>
                    </div>
                    <div class="px-5 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Data Animation New button" appearance-id="button labeled New in the Data Animation section (in {windowId})" location-id="inside the Data Animation accordion, Data Animation New button (in {windowId})" functionality-id="creates a new animation action for the mesh data (in {windowId})" intent-id="initialize a new mesh animation (in {windowId})">
                      <span class="text-[13px] text-[#eee]">New</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Custom Properties -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-4">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleDataCustomProperties} alt-id="Data Custom Properties accordion" appearance-id="accordion header labeled Custom Properties in the Data tab (in {windowId})" location-id="inside the Data tab content area, at the bottom (in {windowId})" functionality-id="toggles custom properties for the mesh datablock (in {windowId})" intent-id="add or manage custom mesh data properties (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="Data New Custom Property button" appearance-id="button labeled New inside Data Custom Properties accordion (in {windowId})" location-id="inside the Data Custom Properties accordion (in {windowId})" functionality-id="creates a new custom property on the mesh (in {windowId})" intent-id="add a user-defined property to the mesh data (in {windowId})">
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
                <span class="text-[#eee]" alt-id="Object breadcrumb" appearance-id="text label showing the current object name in the breadcrumb area (in {windowId})" location-id="top of the Object tab, in the breadcrumbs row, Object breadcrumb (in {windowId})" functionality-id="identifies the active object whose properties are shown (in {windowId})" intent-id="confirm which object's properties are being edited (in {windowId})">Cube.005</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#666]"></i>
                <i class="fa-solid fa-play text-[14px] text-[#ccc] transform -rotate-90"></i>
                <span class="text-[#eee]" alt-id="Mesh breadcrumb" appearance-id="text label showing the mesh data block name (in {windowId})" location-id="top of the Data tab, in the breadcrumbs row (in {windowId})" functionality-id="identifies the active mesh datablock being edited (in {windowId})" intent-id="confirm which mesh data is being configured (in {windowId})">Cube.005</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-[#666]"></i>
                <i class="fa-solid fa-circle text-[14px] text-[#ff6666] opacity-0"></i>
                <i class="fa-solid fa-circle-half-stroke text-[14px] text-[#ff6666] absolute"></i>
                <span class="text-[#eee] ml-1" alt-id="Material breadcrumb" appearance-id="text label showing the current material name in the breadcrumb area (in {windowId})" location-id="top of the Material tab, in the breadcrumbs row (in {windowId})" functionality-id="identifies the active material being edited (in {windowId})" intent-id="confirm which material's properties are shown (in {windowId})">Wooden Bars</span>
              </div>
            </div>
            
            <!-- Material List -->
            <div class="flex items-stretch gap-1 mb-1">
              <div class="flex-1 h-[70px] bg-[#1a1a1a] border border-[#151515] rounded-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                <div class="flex items-center gap-2 px-2 py-1 bg-[#4772b3] cursor-pointer" alt-id="Selected Material List Item" appearance-id="highlighted item in the material slots list (in {windowId})" location-id="inside the Material tab, in the material slot list (in {windowId})" functionality-id="shows the currently selected material slot (in {windowId})" intent-id="identify the active material slot (in {windowId})">
                  <i class="fa-solid fa-circle-half-stroke text-[13px] text-[#222]"></i>
                  <span class="text-[13px] text-white">Wooden Bars</span>
                </div>
              </div>
              <div class="flex flex-col gap-1 w-6">
                <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Add Material Slot" appearance-id="plus button for adding a material slot (in {windowId})" location-id="inside the Material tab, beside the material list, Add Material Slot (in {windowId})" functionality-id="adds a new material slot to the object (in {windowId})" intent-id="assign additional materials to different mesh areas (in {windowId})">
                  <i class="fa-solid fa-plus text-[11px] text-[#ccc]"></i>
                </div>
                <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Remove Material Slot" appearance-id="minus button for removing a material slot (in {windowId})" location-id="inside the Material tab, beside the material list, Remove Material Slot (in {windowId})" functionality-id="removes the selected material slot from the object (in {windowId})" intent-id="delete an unused material slot (in {windowId})">
                  <i class="fa-solid fa-minus text-[11px] text-[#ccc]"></i>
                </div>
                <div class="h-[22px] bg-[#4d4d4d] hover:bg-[#5a5a5a] border border-[#222] rounded-[3px] flex items-center justify-center shadow-sm" alt-id="Specials Menu" appearance-id="special operations menu button in the Data tab (in {windowId})" location-id="inside the Data tab accordion headers (in {windowId})" functionality-id="opens a specials menu with additional operations (in {windowId})" intent-id="access additional mesh data operations (in {windowId})">
                  <i class="fa-solid fa-chevron-down text-[10px] text-[#ccc]"></i>
                </div>
              </div>
            </div>

            <!-- Active Material Dropdown -->
            <div class="flex items-center bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[24px] mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
              <div class="flex items-center gap-2 px-2 flex-1 cursor-pointer hover:bg-[#222] h-full" alt-id="Active Material dropdown" appearance-id="dropdown for selecting the active material slot (in {windowId})" location-id="in the Material tab breadcrumbs area (in {windowId})" functionality-id="switches between material slots on the active object (in {windowId})" intent-id="navigate to a different material slot (in {windowId})">
                <i class="fa-solid fa-circle-half-stroke text-[13px] text-[#eee]"></i>
                <span class="text-[13px] text-[#eee] flex-1">Wooden Bars</span>
              </div>
              <div class="flex items-center justify-center w-[40px] h-full border-l border-[#151515] bg-[#333]" alt-id="Users" appearance-id="small number badge showing user count for a datablock (in {windowId})" location-id="in a Properties tab header area, beside the datablock name (in {windowId})" functionality-id="shows how many objects reference this datablock (in {windowId})" intent-id="check sharing of this datablock (in {windowId})">
                <span class="text-[12px] text-[#eee]">7</span>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Fake User" appearance-id="shield icon button to toggle fake user status (in {windowId})" location-id="in a Properties tab header near the datablock name (in {windowId})" functionality-id="when active, prevents the datablock from being auto-deleted when unreferenced (in {windowId})" intent-id="protect a datablock from garbage collection (in {windowId})">
                <i class="fa-solid fa-shield text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="New Material" appearance-id="button labeled New for creating a new material (in {windowId})" location-id="inside the Material tab, beside the material dropdown (in {windowId})" functionality-id="creates a new material and assigns it to the slot (in {windowId})" intent-id="initialize a blank material for this slot (in {windowId})">
                <i class="fa-regular fa-copy text-[12px] text-[#ccc]"></i>
              </div>
              <div class="flex items-center justify-center w-8 h-full border-l border-[#151515] cursor-pointer hover:bg-[#333]" alt-id="Unlink Data-block" appearance-id="unlink icon button next to the data block dropdown (in {windowId})" location-id="in the Data tab breadcrumbs area, Unlink Data-block (in {windowId})" functionality-id="unlinks the current data block from the object (in {windowId})" intent-id="detach the mesh data from this object (in {windowId})">
                <i class="fa-solid fa-xmark text-[12px] text-[#ccc]"></i>
              </div>
            </div>

            <!-- Preview -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialPreview} alt-id="Material Preview accordion" appearance-id="accordion header labeled Preview in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Preview accordion (in {windowId})" functionality-id="toggles the material preview sphere display (in {windowId})" intent-id="see a visual preview of the material (in {windowId})">
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
                  <div class="flex-1 bg-[#1a1a1a] rounded-[3px] border border-[#151515] h-[100px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden" alt-id="Preview Area" appearance-id="rendered preview sphere showing the material appearance (in {windowId})" location-id="inside the Material Preview accordion (in {windowId})" functionality-id="displays a rendered preview of the current material (in {windowId})" intent-id="visualize how the material looks on a sphere (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialSurface} alt-id="Material Surface accordion" appearance-id="accordion header labeled Surface in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Surface accordion (in {windowId})" functionality-id="toggles the Surface section for the material's surface shader (in {windowId})" intent-id="configure the material's primary surface shading (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Principled BSDF" appearance-id="Principled BSDF shader type label in the material (in {windowId})" location-id="inside the Material Surface accordion header (in {windowId})" functionality-id="identifies the current surface shader as Principled BSDF (in {windowId})" intent-id="view the active surface shader type (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Principled BSDF</span>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-1">
                    <div class="w-[120px] shrink-0 flex items-center justify-end gap-1 pr-1">
                      <i class="fa-solid fa-chevron-right text-[9px] text-[#aaa]"></i>
                      <div class="w-1.5 h-1.5 rounded-full bg-[#cccc33]"></div>
                      <span class="text-[12px] text-[#ccc] pointer-events-none">Base Color</span>
                    </div>
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Mix" appearance-id="label for a mix shader or mix parameter in the material (in {windowId})" location-id="inside the Material Surface accordion, Mix (in {windowId})" functionality-id="represents a mix blending parameter or shader (in {windowId})" intent-id="blend between two shader inputs (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Multiply Add" appearance-id="Multiply Add blend mode option (in {windowId})" location-id="inside a Properties accordion, Multiply Add (in {windowId})" functionality-id="selects Multiply Add as the blend mode (in {windowId})" intent-id="use multiply-add blending (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:bg-[#222]" alt-id="Bump" appearance-id="Bump mode option in displacement settings (in {windowId})" location-id="inside the Material Displacement accordion, Bump (in {windowId})" functionality-id="selects bump/normal map displacement mode (in {windowId})" intent-id="configure displacement using a bump or normal map (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Bump</span>
                    </div>
                  </div>

                  <div class="flex flex-col pl-1">
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Diffuse" appearance-id="Diffuse option in a filter or bake type selector (in {windowId})" location-id="in a Properties accordion dropdown or checkbox group (in {windowId})" functionality-id="selects or enables the diffuse component (in {windowId})" intent-id="include diffuse in this calculation (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Diffuse</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Subsurface" appearance-id="label for the subsurface scattering in the Principled BSDF (in {windowId})" location-id="inside the Material Surface accordion, Subsurface (in {windowId})" functionality-id="represents the subsurface scattering parameter (in {windowId})" intent-id="configure light scattering beneath the material surface (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Subsurface</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Specular" appearance-id="Specular option in a filter or bake type selector (in {windowId})" location-id="in a Properties accordion, Specular (in {windowId})" functionality-id="selects or enables the specular component (in {windowId})" intent-id="include specular in this calculation (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Specular</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Transmission" appearance-id="Transmission option in a filter or bake type selector (in {windowId})" location-id="in a Properties accordion, Transmission (in {windowId})" functionality-id="selects or enables the transmission component (in {windowId})" intent-id="include transmission in this calculation (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Transmission</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Coat" appearance-id="Coat option in material shader inputs (in {windowId})" location-id="inside the Material Surface accordion, Coat (in {windowId})" functionality-id="represents the clearcoat shader layer (in {windowId})" intent-id="configure the clearcoat layer (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Coat</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Sheen" appearance-id="label for the sheen layer in the Principled BSDF (in {windowId})" location-id="inside the Material Surface accordion, Sheen (in {windowId})" functionality-id="represents the sheen/velvet parameter (in {windowId})" intent-id="configure the fabric-like sheen on the material (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Sheen</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Emission" appearance-id="Emission option in a filter or bake type selector (in {windowId})" location-id="in a Properties accordion, Emission (in {windowId})" functionality-id="selects or enables the emission component (in {windowId})" intent-id="include emission in this calculation (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Emission</span>
                    </div>
                    <div class="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-[#333] rounded-[3px]" alt-id="Thin Film" appearance-id="label for the thin film interference in the Principled BSDF (in {windowId})" location-id="inside the Material Surface accordion, Thin Film (in {windowId})" functionality-id="represents the thin film iridescence parameter (in {windowId})" intent-id="configure thin film optical effects (in {windowId})">
                      <i class="fa-solid fa-chevron-right text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#ccc]">Thin Film</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Volume -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialVolume} alt-id="Material Volume accordion" appearance-id="accordion header labeled Volume in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Volume accordion (in {windowId})" functionality-id="toggles the Volume section for interior volumetric effects (in {windowId})" intent-id="configure volumetric scattering or absorption (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="None" appearance-id="None option in a dropdown menu (in {windowId})" location-id="inside a Properties dropdown menu (in {windowId})" functionality-id="selects None or no value for this property (in {windowId})" intent-id="clear the selection or disable this property (in {windowId})">
                      <span class="text-[13px] text-[#eee]">None</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Displacement -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialDisplacement} alt-id="Material Displacement accordion" appearance-id="accordion header labeled Displacement in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Displacement accordion (in {windowId})" functionality-id="toggles the Displacement section for geometry displacement (in {windowId})" intent-id="configure how the material displaces the mesh surface (in {windowId})">
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
                    <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" alt-id="Default" appearance-id="Default preset or option in a dropdown or toggle group (in {windowId})" location-id="inside a Properties accordion, Default (in {windowId})" functionality-id="selects the default preset or option (in {windowId})" intent-id="reset to the default value or state (in {windowId})">
                      <span class="text-[13px] text-[#eee]">Default</span>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <!-- Settings -->
            <div class="flex flex-col rounded-[5px] border border-[#1f1f1f] bg-[#333] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] mb-[5px]">
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialSettings} alt-id="Material Settings accordion" appearance-id="accordion header labeled Settings in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Settings accordion (in {windowId})" functionality-id="toggles the Settings section for material behavior settings (in {windowId})" intent-id="configure blend mode, shadow mode, and other settings (in {windowId})">
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
                    <div class="flex items-center gap-2 py-1 cursor-pointer" alt-id="Surface" appearance-id="Surface shader slot label in the material (in {windowId})" location-id="inside the Material Surface accordion, Surface (in {windowId})" functionality-id="represents the surface shader connection (in {windowId})" intent-id="configure the surface shader (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#eee]">Surface</span>
                    </div>
                    <div class="pl-4 flex flex-col gap-[3px] mt-1 mb-2">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Displacement</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Bump Only" appearance-id="Bump Only mode in displacement settings (in {windowId})" location-id="inside the Material Displacement accordion, Bump Only (in {windowId})" functionality-id="sets the displacement to use only bump mapping (in {windowId})" intent-id="apply only bump mapping without actual displacement (in {windowId})">
                          <span class="text-[13px] text-[#eee]">Bump Only</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Emission Sampling</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Auto" appearance-id="Auto option or toggle button (in {windowId})" location-id="inside a Properties accordion, Auto (in {windowId})" functionality-id="selects automatic calculation for this property (in {windowId})" intent-id="use automatic computation instead of manual value (in {windowId})">
                          <span class="text-[13px] text-[#eee]">Auto</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#4772b3] border border-[#151515] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Transparent Shadows" appearance-id="checkbox or toggle labeled Transparent Shadows in Light Paths (in {windowId})" location-id="inside the Light Paths section in the Render tab, Transparent Shadows (in {windowId})" functionality-id="enables transparent shadow casting through transparent materials (in {windowId})" intent-id="allow shadows to pass through transparent objects (in {windowId})">
                            <i class="fa-solid fa-check text-[9px] text-white"></i>
                          </div>
                          <span class="text-[13px] text-[#eee]">Transparent Shadows</span>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#4772b3] border border-[#151515] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Bump Map Correction" appearance-id="Bump Map Correction option in material settings (in {windowId})" location-id="inside the Material Settings accordion, Bump Map Correction (in {windowId})" functionality-id="enables tangent-based bump map correction for better quality (in {windowId})" intent-id="improve bump map quality with tangent correction (in {windowId})">
                            <i class="fa-solid fa-check text-[9px] text-white"></i>
                          </div>
                          <span class="text-[13px] text-[#eee]">Bump Map Correction</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Nested Volume -->
                  <div class="flex flex-col border-t border-[#1f1f1f] pt-1">
                    <div class="flex items-center gap-2 py-1 cursor-pointer" alt-id="Volume" appearance-id="label for the volume shader slot in the material (in {windowId})" location-id="inside the Material Volume accordion (in {windowId})" functionality-id="represents the volume scattering/absorption shader (in {windowId})" intent-id="configure volumetric effects inside the material (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#eee]">Volume</span>
                    </div>
                    <div class="pl-4 flex flex-col gap-[3px] mt-1 mb-1">
                      <div class="flex items-center gap-2">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Sampling</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Multiple Importance" appearance-id="Multiple Importance Sampling option (in {windowId})" location-id="inside the Sampling accordion in the Render tab, Multiple Importance (in {windowId})" functionality-id="enables Multiple Importance Sampling for better convergence (in {windowId})" intent-id="use MIS for efficient rendering (in {windowId})">
                          <span class="text-[13px] text-[#eee]">Multiple Importance</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Interpolation</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Linear" appearance-id="Linear interpolation option (in {windowId})" location-id="inside a Properties accordion, Linear (in {windowId})" functionality-id="selects linear interpolation mode (in {windowId})" intent-id="use linear interpolation for smooth transitions (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialLineArt} alt-id="Material Line Art accordion" appearance-id="accordion header labeled Line Art in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Line Art accordion (in {windowId})" functionality-id="toggles Line Art settings for this material (in {windowId})" intent-id="configure how this material contributes to Freestyle line art (in {windowId})">
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
                      <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Material Mask" appearance-id="toggle for material mask mode in the material settings (in {windowId})" location-id="inside the Material Settings accordion, Material Mask (in {windowId})" functionality-id="enables the material to act as a holdout mask (in {windowId})" intent-id="use this material as a compositing holdout (in {windowId})"></div>
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialViewportDisplay} alt-id="Material Viewport Display accordion" appearance-id="accordion header labeled Viewport Display in the Material tab (in {windowId})" location-id="inside the Material tab content area, Material Viewport Display accordion (in {windowId})" functionality-id="toggles the Viewport Display section for material viewport appearance (in {windowId})" intent-id="configure the material's appearance in solid viewport mode (in {windowId})">
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
                    <div class="flex-1 bg-[#e0d6cb] border border-[#222] rounded-[3px] h-[22px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] cursor-pointer" alt-id="interactive element 7744" appearance-id="interactive element in the Properties panel (in {windowId})" location-id="inside the Properties panel content area, interactive element 7744 (in {windowId})" functionality-id="provides an interactive control within the properties (in {windowId})" intent-id="interact with this property control (in {windowId})"></div>
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
                    <div class="flex items-center gap-2 py-1 cursor-pointer" alt-id="Settings" appearance-id="Settings accordion or section header (in {windowId})" location-id="inside a Properties tab (in {windowId})" functionality-id="toggles a settings section with additional options (in {windowId})" intent-id="access further settings for this component (in {windowId})">
                      <i class="fa-solid fa-chevron-down text-[10px] text-[#aaa] w-3 text-center"></i>
                      <span class="text-[13px] text-[#eee]">Settings</span>
                    </div>
                    <div class="pl-4 flex flex-col gap-[3px] mt-1 mb-1">
                      
                      <div class="flex items-start gap-2 mt-1">
                        <div class="w-[120px] shrink-0 flex items-center justify-end gap-2">
                          <span class="text-right text-[12px] text-[#ccc] pointer-events-none">Backface Culling</span>
                          <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="interactive element 7780" appearance-id="interactive element in the Properties panel (in {windowId})" location-id="inside the Properties panel content area, interactive element 7780 (in {windowId})" functionality-id="provides an interactive control within the properties (in {windowId})" intent-id="interact with this property control (in {windowId})"></div>
                        </div>
                        <div class="flex flex-col gap-[3px]">
                          <div class="flex items-center gap-2">
                            <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Camera" appearance-id="Camera option or type in a property dropdown (in {windowId})" location-id="inside a Properties accordion, Camera (in {windowId})" functionality-id="selects camera type or camera-related option (in {windowId})" intent-id="configure camera-related settings (in {windowId})"></div>
                            <span class="text-[13px] text-[#eee]">Camera</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Shadow" appearance-id="Shadow option in a bake or render setting (in {windowId})" location-id="inside a Properties accordion, Shadow (in {windowId})" functionality-id="selects shadow as the bake or render target (in {windowId})" intent-id="include shadows in this operation (in {windowId})"></div>
                            <span class="text-[13px] text-[#eee]">Shadow</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-3.5 h-3.5 bg-[#1a1a1a] border border-[#151515] rounded-[2px] flex shrink-0 items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Light Probe Volume" appearance-id="Light Probe Volume type option (in {windowId})" location-id="inside a physics or light probe section (in {windowId})" functionality-id="selects Light Probe Volume type (in {windowId})" intent-id="use a volumetric irradiance probe (in {windowId})"></div>
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
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Dithered" appearance-id="Dithered option in transparency settings (in {windowId})" location-id="inside a Properties accordion, Dithered (in {windowId})" functionality-id="selects dithered transparency rendering mode (in {windowId})" intent-id="use dithered alpha for screen-door transparency (in {windowId})">
                          <span class="text-[13px] text-[#eee]">Dithered</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1 opacity-50">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#333] border border-[#222] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="Raytraced Transmission" appearance-id="Raytraced Transmission option in material settings (in {windowId})" location-id="inside the Material Settings accordion, Raytraced Transmission (in {windowId})" functionality-id="enables raytraced transmission for accurate glass rendering (in {windowId})" intent-id="use ray tracing for transparent material rendering (in {windowId})"></div>
                          <span class="text-[13px] text-[#eee]">Raytraced Transmission</span>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Thickness</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Sphere" appearance-id="Sphere shape option in a property dropdown (in {windowId})" location-id="inside a Properties accordion, Sphere (in {windowId})" functionality-id="selects sphere as the shape for this property (in {windowId})" intent-id="use a sphere shape for this component (in {windowId})">
                          <span class="text-[13px] text-[#eee]">Sphere</span>
                          <i class="fa-solid fa-chevron-down text-[10px] text-[#888]"></i>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1 opacity-50">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none"></span>
                        <div class="flex items-center gap-2">
                          <div class="w-3.5 h-3.5 bg-[#333] border border-[#222] rounded-[2px] flex items-center justify-center cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]" alt-id="From Shadow" appearance-id="From Shadow option in a material or render setting (in {windowId})" location-id="inside a Properties accordion, From Shadow (in {windowId})" functionality-id="sets the value source to come from shadow data (in {windowId})" intent-id="derive this value from shadow pass information (in {windowId})"></div>
                          <span class="text-[13px] text-[#eee]">From Shadow</span>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 mt-1">
                        <span class="w-[120px] shrink-0 text-right text-[12px] text-[#ccc] pointer-events-none">Volume Intersection</span>
                        <div class="flex-1 bg-[#1a1a1a] border border-[#151515] rounded-[3px] h-[22px] flex items-center px-2 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] justify-between hover:bg-[#222]" alt-id="Fast" appearance-id="Fast preset or option in a settings section (in {windowId})" location-id="inside a Properties accordion, Fast (in {windowId})" functionality-id="selects the fast/lower quality preset (in {windowId})" intent-id="prioritize speed over quality (in {windowId})">
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
              <div class="flex items-center justify-between px-3 py-1.5 cursor-pointer hover:bg-[#3a3a3a]" on:click={toggleMaterialCustomProperties} alt-id="Material Custom Properties accordion" appearance-id="accordion header labeled Custom Properties in the Material tab (in {windowId})" location-id="inside the Material tab content area, at the bottom (in {windowId})" functionality-id="toggles custom properties for the material datablock (in {windowId})" intent-id="add or manage custom material-level properties (in {windowId})">
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
                    <div class="flex-1 h-[24px] bg-[#4d4d4d] border border-[#222] rounded-[3px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-[#5a5a5a] gap-2" alt-id="New" appearance-id="button labeled New for creating a new datablock (in {windowId})" location-id="inside a Properties tab header area (in {windowId})" functionality-id="creates a new datablock of the appropriate type (in {windowId})" intent-id="initialize a new resource (in {windowId})">
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
