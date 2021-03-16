(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.DropDown_EAAD8681_E54D_95D1_41D7_9D484A259990_playlist,this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist,this.mainPlayList]); this.DropDown_EAAD8681_E54D_95D1_41D7_9D484A259990_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709",
  "this.Container_806973DA_ADB0_EB72_41E1_4BBDAAEB91FF",
  "this.Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0",
  "this.HTMLText_B3A95BF7_AD90_5B11_41E1_AC9050095132",
  "this.Container_A797E343_B17D_3EDA_41AB_2CDE4A57AE7C",
  "this.HTMLText_10D1FFAA_31BC_38BB_41A4_2A0F45EB8484"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Player",
 "propagateClick": false,
 "minHeight": 20,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.77,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C735FE8_3C2F_464E_41B1_1D7611C414E1",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12",
 "hfovMin": "120%",
 "id": "panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0",
 "overlays": [
  "this.overlay_239B612E_3B44_6527_41C7_D3F3E9BC95EC",
  "this.overlay_2D8DD657_3B4C_2F65_4178_D4AD2B2694B8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -89.98,
   "distance": 1,
   "backwardYaw": 179.83,
   "panorama": "this.panorama_200EC483_31C4_2F69_418F_E1138D574644"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 102.7,
   "distance": 1,
   "backwardYaw": 179.83,
   "panorama": "this.panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.53,
  "pitch": -0.25
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_205A0891_31C5_E769_41C1_914A6AA637DA_camera",
 "automaticRotationSpeed": 12
},
{
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonPlayRight": "this.IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
 "viewerArea": "this.MainViewer",
 "buttonZoomOut": "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveDown": "this.IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96",
 "buttonMoveLeft": "this.IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
 "buttonMoveUp": "this.IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
 "buttonPlayLeft": "this.IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
 "buttonZoomIn": "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "buttonPause": "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CA7A020_3C2F_79FE_41BB_A44BDC7618F3",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C422FF9_3C2F_464E_41C3_49591A91A4BD",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13",
 "hfovMin": "120%",
 "id": "panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0",
 "overlays": [
  "this.overlay_2C122ED7_3B4C_3F65_41B4_4F8CE6F82EDD",
  "this.overlay_2CAC2777_3B4C_ED25_41C7_72A8EFC35E65"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 23.82,
   "distance": 1,
   "backwardYaw": -179.92,
   "panorama": "this.panorama_200C103A_31C4_6798_41B1_A14526FEE056"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.83,
   "distance": 1,
   "backwardYaw": 102.7,
   "panorama": "this.panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.71,
  "pitch": 0.5
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_200EC483_31C4_2F69_418F_E1138D574644_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.86,
  "pitch": 0.5
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.72,
  "pitch": -1
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_205A4B18_31C5_D967_41C6_99E6474304B8_camera",
 "automaticRotationSpeed": 12
},
{
 "buttonPause": "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.16,
  "pitch": -2.01
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_camera",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "\u1785\u17c6\u178e\u178f\u179f\u17c6\u179a\u17b6\u1794\u17cb\u1787\u1793\u1796\u17b7\u1780\u17b6\u179a",
 "hfovMin": "120%",
 "id": "panorama_200C103A_31C4_6798_41B1_A14526FEE056",
 "overlays": [
  "this.overlay_2C9301C2_3B4C_255F_41C2_196B31617E85",
  "this.overlay_232980D6_3B4C_6367_41A7_CF21C60E6D3B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.91,
   "distance": 1,
   "backwardYaw": -105.56,
   "panorama": "this.panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.92,
   "distance": 1,
   "backwardYaw": 23.82,
   "panorama": "this.panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "x": 2710.08,
   "angle": -151.08,
   "y": 3163.41,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.9,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C11DFC7_3C2F_4642_41CD_F2C853DA8784",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -2.26
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_camera",
 "automaticRotationSpeed": 12
},
{
 "class": "PlayList",
 "id": "DropDown_EAAD8681_E54D_95D1_41D7_9D484A259990_playlist",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.65,
  "pitch": -5.02
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_camera",
 "automaticRotationSpeed": 12
},
{
 "playList": "this.album_296504ED_31C4_28B9_41AA_416E967D8667_AlbumPlayList",
 "thumbnailUrl": "media/album_296504ED_31C4_28B9_41AA_416E967D8667_t.png",
 "class": "PhotoAlbum",
 "id": "album_296504ED_31C4_28B9_41AA_416E967D8667",
 "label": "Photo Album Cover 01"
},
{
 "duration": 0,
 "class": "SlideOutEffect",
 "id": "effect_2745FDF7_ACED_1161_41D1_B5EC4D857875",
 "to": "right",
 "easing": "linear"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "05",
 "hfovMin": "120%",
 "id": "panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227",
 "overlays": [
  "this.overlay_2AF2FFDA_3B44_5D6F_41BD_825F22EF47D1",
  "this.overlay_299DADEA_3B44_3D2F_41C8_3C0433EF5BFC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.1,
   "distance": 1,
   "backwardYaw": 90.39,
   "panorama": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "\u1785\u17c6\u178e\u178f\u1798\u17c9\u17bc\u178f\u17bc",
 "hfovMin": "120%",
 "id": "panorama_205A4B18_31C5_D967_41C6_99E6474304B8",
 "overlays": [
  "this.overlay_2E514597_3B44_2DE5_41B7_4BEE6D47EE15",
  "this.overlay_2F935A69_3B44_272D_41C4_B67560362640"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "x": 2401.77,
   "angle": 173.28,
   "y": 1329.6,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "\u1785\u17c6\u178e\u178f\u179f\u17c6\u179a\u17b6\u1794\u17cb\u1787\u1793\u1796\u17b7\u1780\u17b6\u179a",
 "hfovMin": "120%",
 "id": "panorama_20216505_31C4_2969_4122_39B5AFCA2AC0",
 "overlays": [
  "this.overlay_29D6CF18_3B44_5EEC_41C7_F3C7B9180ACB",
  "this.overlay_2F2481F8_3B44_252B_41B2_721B69F4A087"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.21,
   "distance": 1,
   "backwardYaw": -69.89,
   "panorama": "this.panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "x": 1090.11,
   "angle": 88.58,
   "y": 1800.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 0,
 "class": "SlideInEffect",
 "id": "effect_2745EDF7_ACED_1161_41CE_8D7449621D35",
 "from": "right",
 "easing": "linear"
},
{
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 99.99,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.99,
  "pitch": 2.76
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_camera",
 "automaticRotationSpeed": 12,
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 2.76,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.93,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C54E00F_3C2F_79C2_41CD_768CDB4C8C37",
 "automaticRotationSpeed": 12
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_296504ED_31C4_28B9_41AA_416E967D8667_0_t.jpg",
 "class": "Photo",
 "id": "album_296504ED_31C4_28B9_41AA_416E967D8667_0",
 "width": 3387,
 "label": "Cover 01",
 "image": {
  "levels": [
   {
    "url": "media/album_296504ED_31C4_28B9_41AA_416E967D8667_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1905
},
{
 "playList": "this.album_27DB3987_3B44_25E5_41C5_BEC9D5218863_AlbumPlayList",
 "thumbnailUrl": "media/album_27DB3987_3B44_25E5_41C5_BEC9D5218863_t.png",
 "class": "PhotoAlbum",
 "id": "album_27DB3987_3B44_25E5_41C5_BEC9D5218863",
 "label": "Photo Album Final"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C9A2047_3C2F_7A42_41BC_3800B802B330",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.46,
  "pitch": -1.76
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_camera",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18",
 "hfovMin": "120%",
 "id": "panorama_2021D564_31C4_29AF_41BD_5274F2767734",
 "overlays": [
  "this.overlay_2126DA0E_3B44_26E7_41C0_EA345A57ABD8",
  "this.overlay_21DA0BA6_3B44_6527_41A6_7E4CC88C122D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -179.92,
   "distance": 1,
   "backwardYaw": -85.21,
   "panorama": "this.panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.07,
   "distance": 1,
   "backwardYaw": 100.69,
   "panorama": "this.panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.3,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CD02082_3C2F_7AC2_41B7_55C866C372BC",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.18,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2D0450A7_3C2F_7AC2_41CB_3EBEA6CE8053",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "hfovMin": "120%",
 "id": "panorama_200EC483_31C4_2F69_418F_E1138D574644",
 "overlays": [
  "this.overlay_2EF7BFBF_3B44_FD24_41A6_DB0D2040A130",
  "this.overlay_2CF4F74E_3B47_ED67_41C2_8293A5707A47",
  "this.overlay_2EAEC5D3_3B44_6D7D_41A9_1A3BE1385644"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -11.35,
   "distance": 1,
   "backwardYaw": 139.13,
   "panorama": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -63.1,
   "distance": 1,
   "backwardYaw": -6.33,
   "panorama": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.83,
   "distance": 1,
   "backwardYaw": -89.98,
   "panorama": "this.panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.99,
  "pitch": -1.76
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.87,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C29CF7D_3C2F_4646_41B9_9D76AF029020",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "08",
 "hfovMin": "120%",
 "id": "panorama_205A0891_31C5_E769_41C1_914A6AA637DA",
 "overlays": [
  "this.overlay_2E0C89E7_3B7F_E525_41C2_8E3B795D5C8B",
  "this.overlay_2F43FB6B_3B7C_E52D_41C9_ADCC5098B551",
  "this.overlay_2F406E17_3B7D_DEE5_41BC_D27B37B920FC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 99.94,
   "distance": 1,
   "backwardYaw": -90.23,
   "panorama": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_205A4B18_31C5_D967_41C6_99E6474304B8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "\u1785\u17c6\u178e\u178f\u179a\u1790\u1799\u1793\u17d2\u178f\u1780\u17d2\u179a\u17bb\u1784",
 "hfovMin": "120%",
 "id": "panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3",
 "overlays": [
  "this.overlay_2F130849_3B7C_636D_419A_51D9C60E302F",
  "this.overlay_2FC8EE2F_3B44_3F25_41B6_FAEBD1C57DFA",
  "this.overlay_2E42B57E_3B44_ED24_41C2_2D54C1D1C2ED"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -90.23,
   "distance": 1,
   "backwardYaw": 99.94,
   "panorama": "this.panorama_205A0891_31C5_E769_41C1_914A6AA637DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 139.13,
   "distance": 1,
   "backwardYaw": -11.35,
   "panorama": "this.panorama_200EC483_31C4_2F69_418F_E1138D574644"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "x": 2825.04,
   "angle": 31.41,
   "y": 1492.15,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16",
 "hfovMin": "120%",
 "id": "panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D",
 "overlays": [
  "this.overlay_2253A5DF_3B4C_2D65_41C9_B598CA0230B2",
  "this.overlay_22E9BEC6_3B4C_5F67_41C7_FC4412EDA29C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -85.21,
   "distance": 1,
   "backwardYaw": 179.83,
   "panorama": "this.panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 100.69,
   "distance": 1,
   "backwardYaw": -6.07,
   "panorama": "this.panorama_2021D564_31C4_29AF_41BD_5274F2767734"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.11,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2D23208E_3C2F_7AC2_41C7_DC4257404825",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.82,
  "pitch": 0.25
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_2021D564_31C4_29AF_41BD_5274F2767734_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C3AAF8F_3C2F_46C2_417A_766C19B94F93",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.24,
  "pitch": 6.78
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_camera",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15",
 "hfovMin": "120%",
 "id": "panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9",
 "overlays": [
  "this.overlay_23DBEECF_3B4C_5F65_41C8_991402B0A016",
  "this.overlay_22768FF7_3B4C_7D25_41C6_0CBC82C15327"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -105.56,
   "distance": 1,
   "backwardYaw": 92.91,
   "panorama": "this.panorama_200C103A_31C4_6798_41B1_A14526FEE056"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.83,
   "distance": 1,
   "backwardYaw": -85.21,
   "panorama": "this.panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.21,
  "pitch": -0.25
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_200C103A_31C4_6798_41B1_A14526FEE056_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CB6602F_3C2F_79C2_41CC_43C0DCE1D9B1",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.46,
  "pitch": -3.01
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33C57F57_3C2F_4643_41AB_FCACCA8237A8",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.31,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33E5FF31_3C2F_47DE_41B8_E769807AC348",
 "automaticRotationSpeed": 12
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_27DB3987_3B44_25E5_41C5_BEC9D5218863_0_t.jpg",
 "class": "Photo",
 "id": "album_27DB3987_3B44_25E5_41C5_BEC9D5218863_0",
 "width": 7750,
 "label": "Final",
 "image": {
  "levels": [
   {
    "url": "media/album_27DB3987_3B44_25E5_41C5_BEC9D5218863_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 4096
},
{
 "duration": 0,
 "class": "SlideOutEffect",
 "id": "effect_F210C674_E554_F572_41E1_4BD5DFC260E8",
 "to": "right",
 "easing": "linear"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_camera",
 "automaticRotationSpeed": 12
},
{
 "label": "Master Plan",
 "id": "map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 6087,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "levels": [
   {
    "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2230
   },
   {
    "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_lq.png",
    "width": 306,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 214
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_1A5E76B3_3B44_6F3D_41C1_76BCD4038871",
  "this.overlay_1978D4CF_3B3C_2365_41C7_8624F1DD8456",
  "this.overlay_191E66E1_3B3C_6F5D_41BC_ADAB8C1803B1",
  "this.overlay_19C474EF_3B3C_6325_41C9_407F58842DCD",
  "this.overlay_185B7592_3B3C_2DFF_41CC_313207F9A8DA",
  "this.overlay_18F2C89D_3B3C_23E5_4177_CBC54DCA57DC"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_t.png",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 4242
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2D6610C1_3C2F_7ABF_41B7_00BC89C3EEA1",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.44,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2D35809B_3C2F_7AC2_41B0_DD8BB085A279",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.08,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CC11076_3C2F_7A42_412B_2CF2E99488E8",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C0D4FA0_3C2F_46FE_41CB_3B4B18EF48FE",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.9,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CFFE05E_3C2F_7A42_41CC_4023D722F422",
 "automaticRotationSpeed": 12
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_33B9FF03_3C2F_47C2_41C3_EE94A56DBB16",
  {
   "media": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00_camera"
  },
  "this.PanoramaPlayListItem_33B6CF04_3C2F_47C6_41C3_003EF8538316",
  {
   "media": "this.panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_camera"
  },
  "this.PanoramaPlayListItem_33B7AF05_3C2F_47C6_4180_17335FF8BF05",
  {
   "media": "this.panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_camera"
  },
  {
   "media": "this.panorama_205A0891_31C5_E769_41C1_914A6AA637DA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_205A0891_31C5_E769_41C1_914A6AA637DA_camera"
  },
  "this.PanoramaPlayListItem_33B4FF05_3C2F_47C6_41C7_A5C3BD426933",
  "this.PanoramaPlayListItem_33B57F06_3C2F_47C2_41C4_FF2B4F0DE417",
  {
   "media": "this.panorama_200EC483_31C4_2F69_418F_E1138D574644",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_200EC483_31C4_2F69_418F_E1138D574644_camera"
  },
  {
   "media": "this.panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_camera"
  },
  {
   "media": "this.panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_camera"
  },
  "this.PanoramaPlayListItem_33B2CF06_3C2F_47C2_41CB_C24ED4EBC9F3",
  {
   "media": "this.panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_camera"
  },
  {
   "media": "this.panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_camera"
  },
  {
   "media": "this.panorama_2021D564_31C4_29AF_41BD_5274F2767734",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2021D564_31C4_29AF_41BD_5274F2767734_camera"
  },
  {
   "media": "this.panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.album_296504ED_31C4_28B9_41AA_416E967D8667",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.album_27DB3987_3B44_25E5_41C5_BEC9D5218863",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "duration": 0,
 "class": "SlideInEffect",
 "id": "effect_F2103674_E554_F572_41B1_203ED4CE50E6",
 "from": "right",
 "easing": "linear"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.33,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2D1790B4_3C2F_7AC5_41A7_77BC18E1999E",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "19",
 "hfovMin": "120%",
 "id": "panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2",
 "overlays": [
  "this.overlay_2786BA21_3B5B_E6DC_41AC_0E5C0FDBAC3E",
  "this.overlay_26082768_3B44_2D2B_41B7_4C658CC170BF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -85.21,
   "distance": 1,
   "backwardYaw": -179.92,
   "panorama": "this.panorama_2021D564_31C4_29AF_41BD_5274F2767734"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "\u1785\u17c6\u178e\u178f\u179a\u1790\u1799\u1793\u17d2\u178f",
 "hfovMin": "120%",
 "id": "panorama_200B21CE_31C4_28FB_41BF_E8A09B804172",
 "overlays": [
  "this.overlay_2BC6D199_3B4C_25ED_41BF_B55B173E3AEF",
  "this.overlay_2A12440B_3B4D_E2ED_41C5_1301E0D506C5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -85.21,
   "distance": 1,
   "backwardYaw": 13.27,
   "panorama": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.39,
   "distance": 1,
   "backwardYaw": 82.1,
   "panorama": "this.panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "x": 1472.86,
   "angle": -183.27,
   "y": 1508.89,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33F2AF46_3C2F_4645_41B6_EA3D10DBD91E",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_3393BF25_3C2F_47C6_41C9_EA829B1953A2",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.98,
  "pitch": -1.51
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_20191832_31C4_67AB_41B1_939E2E210B00_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CECC052_3C2F_7A42_41AA_761A077EDAF3",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.24,
  "pitch": -2.76
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_camera",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.61,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C88D03B_3C2F_79C2_41C7_5684AA20B795",
 "automaticRotationSpeed": 12
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.08,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C609FD7_3C2F_4642_4190_01F9C32CC1B5",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "02",
 "hfovMin": "120%",
 "id": "panorama_20191832_31C4_67AB_41B1_939E2E210B00",
 "overlays": [
  "this.overlay_35D06A71_3B3C_273D_41B9_885043A38AE8",
  "this.overlay_2B58FDF0_3B4C_DD3C_41C8_A9EA5711E7FD",
  "this.overlay_2A23C4B4_3B4F_E33B_41B0_04A22F771CC8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -125.41,
   "distance": 1,
   "backwardYaw": -179.67,
   "panorama": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 13.27,
   "distance": 1,
   "backwardYaw": -85.21,
   "panorama": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_33D77F6D_3C2F_4647_41AF_EF3AFBBABDAF",
 "automaticRotationSpeed": 12
},
{
 "buttonZoomOut": "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "buttonZoomIn": "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "07",
 "hfovMin": "120%",
 "id": "panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36",
 "overlays": [
  "this.overlay_2841EE28_3B45_DF2B_41C5_4615C3D7E701",
  "this.overlay_28D16F0E_3B44_3EE7_41C2_844AF8290947"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -69.89,
   "distance": 1,
   "backwardYaw": 0.21,
   "panorama": "this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2C1F5FB6_3C2F_46C2_41C7_76443E945ACF",
 "automaticRotationSpeed": 12
},
{
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_t.jpg",
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "\u1785\u17d2\u179a\u1780\u1785\u17bc\u179b\u17a2\u1782\u17b6\u179a",
 "hfovMin": "120%",
 "id": "panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4",
 "overlays": [
  "this.overlay_2211A505_3210_FA37_4142_B4E59BC09C6C",
  "this.overlay_2306E243_3210_7E33_41B8_4ACC9EC08708",
  "this.overlay_089A2815_3B7C_22E5_41C2_A9A3C60A74AA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.33,
   "distance": 1,
   "backwardYaw": -63.1,
   "panorama": "this.panorama_200EC483_31C4_2F69_418F_E1138D574644"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.67,
   "distance": 1,
   "backwardYaw": -125.41,
   "panorama": "this.panorama_20191832_31C4_67AB_41B1_939E2E210B00"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE",
   "x": 2570.9,
   "angle": 117.2,
   "y": 1905.78,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PlayList",
 "id": "ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist",
 "items": [
  {
   "media": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_camera"
  },
  {
   "media": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_camera"
  },
  {
   "media": "this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_camera"
  },
  {
   "media": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_camera"
  },
  {
   "media": "this.panorama_205A4B18_31C5_D967_41C6_99E6474304B8",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_205A4B18_31C5_D967_41C6_99E6474304B8_camera"
  },
  {
   "media": "this.panorama_200C103A_31C4_6798_41B1_A14526FEE056",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist, 5, 0)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_200C103A_31C4_6798_41B1_A14526FEE056_camera"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_2CCE406A_3C2F_7A42_41C7_17989C0C08B3",
 "automaticRotationSpeed": 12
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "class": "ViewerArea",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "0.6vw",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 85,
 "maxWidth": 214,
 "id": "Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709",
 "left": "3%",
 "backgroundOpacity": 0,
 "right": "91.27%",
 "paddingRight": 0,
 "url": "skin/Image_BEE6FED8_AC35_2F20_41D8_34B6B91DA709.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "class": "Image",
 "propagateClick": false,
 "minHeight": 1,
 "top": "86.71%",
 "verticalAlign": "middle",
 "bottom": "4%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "DD"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_806973DA_ADB0_EB72_41E1_4BBDAAEB91FF",
 "left": "79.38%",
 "children": [
  "this.Container_F59EA3FC_AC15_152A_41D3_A68AE3523ABE",
  "this.Container_8F88A174_B17F_DAF3_41E3_9385916D5A3E",
  "this.Container_8E56560D_B147_6613_41E3_B9F30B1AF2C2"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "1.2%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "class": "Container",
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Right Side Container"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_BC8D06B7_B143_E72C_41CA_E1C4F81682F0",
 "left": "0%",
 "children": [
  "this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "84.23%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "class": "Container",
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Left Side Container"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_B3A95BF7_AD90_5B11_41E1_AC9050095132",
 "left": "0.05%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "49.95%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 0,
 "class": "HTMLText",
 "propagateClick": false,
 "minHeight": 1,
 "top": "6.45%",
 "bottom": "83.23%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003366;font-size:1.21vw;font-family:'Khmer Old Style';\"><B><I>\u1793\u17b7\u1780\u17d2\u1781\u17c1\u1794\u1794\u1791\u1786\u17d2\u1793\u17b6\u17c6 \u17e2\u17e0\u17e2\u17e0</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_A797E343_B17D_3EDA_41AB_2CDE4A57AE7C",
 "left": "40%",
 "children": [
  "this.IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
  "this.IconButton_125D50F6_3BCC_6327_41BE_15CFA74811CB",
  "this.IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
  "this.IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
  "this.Container_A7977343_B17D_3EDA_41C0_F47328C07981",
  "this.IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
  "this.IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
  "this.IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A",
  "this.IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "38.77%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "hidden",
 "class": "Container",
 "propagateClick": false,
 "minHeight": 20,
 "top": "85.03%",
 "verticalAlign": "middle",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 20,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Middle Control"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_10D1FFAA_31BC_38BB_41A4_2A0F45EB8484",
 "left": "0.05%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 20,
 "class": "HTMLText",
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 148.37,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:1.87vw;font-family:'Khmer Kolab';\"><B>\u179f\u17b6\u179a\u1798\u1793\u17d2\u1791\u17b8\u179a\u179f\u17b6\u1798\u17bb\u1785\u17d2\u1785\u17d0\u1799\u1794\u17d2\u179a\u179c\u178f\u17d2\u178f\u17b7\u179f\u17b6\u179f\u17d2\u178f\u17d2\u179a \u17a2\u1793\u17d2\u179b\u1784\u17cb\u200b\u200b\u200b\u179c\u17c2\u1784</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
},
{
 "toolTipBorderSize": 1,
 "horizontalAlign": "center",
 "maxHeight": 128,
 "maxWidth": 128,
 "id": "IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipShadowOpacity": 1,
 "width": "11.17%",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A_rollover.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTip": "Fullscreen",
 "toolTipShadowVerticalLength": 0,
 "height": "29.2%",
 "verticalAlign": "middle",
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "toggle",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A_pressed.png",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A.png",
 "transparencyActive": true,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "IconButton1493"
 },
 "cursor": "hand",
 "toolTipPaddingRight": 6
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.98,
   "hfov": 14.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4B6B34_3B44_653B_4184_C6D03832EE83",
   "pitch": -5.46,
   "yaw": -89.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200EC483_31C4_2F69_418F_E1138D574644, this.camera_2CA7A020_3C2F_79FE_41BB_A44BDC7618F3); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_239B612E_3B44_6527_41C7_D3F3E9BC95EC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.7,
   "hfov": 14.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4AFB35_3B44_6525_41C9_DFF2C594056A",
   "pitch": -4.71,
   "yaw": 102.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.18,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0, this.camera_2CB6602F_3C2F_79C2_41CC_43C0DCE1D9B1); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2D8DD657_3B4C_2F65_4178_D4AD2B2694B8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A7979343_B17D_3EDA_41BB_92702E290118",
 "backgroundOpacity": 0,
 "width": "11.17%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_rollover.png",
 "propagateClick": false,
 "height": "29.2%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27671"
 },
 "pressedRollOverIconURL": "skin/IconButton_A7979343_B17D_3EDA_41BB_92702E290118_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE",
 "backgroundOpacity": 0,
 "width": "9.07%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE_rollover.png",
 "propagateClick": false,
 "height": "23.36%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A7973343_B17D_3EDA_41E5_A3FC6227C5CE.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27662"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96",
 "backgroundOpacity": 0,
 "width": "80%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96_rollover.png",
 "propagateClick": false,
 "height": "23.36%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27669"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935",
 "backgroundOpacity": 0,
 "width": "8.99%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935_rollover.png",
 "propagateClick": false,
 "height": "23.36%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A7970343_B17D_3EDA_41DF_8CEDA653A935.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27665"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
 "backgroundOpacity": 0,
 "width": "80%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB_rollover.png",
 "propagateClick": false,
 "height": "23.36%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27667"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF",
 "backgroundOpacity": 0,
 "width": "11.27%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF_rollover.png",
 "propagateClick": false,
 "height": "29.2%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A7971343_B17D_3EDA_41E1_D4B648D50BFF.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27664"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525",
 "backgroundOpacity": 0,
 "width": "8.91%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525_rollover.png",
 "propagateClick": false,
 "height": "23.36%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A797F343_B17D_3EDA_41E1_5446CB5EC525.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27673"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_rollover.png",
 "propagateClick": false,
 "height": "29.2%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27668"
 },
 "pressedRollOverIconURL": "skin/IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61_pressed_rollover.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE",
 "backgroundOpacity": 0,
 "width": "8.96%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE_rollover.png",
 "propagateClick": false,
 "height": "23.36%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_A797A343_B17D_3EDA_41B1_10FF9F1B46EE.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27670"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.82,
   "hfov": 14.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4A3B35_3B44_6525_41A3_5B069DF54B9E",
   "pitch": -5.46,
   "yaw": 23.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200C103A_31C4_6798_41B1_A14526FEE056, this.camera_2CC11076_3C2F_7A42_412B_2CF2E99488E8); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2C122ED7_3B4C_3F65_41B4_4F8CE6F82EDD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.83,
   "hfov": 14.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4A4B35_3B44_6525_4190_C66E80CA97F9",
   "pitch": -6.22,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0, this.camera_2CD02082_3C2F_7AC2_41B7_55C866C372BC); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2CAC2777_3B4C_ED25_41C7_72A8EFC35E65",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.92,
   "hfov": 14.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4D8B36_3B44_6527_41C8_F441ED875003",
   "pitch": -7.22,
   "yaw": -179.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.12,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0, this.camera_2D0450A7_3C2F_7AC2_41CB_3EBEA6CE8053); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2C9301C2_3B4C_255F_41C2_196B31617E85",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.91,
   "hfov": 13.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4D1B36_3B44_6527_41C1_09E915272FC5",
   "pitch": -12.75,
   "yaw": 92.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.88,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9, this.camera_2D35809B_3C2F_7AC2_41B0_DD8BB085A279); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_232980D6_3B4C_6367_41A7_CF21C60E6D3B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "class": "PhotoPlayList",
 "id": "album_296504ED_31C4_28B9_41AA_416E967D8667_AlbumPlayList",
 "items": [
  {
   "media": "this.album_296504ED_31C4_28B9_41AA_416E967D8667_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.1,
   "hfov": 14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B44CB2C_3B44_6524_41A9_C208E5915049",
   "pitch": -4.96,
   "yaw": 82.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172, this.camera_2C88D03B_3C2F_79C2_41C7_5684AA20B795); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2AF2FFDA_3B44_5D6F_41BD_825F22EF47D1",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.85,
   "hfov": 14.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B447B2C_3B44_6524_41A7_70C89C639B04",
   "pitch": -6.97,
   "yaw": 132.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.12,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_299DADEA_3B44_3D2F_41C8_3C0433EF5BFC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.59,
   "hfov": 14.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B48FB2E_3B44_6524_41C2_BED9FD95568B",
   "pitch": -6.22,
   "yaw": -9.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2E514597_3B44_2DE5_41B7_4BEE6D47EE15",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.42,
   "hfov": 14.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B483B2E_3B44_6524_41C9_07B7348FC19E",
   "pitch": -8.98,
   "yaw": 96.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.05,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2F935A69_3B44_272D_41C4_B67560362640",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.62,
   "hfov": 14.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B479B2D_3B44_6524_41A3_9A1613F121EC",
   "pitch": -6.47,
   "yaw": -67.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_29D6CF18_3B44_5EEC_41C7_F3C7B9180ACB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.21,
   "hfov": 14.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B47DB2D_3B44_6524_41B0_5A672E70AB16",
   "pitch": -4.46,
   "yaw": 0.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36, this.camera_2D23208E_3C2F_7AC2_41C7_DC4257404825); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2F2481F8_3B44_252B_41B2_721B69F4A087",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "class": "PhotoPlayList",
 "id": "album_27DB3987_3B44_25E5_41C5_BEC9D5218863_AlbumPlayList",
 "items": [
  {
   "media": "this.album_27DB3987_3B44_25E5_41C5_BEC9D5218863_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.07,
   "hfov": 14.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4C2B38_3B44_652B_41CA_9493AA412F91",
   "pitch": -9.73,
   "yaw": -6.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.02,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D, this.camera_33E5FF31_3C2F_47DE_41B8_E769807AC348); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2126DA0E_3B44_26E7_41C0_EA345A57ABD8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.92,
   "hfov": 13.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4FBB38_3B44_652B_418D_8DEAF5E077B4",
   "pitch": -11.74,
   "yaw": -179.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.93,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2, this.camera_3393BF25_3C2F_47C6_41C9_EA829B1953A2); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_21DA0BA6_3B44_6527_41A6_7E4CC88C122D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.35,
   "hfov": 14.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B485B2F_3B44_6520_418A_809F7D3605D0",
   "pitch": -6.47,
   "yaw": -11.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3, this.camera_2C29CF7D_3C2F_4646_41B9_9D76AF029020); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2EF7BFBF_3B44_FD24_41A6_DB0D2040A130",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.1,
   "hfov": 14.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4B8B34_3B44_653B_41C5_E22053C4F719",
   "pitch": -4.46,
   "yaw": -63.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4, this.camera_2C3AAF8F_3C2F_46C2_417A_766C19B94F93); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2CF4F74E_3B47_ED67_41C2_8293A5707A47",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.83,
   "hfov": 14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4B1B34_3B44_653B_41C8_D9835BA2C92A",
   "pitch": -5.21,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0, this.camera_2C0D4FA0_3C2F_46FE_41CB_3B4B18EF48FE); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2EAEC5D3_3B44_6D7D_41A9_1A3BE1385644",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.94,
   "hfov": 14.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B46DB2D_3B44_6524_41CB_D99AB776FDA8",
   "pitch": -5.97,
   "yaw": 99.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.15,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3, this.camera_2C735FE8_3C2F_464E_41B1_1D7611C414E1); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2E0C89E7_3B7F_E525_41C2_8E3B795D5C8B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.22,
   "hfov": 16.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B461B2D_3B44_6524_41A9_80CD79EA8420",
   "pitch": -18.28,
   "yaw": 9.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.79,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2F43FB6B_3B7C_E52D_41C9_ADCC5098B551",
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.71,
   "hfov": 14.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B464B2E_3B44_6524_41C1_C92EF22DB298",
   "pitch": -6.72,
   "yaw": -85.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.13,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2F406E17_3B7D_DEE5_41BC_D27B37B920FC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.23,
   "hfov": 14.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B49FB2E_3B44_6524_41CC_690AA09E50FB",
   "pitch": -4.46,
   "yaw": -90.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_205A0891_31C5_E769_41C1_914A6AA637DA, this.camera_2C9A2047_3C2F_7A42_41BC_3800B802B330); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2F130849_3B7C_636D_419A_51D9C60E302F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.13,
   "hfov": 14.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B491B2E_3B44_6524_41CD_AE3A0A47C583",
   "pitch": -8.23,
   "yaw": 139.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.08,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200EC483_31C4_2F69_418F_E1138D574644, this.camera_2CECC052_3C2F_7A42_41AA_761A077EDAF3); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2FC8EE2F_3B44_3F25_41B6_FAEBD1C57DFA",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.57,
   "hfov": 13.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B495B2E_3B44_6524_41B0_802FE3B211E6",
   "pitch": -10.99,
   "yaw": -158.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.97,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2E42B57E_3B44_ED24_41C2_2D54C1D1C2ED",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.69,
   "hfov": 14.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_03E33E61_3B44_7F5D_41C1_16A173DE6532",
   "pitch": -7.22,
   "yaw": 100.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.12,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2021D564_31C4_29AF_41BD_5274F2767734, this.camera_2C54E00F_3C2F_79C2_41CD_768CDB4C8C37); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2253A5DF_3B4C_2D65_41C9_B598CA0230B2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.21,
   "hfov": 14.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4DCB37_3B44_6525_41A5_20F516E91B60",
   "pitch": -7.47,
   "yaw": -85.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.11,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9, this.camera_2C422FF9_3C2F_464E_41C3_49591A91A4BD); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_22E9BEC6_3B4C_5F67_41C7_FC4412EDA29C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.83,
   "hfov": 13.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4D4B36_3B44_6527_4191_1420F00C12AE",
   "pitch": -10.74,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.98,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D, this.camera_33D77F6D_3C2F_4647_41AF_EF3AFBBABDAF); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_23DBEECF_3B4C_5F65_41C8_991402B0A016",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.56,
   "hfov": 13.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.25
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4CEB37_3B44_6525_41CA_3E8DDDEC9992",
   "pitch": -12.25,
   "yaw": -105.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.9,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200C103A_31C4_6798_41B1_A14526FEE056, this.camera_33C57F57_3C2F_4643_41AB_FCACCA8237A8); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_22768FF7_3B4C_7D25_41C6_0CBC82C15327",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 162.08,
  "x": 2489.86,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_0_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1829.4,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 152.75,
  "offsetX": 0
 },
 "image": {
  "x": 2489.86,
  "y": 1829.4,
  "class": "HotspotMapOverlayImage",
  "width": 162.08,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_0.png",
     "width": 85,
     "class": "ImageResourceLevel",
     "height": 80
    }
   ],
   "class": "ImageResource"
  },
  "height": 152.75
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_1A5E76B3_3B44_6F3D_41C1_76BCD4038871",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 162.08,
  "x": 1391.82,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_1_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1432.51,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 152.75,
  "offsetX": 0
 },
 "image": {
  "x": 1391.82,
  "y": 1432.51,
  "class": "HotspotMapOverlayImage",
  "width": 162.08,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_1.png",
     "width": 85,
     "class": "ImageResourceLevel",
     "height": 80
    }
   ],
   "class": "ImageResource"
  },
  "height": 152.75
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_1978D4CF_3B3C_2365_41C7_8624F1DD8456",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 162.08,
  "x": 1009.07,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_2_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1724.12,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 152.75,
  "offsetX": 0
 },
 "image": {
  "x": 1009.07,
  "y": 1724.12,
  "class": "HotspotMapOverlayImage",
  "width": 162.08,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_2.png",
     "width": 85,
     "class": "ImageResourceLevel",
     "height": 80
    }
   ],
   "class": "ImageResource"
  },
  "height": 152.75
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_191E66E1_3B3C_6F5D_41BC_ADAB8C1803B1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 162.08,
  "x": 2743.99,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_3_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1415.77,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 152.75,
  "offsetX": 0
 },
 "image": {
  "x": 2743.99,
  "y": 1415.77,
  "class": "HotspotMapOverlayImage",
  "width": 162.08,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_3.png",
     "width": 85,
     "class": "ImageResourceLevel",
     "height": 80
    }
   ],
   "class": "ImageResource"
  },
  "height": 152.75
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_19C474EF_3B3C_6325_41C9_407F58842DCD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 162.08,
  "x": 2320.72,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_4_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1253.23,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 152.75,
  "offsetX": 0
 },
 "image": {
  "x": 2320.72,
  "y": 1253.23,
  "class": "HotspotMapOverlayImage",
  "width": 162.08,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_4.png",
     "width": 85,
     "class": "ImageResourceLevel",
     "height": 80
    }
   ],
   "class": "ImageResource"
  },
  "height": 152.75
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_185B7592_3B3C_2DFF_41CC_313207F9A8DA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 162.08,
  "x": 2629.04,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_5_map.gif",
     "width": 17,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 3087.03,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 152.75,
  "offsetX": 0
 },
 "image": {
  "x": 2629.04,
  "y": 3087.03,
  "class": "HotspotMapOverlayImage",
  "width": 162.08,
  "image": {
   "levels": [
    {
     "url": "media/map_2BCAF024_31CC_27AF_41BD_63BD9E2A62BE_HS_5.png",
     "width": 85,
     "class": "ImageResourceLevel",
     "height": 80
    }
   ],
   "class": "ImageResource"
  },
  "height": 152.75
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_18F2C89D_3B3C_23E5_4177_CBC54DCA57DC",
 "data": {
  "label": "Image"
 }
},
{
 "media": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_33B9FF03_3C2F_47C2_41C3_EE94A56DBB16, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_33B9FF03_3C2F_47C2_41C3_EE94A56DBB16",
 "camera": "this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_camera"
},
{
 "media": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_33B6CF04_3C2F_47C6_41C3_003EF8538316, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_33B6CF04_3C2F_47C6_41C3_003EF8538316",
 "camera": "this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_camera"
},
{
 "media": "this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_33B7AF05_3C2F_47C6_4180_17335FF8BF05, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_33B7AF05_3C2F_47C6_4180_17335FF8BF05",
 "camera": "this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_camera"
},
{
 "media": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_33B4FF05_3C2F_47C6_41C7_A5C3BD426933, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_33B4FF05_3C2F_47C6_41C7_A5C3BD426933",
 "camera": "this.panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_camera"
},
{
 "media": "this.panorama_205A4B18_31C5_D967_41C6_99E6474304B8",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_33B57F06_3C2F_47C2_41C4_FF2B4F0DE417, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_33B57F06_3C2F_47C2_41C4_FF2B4F0DE417",
 "camera": "this.panorama_205A4B18_31C5_D967_41C6_99E6474304B8_camera"
},
{
 "media": "this.panorama_200C103A_31C4_6798_41B1_A14526FEE056",
 "player": "this.MainViewerPanoramaPlayer",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_33B2CF06_3C2F_47C2_41CB_C24ED4EBC9F3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "class": "PanoramaPlayListItem",
 "id": "PanoramaPlayListItem_33B2CF06_3C2F_47C2_41CB_C24ED4EBC9F3",
 "camera": "this.panorama_200C103A_31C4_6798_41B1_A14526FEE056_camera"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.19,
   "hfov": 13.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4FEB39_3B44_652D_41A0_CFABC49D322E",
   "pitch": -10.99,
   "yaw": 100.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.97,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4, this.camera_34B8E627_3B4C_2F25_41C5_A7473C856B78); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2786BA21_3B5B_E6DC_41AC_0E5C0FDBAC3E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.21,
   "hfov": 14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B4F6B39_3B44_652D_41C2_CB363D0186E2",
   "pitch": -10.24,
   "yaw": -85.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2021D564_31C4_29AF_41BD_5274F2767734, this.camera_2C609FD7_3C2F_4642_4190_01F9C32CC1B5); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_26082768_3B44_2D2B_41B7_4C658CC170BF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.21,
   "hfov": 14.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B455B2C_3B44_6524_417B_0E218D390916",
   "pitch": -5.46,
   "yaw": -85.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_20191832_31C4_67AB_41B1_939E2E210B00, this.camera_2C1F5FB6_3C2F_46C2_41C7_76443E945ACF); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2BC6D199_3B4C_25ED_41BF_B55B173E3AEF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.39,
   "hfov": 14.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B448B2C_3B44_6524_41BF_50ECFD741C93",
   "pitch": -4.46,
   "yaw": 90.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227, this.camera_2C11DFC7_3C2F_4642_41CD_F2C853DA8784); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2A12440B_3B4D_E2ED_41C5_1301E0D506C5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.27,
   "hfov": 14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3485D602_3B4C_2EDF_41B3_96D28702AD3D",
   "pitch": -5.21,
   "yaw": 13.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200B21CE_31C4_28FB_41BF_E8A09B804172, this.camera_2D6610C1_3C2F_7ABF_41B7_00BC89C3EEA1); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_35D06A71_3B3C_273D_41B9_885043A38AE8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.41,
   "hfov": 14.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B45FB2C_3B44_6524_41C0_3589433BD356",
   "pitch": -4.21,
   "yaw": -125.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4, this.camera_2D1790B4_3C2F_7AC5_41A7_77BC18E1999E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2B58FDF0_3B4C_DD3C_41C8_A9EA5711E7FD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.83,
   "hfov": 14.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B452B2C_3B44_6524_41B4_6DFC99F3A7AB",
   "pitch": -6.47,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2A23C4B4_3B4F_E33B_41B0_04A22F771CC8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "class": "ViewerArea",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "90%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.89,
   "hfov": 14.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B470B2D_3B44_6524_419A_78F95824B0FD",
   "pitch": -4.71,
   "yaw": -69.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.18,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_20216505_31C4_2969_4122_39B5AFCA2AC0, this.camera_33F2AF46_3C2F_4645_41B6_EA3D10DBD91E); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2841EE28_3B45_DF2B_41C5_4615C3D7E701",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.2,
   "hfov": 14.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1B474B2D_3B44_6524_4193_687CEFF2EEBA",
   "pitch": -5.46,
   "yaw": 102.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_28D16F0E_3B44_3EE7_41C2_844AF8290947",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.33,
   "hfov": 14.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_20E0D33D_3213_FE57_41C3_C648831332A8",
   "pitch": -5.21,
   "yaw": -6.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_200EC483_31C4_2F69_418F_E1138D574644, this.camera_2CFFE05E_3C2F_7A42_41CC_4023D722F422); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2211A505_3210_FA37_4142_B4E59BC09C6C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.67,
   "hfov": 11.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_23638E2B_3211_E673_41C1_B39457313265",
   "pitch": -5.09,
   "yaw": -179.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.17,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_20191832_31C4_67AB_41B1_939E2E210B00, this.camera_2CCE406A_3C2F_7A42_41C7_17989C0C08B3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_2306E243_3210_7E33_41B8_4ACC9EC08708",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.22,
   "hfov": 4.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.23
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0C1BAE5D_3B44_7F65_4182_DFBEABA942A7",
   "pitch": -2.23,
   "yaw": 20.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.31,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_089A2815_3B7C_22E5_41C2_A9A3C60A74AA",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_F59EA3FC_AC15_152A_41D3_A68AE3523ABE",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_FDD61685_E553_9592_41C0_A2A83A363C32"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 50,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderColor": "#000000",
 "class": "Container",
 "propagateClick": false,
 "height": "69.727%",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 15,
 "borderSize": 2,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Floor Plan Container"
 },
 "verticalAlign": "middle",
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_8F88A174_B17F_DAF3_41E3_9385916D5A3E",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "19.78%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Middle"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_8E56560D_B147_6613_41E3_B9F30B1AF2C2",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_8886944C_AC33_7318_41AB_EB089F4691B5"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "5.25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Bottom"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "id": "ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856",
 "left": "10%",
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "right": "25%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "class": "ThumbnailList",
 "propagateClick": false,
 "verticalAlign": "top",
 "itemOpacity": 1,
 "scrollBarWidth": 10,
 "playList": "this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "rollOverItemLabelFontSize": "0.78vw",
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "selectedItemLabelFontSize": "0.72vw",
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 60,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": "0.84vw",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailShadowBlurRadius": 8,
 "paddingRight": 20,
 "itemLabelGap": 9,
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "12%",
 "bottom": "10%",
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 5,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailBorderRadius": 50
},
{
 "horizontalAlign": "center",
 "id": "IconButton_125D50F6_3BCC_6327_41BE_15CFA74811CB",
 "backgroundOpacity": 0,
 "width": 38,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_125D50F6_3BCC_6327_41BE_15CFA74811CB_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 38,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_125D50F6_3BCC_6327_41BE_15CFA74811CB_pressed.png",
 "paddingBottom": 0,
 "click": "this.openLink('https://www.youtube.com/watch?v=hpB1KlyBIYA', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_125D50F6_3BCC_6327_41BE_15CFA74811CB.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button4076"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_A7977343_B17D_3EDA_41C0_F47328C07981",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_A7975343_B17D_3EDA_41BF_8955CDC2EDAB",
  "this.IconButton_A7974343_B17D_3EDA_41D5_38B6E5F68E61",
  "this.IconButton_A797B343_B17D_3EDA_41CA_0171986F3D96"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "width": "11.36%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 20,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container27666"
 },
 "shadow": false
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4B6B34_3B44_653B_4184_C6D03832EE83",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200A2DCB_31C4_38F9_41AC_4D7C5AE701C0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4AFB35_3B44_6525_41C9_DFF2C594056A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4A3B35_3B44_6525_41A3_5B069DF54B9E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2045070C_31C4_297F_41C8_EA9B6110D4B0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4A4B35_3B44_6525_4190_C66E80CA97F9",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4D8B36_3B44_6527_41C8_F441ED875003",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200C103A_31C4_6798_41B1_A14526FEE056_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4D1B36_3B44_6527_41C1_09E915272FC5",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B44CB2C_3B44_6524_41A9_C208E5915049",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_23F46B9C_31C4_389F_41C5_1DAF8290B227_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B447B2C_3B44_6524_41A7_70C89C639B04",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B48FB2E_3B44_6524_41C2_BED9FD95568B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205A4B18_31C5_D967_41C6_99E6474304B8_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B483B2E_3B44_6524_41C9_07B7348FC19E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B479B2D_3B44_6524_41A3_9A1613F121EC",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20216505_31C4_2969_4122_39B5AFCA2AC0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B47DB2D_3B44_6524_41B0_5A672E70AB16",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4C2B38_3B44_652B_41CA_9493AA412F91",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2021D564_31C4_29AF_41BD_5274F2767734_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4FBB38_3B44_652B_418D_8DEAF5E077B4",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B485B2F_3B44_6520_418A_809F7D3605D0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4B8B34_3B44_653B_41C5_E22053C4F719",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200EC483_31C4_2F69_418F_E1138D574644_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4B1B34_3B44_653B_41C8_D9835BA2C92A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B46DB2D_3B44_6524_41CB_D99AB776FDA8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B461B2D_3B44_6524_41A9_80CD79EA8420",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205A0891_31C5_E769_41C1_914A6AA637DA_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B464B2E_3B44_6524_41C1_C92EF22DB298",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B49FB2E_3B44_6524_41CC_690AA09E50FB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B491B2E_3B44_6524_41CD_AE3A0A47C583",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205EE1FA_31C5_E89B_419E_56F4C4CD6AD3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B495B2E_3B44_6524_41B0_802FE3B211E6",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_03E33E61_3B44_7F5D_41C1_16A173DE6532",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200142D4_31C4_68EF_41B9_4F280BB62A4D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4DCB37_3B44_6525_41A5_20F516E91B60",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4D4B36_3B44_6527_4191_1420F00C12AE",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20009952_31C4_79EB_41B9_5046E9D8C3E9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4CEB37_3B44_6525_41CA_3E8DDDEC9992",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4FEB39_3B44_652D_41A0_CFABC49D322E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_205CBEA0_31C4_38A7_41C1_219FD8E7CFA2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B4F6B39_3B44_652D_41C2_CB363D0186E2",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B455B2C_3B44_6524_417B_0E218D390916",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_200B21CE_31C4_28FB_41BF_E8A09B804172_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B448B2C_3B44_6524_41BF_50ECFD741C93",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3485D602_3B4C_2EDF_41B3_96D28702AD3D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B45FB2C_3B44_6524_41C0_3589433BD356",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20191832_31C4_67AB_41B1_939E2E210B00_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B452B2C_3B44_6524_41B4_6DFC99F3A7AB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B470B2D_3B44_6524_419A_78F95824B0FD",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_20066F3A_31C5_D99B_41C4_DEAA1DCFFA36_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1B474B2D_3B44_6524_4193_687CEFF2EEBA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_20E0D33D_3213_FE57_41C3_C648831332A8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_23638E2B_3211_E673_41C1_B39457313265",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_22F1BEE4_31C4_78AF_4190_51CF5B92C8B4_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0C1BAE5D_3B44_7F65_4182_DFBEABA942A7",
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_FDD61685_E553_9592_41C0_A2A83A363C32",
 "backgroundOpacity": 0,
 "children": [
  "this.DropDown_EAAD8681_E54D_95D1_41D7_9D484A259990",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 50,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderColor": "#000000",
 "class": "Container",
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "height": "80%",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 15,
 "borderSize": 2,
 "contentOpaque": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Floor Plan Con 01"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E",
  "this.Container_23BF7E02_AC1D_72AA_41DA_22E1695AF185"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Contact Us Compo"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0,
 "id": "Container_8886944C_AC33_7318_41AB_EB089F4691B5",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829",
  "this.Button_B5551DB1_A8AE_1192_41E0_9815EC3E8FD9",
  "this.Button_BAFF9AB7_AC6D_3778_41DD_EF9D1C21D15E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Button CU and FP"
 },
 "shadow": false
},
{
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "fontFamily": "Arial",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpFontColor": "#FFFFFF",
 "id": "DropDown_EAAD8681_E54D_95D1_41D7_9D484A259990",
 "backgroundOpacity": 0.2,
 "data": {
  "name": "DropDown1204"
 },
 "width": "100%",
 "popUpBackgroundOpacity": 0.2,
 "popUpShadow": false,
 "popUpFontColor": "#000000",
 "height": "8%",
 "paddingRight": 15,
 "pressedBackgroundColor": [
  "#003366"
 ],
 "paddingLeft": 15,
 "borderRadius": 4,
 "class": "DropDown",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#FFFFFF",
 "minHeight": 20,
 "popUpShadowBlurRadius": 6,
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.DropDown_EAAD8681_E54D_95D1_41D7_9D484A259990_playlist",
 "minWidth": 200,
 "arrowColor": "#FFFFFF",
 "fontSize": "1vw",
 "popUpShadowOpacity": 0,
 "popUpBorderRadius": 0,
 "popUpGap": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "fontStyle": "normal",
 "borderSize": 2,
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#003366",
 "pressedRollOverBackgroundColor": [
  "#003366",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#003366"
 ],
 "selectedPopUpFontColor": "#FFFFFF",
 "pressedRollOverBackgroundColorRatios": [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
 ],
 "shadow": false,
 "selectedPopUpBackgroundColor": "#003366",
 "fontWeight": "bold",
 "textDecoration": "none",
 "popUpBackgroundColor": "#FFFFFF",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 616,
 "maxWidth": 900,
 "id": "IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E",
 "backgroundOpacity": 0,
 "width": "81.529%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E_rollover.png",
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9.get('visible')){ this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_217F3EB5_ACF5_33E4_41E2_608DADB8CC7E.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Contact"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_23BF7E02_AC1D_72AA_41DA_22E1695AF185",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48",
  "this.IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2",
  "this.IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "20%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 12,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Left Contact Us"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829",
 "backgroundOpacity": 0,
 "width": "13%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_rollover.png",
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856.get('visible')){ this.setComponentVisibility(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856, true, 0, null, null, false) } else { this.setComponentVisibility(this.ThumbnailList_B7480756_AD90_6B13_41A9_86B89E4AD856, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button27669"
 },
 "pressedRollOverIconURL": "skin/IconButton_91D696C6_B1C5_2631_41D0_5016C4C73829_pressed_rollover.png",
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "rollOverBackgroundOpacity": 0.8,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Contact Info info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_B5551DB1_A8AE_1192_41E0_9815EC3E8FD9",
 "backgroundOpacity": 0.15,
 "rollOverShadow": false,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "gap": 15,
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#003366"
 ],
 "paddingLeft": 0,
 "borderRadius": 5,
 "class": "Button",
 "width": "44.1%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "click": "if(!this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9.get('visible')){ this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, true, 0, this.effect_2745EDF7_ACED_1161_41CE_8D7449621D35, 'showEffect', false) } else { this.setComponentVisibility(this.Container_26D3DDC5_AC15_11AC_41E2_6BB5E3BD07D9, false, 0, this.effect_2745FDF7_ACED_1161_41D1_B5EC4D857875, 'hideEffect', false) }",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#FFFFFF",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "85.65%",
 "fontSize": "1vw",
 "pressedRollOverBackgroundColor": [
  "#003366"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 2,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "ABOUT ME",
 "pressedBackgroundOpacity": 1,
 "pressedFontSize": "1vw",
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_BAFF9AB7_AC6D_3778_41DD_EF9D1C21D15E",
 "backgroundOpacity": 0.15,
 "width": "44.1%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003366"
 ],
 "gap": 5,
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#003366"
 ],
 "paddingLeft": 0,
 "borderRadius": 5,
 "pressedRollOverFontSize": "1vw",
 "class": "Button",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "click": "if(!this.Container_FDD61685_E553_9592_41C0_A2A83A363C32.get('visible')){ this.setComponentVisibility(this.Container_FDD61685_E553_9592_41C0_A2A83A363C32, true, 0, this.effect_F2103674_E554_F572_41B1_203ED4CE50E6, 'showEffect', false) } else { this.setComponentVisibility(this.Container_FDD61685_E553_9592_41C0_A2A83A363C32, false, 0, this.effect_F210C674_E554_F572_41E1_4BD5DFC260E8, 'hideEffect', false) }",
 "layout": "horizontal",
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#FFFFFF",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "85.65%",
 "fontSize": "1vw",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 2,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "FLOOR PLAN",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floor Plan"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_rollover.png",
 "propagateClick": false,
 "height": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48_pressed.png",
 "paddingBottom": 0,
 "click": "this.openLink('https://www.facebook.com/dany.rith', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_D5B1805E_AC13_0F42_41D2_CC3FD0439B48.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Website"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2_rollover.png",
 "propagateClick": false,
 "height": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2_pressed.png",
 "paddingBottom": 0,
 "click": "this.openLink('https://www.behance.net/danyrith', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_D64C3B69_AC13_714E_41C2_32E6C6ABE2F2.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Map"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300_rollover.png",
 "propagateClick": false,
 "height": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300_pressed.png",
 "paddingBottom": 0,
 "click": "this.openLink('https://www.linkedin.com/in/dany-rith-06549017a/', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_DEE538D8_AC15_3F47_41B7_DF462598A300.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Linkin"
 },
 "cursor": "hand"
}],
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); }
 },
 "buttonToggleFullscreen": "this.IconButton_BD225E9E_B273_D96C_41A9_C0F962709F6A",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player3105"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
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
