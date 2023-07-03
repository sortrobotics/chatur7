(function(){
    var script = {
 "id": "rootPlayer",
 "definitions": [{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_098BE3B1_1645_8915_41B3_E12D1A3C71CF",
 "class": "FadeOutEffect"
},
{
 "thumbnailUrl": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004_t.png",
 "height": 1909,
 "image": {
  "levels": [
   {
    "url": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1734
   },
   {
    "url": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004_lq.png",
    "width": 347,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 189
   }
  ],
  "class": "ImageResource"
 },
 "label": "newasa_map_final web",
 "initialZoomFactor": 1,
 "id": "map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.81,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "width": 3521,
 "fieldOfViewOverlayOutsideOpacity": 0.01,
 "fieldOfViewOverlayRadiusScale": 0.01
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09FEF3E3_1CB3_5F51_416A_C4B9175B55E8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09FED3E3_1CB3_5F51_4199_5678191026A4",
 "initialSequence": "this.sequence_09FEF3E3_1CB3_5F51_416A_C4B9175B55E8"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": 21.31,
  "class": "PanoramaCameraPosition",
  "pitch": 3.58
 },
 "id": "panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_07BFDC46_1642_9047_41AD_357A6C23EB20",
   "camera": "this.panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C418E28_164F_9B33_41B1_EBA2C03793A7, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C41EE28_164F_9B33_4195_60BBD566E82A, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C41DE28_164F_9B33_41A1_C8318F2BD9EF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C419E28_164F_9B33_419E_FDADED17D90E, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C41FE28_164F_9B33_41B0_D6D0476CFA09, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C402E28_164F_9B33_4182_74D5472C7CE9, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
   "camera": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C403E28_164F_9B33_41AF_8FFCD34D3DB3, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C401E28_164F_9B33_41B0_5537E1C64174, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C407E28_164F_9B33_41B6_A9A3A371C241, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C400E28_164F_9B33_4189_15AF152E4F3C, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C406E28_164F_9B33_4156_33BA198BBA6C, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C404E28_164F_9B33_41A8_459190691A98, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
   "camera": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C405E28_164F_9B33_41AA_688A816D4884, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C40BE28_164F_9B33_41A4_08113A58DB9A, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40EE28_164F_9B33_419C_8454C3386A0A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40AE28_164F_9B33_4197_376405DF39C1, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C409E28_164F_9B33_41A7_666350DEC2BA, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40CE28_164F_9B33_4190_116A316AEC13, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "camera": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C433E28_164F_9B33_41B6_1D739891B341, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C436E28_164F_9B33_41A9_366F8819FBDA, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C434E28_164F_9B33_41A9_F621F4695A08, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C430E28_164F_9B33_41B3_E91684550815, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C437E28_164F_9B33_41B0_6C089F02F23B, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C435E28_164F_9B33_419C_8F34A362A260, 'showEffect', false)"
  },
  {
   "media": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
   "camera": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C43AE28_164F_9B33_41A8_E38E188AB230, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C403E28_164F_9B33_41B5_4F35B89B1593, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C401E28_164F_9B33_41A9_BA4977621B7A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C402E28_164F_9B33_41AA_5B926308AD9A, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C400E28_164F_9B33_41AB_DE08F0CD3A1D, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C407E28_164F_9B33_41B4_6324E9693DE1, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
   "camera": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C405E28_164F_9B33_41AE_A35A34D34568, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C408E28_164F_9B33_41B7_287D09F2EDDB, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40EE28_164F_9B33_418D_FB13FC721747, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40BE28_164F_9B33_41A0_BE8BEE072535, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C409E28_164F_9B33_41B3_4E9A2ADA5BBC, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C40FE28_164F_9B33_41AB_493B0632F728, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
   "camera": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40CE28_164F_9B33_4187_81F4F74AB8D4, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C432E28_164F_9B33_4199_CFC4E788A9E8, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C430E28_164F_9B33_41AD_234813F46E61, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40DE28_164F_9B33_4199_AE360ED78A14, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C433E28_164F_9B33_41A6_CE6847A7E97D, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C431E28_164F_9B33_4185_3B6E04EA8458, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
   "camera": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C437E28_164F_9B33_417F_B70C59B9667C, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C43AE28_164F_9B33_41B1_4468082B204D, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C438E28_164F_9B33_41B4_27D7164C029A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C435E28_164F_9B33_41A0_7884A1D93B06, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C43BE28_164F_9B33_4180_ECCCBAD37682, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C439E28_164F_9B33_41A7_C4624444B0F8, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "camera": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C43EE28_164F_9B33_4146_E5FF033F4A80, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C423E28_164F_9B33_418F_05AB35A52431, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C421E28_164F_9B33_4171_E16ECFA662AD, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C43CE28_164F_9B33_41B3_2AE1E247A29F, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C420E28_164F_9B33_4199_E44309CDE54F, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C409E28_164F_9B33_41AA_EFEF598F7282, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
   "camera": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40FE28_164F_9B33_4167_28478D0EF3D4, 'showEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C40DE28_164F_9B33_41B6_F7918E3E21D6, 'showEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C430E28_164F_9B33_41A2_E3E86C864157, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true, -1, this.effect_0C40CE28_164F_9B33_41A5_3AB2B76BDD32, 'showEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true, -1, this.effect_0C432E28_164F_9B33_41AF_DF21A6716C18, 'showEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true, -1, this.effect_0C431E28_164F_9B33_41AA_9696CED3B31E, 'showEffect', false)"
  },
  {
   "media": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
   "camera": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_camera",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098B73B1_1645_8915_41A6_8EEA392435A0, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098BB3B1_1645_8915_41B4_589500991968, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098BF3B1_1645_8915_41B6_EC5CC1696F8F, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098B83B1_1645_8915_41A2_CB2583F3450B, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098BD3B1_1645_8915_41A6_DFFD0CC28E3A, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098BE3B1_1645_8915_41B3_E12D1A3C71CF, 'hideEffect', false)"
  },
  {
   "media": "this.album_044E311F_16C2_71C6_419F_139EEE17D266",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40DE28_164F_9B33_41B6_F7918E3E21D6",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0911B412_1CB3_58F3_4195_DE2ACAE00FD4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 142,
  "yaw": -25.04,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "id": "camera_09119412_1CB3_58F3_4192_F23934DEFB05",
 "initialSequence": "this.sequence_0911B412_1CB3_58F3_4195_DE2ACAE00FD4"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C433E28_164F_9B33_41B6_1D739891B341",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 141,
  "yaw": 0.55,
  "class": "PanoramaCameraPosition",
  "pitch": -8.5
 },
 "id": "panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C401E28_164F_9B33_41A9_BA4977621B7A",
 "class": "FadeInEffect"
},
{
 "rollOverFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverOpacity": 0.8,
 "children": [
  {
   "label": "01. Chaturmukh 360 07",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 06",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 05",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 04",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 01",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 11",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 03",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 02",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 08",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 09",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "01. Chaturmukh 360 10",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "fontColor": "#FFFFFF",
 "fontFamily": "Arial",
 "rollOverBackgroundColor": "#000000",
 "id": "Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "class": "Menu",
 "selectedBackgroundColor": "#202020",
 "selectedFontColor": "#FFFFFF",
 "backgroundColor": "#404040"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 6.65,
  "class": "PanoramaCameraPosition",
  "pitch": 12.32
 },
 "id": "panorama_07BE2046_1642_9046_41A7_FB013B1C4641_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09339432_1CB3_5933_41B5_E07A6934EB7A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09338432_1CB3_5933_41BC_2F420C32111F",
 "initialSequence": "this.sequence_09339432_1CB3_5933_41B5_E07A6934EB7A"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C43CE28_164F_9B33_41B3_2AE1E247A29F",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C435E28_164F_9B33_419C_8F34A362A260",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C420E28_164F_9B33_4199_E44309CDE54F",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C408E28_164F_9B33_41B7_287D09F2EDDB",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C43BE28_164F_9B33_4180_ECCCBAD37682",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 142,
  "yaw": -60.44,
  "class": "PanoramaCameraPosition",
  "pitch": -4.99
 },
 "id": "panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C431E28_164F_9B33_41AA_9696CED3B31E",
 "class": "FadeInEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 06",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "119%",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
   "class": "AdjacentPanorama"
  }
 ],
 "id": "panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
 "overlays": [
  "this.overlay_0C512CBB_1C6D_A931_41B3_380E1BD38471",
  "this.overlay_0F4C1157_1CB3_7B71_41B3_503DDBC0603C"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40EE28_164F_9B33_419C_8454C3386A0A",
 "class": "FadeInEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 04",
 "id": "panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_08B5C521_1CB3_58D1_41BA_ADD5862499B3",
  "this.overlay_09BA468E_1CBD_79D3_41B1_FE62B0B4F174"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 148
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C435E28_164F_9B33_41A0_7884A1D93B06",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C421E28_164F_9B33_4171_E16ECFA662AD",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0ABAB4AF_1CB3_59D1_41B8_95D9B686A162",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": -1.47,
  "class": "PanoramaCameraPosition",
  "pitch": 8.09
 },
 "id": "camera_0ABA84AF_1CB3_59D1_41BA_848EC22C6DEE",
 "initialSequence": "this.sequence_0ABAB4AF_1CB3_59D1_41B8_95D9B686A162"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C401E28_164F_9B33_41B0_5537E1C64174",
 "class": "FadeInEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 02",
 "id": "panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_08C5F11A_1CB5_58F3_41B5_989370BDADDA",
  "this.overlay_08098D14_1CB5_E8F7_41AC_8F0BA760EE62"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 147
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_0863635E_1CB3_5F73_41B4_ED64FEC6D54B",
 "class": "PlayList"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C43AE28_164F_9B33_41B1_4468082B204D",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40BE28_164F_9B33_41A4_08113A58DB9A",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09211422_1CB3_58D3_419C_4F24B9DDDCA0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 135,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09210422_1CB3_58D3_41B3_F5D116C8BA5B",
 "initialSequence": "this.sequence_09211422_1CB3_58D3_419C_4F24B9DDDCA0"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C404E28_164F_9B33_41A8_459190691A98",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C403E28_164F_9B33_41B5_4F35B89B1593",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C41EE28_164F_9B33_4195_60BBD566E82A",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C402E28_164F_9B33_41AA_5B926308AD9A",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C402E28_164F_9B33_4182_74D5472C7CE9",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 142,
  "yaw": -14.63,
  "class": "PanoramaCameraPosition",
  "pitch": -26.72
 },
 "id": "panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C400E28_164F_9B33_4189_15AF152E4F3C",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40CE28_164F_9B33_4187_81F4F74AB8D4",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C43EE28_164F_9B33_4146_E5FF033F4A80",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C43AE28_164F_9B33_41A8_E38E188AB230",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C432E28_164F_9B33_41AF_DF21A6716C18",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C432E28_164F_9B33_4199_CFC4E788A9E8",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09554451_1CB3_5971_41B1_9E1C0BC365F1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 142,
  "yaw": -31.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0.74
 },
 "id": "camera_09552451_1CB3_5971_41B0_A2D8F1772DA9",
 "initialSequence": "this.sequence_09554451_1CB3_5971_41B1_9E1C0BC365F1"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 139,
  "yaw": 20.04,
  "class": "PanoramaCameraPosition",
  "pitch": -2.46
 },
 "id": "panorama_0442A3D8_1642_B04A_418B_74978E4EB753_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0A88B480_1CB3_59CF_41B3_4EF7DAEBDD4A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A88A480_1CB3_59CF_41AF_F19BBBBB0AF2",
 "initialSequence": "this.sequence_0A88B480_1CB3_59CF_41B3_4EF7DAEBDD4A"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C41DE28_164F_9B33_41A1_C8318F2BD9EF",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40FE28_164F_9B33_4167_28478D0EF3D4",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C439E28_164F_9B33_41A7_C4624444B0F8",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": -1.97,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "id": "panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C403E28_164F_9B33_41AF_8FFCD34D3DB3",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_098BF3B1_1645_8915_41B6_EC5CC1696F8F",
 "class": "FadeOutEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_090F53FF_1CB3_5F31_41A2_9F3BCA88FD1B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_090F43FF_1CB3_5F31_41B6_FD3EB39F3E6F",
 "initialSequence": "this.sequence_090F53FF_1CB3_5F31_41A2_9F3BCA88FD1B"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C431E28_164F_9B33_4185_3B6E04EA8458",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09769470_1CB3_594F_41AE_5DCC0C34ED03",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 142,
  "yaw": 3.68,
  "class": "PanoramaCameraPosition",
  "pitch": -48.51
 },
 "id": "camera_09767470_1CB3_594F_41B1_F47E8B738AA9",
 "initialSequence": "this.sequence_09769470_1CB3_594F_41AE_5DCC0C34ED03"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0A98848F_1CB3_59D1_41B5_3983EA1E41CF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": -2.21,
  "class": "PanoramaCameraPosition",
  "pitch": 6.62
 },
 "id": "camera_0A98748F_1CB3_59D1_41B1_EA781C1603AC",
 "initialSequence": "this.sequence_0A98848F_1CB3_59D1_41B5_3983EA1E41CF"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40AE28_164F_9B33_4197_376405DF39C1",
 "class": "FadeInEffect"
},
{
 "manualZoomSpeed": 0,
 "timeToIdle": 5000,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "hfov": 165,
  "yaw": 40.96,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 138,
  "yaw": 40.96,
  "class": "PanoramaCameraPosition",
  "pitch": -8.02
 },
 "id": "panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 4.78,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 4.78,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 4.78,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "targetHfov": 138,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": -8.02
  }
 ]
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0982E36E_1CB3_5F53_4175_B918E127617F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 135,
  "yaw": 2.21,
  "class": "PanoramaCameraPosition",
  "pitch": -13.23
 },
 "id": "camera_0982C36E_1CB3_5F53_4196_8C7189ADBDD2",
 "initialSequence": "this.sequence_0982E36E_1CB3_5F53_4175_B918E127617F"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 123,
  "yaw": -34.37,
  "class": "PanoramaCameraPosition",
  "pitch": 5.84
 },
 "id": "panorama_07A1946C_1642_904B_4191_2D39A8813BAC_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C400E28_164F_9B33_41AB_DE08F0CD3A1D",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C405E28_164F_9B33_41AA_688A816D4884",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40BE28_164F_9B33_41A0_BE8BEE072535",
 "class": "FadeInEffect"
},
{
 "movementMode": "constrained",
 "id": "MainViewerMapPlayer",
 "viewerArea": "this.MainViewer",
 "class": "MapPlayer"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09B583A4_1CB3_5FD7_41B3_A28D9E613F38",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": 7.37,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "id": "camera_09B563A4_1CB3_5FD7_41AA_272CB8478341",
 "initialSequence": "this.sequence_09B583A4_1CB3_5FD7_41B3_A28D9E613F38"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 11",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
   "class": "AdjacentPanorama"
  }
 ],
 "id": "panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
 "overlays": [
  "this.overlay_0EFE9214_1C53_B8F0_4180_F35FF5A0010A",
  "this.overlay_0F6D2188_1CB2_BBDF_41B5_AC39065DC6AA",
  "this.overlay_08E420DF_1CB2_B971_4131_4279F8CB5FA8"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "class": "Panorama",
 "hfovMax": 147
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C436E28_164F_9B33_41A9_366F8819FBDA",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_098B83B1_1645_8915_41A2_CB2583F3450B",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C437E28_164F_9B33_417F_B70C59B9667C",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40DE28_164F_9B33_4199_AE360ED78A14",
 "class": "FadeInEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 03",
 "id": "panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_08915B53_1CB3_EF71_41B3_293412A8A6C5",
  "this.overlay_08FEC4B2_1CB3_7933_41B1_FE78E5AE5BD5"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 147
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C418E28_164F_9B33_41B1_EBA2C03793A7",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C434E28_164F_9B33_41A9_F621F4695A08",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C407E28_164F_9B33_41B4_6324E9693DE1",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0.04,
  "class": "PanoramaCameraPosition",
  "pitch": -2.03
 },
 "id": "panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C430E28_164F_9B33_41A2_E3E86C864157",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C407E28_164F_9B33_41B6_A9A3A371C241",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40FE28_164F_9B33_41AB_493B0632F728",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09DB53C4_1CB3_5F57_41B5_7A8461C2C479",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 135,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09DB43C4_1CB3_5F57_4193_5D1C73CCCA9C",
 "initialSequence": "this.sequence_09DB53C4_1CB3_5F57_41B5_7A8461C2C479"
},
{
 "thumbnailUrl": "media/album_044E311F_16C2_71C6_419F_139EEE17D266_t.png",
 "label": "Photo Album 01. Chaturmukh 360 04",
 "id": "album_044E311F_16C2_71C6_419F_139EEE17D266",
 "class": "PhotoAlbum",
 "playList": "this.album_044E311F_16C2_71C6_419F_139EEE17D266_AlbumPlayList"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0944F441_1CB3_5951_41BA_C5EF5933FADC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": -2.21,
  "class": "PanoramaCameraPosition",
  "pitch": 11.76
 },
 "id": "camera_0944E441_1CB3_5951_41B8_70B0DE5A51FA",
 "initialSequence": "this.sequence_0944F441_1CB3_5951_41BA_C5EF5933FADC"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0966B460_1CB3_5950_41B9_AC82B51A0414",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 135,
  "yaw": 0.74,
  "class": "PanoramaCameraPosition",
  "pitch": -8.09
 },
 "id": "camera_0966A460_1CB3_5950_4182_24860B88494A",
 "initialSequence": "this.sequence_0966B460_1CB3_5950_41B9_AC82B51A0414"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C419E28_164F_9B33_419E_FDADED17D90E",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C409E28_164F_9B33_41B3_4E9A2ADA5BBC",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C406E28_164F_9B33_4156_33BA198BBA6C",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C409E28_164F_9B33_41A7_666350DEC2BA",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C433E28_164F_9B33_41A6_CE6847A7E97D",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C423E28_164F_9B33_418F_05AB35A52431",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09CAA3B4_1CB3_5F37_4184_28BEFE8CABEE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 139,
  "yaw": -1.47,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "id": "camera_09CA93B4_1CB3_5F37_41AC_B1E53099DCF0",
 "initialSequence": "this.sequence_09CAA3B4_1CB3_5F37_4184_28BEFE8CABEE"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09A2E39C_1CB3_5FF7_41B9_ADAABD5401BF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 123,
  "yaw": -21.36,
  "class": "PanoramaCameraPosition",
  "pitch": 9.56
 },
 "id": "camera_09A2C39C_1CB3_5FF7_41B2_CB02AED6BA08",
 "initialSequence": "this.sequence_09A2E39C_1CB3_5FF7_41B9_ADAABD5401BF"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C438E28_164F_9B33_41B4_27D7164C029A",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C405E28_164F_9B33_41AE_A35A34D34568",
 "class": "FadeInEffect"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_0863835E_1CB3_5F73_4195_F34395081CCC",
 "class": "PlayList"
},
{
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_rotation",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C430E28_164F_9B33_41AD_234813F46E61",
 "class": "FadeInEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 08",
 "id": "panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_0FEEE50A_1C5D_B8D3_4196_83EA4D2EBE3F",
  "this.overlay_0F04A8E7_1C5E_A951_41B5_F1271D60AAF7",
  "this.overlay_0A1FE5B7_1CB5_DB31_41B0_666994755834"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 144
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0AAAF49F_1CB3_59F1_41AF_5996FF5F518B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 140,
  "yaw": 9.58,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "id": "camera_0AAAD49F_1CB3_59F1_41B2_8F800F79E469",
 "initialSequence": "this.sequence_0AAAF49F_1CB3_59F1_41AF_5996FF5F518B"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40CE28_164F_9B33_41A5_3AB2B76BDD32",
 "class": "FadeInEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09EDA3D3_1CB3_5F71_41AB_76788881D70D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 139,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09ED93D3_1CB3_5F71_4198_110F33474504",
 "initialSequence": "this.sequence_09EDA3D3_1CB3_5F71_41AB_76788881D70D"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 09",
 "id": "panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_0F10AE25_1C52_A8D0_419C_FEE158A6BC24",
  "this.overlay_082E4BBC_1CB6_AF37_41B4_B8220F7E6181"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 145
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_098A736E_1CB3_5F53_4184_02AB62A9878C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 141,
  "yaw": -8.1,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "id": "camera_098A536E_1CB3_5F53_41B2_9F50ED55A41F",
 "initialSequence": "this.sequence_098A736E_1CB3_5F53_4184_02AB62A9878C"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_0997637E_1CB3_5F33_41B6_5EF93D0B5032",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 142,
  "yaw": 0.74,
  "class": "PanoramaCameraPosition",
  "pitch": -50.72
 },
 "id": "camera_0997437E_1CB3_5F33_41AF_286CEC326608",
 "initialSequence": "this.sequence_0997637E_1CB3_5F33_41B6_5EF93D0B5032"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_098BD3B1_1645_8915_41A6_DFFD0CC28E3A",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_098BB3B1_1645_8915_41B4_589500991968",
 "class": "FadeOutEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 07",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
   "class": "AdjacentPanorama"
  }
 ],
 "id": "panorama_07BFDC46_1642_9047_41AD_357A6C23EB20",
 "overlays": [
  "this.overlay_0C592CE5_1C6F_A951_4196_C6E0008AB14E"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "class": "Panorama",
 "hfovMax": 150
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C41FE28_164F_9B33_41B0_D6D0476CFA09",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C437E28_164F_9B33_41B0_6C089F02F23B",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40CE28_164F_9B33_4190_116A316AEC13",
 "class": "FadeInEffect"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 01",
 "id": "panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_0E14F498_1C77_F9FF_41B2_18A6ABF6B7B5",
  "this.overlay_08722D9B_1CBD_6BF1_41AD_43D240A7DF01",
  "this.overlay_080767D1_1CBF_6771_41BC_85CDEFC9743B",
  "this.overlay_08CA5C7C_1CBE_A937_4182_41BFBCBC7041"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 147
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C430E28_164F_9B33_41B3_E91684550815",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C409E28_164F_9B33_41AA_EFEF598F7282",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_098B73B1_1645_8915_41A6_8EEA392435A0",
 "class": "FadeOutEffect"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 135,
  "yaw": -1.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0.69
 },
 "id": "panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 05",
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
   "class": "AdjacentPanorama"
  }
 ],
 "id": "panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
 "overlays": [
  "this.overlay_0C33E85F_1C76_E970_41B8_8B7AB46DC7A0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "class": "Panorama",
 "hfovMax": 141
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_0C40EE28_164F_9B33_418D_FB13FC721747",
 "class": "FadeInEffect"
},
{
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer"
},
{
 "partial": false,
 "label": "01. Chaturmukh 360 10",
 "id": "panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "overlays": [
  "this.overlay_0F76039D_1C52_BFF1_4196_2E03FFDC3EEE",
  "this.overlay_086FE90C_1C53_E8D7_41B7_5EC1F17AC7B5",
  "this.overlay_0F9B91A0_1C52_BBCF_41B6_59767C54F902"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_t.jpg",
 "cardboardMenu": "this.Menu_087A035E_1CB3_5F73_41B4_EBAF180DEDE6",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "hfovMax": 148
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_091F2403_1CB3_58D1_41B6_F9DFA1E63A9A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_091F1403_1CB3_58D1_41BA_3C6430EA676A",
 "initialSequence": "this.sequence_091F2403_1CB3_58D1_41B6_F9DFA1E63A9A"
},
{
 "timeToIdle": 5000,
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_09AC538D_1CB3_5FD1_4190_C7C8FCFD58FE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 137,
  "yaw": 2.21,
  "class": "PanoramaCameraPosition",
  "pitch": -0.74
 },
 "id": "camera_09AC438D_1CB3_5FD1_41B1_C3C58AA67516",
 "initialSequence": "this.sequence_09AC538D_1CB3_5FD1_4190_C7C8FCFD58FE"
},
{
 "paddingTop": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "width": "100%",
 "vrPointerColor": "#FFFFFF",
 "toolTipTextShadowOpacity": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "progressBorderRadius": 0,
 "progressBorderSize": 0,
 "minWidth": 100,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "propagateClick": false,
 "toolTipBorderRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "borderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipDisplayTime": 600,
 "playbackBarBorderRadius": 0,
 "top": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "borderSize": 0,
 "transitionMode": "blending",
 "toolTipOpacity": 0.52,
 "toolTipPaddingLeft": 6,
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarBackgroundOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipBorderColor": "#767676",
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0
},
{
 "maxHeight": 311,
 "paddingLeft": 0,
 "id": "Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2",
 "right": "3.44%",
 "paddingRight": 0,
 "borderRadius": 0,
 "url": "skin/Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2.png",
 "width": "6.139%",
 "minHeight": 1,
 "minWidth": 1,
 "borderSize": 0,
 "top": "2.72%",
 "height": "7.296%",
 "horizontalAlign": "center",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image20363"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "class": "Image",
 "backgroundOpacity": 0,
 "maxWidth": 307,
 "verticalAlign": "middle",
 "propagateClick": false
},
{
 "id": "Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Arial Black",
 "right": "6.84%",
 "borderRadius": 0,
 "minHeight": 1,
 "text": "चतुर्मुख देवळाची मानचित्रे",
 "fontColor": "#000000",
 "width": "72.779%",
 "verticalAlign": "middle",
 "top": "0.92%",
 "minWidth": 1,
 "borderSize": 0,
 "fontSize": "5vmin",
 "height": "10.587%",
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Label25585"
 },
 "textDecoration": "none",
 "paddingTop": 0,
 "class": "Label",
 "backgroundOpacity": 0,
 "fontWeight": "bold",
 "propagateClick": false
},
{
 "id": "Label_03408EA0_16CE_9B33_41B4_619B56FAD290",
 "left": "0.69%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Arial Narrow",
 "borderRadius": 0,
 "minHeight": 1,
 "text": "360 Virtual Tour",
 "fontColor": "#000000",
 "width": "25.573%",
 "verticalAlign": "middle",
 "top": "2.4%",
 "minWidth": 1,
 "borderSize": 0,
 "fontSize": "3vmin",
 "height": "4.292%",
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Label26142"
 },
 "textDecoration": "none",
 "paddingTop": 0,
 "class": "Label",
 "backgroundOpacity": 0,
 "fontWeight": "bold",
 "propagateClick": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09FEF3E3_1CB3_5F51_416A_C4B9175B55E8",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0911B412_1CB3_58F3_4195_DE2ACAE00FD4",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09339432_1CB3_5933_41B5_E07A6934EB7A",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641, this.camera_09AC438D_1CB3_5FD1_41B1_C3C58AA67516); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.94,
   "image": "this.AnimatedImageResource_0BBC80AD_1CAE_B9D1_41A9_BF079369033D",
   "yaw": -15.4,
   "pitch": -3.65,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0C512CBB_1C6D_A931_41B3_380E1BD38471",
 "data": {
  "label": "Arrow 02b Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -15.4,
   "hfov": 31.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.65
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC, this.camera_09A2C39C_1CB3_5FF7_41B2_CB02AED6BA08); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.7,
   "image": "this.AnimatedImageResource_09ECBBF1_1CB7_AF31_41BB_F8E8789C1448",
   "yaw": 59.76,
   "pitch": -6.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F4C1157_1CB3_7B71_41B3_503DDBC0603C",
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 59.76,
   "hfov": 27.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.74
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1, this.camera_09B563A4_1CB3_5FD7_41AA_272CB8478341); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.8,
   "image": "this.AnimatedImageResource_09EF1BF1_1CB7_AF31_41B3_57A498ED89C5",
   "yaw": -92.82,
   "pitch": -12.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08B5C521_1CB3_58D1_41BA_ADD5862499B3",
 "data": {
  "label": "Arrow 02b Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -92.82,
   "hfov": 16.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.1
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753, this.camera_09CA93B4_1CB3_5F37_41AC_B1E53099DCF0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.03,
   "image": "this.AnimatedImageResource_09EF4BF1_1CB7_AF31_4196_847A2E28E12F",
   "yaw": 94.54,
   "pitch": -10.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_09BA468E_1CBD_79D3_41B1_FE62B0B4F174",
 "data": {
  "label": "Arrow 02 Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0_HS_5_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 94.54,
   "hfov": 16.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.85
  }
 ],
 "rollOverDisplay": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0ABAB4AF_1CB3_59D1_41B8_95D9B686A162",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5, this.camera_091F1403_1CB3_58D1_41BA_3C6430EA676A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.84,
   "image": "this.AnimatedImageResource_09E88BF1_1CB7_AF31_419D_EF4C5A4DAA75",
   "yaw": -48.41,
   "pitch": -11.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08C5F11A_1CB5_58F3_41B5_989370BDADDA",
 "data": {
  "label": "Arrow 02c Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0_HS_4_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -48.41,
   "hfov": 16.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641, this.camera_090F43FF_1CB3_5F31_41B6_FD3EB39F3E6F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.77,
   "image": "this.AnimatedImageResource_09E8DBF1_1CB7_AF31_41BA_0BCD5ADFBD0F",
   "yaw": 60.31,
   "pitch": -12.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08098D14_1CB5_E8F7_41AC_8F0BA760EE62",
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0_HS_5_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 60.31,
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.65
  }
 ],
 "rollOverDisplay": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09211422_1CB3_58D3_419C_4F24B9DDDCA0",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09554451_1CB3_5971_41B1_9E1C0BC365F1",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0A88B480_1CB3_59CF_41B3_4EF7DAEBDD4A",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_090F53FF_1CB3_5F31_41A2_9F3BCA88FD1B",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09769470_1CB3_594F_41AE_5DCC0C34ED03",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0A98848F_1CB3_59D1_41B5_3983EA1E41CF",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0982E36E_1CB3_5F53_4175_B918E127617F",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09B583A4_1CB3_5FD7_41B3_A28D9E613F38",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE, this.camera_09DB43C4_1CB3_5F57_4193_5D1C73CCCA9C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.85,
   "image": "this.AnimatedImageResource_0BBF60AD_1CAE_B9D1_41A9_A304AC19B576",
   "yaw": -0.5,
   "pitch": 11.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0EFE9214_1C53_B8F0_4180_F35FF5A0010A",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.5,
   "hfov": 16.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.24
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5, this.camera_09FED3E3_1CB3_5F51_4199_5678191026A4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.64,
   "image": "this.AnimatedImageResource_09E96BF1_1CB7_AF31_41A0_239728896CA8",
   "yaw": 38.62,
   "pitch": -5.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F6D2188_1CB2_BBDF_41B5_AC39065DC6AA",
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0_HS_6_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 38.62,
   "hfov": 14.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.63
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753, this.camera_09ED93D3_1CB3_5F71_4198_110F33474504); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.19,
   "image": "this.AnimatedImageResource_09E9BBF1_1CB7_AF31_41B4_DDDCCAF48B22",
   "yaw": -36.76,
   "pitch": -7.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08E420DF_1CB2_B971_4131_4279F8CB5FA8",
 "data": {
  "label": "Arrow 02 Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0_HS_7_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -36.76,
   "hfov": 16.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58, this.camera_0ABA84AF_1CB3_59D1_41BA_848EC22C6DEE); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.92,
   "image": "this.AnimatedImageResource_09E9CBF1_1CB7_AF31_41A2_A161310C4661",
   "yaw": -42.85,
   "pitch": -10.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08915B53_1CB3_EF71_41B3_293412A8A6C5",
 "data": {
  "label": "Arrow 02b Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0_HS_4_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -42.85,
   "hfov": 16.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.02
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1, this.camera_0AAAD49F_1CB3_59F1_41B2_8F800F79E469); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.41,
   "image": "this.AnimatedImageResource_09E86BF1_1CB7_AF31_41BB_B9DA325C03F0",
   "yaw": 95.06,
   "pitch": -13.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08FEC4B2_1CB3_7933_41B1_FE78E5AE5BD5",
 "data": {
  "label": "Arrow 02b Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0_HS_5_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.06,
   "hfov": 19.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.06
  }
 ],
 "rollOverDisplay": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09DB53C4_1CB3_5F57_41B5_7A8461C2C479",
 "class": "PanoramaCameraSequence"
},
{
 "id": "album_044E311F_16C2_71C6_419F_139EEE17D266_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0944F441_1CB3_5951_41BA_C5EF5933FADC",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0966B460_1CB3_5950_41B9_AC82B51A0414",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09CAA3B4_1CB3_5F37_4184_28BEFE8CABEE",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09A2E39C_1CB3_5FF7_41B9_ADAABD5401BF",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978, this.camera_098A536E_1CB3_5F53_41B2_9F50ED55A41F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "image": "this.AnimatedImageResource_09EB6BF1_1CB7_AF31_41B2_06C0721B0D99",
   "yaw": 35.05,
   "pitch": -19.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0FEEE50A_1C5D_B8D3_4196_83EA4D2EBE3F",
 "data": {
  "label": "Arrow 02c Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0_HS_3_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.05,
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.44
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.2,
   "image": "this.AnimatedImageResource_0BC2A0AD_1CAE_B9D1_41AD_2B85D478C00F",
   "yaw": -43.49,
   "pitch": -13.59,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F04A8E7_1C5E_A951_41B5_F1271D60AAF7",
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -43.49,
   "hfov": 21.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.59
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.11,
   "image": "this.AnimatedImageResource_09EBDBF1_1CB7_AF31_41B1_92BB0AAFAF5F",
   "yaw": 165.86,
   "pitch": -9.27,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A1FE5B7_1CB5_DB31_41B0_666994755834",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.86,
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.27
  }
 ],
 "rollOverDisplay": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0AAAF49F_1CB3_59F1_41AF_5996FF5F518B",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09EDA3D3_1CB3_5F71_41AB_76788881D70D",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81, this.camera_0997437E_1CB3_5F33_41AF_286CEC326608); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.08,
   "image": "this.AnimatedImageResource_0BC200AD_1CAE_B9D1_41A4_A3D2847A3D27",
   "yaw": -4.45,
   "pitch": -7.42,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F10AE25_1C52_A8D0_419C_FEE158A6BC24",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.45,
   "hfov": 24.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.42
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE, this.camera_0982C36E_1CB3_5F53_4196_8C7189ADBDD2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.2,
   "image": "this.AnimatedImageResource_09EAABF1_1CB7_AF31_41AD_3AC71DD643A2",
   "yaw": -13.68,
   "pitch": -19.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_082E4BBC_1CB6_AF37_41B4_B8220F7E6181",
 "data": {
  "label": "Arrow 02a Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0_HS_5_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -13.68,
   "hfov": 16.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.51
  }
 ],
 "rollOverDisplay": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_098A736E_1CB3_5F53_4184_02AB62A9878C",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_0997637E_1CB3_5F33_41B6_5EF93D0B5032",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF, this.camera_09119412_1CB3_58F3_4192_F23934DEFB05); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.72,
   "image": "this.AnimatedImageResource_0BBCB0AD_1CAE_B9D1_4198_D6ED6DAFD486",
   "yaw": 41.26,
   "pitch": -7.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0C592CE5_1C6F_A951_4196_C6E0008AB14E",
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 41.26,
   "hfov": 18.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.91
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE, this.camera_0966A460_1CB3_5950_4182_24860B88494A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.53,
   "image": "this.AnimatedImageResource_09EFEBF1_1CB7_AF31_41BA_DA19FEF54C7D",
   "yaw": 13.14,
   "pitch": 4.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E14F498_1C77_F9FF_41B2_18A6ABF6B7B5",
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 13.14,
   "hfov": 10.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.34
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641, this.camera_0A88A480_1CB3_59CF_41AF_F19BBBBB0AF2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.17,
   "image": "this.AnimatedImageResource_09EE3BF1_1CB7_AF31_41B5_B59EAA1AB868",
   "yaw": -45.68,
   "pitch": -7.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08722D9B_1CBD_6BF1_41AD_43D240A7DF01",
 "data": {
  "label": "Arrow 02 Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_8_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -45.68,
   "hfov": 16.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.88
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58, this.camera_0A98748F_1CB3_59D1_41B1_EA781C1603AC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.37,
   "image": "this.AnimatedImageResource_09EE4BF1_1CB7_AF31_4184_D1DF95F696D0",
   "yaw": 52.24,
   "pitch": -9.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_080767D1_1CBF_6771_41BC_85CDEFC9743B",
 "data": {
  "label": "Arrow 02a Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_9_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 52.24,
   "hfov": 19.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.8
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81, this.camera_09767470_1CB3_594F_41B1_F47E8B738AA9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.63,
   "image": "this.AnimatedImageResource_09EE9BF1_1CB7_AF31_41B2_BFD437CFFA88",
   "yaw": -12.67,
   "pitch": 3.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08CA5C7C_1CBE_A937_4182_41BFBCBC7041",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.67,
   "hfov": 11.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.91
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF, this.camera_09552451_1CB3_5971_41B0_A2D8F1772DA9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.71,
   "image": "this.AnimatedImageResource_0BBC50AD_1CAE_B9D1_41AD_3CD32FA665BC",
   "yaw": -37.7,
   "pitch": 6.5,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0C33E85F_1C76_E970_41B8_8B7AB46DC7A0",
 "data": {
  "label": "Arrow 02a Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -37.7,
   "hfov": 24.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.5
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE, this.camera_09210422_1CB3_58D3_41B3_F5D116C8BA5B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.98,
   "image": "this.AnimatedImageResource_0BC3B0AD_1CAE_B9D1_4189_4BA51202B309",
   "yaw": -7.78,
   "pitch": -21.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F76039D_1C52_BFF1_4196_2E03FFDC3EEE",
 "data": {
  "label": "Arrow 02a"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.78,
   "hfov": 15.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.57
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58, this.camera_0944E441_1CB3_5951_41B8_70B0DE5A51FA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.35,
   "image": "this.AnimatedImageResource_0BC330AD_1CAE_B9D1_4181_8595AE0EE9EF",
   "yaw": 38.35,
   "pitch": -10.3,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_086FE90C_1C53_E8D7_41B7_5EC1F17AC7B5",
 "data": {
  "label": "Arrow 02 Right"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 38.35,
   "hfov": 23.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.3
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641, this.camera_09338432_1CB3_5933_41BC_2F420C32111F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.61,
   "image": "this.AnimatedImageResource_0BC370AD_1CAE_B9D1_41B8_81C87C291564",
   "yaw": -54.88,
   "pitch": -11.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F9B91A0_1C52_BBCF_41B6_59767C54F902",
 "data": {
  "label": "Arrow 02 Left"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -54.88,
   "hfov": 24.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.43
  }
 ],
 "rollOverDisplay": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_091F2403_1CB3_58D1_41B6_F9DFA1E63A9A",
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_09AC538D_1CB3_5FD1_4190_C7C8FCFD58FE",
 "class": "PanoramaCameraSequence"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BBC80AD_1CAE_B9D1_41A9_BF079369033D",
 "levels": [
  {
   "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09ECBBF1_1CB7_AF31_41BB_F8E8789C1448",
 "levels": [
  {
   "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EF1BF1_1CB7_AF31_41B3_57A498ED89C5",
 "levels": [
  {
   "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EF4BF1_1CB7_AF31_4196_847A2E28E12F",
 "levels": [
  {
   "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09E88BF1_1CB7_AF31_419D_EF4C5A4DAA75",
 "levels": [
  {
   "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09E8DBF1_1CB7_AF31_41BA_0BCD5ADFBD0F",
 "levels": [
  {
   "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BBF60AD_1CAE_B9D1_41A9_A304AC19B576",
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09E96BF1_1CB7_AF31_41A0_239728896CA8",
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09E9BBF1_1CB7_AF31_41B4_DDDCCAF48B22",
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0_HS_7_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09E9CBF1_1CB7_AF31_41A2_A161310C4661",
 "levels": [
  {
   "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09E86BF1_1CB7_AF31_41BB_B9DA325C03F0",
 "levels": [
  {
   "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EB6BF1_1CB7_AF31_41B2_06C0721B0D99",
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BC2A0AD_1CAE_B9D1_41AD_2B85D478C00F",
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EBDBF1_1CB7_AF31_41B1_92BB0AAFAF5F",
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BC200AD_1CAE_B9D1_41A4_A3D2847A3D27",
 "levels": [
  {
   "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EAABF1_1CB7_AF31_41AD_3AC71DD643A2",
 "levels": [
  {
   "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BBCB0AD_1CAE_B9D1_4198_D6ED6DAFD486",
 "levels": [
  {
   "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EFEBF1_1CB7_AF31_41BA_DA19FEF54C7D",
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EE3BF1_1CB7_AF31_41B5_B59EAA1AB868",
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_8_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EE4BF1_1CB7_AF31_4184_D1DF95F696D0",
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_9_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_09EE9BF1_1CB7_AF31_41B2_BFD437CFFA88",
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0_HS_10_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BBC50AD_1CAE_B9D1_41AD_3CD32FA665BC",
 "levels": [
  {
   "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BC3B0AD_1CAE_B9D1_4189_4BA51202B309",
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BC330AD_1CAE_B9D1_4181_8595AE0EE9EF",
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_0BC370AD_1CAE_B9D1_41B8_81C87C291564",
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "colCount": 4
}],
 "paddingLeft": 0,
 "paddingRight": 0,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2",
  "this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7",
  "this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290"
 ],
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 1,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "minHeight": 20,
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "borderSize": 0,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Player14335"
 },
 "desktopMipmappingEnabled": false,
 "layout": "absolute",
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "contentOpaque": false,
 "class": "Player",
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "propagateClick": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
